import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame} from "remotion";
import {FONT_FAMILY, clamped, seeded} from "../helpers";

// =============================================================================
// Scene 06 — segment_005 — Polaroid grid of TikTok-style brand clips
//
// Source: 30 frames @ 25fps  (3s). Recreated as 90 frames @ 30fps.
// Source N -> Remotion local ≈ 3*(N-1).  Scene starts at Remotion 812.
//
// What the source shows (eye-test on f001..f030 + Gemini Q1..Q4):
// ----------------------------------------------------------------------------
//   • 5-column grid of vertical polaroid-style cards on a warm paper
//     background (~#F4F3F2). Card aspect is closer to 9:12.5 than 9:16
//     — i.e. they're vertical but a bit shorter than a phone-screen.
//   • Cards have ~26px corner radius, soft drop shadow + tiny wavy
//     "spark/tilde" mark in the top-right (the brand mark).
//   • The grid extends nearly to the canvas edges (≤20px side margin).
//   • The grid scrolls upward at ~3-4 px / Remotion-frame. Over the 90
//     frames, ~half a card-height of vertical translation, so by the end
//     row 1 is mostly off the top and row 3 has fully entered at bottom.
//   • Soft alpha fade at the top + bottom of the canvas (cards drift out).
//   • Captions appear on two of the row-1 tiles.
// =============================================================================

// 8 tile assets from scripts/gen_scene06.py.
const TILES = [
  "/aigen/scene06/t1_living_pouch_floor.png",
  "/aigen/scene06/t2_kitchen_selfie_pouch.png",
  "/aigen/scene06/t3_product_flame_macro.png",
  "/aigen/scene06/t4_boutique_microphone.png",
  "/aigen/scene06/t5_street_taxi_selfie.png",
  "/aigen/scene06/t6_terrace_shake_bougainvillea.png",
  "/aigen/scene06/t7_dog_sweater_pouch.png",
  "/aigen/scene06/t8_car_interior_selfie.png",
];

// Warm paper background — slightly warmer cream to match the source's
// warmer/dustier paper tone.
const PAPER = "#EEEAE0";

// Tiny wavy spark mark in top-right corner of every card.
const SparkMark: React.FC<{size: number; color?: string; opacity?: number}> = ({
  size,
  color = "#1f1f1f",
  opacity = 0.85,
}) => (
  <svg
    width={size}
    height={size * 0.5}
    viewBox="0 0 64 32"
    style={{display: "block", opacity}}
  >
    <path
      d="M2 14 C 10 4, 18 4, 26 14 S 42 24, 50 14 S 60 8, 62 12"
      stroke={color}
      strokeWidth={3.2}
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M6 24 C 14 14, 22 14, 30 24 S 44 32, 52 24"
      stroke={color}
      strokeWidth={3.2}
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const Tile: React.FC<{
  src: string;
  width: number;
  height: number;
  rotate?: number;
  caption?: string | null;
}> = ({src, width, height, rotate = 0, caption = null}) => (
  <div
    style={{
      width,
      height,
      borderRadius: 24,
      position: "relative",
      flexShrink: 0,
      transform: `rotate(${rotate}deg)`,
      boxShadow:
        "0 20px 36px rgba(60,46,28,0.12), 0 8px 16px rgba(60,46,28,0.08), 0 2px 4px rgba(60,46,28,0.06)",
      background: "#d8d4cc",
      overflow: "hidden",
    }}
  >
    <Img
      src={staticFile(src)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
      }}
    />
    <div
      style={{
        position: "absolute",
        top: 14,
        right: 14,
        width: 32,
        height: 18,
        pointerEvents: "none",
      }}
    >
      <SparkMark size={32} color="#1c1c1c" opacity={0.82} />
    </div>
    {caption ? (
      <div
        style={{
          position: "absolute",
          left: 14,
          right: 14,
          top: "52%",
          color: "#fff",
          fontWeight: 700,
          fontSize: 22,
          lineHeight: 1.22,
          letterSpacing: -0.2,
          textAlign: "center",
          textShadow:
            "0 1px 3px rgba(0,0,0,0.7), 0 0 8px rgba(0,0,0,0.45)",
          pointerEvents: "none",
          whiteSpace: "pre-line",
        }}
      >
        {caption}
      </div>
    ) : null}
  </div>
);

