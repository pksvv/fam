# Solution Summary For Engineers

## Repository Intent

This repository defines a case-centric audit response platform and includes a frontend prototype of the core operating model. The platform goal is to transform unstructured IDRs into structured question objects, investigation strategy, executable tasks, evidence lineage, reviewed draft responses, and package outputs.

## What The Codebase Contains Today

### Prototype application

- Next.js 15 App Router application under [app/](/Users/admin/code/vipul/fam/app)
- reusable UI components under [components/](/Users/admin/code/vipul/fam/components)
- static mock domain data under [lib/mock-data.ts](/Users/admin/code/vipul/fam/lib/mock-data.ts)
- shared types under [lib/types.ts](/Users/admin/code/vipul/fam/lib/types.ts)

### Design and implementation guidance

- product requirements under [product_requirements/](/Users/admin/code/vipul/fam/product_requirements)
- architecture docs under [architecture/](/Users/admin/code/vipul/fam/architecture)
- canonical data model under [data_model/](/Users/admin/code/vipul/fam/data_model)
- implementation backlog under [delivery_backlog/](/Users/admin/code/vipul/fam/delivery_backlog)

### Knowledge extraction

- OCR-derived notes and summaries under [extracted_knowledge/](/Users/admin/code/vipul/fam/extracted_knowledge)
- raw source imagery under [raw-docs/](/Users/admin/code/vipul/fam/raw-docs)

## Prototype Route Map

- `/` dashboard
- `/idrs` case list
- `/idrs/[id]` case detail
- `/questions/[id]` question workspace
- `/strategy/[id]` strategy workspace
- `/tasks` task board
- `/evidence` evidence library
- `/drafts/[id]` draft response editor
- `/review` review queue
- `/packages/builder` package builder
- `/admin/ontology` ontology admin

## Architectural Direction

The repository consistently points toward this pipeline:

```text
IDR intake
  -> OCR and parsing
  -> question extraction
  -> intent classification
  -> ontology mapping
  -> precedent retrieval
  -> response strategy
  -> task orchestration
  -> evidence validation
  -> draft generation
  -> review and approval
  -> package assembly
```

The most important engineering constraint is that the system is case-centric and traceability-centric. Drafting is downstream of strategy and evidence, not the first-class starting point.

## Implementation Reality Check

The current application is a mock-driven frontend. There is no API layer, persistence, job orchestration, retrieval service, OCR service, or authentication layer implemented in this repo yet.

That means the docs should be treated as the implementation contract, and the UI should be treated as a target interaction model.

## Recommended Engineering Build Order

1. Establish the canonical backend domain aligned with [data_model/](/Users/admin/code/vipul/fam/data_model).
2. Implement case intake, document storage metadata, and job state tracking.
3. Add OCR, parsing, and question extraction services with traceable source spans.
4. Introduce intent classification and ontology mapping with reviewable structured outputs.
5. Build strategy generation and dependency-aware task creation.
6. Add evidence repository, validation rules, and lineage references.
7. Add draft generation, reviewer workflow, and package assembly.
8. Replace mock data page by page with live APIs.

## Key Documents For Engineering Work

- Architecture overview: [architecture/00_architecture_overview.md](/Users/admin/code/vipul/fam/architecture/00_architecture_overview.md)
- AI pipeline: [architecture/03_ai_pipeline.md](/Users/admin/code/vipul/fam/architecture/03_ai_pipeline.md)
- System components: [architecture/05_system_components.md](/Users/admin/code/vipul/fam/architecture/05_system_components.md)
- Data model overview: [data_model/00_data_model_overview.md](/Users/admin/code/vipul/fam/data_model/00_data_model_overview.md)
- Entity definitions: [data_model/01_entities.md](/Users/admin/code/vipul/fam/data_model/01_entities.md)
- JSON schemas: [data_model/03_json_schemas.md](/Users/admin/code/vipul/fam/data_model/03_json_schemas.md)
- Database design: [data_model/05_database_design.md](/Users/admin/code/vipul/fam/data_model/05_database_design.md)
- Epics: [delivery_backlog/00_epics.md](/Users/admin/code/vipul/fam/delivery_backlog/00_epics.md)
- Technical tasks: [delivery_backlog/02_technical_tasks.md](/Users/admin/code/vipul/fam/delivery_backlog/02_technical_tasks.md)
- AI pipeline tasks: [delivery_backlog/04_ai_pipeline_tasks.md](/Users/admin/code/vipul/fam/delivery_backlog/04_ai_pipeline_tasks.md)
