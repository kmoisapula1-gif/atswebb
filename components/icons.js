// Small inline SVG marks used throughout the site. No icon library / emoji —
// geometric shapes and the bridge-arc mark only, per the brand.

/** The "A" wordmark + bridge-arc, used in the header and footer. */
export function BridgeWordmark({ size = 38 }) {
  return (
    <svg
      viewBox="0 0 240 190"
      style={{ width: size, display: "block", overflow: "visible" }}
      aria-hidden="true"
    >
      <text
        x="120"
        y="176"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-archivo), Helvetica, sans-serif",
          fontWeight: 900,
          fontSize: 210,
          fill: "var(--peach)",
        }}
      >
        A
      </text>
      <path
        d="M20 96 Q120 56 220 96"
        fill="none"
        stroke="var(--peach)"
        strokeWidth="13"
        strokeLinecap="round"
      />
      <circle cx="20" cy="96" r="17" fill="var(--peach)" />
      <circle cx="220" cy="96" r="17" fill="var(--peach)" />
    </svg>
  );
}

/** The plain decorative arc (two dots joined by a bridge), used as an accent. */
export function ArcMark({ width = 140, color = "var(--teal)", size = "lg" }) {
  const viewBox = size === "sm" ? "0 0 240 70" : "0 0 400 110";
  const d = size === "sm" ? "M16 54 Q120 10 224 54" : "M22 88 Q200 10 378 88";
  const r = size === "sm" ? 13 : 17;
  const strokeWidth = size === "sm" ? 8 : 9;
  const [x1, y1] = size === "sm" ? [16, 54] : [22, 88];
  const [x2, y2] = size === "sm" ? [224, 54] : [378, 88];
  return (
    <svg viewBox={viewBox} style={{ width, display: "block" }} aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      <circle cx={x1} cy={y1} r={r} fill={color} />
      <circle cx={x2} cy={y2} r={r} fill={color} />
    </svg>
  );
}

/** The large "why the bridge" mark on About, which draws itself on scroll. */
export function AnimatedBridge() {
  return (
    <svg
      viewBox="0 0 640 260"
      style={{ width: "100%", maxWidth: 520, display: "block", overflow: "visible" }}
      aria-hidden="true"
    >
      <path
        data-bridge-path="1"
        d="M40 214 Q320 20 600 214"
        fill="none"
        stroke="var(--peach)"
        strokeWidth="11"
        strokeLinecap="round"
        strokeDasharray="620"
        strokeDashoffset="0"
      />
      <circle cx="40" cy="214" r="24" fill="var(--peach)" />
      <circle cx="600" cy="214" r="24" fill="var(--peach)" />
      <text
        x="40"
        y="256"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-archivo), Helvetica, sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: 2, fill: "var(--body-light-3)" }}
      >
        PEOPLE
      </text>
      <text
        x="600"
        y="256"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-archivo), Helvetica, sans-serif", fontSize: 20, fontWeight: 800, letterSpacing: 2, fill: "var(--body-light-3)" }}
      >
        BENEFITS
      </text>
    </svg>
  );
}

export function CircleMark({ size = 30, color = "var(--terracotta)" }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, display: "block" }} aria-hidden="true">
      <circle cx="20" cy="20" r="17" fill={color} />
    </svg>
  );
}

export function SquareMark({ size = 30, color = "var(--terracotta)" }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, display: "block" }} aria-hidden="true">
      <rect x="4" y="4" width="32" height="32" rx="4" fill={color} />
    </svg>
  );
}

export function DiamondMark({ size = 22, color = "var(--terracotta)" }) {
  return (
    <svg viewBox="0 0 40 40" style={{ width: size, display: "block" }} aria-hidden="true">
      <path d="M20 2 L38 20 L20 38 L2 20 Z" fill={color} />
    </svg>
  );
}

/** Chevron connector used in the "how an engagement flows" process strip. */
export function ArrowConnector() {
  return (
    <svg viewBox="0 0 60 20" className="step-chain-connector" aria-hidden="true">
      <path d="M2 10 H50" stroke="var(--terracotta)" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M44 4 L52 10 L44 16"
        fill="none"
        stroke="var(--terracotta)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Check-ring used in "what we need from you". */
export function CheckRing({ size = 24 }) {
  return (
    <svg
      viewBox="0 0 32 32"
      style={{ width: size, flex: "none", display: "block", marginTop: 2 }}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" fill="none" stroke="var(--teal)" strokeWidth="2.5" />
      <path
        d="M10 16.5 L14.5 21 L22.5 11.5"
        fill="none"
        stroke="var(--terracotta)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small bridge-arc used on Services engagement-model cards. */
export function EngagementMark() {
  return (
    <svg viewBox="0 0 240 70" style={{ width: 86, display: "block" }} aria-hidden="true">
      <path d="M16 54 Q120 10 224 54" fill="none" stroke="var(--peach)" strokeWidth="8" strokeLinecap="round" />
      <circle cx="16" cy="54" r="13" fill="var(--peach)" />
      <circle cx="224" cy="54" r="13" fill="var(--peach)" />
    </svg>
  );
}

/** Shield-check mark used in the footer's "never asks for payment" banner. */
export function ShieldMark({ size = 34 }) {
  return (
    <svg viewBox="0 0 48 48" style={{ width: size, flex: "none", display: "block" }} aria-hidden="true">
      <path
        d="M24 4 L42 11 V25 C42 34 34 41 24 44 C14 41 6 34 6 25 V11 Z"
        fill="none"
        stroke="var(--peach)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 24 L22 30 L33 18"
        fill="none"
        stroke="var(--peach)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
