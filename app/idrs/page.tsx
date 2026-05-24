import { LayoutShell } from "@/components/layout-shell";
import { StatusBadge } from "@/components/status-badge";
import { RiskBadge } from "@/components/risk-badge";
import { idrCases } from "@/lib/mock-data";
import { statusTone } from "@/lib/utils";

export default function IDRListPage() {
  return (
    <LayoutShell title="IDR List" subtitle="Case portfolio and intake monitoring">
      <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-stone-700">
            <thead className="text-xs uppercase tracking-[0.24em] text-stone-500">
              <tr>
                <th className="pb-4">Case</th>
                <th className="pb-4">Entity</th>
                <th className="pb-4">Authority</th>
                <th className="pb-4">Period</th>
                <th className="pb-4">Owner</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Risk</th>
              </tr>
            </thead>
            <tbody>
              {idrCases.map((idr) => (
                <tr key={idr.id} className="border-t border-stone-200">
                  <td className="py-4 font-semibold text-stone-900">{idr.id}</td>
                  <td className="py-4">{idr.legalEntity}</td>
                  <td className="py-4">{idr.authority}</td>
                  <td className="py-4">{idr.taxPeriod}</td>
                  <td className="py-4">{idr.ownerTeam}</td>
                  <td className="py-4"><StatusBadge label={idr.status} tone={statusTone(idr.status)} /></td>
                  <td className="py-4"><RiskBadge risk={idr.priority} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LayoutShell>
  );
}
