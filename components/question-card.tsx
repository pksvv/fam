import { QuestionItem } from "@/lib/types";
import { RiskBadge } from "@/components/risk-badge";
import { StatusBadge } from "@/components/status-badge";
import { statusTone } from "@/lib/utils";

export function QuestionCard({ question }: { question: QuestionItem }) {
  return (
    <article className="rounded-[28px] border border-stone-200 bg-[var(--card)] p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
            Q{question.sequenceNumber.toString().padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-stone-900">{question.title}</h3>
        </div>
        <div className="flex gap-2">
          <RiskBadge risk={question.riskLevel} />
          <StatusBadge label={question.status} tone={statusTone(question.status)} />
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-stone-700">{question.normalizedText}</p>
      <div className="mt-4 grid gap-3 text-sm text-stone-600 md:grid-cols-3">
        <p>Intent: {question.intent}</p>
        <p>Owners: {question.ownerTeams.join(", ")}</p>
        <p>Pages: {question.sourcePageNumbers.join(", ")}</p>
      </div>
      <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-900">{question.evidenceGap}</p>
    </article>
  );
}
