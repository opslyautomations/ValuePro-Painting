"use client";

import { useEffect, useState } from "react";
import {
  BRANDS,
  BRAND_LABELS,
  FAMILIES,
  FAMILY_CODES,
  USE_CASES,
  DEFAULT_FILTERS,
  type Filters,
  type Brand,
  type Family,
  type UseCase,
} from "./filter-utils";

export default function FilterBar({
  filters,
  onChange,
  resultCount,
  totalCount,
  view,
  onViewChange,
  jumpFamilies,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  resultCount: number;
  totalCount: number;
  view: "rails" | "grid";
  onViewChange: (view: "rails" | "grid") => void;
  jumpFamilies: Family[];
}) {
  // Always starts expanded to match server-rendered HTML exactly — reading
  // window.scrollY into the initial state would mismatch during hydration
  // if the page loads already scrolled (e.g. an anchor link).
  const [collapsed, setCollapsed] = useState(false);

  // Auto-collapse the chip/slider panel when the visitor actually scrolls,
  // so the color rails stay visible — never auto-expands, so a manual
  // re-open sticks until they scroll again. Listening for the scroll
  // *gesture* (wheel/touch) rather than the resulting scrollTop matters:
  // expanding the panel changes its own height, which can shift the
  // in-flow layout enough to trigger a browser scroll-anchoring
  // adjustment — a plain "scroll" listener would see that as "the user
  // scrolled" and immediately re-collapse the panel that was just opened.
  useEffect(() => {
    function collapse() {
      setCollapsed(true);
    }
    // Deferred to a rAF (post-hydration) rather than checked synchronously
    // here, so a page that loads already scrolled (e.g. an anchor link)
    // still collapses once mounted, without touching the hydration render.
    requestAnimationFrame(() => {
      if (window.scrollY > 8) setCollapsed(true);
    });
    window.addEventListener("wheel", collapse, { passive: true });
    window.addEventListener("touchmove", collapse, { passive: true });
    return () => {
      window.removeEventListener("wheel", collapse);
      window.removeEventListener("touchmove", collapse);
    };
  }, []);

  function toggleBrand(brand: Brand) {
    const next = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onChange({ ...filters, brands: next });
  }

  function toggleFamily(family: Family) {
    const next = filters.families.includes(family)
      ? filters.families.filter((f) => f !== family)
      : [...filters.families, family];
    onChange({ ...filters, families: next });
  }

  function toggleUseCase(useCase: UseCase) {
    const next = filters.useCases.includes(useCase)
      ? filters.useCases.filter((u) => u !== useCase)
      : [...filters.useCases, useCase];
    onChange({ ...filters, useCases: next });
  }

  function clearAll() {
    onChange(DEFAULT_FILTERS);
  }

  const allBrandsActive = filters.brands.length === 0;

  return (
    <div
      className="sticky z-40 bg-brand-offwhite border-b border-black/10 shadow-sm"
      style={{ top: "var(--header-height)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 space-y-3">
        <div className="flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={() => setCollapsed((c) => !c)}
            aria-expanded={!collapsed}
            aria-controls="paint-filter-panel"
            className="tap-target inline-flex items-center gap-1.5 rounded-md border border-black/15 bg-white px-3 text-sm font-semibold text-ink hover:bg-brand-green-light/40 shrink-0"
          >
            <span aria-hidden className={`inline-block transition-transform ${collapsed ? "" : "rotate-90"}`}>
              ›
            </span>
            Filters
          </button>

          <div
            className="flex items-center gap-1 rounded-md border border-black/15 bg-white p-1 shrink-0"
            role="group"
            aria-label="Layout"
          >
            <button
              type="button"
              aria-pressed={view === "rails"}
              onClick={() => onViewChange("rails")}
              className={`tap-target rounded px-3 text-sm font-semibold ${
                view === "rails" ? "bg-brand-teal text-white" : "text-ink"
              }`}
            >
              Rails
            </button>
            <button
              type="button"
              aria-pressed={view === "grid"}
              onClick={() => onViewChange("grid")}
              className={`tap-target rounded px-3 text-sm font-semibold ${
                view === "grid" ? "bg-brand-teal text-white" : "text-ink"
              }`}
            >
              Grid
            </button>
          </div>

          <button
            type="button"
            onClick={clearAll}
            className="tap-target inline-flex items-center rounded-md border border-black/15 px-3 text-sm font-semibold text-ink hover:bg-white shrink-0"
          >
            Clear all
          </button>

          <p aria-live="polite" className="text-sm font-medium text-ink shrink-0">
            Showing {resultCount} of {totalCount} colors.
          </p>
        </div>

        {!collapsed && (
          <div id="paint-filter-panel" className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase text-ink-muted mr-1">Brand</span>
              <button
                type="button"
                role="checkbox"
                aria-checked={allBrandsActive}
                onClick={() => onChange({ ...filters, brands: [] })}
                className={chipClass(allBrandsActive)}
              >
                All
              </button>
              {BRANDS.map((brand) => (
                <button
                  key={brand}
                  type="button"
                  role="checkbox"
                  aria-checked={filters.brands.includes(brand)}
                  onClick={() => toggleBrand(brand)}
                  className={chipClass(filters.brands.includes(brand))}
                >
                  {BRAND_LABELS[brand]}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase text-ink-muted mr-1">Family</span>
              {FAMILIES.map((family) => (
                <button
                  key={family}
                  type="button"
                  role="checkbox"
                  aria-checked={filters.families.includes(family)}
                  onClick={() => toggleFamily(family)}
                  className={chipClass(filters.families.includes(family))}
                >
                  {family}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase text-ink-muted mr-1">Use</span>
              {USE_CASES.map((uc) => (
                <button
                  key={uc.value}
                  type="button"
                  role="checkbox"
                  aria-checked={filters.useCases.includes(uc.value)}
                  onClick={() => toggleUseCase(uc.value)}
                  className={chipClass(filters.useCases.includes(uc.value))}
                >
                  {uc.label}
                </button>
              ))}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold uppercase text-ink-muted">
                  LRV: Light ← → Dark
                </label>
                <span className="text-xs font-medium text-ink">
                  {filters.lrvMin}–{filters.lrvMax}
                </span>
              </div>
              <div className="relative h-6 flex items-center">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={filters.lrvMin}
                  aria-label="Minimum LRV"
                  onChange={(e) =>
                    onChange({ ...filters, lrvMin: Math.min(Number(e.target.value), filters.lrvMax) })
                  }
                  className="dual-range absolute w-full"
                />
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={filters.lrvMax}
                  aria-label="Maximum LRV"
                  onChange={(e) =>
                    onChange({ ...filters, lrvMax: Math.max(Number(e.target.value), filters.lrvMin) })
                  }
                  className="dual-range absolute w-full"
                />
              </div>
              <p className="text-xs text-ink-muted mt-1">
                LRV (Light Reflectance Value) measures how much light a color reflects back — 0 is absolute black, 100 is pure white.
              </p>
            </div>

            {jumpFamilies.length > 0 && (
              <nav aria-label="Jump to color family" className="flex flex-wrap gap-x-3 gap-y-1 text-xs pt-1">
                {jumpFamilies.map((family) => (
                  <a key={family} href={`#${FAMILY_CODES[family]}`} className="text-brand-teal hover:underline">
                    {family}
                  </a>
                ))}
              </nav>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function chipClass(active: boolean) {
  return `tap-target inline-flex items-center rounded-full border px-3 text-sm font-medium transition-colors ${
    active
      ? "bg-brand-teal text-white border-brand-teal"
      : "bg-white text-ink border-black/15 hover:bg-brand-green-light/40"
  }`;
}
