import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {FONT_FAMILY, bezier, clamped, fadeWindow, revealStyle, springProgress} from "../helpers";
import {MOTION} from "../tokens";

// =============================================================================
// Scene 04 — segment_003 — "Here's what I've found / prompt entry / dashboard"
//
// Source: 60 frames @ 25fps. Recreated as 180 frames @ 30fps.
// Source N -> Remotion ~ 3*(N-1).
//
// Beat map (local Remotion frames inside the 180-frame scene):
//   0..42    polaroid drift behind serif title "Here's what I've found"
//   42..48   prompt card slides up, white wash fades in over photos
//   48..72   "Audit my Früns ad account — flag anomalies and benchmark
//            performance against the category." types in
//   72..87   read hold + cursor moves in toward send button
//   87..95   cursor click + scene washes to white
//   95..117  dashboard reveal pt.1 — heading, meta, 4 stat cards stagger
//   117..132 dashboard reveal pt.2 — trend heading + 2 trend cards
//   132..180 final hold
// =============================================================================

const PAPER = "#F6F4EF";          // cool off-white background (source palette)
const INK = "#1A1A1A";            // primary text
const INK_SOFT = "#6F6A63";       // labels / secondary
const BURNT = "#B14F3A";          // asterisk + send button orange/red
const PILL_RED_BG = "#FFE3E1";
const PILL_RED_FG = "#D43653";
const PILL_GREEN_BG = "#E2F3DD";
const PILL_GREEN_FG = "#2A8B47";
const CARD_BORDER = "#ECE9E1";

// 6 polaroid assets we have. We display 7 columns; the first/last are clipped.
const POLAROIDS = [
  "/aigen/scene04/p1_boutique_arch.png",
  "/aigen/scene04/p4_lifestyle_glow.png",
  "/aigen/scene04/p2_serum_table.png",
  "/aigen/scene04/p3_fridge_pouches.png",
  "/aigen/scene04/p6_garden_picking.png",
  "/aigen/scene04/p8_volume_mousse.png",
  "/aigen/scene04/p5_street_amsterdam.png",
  "/aigen/scene04/p7_kitchen_pour.png",
];

const PROMPT_TEXT =
  "Audit my Früns ad account — flag anomalies and benchmark performance against the category.";

// ──────────────────────────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────────────────────────

const Asterisk: React.FC<{size: number; color?: string; opacity?: number}> = ({
  size,
  color = BURNT,
  opacity = 1,
}) => {
  // ~15 thin, slender petals radiating from center (Claude "spark" mark).
  // Each petal is a soft elongated diamond.
  const r = size / 2;
  const cx = r;
  const cy = r;
  const arms = 15;
  const inner = r * 0.14;
  const outer = r * 0.96;
  const baseHalfAngle = (Math.PI / arms) * 0.28;
  const midHalfAngle = (Math.PI / arms) * 0.36;
  const d: string[] = [];
  for (let i = 0; i < arms; i++) {
    const a = (i / arms) * Math.PI * 2 - Math.PI / 2;
    const a1 = a - baseHalfAngle;
    const a2 = a + baseHalfAngle;
    const am1 = a - midHalfAngle;
    const am2 = a + midHalfAngle;
    const bx1 = cx + Math.cos(a1) * inner;
    const by1 = cy + Math.sin(a1) * inner;
    const bx2 = cx + Math.cos(a2) * inner;
    const by2 = cy + Math.sin(a2) * inner;
    const mid = r * 0.55;
    const mx1 = cx + Math.cos(am1) * mid;
    const my1 = cy + Math.sin(am1) * mid;
    const mx2 = cx + Math.cos(am2) * mid;
    const my2 = cy + Math.sin(am2) * mid;
    const tx = cx + Math.cos(a) * outer;
    const ty = cy + Math.sin(a) * outer;
    d.push(
      `M ${bx1} ${by1} L ${mx1} ${my1} L ${tx} ${ty} L ${mx2} ${my2} L ${bx2} ${by2} Z`
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{display: "block", opacity}}
    >
      <path d={d.join(" ")} fill={color} />
    </svg>
  );
};

