import type { HousePalette } from "./palettes";

export type HouseVariant =
  | "ranch"
  | "two-story"
  | "craftsman"
  | "colonial"
  | "cottage"
  | "modern";

export const HOUSE_VARIANTS: HouseVariant[] = [
  "ranch",
  "two-story",
  "craftsman",
  "colonial",
  "cottage",
  "modern",
];

export const VARIANT_LABELS: Record<HouseVariant, string> = {
  ranch: "Mid-century ranch",
  "two-story": "Two-story traditional",
  craftsman: "Craftsman bungalow",
  colonial: "Center-hall colonial",
  cottage: "Storybook cottage",
  modern: "Modern farmhouse",
};

const OUTLINE_SOFT = "rgba(22, 26, 24, 0.12)";

type Parts = {
  body: string;
  trim: string;
  door: string;
  roof: string;
  uid: string;
};

/* -------------------------------------------------------------------------
   Shared fittings
   ------------------------------------------------------------------------- */

function Window({
  x,
  y,
  w,
  h,
  trim,
  uid,
  shutters,
  shutterColor,
  arched = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  trim: string;
  uid: string;
  shutters?: boolean;
  shutterColor?: string;
  arched?: boolean;
}) {
  const sw = w * 0.32;
  return (
    <g>
      {shutters && (
        <>
          <rect x={x - sw - 4} y={y} width={sw} height={h} rx="1" fill={shutterColor} />
          <rect x={x + w + 4} y={y} width={sw} height={h} rx="1" fill={shutterColor} />
        </>
      )}
      <rect
        x={x - 3}
        y={y - 3}
        width={w + 6}
        height={h + 6}
        rx={arched ? w / 2 + 3 : 2}
        fill={trim}
        stroke={OUTLINE_SOFT}
        strokeWidth="0.8"
      />
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={arched ? w / 2 : 1}
        fill={`url(#glass-${uid})`}
      />
      {/* Muntins */}
      <line x1={x + w / 2} y1={y} x2={x + w / 2} y2={y + h} stroke={trim} strokeWidth="2" />
      <line x1={x} y1={y + h * 0.42} x2={x + w} y2={y + h * 0.42} stroke={trim} strokeWidth="2" />
      {/* Sill */}
      <rect x={x - 6} y={y + h + 3} width={w + 12} height="3.5" rx="1.5" fill={trim} />
    </g>
  );
}

function Door({
  x,
  y,
  w,
  h,
  door,
  trim,
  arched = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  door: string;
  trim: string;
  arched?: boolean;
}) {
  const r = arched ? w / 2 : 2;
  return (
    <g>
      <rect
        x={x - 4}
        y={y - 4}
        width={w + 8}
        height={h + 4}
        rx={arched ? r + 4 : 2}
        fill={trim}
      />
      <rect x={x} y={y} width={w} height={h} rx={r} fill={door} />
      {/* Recessed panels */}
      <rect
        x={x + w * 0.18}
        y={y + h * 0.12}
        width={w * 0.64}
        height={h * 0.3}
        rx="1.5"
        fill="rgba(255,255,255,0.14)"
      />
      <rect
        x={x + w * 0.18}
        y={y + h * 0.52}
        width={w * 0.64}
        height={h * 0.32}
        rx="1.5"
        fill="rgba(0,0,0,0.12)"
      />
      <circle cx={x + w - 6} cy={y + h * 0.56} r="2" fill="#e8c77a" />
    </g>
  );
}

/** Tapered porch post, wide at the base like a craftsman column. */
function Column({ x, top, bottom, trim }: { x: number; top: number; bottom: number; trim: string }) {
  return (
    <g>
      <polygon
        points={`${x - 5},${top} ${x + 5},${top} ${x + 7},${bottom} ${x - 7},${bottom}`}
        fill={trim}
        stroke={OUTLINE_SOFT}
        strokeWidth="0.8"
      />
      <rect x={x - 9} y={bottom - 6} width="18" height="6" rx="1" fill={trim} />
    </g>
  );
}

function Steps({ x, w, y, trim }: { x: number; w: number; y: number; trim: string }) {
  return (
    <g>
      <rect x={x - 3} y={y} width={w + 6} height="4" rx="1" fill={trim} />
      <rect x={x - 7} y={y + 4} width={w + 14} height="4" rx="1" fill={trim} opacity="0.85" />
    </g>
  );
}

