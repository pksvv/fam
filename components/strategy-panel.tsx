import { StrategyItem } from "@/lib/types";

export function StrategyPanel({ strategy }: { strategy: StrategyItem }) {
  return (
    <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Response strategy</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Structured regulator response plan</h2>
        </div>
        <div className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700">
          Posture: {strategy.responsePosture}
        </div>
      </div>
      <p className="mt-5 text-sm leading-7 text-stone-700">{strategy.objective}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl bg-stone-50 p-4">
          <h3 className="text-sm font-semibold text-stone-900">Regulator concern</h3>
          <p className="mt-2 text-sm leading-6 text-stone-700">{strategy.regulatorConcern}</p>
        </div>
        <div className="rounded-3xl bg-stone-50 p-4">
          <h3 className="text-sm font-semibold text-stone-900">Approvals</h3>
          <p className="mt-2 text-sm leading-6 text-stone-700">{strategy.approvalRoles.join(" • ")}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <ListBlock title="Required evidence" items={strategy.requiredEvidence} />
        <ListBlock title="Risk flags" items={strategy.riskFlags} />
        <ListBlock title="Assumptions" items={strategy.assumptions} />
        <ListBlock title="Drafting guidance" items={strategy.draftingGuidance} />
      </div>
    </section>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-stone-200 p-4">
      <h3 className="text-sm font-semibold text-stone-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
