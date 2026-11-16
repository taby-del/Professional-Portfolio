"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";
import { blurReveal, fade, fadeUp } from "@/lib/motion/variants";

const PRESETS = { fadeUp, blurReveal, fade } as const;

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "p" | "span";
  /** Animation preset from src/lib/motion/variants. */
  preset?: keyof typeof PRESETS;
};

/**
 * A child of RevealGroup: rises and fades in on the group's cue.
 * Animates transform/opacity only; movement is removed automatically for
 * visitors who prefer reduced motion (MotionProvider).
 */
export function RevealItem({
  children,
  className,
  as = "div",
  preset = "fadeUp",
}: RevealItemProps) {
  const Component = m[as];
  return (
    <Component className={className} variants={PRESETS[preset]}>
      {children}
    </Component>
  );
}
