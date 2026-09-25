// =============================================================================
//  Tokens — central source of truth.
//  The scaffold script populates COMPOSITION_ID and BEATS for each project.
// =============================================================================

export const COMPOSITION_ID = "HiggsfieldClaude";
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;

export const PALETTE = {
  black: "#000000",
  white: "#ffffff",
  whiteDim: "rgba(255, 255, 255, 0.62)",
  whiteFaint: "rgba(255, 255, 255, 0.28)",
  whiteGhost: "rgba(255, 255, 255, 0.12)",
  ink: "#0a0a0a",
  paper: "#f4f0e8",
  greyMenu: "#3f3f3f",
} as const;

export const FONT = {
  family: "InterRecreation",
  hero: 900,
  bold: 800,
  semibold: 700,
  regular: 500,
  light: 400,
} as const;

export const MOTION = {
  smooth: {damping: 200, stiffness: 100, mass: 1},
  heroSpring: {damping: 18, stiffness: 110, mass: 0.9},
  snappy: {damping: 22, stiffness: 200, mass: 0.7},
  slotEase: [0.86, 0.07, 0.16, 1] as const,
  expoIn: [0.7, 0, 0.84, 0] as const,
  expoOut: [0.16, 1, 0.3, 1] as const,
} as const;

export type Beat = {
  name: string;
  duration: number;
  sourceFrameRange: string;
};

// Populated by tools/04_scaffold.sh from segment count + last-segment duration.
export const BEATS: Beat[] = [
  {name: "01-seg000", duration: 182, sourceFrameRange: "seg000/f001..f060"},
  {name: "02-seg001", duration: 180, sourceFrameRange: "seg001/f001..f060"},
  {name: "03-seg002", duration: 90, sourceFrameRange: "seg002/f001..f030"},
  {name: "04-seg003", duration: 180, sourceFrameRange: "seg003/f001..f060"},
  {name: "05-seg004", duration: 180, sourceFrameRange: "seg004/f001..f060"},
  {name: "06-seg005", duration: 90, sourceFrameRange: "seg005/f001..f030"},
  {name: "07-seg006", duration: 180, sourceFrameRange: "seg006/f001..f060"},
  {name: "08-seg007", duration: 180, sourceFrameRange: "seg007/f001..f060"},
  {name: "09-seg008", duration: 90, sourceFrameRange: "seg008/f001..f030"},
  {name: "10-seg009", duration: 180, sourceFrameRange: "seg009/f001..f060"},
  {name: "11-seg010", duration: 59, sourceFrameRange: "seg010/f001..f019"},
];

export const BEAT_STARTS = BEATS.reduce<number[]>((acc, b, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + BEATS[i - 1].duration);
  return acc;
}, []);

export const TOTAL_DURATION = BEATS.reduce((sum, b) => sum + b.duration, 0);
