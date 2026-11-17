import { MockButton, MockRow } from "@/components/mockups/MockParts";
import { PhoneFrame } from "@/components/mockups/PhoneFrame";

/** Rider app: route map, "Where to?", origin/destination, Find a ride. */
export function YiinoRiderPhone() {
  return (
    <PhoneFrame label="YIINO">
      <span className="relative h-28 overflow-hidden rounded-control bg-surface">
        <span className="absolute inset-3 grid grid-cols-3 grid-rows-2 gap-2 opacity-60">
          {Array.from({ length: 6 }, (_, i) => <span key={i} className="rounded bg-background" />)}
        </span>
        <svg viewBox="0 0 160 100" className="absolute inset-0 size-full">
          <path d="M22 78 H50 V30 H128" fill="none" stroke="var(--brand-primary)" strokeWidth="3" />
          <circle cx="22" cy="78" r="4" fill="var(--brand-primary)" />
          <circle cx="128" cy="30" r="4.5" fill="var(--foreground)" />
        </svg>
      </span>
      <p className="mt-5 text-body-sm font-semibold text-foreground">Where to?</p>
      <span className="mt-2 flex flex-col gap-1.5">
        <MockRow>Origin</MockRow>
        <MockRow dot="muted">Destination</MockRow>
      </span>
      <MockButton>Find a ride</MockButton>
    </PhoneFrame>
  );
}

/** Partner app: delivery request card and request details. */
export function YiinoPartnerPhone() {
  return (
    <PhoneFrame label="PARTNER">
      <span className="flex flex-col gap-1.5 rounded-control bg-surface p-3">
        <span className="text-caption font-semibold text-foreground">Delivery request</span>
        <span className="text-eyebrow text-muted">Pickup point</span>
        <span className="text-eyebrow text-muted">↓</span>
        <span className="text-eyebrow text-muted">Delivery point</span>
      </span>
      <p className="mt-4 text-caption font-semibold text-foreground">Request details</p>
      <p className="mt-1.5 text-eyebrow text-muted">Driver &amp; partner experience preview</p>
      <MockButton>View request</MockButton>
    </PhoneFrame>
  );
}
