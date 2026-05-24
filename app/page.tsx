import { LayoutShell } from "@/components/layout-shell";
import { PackageSummary } from "@/components/package-summary";
import { QuestionCard } from "@/components/question-card";
import { ReviewPanel } from "@/components/review-panel";
import { Timeline } from "@/components/timeline";
import { primaryCase } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <LayoutShell title="Dashboard" subtitle="Audit response command center">
      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <section className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-4">
            <Metric label="Questions" value={primaryCase.questions.length.toString()} detail="Confirmed from OCR" />
            <Metric label="Open tasks" value={primaryCase.tasks.length.toString()} detail="Across execution lanes" />
            <Metric label="Evidence items" value={primaryCase.evidence.length.toString()} detail="Tracked with lineage" />
            <Metric label="Package readiness" value={primaryCase.submissionPackage.packageReadiness} detail="Submission posture" />
          </div>
          <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Highest risk questions</p>
            <div className="mt-5 grid gap-4">
              {primaryCase.questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>
          </section>
        </section>
        <div className="grid gap-5">
          <PackageSummary pkg={primaryCase.submissionPackage} />
          <ReviewPanel reviews={primaryCase.reviews} />
          <Timeline items={primaryCase.timeline} />
        </div>
      </div>
    </LayoutShell>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-[28px] border border-stone-200 bg-[var(--card)] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-stone-900">{value}</p>
      <p className="mt-2 text-sm text-stone-600">{detail}</p>
    </div>
  );
}
