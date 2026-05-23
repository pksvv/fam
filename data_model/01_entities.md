# Entities

## 1. IDR

Represents the audit request package or case container.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable ID such as `idr_001` |
| `externalNoticeId` | string | No | Upstream authority reference |
| `authority` | string | Yes | Issuing authority such as `IRS` |
| `jurisdiction` | string | Yes | Country, state, or tax regime |
| `auditType` | string | Yes | Audit category |
| `taxPeriodStart` | date | Yes | Audit period start |
| `taxPeriodEnd` | date | Yes | Audit period end |
| `legalEntity` | string | Yes | In-scope company or branch |
| `sourceDocumentUris` | array<string> | Yes | Original uploaded notice locations |
| `receivedDate` | date | Yes | Date request was received |
| `ownerTeam` | string | Yes | Responsible team |
| `status` | string | Yes | Lifecycle status |
| `priority` | string | No | `low`, `medium`, `high`, `critical` |
| `questionIds` | array<string> | No | Extracted question IDs |
| `submissionPackageIds` | array<string> | No | Linked package versions |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |
| `metadata` | object | No | Non-canonical extensions |

Lifecycle statuses:
`uploaded`, `parsing`, `questions_detected`, `in_analysis`, `in_execution`, `in_review`, `packaged`, `submitted`, `closed`, `archived`

## 2. Question

Represents a top-level request item extracted from the IDR.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable question ID |
| `idrId` | string | Yes | Parent IDR |
| `sequenceNumber` | integer | Yes | Order within notice |
| `sourceText` | string | Yes | Raw extracted text |
| `normalizedText` | string | Yes | Cleaned question text |
| `sourcePageNumbers` | array<integer> | Yes | Pages where question appears |
| `sourceSpans` | array<object> | No | Span anchors, coordinates, excerpts |
| `isCompound` | boolean | Yes | Whether decomposition is needed |
| `dueDate` | date | No | If explicitly stated |
| `status` | string | Yes | Lifecycle state |
| `confirmationStatus` | string | Yes | Human confirmation state |
| `currentIntentClassificationId` | string | No | Latest classifier result |
| `currentOntologyMappingId` | string | No | Latest ontology map |
| `currentResponseStrategyId` | string | No | Latest strategy |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`extracted`, `normalized`, `confirmed`, `planned`, `awaiting_evidence`, `drafted`, `in_review`, `approved`, `packaged`, `submitted`, `superseded`

## 3. SubQuestion

Represents a decomposed child request from a compound question.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable sub-question ID |
| `questionId` | string | Yes | Parent question |
| `parentSubQuestionId` | string | No | Nested decomposition if needed |
| `sequenceNumber` | integer | Yes | Order under the parent |
| `text` | string | Yes | Child request text |
| `intentHint` | string | No | Initial extracted intent |
| `requiredEvidenceTypes` | array<string> | No | Expected evidence classes |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`proposed`, `confirmed`, `merged`, `retired`

## 4. IntentClassification

Represents the structured interpretation of what a question is asking.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable classification ID |
| `questionId` | string | Yes | Question being classified |
| `primaryIntent` | string | Yes | Main request type |
| `secondaryIntents` | array<string> | No | Additional request types |
| `riskLevel` | string | Yes | `low`, `medium`, `high`, `critical` |
| `sensitivityLevel` | string | Yes | `public`, `internal`, `confidential`, `restricted` |
| `reviewRequired` | boolean | Yes | Human review trigger |
| `confidenceScore` | number | Yes | 0.0 to 1.0 |
| `rationale` | string | No | Explanation for the label |
| `classifiedBy` | string | Yes | User or service |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`generated`, `needs_review`, `confirmed`, `overridden`, `superseded`

## 5. OntologyMapping

