"use client";

import { useEffect, useRef } from "react";

/**
 * A thin paint-stroke bar across the top of the viewport showing how far
 * through the page the visitor is. Written straight to the DOM node rather
 * than through state so scrolling never triggers a React render.
 */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? doc.scrollTop / scrollable : 0;
      el.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-1 pointer-events-none"
    >
      <div
        ref={ref}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-brand-teal via-brand-green to-brand-teal-dark"
      />
    </div>
  );
}
