import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {FONT_FAMILY, bezier, clamped, revealStyle, springProgress} from "../helpers";
import {MOTION} from "../tokens";

// =============================================================================
// Scene 07 — segment_006 — "20 video ads ready / Ads Manager drag-drop /
// Pull the…" prompt-card resume.
//
// Source: 60 frames @ 25fps  →  Remotion 180 frames @ 30fps.
// Source N → Remotion ≈ 3·(N−1). Scene 07 starts at Remotion 902.
//
// Beat map (local frames inside the 180-frame scene):
//   0..15    Phone-card strip fills the canvas (carries in from scene 06).
//            Strip starts large, then begins shrinking + drifting up.
//   15..30   Strip settles smaller in upper half; serif headline
//            "20 video ads ready / to download" fades in below. The
//            'download' word is peach-orange. Cursor lands on it.
//   30..36   Cursor click → 'download' → '[downloaded]' dark pill
//            (peach text crossfades to dark pill, micro-press).
//   36..54   White wash up + Ads Manager window slides/scales in.
//            Empty dashed grid revealed (5 × 3).
//   54..72   Grabbing-fist cursor drags a stack of thumbnails to center.
//   72..108  Thumbnails snap into the 5-col × 3-row dashed grid, one
//            row at a time (rows 0, 1, 2 staggered).
//   108..156 Quiet hold on populated Ads Manager.
//   156..180 Prompt-input bar slides up; "Pull the" types in (Pull dark,
//            'the' in faded peach). Cursor exits.
// =============================================================================

const PAPER = "#F4F0E8";          // off-white paper (matches Scene 04)
const INK = "#1A1A1A";
const BURNT = "#C25B49";          // orange send / accent
const ORANGE_FAINT = "#D49A94";   // faded peach (for "the" and earlier "download")
const PILL_DARK = "#1F1F1F";      // dark almost-black pill
const PILL_TEXT = "#FFFFFF";
const FB_BLUE = "#1877F2";
const CARD_BG = "#FFFFFF";
const DASHED = "#E2D6D9";          // dashed placeholder rule
const PLACE_FILL = "#FFF1F3";      // faint pink placeholder fill

// 8 generated assets — we'll reuse to fill a 15-cell grid (3 rows × 5 cols),
// matching the source's apparent grid of unique phone thumbnails.
const THUMBS = [
  "/aigen/scene07/p1_creator_cream_sweater.png",
  "/aigen/scene07/p2_creator_blue_top_stairs.png",
  "/aigen/scene07/p3_chalkboard_dog.png",
  "/aigen/scene07/p4_car_seatbelt.png",
  "/aigen/scene07/p5_leather_jacket_outdoor.png",
  "/aigen/scene07/p6_grocery_aisle_basket.png",
  "/aigen/scene07/p7_garden_dress.png",
  "/aigen/scene07/p8_boutique_blonde.png",
];

// 15 cells (5 × 3) — pick from the 8 assets with a stable, pleasing order.
const GRID_CELLS: number[] = [
  0, 1, 2, 3, 4,
  5, 6, 7, 0, 4,
  1, 2, 3, 6, 5,
];

// Top double-row strip uses the same 8 thumbnails, repeating to fill 10 cells.
const STRIP_CELLS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 0, 1];

// ──────────────────────────────────────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────────────────────────────────────

const PhoneThumb: React.FC<{
  idx: number;
  width: number;
  height: number;
  rotate?: number;
  opacity?: number;
  scale?: number;
  rounded?: number;
  shadow?: boolean;
}> = ({idx, width, height, rotate = 0, opacity = 1, scale = 1, rounded = 28, shadow = true}) => {
  const src = THUMBS[idx % THUMBS.length];
  return (
    <div
      style={{
        width,
        height,
        borderRadius: rounded,
        overflow: "hidden",
        background: "#ddd",
        opacity,
        transform: `rotate(${rotate}deg) scale(${scale})`,
        boxShadow: shadow
          ? "0 18px 28px rgba(35,28,18,0.10), 0 4px 10px rgba(35,28,18,0.06)"
          : "none",
        flexShrink: 0,
      }}
    >
      <Img
        src={staticFile(src)}
        style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}}
      />
    </div>
  );
};

