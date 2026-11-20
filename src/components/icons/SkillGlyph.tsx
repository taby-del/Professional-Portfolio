import { Atom } from "lucide-react";
import type { SkillIcon } from "@/types/skill";
import { BrandLogo } from "./BrandLogo";

/** Lucide icons used by skills. Import each one explicitly (tree-shaking). */
const LUCIDE = { atom: Atom } as const;

type SkillGlyphProps = {
  icon: SkillIcon;
  /** Size classes for Lucide icons and brand logos, e.g. "size-6". */
  iconClass: string;
  /** Size and colour classes for monograms, e.g. "text-label text-primary". */
  textClass: string;
};

/**
 * Draws a skill icon: a Lucide icon, an official brand logo or a short
 * blue mono monogram ("JS", "API", "{ }"). Always decorative: the tile
 * label is the accessible text.
 */
export function SkillGlyph({ icon, iconClass, textClass }: SkillGlyphProps) {
  if (icon.type === "lucide") {
    const Icon = LUCIDE[icon.name];
    return <Icon aria-hidden="true" className={`${iconClass} text-primary`} strokeWidth={1.75} />;
  }

  if (icon.type === "brand") {
    return <BrandLogo name={icon.name} className={iconClass} />;
  }

  return (
    <span aria-hidden="true" className={`font-mono font-medium ${textClass}`}>
      {icon.text}
    </span>
  );
}
