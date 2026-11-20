import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { SKILL_CATEGORIES, SKILLS_INTRO, SKILLS_NOTE } from "@/data/skills";
import { SkillPanel } from "./SkillPanel";

/**
 * Skills page, matched to the approved 1440 design: intro, four category
 * panels in a 2 × 2 grid (each panel keeps its own height), then the
 * "Technical judgment" note. Below 1280 px the panels stack (handoff).
 */
export function SkillsPage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <RevealGroup trigger="mount" className="flex flex-col">
        <RevealItem as="div">
          <h1 className="text-page-title font-semibold text-foreground">{SKILLS_INTRO.title}</h1>
        </RevealItem>
        <RevealItem as="p" className="mt-5 text-body-lg text-muted">
          {SKILLS_INTRO.description}
        </RevealItem>
      </RevealGroup>

      <div className="mt-10 grid items-start gap-6 laptop:grid-cols-2 laptop:gap-y-10">
        {SKILL_CATEGORIES.map((category) => (
          <SkillPanel key={category.title} {...category} />
        ))}
      </div>

      <RevealGroup className="mt-10">
        <RevealItem as="div" className="rounded-panel bg-surface p-6">
          <h2 className="text-card-title font-semibold text-foreground">{SKILLS_NOTE.title}</h2>
          <p className="mt-3 text-body text-muted">{SKILLS_NOTE.text}</p>
        </RevealItem>
      </RevealGroup>
    </div>
  );
}
