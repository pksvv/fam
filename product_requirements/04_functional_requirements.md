# Functional Requirements

## FR-1 Case Intake and IDR Ingestion

- The system shall allow authorized users to create a new audit case and upload one or more IDR source documents.
- The system shall capture case metadata including authority, jurisdiction, audit type, legal entity, audit period, and owner where available.
- The system shall store original source documents and preserve immutable references to the uploaded files.

## FR-2 OCR and Document Understanding

- The system shall run OCR and layout parsing on uploaded IDRs.
- The system shall extract raw text, page references, sections, tables, and document spans.
- The system shall retain traceability between extracted text and the original document location.
- The system shall support retry and manual correction when OCR quality is insufficient.

## FR-3 Question Extraction and Confirmation

- The system shall identify candidate questions and sub-questions within an IDR.
- The system shall assign each confirmed question a unique identifier.
- The system shall capture source page, source text, and extraction confidence for each question.
- The system shall allow users to confirm, edit, split, merge, add, or remove extracted questions.

## FR-4 Intent, Risk, and Ontology Classification

- The system shall classify each question by intent type, risk level, and review sensitivity.
- The system shall map each question to ontology dimensions including authority, jurisdiction, tax topic, legal entity, business process, system, evidence type, owner, and response pattern.
- The system shall display confidence and rationale metadata for AI-generated classifications.

## FR-5 Historical Precedent Retrieval

- The system shall retrieve similar historical questions, accepted responses, evidence packs, templates, and outcome notes from authorized corpora.
- The system shall support hybrid retrieval using semantic similarity, keyword search, and metadata filters.
- The system shall show why retrieved items were matched and how they relate to the current question.

## FR-6 Response Strategy Generation

- The system shall generate a structured response strategy before generating a draft answer.
- The response strategy shall include interpreted request, response objective, likely regulator concern, required evidence, required systems, required teams, required approvals, risk flags, assumptions, and drafting guidance.
- The system shall support human review and editing of the strategy.

## FR-7 Workflow Graph and Task Orchestration

- The system shall convert each approved or accepted strategy into a dependency-aware workflow graph.
- Each task shall include title, description, owner, input, expected output, due date or SLA, status, dependency links, and evidence expectations.
- The system shall support blocked states, escalations, reassignment, and rework loops.
- The system shall provide case-level visibility into task status and outstanding blockers.

## FR-8 Evidence Collection and Repository Management

- The system shall allow users to upload, link, and manage evidence artifacts.
- The system shall capture evidence metadata including type, source system, owner, legal entity, period, version, upload time, and linked question or task.
- The system shall support evidence classes such as PDF, spreadsheet, report, screenshot, contract, policy, email, org chart, system extract, reconciliation file, prior response, and workpaper.

## FR-9 Evidence Sufficiency and Contradiction Detection

- The system shall evaluate whether required evidence is present and aligned to the request.
- The system shall assess freshness, entity match, period match, source credibility, completeness, and unresolved dependencies.
- The system shall identify gaps, contradictions, unsupported claims, or missing approvals.
- The system shall create actionable findings and route them for human resolution.

## FR-10 Draft Response Generation

- The system shall generate question-level draft responses only after strategy and evidence stages are complete enough to proceed.
- Drafts shall include response narrative, evidence references, attachment references, caveats, and unresolved assumption markers where applicable.
- The system shall maintain traceability between draft statements and supporting evidence.

## FR-11 Human Review and Approval

- The system shall provide reviewer workflows for approve, reject, edit, comment, and request-more-evidence actions.
- The system shall support different review roles such as audit lead, tax reviewer, legal reviewer, and final approver.
- The system shall maintain version history and decision history across strategy, evidence, drafts, and packages.

## FR-12 Submission Package Assembly and Export

- The system shall assemble approved responses into a submission package.
- The package shall include narrative responses, attachment indexes, evidence references, and review metadata as required.
- The system shall support export in one or more controlled output formats for pilot use.
- The system shall persist each exported package as part of the audit record.

## FR-13 Audit Record and Traceability

- The system shall maintain a durable system of audit record for case history, versions, approvals, decisions, evidence lineage, and exports.
- The system shall preserve links between notice, question, strategy, task, evidence, draft, review, and final package objects.

## FR-14 Governance, Feedback, and Learning

- The system shall capture human overrides, reviewer comments, precedent usefulness signals, and submission outcomes.
- The system shall use feedback to improve ontology coverage, retrieval ranking, prompts, templates, and workflow heuristics under governance.
- The system shall not rely on uncontrolled direct learning from every edit without reviewable controls.
