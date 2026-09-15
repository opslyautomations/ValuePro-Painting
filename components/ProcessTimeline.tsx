import Reveal from "./motion/Reveal";

const STEPS = [
  {
    title: "Walkthrough & written estimate",
    body: "Ryan comes to the property, measures, and puts a real number on paper — not a range guessed from a photo.",
  },
  {
    title: "Protection & prep",
    body: "Floors covered, furniture wrapped, dust contained. Caulking, patching and sanding happen before any color goes up.",
  },
  {
    title: "Paint",
    body: "Cut in, rolled or sprayed to the finish the surface calls for, with rooms reset at the end of each working day.",
  },
  {
    title: "Walkthrough & touch-up",
    body: "We walk it together. Anything you flag gets fixed before the crew loads out — cleanup is part of the schedule, not an extra.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <Reveal direction="up">
        <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark sm:text-3xl">
          What actually happens, start to finish
        </h2>
        <p className="mt-3 max-w-2xl text-ink-muted">
          Four steps, in this order, every job. No surprises in the middle of
          your living room.
        </p>
      </Reveal>

      <div className="relative mt-10">
        {/* Connector rail behind the numbers on wide screens. It sits outside
            the <ol> because a list may only contain list items. */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 top-6 hidden h-0.5 bg-gradient-to-r from-brand-teal/15 via-brand-teal/40 to-brand-teal/15 lg:block"
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <Reveal as="li" key={step.title} direction="up" delay={i * 140} className="relative">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal font-heading text-lg font-semibold text-white shadow-md shadow-brand-teal/25">
              {i + 1}
            </span>
            <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
          </Reveal>
        ))}
        </ol>
      </div>
    </section>
  );
}
