# MVP Scope

## MVP Goal

Deliver a focused US pilot for Finance Audit Management that proves business value while building the reusable foundation for a broader audit response platform.

## In Scope

- IDR case creation and source document upload
- OCR and document parsing for PDF or scanned notices
- Question extraction with human confirmation
- Intent, risk, and basic ontology mapping
- Retrieval over an uploaded and authorized precedent corpus
- Structured response strategy generation
- Dependency-aware task generation for question execution
- Manual evidence upload and metadata capture
- Evidence sufficiency checks focused on completeness, relevance, period, entity, and unresolved gaps
- Question-level draft response generation with citations and caveats
- Human review and approval workflow
- Submission package assembly and export for pilot use
- Persistent audit record for case objects, versions, approvals, and package history

## Explicitly Out of Scope for MVP

- Fully automated evidence retrieval from all enterprise systems
- End-to-end straight-through submission to regulator portals
- Autonomous approvals without human review
- Broad multi-jurisdiction rollout beyond the focused pilot
- Complex machine learning retraining pipelines
- Full enterprise operating model for every audit type from day one

## MVP Guardrails

- The MVP must remain case-centric and workflow-centric.
- The MVP must not be framed as only a chatbot or basic RAG assistant.
- Strategy approval and evidence review must remain human-controlled.
- Retrieval must be constrained to authorized and pilot-approved corpora.

## MVP Data and Knowledge Assumptions

- A bounded precedent corpus will be available for pilot retrieval.
- Initial ontology coverage will be sufficient for US Federal and State audit use cases, even if incomplete for later expansion.
- Evidence intake will begin with manual upload and linking, with future integrations added later.

## MVP Success Signals

- Faster readiness from IDR intake to draft package preparation
- Reduced time spent locating precedent and supporting evidence
- Better visibility into question status, blockers, and ownership
- Stronger lineage and review traceability than the current manual process
