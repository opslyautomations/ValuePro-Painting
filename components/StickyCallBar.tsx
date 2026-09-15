"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/constants";

/**
 * Mobile-only action bar that slides up once the visitor has scrolled past
 * the hero, so the phone number is never more than a thumb away.
 */
export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setVisible(window.scrollY > 620);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="vp-sticky-bar fixed inset-x-0 bottom-0 z-50 lg:hidden border-t border-black/10 bg-brand-offwhite/95 backdrop-blur px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex gap-2">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="tap-target flex flex-1 items-center justify-center rounded-md bg-brand-teal px-4 font-semibold text-white"
        >
          Call {BUSINESS.phone}
        </a>
        <Link
          href="/contact"
          className="tap-target flex flex-1 items-center justify-center rounded-md border-2 border-brand-teal px-4 font-semibold text-brand-teal-dark"
        >
          Free Estimate
        </Link>
      </div>
    </div>
  );
}