// Up-arrow inside the send button.
const SendArrow: React.FC<{size: number}> = ({size}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={{display: "block"}}
  >
    <path
      d="M12 19V5M12 5L6 11M12 5L18 11"
      stroke="#fff"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// A cute pointing hand cursor (the white-glove cartoon hand from the source).
const HandCursor: React.FC<{size: number}> = ({size}) => (
  <svg
    width={size}
    height={size * 1.1}
    viewBox="0 0 100 110"
    style={{display: "block", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))"}}
  >
    {/* Pointing finger */}
    <path
      d="M44 8 C44 4, 56 4, 56 8 L56 48 L66 48 C72 48, 76 52, 76 58 L76 82 C76 96, 64 104, 50 104 C36 104, 24 96, 24 82 L24 60 C24 56, 28 54, 32 56 L36 58 L36 14 C36 10, 44 10, 44 14 Z"
      fill="#fff"
      stroke="#111"
      strokeWidth={2.6}
      strokeLinejoin="round"
    />
    {/* Finger crease lines */}
    <path d="M40 78 L52 78 M40 86 L52 86 M40 94 L52 94" stroke="#111" strokeWidth={2.2} strokeLinecap="round"/>
  </svg>
);

// One polaroid frame card.
const Polaroid: React.FC<{
  src: string;
  width: number;
  height: number;
  rotate: number;
  blur: number;
  scale: number;
}> = ({src, width, height, rotate, blur, scale}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 22,
      overflow: "hidden",
      background: "#ddd",
      boxShadow:
        "0 18px 30px rgba(35,28,18,0.10), 0 4px 10px rgba(35,28,18,0.06)",
      transform: `rotate(${rotate}deg) scale(${scale})`,
      filter: blur > 0.05 ? `blur(${blur}px)` : "none",
      flexShrink: 0,
    }}
  >
    <Img
      src={staticFile(src)}
      style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}
    />
  </div>
);

// Stat card.
const StatCard: React.FC<{
  label: string;
  value: string;
  width: number;
  style?: React.CSSProperties;
}> = ({label, value, width, style}) => (
  <div
    style={{
      width,
      background: "#fff",
      border: `1px solid ${CARD_BORDER}`,
      borderRadius: 18,
      padding: "26px 32px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
      ...style,
    }}
  >
    <div style={{fontSize: 26, color: INK_SOFT, fontWeight: 500, letterSpacing: -0.1}}>
      {label}
    </div>
    <div style={{fontSize: 72, fontWeight: 700, color: INK, marginTop: 12, letterSpacing: -2.0, lineHeight: 1}}>
      {value}
    </div>
  </div>
);

