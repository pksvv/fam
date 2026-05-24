import { RiskLevel, StatusTone } from "@/lib/types";

export function riskTone(level: RiskLevel): StatusTone {
  return level === "critical"
    ? "critical"
    : level === "high"
      ? "warning"
      : level === "medium"
        ? "info"
        : "success";
}

export function statusTone(status: string): StatusTone {
  if (["approved", "validated", "completed", "confirmed"].includes(status)) {
    return "success";
  }
  if (["blocked", "critical", "rejected", "needs_more_evidence"].includes(status)) {
    return "critical";
  }
  if (["in_review", "in_progress", "in_preparation", "awaiting_evidence"].includes(status)) {
    return "warning";
  }
  if (["planned", "ready", "queued", "requested"].includes(status)) {
    return "info";
  }
  return "neutral";
}

export function toneClasses(tone: StatusTone): string {
  switch (tone) {
    case "success":
      return "border-emerald-300 bg-emerald-50 text-emerald-900";
    case "warning":
      return "border-amber-300 bg-amber-50 text-amber-900";
    case "critical":
      return "border-rose-300 bg-rose-50 text-rose-900";
    case "info":
      return "border-sky-300 bg-sky-50 text-sky-900";
    default:
      return "border-stone-300 bg-stone-50 text-stone-700";
  }
}
