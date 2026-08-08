"use client";

import type { PaintColor } from "@/data/paint-colors";
import ColorCard from "./ColorCard";

export default function ColorGrid({
  colors,
  compareIds,
  compareFull,
  onToggleCompare,
  onOpenDetail,
}: {
  colors: PaintColor[];
  compareIds: string[];
  compareFull: boolean;
  onToggleCompare: (id: string) => void;
  onOpenDetail: (id: string, el: HTMLElement) => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <ColorCard
            key={color.id}
            color={color}
            isComparing={compareIds.includes(color.id)}
            compareDisabled={compareFull && !compareIds.includes(color.id)}
            onToggleCompare={onToggleCompare}
            onOpenDetail={onOpenDetail}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
