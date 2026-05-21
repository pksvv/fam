# FAM / IDR GenAI Implementation Epics

## Overview

This backlog translates the existing FAM product requirements, MVP scope, ontology work, and AI pipeline into implementation epics for a case-centric IDR response platform.

## Epic List

### EPIC-01 IDR Intake

- Goal: create an audit case, ingest IDR documents, and capture case metadata with immutable file references.
- MVP outcome: a user can create a pilot case, upload notices, and start downstream processing from a governed intake record.

### EPIC-02 OCR and Parsing

- Goal: convert uploaded notices into structured text, layout spans, and tables with page-level traceability.
- MVP outcome: the platform produces reviewable OCR outputs and supports retry when extraction quality is poor.

### EPIC-03 Question Extraction

- Goal: identify, normalize, and confirm the questions and sub-questions embedded in an IDR.
- MVP outcome: each confirmed question has source spans, confidence, and a stable identifier.

### EPIC-04 Intent Classification

- Goal: classify each confirmed question by request intent, risk, and review sensitivity.
- MVP outcome: downstream services can branch on regulated intent and confidence-aware review gates.

### EPIC-05 Ontology Mapping

- Goal: map questions into canonical business metadata such as authority, entity, tax topic, process, system, owner, and evidence type.
- MVP outcome: retrieval, orchestration, and reporting operate on normalized metadata rather than only free text.

### EPIC-06 Historical Precedent Retrieval

- Goal: retrieve relevant prior questions, accepted responses, evidence packs, and templates from authorized corpora.
- MVP outcome: case teams can reuse precedent with transparent match rationale and metadata filters.

### EPIC-07 Response Strategy

- Goal: generate a structured response strategy before drafting begins.
- MVP outcome: users can review and approve a machine-generated plan covering regulator concern, evidence plan, systems, owners, and approvals.

### EPIC-08 Task Orchestration

- Goal: convert approved strategy into a dependency-aware workflow graph with tasks, blockers, and ownership.
- MVP outcome: the case team can coordinate execution through visible work items instead of email-only tracking.

### EPIC-09 Evidence Collection

- Goal: upload, organize, link, and describe evidence artifacts tied to questions and tasks.
- MVP outcome: the platform maintains a governed evidence repository with metadata and version lineage.

### EPIC-10 Evidence Validation

- Goal: evaluate evidence sufficiency, freshness, entity match, period match, contradictions, and unresolved gaps.
- MVP outcome: reviewers receive actionable findings before drafting and package assembly.

### EPIC-11 Draft Response Generation

- Goal: generate question-level draft responses grounded in strategy and evidence.
- MVP outcome: draft answers include citations, caveats, and traceability to supporting artifacts.

### EPIC-12 Human Review

- Goal: provide role-based review, approval, rejection, comments, and rework workflows.
- MVP outcome: the MVP enforces human-controlled checkpoints for strategy, evidence, and draft approval.

### EPIC-13 Submission Package

- Goal: assemble approved responses and attachments into a controlled submission package for pilot export.
- MVP outcome: users can generate a reviewable package history with attachment index and audit metadata.

### EPIC-14 Admin / Configuration

- Goal: manage prompts, taxonomies, retrieval corpora, roles, templates, thresholds, and pilot settings.
- MVP outcome: administrators can evolve the pilot safely without code changes for every adjustment.

### EPIC-15 Security / Audit Trail

- Goal: preserve security controls, lineage, version history, approval history, and operational observability.
- MVP outcome: the platform supports regulated usage with durable traceability across every stage.

## Suggested Delivery Sequence

1. IDR Intake
2. OCR and Parsing
3. Question Extraction
4. Intent Classification
5. Ontology Mapping
6. Historical Precedent Retrieval
7. Response Strategy
8. Task Orchestration
9. Evidence Collection
10. Evidence Validation
11. Draft Response Generation
12. Human Review
13. Submission Package
14. Admin / Configuration
15. Security / Audit Trail

## Cross-Cutting Delivery Themes

- Case-centric domain model and durable audit record
- Structured AI service outputs between stages
- Human-in-the-loop approval and override controls
- Retrieval constrained to authorized corpora
- Confidence gating, observability, and evaluation harnesses
