# Data Model Tasks

## Core Case Model

- `DATA-001` Define `Case` entity with authority, jurisdiction, audit type, legal entity, audit period, owner, status, and pilot metadata.
- `DATA-002` Define `CaseDocument` entity for uploaded notices with immutable storage reference, checksum, version, and processing status.
- `DATA-003` Define `CaseTimelineEvent` entity for major lifecycle actions and system events.

## OCR and Parsing Model

- `DATA-004` Define `DocumentParse` entity with OCR attempt number, status, parser version, confidence summary, and timestamps.
- `DATA-005` Define `DocumentSpan` model for page, coordinates, text snippet, section label, and traceability anchors.
- `DATA-006` Define `ExtractedTable` model for table metadata and serialized cell structure.

## Question and Classification Model

- `DATA-007` Define `Question` entity with stable ID, source text, normalized text, source page references, and confirmation status.
- `DATA-008` Define `QuestionRelation` model for parent, sub-question, split, and merge lineage.
- `DATA-009` Define `QuestionClassification` model for intent, risk, sensitivity, confidence, rationale, and override metadata.
- `DATA-010` Define `QuestionOntologyMap` model for authority, jurisdiction, tax topic, entity, process, system, evidence type, and owner tags.

## Retrieval and Strategy Model

- `DATA-011` Define `PrecedentItem` canonical index model for historical questions, responses, templates, and evidence packs.
- `DATA-012` Define `RetrievalRun` and `RetrievalResult` models with ranking, scores, filters, and explanation payloads.
- `DATA-013` Define `ResponseStrategy` model with objective, concern, evidence plan, systems, owners, approvals, assumptions, and risk flags.

## Workflow and Evidence Model

- `DATA-014` Define `WorkflowGraph` model for question-level DAG versioning.
- `DATA-015` Define `WorkflowTask` model with owner, status, input, output, SLA, dependencies, and blocker fields.
- `DATA-016` Define `EvidenceArtifact` model with storage reference, type, source system, entity, period, owner, and version lineage.
- `DATA-017` Define polymorphic link table for evidence-to-question, evidence-to-task, and evidence-to-package relationships.
- `DATA-018` Define `EvidenceValidationRun` and `EvidenceFinding` models for sufficiency checks and contradiction flags.

## Draft, Review, and Package Model

- `DATA-019` Define `DraftResponse` model with narrative, citations, caveats, unresolved assumptions, and generation metadata.
- `DATA-020` Define `ReviewDecision` model supporting approve, reject, comment, request-more-evidence, and override actions.
- `DATA-021` Define `SubmissionPackage` model with included questions, attachments, export status, and package lineage.
- `DATA-022` Define `PackageArtifact` model for generated export files and attachment index objects.

## Admin and Audit Model

- `DATA-023` Define `PromptVersion`, `TemplateVersion`, and `ConfigVersion` models.
- `DATA-024` Define `AuditLog` model with actor, action, target object, before/after references, and correlation IDs.
- `DATA-025` Define `UserRoleAssignment` model for case-level and platform-level permissions.
