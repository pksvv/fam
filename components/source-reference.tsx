import { SourceRef } from "@/lib/types";

export function SourceReference({ reference }: { reference: SourceRef }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">{reference.label}</p>
      <p className="mt-1 text-sm font-medium text-stone-700">{reference.page}</p>
      <p className="mt-2 text-sm leading-6 text-stone-600">{reference.excerpt}</p>
    </div>
  );
}
