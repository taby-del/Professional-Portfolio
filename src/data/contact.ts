import { EMAIL, SOCIAL_LINKS } from "@/constants/site";

/** Contact page content, from the approved design (Figma, Contact 1440). */
export const CONTACT_INTRO = {
  eyebrow: "06 / Contact",
  title: "Let's Build Something Together.",
  description:
    "I'm always interested in meaningful technology projects, professional opportunities and collaborations where I can contribute through development and design.",
  closingTitle: "Development, design & thoughtful collaboration.",
  closingText: "English & French · Professional opportunities and meaningful product work.",
} as const;

const linkFor = (label: string) => SOCIAL_LINKS.find((link) => link.label === label)?.href ?? null;

/**
 * Contact cards. A card links out only when its real URL exists; the
 * LinkedIn card shows a note until the profile URL is supplied.
 */
export const CONTACT_CHANNELS = [
  { label: "Email", value: EMAIL, href: linkFor("Email") },
  { label: "LinkedIn", value: "Profile link coming soon", href: linkFor("LinkedIn") },
  { label: "GitHub", value: "github.com/taby-del", href: linkFor("GitHub") },
] as const;
