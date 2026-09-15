"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `to` when it scrolls into view. Renders the final value on the
 * server so the real number is in the HTML for crawlers and no-JS visitors.
 */
export default function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1500,
  className = "",
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!document.documentElement.classList.contains("motion-ready")) return;

    let frame = 0;

    const run = () => {
      // The first frame eases to ~0 on its own, so there is no separate reset
      // to write — which also keeps setState out of the effect body.
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutExpo — fast off the line, settles onto the final number.
        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        setValue(Math.round(eased * to));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            run();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
