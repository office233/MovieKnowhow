# creativly.ai-higgsfield-video-remotion (Naveen Annam) — Higgsfield MCP launch film recreated frame-for-frame in Remotion

- Upstream: <https://github.com/naveen-annam/creativly.ai-higgsfield-video-remotion> (commit `409a489`) · video: <https://www.youtube.com/watch?v=9APVoE65qfs>
- Local copy: [`../opensource/creativly.ai-higgsfield-video-remotion/`](../opensource/creativly.ai-higgsfield-video-remotion/)
- License: MIT © 2026 Naveen Annam (Creativly.ai). "Recreation for educational/showcase purposes; "Higgsfield" and related marks belong to their respective owners."
- Type: **brand ad / motion-graphics film** (Remotion code + pre-rendered AI stills)

## What was made

"A frame-accurate recreation of the **Higgsfield** launch/brand film, rebuilt entirely in code with Remotion, React and TypeScript" — "~53-second brand film (1591 frames @ 30fps, 1920×1080) recreated segment-for-segment across 11 scenes". The film is the Higgsfield **MCP-in-Claude** launch story: connect Higgsfield in Claude Cowork → pull competitor ads → audit an ad account → generate 20 UGC video ads → rank by ROAS → "Automate this process every Monday." → Higgsfield MCP end card. AI-generated stills (creator selfies, product pouch shots, boutique scenes) live in `public/aigen/scene0N/` — e.g. `scene06/t2_kitchen_selfie_pouch.png`, `scene10/c4_kitchen_creator_selfie.png`, `scene09/r1_dark_flame_macro.png`. The repo does not say which model made them.

## Process (how the recreation was built)

1. Source film split into 11 segments; frames sampled (source 25 fps). Scene files note the mapping "Source N → Remotion ≈ 3·(N−1)" and beat maps derived "from frame inspection" and "eye-test on f001..f030 + Gemini Q1..Q4" (i.e. a vision model was asked questions about frames).
2. A scaffold script (`tools/04_scaffold.sh`, not included) populated `BEATS` from segment count.
3. Each segment re-built as a React component with springs/easings from one token file.
4. Rendered deterministically: `pnpm render` → `remotion render src/index.ts VideoComposition out/final.mp4`.

## Scene / beat table (verbatim `src/tokens.ts`)

```ts
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
```

Rhythm: 6 s holds (180 f) alternating with 3 s punches (90 f), 2 s end card. Scene content (from header comments): 01 "Claude Cowork" hero + Connectors card, Higgsfield toggle flips ON; 02 "Pulling competitor ads"; 03 "Here's what I've found" / "Meta Ads Library" reel-card strip with pan + motion blur; 04 prompt "Audit my Früns ad account — flag anomalies and benchmark performance against the category." types in; 05 "Auction ranking + Industry benchmark" → "Generating"; 06 5-column polaroid grid of TikTok-style clips (hook caption "Okay nobody's talking about this but —"); 07 "20 video ads ready / to download" + Ads Manager drag-drop; 08 "Pull the data" / performance trend; 09 "Top 5 of 20 — Sorted by ROAS"; 10 "Generating videos / Detecting winning patterns" + "Automate this process every Monday."; 11 Higgsfield MCP end card with "a near-imperceptible breath cycle to keep it from looking freeze-framed".

## Motion system (verbatim `src/tokens.ts`)

```ts
export const MOTION = {
  smooth: {damping: 200, stiffness: 100, mass: 1},
  heroSpring: {damping: 18, stiffness: 110, mass: 0.9},
  snappy: {damping: 22, stiffness: 200, mass: 0.7},
  slotEase: [0.86, 0.07, 0.16, 1] as const,
  expoIn: [0.7, 0, 0.84, 0] as const,
  expoOut: [0.16, 1, 0.3, 1] as const,
} as const;
```

`helpers.ts` provides `fadeWindow` ("overlapping in/out windows [...] Used on every beat to avoid slide-deck pacing"), `springProgress`, `revealStyle`; Inter font via `@remotion/google-fonts`; stack Remotion 4.0.415 + React 19.

## Audio

Not included in the repo (no soundtrack files).

## Costs

Not stated.

## Lessons

- A launch/brand ad can be mostly **programmatic motion design** with a handful of AI stills; generated UGC frames appear as cards inside the UI story.
- Keep all timing in one beat table and all motion constants in one token file; each scene is a `<Sequence>` with `premountFor={20}`.
- Frame-by-frame reverse-engineering: sample source frames, map source→target frames, write beat maps as comments before coding.
