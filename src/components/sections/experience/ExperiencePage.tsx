import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EXPERIENCE_INTRO, ROLE } from "@/data/experience";
import { EducationBanner } from "./EducationBanner";
import { RoleCard } from "./RoleCard";

/**
 * Experience page, matched to the approved 1440 design: intro; a 256 px
 * meta column beside the role card; the education banner. Below 1280 px
 * the meta sits above the card.
 */
export function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <RevealGroup trigger="mount" className="flex flex-col">
        <RevealItem as="div">
          <h1 className="text-page-title font-semibold text-foreground">{EXPERIENCE_INTRO.title}</h1>
        </RevealItem>
        <RevealItem as="p" className="mt-5 text-body-lg text-muted">{EXPERIENCE_INTRO.description}</RevealItem>
      </RevealGroup>

      <div className="mt-12 grid gap-6 laptop:grid-cols-[16rem_minmax(0,1fr)] laptop:gap-0">
        <RevealGroup trigger="mount" delay={0.3} className="flex flex-col">
          <RevealItem><Eyebrow>{ROLE.metaEyebrow}</Eyebrow></RevealItem>
          <RevealItem as="p" className="mt-4 text-body-lg font-semibold text-foreground">{ROLE.since}</RevealItem>
          <RevealItem as="p" className="mt-3 text-body-sm text-muted">{ROLE.place}</RevealItem>
        </RevealGroup>
        <RoleCard />
      </div>

      <EducationBanner />
    </div>
  );
}
