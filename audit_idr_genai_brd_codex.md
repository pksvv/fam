# Business Requirements Document: AI-Driven Tax Audit IDR Response Platform

## 1. Executive Summary

This document defines the business and functional requirements for an AI-assisted platform that ingests tax audit Individual Document Requests (IDRs), extracts questions, classifies regulatory intent, maps requests to an audit ontology, retrieves historical precedent, generates response strategies, orchestrates evidence-gathering tasks, validates evidence sufficiency, drafts response narratives, supports human review, and assembles final response packages for submission.

The goal is not to build a simple RAG chatbot. The goal is to build an enterprise-grade audit investigation and response orchestration system.

Core idea:

```text
IDR Intake
  → Understanding
  → Investigation Planning
  → Task Orchestration
  → Evidence Collection
  → Validation
  → Response Drafting
  → Human Review
  → Submission Package
  → Learning Feedback Loop
```

The system should help tax, audit, legal, and business teams respond to government tax audit requests faster, more consistently, and with better traceability.

---

## 2. Problem Statement

Tax audit teams receive IDRs from government authorities such as the IRS or other tax/regulatory bodies. Each IDR can contain multiple questions. Each question may require one or more responses, supporting documents, reports, approvals, reconciliations, templates, and review steps.

Current challenges:

- IDRs are often PDF/scanned documents requiring OCR.
- Questions are embedded in long-form notices and need extraction.
- Similar questions recur across audits, but historical responses are not systematically reused.
- Response strategy depends on request type, jurisdiction, audit topic, available evidence, and prior accepted patterns.
- Evidence collection spans multiple teams and systems.
- Each question can explode into multiple tasks.
- Final responses need review, consistency, traceability, and supporting attachments.
- Incomplete or contradictory evidence can create audit risk.
- Institutional knowledge is scattered across documents, emails, prior responses, SharePoint folders, and tax team memory.

The platform should create a structured, repeatable, AI-assisted process for turning IDRs into defensible response packages.

---

## 3. Business Objectives

1. Reduce manual effort in IDR intake, question extraction, classification, and response drafting.
2. Improve reuse of historical responses, templates, and precedent evidence.
3. Create an audit ontology that captures common request types, tax concepts, evidence types, systems, owners, and response patterns.
4. Generate response strategies before drafting final responses.
5. Convert each response strategy into executable tasks assigned to relevant teams.
6. Improve evidence traceability from source document to final response.
7. Detect gaps, missing evidence, and contradictions before submission.
8. Maintain human-in-the-loop review and approval for all generated responses.
9. Build a learning loop from submitted responses and outcomes.
10. Create a foundation for a future audit intelligence operating system.

---

## 4. Target Users

### 4.1 Primary Users

- Tax audit response team
- Tax operations team
- Tax technology team
- Legal reviewers
- Finance controllers
- Business process owners
- Evidence/data owners

### 4.2 Secondary Users

- Product owners
- Engineering team
- Compliance leadership
- Audit governance team
- Program managers

---

## 5. In-Scope Capabilities

### 5.1 IDR Intake

- Upload IDR PDF or scanned document.
- Store source file with metadata.
- Run OCR and document layout parsing.
- Extract raw text, page references, sections, tables, and question blocks.
- Preserve link between extracted content and original source pages.

### 5.2 Question Extraction

- Identify individual questions inside an IDR.
- Split compound requests into sub-questions where needed.
- Assign each question a unique ID.
- Capture source page, paragraph, section, and original text.

### 5.3 Intent Classification

Classify each question into one or more intent types, such as:

- Provide evidence
- Explain process
- Explain transaction
- Reconcile mismatch
- Demonstrate compliance
- Provide data extract
- Provide org chart / ownership
- Provide policy or procedure
- Provide contracts / agreements
- Provide timeline / chronology
- Explain calculation methodology
- Provide system-generated report
- Provide audit trail
- Provide legal entity details
- Provide transfer pricing support

### 5.4 Ontology Mapping

Map each question to structured ontology objects:

