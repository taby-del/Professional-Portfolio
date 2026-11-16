import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { APPROACH } from "@/data/about";
import { STAGGER } from "@/lib/motion/tokens";

/** "My Approach": heading, summary and three numbered step cards. */
export function ApproachSection() {
  return (
    <section aria-labelledby="approach-title" className="mt-11">
      <RevealGroup className="flex flex-col">
        <RevealItem as="div">
          <h2 id="approach-title" className="text-heading font-semibold text-foreground">
            {APPROACH.title}
          </h2>
        </RevealItem>
        <RevealItem as="p" className="mt-7 text-body text-muted">
          {APPROACH.description}
        </RevealItem>
      </RevealGroup>

      <RevealGroup as="ol" gap={STAGGER.relaxed} className="mt-6.5 grid gap-6 laptop:grid-cols-3">
        {APPROACH.steps.map(({ number, title, text }) => (
          <RevealItem key={number} as="li" className="rounded-card border border-border bg-surface px-5.5 py-6">
            <p className="font-mono text-micro text-primary">{number}</p>
            <h3 className="mt-3.5 text-card-title font-semibold text-foreground">{title}</h3>
            <p className="mt-4 text-body-sm text-muted">{text}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
