import { SkillGlyph } from "@/components/icons/SkillGlyph";
import type { SkillIcon, SkillTileDensity } from "@/types/skill";

type SkillTileProps = {
  label: string;
  icon: SkillIcon;
  density?: SkillTileDensity;
};

/**
 * Handoff densities (docs/design-handoff.md > Implementation):
 * - comfortable: Skills page, desktop (80 px tile, 48 px icon box)
 * - compact:     About "Professional Focus" (64 px tile, 32 px icon box)
 * - row:         full-width rows for long labels on phones
 */
const DENSITY = {
  comfortable: { tile: "min-h-20 gap-3 px-4 py-3", box: "size-12", glyph: "md" },
  compact: { tile: "min-h-16 gap-3 px-[0.8125rem] py-2.5", box: "size-8", glyph: "sm" },
  row: { tile: "min-h-14 gap-3 px-3 py-2", box: "size-8", glyph: "sm" },
} as const;

/** A skill or focus area: tinted icon box + label, on a soft surface. */
export function SkillTile({ label, icon, density = "comfortable" }: SkillTileProps) {
  const d = DENSITY[density];

  return (
    <div
      className={`flex min-w-0 items-center rounded-control border border-border bg-surface ${d.tile}`}
    >
      <span className={`flex shrink-0 items-center justify-center rounded-control bg-tint ${d.box}`}>
        <SkillGlyph icon={icon} size={d.glyph} />
      </span>
      <span className="min-w-0 text-body-sm font-semibold text-foreground">{label}</span>
    </div>
  );
}
