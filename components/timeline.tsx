import { TimelineItem } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Case timeline</p>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={`${item.label}-${item.date}`} className="flex gap-4 rounded-3xl border border-stone-200 p-4">
            <div className="mt-1 h-3 w-3 rounded-full bg-[var(--accent)]" />
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-stone-900">{item.label}</h3>
                <StatusBadge label={item.date} tone={item.tone} />
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-700">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
