# MVP User Stories

## Priority Scale

- `P0`: required for pilot MVP
- `P1`: important in MVP if capacity allows
- `P2`: post-MVP hardening or optimization

## EPIC-01 IDR Intake

### US-01 Create Audit Case

- title: Create an audit case with required metadata
- user story: As an audit lead, I want to create a case with jurisdiction, authority, legal entity, audit period, and owner so that the IDR response starts from a structured record.
- acceptance criteria:
  - Authorized users can create a case from the UI.
  - Required fields are validated before save.
  - Each case receives a unique case identifier.
  - Created case records are visible in a case list and detail view.
- priority: P0
- dependencies: None

### US-02 Upload IDR Source Documents

- title: Upload one or more source notices into a case
- user story: As a case owner, I want to upload IDR documents and preserve immutable originals so that downstream extraction has a trusted source.
- acceptance criteria:
  - Users can upload PDF and image-based notice files.
  - Files are stored with immutable references and upload timestamps.
  - Upload status and file metadata are visible on the case.
  - Upload failures return actionable error messages.
- priority: P0
- dependencies: US-01

## EPIC-02 OCR and Parsing

### US-03 Generate OCR Output

- title: Convert uploaded notices into machine-readable content
- user story: As an analyst, I want the system to extract text, layout spans, and tables from uploaded notices so that questions can be identified accurately.
- acceptance criteria:
  - OCR runs automatically after document upload or via manual trigger.
  - Output includes extracted text, page references, and confidence metadata.
  - Parsed document artifacts are persisted per source file version.
  - OCR status is visible on the case timeline.
- priority: P0
- dependencies: US-02

### US-04 Retry or Correct Low-Quality OCR

- title: Re-run OCR when quality is insufficient
- user story: As an analyst, I want to retry OCR or mark low-confidence extraction for correction so that bad scans do not poison downstream AI stages.
- acceptance criteria:
  - Low-confidence pages are flagged for review.
  - Users can re-run OCR on a document.
  - Prior OCR attempts remain in history.
  - Downstream stages can be blocked until OCR is accepted.
- priority: P1
- dependencies: US-03

## EPIC-03 Question Extraction

### US-05 Extract Candidate Questions

- title: Identify candidate questions and sub-questions
- user story: As a tax analyst, I want the system to detect questions in the notice so that I do not have to manually rewrite every request.
- acceptance criteria:
  - The system produces candidate questions and optional sub-questions.
  - Each candidate shows source text, page reference, and extraction confidence.
  - Each confirmed question receives a stable identifier.
  - Extraction results are persisted for review.
- priority: P0
- dependencies: US-03

### US-06 Confirm and Edit Question Set

- title: Review and correct extracted questions
- user story: As a tax analyst, I want to confirm, split, merge, add, edit, or remove extracted questions so that the case record reflects the real request set.
- acceptance criteria:
  - Users can edit extracted questions before confirmation.
  - The platform supports split and merge operations.
  - Manual edits are versioned with user and timestamp.
  - Only confirmed questions continue into classification and retrieval.
- priority: P0
- dependencies: US-05

## EPIC-04 Intent Classification

### US-07 Classify Question Intent and Risk

- title: Label question intent, risk, and sensitivity
- user story: As a reviewer, I want each confirmed question classified by intent and risk so that higher-risk requests get the right workflow and oversight.
- acceptance criteria:
  - The platform assigns intent, risk, and review sensitivity labels to each confirmed question.
  - Confidence scores and model rationale are stored.
  - Low-confidence classifications are flagged for human review.
  - Labels are editable by authorized users.
- priority: P0
- dependencies: US-06

## EPIC-05 Ontology Mapping

### US-08 Map Questions to Canonical Metadata

- title: Normalize questions into ontology dimensions
- user story: As a case team member, I want each question mapped to canonical dimensions such as entity, tax topic, process, system, and evidence type so that retrieval and execution become structured.
- acceptance criteria:
  - Each question can store one or more ontology mappings.
  - Mappings include confidence and rationale metadata.
  - Users can override suggested mappings.
  - Approved mappings are available to retrieval and task generation.
- priority: P0
- dependencies: US-07

## EPIC-06 Historical Precedent Retrieval

### US-09 Retrieve Similar Prior Responses

