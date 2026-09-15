import { HOURS_SUMMARY } from "@/lib/hours";
import OpenNowBadge from "./OpenNowBadge";
import { BUSINESS } from "@/lib/constants";

export default function BusinessHours({
  heading = "Business Hours",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-black/5 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-heading text-lg font-semibold text-brand-teal-dark">
          {heading}
        </h2>
        <OpenNowBadge />
      </div>

      <dl className="mt-4 divide-y divide-black/5 text-sm">
        {HOURS_SUMMARY.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 py-2.5">
            <dt className="text-ink-muted">{row.label}</dt>
            <dd
              className={
                row.value === "Closed"
                  ? "font-semibold text-ink-muted"
                  : "font-semibold text-ink"
              }
            >
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-4 text-sm text-ink-muted">
        Estimates are booked during these hours. Leave a message any time at{" "}
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="font-semibold text-brand-teal hover:underline"
        >
          {BUSINESS.phone}
        </a>{" "}
        and Ryan returns calls the next business day.
      </p>
    </div>
  );
}
