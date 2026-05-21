# Relationship Catalog

Each relationship includes meaning, example, source path, and confidence.

## IDR CONTAINS Question

- Meaning: An IDR is composed of one or more extracted questions.
- Example: BRD states each IDR can contain multiple questions and the system should identify individual questions inside an IDR.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question HAS Sub-question

- Meaning: A compound question can be decomposed into child sub-questions.
- Example: Question extraction output includes `is_compound` and `sub_questions`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question MAPS_TO Tax Topic

- Meaning: Each question can be classified against one or more tax topics.
- Example: BRD prompt outputs and examples include `Transfer Pricing`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question MAPS_TO Audit Type

- Meaning: A question inherits or is tagged with its audit context and audit type.
- Example: Ontology mapping includes `Audit type`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question ISSUED_BY Government Authority

- Meaning: A question originates from a tax authority through a notice or IDR.
- Example: BRD references `IRS or other tax/regulatory bodies`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question REQUIRES Evidence

- Meaning: A question has one or more required evidence artifacts that must be gathered to answer it.
- Example: `Required evidence` in the response strategy; evidence sufficiency validation checks required evidence presence.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question GENERATES Response Strategy

- Meaning: Understanding a question produces a structured strategy before drafting an answer.
- Example: `Question understood -> Generate response strategy`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Response Strategy CREATES Task

- Meaning: The approved strategy is decomposed into executable tasks.
- Example: `Convert response strategy into a task graph`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Task DEPENDS_ON Task

- Meaning: Tasks can form a dependency graph rather than a flat checklist.
- Example: `Fetch Oracle Report -> Validate Report Totals -> Reconcile with Filing -> Tax Review`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Task COLLECTS Evidence

- Meaning: A task’s output may be an evidence artifact needed for response assembly.
- Example: OCR workflow screenshot ties task creation and ownership to evidence gathering; BRD task fields include `evidence artifact expected`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Team OWNS Task

- Meaning: A team or role is accountable for completing a task.
- Example: `assigned_team` in task model; workflow screenshot references `Task Owner`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Reviewer APPROVES Response

- Meaning: A human reviewer decides whether a draft response can move forward.
- Example: `Tax review`, `Legal review`, `Final approver review`; BRD review object with `decision`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Response ANSWERS Question

- Meaning: A response is explicitly written against a specific question.
- Example: Draft Response object includes `question_id`; question-by-question responses are assembled into the package.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Evidence SUPPORTS Response

- Meaning: Evidence artifacts substantiate claims made in the response narrative.
- Example: `Evidence references`, `Evidence supports the response narrative`, OCR `evidence is packaged with citations`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

## Evidence STORED_IN System

- Meaning: Evidence is sourced from, or stored in, one or more enterprise systems.
- Example: `Source system`, OCR references to `Lumi`, `Documentum`, `ERP/GL/Data Warehouse`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Evidence DERIVED_FROM Data Source

- Meaning: Evidence may be generated from structured data repositories or prior case libraries.
- Example: `ERP/GL/Data Warehouse`, `Historic Audit Case library`, `Source Data`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `Medium`

## Response USES Template

- Meaning: Responses may be drafted using reusable templates or approved historical patterns.
- Example: BRD references `Approved templates`, `Templates used`, `Response template recommendation`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Response REFERENCES Historical Precedent

- Meaning: A response may cite or borrow structure from prior accepted cases.
- Example: `Prior accepted responses`, `historical precedent references`, `Historic Audit Case library`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Response INCLUDED_IN Submission Package

- Meaning: Approved responses are assembled into a final package.
- Example: `All question responses approved -> Generate package index -> Assemble response document`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Submission Package CONTAINS Attachment

- Meaning: The package bundles supporting files and evidence attachments.
- Example: `Evidence attachment index`, `Supporting files`, `Attachment list`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Workflow CONTAINS Task

- Meaning: A workflow is composed of ordered tasks and approvals.
- Example: OCR `Intake Scope Tasks Reviews Approvals Submission`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Approval GOVERNS Response

- Meaning: A response cannot move to submission without human approval and decision tracking.
- Example: `No final response should be submitted without human approval`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Control MITIGATES Risk

- Meaning: Governance controls, approvals, and validation steps reduce audit-response risk.
- Example: OCR `control-by-design architecture`, `confidence gating`, BRD contradiction detection and approval controls.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Risk ASSOCIATED_WITH Question

- Meaning: Questions can carry sensitivity or risk-level tags.
- Example: `risk_level` in question classification.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Notice DECOMPOSED_INTO IDR or DR Units

- Meaning: The source notice may be broken down into internal request units for planning and assignment.
- Example: workflow screenshot shows `createDR`, `Document Request`, and decomposition of audit requirements into IDRs/DRs.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `Medium`
