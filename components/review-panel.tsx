import { ReviewItem } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import { statusTone } from "@/lib/utils";

export function ReviewPanel({ reviews }: { reviews: ReviewItem[] }) {
  return (
    <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Review queue</p>
      <h2 className="mt-2 text-2xl font-semibold text-stone-900">Human approval gates</h2>
      <div className="mt-6 space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-3xl border border-stone-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-stone-900">{review.stage}</h3>
                <p className="text-sm text-stone-600">{review.owner}</p>
              </div>
              <StatusBadge label={review.decision} tone={statusTone(review.decision)} />
            </div>
            <p className="mt-3 text-sm text-stone-700">Due {review.dueDate}</p>
            <p className="mt-2 text-sm leading-6 text-stone-700">{review.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
