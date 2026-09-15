/**
 * Per-service illustrated scenes.
 *
 * Each scene is a pure function of a colour set and a namespace id, so the
 * same drawing can be rendered twice — weathered underneath, freshly painted
 * on top — and wiped in by the shared paint-reveal mechanic.
 */

/** Which half of the paint reveal is being drawn. */
export type SceneState = "before" | "after";

export type SceneColors = {
  /** The surface being painted — the one the reveal is really about. */
  surface: string;
  trim: string;
  accent: string;
  deep: string;
};

const SOFT = "rgba(22, 26, 24, 0.12)";

export const SERVICE_COLORS: Record<string, SceneColors> = {
  "interior-painting": {
    surface: "#E6DFD3",
    trim: "#FFFFFF",
    accent: "#2F3D4C",
    deep: "#6B5340",
  },
  "exterior-painting": {
    surface: "#D1C7B8",
    trim: "#EEEFEA",
    accent: "#2F3D4C",
    deep: "#585858",
  },
  "cabinet-refinishing": {
    surface: "#EDEAE0",
    trim: "#FFFFFF",
    accent: "#434B56",
    deep: "#85837A",
  },
  "commercial-painting": {
    surface: "#CACBC5",
    trim: "#EEEFEA",
    accent: "#1F6F78",
    deep: "#44484D",
  },
  "hoa-properties": {
    surface: "#D1C7B8",
    trim: "#EEEFEA",
    accent: "#622F2D",
    deep: "#585858",
  },
  "drywall-repair": {
    surface: "#EDECE6",
    trim: "#FFFFFF",
    accent: "#A9B0B1",
    deep: "#85837A",
  },
  "lime-wash-specialized-painting": {
    surface: "#DBD2BC",
    trim: "#EFEEE5",
    accent: "#9E5F4C",
    deep: "#6B5340",
  },
};

/* ------------------------------------------------------------------ */

function Glass({ uid }: { uid: string }) {
  return (
    <linearGradient id={`sglass-${uid}`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#cfe3ea" />
      <stop offset="48%" stopColor="#eaf4f7" />
      <stop offset="49%" stopColor="#a9c8d4" />
      <stop offset="100%" stopColor="#7ea3b3" />
    </linearGradient>
  );
}

/** A shaker-style door or drawer front. */
function Panel({
  x,
  y,
  w,
  h,
  fill,
  inset,
  knob,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  inset: string;
  knob?: string;
}) {
  const p = Math.min(w, h) * 0.16;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill={fill} stroke={SOFT} strokeWidth="1" />
      <rect
        x={x + p}
        y={y + p}
        width={w - p * 2}
        height={h - p * 2}
        rx="1.5"
        fill={inset}
      />
      {knob && <circle cx={x + w - p * 0.7} cy={y + h / 2} r="2.4" fill={knob} />}
    </g>
  );
}

/* --- Interior room ------------------------------------------------- */

