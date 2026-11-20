import { ArrowUpRight } from "lucide-react";

type ContactChannelProps = {
  label: string;
  value: string;
  href: string | null;
};

const CARD = "group block rounded-panel border border-border bg-surface px-5 pt-4.5 pb-5";

/**
 * Contact card: "Email ↗" + address. External links open in a new tab
 * with safe rel; with no URL yet the card is plain text (no dead link).
 */
export function ContactChannel({ label, value, href }: ContactChannelProps) {
  const body = (
    <>
      <span className="flex items-center gap-1.5 text-card-title font-semibold text-accent-readable">
        {label}
        {href && (
          <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-150 motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5" />
        )}
      </span>
      <span className="mt-2 block text-body-sm text-muted">{value}</span>
    </>
  );

  if (!href) return <div className={CARD}>{body}</div>;

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${CARD} transition-colors duration-150 hover:border-primary hover:bg-tint`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {body}
    </a>
  );
}
