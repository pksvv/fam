# Ontology Overview

This folder captures ontology candidates for the Finance Audit Management (`FAM`) / IDR response platform based on:

- `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`
- `/Users/admin/code/vipul/fam/extracted_knowledge/01_brd_summary.md`
- `/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs/00_ocr_index.md`
- selected OCR outputs from the GenAI intake deck, Ravi slides, rose updates, miscellaneous workflow screenshots, and raw data sneak peek

## Purpose

The ontology should help the platform convert unstructured government audit requests into structured objects, relationships, workflows, evidence requirements, review states, and submission packages.

## Core Modeling Principles

- Model the audit request as a structured case, not a document-only artifact.
- Separate request understanding from response generation.
- Treat evidence, approvals, and traceability as first-class objects.
- Preserve human-in-the-loop checkpoints across strategy, evidence, and response approval.
- Support both semantic retrieval and workflow orchestration.
- Allow low-confidence extracted material to enrich the ontology without becoming canonical truth by default.

## Main Ontology Domains

### Request Domain

- IDR
- Notice
- Question
- Sub-question
- Audit Type
- Government Authority
- Tax Topic

### Response Domain

- Response
- Response Pattern
- Template
- Submission Package
- Attachment
- Approval

### Evidence Domain

- Evidence
- Evidence Type
- Report
- Data Source
- System
- Control
- Risk

### Work Domain

- Task
- Task Type
- Workflow
- Tax Team
- Reviewer

## Source-Driven Themes

The ontology candidates are strongly supported by the BRD and reinforced by OCR text from slide materials:

- BRD: structured intake, question extraction, intent classification, ontology mapping, precedent retrieval, task graph generation, evidence validation, draft response, review, package export
- GenAI intake deck: orchestration, human approval gates, evidence packager, semantic data layer, hybrid retrieval, draft response assembly
- Ravi slides: intake-to-submission flow, tax modernization, enterprise audit intelligence
- Rose updates: MVP scope, leadership alignment, ingestion layer, AI agents, governance model
- Misc workflow screenshot: audit owner, document request creation, task planning, evidence collection, review, consolidation, final response submission

## Confidence Notes

- `High`: directly described in the BRD or clearly visible in high-quality OCR outputs
- `Medium`: implied by multiple sources but not fully specified
- `Low`: suggested by noisy OCR, workflow conventions, or inferred future-state design

## File Guide

- `01_entity_catalog.md`: candidate entity types and definitions
- `02_relationship_catalog.md`: candidate relationships between entities
- `03_question_types.md`: question and request intent taxonomy
- `04_response_patterns.md`: repeatable answer and submission strategies
- `05_evidence_types.md`: evidence taxonomy for request fulfillment
- `06_task_types.md`: task graph building blocks
- `07_open_questions.md`: unresolved design questions for ontology finalization
