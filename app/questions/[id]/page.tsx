import { LayoutShell } from "@/components/layout-shell";
import { QuestionCard } from "@/components/question-card";
import { SourceReference } from "@/components/source-reference";
import { primaryCase } from "@/lib/mock-data";

export default function QuestionWorkspacePage() {
  const question = primaryCase.questions[0];
  const evidence = primaryCase.evidence[0];

  return (
    <LayoutShell title="Question Workspace" subtitle="Question classification, lineage, and routing">
      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="grid gap-5">
          <QuestionCard question={question} />
          <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Ontology and intent</p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 text-sm text-stone-700">
              <p>Primary intent: {question.intent}</p>
              <p>Risk confidence: {Math.round(question.confidence * 100)}%</p>
              <p>Owner teams: {question.ownerTeams.join(", ")}</p>
              <p>Review required: {question.reviewRequired ? "Yes" : "No"}</p>
              <p>Tax topic: Intercompany services</p>
              <p>Systems: SAP S/4, Contract Archive, SharePoint Finance</p>
            </div>
          </section>
        </section>
        <section className="grid gap-5">
          <div className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Source traceability</p>
            <div className="mt-5">
              <SourceReference reference={evidence.sourceRef} />
            </div>
          </div>
          <div className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Historical precedent signal</p>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              Hybrid retrieval matched 2 prior transfer-pricing responses with accepted agreement support and ledger tie-out exhibits. Reuse is allowed for structure, but numeric examples must remain case-specific.
            </p>
          </div>
        </section>
      </div>
    </LayoutShell>
  );
}