function InteriorRoom(c: SceneColors, uid: string) {
  return (
    <g>
      {/* Wall — the surface the reveal is about */}
      <rect y="0" width="400" height="252" fill={c.surface} />
      <rect y="0" width="400" height="252" fill={`url(#ssheen-${uid})`} />

      {/* Crown moulding and ceiling */}
      <rect y="0" width="400" height="30" fill={c.trim} />
      <rect y="28" width="400" height="9" rx="2" fill={c.trim} />
      <rect y="37" width="400" height="3" fill="rgba(0,0,0,0.07)" />

      {/* Door casing, left */}
      <rect x="24" y="64" width="96" height="188" rx="2" fill={c.trim} />
      <rect x="34" y="74" width="76" height="178" fill={c.accent} />
      <rect x="42" y="84" width="60" height="70" rx="2" fill="rgba(255,255,255,0.12)" />
      <rect x="42" y="164" width="60" height="78" rx="2" fill="rgba(0,0,0,0.12)" />
      <circle cx="98" cy="166" r="3" fill="#e8c77a" />

      {/* Window, right */}
      <rect x="244" y="72" width="128" height="112" rx="2" fill={c.trim} />
      <rect x="254" y="82" width="108" height="92" fill={`url(#sglass-${uid})`} />
      <line x1="308" y1="82" x2="308" y2="174" stroke={c.trim} strokeWidth="5" />
      <line x1="254" y1="128" x2="362" y2="128" stroke={c.trim} strokeWidth="5" />
      <rect x="238" y="184" width="140" height="8" rx="2" fill={c.trim} />

      {/* Baseboard and floor */}
      <rect y="234" width="400" height="18" rx="1" fill={c.trim} />
      <rect y="252" width="400" height="48" fill={c.deep} />
      {[0, 70, 140, 210, 280, 350].map((x) => (
        <line
          key={x}
          x1={x}
          y1="252"
          x2={x - 18}
          y2="300"
          stroke="rgba(0,0,0,0.14)"
          strokeWidth="1.5"
        />
      ))}
      <rect y="252" width="400" height="4" fill="rgba(0,0,0,0.18)" />

      {/* Drop cloth, can and roller at work */}
      <ellipse cx="170" cy="272" rx="78" ry="20" fill="#e9e6dc" />
      <rect x="140" y="248" width="26" height="26" rx="2" fill={c.trim} stroke={SOFT} />
      <rect x="140" y="248" width="26" height="8" rx="2" fill={c.surface} />
      <g transform="rotate(-11 208 200)">
        <rect x="205" y="118" width="6" height="152" rx="3" fill="#b0b6b3" />
        <rect x="205" y="238" width="6" height="32" rx="3" fill={c.deep} />
        <rect x="190" y="104" width="36" height="14" rx="7" fill={c.surface} stroke={SOFT} />
        <rect x="205" y="112" width="6" height="8" fill="#9aa09d" />
      </g>
    </g>
  );
}

/* --- Kitchen cabinets ---------------------------------------------- */

function CabinetRun(c: SceneColors, uid: string) {
  const uppers = [34, 122, 210, 298];
  const lowers = [34, 122, 210, 298];
  return (
    <g>
      <rect width="400" height="300" fill="#efece5" />

      {/* Upper run */}
      <rect x="26" y="22" width="348" height="98" rx="3" fill={c.surface} />
      <rect x="26" y="22" width="348" height="98" fill={`url(#ssheen-${uid})`} />
      {uppers.map((x) => (
        <Panel
          key={`u${x}`}
          x={x}
          y={28}
          w={80}
          h={86}
          fill={c.surface}
          inset="rgba(0,0,0,0.055)"
          knob={c.deep}
        />
      ))}
      <rect x="22" y="116" width="356" height="7" rx="2" fill={c.trim} />

      {/* Backsplash and counter */}
      <rect x="26" y="123" width="348" height="42" fill="#e3e6e2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1={26 + i * 29}
          y1="123"
          x2={26 + i * 29}
          y2="165"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1"
        />
      ))}
      <rect x="18" y="163" width="364" height="15" rx="3" fill={c.deep} />
      <rect x="18" y="163" width="364" height="5" rx="2" fill="rgba(255,255,255,0.22)" />

      {/* Lower run */}
      <rect x="26" y="178" width="348" height="98" rx="3" fill={c.surface} />
      <rect x="26" y="178" width="348" height="98" fill={`url(#ssheen-${uid})`} />
      {lowers.map((x) => (
        <g key={`l${x}`}>
          <Panel x={x} y={184} w={80} h={26} fill={c.surface} inset="rgba(0,0,0,0.055)" />
          <rect x={x + 28} y={194} width={24} height="4" rx="2" fill={c.deep} />
          <Panel
            x={x}
            y={214}
            w={80}
            h={58}
            fill={c.surface}
            inset="rgba(0,0,0,0.055)"
            knob={c.deep}
          />
        </g>
      ))}

      {/* Undermount sink and faucet */}
      <rect x="166" y="166" width="92" height="12" rx="2" fill="#9ea5a2" />
      <rect x="172" y="168" width="80" height="8" rx="2" fill="#7f8784" />
      <path
        d="M198 152 v-20 q0 -9 9 -9 h12 q9 0 9 9 v10"
        stroke={c.deep}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="190" y="150" width="44" height="6" rx="3" fill={c.deep} />

      <rect y="276" width="400" height="24" fill="#d9d5c9" />
      <rect x="26" y="276" width="348" height="5" fill="rgba(0,0,0,0.12)" />
    </g>
  );
}

