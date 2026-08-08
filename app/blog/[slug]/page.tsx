import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS, blogPostBySlug } from "@/lib/blog-data";
import { serviceBySlug, SITE_NAME } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  const ctaService = serviceBySlug(post.ctaServiceSlug);

  return (
    <>
      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.metaDescription,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          breadcrumbSchema(breadcrumbs),
        ]}
      />
      <Breadcrumbs items={breadcrumbs} />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
        <p className="text-sm font-semibold text-brand-teal uppercase tracking-wide">
          {post.category}
        </p>
        <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-semibold text-brand-teal-dark">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          Published{" "}
          <time dateTime={post.datePublished}>
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>{" "}
          by {SITE_NAME}
        </p>

        <ImagePlaceholder label={post.imageAlt} className="mt-6 aspect-[16/9]" />

        <div className="mt-8">
          <Prose blocks={post.intro} />
        </div>

        {post.sections.map((section) => (
          <div key={section.heading} className="mt-8">
            <h2 className="font-heading text-2xl font-semibold text-brand-teal-dark mb-4">
              {section.heading}
            </h2>
            <Prose blocks={section.blocks} />
          </div>
        ))}

        {ctaService && (
          <p className="mt-8 text-ink-muted leading-relaxed border-t border-black/10 pt-6">
            {post.ctaText}{" "}
            <Link
              href={`/services/${ctaService.slug}`}
              className="text-brand-teal font-semibold hover:underline"
            >
              Learn more about {ctaService.name.toLowerCase()} →
            </Link>
          </p>
        )}
      </article>

      <CTABand
        heading="Ready for a free estimate?"
        body="Call or send the form and we'll come take a look at your project."
      />
    </>
  );
}
