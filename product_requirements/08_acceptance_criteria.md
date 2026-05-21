# Acceptance Criteria

## AC-1 Intake and OCR

- Given an authorized user uploads an IDR PDF, when intake is completed, then the system creates a case record, stores the original file, and starts OCR and parsing.
- Given OCR completes, when the user opens the case, then extracted text and source-page traceability are available for review.

## AC-2 Question Extraction

- Given a parsed IDR, when question extraction runs, then the system presents candidate questions with unique identifiers, source text, and confidence.
- Given a reviewer adjusts the candidate list, when they confirm the question set, then the confirmed questions become the active case questions.

## AC-3 Classification and Ontology Mapping

- Given a confirmed question, when analysis runs, then the system assigns intent, risk, and ontology metadata with visible confidence or rationale indicators.
- Given low-confidence or high-risk results, when the reviewer views the question, then the system prompts for human confirmation before downstream progression.

## AC-4 Precedent Retrieval and Strategy

- Given a confirmed question, when retrieval runs, then the system returns relevant prior questions or responses from authorized sources only.
- Given retrieved context is available, when strategy generation runs, then the system produces a structured strategy object before any draft response is generated.

## AC-5 Task Orchestration

- Given an accepted strategy, when workflow generation runs, then the system creates tasks with owners, dependencies, expected outputs, and statuses.
- Given a dependency is incomplete, when a downstream task is viewed, then the task is shown as blocked rather than ready.

## AC-6 Evidence Collection and Validation

- Given a task requires support, when a contributor uploads evidence, then the system stores the artifact with metadata and links it to the relevant question or task.
- Given evidence is incomplete, stale, contradictory, or misaligned, when validation runs, then the system records explicit findings and prevents silent progression.

## AC-7 Drafting and Review

- Given sufficient or accepted evidence exists, when draft generation runs, then the system creates a question-level response with citations, caveats, and traceable support.
- Given a reviewer rejects or returns a draft, when the action is saved, then the system records the decision and routes the work back to the appropriate stage.

## AC-8 Package Assembly

- Given all required question responses are approved, when package assembly runs, then the system creates a submission package containing approved responses and referenced attachments.
- Given a package is exported, when the export completes, then the audit record includes package version, timestamp, and approval history.

## AC-9 Audit Record and Governance

- Given any material action occurs, when it affects a case artifact, then the system records the change in the audit record.
- Given a user lacks access to a case, question, or evidence set, when they attempt retrieval or viewing, then the system denies access consistently with authorization rules.

## AC-10 Product Positioning Integrity

- Given the pilot is demonstrated to stakeholders, when the product flow is reviewed, then the primary experience is a case workbench with workflow, evidence, review, and package controls rather than a chatbot-only interface.
