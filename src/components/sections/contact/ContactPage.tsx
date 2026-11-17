import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { ContactForm } from "./ContactForm";
import { ContactIntro } from "./ContactIntro";

/**
 * Contact page, matched to the approved 1440 design: two 600 px columns
 * 48 px apart (intro + channels | form card). Below 1280 px they stack
 * (handoff: stacked Contact at 768 and 390).
 */
export function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-page px-gutter pt-20 pb-28">
      <div className="grid items-start gap-12 laptop:grid-cols-2">
        <ContactIntro />
        <RevealGroup trigger="mount" delay={0.25}>
          <RevealItem>
            <ContactForm />
          </RevealItem>
        </RevealGroup>
      </div>
    </div>
  );
}
