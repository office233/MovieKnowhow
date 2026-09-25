// =============================================================================
//  Scene 11 · seg010 — FINAL brand-anchor hold.
//
//  Static end card: Higgsfield squiggle mark + "Higgsfield" wordmark + "MCP"
//  superscript on warm-paper background. 19 dense source frames map to
//  Remotion frames 0..58 (59 total). Source frames f001..f019 are visually
//  identical — the scene is a held still — so the implementation is a vector
//  composition with a near-imperceptible breath cycle to keep it from looking
//  freeze-framed against the live brand reel.
//
//  Pre-measured positions from work/frames/seg010/f001.jpg (1920×1080):
//    - Squiggle :  x ∈ [603, 714]  (w=111)   y ∈ [479, 581]  (h=102)
//    - Wordmark :  x ∈ [743, 1221] (w=478)   y ∈ [495, 601]  (cap-h=106)
//    - MCP sup  :  x ∈ [1256, 1374] (w=118)  y ∈ [478, 519]  (cap-h=41)
//    - Background measured: rgb(247, 247, 245)  →  #f7f7f5
//    - Ink measured       : rgb(41, 41, 39)     →  #292927
// =============================================================================

import React from "react";
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from "remotion";
import {FONT_FAMILY} from "../helpers";

// -----------------------------------------------------------------------------
//  Local palette. Source-measured values are slightly cooler/lighter than the
//  shared PALETTE.paper token (#f4f0e8), so we hard-code the scene-accurate
//  pair here rather than drift the project tokens for one scene.
// -----------------------------------------------------------------------------
const BG = "#f7f7f5";
const INK = "#292927";

