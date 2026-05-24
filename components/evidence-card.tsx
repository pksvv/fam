import { EvidenceItem } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import { SourceReference } from "@/components/source-reference";
import { statusTone } from "@/lib/utils";

export function EvidenceCard({ evidence }: { evidence: EvidenceItem }) {
  return (
    <article className="rounded-[26px] border border-stone-200 bg-[var(--card)] p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{evidence.type}</p>
          <h3 className="mt-2 text-lg font-semibold text-stone-900">{evidence.title}</h3>
        </div>
        <StatusBadge label={evidence.status} tone={statusTone(evidence.status)} />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-stone-700 md:grid-cols-2">
        <p>Source: {evidence.sourceSystem}</p>
        <p>Owner: {evidence.ownerTeam}</p>
        <p>Entity: {evidence.legalEntity}</p>
        <p>Period: {evidence.period}</p>
      </div>
      <p className="mt-4 text-sm text-stone-600">{evidence.freshness}</p>
      <div className="mt-4">
        <SourceReference reference={evidence.sourceRef} />
      </div>
    </article>
  );
}