/* --- Commercial storefront ------------------------------------------ */

function Storefront(c: SceneColors, uid: string) {
  return (
    <g>
      <rect width="400" height="300" fill="#dcedf3" />
      <rect y="246" width="400" height="54" fill="#cfcabd" />
      <rect y="246" width="400" height="4" fill="rgba(0,0,0,0.12)" />

      {/* Façade */}
      <rect x="26" y="34" width="348" height="212" fill={c.surface} />
      <rect x="26" y="34" width="348" height="212" fill={`url(#ssheen-${uid})`} />

      {/* Cornice and parapet */}
      <rect x="18" y="26" width="364" height="16" rx="2" fill={c.deep} />
      <rect x="18" y="42" width="364" height="5" fill="rgba(0,0,0,0.12)" />

      {/* Sign band */}
      <rect x="54" y="60" width="292" height="40" rx="3" fill={c.accent} />
      <rect x="66" y="72" width="180" height="7" rx="3.5" fill="rgba(255,255,255,0.55)" />
      <rect x="66" y="84" width="112" height="6" rx="3" fill="rgba(255,255,255,0.32)" />

      {/* Awnings */}
      <path d="M44 118 h132 l-10 26 h-112 z" fill={c.accent} />
      <path d="M224 118 h132 l10 26 h-112 z" fill={c.accent} opacity="0.92" />

      {/* Display windows */}
      <rect x="48" y="146" width="124" height="92" rx="2" fill={c.trim} />
      <rect x="55" y="153" width="110" height="78" fill={`url(#sglass-${uid})`} />
      <rect x="228" y="146" width="124" height="92" rx="2" fill={c.trim} />
      <rect x="235" y="153" width="110" height="78" fill={`url(#sglass-${uid})`} />

      {/* Entry */}
      <rect x="176" y="140" width="48" height="98" rx="2" fill={c.trim} />
      <rect x="183" y="147" width="34" height="84" fill={`url(#sglass-${uid})`} />
      <rect x="183" y="196" width="34" height="8" fill={c.accent} />
      <rect x="210" y="180" width="4" height="18" rx="2" fill={c.deep} />

      {/* Kerb */}
      <rect x="26" y="238" width="348" height="9" fill={c.deep} opacity="0.5" />
      <ellipse cx="200" cy="262" rx="160" ry="9" fill="rgba(0,0,0,0.07)" />
    </g>
  );
}

/* --- HOA townhome row ----------------------------------------------- */

