import { MockChip } from "@/components/mockups/MockParts";

/** Floating "Voucher management" panel over the Business dashboard. */
export function VoucherCard() {
  return (
    <div className="flex h-full flex-col rounded-card border border-border/60 bg-background p-5 shadow-[0_18px_40px_-20px_rgb(8_13_22/0.35)]">
      <p className="text-body-sm font-semibold text-foreground">Voucher management</p>
      <span className="mt-4 flex gap-3">
        {["Employee", "Program", "Rules"].map((chip) => (
          <MockChip key={chip}>{chip}</MockChip>
        ))}
      </span>
      <span className="mt-auto font-mono text-eyebrow text-muted uppercase">
        Illustrative asset / Replace
      </span>
    </div>
  );
}
