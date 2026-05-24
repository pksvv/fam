import { RiskLevel } from "@/lib/types";
import { riskTone } from "@/lib/utils";
import { StatusBadge } from "@/components/status-badge";

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  return <StatusBadge label={`${risk} risk`} tone={riskTone(risk)} />;
}