Represents normalized tags and routing metadata for a question.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable map ID |
| `questionId` | string | Yes | Question being mapped |
| `authority` | string | Yes | Issuing authority |
| `jurisdiction` | string | Yes | Jurisdiction |
| `taxTopics` | array<string> | Yes | Topic labels |
| `processAreas` | array<string> | No | Business process tags |
| `systems` | array<string> | No | Source systems |
| `dataSources` | array<string> | No | Structured sources |
| `evidenceTypes` | array<string> | No | Expected evidence classes |
| `ownerTeams` | array<string> | No | Suggested accountable teams |
| `controlTags` | array<string> | No | Governance and review tags |
| `confidenceScore` | number | Yes | Mapping confidence |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`generated`, `validated`, `overridden`, `superseded`

## 6. HistoricalPrecedent

Represents a reusable prior case, response, or evidence pack retrieved for guidance.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable precedent ID |
| `questionId` | string | No | Current consumer question |
| `precedentCaseId` | string | Yes | Historical case reference |
| `precedentQuestionText` | string | Yes | Prior question text |
| `precedentResponseSummary` | string | No | Outcome summary |
| `matchedTopics` | array<string> | No | Shared tags |
| `similarityScore` | number | Yes | 0.0 to 1.0 |
| `retrievalMethod` | string | Yes | `vector`, `keyword`, `hybrid` |
| `evidenceIds` | array<string> | No | Linked historical evidence |
| `templateIds` | array<string> | No | Suggested templates |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`retrieved`, `screened`, `accepted`, `rejected`, `superseded`

## 7. ResponseStrategy

Represents the structured response plan for a question.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable strategy ID |
| `questionId` | string | Yes | Question being answered |
| `objective` | string | Yes | What the response must accomplish |
| `regulatorConcern` | string | No | Inferred concern behind the request |
| `responsePosture` | string | Yes | `direct`, `explanatory`, `defensive`, `escalated` |
| `evidencePlan` | array<object> | Yes | Required evidence plan items |
| `keyClaims` | array<string> | No | Claims intended in the response |
| `assumptions` | array<string> | No | Open assumptions |
| `riskFlags` | array<string> | No | Risk tags |
| `ownerTeams` | array<string> | Yes | Responsible teams |
| `approvalRoles` | array<string> | No | Required approvers |
| `precedentIds` | array<string> | No | Supporting precedent set |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`draft`, `ready_for_review`, `approved`, `rejected`, `superseded`

## 8. Task

Represents a unit of executable work derived from the strategy.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable task ID |
| `responseStrategyId` | string | Yes | Parent strategy |
| `questionId` | string | Yes | Related question |
| `taskType` | string | Yes | Work category |
| `title` | string | Yes | Short label |
| `description` | string | No | Detailed instructions |
| `assignedTeam` | string | Yes | Owning team |
| `assignedTo` | string | No | Optional named owner |
| `dependsOnTaskIds` | array<string> | No | DAG dependencies |
| `expectedEvidenceIds` | array<string> | No | Target evidence outputs |
| `inputRefs` | array<string> | No | Inputs or source objects |
| `outputRefs` | array<string> | No | Produced objects |
| `dueDate` | date | No | Completion target |
| `priority` | string | Yes | `low`, `medium`, `high`, `critical` |
| `status` | string | Yes | Lifecycle state |
| `blockerReason` | string | No | Why the task is blocked |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`not_started`, `ready`, `in_progress`, `blocked`, `completed`, `cancelled`, `verified`

## 9. Evidence

Represents a supporting artifact or evidence metadata record.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable evidence ID |
| `questionId` | string | No | Directly supported question |
| `taskId` | string | No | Producing task |
| `evidenceType` | string | Yes | Such as `report`, `contract`, `email` |
| `title` | string | Yes | Human-readable name |
| `description` | string | No | Summary |
| `sourceSystem` | string | No | System of origin |
| `sourceUri` | string | No | Storage or reference URI |
| `hash` | string | No | Integrity hash |
| `legalEntity` | string | No | Entity covered |
| `periodStart` | date | No | Evidence period start |
| `periodEnd` | date | No | Evidence period end |
| `ownerTeam` | string | No | Responsible team |
| `sensitivityLevel` | string | Yes | Data sensitivity |
| `version` | integer | Yes | Version number |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`identified`, `requested`, `collected`, `validated`, `rejected`, `attached`, `archived`

## 10. EvidenceValidation

