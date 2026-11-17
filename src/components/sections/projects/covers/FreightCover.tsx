import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { Placed } from "@/components/mockups/Placed";
import { FreightDashboard } from "./FreightDashboard";
import { FreightTrackingPhone } from "./FreightPhone";

/** Wide composition (871 × 408 design px): dashboard + tracking phone. */
export function FreightCover() {
  return (
    <>
      <Placed x={0} y={0} w={764} h={393}>
        <BrowserFrame>
          <FreightDashboard />
        </BrowserFrame>
      </Placed>
      <Placed x={682} y={78} w={189} h={330} depth={14}>
        <FreightTrackingPhone />
      </Placed>
    </>
  );
}

/** Compact composition for phones (189 × 330): the tracking phone. */
export function FreightCoverCompact() {
  return (
    <Placed x={0} y={0} w={189} h={330}>
      <FreightTrackingPhone />
    </Placed>
  );
}
