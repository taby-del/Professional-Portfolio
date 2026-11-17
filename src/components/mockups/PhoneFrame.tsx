import type { ReactNode } from "react";

type PhoneFrameProps = {
  /** App label at the top of the screen: "YIINO", "PARTNER". */
  label: string;
  children: ReactNode;
  className?: string;
};

/**
 * Illustrative phone: 4 px dark frame, 28 px corners, speaker bar. Fills
 * its parent, which sets the position and size (design px).
 */
export function PhoneFrame({ label, children, className = "" }: PhoneFrameProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.75rem] border-4 border-foreground bg-background px-4 pt-2.5 pb-5 shadow-[0_18px_40px_-24px_rgb(8_13_22/0.45)] ${className}`}
    >
      <span className="mx-auto h-1 w-14 shrink-0 rounded-full bg-foreground" />
      <p className="mt-4 text-label font-semibold text-foreground">{label}</p>
      <div className="mt-3 flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
