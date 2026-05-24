import { LayoutShell } from "@/components/layout-shell";
import { ReviewPanel } from "@/components/review-panel";
import { primaryCase } from "@/lib/mock-data";

export default function ReviewQueuePage() {
  return (
    <LayoutShell title="Review Queue" subtitle="Approval workload and escalation checkpoints">
      <ReviewPanel reviews={primaryCase.reviews} />
    </LayoutShell>
  );
}