/* -------------------------------------------------------------------------
   House bodies — each returns the structure only. The scenery around them is
   shared, so a palette swap reads as the same house repainted.
   ------------------------------------------------------------------------- */

function Ranch({ body, trim, door, roof, uid }: Parts) {
  return (
    <g>
      <rect x={264} y={90} width="18" height="32" fill={roof} />
      <rect x={262} y={88} width="22" height="6" rx="1" fill={trim} />
      <rect x={64} y={154} width={272} height={82} fill={body} />
      <rect x={64} y={154} width={272} height={82} fill={`url(#sheen-${uid})`} />
      <polygon points="56,158 96,116 304,116 344,158" fill={roof} />
      <polygon points="56,158 96,116 304,116 344,158" fill={`url(#roofshade-${uid})`} />
      <line x1="96" y1="116" x2="304" y2="116" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <rect x={52} y={154} width={296} height={8} rx="2" fill={trim} />
      <rect x={60} y={228} width={280} height={8} fill="rgba(0,0,0,0.13)" />
      <Window x={88} y={172} w={38} h={34} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={240} y={172} w={38} h={34} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={292} y={172} w={30} h={34} trim={trim} uid={uid} />
      <Door x={186} y={178} w={32} h={58} door={door} trim={trim} />
      <Steps x={186} w={32} y={236} trim={trim} />
      {/* Porch light */}
      <circle cx={174} cy={190} r="3" fill="#f0d48a" />
    </g>
  );
}

function TwoStory({ body, trim, door, roof, uid }: Parts) {
  return (
    <g>
      <rect x={268} y={50} width="18" height="46" fill={roof} />
      <rect x={266} y={48} width="22" height="6" rx="1" fill={trim} />
      <rect x={88} y={112} width={224} height={124} fill={body} />
      <rect x={88} y={112} width={224} height={124} fill={`url(#sheen-${uid})`} />
      <polygon points="74,118 200,58 326,118" fill={roof} />
      <polygon points="74,118 200,58 326,118" fill={`url(#roofshade-${uid})`} />
      <rect x={70} y={114} width={260} height={8} rx="2" fill={trim} />
      <rect x={84} y={228} width={232} height={8} fill="rgba(0,0,0,0.13)" />
      {/* Belly band between floors */}
      <rect x={88} y={164} width={224} height={5} fill={trim} opacity="0.9" />
      <Window x={112} y={128} w={30} h={30} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={180} y={128} w={30} h={30} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={248} y={128} w={30} h={30} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={108} y={182} w={38} h={36} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={254} y={182} w={38} h={36} trim={trim} uid={uid} shutters shutterColor={roof} />
      {/* Entry pediment */}
      <polygon points="174,180 200,162 226,180" fill={trim} />
      <Door x={184} y={180} w={32} h={56} door={door} trim={trim} />
      <Steps x={184} w={32} y={236} trim={trim} />
    </g>
  );
}

function Craftsman({ body, trim, door, roof, uid }: Parts) {
  return (
    <g>
      <rect x={76} y={142} width={248} height={94} fill={body} />
      <rect x={76} y={142} width={248} height={94} fill={`url(#sheen-${uid})`} />
      {/* Deep front gable with a generous craftsman overhang */}
      <polygon points="58,148 200,84 342,148" fill={roof} />
      <polygon points="58,148 200,84 342,148" fill={`url(#roofshade-${uid})`} />
      <rect x={54} y={144} width={292} height={8} rx="2" fill={trim} />
      {/* Gable vent, tucked under the ridge */}
      <polygon points="200,104 214,120 186,120" fill={trim} />
      {/* Flat porch roof — a second gable here competes with the main one */}
      <rect x={64} y={180} width={272} height="9" rx="2" fill={roof} />
      <rect x={60} y={178} width={280} height="5" rx="2" fill={trim} />
      <rect x={70} y={189} width={260} height="4" fill="rgba(0,0,0,0.10)" />
      <Column x={96} top={193} bottom={236} trim={trim} />
      <Column x={304} top={193} bottom={236} trim={trim} />
      <rect x={72} y={228} width={256} height={8} fill="rgba(0,0,0,0.13)" />
      <Window x={124} y={198} w={38} h={32} trim={trim} uid={uid} />
      <Window x={242} y={198} w={38} h={32} trim={trim} uid={uid} />
      <Door x={184} y={192} w={32} h={44} door={door} trim={trim} />
      {/* Porch rail between the posts */}
      <rect x={106} y={218} width={62} height="3.5" rx="1.5" fill={trim} />
      <rect x={232} y={218} width={62} height="3.5" rx="1.5" fill={trim} />
      <Steps x={184} w={32} y={236} trim={trim} />
    </g>
  );
}

