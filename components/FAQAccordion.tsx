"use client";

import { useState } from "react";

export type FAQItem = { question: string; answer: string };

export default function FAQAccordion({
  faqs,
  heading = "Frequently Asked Questions",
  align = "center",
}: {
  faqs: FAQItem[];
  heading?: string;
  /** "left" shares the wide gutter used by the service-page bands. */
  align?: "center" | "left";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className={`mx-auto px-4 sm:px-6 py-14 ${
        align === "left" ? "max-w-7xl" : "max-w-3xl"
      }`}
    >
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-6">
        {heading}
      </h2>
      <div
        className={`divide-y divide-black/10 border-y border-black/10 ${
          align === "left" ? "max-w-3xl" : ""
        }`}
      >
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                className="tap-target flex w-full items-center justify-between gap-4 py-4 text-left font-semibold text-ink"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{faq.question}</span>
                <span aria-hidden className="text-brand-teal shrink-0">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <p className="pb-4 text-ink-muted leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
