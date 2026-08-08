export type LocalResource = { name: string; url: string; note?: string };

export default function LocalResources({
  resources,
}: {
  resources: LocalResource[];
}) {
  if (resources.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
      <h2 className="font-heading text-xl font-semibold text-brand-teal-dark mb-3">
        Local Resources
      </h2>
      <ul className="space-y-2">
        {resources.map((r) => (
          <li key={r.url} className="text-sm text-ink-muted">
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-teal hover:underline"
            >
              {r.name}
            </a>
            {r.note && <span> — {r.note}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}
