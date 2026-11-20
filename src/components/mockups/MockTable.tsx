import type { ReactNode } from "react";

type MockTableProps = {
  columns: readonly string[];
  /** Cell text for every column except the last one. */
  rows: readonly (readonly string[])[];
  /** Renders the last column (status / access chip) for a row index. */
  status: (row: number) => ReactNode;
};

const GRID = "grid grid-cols-[1fr_1.2fr_0.8fr] items-center gap-3";

/** Illustrative data table with generic replacement cues (handoff). */
export function MockTable({ columns, rows, status }: MockTableProps) {
  return (
    <div className="flex flex-col gap-2.5 rounded-control bg-surface/70 p-3 text-eyebrow">
      <div className={`${GRID} font-semibold text-foreground`}>
        {columns.map((column) => (
          <span key={column}>{column}</span>
        ))}
      </div>
      {rows.map((cells, index) => (
        <div key={index} className={`${GRID} text-muted`}>
          {cells.map((cell, i) => (
            <span key={i}>{cell}</span>
          ))}
          <span>{status(index)}</span>
        </div>
      ))}
    </div>
  );
}
