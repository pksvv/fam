# User Journeys

## Journey 1: Intake and Question Confirmation

1. The Audit Response Lead uploads an IDR PDF or scanned notice and enters case metadata.
2. The system stores the notice, runs OCR and layout parsing, and creates a draft case record.
3. The system extracts candidate questions and sub-questions with page-level traceability.
4. The Audit Response Lead or Tax Reviewer reviews the extracted question set.
5. The reviewer confirms, edits, merges, or splits questions before the case proceeds.

## Journey 2: Understanding and Strategy Formation

1. For each confirmed question, the system classifies intent, risk, and sensitivity.
2. The system maps the question to ontology dimensions such as authority, topic, entity, process, evidence type, system, and owner.
3. The system retrieves similar historical questions, accepted responses, and related evidence patterns.
4. The system generates a structured response strategy that includes interpreted request, likely regulator concern, required evidence, required teams, risks, and drafting posture.
5. A human reviewer approves or edits the strategy for high-impact or low-confidence cases.

## Journey 3: Task Orchestration and Evidence Collection

1. The system converts the response strategy into a dependency-aware workflow graph.
2. Tasks are assigned to owners with expected outputs, due dates, dependencies, and evidence expectations.
3. Evidence owners upload or link supporting materials and capture metadata such as source, entity, period, version, and owner.
4. The system tracks progress, blocked states, and overdue tasks.
5. The system evaluates whether collected evidence is sufficient, current, relevant, and non-contradictory.
6. If gaps are found, the workflow routes back for additional collection or clarification.

## Journey 4: Drafting and Human Review

1. Once evidence is accepted or sufficiently complete, the system generates a question-level draft response.
2. The draft includes narrative text, citations, caveats, and attachment references.
3. Reviewers inspect the draft and its supporting evidence.
4. Reviewers can approve, edit, reject, or send the question back for more evidence or strategy refinement.
5. Final approved question responses are locked for package assembly.

## Journey 5: Submission Package Creation

1. The system assembles approved responses, attachment indexes, evidence references, and package metadata.
2. The Audit Response Lead reviews the full package in a regulator-facing format.
3. Required approvers sign off on the final package.
4. The package is exported in supported formats and recorded in the audit record.
5. Post-submission outcomes and reviewer feedback are captured for future retrieval and improvement.

## Journey Design Implications

- Every journey must preserve lineage from source request to final package.
- Low-confidence AI outputs must trigger review rather than automatic progression.
- Workflow re-entry must be supported for contradiction resolution and rework.
- Users need a case workbench, not just isolated document or chat views.