function Colonial({ body, trim, door, roof, uid }: Parts) {
  const cols = [110, 158, 212, 260];
  return (
    <g>
      <rect x={100} y={48} width="16" height="30" fill={roof} />
      <rect x={284} y={48} width="16" height="30" fill={roof} />
      <rect x={86} y={104} width={228} height={132} fill={body} />
      <rect x={86} y={104} width={228} height={132} fill={`url(#sheen-${uid})`} />
      <polygon points="72,110 110,70 290,70 328,110" fill={roof} />
      <polygon points="72,110 110,70 290,70 328,110" fill={`url(#roofshade-${uid})`} />
      <line x1="110" y1="70" x2="290" y2="70" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
      <rect x={68} y={106} width={264} height={8} rx="2" fill={trim} />
      <rect x={82} y={228} width={236} height={8} fill="rgba(0,0,0,0.13)" />
      {cols.map((x) => (
        <Window
          key={`u${x}`}
          x={x}
          y={124}
          w={28}
          h={32}
          trim={trim}
          uid={uid}
          shutters
          shutterColor={roof}
        />
      ))}
      <Window x={110} y={176} w={28} h={34} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Window x={260} y={176} w={28} h={34} trim={trim} uid={uid} shutters shutterColor={roof} />
      {/* Centered entry with pediment and sidelights */}
      <polygon points="170,178 200,158 230,178" fill={trim} />
      <rect x={172} y={178} width="8" height={58} fill={trim} />
      <rect x={220} y={178} width="8" height={58} fill={trim} />
      <Door x={184} y={178} w={32} h={58} door={door} trim={trim} />
      <Steps x={184} w={32} y={236} trim={trim} />
    </g>
  );
}

function Cottage({ body, trim, door, roof, uid }: Parts) {
  return (
    <g>
      <rect x={252} y={104} width="18" height="34" fill={roof} />
      <rect x={250} y={102} width="22" height="6" rx="1" fill={trim} />
      {/* Main mass */}
      <rect x={110} y={148} width={196} height={88} fill={body} />
      <rect x={110} y={148} width={196} height={88} fill={`url(#sheen-${uid})`} />
      <polygon points="96,154 208,78 320,154" fill={roof} />
      <polygon points="96,154 208,78 320,154" fill={`url(#roofshade-${uid})`} />
      <rect x={92} y={150} width={232} height={8} rx="2" fill={trim} />
      {/* Cross gable wing */}
      <rect x={64} y={180} width={72} height={56} fill={body} />
      <rect x={64} y={180} width={72} height={56} fill={`url(#sheen-${uid})`} />
      <polygon points="54,186 100,146 146,186" fill={roof} />
      <polygon points="54,186 100,146 146,186" fill={`url(#roofshade-${uid})`} />
      <rect x={52} y={182} width={96} height={7} rx="2" fill={trim} />
      <rect x={62} y={228} width={246} height={8} fill="rgba(0,0,0,0.13)" />
      {/* Gable window on the main mass */}
      <Window x={196} y={112} w={24} h={24} trim={trim} uid={uid} arched />
      <Window x={82} y={196} w={36} h={28} trim={trim} uid={uid} />
      {/* Window box under the wing window */}
      <rect x={76} y={227} width={48} height="8" rx="2" fill={roof} />
      <circle cx={86} cy={225} r="4" fill="#c7d9a6" />
      <circle cx={96} cy={223} r="4.5" fill="#b6cf93" />
      <circle cx={108} cy={225} r="4" fill="#c7d9a6" />
      <circle cx={117} cy={226} r="3.5" fill="#d8c0d2" />
      <Window x={252} y={178} w={36} h={34} trim={trim} uid={uid} shutters shutterColor={roof} />
      <Door x={178} y={182} w={32} h={54} door={door} trim={trim} arched />
      <Steps x={178} w={32} y={236} trim={trim} />
    </g>
  );
}

