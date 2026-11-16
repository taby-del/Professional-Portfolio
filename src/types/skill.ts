/**
 * How a skill's icon is drawn in a SkillTile:
 * - lucide: an icon from lucide-react (registered in skill-icons.tsx)
 * - brand:  a brand logo drawn as inline SVG (e.g. Figma)
 * - text:   a short blue monogram, e.g. "JS", "UX", "API", "{ }"
 */
export type SkillIcon =
  | { type: "lucide"; name: "atom" }
  | { type: "brand"; name: "figma" }
  | { type: "text"; text: string };

/** Tile layouts from the handoff: SkillTile densities. */
export type SkillTileDensity = "comfortable" | "compact" | "row";
