import { LayoutShell } from "@/components/layout-shell";
import { PackageSummary } from "@/components/package-summary";
import { primaryCase } from "@/lib/mock-data";

export default function SubmissionPackageBuilderPage() {
  return (
    <LayoutShell title="Submission Package Builder" subtitle="Controlled export assembly">
      <div className="grid gap-5 xl:grid-cols-[1fr_1fr]">
        <PackageSummary pkg={primaryCase.submissionPackage} />
        <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Package contents</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-stone-700">
            <li>• Question-level narrative responses with reviewer version history</li>
            <li>• Attachment index mapped to evidence IDs and source systems</li>
            <li>• Open caveat register for unresolved supplemental items</li>
            <li>• Approval trail covering strategy, evidence sufficiency, and final release</li>
            <li>• Export control sheet for regulator-facing PDF and evidence bundle</li>
          </ul>
        </section>
      </div>
    </LayoutShell>
  );
}
