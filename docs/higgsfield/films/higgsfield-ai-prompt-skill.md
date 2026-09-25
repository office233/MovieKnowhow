# higgsfield-ai-prompt-skill (OSideMedia) — the Hell Grind feature-film system + Seedance/Soul doctrine

- Upstream: <https://github.com/OSideMedia/higgsfield-ai-prompt-skill> (commit `c0b73ab`)
- Local copy: [`../opensource/higgsfield-ai-prompt-skill/`](../opensource/higgsfield-ai-prompt-skill/)
- License: MIT, © 2026 O-Side Media. All quotes below are verbatim from the MIT-licensed files named next to them.
- Type: **film pipeline + ad/UGC reference + prompt skill library** (Claude skill, ~30 sub-skills)

## What was made / what it documents

This repo is not a single film. It is the most complete public write-up of **how the Higgsfield team produced "Hell Grind", a ~90–95-minute fully AI feature film** shown at Cannes 2026 (14 days, 15 people), plus the harvested prompts of the Higgsfield "Seedance-4K" one-minute film tutorial, the "AI vs VFX" Seedance 2.5 build, and a 13-project community harvest (~4,000 production prompts). It wraps all of it into a Claude skill library.

Key files:

| File | What it holds |
|---|---|
| `skills/higgsfield-seedance/HELL-GRIND.md` | The feature-film pipeline (assets → GEO layout → first-second wide → dialogue → iteration loop) |
| `production-benchmarks.md` | Credits, generations, acceptance rates, schedule of Hell Grind |
| `skills/higgsfield-seedance/SKILL.md` | Seedance 2.0 prompt grammar incl. the **[OFFICIAL] block scaffold** |
| `skills/higgsfield-seedance/ENGINE-RULES.md` | 11 hard engine rules |
| `skills/higgsfield-seedance/PRODUCTION-PATTERNS.md` | Patterns demonstrated in the Seedance-4K tutorial |
| `skills/higgsfield-seedance-2-5/SKILL.md`, `VFX-PIPELINE.md`, `MODE-PLAYBOOKS.md` | Seedance 2.5 (four modes, v2v, AI-vs-VFX build) |
| `skills/higgsfield-acting/SKILL.md` | Acting system (objective, beats, eye life, master profile) |
| `skills/higgsfield-soul/SKILL.md` | Soul ID / character-sheet consistency |
| `skills/higgsfield-pipeline/SKILL.md` | Pipelines A–E (short film, social, product, speed-run, multi-style) + the edit |
| `skills/higgsfield-shotlist-director/SKILL.md` | Connected shotlist (Style Prefix → @assets → per-scene prompts) |
| `templates/seedance/global-style-prefix.md` | The Style Prefix glued to every prompt |
| `prompt-examples.md` | Worked prompts incl. Seedance-4K tutorial scenes 4, 5, 5b, 6, 8 |
| `DISCIPLINE.md` | Cross-cutting discipline patterns |
| `skills/higgsfield-stack/SKILL.md` | CLI/MCP preflight (cost, schema) |

---

## 1. The full feature-film pipeline (Hell Grind), step by step

Source: `skills/higgsfield-seedance/HELL-GRIND.md` (labelled `[OFFICIAL — Higgsfield "Hell Grind" open-source brief]`).

### Step 0 — the premise: the model has no memory

> "A video model remembers nothing between generations. If a character is not fully described in *every* prompt, the next shot gives them a different face and a different jacket. Every technique below is a consequence of that single fact.
>
> **Describe everything, every time.** The descriptor goes into every prompt **word for word, never shortened.** Consistency is not a setting; it is repetition."

### Step 1 — Pre-production: assets = text + image

> "An **asset** is a pair: **text + image**. The text is a full description — the *descriptor* — that is pasted verbatim into every prompt. The image is the reference the model anchors to. Neither works alone.
>
> References are **assets only**: characters and locations. Everything else is prompt text."

**Character sheet = 3 images, one headless** (HELL-GRIND.md):

| Panel | Content |
|---|---|
| 1 | Close-up of the face |
| 2 | Full body, front — **headless** |
| 3 | Full body, back |

> "**Why the front figure loses its head.** On wide shots the model kept sourcing the face from the small full-body figure on the sheet, where the face is tiny and blurry. Remove that head and the model has exactly one place to take the face from: the close-up."

> "**Keep the sheet deliberately boring.** Neutral grey background, flat light, real skin with visible pores, no retouch. The cinema look lives in the locations and the video prompts — bake film grain and a cinematic lens into the sheet and the character carries that look into every scene and stops reacting to new light."

