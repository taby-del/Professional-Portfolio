/** Brand logos available to skill tiles (src/components/icons/brands.ts). */
export type BrandName =
  | "figma"
  | "react"
  | "nextjs"
  | "vite"
  | "html5"
  | "css3"
  | "nodejs"
  | "mongodb"
  | "postgresql"
  | "git"
  | "github";

/**
 * How a skill's icon is drawn in a SkillTile:
 * - lucide: an icon from lucide-react (registered in SkillGlyph.tsx)
 * - brand:  an official brand logo drawn as inline SVG
 * - text:   a short blue monogram, e.g. "JS", "UX", "API", "{ }"
 */
export type SkillIcon =
  | { type: "lucide"; name: "atom" }
  | { type: "brand"; name: BrandName }
  | { type: "text"; text: string };

/** Tile layouts from the handoff: SkillTile densities. */
export type SkillTileDensity = "comfortable" | "compact" | "adaptive";

export type Skill = {
  label: string;
  icon: SkillIcon;
  /** Long workflow label: spans the full row on phones. */
  wide?: boolean;
};

export type SkillCategory = {
  eyebrow: string;
  title: string;
  description: string;
  skills: readonly Skill[];
};
