import { ROLE_CARD } from "@/data/about";

/** Blue-tinted card under the portrait: roles, location and languages. */
export function RoleCard() {
  return (
    <div className="rounded-panel bg-tint px-5 py-4">
      <p className="text-body font-semibold text-foreground">{ROLE_CARD.title}</p>
      <p className="mt-2 text-label text-muted">{ROLE_CARD.secondary}</p>
      <p className="mt-3 text-label text-muted">{ROLE_CARD.details}</p>
    </div>
  );
}
