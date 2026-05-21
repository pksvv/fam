# AI Pipeline Tasks

## OCR and Parsing

- `AI-001` Select OCR and layout parsing approach for PDF and scanned notice inputs.
- `AI-002` Define structured OCR output schema for text, spans, tables, headers, and confidence.
- `AI-003` Implement OCR quality heuristics and low-confidence routing rules.
- `AI-004` Build OCR evaluation set from sample pilot notices and expected outputs.

## Question Extraction

- `AI-005` Define question extraction schema including source spans, confidence, and sub-question relationships.
- `AI-006` Implement extractor prompts or models for compound question splitting.
- `AI-007` Create evaluation harness for exact match, partial match, and missed question metrics.

## Intent Classification

- `AI-008` Define canonical intent, risk, and sensitivity label taxonomy.
- `AI-009` Implement stage logic for confidence-aware classification with rationale capture.
- `AI-010` Create reviewer override loop and confusion-matrix reporting.

## Ontology Mapping

- `AI-011` Convert ontology artifacts in `extracted_knowledge/ontology` into canonical mapping dictionaries and enums.
- `AI-012` Build ontology mapper that emits normalized dimensions plus confidence.
- `AI-013` Add synonym expansion and disambiguation rules for entity, topic, and evidence terms.

## Historical Precedent Retrieval

- `AI-014` Define authorized precedent corpus structure and ingestion metadata requirements.
- `AI-015` Implement chunking and embedding strategy for prior responses and evidence packs.
- `AI-016` Implement hybrid retrieval ranking that blends vector, keyword, and metadata relevance.
- `AI-017` Build retrieval evaluation set with positive and negative examples from pilot material.

## Response Strategy

- `AI-018` Define structured strategy output contract with evidence plan, approvals, and drafting posture fields.
- `AI-019` Implement strategy generation prompts that consume question, mappings, and retrieved precedent.
- `AI-020` Add stage guardrails preventing strategy generation when upstream confidence is too low.

## Workflow Graph Generation

- `AI-021` Define task-template library for evidence requests, stakeholder follow-up, analysis, and review tasks.
- `AI-022` Implement workflow graph builder that converts strategy into DAG tasks and dependencies.
- `AI-023` Add deterministic post-processing rules for owners, SLAs, and blocker conditions.

## Evidence Validation

- `AI-024` Define evidence sufficiency rubric for completeness, relevance, freshness, entity match, and period match.
- `AI-025` Implement contradiction and missing-support detection heuristics.
- `AI-026` Create structured finding schema with severity, rationale, and recommended next action.

## Draft Response Generation

- `AI-027` Define draft output contract requiring citations, caveats, and unresolved assumption markers.
- `AI-028` Implement grounded drafting prompts constrained to approved evidence and approved strategy.
- `AI-029` Add citation verification checks before drafts are released for review.

## Feedback and Evaluation

- `AI-030` Build stage-by-stage offline evaluation harness and scorecard reporting.
- `AI-031` Capture human overrides and reviewer comments as governed feedback artifacts.
- `AI-032` Create prompt regression suite before promoting prompt or model changes.
