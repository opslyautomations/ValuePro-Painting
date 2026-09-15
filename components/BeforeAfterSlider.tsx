"use client";

import { useEffect, useRef, useState } from "react";
import PaintedHouse, { type HouseVariant } from "@/components/house/PaintedHouse";
import { weatheredPalette, type HousePalette } from "@/components/house/palettes";

/**
 * Drag-to-compare between a weathered exterior and the same house repainted.
 *
 * The handle is an invisible range input stretched across the frame, so
 * dragging, clicking, tabbing and arrow keys all work without bespoke
 * pointer plumbing. When the frame first scrolls into view the divider walks
 * itself across once — enough to read as "this thing moves" — and any real
 * interaction cancels that immediately.
 */
export default function BeforeAfterSlider({
  variant,
  palette,
  uid,
}: {
  variant: HouseVariant;
  palette: HousePalette;
  uid: string;
}) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const touchedRef = useRef(false);
  const rafRef = useRef(0);

  const before = weatheredPalette(palette);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    if (!document.documentElement.classList.contains("motion-ready")) return;

    const hint = () => {
      const start = performance.now();
      // Slide left, uncovering the repainted side as it goes.
      const from = 82;
      const to = 38;
      const duration = 1500;

      const tick = (now: number) => {
        if (touchedRef.current) return;
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setPosition(from + (to - from) * eased);
        if (t < 1) rafRef.current = requestAnimationFrame(tick);
      };

      setPosition(from);
      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            if (!touchedRef.current) hint();
          }
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function takeOver(next: number) {
    touchedRef.current = true;
    cancelAnimationFrame(rafRef.current);
    setPosition(next);
  }

  return (
    <div
      ref={frameRef}
      className="relative overflow-hidden rounded-xl border border-black/5 shadow-lg"
    >
      {/* The muted palette alone is too subtle on light neutrals; the filter
          adds the chalky, sun-bleached cast that sells the "before". */}
      <PaintedHouse
        variant={variant}
        palette={before}
        uid={`${uid}-before`}
        animated={false}
        className="block aspect-[4/3] w-full sm:aspect-[16/10]"
        style={{ filter: "saturate(0.55) brightness(0.93) contrast(0.94)" }}
      />

      {/* The fresh layer is clipped in from the right so it lands under the
          "After" label; position is the divider's distance from the left. */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <PaintedHouse
          variant={variant}
          palette={palette}
          uid={`${uid}-after`}
          className="block aspect-[4/3] w-full sm:aspect-[16/10]"
        />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-brand-teal px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
        After
      </span>

      {/* Visible divider and grip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-teal text-white shadow-lg">
          <span className="text-sm font-bold tracking-tighter">‹ ›</span>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={position}
        onChange={(e) => takeOver(Number(e.target.value))}
        onPointerDown={() => {
          touchedRef.current = true;
          cancelAnimationFrame(rafRef.current);
        }}
        aria-label="Drag to compare the weathered exterior with the repainted one"
        className="vp-compare absolute inset-0 h-full w-full"
      />
    </div>
  );
}
