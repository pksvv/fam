import { EvidenceCard } from "@/components/evidence-card";
import { LayoutShell } from "@/components/layout-shell";
import { primaryCase } from "@/lib/mock-data";

export default function EvidenceLibraryPage() {
  return (
    <LayoutShell title="Evidence Library" subtitle="Artifact lineage, freshness, and sufficiency">
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {primaryCase.evidence.map((item) => (
          <EvidenceCard key={item.id} evidence={item} />
        ))}
      </div>
    </LayoutShell>
  );
}