function Modern({ body, trim, door, roof, uid }: Parts) {
  const battens = [86, 100, 114, 128, 142, 156, 170, 184, 198];
  return (
    <g>
      {/* Low wing */}
      <rect x={72} y={158} width={148} height={78} fill={body} />
      <rect x={72} y={158} width={148} height={78} fill={`url(#sheen-${uid})`} />
      {battens
        .filter((x) => x > 78 && x < 214)
        .map((x) => (
          <line
            key={x}
            x1={x}
            y1={158}
            x2={x}
            y2={236}
            stroke="rgba(0,0,0,0.07)"
            strokeWidth="1.5"
          />
        ))}
      <rect x={66} y={152} width={160} height={8} rx="1" fill={roof} />
      {/* Tall gabled wing */}
      <rect x={220} y={128} width={112} height={108} fill={body} />
      <rect x={220} y={128} width={112} height={108} fill={`url(#sheen-${uid})`} />
      <polygon points="210,132 276,86 342,132" fill={roof} />
      <polygon points="210,132 276,86 342,132" fill={`url(#roofshade-${uid})`} />
      <rect x={208} y={128} width={136} height={7} rx="2" fill={trim} />
      <rect x={70} y={228} width={264} height={8} fill="rgba(0,0,0,0.13)" />
      {/* Oversized glazing */}
      <Window x={96} y={176} w={44} h={44} trim={trim} uid={uid} />
      <Window x={158} y={176} w={44} h={44} trim={trim} uid={uid} />
      <Window x={240} y={146} w={30} h={34} trim={trim} uid={uid} />
      <Window x={286} y={146} w={30} h={34} trim={trim} uid={uid} />
      <Window x={240} y={196} w={30} h={30} trim={trim} uid={uid} />
      <Door x={286} y={190} w={32} h={46} door={door} trim={trim} />
      {/* Entry canopy */}
      <rect x={272} y={182} width={62} height="6" rx="2" fill={trim} />
      <Steps x={286} w={32} y={236} trim={trim} />
    </g>
  );
}

/** Horizontal centre of each variant's front door, for the walkway. */
const DOOR_X: Record<HouseVariant, number> = {
  ranch: 202,
  "two-story": 200,
  craftsman: 200,
  colonial: 200,
  cottage: 194,
  modern: 302,
};

const BODIES: Record<HouseVariant, (p: Parts) => React.ReactElement> = {
  ranch: Ranch,
  "two-story": TwoStory,
  craftsman: Craftsman,
  colonial: Colonial,
  cottage: Cottage,
  modern: Modern,
};

/* -------------------------------------------------------------------------
   Scene
   ------------------------------------------------------------------------- */

