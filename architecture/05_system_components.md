# System Components

## Summary

The platform should be decomposed into business-capable services aligned to the audit response lifecycle. Components should communicate through structured case objects and event-driven workflow updates rather than free-form chat context.

## Component Map

```mermaid
flowchart TB
    subgraph Frontend
        F1[Audit workbench UI]
        F2[Reviewer console]
        F3[Task and evidence workspace]
    end

    subgraph Core Services
        C1[Intake service]
        C2[Case management service]
        C3[Workflow orchestration service]
        C4[Review and approval service]
        C5[Package generation service]
        C6[Audit record service]
    end

    subgraph AI Services
        A1[OCR / parsing service]
        A2[Question extraction service]
        A3[Intent classification service]
        A4[Ontology mapping service]
        A5[Precedent retrieval service]
        A6[Strategy generation service]
        A7[Evidence sufficiency service]
        A8[Draft generation service]
    end

    subgraph Data and Knowledge
        D1[Document store]
        D2[Case database]
        D3[Evidence repository]
        D4[Vector / keyword retrieval indexes]
        D5[Ontology and policy catalog]
        D6[Historical precedent corpus]
    end

    F1 --> C1
    F1 --> C2
    F2 --> C4
    F3 --> C3
    C1 --> A1
    C2 --> A2
    C2 --> A3
    C2 --> A4
    C2 --> A5
    C2 --> A6
    C3 --> A7
    C3 --> A8
    C4 --> C6
    C5 --> C6
    A1 --> D1
    A2 --> D2
    A3 --> D2
    A4 --> D5
    A5 --> D4
    A5 --> D6
    A6 --> D2
    A7 --> D3
    A8 --> D3
```

## Component Responsibilities

### Intake Service

- receive IDR uploads and metadata
- create initial case shell
- trigger OCR and parsing jobs

### Case Management Service

- manage IDR, notice, question, sub-question, and strategy objects
- coordinate structured state across the lifecycle

### Workflow Orchestration Service

- generate and execute dependency-aware tasks
- manage owner assignments, SLAs, escalations, and completion criteria

### Review and Approval Service

- manage human review states
- record comments, edits, approvals, rejections, and return-for-work actions

### Package Generation Service

- assemble approved narrative, attachments, indexes, and export formats

### Audit Record Service

- preserve versions, lineage, approvals, and immutable history

### AI Services

- perform bounded specialized analysis steps
- emit structured outputs with confidence and rationale metadata

## Human-in-the-Loop Review Flow

```mermaid
stateDiagram-v2
    [*] --> Drafted
    Drafted --> InReview
    InReview --> Approved
    InReview --> Rejected
    InReview --> NeedsMoreEvidence
    NeedsMoreEvidence --> EvidenceCollection
    EvidenceCollection --> Redrafted
    Redrafted --> InReview
    Rejected --> Redrafted
    Approved --> Packaged
    Packaged --> Submitted
```

## Task Orchestration Flow

```mermaid
flowchart LR
    A[Response strategy]
    B[Workflow graph builder]
    C[Fetch / collect tasks]
    D[Validate / reconcile tasks]
    E[Review tasks]
    F[Drafting tasks]
    G[Approval tasks]

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G
```

## Integration Boundaries

- source systems feed evidence, not final business logic
- AI services do not own lifecycle state; core services do
- package generation depends only on approved objects
- audit record is the authoritative source for lineage and decision history
