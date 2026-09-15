"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale" | "fade";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.12,
  as: Tag = "div",
}: {
  children: ReactNode;
  direction?: Direction;
  /** Stagger in milliseconds. */
  delay?: number;
  className?: string;
  threshold?: number;
  as?: "div" | "section" | "li" | "article" | "span";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No motion-ready class means reduced motion or no observer support —
    // the CSS never hid this element, so leave it alone.
    if (!document.documentElement.classList.contains("motion-ready")) {
      return;
    }

    // Already past the fold on load (e.g. a back-navigation restoring scroll):
    // reveal on the next frame rather than waiting for a scroll that may
    // never come.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${className}`}
      data-reveal={direction}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
