"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { PaintColor } from "@/data/paint-colors";
import { swatchTextColor } from "@/lib/color-contrast";
import { useFocusTrap } from "./useFocusTrap";

export default function ColorDetail({
  color,
  allColors,
  onClose,
  onOpenColor,
}: {
  color: PaintColor | null;
  allColors: PaintColor[];
  onClose: () => void;
  onOpenColor: (id: string, el: HTMLElement) => void;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);
  const [copiedForId, setCopiedForId] = useState<string | undefined>(color?.id);
  useFocusTrap(panelRef, Boolean(color), onClose);

  // Reset the "Copied" confirmation whenever the displayed color changes
  // (including via a coordinatesWith swap) — adjusted during render per
  // React's "adjusting state on prop change" pattern, not in an effect.
  if (color?.id !== copiedForId) {
    setCopiedForId(color?.id);
    setCopied(false);
  }

  if (!color) return null;
  const activeColor = color;

  const textColor = swatchTextColor(activeColor.hex);
  const coordinates = activeColor.coordinatesWith
    .map((id) => allColors.find((c) => c.id === id))
    .filter((c): c is PaintColor => Boolean(c));

  const quoteMessage = `I'm interested in a quote using ${activeColor.name} (${activeColor.code}) from ${activeColor.brand}.`;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(activeColor.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable in this context — the code is still
      // visible on screen, so this fails silently rather than erroring.
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="color-detail-heading"
        className="relative h-full w-full sm:w-[420px] bg-white shadow-xl overflow-y-auto"
      >
        <div style={{ backgroundColor: color.hex, color: textColor }} className="p-6 relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close color detail"
            className="tap-target absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-black/10 hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            style={{ color: textColor }}
          >
            <span aria-hidden>✕</span>
          </button>
          <p className="text-sm font-semibold">
            {color.brand}
            {color.isColorOfYear ? ` · ${color.colorOfYearYear} Color of the Year` : ""}
          </p>
          <h2 id="color-detail-heading" className="font-heading text-2xl font-semibold mt-1 pr-10">
            {color.name}
          </h2>
          <p className="mt-1 text-sm">
            {color.code} · {color.hex} · LRV {color.lrv}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <button
            type="button"
            onClick={copyCode}
            className="tap-target inline-flex items-center rounded-md border border-black/15 px-4 text-sm font-semibold text-ink hover:bg-brand-green-light/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            {copied ? "Copied ✓" : `Copy code "${color.code}"`}
          </button>

          <div>
            <h3 className="font-heading text-base font-semibold text-ink mb-1">Undertone</h3>
            <p className="text-sm text-ink-muted">{color.undertone}</p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-ink mb-1">Our take</h3>
            <p className="text-sm text-ink-muted leading-relaxed">{color.note}</p>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-ink mb-2">Best for</h3>
            <div className="flex flex-wrap gap-2">
              {color.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brand-green-light/50 px-3 py-1 text-xs font-medium text-ink"
                >
                  {tag.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-base font-semibold text-ink mb-2">Rooms</h3>
            <p className="text-sm text-ink-muted">{color.rooms.join(", ")}</p>
          </div>

          {coordinates.length > 0 && (
            <div>
              <h3 className="font-heading text-base font-semibold text-ink mb-2">Coordinates with</h3>
              <div className="flex flex-wrap gap-3">
                {coordinates.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={(e) => onOpenColor(c.id, e.currentTarget)}
                    className="flex flex-col items-center gap-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-dark"
                    aria-label={`View ${c.name}, ${c.brand} ${c.code}`}
                  >
                    <span
                      className="block h-10 w-10 rounded-full border border-black/10"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden
                    />
                    <span className="text-xs text-ink-muted">{c.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          <a
            href={color.sourceUrl}
            target="_blank"
            rel="nofollow noopener"
            className="block text-sm text-brand-teal font-semibold hover:underline"
          >
            View {color.name} on {color.brand}&apos;s official site →
          </a>

          <div className="pt-4 border-t border-black/10">
            <Link
              href={`/contact?message=${encodeURIComponent(quoteMessage)}`}
              className="tap-target inline-flex w-full items-center justify-center rounded-md bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
            >
              Get this color quoted →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
