"use client";

import { useRef, useState, type CSSProperties } from "react";
import type { PaintColor } from "@/data/paint-colors";
import ColorCard from "./ColorCard";
import { FAMILY_CODES, type Family } from "./filter-utils";

const CARD_WIDTH = 160; // w-40 (160px) card + gap
const GROUP_SIZE = 3;
const LAZY_THRESHOLD = 20;

export default function ColorRail({
  family,
  colors,
  compareIds,
  compareFull,
  onToggleCompare,
  onOpenDetail,
}: {
  family: Family;
  colors: PaintColor[];
  compareIds: string[];
  compareFull: boolean;
  onToggleCompare: (id: string) => void;
  onOpenDetail: (id: string, el: HTMLElement) => void;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const cardEls = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollByGroup(direction: 1 | -1) {
    scrollRef.current?.scrollBy({
      left: direction * CARD_WIDTH * GROUP_SIZE,
      behavior: "smooth",
    });
  }

  function focusIndex(next: number) {
    const clamped = Math.max(0, Math.min(colors.length - 1, next));
    setActiveIndex(clamped);
    const el = cardEls.current[clamped];
    el?.focus();
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      focusIndex(activeIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusIndex(activeIndex - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      focusIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      focusIndex(colors.length - 1);
    }
  }

  const lazy = colors.length > LAZY_THRESHOLD;

  return (
    <div id={FAMILY_CODES[family]} className="py-6 scroll-mt-[calc(var(--header-height)+8px)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between mb-3">
        <h3 className="font-heading text-lg font-semibold text-ink">
          {family} <span className="text-ink-muted font-sans text-sm font-normal">({colors.length})</span>
        </h3>
        <div className="hidden sm:flex gap-2">
          <button
            type="button"
            aria-label={`Scroll ${family} left`}
            onClick={() => scrollByGroup(-1)}
            className="tap-target inline-flex items-center justify-center rounded-full border border-black/15 bg-white hover:bg-brand-green-light/40"
          >
            <span aria-hidden>‹</span>
          </button>
          <button
            type="button"
            aria-label={`Scroll ${family} right`}
            onClick={() => scrollByGroup(1)}
            className="tap-target inline-flex items-center justify-center rounded-full border border-black/15 bg-white hover:bg-brand-green-light/40"
          >
            <span aria-hidden>›</span>
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div
          ref={scrollRef}
          onKeyDown={handleKeyDown}
          className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {colors.map((color, i) => {
            const lazyStyle: CSSProperties = lazy
              ? { contentVisibility: "auto", containIntrinsicSize: "160px 180px" }
              : {};
            return (
              <div key={color.id} style={lazyStyle}>
                <ColorCard
                  color={color}
                  isComparing={compareIds.includes(color.id)}
                  compareDisabled={compareFull && !compareIds.includes(color.id)}
                  onToggleCompare={onToggleCompare}
                  onOpenDetail={onOpenDetail}
                  tabIndex={i === activeIndex ? 0 : -1}
                  cardRef={(el) => {
                    cardEls.current[i] = el;
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