> "**Sheets read best with a large portrait in 3/4 view** — face turned slightly, not straight-on."

**Point changes via masks, never a second full pass:**

> "Clothes, scars, and blood are **point changes**. Make the change on the original sheet in Nano Banana Pro or Seedream, then bring it back onto the original **by hand, with a mask** in any graphics editor [...] **The rule that protects quality: an image never runs through a model twice in full.** Every extra pass destroys texture and drifts color. After two passes the face turns symmetrical, plastic, and lifeless — and that dead texture later damages the character's *acting* in video."

**Voice = locked descriptor** (pasted into the audio field every time the character speaks):

```
Voice: deep, gravelly bass-baritone; slow, calculated pacing; London street accent;
menacing calm — he never raises his voice.
```

**Acting locked the same way:** "Every character gets one behavior paragraph written before any shooting — movement, hands, habits, nervous gestures, eye behavior, and exactly how they break under pressure." "A behavior that is physically impossible in a scene is transferred, not deleted."

**Location sheets** (HELL-GRIND.md):

> "- **Shoot the location sheet in 3/4, not frontal.** A frontal "pretty picture" becomes flat wallpaper on wides, and past its edges the model invents new surroundings every time.
> - **Leave an anchor in every location** — a column, a lamp, a sofa — and tie the staging to it. "The character at the lamp, facing the door" works. "The character in the room" is a lottery.
> - **Keep one light logic**: one source, one direction of shadows, never two suns.
> - **Reverse angles, route 1:** generate a corner of the same room in GPT Image 2 or Nano Banana, matching the soft focus of the original.
> - **Reverse angles, route 2** (found late in production): generate a **video of the empty location** where the camera slowly walks through the space — Seedance draws the other sides consistently with the sheet. Screenshot the angle you need, take it to Seedream or Nano Banana Pro, and prompt a texture/lighting improvement. A full location sheet out of a single image."

**Name every reference's role, ban location inheritance:**

```
@roco for character reference
@jaxx for character reference
@loc_cave_front for location reference — take only the space and the texture: raw concrete,
black rock walls. Do not use as a starting frame, do not inherit the composition, the angle,
or the grade.
```

"**One dictionary of names for the whole project.** All assets live under tags — `@roco`, `@loc_cave_front` — and the same tags are used everywhere." Tag convention (SKILL.md § Tag naming, `[FIELD — Higgsfield Studio, ONEIRIC breakdown]`):

```
@loc_ON_dorm_commonroom_front_s2     type + project + name + [angle] + scene
@char_ON_Rudy_s2_v1                  type + project + name + scene + version
@prop_ON_pizza                       type + project + name
```

"a changed state is a **new asset with a new name, never an overwrite**."

### Step 2 — Per-scene GEO SPATIAL LAYOUT (pasted unchanged into every shot of a scene)

```
GEO SPATIAL LAYOUT (locked across every shot — pure spatial map):
— PLATFORM = raised circular ritual stone disc at the edge of a cliff.
— ALTAR-MONOLITH: at the cliff edge, MID-RIGHT position relative to the platform.
— RITUAL CENTER: CENTER-LEFT, ~3 m from the altar.
— 180° AXIS: camera ALWAYS stays on the corpse-field side — it NEVER crosses the line.
— BACK-LIGHTING: crimson horizon glow comes from BEHIND the platform, rim-lighting
  silhouettes from camera's perspective.
```

Rules: "**No characters, no action — only the place itself**"; "**Sides exist only from the camera.**"; "**Positions are set from landmarks and in metres**"; "**After every cut, name again who stands where and where they look.**"; "**Give a static dialogue a corner of the room, not the whole room.**"

### Step 3 — The first second of every scene is a wide

> "One second at the start of a scene, **no lines and no action**: the model "photographs" the arrangement — who stands where, what lies where, where the light comes from — and holds it through every following shot."

Refinements: "**The "hm" trick.** Have someone say one short word — "hm" — during that second." and "**The wide does not have to be silent.** If the shot answers the previous one, feed the **tail of the previous clip's line** into that first second".

```
FIRST FRAME AND SPATIAL BLOCKING
SHOT 1 (~1.0s) — a wide that FIXES THE POSITIONS and does nothing else: ROCO planted at the
center of the mat, five smashed mannequins at CENTER-RIGHT, the door open at frame-LEFT with
JAX and REIN one step inside it, trays in hand. No camera move, no action beat.

AUDIO
Over that first second, the tail of the previous clip's line arrives on REIN's lips as she
walks in: "...I've got the coordinates." ROCO's eyes find her before his head turns.

ACTION TIMING
1.0s onward — ROCO answers into the same rhythm, dry and worn: "You're late."
```

