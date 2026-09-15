import { renderInline } from "@/components/Prose";
import Reveal from "@/components/motion/Reveal";
import { splitLead } from "./lead";

/**
 * Turns a bullet list into a bento grid of mixed-width cards.
 *
 * The column spans are chosen per item count so each row fills the six-column
 * grid exactly — a trailing half-empty row is what makes these layouts look
 * accidental.
 */
const SPANS: Record<number, number[]> = {
  1: [6],
  2: [3, 3],
  3: [2, 2, 2],
  4: [3, 3, 3, 3],
  5: [3, 3, 2, 2, 2],
  6: [2, 2, 2, 2, 2, 2],
  7: [3, 3, 2, 2, 2, 3, 3],
};

const SPAN_CLASS: Record<number, string> = {
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
};

export default function HighlightCards({
  items,
  tone = "plain",
}: {
  items: string[];
  /** "accent" tints the wide cards, for sections that need more contrast. */
  tone?: "plain" | "accent";
}) {
  const spans = SPANS[items.length] ?? items.map(() => 2);

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {items.map((item, i) => {
        const { title, body } = splitLead(item);
        const span = spans[i] ?? 2;
        const wide = span >= 3;
        const tinted = tone === "accent" && wide;

        return (
          <Reveal
            as="li"
            key={i}
            direction="up"
            delay={(i % 3) * 90}
            className={`${SPAN_CLASS[span] ?? "lg:col-span-2"} h-full`}
          >
            <div
              className={`vp-lift h-full rounded-xl border p-5 shadow-sm hover:shadow-md ${
                tinted
                  ? "border-brand-teal/15 bg-brand-green-light/40"
                  : "border-black/5 bg-white"
              }`}
            >
              <span
                aria-hidden
                className="mb-3 block h-1 w-10 rounded-full bg-brand-teal/50"
              />
              {title && (
                <h3
                  className={`font-heading font-semibold text-ink ${
                    wide ? "text-lg" : "text-base"
                  }`}
                >
                  {title}
                </h3>
              )}
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {renderInline(body)}
              </p>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
