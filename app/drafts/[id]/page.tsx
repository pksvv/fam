import { LayoutShell } from "@/components/layout-shell";
import { SourceReference } from "@/components/source-reference";
import { primaryCase } from "@/lib/mock-data";

export default function DraftResponseEditorPage() {
  return (
    <LayoutShell title="Draft Response Editor" subtitle="Traceable narrative assembly">
      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Draft narrative</p>
          <div className="mt-5 space-y-4 rounded-[28px] border border-stone-200 bg-stone-50 p-5 text-sm leading-7 text-stone-800">
            <p>
              FAM Holdings US Inc. determined the FY2024 intercompany management service charge under its documented shared-services policy and the executed intercompany services agreement dated January 1, 2024.
            </p>
            <p>
              The charge pool is derived from centralized service costs and allocated to benefited legal entities using documented operational drivers, including headcount and ticket volume, as reflected in the calculation workbook.
            </p>
            <p>
              Ledger-level charges are then reconciled to the receiving-entity trial balance. The APAC tie-out remains in progress and will be supplied as a supplemental attachment once validation is complete.
            </p>
          </div>
        </section>
        <section className="grid gap-5">
          <div className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Claim support</p>
            <div className="mt-5 space-y-4">
              {primaryCase.evidence.slice(0, 2).map((item) => (
                <SourceReference key={item.id} reference={item.sourceRef} />
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-amber-200 bg-amber-50 p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Open caveat</p>
            <p className="mt-3 text-sm leading-7 text-amber-900">
              The countersigned amendment and APAC reconciliation should be resolved before reviewer approval to avoid unsupported cross-period assertions.
            </p>
          </div>
        </section>
      </div>
    </LayoutShell>
  );
}
