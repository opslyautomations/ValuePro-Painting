import { ImageResponse } from "next/og";
import { OgImage, ogContentType, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return new ImageResponse(
    (
      <OgImage
        title="Residential & Commercial Painting"
        subtitle="St. Louis County, Missouri"
      />
    ),
    { ...size }
  );
}
