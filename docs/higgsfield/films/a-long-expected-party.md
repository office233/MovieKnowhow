# A Long-Expected Party (MengTo) — procedural WebGL short film with Higgsfield-generated score, SFX and narration

- Upstream: <https://github.com/MengTo/a-long-expected-party> (commit `def5ca6`) · live: <https://mengto.github.io/a-long-expected-party/>
- Local copy: [`../opensource/a-long-expected-party/`](../opensource/a-long-expected-party/)
- License: MIT (© 2026 Meng To) for code and project assets. The README states literary quotations and third-party names are **not** covered; it is a non-commercial fan interpretation. The Tolkien quotation in chapter III is therefore not reproduced here.
- Type: **film (short, 136 s)** — picture is real-time Three.js, **all audio is Higgsfield-generated**.

## What was made

From `README.md`: "An interactive procedural short film rendered live in the browser with Three.js. The landscape, village, weather, crowd, and fireworks are generated in real time, accompanied by an original score, environmental sound design, and narration generated with Higgsfield."

- "Eight cinematic chapters across a 136-second timeline"
- "Original score with chapter-specific environmental sound effects"
- "Seventeen synchronized narration cues"
- "Runs as a static website with no build step" (single `index.html`, ~200 KB).

Picture is **not** AI video — it is procedural (terrain, grass, trees, village, atmosphere, fireworks). The Higgsfield part is the whole audio layer: 1 score (`score.m4a`), 8 ambience beds (`ambience-01..08.mp3`), 17 narration lines (`narration-01..17.mp3`) in `a-long-expected-party-assets/audio/`. The repo does not record which Higgsfield audio model or prompts produced them (candidates on the current platform: `seed_audio`, `text2speech_v2`, `sonilo_music`, `mirelo_text_to_audio` — see [cli-and-api.md](cli-and-api.md)); treat that as unknown.

## Pipeline (as implemented)

1. **Write a chapter table** — each chapter owns a stretch of the clock, a 3-keyframe camera path (`K(position, lookAt, fov)`), a "shake" amount, a `cut` flag and its narration lines with in-chapter start time `t` and display duration `d` (`index.html`, "PART 19 — the director").
2. **Generate audio stems on Higgsfield**: one continuous score, one environmental bed per chapter, one spoken file per narration line.
3. **Measure each narration file's duration** and hard-code it (`NARRATION_DURATIONS`).
4. **Lock the three stems to the film clock** in the browser; time-fit voice lines that would collide.
5. **Duck** score and ambience under speech.

### Shot list / chapter table (verbatim from `index.html`)

| # | Title | Start–end (s) | Camera FOV path | Cut in? | Shake |
|---|---|---|---|---|---|
| I | The Shire | 0–15 | 35 → 35 → 36 | no | 0.55 |
| II | The Hill | 15–31 | 36 → 38 → 40 | yes | 0.7 |
| III | The Green Door | 31–49 | 42 → 41 → 39 | no | 0.4 |
| IV | Hobbiton Wakes | 49–67 | 40 → 44 → 45 | yes | 0.9 |
| V | The Field | 67–93 | 39 → 41 → 44 → 46 | yes | 0.8 |
| VI | Gandalf’s Fireworks | 93–108 | 54 → 56 → 54 | no | 1.3 |
| VII | The Vanishing | 108–119 | 38 → 37 → 36 | yes | 0.5 |
| VIII | The Road | 119–136 | 42 → 40 → 36 | yes | 0.6 |

Chapter I definition, verbatim:

```js
{ n:'I', title:'The Shire', start:0, end:15, shake:0.55, cut:false,
  card:{ kicker:'A procedural film', big:'The Shire', sub:'grown from arithmetic, carried by generated sound' },
  cam:[ K([224, 78,-306], [-24, 20,-104], 35),
        K([186, 62,-272], [-22, 18,-100], 35),
        K([150, 48,-238], [-20, 17, -96], 36) ],
  lines:[
    { t:5.2, d:5.0, text:'Far west of anywhere that kept records, there was a country of green hills.' },
    { t:10.4, d:4.4, text:'Nothing worth writing down had ever happened in it — which the hobbits considered their finest achievement.' },
  ]},
```

Examples of the original narration script (MIT): "Above the village, under a crown of old oaks, the Hill kept the most comfortable hole in the Shire." · "They came up from Bywater and down from Overhill, and they brought appetites — which in the Shire is a form of courtesy." · "Bilbo made a speech. It was too long, and it was not the interesting part." · "By morning the field was empty, the lanterns were down, and the grass had already begun to forget."

## Audio direction / mixing (verbatim)

```js
/* ── Higgsfield audio direction ─────────────────────────────────────
   Three independent stems stay locked to the film clock: a continuous
   score, one environmental bed per chapter, and one spoken cue per line.
   The voice is gently time-fitted only where two passages sit close
   together; modern browsers preserve its pitch while changing rate.
   ─────────────────────────────────────────────────────────────────── */
const NARRATION_DURATIONS = [
  5.66, 7.04, 7.14, 6.24, 13.50, 7.34, 7.58, 8.10, 9.300658,
  6.38, 7.22, 4.42, 7.14, 5.60, 6.24, 7.46, 5.24
];
const AMBIENCE_LEVELS = [0.24, 0.22, 0.20, 0.25, 0.28, 0.48, 0.30, 0.22];
```

Time-fitting rule (verbatim):

```js
NARRATION_CUES.forEach((cue, i)=>{
  const nextStart = i < NARRATION_CUES.length-1 ? NARRATION_CUES[i+1].start : RUNTIME;
  const room = Math.max(1, nextStart - cue.start - 0.28);
  cue.rate = clamp(cue.duration / room, 1, 1.4);
  cue.playDuration = cue.duration / cue.rate;
  cue.line.audioD = cue.playDuration;
});
```

So a narration take is sped up (pitch preserved, `preservesPitch = true`) by at most 1.4× so it ends 0.28 s before the next line.

Mix levels (from `AUDIO.update`):
- Score: target volume 0.34, ducked to **0.20 while a narration cue is active**.
- Ambience: per-chapter level (`AMBIENCE_LEVELS`, fireworks chapter VI loudest at 0.48), 1.15 s fade in/out at chapter edges, multiplied by **0.58 while speech plays**.
- Narration: 0.84.
- Smoothing: exponential `1-exp(-dt*4.2)` for music/ambience; `dt*12` for voice.
- Drift correction: score re-seeks if > 0.22 s off, ambience > 0.18 s, voice > 0.12 s.

## Editing / assembly

No NLE. The "edit" is code: chapter cuts (`cut:true`) and camera keyframes, title cards per chapter, lower-third narration text shown for `audioD` seconds, and a browser transport (play/pause/seek/chapter shortcuts/mute persisted in `localStorage`). Serve statically: `python3 -m http.server 4173`.

## Costs / timings

Not stated.

## Lessons

- Generated audio can carry an entirely non-AI picture: score + per-scene ambience + per-line narration as **separate stems** gives full control of ducking and timing in post.
- Measure every generated voice take and budget the gap to the next line; compress small overruns by rate (≤1.4×) rather than re-generating.
- Keep one ambience bed per scene and fade at scene edges (~1.15 s) — the same "per-chapter bed + continuous score" structure transfers to any NLE assembly of Higgsfield clips.