function TownhomeRow(c: SceneColors, uid: string) {
  const units = [24, 114, 204, 294];
  return (
    <g>
      <rect width="400" height="300" fill="#dcedf3" />
      <ellipse cx="200" cy="272" rx="240" ry="30" fill="#9ab86f" />
      <rect y="268" width="400" height="32" fill="#8aab61" />

      {units.map((x, i) => {
        // Alternating body tones read as separate units under one roofline.
        // A near-neighbour of the body colour, not a dark contrast — the
        // units are painted differently, not built of different materials.
        const body = i % 2 === 0 ? c.surface : c.trim;
        return (
          <g key={x}>
            <rect x={x} y={112} width={82} height={150} fill={body} />
            <rect x={x} y={112} width={82} height={150} fill={`url(#ssheen-${uid})`} />
            {/* Unit gable */}
            <polygon points={`${x - 6},116 ${x + 41},76 ${x + 88},116`} fill={c.accent} />
            <rect x={x - 8} y={112} width={98} height="7" rx="2" fill={c.trim} />
            {/* Windows and door */}
            <rect x={x + 12} y={130} width={24} height={26} rx="1" fill={c.trim} />
            <rect x={x + 15} y={133} width={18} height={20} fill={`url(#sglass-${uid})`} />
            <rect x={x + 48} y={130} width={24} height={26} rx="1" fill={c.trim} />
            <rect x={x + 51} y={133} width={18} height={20} fill={`url(#sglass-${uid})`} />
            <rect x={x + 28} y={190} width={28} height={72} rx="2" fill={c.trim} />
            <rect x={x + 32} y={194} width={20} height={68} fill={c.accent} />
            <circle cx={x + 48} cy={228} r="2" fill="#e8c77a" />
            <rect x={x + 8} y={254} width={66} height={8} fill="rgba(0,0,0,0.12)" />
            {/* Party wall */}
            <rect x={x + 82} y={112} width="4" height={150} fill="rgba(0,0,0,0.13)" />
          </g>
        );
      })}

      {/* Shrubs sit between the entries, not across them */}
      {[18, 108, 198, 288, 378].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="264" rx="15" ry="10" fill="#6f9153" />
          <ellipse cx={x - 3} cy="260" rx="10" ry="7" fill="#82a462" />
        </g>
      ))}
    </g>
  );
}

/* --- Drywall repair -------------------------------------------------- */

function DrywallRepair(c: SceneColors, uid: string, state: SceneState) {
  const repaired = state === "after";
  return (
    <g>
      <rect width="400" height="258" fill={c.surface} />
      <rect width="400" height="258" fill={`url(#ssheen-${uid})`} />

      {/* The damage only exists in the "before" layer — the sweep is what
          makes it go away, which is the service in one image. */}
      {!repaired && (
        <g>
          {/* Feathered compound, widest and softest at the edges */}
          <ellipse cx="200" cy="140" rx="104" ry="72" fill={c.accent} opacity="0.22" />
          <ellipse cx="200" cy="140" rx="82" ry="56" fill={c.accent} opacity="0.3" />

          {/* Opened cavity with a stud behind it */}
          <polygon
            points="152,96 244,92 250,180 158,186"
            fill="#3c3831"
          />
          <rect x="192" y="92" width="16" height="92" fill={c.deep} />

          {/* Patch board set slightly proud of the wall */}
          <polygon points="160,104 238,101 242,172 164,176" fill={c.trim} />

          {/* Tape bands across the joints */}
          <rect x="146" y="98" width="108" height="11" rx="2" fill={c.accent} opacity="0.75" />
          <rect x="146" y="166" width="108" height="11" rx="2" fill={c.accent} opacity="0.75" />
          <rect x="186" y="96" width="11" height="84" fill={c.accent} opacity="0.6" />

          {/* Nail pops elsewhere on the wall, the other half of the job */}
          <circle cx="86" cy="76" r="5" fill={c.accent} opacity="0.5" />
          <circle cx="330" cy="200" r="6" fill={c.accent} opacity="0.5" />
          <circle cx="308" cy="70" r="4" fill={c.accent} opacity="0.45" />
        </g>
      )}

      {/* Baseboard and floor */}
      <rect y="234" width="400" height="18" rx="1" fill={c.trim} />
      <rect y="252" width="400" height="48" fill={c.deep} />
      <rect y="252" width="400" height="4" fill="rgba(0,0,0,0.18)" />

      {/* Drop cloth, mud pan and taping knife stay in both states */}
      <ellipse cx="200" cy="284" rx="112" ry="15" fill="#e9e6dc" opacity="0.85" />
      <path d="M44 258 h76 l-9 22 h-58 z" fill="#b9bdbb" />
      <rect x="48" y="254" width="68" height="6" rx="2" fill="#d2d6d4" />
      <rect x="316" y="212" width="6" height="48" rx="3" fill={c.deep} />
      <rect x="298" y="204" width="44" height="10" rx="2" fill="#c8ccca" />
    </g>
  );
}

