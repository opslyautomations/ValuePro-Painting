import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  title: "Thank You | ValuePro Painting",
  description: "Thanks for requesting a free estimate from ValuePro Painting. We'll be in touch shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center">
      <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
        Thanks — we&apos;ve got your request.
      </h1>
      <p className="mt-4 text-ink-muted">
        We&apos;ll reach out shortly to schedule your free estimate. If it&apos;s
        urgent, call us directly and we&apos;ll pick up.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="tap-target inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
        >
          Call {BUSINESS.phone}
        </a>
        <Link
          href="/"
          className="tap-target inline-flex items-center justify-center rounded-md border-2 border-brand-teal px-5 py-3 font-semibold text-brand-teal hover:bg-brand-green-light/40 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
