import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { SITE } from "@/constants/site";
import { HOME_HERO } from "@/data/home";
import { HeroActions } from "./HeroActions";
import { HeroHeadline } from "./HeroHeadline";
import { StatusBadge } from "./StatusBadge";

/**
 * Left column of the Home hero, measured from the approved 1440 design.
 * Plays on page load: each line rises in turn, the headline words come
 * into focus one by one.
 */
export function HeroIntro() {
  return (
    <RevealGroup trigger="mount" className="flex min-w-0 flex-col">
      <RevealItem>
        <StatusBadge label={HOME_HERO.status} />
      </RevealItem>

      <RevealItem as="p" className="mt-7 text-body-lg font-medium text-foreground">
        {SITE.name}
      </RevealItem>

      <RevealItem as="p" className="mt-2 text-label text-primary">
        {HOME_HERO.roles.join(" | ")}
      </RevealItem>

      <HeroHeadline text={HOME_HERO.headline} />

      <RevealItem as="p" className="mt-8 max-w-[47.5rem] text-body text-muted">
        {HOME_HERO.intro}
      </RevealItem>

      <RevealItem>
        <HeroActions />
      </RevealItem>
    </RevealGroup>
  );
}
