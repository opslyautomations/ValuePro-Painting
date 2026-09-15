/**
 * Business hours for ValuePro Painting.
 *
 * Hours are stored as minutes from midnight in the business's own timezone so
 * the "open now" badge stays correct for a visitor in any timezone — a
 * homeowner browsing from a phone set to Pacific time should still see whether
 * Ryan can pick up right now in St. Louis.
 */

export const TIME_ZONE = "America/Chicago";

export type DayHours = {
  /** 0 = Sunday, matching Date.getDay(). */
  day: number;
  label: string;
  /** schema.org dayOfWeek value. */
  schemaDay: string;
  /** Minutes from midnight in TIME_ZONE. Null on closed days. */
  open: number | null;
  close: number | null;
};

const h = (hour: number, minute = 0) => hour * 60 + minute;

export const HOURS: DayHours[] = [
  { day: 0, label: "Sunday", schemaDay: "Sunday", open: null, close: null },
  { day: 1, label: "Monday", schemaDay: "Monday", open: h(8), close: h(18) },
  { day: 2, label: "Tuesday", schemaDay: "Tuesday", open: h(8), close: h(18) },
  { day: 3, label: "Wednesday", schemaDay: "Wednesday", open: h(8), close: h(18) },
  { day: 4, label: "Thursday", schemaDay: "Thursday", open: h(8), close: h(18) },
  { day: 5, label: "Friday", schemaDay: "Friday", open: h(8), close: h(18) },
  { day: 6, label: "Saturday", schemaDay: "Saturday", open: h(8), close: h(15) },
];

/** Rows for a compact hours table: consecutive identical days are grouped. */
export const HOURS_SUMMARY: { label: string; value: string }[] = [
  { label: "Monday – Friday", value: "8:00 AM – 6:00 PM" },
  { label: "Saturday", value: "8:00 AM – 3:00 PM" },
  { label: "Sunday", value: "Closed" },
];

/** Single-line version for meta descriptions and the footer. */
export const HOURS_ONE_LINE =
  "Mon–Fri 8am–6pm · Sat 8am–3pm · Sun closed";

export function formatMinutes(minutes: number): string {
  const hour24 = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return minute === 0
    ? `${hour12}${suffix}`
    : `${hour12}:${String(minute).padStart(2, "0")}${suffix}`;
}

/** 24-hour "HH:MM", the format schema.org opening hours expect. */
function formatSchemaTime(minutes: number): string {
  return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
    minutes % 60
  ).padStart(2, "0")}`;
}

export function openingHoursSpecification() {
  const open = HOURS.filter((d) => d.open !== null && d.close !== null);
  return open.map((d) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${d.schemaDay}`,
    opens: formatSchemaTime(d.open as number),
    closes: formatSchemaTime(d.close as number),
  }));
}

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/** The current weekday and minutes-from-midnight in the business's timezone. */
export function businessLocalNow(now: Date = new Date()): {
  day: number;
  minutes: number;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const day = WEEKDAY_INDEX[get("weekday")] ?? now.getDay();
  // Some ICU builds render midnight as "24" under hour12:false.
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));

  return { day, minutes: hour * 60 + minute };
}

export type BusinessStatus = {
  open: boolean;
  /** Short human sentence, e.g. "Open now — until 6PM". */
  detail: string;
};

export function businessStatus(now: Date = new Date()): BusinessStatus {
  const { day, minutes } = businessLocalNow(now);
  const today = HOURS[day];

  if (today.open !== null && today.close !== null) {
    if (minutes >= today.open && minutes < today.close) {
      return { open: true, detail: `Open now — until ${formatMinutes(today.close)}` };
    }
    if (minutes < today.open) {
      return { open: false, detail: `Opens today at ${formatMinutes(today.open)}` };
    }
  }

  // Closed for the day — find the next day with hours.
  for (let offset = 1; offset <= 7; offset++) {
    const next = HOURS[(day + offset) % 7];
    if (next.open === null) continue;
    const when =
      offset === 1 ? "tomorrow" : next.label;
    return {
      open: false,
      detail: `Opens ${when} at ${formatMinutes(next.open)}`,
    };
  }

  return { open: false, detail: "Closed" };
}
