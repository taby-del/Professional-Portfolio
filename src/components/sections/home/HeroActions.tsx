import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SecondaryButton } from "@/components/ui/button/SecondaryButton";
import { HireMeButton } from "@/components/ui/HireMeButton";
import { HOME_HERO } from "@/data/home";

/** Hero calls to action: View My Projects, Hire Me, Contact link. */
export function HeroActions() {
  const { primaryAction, contactLink } = HOME_HERO;

  return (
    <div className="mt-7 flex flex-col">
      <div className="flex flex-wrap gap-3">
        <SecondaryButton href={primaryAction.href} size="compact">
          {primaryAction.label}
        </SecondaryButton>
        <HireMeButton size="compact" />
      </div>

      <Link
        href={contactLink.href}
        className="group mt-3 inline-flex min-h-touch items-center gap-1 self-start rounded-control text-body-sm text-primary"
      >
        <span className="underline-offset-4 group-hover:underline">
          {contactLink.label}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="size-3.5 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
        />
      </Link>
    </div>
  );
}
