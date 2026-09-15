/**
 * The roller that rides the leading edge of a paint sweep.
 *
 * It lives inside a full-width track pinned to the track's right edge, so
 * translating that track from -100% to 0 walks the roller across the scene in
 * lockstep with the clip-path wipe underneath it.
 */
export default function PaintRoller({
  color,
  delay = 0,
}: {
  color: string;
  delay?: number;
}) {
  return (
    <div
      aria-hidden
      className="vp-roller-track pointer-events-none absolute inset-0 flex justify-end"
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      <div className="relative h-full w-3">
        {/* Wet edge — the sheen where fresh paint meets the old wall */}
        <div className="absolute inset-y-0 right-1 w-2 bg-gradient-to-r from-white/70 to-transparent" />
        <svg
          viewBox="0 0 48 64"
          className="absolute right-0 top-[38%] h-16 w-12 translate-x-1/3 drop-shadow-md"
        >
          <rect
            x="2"
            y="8"
            width="15"
            height="46"
            rx="7.5"
            fill={color}
            stroke="rgba(28,31,30,0.55)"
            strokeWidth="1.5"
          />
          <rect x="5.5" y="13" width="8" height="36" rx="4" fill="rgba(255,255,255,0.35)" />
          <path
            d="M17 31 h9 v-14 h7"
            stroke="#4a4f4d"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="30" y="3" width="8" height="19" rx="4" fill="#c9873f" />
        </svg>
      </div>
    </div>
  );
}
