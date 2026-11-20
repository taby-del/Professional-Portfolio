import { INNOFRIT } from "./innofrit";
import { YIINO } from "./yiino";
import { YIINO_BUSINESS } from "./yiino-business";

/** Projects page intro and placeholder notice (approved design). */
export const PROJECTS_INTRO = {
  title: "Interfaces for real-world complexity.",
  description:
    "Product design and frontend development across mobility, logistics and corporate operations.",
  notice:
    "Preview compositions below are labeled placeholders, not real product screenshots. Approved project assets will replace the named areas.",
} as const;

/** Labels shown on every illustrative cover (handoff: keep visible). */
export const COVER_LABELS = {
  placeholder: "Illustrative UI placeholder · Not a real product screenshot",
  preview: "Illustrative preview",
  caption: "Replace named preview regions with owner-approved project screenshots.",
  stackNote: "Project-specific stack to confirm.",
} as const;

/** Display order on the Projects page. */
export const PROJECTS = [YIINO, INNOFRIT, YIINO_BUSINESS] as const;