- title: Find relevant precedent for a confirmed question
- user story: As an analyst, I want to see similar historical questions, accepted responses, and evidence packs so that I can reuse proven patterns.
- acceptance criteria:
  - Users can open ranked precedent results from a question detail view.
  - Results combine semantic, keyword, and metadata-aware retrieval.
  - Each result shows why it matched.
  - Access is limited to authorized corpora.
- priority: P0
- dependencies: US-08

### US-10 Filter and Curate Retrieved Precedent

- title: Refine precedent results using metadata filters
- user story: As an analyst, I want to filter precedent by authority, jurisdiction, entity, and topic so that I can narrow to the most relevant prior work.
- acceptance criteria:
  - Metadata filters are available in the retrieval UI.
  - Users can save selected precedent items to the case.
  - Saved precedent remains linked to the question and later strategy versions.
  - User usefulness feedback can be captured.
- priority: P1
- dependencies: US-09

## EPIC-07 Response Strategy

### US-11 Generate Structured Response Strategy

- title: Create a response strategy before drafting
- user story: As an audit lead, I want a structured strategy for each question so that drafting begins from an evidence-based plan rather than an ad hoc answer.
- acceptance criteria:
  - Strategy includes interpreted request, regulator concern, response objective, evidence plan, systems, owners, approvals, and risk flags.
  - Retrieved precedent can inform the strategy.
  - Strategy is persisted as a structured object, not only narrative text.
  - Strategy generation can be re-run with version history.
- priority: P0
- dependencies: US-09

### US-12 Review and Approve Strategy

- title: Accept or revise the proposed strategy
- user story: As an audit lead, I want to review and edit the strategy so that downstream tasks reflect human-approved execution intent.
- acceptance criteria:
  - Reviewers can approve, reject, edit, or comment on the strategy.
  - Strategy approval status is visible per question.
  - Rejected strategy versions remain in history.
  - Task generation is gated on approved or accepted strategy.
- priority: P0
- dependencies: US-11

## EPIC-08 Task Orchestration

### US-13 Generate Workflow Tasks

- title: Convert strategy into dependency-aware tasks
- user story: As a case owner, I want the approved strategy converted into executable tasks so that the response team can coordinate work through a visible workflow.
- acceptance criteria:
  - Each task includes title, description, expected output, owner, status, and dependencies.
  - Tasks can be linked to one or more questions.
  - The platform supports blocked and rework states.
  - The generated workflow graph is persisted and versioned.
- priority: P0
- dependencies: US-12

### US-14 Manage Task Execution

- title: Track task ownership and blockers
- user story: As a case owner, I want to assign tasks, reassign work, and monitor blockers so that the team can keep the case moving toward submission.
- acceptance criteria:
  - Owners can be assigned or changed.
  - Users can update task status and add blocker notes.
  - Case views show overdue and blocked items.
  - Task activity is logged in the audit trail.
- priority: P0
- dependencies: US-13

## EPIC-09 Evidence Collection

### US-15 Upload and Link Evidence

- title: Attach evidence artifacts to questions and tasks
- user story: As an analyst, I want to upload and link evidence artifacts so that each response can be supported by governed source material.
- acceptance criteria:
  - Users can upload common evidence formats such as PDF, spreadsheet, image, and document exports.
  - Evidence can be linked to questions, tasks, and strategy requirements.
  - Required metadata includes type, source system, entity, period, and owner.
  - Evidence versions are preserved.
- priority: P0
- dependencies: US-13

### US-16 View Evidence Repository

- title: Browse case evidence with metadata and lineage
- user story: As a reviewer, I want a structured evidence repository so that I can understand what has been collected and what is still missing.
- acceptance criteria:
  - Evidence list supports search and metadata filters.
  - Users can see upload history and linked objects.
  - Orphaned evidence can be identified.
  - Evidence access respects case authorization.
- priority: P1
- dependencies: US-15

## EPIC-10 Evidence Validation

### US-17 Evaluate Evidence Sufficiency

- title: Check whether the evidence set is sufficient to answer a question
- user story: As a reviewer, I want the platform to assess completeness and fit of the evidence set so that unsupported drafting is reduced.
- acceptance criteria:
  - The system evaluates completeness, relevance, freshness, entity match, and period match.
  - Validation outputs actionable findings and rationale.
  - Findings are stored against the question and evidence set version.
  - Validation can be rerun after new evidence is added.
