import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Page Not Found | ValuePro Painting",
  description: "This page couldn't be found. Explore our painting services or head back to the ValuePro Painting homepage.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center">
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-brand-teal-dark">
        404 — Page Not Found
      </h1>
      <p className="mt-4 text-ink-muted">
        We couldn&apos;t find that page. It may have moved, or the link may
        be out of date.
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="tap-target inline-flex items-center justify-center rounded-md bg-brand-teal px-5 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
        >
          Back to Home
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="font-heading text-lg font-semibold text-ink mb-4">
          Top Services
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-full border border-brand-teal/30 px-4 py-2 text-sm font-medium text-brand-teal-dark hover:bg-brand-green-light/40"
            >
              {s.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
