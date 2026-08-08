import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";
import { blogPostBySlug } from "@/lib/blog-data";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostBySlug(slug);

  return new ImageResponse(
    (
      <OgImage
        title={post?.title ?? "ValuePro Painting Blog"}
        subtitle={post?.category}
      />
    ),
    { ...size }
  );
}