// Pointing cartoon-hand cursor (white glove, used in the source).
const PointHand: React.FC<{size: number}> = ({size}) => (
  <svg
    width={size}
    height={size * 1.1}
    viewBox="0 0 100 110"
    style={{display: "block", filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.25))"}}
  >
    <path
      d="M44 8 C44 4, 56 4, 56 8 L56 48 L66 48 C72 48, 76 52, 76 58 L76 82 C76 96, 64 104, 50 104 C36 104, 24 96, 24 82 L24 60 C24 56, 28 54, 32 56 L36 58 L36 14 C36 10, 44 10, 44 14 Z"
      fill="#fff"
      stroke="#111"
      strokeWidth={2.6}
      strokeLinejoin="round"
    />
    <path
      d="M40 78 L52 78 M40 86 L52 86 M40 94 L52 94"
      stroke="#111"
      strokeWidth={2.2}
      strokeLinecap="round"
    />
  </svg>
);

// Closed grabbing fist (used while dragging stack).
const GrabHand: React.FC<{size: number}> = ({size}) => (
  <svg
    width={size}
    height={size * 1.05}
    viewBox="0 0 100 110"
    style={{display: "block", filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.28))"}}
  >
    <path
      d="M22 36 C22 26, 30 22, 38 24 L38 18 C38 10, 50 10, 50 18 L50 24 C58 22, 66 26, 66 36 L66 50 C72 50, 78 54, 78 62 L78 84 C78 96, 66 104, 50 104 C34 104, 22 96, 22 84 Z"
      fill="#fff"
      stroke="#111"
      strokeWidth={2.6}
      strokeLinejoin="round"
    />
    <path
      d="M30 60 L70 60 M30 72 L70 72 M30 84 L70 84"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

// Facebook logo "f" disc.
const FacebookMark: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 64 64" style={{display: "block"}}>
    <circle cx={32} cy={32} r={32} fill={FB_BLUE} />
    <path
      d="M36 22h5v-7c-1-.1-4-.5-7-.5-7 0-12 4-12 11v6h-6v8h6v18h8V40h7l1-8h-8v-5c0-2 1-5 4-5z"
      fill="#fff"
    />
  </svg>
);

// Small stacked-cards icon on left rail.
const StackIcon: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 32 32" style={{display: "block"}}>
    <rect x={10} y={4} width={18} height={20} rx={3} fill={FB_BLUE} opacity={0.78} />
    <rect x={4} y={10} width={18} height={20} rx={3} fill={FB_BLUE} />
  </svg>
);

// Up-arrow inside the orange send button.
const SendArrow: React.FC<{size: number}> = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{display: "block"}}>
    <path
      d="M12 19V5M12 5L6 11M12 5L18 11"
      stroke="#fff"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ──────────────────────────────────────────────────────────────────────────────