### Step 4 — Character-count header + counted objects

```
EXACT 3 CHARACTERS — NO DUPLICATES: ROCO, JAX, REIN.
```
```
Exactly ONE mannequin, NEVER render a second one.
FIVE smashed mannequins, never re-rendered as intact, never multiplied. Two trays, never more.
```

### Step 5 — Prompt skeleton (block order)

Official block order (`skills/higgsfield-seedance/SKILL.md` § Block order, `[OFFICIAL — Higgsfield prompt-writter.skill, 2026-07]`):

```
SCENE CONTEXT
ACTIVE REFERENCES
LOCATION MAP
FIRST FRAME / BLOCKING
FORMAT MODE
OPTICS
CAMERA
ACTION
PERFORMANCE      (when acting matters)
PHYSICS
LIGHTING
COLOR GRADE      (when the grade is strong / stylized)
WARDROBE         (when costume matters)
AUDIO
STYLE            (technical-style suffix)
OUTPUT SETTINGS  (when format must be pinned)
POSITIVE LOCKS
```

Hell Grind adds **CHARACTER ACTING** (emotional state · want · hidden · body rhythm · habits · what changes), **STYLE** (the Style Prefix verbatim) and **QUALITY** ("8K detail, pore-level skin, no jitter, no flicker; the faces stay exactly their references at every distance"). Worked CHARACTER ACTING block:

```
CHARACTER ACTING
ROCO — emotional state: burnt out and still going. What he wants in this moment: one more
clean hit before anyone walks in on him failing. What he is hiding: that the arm is winning,
and that it frightens him. Dominant body rhythm: heavy, planted, slow recovery between bursts.
Visible habits in this beat: the jaw set-and-release, the right shoulder pulled low by the
crystal, the blood he does not wipe, the gaze that finds the broken mannequins first and
people second. What changes across the shot: the second the door opens he re-arms his face —
the exhaustion folds back behind a dry half-smile before he says a word.
```

Closing tag row used in production:

```
Photoreal. NON-IP. 16:9. 12s. SFX only. NO CGI. Cinematic.
```

"`SFX only. No music.` is treated as mandatory in this pipeline — music belongs to post-production". (House note: prefer `NO BGM` for new prefixes.)

**Prompt length:** "Hell Grind's prompts ran **3,000–4,000 words**." "Keep each beat light: up to three sentences per beat."

### Step 6 — The Style Prefix (glued verbatim to every prompt of a connected shotlist)

`templates/seedance/global-style-prefix.md`:

```
Style: [8K IMAX commercial], [16:9] widescreen. Photorealistic — no 3D render, no game engine.
Lighting: [Natural light only — soft, even morning daylight, gentle atmospheric haze throughout. Key light from sky and windows only. No artificial light.]
Color: [60:30:10] — dominant / secondary / accent.
Camera: Physical cine lens. 180° shutter motion blur.
Skin: Pore-level realism — vellus hair, asymmetric moles, capillary flush, pore-shadow matching on-set light.
Acting: Hollywood — micro-pauses before reactions, precise eye-line, living eyes with catch-lights, chest rise from breathing. Characters never standing, always reacting.
Physics: Gravity and inertia respected — mass has real weight, correct contact shadows. No floating props.
Composition: Rule of thirds + golden ratio. Every person moving from frame one.
Continuity: Characters, props, environment identical across every cut. No identity drift.
Technical: 24fps smooth motion. 8K detail. No jitter.
Audio: Diegetic dialogue and environmental SFX only. No music. No subtitles.
```

Per-scene override = replace only one line (e.g. the Lighting line) in that one prompt.

### Step 7 — Dialogue construction

> "**A dialogue line in the prompt is always built the same way:**
> ```
> The voice and its emotion → the line in quotes → the physical action → the facial reaction
> ```
> - **Lines live only in the audio section.** Not one word of speech inside the action block.
> - **Seedance adds its own "uhms", chuckles, and whole phrases**, so the prompt carries a hard block: everyone speaks **only** the line in quotes; whoever has no line stays completely silent"

Worked example (verbatim):

