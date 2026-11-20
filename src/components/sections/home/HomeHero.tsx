import { CraftCard } from "./CraftCard";
import { HeroIntro } from "./HeroIntro";
import { TechStrip } from "./TechStrip";

/**
 * Home hero, matched to the approved 1440 design: intro on the left,
 * Digital Craft card (386 px) on the right, vertically centred; then the
 * technology strip. Column gap is 72 px (design: 88) so the headline keeps
 * the design's line breaks even with a 15 px Windows scrollbar.
 *
 * Below 1280 px the card stacks under the intro (handoff: content-driven
 * heights, no scaled-down desktop page).
 */
export function HomeHero() {
  return (
    <section
      aria-label="Introduction"
      className="mx-auto w-full max-w-page px-gutter pt-20 pb-16"
    >
      <div className="grid items-center gap-12 laptop:grid-cols-[minmax(0,1fr)_24.125rem] laptop:gap-x-18">
        <HeroIntro />
        <CraftCard />
      </div>
      <TechStrip />
    </section>
  );
}
