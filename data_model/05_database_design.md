# Database Design

## Design Goals

The database design should support:

- strong traceability and auditability
- versioned AI outputs
- many-to-many evidence relationships
- workflow orchestration and dependency tracking
- efficient case-level and question-level retrieval
- clear separation between metadata and large file content

## Storage Pattern

Recommended hybrid design:

- relational database for canonical metadata and workflow state
- object storage for source notices, evidence files, exports, and rendered artifacts
- search or vector index for precedent retrieval and semantic lookup
- append-only audit event store for high-fidelity traceability

## Core Relational Tables

| Table | Primary Key | Purpose |
| --- | --- | --- |
| `idrs` | `id` | Case-level container |
| `questions` | `id` | Top-level actionable requests |
| `sub_questions` | `id` | Decomposed child requests |
| `intent_classifications` | `id` | Versioned intent outputs |
| `ontology_mappings` | `id` | Versioned ontology outputs |
| `historical_precedents` | `id` | Retrieved prior examples |
| `response_strategies` | `id` | Strategy versions |
| `tasks` | `id` | Workflow execution units |
| `task_dependencies` | `(task_id, depends_on_task_id)` | Task DAG edges |
| `evidence` | `id` | Evidence metadata |
| `question_evidence_links` | `(question_id, evidence_id)` | Many-to-many support links |
| `evidence_validations` | `id` | Sufficiency runs |
| `validation_evidence_links` | `(validation_id, evidence_id)` | Validation evidence sets |
| `draft_responses` | `id` | Versioned response drafts |
| `reviews` | `id` | Review decisions |
| `submission_packages` | `id` | Final package versions |
| `package_draft_links` | `(package_id, draft_response_id)` | Package contents |
| `package_evidence_links` | `(package_id, evidence_id)` | Attached evidence |
| `audit_trail_events` | `id` | Immutable event log |

## Suggested Relational Columns

### `idrs`

- `id`
- `external_notice_id`
- `authority`
- `jurisdiction`
- `audit_type`
- `tax_period_start`
- `tax_period_end`
- `legal_entity`
- `received_date`
- `owner_team`
- `priority`
- `status`
- `created_at`
- `updated_at`

### `questions`

- `id`
- `idr_id`
- `sequence_number`
- `source_text`
- `normalized_text`
- `is_compound`
- `due_date`
- `status`
- `confirmation_status`
- `current_intent_classification_id`
- `current_ontology_mapping_id`
- `current_response_strategy_id`
- `created_at`
- `updated_at`

### `tasks`

- `id`
- `response_strategy_id`
- `question_id`
- `task_type`
- `title`
- `description`
- `assigned_team`
- `assigned_to`
- `due_date`
- `priority`
- `status`
- `blocker_reason`
- `created_at`
- `updated_at`

### `evidence`

- `id`
- `question_id`
- `task_id`
- `evidence_type`
- `title`
- `description`
- `source_system`
- `source_uri`
- `hash`
- `legal_entity`
- `period_start`
- `period_end`
- `owner_team`
- `sensitivity_level`
- `version`
- `status`
- `created_at`
- `updated_at`

## Versioning Strategy

Use immutable version rows for these tables:

- `intent_classifications`
- `ontology_mappings`
- `response_strategies`
- `evidence_validations`
- `draft_responses`
- optionally `submission_packages`

Pattern:

- create a new row for each material revision
- keep a current pointer on the parent object when useful
- never overwrite approved historical content without preserving prior state

## Index Recommendations

Create indexes for:

- `questions(idr_id, sequence_number)`
- `questions(status)`
- `intent_classifications(question_id, created_at desc)`
- `ontology_mappings(question_id, created_at desc)`
- `response_strategies(question_id, created_at desc)`
- `tasks(question_id, status)`
- `tasks(assigned_team, status, due_date)`
- `evidence(question_id, evidence_type, status)`
- `draft_responses(question_id, version desc)`
- `reviews(target_type, target_id, reviewed_at desc)`
- `submission_packages(idr_id, package_version desc)`
- `audit_trail_events(target_type, target_id, timestamp desc)`
- `audit_trail_events(correlation_id)`

## Referential Integrity Rules

- `questions.idr_id` must reference `idrs.id`
- `sub_questions.question_id` must reference `questions.id`
- `tasks.response_strategy_id` must reference `response_strategies.id`
- `tasks.question_id` must reference `questions.id`
- `draft_responses.question_id` must reference `questions.id`
- `draft_responses.response_strategy_id` must reference `response_strategies.id`
- `submission_packages.idr_id` must reference `idrs.id`

For `reviews`, polymorphism makes strict foreign keys harder. Two practical options:

1. keep `target_type` and `target_id` as application-enforced polymorphic references
2. split reviews into typed tables if stronger relational constraints are required

## Object Storage Design

Store large artifacts outside the relational store:

- source IDR PDFs
- OCR artifacts and extracted tables
- evidence documents and system exports
- rendered response files
- final submission packages

Recommended metadata per stored object:

- object URI
- content hash
- MIME type
- byte size
- source system
- uploader or producing service
- created timestamp

## Audit and Compliance Notes

- `audit_trail_events` should be append-only
- approval transitions should include actor identity and correlation ID
- file integrity should use content hashes
- sensitive evidence should store classification labels and access control bindings
- package exports should be treated as immutable release artifacts

## Example DDL Sketch

```sql
create table idrs (
  id text primary key,
  external_notice_id text,
  authority text not null,
  jurisdiction text not null,
  audit_type text not null,
  tax_period_start date not null,
  tax_period_end date not null,
  legal_entity text not null,
  received_date date not null,
  owner_team text not null,
  priority text,
  status text not null,
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table questions (
  id text primary key,
  idr_id text not null references idrs(id),
  sequence_number integer not null,
  source_text text not null,
  normalized_text text not null,
  is_compound boolean not null,
  due_date date,
  status text not null,
  confirmation_status text not null,
  current_intent_classification_id text,
  current_ontology_mapping_id text,
  current_response_strategy_id text,
  created_at timestamptz not null,
  updated_at timestamptz not null
);

create table evidence (
  id text primary key,
  question_id text references questions(id),
  task_id text,
  evidence_type text not null,
  title text not null,
  source_system text,
  source_uri text,
  hash text,
  version integer not null,
  status text not null,
  created_at timestamptz not null,
  updated_at timestamptz not null
);
```
