import { MockChip } from "@/components/mockups/MockParts";
import { MockSidebar } from "@/components/mockups/MockSidebar";
import { MockStats } from "@/components/mockups/MockStats";
import { MockTable } from "@/components/mockups/MockTable";

const ROWS = [0, 1, 2].map(() => ["Employee name", "Mobility program"] as const);

/** Yiino for Business mobility dashboard (inside a BrowserFrame). */
export function BusinessDashboard() {
  return (
    <>
      <MockSidebar
        title="YIINO BUSINESS"
        items={["Overview", "Employees", "Programs", "Vouchers", "Activities"]}
        active="Employees"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4 px-5 py-4">
        <p className="text-body font-semibold text-foreground">Mobility overview</p>
        <MockStats labels={["Employees", "Programs", "Spending"]} />
        <MockTable
          columns={["Employee", "Program", "Access"]}
          rows={ROWS}
          status={(row) => (row === 0 ? <MockChip>Access</MockChip> : null)}
        />
      </div>
    </>
  );
}
