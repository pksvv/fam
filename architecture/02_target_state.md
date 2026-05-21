# Target State Architecture

## Summary

The target state is an AI-assisted tax audit investigation and response orchestration platform. It ingests IDR notices, creates structured case objects, plans evidence-backed response strategies, coordinates cross-team work through workflow graphs, validates sufficiency, supports governed human review, and assembles submission-ready packages with full lineage.

## Target Operating Model

```mermaid
flowchart LR
    A[IDR PDF / Notice]
    B[Document understanding]
    C[Question intelligence]
    D[Response strategy]
    E[Workflow orchestration]
    F[Evidence operations]
    G[Draft generation]
    H[Human review and approval]
    I[Submission package]
    J[Learning feedback loop]

    A --> B --> C --> D --> E --> F --> G --> H --> I --> J
    H --> E
    H --> F
    F --> D
```

## Target Logical Architecture

```mermaid
flowchart TB
    subgraph Experience
        UX1[Audit workbench]
        UX2[Reviewer console]
        UX3[Evidence intake and task views]
    end

    subgraph CorePlatform
        P1[Case management]
        P2[Workflow orchestration engine]
        P3[Submission packaging service]
        P4[Audit record and lineage store]
    end

    subgraph AIAndKnowledge
        A1[OCR and parsing services]
        A2[Question extraction service]
        A3[Intent and risk classifiers]
        A4[Ontology mapper]
        A5[Precedent retrieval service]
        A6[Strategy generator]
        A7[Evidence sufficiency evaluator]
        A8[Draft response generator]
    end

    subgraph DataPlane
        D1[Document store]
        D2[Structured case store]
        D3[Vector and search indexes]
        D4[Ontology and policy catalog]
        D5[Evidence repository]
        D6[Historical audit corpus]
    end

    subgraph EnterpriseSources
        S1[ERP / GL]
        S2[Content repositories]
        S3[Email / workpapers]
        S4[External regulator outputs]
    end

    UX1 --> P1
    UX2 --> P1
    UX3 --> P2
    P1 --> A1
    P1 --> A2
    P1 --> A3
    P1 --> A4
    P1 --> A5
    P1 --> A6
    P2 --> A7
    P2 --> A8
    P1 --> P2
    P2 --> P3
    P1 --> P4
    P2 --> P4
    P3 --> P4
    A1 --> D1
    A2 --> D2
    A3 --> D2
    A4 --> D4
    A5 --> D3
    A5 --> D6
    A6 --> D2
    A7 --> D5
    A8 --> D5
    S1 --> D5
    S2 --> D5
    S3 --> D5
    S4 --> D1
```

## Mandatory Flow Coverage

The target architecture explicitly supports:

- logical architecture
- data flow
- AI service flow
- human-in-the-loop review flow
- evidence lineage flow
- task orchestration flow
- package generation flow

## End-to-End Target Flow

```mermaid
flowchart LR
    A[IDR PDF] --> B[OCR + parsing]
    B --> C[Question extraction]
    C --> D[Intent classification]
    D --> E[Ontology mapping]
    E --> F[Historical precedent retrieval]
    F --> G[Response strategy generation]
    G --> H[Task explosion / workflow graph]
    H --> I[Evidence collection]
    I --> J[Evidence sufficiency validation]
    J --> K[Draft response generation]
    K --> L[Human review]
    L --> M[Submission package]
    M --> N[Learning feedback loop]
```

## Human-in-the-Loop Review Model

- Humans confirm extracted questions when confidence is low or impact is high.
- Humans approve or adjust strategy for sensitive questions.
- Humans adjudicate evidence gaps, contradictions, and alternative interpretations.
- Humans approve response drafts before submission release.
- Humans own final package approval.

## Architectural Controls

- confidence gating on extraction, classification, and drafting
- role-based access by audit, entity, and jurisdiction
- approved-source retrieval boundaries
- immutable versioning for evidence, drafts, and decisions
- full case history with approvals and change provenance

## Target Benefits

- consistent request interpretation
- explicit response strategy before drafting
- reusable precedent and evidence patterns
- workflow-driven cross-team execution
- stronger evidence defensibility
- faster package assembly
- measurable feedback loop for future audits
