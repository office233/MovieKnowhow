// =============================================================================
//  Helpers — pure utilities. No magic numbers in scenes; everything either
//  comes from tokens.ts or from this helpers file.
// =============================================================================

import {Easing, interpolate, spring} from "remotion";
import {loadFont as loadInter} from "@remotion/google-fonts/Inter";
import {MOTION} from "./tokens";

// Load Inter at module scope — render blocks until done.
const inter = loadInter("normal", {
  weights: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});
export const FONT_FAMILY = inter.fontFamily;

// -----------------------------------------------------------------------------
//  Spring helper — wraps remotion's spring so we never inline a config.
// -----------------------------------------------------------------------------
export const springProgress = (
  frame: number,
  fps: number,
  delay = 0,
  duration = 24,
  config: {damping: number; stiffness?: number; mass?: number} = MOTION.smooth,
) =>
  spring({
    frame: Math.max(0, frame - delay),
    fps,
    config,
    durationInFrames: duration,
  });

// -----------------------------------------------------------------------------
//  fadeWindow — overlapping in/out windows, the canonical 06-prompt-to-picture
//  helper. Used on every beat to avoid slide-deck pacing.
// -----------------------------------------------------------------------------
export const fadeWindow = (
  frame: number,
  inStart: number,
  inEnd: number,
  outStart: number,
  outEnd: number,
) => {
  const inP = interpolate(frame, [inStart, inEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outP = interpolate(frame, [outStart, outEnd], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return Math.min(inP, 1 - outP);
};

// -----------------------------------------------------------------------------
//  revealStyle — parameterized soft entry. Use on UI elements; for hero type
//  use heroEnter() below.
// -----------------------------------------------------------------------------
export const revealStyle = (
  frame: number,
  fps: number,
  delay: number,
  y = 18,
  scaleFrom = 0.985,
) => {
  const p = springProgress(frame, fps, delay);
  const scale = interpolate(p, [0, 1], [scaleFrom, 1]);
  return {
    opacity: p,
    transform: `translateY(${(1 - p) * y}px) scale(${scale})`,
  };
};

// -----------------------------------------------------------------------------
//  heroEnter — the 58 hero formula. Spring-scale + Y translate + breath cycle.
//  Returns scale + translateY for use in `transform`.
// -----------------------------------------------------------------------------
export const heroEnter = (frame: number, fps: number, delay = 4) => {
  const p = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: MOTION.heroSpring,
  });
  const breath = Math.sin((frame - (delay + 14)) * 0.045) * 0.012;
  const scale = p * (1 + breath);
  const translateY = (1 - p) * 40;
  return {
    p,
    scale,
    translateY,
    opacity: p,
  };
};

// -----------------------------------------------------------------------------
//  Seeded PRNG — deterministic pseudo-random. Mulberry32.
// -----------------------------------------------------------------------------
export const seeded = (seed: number) => {
  let s = (seed >>> 0) || 1;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

// -----------------------------------------------------------------------------
//  bezier — small alias so scene files can write Easing.bezier(...MOTION.expoIn).
// -----------------------------------------------------------------------------
export const bezier = (curve: readonly [number, number, number, number]) =>
  Easing.bezier(curve[0], curve[1], curve[2], curve[3]);

// -----------------------------------------------------------------------------
//  clamped — shorthand interpolate options (no extrapolation).
// -----------------------------------------------------------------------------
export const clamped = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
