import { Prose, type ContentBlock } from "@/components/Prose";
import Reveal from "@/components/motion/Reveal";
import ProcessSlider from "./ProcessSlider";
import HighlightCards from "./HighlightCards";
import type { ServiceSection } from "@/lib/services-data";

/** Stable anchor id for a section heading. */
export function sectionId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * "Value framing" is an internal editorial label, not something to print as a
 * heading — those sections render as a pull quote instead.
 */
export function isPullQuote(section: ServiceSection): boolean {
  return (
    section.heading.toLowerCase() === "value framing" &&
    section.blocks.length === 1 &&
    section.blocks[0].type === "p"
  );
}

function headingFor(section: ServiceSection) {
  return (
    <Reveal direction="up">
      <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark sm:text-3xl">
        {section.heading}
      </h2>
    </Reveal>
  );
}

export default function ServiceSectionBlock({
  section,
}: {
  section: ServiceSection;
}) {
  const id = sectionId(section.heading);
  const ordered = section.blocks.find((b) => b.type === "ol");
  const bullets = section.blocks.find((b) => b.type === "ul");
  const rest = section.blocks.filter(
    (b) => b.type !== "ol" && b.type !== "ul"
  ) as ContentBlock[];

  // --- Pull quote -------------------------------------------------------
  if (isPullQuote(section)) {
    const block = section.blocks[0];
    return (
      <section id={id} className="scroll-mt-40 bg-brand-teal-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <Reveal direction="up">
            <span aria-hidden className="font-heading text-5xl leading-none text-brand-green">
              &ldquo;
            </span>
            <p className="mt-2 max-w-4xl font-heading text-xl leading-relaxed sm:text-2xl">
              {block.type === "p" ? block.text : ""}
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  // --- Numbered process -> slider ---------------------------------------
  if (ordered && ordered.type === "ol") {
    return (
      <section id={id} className="scroll-mt-40 bg-brand-green-light/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          {headingFor(section)}
          {rest.length > 0 && (
            <div className="mt-4 max-w-3xl">
              <Prose blocks={rest} />
            </div>
          )}
          <div className="mt-8">
            <ProcessSlider steps={ordered.items} label={section.heading} />
          </div>
        </div>
      </section>
    );
  }

  // --- Bullets -> bento cards -------------------------------------------
  if (bullets && bullets.type === "ul") {
    return (
      <section id={id} className="scroll-mt-40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          {headingFor(section)}
          {rest.length > 0 && (
            <div className="mt-4 max-w-3xl">
              <Prose blocks={rest} />
            </div>
          )}
          <div className="mt-8">
            <HighlightCards items={bullets.items} tone="accent" />
          </div>
        </div>
      </section>
    );
  }

  // --- Plain prose -------------------------------------------------------
  return (
    <section id={id} className="scroll-mt-40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {headingFor(section)}
        <Reveal direction="up" delay={80}>
          <div className="mt-4 max-w-3xl">
            <Prose blocks={section.blocks} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
