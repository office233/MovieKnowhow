# ai-film-pipeline (Gregory-Esman / Joey's CTRL skills) — K-pop short, BMW M5 spot, "OUR TURN"

- Upstream: <https://github.com/Gregory-Esman/ai-film-pipeline> (commit `560cfc1`)
- Local copy: [`../opensource/ai-film-pipeline/`](../opensource/ai-film-pipeline/)
- License: MIT © 2026 A0339x; the two specialist skills (`banana-pro-director`, `cinema-worldbuilder`) are © Joey (creator of *CTRL: Hunters*), "released free per his explicit "take them, use them, modify them, build your own off of them" statement" (LICENSE).
- Type: **film + ad pipeline** (four Claude skills + templates)

## What was made with it

- **CTRL / CTRL: Hunters** — an AI-generated K-pop short film by Joey (@acornjoey), made on Higgsfield. Its post-mortem is the basis of the workflow: "133 video generations averaging 11s each", "~7,500 credits, half wasted" (WORKFLOW.md).
- **OUR TURN** — Joey's later production made with the 2.0 skills; hero prompts are in `docs/sample-prompts.md`.
- **BMW E39 M5 black-tie commercial (30 s)** — "Real-photo references → ChatGPT character sheets → Seedance shots on ArtCraft. Roughly one weekend, around $10 in generation credits." (README.md; note this one ran on ArtCraft's Seedance 2.0, not Higgsfield).

## The four skills

| Skill | Role |
|---|---|
| `banana-pro-director` | Image prompts: Mode 0 face locks, outfits on mid-gray, 6-panel sheets, scene plates, outfit swaps |
| `cinema-worldbuilder` | Seedance video prompts: five cinema modes, ten labeled blocks, `@imageN` tags |
| `ai-film-director` | Orchestrator: seven phases (guided) or five-step loop (pro) |
| `video-qa` | QC: ffmpeg 1-fps frame extraction, drift/continuity scoring |

## Pipeline, step by step (WORKFLOW.md)

**Phase 0 — Concept lock.** Who / Where / What / Why / How long ("Most AI shorts live in the 30s–2min band").

**Phase 1 — Character builds** ("the part that breaks most projects"):
1. Develop or upload reference.
2. **Mode 0 face lock on mid-gray seamless** — tool fork: "**Banana Pro single-pass** (the default — balanced fidelity), **GPT-2 single-pass** (highest fidelity, higher credits), or **Soul Cinema two-pass** (throw cheap variations at the wall, then lock the winner with a Banana Pro 3:4 pass — the descendant of the K-Pop project's 10–20-reroll exploration)."
3. Base outfit (Mode 1), then "lock the character sheet (Banana Pro 6-panel)".
4. Other looks — "four looks per character — Base identity (loungewear / personal style) · Battle suit / hero suit, helmet on · Battle suit, helmet off · Performance / stadium look (often with a distinct hairstyle)".
5. Log each look in `templates/character-bible.md`.

**Phase 2 — World builds.** "Build the pure environment plate first (Banana Pro Mode 3B / Atmospheric M5). No humans. Establishing wide." Second-angle plates ("Higgsfield can be stubborn about flipping POV on an existing plate"). Creature/prop 6-panel sheets on mid-gray.

**Phase 3 — Story flow lock.** Map every cut; per shot "what the viewer sees and what they hear"; cinema mode M1–M5; which character look; "**Decide auto-edit per shot.** Multi-shot sequences in one prompt = auto-edit ON. Sustained single takes = OFF."

**Phase 4 — Seedance generation.** "Attach the reference images in the Higgsfield UI **in the exact numbered order from the delivery's reference list** — the `@image1`–`@image9` tags inside the prompt map to that order (Seedance caps at 9 references)." Tips: "Let Seedance handle multi-shot cuts." "**11–15 seconds is the sweet spot per generation.** Longer often degrades."

**Phase 5 — Audio (Suno) + title card.** "Two generations is usually enough. Upload the chosen track into Higgsfield in 12–15s slices so Seedance can sync lip movement." Title card via Banana Pro.

**Phase 6 — Post.** "Topaz Video to upscale every clip", edit in DaVinci/Premiere/FCP, "Seedance produces diegetic audio natively — keep what's useful, mute what isn't, layer Suno on top", colour balance.

## Models per step (README "Production stack reference")

| Stage | Tool |
|---|---|
| Character face locks (Mode 0) | Nano Banana Pro single-pass (default) · GPT-2 (highest fidelity, more credits) · Soul Cinema two-pass (cheap iteration) |
| Outfits / fuses / merges / outfit swaps | Nano Banana Pro (simple fits) · Soul Cinema two-step (complex/baggy custom fits) |
| Detail face / chest-up portraits | Higgsfield GPT-2 |
| Video generation | Seedance 2.0 |
| Music | Suno |
| Upscale | Topaz Video |
| Edit / assembly | Any NLE (DaVinci Resolve, Premiere, Final Cut) |

## The Seedance prompt format (cinema-worldbuilder 2.0)

Ten labeled blocks: Scene & Mood → **Frame Map** → **Subject Lock** (one per `@image`) → **Cross-Frame Rules** → **Movement** (per-shot timestamps) → **Last Frame** → **World Plate** → **Sound Bed** → **Capture Realism** → **Camera Capture**. Density: "280–400 words single-shot". 2.0 changes (README): volumetric depth in every frame; "**Mid-gray seamless replaces white for character builds.**"; "**Cameras described by behavior, not brand names.**"

Runtime guidance (`cinema-worldbuilder/SKILL.md`): "4–8 seconds — one strong character action" · "8–12 seconds — one action plus reveal or hold" · "12–15 seconds — 2–3 simple beats with hard cuts inside the prompt" · "Complex multi-action sequences — split into separate prompts". Runtime is stated in three places (title, Frame Map, Camera Capture) and must match. Handheld is default; "Locked-off tripod is OPT-IN ONLY".

**Capture Realism block** (canonical, verbatim from `cinema-worldbuilder/SKILL.md`):

```
Capture Realism: [Foreground subject] sits inside real depth — [thin/light/heavy] atmosphere suspended in the air between camera, subject, and [the far background element], the background rendered softer, desaturated, and lower-contrast than the foreground so the figure sits within the air rather than pasted on a flat plane. [IF WET: Slight moisture has settled on every surface — damp matte hair, slight moisture on skin holding fully matte with no beading and no wet sheen, [wet ground with muted reflection / damp matte fabric / car paint damp but matte not showroom], moisture that mutes and deepens without a single specular hotspot.] Skin reads true cinematic matte — zero shine on forehead, nose bridge, cheekbones, temples, chin, and collarbones, real peach fuzz catching light at the jaw and hairline, real soft fine even pore texture, light absorbed like true subsurface scattering, warmth preserved and natural, slightly desaturated but never pale or washed-out or cool-shifted, never plastic, never doll-skin, never AI-rendered, and never harsh — no acne, no blemishes, no enlarged or rough pores, fine flattering texture that keeps the face looking good. Low-contrast curve — shadows lifted gently holding texture, highlights rolled off softly never clipping to white, nothing crushed to black. All specular highlights surgically removed from skin, hair, fabric, and surrounding surfaces, every pixel reading matte and diffuse. Slightly desaturated grade with warmth preserved.
```

## A real multi-shot prompt: OUR TURN cabin sequence (15 s, 5 shots)

`docs/sample-prompts.md` Sample 1 ("cinema-worldbuilder 2.0, M1, 15s, 5 shots"; recovered from a Notion PDF — some tags lost). Structure excerpts, verbatim:

```
Frame Map: Shot 1 — exterior wide on the F40 anchored to and @image_5, the car parked diagonally across midground on the wet muddy cliffside, pop-up headlights deployed and cutting twin warm volumetric cones forward through the heavy drizzle, [...] Camera slowly pushes in toward the windshield. Shot 2 — interior cabin medium close-up anchored to [tag lost in export], the espresso-brown-hair woman @image_1 in the passenger seat [...] Shot 3 — tight handheld close-up on @image_2 in the driver's seat [...] Shot 4 — return to the same medium close-up framing as Shot 2 on @image_1 [...] Shot 5 — tight handheld close-up back on @image_2 in the driver's seat, mirror of Shot 3 framing, her left hand visible on the steering column near the wiper stalk on the left side of the wheel.
```

```
Cross-Frame Rules: [...] WIPERS STAY OFF AND AT REST across Shots 1 through 4 — windshield holds heavy rain accumulation across all four shots with the rain continuously impacting and streaming down the glass. ONLY in Shot 5 do the wipers activate, executing exactly ONE single clean sweep across the windshield.
```

```
Movement: Shot 1 (0–3s) — handheld with continuous operator breath, slow steady push-in toward the windshield of the parked car [...] Hard cut to Shot 2 (3–6s) — handheld medium close-up with natural operator breath and micro-sway [...] Hard cut to Shot 3 (6–9s) — tight handheld dutch close-up with operator breath [...] Hard cut to Shot 4 (9–13s) — return to the medium close-up [...] Hard cut to Shot 5 (13–15s) — tight handheld dutch close-up on the ponytai[l ...]
```

```
Sound Bed: Continuous heavy rain impact sounds — drops hitting the car body and roof in soft drumming, drops splashing on the muddy ground and puddles, water streaming down the windshield and side windows. Soft running idle of the car's mid-mounted engine throughout. Faint distant hum of Tokyo below. In Shot 3 the jet-black-bangs ponytail woman says "That's a lot of jacket." — dry, flat-toned, smirking, mock disdain pulling at the line. In Shot 4 the espresso-brown-hair woman says "And where's yours?" — light, dry, mock-annoyed, soft suppressed laugh just under the words. In Shot 5 a soft quiet laugh from the ponytail woman, then a small mechanical click of the wiper stalk pulling, then the rhythmic mechanical sweep of the wipers executing one single arc across the windshield. No music. No score.
```

```
Camera Capture: Shot 1 — 35mm anamorphic lens at wide aperture, soft diffusion in the highlights [...] Shots 2 and 4 — 75mm anamorphic at wide aperture [...] dutch tilt right six degrees. Shots 3 and 5 — 75mm anamorphic at wide aperture [...] dutch tilt right five degrees. Cinematic teal-amber grade [...] Theatrical film grain across the entire frame, natural cinema texture, anamorphic edge character. 24fps motion-blur register, 15 seconds total.
```

Sample 3 is the full **6-panel character sheet on mid-gray** (Banana Pro Mode 2): "A 6-panel character reference sheet arranged as a 3-column by 2-row grid in a single horizontal frame [...] Panel 1 (top-left): Full body front [...] Panel 2 (top-center): Side profile close headshot, left side [...] Panel 3 (top-right): Full body back [...] Panel 4 (bottom-left): Side profile close headshot, right side [...] Panel 5 (bottom-center): Front face close headshot [...] Panel 6 (bottom-right): Detail shot [...] Mid-gray seamless studio backdrop applied uniformly across all six panels [...] Relight from scratch overriding any reference lighting".

## Reference strategy for ads (BMW spot)

`docs/character-sheet-examples.md`: the M5 prop sheet was assembled from **real press photos + Bring-a-Trailer detail shots** (three-quarter front · profile · rear · cockpit · dashboard · shift gate). "real photos are ground-truth identity at zero generation credits" — principle *real photos > AI plates whenever the subject exists in reality*.

## Music (templates/suno-music-prompt.md)

"Cinema-worldbuilder explicitly forbids music language inside Seedance prompts — Seedance audio is diegetic only. The score is built separately in Suno and layered in post." For lip-synced music-video shots: "chop the chosen track into ~12s slices (Joey's sweet spot per the K-Pop breakdown; 15s is the ceiling). Upload each slice to the Seedance host's audio reference — Higgsfield calls it the "elements list"". Per-shot lyric in the prompt: *"lips visibly mouthing the words '[exact lyric]' with exaggerated clarity"*. K-pop style prompt used:

> aggressive k pop girl group track 150 bpm dark minor key hardstyle kick pattern with reverse bass baile funk air horn stabs in the chorus detuned saw synth sirens four female vocalists korean idol style mix of rap verses and sung pre choruses group chant hook dirty low end tight snare hi hat triplets dance edm pop hip hop reggae trap energy production reference k-pop pop dance-pop edm hip hop electropop horn stabs

## QC (video-qa)

```bash
ffmpeg -hide_banner -loglevel error -i clips/shot_NN_vNN.mp4 \
  -vf "fps=1,scale=1280:-1" \
  /tmp/qa_frames/shot_NN_vNN/frame_%02d.png
```

One frame per second compared against locked bibles — catches "wrong-generation prop slips (e.g. an E39 M5 with E46 taillights), identity wobble across a long take". Re-roll cost noted in `video-qa/SKILL.md`: "~80 credits per attempt".

## Costs / timings

- CTRL: ~7,500 credits, 133 video gens ×11 s avg; "could have done it in 3,000 with this workflow".
- Takes per shot: "On Hunters he was burning 8–10 takes per shot [...] it's more like 2–3 takes" with the 2.0 skills.
- BMW spot: ~$10 credits, one weekend (ArtCraft).
- Budget vibes used by the orchestrator: "Tight (<1,000 credits), medium (~3,000), unlimited / Ultra plan".
- Platform notes (README): ArtCraft Basic $10/mo ~63s Seedance 2.0; Higgsfield Plus/Ultra "$34–49/mo+"; fal.ai "~$0.24–0.30/sec at 720p"; BytePlus ModelArk "~$0.14/sec" (~$0.37 per 4s clip).

## Lessons / pitfalls

- "**Hit rate scales with prep.** The shots that worked first try in OUR TURN all had locked references, locked wardrobe, locked environment plates before the video prompt ever ran."
- "Every generation should answer: *which shot in the shot list is this for, and which look from the character bible.*"
- Biggest credit sinks: fighting Seedance grammar, generating before the shot list was locked, regenerating half-locked characters.
- No brand names, no gear names, no character names in prompts; "Music lives in the Higgsfield UI, not the prompt."
