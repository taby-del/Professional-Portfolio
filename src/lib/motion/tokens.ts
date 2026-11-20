/**
 * Single source of truth for animation timing. Components import these
 * values instead of hard-coding durations, so the motion language stays
 * consistent and a library upgrade only touches src/lib/motion.
 *
 * Interaction timings come from the design handoff (docs/design-handoff.md).
 * Motion uses seconds.
 */
export const DURATION = {
  press: 0.1, // button pressed
  fast: 0.15, // hover, nav, menu, language
  theme: 0.18, // theme cross-fade, project cover hover
  disclosure: 0.22, // View Project expand/collapse
  reveal: 0.6, // section and card entrance
  hero: 0.9, // headline entrance
} as const;

/** Cubic-bezier curves: decelerating "expo out" for premium entrances. */
export const EASE = {
  out: [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
  standard: [0.4, 0, 0.2, 1],
} as const;

/** Delay between items in a staggered group (seconds). */
export const STAGGER = {
  tight: 0.05,
  base: 0.08,
  relaxed: 0.12,
} as const;

/** Distance (px) that entering elements travel. Small = refined. */
export const DISTANCE = {
  sm: 8,
  md: 16,
  lg: 24,
} as const;

/** Scroll reveal: trigger once when 20% visible, slightly before the edge. */
export const VIEWPORT = { once: true, amount: 0.2, margin: "0px 0px -10% 0px" };
