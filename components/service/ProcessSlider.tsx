"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { renderInline } from "@/components/Prose";
import { splitLead } from "./lead";

/**
 * The numbered process steps as a horizontal, snapping slider.
 *
 * It is a scroll container first and a widget second: the arrows and dots
 * drive scrollLeft, so touch swipe, trackpad, keyboard and a screen reader
 * reading straight through the list all keep working without extra handling.
 */
export default function ProcessSlider({
  steps,
  label,
}: {
  steps: string[];
  label: string;
}) {
  const trackRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;

    const stride = card.offsetWidth + 16; // card + gap-4
    setActive(Math.round(el.scrollLeft / stride));
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  function scrollToIndex(index: number) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const stride = card.offsetWidth + 16;
    el.scrollTo({
      left: Math.max(0, index) * stride,
      behavior: "smooth",
    });
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-ink-muted">
          {steps.length} steps — swipe or use the arrows
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={atStart}
            aria-label="Previous step"
            className="tap-target inline-flex items-center justify-center rounded-full border border-brand-teal/30 px-3 text-brand-teal-dark transition-colors hover:bg-brand-green-light/50 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={atEnd}
            aria-label="Next step"
            className="tap-target inline-flex items-center justify-center rounded-full border border-brand-teal/30 px-3 text-brand-teal-dark transition-colors hover:bg-brand-green-light/50 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>

      <ol
        ref={trackRef}
        aria-label={label}
        tabIndex={0}
        className="vp-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
      >
        {steps.map((step, i) => {
          const { title, body } = splitLead(step);
          return (
            <li
              key={i}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%]"
            >
              <div className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal font-heading font-semibold text-white">
                    {i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="h-0.5 flex-1 rounded-full bg-brand-teal/15"
                  />
                </div>
                {title && (
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                    {title}
                  </h3>
                )}
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {renderInline(body)}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-1 flex flex-wrap gap-2">
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to step ${i + 1}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active
                ? "w-8 bg-brand-teal"
                : "w-2 bg-brand-teal/25 hover:bg-brand-teal/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