```
ACTION TIMING
0.0–3.0s — JAX and REIN walk the corridor toward the lens, in step. JAX talks with his eyes up
on the ceiling lights, one hand patting his stomach; REIN's thumb keeps scrolling the tablet,
her pace unchanged, she never looks up at him.
3.0–4.0s — the distant THUD from the training room lands: REIN's thumb STOPS on the glass, and
only then her head turns to the door — the interrupted work is the accent of the beat. JAX's
grin drops half a second later.

AUDIO
Diegetic only — corridor air, two sets of footsteps on concrete, soft taps on the tablet, the
distant THUD and a hiss of crystal behind the door. JAX voice (verbatim): "A London street
voice, loose and hungry, always half-joking, sentences thrown out mid-stride." His line, and
nothing else: "Man, some cereal and a milkshake would hit the spot right now." REIN voice
(verbatim): "A technical voice — flat, fast, precise, no wasted air." Her line, and nothing
else: "I think I've got the coordinates." Nobody else speaks; JAX's amused breath is a facial
expression, with no sound. No music.
```

Seam tricks: "on the wide shots of a dialogue, feed the tail of the previous line into the prompt [...] and **open every new generation with the line that closed the previous one**". "**Rare names get a transcription**". "**Write the mix too**: voices clean and close to the microphone, ambience under them, ambience dips when someone speaks."

### Step 8 — Emotion as physics (muscle, blinking, micro-life)

```
ACTION TIMING
0.0–2.0s — ROCO holds the center of the mat, feet planted wide, chest pumping in short shallow
pulls; the crystal arm hangs heavy at his side and drags his right shoulder a finger lower
than the left.
2.0–4.5s — the jaw sets and releases twice; a thread of blood runs from his nose to his upper
lip and he lets it run; one lazy blink, a quick DOUBLE-BLINK, one HARD reset-blink.
4.5–6.0s — the gaze drops to the smashed mannequins at CENTER-RIGHT, holds one beat, then
lifts to the door as it opens — the eyes reach the door before the head turns.
```

"**The micro-life rule.** Against frozen faces in static shots: **one visible micro-event every one or two seconds**". "**Describe stillness as held tension, never as a freeze.**" "**INNER (unspoken).** One line of inner monologue per stretch of action". "**Keep the hands busy.** [...] **The strongest accent of a scene is the moment they stop that work**".

### Step 9 — Wording rules & ban dictionary

"**Present tense. Short sentences.**" "**The camera is written inside the action**". "**Actions only in positive form.** The model ignores "does NOT fall on his back" — or does the opposite. Write "falls on his stomach."" "**Never write age, in any language.** The content filter becomes markedly stricter the moment it reads a minor." Ban dictionary: `dark → low key`, `jolting → rapid motion`.

### Step 10 — The iteration loop

> "Generate in **batches, scene by scene**.
> - **Every iteration is surgical: one line changes, everything else stays word for word.**
> - **Everything goes into the log**: prompt version, what changed, verdict.
> - **The ten-to-fifteen rule.** If a shot has not come together in 10–15 iterations, **the problem is not the wording.** Simplify the *shot*: split it in two, remove an action, change the angle."

Deadline solutions (verbatim headings): complex action **opens** the prompt ("he is ALREADY mid-swing, the door ALREADY cracking"); **a crowd is one "character" asset**, state the number ("20+"); **transitions hold on a threshold** with a light contrast ("a warm amber room, a cold blue corridor beyond the arch"); **giants live on scale anchors**:

```
POSITIVE CONSTRAINTS
THE SCALE LAW — VISIBLE PROOF IN THE PICTURE: the stone guardian stands THIRTY METRES tall —
his head is lost in the darkness of the dome, his open palm is as wide as a family car, and
ROCO at his foot reaches just above the ankle. In every frame the guardian's silhouette is at
least FIVE TIMES the height of the human figure beside him, and the frame cannot hold both his
feet and his head at once. A guardian that reads as a large man, or fits comfortably in frame
next to a standing human = failed shot.
```

**The five rules, compressed** (HELL-GRIND.md): 1. Assets first. 2. Describe everything, every time. 3. Change one thing at a time. 4. Give the model less freedom. 5. If a shot will not come together — simplify the shot, not the words.

### Step 11 — Edit, picture lock, grade

`skills/higgsfield-pipeline/SKILL.md` § The Edit (`[FIELD — Higgsfield Studio, ONEIRIC + ADILIADA breakdowns]`): Assembly → Rough cut → **Generation supervision** (re-generate broken shots after rough cut) → Fine cut → **Picture lock** ("After lock there are no new generations"). "**Every generation arrives with its own grade baked in.** [...] the colourist's job on a generated film is **unification** first".

