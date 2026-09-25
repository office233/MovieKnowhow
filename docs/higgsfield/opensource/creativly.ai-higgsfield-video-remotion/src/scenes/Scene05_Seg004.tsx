import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {FONT_FAMILY, bezier, clamped, revealStyle, springProgress} from "../helpers";
import {MOTION} from "../tokens";

// =============================================================================
// Scene 05 — segment_004 — "Auction ranking · Industry benchmark · Generating ads"
//
// Source: 60 frames @ 25fps. Recreated as 180 frames @ 30fps.
// Source N -> Remotion ~= 3*(N-1).
//
// Source beat map (from frame inspection):
//   src 1..12   (rem  0..33)   Dashboard heading + 4 stat cards + 2 trend
//                              cards (carry-over from Scene 04 final state).
//   src 12..20  (rem 33..57)   View scrolls/pans up: dashboard slides off
//                              the top, "Auction ranking + Industry benchmark"
//                              section + "Ads insights industry benchmark"
//                              section enter from below. Bars animate in
//                              left→right with values revealing.
//   src 20..42  (rem 57..123)  Hold on Auction + Benchmark view.
//   src 42..46  (rem 123..135) White wash, switch to "Generating 20 video
//                              ads / via Higgsfield MCP…" centered title
//                              with spinner circle.
//   src 46..55  (rem 135..162) Spinner spins; subtle pulse on label.
//   src 55..60  (rem 162..180) Tiles begin appearing in a 5×2 vertical grid
//                              of 9:16 thumbnails — first the top-left tile
//                              fills with a peach gradient placeholder, then
//                              gradually each tile fills left→right with
//                              partial photo reveals behind the peach sheen.
// =============================================================================

const PAPER = "#F4F0E8";           // same off-white as Scene 04
const INK = "#1A1A1A";
const INK_SOFT = "#6F6A63";
const BURNT = "#B14F3A";
const CARD_BORDER = "#ECE9E1";
const BAR_TRACK = "#E8E4DA";
const BAR_GREEN = "#1BC42E";
const BAR_GREY = "#7A7670";
const BAR_GREY_FAINT = "#C9C4BB";

const PEACH_A = "#E8A290";   // dominant peach
const PEACH_B = "#F2D4C8";   // soft pink edge

// ──────────────────────────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────────────────────────

