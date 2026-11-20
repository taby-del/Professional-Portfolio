/** Which illustrative cover composition a project shows. */
export type CoverKind = "yiino" | "freight" | "business";

/**
 * A portfolio project (docs/design-handoff.md > Asset registry).
 * Covers are labelled illustrative placeholders, not product screenshots;
 * all facts that matter stay as live text outside the cover.
 */
export type Project = {
  id: string;
  /** "Mobility & on-demand services platform" */
  eyebrow: string;
  title: string;
  description: string;
  /** Right-hand line: "Connecting everyday journeys and services." */
  tagline: string;
  /** Relevant toolkit (handoff: not a verified per-project stack). */
  toolkit: readonly string[];
  productAreas: readonly string[];
  contributions: readonly string[];
  cover: {
    kind: CoverKind;
    /** Cover background: blue tint or neutral surface (design). */
    tone: "tint" | "surface";
    /** Mono label: "YIINO", "YIINO FREIGHT / INNOFRIT" */
    tag: string;
    /** Cover headline, one entry per line. */
    headline: readonly string[];
    /** Three feature chips under the headline. */
    chips: readonly string[];
  };
};
