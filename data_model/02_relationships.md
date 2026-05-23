# Relationships

## Primary Cardinalities

| From | Relationship | To | Cardinality | Notes |
| --- | --- | --- | --- | --- |
| `IDR` | contains | `Question` | 1:N | An IDR contains one or more extracted questions |
| `Question` | has | `SubQuestion` | 1:N | Only for compound or decomposed requests |
| `Question` | has current | `IntentClassification` | 1:1 | One active classification, many historical versions |
| `Question` | has current | `OntologyMapping` | 1:1 | One active mapping, many historical versions |
| `Question` | references | `HistoricalPrecedent` | 1:N | Ranked retrieval candidates |
| `Question` | has current | `ResponseStrategy` | 1:1 | One active strategy, many historical versions |
| `ResponseStrategy` | generates | `Task` | 1:N | Workflow tasks come from strategy |
| `Task` | depends on | `Task` | N:N | DAG structure |
| `Task` | collects or produces | `Evidence` | 1:N | Evidence can also be manually added |
| `Question` | uses | `Evidence` | N:N | Evidence can support multiple questions |
| `Question` | has | `EvidenceValidation` | 1:N | Multiple validation runs across time |
| `Question` | has | `DraftResponse` | 1:N | Versioned drafts |
| `DraftResponse` | reviewed by | `Review` | 1:N | Multiple comments or decisions |
| `ResponseStrategy` | reviewed by | `Review` | 1:N | Approval gate before execution in some flows |
| `EvidenceValidation` | reviewed by | `Review` | 1:N | Human override path |
| `SubmissionPackage` | includes | `DraftResponse` | 1:N | Approved responses only |
| `SubmissionPackage` | includes | `Evidence` | 1:N | Packaged attachments |
| `IDR` | has | `SubmissionPackage` | 1:N | Package versions over time |
| `*` | emits | `AuditTrailEvent` | 1:N | Every material change should be logged |

## Relationship Narrative

### IDR to Question

`IDR` is the case-level envelope. `Question` is the actionable unit for classification, strategy, evidence, drafting, and review.

### Question to SubQuestion

`SubQuestion` exists to preserve decomposition of multipart requests without losing the original top-level phrasing. This supports parallel evidence collection and finer-grained planning.

### Question to Classification and Ontology

`IntentClassification` explains what the authority is asking for. `OntologyMapping` explains where the request belongs in the enterprise model and which systems, teams, and evidence classes are relevant.

### Question to HistoricalPrecedent

`HistoricalPrecedent` is not necessarily canonical truth. It is a retrieval result used to accelerate strategy and drafting, subject to review.

### Question to ResponseStrategy to Task

`ResponseStrategy` translates understanding into an execution plan. `Task` represents the operational breakdown of that plan, including dependencies and outputs.

### Task and Evidence

Tasks often generate or collect evidence, but evidence may also be uploaded manually or linked from prior work. Because one evidence item may support multiple questions, the logical relationship is many-to-many even if the first implementation stores direct foreign keys for convenience.

### Evidence to EvidenceValidation

`EvidenceValidation` assesses the sufficiency of a specific evidence set relative to a question. New evidence typically triggers a new validation run rather than mutation of the old result.

### DraftResponse to Review

`DraftResponse` is versioned, and each version can receive multiple review interactions. Only approved drafts should flow into a `SubmissionPackage`.

### SubmissionPackage to AuditTrailEvent

Every package assembly, approval, export, and submission step should create `AuditTrailEvent` records because this is the most externally sensitive stage of the lifecycle.

## Recommended Foreign Keys

| Child | Foreign Key | Parent |
| --- | --- | --- |
| `Question` | `idrId` | `IDR.id` |
| `SubQuestion` | `questionId` | `Question.id` |
| `IntentClassification` | `questionId` | `Question.id` |
| `OntologyMapping` | `questionId` | `Question.id` |
| `HistoricalPrecedent` | `questionId` | `Question.id` |
| `ResponseStrategy` | `questionId` | `Question.id` |
| `Task` | `responseStrategyId` | `ResponseStrategy.id` |
| `Task` | `questionId` | `Question.id` |
| `Evidence` | `questionId` | `Question.id` |
| `Evidence` | `taskId` | `Task.id` |
| `EvidenceValidation` | `questionId` | `Question.id` |
| `DraftResponse` | `questionId` | `Question.id` |
| `DraftResponse` | `responseStrategyId` | `ResponseStrategy.id` |
| `SubmissionPackage` | `idrId` | `IDR.id` |

## Join Tables Recommended for Relational Storage

| Join Table | Purpose |
| --- | --- |
| `task_dependencies` | Task DAG edges |
| `question_evidence_links` | Many-to-many support links |
| `validation_evidence_links` | Evidence sets evaluated in a validation run |
| `package_draft_links` | Draft responses included in a package |
| `package_evidence_links` | Evidence items included in a package |

## Lifecycle Coupling Rules

- an `IDR` cannot reach `submitted` until at least one `SubmissionPackage` reaches `submitted`
- a `Question` should not move to `approved` without at least one approved `DraftResponse`
- a `DraftResponse` should not move to `ready_for_review` without supporting evidence citations
- a `SubmissionPackage` should not move to `approved` if any included draft is not approved
- any override of classification, mapping, validation, review, or package state should emit an `AuditTrailEvent`
