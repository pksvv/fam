# Sample Payloads

## Sample IDR

```json
{
  "id": "idr_2026_0001",
  "externalNoticeId": "IRS-2026-TP-4419",
  "authority": "IRS",
  "jurisdiction": "US Federal",
  "auditType": "Transfer Pricing Audit",
  "taxPeriodStart": "2024-01-01",
  "taxPeriodEnd": "2024-12-31",
  "legalEntity": "Acme US Holdings LLC",
  "sourceDocumentUris": ["s3://fam/notices/idr_2026_0001.pdf"],
  "receivedDate": "2026-05-23",
  "ownerTeam": "Tax Audit Response",
  "priority": "high",
  "questionIds": ["q_001"],
  "submissionPackageIds": [],
  "status": "in_analysis",
  "createdAt": "2026-05-23T09:00:00Z",
  "updatedAt": "2026-05-23T09:15:00Z",
  "metadata": {
    "sourceChannel": "email"
  }
}
```

## Sample Question and SubQuestion

```json
{
  "question": {
    "id": "q_001",
    "idrId": "idr_2026_0001",
    "sequenceNumber": 1,
    "sourceText": "Provide the intercompany service agreements, the 2024 charge calculation, and support for the allocation keys used.",
    "normalizedText": "Provide intercompany service agreements, 2024 charge calculations, and support for allocation keys.",
    "sourcePageNumbers": [2],
    "sourceSpans": [
      {
        "page": 2,
        "bbox": [110, 280, 510, 365],
        "excerpt": "Provide the intercompany service agreements..."
      }
    ],
    "isCompound": true,
    "status": "confirmed",
    "confirmationStatus": "confirmed",
    "currentIntentClassificationId": "ic_001",
    "currentOntologyMappingId": "om_001",
    "currentResponseStrategyId": "rs_001",
    "createdAt": "2026-05-23T09:10:00Z",
    "updatedAt": "2026-05-23T09:18:00Z"
  },
  "subQuestions": [
    {
      "id": "sq_001",
      "questionId": "q_001",
      "sequenceNumber": 1,
      "text": "Provide intercompany service agreements.",
      "requiredEvidenceTypes": ["contract"],
      "status": "confirmed",
      "createdAt": "2026-05-23T09:11:00Z",
      "updatedAt": "2026-05-23T09:11:00Z"
    },
    {
      "id": "sq_002",
      "questionId": "q_001",
      "sequenceNumber": 2,
      "text": "Provide 2024 charge calculations.",
      "requiredEvidenceTypes": ["workpaper", "report"],
      "status": "confirmed",
      "createdAt": "2026-05-23T09:11:00Z",
      "updatedAt": "2026-05-23T09:11:00Z"
    }
  ]
}
```

## Sample Understanding Layer

```json
{
  "intentClassification": {
    "id": "ic_001",
    "questionId": "q_001",
    "primaryIntent": "document_request",
    "secondaryIntents": ["calculation_support", "methodology_explanation"],
    "riskLevel": "high",
    "sensitivityLevel": "confidential",
    "reviewRequired": true,
    "confidenceScore": 0.93,
    "rationale": "The request seeks legal agreements, quantitative support, and methodology evidence.",
    "classifiedBy": "service.intent-classifier.v1",
    "status": "confirmed",
    "createdAt": "2026-05-23T09:12:00Z",
    "updatedAt": "2026-05-23T09:13:00Z"
  },
  "ontologyMapping": {
    "id": "om_001",
    "questionId": "q_001",
    "authority": "IRS",
    "jurisdiction": "US Federal",
    "taxTopics": ["transfer_pricing", "intercompany_services"],
    "processAreas": ["tax_provision", "intercompany_accounting"],
    "systems": ["Oracle ERP", "SharePoint"],
    "dataSources": ["ERP_GL", "Contract Repository"],
    "evidenceTypes": ["contract", "report", "workpaper"],
    "ownerTeams": ["Tax", "Transfer Pricing", "Controllership"],
    "controlTags": ["legal_review", "high_risk"],
    "confidenceScore": 0.9,
    "status": "validated",
    "createdAt": "2026-05-23T09:13:00Z",
    "updatedAt": "2026-05-23T09:14:00Z"
  },
  "historicalPrecedent": {
    "id": "hp_001",
    "questionId": "q_001",
    "precedentCaseId": "case_2024_117",
    "precedentQuestionText": "Provide intercompany services agreements and support for service fee allocations.",
    "precedentResponseSummary": "Prior response accepted with agreement copies, allocation workbook, and Oracle extract.",
    "matchedTopics": ["transfer_pricing", "intercompany_services"],
    "similarityScore": 0.88,
    "retrievalMethod": "hybrid",
    "evidenceIds": ["ev_hist_101", "ev_hist_102"],
    "templateIds": ["tpl_tp_service_fee"],
    "status": "accepted",
    "createdAt": "2026-05-23T09:14:00Z",
    "updatedAt": "2026-05-23T09:14:00Z"
  }
}
```

## Sample Execution Layer

