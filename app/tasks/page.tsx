import { LayoutShell } from "@/components/layout-shell";
import { TaskCard } from "@/components/task-card";
import { primaryCase } from "@/lib/mock-data";

const lanes = ["blocked", "in_progress", "ready", "not_started"];

export default function TaskBoardPage() {
  return (
    <LayoutShell title="Task Board" subtitle="Dependency-aware evidence execution">
      <div className="grid gap-5 xl:grid-cols-4">
        {lanes.map((lane) => (
          <section key={lane} className="rounded-[30px] border border-stone-200 bg-stone-100/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">{lane.replaceAll("_", " ")}</p>
            <div className="mt-4 space-y-4">
              {primaryCase.tasks.filter((task) => task.status === lane).map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </LayoutShell>
  );
}
