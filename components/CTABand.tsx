import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function CTABand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <section className="bg-brand-teal">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold">
            {heading}
          </h2>
          <p className="mt-2 text-white/90 max-w-xl">{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="tap-target inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-semibold text-brand-teal-dark hover:bg-brand-green-light transition-colors"
          >
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className="tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-5 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
