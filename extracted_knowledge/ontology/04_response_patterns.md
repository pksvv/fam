# Response Patterns

This file captures repeatable answer structures and strategy patterns suggested by the source material.

## Evidence-First Response

- Meaning: Lead with the direct answer, then anchor it in cited evidence and attachments.
- Example:
  - BRD example `Evidence-first response with summary table and attachments.`
  - OCR references `evidence is packaged with citations, lineage`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
- Confidence: `High`

## Question-by-Question Package Response

- Meaning: Build the final output as a set of discrete answers aligned to each extracted question.
- Example:
  - BRD package includes `Question-by-question responses`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Strategy-Then-Draft Response

- Meaning: Never jump directly from question to prose; first generate a response strategy, then draft.
- Example:
  - BRD explicitly requires `Generate a structured response strategy before drafting the actual answer`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Human-in-the-Loop Response

- Meaning: AI drafts and structures the answer, but humans review, edit, and approve before submission.
- Example:
  - OCR `Human in the Loop`, `Manual review of response generated`.
  - BRD states no final response should be submitted without human approval.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/05_715B7B54-A22D-458C-AC7A-B553C485F101.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Retrieval-Augmented Response

- Meaning: Use authorized sources, precedent, and semantic retrieval to ground the answer.
- Example:
  - OCR `RAG retrieves only authorized sources`.
  - BRD requires historical precedent retrieval and evidence referencing.
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Gap-Aware Response

- Meaning: Include caveats, assumptions, and unresolved evidence gaps explicitly in the draft.
- Example:
  - BRD draft response includes `Caveats/assumptions`.
  - Strategy includes `Gap assumptions`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Narrative Plus Attachment Index

- Meaning: Pair the written response with an explicit list of supporting attachments.
- Example:
  - BRD draft includes `Attachment list`.
  - Package includes `Evidence attachment index`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Reconciliation Response

- Meaning: Compare numbers or records, explain differences, and attach reconciliation support.
- Example:
  - BRD tasks include `Validate Report Totals` and `Reconcile with Filing`.
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`

## Process Explanation Response

- Meaning: Explain the operational process behind a reported figure, compliance step, or control.
- Example:
  - question type `Explain process`
  - workflow screenshots show end-to-end steps from request creation through submission
- Source file path:
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
- Confidence: `High`

## Submission-Ready Consolidated Response

- Meaning: Finalize a response only after evidence collection, review, and package assembly are complete.
- Example:
  - OCR `Review & Consolidation >> FinalResponse Submission`
  - BRD workflow `Final approval -> Add to submission package`
- Source file path:
  - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
  - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- Confidence: `High`
