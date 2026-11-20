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
 * From 768 px the About Me text sits beside the portrait (owner request),
 * in a 2:3 split; below 768 px it stacks, portrait first (handoff, 390).
 */
export function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <div className="grid gap-12 tablet:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] tablet:gap-8 laptop:grid-cols-[26.5rem_minmax(0,1fr)] laptop:gap-12">
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
