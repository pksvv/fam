import { toneClasses } from "@/lib/utils";
import { StatusTone } from "@/lib/types";

export function StatusBadge({ label, tone }: { label: string; tone: StatusTone }) {
  return (
    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${toneClasses(tone)}`}>
      {label.replaceAll("_", " ")}
    </span>
  );
}