// Trend card with header pill + content.
const TrendCard: React.FC<{
  pill: "Critical" | "Positive";
  title: React.ReactNode;
  sub: string;
  width: number;
  style?: React.CSSProperties;
}> = ({pill, title, sub, width, style}) => {
  const bg = pill === "Critical" ? PILL_RED_BG : PILL_GREEN_BG;
  const fg = pill === "Critical" ? PILL_RED_FG : PILL_GREEN_FG;
  return (
    <div
      style={{
        width,
        background: "#fff",
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 18,
        padding: "28px 36px 30px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
        ...style,
      }}
    >
      <div
        style={{
          display: "inline-block",
          fontSize: 22,
          fontWeight: 600,
          color: fg,
          background: bg,
          padding: "6px 16px",
          borderRadius: 999,
          letterSpacing: -0.1,
        }}
      >
        {pill}
      </div>
      <div style={{fontSize: 30, fontWeight: 600, color: INK, marginTop: 22, letterSpacing: -0.5}}>
        {title}
      </div>
      <div style={{fontSize: 22, color: INK_SOFT, fontWeight: 500, marginTop: 14, letterSpacing: -0.1}}>
        {sub}
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Scene
// ──────────────────────────────────────────────────────────────────────────────
export const Scene04Seg003: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // ============================================================
  // Beat 1 — polaroid drift + serif title (frames 0..48)
  // ============================================================

  // Title opacity: visible from the start (carries in from prev scene), fades
  // out while wash rises before the prompt card.
  const titleOpacity = interpolate(frame, [0, 44, 56], [1, 1, 0], clamped);
  const titleScale = 1;

  // Polaroid lateral drift — very slow.
  const drift = interpolate(frame, [0, 180], [0, -160], clamped);

  // Per-polaroid Y entry: minimal — they carry over from previous scene as
  // a continuous strip. Just a subtle settle.
  const stripY = interpolate(frame, [0, 12], [12, 0], {
    ...clamped,
    easing: bezier(MOTION.expoOut),
  });
  // Constant subtle depth-of-field blur on the polaroid strip — the source
  // shows the photos slightly out-of-focus behind the sharp title.
  const stripBlur = interpolate(frame, [0, 30], [3.2, 2.4], clamped);

  // Overlay wash that lifts in over the polaroids before the prompt card.
  const wash = interpolate(frame, [44, 56], [0, 1], clamped);

  // ============================================================
  // Beat 2 — prompt card slide-up (~46..58) + typing (~54..78)
  // ============================================================

  const cardProg = springProgress(frame, fps, 46, 24, MOTION.snappy);
  const cardOpacity = interpolate(cardProg, [0, 0.4, 1], [0, 1, 1], clamped);
  const cardTranslateY = interpolate(cardProg, [0, 1], [240, 0], clamped);

  // Typing animation: character-by-character. The original sequence types
  // out the full sentence between source f17..f25 (~Remotion 48..72).
  const totalChars = PROMPT_TEXT.length;
  const typingChars = Math.max(
    0,
    Math.min(totalChars, Math.floor(interpolate(frame, [54, 78], [0, totalChars], clamped)))
  );
  const typed = PROMPT_TEXT.slice(0, typingChars);

  // ============================================================
  // Beat 3 — cursor approach + click (frames 70..92)
  // ============================================================

  // Cursor enters from below-right, moves toward the send button.
  // Source: cursor visible around f24 (local 69), hits button by f33 (local 96).
  const cursorVis = interpolate(frame, [80, 88], [0, 1], clamped);
  const cursorDX = interpolate(frame, [82, 100], [80, 0], {
    ...clamped,
    easing: bezier(MOTION.expoOut),
  });
  const cursorDY = interpolate(frame, [82, 100], [100, 0], {
    ...clamped,
    easing: bezier(MOTION.expoOut),
  });
  // Button press: scale-down 0.92 at click (source f33-35 ~= local 96-102).
  const buttonClick = interpolate(frame, [98, 102, 108], [1, 0.92, 1], clamped);
  // White wash to transition into dashboard (source f35-f42 ~= local 102-123).
  const whiteWash = interpolate(frame, [102, 116], [0, 1], clamped);

  // ============================================================
  // Beat 4 — dashboard reveal (frames 110..150)
  // ============================================================

  // Dashboard cluster opacity (starts after whiteWash).
  const dashOpacity = interpolate(frame, [112, 124], [0, 1], clamped);

  // Heading + meta reveal.
  const headingStyle = revealStyle(frame, fps, 114, 22, 0.99);
  const metaStyle = revealStyle(frame, fps, 120, 16, 1);

  // Stat cards stagger.
  const statDelays = [124, 128, 132, 136];
  const statStyles = statDelays.map((d) => revealStyle(frame, fps, d, 24, 0.99));

  // Number counters — interpolate from 0 to final.
  const numProg = (delay: number) => interpolate(frame, [delay + 2, delay + 22], [0, 1], {
    ...clamped,
    easing: bezier([0.25, 1, 0.5, 1] as const),
  });
  const reachVal = formatK(numProg(statDelays[0]) * 152_000);
  const clicksVal = formatK(numProg(statDelays[1]) * 3_800);
  const cartVal = Math.round(numProg(statDelays[2]) * 540).toString();
  const purchVal = Math.round(numProg(statDelays[3]) * 122).toString();

  // Trend section.
  const trendHeading = revealStyle(frame, fps, 138, 22, 0.99);
  const trendCardStyles = [
    revealStyle(frame, fps, 142, 26, 0.99),
    revealStyle(frame, fps, 146, 26, 0.99),
  ];

  // ============================================================
  // Layout constants
  // ============================================================
  const W = 1920;
  const polaroidW = 320;
  const polaroidH = 820;          // huge — most extends below the frame
  const polaroidGap = 26;
  const stripCount = POLAROIDS.length;
  const stripTotalW = stripCount * polaroidW + (stripCount - 1) * polaroidGap;
  const stripLeft = (W - stripTotalW) / 2 + drift;
  const stripTop = 520;            // tops at ~520, bottoms extend off-canvas

  // Prompt card geometry — width and vertical position match source.
  // Width matters for text wrapping: source first line ends "performance".
  const promptCardW = 1660;
  const promptCardX = (W - promptCardW) / 2;
  const promptCardY = 410;

  // ============================================================
  // Render
  // ============================================================
  return (
    <AbsoluteFill style={{background: PAPER, fontFamily: FONT_FAMILY, color: INK}}>
      {/* ────────── Polaroid strip ────────── */}
      <div
        style={{
          position: "absolute",
          top: stripTop,
          left: stripLeft,
          display: "flex",
          gap: polaroidGap,
          transform: `translateY(${stripY}px)`,
        }}
      >
        {POLAROIDS.map((src, i) => {
          // Per-card very subtle rotation wobble for the dancing-in feel.
          const phase = (frame / 60) + i * 0.7;
          const wob = Math.sin(phase) * 0.4;
          return (
            <Polaroid
              key={src}
              src={src}
              width={polaroidW}
              height={polaroidH}
              rotate={wob}
              blur={stripBlur}
              scale={1}
            />
          );
        })}
      </div>

      {/* ────────── Hero serif title ────────── */}
      <div
        style={{
          position: "absolute",
          top: 150,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: 32}}>
          <Asterisk size={108} />
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 116,
              fontWeight: 500,
              letterSpacing: -3.4,
              color: INK,
              lineHeight: 1,
            }}
          >
            Here&apos;s what I&apos;ve found
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 36,
            color: INK_SOFT,
            letterSpacing: -0.5,
            fontWeight: 400,
          }}
        >
          Meta Ads Library
        </div>
      </div>

      {/* ────────── White wash over photos (rises before prompt) ────────── */}
      <AbsoluteFill
        style={{
          background: PAPER,
          opacity: wash * 0.94,
          pointerEvents: "none",
        }}
      />

      {/* ────────── Prompt card ────────── */}
      <div
        style={{
          position: "absolute",
          top: promptCardY,
          left: promptCardX,
          width: promptCardW,
          opacity: cardOpacity,
          transform: `translateY(${cardTranslateY}px)`,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "44px 56px 32px",
            boxShadow:
              "0 28px 60px rgba(40,30,16,0.10), 0 6px 16px rgba(40,30,16,0.05)",
            minHeight: 230,
            position: "relative",
          }}
        >
          {/* Typed text */}
          <div
            style={{
              fontSize: 50,
              fontWeight: 500,
              color: INK,
              lineHeight: 1.25,
              letterSpacing: -0.9,
              minHeight: 142,
            }}
          >
            {typed}
          </div>

          {/* Bottom row: plus icon left, model + send right */}
          <div
            style={{
              marginTop: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Plus icon */}
            <svg width={36} height={36} viewBox="0 0 24 24" style={{display: "block"}}>
              <path
                d="M12 5V19M5 12H19"
                stroke={INK}
                strokeWidth={2.2}
                strokeLinecap="round"
              />
            </svg>
            <div style={{display: "flex", alignItems: "center", gap: 24}}>
              <div style={{display: "flex", alignItems: "center", gap: 8}}>
                <span style={{fontSize: 28, color: INK, fontWeight: 500, letterSpacing: -0.2}}>Opus 4.7</span>
                <svg width={22} height={22} viewBox="0 0 24 24">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke={INK}
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <div
                style={{
                  position: "relative",
                  width: 64,
                  height: 64,
                  borderRadius: 14,
                  background: BURNT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: `scale(${buttonClick})`,
                  boxShadow: "0 4px 10px rgba(177,79,58,0.28)",
                }}
              >
                <SendArrow size={34} />
              </div>
            </div>
          </div>

          {/* Cursor pointing at send button */}
          <div
            style={{
              position: "absolute",
              right: 28 + cursorDX,
              bottom: -64 + cursorDY,
              opacity: cursorVis,
              pointerEvents: "none",
            }}
          >
            <HandCursor size={86} />
          </div>
        </div>
      </div>

      {/* ────────── White wash before dashboard ────────── */}
      <AbsoluteFill
        style={{
          background: PAPER,
          opacity: whiteWash,
          pointerEvents: "none",
        }}
      />

      {/* ────────── Dashboard ────────── */}
      <AbsoluteFill style={{opacity: dashOpacity}}>
        {/* Heading */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 156,
            opacity: headingStyle.opacity,
            transform: headingStyle.transform,
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 90,
              fontWeight: 500,
              letterSpacing: -2.4,
              color: INK,
              lineHeight: 1.0,
            }}
          >
            Ads insights
          </div>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 90,
              fontWeight: 500,
              letterSpacing: -2.4,
              color: INK,
              lineHeight: 1.05,
              marginTop: 6,
            }}
          >
            advertiser context
          </div>
        </div>

        {/* Meta block (right) */}
        <div
          style={{
            position: "absolute",
            top: 122,
            right: 156,
            opacity: metaStyle.opacity,
            transform: metaStyle.transform,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            fontSize: 28,
            letterSpacing: -0.1,
            fontWeight: 500,
          }}
        >
          {[
            ["Business name:", "Früns"],
            ["Industry:", "Functional gummies"],
            ["Monthly spend:", "$3,000 (last 30d)"],
          ].map(([k, v]) => (
            <div key={k} style={{display: "flex", gap: 14}}>
              <span style={{color: INK_SOFT, fontWeight: 500}}>{k}</span>
              <span style={{color: INK, fontWeight: 600}}>{v}</span>
            </div>
          ))}
        </div>

        {/* Stat cards row */}
        <div
          style={{
            position: "absolute",
            top: 412,
            left: 156,
            right: 156,
            display: "flex",
            gap: 24,
          }}
        >
          {[
            {label: "Reach", value: reachVal},
            {label: "Link clicks", value: clicksVal},
            {label: "Add to cart", value: cartVal},
            {label: "Purchases", value: purchVal},
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: 1,
                opacity: statStyles[i].opacity,
                transform: statStyles[i].transform,
              }}
            >
              <StatCard label={s.label} value={s.value} width={undefined as unknown as number} />
            </div>
          ))}
        </div>

        {/* Trend heading */}
        <div
          style={{
            position: "absolute",
            top: 696,
            left: 156,
            opacity: trendHeading.opacity,
            transform: trendHeading.transform,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 56,
            fontWeight: 500,
            letterSpacing: -1.4,
            color: INK,
          }}
        >
          Ads insights performance trend
        </div>

        {/* Trend cards */}
        <div
          style={{
            position: "absolute",
            top: 810,
            left: 156,
            right: 156,
            display: "flex",
            gap: 28,
          }}
        >
          <div
            style={{
              flex: 1,
              opacity: trendCardStyles[0].opacity,
              transform: trendCardStyles[0].transform,
            }}
          >
            <TrendCard
              pill="Critical"
              title={
                <>
                  CPA spiked <span style={{color: PILL_RED_FG}}>+156%</span> on “Retargeting_US_30d”
                </>
              }
              sub="$14.20 → $36.40 - audience saturation"
              width={undefined as unknown as number}
            />
          </div>
          <div
            style={{
              flex: 1,
              opacity: trendCardStyles[1].opacity,
              transform: trendCardStyles[1].transform,
            }}
          >
            <TrendCard
              pill="Positive"
              title={
                <>
                  ROAS jumped <span style={{color: PILL_GREEN_FG}}>+84%</span> on “Heart_Gummies”
                </>
              }
              sub="1.4x → 2.6x - new POV creative turned campaign profitable"
              width={undefined as unknown as number}
            />
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────
function formatK(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    // 152.x -> "152K" ; 3.8x -> "3.8K"
    if (k >= 100) return `${Math.round(k)}K`;
    return `${k.toFixed(1)}K`;
  }
  return Math.round(n).toString();
}

// Keep fadeWindow import in case future tuning needs it.
void fadeWindow;
