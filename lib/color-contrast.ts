// WCAG 2.x relative-luminance contrast, computed per color rather than
// assumed from LRV — LRV and relative luminance are related but not
// identical, and the acceptance checklist requires computed contrast.

function srgbChannelToLinear(channel8bit: number): number {
  const c = channel8bit / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(hex: string): number {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return (
    0.2126 * srgbChannelToLinear(r) +
    0.7152 * srgbChannelToLinear(g) +
    0.0722 * srgbChannelToLinear(b)
  );
}

export function contrastRatio(luminanceA: number, luminanceB: number): number {
  const lighter = Math.max(luminanceA, luminanceB);
  const darker = Math.min(luminanceA, luminanceB);
  return (lighter + 0.05) / (darker + 0.05);
}

// Picking whichever of pure white / pure black clears the higher contrast
// against a background guarantees >=4.5:1 for every possible background:
// the two ratios are complementary and cross at ~4.59:1, so the max of the
// two never drops below that crossing point.
export function swatchTextColor(hex: string): "#FFFFFF" | "#000000" {
  const bgLuminance = relativeLuminance(hex);
  const whiteContrast = contrastRatio(bgLuminance, 1);
  const blackContrast = contrastRatio(bgLuminance, 0);
  return whiteContrast >= blackContrast ? "#FFFFFF" : "#000000";
}

export function swatchTextContrast(hex: string): number {
  const bgLuminance = relativeLuminance(hex);
  return Math.max(contrastRatio(bgLuminance, 1), contrastRatio(bgLuminance, 0));
}
