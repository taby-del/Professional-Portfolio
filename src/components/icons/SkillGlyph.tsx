import { Atom } from "lucide-react";
import type { SkillIcon } from "@/types/skill";
import { FigmaLogo } from "./FigmaLogo";

/** Lucide icons used by skills. Import each one explicitly (tree-shaking). */
const LUCIDE = { atom: Atom } as const;

/** Brand logos drawn as inline SVG. */
const BRANDS = { figma: FigmaLogo } as const;

/**
 * Draws a skill icon: a Lucide icon, a brand logo or a short blue mono
 * monogram ("API", "{ }"). Always decorative; the tile label is the text.
 */
export function SkillGlyph({ icon, size }: { icon: SkillIcon; size: "sm" | "md" }) {
  const box = size === "sm" ? "size-4" : "size-6";

  if (icon.type === "lucide") {
    const Icon = LUCIDE[icon.name];
    return <Icon aria-hidden="true" className={`${box} text-primary`} strokeWidth={1.75} />;
  }

  if (icon.type === "brand") {
    const Logo = BRANDS[icon.name];
    return <Logo className={box} />;
  }

  return (
    <span aria-hidden="true" className={`font-mono font-medium text-primary ${size === "sm" ? "text-eyebrow" : "text-body-sm"}`}>
      {icon.text}
    </span>
  );
}
