# Risks, Assumptions, and Dependencies

## Risks

- OCR quality may vary significantly across scanned notices, affecting question extraction accuracy.
- Early ontology coverage may be incomplete for edge-case requests, reducing classification precision.
- Precedent corpora may contain inconsistent or weak historical responses that need curation before reuse.
- Evidence sufficiency judgments may be disputed by reviewers if policy rules are not explicit enough.
- Users may expect full automation, creating adoption friction when human approval gates are required.
- If the UX drifts toward chat-first interaction, the platform may fail to solve workflow and control needs.
- Source-system integrations may take longer than expected, limiting automation beyond manual evidence upload in the pilot.

## Assumptions

- The initial pilot is focused on US Federal and State audit scenarios.
- A bounded set of source documents, historical responses, and evidence materials will be available for pilot retrieval.
- Human reviewers will remain responsible for final decisions, approvals, and submission readiness.
- The platform will treat cases, questions, evidence, tasks, and packages as first-class domain objects from the beginning.
- Pilot success will be measured by readiness acceleration, traceability improvements, and workflow clarity, not only by model quality metrics.

## Dependencies

- Availability of pilot IDR samples and supporting historical audit materials
- Agreement on the initial ontology vocabulary and metadata fields
- Access to authorized document corpora for precedent retrieval
- Alignment on review roles, approval gates, and governance model
- Selection of OCR, parsing, retrieval, and generation components consistent with enterprise policy
- Product and engineering alignment on a case-centric architecture and system-of-record model

## Open Decisions to Track

- Which export format is the primary pilot deliverable
- Which corpora are approved for precedent retrieval in the MVP
- How evidence sufficiency thresholds are defined and overridden
- Which workflow states and SLAs are mandatory in the first release
- Which enterprise integrations should be deferred versus included in pilot scope
