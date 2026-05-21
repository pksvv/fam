# Entity Catalog

Each entity below includes a definition, source-backed examples where available, source file path, and confidence.

## IDR

- Meaning: An Individual Document Request case object representing a government audit request package or request set.
- Examples:
  - `IDR-0001` in the BRD core data model.
  - `User uploads IDR` in the intake workflow.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Notice

- Meaning: The original audit notice or source government request document from which questions are extracted.
- Examples:
  - `Notice`, `Read Audit Notice`, `Audit Notice details` in the workflow screenshot.
  - `IDRs are often PDF/scanned documents requiring OCR` in the BRD.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Question

- Meaning: A single extracted request item inside an IDR that requires understanding, evidence, and a response.
- Examples:
  - `Question` object with `question_id`, `question_text`, `intent_type`, `risk_level`.
  - `System identifies candidate questions` in workflow.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Sub-question

- Meaning: A decomposed child request derived from a compound question or multipart notice.
- Examples:
  - BRD requirement to `Split compound requests into sub-questions where needed`.
  - Prompt output field `sub_questions`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Response

- Meaning: The draft or approved narrative answer prepared for a specific question.
- Examples:
  - `Draft Response` entity with `draft_text`, `evidence_references`, `status`.
  - OCR references to `Response Finalizer`, `Draft Response + Assembly`, `Finalize audit submission`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Evidence

- Meaning: Any supporting artifact used to substantiate a response.
- Examples:
  - `Evidence` entity with `evidence_type`, `source_system`, `owner_team`, `version`.
  - OCR references to `Ground on Enterprise Evidence`, `Evidence Packager`, `Evidence Collection`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Attachment

- Meaning: A file bundled into a response or submission package as a supporting item.
- Examples:
  - BRD references `Attachment list` and `Evidence attachment index`.
  - Exportable package includes supporting files.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Tax Team

- Meaning: A responsible business team participating in request interpretation, evidence gathering, review, or submission.
- Examples:
  - `Tax audit response team`, `Tax operations team`, `Tax technology team`.
  - OCR references to `Tax Teams`, `Audit Owner/(Audit/Tax Team)`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/15_49BF4BAE-53C1-4E24-9388-74F97DC3E10A.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Reviewer

- Meaning: A human reviewer authorized to inspect, edit, approve, reject, or return work.
- Examples:
  - `Tax review`, `Legal review`, `Final approver review`.
  - Workflow screenshot shows `DR Reviewer`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Government Authority

- Meaning: The external regulator or tax agency issuing the request.
- Examples:
  - `IRS` in the sample IDR object.
  - `Tax authority`, `Government authorities such as the IRS`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Audit Type

- Meaning: A categorization of the audit context, jurisdictional path, or audit program.
- Examples:
  - Ontology mapping includes `Audit type`.
  - Rose update references `US Federal + State Audits`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/36_3D2D42D6-4F63-40C3-B0A0-9CAFE5993C9E.md`
- Confidence: `High`

## Tax Topic

- Meaning: The substantive tax subject that a question tests or asks evidence for.
- Examples:
  - `Transfer Pricing` in examples.
  - Intent and classification outputs include `tax_topics`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Data Source

- Meaning: The upstream structured or unstructured repository from which evidence or context is retrieved.
- Examples:
  - `Data source` in ontology mapping.
  - OCR references to `ERP/GL/Data Warehouse`, `Historic Audit Case library`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## System

- Meaning: An application or enterprise platform used to hold, generate, or validate evidence.
- Examples:
  - `Oracle`, `Contract Repository`, `SharePoint`, `email`, `government portals`.
  - OCR references to `Lumi`, `Documentum`, `Semantic Data Layer`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Report

- Meaning: A formal system-generated or manually compiled output used as evidence.
- Examples:
  - `Provide system-generated report`.
  - `Fetch Oracle Report`, `Payment reports`, `Revenue Agent Reports`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Template

- Meaning: A reusable response, package, or workflow pattern used to accelerate future requests.
- Examples:
  - `Templates used`, `Template updates`, `jurisdiction-specific response playbooks`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Task

- Meaning: A unit of executable work generated from a response strategy.
- Examples:
  - `Task` object with `assigned_team`, `depends_on`, `expected_output`.
  - OCR workflow references `Task Planning & Assignment`, `Creates & assigns Tasks`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Workflow

- Meaning: The ordered lifecycle or process graph connecting intake, interpretation, evidence collection, review, and submission.
- Examples:
  - Core workflow in BRD.
  - OCR sequence `Intake Scope Tasks Reviews Approvals Submission`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

## Risk

- Meaning: A risk label, score, or category used to prioritize scrutiny and response rigor.
- Examples:
  - `risk_level` in Question and Response Strategy.
  - `Known risks/issues`, `Likely follow-up risk`, `gap detection`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Control

- Meaning: A policy, approval, validation, or governance mechanism that constrains or validates how a response is prepared.
- Examples:
  - OCR references `control-by-design architecture`, `confidence gating`, `human approvals`.
  - BRD includes role-based access, approval workflows, and auditability.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Approval

- Meaning: A formal review decision that moves a strategy, response, evidence set, or package forward.
- Examples:
  - `Approve`, `Reject`, `Mark ready for package assembly`.
  - OCR references `Approvals`, `human approvals at key steps`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

## Submission Package

- Meaning: The assembled exportable bundle containing approved responses, attachments, review trail, and version history.
- Examples:
  - `Submission Package Assembly`.
  - `PDF`, `Word`, `ZIP`, `JSON metadata package`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Response Strategy

- Meaning: The pre-drafting plan that interprets the question, identifies needed evidence, teams, approvals, and narrative posture.
- Examples:
  - `Response Strategy` object in the BRD.
  - OCR references to `Strategy`, `Query + Evidence`, `Draft Response + Assembly`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Historical Precedent

- Meaning: A reusable past case, response, or evidence package retrieved to guide a current response.
- Examples:
  - `Historical precedent retrieval`.
  - OCR references to `Historic Audit Case library[Requests+Responses]`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Evidence Catalog

- Meaning: A structured repository or semantic layer organizing evidence, workpapers, reconciliations, and historic cases.
- Examples:
  - OCR references to `3-Tier Evidence Catalog`, `Semantic Layer`, `Evidence Packager`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `Medium`