Schedule discipline (production-benchmarks.md): "**~2.5 minutes of finished footage per team member per day**"; "**Week 1** (Days 1-7) = full feature assembly — every scene present, even if rough"; "**Week 2** (Days 8-14) = key-moment refinement".

---

## 2. Models per step (what Higgsfield productions converged on)

| Step | Model(s) | Source |
|---|---|---|
| Lead character anchor | "~600 generations on Higgsfield Soul Cinema" + "~200 generations on GPT Image 2" ≈ 800 per lead | production-benchmarks.md |
| Point edits on sheets | Nano Banana Pro / Seedream (then masked by hand) | HELL-GRIND.md |
| Reverse-angle locations | GPT Image 2 / Nano Banana, or Seedance walkthrough video → Seedream/NB Pro | HELL-GRIND.md |
| All video | "Seedance 2.0 for all video (15s durations dominant — generate long multi-shot clips, cut the best seconds), Soul Cinematic as the volume asset engine, GPT Image 2 for sheet edits, Nano Banana Flash for exposure-matching plate edits" | production-benchmarks.md (13-project harvest) |
| Seedance 2.5 AI-vs-VFX build | faces + fixes → **Nano Banana 2**; creatures → **Seedream 5.0**; clothing → **GPT Image 2**; locations → **Soul Cinema** ("GPT skews yellow; Nano Banana makes locations too clean and symmetrical") | CHANGELOG.md / VFX-PIPELINE.md |
| Multi-style short (Pipeline E) | Soul Cinema keyframe (5–15 words, enhancer ON) → Nano Banana Pro edits → prop sheet → Claude writes prompt → Seedance 2.0 with keyframe + previous video | skills/higgsfield-pipeline/SKILL.md |
| Classic short (Pipeline A) | Popcorn storyboard → Seedream edit → Veo 3.1 / Sora 2 / Kling 2.6 / Seedance by scene type → Recast → Lipsync Studio / Kling 3.0 → Vibe Motion → Topaz upscale → NLE | skills/higgsfield-pipeline/SKILL.md |

Scene-type routing table (Pipeline A, verbatim):

| Scene type | Best model | Key prompt note |
|------------|-----------|----------------|
| Character emotional reaction | Veo 3.1 / Kling 2.6 | Lead with camera mount position |
| Car/vehicle action | Veo 3.1 / Sora 2 | Specify camera mount explicitly |
| Physical stunt / crash | Sora 2 | "One continuous shot, no cuts" |
| Quiet interior moment | Seedance / Kling 2.6 | Minimal motion, camera Dolly In |
| Epic reveal / scale | Sora 2 | Crane Up or Super Dolly Out |
| Portrait / reaction close-up | Kling 2.6 | Head Tracking or Dolly In |

Platform params seen on harvested Seedance jobs (SKILL.md § Field calibration): `multi_shot_mode: "custom"`, `genre: "auto"`, `speedramp: "auto"`, `mode: "std"`, `bitrate_mode: "high"`, `generate_audio: true`, 21:9 at 4K; **`enhance_prompt` off on every video job** but on for 1,022 image jobs. Median prompt length by register: "tech-demo 218w → broadcast-TV drama 538w → commercial 779w → genre anthology 955w → adventure film 1,433w (p90 2,648) → stop-motion emotional drama 2,059w".

---

## 3. Seedance-4K one-minute film tutorial — shot prompts

`prompt-examples.md` § Seedance-4K Film Tutorial ("All prompts ran on Seedance 2.0 at 4K, 16:9"; full versions on higgsfield.ai/blog/seedance4k-breakdown).

**Scene 4 — Snow leopard, super-telephoto zoom (10s, prompted imperfection):**

```
OPTICS
A single massive optical zoom from WIDE 84° FOV to super-telephoto 8° FOV,
stopping at a HALF-BODY framing of the leopard (head, chest and shoulders,
roughly half the body). Extreme compression at the long end — mountain layers
flattened into stacked planes. Genuine long-distance super-tele character:
from the moment the zoom pushes long, and strongly by the close end, the
image swims and ripples with heat-haze and atmospheric distortion, edges
shimmering as if seen through rising air over miles; a constant nervous
telephoto micro-tremor, the framing trembling and drifting; the picture grows
softer and slightly mushy, fine sharpness falling off into gentle blur and
faint digital-zoom smear with light grain; a brief focus hunt before it
settles on the cat. The wide start is clean and crisp; these artifacts build
hard as it zooms in. Continuous push, no drift between beats.

LIGHTING
[…] Atmospheric haze builds across the shot — roughly 20% density at the wide
start rising to about 70% at the long compressed end, visible deep into the
layered peaks.

POSITIVE LOCKS
The camera stays in one fixed spot — static tripod, pure optical zoom only,
never cuts and never leaves its spot. […]
```