// -----------------------------------------------------------------------------
//  Squiggle mark — the official Higgsfield serpentine.
//
//  Shape: single continuous stroke that crosses over itself along the top
//  (creating two pinched eyelets), climbs through two peaks, then descends
//  into a closed loop at the bottom-right (a "9-tail"). Left-top tip starts
//  as a short flat stub. Drawn in a 111×102 viewBox so 1 unit ≈ 1 source px.
// -----------------------------------------------------------------------------
const SquiggleMark: React.FC<{size: number; color: string}> = ({size, color}) => {
  // Aspect ratio 111:102 ≈ 1.088. Render at the measured pixel size so the
  // mark sits exactly where it does in the source frame.
  const w = size;
  const h = size * (102 / 111);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 111 102"
      style={{display: "block", overflow: "visible"}}
    >
      {/*
        Path strategy — match source f001 squiggle (re-traced from frame):
          - The mark is a single continuous stroke that crosses over itself
            twice along the top, then resolves into a closed loop bottom-right.
          - START: flat horizontal stub at top-left (~y=20), goes RIGHT then
            curves DOWN-LEFT under itself — first self-crossing.
          - Climbs back UP-RIGHT making the first peak, comes DOWN-RIGHT
            crossing itself a second time.
          - Climbs to a second peak on the right, descends along the right
            side, curls into a CLOSED LOOP at the bottom-right, terminating
            back into the body.
      */}
      <path
        d="
          M 6 22
          L 22 22
          C 32 22, 36 38, 24 44
          C 14 50, 14 64, 24 56
          C 34 48, 38 28, 50 26
          C 62 24, 66 44, 54 50
          C 42 56, 42 70, 54 64
          C 66 58, 72 36, 84 32
          C 96 28, 100 50, 88 56
          C 76 62, 64 76, 70 88
          C 76 100, 96 96, 96 82
          C 96 68, 80 64, 72 70
        "
        fill="none"
        stroke={color}
        strokeWidth={13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// -----------------------------------------------------------------------------
//  Scene component.
// -----------------------------------------------------------------------------
export const Scene11Seg010: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // ---------------------------------------------------------------------------
  //  Breath: ±0.3% scale + ±0.4px vertical drift. Two co-prime frequencies so
  //  the cluster never settles into a perfect rest, mimicking the live source
  //  frames where the camera registers tiny shake. Amplitude is small enough
  //  to read as "the brand is held" rather than "the brand is animating".
  // ---------------------------------------------------------------------------
  const t = frame / fps;
  const breathScale = 1 + Math.sin(t * 1.7) * 0.003;
  const breathY = Math.sin(t * 1.1 + 0.7) * 0.4;

  // ---------------------------------------------------------------------------
  //  Source f001 already shows the brand fully resolved — Scene 11 begins
  //  with the cluster locked in place. No entry animation; this is a held
  //  end card. Opacity stays at 1.0 for the entire 59-frame duration.
  // ---------------------------------------------------------------------------
  const settle = 1;

  // ---------------------------------------------------------------------------
  //  Sizing from measurements (source pixels = scene pixels at 1920×1080).
  //
  //  The source wordmark is set in a proprietary geometric sans whose width-
  //  per-cap-height ratio is narrower than Inter (~4.5 vs ~5.7). Matching
  //  cap-height alone overflows by ~25% width; matching width alone leaves
  //  letters visibly short. We match cap-height with fontSize 145 and use
  //  scaleX compression to hit the width target. Same trick for MCP.
  //
  //    - Wordmark fontSize 145 (cap-h ≈ 104), scaleX 0.73 (width ≈ 478)
  //    - MCP      fontSize 56  (cap-h ≈ 41),  scaleX 0.82 (width ≈ 130)
  //    - Squiggle SVG drawn at 122 → visible bbox ≈ 111×100
  // ---------------------------------------------------------------------------
  const wordmarkFontSize = 145;
  const wordmarkScaleX = 0.73;
  const mcpFontSize = 56;
  const mcpScaleX = 0.82;
  const squiggleSize = 122;

  // Vertical center of the wordmark cap (y=495..601) is at y=548.
  // Squiggle and MCP top-align with the cap top of the wordmark (or slightly
  // above for the squiggle, which is 16px taller).
  const clusterCenterY = 548;

  return (
    <AbsoluteFill style={{background: BG}}>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          opacity: settle,
          transform: `translateY(${breathY}px) scale(${breathScale})`,
          transformOrigin: "50% 50%",
        }}
      >
        {/* Squiggle: top-left of cluster. Source bbox x=603..714, y=479..581.
            The SVG path doesn't quite fill its viewBox (strokes terminate ~5px
            inside) so we draw at 122px (~10% larger) and nudge top/left so the
            visible stroke bbox lands on the measured x=603,y=479. */}
        <div
          style={{
            position: "absolute",
            left: 601,
            top: 469,
            width: squiggleSize,
            height: squiggleSize * (102 / 111),
          }}
        >
          <SquiggleMark size={squiggleSize} color={INK} />
        </div>

        {/* Wordmark: source x=743, y=495 (cap top). Inter 700 with horizontal
            compression to match the narrower source typeface. transformOrigin
            left-center so the H-stem stays pinned. Inter has a ~7px left
            side-bearing on "H" at this size — we offset left by 7 so the
            visible H-stem lands exactly at x=743. */}
        <div
          style={{
            position: "absolute",
            left: 736,
            top: clusterCenterY,
            transform: `translateY(-50%) scaleX(${wordmarkScaleX})`,
            transformOrigin: "0% 50%",
            fontFamily: FONT_FAMILY,
            fontWeight: 700,
            fontSize: wordmarkFontSize,
            lineHeight: 1,
            color: INK,
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}
        >
          Higgsfield
        </div>

        {/* MCP superscript: source x=1256, y=478 (top-aligned with squiggle).
            Same horizontal-compression trick as the wordmark. Inter "M" left
            side-bearing at fontSize 56 / scaleX 0.82 is ~12px → 1256+12=1268,
            plus +16px to maintain the source d→MCP gap given our wordmark is
            slightly wider than the source. left = 1284. */}
        <div
          style={{
            position: "absolute",
            left: 1284,
            top: 478,
            fontFamily: FONT_FAMILY,
            fontWeight: 700,
            fontSize: mcpFontSize,
            lineHeight: 1,
            color: INK,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
            transform: `scaleX(${mcpScaleX})`,
            transformOrigin: "0% 50%",
          }}
        >
          MCP
        </div>
      </div>
    </AbsoluteFill>
  );
};