- Jurisdiction
- Tax authority
- Audit type
- Tax topic
- Legal entity
- Market/country
- Business process
- System/application
- Data source
- Evidence type
- Owner/team
- Response pattern
- Risk category
- Review requirement

### 5.5 Historical Precedent Retrieval

Retrieve similar prior IDR questions and responses.

System should return:

- Similar questions
- Accepted responses
- Prior evidence packages
- Templates used
- Teams involved
- Time taken
- Known risks/issues
- Outcome notes, if available

### 5.6 Response Hypothesis Generation

For each question, generate an initial response hypothesis:

- Likely regulator concern
- Tax/audit issue being tested
- Sensitivity level
- Expected evidence
- Likely follow-up risk
- Suggested narrative posture
- Confidence score

### 5.7 Response Strategy Generation

Generate a structured response strategy before drafting the actual answer.

A response strategy should include:

- Interpreted request
- Response objective
- Required evidence
- Required systems/reports
- Required teams
- Required approvals
- Suggested response structure
- Historical precedent references
- Risk level
- Gap assumptions
- Drafting guidance

### 5.8 Task Explosion / Workflow Generation

Convert response strategy into a task graph.

Each task should include:

- Task title
- Description
- Assigned team/role
- Input required
- Output expected
- Dependency on other tasks
- Due date or SLA
- Evidence artifact expected
- Review requirement
- Status

Tasks must support dependencies, not just a flat list.

Example:

```text
Fetch Oracle Report
  → Validate Report Totals
  → Reconcile with Filing
  → Tax Review
  → Draft Narrative
  → Legal Review
```

### 5.9 Evidence Collection

Allow users to upload, link, or retrieve evidence artifacts.

Supported evidence types:

- PDFs
- Excel files
- Reports
- Screenshots
- Contracts
- Policies
- Emails
- Org charts
- System extracts
- Reconciliation files
- Prior responses
- Workpapers

Each evidence artifact must be tied to:

- Question ID
- Task ID
- Source system
- Owner
- Upload timestamp
- Evidence type
- Version
- Source reference

### 5.10 Evidence Sufficiency Validation

System should evaluate whether collected evidence is sufficient for the response.

Checks:

- Required evidence present
- Evidence matches requested period
- Evidence matches legal entity / jurisdiction
- Evidence supports the response narrative
- Evidence source is credible
- Evidence version is latest or approved
- No required task remains incomplete

### 5.11 Contradiction and Gap Detection

System should detect:

- Numeric mismatches
- Conflicting dates
- Missing attachments
- Unsupported claims
- Evidence not matching narrative
- Prior response inconsistency
- Incomplete approvals
- Missing source references

### 5.12 Draft Response Generation

Generate a draft answer for each question using:

- Original question text
- Classified intent
- Response strategy
- Collected evidence
- Prior accepted responses
- Approved templates
- Human comments

Draft response should include:

- Direct answer
- Explanation/narrative
- Evidence references
- Attachment list
- Caveats/assumptions
- Review notes

### 5.13 Human Review

All AI outputs must be reviewable and editable by authorized humans.

Review types:

- Tax review
- Legal review
- Business owner review
- Data owner review
- Final approver review

Users should be able to:

- Approve
- Reject
- Edit
- Comment
- Request more evidence
- Send back to task owner
- Mark ready for package assembly

### 5.14 Submission Package Assembly

For each IDR, assemble:

- Cover note / response summary
- Question-by-question responses
- Evidence attachment index
- Supporting files
- Review trail
- Version history

Export options:

- PDF
- Word document
- ZIP package
- JSON metadata package

### 5.15 Learning Feedback Loop

After submission, capture:

- Final response submitted
- Accepted / rejected / follow-up requested
- Follow-up questions
- Response effectiveness
- Lessons learned
- Template updates
- Ontology updates
- New precedent record

---

## 6. Out-of-Scope for MVP

The MVP should not attempt to fully automate government submission.

Out of scope initially:

- Direct submission to government portals
- Fully autonomous response approval
- Complex legal position drafting without human review
- Enterprise-wide workflow integration with all systems
- Advanced regulator behavioral analytics
- Real-time ERP integrations
- Fully automated evidence extraction from every enterprise system