// ──────────────────────────────────────────────────────────────────────────────
// Scene
// ──────────────────────────────────────────────────────────────────────────────
export const Scene06Seg005: React.FC = () => {
  const frame = useCurrentFrame();

  // ============================================================
  // Layout
  // ============================================================
  const W = 1920;
  const COLS = 5;

  const colGap = 14;
  const rowGap = 18;
  // Small side margin — the source has cards extending nearly to the
  // canvas edges with only a small paper strip visible.
  const sideMargin = 12;
  const cardW = Math.floor((W - sideMargin * 2 - colGap * (COLS - 1)) / COLS);
  // Source cards are vertical, close to 9:14 — slightly shorter than a full
  // phone-screen 9:16 but distinctly portrait.
  const cardH = Math.round(cardW * (14 / 9));

  // 4 rows in the strip — enough to cover the visible window + scroll.
  const ROWS = 4;

  // Scroll velocity — eye-test on source f001 vs f030 + Gemini Q3: row 1
  // exits ~85-90% of its height over 90 Remotion frames. We split the
  // difference and use 0.88 of (cardH + rowGap).
  const totalScroll = (cardH + rowGap) * 0.88;
  const scrollProgress = interpolate(frame, [0, 89], [0, 1], clamped);
  const scrollY = totalScroll * scrollProgress;

  // Initial top: row 1 starts with its top ~30px below canvas top so the
  // soft fade mask can fade it in/out at the upper edge.
  const initialTop = 30;

  // Subtle exit blur during the last few frames for the hand-off.
  const exitBlur = interpolate(frame, [82, 89], [0, 1.2], clamped);

  // ============================================================
  // Tile placement — stable seeded shuffle per row so the same tile doesn't
  // appear directly above the same tile in the same column.
  // ============================================================
  const rand = seeded(20240515);
  const rows: string[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const used = new Set<number>();
    const row: string[] = [];
    for (let c = 0; c < COLS; c++) {
      let pick = -1;
      for (let tries = 0; tries < 32; tries++) {
        const i = Math.floor(rand() * TILES.length);
        const same = used.has(i);
        const above = r > 0 && rows[r - 1][c] === TILES[i];
        if (!same && !above) {
          pick = i;
          break;
        }
      }
      if (pick < 0) {
        pick = (r * COLS + c) % TILES.length;
      }
      used.add(pick);
      row.push(TILES[pick]);
    }
    rows.push(row);
  }

  // ============================================================
  // Captions — both captions live on the SAME row-1 tile (the talking-head
  // selfie at column index 1). Caption A is the initial phrase, caption B
  // replaces it ~frame 24 (source f≈9) onward. Single tile, sequential text.
  // ============================================================
  const captionTile: string | null = (() => {
    if (frame < 0) return null;
    // Caption A: frames 0..26 — "Okay nobody's talking about this but —"
    if (frame <= 26) return "Okay nobody's talking\nabout this but —";
    // Caption B: frames 27..90 — replaces A with the longer line.
    return "these little heart gummies\nreplaced my Entire\nsupplement shelf";
  })();

  // Per-tile gentle rotation bob — gives them a subtle "live clip" feel.
  const bob = (i: number) => {
    const phase = frame / 42 + i * 0.61;
    return Math.sin(phase) * 0.12;
  };

  // ============================================================
  // Render
  // ============================================================
  return (
    <AbsoluteFill
      style={{
        background: PAPER,
        fontFamily: FONT_FAMILY,
        overflow: "hidden",
      }}
    >
      {/* Scrolling grid strip */}
      <div
        style={{
          position: "absolute",
          top: initialTop - scrollY,
          left: sideMargin,
          width: W - sideMargin * 2,
          filter: exitBlur > 0.05 ? `blur(${exitBlur.toFixed(2)}px)` : undefined,
        }}
      >
        {rows.map((row, r) => (
          <div
            key={r}
            style={{
              display: "flex",
              gap: colGap,
              marginTop: r === 0 ? 0 : rowGap,
            }}
          >
            {row.map((src, c) => {
              const i = r * COLS + c;
              // Both captions live on the same tile (row 0, col 1).
              const cap = r === 0 && c === 1 ? captionTile : null;
              return (
                <Tile
                  key={`${r}-${c}`}
                  src={src}
                  width={cardW}
                  height={cardH}
                  rotate={bob(i)}
                  caption={cap}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Strong feathered paper fades at the top + bottom of the canvas so
          cards drift in/out naturally. The fades extend ~200px so that the
          top row of card content reads as significantly hazed at frame 0
          and the bottom row of card content fades out into the paper. */}
      <AbsoluteFill style={{pointerEvents: "none"}}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 220,
            background: `linear-gradient(to bottom, rgba(238,234,224,1) 0%, rgba(238,234,224,0.98) 20%, rgba(238,234,224,0.8) 45%, rgba(238,234,224,0.45) 70%, rgba(238,234,224,0) 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 240,
            background: `linear-gradient(to top, rgba(238,234,224,1) 0%, rgba(238,234,224,0.98) 20%, rgba(238,234,224,0.8) 45%, rgba(238,234,224,0.45) 70%, rgba(238,234,224,0) 100%)`,
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