// Stat card (carry-over from Scene 04 ending state).
const StatCard: React.FC<{
  label: string;
  value: string;
  style?: React.CSSProperties;
}> = ({label, value, style}) => (
  <div
    style={{
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
    <div
      style={{
        fontSize: 72,
        fontWeight: 700,
        color: INK,
        marginTop: 12,
        letterSpacing: -2.0,
        lineHeight: 1,
      }}
    >
      {value}
    </div>
  </div>
);

// Trend card (carry-over from Scene 04 ending state).
const PILL_RED_BG = "#FFE3E1";
const PILL_RED_FG = "#D43653";
const PILL_GREEN_BG = "#E2F3DD";
const PILL_GREEN_FG = "#2A8B47";

const TrendCard: React.FC<{
  pill: "Critical" | "Positive";
  title: React.ReactNode;
  sub: string;
  style?: React.CSSProperties;
}> = ({pill, title, sub, style}) => {
  const bg = pill === "Critical" ? PILL_RED_BG : PILL_GREEN_BG;
  const fg = pill === "Critical" ? PILL_RED_FG : PILL_GREEN_FG;
  return (
    <div
      style={{
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

// Auction-ranking row: label, animated bar, value text on right.
const RankRow: React.FC<{
  label: string;
  value: string;
  fill: number;        // 0..1 — how full the bar is
  reveal: number;      // 0..1 — overall opacity / appearance progress
  color: string;
  trackColor?: string;
}> = ({label, value, fill, reveal, color, trackColor = BAR_TRACK}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 36,
      opacity: reveal,
    }}
  >
    <div
      style={{
        width: 340,
        fontSize: 30,
        color: INK,
        fontWeight: 500,
        letterSpacing: -0.4,
      }}
    >
      {label}
    </div>
    <div style={{flex: 1, position: "relative", height: 22}}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: trackColor,
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: `${Math.max(0, Math.min(100, fill * 100))}%`,
          background: color,
          borderRadius: 999,
          transformOrigin: "left center",
        }}
      />
    </div>
    <div
      style={{
        width: 130,
        textAlign: "right",
        fontSize: 30,
        color: INK,
        fontWeight: 500,
        letterSpacing: -0.3,
      }}
    >
      {value}
    </div>
  </div>
);

// Industry-benchmark row pair: a value row + a "→ industry median" row.
const BenchRow: React.FC<{
  label: string;
  value: string;
  median: string;
  fill: number;          // 0..1
  medianFill: number;    // 0..1
  reveal: number;
  color: string;
  medianColor: string;
}> = ({label, value, median, fill, medianFill, reveal, color, medianColor}) => (
  <div style={{opacity: reveal, display: "flex", flexDirection: "column", gap: 18}}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 36,
      }}
    >
      <div
        style={{
          width: 340,
          fontSize: 30,
          color: INK,
          fontWeight: 500,
          letterSpacing: -0.4,
        }}
      >
        {label}
      </div>
      <div style={{flex: 1, position: "relative", height: 22}}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: BAR_TRACK,
            borderRadius: 999,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${Math.max(0, Math.min(100, fill * 100))}%`,
            background: color,
            borderRadius: 999,
          }}
        />
      </div>
      <div
        style={{
          width: 130,
          textAlign: "right",
          fontSize: 30,
          color: INK,
          fontWeight: 500,
          letterSpacing: -0.3,
        }}
      >
        {value}
      </div>
    </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 36,
      }}
    >
      <div
        style={{
          width: 340,
          fontSize: 26,
          color: INK_SOFT,
          fontWeight: 500,
          letterSpacing: -0.2,
          paddingLeft: 4,
        }}
      >
        → industry median
      </div>
      <div style={{flex: 1, position: "relative", height: 18}}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: BAR_TRACK,
            borderRadius: 999,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `${Math.max(0, Math.min(100, medianFill * 100))}%`,
            background: medianColor,
            borderRadius: 999,
          }}
        />
      </div>
      <div
        style={{
          width: 130,
          textAlign: "right",
          fontSize: 28,
          color: INK_SOFT,
          fontWeight: 500,
          letterSpacing: -0.3,
        }}
      >
        {median}
      </div>
    </div>
  </div>
);

// Higgsfield "squiggle" mark in a circle — the spinner badge centerpiece.
const SquiggleMark: React.FC<{size: number; color?: string}> = ({size, color = "#1F1F1F"}) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{display: "block"}}>
    <path
      d="M 9 22 C 12 14, 16 14, 18 20 C 19 25, 22 25, 24 19 C 26 14, 31 14, 31 20"
      stroke={color}
      strokeWidth={3.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Spinner ring — fixed circle outline plus a single dark arc that rotates.
const SpinnerRing: React.FC<{
  size: number;
  rotation: number;    // degrees
  ringColor: string;
  arcColor: string;
  opacity: number;
}> = ({size, rotation, ringColor, arcColor, opacity}) => {
  const stroke = size * 0.025;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  // Arc covers ~14% of the ring.
  const arcLen = c * 0.14;
  const gap = c - arcLen;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{opacity}}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={ringColor}
        strokeWidth={stroke}
      />
      <g transform={`rotate(${rotation} ${size / 2} ${size / 2})`}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={arcColor}
          strokeWidth={stroke * 1.05}
          strokeLinecap="round"
          strokeDasharray={`${arcLen} ${gap}`}
          strokeDashoffset={c * 0.25}
        />
      </g>
    </svg>
  );
};

// A single rendering-thumbnail tile in the "Generating" grid. Renders a peach
// gradient sheen overlay on top of an optional underlying lifestyle photo.
//
// Sheen color matches the metallic coral seen in the source: a bright peach
// near the upper-left fading diagonally to a soft pink at the lower-right,
// with a subtle vertical falloff toward almost-white near the bottom.
const RenderTile: React.FC<{
  width: number;
  height: number;
  photo?: string;            // optional staticFile path
  reveal: number;            // 0..1 photo opacity behind sheen
  sheen: number;             // 0..1 sheen strength
  tint: "warm" | "soft";
}> = ({width, height, photo, reveal, sheen, tint}) => {
  // The "warm" tiles have a stronger orange/peach core; "soft" tiles look
  // washed out toward the right of the row.
  const core = tint === "warm" ? "#DD9079" : "#E6B6A4";
  const mid = tint === "warm" ? "#EFB7A4" : "#F1D0C2";
  const edge = tint === "warm" ? "#F5DCD0" : "#FAEBE3";
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 26,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 8px 20px rgba(60,40,30,0.12)",
        background: "#fff",
      }}
    >
      {photo ? (
        <Img
          src={staticFile(photo)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: reveal,
            // Peach tint baked into the underlying photo, matching the
            // metallic-coral preview-render look in the source. The exact
            // values were tuned to align with the source baby + selfie tile.
            filter: "saturate(0.85) sepia(0.18) hue-rotate(-12deg)",
          }}
        />
      ) : null}
      {/* Primary diagonal sheen, with bright-to-transparent falloff so the
          photo can peek through at the lower-right corner. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${core} 0%, ${mid} 45%, ${edge} 100%)`,
          opacity: Math.max(0, Math.min(1, sheen)),
        }}
      />
      {/* Bright highlight band along the left side */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(105deg, rgba(220,140,115,0.45) 0%, rgba(220,140,115,0.0) 55%)",
          opacity: Math.max(0, Math.min(1, sheen)),
        }}
      />
      {/* Secondary vertical falloff to off-white near bottom edge */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 60%, rgba(255,255,255,0.35) 100%)",
          opacity: Math.max(0, Math.min(1, sheen)),
        }}
      />
      {/* HF squiggle glyph in top-right corner (mark on a finished tile) */}
      <div
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          opacity: 0.55 * sheen,
        }}
      >
        <SquiggleMark size={26} color="#6E3B2A" />
      </div>
    </div>
  );
};

