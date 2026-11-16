import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { AboutDetails } from "./AboutDetails";
import { AboutIntro } from "./AboutIntro";
import { ApproachSection } from "./ApproachSection";
import { Portrait } from "./Portrait";
import { RoleCard } from "./RoleCard";

/**
 * About page, matched to the approved 1440 design: 424 px portrait
 * column + 48 px gap + intro column; then My Approach and the details.
 * Below 1280 px everything stacks, portrait first (handoff, 768 / 390).
 */
export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <div className="grid gap-12 laptop:grid-cols-[26.5rem_minmax(0,1fr)]">
        <RevealGroup trigger="mount" className="flex w-full max-w-[26.5rem] flex-col gap-4">
          <RevealItem preset="fade">
            <Portrait />
          </RevealItem>
          <RevealItem>
            <RoleCard />
          </RevealItem>
        </RevealGroup>
        <AboutIntro />
      </div>

      <ApproachSection />
      <AboutDetails />
    </div>
  );
}
