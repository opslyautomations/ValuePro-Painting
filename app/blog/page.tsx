import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-data";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = pageMetadata({
  title: "Painting Blog | ValuePro Painting",
  description:
    "Practical painting guidance for St. Louis County homeowners and businesses — timing, prep, cabinets, HOA bids, and city-specific housing notes.",
  path: "/blog",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const sortedPosts = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
);

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          Painting Blog
        </h1>
        <p className="mt-4 text-ink-muted">
          Practical guidance on painting in the St. Louis County climate and
          housing stock — timing, prep, cabinets, HOA bids, and notes on
          specific cities we serve.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-xl border border-black/5 bg-white overflow-hidden shadow-sm hover:shadow-md hover:border-brand-teal/30 transition-all"
            >
              <ImagePlaceholder label={post.imageAlt} className="rounded-none aspect-[16/9] border-0" />
              <div className="p-5">
                <p className="text-xs font-semibold text-brand-teal uppercase tracking-wide">
                  {post.category}
                </p>
                <h2 className="mt-1 font-heading text-lg font-semibold text-ink group-hover:text-brand-teal">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink-muted">{post.excerpt}</p>
                <time
                  dateTime={post.datePublished}
                  className="mt-3 block text-xs text-ink-muted"
                >
                  {new Date(post.datePublished).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
