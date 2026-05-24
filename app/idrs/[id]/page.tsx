import { LayoutShell } from "@/components/layout-shell";
import { PackageSummary } from "@/components/package-summary";
import { QuestionCard } from "@/components/question-card";
import { Timeline } from "@/components/timeline";
import { primaryCase } from "@/lib/mock-data";

export default function IDRDetailPage() {
  return (
    <LayoutShell title="IDR Detail" subtitle={`Case detail for ${primaryCase.id}`}>
      <div className="grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <section className="grid gap-5">
          <div className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Case metadata</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3 text-sm text-stone-700">
              <p>External notice: {primaryCase.externalNoticeId}</p>
              <p>Received: {primaryCase.receivedDate}</p>
              <p>Owner team: {primaryCase.ownerTeam}</p>
              <p>Authority: {primaryCase.authority}</p>
              <p>Jurisdiction: {primaryCase.jurisdiction}</p>
              <p>Audit type: {primaryCase.auditType}</p>
            </div>
          </div>
          {primaryCase.questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </section>
        <div className="grid gap-5">
          <PackageSummary pkg={primaryCase.submissionPackage} />
          <Timeline items={primaryCase.timeline} />
        </div>
      </div>
    </LayoutShell>
  );
}
