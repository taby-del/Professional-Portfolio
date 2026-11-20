import { SkillGlyph } from "@/components/icons/SkillGlyph";
import type { SkillIcon, SkillTileDensity } from "@/types/skill";

type SkillTileProps = {
  label: string;
  icon: SkillIcon;
  density?: SkillTileDensity;
};

/**
 * Densities (handoff > Implementation architecture):
 * - comfortable: 80 px tile, 48 px icon box (Skills, 768 px and up)
 * - compact:     64 px tile, 32 px icon box (About "Professional Focus")
 * - adaptive:    compact on phones, comfortable from 768 px (Skills page).
 *   On phones the grid pairs short labels ("Compact Tile") and gives long
 *   workflow labels a full row ("Compact Row").
 * Monogram colour: readable blue on Skills, brand blue on About (design).
 */
const DENSITY = {
  comfortable: { tile: "min-h-20 px-4 py-3", box: "size-12", icon: "size-6", text: "text-label", tone: "text-accent-readable" },
  compact: { tile: "min-h-16 px-[0.8125rem] py-2.5", box: "size-8", icon: "size-4", text: "text-eyebrow", tone: "text-primary" },
  adaptive: {
    tile: "min-h-16 px-3 py-2.5 tablet:min-h-20 tablet:px-4 tablet:py-3",
    box: "size-8 tablet:size-12",
    icon: "size-4 tablet:size-6",
    text: "text-eyebrow tablet:text-label",
    tone: "text-accent-readable",
  },
} as const;

/** A skill or focus area: tinted icon box + label, on a soft surface. */
export function SkillTile({ label, icon, density = "comfortable" }: SkillTileProps) {
  const d = DENSITY[density];

  return (
    <div className={`flex h-full min-w-0 items-center gap-3 rounded-control border border-border bg-surface ${d.tile}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-control bg-tint ${d.box}`}>
        <SkillGlyph icon={icon} iconClass={d.icon} textClass={`${d.text} ${d.tone}`} />
      </span>
      <span className="min-w-0 text-body-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}
