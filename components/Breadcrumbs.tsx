import Link from "next/link";

export type BreadcrumbItem = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-ink font-medium">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-brand-teal">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
