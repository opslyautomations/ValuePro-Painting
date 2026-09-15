"use client";

import { useEffect, useState } from "react";

export type NavItem = { id: string; label: string };

/**
 * Sticky in-page nav with scrollspy. Long service pages read as one
 * undifferentiated column without it; this gives the visitor a map and a way
 * to skip to the part they came for.
 */
export default function SectionNav({ items }: { items: NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // The heading nearest the top of the viewport wins, so the highlight
        // tracks reading position rather than whichever section is largest.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -65% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky z-30 border-y border-black/5 bg-brand-offwhite/95 backdrop-blur"
      style={{ top: "var(--header-height)" }}
    >
      <div className="vp-scroller mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 sm:px-6">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-teal text-white"
                  : "text-ink-muted hover:bg-brand-green-light/50 hover:text-brand-teal-dark"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