---

## 7. Recommended MVP Scope

The MVP should prove the core intelligence workflow with limited integration complexity.

### MVP Features

1. Upload IDR PDF.
2. Run OCR / parse text.
3. Extract questions.
4. Classify question intent.
5. Map to basic ontology.
6. Retrieve similar historical examples from uploaded corpus.
7. Generate response strategy.
8. Generate task list / task graph.
9. Allow manual upload of evidence.
10. Generate draft response.
11. Allow human review/edit.
12. Export response package.

### MVP Non-Goals

- No live integration to Oracle, SharePoint, email, or government portals.
- No autonomous final response submission.
- No complex role-based enterprise access model beyond basic roles.
- No full production-grade workflow engine initially, unless easy to plug in.

---

## 8. Conceptual Architecture

```text
Frontend UI
  ↓
API Layer
  ↓
Document Processing Service
  ↓
Question Understanding Service
  ↓
Ontology Service
  ↓
Precedent Retrieval Service
  ↓
Strategy Generation Service
  ↓
Workflow / Task Service
  ↓
Evidence Service
  ↓
Validation Service
  ↓
Response Drafting Service
  ↓
Review & Package Service
```

---

## 9. Suggested Technical Architecture for Codex Implementation

### 9.1 Frontend

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Component-based UI

### 9.2 Backend

Recommended for MVP:

- Next.js API routes or FastAPI backend
- PostgreSQL for structured data
- pgvector or Qdrant for embeddings
- Object storage for files
- Optional Neo4j later for graph ontology

### 9.3 AI Layer

- OCR: pluggable adapter
- Embeddings: pluggable adapter
- LLM calls: pluggable service wrapper
- Prompt templates stored separately
- JSON schema validation for model outputs

### 9.4 Data Stores

- PostgreSQL: IDRs, questions, tasks, evidence, reviews, packages
- Vector DB: semantic retrieval over historical questions/responses/evidence
- File store: original documents and evidence files
- Optional graph DB: ontology and relationship exploration

---

## 10. Core Data Model

### 10.1 IDR

```json
{
  "idr_id": "IDR-0001",
  "title": "IRS Audit Document Request - FY2024",
  "tax_authority": "IRS",
  "jurisdiction": "US",
  "audit_year": "2024",
  "status": "IN_PROGRESS",
  "source_file_url": "...",
  "created_by": "user_id",
  "created_at": "timestamp"
}
```

### 10.2 Question

```json
{
  "question_id": "Q-0001",
  "idr_id": "IDR-0001",
  "question_text": "Provide support for intercompany payments...",
  "source_page": 3,
  "source_section": "Request 2",
  "intent_type": "PROVIDE_EVIDENCE",
  "risk_level": "HIGH",
  "status": "STRATEGY_PENDING"
}
```

### 10.3 Ontology Mapping

```json
{
  "question_id": "Q-0001",
  "tax_topic": "Transfer Pricing",
  "business_process": "Intercompany Payments",
  "legal_entities": ["Germany Entity", "France Entity"],
  "systems": ["Oracle", "Contract Repository"],
  "evidence_types": ["Invoice", "Contract", "Payment Report"],
  "owners": ["Tax", "Treasury", "Legal"]
}
```

### 10.4 Response Strategy

```json
{
  "strategy_id": "RS-0001",
  "question_id": "Q-0001",
  "interpreted_request": "The authority is requesting evidence supporting intercompany payments.",
  "likely_regulator_concern": "Transfer pricing support and payment validity",
  "response_objective": "Demonstrate that payments were valid, documented, and consistent with policy.",
  "required_evidence": [
    "Intercompany invoices",
    "Executed contracts",
    "Payment reports",
    "Approval workflow evidence"
  ],
  "required_teams": ["Tax", "Treasury", "Legal"],
  "suggested_narrative": "Evidence-first response with summary table and attachments.",
  "confidence_score": 0.76,
  "risk_level": "HIGH"
}
```

### 10.5 Task