export default function PaintedHouse({
  variant,
  palette,
  uid,
  scene = true,
  animated = true,
  variation = 0,
  className = "",
  style,
}: {
  variant: HouseVariant;
  palette: HousePalette;
  /** Must be unique per rendered instance — gradient ids are namespaced with it. */
  uid: string;
  /** Sky, lawn and landscaping. Off gives a bare structure on a flat ground. */
  scene?: boolean;
  /** Drifting clouds and swaying foliage. */
  animated?: boolean;
  /**
   * Shifts the sun, clouds and tree. Houses shown side by side should each
   * get a different value, or the row reads as one tiled image.
   */
  variation?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Body = BODIES[variant];
  const v = Math.abs(Math.trunc(variation));
  const showSun = v % 3 !== 1;
  const sunX = 336 - (v % 3) * 96;
  const showClouds = v % 2 === 0;
  const doorX = DOOR_X[variant];
  // The tree sits left or right of the house, never in the same spot twice —
  // but never on the side the front door is on.
  const treeShift = v % 2 === 1 && doorX < 260 ? 302 : 0;
  const parts: Parts = {
    body: palette.body.hex,
    trim: palette.trim.hex,
    door: palette.door.hex,
    roof: palette.roof.hex,
    uid,
  };

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      style={style}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`sky-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe0ee" />
          <stop offset="55%" stopColor="#dcedf3" />
          <stop offset="100%" stopColor="#f2f3ea" />
        </linearGradient>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8fb6c4" />
          <stop offset="45%" stopColor="#cfe3ea" />
          <stop offset="46%" stopColor="#7fa7b7" />
          <stop offset="100%" stopColor="#5c8496" />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.16" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.03" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id={`roofshade-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id={`lawn-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9ab86f" />
          <stop offset="100%" stopColor="#7ea25c" />
        </linearGradient>
      </defs>

      {scene ? (
        <>
          <rect width="400" height="300" fill={`url(#sky-${uid})`} />

          {showSun && (
            <g opacity="0.95">
              <circle cx={sunX} cy="74" r="30" fill="#ffe9a8" opacity="0.45" />
              <circle cx={sunX} cy="74" r="19" fill="#ffd978" />
            </g>
          )}

          {/* Clouds cross the sky on independent, slow cycles. */}
          {showClouds && (
            <g fill="#ffffff" opacity="0.88">
              <g
                className={animated ? "vp-cloud" : undefined}
                style={{ animationDuration: `${44 + (v % 3) * 9}s` }}
              >
                <ellipse cx="60" cy="66" rx="26" ry="12" />
                <ellipse cx="80" cy="60" rx="18" ry="14" />
                <ellipse cx="42" cy="62" rx="15" ry="10" />
              </g>
              <g
                className={animated ? "vp-cloud" : undefined}
                style={{ animationDuration: "72s", animationDelay: "-30s" }}
                opacity="0.7"
              >
                <ellipse cx="190" cy="100" rx="22" ry="9" />
                <ellipse cx="205" cy="95" rx="14" ry="11" />
              </g>
            </g>
          )}

          {/* Distant treeline */}
          <g opacity="0.45" fill="#7f9d6c">
            <ellipse cx="40" cy="222" rx="52" ry="26" />
            <ellipse cx="120" cy="226" rx="46" ry="22" />
            <ellipse cx="300" cy="224" rx="58" ry="24" />
            <ellipse cx="372" cy="228" rx="44" ry="20" />
          </g>

          <rect y="236" width="400" height="64" fill={`url(#lawn-${uid})`} />
          <ellipse cx="200" cy="244" rx="230" ry="16" fill="#a7c47c" opacity="0.5" />
        </>
      ) : (
        <>
          <rect width="400" height="300" fill="#eef1ea" />
          <rect y="236" width="400" height="64" fill="#dfe4d7" />
        </>
      )}

      {/* Ground shadow anchors the structure */}
      <ellipse cx="200" cy="238" rx="168" ry="12" fill="rgba(30,40,30,0.18)" />

      <Body {...parts} />

      {scene && (
        <>
          {/* Walkway, splayed out from whichever side the door is on */}
          <polygon
            points={`${doorX - 16},236 ${doorX + 16},236 ${doorX + 42},300 ${doorX - 42},300`}
            fill="#d8d4c6"
            opacity="0.9"
          />
          <polygon
            points={`${doorX - 16},236 ${doorX + 16},236 ${doorX + 42},300 ${doorX - 42},300`}
            fill={`url(#sheen-${uid})`}
          />

          {/* Foundation planting */}
          <g>
            <ellipse cx="128" cy="232" rx="20" ry="13" fill="#6f9153" />
            <ellipse cx="124" cy="228" rx="13" ry="9" fill="#82a462" />
            <ellipse cx="272" cy="232" rx="18" ry="12" fill="#6f9153" />
            <ellipse cx="277" cy="228" rx="12" ry="8" fill="#82a462" />
            <ellipse cx="248" cy="234" rx="13" ry="9" fill="#77995a" />
          </g>

          {/* Foreground tree, swaying */}
          <g transform={`translate(${treeShift} 0)`}>
            <rect x="34" y="188" width="10" height="56" rx="3" fill="#6b5340" />
            <g
              className={animated ? "vp-sway" : undefined}
              style={{ animationDuration: `${6.4 + (v % 4) * 0.7}s` }}
            >
              <circle cx="39" cy="176" r="30" fill="#5e8747" />
              <circle cx="20" cy="190" r="20" fill="#6d9852" />
              <circle cx="58" cy="192" r="21" fill="#548041" />
              <circle cx="40" cy="200" r="18" fill="#6d9852" />
            </g>
          </g>

          {v % 3 === 0 && (
            <g stroke="#5c6b6a" strokeWidth="1.6" fill="none" opacity="0.5">
              <path d="M120 92 q5 -5 10 0" />
              <path d="M136 84 q5 -5 10 0" />
            </g>
          )}
        </>
      )}
    </svg>
  );
}
