import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { ROLE } from "@/data/experience";
import { STAGGER } from "@/lib/motion/tokens";
import { RoleArea } from "./RoleArea";

/**
 * The role card: title, company, summary, three focus areas and the
 * relevant toolkit. Areas cascade in as the card scrolls into view.
 */
export function RoleCard() {
  return (
    <article aria-labelledby="role-title" className="rounded-panel border border-border bg-surface p-6 tablet:p-8">
      <RevealGroup className="flex flex-col">
        <RevealItem as="div">
          <h2 id="role-title" className="text-heading font-semibold text-foreground">{ROLE.title}</h2>
        </RevealItem>
        <RevealItem as="p" className="mt-6 text-body-lg text-accent-readable">{ROLE.company}</RevealItem>
        <RevealItem as="p" className="mt-3.5 text-body text-muted">{ROLE.summary}</RevealItem>
      </RevealGroup>

      <RevealGroup as="ul" gap={STAGGER.relaxed} className="mt-6 flex flex-col gap-6">
        {ROLE.areas.map((area) => (
          <RoleArea key={area.title} {...area} />
        ))}
      </RevealGroup>

      <p className="mt-6 font-mono text-eyebrow text-muted uppercase">Relevant toolkit</p>
      <p className="mt-6.5 text-body-sm text-accent-readable">
        {ROLE.toolkit.join("  /  ")}
      </p>
    </article>
  );
}