**Scene 5 — Truck vs. snow monster (16s, six segments):**

```
FIRST FRAME AND SPATIAL BLOCKING
The first visible frame is an extreme super-wide aerial-height establishing
vista — maximum scope, @truck1 a tiny speck. The truck sits deep background,
left-of-center, x 38%, y 44%, scale tiny (under 4% of frame width), driving
left-to-right at full speed. […]
Truck travel direction: screen-left to screen-right, locked; clear road ahead
at screen-right. Storm and monster locked to screen-left/rear (behind). […]

FORMAT MODE
Controlled six-segment sequence in one continuous escalating beat. Seg 1
real-time push-in. Seg 2 real-time obstacle gauntlet. Seg 3 real-time
"shark-under-snow" stalk. Seg 4 slow-motion fake-out (claw miss). Seg 5
slow-motion scoop, launch, and mid-air rotations. Seg 6 low ground-level shot
as the truck rolls in and stops upside down. HARD CUT at 3.0s, HARD CUT at
6.0s, SMASH CUT to slow motion at 9.0s, continue slow motion through the
scoop, MATCH CUT to the ground angle at 13.5s. No subtitles, no music.

OPTICS
Prime-lens optical character throughout — clean, sharp center field, gentle
natural falloff, no zoom-breathing, fixed-focal clarity.
LENS LOCK SEG 1 = begin 107° wide rectilinear (immense environment, straight
horizon, truck tiny, no fisheye), settling toward 84° classic wide as it
closes on the cab. No drift beyond this push.
LENS LOCK SEG 2 = 84° classic wide, low and close, foreground wrecks and
barricades looming and ripping past the lens, immersive speed, straight lines
rectilinear.
LENS LOCK SEG 3 = 47° standard normal side profile, truck and the moving
snow-bulge both readable, grounded perspective.
LENS LOCK SEG 4 = 29° short telephoto, slight compression on the near-miss
claw and the heroes' faces, the monster looming soft behind.
LENS LOCK SEG 5 = 47° standard normal for the launch/flip — natural human-eye
proportions, no distortion as the truck tumbles.
LENS LOCK SEG 6 = 84° classic wide, low ground-level — the truck looms large
rolling toward the lens, foreground snow road across the lower frame, no
fisheye.
```

**Scene 5b — the finished clip on an in-frame TV** (duration must equal the reference clip; the tutorial trimmed Scene 5 to 6s):

```
@video_1 — the footage playing on the TV: on-screen content matches the
source 1:1 — same image, timing, framing, motion and colors, never
reinterpreted, re-edited, cropped, looped early, or replaced.

SCREEN REALISM
The TV picture reads as a real physical panel being filmed, not a clean
digital overlay: the picture sits behind the glass panel and carries a faint
glass sheen and soft glare, dim reflections of the room and window on the
screen surface, a subtle pixel/sub-pixel grid and gentle moiré, slight bloom
on the brightest areas, mild panel contrast and color shift, and a small
off-axis perspective from the side viewing angle. The underlying picture
stays fully recognizable as @video_1.
```

**Scene 6 — Remote close-up (4s macro, 12° FOV, red-arrow annotation on the prop sheet):**

```
ACTION
0.0s–1.0s — the left hand rests on the left thigh holding @REMOTE, thumb
resting on the lower-right face just over the CH-UP chevron (˄) directly
above the "CH" label, where the red arrow points; matte black surface
catching soft cool ambient light.
1.0s–2.0s — the thumb presses the CH-UP chevron (˄) one single time — a
deliberate press, the button giving slightly under the pad, one soft
mechanical click as the channel changes. The thumb stays clear of the VOL
rocker to the left, the navigation pad above, and the CH-DOWN chevron (˅)
below — only CH-UP.
2.0s–4.0s — the thumb lifts off and settles back, the hand resting steady on
the thigh, @REMOTE held still, no further presses.
```

**Scene 8 — Battle: clone-army fix.** v1 used a single-elf STYLE reference and produced identical clones; v2 attached a 4-elf lineup sheet declared a **VARIETY reference**:

```
@elf — VARIETY reference for the elven army: a sheet of FOUR different elves
— men and women, blonde / dark / auburn / silver hair, silver-, gold- and
rose-toned leaf-filigree armor with capes, elven swords. The army is a varied
host drawn from these four types — a mix of men and women with different
faces, hair colors, builds and armor tones, every elf unique, no two alike,
each fighting with a sword and striking only at orcs.
```

