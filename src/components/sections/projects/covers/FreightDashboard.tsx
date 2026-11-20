import { MockChip } from "@/components/mockups/MockParts";
import { MockSidebar } from "@/components/mockups/MockSidebar";
import { MockStats } from "@/components/mockups/MockStats";
import { MockTable } from "@/components/mockups/MockTable";

const ROWS = [0, 1, 2].map(() => ["Shipment ID", "Origin → Destination"] as const);

/** InnoFrit shipment-management dashboard (inside a BrowserFrame). */
export function FreightDashboard() {
  return (
    <>
      <MockSidebar
        title="INNOFRIT"
        items={["Overview", "Shipments", "Load posting", "Carriers", "Tracking"]}
        active="Shipments"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4 py-4 pr-24 pl-5">
        <p className="text-body font-semibold text-foreground">Shipment management</p>
        <MockStats labels={["Loads", "Carriers", "Tracking"]} />
        <MockTable
          columns={["Shipment", "Route", "Status"]}
          rows={ROWS}
          status={() => <MockChip>Status</MockChip>}
        />
      </div>
    </>
  );
}