// Scene
// ──────────────────────────────────────────────────────────────────────────────
export const Scene07Seg006: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const W = 1920;
  const H = 1080;

  // ============================================================
  // Beat 1 — phone strip + headline + cursor click (0..36)
  // ============================================================
  // Strip starts large (≈1.18 scale, full frame), then settles smaller
  // and drifts upward to make room for the headline.
  const stripScale = interpolate(frame, [0, 15, 28], [1.18, 1.0, 0.92], clamped);
  const stripTranslateY = interpolate(frame, [0, 15, 28], [50, 0, -20], clamped);
  const stripOpacity = interpolate(frame, [0, 4, 30, 38], [1, 1, 1, 0], clamped);

  // Headline fades in after the strip settles.
  const headlineOpacity = interpolate(frame, [12, 22, 30, 38], [0, 1, 1, 0], clamped);

  // 'download' vs 'downloaded' pill — crossfade at the click moment (≈frame 30..34).
  const downloadFade = interpolate(frame, [28, 32], [1, 0], clamped); // peach 'download' visible
  const pillFade = interpolate(frame, [30, 34], [0, 1], clamped);     // dark pill visible
  const pillPress = interpolate(frame, [30, 33, 36], [1, 0.92, 1], clamped);

  // Cursor 1 — slides in from below-right, lands on 'download', clicks at f30.
  const cursor1Visible = interpolate(frame, [10, 16, 34, 40], [0, 1, 1, 0], clamped);
  const cursor1DX = interpolate(frame, [10, 26], [120, 0], {
    ...clamped, easing: bezier(MOTION.expoOut),
  });
  const cursor1DY = interpolate(frame, [10, 26], [110, 0], {
    ...clamped, easing: bezier(MOTION.expoOut),
  });

  // White wash rises after the click.
  const wash = interpolate(frame, [34, 44], [0, 1], clamped);

  // ============================================================
  // Beat 2 — Ads Manager window appears (36..52). Starts a couple
  // frames before the wash finishes so there's no blank gap.
  // ============================================================
  const amProg = springProgress(frame, fps, 36, 22, MOTION.snappy);
  const amOpacity = interpolate(amProg, [0, 0.3, 1], [0, 1, 1], clamped);
  const amScale = interpolate(amProg, [0, 1], [0.96, 1], clamped);
  const amTranslateY = interpolate(amProg, [0, 1], [40, 0], clamped);

  // ============================================================
  // Beat 3 — grabbing-cursor drags stack of thumbnails (54..90)
  // Drag is visible while empty grid is shown (local 54..86).
  // ============================================================
  const dragVis = interpolate(frame, [50, 58, 84, 92], [0, 1, 1, 0], clamped);
  const dragX = interpolate(frame, [54, 88], [W * 0.62, W * 0.38], {
    ...clamped, easing: bezier(MOTION.expoOut),
  });
  const dragY = interpolate(frame, [54, 88], [H * 0.82, H * 0.45], {
    ...clamped, easing: bezier(MOTION.expoOut),
  });

  // ============================================================
  // Beat 4 — thumbnails snap into 5×3 grid (90..140)
  // Source f32..f45 ≈ rem 995..1034 ≈ local 93..132. Rows stagger.
  // ============================================================
  const rowDelays = [88, 108, 124];

  // ============================================================
  // Beat 5 — prompt-input bar (156..180)
  // ============================================================
  const promptProg = springProgress(frame, fps, 156, 22, MOTION.snappy);
  const promptY = interpolate(promptProg, [0, 1], [220, 0], clamped);
  const promptOpacity = interpolate(promptProg, [0, 0.4, 1], [0, 1, 1], clamped);

  // Two-stage typing of "Pull the":
  const pullChars = Math.max(0, Math.min(4, Math.floor(interpolate(frame, [162, 169], [0, 4], clamped))));
  const theChars = Math.max(0, Math.min(3, Math.floor(interpolate(frame, [170, 176], [0, 3], clamped))));
  const pullText = "Pull".slice(0, pullChars);
  const theText = "the".slice(0, theChars);
  const showCaret = frame < 178 && Math.floor((frame - 156) / 4) % 2 === 0;

  // ============================================================
  // Layout constants
  // ============================================================
  // Ads Manager window — extends well below the canvas bottom (matches source).
  const amW = 1620;
  const amH = 1200;
  const amX = (W - amW) / 2;
  const amY = 200;

  const amInnerPadL = 100;
  const amInnerPadR = 60;
  const amInnerPadT = 80;
  const amHeaderH = 100;

  const gridCols = 5;
  const gridRows = 3;
  const gridGap = 18;
  const gridLeft = amX + amInnerPadL + 220;
  const gridTop = amY + amInnerPadT + amHeaderH + 30;
  const gridRight = amX + amW - amInnerPadR;
  const gridW = gridRight - gridLeft;
  const cellW = (gridW - gridGap * (gridCols - 1)) / gridCols;
  const cellH = cellW * 1.45;

  // Strip — 5×2 thumbnails, sized so two rows fit comfortably above
  // the headline area. We let strip-scale push them larger initially.
  const stripW = 1500;
  const stripGap = 18;
  const stripCols = 5;
  const stripRows = 2;
  const stripCellW = (stripW - stripGap * (stripCols - 1)) / stripCols;
  const stripCellH = stripCellW * 1.18;
  const stripTotalH = stripRows * stripCellH + stripGap * (stripRows - 1);
  const stripLeft = (W - stripW) / 2;
  const stripTop = 30;

  // Headline sits below the strip's natural footprint.
  const headlineY = stripTop + stripTotalH + 30;

  const promptW = 1700;
  const promptH = 320;
  const promptX = (W - promptW) / 2;
  const promptYBase = H - promptH - 90;

  return (
    <AbsoluteFill style={{background: PAPER, fontFamily: FONT_FAMILY, color: INK}}>

      {/* ====================== Beat 1 — strip + headline ====================== */}
      <div
        style={{
          position: "absolute",
          top: stripTop,
          left: stripLeft,
          opacity: stripOpacity,
          width: stripW,
          height: stripTotalH,
          transform: `translateY(${stripTranslateY}px) scale(${stripScale})`,
          transformOrigin: "center top",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${stripCols}, ${stripCellW}px)`,
            gridTemplateRows: `repeat(${stripRows}, ${stripCellH}px)`,
            gap: stripGap,
          }}
        >
          {STRIP_CELLS.map((idx, i) => {
            const wob = Math.sin((frame / 60) + i * 0.7) * 0.3;
            return (
              <PhoneThumb
                key={`strip-${i}`}
                idx={idx}
                width={stripCellW}
                height={stripCellH}
                rotate={wob}
              />
            );
          })}
        </div>
      </div>

      {/* Headline */}
      <div
        style={{
          position: "absolute",
          top: headlineY,
          left: 0,
          width: "100%",
          textAlign: "center",
          opacity: headlineOpacity,
          fontFamily: "Georgia, 'Times New Roman', serif",
          color: INK,
        }}
      >
        <div style={{fontSize: 88, lineHeight: 1.05, fontWeight: 500, letterSpacing: -2.2}}>
          20 video ads ready
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 88,
            fontWeight: 500,
            letterSpacing: -2.2,
            lineHeight: 1.0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 18,
          }}
        >
          <span>to</span>
          <span style={{position: "relative", display: "inline-block"}}>
            {/* Layer A — peach 'download' (before click) */}
            <span
              style={{
                display: "inline-block",
                color: ORANGE_FAINT,
                padding: "8px 36px 14px",
                borderRadius: 28,
                background: "rgba(255,235,232,0.65)",
                opacity: downloadFade,
              }}
            >
              download
            </span>
            {/* Layer B — dark pill 'downloaded' (after click) */}
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "inline-block",
                background: PILL_DARK,
                color: PILL_TEXT,
                padding: "8px 36px 14px",
                borderRadius: 28,
                transform: `scale(${pillPress})`,
                transformOrigin: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.18)",
                opacity: pillFade,
                whiteSpace: "nowrap",
              }}
            >
              downloaded
            </span>
          </span>
        </div>
      </div>

      {/* Cursor 1 — pointer over 'download' pill */}
      <div
        style={{
          position: "absolute",
          // Centered horizontally, just under the second line of the headline.
          left: W / 2 + 80 + cursor1DX,
          top: headlineY + 130 + cursor1DY,
          opacity: cursor1Visible,
          pointerEvents: "none",
        }}
      >
        <PointHand size={86} />
      </div>

      {/* White wash (Beat 1 → Beat 2) */}
      <AbsoluteFill style={{background: PAPER, opacity: wash, pointerEvents: "none"}} />

      {/* ====================== Beat 2..5 — Ads Manager window ====================== */}
      <div
        style={{
          position: "absolute",
          left: amX,
          top: amY,
          width: amW,
          height: amH,
          opacity: amOpacity,
          transform: `translateY(${amTranslateY}px) scale(${amScale})`,
          transformOrigin: "center",
          background: CARD_BG,
          borderRadius: 28,
          boxShadow: "0 28px 60px rgba(35,28,18,0.10), 0 6px 14px rgba(35,28,18,0.06)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{position: "absolute", top: 60, left: amInnerPadL, display: "flex", alignItems: "center", gap: 24}}>
          <FacebookMark size={66} />
          <div style={{fontSize: 56, fontWeight: 800, letterSpacing: -1.4, color: INK}}>
            Ads Manager
          </div>
        </div>
        {/* Left rail icon */}
        <div style={{position: "absolute", top: 240, left: 60}}>
          <StackIcon size={56} />
        </div>

        {/* Dashed grid placeholders (always visible) */}
        <div
          style={{
            position: "absolute",
            left: gridLeft - amX,
            top: gridTop - amY,
            display: "grid",
            gridTemplateColumns: `repeat(${gridCols}, ${cellW}px)`,
            gridTemplateRows: `repeat(${gridRows}, ${cellH}px)`,
            gap: gridGap,
          }}
        >
          {Array.from({length: gridCols * gridRows}).map((_, i) => (
            <div
              key={`cell-${i}`}
              style={{
                width: cellW,
                height: cellH,
                background: PLACE_FILL,
                border: `1.5px dashed ${DASHED}`,
                borderRadius: 18,
              }}
            />
          ))}
        </div>

        {/* Populated thumbnails — row-by-row snap-in */}
        <div
          style={{
            position: "absolute",
            left: gridLeft - amX,
            top: gridTop - amY,
            display: "grid",
            gridTemplateColumns: `repeat(${gridCols}, ${cellW}px)`,
            gridTemplateRows: `repeat(${gridRows}, ${cellH}px)`,
            gap: gridGap,
            pointerEvents: "none",
          }}
        >
          {GRID_CELLS.map((idx, i) => {
            const row = Math.floor(i / gridCols);
            const col = i % gridCols;
            const delay = rowDelays[row] + col * 1.4;
            const cellStyle = revealStyle(frame, fps, delay, 14, 0.92);
            return (
              <div
                key={`thumb-${i}`}
                style={{
                  width: cellW,
                  height: cellH,
                  opacity: cellStyle.opacity,
                  transform: cellStyle.transform,
                }}
              >
                <PhoneThumb
                  idx={idx}
                  width={cellW}
                  height={cellH}
                  rounded={18}
                  shadow={false}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* ====================== Beat 3 — drag stack overlay ====================== */}
      <div
        style={{
          position: "absolute",
          left: dragX,
          top: dragY,
          opacity: dragVis,
          pointerEvents: "none",
        }}
      >
        <div style={{position: "relative", width: 260, height: 380}}>
          <div style={{position: "absolute", left: -18, top: 16, transform: "rotate(-8deg)"}}>
            <PhoneThumb idx={4} width={220} height={360} rounded={20} />
          </div>
          <div style={{position: "absolute", left: 6, top: 8, transform: "rotate(2deg)"}}>
            <PhoneThumb idx={2} width={220} height={360} rounded={20} />
          </div>
          <div style={{position: "absolute", left: 22, top: 0, transform: "rotate(9deg)"}}>
            <PhoneThumb idx={0} width={220} height={360} rounded={20} />
          </div>
        </div>
        <div style={{position: "absolute", left: 140, top: 220}}>
          <GrabHand size={104} />
        </div>
      </div>

      {/* ====================== Beat 5 — prompt input bar ====================== */}
      <div
        style={{
          position: "absolute",
          left: promptX,
          top: promptYBase,
          width: promptW,
          height: promptH,
          opacity: promptOpacity,
          transform: `translateY(${promptY}px)`,
        }}
      >
        <div
          style={{
            background: CARD_BG,
            borderRadius: 30,
            padding: "44px 56px 32px",
            height: "100%",
            boxSizing: "border-box",
            boxShadow:
              "0 28px 60px rgba(40,30,16,0.12), 0 6px 16px rgba(40,30,16,0.06)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 60,
              fontWeight: 500,
              lineHeight: 1.25,
              letterSpacing: -1.0,
              color: INK,
              fontFamily: "Georgia, 'Times New Roman', serif",
              minHeight: 84,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <span>{pullText}</span>
            <span style={{color: ORANGE_FAINT}}>{theText}</span>
            {showCaret && pullChars + theChars < 7 && (
              <span
                style={{
                  display: "inline-block",
                  width: 4,
                  height: 50,
                  background: INK,
                  marginLeft: -12,
                }}
              />
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <svg width={42} height={42} viewBox="0 0 24 24" style={{display: "block"}}>
              <path d="M12 5V19M5 12H19" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
            </svg>

            <div style={{display: "flex", alignItems: "center", gap: 26}}>
              <div style={{display: "flex", alignItems: "center", gap: 10}}>
                <span
                  style={{
                    fontSize: 32,
                    color: INK,
                    fontWeight: 500,
                    letterSpacing: -0.4,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Opus 4.7
                </span>
                <svg width={24} height={24} viewBox="0 0 24 24">
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
                  width: 68,
                  height: 68,
                  borderRadius: 16,
                  background: BURNT,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 10px rgba(194,91,73,0.28)",
                }}
              >
                <SendArrow size={36} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