Other demonstrated patterns (`PRODUCTION-PATTERNS.md`): reference-role phrases `"100% matches the reference"` (identity), `"STYLE REFERENCE ONLY, not a fixed keyframe; the model extends the world"` (location), `"VARIETY reference"` (crowd); `"Exactly one HARD CUT, at 0:07; otherwise the camera holds still."`; 60:30:10 grade; offscreen voice `(Mother is an offscreen English voice only — no in-frame reference, never enters the shot.)`; "**The TV hand-off:** build the *next* scene's location early and put it on an in-scene TV as the last channel"; "**Generate forward, reverse in the edit.**"; "**Populated-plate reuse.**"; transformations staged off-screen.

---

## 4. Consistency tricks (Soul ID & sheets)

From `skills/higgsfield-soul/SKILL.md`:

- **Identity vs Motion separation (hard rule):** "When Soul ID is active, **every prompt MUST be split into two blocks**" — Identity Block (static descriptors only) and Motion Block (camera/action only).
- **Untouched base:** face pass in close-up, then looks pass; "**the original close-up portrait is never run through a model again.**"
- **Single-prompt 3×2 six-panel sheet** (one 16:9 generation): front body / 3/4 / back / waist-up / hands / face; close with "Identical character identity locked across all six panels. Uniform studio backdrop and lighting across all six panels."
- **Split-panel outfit change:** LEFT ghost-mannequin outfit, RIGHT close-up declared **"face matches input 100%"**.
- **Character Anchor Block** — 10 per-shot attributes: identity, screen position, depth layer, frame occupancy, orientation, pose, gaze, contact points, state lock, expression. Worked example in `templates/seedance/worked-example-two-character.md` (e.g. `Screen position: left third, x-position 30%, y-position 55%, frame occupancy 28%.`).
- **Variety sheets** for crowds; **one Soul ID sheet per state** ("5 transformation stages = 5 distinct sheets").
- Face drifts plastic on wides → crop the face from a closer panel and replace in post; casting a real person → erase heads on body panels, paste the real photo into the portrait panel.

Engine rules (`ENGINE-RULES.md`, all 11): age-blind; intent + named technique not biomechanics; force and direction not destruction sequence; re-anchor after cuts; ≤3 tracked characters; exit-frame = implicit cut; off-screen = nonexistent; avoid reflections; only what can be seen/heard; micro-expressions as physics; **double-contrast cut** ("Every cut changes **both** shot size [...] **and** camera character").

Three "helpful-instinct" drift sources (SKILL.md § POSITIVE LOCKS): environment invention (lock: `"the set contains only what the reference shows — no added furniture, rooms, or geography beyond the reference"`), height equalization (`"she is 165 cm, he is 178 cm"`), scale drift on wides.

Extension/continuation: attach the accepted clip as video reference and open with **"The scene continues."** (prequel: "Show me what happens before"); match resolution **and** duration; "Cap seamless continuation chains at 2 extensions — hard ceiling 3"; re-anchor from ORIGINAL references; break chains with B-roll (`skills/higgsfield-pipeline/SKILL.md`).

---

## 5. Seedance 2.5 specifics

`skills/higgsfield-seedance-2-5/SKILL.md` QUICK FACTS: four modes `t2v` · `omni_reference` · `video_edit` · `video_extension`; Higgsfield surface "**480p/720p only**, duration **4–30s**, no start/end-frame role"; `video_edit` ignores duration/aspect and bills by source length; budget "30 images / 10 videos ≤30s total / 10 audio ≤30s total, 50 materials max"; bracket syntax "`()` music · `<>` SFX · `{}` dialogue · `【】` subtitles"; first/last frames declared in the prompt (`@Image 1 is the first frame`); v2v footage transformation goes through `omni_reference` with the plate attached, source ≥4s, duration = source; "**The four-batch rule** — the same defect across all four batches is a prompt or source fault".

---

## 6. Audio

- Seedance native audio is used for **diegetic dialogue + SFX only**; music is post (12 of 13 harvested projects ban music in-prompt).
- `skills/higgsfield-audio/SKILL.md`: native-joint audio models Kling 3.0, Seedance 2.0/1.5 Pro, Veo 3/3.1, Grok; "Lip-sync is the most failure-prone feature: 3–8s clips, MCU framing, one speaking face, locked camera"; assembly "one master track · cuts land on musical punctuation, never inside a sung vowel"; standalone `seed_audio` (whole-scene dialogue + music + SFX in one pass), `qwen_audio_tts`, `text2speech_v2`.
- Pipeline A audio routing: "existing video + speech → Lipsync Studio; new content with audio → Kling 3.0; talking head → Kling Avatars 2.0".

