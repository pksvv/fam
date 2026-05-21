# Testing Plan

## Objectives

- Verify that the MVP supports the end-to-end path from IDR intake through submission package export.
- Verify that each AI stage emits structured, reviewable, and traceable outputs.
- Verify that human approval gates, audit history, and security controls work as intended.

## Test Layers

### Unit Tests

- Validate domain model rules for cases, questions, tasks, evidence, reviews, and packages.
- Validate API request validation and authorization rules.
- Validate deterministic post-processing logic for classifications, mappings, workflow tasks, and package assembly.

### Integration Tests

- Test document upload through OCR persistence.
- Test question confirmation through classification, mapping, retrieval, and strategy generation.
- Test evidence upload through validation findings and draft generation gating.
- Test review actions and package export lineage persistence.

### AI Stage Evaluation

- Create gold test sets for OCR, question extraction, classification, ontology mapping, retrieval, strategy, evidence validation, and draft generation.
- Track precision, recall, confidence calibration, citation accuracy, and contradiction detection quality where applicable.
- Run regression evaluations before prompt, taxonomy, or model changes are promoted.

### End-to-End Workflow Tests

- Happy path: create case, upload notice, confirm questions, approve strategy, collect evidence, generate draft, approve, export package.
- Bad OCR path: upload poor scan, retry OCR, confirm corrected extraction, continue downstream.
- Insufficient evidence path: evidence validation blocks drafting until gaps are resolved.
- Review rework path: reviewer rejects draft and routes work back to evidence or task stages.
- Security path: unauthorized user cannot access restricted case artifacts.

## Non-Functional Testing

- Performance test OCR queues, retrieval latency, and draft generation latency for pilot-sized loads.
- Reliability test async retries, idempotency, and recovery after worker failure.
- Security test RBAC, artifact access control, secret handling, and audit log completeness.
- Usability test analyst workflows for question review, evidence linking, and package assembly.

## Test Data Strategy

- Use representative pilot notices from sanitized sample IDRs.
- Create curated precedent corpus fixtures with known good and bad matches.
- Create evidence packs covering complete, incomplete, stale, contradictory, and wrong-entity scenarios.

## Exit Criteria

- P0 user stories pass acceptance validation.
- Critical end-to-end path is green in a stable environment.
- AI stage scorecards meet agreed pilot thresholds.
- Audit logging, approval history, and export lineage are verified.
- High-severity security issues are resolved or explicitly waived for the pilot.
