"use client";

import type { PaintColor } from "@/data/paint-colors";
import { swatchTextColor } from "@/lib/color-contrast";
import { BRAND_CODES } from "./filter-utils";

export default function ColorCard({
  color,
  isComparing,
  compareDisabled,
  onToggleCompare,
  onOpenDetail,
  tabIndex,
  cardRef,
}: {
  color: PaintColor;
  isComparing: boolean;
  compareDisabled: boolean;
  onToggleCompare: (id: string) => void;
  onOpenDetail: (id: string, el: HTMLElement) => void;
  tabIndex: number;
  cardRef?: (el: HTMLButtonElement | null) => void;
}) {
  const textColor = swatchTextColor(color.hex);
  const overlay = textColor === "#FFFFFF" ? "rgba(0,0,0,0.28)" : "rgba(255,255,255,0.55)";

  return (
    <div className="relative shrink-0 w-40 snap-start group">
      <button
        ref={cardRef}
        type="button"
        tabIndex={tabIndex}
        onClick={(e) => onOpenDetail(color.id, e.currentTarget)}
        className="w-full rounded-lg overflow-hidden text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-dark focus-visible:ring-offset-2"
        aria-label={`${color.name}, ${BRAND_CODES[color.brand].toUpperCase()} ${color.code}, LRV ${color.lrv}. View details.`}
        style={{ backgroundColor: color.hex, color: textColor }}
        data-color-card={color.id}
      >
        <div className="flex flex-col justify-between p-3" style={{ minHeight: 140 }}>
          <span
            className="self-start rounded-full px-2 py-0.5 text-xs font-semibold"
            style={{ backgroundColor: overlay, color: textColor }}
          >
            LRV {color.lrv}
          </span>
          <div>
            <p className="font-semibold leading-snug">{color.name}</p>
            <p className="text-xs">
              {BRAND_CODES[color.brand].toUpperCase()} · {color.code}
            </p>
          </div>
        </div>
      </button>

      <button
        type="button"
        role="checkbox"
        aria-checked={isComparing}
        aria-label={`${isComparing ? "Remove" : "Add"} ${color.name} from compare`}
        disabled={compareDisabled}
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(color.id);
        }}
        className={`tap-target absolute top-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border text-sm font-bold shadow-sm transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal-dark ${
          isComparing
            ? "opacity-100 bg-brand-teal text-white border-brand-teal"
            : "opacity-60 group-hover:opacity-100 group-focus-within:opacity-100 bg-white text-ink border-black/15"
        } ${compareDisabled && !isComparing ? "cursor-not-allowed opacity-30" : ""}`}
      >
        {isComparing ? "✓" : "+"}
      </button>
    </div>
  );
}
