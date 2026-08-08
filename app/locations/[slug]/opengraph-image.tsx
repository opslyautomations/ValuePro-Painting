import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";
import { locationDataBySlug } from "@/lib/locations-data";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = locationDataBySlug(slug);

  return new ImageResponse(
    (
      <OgImage
        title={city?.h1 ?? "ValuePro Painting"}
        subtitle="Free written estimates"
      />
    ),
    { ...size }
  );
}
