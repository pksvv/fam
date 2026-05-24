import Link from "next/link";
import { ReactNode } from "react";
import { primaryCase } from "@/lib/mock-data";
import { RiskBadge } from "@/components/risk-badge";
import { StatusBadge } from "@/components/status-badge";
import { statusTone } from "@/lib/utils";

const nav = [
  ["Dashboard", "/"],
  ["IDR List", "/idrs"],
  ["IDR Detail", `/idrs/${primaryCase.id}`],
  ["Question Workspace", `/questions/${primaryCase.questions[0].id}`],
  ["Strategy Workspace", `/strategy/${primaryCase.questions[0].id}`],
  ["Task Board", "/tasks"],
  ["Evidence Library", "/evidence"],
  ["Draft Response Editor", `/drafts/${primaryCase.questions[0].id}`],
  ["Review Queue", "/review"],
  ["Submission Package Builder", "/packages/builder"],
  ["Ontology Admin", "/admin/ontology"],
];

export function LayoutShell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="app-shell px-4 py-4 text-[var(--ink)] md:px-6">
      <div className="mx-auto grid max-w-[1600px] gap-4 xl:grid-cols-[290px_minmax(0,1fr)]">
        <aside className="glass rounded-[34px] border border-stone-200 p-5 shadow-sm">
          <div className="rounded-[28px] bg-[var(--accent)] p-5 text-stone-50">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-200">FAM / IDR GenAI</p>
            <h1 className="mt-3 text-2xl font-semibold">Audit operations workbench</h1>
            <p className="mt-3 text-sm leading-6 text-stone-200">
              Structured intake, evidence, review, and package assembly for regulator response execution.
            </p>
          </div>
          <div className="mt-5 space-y-2">
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-5 rounded-[26px] border border-stone-200 bg-[var(--card)] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Active case</p>
            <h2 className="mt-2 text-lg font-semibold text-stone-900">{primaryCase.id}</h2>
            <p className="mt-2 text-sm text-stone-600">{primaryCase.legalEntity}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <StatusBadge label={primaryCase.status} tone={statusTone(primaryCase.status)} />
              <RiskBadge risk={primaryCase.priority} />
            </div>
          </div>
        </aside>
        <main className="glass rounded-[34px] border border-stone-200 p-5 shadow-sm">
          <header className="rounded-[30px] border border-stone-200 bg-[var(--card)] px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500">{title}</p>
            <div className="mt-2 flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
              <div>
                <h2 className="text-3xl font-semibold text-stone-900">{subtitle}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">{primaryCase.executiveSummary}</p>
              </div>
              <div className="grid gap-2 text-sm text-stone-700 md:grid-cols-2">
                <p>Authority: {primaryCase.authority}</p>
                <p>Jurisdiction: {primaryCase.jurisdiction}</p>
                <p>Audit type: {primaryCase.auditType}</p>
                <p>Tax period: {primaryCase.taxPeriod}</p>
              </div>
            </div>
          </header>
          <div className="mt-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
