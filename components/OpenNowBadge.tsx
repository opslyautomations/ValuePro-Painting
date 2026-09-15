"use client";

import { useEffect, useState } from "react";
import { businessStatus, type BusinessStatus } from "@/lib/hours";

/**
 * Live open/closed indicator.
 *
 * Every page here is statically generated, so a server-rendered answer would
 * be frozen at build time and wrong within the hour. The status is therefore
 * resolved on the client after mount and refreshed each minute; before that a
 * neutral placeholder holds the space.
 */
export default function OpenNowBadge({
  className = "",
  tone = "light",
}: {
  className?: string;
  /** "light" sits on a pale background, "dark" on the teal footer. */
  tone?: "light" | "dark";
}) {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(businessStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  const base =
    tone === "dark"
      ? "bg-white/10 text-white"
      : "bg-white text-brand-teal-dark border border-black/5";

  if (!status) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${base} ${className}`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-current opacity-30" />
        <span className="opacity-60">Checking hours…</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${base} ${className}`}
      role="status"
    >
      <span className="relative inline-flex h-2.5 w-2.5 shrink-0">
        {status.open && (
          <span className="vp-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status.open ? "bg-emerald-500" : "bg-amber-500"
          }`}
        />
      </span>
      {status.detail}
    </span>
  );
}
