# BRD Summary

Source file: `/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md`

## BRD Identified

- File name: `audit_idr_genai_brd_codex.md`
- Title: `Business Requirements Document: AI-Driven Tax Audit IDR Response Platform`
- Role in workspace: primary business requirements source of truth

## Business Problem

Tax audit teams receive Individual Document Requests from authorities such as the IRS and must translate unstructured, often scanned documents into defensible responses backed by evidence. Today this work is slow, manual, and fragmented across multiple teams, systems, documents, emails, workpapers, and institutional memory. Repeated questions are not systematically reused, evidence gathering is difficult to coordinate, and incomplete or contradictory support increases audit risk.

## Target Users

### Primary Users

- Tax audit response team
- Tax operations team
- Tax technology team
- Legal reviewers
- Finance controllers
- Business process owners
- Evidence and data owners

### Secondary Users

- Product owners
- Engineering team
- Compliance leadership
- Audit governance team
- Program managers

## Current Process

The current state is largely manual and disconnected:

- IDRs arrive as PDFs or scanned documents and require OCR.
- Teams manually identify and split questions from long-form notices.
- Prior accepted responses and supporting evidence are difficult to find and reuse.
- Response planning depends on expert judgment across tax, legal, finance, and business teams.
- Evidence collection spans multiple systems and owners.
- Drafting, review, and package assembly happen through ad hoc coordination.
- Missing evidence, conflicting facts, and weak traceability are often found late in the process.

## Proposed GenAI Solution

The BRD proposes an AI-assisted tax audit response operating system, not a generic chatbot. The platform should:

- ingest IDR documents and extract questions
- classify intent and risk
- map questions to an audit ontology
- retrieve historical precedents and prior accepted responses
- generate response strategies before drafting answers
- explode strategies into dependent tasks across teams
- collect and validate evidence
- draft response narratives with evidence references
- support human review and approvals
- assemble exportable submission packages
- learn from submission outcomes to improve future performance

## Core Workflow

```text
IDR Intake
  → Question Understanding
  → Investigation / Strategy Planning
  → Task Orchestration
  → Evidence Collection
  → Validation
  → Draft Response
  → Human Review
  → Submission Package Assembly
  → Learning Feedback Loop
```

More specifically:

1. User uploads an IDR and the system stores the file and runs OCR.
2. The system extracts candidate questions and the user confirms them.
3. Each question is classified by intent, risk, and ontology mapping.
4. The system retrieves similar precedent and generates a response strategy.
5. The strategy is converted into a dependent task graph with owners and evidence expectations.
6. Teams collect evidence and the system validates sufficiency, gaps, and contradictions.
7. The system drafts question-level responses with evidence references.
8. Human reviewers approve, reject, edit, or send work back.
9. Approved outputs are assembled into a submission-ready response package.
10. Outcomes are captured to improve templates, ontology, and precedent retrieval.

## Key Requirements

### Functional Requirements

- IDR upload, storage, OCR, and layout parsing
- question extraction with page and section traceability
- intent classification and risk classification
- ontology mapping across jurisdiction, tax topic, legal entity, process, systems, evidence type, owner, and review requirement
- retrieval of similar historical questions, responses, evidence packages, templates, teams, time taken, and outcome notes
- response hypothesis generation and structured response strategy generation
- task graph generation with dependencies, owners, inputs, outputs, SLAs, and review requirements
- evidence upload/linking with metadata and traceability to question and task
- evidence sufficiency validation
- contradiction and gap detection
- draft response generation with narrative, evidence references, caveats, and review notes
- human review workflow
- submission package assembly and export
- learning feedback capture after submission

### Non-Functional Requirements

- secure document storage and role-based access
- enterprise-safe AI provider configuration
- full audit trail of source documents, AI outputs, edits, evidence versions, reviews, and exports
- explainability with confidence scores, assumptions, and gaps
- retryability and manual correction for failed AI/OCR jobs
- scalability across many IDRs, questions, evidence items, and reviewers

### MVP Scope

- upload IDR PDF
- OCR and text parsing
- question extraction
- intent classification
- basic ontology mapping
- precedent retrieval from uploaded corpus
- response strategy generation
- task generation
- manual evidence upload
- draft response generation
- human review and edit
- response package export

## Open Questions

The BRD is detailed, but several implementation decisions are still open or only partially specified:

- What exact historical corpus will seed precedent retrieval in the MVP?
- Which OCR provider and document parsing stack should be used first?
- What ontology taxonomy and controlled vocabularies should be treated as the initial canonical version?
- How should evidence sufficiency be scored or thresholded for approval decisions?
- What review workflow states and SLAs are mandatory versus optional in MVP?
- Which export format should be considered the primary deliverable for real user testing: PDF, Word, ZIP, or JSON metadata package?
- What source systems, if any, should be simulated in MVP to represent evidence retrieval beyond manual upload?
- How will contradictory evidence be resolved when human reviewers disagree with AI assessments?
- What level of role-based security is required for the prototype versus MVP versus enterprise pilot?
- What outcome data is realistically available to support the learning feedback loop?
- Should the MVP be implemented as Next.js-only, or as Next.js with a separate FastAPI backend from the start?

## Product Positioning

The document explicitly positions the product as an AI-assisted tax audit response operating system that converts unstructured government requests into structured investigation plans, evidence workflows, defensible responses, and submission-ready packages. It should not be framed as a chatbot.
