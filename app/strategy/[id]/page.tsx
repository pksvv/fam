import { LayoutShell } from "@/components/layout-shell";
import { StrategyPanel } from "@/components/strategy-panel";
import { primaryCase } from "@/lib/mock-data";

export default function StrategyWorkspacePage() {
  return (
    <LayoutShell title="Strategy Workspace" subtitle="Human-reviewed response planning">
      <StrategyPanel strategy={primaryCase.strategy} />
    </LayoutShell>
  );
}
