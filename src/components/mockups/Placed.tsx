"use client";

import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";
import { fadeUp } from "@/lib/motion/variants";

type PlacedProps = {
  /** Position and size in design px, inside a ScaleToFit artboard. */
  x: number;
  y: number;
  w: number;
  h: number;
  /** Scroll parallax: drifts up to 2 × depth px while scrolling (0 = none). */
  depth?: number;
  children: ReactNode;
};

/**
 * Places one device in a cover composition. It rises in with the cover's
 * RevealGroup and, if `depth` is set, drifts gently while scrolling.
 * Reduced motion: no parallax (handoff: "do not translate covers").
 */
export function Placed({ x, y, w, h, depth = 0, children }: PlacedProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Starts at 0 (progress is 0 before any scroll measurement), so server
  // and browser render the same markup; drifts up to 2 × depth afterwards.
  const drift = useTransform(scrollYProgress, [0, 1], [0, -2 * depth]);

  return (
    <m.div
      ref={ref}
      variants={fadeUp}
      className="absolute"
      style={{ left: x, top: y, width: w, height: h }}
    >
      <m.div className="h-full" style={{ y: reduced || depth === 0 ? 0 : drift }}>
        {children}
      </m.div>
    </m.div>
  );
}
