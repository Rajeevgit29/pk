/** Hand-made details from the mockup: torn paper edges and handwritten notes. */

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic rough edge: a slow wave plus fine paper-tear jitter. */
function tornPath(seed: number, width: number, height: number) {
  const rand = mulberry32(seed);
  const phase1 = rand() * Math.PI * 2;
  const phase2 = rand() * Math.PI * 2;
  const pts: string[] = [];
  const step = 9;
  for (let x = 0; x <= width; x += step) {
    const wave = Math.sin(x / 210 + phase1) * 0.22 + Math.sin(x / 67 + phase2) * 0.12;
    const jitter = (rand() - 0.5) * 0.28;
    const spike = rand() > 0.93 ? (rand() - 0.5) * 0.45 : 0;
    const y = height * (0.5 + wave + jitter + spike) * 0.9 + height * 0.05;
    pts.push(`${x},${Math.max(0, Math.min(height, y)).toFixed(1)}`);
  }
  return `M0,${height} L${pts.join(" L")} L${width},${height} Z`;
}

/**
 * A torn edge in `color` on the top (or bottom) boundary of its parent (which must be
 * `relative`). By default it bites outward into the neighbouring section; with `inward`
 * it sits inside the parent and bites into it (used to tear the edges of photos).
 */
export function TornEdge({
  color,
  side = "top",
  seed = 7,
  height = 34,
  inward = false,
  className = "",
}: {
  color: string;
  side?: "top" | "bottom";
  seed?: number;
  height?: number;
  inward?: boolean;
  className?: string;
}) {
  const W = 1440;
  const flip = inward ? side === "top" : side === "bottom";
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${W} ${height}`}
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-10 w-full ${className}`}
      style={{
        height,
        [side]: inward ? -1 : -height + 1,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <path d={tornPath(seed, W, height)} fill={color} />
    </svg>
  );
}

type ArrowKind = "swirl-down-left" | "down" | "down-right";

function HandArrow({ kind, className = "" }: { kind: ArrowKind; className?: string }) {
  const d = {
    "swirl-down-left": "M58 4c4 14-2 30-18 38-8 4-17 5-24 3m0 0 7-7m-7 7 8 5",
    down: "M20 3c-6 12-7 24-2 38m0 0-6-7m6 7 7-6",
    "down-right": "M6 4c2 16 12 28 30 34m0 0-9 1m9-1-3-8",
  }[kind];
  return (
    <svg aria-hidden="true" viewBox="0 0 64 52" fill="none" className={className}>
      <path d={d} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Handwritten note (Gochi Hand), slightly rotated, with an optional hand-drawn arrow. */
export function HandNote({
  lines,
  arrow,
  rotate = -8,
  className = "",
  textClassName = "",
  arrowClassName = "",
}: {
  lines: string[];
  arrow?: ArrowKind;
  rotate?: number;
  className?: string;
  textClassName?: string;
  arrowClassName?: string;
}) {
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <p className={`font-hand leading-[0.95] ${textClassName}`}>
        {lines.map((l, i) => (
          <span key={i} className="block" style={{ paddingLeft: `${i * 0.35}em` }}>
            {l}
          </span>
        ))}
      </p>
      {arrow && <HandArrow kind={arrow} className={`mt-1 h-10 w-12 ${arrowClassName}`} />}
    </div>
  );
}

/** Small tracked capitals stacked vertically (the mockup's side word lists). */
export function WordStack({ words, className = "", tone = "dark" }: { words: string[]; className?: string; tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-heading/70" : "text-white/70";
  const line = tone === "dark" ? "bg-heading/25" : "bg-white/30";
  return (
    <ul aria-hidden="true" className={`space-y-2.5 text-[0.68rem] font-medium uppercase tracking-[0.24em] ${color} ${className}`}>
      {words.map((w, i) => (
        <li key={w} className="flex items-center gap-3">
          {w}
          {i === words.length - 1 && <span className={`h-px w-10 ${line}`} />}
        </li>
      ))}
    </ul>
  );
}
