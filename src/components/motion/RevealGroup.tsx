"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import { STAGGER, VIEWPORT } from "@/lib/motion/tokens";
import { staggerGroup } from "@/lib/motion/variants";

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
  /** "mount": on page load (above the fold). "view": when scrolled in. */
  trigger?: "mount" | "view";
  /** Seconds between children. */
  gap?: number;
  /** Seconds before the first child. */
  delay?: number;
};

/**
 * Reveals its RevealItem children one after another. Timing comes from
 * src/lib/motion, so every page shares the same motion language.
 */
export function RevealGroup({
  children,
  className,
  as = "div",
  trigger = "view",
  gap = STAGGER.base,
  delay = 0,
}: RevealGroupProps) {
  const Component = m[as];
  const play =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: VIEWPORT };

  return (
    <Component
      className={className}
      variants={staggerGroup(gap, delay)}
      initial="hidden"
      {...play}
    >
      {children}
    </Component>
  );
}
