import { RevealGroup } from "@/components/motion/RevealGroup";
import { RevealItem } from "@/components/motion/RevealItem";
import { CONTACT_CHANNELS, CONTACT_INTRO } from "@/data/contact";
import { ContactChannel } from "./ContactChannel";

/** Left column: title, invitation, contact cards and closing lines. */
export function ContactIntro() {
  return (
    <RevealGroup trigger="mount" className="flex min-w-0 flex-col">
      <RevealItem as="div">
        <h1 className="max-w-[26rem] text-page-title font-semibold text-foreground">{CONTACT_INTRO.title}</h1>
      </RevealItem>
      <RevealItem as="p" className="mt-6 text-body-lg text-muted">{CONTACT_INTRO.description}</RevealItem>

      <ul className="mt-6 flex flex-col gap-6" aria-label="Contact channels">
        {CONTACT_CHANNELS.map((channel) => (
          <RevealItem key={channel.label} as="li">
            <ContactChannel {...channel} />
          </RevealItem>
        ))}
      </ul>

      <RevealItem as="p" className="mt-6 text-body-lg font-semibold text-foreground">{CONTACT_INTRO.closingTitle}</RevealItem>
      <RevealItem as="p" className="mt-2 text-body-sm text-muted">{CONTACT_INTRO.closingText}</RevealItem>
    </RevealGroup>
  );
}
