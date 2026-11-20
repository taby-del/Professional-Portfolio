import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { TECH_STRIP } from "@/data/home";
import { STAGGER } from "@/lib/motion/tokens";

/**
 * "Design × Engineering" strip under the Home hero: a divider, a mono
 * label and the core toolkit tags. Tags wrap naturally on small screens.
 */
export function TechStrip() {
  return (
    <RevealGroup
      trigger="mount"
      delay={0.6}
      gap={STAGGER.tight}
      className="mt-13 flex flex-wrap items-center gap-x-3 gap-y-3 border-t border-border pt-[1.375rem]"
    >
      <RevealItem as="p" className="font-mono text-eyebrow text-muted uppercase">
        {TECH_STRIP.label}
      </RevealItem>
      <ul className="flex flex-wrap gap-3" aria-label="Core toolkit">
        {TECH_STRIP.tags.map((tag) => (
          <RevealItem
            key={tag}
            as="li"
            className="rounded-tag border border-border bg-surface px-[0.5625rem] py-1 font-mono text-micro text-muted"
          >
            {tag}
          </RevealItem>
        ))}
      </ul>
    </RevealGroup>
  );
}
