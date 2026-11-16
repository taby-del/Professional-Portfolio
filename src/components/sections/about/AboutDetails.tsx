import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { ABOUT_DETAILS } from "@/data/about";

/**
 * Education and Professional Interests cards. Education wording follows
 * the handoff: no degree or completion status is claimed.
 */
export function AboutDetails() {
  return (
    <RevealGroup className="mt-12 grid gap-6 laptop:grid-cols-2">
      {ABOUT_DETAILS.map(({ title, lines }) => (
        <RevealItem
          key={title}
          as="div"
          className="rounded-card border border-border bg-surface px-6 pt-5 pb-6"
        >
          <h2 className="text-card-title font-semibold text-foreground">{title}</h2>
          <div className="mt-3 text-body text-muted">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
