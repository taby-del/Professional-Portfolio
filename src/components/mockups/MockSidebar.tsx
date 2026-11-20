type MockSidebarProps = {
  title: string;
  items: readonly string[];
  active: string;
};

/** Illustrative dashboard side navigation with one active item. */
export function MockSidebar({ title, items, active }: MockSidebarProps) {
  return (
    <div className="flex w-[8.75rem] shrink-0 flex-col border-r border-border/60 bg-surface/40 px-2 py-4">
      <p className="px-2 text-eyebrow font-bold text-foreground">{title}</p>
      <div className="mt-4 flex flex-col gap-1">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-control px-2 py-1.5 text-eyebrow ${
              item === active ? "bg-tint font-semibold text-accent-readable" : "text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
