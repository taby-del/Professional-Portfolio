"use client";

import { domAnimation, LazyMotion, MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide Motion setup:
 * - LazyMotion + domAnimation loads only the animation features we use
 *   (about a third of the full bundle). `strict` makes any accidental use
 *   of the heavy `motion.*` components throw, so always use `m.*`.
 * - reducedMotion="user" follows the OS "reduce motion" setting: movement
 *   is removed and only opacity/colour changes remain.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
