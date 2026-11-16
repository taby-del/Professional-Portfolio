import Image from "next/image";
import { PORTRAIT } from "@/constants/assets";

/**
 * Owner portrait in a 4:5 frame (handoff: natural appearance, 4:5 crop,
 * same in both themes). The framing matches the design exactly: the
 * photo is drawn at 140% of the frame width and offset so the frame runs
 * from just above the head to the stool seat. Percentages keep the same
 * framing at every size. Priority: the largest image on the page.
 */
export function Portrait() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-panel border border-border bg-surface">
      <Image
        src={PORTRAIT.src}
        alt={PORTRAIT.alt}
        width={PORTRAIT.width}
        height={PORTRAIT.height}
        priority
        sizes="(min-width: 80rem) 600px, 140vw"
        className="absolute top-[-5.75%] left-[-10.5%] h-auto w-[140%] max-w-none"
      />
    </div>
  );
}
