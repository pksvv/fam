# JSON Schemas

The schemas below use JSON Schema Draft 2020-12 style conventions. They are optimized for documentation clarity rather than strict implementation modularization.

## IDR

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/idr.json",
  "title": "IDR",
  "type": "object",
  "required": [
    "id",
    "authority",
    "jurisdiction",
    "auditType",
    "taxPeriodStart",
    "taxPeriodEnd",
    "legalEntity",
    "sourceDocumentUris",
    "receivedDate",
    "ownerTeam",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "externalNoticeId": { "type": "string" },
    "authority": { "type": "string" },
    "jurisdiction": { "type": "string" },
    "auditType": { "type": "string" },
    "taxPeriodStart": { "type": "string", "format": "date" },
    "taxPeriodEnd": { "type": "string", "format": "date" },
    "legalEntity": { "type": "string" },
    "sourceDocumentUris": { "type": "array", "items": { "type": "string" } },
    "receivedDate": { "type": "string", "format": "date" },
    "ownerTeam": { "type": "string" },
    "priority": { "type": "string", "enum": ["low", "medium", "high", "critical"] },
    "questionIds": { "type": "array", "items": { "type": "string" } },
    "submissionPackageIds": { "type": "array", "items": { "type": "string" } },
    "status": {
      "type": "string",
      "enum": ["uploaded", "parsing", "questions_detected", "in_analysis", "in_execution", "in_review", "packaged", "submitted", "closed", "archived"]
    },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" },
    "metadata": { "type": "object", "additionalProperties": true }
  },
  "additionalProperties": false
}
```

## Question

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/question.json",
  "title": "Question",
  "type": "object",
  "required": [
    "id",
    "idrId",
    "sequenceNumber",
    "sourceText",
    "normalizedText",
    "sourcePageNumbers",
    "isCompound",
    "status",
    "confirmationStatus",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "idrId": { "type": "string" },
    "sequenceNumber": { "type": "integer", "minimum": 1 },
    "sourceText": { "type": "string" },
    "normalizedText": { "type": "string" },
    "sourcePageNumbers": { "type": "array", "items": { "type": "integer", "minimum": 1 } },
    "sourceSpans": { "type": "array", "items": { "type": "object", "additionalProperties": true } },
    "isCompound": { "type": "boolean" },
    "dueDate": { "type": "string", "format": "date" },
    "status": {
      "type": "string",
      "enum": ["extracted", "normalized", "confirmed", "planned", "awaiting_evidence", "drafted", "in_review", "approved", "packaged", "submitted", "superseded"]
    },
    "confirmationStatus": { "type": "string", "enum": ["pending", "confirmed", "rejected"] },
    "currentIntentClassificationId": { "type": "string" },
    "currentOntologyMappingId": { "type": "string" },
    "currentResponseStrategyId": { "type": "string" },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## SubQuestion

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/sub-question.json",
  "title": "SubQuestion",
  "type": "object",
  "required": ["id", "questionId", "sequenceNumber", "text", "status", "createdAt", "updatedAt"],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "parentSubQuestionId": { "type": "string" },
    "sequenceNumber": { "type": "integer", "minimum": 1 },
    "text": { "type": "string" },
    "intentHint": { "type": "string" },
    "requiredEvidenceTypes": { "type": "array", "items": { "type": "string" } },
    "status": { "type": "string", "enum": ["proposed", "confirmed", "merged", "retired"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## IntentClassification

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/intent-classification.json",
  "title": "IntentClassification",
  "type": "object",
  "required": [
    "id",
    "questionId",
    "primaryIntent",
    "riskLevel",
    "sensitivityLevel",
    "reviewRequired",
    "confidenceScore",
    "classifiedBy",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "primaryIntent": { "type": "string" },
    "secondaryIntents": { "type": "array", "items": { "type": "string" } },
    "riskLevel": { "type": "string", "enum": ["low", "medium", "high", "critical"] },
    "sensitivityLevel": { "type": "string", "enum": ["public", "internal", "confidential", "restricted"] },
    "reviewRequired": { "type": "boolean" },
    "confidenceScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "rationale": { "type": "string" },
    "classifiedBy": { "type": "string" },
    "status": { "type": "string", "enum": ["generated", "needs_review", "confirmed", "overridden", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## OntologyMapping

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/ontology-mapping.json",
  "title": "OntologyMapping",
  "type": "object",
  "required": [
    "id",
    "questionId",
    "authority",
    "jurisdiction",
    "taxTopics",
    "confidenceScore",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "authority": { "type": "string" },
    "jurisdiction": { "type": "string" },
    "taxTopics": { "type": "array", "items": { "type": "string" } },
    "processAreas": { "type": "array", "items": { "type": "string" } },
    "systems": { "type": "array", "items": { "type": "string" } },
    "dataSources": { "type": "array", "items": { "type": "string" } },
    "evidenceTypes": { "type": "array", "items": { "type": "string" } },
    "ownerTeams": { "type": "array", "items": { "type": "string" } },
    "controlTags": { "type": "array", "items": { "type": "string" } },
    "confidenceScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "status": { "type": "string", "enum": ["generated", "validated", "overridden", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## HistoricalPrecedent

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/historical-precedent.json",
  "title": "HistoricalPrecedent",
  "type": "object",
  "required": [
    "id",
    "precedentCaseId",
    "precedentQuestionText",
    "similarityScore",
    "retrievalMethod",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "precedentCaseId": { "type": "string" },
    "precedentQuestionText": { "type": "string" },
    "precedentResponseSummary": { "type": "string" },
    "matchedTopics": { "type": "array", "items": { "type": "string" } },
    "similarityScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "retrievalMethod": { "type": "string", "enum": ["vector", "keyword", "hybrid"] },
    "evidenceIds": { "type": "array", "items": { "type": "string" } },
    "templateIds": { "type": "array", "items": { "type": "string" } },
    "status": { "type": "string", "enum": ["retrieved", "screened", "accepted", "rejected", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## ResponseStrategy

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/response-strategy.json",
  "title": "ResponseStrategy",
  "type": "object",
  "required": [
    "id",
    "questionId",
    "objective",
    "responsePosture",
    "evidencePlan",
    "ownerTeams",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "objective": { "type": "string" },
    "regulatorConcern": { "type": "string" },
    "responsePosture": { "type": "string", "enum": ["direct", "explanatory", "defensive", "escalated"] },
    "evidencePlan": { "type": "array", "items": { "type": "object", "additionalProperties": true } },
    "keyClaims": { "type": "array", "items": { "type": "string" } },
    "assumptions": { "type": "array", "items": { "type": "string" } },
    "riskFlags": { "type": "array", "items": { "type": "string" } },
    "ownerTeams": { "type": "array", "items": { "type": "string" } },
    "approvalRoles": { "type": "array", "items": { "type": "string" } },
    "precedentIds": { "type": "array", "items": { "type": "string" } },
    "status": { "type": "string", "enum": ["draft", "ready_for_review", "approved", "rejected", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## Task

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/task.json",
  "title": "Task",
  "type": "object",
  "required": [
    "id",
    "responseStrategyId",
    "questionId",
    "taskType",
    "title",
    "assignedTeam",
    "priority",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "responseStrategyId": { "type": "string" },
    "questionId": { "type": "string" },
    "taskType": { "type": "string" },
    "title": { "type": "string" },
    "description": { "type": "string" },
    "assignedTeam": { "type": "string" },
    "assignedTo": { "type": "string" },
    "dependsOnTaskIds": { "type": "array", "items": { "type": "string" } },
    "expectedEvidenceIds": { "type": "array", "items": { "type": "string" } },
    "inputRefs": { "type": "array", "items": { "type": "string" } },
    "outputRefs": { "type": "array", "items": { "type": "string" } },
    "dueDate": { "type": "string", "format": "date" },
    "priority": { "type": "string", "enum": ["low", "medium", "high", "critical"] },
    "status": { "type": "string", "enum": ["not_started", "ready", "in_progress", "blocked", "completed", "cancelled", "verified"] },
    "blockerReason": { "type": "string" },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## Evidence

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/evidence.json",
  "title": "Evidence",
  "type": "object",
  "required": [
    "id",
    "evidenceType",
    "title",
    "sensitivityLevel",
    "version",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "taskId": { "type": "string" },
    "evidenceType": { "type": "string" },
    "title": { "type": "string" },
    "description": { "type": "string" },
    "sourceSystem": { "type": "string" },
    "sourceUri": { "type": "string" },
    "hash": { "type": "string" },
    "legalEntity": { "type": "string" },
    "periodStart": { "type": "string", "format": "date" },
    "periodEnd": { "type": "string", "format": "date" },
    "ownerTeam": { "type": "string" },
    "sensitivityLevel": { "type": "string", "enum": ["public", "internal", "confidential", "restricted"] },
    "version": { "type": "integer", "minimum": 1 },
    "status": { "type": "string", "enum": ["identified", "requested", "collected", "validated", "rejected", "attached", "archived"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## EvidenceValidation

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/evidence-validation.json",
  "title": "EvidenceValidation",
  "type": "object",
  "required": [
    "id",
    "questionId",
    "evidenceIds",
    "completenessScore",
    "relevanceScore",
    "contradictionDetected",
    "recommendedAction",
    "validatedBy",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "evidenceIds": { "type": "array", "items": { "type": "string" } },
    "completenessScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "relevanceScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "freshnessScore": { "type": "number", "minimum": 0, "maximum": 1 },
    "contradictionDetected": { "type": "boolean" },
    "findings": { "type": "array", "items": { "type": "object", "additionalProperties": true } },
    "recommendedAction": { "type": "string", "enum": ["collect_more", "review", "proceed_to_draft"] },
    "validatedBy": { "type": "string" },
    "status": { "type": "string", "enum": ["generated", "needs_review", "accepted", "overridden", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## DraftResponse

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/draft-response.json",
  "title": "DraftResponse",
  "type": "object",
  "required": [
    "id",
    "questionId",
    "responseStrategyId",
    "version",
    "narrative",
    "citations",
    "generatedBy",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "questionId": { "type": "string" },
    "responseStrategyId": { "type": "string" },
    "version": { "type": "integer", "minimum": 1 },
    "narrative": { "type": "string" },
    "citations": { "type": "array", "items": { "type": "object", "additionalProperties": true } },
    "attachmentEvidenceIds": { "type": "array", "items": { "type": "string" } },
    "caveats": { "type": "array", "items": { "type": "string" } },
    "unresolvedAssumptions": { "type": "array", "items": { "type": "string" } },
    "generatedBy": { "type": "string" },
    "status": { "type": "string", "enum": ["draft", "ready_for_review", "changes_requested", "approved", "rejected", "packaged", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## Review

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/review.json",
  "title": "Review",
  "type": "object",
  "required": [
    "id",
    "targetType",
    "targetId",
    "reviewerRole",
    "decision",
    "reviewedAt",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "targetType": { "type": "string" },
    "targetId": { "type": "string" },
    "reviewerRole": { "type": "string" },
    "reviewerId": { "type": "string" },
    "decision": {
      "type": "string",
      "enum": ["approve", "reject", "comment", "request_more_evidence", "request_changes", "override"]
    },
    "comments": { "type": "string" },
    "requestedChanges": { "type": "array", "items": { "type": "string" } },
    "reviewedAt": { "type": "string", "format": "date-time" },
    "status": { "type": "string", "enum": ["pending", "completed", "withdrawn", "superseded"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## SubmissionPackage

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/submission-package.json",
  "title": "SubmissionPackage",
  "type": "object",
  "required": [
    "id",
    "idrId",
    "packageVersion",
    "questionIds",
    "draftResponseIds",
    "evidenceIds",
    "manifest",
    "exportFormats",
    "status",
    "createdAt",
    "updatedAt"
  ],
  "properties": {
    "id": { "type": "string" },
    "idrId": { "type": "string" },
    "packageVersion": { "type": "integer", "minimum": 1 },
    "questionIds": { "type": "array", "items": { "type": "string" } },
    "draftResponseIds": { "type": "array", "items": { "type": "string" } },
    "evidenceIds": { "type": "array", "items": { "type": "string" } },
    "coverLetterUri": { "type": "string" },
    "manifest": { "type": "object", "additionalProperties": true },
    "exportFormats": { "type": "array", "items": { "type": "string" } },
    "exportUris": { "type": "array", "items": { "type": "string" } },
    "submittedAt": { "type": "string", "format": "date-time" },
    "status": { "type": "string", "enum": ["assembling", "ready_for_review", "approved", "exported", "submitted", "superseded", "archived"] },
    "createdAt": { "type": "string", "format": "date-time" },
    "updatedAt": { "type": "string", "format": "date-time" }
  },
  "additionalProperties": false
}
```

## AuditTrailEvent

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://fam.local/schema/audit-trail-event.json",
  "title": "AuditTrailEvent",
  "type": "object",
  "required": [
    "id",
    "eventType",
    "targetType",
    "targetId",
    "actorType",
    "timestamp",
    "status"
  ],
  "properties": {
    "id": { "type": "string" },
    "eventType": { "type": "string" },
    "targetType": { "type": "string" },
    "targetId": { "type": "string" },
    "actorType": { "type": "string", "enum": ["user", "service", "system"] },
    "actorId": { "type": "string" },
    "correlationId": { "type": "string" },
    "beforeRef": { "type": "string" },
    "afterRef": { "type": "string" },
    "summary": { "type": "string" },
    "timestamp": { "type": "string", "format": "date-time" },
    "status": { "type": "string", "enum": ["recorded", "corrected", "voided"] },
    "metadata": { "type": "object", "additionalProperties": true }
  },
  "additionalProperties": false
}
```
