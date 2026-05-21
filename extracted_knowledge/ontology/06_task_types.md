# Task Types

This file captures candidate task classes for strategy-to-execution orchestration.

## Intake Tasks

### Upload Notice / IDR

- Meaning: Capture the source request document and metadata.
- Example: `Upload IDR PDF`, `Capture & Intake`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

### OCR and Parse

- Meaning: Extract text, layout, and question candidates from the notice.
- Example: `Run OCR / parse text`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Confirm Question Set

- Meaning: Human review and confirmation of extracted questions.
- Example: `User reviews extracted questions` and `User confirms question list`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Understanding Tasks

### Intent Classification

- Meaning: Assign primary and secondary intent, tax topic, risk, and confidence.
- Example: `Intent classification`, `Risk classification`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Ontology Mapping

- Meaning: Map a question to jurisdiction, authority, tax topic, systems, evidence type, owners, and risk.
- Example: `Map each question to structured ontology objects`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Precedent Retrieval

- Meaning: Retrieve similar historical questions, responses, and evidence sets.
- Example: `Historical precedent retrieval`, `Historic Audit Case library`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `High`

### Generate Response Strategy

- Meaning: Produce the interpreted request, objective, evidence list, risks, and guidance.
- Example: `Generate response strategy`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Evidence Tasks

### Fetch Report

- Meaning: Pull a required system-generated report from a source system.
- Example: `Fetch Oracle Report`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Collect Supporting Documents

- Meaning: Gather contracts, invoices, policies, emails, workpapers, and extracts.
- Example: evidence collection workflow and evidence type list.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

### Validate Evidence Sufficiency

- Meaning: Check whether the gathered evidence is complete, current, entity-matched, and credible.
- Example: `Evidence Sufficiency Validation`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Resolve Contradictions

- Meaning: Investigate mismatches, unsupported claims, or missing references.
- Example: contradiction and gap detection section.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Drafting and Review Tasks

### Draft Narrative

- Meaning: Generate a direct answer plus explanation, citations, caveats, and attachment list.
- Example: `Draft Response Generation`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Human Review

- Meaning: Have tax, legal, business, or data reviewers inspect and update outputs.
- Example: `Approve`, `Reject`, `Edit`, `Comment`, `Request more evidence`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/05_715B7B54-A22D-458C-AC7A-B553C485F101.md`
- Confidence: `High`

### Approval Routing

- Meaning: Route strategy, evidence, or response through the right approval gates.
- Example: OCR `human approvals at key steps`, BRD review workflow.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Packaging Tasks

### Assemble Submission Package

- Meaning: Build the final export with response summaries, attachments, supporting files, and review trail.
- Example: `Submission Package Assembly`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

### Export Package

- Meaning: Render the final package into supported output formats.
- Example: `PDF`, `Word`, `ZIP`, `JSON metadata package`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Governance Tasks

### Monitor GenAI Operations

- Meaning: Enforce logging, monitoring, evaluations, and safe scaling controls.
- Example: OCR `Govern, Measure, & Improve`, `Central GenAI Ops enforces security, logging, evaluations, monitoring, and cost controls`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

### Maintain Semantic Layer

- Meaning: Ingest and structure source data, chunks, retrieval metadata, and evidence catalogs.
- Example: OCR `Semantic Data Layer`, `Ingestion & Indexing`, `Chunking`, `Retrieval`, `3-Tier Evidence Catalog`.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
- Confidence: `Medium`
