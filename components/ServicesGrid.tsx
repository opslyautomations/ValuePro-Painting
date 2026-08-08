import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid({
  heading = "Our Services",
}: {
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
      <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-brand-teal-dark mb-8">
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all"
          >
            <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-brand-teal">
              {s.name}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{s.line}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-brand-teal">
              Learn more →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
