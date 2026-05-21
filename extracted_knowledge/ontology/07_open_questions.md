# Open Questions

This file captures unresolved ontology design questions surfaced from the BRD and extracted OCR materials.

## Scope and Structure

- Should `IDR` and `Document Request (DR)` be treated as the same entity type or as separate layers?
  - Source hint: workflow screenshot uses `createDR` and `Document Request`, while BRD centers on `IDR`.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - Confidence: `Medium`

- Should `Notice` be modeled as the source document of an IDR, or can a notice contain multiple IDRs?
  - Source hint: BRD treats uploaded document and IDR closely, but workflow screenshot separates notice reading from DR creation.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
  - Confidence: `Medium`

- Should `Question`, `Sub-question`, and `Line-item Category` share one abstraction or remain distinct?
  - Source hint: BRD uses question/sub-question, while semantic layer slide shows line-item categories.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
  - Confidence: `Medium`

## Evidence Modeling

- What is the canonical boundary between `Evidence`, `Attachment`, `Report`, and `Workpaper`?
  - Source hint: the BRD lists them separately, but package assembly and evidence packager imply nesting and reuse.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - Confidence: `High`

- Should `Evidence Pack` be a first-class entity or a generated view over multiple evidence artifacts?
  - Source hint: OCR references `Evidence Packager`, bundles, citations, hashes, lineage.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - Confidence: `Medium`

- Should screenshots from source systems be modeled as valid evidence, contextual artifacts, or both?
  - Source hint: raw data sneak peek is mostly screenshots with uneven OCR quality.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
  - Confidence: `Medium`

## Workflow and Responsibility

- What is the exact distinction between `Tax Team`, `Task Owner`, `Document Owner`, `Evidence Owner`, and `Reviewer`?
  - Source hint: BRD role model and workflow screenshot use overlapping ownership language.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/11_2E9E69E5-7FBD-43D6-B410-19E15B3751D0.md`
  - Confidence: `High`

- Should approvals be modeled as events, states, or standalone entities with their own lifecycle?
  - Source hint: BRD includes review objects and decision history; OCR highlights approval gates.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - Confidence: `High`

- How granular should task typing be for MVP: broad stages only, or distinct task classes like fetch, validate, reconcile, review, and package?
  - Source hint: BRD provides both stage-level and task-level patterns.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - Confidence: `Medium`

## Semantic Layer and Retrieval

- Is the ontology expected to support retrieval only, or also execution and governance?
  - Source hint: BRD and deck materials consistently mix semantic retrieval with workflow orchestration and approvals.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/08_CFD8BCC1-AD41-41FC-BAFC-1F85A2E7C962.md`
  - Confidence: `High`

- Should `Historical Precedent`, `Template`, and `Playbook` be separate entity classes or variations of reusable response knowledge?
  - Source hint: all appear in the BRD, but their exact boundaries are not fully defined.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
  - Confidence: `Medium`

- What ontology fields must be canonical metadata filters for retrieval?
  - Candidate examples from sources: jurisdiction, audit type, tax topic, legal entity, evidence type, owner, risk, review requirement.
  - Source file path:
    - `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/03_3CA6D661-BD4F-483D-ABF9-CE583E288CDD.md`
  - Confidence: `High`

## Missing Source Areas

- There are no extracted meeting-note files to ground decisions about stakeholder vocabulary or governance language.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
  - Confidence: `High`

- There are no extracted brainstorming-note files to ground alternate naming, edge cases, or discarded concepts.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
  - Confidence: `High`

- Many `raw data sneak peek` OCR outputs are low-confidence, so they should inform candidate ontology expansion but not define canonical semantics alone.
  - Source file path:
    - `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
  - Confidence: `High`