```json
{
  "task_id": "T-0001",
  "question_id": "Q-0001",
  "strategy_id": "RS-0001",
  "title": "Fetch intercompany invoice report",
  "description": "Retrieve FY2024 intercompany invoices for specified entities.",
  "assigned_team": "Tax Operations",
  "status": "OPEN",
  "depends_on": [],
  "expected_output": "Excel report",
  "evidence_required": true,
  "due_date": "2026-06-01"
}
```

### 10.6 Evidence

```json
{
  "evidence_id": "E-0001",
  "question_id": "Q-0001",
  "task_id": "T-0001",
  "file_name": "intercompany_invoice_report_fy2024.xlsx",
  "evidence_type": "REPORT",
  "source_system": "Oracle",
  "owner_team": "Tax Operations",
  "version": 1,
  "status": "SUBMITTED",
  "uploaded_at": "timestamp"
}
```

### 10.7 Draft Response

```json
{
  "response_id": "R-0001",
  "question_id": "Q-0001",
  "draft_text": "In response to Request 2, the company provides...",
  "evidence_references": ["E-0001", "E-0002"],
  "status": "UNDER_REVIEW",
  "generated_by": "AI",
  "reviewer_comments": []
}
```

### 10.8 Review

```json
{
  "review_id": "REV-0001",
  "response_id": "R-0001",
  "review_type": "TAX_REVIEW",
  "reviewer": "user_id",
  "decision": "APPROVED_WITH_COMMENTS",
  "comments": "Add explanation for variance between report and filing.",
  "created_at": "timestamp"
}
```

---

## 11. Core Workflow

### 11.1 IDR Intake Workflow

```text
User uploads IDR
  → System stores file
  → OCR extracts text
  → System identifies candidate questions
  → User reviews extracted questions
  → User confirms question list
```

### 11.2 Question Understanding Workflow

```text
Question confirmed
  → Intent classification
  → Risk classification
  → Ontology mapping
  → Historical precedent search
  → Initial hypothesis generation
```

### 11.3 Strategy Workflow

```text
Question understood
  → Generate response strategy
  → Identify evidence needs
  → Identify owners/teams
  → Suggest narrative posture
  → User reviews/approves strategy
```

### 11.4 Task Workflow

```text
Strategy approved
  → Generate task graph
  → Assign task owners
  → Collect evidence
  → Mark tasks complete
  → Validate evidence sufficiency
```

### 11.5 Response Workflow

```text
Evidence sufficient
  → Generate draft response
  → Human review
  → Rework if needed
  → Final approval
  → Add to submission package
```

### 11.6 Submission Package Workflow

```text
All question responses approved
  → Generate package index
  → Assemble response document
  → Attach supporting files
  → Export package
  → Capture final submission metadata
```

---

## 12. AI Prompting Requirements

The AI layer should use structured prompts and return strict JSON whenever possible.

### 12.1 Question Extraction Prompt Output

Expected output:

```json
{
  "questions": [
    {
      "question_text": "...",
      "source_page": 1,
      "source_section": "...",
      "is_compound": false,
      "sub_questions": []
    }
  ]
}
```

### 12.2 Intent Classification Prompt Output

```json
{
  "intent_type": "PROVIDE_EVIDENCE",
  "secondary_intents": ["EXPLAIN_PROCESS"],
  "tax_topics": ["Transfer Pricing"],
  "risk_level": "HIGH",
  "confidence_score": 0.82,
  "reasoning_summary": "The question asks for support documents and explanation of intercompany payments."
}
```

### 12.3 Strategy Generation Prompt Output

```json
{
  "interpreted_request": "...",
  "likely_regulator_concern": "...",
  "response_objective": "...",
  "required_evidence": [],
  "required_systems": [],
  "required_teams": [],
  "suggested_narrative_structure": [],
  "risks_and_gaps": [],
  "recommended_next_steps": []
}
```

### 12.4 Task Explosion Prompt Output

```json
{
  "tasks": [
    {
      "title": "...",
      "description": "...",
      "assigned_team": "...",
      "depends_on": [],
      "expected_output": "...",
      "evidence_required": true
    }
  ]
}
```

