# How To Use This Workspace

This workspace is organized to support three kinds of work at once:

- understanding the product vision and operating model
- implementing the application prototype and future platform services
- tracing extracted knowledge back to source material

## If You Are New Here

Read in this order:

1. [README.md](/Users/admin/code/vipul/fam/README.md)
2. [docs/04_executive_summary.md](/Users/admin/code/vipul/fam/docs/04_executive_summary.md)
3. [audit_idr_genai_brd_codex.md](/Users/admin/code/vipul/fam/audit_idr_genai_brd_codex.md)
4. [architecture/00_architecture_overview.md](/Users/admin/code/vipul/fam/architecture/00_architecture_overview.md)
5. [data_model/00_data_model_overview.md](/Users/admin/code/vipul/fam/data_model/00_data_model_overview.md)
6. [delivery_backlog/00_epics.md](/Users/admin/code/vipul/fam/delivery_backlog/00_epics.md)

## How The Repository Is Intended To Be Used

### For product definition

Use these folders first:

- [product_requirements/](/Users/admin/code/vipul/fam/product_requirements)
- [architecture/](/Users/admin/code/vipul/fam/architecture)
- [data_model/](/Users/admin/code/vipul/fam/data_model)
- [delivery_backlog/](/Users/admin/code/vipul/fam/delivery_backlog)

### For extracted research and source interpretation

Use these folders:

- [raw-docs/](/Users/admin/code/vipul/fam/raw-docs) for original source artifacts
- [extracted_knowledge/ocr_outputs/](/Users/admin/code/vipul/fam/extracted_knowledge/ocr_outputs) for OCR-derived notes
- [extracted_knowledge/ontology/](/Users/admin/code/vipul/fam/extracted_knowledge/ontology) for normalized concepts and open questions

### For application development

Use these folders:

- [app/](/Users/admin/code/vipul/fam/app) for route-level screens
- [components/](/Users/admin/code/vipul/fam/components) for reusable UI
- [lib/](/Users/admin/code/vipul/fam/lib) for types, helpers, and mock data

## Current Application Surface

The prototype currently includes pages for:

- dashboard
- IDR list and case detail
- question workspace
- strategy workspace
- task board
- evidence library
- draft response editor
- review queue
- submission package builder
- ontology admin

These screens demonstrate the intended operating system flow, but they are powered by static mock data rather than a live service stack.

## Running The Prototype

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Optional checks:

```bash
npm run build
npm run lint
```

## Where To Find Specific Information

- Product vision: [product_requirements/00_product_vision.md](/Users/admin/code/vipul/fam/product_requirements/00_product_vision.md)
- Functional requirements: [product_requirements/04_functional_requirements.md](/Users/admin/code/vipul/fam/product_requirements/04_functional_requirements.md)
- MVP scope: [product_requirements/06_mvp_scope.md](/Users/admin/code/vipul/fam/product_requirements/06_mvp_scope.md)
- Risks and assumptions: [product_requirements/09_risks_assumptions_dependencies.md](/Users/admin/code/vipul/fam/product_requirements/09_risks_assumptions_dependencies.md)
- Architecture target state: [architecture/02_target_state.md](/Users/admin/code/vipul/fam/architecture/02_target_state.md)
- AI pipeline: [architecture/03_ai_pipeline.md](/Users/admin/code/vipul/fam/architecture/03_ai_pipeline.md)
- Data entities: [data_model/01_entities.md](/Users/admin/code/vipul/fam/data_model/01_entities.md)
- Database design: [data_model/05_database_design.md](/Users/admin/code/vipul/fam/data_model/05_database_design.md)
- Epics and delivery plan: [delivery_backlog/00_epics.md](/Users/admin/code/vipul/fam/delivery_backlog/00_epics.md)

## Practical Working Agreement

- Treat the BRD, product requirements, architecture, and data model docs as the design baseline.
- Treat the Next.js app as a prototype of the workflow, not yet the complete system.
- When adding features, prefer aligning names and states with the canonical data model rather than inventing new terms in the UI.
- When extracting new insight from raw materials, preserve the trace from `raw-docs/` to `extracted_knowledge/`.
- When prioritizing delivery, follow the sequencing already outlined in the backlog docs.
