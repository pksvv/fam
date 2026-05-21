# Evidence Types

This file captures candidate evidence classes for the ontology.

## Primary Evidence Types from the BRD

### PDF

- Meaning: Document-based evidence such as notices, reports, policies, or final packages.
- Example: uploaded IDR PDF, exported PDF package.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Excel File

- Meaning: Spreadsheet-based evidence, reconciliations, or system extracts.
- Example: `Excel report`, spreadsheet screenshots in miscellaneous folder.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/10_22062DEA-A325-4414-B7A0-A81729082346.md`
- Confidence: `High`

### Report

- Meaning: Formal system-generated output used as proof or support.
- Example: `Payment reports`, `Oracle report`, `Revenue Agent Reports`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

### Screenshot

- Meaning: Captured UI state or visual source proof from systems, repositories, or workflows.
- Example: raw data sneak peek, current architecture diagrams, workflow screenshots.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
- Confidence: `High`

### Contract

- Meaning: Legal agreement used to support transactional or ownership claims.
- Example: `Executed contracts`, `Provide contracts / agreements`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Policy

- Meaning: Governance or operating policy used to demonstrate compliance.
- Example: `Provide policy or procedure`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Email

- Meaning: Communication-based evidence used to prove approvals, timelines, or intent.
- Example: BRD explicitly lists emails as evidence; current process notes knowledge is scattered across emails.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Org Chart

- Meaning: Structural evidence of ownership or reporting lines.
- Example: `Provide org chart / ownership`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### System Extract

- Meaning: Structured data export from a transactional or analytical system.
- Example: `Provide data extract`, `ERP/GL/Data Warehouse`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

### Reconciliation File

- Meaning: A structured artifact explaining differences between records, filings, or reports.
- Example: BRD references reconciliations and mismatch checks.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

### Prior Response

- Meaning: Historical answer package reused as precedent.
- Example: `Prior accepted responses`, `Historic Audit Case library[Requests+Responses]`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

### Workpaper

- Meaning: Internal supporting analysis or calculation file.
- Example: BRD evidence list includes workpapers; OCR references `Workpaper`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

## Derived Evidence Classes

### Evidence Pack

- Meaning: A bundled set of multiple evidence artifacts with citations, hashes, and lineage.
- Example: OCR `Evidence Packager`, `Bundles | Citations | Hashes | Lineage`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

### Audit Trail Record

- Meaning: Metadata proving source lineage, approval path, and version history.
- Example: `System of Audit Record = Case History | Versions | Approvals | Decisions`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

### Semantic Reference Chunk

- Meaning: A retrieval-ready unit created during ingestion and indexing of source material.
- Example: OCR `Ingestion & Indexing`, `Chunking`, `Hybrid Retrieval`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `Medium`

### Translation Artifact

- Meaning: A translated document or note created to support non-English requests or evidence.
- Example: OCR mentions `External Consultants for Language Translation`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/07_B16097E2-8ADA-4996-B231-E713081A372E.md`
- Confidence: `Low`
