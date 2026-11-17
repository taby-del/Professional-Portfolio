import { MockButton } from "@/components/mockups/MockParts";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";

/** InnoFrit driver app: shipment tracking, route and status. */
export function FreightTrackingPhone() {
  return (
    <PhoneFrame label="INNOFRIT">
      <p className="text-body-sm font-semibold text-foreground">Shipment tracking</p>
      <span className="mt-4 flex flex-col gap-0.5 rounded-control bg-surface p-3 text-caption font-medium text-foreground">
        <span>Origin</span>
        <span>↓</span>
        <span>Destination</span>
      </span>
      <span className="mt-auto mb-2 text-eyebrow text-muted">Posted → Assigned</span>
      <MockButton>Tracking preview</MockButton>
    </PhoneFrame>
  );
}
