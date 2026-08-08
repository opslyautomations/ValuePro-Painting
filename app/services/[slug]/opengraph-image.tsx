import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";
import { serviceDataBySlug } from "@/lib/services-data";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceDataBySlug(slug);

  return new ImageResponse(
    (
      <OgImage
        title={service?.h1 ?? "Painting Services"}
        subtitle="St. Louis County, Missouri"
      />
    ),
    { ...size }
  );
}
