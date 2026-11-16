import type { Variants } from "motion/react";
import { DISTANCE, EASE } from "./tokens";

/**
 * Menu item entrance: a quick, small rise that matches the 150 ms menu
 * opening. Used with staggerGroup(STAGGER.tight) so items cascade in.
 */
export const menuItem: Variants = {
  hidden: { opacity: 0, y: DISTANCE.sm },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE.out },
  },
};