## 7. Ads / UGC templates in this repo

`templates/02-product-ugc-showcase.md` (Kling 3.0 video / Nano Banana Pro hero image):

```
Model: Kling 3.0 (video) / Nano Banana Pro (image)
Aspect: 16:9 | Duration: 5s | Style: Cinematic commercial

A matte black insulated travel mug, minimal design, no branding.
Placed on a raw concrete countertop beside a morning window.
Camera: Robo Arm arcing slowly from the base up and around to the lid.
Hot coffee pours in — steam rises in a slow macro close-up.
A hand wraps around the mug. Camera: Dolly In to hands + warmth detail.
Style: Cinematic commercial. Warm neutral tones, soft diffused natural light. 16:9.
Sound: gentle liquid pour, soft ceramic texture.
```

Marketing Studio facts (`skills/higgsfield-marketing-studio/SKILL.md`): 4–15s per clip; 9 presets (UGC, Tutorial, Unboxing `ugc_unboxing`, Hyper Motion, Product Review, TV Spot, Wild Card, UGC Virtual Try On, Pro Virtual Try On = `virtual_try_on`); `avatars` must hold exactly one entry ("empty `avatars: []` substitutes a random face per render"); TV Spot has a default packshot ("ABSOLUTELY NO PACKSHOT" when unwanted); no `get_cost` preflight.

---

## 8. Costs, credits, timings (all numbers found)

From `production-benchmarks.md`:

- Hell Grind 90-min: "**108,859 generations** across 14 days", "**9,540,047 credits** consumed (against an original 10M-credit budget set on Day 1)", "**~$400,000 generation cost**", "**~$500,000 total project cost**", "**15-person team**".
- Acceptance: "**roughly 1.0%**" image, "**roughly 1.5%**" video (prior 22-min project: 107 of 10,710 images, 253 of 16,181 videos).
- Per character: ≈800 iterations (600 Soul Cinema + 200 GPT Image 2). Per shot: "**Prompt 21C, a 10-second establishing shot: 72 generations**".
- Credit→$ rates: prior project 1,152,295 credits ≈ $69,000 (~$0.060/credit); Day 4 4,441,352 ≈ $260,000 (~$0.059); wrap 9,540,047 ≈ $400,000 (~$0.042).
- Traditional comparison: ~$50M for the 90-min scope (Russell ~$5M min / Kalin ~$15–20M per 25 min).
- Community flagship: "**13,626 generations for one ~2–3-minute short**", 65–100 generations per kept shot, TESTS = 61% of the project.

Other: Kling 3.0 8s 16:9 std = **16 credits** → ~1,000 credits per kept shot at 1.5% (skills/higgsfield-stack/SKILL.md); Cinema Studio 3.0 video **48 credits/generation**, Soul Cast / Soul Cinema **0.125 credits/image** ("1 credit = 8 images" on-screen); Hero Frame ~1 credit; Soul Cinema ~0.5 credits per 4-image batch; "7 credits buys one GPT Image 2 generation or ~56 Soul Cinema variations"; creature sheet ~40¢; Kling O1 Video Edit ~9 credits, Kling 3.0 ~10 credits; plans Free 25 / Basic $6 (150) / Pro $27 (700) / Ultimate $55 (1,500) credits (`model-guide.md`); Marketing Studio ~$0.06/credit ≈ ~$9 per video (15,000 credits ≈ $900 for 100 videos ≈ 150 credits/video).

## 9. Lessons / pitfalls (repo's own words)

- "**Assets first.** Do not generate a single shot until every character, location, and prop is locked and stress-tested. This one rule saves more money than everything else combined."
- "an image never runs through a model twice in full."
- "If a shot has not come together in 10–15 iterations, **the problem is not the wording.**"
- "**Video prompts are hand-authored.**" (`enhance_prompt` off for video.)
- "480p drafts validate the prompt, NOT the take — no seed param".
- "Never animate a "good enough" image; if the character looks wrong in the Hero Frame, Recast is the fix — not the animation prompt".
- Pipeline E: "15-second cap per scene", "feed the previous scene's video as continuity reference", ">15s per scene degrades prompt adherence — split the scene".
- DISCIPLINE.md: Plausibility-over-verification — the CLI dogfood invented `--aspect-ratio 2.35:1`; "should have run `higgsfield model get kling3_0` first."
