"use client";

import { useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { PaintColor } from "@/data/paint-colors";
import FilterBar from "./FilterBar";
import ColorRail from "./ColorRail";
import ColorGrid from "./ColorGrid";
import CompareTray from "./CompareTray";
import ColorDetail from "./ColorDetail";
import {
  FAMILIES,
  DEFAULT_FILTERS,
  matchesFilters,
  filtersToSearchParams,
  type Filters,
} from "./filter-utils";

export default function ColorBrowser({
  colors,
  initialFilters,
}: {
  colors: PaintColor[];
  initialFilters: Filters;
}) {
  const pathname = usePathname();
  const [filters, setFilters] = useState(initialFilters);
  const [view, setView] = useState<"rails" | "grid">("rails");
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [detailId, setDetailId] = useState<string | null>(null);
  const lastTriggerEl = useRef<HTMLElement | null>(null);

  function updateFilters(next: Filters) {
    setFilters(next);
    // Plain History API — a filter change never needs the server (all
    // filtering happens client-side against the static dataset), so this
    // avoids Next.js re-fetching the route on every keystroke/chip click.
    const query = filtersToSearchParams(next).toString();
    window.history.replaceState(null, "", `${pathname}${query ? `?${query}` : ""}`);
  }

  const filtered = useMemo(
    () => colors.filter((c) => matchesFilters(c, filters)),
    [colors, filters]
  );

  const familiesWithMatches = useMemo(
    () => FAMILIES.filter((family) => filtered.some((c) => c.family === family)),
    [filtered]
  );

  const compareColors = useMemo(
    () =>
      compareIds
        .map((id) => colors.find((c) => c.id === id))
        .filter((c): c is PaintColor => Boolean(c)),
    [colors, compareIds]
  );

  const detailColor = useMemo(
    () => colors.find((c) => c.id === detailId) ?? null,
    [colors, detailId]
  );

  function toggleCompare(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= 4) return prev;
      return [...prev, id];
    });
  }

  function openDetail(id: string, el: HTMLElement) {
    lastTriggerEl.current = el;
    setDetailId(id);
  }

  function closeDetail() {
    setDetailId(null);
    lastTriggerEl.current?.focus();
  }

  return (
    <>
      <FilterBar
        filters={filters}
        onChange={updateFilters}
        resultCount={filtered.length}
        totalCount={colors.length}
        view={view}
        onViewChange={setView}
        jumpFamilies={familiesWithMatches}
      />

      <div className={compareColors.length > 0 ? "pb-28" : ""}>
        {filtered.length === 0 ? (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 text-center">
            <p className="text-ink-muted mb-4">No colors match those filters.</p>
            <button
              type="button"
              onClick={() => updateFilters(DEFAULT_FILTERS)}
              className="tap-target inline-flex items-center rounded-md bg-brand-teal px-5 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : view === "rails" ? (
          <div className="py-2">
            {familiesWithMatches.map((family) => (
              <ColorRail
                key={family}
                family={family}
                colors={filtered.filter((c) => c.family === family)}
                compareIds={compareIds}
                compareFull={compareIds.length >= 4}
                onToggleCompare={toggleCompare}
                onOpenDetail={openDetail}
              />
            ))}
          </div>
        ) : (
          <ColorGrid
            colors={filtered}
            compareIds={compareIds}
            compareFull={compareIds.length >= 4}
            onToggleCompare={toggleCompare}
            onOpenDetail={openDetail}
          />
        )}
      </div>

      <CompareTray
        colors={compareColors}
        onRemove={(id) => setCompareIds((prev) => prev.filter((x) => x !== id))}
        onClear={() => setCompareIds([])}
        onOpenDetail={openDetail}
      />

      <ColorDetail
        color={detailColor}
        allColors={colors}
        onClose={closeDetail}
        onOpenColor={openDetail}
      />
    </>
  );
}
