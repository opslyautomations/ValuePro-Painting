const ITEMS = [
  "EPA Lead-Safe Certified",
  "Owner-operated",
  "Free written estimates",
  "Serving 10 St. Louis County cities",
];

export default function TrustBar() {
  return (
    <section className="bg-brand-green-light/50 border-y border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
        {ITEMS.map((item) => (
          <span key={item} className="text-sm font-semibold text-brand-teal-dark">
            {item}
          </span>
        ))}
        <span className="text-sm font-semibold text-brand-teal-dark">
          [CLIENT FACT REQUIRED — YEARS IN HOME SERVICES] years in home services
        </span>
      </div>
    </section>
  );
}
