import { BUSINESS } from "@/lib/constants";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold leading-tight">
            Residential &amp; Commercial Painting in St. Louis County
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-xl">
            Based in Ballwin and serving families and businesses across west
            St. Louis County — interior, exterior, cabinets and drywall
            repair, with EPA Lead-Safe certified crews.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#get-estimate"
              className="tap-target inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-brand-teal-dark hover:bg-brand-green-light transition-colors"
            >
              Get a Free Estimate
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="tap-target inline-flex items-center justify-center rounded-md border-2 border-white px-6 py-3 font-semibold text-white hover:bg-brand-teal-dark transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div id="get-estimate" className="lg:justify-self-end w-full flex justify-center lg:justify-end">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
