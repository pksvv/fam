import { LayoutShell } from "@/components/layout-shell";

const ontologyRows = [
  ["Authority", "IRS", "Active"],
  ["Tax topic", "Intercompany services", "Active"],
  ["Evidence type", "system_extract", "Needs review"],
  ["Owner team", "Finance Controllership", "Active"],
  ["Control tag", "sensitive_legal_position", "Governed"],
];

export default function OntologyAdminPage() {
  return (
    <LayoutShell title="Ontology Admin" subtitle="Classification, routing, and policy controls">
      <section className="rounded-[30px] border border-stone-200 bg-[var(--card)] p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Governed ontology catalog</p>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm text-stone-700">
            <thead className="text-xs uppercase tracking-[0.24em] text-stone-500">
              <tr>
                <th className="pb-4">Dimension</th>
                <th className="pb-4">Value</th>
                <th className="pb-4">State</th>
              </tr>
            </thead>
            <tbody>
              {ontologyRows.map(([dimension, value, state]) => (
                <tr key={value} className="border-t border-stone-200">
                  <td className="py-4 font-semibold text-stone-900">{dimension}</td>
                  <td className="py-4">{value}</td>
                  <td className="py-4">{state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LayoutShell>
  );
}
