import { TaskItem } from "@/lib/types";
import { RiskBadge } from "@/components/risk-badge";
import { StatusBadge } from "@/components/status-badge";
import { statusTone } from "@/lib/utils";

export function TaskCard({ task }: { task: TaskItem }) {
  return (
    <article className="rounded-[26px] border border-stone-200 bg-[var(--card)] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{task.taskType}</p>
          <h3 className="mt-2 text-lg font-semibold text-stone-900">{task.title}</h3>
        </div>
        <RiskBadge risk={task.priority} />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <StatusBadge label={task.status} tone={statusTone(task.status)} />
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700">Due {task.dueDate}</span>
      </div>
      <div className="mt-4 text-sm leading-6 text-stone-700">
        <p>Team: {task.assignedTeam}</p>
        <p>Owner: {task.assignedTo}</p>
      </div>
      {task.blockerReason ? <p className="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-900">{task.blockerReason}</p> : null}
    </article>
  );
}