Represents a sufficiency and quality assessment for evidence.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable validation ID |
| `questionId` | string | Yes | Evaluated question |
| `evidenceIds` | array<string> | Yes | Evidence set under review |
| `completenessScore` | number | Yes | 0.0 to 1.0 |
| `relevanceScore` | number | Yes | 0.0 to 1.0 |
| `freshnessScore` | number | No | 0.0 to 1.0 |
| `contradictionDetected` | boolean | Yes | Contradiction flag |
| `findings` | array<object> | No | Gaps, issues, and notes |
| `recommendedAction` | string | Yes | `collect_more`, `review`, `proceed_to_draft` |
| `validatedBy` | string | Yes | Service or reviewer |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`generated`, `needs_review`, `accepted`, `overridden`, `superseded`

## 11. DraftResponse

Represents a versioned narrative answer for a question.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable draft ID |
| `questionId` | string | Yes | Answered question |
| `responseStrategyId` | string | Yes | Governing strategy |
| `version` | integer | Yes | Draft version |
| `narrative` | string | Yes | Main response text |
| `citations` | array<object> | Yes | Evidence references |
| `attachmentEvidenceIds` | array<string> | No | Attachments to include |
| `caveats` | array<string> | No | Limitations and qualifiers |
| `unresolvedAssumptions` | array<string> | No | Still-open issues |
| `generatedBy` | string | Yes | User or service |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`draft`, `ready_for_review`, `changes_requested`, `approved`, `rejected`, `packaged`, `superseded`

## 12. Review

Represents a human decision or comment on strategy, evidence, draft, or package.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable review ID |
| `targetType` | string | Yes | Reviewed object type |
| `targetId` | string | Yes | Reviewed object ID |
| `reviewerRole` | string | Yes | Reviewer function |
| `reviewerId` | string | No | Named reviewer |
| `decision` | string | Yes | Outcome |
| `comments` | string | No | Rationale or feedback |
| `requestedChanges` | array<string> | No | Action items |
| `reviewedAt` | datetime | Yes | Decision timestamp |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`pending`, `completed`, `withdrawn`, `superseded`

Decision values:
`approve`, `reject`, `comment`, `request_more_evidence`, `request_changes`, `override`

## 13. SubmissionPackage

Represents an exportable submission bundle for the authority.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable package ID |
| `idrId` | string | Yes | Parent IDR |
| `packageVersion` | integer | Yes | Package version |
| `questionIds` | array<string> | Yes | Included questions |
| `draftResponseIds` | array<string> | Yes | Included approved drafts |
| `evidenceIds` | array<string> | Yes | Included attachments |
| `coverLetterUri` | string | No | Optional generated cover letter |
| `manifest` | object | Yes | Attachment index and metadata |
| `exportFormats` | array<string> | Yes | Such as `pdf`, `docx`, `zip`, `json` |
| `exportUris` | array<string> | No | Produced outputs |
| `submittedAt` | datetime | No | External submission time |
| `status` | string | Yes | Lifecycle state |
| `createdAt` | datetime | Yes | Creation timestamp |
| `updatedAt` | datetime | Yes | Last update timestamp |

Lifecycle statuses:
`assembling`, `ready_for_review`, `approved`, `exported`, `submitted`, `superseded`, `archived`

## 14. AuditTrailEvent

Represents an immutable event emitted for traceability and governance.

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Stable event ID |
| `eventType` | string | Yes | Machine-readable event name |
| `targetType` | string | Yes | Entity type changed |
| `targetId` | string | Yes | Entity ID changed |
| `actorType` | string | Yes | `user`, `service`, `system` |
| `actorId` | string | No | User or service name |
| `correlationId` | string | No | Request or workflow trace ID |
| `beforeRef` | string | No | Prior version pointer |
| `afterRef` | string | No | New version pointer |
| `summary` | string | No | Human-readable explanation |
| `timestamp` | datetime | Yes | Event timestamp |
| `status` | string | Yes | Event validity state |
| `metadata` | object | No | Extra audit payload |

Lifecycle statuses:
`recorded`, `corrected`, `voided`
