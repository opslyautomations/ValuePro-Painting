import PaintRevealHouse from "@/components/house/PaintRevealHouse";
import PaintRoller from "@/components/house/PaintRoller";
import { paletteById, weathered } from "@/components/house/palettes";
import {
  SCENES,
  SERVICE_COLORS,
  SceneDefs,
  type SceneColors,
  type SceneState,
} from "./scenes";

function Drawing({
  slug,
  colors,
  uid,
  state,
  style,
}: {
  slug: string;
  colors: SceneColors;
  uid: string;
  state: SceneState;
  style?: React.CSSProperties;
}) {
  const draw = SCENES[slug];
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      className="block h-full w-full"
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <SceneDefs uid={uid} />
      {draw(colors, uid, state)}
    </svg>
  );
}

function weatherColors(c: SceneColors): SceneColors {
  return {
    surface: weathered(c.surface, 0.5),
    trim: weathered(c.trim, 0.44),
    accent: weathered(c.accent, 0.46),
    deep: weathered(c.deep, 0.34),
  };
}

/**
 * The illustration that heads each service page: the surface that service
 * works on, shown tired underneath and freshly coated on top, with the
 * roller wiping the fresh layer in when the block scrolls into view.
 */
export default function ServiceScene({
  slug,
  uid,
  delay = 300,
  className = "",
}: {
  slug: string;
  uid: string;
  delay?: number;
  className?: string;
}) {
  // Exterior work already has a purpose-built drawing — the house itself.
  if (slug === "exterior-painting" || !SCENES[slug]) {
    return (
      <PaintRevealHouse
        variant="two-story"
        palette={paletteById("ballwin-classic")}
        uid={uid}
        variation={2}
        delay={delay}
        className={className}
      />
    );
  }

  const colors = SERVICE_COLORS[slug];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Drawing
        slug={slug}
        colors={weatherColors(colors)}
        uid={`${uid}-before`}
        state="before"
        style={{ filter: "saturate(0.55) brightness(0.93) contrast(0.94)" }}
      />
      <div
        className="vp-paint-layer absolute inset-0"
        style={delay ? { animationDelay: `${delay}ms` } : undefined}
      >
        <Drawing slug={slug} colors={colors} uid={`${uid}-after`} state="after" />
      </div>
      <PaintRoller color={colors.surface} delay={delay} />
    </div>
  );
}
