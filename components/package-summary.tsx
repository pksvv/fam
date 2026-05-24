import { PackageItem } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import { statusTone } from "@/lib/utils";

export function PackageSummary({ pkg }: { pkg: PackageItem }) {
  return (
    <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Submission package</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">{pkg.exportFormat}</h2>
        </div>
        <StatusBadge label={pkg.status} tone={statusTone(pkg.status)} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <Stat label="Readiness" value={pkg.packageReadiness} />
        <Stat label="Attachments" value={pkg.attachmentCount.toString()} />
        <Stat label="Approvals" value={pkg.approvals.length.toString()} />
      </div>
      <p className="mt-5 text-sm leading-6 text-stone-700">{pkg.approvals.join(" • ")}</p>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-stone-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-stone-900">{value}</p>
    </div>
  );
}