```json
{
  "responseStrategy": {
    "id": "rs_001",
    "questionId": "q_001",
    "objective": "Demonstrate that intercompany service charges are contractually supported, consistently calculated, and backed by allocation evidence.",
    "regulatorConcern": "Substantiation of service charge basis and allocation methodology.",
    "responsePosture": "explanatory",
    "evidencePlan": [
      {
        "evidenceType": "contract",
        "description": "Executed intercompany service agreements"
      },
      {
        "evidenceType": "workpaper",
        "description": "Charge calculation workbook for 2024"
      },
      {
        "evidenceType": "report",
        "description": "Oracle extract supporting charge totals"
      }
    ],
    "keyClaims": [
      "Charges were governed by executed agreements.",
      "Calculations followed the documented methodology.",
      "Allocation keys reconcile to system data."
    ],
    "assumptions": [],
    "riskFlags": ["high_regulatory_interest"],
    "ownerTeams": ["Tax", "Transfer Pricing"],
    "approvalRoles": ["Tax Reviewer", "Legal Reviewer"],
    "precedentIds": ["hp_001"],
    "status": "approved",
    "createdAt": "2026-05-23T09:16:00Z",
    "updatedAt": "2026-05-23T09:25:00Z"
  },
  "task": {
    "id": "task_001",
    "responseStrategyId": "rs_001",
    "questionId": "q_001",
    "taskType": "collect_supporting_documents",
    "title": "Collect executed intercompany agreements",
    "description": "Retrieve final signed agreements from the contract repository.",
    "assignedTeam": "Legal Operations",
    "dependsOnTaskIds": [],
    "expectedEvidenceIds": ["ev_001"],
    "priority": "high",
    "status": "in_progress",
    "createdAt": "2026-05-23T09:26:00Z",
    "updatedAt": "2026-05-23T09:30:00Z"
  },
  "evidence": {
    "id": "ev_001",
    "questionId": "q_001",
    "taskId": "task_001",
    "evidenceType": "contract",
    "title": "Executed Intercompany Service Agreement 2024",
    "sourceSystem": "Contract Repository",
    "sourceUri": "s3://fam/evidence/ev_001.pdf",
    "hash": "sha256:abc123",
    "legalEntity": "Acme US Holdings LLC",
    "periodStart": "2024-01-01",
    "periodEnd": "2024-12-31",
    "ownerTeam": "Legal Operations",
    "sensitivityLevel": "confidential",
    "version": 1,
    "status": "validated",
    "createdAt": "2026-05-23T10:00:00Z",
    "updatedAt": "2026-05-23T10:30:00Z"
  },
  "evidenceValidation": {
    "id": "eval_001",
    "questionId": "q_001",
    "evidenceIds": ["ev_001"],
    "completenessScore": 0.42,
    "relevanceScore": 0.98,
    "freshnessScore": 1.0,
    "contradictionDetected": false,
    "findings": [
      {
        "severity": "medium",
        "message": "Charge calculation workbook and allocation support are still missing."
      }
    ],
    "recommendedAction": "collect_more",
    "validatedBy": "service.evidence-validator.v1",
    "status": "accepted",
    "createdAt": "2026-05-23T10:35:00Z",
    "updatedAt": "2026-05-23T10:35:00Z"
  }
}
```

## Sample Draft, Review, and Package

```json
{
  "draftResponse": {
    "id": "dr_001",
    "questionId": "q_001",
    "responseStrategyId": "rs_001",
    "version": 1,
    "narrative": "The requested intercompany service agreements and supporting calculation materials are attached. The agreements govern the service charges for 2024, and the attached calculation workbook explains the allocation keys applied to each legal entity.",
    "citations": [
      {
        "evidenceId": "ev_001",
        "label": "Executed Intercompany Service Agreement 2024"
      }
    ],
    "attachmentEvidenceIds": ["ev_001"],
    "caveats": [],
    "unresolvedAssumptions": ["Awaiting Oracle extract for final numeric reconciliation."],
    "generatedBy": "service.draft-generator.v1",
    "status": "ready_for_review",
    "createdAt": "2026-05-23T11:00:00Z",
    "updatedAt": "2026-05-23T11:00:00Z"
  },
  "review": {
    "id": "rev_001",
    "targetType": "DraftResponse",
    "targetId": "dr_001",
    "reviewerRole": "Tax Reviewer",
    "reviewerId": "user_amy",
    "decision": "request_more_evidence",
    "comments": "Need final Oracle extract before approval.",
    "requestedChanges": ["Attach Oracle extract and update citation set."],
    "reviewedAt": "2026-05-23T11:10:00Z",
    "status": "completed",
    "createdAt": "2026-05-23T11:10:00Z",
    "updatedAt": "2026-05-23T11:10:00Z"
  },
  "submissionPackage": {
    "id": "pkg_001",
    "idrId": "idr_2026_0001",
    "packageVersion": 1,
    "questionIds": ["q_001"],
    "draftResponseIds": ["dr_001"],
    "evidenceIds": ["ev_001"],
    "manifest": {
      "attachments": [
        {
          "evidenceId": "ev_001",
          "filename": "executed_intercompany_service_agreement_2024.pdf"
        }
      ]
    },
    "exportFormats": ["pdf", "zip", "json"],
    "status": "assembling",
    "createdAt": "2026-05-23T11:20:00Z",
    "updatedAt": "2026-05-23T11:20:00Z"
  },
  "auditTrailEvent": {
    "id": "ate_001",
    "eventType": "draft_response.review_requested_more_evidence",
    "targetType": "DraftResponse",
    "targetId": "dr_001",
    "actorType": "user",
    "actorId": "user_amy",
    "correlationId": "corr_20260523_001",
    "beforeRef": "dr_001:v1:ready_for_review",
    "afterRef": "dr_001:v1:changes_requested",
    "summary": "Reviewer requested more evidence before approval.",
    "timestamp": "2026-05-23T11:10:00Z",
    "status": "recorded",
    "metadata": {
      "decision": "request_more_evidence"
    }
  }
}
```