---

## 13. UI Requirements

### 13.1 Main Pages

1. Dashboard
2. IDR List
3. IDR Detail
4. Question Workspace
5. Strategy Workspace
6. Task Board
7. Evidence Library
8. Draft Response Editor
9. Review Queue
10. Submission Package Builder
11. Ontology Admin
12. Historical Precedent Search

### 13.2 IDR Detail Page

Should show:

- IDR metadata
- Source document
- Extracted questions
- Status of each question
- Overall progress
- Package readiness

### 13.3 Question Workspace

Should show:

- Original question text
- OCR source reference
- Intent classification
- Ontology mappings
- Similar historical questions
- Generated hypothesis
- Risk level

### 13.4 Strategy Workspace

Should show:

- Response objective
- Required evidence
- Required teams
- Suggested response pattern
- Risks and gaps
- User approval controls

### 13.5 Task Board

Should show:

- Tasks grouped by question
- Owner/team
- Status
- Dependencies
- Due dates
- Evidence upload action

### 13.6 Draft Response Editor

Should show:

- Question text
- Draft response
- Evidence references
- Reviewer comments
- AI regeneration controls
- Approval workflow

---

## 14. Roles and Permissions

### 14.1 Roles

- Admin
- Tax Lead
- Tax Reviewer
- Legal Reviewer
- Business Owner
- Evidence Owner
- Read-only Viewer

### 14.2 Permissions

| Capability | Admin | Tax Lead | Reviewer | Evidence Owner | Viewer |
|---|---|---|---|---|---|
| Upload IDR | Yes | Yes | No | No | No |
| Confirm Questions | Yes | Yes | No | No | No |
| Approve Strategy | Yes | Yes | No | No | No |
| Upload Evidence | Yes | Yes | Yes | Yes | No |
| Edit Response | Yes | Yes | Yes | No | No |
| Approve Response | Yes | Yes | Yes | No | No |
| Export Package | Yes | Yes | No | No | No |
| View Package | Yes | Yes | Yes | Yes | Yes |

---

## 15. Non-Functional Requirements

### 15.1 Security

- All documents must be stored securely.
- Access must be role-based.
- Sensitive tax data must not be exposed to unauthorized users.
- AI calls must be configurable for enterprise-safe model providers.
- Prompt and response logs must be access-controlled.

### 15.2 Auditability

System must maintain:

- Source document history
- AI output history
- Human edits
- Review decisions
- Evidence version history
- Final package version
- Export timestamps

### 15.3 Explainability

Every AI-generated strategy or response must show:

- Source question
- Supporting precedent
- Evidence references
- Confidence score
- Assumptions
- Gaps

### 15.4 Reliability

- Failed AI/OCR jobs should be retryable.
- Users should be able to manually correct AI output.
- No final response should be submitted without human approval.

### 15.5 Scalability

System should support:

- Multiple IDRs
- Multiple questions per IDR
- Multiple evidence artifacts per question
- Multiple reviewers
- Historical corpus growth

---

## 16. Success Metrics

MVP success should be measured by:

- % reduction in manual question extraction effort
- % of questions correctly classified
- % of generated strategies accepted with minor edits
- % of task plans accepted by tax users
- Time saved in draft response preparation
- Evidence completeness score improvement
- Reduction in missing evidence before review
- User satisfaction from tax/legal reviewers

---

## 17. Acceptance Criteria

### 17.1 IDR Upload

- User can upload PDF.
- System extracts raw text.
- System displays OCR text and document metadata.

### 17.2 Question Extraction

- System identifies multiple questions from an IDR.
- User can edit, split, merge, delete, or confirm questions.

### 17.3 Classification

- System assigns intent type, tax topic, and risk level.
- User can override classification.

### 17.4 Strategy

- System generates structured response strategy.
- Strategy includes required evidence, teams, risks, and narrative guidance.
- User can approve or edit strategy.

### 17.5 Tasks

- System generates tasks from strategy.
- Tasks can be assigned, updated, and completed.
- Tasks can have dependencies.

### 17.6 Evidence

