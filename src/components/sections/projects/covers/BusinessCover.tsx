import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { Placed } from "@/components/mockups/Placed";
import { BusinessDashboard } from "./BusinessDashboard";
import { VoucherCard } from "./VoucherCard";

/** Wide composition (870 × 408 design px): dashboard + voucher panel. */
export function BusinessCover() {
  return (
    <>
      <Placed x={0} y={0} w={870} h={374}>
        <BrowserFrame>
          <BusinessDashboard />
        </BrowserFrame>
      </Placed>
      <Placed x={474} y={254} w={358} h={154} depth={14}>
        <VoucherCard />
      </Placed>
    </>
  );
}

/** Compact composition for phones (358 × 154): the voucher panel. */
export function BusinessCoverCompact() {
  return (
    <Placed x={0} y={0} w={358} h={154}>
      <VoucherCard />
    </Placed>
  );
}
