import type { Variants } from "motion/react";
import { DISTANCE, DURATION, EASE, STAGGER } from "./tokens";

/**
 * Reusable animation presets. Only transform, opacity and filter are
 * animated (GPU-friendly, no layout work). Under reduced motion,
 * MotionProvider makes transform changes instant automatically.
 */

/** Rise and fade in: sections, cards, paragraphs. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: DISTANCE.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE.out },
  },
};

/** Soft focus-in for headlines: blur to sharp while rising. */
export const blurReveal: Variants = {
  hidden: { opacity: 0, y: DISTANCE.lg, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.hero, ease: EASE.out },
  },
};

/** Plain fade: images and decorative elements. */
export const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: DURATION.reveal } },
};

/** Parent that reveals its children one after another. */
export function staggerGroup(
  gap: number = STAGGER.base,
  delay = 0,
): Variants {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
}
