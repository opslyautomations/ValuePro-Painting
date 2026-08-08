"use client";

import { useRef, useState } from "react";
import type { PaintColor } from "@/data/paint-colors";
import { swatchTextColor } from "@/lib/color-contrast";
import { useFocusTrap } from "./useFocusTrap";

const ROWS: { label: string; render: (c: PaintColor) => string }[] = [
  { label: "Brand", render: (c) => c.brand },
  { label: "Code", render: (c) => c.code },
  { label: "Hex (approx.)", render: (c) => c.hex },
  { label: "LRV", render: (c) => String(c.lrv) },
  { label: "Family", render: (c) => c.family },
  { label: "Undertone", render: (c) => c.undertone },
  { label: "Best for", render: (c) => c.bestFor.join(", ") },
  { label: "Rooms", render: (c) => c.rooms.join(", ") },
];

export default function CompareTray({
  colors,
  onRemove,
  onClear,
  onOpenDetail,
}: {
  colors: PaintColor[];
  onRemove: (id: string) => void;
  onClear: () => void;
  onOpenDetail: (id: string, el: HTMLElement) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(modalRef, expanded, () => setExpanded(false));

  if (colors.length === 0) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-black/10 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center gap-4 overflow-x-auto">
          <span className="text-sm font-semibold text-ink shrink-0">
            Compare ({colors.length}/4)
          </span>
          <div className="flex gap-2 shrink-0">
            {colors.map((c) => {
              const textColor = swatchTextColor(c.hex);
              return (
                <div key={c.id} className="relative">
                  <button
                    type="button"
                    onClick={(e) => onOpenDetail(c.id, e.currentTarget)}
                    style={{ backgroundColor: c.hex, color: textColor }}
                    className="tap-target rounded-md px-3 py-2 text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-dark"
                    aria-label={`View ${c.name} details`}
                  >
                    {c.name}
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(c.id)}
                    aria-label={`Remove ${c.name} from compare`}
                    className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white text-xs"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
          <div className="ml-auto flex gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setExpanded(true)}
              disabled={colors.length < 2}
              className="tap-target inline-flex items-center rounded-md bg-brand-teal px-4 text-sm font-semibold text-white hover:bg-brand-teal-dark disabled:opacity-40"
            >
              View comparison
            </button>
            <button
              type="button"
              onClick={onClear}
              className="tap-target inline-flex items-center rounded-md border border-black/15 px-3 text-sm font-semibold text-ink hover:bg-brand-green-light/40"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setExpanded(false)} aria-hidden="true" />
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="compare-heading"
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-xl bg-white shadow-xl p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="compare-heading" className="font-heading text-xl font-semibold text-brand-teal-dark">
                Compare Colors
              </h2>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Close comparison"
                className="tap-target inline-flex items-center justify-center rounded-full border border-black/15 hover:bg-brand-green-light/40"
              >
                <span aria-hidden>✕</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 text-ink-muted font-medium"></th>
                    {colors.map((c) => (
                      <th key={c.id} className="p-2 text-left">
                        <span
                          className="block h-16 w-full rounded-md mb-2 border border-black/10"
                          style={{ backgroundColor: c.hex }}
                          aria-hidden
                        />
                        <span className="font-heading font-semibold text-ink">{c.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ROWS.map((row) => (
                    <tr key={row.label} className="border-t border-black/10">
                      <th scope="row" className="p-2 text-left font-semibold text-ink-muted whitespace-nowrap">
                        {row.label}
                      </th>
                      {colors.map((c) => (
                        <td key={c.id} className="p-2 text-ink">
                          {row.render(c)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