// ──────────────────────────────────────────────────────────────────────────────
// Scene
// ──────────────────────────────────────────────────────────────────────────────
export const Scene05Seg004: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // ============================================================
  // Beat 1 — Dashboard hold + pan transition (frames 0..36)
  // ============================================================

  // Source f1..f10 holds the dashboard; f10..f13 fast vertical pan to the
  // auction screen; f13+ the auction view is already fully docked with bars
  // animating in. We compress these into Remotion frames 0..36.
  const scrollProg = interpolate(frame, [16, 36], [0, 1], {
    ...clamped,
    easing: bezier([0.65, 0, 0.35, 1]),
  });
  // Dashboard moves up by ~1120 px (one full screen) by end of scroll.
  const dashY = -scrollProg * 1120;
  // Stat-card / heading subtle fade-out as it scrolls up.
  const dashOpacity = interpolate(scrollProg, [0, 0.5, 1], [1, 0.85, 0], clamped);

  // Auction screen starts off-screen below and moves into place.
  const auctionY = (1 - scrollProg) * 1120;

  // ============================================================
  // Beat 2 — Auction ranking + Industry benchmark (frames 30..118)
  // ============================================================

  // Cards fade in just as the dock completes.
  const rankCardStyle = revealStyle(frame, fps, 28, 14, 1);
  const benchCardStyle = revealStyle(frame, fps, 38, 14, 1);

  // Bars: auction ranking section. Start animating right after the dock so
  // by source f15 they are visibly filling, complete by ~src f22 (Rem 63).
  const qualityFill = interpolate(frame, [34, 58], [0, 0.78], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const engageFill = interpolate(frame, [38, 62], [0, 0.64], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const convFill = interpolate(frame, [42, 66], [0, 0.32], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });

  // Industry-benchmark bar fills.
  const ctrFill = interpolate(frame, [48, 72], [0, 0.55], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const ctrMedFill = interpolate(frame, [52, 76], [0, 0.40], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const cpmFill = interpolate(frame, [56, 80], [0, 0.72], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const cpmMedFill = interpolate(frame, [60, 84], [0, 0.52], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const roasFill = interpolate(frame, [64, 88], [0, 0.50], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });
  const roasMedFill = interpolate(frame, [68, 92], [0, 0.34], {
    ...clamped,
    easing: bezier([0.22, 1, 0.36, 1]),
  });

  // ============================================================
  // Beat 3 — White wash → Generating screen (frames 118..159)
  // ============================================================

  // The auction screen fades to paper-white as the "Generating" centerpiece
  // appears. Both effects overlap softly.
  const washProg = interpolate(frame, [118, 130], [0, 1], clamped);
  const auctionFade = interpolate(frame, [118, 132], [1, 0], clamped);

  // "Generating 20 video ads" entry — soft scale + fade.
  const genEntryProg = springProgress(frame, fps, 124, 20, MOTION.smooth);
  const genOpacity = interpolate(genEntryProg, [0, 1], [0, 1], clamped);
  // Spinner rotation: 360° / 30 frames ≈ 1 turn per second.
  const spinDeg = ((frame - 124) / 1) * 12;
  // Slight pulse on the label to feel "working".
  const labelPulse = 1 + Math.sin((frame - 124) * 0.18) * 0.012;

  // Generating screen fades out as the tiles flood in.
  const genFade = interpolate(frame, [156, 168], [1, 0.0], clamped);

  // ============================================================
  // Beat 4 — Tiles flood in (frames 152..180)
  // ============================================================

  // Top row of 5 tiles, bottom row of 5 tiles (some clipped off the bottom of
  // the canvas). Each tile has its own delay + sheen + reveal curve.
  const tileAppear = (delay: number) =>
    interpolate(frame, [delay, delay + 12], [0, 1], {
      ...clamped,
      easing: bezier([0.22, 1, 0.36, 1]),
    });
  const tilePhoto = (delay: number) =>
    interpolate(frame, [delay + 6, delay + 22], [0, 1], {
      ...clamped,
      easing: bezier([0.22, 1, 0.36, 1]),
    });

  // 10 tiles total (5 columns × 2 rows). Top row appears first, then bottom.
  // Source f54..f60 shows all top tiles populated, bottom tiles arriving.
  const topRowDelays = [150, 154, 158, 162, 166];
  const botRowDelays = [162, 166, 170, 174, 178];
  // Photos: only first 3 top-row tiles + first bottom tile reveal a photo.
  const topPhotos: (string | undefined)[] = [
    "/aigen/scene05/t1_baby_pouch.png",
    "/aigen/scene05/t2_creator_selfie.png",
    "/aigen/scene05/t3_pouch_closeup.png",
    undefined,
    undefined,
  ];
  const botPhotos: (string | undefined)[] = [
    "/aigen/scene05/t4_outdoor_pick.png",
    undefined,
    undefined,
    undefined,
    undefined,
  ];

  // ============================================================
  // Layout constants
  // ============================================================
  const W = 1920;
  const H = 1080;
  const sidePad = 156;        // dashboard / auction side padding

  // Tiles — measured directly from source f60 pixels:
  //   width 335, height 593, horiz gap 33, side pad 56, top 28, row gap 25.
  const tileCols = 5;
  const tileGap = 33;
  const tileSidePad = 56;
  const tileW = 335;
  const tileH = 593;
  const tileTop = 28;
  const tileRowGap = 25;
  void tileSidePad;
  void tileCols;

  return (
    <AbsoluteFill style={{background: PAPER, fontFamily: FONT_FAMILY, color: INK}}>
      {/* ──────────────────────────────────────────────────────────
          Dashboard layer (carry-over from Scene 04) — slides up.
          ────────────────────────────────────────────────────────── */}
      <AbsoluteFill
        style={{
          transform: `translateY(${dashY}px)`,
          opacity: dashOpacity,
        }}
      >
        {/* Heading */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: sidePad,
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
            right: sidePad,
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
            left: sidePad,
            right: sidePad,
            display: "flex",
            gap: 24,
          }}
        >
          {[
            {label: "Reach", value: "152K"},
            {label: "Link clicks", value: "3.8K"},
            {label: "Add to cart", value: "540"},
            {label: "Purchases", value: "122"},
          ].map((s) => (
            <div key={s.label} style={{flex: 1}}>
              <StatCard label={s.label} value={s.value} />
            </div>
          ))}
        </div>

        {/* Trend heading */}
        <div
          style={{
            position: "absolute",
            top: 696,
            left: sidePad,
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
            left: sidePad,
            right: sidePad,
            display: "flex",
            gap: 28,
          }}
        >
          <div style={{flex: 1}}>
            <TrendCard
              pill="Critical"
              title={
                <>
                  CPA spiked <span style={{color: PILL_RED_FG}}>+156%</span> on “Retargeting_US_30d”
                </>
              }
              sub="$14.20 → $36.40 - audience saturation"
            />
          </div>
          <div style={{flex: 1}}>
            <TrendCard
              pill="Positive"
              title={
                <>
                  ROAS jumped <span style={{color: PILL_GREEN_FG}}>+84%</span> on “Heart_Gummies”
                </>
              }
              sub="1.4x → 2.6x - new POV creative turned campaign profitable"
            />
          </div>
        </div>
      </AbsoluteFill>

      {/* ──────────────────────────────────────────────────────────
          Auction ranking + Industry benchmark layer.
          ────────────────────────────────────────────────────────── */}
      <AbsoluteFill
        style={{
          transform: `translateY(${auctionY}px)`,
          opacity: auctionFade,
        }}
      >
        {/* Section 1 heading */}
        <div
          style={{
            position: "absolute",
            top: 100,
            left: sidePad,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: -1.6,
            color: INK,
            ...rankCardStyle,
          }}
        >
          Auction ranking + Industry benchmark
        </div>

        {/* Auction ranking card */}
        <div
          style={{
            position: "absolute",
            top: 222,
            left: sidePad,
            right: sidePad,
            background: "#fff",
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: 18,
            padding: "44px 56px 50px",
            display: "flex",
            flexDirection: "column",
            gap: 30,
            boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
            opacity: rankCardStyle.opacity,
            transform: rankCardStyle.transform,
          }}
        >
          <RankRow
            label="Quality ranking"
            value="78th"
            fill={qualityFill}
            reveal={1}
            color={BAR_GREEN}
          />
          <RankRow
            label="Engagement rate"
            value="64th"
            fill={engageFill}
            reveal={1}
            color={BAR_GREEN}
          />
          <RankRow
            label="Conversion rate"
            value="32nd"
            fill={convFill}
            reveal={1}
            color={BURNT}
          />
        </div>

        {/* Section 2 heading */}
        <div
          style={{
            position: "absolute",
            top: 540,
            left: sidePad,
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: -1.6,
            color: INK,
            opacity: benchCardStyle.opacity,
            transform: benchCardStyle.transform,
          }}
        >
          Ads insights industry benchmark
        </div>

        {/* Industry benchmark card */}
        <div
          style={{
            position: "absolute",
            top: 660,
            left: sidePad,
            right: sidePad,
            background: "#fff",
            border: `1px solid ${CARD_BORDER}`,
            borderRadius: 18,
            padding: "40px 56px 44px",
            display: "flex",
            flexDirection: "column",
            gap: 22,
            boxShadow: "0 1px 2px rgba(0,0,0,0.025)",
            opacity: benchCardStyle.opacity,
            transform: benchCardStyle.transform,
          }}
        >
          <BenchRow
            label="CTR"
            value="1.9%"
            median="1.5%"
            fill={ctrFill}
            medianFill={ctrMedFill}
            reveal={1}
            color={BAR_GREEN}
            medianColor={BAR_GREY}
          />
          <BenchRow
            label="CPM"
            value="$14.50"
            median="$11.40"
            fill={cpmFill}
            medianFill={cpmMedFill}
            reveal={1}
            color={BURNT}
            medianColor={BAR_GREY_FAINT}
          />
          <BenchRow
            label="ROAS"
            value="2.1x"
            median="1.8x"
            fill={roasFill}
            medianFill={roasMedFill}
            reveal={1}
            color={BAR_GREEN}
            medianColor={BAR_GREY_FAINT}
          />
        </div>
      </AbsoluteFill>

      {/* ──────────────────────────────────────────────────────────
          White wash before "Generating".
          ────────────────────────────────────────────────────────── */}
      <AbsoluteFill
        style={{
          background: PAPER,
          opacity: washProg,
          pointerEvents: "none",
        }}
      />

      {/* ──────────────────────────────────────────────────────────
          Generating screen — spinner + label.
          ────────────────────────────────────────────────────────── */}
      <AbsoluteFill
        style={{
          opacity: genOpacity * genFade,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 36,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 130,
            height: 130,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${labelPulse})`,
          }}
        >
          <SpinnerRing
            size={130}
            rotation={spinDeg}
            ringColor="#D6D2C8"
            arcColor="#1F1F1F"
            opacity={1}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SquiggleMark size={56} color="#1F1F1F" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
            transform: `scale(${labelPulse})`,
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 72,
              fontWeight: 500,
              letterSpacing: -1.6,
              color: INK,
              lineHeight: 1,
            }}
          >
            Generating 20 video ads
          </div>
          <div
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 36,
              color: INK_SOFT,
              letterSpacing: -0.4,
              fontWeight: 400,
            }}
          >
            via Higgsfield MCP…
          </div>
        </div>
      </AbsoluteFill>

      {/* ──────────────────────────────────────────────────────────
          Tiles flood in (the camera is zoomed into the upper-left
          chunk of a generated grid — tiles appear left→right).
          ────────────────────────────────────────────────────────── */}
      <AbsoluteFill style={{pointerEvents: "none"}}>
        {/* Top row — full height */}
        {topRowDelays.map((delay, i) => {
          const appear = tileAppear(delay);
          const photoP = tilePhoto(delay);
          // Tiles 4 and 5 have NO photo (just sheen). Tiles 1-3 reveal a
          // photo that gradually shows through a fading peach sheen.
          const hasPhoto = !!topPhotos[i];
          // Each subsequent tile's sheen is slightly more transparent toward
          // the right (later in the wave) to match the gradient-falloff look.
          const tintIdx = i;
          // For photo tiles: sheen stays high (the source's metallic peach
          // film almost always dominates; photo is only ~25-35% perceptible).
          // For non-photo tiles: sheen stays near 1.0 (just a solid metallic
          // gradient) but each tile to the right reads slightly softer.
          const sheen = hasPhoto
            ? Math.max(0.74, 0.92 - photoP * 0.18 - tintIdx * 0.015)
            : Math.max(0.80, 1 - tintIdx * 0.06);
          return (
            <div
              key={`top-${i}`}
              style={{
                position: "absolute",
                top: tileTop,
                left: tileSidePad + i * (tileW + tileGap),
                width: tileW,
                height: tileH,
                opacity: appear,
                transform: `translateY(${(1 - appear) * 16}px)`,
              }}
            >
              <RenderTile
                width={tileW}
                height={tileH}
                photo={topPhotos[i]}
                reveal={hasPhoto ? photoP : 0}
                sheen={sheen}
                tint={tintIdx >= 3 ? "soft" : "warm"}
              />
            </div>
          );
        })}
        {/* Bottom row — partially below canvas, all gradient-only */}
        {botRowDelays.map((delay, i) => {
          const appear = tileAppear(delay);
          const photoP = tilePhoto(delay);
          const hasPhoto = !!botPhotos[i];
          const sheen = hasPhoto
            ? 1 - photoP * 0.22
            : Math.max(0.72, 1 - i * 0.08);
          return (
            <div
              key={`bot-${i}`}
              style={{
                position: "absolute",
                top: tileTop + tileH + tileRowGap,
                left: tileSidePad + i * (tileW + tileGap),
                width: tileW,
                height: tileH,
                opacity: appear,
                transform: `translateY(${(1 - appear) * 16}px)`,
              }}
            >
              <RenderTile
                width={tileW}
                height={tileH}
                photo={botPhotos[i]}
                reveal={hasPhoto ? photoP * 0.5 : 0}
                sheen={sheen}
                tint={i >= 2 ? "soft" : "warm"}
              />
            </div>
          );
        })}
      </AbsoluteFill>

      {/* keep helpers happy */}
      {(() => {
        void H;
        return null;
      })()}
    </AbsoluteFill>
  );
};
