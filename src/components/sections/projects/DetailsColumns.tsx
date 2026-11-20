import type { Project } from "@/types/project";

type DetailsColumnsProps = Pick<Project, "productAreas" | "contributions">;

/** Expanded project details: Product areas and My contributions. */
export function DetailsColumns({ productAreas, contributions }: DetailsColumnsProps) {
  const columns = [
    { title: "Product areas", items: productAreas },
    { title: "My contributions", items: contributions },
  ];

  return (
    <div className="grid gap-6 px-6 pt-4 pb-6 laptop:grid-cols-2 laptop:gap-12">
      {columns.map(({ title, items }) => (
        <div key={title}>
          <h4 className="text-card-title font-semibold text-foreground">{title}</h4>
          <p className="mt-3 text-body-sm text-muted">{items.join(" · ")}</p>
        </div>
      ))}
    </div>
  );
}
