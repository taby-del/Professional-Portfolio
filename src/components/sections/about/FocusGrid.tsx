import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { SkillTile } from "@/components/ui/SkillTile";
import { PROFESSIONAL_FOCUS } from "@/data/about";
import { STAGGER } from "@/lib/motion/tokens";

/** "Professional Focus": four compact skill tiles, two per row. */
export function FocusGrid() {
  return (
    <RevealGroup
      as="ul"
      trigger="mount"
      delay={0.3}
      gap={STAGGER.tight}
      className="mt-5.5 grid gap-3 tablet:grid-cols-2"
    >
      {PROFESSIONAL_FOCUS.map(({ label, icon }) => (
        <RevealItem key={label} as="li">
          <SkillTile label={label} icon={icon} density="compact" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