- User can upload evidence against question/task.
- Evidence is visible in evidence library.
- Evidence is referenced in draft response.

### 17.7 Draft Response

- System generates response draft for a question.
- Draft response references evidence.
- User can edit and approve draft.

### 17.8 Package Export

- System assembles all approved responses.
- System creates an attachment index.
- User can export response package.

---

## 18. Implementation Phases

### Phase 1: Prototype

- Static UI
- Mock data
- Manual upload
- Basic OCR placeholder
- Manual question confirmation
- LLM-based classification and strategy generation
- Simple task list
- Evidence upload
- Draft response generation

### Phase 2: MVP

- Real persistence
- Real OCR integration
- Vector search over historical examples
- Role-based access
- Review workflow
- Package export
- Evidence sufficiency checks

### Phase 3: Enterprise Pilot

- SharePoint/document repository integration
- Email/workflow notifications
- Graph ontology
- Advanced contradiction detection
- SLA dashboards
- Team assignment rules

### Phase 4: Scale

- Workflow engine integration
- ERP/report integrations
- Regulator intelligence
- Advanced analytics
- Learning feedback loop
- Multi-jurisdiction templates

---

## 19. Suggested Codex Build Prompt

Use this section as the instruction prompt for Codex.

```text
Build a Next.js + TypeScript prototype for an AI-driven Tax Audit IDR Response Platform.

The product should help tax teams ingest Individual Document Requests, extract questions, classify question intent, generate response strategies, create task plans, collect evidence, draft responses, route them for human review, and assemble a submission package.

Use the BRD requirements in this document as the source of truth.

Implementation expectations:

1. Build a clean enterprise-style UI using Next.js App Router, TypeScript, and Tailwind CSS.
2. Create pages for:
   - Dashboard
   - IDR list
   - IDR detail
   - Question workspace
   - Strategy workspace
   - Task board
   - Evidence library
   - Draft response editor
   - Review queue
   - Submission package builder
   - Ontology admin
3. Use mock data initially.
4. Create TypeScript types for:
   - IDR
   - Question
   - OntologyMapping
   - ResponseStrategy
   - Task
   - Evidence
   - DraftResponse
   - Review
   - SubmissionPackage
5. Create reusable components:
   - Status badge
   - Risk badge
   - Evidence card
   - Question card
   - Task card
   - Strategy panel
   - Response editor
   - Progress timeline
6. Design the UI to feel like an enterprise audit operations dashboard.
7. Do not build a generic chatbot UI.
8. Emphasize investigation workflow, evidence traceability, and human review.
9. Keep AI calls abstracted behind service functions so real LLM integration can be added later.
10. Add mock service functions for:
   - extractQuestions
   - classifyQuestionIntent
   - mapQuestionToOntology
   - retrieveHistoricalPrecedents
   - generateResponseStrategy
   - generateTaskGraph
   - validateEvidenceSufficiency
   - generateDraftResponse
11. Store mock data in local files or in-memory constants for now.
12. Ensure the app can be extended later to use PostgreSQL, pgvector, object storage, and workflow engine integration.

The most important product concept:
This is not a RAG chatbot. This is an AI-assisted audit investigation and response orchestration platform.
```

---

## 20. Future Advanced Capabilities

1. Regulator behavior intelligence.
2. Follow-up risk prediction.
3. Precedent effectiveness scoring.
4. Response template recommendation.
5. Evidence quality scoring.
6. Contradiction graph.
7. Audit outcome analytics.
8. Tax issue heatmap.
9. Jurisdiction-specific response playbooks.
10. Integration with enterprise workflow tools.

---

## 21. Final Product Positioning

This platform should be positioned as:

```text
An AI-assisted tax audit response operating system that converts unstructured government document requests into structured investigation plans, evidence workflows, defensible responses, and submission-ready packages.
```

Not as:

```text
A chatbot that answers tax audit questions.
```

The product moat is not only GenAI. The moat is:

- audit ontology
- historical precedent memory
- evidence graph
- response strategy engine
- human review workflow
- submission traceability
- learning feedback loop

