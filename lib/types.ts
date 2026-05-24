export type StatusTone = "neutral" | "info" | "success" | "warning" | "critical";
export type RiskLevel = "low" | "medium" | "high" | "critical";

export type TimelineItem = {
  label: string;
  date: string;
  detail: string;
  tone: StatusTone;
};

export type SourceRef = {
  label: string;
  page: string;
  excerpt: string;
};

export type EvidenceItem = {
  id: string;
  title: string;
  type: string;
  sourceSystem: string;
  ownerTeam: string;
  status: string;
  freshness: string;
  legalEntity: string;
  period: string;
  sourceRef: SourceRef;
};

export type TaskItem = {
  id: string;
  title: string;
  taskType: string;
  assignedTeam: string;
  assignedTo: string;
  dueDate: string;
  priority: RiskLevel;
  status: string;
  blockerReason?: string;
};

export type QuestionItem = {
  id: string;
  sequenceNumber: number;
  title: string;
  normalizedText: string;
  intent: string;
  status: string;
  riskLevel: RiskLevel;
  confidence: number;
  sourcePageNumbers: number[];
  ownerTeams: string[];
  evidenceGap: string;
  reviewRequired: boolean;
};

export type StrategyItem = {
  id: string;
  objective: string;
  regulatorConcern: string;
  responsePosture: string;
  requiredEvidence: string[];
  ownerTeams: string[];
  approvalRoles: string[];
  riskFlags: string[];
  assumptions: string[];
  draftingGuidance: string[];
};

export type ReviewItem = {
  id: string;
  stage: string;
  owner: string;
  decision: string;
  dueDate: string;
  note: string;
};

export type PackageItem = {
  id: string;
  exportFormat: string;
  attachmentCount: number;
  approvals: string[];
  status: string;
  packageReadiness: string;
};

export type IDRCase = {
  id: string;
  externalNoticeId: string;
  authority: string;
  jurisdiction: string;
  auditType: string;
  legalEntity: string;
  receivedDate: string;
  taxPeriod: string;
  ownerTeam: string;
  status: string;
  priority: RiskLevel;
  executiveSummary: string;
  questions: QuestionItem[];
  strategy: StrategyItem;
  tasks: TaskItem[];
  evidence: EvidenceItem[];
  reviews: ReviewItem[];
  submissionPackage: PackageItem;
  timeline: TimelineItem[];
};
