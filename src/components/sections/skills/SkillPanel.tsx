import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SkillTile } from "@/components/ui/SkillTile";
import { STAGGER } from "@/lib/motion/tokens";
import type { SkillCategory } from "@/types/skill";

/**
 * One skill category panel (measured: 24 px padding, 26 px title, tiles
 * 12 px apart across and 20 px down). Tiles cascade in when the panel
 * scrolls into view. On phones long workflow labels take a full row.
 */
export function SkillPanel({ eyebrow, title, description, skills }: SkillCategory) {
  const titleId = `skills-${title.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  return (
    <section aria-labelledby={titleId} className="rounded-panel border border-border bg-surface p-6">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={titleId} className="mt-4 text-subheading font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-6 text-body-sm text-muted">{description}</p>

      <RevealGroup as="ul" gap={STAGGER.tight} className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3 tablet:gap-y-5">
        {skills.map(({ label, icon, wide }) => (
          <RevealItem key={label} as="li" className={wide ? "col-span-2 tablet:col-span-1" : ""}>
            <SkillTile label={label} icon={icon} density="adaptive" />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