- priority: P0
- dependencies: US-15

### US-18 Flag Contradictions and Gaps

- title: Detect missing support and contradictory artifacts
- user story: As a reviewer, I want contradictions and unresolved gaps surfaced before drafting so that risk is reduced prior to approval.
- acceptance criteria:
  - The platform flags unsupported claims, contradiction risks, missing approvals, and unresolved dependencies.
  - Findings can be assigned for resolution.
  - Draft generation can be gated on critical unresolved findings.
  - Overrides are logged with reviewer rationale.
- priority: P0
- dependencies: US-17

## EPIC-11 Draft Response Generation

### US-19 Generate Draft Response

- title: Create a question-level draft with citations
- user story: As an analyst, I want the system to draft a response grounded in approved strategy and evidence so that I can start from a high-quality first pass.
- acceptance criteria:
  - Draft output includes narrative answer, evidence references, caveats, and unresolved assumptions where applicable.
  - Drafting uses approved or accepted strategy versions.
  - Traceability is maintained between draft claims and supporting evidence.
  - Draft versions are persisted.
- priority: P0
- dependencies: US-18

## EPIC-12 Human Review

### US-20 Review and Approve Draft

- title: Route drafts through human review stages
- user story: As an audit lead or legal reviewer, I want to approve, reject, edit, or comment on drafts so that no response is submitted without accountable review.
- acceptance criteria:
  - Role-based reviewers can approve, reject, edit, and comment.
  - Review outcomes are captured with user, timestamp, and rationale.
  - Rework requests route back to the appropriate task or evidence stage.
  - Version history is preserved across revisions.
- priority: P0
- dependencies: US-19

### US-21 Maintain Approval History

- title: Preserve review decisions across versions
- user story: As a compliance stakeholder, I want every strategy, evidence, and draft decision recorded so that the case has a defensible audit trail.
- acceptance criteria:
  - Decision history is visible for strategy, evidence, draft, and package stages.
  - Every decision records actor, action, timestamp, and comments.
  - Historical versions remain accessible.
  - Exported package records reference the approved versions used.
- priority: P0
- dependencies: US-12, US-18, US-20

## EPIC-13 Submission Package

### US-22 Assemble Submission Package

- title: Build a pilot-ready package from approved responses
- user story: As a case owner, I want the system to assemble approved responses and attachments into a controlled package so that I can prepare a final submission efficiently.
- acceptance criteria:
  - Users can generate a package from approved question responses.
  - The package includes narrative responses, attachment index, and review metadata.
  - Included files and question coverage are visible before export.
  - Package versions are persisted.
- priority: P0
- dependencies: US-20

### US-23 Export Submission Package

- title: Export a controlled output for pilot use
- user story: As a case owner, I want to export the package in a governed format so that it can be reviewed and transmitted through existing pilot processes.
- acceptance criteria:
  - Users can export the package in at least one controlled output format.
  - Export events are logged with actor and timestamp.
  - Exported artifacts remain linked to the originating package version.
  - Missing required approvals block export.
- priority: P0
- dependencies: US-22

## EPIC-14 Admin / Configuration

### US-24 Manage Platform Configuration

- title: Configure prompts, templates, taxonomies, and thresholds
- user story: As a platform administrator, I want to manage key configurations without code changes so that the pilot can be tuned safely over time.
- acceptance criteria:
  - Authorized admins can edit controlled settings.
  - Config changes are versioned and auditable.
  - Prompt and threshold changes can be activated by environment or feature flag.
  - Invalid configurations are rejected with validation messages.
- priority: P1
- dependencies: US-07, US-08, US-09, US-11

## EPIC-15 Security / Audit Trail

### US-25 Enforce Role-Based Access and Audit Logging

- title: Protect case data and record all sensitive actions
- user story: As a compliance stakeholder, I want access controls and detailed audit logs so that regulated audit data is handled defensibly.
- acceptance criteria:
  - Case and admin functions are protected by role-based permissions.
  - Sensitive actions are recorded in immutable audit logs.
  - Users can view only cases and artifacts they are authorized to access.
  - Access failures are logged for monitoring.
- priority: P0
- dependencies: US-01
