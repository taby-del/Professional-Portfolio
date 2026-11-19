import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { HireMeButton } from "@/components/ui/HireMeButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ABOUT_INTRO } from "@/data/about";
import { FocusGrid } from "./FocusGrid";

/**
 * Right column of the About hero: eyebrow, "About Me", two paragraphs,
 * Professional Focus tiles and the Hire Me action.
 */
export function AboutIntro() {
  return (
    <div className="flex min-w-0 flex-col">
      <RevealGroup trigger="mount" className="flex flex-col">
        <RevealItem>
          <Eyebrow>{ABOUT_INTRO.eyebrow}</Eyebrow>
        </RevealItem>
        <RevealItem as="div" className="mt-3.5">
          <h1 className="text-page-title font-semibold text-foreground">{ABOUT_INTRO.title}</h1>
        </RevealItem>
        <RevealItem as="p" className="mt-5.5 text-body-lg text-foreground">
          {ABOUT_INTRO.lead}
        </RevealItem>
        <RevealItem as="p" className="mt-5 text-body text-muted">
          {ABOUT_INTRO.body}
        </RevealItem>
        <RevealItem as="div" className="mt-4.5">
          <h2 className="text-card-title font-semibold text-foreground">{ABOUT_INTRO.focusTitle}</h2>
        </RevealItem>
      </RevealGroup>

      <FocusGrid />

      <RevealGroup trigger="mount" delay={0.5} className="mt-5 flex flex-col items-start">
        <RevealItem>
          <HireMeButton />
        </RevealItem>
      </RevealGroup>
    </div>
  );
}
