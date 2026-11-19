import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { SkillTile } from "@/components/ui/SkillTile";
import { PROFESSIONAL_FOCUS } from "@/data/about";
import { STAGGER } from "@/lib/motion/tokens";

/**
 * "Professional Focus": four compact skill tiles, two per row when the
 * column is wide enough (each tile at least 15rem), otherwise one.
 */
export function FocusGrid() {
  return (
    <RevealGroup
      as="ul"
      trigger="mount"
      delay={0.3}
      gap={STAGGER.tight}
      className="mt-5.5 grid grid-cols-[repeat(auto-fit,minmax(max(15rem,calc(50%_-_0.375rem)),1fr))] gap-3"
    >
      {PROFESSIONAL_FOCUS.map(({ label, icon }) => (
        <RevealItem key={label} as="li">
          <SkillTile label={label} icon={icon} density="compact" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