/* --- Lime wash / specialty finish ------------------------------------ */

function LimeWashWall(c: SceneColors, uid: string, state: SceneState) {
  const washed = state === "after";
  // Lime wash lives on masonry, so the scene is a brick chimney breast: bare
  // and flat before, mineral-washed and mottled after.
  const brick = washed ? c.surface : c.accent;
  const mortar = washed ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.14)";

  const courses = Array.from({ length: 9 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => ({
      x: 104 + col * 40 + (row % 2 ? -20 : 0),
      y: 16 + row * 26,
    }))
  ).flat();

  return (
    <g>
      <rect width="400" height="300" fill={washed ? c.trim : "#e2ded4"} />
      <rect y="262" width="400" height="38" fill={c.deep} />

      {/* Chimney breast */}
      <rect x="104" y="16" width="192" height="246" fill={brick} />
      <g clipPath={`url(#breast-${uid})`}>
        {courses.map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={b.y}
            width="36"
            height="22"
            rx="1.5"
            fill={brick}
            stroke={mortar}
            strokeWidth="1.5"
          />
        ))}
      </g>

      {/* The wash itself — soft, uneven blooms only once it is applied */}
      {washed && (
        <g clipPath={`url(#breast-${uid})`}>
          {[
            [150, 60, 58, 34],
            [252, 44, 48, 28],
            [130, 132, 54, 32],
            [262, 150, 52, 30],
            [200, 96, 64, 30],
            [172, 216, 56, 28],
            [268, 226, 44, 24],
          ].map(([cx, cy, rx, ry], i) => (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              fill={i % 2 === 0 ? "#ffffff" : c.deep}
              opacity={i % 2 === 0 ? 0.42 : 0.1}
            />
          ))}
        </g>
      )}

      {/* Firebox, mantel and hearth */}
      <rect x="142" y="150" width="116" height="112" rx="3" fill="#2f2b26" />
      <rect x="150" y="158" width="100" height="104" rx="2" fill="#221f1b" />
      <rect x="92" y="126" width="216" height="16" rx="3" fill={c.deep} />
      <rect x="92" y="126" width="216" height="5" rx="2" fill="rgba(255,255,255,0.22)" />
      <rect x="118" y="258" width="164" height="14" rx="2" fill={c.deep} />

      {/* Block brush, the tool a mineral wash is actually laid on with */}
      <rect x="312" y="180" width="58" height="20" rx="4" fill={c.deep} />
      <rect x="312" y="198" width="58" height="15" rx="3" fill="#e6dcc6" />
      <rect x="332" y="156" width="16" height="28" rx="6" fill="#c9873f" />

      <defs>
        <clipPath id={`breast-${uid}`}>
          <rect x="104" y="16" width="192" height="246" />
        </clipPath>
      </defs>
    </g>
  );
}

/* ------------------------------------------------------------------ */

export const SCENES: Record<
  string,
  (c: SceneColors, uid: string, state: SceneState) => React.ReactElement
> = {
  "interior-painting": InteriorRoom,
  "cabinet-refinishing": CabinetRun,
  "commercial-painting": Storefront,
  "hoa-properties": TownhomeRow,
  "drywall-repair": DrywallRepair,
  "lime-wash-specialized-painting": LimeWashWall,
};

export function SceneDefs({ uid }: { uid: string }) {
  return (
    <defs>
      <Glass uid={uid} />
      <linearGradient id={`ssheen-${uid}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0.09" />
      </linearGradient>
    </defs>
  );
}
