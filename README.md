# FAM: AI-Assisted Tax Audit Response Operating System

This repository defines and prototypes an AI-assisted tax audit response operating system that converts unstructured Individual Document Requests (`IDRs`) into structured investigation plans, evidence workflows, defensible responses, and submission-ready packages.

Today the workspace contains two things in one place:

- a documented product and architecture definition for the platform
- a Next.js prototype that demonstrates the intended operating model with mock case data

## What This Project Is

FAM, short for Finance Audit Management, is positioned as an enterprise audit workbench and system of audit record, not as a simple chatbot. The intended workflow is:

```text
IDR intake
  -> OCR and parsing
  -> question extraction
  -> intent and ontology mapping
  -> investigation strategy generation
  -> task orchestration
  -> evidence collection and validation
  -> response drafting
  -> human review
  -> submission package assembly
```

The primary business source is [audit_idr_genai_brd_codex.md](/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md).

## Folder Structure

```text
app/                  Next.js App Router prototype pages
components/           Reusable UI components for the prototype
lib/                  Mock domain data, types, and helpers
architecture/         Target-state and current-state architecture documentation
product_requirements/ Product vision, journeys, requirements, scope, and risks
data_model/           Canonical entities, relationships, schemas, and database design
delivery_backlog/     Epics, stories, technical tasks, AI pipeline tasks, testing plan
extracted_knowledge/  Derived summaries, OCR outputs, ontology notes, workspace inventory
raw-docs/             Source images and raw reference material used to extract knowledge
docs/                 Master navigation and audience-specific summaries
```

## How To Run The App

The repository includes a working Next.js prototype.

### Prerequisites

- Node.js 20+ recommended
- npm

### Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

Useful commands:

```bash
npm run build
npm run start
npm run lint
```

## Where Things Live

- Extracted knowledge: [extracted_knowledge/](/Users/admin/code/vipul/fam/extracted_knowledge)
- Architecture docs: [architecture/](/Users/admin/code/vipul/fam/architecture)
- Product requirements: [product_requirements/](/Users/admin/code/vipul/fam/product_requirements)
- Backlog: [delivery_backlog/](/Users/admin/code/vipul/fam/delivery_backlog)
- Data model: [data_model/](/Users/admin/code/vipul/fam/data_model)
- Master documentation index: [docs/00_master_index.md](/Users/admin/code/vipul/fam/docs/00_master_index.md)

## Current State Of The Workspace

- The product definition is well-developed across BRD, architecture, backlog, and data model docs.
- The prototype UI demonstrates the major workbench areas: dashboard, IDR list/detail, question workspace, strategy workspace, tasks, evidence, drafts, review, package builder, and ontology admin.
- The prototype currently uses mock data from [lib/mock-data.ts](/Users/admin/code/vipul/fam/lib/mock-data.ts); there is no live backend, persistence layer, or OCR pipeline wired in yet.

## Recommended Reading Order

1. [docs/04_executive_summary.md](/Users/admin/code/vipul/fam/docs/04_executive_summary.md)
2. [docs/02_solution_summary_for_leaders.md](/Users/admin/code/vipul/fam/docs/02_solution_summary_for_leaders.md)
3. [docs/03_solution_summary_for_engineers.md](/Users/admin/code/vipul/fam/docs/03_solution_summary_for_engineers.md)
4. [docs/01_how_to_use_this_workspace.md](/Users/admin/code/vipul/fam/docs/01_how_to_use_this_workspace.md)
5. [docs/00_master_index.md](/Users/admin/code/vipul/fam/docs/00_master_index.md)

## Next Steps

- Stand up the real case-centric backend and persistence model described in [data_model/05_database_design.md](/Users/admin/code/vipul/fam/data_model/05_database_design.md).
- Implement the ingestion pipeline from upload through OCR, question extraction, and ontology mapping.
- Replace mock data with live case APIs for questions, tasks, evidence, reviews, and package assembly.
- Add retrieval, strategy generation, evidence validation, and drafting services behind governed review checkpoints.
- Convert the delivery backlog into sequenced implementation sprints starting with intake, parsing, question extraction, and strategy orchestration.
