import type { BrandName } from "@/types/skill";
import { BRAND_PATHS } from "./brand-paths";
import { Css3Logo } from "./Css3Logo";
import { FigmaLogo } from "./FigmaLogo";

/**
 * Official brand logos as inline SVG (paths from Simple Icons, CC0, kept
 * in brand-paths.ts). As in the design: HTML5, CSS3 and Figma keep their
 * brand colours; the others are drawn in the portfolio's brand blue.
 * Decorative: the tile label names the skill.
 */
export function BrandLogo({ name, className = "" }: { name: BrandName; className?: string }) {
  if (name === "figma") return <FigmaLogo className={className} />;
  if (name === "css3") return <Css3Logo className={className} />;

  const { hex, path } = BRAND_PATHS[name];
  const fill = name === "html5" ? `#${hex}` : "currentColor";

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} text-primary`}>
      <path fill={fill} d={path} />
    </svg>
  );
}
