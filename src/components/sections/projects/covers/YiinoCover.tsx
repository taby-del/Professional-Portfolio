import { BrowserFrame } from "@/components/mockups/BrowserFrame";
import { MockRow } from "@/components/mockups/MockParts";
import { Placed } from "@/components/mockups/Placed";
import { YiinoPartnerPhone, YiinoRiderPhone } from "./YiinoPhones";

/** Yiino service operations panel (browser). */
function ServiceOperations() {
  return (
    <div className="flex w-full flex-col gap-3 p-5">
      <p className="mb-3 text-body-sm font-semibold text-foreground">Service operations</p>
      {["Ride booking", "Food delivery", "Package delivery"].map((item) => (
        <MockRow key={item}>{item}</MockRow>
      ))}
    </div>
  );
}

/** Wide composition (871 × 413 design px): two phones + operations panel. */
export function YiinoCover() {
  return (
    <>
      <Placed x={0} y={0} w={207} h={413}>
        <YiinoRiderPhone />
      </Placed>
      <Placed x={235} y={44} w={195} h={364} depth={14}>
        <YiinoPartnerPhone />
      </Placed>
      <Placed x={458} y={61} w={413} h={310} depth={8}>
        <BrowserFrame>
          <ServiceOperations />
        </BrowserFrame>
      </Placed>
    </>
  );
}

/** Compact composition for phones (207 × 413): the rider app only. */
export function YiinoCoverCompact() {
  return (
    <Placed x={0} y={0} w={207} h={413}>
      <YiinoRiderPhone />
    </Placed>
  );
}
