# Question Types

This file captures ontology candidates for question and request-intent categories.

## Core Intent Types from the BRD

### Provide Evidence

- Meaning: Request asks for documentary or data-based proof.
- Example: invoices, contracts, reports, workpapers.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Explain Process

- Meaning: Request asks how a finance or tax process works.
- Example: workflow screenshots showing audit owner, task planning, review, submission.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

### Explain Transaction

- Meaning: Request asks for the business context or mechanics of a transaction.
- Example: `Explain transaction` in BRD intent list.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Reconcile Mismatch

- Meaning: Request asks the team to explain differences across reports, filings, or periods.
- Example: BRD contradiction and sufficiency checks; example task `Reconcile with Filing`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Demonstrate Compliance

- Meaning: Request asks for proof that policy, regulation, or filing requirements were met.
- Example: compliance and controls references in the BRD and Ravi slides.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/14_3D57AE00-C8F5-4CBE-BF05-F8EB510E3F0C.md`
- Confidence: `High`

### Provide Data Extract

- Meaning: Request asks for a structured extract from a system or warehouse.
- Example: `Provide data extract`, OCR `ERP/GL/Data Warehouse`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

### Provide Org Chart / Ownership

- Meaning: Request asks for role, entity, or reporting ownership structure.
- Example: intent list includes org chart / ownership.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Policy or Procedure

- Meaning: Request asks for internal governance documentation.
- Example: policy, procedure, and controls all appear in the BRD scope.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Contracts / Agreements

- Meaning: Request asks for legal or commercial support documents.
- Example: `Provide contracts / agreements`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Timeline / Chronology

- Meaning: Request asks for event sequencing over time.
- Example: `Provide timeline / chronology`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Explain Calculation Methodology

- Meaning: Request asks how figures were derived.
- Example: `Explain calculation methodology`, reconciliations, provisioning, journal entry automation.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/14_3D57AE00-C8F5-4CBE-BF05-F8EB510E3F0C.md`
- Confidence: `High`

### Provide System-Generated Report

- Meaning: Request asks for formal outputs from source systems.
- Example: `Provide system-generated report`, `Fetch Oracle Report`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Audit Trail

- Meaning: Request asks for transaction lineage, approvals, or source references.
- Example: BRD requires traceability, review trail, version history, source references.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Legal Entity Details

- Meaning: Request asks for entity-level context such as ownership, jurisdiction, or entity attributes.
- Example: ontology fields include `legal entity`; evidence sufficiency checks legal entity match.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Provide Transfer Pricing Support

- Meaning: Request asks for documents or explanations tied to transfer pricing.
- Example: transfer pricing appears in BRD examples.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Additional Candidate Question Classes

### Intake Clarification Question

- Meaning: An internal clarification question raised because the notice or audit scope is incomplete or ambiguous.
- Example: workflow screenshot notes `Audit Scope(NotDefinedclearly- Assumption only)`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `Medium`

### Evidence Gap Question

- Meaning: A follow-up question created internally when required evidence is missing or not credible.
- Example: BRD evidence sufficiency and gap detection requirements.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `Medium`

### Contradiction Resolution Question

- Meaning: A question focused on resolving conflicting dates, numbers, or narratives.
- Example: BRD contradiction detection section.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `Medium`

### Translation / Localization Support Question

- Meaning: A question or task requiring language translation before interpretation or response.
- Example: OCR mentions `External Consultants for Language Translation`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/07_B16097E2-8ADA-4996-B231-E713081A372E.md`
- Confidence: `Low`
