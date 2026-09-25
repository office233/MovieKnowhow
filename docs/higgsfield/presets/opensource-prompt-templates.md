# Open-source prompt templates for Higgsfield (verbatim, attributed)

Every reusable prompt **template** (placeholder skeletons like `[Subject]`, `{var}`, `<...>`) and every fully worked Higgsfield prompt example found in the cloned open-source repos under `../opensource/` is reproduced here **verbatim**, grouped by use case. Each entry gives the source repo, the relative path, the line, a GitHub permalink pinned to the cloned commit, and the license (MIT / CC-BY-4.0 / ISC; keep the attribution when reusing). Selection was scripted: fenced blocks with two or more placeholders across all repos (277 candidates, then non-prompt code such as ffmpeg, Python, schemas and plans was dropped), plus every prompt block in the Higgsfield genre templates, `prompt-examples.md`, the Marketing Studio worked examples, and the Higgsfield entries of the lanshu prompt DB.

**Total templates/examples: 386.** Per category: A. Cinematic film scene **152** · B. Product ad / DTC **46** · C. UGC and creator formats **17** · D. Viral effect / motion graphics **50** · E. Character consistency **57** · F. Transitions, extensions and edits **27** · G. Dialogue / lip-sync **10** · H. Storyboards, shot lists, stills and overlays **27**

Related: [camera-motion.md](camera-motion.md) · [cinema-studio.md](cinema-studio.md) · [marketing-dtc.md](marketing-dtc.md) · [effects-and-styles.md](effects-and-styles.md) · [INDEX.md](INDEX.md)

## Contents
- [A. Cinematic film scene](#a-cinematic-film-scene) (152)
- [B. Product ad / DTC](#b-product-ad--dtc) (46)
- [C. UGC and creator formats](#c-ugc-and-creator-formats) (17)
- [D. Viral effect / motion graphics](#d-viral-effect--motion-graphics) (50)
- [E. Character consistency](#e-character-consistency) (57)
- [F. Transitions, extensions and edits](#f-transitions-extensions-and-edits) (27)
- [G. Dialogue / lip-sync](#g-dialogue--lip-sync) (10)
- [H. Storyboards, shot lists, stills and overlays](#h-storyboards-shot-lists-stills-and-overlays) (27)
- [Other prompt galleries (not copied)](#other-prompt-galleries-not-copied)


## A. Cinematic film scene

### A1. End-to-end example

*Source: **higgsfield-ai-prompt-skill** · `README.md` (line 87) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/README.md#L87 — MIT*

```text
USER:    "Make me a cinematic chase scene through a night market.
          Use my trained Soul character — reference_id abc123."
   ↓
THIS SKILL — higgsfield-ai-prompt-skill
   • routes to higgsfield-prompt + higgsfield-camera + higgsfield-soul
   • picks Kling 3.0 (character-focused, supports --soul-id)
   • applies MCSLA: model, camera preset, subject, look, action
   • appends shared negative constraints
   • outputs a production-grade Higgsfield prompt
   ↓
PRE-FLIGHT (optional, recommended for Veo / Kling / Sora / Seedance video):

   SCHEMA VERIFY (recommended for any model you haven't called recently):
   CLI path:        higgsfield model get kling3_0
                    → returns schema: aspect_ratio enum, duration range,
                      mode/sound options, media roles
   MCP path:        models_explore(action="get", model_id="kling3_0")
                    → returns same schema as CLI

   COST ESTIMATE (no job submitted):
   MCP path:        generate_video(..., get_cost: true)
                    → returns credit cost + adjustments block

   CLI path:        higgsfield generate cost kling3_0 \
                      --prompt "<prompt from this skill>" \
                      --aspect_ratio 16:9 \
                      --duration 8
                    # (add reference flags as needed: --soul-id, --start-image,
                    #  --end-image — consult `higgsfield model get kling3_0`
                    #  for supported media roles)

   Bundled skills:  drop to CLI for the cost check (same auth, same workspace),
                    then invoke /higgsfield:generate

   Optional account checks (same data across surfaces):
   MCP path:        balance / transactions tools
   CLI path:        higgsfield account status
                    higgsfield account transactions --size 50

   Note: 2.35:1 is anamorphic STYLE vocabulary, not a valid Kling 3.0 output
         ratio. Output ratios are platform-bounded: 16:9 / 9:16 / 1:1 only.
   ↓
HIGGSFIELD STACK — one of three execution surfaces:

   CLI path:
     higgsfield generate create kling3_0 \
       --prompt "<prompt from this skill>" \
       --aspect_ratio 16:9 \
       --duration 8 \
       --wait
     # (add reference flags as needed: --soul-id, --start-image, --end-image —
     #  consult `higgsfield model get kling3_0` for supported media roles)

   Bundled skills path:
     /higgsfield:generate — takes the prompt as its --prompt argument,
     formats the CLI call above under the hood

   MCP path (claude.ai web/desktop):
     Claude invokes the Higgsfield connector with the prompt as input
   ↓
USER:    Result URL returned. Iterate if needed (this skill's
         iteration discipline applies regardless of execution surface).
```

### A2. Output Format

*Source: **higgsfield-ai-prompt-skill** · `SKILL.md` (line 278) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/SKILL.md#L278 — MIT*

```text
**Model**: [model name]
**Aspect ratio**: [ratio]  **Duration**: [Xs]  **Style**: [style]

[Prompt]

**Camera**: [camera control name]
**Motion preset** (if used): [preset name]
```

### A3. Output Format

*Source: **higgsfield-ai-prompt-skill** · `SKILL.md` (line 289) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/SKILL.md#L289 — MIT*

```text
### Version 1 — [Style Name]
[Prompt]

---
### Version 2 — [Style Name]
[Prompt]
```

### A4. prompt-examples — Example 1: Vague → Specific (Action)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 58) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L58 — MIT*

```text
A cool action scene in a city at night with a woman running and cameras moving dramatically.
```

### A5. prompt-examples — Example 1: Vague → Specific (Action)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 65) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L65 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A woman in a tactical jacket sprints through a rain-soaked night market,
weaving between stalls. Steam rises from food carts, neon signs fracture in puddles.
Camera: Action Run — low behind her, matching pace.
She slides under a closing metal gate without breaking stride.
Style: Cinematic. Cold blue shadows, warm amber market light, high contrast. 16:9.
```

### A6. prompt-examples — Example 2: Over-Described I2V → Motion-First (Image-to-Video)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 83) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L83 — MIT*

```text
A beautiful woman with long dark hair and brown eyes wearing a red silk dress
is standing on a balcony with a city behind her at sunset. The sky is orange
and pink with some clouds. There are tall buildings in the background. She looks elegant.
```

### A7. prompt-examples — Example 2: Over-Described I2V → Motion-First (Image-to-Video)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 92) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L92 — MIT*

```text
Starting from the provided image as the first frame.
Her hair lifts gently in the evening breeze. She turns her head slowly to the right,
eyes narrowing slightly as if recognizing someone below.
Camera: slow Dolly In toward her profile.
Wind catches the dress fabric. City lights begin flickering on in the distance.
Style: Cinematic, warm golden hour, shallow depth of field.
```

### A8. prompt-examples — Example 3: Slop Words → Observable Controls (Drama)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 108) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L108 — MIT*

```text
An epic cinematic masterpiece shot of a stunning detective in a breathtaking
noir setting. Ultra-realistic 8K quality. Award-winning cinematography.
```

### A9. prompt-examples — Example 3: Slop Words → Observable Controls (Drama)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 116) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L116 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A weathered detective stands at the edge of a rain-soaked harbour dock at night.
An old leather briefcase sits at his feet, open, papers scattered by the wind.
He stares at the horizon, collar turned up against the driving rain.
Harbour lights fracture on the black water below.
Camera: slow Dolly In from medium-wide to medium close-up.
Style: Cinematic. Crushed blacks, single sodium-vapour key light from the right,
cold blue fill, 2.35:1 anamorphic.
```

### A10. prompt-examples — Example 4: Camera Soup → Single Movement (Sci-Fi)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 136) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L136 — MIT*

```text
Camera does a dramatic FPV drone shot while also orbiting the subject
and then crash zooming into their face with a dolly zoom effect.
The camera keeps moving the whole time.
```

### A11. prompt-examples — Example 4: Camera Soup → Single Movement (Sci-Fi)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 145) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L145 — MIT*

```text
Camera: FPV Drone — sweeping through the zero-gravity corridor ahead of the soldier,
debris drifting past on both sides.
```

### A12. prompt-examples — Urban Chase — Night Market

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 183) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L183 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A woman in a tactical jacket sprints through a rain-soaked night market,
weaving between stalls and startled vendors. Steam rises from food carts.
Camera: Action Run — low behind her, matching pace.
A metal gate drops ahead. She slides under it without breaking stride.
Whip Pan to two men in dark coats pushing through the crowd behind her.
Camera: Bullet Time as she leaps from a loading dock onto a moving truck below.
Style: Cinematic. Cold blue shadows, amber market light, high contrast. 16:9.
```

### A13. prompt-examples — Rooftop Fight

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 197) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L197 — MIT*

```text
Model: Sora 2
Aspect: 16:9 | Duration: 10s | Style: Anamorphic

Two silhouettes grapple on a rain-slicked rooftop at night, city spread below them.
Lightning illuminates the scene in strobe flashes.
Camera: FPV Drone circling just outside their reach, catching each exchange of blows.
One figure is thrown backward — slides to the edge, barely catches the ledge.
Camera: Dutch Angle as they hang there, rain hammering down.
Style: Anamorphic. Deep desaturated blue-grey. Lens flare on distant lightning. 2.35:1.
Apply Bullet Time preset at the moment of the throw.
```

### A14. prompt-examples — Underground Parking Pursuit — Seedance 2.0 (Reference-Based)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 212) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L212 — MIT*

```text
Model: Seedance 2.0 (Reference-Based mode)
Aspect: 16:9 | Duration: 8s | Style: Cinematic

[Reference image: hero character — woman, late 20s, charcoal track jacket,
short cropped hair — as the main character]

Style & Mood: cold sodium-vapor underground, deep shadows under concrete pillars,
faint exhaust haze, anamorphic flares on overhead fluorescents.

Dynamic Description: The Soul ID character sprints between two rows of parked
cars, glances back over her shoulder at footsteps gaining behind her, vaults
the hood of a sedan, lands and keeps running toward the ramp at frame right.
Camera tracks low and right, matching her pace, losing and regaining her
between pillars.

Static Description: Underground parking level, concrete pillars, sodium
overhead lighting, scattered parked cars. Wet patches on the floor catch
practical light.

Camera: Low tracking shot, parallel right, following at running pace.

Audio: foregrounded — her breath ragged and close to camera, sneakers
hitting wet concrete with each stride right under the mic, the *snap* of
impact when she lands the vault. Background drops back: a fluorescent
ballast somewhere overhead, footfalls behind her thinned by distance, no
music.
```

### A15. prompt-examples — Hospital Corridor

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 250) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L250 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A man in his 40s walks slowly down a hospital corridor. Fluorescent lights flicker above him.
He stops at a door. Hand on the handle. He doesn't open it.
Camera: slow Dolly In from behind, stopping just over his shoulder as he stands still.
His head drops slightly. A long exhale.
Style: Cinematic. Desaturated, cool blue-white light. 16:9.
```

### A16. prompt-examples — Reunion at the Airport

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 262) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L262 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Super 8MM

Arrivals hall. Crowds moving. A woman in her 30s scans faces, clutching a small sign.
Then — she sees. The sign drops. She moves forward through the crowd.
Camera: slow Arc around the moment they embrace, world blurring behind them.
Style: Super 8MM. Warm grain, soft vignette, lifted shadows. 16:9.
```

### A17. prompt-examples — Zero Gravity Breach

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 317) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L317 — MIT*

```text
Model: Sora 2
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A battle-worn space station corridor, emergency lighting, debris floating in zero gravity.
A soldier in heavy tactical armor pulls herself along a handrail, rifle raised.
Ahead — a sealed blast door, sparking at the seams. She plants a charge and pushes back.
Camera: FPV Drone drifting just ahead of her through the corridor as the charge detonates.
Style: Cinematic, cold steel blue, high contrast. 2.35:1 anamorphic.
Apply Plasma Explosion preset at the detonation moment.
```

### A18. prompt-examples — Cyberpunk Street Level

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 330) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L330 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Cinematic

Ground-level view of a rain-soaked megacity street at night. Neon signs reflect in every puddle.
A figure in a long coat and AR visor walks toward camera, unhurried, through the crowd.
Holographic ads flicker and shift above the stalls on either side.
Camera: Dolly Out slowly as the figure keeps approaching — never quite reaching us.
Style: Cinematic. Deep shadows, neon magenta and cyan, shallow depth of field. 16:9.
```

### A19. prompt-examples — Derelict Station Approach — Seedance 2.0 (Reference-Based)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 343) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L343 — MIT*

```text
Model: Seedance 2.0 (Reference-Based mode)
Aspect: 21:9 | Duration: 10s | Style: Hard Sci-Fi

[Reference image: hero character — figure in a battered EVA suit, helmet
off and clipped to the hip, weathered face, close-cropped grey hair — as
the main character]

Style & Mood: cold blue ambient from a dying station, single warm-amber
emergency strobe, faint particulate haze in zero-g, hard sci-fi palette,
crushed blacks.

Dynamic Description: The Soul ID character drifts forward through a
darkened corridor in zero-g, one gloved hand trailing the bulkhead for
guidance, the other steadying a tethered toolkit. The emergency strobe
flickers across her face every 2 seconds. She pauses at a junction, head
turning slowly toward a flickering panel ahead.

Static Description: Derelict station corridor, exposed conduits along the
ceiling, frost on the bulkhead seams, debris drifting in the foreground,
warning labels half-readable on the walls.

Camera: slow dolly-in following her drift, matching her pace, holding her
in center frame.

Audio: designed, not captured. The suit's life-support fan as a treated
low drone with a 4Hz pulse under it. Hull groans constructed from layered
metal-stress samples, processed for a hollow zero-g signature. The
emergency strobe's relay click as a hard transient, foregrounded each
cycle. Helmet breath EQ'd to the close, internal-mic position. No music.
```

### A20. prompt-examples — Wrong Room

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 384) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L384 — MIT*

```text
Model: Kling 2.6
Aspect: 4:3 | Duration: 8s | Style: VHS

A woman unlocks the door to her apartment. Steps inside. Everything looks normal.
She sets down her keys. Turns toward the kitchen.
Camera: slow Dolly In toward the hallway mirror at the end.
The mirror shows the room — but the couch is against the wrong wall. 
She hasn't moved. The reflection has.
Camera: Dutch Angle as she realizes.
Style: VHS. Desaturated greens, practical light only, slight scan lines. 4:3.
Apply Horror Face preset in the mirror reflection.
```

### A21. prompt-examples — The Sound Below

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 399) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L399 — MIT*

```text
Model: Wan 2.5
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A man stands at the top of a dark basement staircase, holding a flashlight.
The beam cuts down into nothing. A sound below — something shifting.
Camera: Tilt Down following his flashlight beam slowly down the stairs.
At the bottom — the beam hits a rocking chair. Moving on its own. No one in it.
Style: Cinematic low key. Crushed blacks, single practical flashlight beam, near-silence. 16:9.
```

### A22. prompt-examples — Rooftop at Dusk

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 415) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L415 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Cinematic

Two people on a rooftop terrace at dusk, city glowing below them.
They've been talking for hours — coffee cups empty, leaning close.
A long pause. She looks at him.
Camera: Arc slowly around both of them, city blurring behind.
He reaches over and tucks a strand of hair behind her ear.
Style: Cinematic. Golden hour warm tones, shallow depth of field. 16:9.
```

### A23. prompt-examples — Letters on a Train

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 428) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L428 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Super 8MM

A young woman sits alone in a train compartment, reading a letter.
Rain runs down the window beside her. The passing countryside blurs.
She smiles — just slightly — at something on the page.
Camera: Focus Change from the rain on the window to her face.
Style: Super 8MM. Warm grain, soft afternoon light. 16:9.
```

### A24. prompt-examples — Storm Over the Pacific

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 504) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L504 — MIT*

```text
Model: Veo 3
Aspect: 16:9 | Duration: 10s | Style: Cinematic natural

Open ocean at dusk. The horizon is dark with an approaching storm.
Waves are already running ahead of it — three-meter swells, grey-green water.
Camera: Timelapse Landscape as the storm front advances, sky darkening fast.
Lightning inside the clouds. Then the first rain hits the surface.
Style: Cinematic, natural grade, no artificial treatment. 16:9.
```

### A25. prompt-examples — Heron at Dawn

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 516) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L516 — MIT*

```text
Model: Veo 3
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A grey heron stands motionless in a shallow estuary at first light.
Mist on the water. Absolute stillness.
Camera: Dolly In extremely slow — barely perceptible movement toward the bird.
It extends its neck. Holds. Strikes — beak into the water, emerges with a small fish.
Style: Cinematic, natural light, cool blue-grey dawn. 16:9.
```

### A26. prompt-examples — Scene 4 — Snow Leopard Super-Telephoto Zoom (Prompted Imperfection)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 657) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L657 — MIT*

```text
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
never cuts and never leaves its spot. […] The long-lens look stays clearly
realistic and imperfect — visible heat-haze swim, telephoto jitter, soft
mushy grain, all building as it zooms in. […]

[… full prompt also states camera and subject motion separately on a
second-by-second 10s clock, and describes the leopard entirely in-prompt
(no reference sheet) with an every-frame consistency lock.]
```

### A27. prompt-examples — Scene 5 — Truck vs. Snow Monster (Coordinate Blocking + Per-Segment LENS LOCKs)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 698) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L698 — MIT*

```text
FIRST FRAME AND SPATIAL BLOCKING
The first visible frame is an extreme super-wide aerial-height establishing
vista — maximum scope, @truck1 a tiny speck. The truck sits deep background,
left-of-center, x 38%, y 44%, scale tiny (under 4% of frame width), driving
left-to-right at full speed. […] The blizzard wall fills the background
behind and to the left, x 0% to 70%, upper half of frame, advancing rightward
— always behind the truck, never in the open road ahead. No empty plate — the
truck is present and moving left-to-right in frame one. […]
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

[… full prompt also carries SCENE CONTEXT, ACTIVE REFERENCES, LOCATION MAP,
per-segment CAMERA moves, second-by-second ACTION TIMING, PERFORMANCE,
detailed flip PHYSICS (wheels stay mounted, spinning), COLOR GRADE, LIGHTING,
WARDROBE, STYLE, OUTPUT SETTINGS, and POSITIVE LOCKS — see the source blog.]
```

### A28. prompt-examples — Scene 6 — Remote Close-Up (Red-Arrow Annotation + Exactly-One-Press Lock)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 786) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L786 — MIT*

```text
ACTIVE REFERENCES
@REMOTE — matte black household streaming remote. 100% matches the reference.
[…] a CH rocker on the RIGHT (UP chevron ˄ top, "CH" mid, DOWN chevron ˅
bottom). The reference's red arrow points precisely to the CH-UP chevron (˄)
directly above the "CH" label.

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

POSITIVE LOCKS
[…] The thumb presses the CH-UP chevron (˄) directly above "CH" on the
lower-right CH rocker, where the reference red arrow points — exactly ONE
time, a single clear press-and-release, then it lifts off and the hand holds
still. […]
```

### A29. Camera Transfer via @Video Reference

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-camera/SKILL.md` (line 337) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md#L337 — MIT*

```text
Match the camera movement from @Video1. A dancer performs on a rooftop at sunset.
```

### A30. Dual Video Reference

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-camera/SKILL.md` (line 347) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md#L347 — MIT*

```text
Reference @Video1 for the character's movement and choreography.
Reference @Video2 for camera movement only.
A martial artist performs a spinning kick in a dojo.
```

### A31. Smart Mode (Cinema Studio 3.0)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-camera/SKILL.md` (line 363) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md#L363 — MIT*

```text
Genre: Drama. A woman sits alone at a café table, stirring her coffee absently.
She notices someone through the window and her expression shifts from sadness to surprise.
```

### A32. IMAGE MODE Output Format (Cinema Studio 2.5 only)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1121) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1121 — MIT*

```text
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Camera:   [body name]
Lens:     [lens name]
Focal:    [focal length]
Aperture: [aperture]
↳ Why: [one sentence — what this stack gives the image and why]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Scene description only. No camera/lens/aperture language.]
```

### A33. SINGLE SHOT Video Output Format (Cinema Studio 2.5)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1154) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1154 — MIT*

```text
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Genre:      [genre]
Movement:   [Director Panel movement]
Speed Ramp: [mode]
Duration:   [seconds]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Scene description only. No movement, genre, speed ramp, or duration language.]
```

### A34. MULTI-SHOT AUTO Video Output Format (Cinema Studio 2.5)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1188) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1188 — MIT*

```text
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Genre:      [genre]
Movement:   [Director Panel movement — or Auto if varied]
Speed Ramp: [mode]
Duration:   [total seconds]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Full scene description. Let Cinema Studio break it into shots.
No movement, genre, speed ramp, or duration language in here.]
```

### A35. MULTI-SHOT MANUAL Video Output Format (Cinema Studio 2.5)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1223) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1223 — MIT*

```text
━━━ SCENE 1 — [short scene title] ━━━━━━━━━━━━━━━━━━━━━━━
UI SETTINGS
  Genre:      [genre]
  Movement:   [movement]
  Speed Ramp: [mode]
  Duration:   [seconds]

PROMPT
[Scene 1 description only.]

━━━ SCENE 2 — [short scene title] ━━━━━━━━━━━━━━━━━━━━━━━
UI SETTINGS
  Genre:      [genre]
  Movement:   [movement]
  Speed Ramp: [mode]
  Duration:   [seconds]

PROMPT
[Scene 2 description only.]

[...continue for each scene]
```

### A36. IMAGE MODE Output Format (Cinema Studio 3.0)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1306) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1306 — MIT*

```text
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Soul Cast Mode: [General / Character / Location]
Genre:          [genre]
↳ Why: [one sentence — what this combination gives the image and why]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Scene description only. No camera/lens/aperture language — these don't exist in 3.0.]
```

### A37. SINGLE SHOT / SMART Video Output Format (Cinema Studio 3.0)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1320) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1320 — MIT*

```text
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Genre:      [genre — General, Action, Horror, Comedy, Noir, Drama, or Epic]
Shot Mode:  [Smart / Custom]
Movement:   [Director Panel movement — or Smart for auto camera planning]
Speed Ramp: [Auto / Slow-mo / Ramp Up / Flash In / Flash Out / Bullet Time / Hero Moment]
Duration:   [up to 15s]
Audio:      [On / Off]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Scene description only. Use @ to reference uploaded images/video/audio.
No movement, genre, speed ramp, or duration language in here.]
```

### A38. MULTI-SHOT MANUAL Video Output Format (Cinema Studio 3.0)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1358) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1358 — MIT*

```text
━━━ SCENE 1 — [short scene title] ━━━━━━━━━━━━━━━━━━━━━━━
UI SETTINGS
  Genre:      [genre]
  Movement:   [movement]
  Speed Ramp: [Auto / Slow-mo / Ramp Up / Flash In / Flash Out / Bullet Time / Hero Moment]
  Duration:   [seconds]
  Audio:      [On / Off]

PROMPT
[Scene 1 description only. Use @ for references.]
```

### A39. Per-Shot Settings Strip

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1850) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1850 — MIT*

```text
Genre: <genre> · AR: <ratio> · Quality: <480p|720p|1080p> · Duration: <N>s · Shots: <N> · Sound: <On|Off> · Camera: <Body> / <Lens> / <Focal> / <Aperture> · Style: <Auto | preset, preset, preset | Manual>
```

### A40. How to Use This Reference

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-image-shots/SKILL.md` (line 58) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-image-shots/SKILL.md#L58 — MIT*

```text
[Shot keyword] of [img 1 or character description] + [pose/action] + [environment detail] + [lighting/atmosphere]
```

### A41. Image Prompt Formula (for Cinematic Stills)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-image-shots/SKILL.md` (line 432) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-image-shots/SKILL.md#L432 — MIT*

```text
[Shot size] + [Angle] + [Movement keyword] of [img 1 / character description].
[Pose, expression, or action].
[Environment — location, weather, atmosphere].
[Lighting — time of day, source, quality].
[Style — cinematic, film stock, color grade].
```

### A42. Stage 1 — Storyboard with Popcorn

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 439) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L439 — MIT*

```text
Popcorn prompt structure:
"[Character description — be specific and consistent across all Popcorn prompts].
[Scene — location, time, atmosphere].
[Framing — camera angle, shot size, composition].
[Lighting — source, quality, direction].
[Style — film look, color grade, specific cinematographer reference]."
```

### A43. Stage 2 — Image Editing with Seedream

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 487) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L487 — MIT*

```text
Seedream edit prompt structure:
"[What to change, specifically]. [What to keep the same]."

Example:
"Make the elderly man look like a zombie — rotten flesh, white milky eyes,
grey skin tone. Keep all other elements of the image identical."
```

### A44. Stage 3 — Animate by Scene Type

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 515) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L515 — MIT*

```text
"[Starting from the provided image as the first frame.]
[Describe only what MOVES or CHANGES — not what is already visible.]
[Camera — named control.]
[Atmosphere cues — sound, light changes, environmental motion.]
[Style consistency note if needed.]"
```

### A45. Text-to-Video (T2V)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-prompt/SKILL.md` (line 59) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-prompt/SKILL.md#L59 — MIT*

```text
[Subject + appearance].
[Environment — location, time, weather, atmosphere].
[Action — what happens and how].
[Camera — named control].
[Look — style + color grade].
```

### A46. Image-to-Video (I2V)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-prompt/SKILL.md` (line 82) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-prompt/SKILL.md#L82 — MIT*

```text
[Reference the input image as the first frame].
[Describe what should move, change, or animate — not what is already visible].
[Camera — named control].
[Style/atmosphere cues].
```

### A47. Recipe 1: Action / Chase

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 30) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L30 — MIT*

```text
[Subject description — clothing, build, energy] sprints through [environment].
Camera: Action Run — low behind them, matching pace.
[Obstacle appears — what is it]. They [dodge action], barely clearing it.
The camera Whip Pans to [pursuer/threat].
Bullet Time as [climax action — punch, leap, collision].
Style: Cinematic, high contrast, [warm/cold] tones. [Aspect ratio].
```

### A48. Recipe 1: Action / Chase

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 40) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L40 — MIT*

```text
A woman in a tactical jacket sprints through a rain-soaked night market,
weaving between stalls and startled vendors.
Camera: Action Run — low behind her, matching her sprint.
A metal gate drops ahead. She slides under it without breaking stride.
Whip Pan to the two men pursuing her through the crowd.
Bullet Time as she leaps from a loading dock onto a moving truck below.
Style: Cinematic, cold blue shadows, amber market light. 16:9.
```

### A49. Recipe 2: Emotional Drama / Character Moment

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 60) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L60 — MIT*

```text
[Character — appearance, posture, state] is in [intimate environment].
[What they are doing — quiet action revealing emotion].
Camera: slow Dolly In toward [their face / hands / significant object].
[Something shifts — they react, realize, remember].
Style: [Cinematic / Super 8MM], [lighting — golden / overcast / practical only].
[Color grade — warm/cool, contrast level].
```

### A50. Recipe 2: Emotional Drama / Character Moment

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 70) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L70 — MIT*

```text
A man in his 60s sits alone at a kitchen table. An old letter in his hands.
He reads slowly, lips barely moving, eyes growing distant.
Camera: slow Dolly In toward his face.
He looks up at the empty chair across from him.
Style: Cinematic. Warm late-afternoon window light, soft shadows.
Slightly desaturated. 16:9.
```

### A51. Recipe 4: Sci-Fi / Futuristic

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 121) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L121 — MIT*

```text
[Futuristic environment — city, facility, space, wasteland].
[Character — description, what they wear, what they carry].
[The situation — what's happening, what's the threat or goal].
Camera: [movement choice — crane up / FPV / orbit].
[Key visual moment — tech activating, weapon firing, transformation].
Style: [Cinematic / Anamorphic], [cold blue / neon / desaturated orange]. [Ratio].
Apply [motion preset] at [moment in scene].
```

### A52. Recipe 4: Sci-Fi / Futuristic

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 132) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L132 — MIT*

```text
A battle-worn space station corridor, flickering lights, debris floating in zero gravity.
A soldier in heavy tactical armor drifts along a handrail, rifle raised.
Ahead — a door sealed shut, sparking at the edges.
Camera: FPV Drone drifting ahead of her through the corridor.
She plants an explosive charge. Steps back. Detonation.
Style: Cinematic, cold steel blue, 2.35:1 anamorphic.
Apply Plasma Explosion preset at the moment of detonation.
```

### A53. Recipe 5: Horror / Supernatural

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 153) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L153 — MIT*

```text
[Ordinary setting made unsettling — house, street, hospital].
[Character — alone, unaware].
[Wrong detail appears — something that shouldn't be there].
Camera: slow Dolly In toward [the wrong thing].
[Character notices. Reaction.] Camera: Dutch Angle.
Style: [VHS / Cinematic low key], [sickly tones / crushed blacks].
Apply [Horror Face / Raven Transition] preset at the reveal moment.
```

### A54. Recipe 5: Horror / Supernatural

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 164) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L164 — MIT*

```text
An empty suburban house at night. Every light on, but no one visible through the windows.
A woman walks up the front path, keys in hand.
She stops. The front door is already open — just an inch.
Camera: slow Dolly In toward the open door crack.
She pushes it open. The hallway is exactly as she left it. Except the mirror at the end
shows a room that doesn't match. Camera: Dutch Angle.
Style: VHS, desaturated greens, practical light only, 4:3.
Apply Horror Face preset in the mirror reflection.
```

### A55. Recipe 6: Romance / Intimate

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 185) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L185 — MIT*

```text
[Two characters — brief appearance note each].
[Setting — intimate, warmly lit, specific].
[The moment — what are they doing, what is the tension].
Camera: [Arc / Dolly In / Kiss control].
[The beat — a look, a touch, a word].
Style: [Cinematic / Super 8MM], [warm golden / soft overcast] light. [Ratio].
```

### A56. Recipe 6: Romance / Intimate

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 195) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L195 — MIT*

```text
Two people stand on a rooftop terrace at dusk, city glowing below them.
They've been talking for hours — coffee cups empty, leaning toward each other.
A long silence. She looks at him.
Camera: Arc slowly around both of them, city blurring behind.
He reaches over and tucks a strand of hair behind her ear.
Style: Cinematic. Golden hour warm tones, shallow depth of field. 16:9.
```

### A57. Recipe 7: Documentary / Nature

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 214) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L214 — MIT*

```text
[Location — specific, vivid, real-feeling].
[Subject — animal, person, phenomenon].
[What is happening — natural behavior, unposed].
Camera: [observational movement — slow pan, timelapse, crane].
[Detail moment — close-up of something specific and visually striking].
Style: Cinematic, natural grade, [time of day], [weather]. [Ratio].
No artificial effects — pure observational documentary feel.
```

### A58. Recipe 7: Documentary / Nature

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 225) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L225 — MIT*

```text
A fog-covered estuary at dawn. Herons standing motionless in the shallows.
One extends its neck. Still. Then strikes — beak in the water, pulls out a small fish.
Camera: Timelapse Landscape as the fog burns off over 10 minutes.
Close-up: water droplets on feathers catching first light.
Style: Cinematic, natural light, neutral grade. 16:9.
```

### A59. The Core Prompt Formula

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/SKILL.md` (line 142) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/SKILL.md#L142 — MIT*

```text
<Subject> performs <primary action or event> in <scene and environment>.
The visuals feature <visual style>.
Use <shot size, camera angle, camera movement, or cuts>.
Audio includes <dialogue, ambience, sound effects, or music>.
```

### A60. Long Video — Stages and End States

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/SKILL.md` (line 318) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/SKILL.md#L318 — MIT*

```text
[Generation Goal]
Generate a <video type>. The central subject is <subject>, and the primary event is <story summary>.

[Stage 1]
Initial state: <initial state of characters, props, and scene>.
Primary event: <one primary action or event>.
End state: <character positions, prop ownership, or visible scene state>.

[Stage 2]
Continue from the previous stage: <state that must remain unchanged>.
Primary event: <one primary action or event>.
End state: <observable state>.

[Stage 3]
Primary event: <closing event>.
End state: <final visible state>.

[Maintain Consistency]
Keep <character identity, number of characters, clothing, prop ownership, spatial direction,
and audio relationships> consistent.
```

### A61. Emotional Direction and Camera Terms

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/SKILL.md` (line 523) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/SKILL.md#L523 — MIT*

```text
The overall emotion shifts from <starting emotion> to <ending emotion>.
After <triggering event>, <subject> first shows <immediate observable reaction>.
Then, <eyes, brows, mouth, breathing, gaze, or hand movement> gradually <changes>.
Finally, <subject> expresses <target emotion> through <restrained or explicit outward behavior>.
```

### A62. Cinematic

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 27) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L27 — MIT*

```text
Example: A detective walks through a night market.
Style: Cinematic. Cold blue shadows, warm amber market stall light.
Shallow depth of field. 16:9.
```

### A63. VHS

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 42) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L42 — MIT*

```text
Example: Teenagers at a house party in 1987.
Style: VHS. Warm, grainy, slightly overexposed. 4:3 ratio.
```

### A64. Super 8MM

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 56) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L56 — MIT*

```text
Example: A couple dancing in a sunlit backyard in the 1970s.
Style: Super 8MM. Warm grain, soft vignette edges. 4:3.
```

### A65. Anamorphic

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 71) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L71 — MIT*

```text
Example: An army marches across a frozen plain at dawn.
Style: Anamorphic, 2.35:1. Deep blue-grey tones. Lens flare on the rising sun.
```

### A66. Abstract

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 85) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L85 — MIT*

```text
Example: Fractured geometric shapes pulse to music in a void.
Style: Abstract. Electric blue and magenta on black. 1:1 ratio.
```

### A67. Style Transfer via @Reference

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-style/SKILL.md` (line 195) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md#L195 — MIT*

```text
Match the visual style, color grading, and film texture of @Video1.
A woman walks through autumn leaves in a park.
Camera: slow tracking alongside her.
```

### A68. Template 01-cinematic-action-chase — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/01-cinematic-action-chase.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/01-cinematic-action-chase.md#L14 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A woman in a tactical jacket sprints through a rain-soaked night market,
weaving between stalls and startled vendors. Steam rises from food carts.
Neon signs fracture in every puddle.
Camera: Action Run — low behind her, matching pace.
A metal gate drops ahead. She slides under it without breaking stride.
Style: Cinematic. Cold blue shadows, warm amber market light, high contrast. 16:9.
```

### A69. Template 01-cinematic-action-chase — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/01-cinematic-action-chase.md` (line 64) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/01-cinematic-action-chase.md#L64 — MIT*

```text
Reference @Video1 for chase choreography and pacing.
A woman sprints through a rain-soaked night market, sliding under a metal gate.
Gravel sprays, steam scatters from food carts. Camera: tracking, low angle.
Style: cold blue shadows, warm amber market light.
```

### A70. Template 03-horror-atmosphere — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/03-horror-atmosphere.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/03-horror-atmosphere.md#L14 — MIT*

```text
Model: Kling 3.0
Aspect: 4:3 | Duration: 8s | Style: VHS

A woman unlocks the door to her apartment. Steps inside. Everything looks normal.
She sets down her keys. Turns toward the kitchen.
Camera: slow Dolly In toward the hallway mirror at the end.
The mirror shows the room — but the couch is against the wrong wall.
She hasn't moved. The reflection has.
Camera: Dutch Angle as she realizes.
Style: VHS. Desaturated greens, practical light only, slight scan lines. 4:3.
Apply Horror Face preset in the mirror reflection.
```

### A71. Template 03-horror-atmosphere — Identity Block (if using Soul ID character)

*Source: **higgsfield-ai-prompt-skill** · `templates/03-horror-atmosphere.md` (line 54) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/03-horror-atmosphere.md#L54 — MIT*

```text
The Soul ID character — pale complexion, dark circles under eyes, wearing
a grey oversized sweater, dark hair loose.
```

### A72. Template 03-horror-atmosphere — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/03-horror-atmosphere.md` (line 60) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/03-horror-atmosphere.md#L60 — MIT*

```text
She steps inside, sets down her keys. Turns toward the kitchen.
Camera: slow Dolly In toward the hallway mirror.
Dutch Angle as she freezes.
```

### A73. Template 03-horror-atmosphere — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/03-horror-atmosphere.md` (line 79) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/03-horror-atmosphere.md#L79 — MIT*

```text
@Image1 as the corridor environment. A figure appears at the far end, barely visible.
Floorboards creak. The lights flicker once, twice. Camera: slow dolly push.
Style: desaturated, single practical light source, deep shadows.
Audio: distant dripping, wood creaking, a breath that isn't the viewer's.
```

### A74. Template 04-fashion-editorial — Identity Block

*Source: **higgsfield-ai-prompt-skill** · `templates/04-fashion-editorial.md` (line 15) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/04-fashion-editorial.md#L15 — MIT*

```text
The Soul ID character — angular jawline, dark skin, close-cropped natural hair.
Wearing a structured black wool overcoat, wide-leg trousers, white minimalist sneakers.
Silver chain necklace. Hands in pockets.
```

### A75. Template 04-fashion-editorial — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/04-fashion-editorial.md` (line 22) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/04-fashion-editorial.md#L22 — MIT*

```text
She walks slowly toward camera down an empty concrete corridor.
Camera: Dolly Out — retreating as she advances, never quite letting her fill the frame.
Style: Cinematic. High contrast, desaturated cool tones, single overhead strip light
casting a hard shadow. 2.35:1 anamorphic.
```

### A76. Template 04-fashion-editorial — Combined prompt (for non-Soul ID use)

*Source: **higgsfield-ai-prompt-skill** · `templates/04-fashion-editorial.md` (line 30) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/04-fashion-editorial.md#L30 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A woman with angular jawline, dark skin, and close-cropped natural hair walks slowly
toward camera down an empty concrete corridor. She wears a structured black wool overcoat,
wide-leg trousers, white minimalist sneakers. Silver chain necklace. Hands in pockets.
Camera: Dolly Out — retreating as she advances.
Style: Cinematic. High contrast, desaturated cool tones, single overhead strip light. 2.35:1.
```

### A77. Template 04-fashion-editorial — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/04-fashion-editorial.md` (line 76) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/04-fashion-editorial.md#L76 — MIT*

```text
@Image1 as the model's character reference. She turns slowly on a rooftop at golden hour,
silk jacket catching the wind. Camera: smooth 180-degree orbit.
Style: warm tones, shallow depth of field, anamorphic.
Audio: fabric rustling, distant city ambience.
```

### A78. Template 05-sci-fi-vfx — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/05-sci-fi-vfx.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/05-sci-fi-vfx.md#L14 — MIT*

```text
Model: Sora 2
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A battle-worn space station corridor, emergency lighting, debris floating in zero gravity.
A soldier in heavy tactical armor pulls herself along a handrail, rifle raised.
Ahead — a sealed blast door, sparking at the seams. She plants a charge and pushes back.
Camera: FPV Drone drifting just ahead of her through the corridor as the charge detonates.
Style: Cinematic, cold steel blue, high contrast. 2.35:1 anamorphic.
Apply Plasma Explosion preset at the detonation moment.
```

### A79. Template 05-sci-fi-vfx — Identity Block (if using Soul ID character)

*Source: **higgsfield-ai-prompt-skill** · `templates/05-sci-fi-vfx.md` (line 56) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/05-sci-fi-vfx.md#L56 — MIT*

```text
The Soul ID character — scarred face, shaved head, tactical body armor with shoulder-mounted
flashlight, dark under-eye fatigue, determined expression.
```

### A80. Template 05-sci-fi-vfx — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/05-sci-fi-vfx.md` (line 62) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/05-sci-fi-vfx.md#L62 — MIT*

```text
She pulls herself along a handrail in zero gravity, rifle raised.
Plants a charge on the blast door. Pushes back.
Camera: FPV Drone drifting ahead through the corridor.
Apply Plasma Explosion preset at detonation.
```

### A81. Template 05-sci-fi-vfx — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/05-sci-fi-vfx.md` (line 76) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/05-sci-fi-vfx.md#L76 — MIT*

```text
@Image1 as the environment concept. A spacecraft descends through storm clouds,
hull glowing from atmospheric friction. Debris scatters. Lightning illuminates the landing zone.
Camera: crane down tracking the descent. Style: anamorphic, teal and orange grade.
Audio: deep engine rumble, crackling electricity, wind shear.
```

### A82. Template 07-landscape-establishing-shot — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/07-landscape-establishing-shot.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/07-landscape-establishing-shot.md#L14 — MIT*

```text
Model: Veo 3.1
Aspect: 16:9 | Duration: 10s | Style: Cinematic natural

Open ocean at dusk. The horizon is dark with an approaching storm.
Waves are already running ahead of it — three-meter swells, grey-green water.
Camera: Timelapse Landscape as the storm front advances, sky darkening fast.
Lightning inside the clouds. Then the first rain hits the surface.
Style: Cinematic, natural grade, no artificial treatment. 16:9.
```

### A83. Template 07-landscape-establishing-shot — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/07-landscape-establishing-shot.md` (line 62) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/07-landscape-establishing-shot.md#L62 — MIT*

```text
@Image1 as the landscape reference. Dawn breaks over the volcanic ridge,
mist pouring through the caldera. Birds scatter from the tree line.
Camera: crane up revealing the full valley. Style: natural color, deep depth of field.
Audio: wind across open terrain, distant bird calls, rushing water below.
```

### A84. Template 09-romantic-intimate — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/09-romantic-intimate.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/09-romantic-intimate.md#L14 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 8s | Style: Cinematic

Two people on a rooftop terrace at dusk, city glowing below them.
They've been talking for hours — coffee cups empty, leaning close.
A long pause. She looks at him.
Camera: Arc slowly around both of them, city blurring behind.
He reaches over and tucks a strand of hair behind her ear.
Style: Cinematic. Golden hour warm tones, shallow depth of field. 16:9.
Ambient: quiet city hum, distant traffic, gentle wind.
```

### A85. Template 09-romantic-intimate — Identity Block (Character A)

*Source: **higgsfield-ai-prompt-skill** · `templates/09-romantic-intimate.md` (line 57) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/09-romantic-intimate.md#L57 — MIT*

```text
A woman in her early 30s, dark wavy hair, wearing a light linen jacket,
delicate silver earrings. Relaxed posture, feet tucked under her on the chair.
```

### A86. Template 09-romantic-intimate — Identity Block (Character B)

*Source: **higgsfield-ai-prompt-skill** · `templates/09-romantic-intimate.md` (line 63) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/09-romantic-intimate.md#L63 — MIT*

```text
A man in his early 30s, short beard, kind eyes, wearing a soft navy sweater
with the sleeves pushed up. Leaning forward slightly, elbows on his knees.
```

### A87. Template 09-romantic-intimate — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/09-romantic-intimate.md` (line 69) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/09-romantic-intimate.md#L69 — MIT*

```text
A long pause. She looks at him.
Camera: Arc slowly around both of them.
He reaches over and tucks a strand of hair behind her ear.
Ambient: quiet city hum, distant traffic, gentle wind.
```

### A88. Template 09-romantic-intimate — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/09-romantic-intimate.md` (line 83) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/09-romantic-intimate.md#L83 — MIT*

```text
@Image1 as Character A. @Image2 as Character B.
They walk along a beach at sunset, waves lapping at their feet.
She laughs, he reaches for her hand. Camera: slow tracking alongside.
Style: golden hour, warm tones, shallow depth of field, Super 8MM grain.
Audio: waves, sand underfoot, distant seagulls, soft laughter.
```

### A89. Worked anime prompts

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/anime-animation.md` (line 135) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/anime-animation.md#L135 — MIT*

```text
In an epic sakuga anime animation, generate an unexpected transformation of
[character] into [describe]. Professional sound effects and motion, accurate
lighting, detailed close-ons. Average shot length ~2 seconds, around 7
scenes. Background should be [..] (check reference images).

[paste anime style block]
[paste IP-safe constraint line]
```

### A90. Default prefix block (fill in the blanks, then freeze)

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/global-style-prefix.md` (line 30) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/global-style-prefix.md#L30 — MIT*

```text
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

### A91. Per-scene override example (Scene 2 / sunny stadium)

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/global-style-prefix.md` (line 112) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/global-style-prefix.md#L112 — MIT*

```text
Lighting: Natural light only — bright, genuinely sunny midday, strong direct sunlight from high and frontal (sun in front of and above the subject, behind the camera), deep blue sky, crisp hard-edged shadows, vivid saturated colour, low haze.
```

### A92. PRE-PROMPT CONFIRMATION RULE

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 66) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L66 — MIT*

```text
Pre-prompt check:
- **References attached:** [list every reference image the user uploaded for this scene by short visual descriptor. If none attached, write "none — pure text composition."]
- **Mode:** [M1 Narrative / M2 Studio / M3 Action / M4 Performance / M5 Atmospheric]
- **Scene:** [one-line scene description]
- **Characters:** [who's in frame, abbreviated by visual marker; or "none / environment plate"]
- **Frame Map:** [one-line compositional read — where each character sits, depth layer, eyeline]
- **Camera:** [lens length, key movement — e.g., "55mm anamorphic, handheld with operator breath"]
- **Runtime:** [Xs, single shot, OR Xs, [N]-shot sequence with per-shot beats]

Sound good?
```

### A93. CAPTURE REALISM BLOCK (LOCKED — THE REAL-FOOTAGE ENGINE)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 410) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L410 — MIT*

```text
Capture Realism: [Foreground subject] sits inside real depth — [thin/light/heavy] atmosphere suspended in the air between camera, subject, and [the far background element], the background rendered softer, desaturated, and lower-contrast than the foreground so the figure sits within the air rather than pasted on a flat plane. [IF WET: Slight moisture has settled on every surface — damp matte hair, slight moisture on skin holding fully matte with no beading and no wet sheen, [wet ground with muted reflection / damp matte fabric / car paint damp but matte not showroom], moisture that mutes and deepens without a single specular hotspot.] Skin reads true cinematic matte — zero shine on forehead, nose bridge, cheekbones, temples, chin, and collarbones, real peach fuzz catching light at the jaw and hairline, real soft fine even pore texture, light absorbed like true subsurface scattering, warmth preserved and natural, slightly desaturated but never pale or washed-out or cool-shifted, never plastic, never doll-skin, never AI-rendered, and never harsh — no acne, no blemishes, no enlarged or rough pores, fine flattering texture that keeps the face looking good. Low-contrast curve — shadows lifted gently holding texture, highlights rolled off softly never clipping to white, nothing crushed to black. All specular highlights surgically removed from skin, hair, fabric, and surrounding surfaces, every pixel reading matte and diffuse. Slightly desaturated grade with warmth preserved.
```

### A94. MODE 1 — NARRATIVE (Real-World, Lived-In)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 455) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L455 — MIT*

```text
Camera Capture: wide-latitude cinema capture, vintage [XX]mm 2x anamorphic character at a wide aperture — oval bokeh, soft frame-edge falloff — light diffusion bloom softening highlights, handheld with natural operator breath, color-negative daylight film rendition with fine 35mm grain, teal-amber grade, shallow depth of field, 24fps 180° shutter, [XX] seconds.
```

### A95. MODE 2 — STUDIO / EDITORIAL (Crafted, Not Photographed)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 481) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L481 — MIT*

```text
Camera Capture: wide-latitude cinema capture, clean spherical [XX]mm character at a wide aperture — natural round bokeh, even sharpness — mild diffusion bloom, locked tripod with optional slow push-in, saturated editorial grade, fine grain, warm-retained blacks, 24fps 180° shutter, [XX] seconds.
```

### A96. MODE 3 — ACTION / COMBAT (Documentary-Sci-Fi)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 495) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L495 — MIT*

```text
Camera Capture: wide-latitude cinema capture, vintage [XX]mm 2x anamorphic character at a wide aperture — oval bokeh, soft edge falloff — light diffusion bloom softening highlights, handheld and shaky throughout with no stabilized shots, color-negative film rendition with heavier low-light grain, [palette descriptor] with dusty atmospheric haze, 24fps 180° shutter, [XX] seconds.
```

### A97. MODE 4 — PERFORMANCE / CONCERT (Pit-Photographer Documentary)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 511) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L511 — MIT*

```text
Camera Capture: wide-latitude cinema capture, vintage [XX]mm 2x anamorphic character at a wide aperture — oval bokeh, horizontal streak flares on stage lights — light diffusion bloom softening highlights, mixed handheld pit-photographer and orbital operator energy with hard cuts between angles, color-negative film rendition with fine grain, [stage-lighting color cast], heavy volumetric haze, real sweat sheen, 24fps 180° shutter, [XX] seconds.
```

### A98. MODE 5 — ATMOSPHERIC / EMPTY (Environment & Mood)

*Source: **ai-film-pipeline** · `cinema-worldbuilder/SKILL.md` (line 527) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/cinema-worldbuilder/SKILL.md#L527 — MIT*

```text
Camera Capture: wide-latitude cinema capture, vintage [XX]mm 2x anamorphic character at a wide aperture — oval bokeh, soft edge falloff — light diffusion bloom softening highlights, locked-off or extremely slow push-in only, color-negative film rendition with fine grain, palette grade [hex values], atmospheric haze, weathered material detail, 24fps 180° shutter, [XX] seconds. No humans, environment is the subject.
```

### A99. 4.3. Haute couture fashion film

*Source: **awesome-seedance-2.5-prompts** · `README.md` (line 350) — https://github.com/forgewebO1/awesome-seedance-2.5-prompts/blob/14484c5/README.md#L350 — CC-BY-4.0*

```text
[Overall style setting] A cinematic and high-quality 30-second haute couture visual blockbuster that emphasizes "Bokeh" light spots, silky motion blur, volumetric lighting, and ultra-realistic material details. [Description of the shot] [0-5 seconds]: Dream Prologue and Macro Close-up Macro close-ups of extremely high image quality. A slender hand reaches into the air, its fingertips touching colorful light spots as bright as stars. As the light and shadow flow, it seamlessly and silkily transforms to an elegant woman in a pure white tulle skirt, who is intoxicated playing a retro piano. The depth of the field is shallow, and the background is blurred into a beautiful blue-green tone. [5-15 seconds]: Then cut into the smooth follow shot: a woman in a French wide-brimmed straw hat and a flowing white dress runs lightly through a dense flower path full of pink-orange roses and blue hydrangeas. The light shines through the leaves with mottled light and shadow, perfectly revealing the soft breeze, the real-life physics of the skirt fabric fluttering, and the hyper-realistic texture of the petals. [15-24 seconds]: Quiet aesthetics and light and shadow refraction The rhythm of the camera slows down and enters the ultimate beautiful slow-motion. A young girl sits at the black wrought iron table next to the European retro gold fountain and reads quietly. There are crystal clear soap bubbles floating in the air, and the surface of the bubbles perfectly reflects the surrounding flowers and warm sunlight. The moment the water droplets splash is clearly visible, showing the model's top rendering ability for transparent materials, water refraction and complex lighting.
```

### A100. 8a) Without dialogue

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/video-prompt.md` (line 88) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
Create a [duration] cinematic video.

Reference:
Use the uploaded storyboard/image as the exact visual and timing reference if provided.

Subject:
[subject]

Scene:
[scene]

Style:
[style]

Rules:
- Follow the shot order exactly if a storyboard is provided
- Each panel is one separate cinematic shot beat if a storyboard is provided
- Maintain character, outfit, environment, lighting, and prop continuity
- No dialogue
- No subtitles
- No text on screen
- No background music
- Natural sound design only
- Do not mention aspect ratio

Shot Sequence:
[00:00–00:01.5]
SHOT 1 - [title]
[action, camera, emotion, movement]

[00:01.5–00:03.0]
SHOT 2 - [title]
[action, camera, emotion, movement]
[continue until complete]

Camera:
[wide/medium/close-up/overhead/tracking/low angle/hero shot details]

Audio:
Natural sound effects only: [environment sounds, movement sounds, object sounds, breathing, ambience]. No background music.

Negative:
No background music, no subtitles, no text on screen, no watermark, no logo, no UI, no aspect ratio, no extra story events, no extra characters unless requested, no identity drift, no style drift, no costume drift, no environment drift.
```

### A101. 8c) Matching video prompt from a storyboard

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/video-prompt.md` (line 187) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
Use the uploaded storyboard image as the exact shot structure, timing, framing, and sequence reference.

Create a [duration] cinematic video that follows the storyboard panel order exactly. Each panel is one separate cinematic shot beat. Do not reinterpret the storyboard as one single scene.

Preserve:
- Same character identity
- Same outfit and proportions
- Same environment
- Same lighting direction
- Same visual style
- Same props and story continuity

Rules:
- Follow the storyboard exactly
- Each panel is one separate cinematic shot beat
- Maintain continuity across every shot
- Do not mention aspect ratio
- No background music

Shot Sequence:
1. [shot 1]
2. [shot 2]
3. [shot 3]
[continue until all shots are complete]

Camera:
Follow the storyboard camera logic exactly. Use smooth connected motion between shots where appropriate.

Style:
[style details]

Audio:
Natural sound design only. No background music. Use realistic environmental sounds, movement sounds, breathing, impacts, footsteps, fabric, atmosphere, or object sounds as needed.

Dialogue:
[No dialogue / or include dialogue per shot]

Negative:
No background music, no subtitles, no text on screen, no watermark, no logo, no UI, no aspect ratio, no extra characters, no story events outside the storyboard, no identity drift, no style drift, no costume drift, no environment drift.
```

### A102. Prompt Construction Master Template

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 28) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L28 — MIT*

```text
[OPENING HOOK — 2 seconds maximum]
[Hook Technique from Hook Table]
[Describe specific sensory trigger]
[Transition to main action at 2-second mark]

[ESTABLISHING CONTEXT — 1–2 seconds]
[Location description: geography, architecture, atmosphere]
[Lighting setup from Lighting Library]
[Color grading approach]
[Time of day / season / weather mood]

[PRIMARY ACTION / NARRATIVE — 3–8 seconds depending on total length]
[Camera movement from Camera Encyclopedia]
[Character action or environmental change]
[Emotional arc or tension point]
[Dialogue/audio integration points]
[Visual progression: beginning → middle → climax → resolution]

[DEPTH & COMPOSITION]
[Foreground element description]
[Mid-ground action or location detail]
[Background environmental context]
[Depth cues: atmospheric perspective, focus layers, scale indicators]

[CAMERA SPECIFICATIONS]
[Focal length equivalent: 24mm ultrawide, 35mm standard, 50mm portrait, 85mm closeup, 200mm telephoto]
[Depth of field: f/1.4 shallow, f/2.8 moderate, f/8 deep]
[Camera movement speed: feet/second or Hz for rotation]
[Focus behavior: locked, breathing, racking]

[LIGHTING SPECIFICATIONS]
[Key light intensity and direction (clock position)]
[Fill light ratio (3:1 standard, 5:1 dramatic)]
[Back/rim light presence and intensity]
[Color temperature in Kelvin]
[Shadow characteristics: hard-edged or soft, blue or warm-tinted]

[AUDIO INTEGRATION]
[@material[audio_file_name] if audio provided]
[Dialogue delivery instruction if applicable]
[Music beat alignment]
[Sound effect timing and intensity]
[Silence moments for contrast]

[PACING INSTRUCTION]
[Timing of cuts/transitions]
[Velocity of movement: fast/medium/slow]
[Hold durations on key frames]

[MOOD & ATMOSPHERE]
[Emotional target: tense, romantic, awe-struck, comedic, melancholic]
[Atmosphere elements: fog, rain, particles, dust]
[Grain/texture specification]
[Viewer psychological state you're creating]

[REFERENCE MATERIALS]
[List uploaded reference images: @material[image_name]]
[Specific compositional elements to adopt from references]
[Mood/color/style references]

[OUTPUT SPECIFICATION]
[Total duration: 4–15 seconds]
[Aspect ratio: 16:9 widescreen, 9:16 vertical, 1:1 square]
[Audio: synchronized with video, specified file]
```

### A103. 15-Second Video Structure (Full Narrative Arc)

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 192) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L192 — MIT*

```text
"15-second cinematic narrative. 0–2s: Hook moment. [Describe specific
2-second hook technique]. 2–4.5s: Establishing wide shot of [location].
Camera position: 50 feet back, 24mm equivalent lens. Slow pan at 2 ft/s
revealing environmental scale. Warm three-point lighting setup.
4.5–7s: Introduce protagonist through medium shot. Camera dolly forward
2 feet at 2.5 ft/s. Depth of field: f/2.8 moderate shallow. Show
character's face emotion, gesture intention. 7–10s: Action escalates..."
[Continue with rising action, climax, resolution structure]
```

### A104. Example 1: Film Noir Detective Scene

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 214) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L214 — MIT*

```text
CINEMATIC PROMPT — NOIR DETECTIVE MOMENT

[OPENING HOOK — 0 to 2 seconds]
Black screen complete silence. At 0.8s, explosion of cool blue light
from frame-left corner. Single harsh 5000K light source suggests cold
fluorescent or warehouse industrial fixture. Light burst creates extreme
hard-edged shadow across center of frame. Viewer moment of disorientation
as light invades blackness.

[ESTABLISHING CONTEXT — 2 to 4 seconds]
Location: 1940s noir warehouse interior, cool grey concrete, visible metal
beams overhead. Camera positioned 40 feet back, low angle 15 degrees
looking up. Focal length: 35mm equivalent cinema lens. Lighting setup:
high-contrast chiaroscuro. Single hard 3000K key light from upper-left
at 60 degrees, creating extreme shadow pattern across floor. Minimal fill
light (15% intensity). Film grain visible, 35mm stock aesthetic.

[PRIMARY ACTION — 4 to 8 seconds]
Camera slow dolly forward at 1.5 feet/second. Maintain low angle.
As camera approaches, silhouette of detective figure materializes in
shadow-pool center-frame. Figure stands motionless. At 5.5 seconds,
detective's face catches edge of overhead light. Eye glint visible in
shadow. Subtle head turn. At 6 seconds, detective pulls cigarette from
pocket (silhouette action).

[DEPTH & COMPOSITION]
Foreground: concrete floor texture visible, harsh light striations.
Mid-ground: detective silhouette in center shadow. Background: metal
beam structure, wall texture in deep shadow. Composition asymmetrical:
figure right-of-center, 70% of frame shadow, 30% illuminated. Negative
space emphasizes isolation.

[CLIMAX MOMENT — 8 to 10 seconds]
At 8 seconds, detective lights cigarette (small flame visible near face).
Light suddenly reveals weathered face expression — grim, weary. At 8.3s,
second light source (desk lamp, practical) flicks on frame-right. Creates
two-source lighting with conflicting shadows. Detective turns toward
camera-left. At 9.5s, fade to black. Single remaining light creates
silhouette profile.

[CAMERA & TECHNICAL SPECS]
Depth of field: f/2.0 shallow, creating separation between planes.
Focus locked on detective face throughout dolly. No focus breathing.
Movement velocity: constant 1.5 ft/s, no acceleration. Overall duration:
10 seconds. Aspect ratio: 16:9 widescreen.

[COLOR GRADING]
Bleach bypass noir grading: crushed blacks reduced (dark grey not 0),
greys elevated creating compressed contrast range. 0% color saturation.
Grain visible 150% opacity (authentic film stock). Only white light
sources and skin tone retain slight warm cast (2500K). Cold blue shadows.

[AUDIO INTEGRATION]
0–1s: silence, complete audio void, sets tension. 1–4s: subtle jazz
trumpet background music enters, melancholic, low-volume (-6dB). 4–7s:
foley layer — footsteps on concrete as camera moves, subtle clothing
rustle as detective moves. 8–8.3s: match scratch sound of lighter
igniting (sharp, immediate). 8.5–10s: music swells, reinforces moment.

[MOOD & ATMOSPHERE]
Emotional target: danger, mystery, weariness. Atmosphere: cigarette smoke
visible in light rays (volumetric effect optional). Setting feels cold,
industrial, dangerous. Viewer positioned as observer in dangerous space.

[OUTPUT SPECS]
10-second full-arc noir sequence. Establishes character, mood, era, and
mystery. Professional film noir aesthetic.
```

### A105. Example 2: Epic Landscape Aerial Reveal

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 288) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L288 — MIT*

```text
CINEMATIC PROMPT — EPIC AERIAL LANDSCAPE

[OPENING HOOK — 0 to 2 seconds]
Extreme reverse macro close-up: camera positioned inches from water
droplet surface. Water droplet refracts landscape upside-down. At 0.5s,
camera whip-pulls backward explosively. Disorienting macro vanishes.
At 1.2s, extreme wide-angle landscape vista appears — desert valley,
layered mountains receding to horizon. Scale shock hits viewer at 2s.

[ESTABLISHING CONTEXT — 2 to 4 seconds]
Location: high-altitude mountain valley landscape. Golden hour light
(3200K sunset position). Camera aerial position: 200 feet altitude,
positioned above valley looking across landscape. Focal length: 28mm
ultra-wide equivalent cinema lens. Lighting: warm golden directional
light from frame-right (sunset source). Atmospheric haze diffuses light
creating volumetric god-rays effect across valley. Three depth layers
visible: rocky foreground (15 feet below camera), valley mid-ground
(50–100 feet below), receding mountains (300+ feet distance).

[PRIMARY ACTION — 4 to 10 seconds]
Camera crane descend: beginning at 200 feet altitude, descending vertically
at 3 feet/second toward valley floor. Tilt angle changes from looking-level
to looking-down to maintain foreground interest. As camera descends, scale
shifts: landscape transforms from "wide vista" to "landing in environment."
At 6 seconds, valley floor details visible: scattered boulders, vegetation
texture. At 8 seconds, camera slows descent to 1 foot/second (deceleration).
At 10 seconds, camera hover 20 feet above ground, slight rotation left
revealing mountain backdrop (90-degree horizontal pan).

[DEPTH & COMPOSITION]
Foreground: rocky terrain with detailed surface texture, sparse vegetation.
Mid-ground: valley floor, dry grass, scattered boulders. Background:
mountain range receding, layered silhouettes, misty atmospheric perspective.
Composition: rule-of-thirds applied — horizon line at bottom-third position
initially, shifts to mid-frame as camera descends. Leading lines: mountain
ridges guide eye into distance.

[CLIMAX MOMENT — 10 to 15 seconds]
At 10–12 seconds: camera hover locks position, slight 90-degree pan left
reveals hidden canyon structure (compositional reveal). At 12–14 seconds:
music crescendo hits. Light timing: sun touches mountain-top (frame-right
edge), backlight creates silhouette edge-lighting on terrain. At 14–15
seconds: camera slow pull-back emphasizing scale — human (visible small in
valley) demonstrates landscape vastness.

[CAMERA & TECHNICAL SPECS]
Focal length: 28mm ultra-wide equivalent. Depth of field: f/5.6 deep
focus (entire landscape sharp). Focus: locked on valley floor throughout.
Movement velocity: 3 ft/s descent, 1 ft/s hover-phase, 2 ft/s pan.
Duration: 15 seconds total. Aspect ratio: 16:9 widescreen.

[COLOR GRADING]
Golden hour warm grading: shift color temperature to 3200K warm amber.
Boost saturation 120% on golden light areas. Shadows retain warm 2000K
spill (not cool). Clarity boosted emphasizing texture detail. Sky: warm
peachy-orange, not blue. Overall feel: golden, magical, nostalgic hour.

[AUDIO INTEGRATION]
0–2s: minimal ambient, light wind sound suggesting altitude. 2–4s:
orchestral strings enter softly (-4dB), building anticipation. 4–10s:
strings build tension, subtle percussion (timpani rolls) begin at 6s.
10–12s: music swell with brass entrance (+2dB). 12–15s: music peak,
orchestral crescendo, then gradual fade to wind-only. Foley: wind rushing
sound during descent, decreases as altitude decreases.

[MOOD & ATMOSPHERE]
Emotional target: awe, wonder, majesty, insignificance. Atmosphere: golden
light, atmospheric haze creating depth, wind sensory element. Viewer feels
small before vast natural beauty. Epic, cinema-scope feeling.

[OUTPUT SPECS]
15-second full-arc cinematic landscape reveal. Suitable for opening
sequence, travel content, epic narrative setup.
```

### A106. Example 3: Dramatic Dialogue / Character Close-Up

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 368) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L368 — MIT*

```text
CINEMATIC PROMPT — DRAMATIC DIALOGUE MOMENT

[OPENING HOOK — 0 to 2 seconds]
Silent black screen 0–1.2s. At 1.2s, sudden visual cut to extreme close-up
of character's eye opening. Iris dilates (0.3-second dilation effect).
Pupil sharp focus, eyelashes visible macro-detail. At 1.8s, zoom micro-
motion suggests tear forming (glistening). Primal attention-grab via eye
contact directly with camera.

[ESTABLISHING CONTEXT — 2 to 4 seconds]
Location: intimate interior space, softly lit bedroom or private moment.
Camera position: medium close-up, 2 feet from character face. Focal length:
50mm portrait equivalent (flattering perspective). Lighting setup: soft
three-point professional. Key light 3000K warm at 45-degree angle left,
60% intensity creating gentle modeling. Fill light soft diffused at 40%
intensity right side (2:1 ratio, professional portrait ratio). Back rim
light 45% intensity. Shadows soft, no hard edges. Color temp warm suggesting
lamplight or golden hour interior light.

[PRIMARY ACTION — 4 to 8 seconds]
Character slow head turn from camera-left 45 degrees to camera-facing (full
front) over 2 seconds. Head turn velocity: smooth, deliberate, emotionally
weighted. At 5s, mouth begins opening — dialogue begins. Voice tone:
[emotional direction: whispered, intense, trembling, resolute]. Depth of
field: f/1.4 ultra-shallow, character face sharp, background completely
blurred (bokeh). Focus locked on eye throughout. Background bokeh suggests
warm lamp lights (circular bokeh shapes).

[DIALOGUE MOMENT — 8 seconds onward]
At 8 seconds: character delivers key emotional line [specify exact words or
emotional content]. Delivery: [specify performance direction]. At same moment
(8s), subtle camera push-in 6 inches at slow velocity creates intimacy
escalation. Mouth movement precisely synchronized with dialogue phonemes.
Eye performance: blinks at natural 0.1-second intervals, maintains contact
with camera 90% of time.

[DEPTH & COMPOSITION]
Foreground: character face fills frame, eyes and lips occupying dominant
visual real estate. Mid-ground: out-of-focus shoulder/neck visible frame-
bottom. Background: bokeh lights, unidentifiable background texture
(intentionally unclear). Composition: rule-of-thirds eye placement at frame-
right and frame-top intersections (power points). Asymmetrical framing
emphasizes psychological intensity.

[CLIMAX MOMENT — 8 to 10 seconds]
Emotional peak of dialogue delivery (8–9s). Eyes show vulnerability/strength
[direction-specific]. At 9s, subtle tear visible (optional, emotion-dependent).
At 9.5s: slight lip quiver or jaw clench (emotional gesture). At 10s: camera
pull-back slight (6 inches) creating emotional release/breathing room after
intensity.

[CAMERA & TECHNICAL SPECS]
Focal length: 50mm portrait lens equivalent (creates flattering perspective,
subtle compression). Depth of field: f/1.4 ultra-shallow (~8 inches focus
plane). Camera: micro-motion breathing optional (1–2 pixel motion). Focus:
locked on eye contact. Movement: push-in 6 inches over 3 seconds (1 inch/
second velocity). Duration: 10 seconds. Aspect ratio: 16:9 widescreen.

[COLOR GRADING]
Warm intimate color grading: color temperature biased toward 3200K (warm
interior). Boost saturation slightly on skin tones (110%). Lift shadows
toward warm tones (avoid blue shadows). Slightly elevated exposure (+0.3
stops) creates intimate/vulnerable feel. Minimal grain (film stock optional).
Slight softness filter (diffusion) on highlights (5% opacity) creates
ethereal quality.

[AUDIO INTEGRATION]
0–2s: silence, emotional void. 2–7.5s: subtle ambient — minimal background
noise (-8dB), suggests private quiet space. 7.5s: dialogue entry, character
voice at 0dB reference level, clear and centered. Voice processing: subtle
reverb (0.3 second tail) suggests intimate space acoustics. Optional: gentle
music bed entering at 4s (-6dB, emotional underscoring). 8–10s: music swells
slightly supporting emotional peak, then pulls back.

[MOOD & ATMOSPHERE]
Emotional target: vulnerability, intensity, confession, revelation, emotional
truth. Atmosphere: intimate, private, emotional safety, exposure. Lighting
creates warmth and softness. Background bokeh suggests isolated personal
space. Viewer positioned as intimate confidant receiving confession.

[OUTPUT SPECS]
10-second full-arc dramatic dialogue moment. Suitable for emotional story
beats, character-driven narratives, intimate moments. Professional portrait-
level cinematography with emotional depth.
```

### A107. Example 4: High-Speed Chase / Action Sequence

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 459) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L459 — MIT*

```text
CINEMATIC PROMPT — ADRENALINE CHASE SEQUENCE

[OPENING HOOK — 0 to 2 seconds]
Black screen complete silence 0–0.8s. At 0.8s: sudden explosive percussion
hit (heavy kick drum, 120+ dB reference). Synchronized visual: whip-cut to
high-speed camera movement. Subject enters frame from edge at extreme velocity
(simulated 45+ mph equivalent motion). Motion blur 20% opacity trails subject.
Viewer experiences sensory shock: silence ruptures into chaos.

[ESTABLISHING CONTEXT — 2 to 4 seconds]
Location: urban street environment, dense cityscape, concrete surfaces.
Camera angle: low 25-degree angle tracking from behind-left following action.
Focal length: 35mm equivalent cinema lens. Lighting: high-contrast midday sun
creating strong shadows, 5500K daylight color temp. Hard light creates
geometric shadow patterns across environment. Fast-moving shadows and light
create perception of speed via temporal parallax.

[PRIMARY ACTION — 4 to 9 seconds]
Subject moves through environment at high speed (simulate 35 mph motion).
Camera tracks from 4-foot distance, maintains subject frame-right. Environment
parallax creates speed illusion: foreground moves fast, background slower.
At 4–5s: subject navigates obstacle (jumps, veers, slides). Camera maintains
smooth gimbal following. At 5–6s: environment becomes narrower (alleyway
compression). At 6–7s: subject increases speed (deeper motion blur, faster
background scroll). At 7–8s: approach climax — subject danger increases. At
8–9s: sudden sharp deceleration or dangerous moment (near-collision, sharp
turn, or explosive obstacle).

[DEPTH & COMPOSITION]
Foreground: immediate ground plane, fast-moving texture. Mid-ground: subject
in motion, frame-right position. Background: receding environment, fast scroll
creating speed perception. Composition: leading lines converge toward subject
position (power point at frame-right). Diagonal framing emphasizes momentum
direction.

[CLIMAX MOMENT — 9 to 12 seconds]
At 9s: moment of maximum danger or impact. Possible: collision near-miss,
environmental obstacle collision (hitting water, breaking barrier), or subject
being ejected from frame. Camera movement accelerates into danger moment
(5+ ft/s). At 9.5s: impact moment synchronized with audio percussion spike.
Visual: slow-motion optional effect at impact (0.3-second deceleration). At
10–11s: aftermath moment — slower pace, subject recovering or continuing at
reduced speed.

[CAMERA & TECHNICAL SPECS]
Focal length: 35mm equivalent (standard cinema action lens). Depth of field:
f/4–f/5.6 moderate focus (subject sharp, environment detail visible). Camera
movement speed: 3.5 ft/s base speed, 5+ ft/s peak speed, 2 ft/s finale.
Gimbal-smooth motion, no handheld micro-vibrations. Focus locked on subject
throughout (no racking). Duration: 12 seconds. Aspect ratio: 16:9 widescreen
(ideal for action).

[COLOR GRADING]
High-contrast action grading: boost overall saturation 120% (hyper-saturated,
energetic). Shadows darker (crushed slightly, increase contrast ratio). Teal-
orange color split: highlight-warm yellows (action, energy), shadows-cool
blues (speed, tension). Increase perceived sharpness/clarity emphasizing
environmental detail. Slight desaturation of background (subject pops forward
via color desaturation background).

[AUDIO INTEGRATION]
0–2s: silence building tension (0s–0.8s), then explosive kick drum drop at
0.8s (music/SFX synchronization). 2–4s: high-energy electronic music bed
enters (-2dB), driving percussive beat. 4–9s: music intensity escalates.
Foley layer: rapid footsteps/motion sounds synchronized to action, increasing
tempo as speed escalates. 9–10s: impact sound effect (collision, explosion,
sharp cut) synchronized with visual danger moment. Sound effect: +3dB peak
emphasizing violence/danger. 10–12s: music decelerates with action, tension
releases slightly.

[SOUND EFFECTS DETAIL]
Foley synchronized to movement velocity: footsteps/movement sounds increase
frequency as speed increases. Breathing: hard-breathed effort sounds suggesting
exertion. Wind: rushing air sound increases with velocity. Environmental
sounds: passing obstacles create Doppler-effect swooshing sounds.

[MOOD & ATMOSPHERE]
Emotional target: adrenaline, danger, urgency, survival instinct activation.
Atmosphere: high-speed chaos, environmental compression creating claustrophobia,
velocity creating sensory overload. Viewer positioned experiencing action from
participant's proximity.

[OUTPUT SPECS]
12-second maximum-intensity action sequence. Suitable for chase scenes, action
climax moments, intensity peaks. Professional high-energy action cinematography.
```

### A108. Example 5: Emotional Intimate Moment / Farewell

*Source: **higgsfield-skills** · `skills/01-cinematic/references/examples.md` (line 551) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/examples.md#L551 — MIT*

```text
CINEMATIC PROMPT — TENDER EMOTIONAL FAREWELL

[OPENING HOOK — 0 to 2 seconds]
Extreme close-up two hands almost-touching over wooden table surface.
Fingertips separated by 1 inch, not quite touching. Shallow depth of field:
fingertips sharp, hands progressively blur, background black bokeh. At 1.2s,
one hand slowly approaches the other. At 1.8s, fingertips barely make contact
(touching surface tension moment). Sensory hook: intimate physical connection
gesture, implies emotional goodbye.

[ESTABLISHING CONTEXT — 2 to 4 seconds]
Location: small intimate space (coffee shop corner booth, quiet room, private
moment). Warm interior lighting, practical lamps visible. Camera position:
seated position (eye-level with characters), 3 feet away from primary action.
Focal length: 50mm portrait equivalent (creates intimate perspective). Lighting:
soft three-point setup. Key light 2700K warm from upper-left (45 degrees),
50% intensity suggesting lamplight. Fill light soft diffused right side, 40%
intensity. Rim light 30% intensity back. Color temp: very warm 2700K, intimate
interior lighting.

[PRIMARY ACTION — 4 to 10 seconds]
Two figures seated across from each other at table. Camera positioned at table
level between figures, slightly favoring primary character. At 4–5s: primary
character reaches across table, hand extends slowly toward secondary character's
hand. Movement velocity: slow, deliberate, 4 inches per second. At 5.5s: hands
make contact, fingers interlace or palm-to-palm connection. At 6–8s: hands hold
position, slight tremor in hands visible (emotion). Secondary character's eyes
visible: looking at connected hands, then up to primary character's face
(emotional eye contact). At 8–9s: subtle head tilt, primary character leans
slightly forward (reducing distance, increasing intimacy).

[DEPTH & COMPOSITION]
Foreground: hands in sharp detail, table surface texture. Mid-ground: torsos
and faces of both figures, faces soft-focused. Background: bokeh lights
(interior lamps), completely out-of-focus, warm circular bokeh shapes.
Composition: hands centered frame (rule-of-thirds power point), figures frame-
left and frame-right creating visual balance across connected-hands center.
Asymmetrical yet harmonious.

[CLIMAX MOMENT — 10 to 12 seconds]
At 10s: eye contact between figures locks. Gazes hold. Subtle facial expression
shift: vulnerability visible. At 10.5s: camera slow push-in 12 inches over 1.5
seconds (8 inches/second), tightening intimacy, increasing magnification of
emotion. At 11s: one figure's eyes glisten (tear formation optional, emotion-
dependent). At 11.5s: gentle smile, acknowledgment of love/goodbye duality.
At 12s: hands remain connected, moment suspended in time.

[CAMERA & TECHNICAL SPECS]
Focal length: 50mm portrait equivalent (intimate, flattering). Depth of field:
f/1.2 ultra-shallow (hands tack-sharp, faces soft, background bokeh complete).
Focus: locked on hands and faces. Camera movement: push-in 12 inches over 1.5
seconds (smooth, constant velocity). Slight breathing motion optional (0.5–1
pixel fluctuation). Duration: 12 seconds. Aspect ratio: 16:9 widescreen.

[COLOR GRADING]
Warm intimate color grading: color temperature 2700K (lamplight warm). Boost
warm tones in skin (add 200K warmth to faces). Lift shadows slightly (shadow
crush reduced, appears soft). Overall exposure: +0.5 stops (intimacy, softness,
vulnerability). Reduce saturation slightly (90%) creating slightly muted,
nostalgic feel. Add subtle diffusion filter (3% opacity) to highlights creating
ethereal softness. Optional: slight vignette (darkening edges) focusing attention
to center action.

[AUDIO INTEGRATION]
0–2s: minimal ambient sound (-8dB), subtle background atmosphere (restaurant
murmur, gentle AC sound). 2–4s: same ambient continues. 4–8s: gentle piano
music enters (-5dB), melancholic, slow (60 bpm tempo), minor key suggesting
melancholy-beauty. Piano arpeggios: simple, sparse notes leaving space. 8–10s:
strings (violin/cello) layer in (-4dB), emotional depth increases. Music builds
gradually without rushing. 10–12s: music swells slightly, gentle crescendo into
moment, then sustains held note (musical symbol of moment suspension).

[FOLEY & SOUND DETAIL]
Minimal foley: subtle table surface touch sound as hands make contact (soft,
not intrusive, -3dB). Breathing: natural breathing audible faintly, emotion
conveyed. Optional: heartbeat sound very faint in background (-10dB) suggesting
emotional intensity. No dialogue, allowing music and ambient to communicate.

[MOOD & ATMOSPHERE]
Emotional target: love, loss, connection, goodbye, tenderness, vulnerability,
beauty in difficult moment. Atmosphere: intimate, private, warm, gentle,
accepting. Lighting creates softness and warmth. Viewer positioned as intimate
observer of private emotional moment. Sense of privilege witnessing connection.

[OUTPUT SPECS]
12-second full-arc tender emotional moment. Suitable for romantic storylines,
goodbye moments, character-driven emotional beats, relationship narratives.
Professional intimate cinematography with visual poetry and emotional truth.
```

### A109. Prompt Construction Master Template

*Source: **higgsfield-skills** · `skills/02-3d-cgi/references/examples.md` (line 25) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/02-3d-cgi/references/examples.md#L25 — MIT*

```text
[OPENING HOOK - 1–2 sentences establishing immediate visual intrigue]

Camera: [Camera movement, angle, lens type, DOF, frame rate]

Render Style: [Pixar-style / photorealistic / low-poly / cel-shaded / etc.] 3D rendering

Lighting: [Key light direction and color], [Fill light], [Backlight/rim],
          [Environment/HDRI], [Special effects like caustics or volumetric light]

Subject/Environment: [Detailed description of what's in frame — geometry, scale, arrangement]

Materials & Surfaces: [Specific material descriptions with PBR/SSS/refraction details]

Motion/Animation: [How things move — procedurally, physically, artistically; speed; duration]

Details & Refinement: [Texture detail level, imperfections, wear, dust, weathering]

Atmospheric & VFX: [Particles, fog, volumetrics, reflections, refractions, special effects]

Color Palette: [Primary colors, saturation, mood]

Duration: [Total length in seconds — use seedance_2_0's 4–15 s range]

Composition: [Rule of thirds, symmetry, depth arrangement, focus layers]
```

### A110. Master Template for Cartoon Animation Prompts

*Source: **higgsfield-skills** · `skills/03-cartoon/references/examples.md` (line 25) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/03-cartoon/references/examples.md#L25 — MIT*

```text
[OPENING HOOK] + [MAIN ACTION] + [STYLE STACK] + [CHARACTER DESIGN] +
[ANIMATION PRINCIPLES] + [COLOR DIRECTION] + [TECHNICAL SPECS] + [CLOSURE/EMOTION]
```

### A111. Master Template

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/examples.md` (line 25) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/examples.md#L25 — MIT*

```text
READING ORDER: [Western LTR / Manga RTL / Webtoon Vertical / European / 4-Koma]

PANEL SEQUENCE:
Panel 1 (Setup):
- Character(s): [description and pose]
- Environment: [setting, lighting, details]
- Action: [what is happening]
- Speech/Sound: [dialogue, narration, SFX]

Panel 2 (Action/Escalation):
[repeat format]

Panel 3 (Resolution/Reaction):
[repeat format]

TWO-SECOND HOOK: [hook type from hooks.md]
[describe how the hook manifests in the first 2 seconds]

ART STYLE KEYWORDS: [ink weight, color model, technique]

ANIMATION DIRECTION:
- Character Motion: [primary character movement and emotional arc]
- Camera Work: [pan direction, zoom, rotation based on reading order]
- Environmental Motion: [background elements, effects, transitions]
- Pacing: [slow/medium/fast, justified by narrative]
- Tone: [serious, comedic, surreal, etc.]

DIALOGUE INTERPRETATION:
- Speaker 1: [emotion, delivery, animated emphasis]
- Speaker 2: [if applicable]

TRANSITION TECHNIQUE: [technique name]

PARAMETERS:
- Model: wan2_6 (primary) or seedance_2_0 (fallback)
- Duration: [5, 10, or 15 s for wan2_6; 4–15 s for seedance_2_0]
- Aspect ratio: [16:9, 9:16, or 1:1 for wan2_6]
- Quality: [720p or 1080p for wan2_6]
- input_files: [{ "id": "<confirmed_id>", "role": "image" }]

NOTES: [special considerations, style references, continuity details]
```

### A112. Example 2: Manga Emotional Scene (RTL)

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/examples.md` (line 138) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/examples.md#L138 — MIT*

```text
READING ORDER: Manga RTL (Right-to-Left)

PANEL SEQUENCE:
Panel 1 (Right side — read first):
- Character: Female protagonist, back partially turned, looking toward right (toward reader)
- Environment: Indoor, moonlight through window, soft shadows
- Action: Hesitating, building courage
- Speech/Sound: [Thought bubble] "I have to tell him... before it's too late."

Panel 2 (Center):
- Character: Male character, facing slightly left, neutral expression, unaware
- Environment: Same room, focus on his profile
- Action: Hasn't noticed her yet
- Speech/Sound: (silent, heavy with anticipation)

Panel 3 (Left side — read third):
- Character: Male character now facing female protagonist, shock and emotion visible
- Environment: Both characters in frame, moonlight on faces
- Action: Realization dawning
- Speech/Sound: "I... I didn't know you felt this way..."

TWO-SECOND HOOK: Speech Bubble Pops to Life
Thought bubble in Panel 1 trembles and expands slightly, protagonist's mouth begins to move.
Bubble seems to burst with her courage as she prepares to speak.

ART STYLE KEYWORDS:
- Clean manga line work (fine ink weight, not heavy)
- Minimal screen tone (mostly white space, selective darks for mood)
- Large, expressive eyes (shoujo manga style)
- Flowing hair movement (emotional state indicator)

ANIMATION DIRECTION:
- Character Motion: Panel 1: hand trembles at chest, breathing quickens. Panel 2: male
  remains still. Panel 3: male turns, eyebrows rise, eyes widen. Her shoulders relax.
- Camera Work: Pan right-to-left (RTL reading convention). Slow and deliberate.
- Environmental Motion: Moonlight steady. Subtle breeze moves her hair.
- Pacing: Slow. Panel 1→2: 1.5 s. Panel 2→3: 1.2 s. Total: 3.5 s.
- Tone: Tender, vulnerable, intimate.

DIALOGUE INTERPRETATION:
- Thought bubble: Internal, hesitant, near-whisper. Building resolve.
- "I... I didn't know...": Surprised, processing. Emotional depth beneath surface shock.

TRANSITION TECHNIQUE: Soft Dissolve (1→2), Morph (2→3)

PARAMETERS:
- Model: wan2_6
- Duration: 5 s
- Aspect ratio: 9:16
- Quality: 1080p
- input_files: [{ "id": "<confirmed_id>", "role": "image" }]
```

### A113. Example 3: Webtoon Vertical Sequence

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/examples.md` (line 198) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/examples.md#L198 — MIT*

```text
READING ORDER: Webtoon Vertical

PANEL SEQUENCE:
Panel 1 (Top):
- Character: Standing at cliff edge, viewed from behind/above, arms at sides
- Environment: Sunny, safe landscape behind, cliff edge in foreground
- Action: Approaching the edge
- Speech/Sound: "Just one more step... I can do this."

Panel 2 (Upper-middle):
- Character: Same character, now on very edge, feet slightly apart
- Environment: Wind visible in hair/clothing; less landscape visible
- Action: Gazing down (drop not yet visible)
- Speech/Sound: (silence)

Panel 3 (Lower-middle):
- Character: Extreme close-up on face — fear/determination conflict
- Environment: Wind visible around them; sky behind
- Action: Eyes closed, deep breath
- Speech/Sound: [Thought] "What am I doing...?"

Panel 4 (Bottom):
- Character: Full body, but now vast drop is visible
- Environment: Massive canyon below, tiny objects far down
- Action: Character leans forward — point of no return
- Speech/Sound: (silent, wind howling implied)

TWO-SECOND HOOK: Page Turn / Parallax Reveal
Opens with character safely framed in Panel 1. Vertical scroll begins, layers shift at
different speeds (parallax), creating 3D dizzying depth.

ART STYLE KEYWORDS:
- Digital flat colors (webtoon style)
- Soft, rounded character designs
- Minimal ink lines (modern digital aesthetic)
- Smooth color gradients, no screen tone

ANIMATION DIRECTION:
- Character Motion: Panel 1 casual walking. Panels 2–3 movement slows, more deliberate.
  Panel 4: leans forward, weight shifting.
- Camera Work: Vertical pan downward through all panels. Pull-back zoom to reveal full drop.
  Parallax: foreground (character, cliff) slower; background (distant landscape) faster.
- Environmental Motion: Wind increases throughout — hair, clothing flutter builds.
- Pacing: Slow build. 1→2: 1.2 s. 2→3: 1.5 s. 3→4: 1.8 s. Total: 4.5 s.
- Tone: Suspenseful, introspective, vertiginous.

TRANSITION TECHNIQUE: Vertical wipe downward (each panel into next) + Parallax shift

PARAMETERS:
- Model: wan2_6
- Duration: 5 s
- Aspect ratio: 9:16
- Quality: 1080p
- input_files: [{ "id": "<confirmed_id>", "role": "image" }]
```

### A114. Example 4: Storyboard-to-Video

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/examples.md` (line 261) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/examples.md#L261 — MIT*

```text
READING ORDER: Western LTR

PANEL SEQUENCE:
Panel 1 (Establishing):
- Character: Protagonist in dark clothing approaching window; guard at opposite end
- Environment: Corporate office, high floor, nighttime
- Action: Protagonist moves stealthily along wall, avoiding guard
- Speech/Sound: [Narration] "The hard part isn't getting in. It's getting out."

Panel 2 (Detail):
- Character: Close-up of gloved hand reaching for keypad
- Environment: Electronic lock, red indicator light
- Action: Hand inputs code; light turns green
- Speech/Sound: [SFX] "BEEP" + mechanical "Click"

Panel 3 (Wide):
- Character: Protagonist entering vault, silhouetted against interior light
- Environment: Vault interior, glowing displays
- Action: Moving toward objective
- Speech/Sound: (silent triumph)

Panel 4 (Tension):
- Character: Security guard on radio, noticing opened vault door
- Environment: Guard's position, hallway from guard's perspective
- Action: Guard's expression shifts from bored to alert
- Speech/Sound: "We've got a breach on Level 47."

TWO-SECOND HOOK: Spotlight/Light Flare Focus
Darkness, then single spotlight sweeps across hallway, forcing protagonist to freeze and hide.
Sweep creates the visual rhythm driving the opening.

ART STYLE KEYWORDS:
- Simple line drawings (storyboard economy of line)
- Minimal shading (line-based value indication)
- High contrast (black lines, strategic solid blacks for shadow)
- NO decorative detail — every line serves narrative purpose

ANIMATION DIRECTION:
- Character Motion: Panel 1: careful, controlled, weight distributed for silence.
  Panel 2: precise practiced hand movement. Panel 3: confident stride. Panel 4: sudden alertness.
- Camera Work: Panel 2 push-in on hand/keypad. Panel 4 cut to guard's spatial position.
- Environmental Motion: Minimal 1–3. Panel 4: radio static, indicator lights convey urgency.
- Pacing: Controlled. 1→2: 1.0 s. 2: 0.8 s. 3: 1.0 s. 4: 1.2 s. Total: 4.0 s.
- Tone: Tense, professional, noir.

DIALOGUE INTERPRETATION:
- Narration Panel 1: Calm, experienced, knowing. Steady pace.
- Guard Panel 4: Urgent, surprised. Professional protocol with tension.

TRANSITION TECHNIQUE: Hard cut (storyboard standard), Wipe LTR (guard perspective shift)

PARAMETERS:
- Model: wan2_6
- Duration: 5 s
- Aspect ratio: 16:9
- Quality: 1080p
- input_files: [{ "id": "<confirmed_id>", "role": "image" }]
```

### A115. Example 5: Single Illustration Brought to Life

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/examples.md` (line 327) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/examples.md#L327 — MIT*

```text
READING ORDER: Single Panel (centerpoint focus)

PANEL:
- Character: Phoenix-human hybrid, wings spread wide, mid-transform, arms raised
- Environment: Desert ruins at twilight, orange/red sky, cracked burning ground
- Action: Transformation moment — becoming something new and powerful
- Speech/Sound: [Internal] "No more running. This ends now."

TWO-SECOND HOOK: Ink Splash Transition
Character visible but still. At 0.5 s, ink/flame effects splash outward from character's
core, temporarily obscuring them. At 1.0 s splash clears, character revealed more alive,
with wings beginning to move.

ART STYLE KEYWORDS:
- Heavy dramatic line work (thick blacks in wings and contours)
- Digital oil painting finish in environment (soft blend, luminous colors)
- Watercolor-like transparency in fire effects
- High saturation in oranges, reds, yellows (fire palette)
- Strong backlighting creates halo effect

ANIMATION DIRECTION:
- Character Motion: Wings begin to beat (slow, powerful strokes). Body trembles with
  transformative energy. Arms extend further. Posture moves from effort to triumph.
- Camera Work: Start wide (full character + environment). Camera slowly pushes in ~40%
  zoom over 5 s as transformation progresses.
- Environmental Motion: Ruins crack further. Ground fires flare. Wind kicks up dust and
  debris flowing outward from character.
- Pacing: Slow start (0.0–1.5 s). Middle fast (1.5–3.5 s: wing deployment). Final slower
  (3.5–5.0 s: settling). Total: 5.0 s.
- Tone: Powerful, transformative, triumphant despite struggle.

DIALOGUE INTERPRETATION:
- Internal monologue: Start hesitant, end resolute. Timed to peak at full transformation.

TRANSITION TECHNIQUE: N/A (single panel; Ink Splash is transformation hook, not a transition)

PARAMETERS:
- Model: wan2_6
- Duration: 5 s
- Aspect ratio: 16:9
- Quality: 1080p
- input_files: [{ "id": "<confirmed_id>", "role": "image" }]
```

### A116. Master Template

*Source: **higgsfield-skills** · `skills/05-fight-scenes/references/examples.md` (line 24) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/05-fight-scenes/references/examples.md#L24 — MIT*

```text
[SETTING & ATMOSPHERE]
Location: [specific terrain, weather, time of day]
Lighting: [key light source, shadows cast, color palette]
Ambient: [sounds, particles, environmental presence]

[COMBATANT A SETUP]
Appearance: [clothing, build, weapon, stance]
Emotional State: [confidence, desperation, calm focus]
Combat Style: [martial art or weapon discipline]
Initial Position: [spatial location relative to camera and opponent]

[COMBATANT B SETUP]
[same as above]

[OPENING 2-SECOND HOOK]
[choose one from hooks.md — be specific and visceral]

[EXCHANGE 1: A Initiates]
Specific Moves: [jab, cross, pivot, etc.]
Camera Work: [dolly forward, rack focus, orbit]
Effects: [dust, sweat spray, fabric ripple]

[EXCHANGE 2: B Counters]
[detailed choreography, camera movement, impact effects]

[ESCALATION]
[faster, higher stakes, environment interaction]

[CLIMACTIC MOMENT]
[final exchange, clear winner or dramatic stalemate]

[RESOLUTION]
[breathing, repositioning, or transition]
```

### A117. Master Template

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 25) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L25 — MIT*

```text
[VISUAL STYLE]
Anime genre: [shonen/seinen/magical girl/mecha/etc.]
Art style: cel-shaded 2D anime. Limited animation with key impact frames.
Color palette: [description and saturation level]

[OPENING 2 SECONDS]
Hook: [technique from hooks.md]
[describe exact visual: position, timing, colors, effects]

[MAIN SCENE — SECONDS 2–N]
Setting: [location, time of day, atmosphere]
Character action: [what is happening]
Animation style: [movement type: fast/slow, impact frames, limited animation details]
Lighting: [key light direction, mood lighting, special effects]
Color: [primary palette, accent colors, saturation %]

[SPECIAL EFFECTS]
Particle effects: [speed lines, sparks, energy, sakura, etc.]
Transitions: [cuts, fades, swipes]

[PARAMETERS]
Model: wan2_7 (primary) or wan2_6 (fallback)
Duration: [2–15 s for wan2_7; 5, 10, or 15 s for wan2_6]
Aspect ratio: [16:9, 9:16, 1:1, 4:3, or 3:4 for wan2_7; 16:9, 9:16, or 1:1 for wan2_6]
Resolution: [720p or 1080p]
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]  // wan2_7
             [{ "id": "<confirmed_id>", "role": "image" }]        // wan2_6 fallback
```

### A118. Example 1: Shonen Fight Climax

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 61) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L61 — MIT*

```text
[VISUAL STYLE]
Anime genre: Shonen action (climactic fight moment)
Art style: Cel-shaded 2D anime. Limited animation with key impact frames.
Color palette: Deep blues, electric cyan, black shadows, white highlights. Saturation: 140%.

[OPENING 2 SECONDS — HOOK]
Hook: Dramatic Eye Close-Up with Power-Up Aura Explosion
Extreme close-up of character's eye. Iris golden-amber with four-pointed star-shaped
highlight. As the eye fills frame, electric blue aura radiates outward from behind the head,
visible at frame edge. Aura pulses outward in two expanding rings with sparks trailing.
Speed lines (perspective lines from behind) zoom past character's face. At 0.1 s, pupil
contracts sharply. Camera pulls back revealing character's face by 1.5 s.

Art style: Cel-shaded 2D anime on slightly abstracted blue-electric background.
Lighting: Rim light from electric aura (bright blue on edges of face). Shadows dark navy.

[MAIN SCENE — SECONDS 2–8]
Setting: Open valley at golden-hour sunset. Orange sky fills 70% of frame. Rocky ground,
sparse grass. Two combatants face each other at opposite frame edges. Deep blue ground
shadows. Volumetric light rays in dust-filled air.

Character A (protagonist, left): Power stance — legs planted, fists clenched. Electric blue
aura in 1-meter radius. Static hold, only aura and hair moving with 0.3-s pulse rhythm.

Character B (opponent, right): Neutral stance watching. Partially backlit, appears as near-
silhouette.

Animation style: Limited animation at 12fps internal rate for aura pulsing (2-frame). Aura
expands and retracts on 0.3-s cycle. Hair and clothing flutter with aura pressure.

At 5 s: Character A launches forward at extreme speed — two key frames with speed lines
filling gap (smear frame effect). Character B braces — eyes widening, static hold 0.2 s.

At 6 s: Impact. White flash covers center 60% of frame. Cross-shaped highlight at fist-
contact point holds 0.2 s. Character B blown backward, speed lines trail behind.

Lighting: Golden rim on Character A from sun. Character B backlit. Impact flash bright white.

[SPECIAL EFFECTS]
- Aura: 4–5 concentric rings expanding and retracting, electric sparks drift upward
- Speed lines: Radial from launch point during movement
- Impact flash: White light covers frame center, clears at 0.3 s
- Impact cross: Bright white cross at fist contact
- Dust: Tan particles swirl around character A's feet
- Screen tone: 0.2-s diagonal pattern overlay at power moment

[PARAMETERS]
Model: wan2_7
Duration: 8 s
Aspect ratio: 16:9
Resolution: 1080p
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]
```

### A119. Example 2: Magical Girl Transformation

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 122) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L122 — MIT*

```text
[VISUAL STYLE]
Anime genre: Magical girl (mahou shoujo)
Art style: Cel-shaded 2D. Whimsical, pastel palette with bright accents. Symmetrical.
Color palette: Pastel pink and gold dominant, bright cyan accents. Saturation: 110%.

[OPENING 2 SECONDS — HOOK]
Hook: Transformation Sequence Flash
White light flash obscures full frame at 0 s (0.3 s duration, disorienting). Flash clears
to reveal character in mid-transformation — outline of new magical outfit forming in light.
Golden sparkles cascade from transformation boundary.

[MAIN SCENE — SECONDS 2–10]
Setting: Abstract background — gradient from deep rose to pale gold. Circular geometric
patterns (magical array) glow softly beneath character's feet.

Character: Female protagonist in transformation sequence. Clothing shifts from school
uniform to magical costume. Twirl animation: character spins 360° over 1.5 s. During spin,
clothing dissolves in golden light and reforms as costume. Hair lengthens and changes color
in the light.

Animation style: Transformation twirl at 24fps (smooth for magical effect). Light effects
at 12fps internal (shimmer rhythm). Final pose locks into perfect symmetrical frame.

Lighting: Diffuse warm golden hour from above. Sparkles emit their own light (small bright
points). No harsh shadows — all shadows are soft pink-gold.

[SPECIAL EFFECTS]
- Sparkle cascade: Star-shaped golden sparkles rain down throughout transformation
- Magical array: Glowing circular rune pattern on ground, pulsing with twirl
- Light ribbons: Golden light ribbons trail behind spinning motion
- Final flash: Small white flash at transformation completion, clears in 0.2 s
- Sparkle eyes: Cross-shaped highlights in character's eyes during completion close-up

[PARAMETERS]
Model: wan2_7
Duration: 10 s
Aspect ratio: 9:16
Resolution: 1080p
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]
```

### A120. Example 3: Slice-of-Life Morning Scene

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 170) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L170 — MIT*

```text
[VISUAL STYLE]
Anime genre: Slice-of-life (nichijou / daily life)
Art style: Cel-shaded 2D, soft and warm. Minimal speed lines. Soft focus backgrounds.
Color palette: Golden sunlight dominant, warm cream interior, peachy skin tones. Saturation: 75%.

[OPENING 2 SECONDS — HOOK]
Hook: Cherry Blossom Wind Gust
Close-up of pink/white cherry blossoms drifting across frame. Semi-translucent petals on
gentle wind. Behind petals: blurred golden window frame with warm sunlight streaming through.
Petals drift left to right, then right to left (leisurely, not urgent). Camera slowly pulls
back at 0.8 s.

[MAIN SCENE — SECONDS 2–6]
Setting: Japanese-style bedroom. Futon on tatami mat. Morning sunlight through shoji screen
at right. Soft shadow grid on futon. Wooden details, paper lantern in background. Warm golden
hour dominates.

Character: Female protagonist waking on futon, lying on side, eyes closed, peaceful. Eyes
open slowly over 0.4 s (heavy, sleepy). Arm stretches lazily above head over 0.6 s.

Animation style: Minimal animation. Character static for 0.8 s, then slow eye-open, then
gentle arm stretch. Naturalistic movement, not exaggerated. 24fps smooth.

Lighting: Warm sunlight from shoji door, illuminates right side of face. Left side in soft
golden-brown shadow. Skin warm peachy tone.

[SPECIAL EFFECTS]
- Dust motes: Fine particles visible in sunlight beam, drifting slowly
- Soft shadow grid: Grid pattern from shoji projected on futon, very soft-edged
- Hair highlight: Single bright line on hair showing glossy texture
- Breathing: Subtle chest rise-and-fall visible during sleep portion

[PARAMETERS]
Model: wan2_7
Duration: 6 s
Aspect ratio: 16:9
Resolution: 720p
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]
```

### A121. Example 4: Mecha Battle Spectacle

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 217) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L217 — MIT*

```text
[VISUAL STYLE]
Anime genre: Mecha (giant robot combat)
Art style: Cel-shaded 2D with metallic surface details. Rigid, geometric movement.
Color palette: Deep purple-gray sky, dark building silhouettes, bright cyan neon, dark red
accents. Saturation: 110% (neon pops against dark).

[OPENING 2 SECONDS — HOOK]
Hook: Power-Up Aura Explosion
Mecha silhouette against dark storm clouds. Bright cyan power core in mecha's chest glows
and expands — energy radiates outward in concentric rings, air distorts around it. Speed
lines radiate outward at 0.3 s. Cuts to cockpit interior at 1.5 s: pilot's face lit by
cyan glow, expression determined.

Lighting: External — mecha rim-lit by its own power core (bright cyan). Storm clouds deep
purple-gray behind. Cockpit — neon cyan + warm amber dual light sources.

[MAIN SCENE — SECONDS 2–10]
Setting: Dystopian city battlefield at dusk. Cyberpunk-industrial buildings, neon signs,
rain falling. Two mecha face each other. Cracked, scorched ground. Neon reflected in wet
surfaces.

Mecha 1 (protagonist, left): Sleek, angular, black and cyan. Core pulses with 0.4-s rhythm.
Raises arm slowly over 0.8 s (realistic hydraulic speed, not instant). Rigid segmented
articulation with distinct angular movements.

Mecha 2 (antagonist, right): Bulky, industrial, dark gray and red. Combat-ready stance.

At 5 s: Mecha 1 launches. Two key frames with speed lines filling gap. Rain streaks stretch
behind mecha. Screen shake 2mm for 0.5 s during footfall.

At 7 s: Impact. White flash covers 70% of frame center. Cross-shaped highlight at impact
point. Energy explosion between mecha pushing both backward.

Lighting: Neon light from multiple angles. Core glow illuminates own surfaces. Rain catches
light as visible streaks.

[SPECIAL EFFECTS]
- Core pulsing: Cyan glow expands from core every 0.4 s
- Rain: Visible streaks in front and behind mecha, catching light
- Speed lines: Dense radial lines behind Mecha 1 during launch
- Neon reflections: Cyan and red light reflects in wet ground
- Impact flash: White covers frame center, clears at 0.3 s
- Screen shake: 2mm continuous vibration during footfall

[PARAMETERS]
Model: wan2_7
Duration: 10 s
Aspect ratio: 16:9
Resolution: 1080p
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]
```

### A122. Example 5: Emotional Farewell (Romance / Drama)

*Source: **higgsfield-skills** · `skills/08-anime-action/references/examples.md` (line 276) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/08-anime-action/references/examples.md#L276 — MIT*

```text
[VISUAL STYLE]
Anime genre: Romance / drama (emotional farewell)
Art style: Cel-shaded 2D. Soft, minimal speed lines. Detailed expressions.
Color palette: Deep blue shadows, cool purple-blue tones, pink blossoms accent. Saturation: 70%.

[OPENING 2 SECONDS — HOOK]
Hook: Cherry Blossom Wind with Blue Hour Lighting
Soft focus close-up of pink cherry blossoms drifting across frame on gentle wind. Blossoms
semi-translucent, catching cool blue-hour light. Behind blossoms: blurred silhouettes of
two characters at distance, facing away from camera. Depth of field: petals sharp, characters
heavily blurred. Camera slowly pulls back at 1.5 s over 1 s.

[MAIN SCENE — SECONDS 2–12]
Setting: Empty train platform at evening/dusk. Station building in background (blurred). Over-
head lamp glows warm yellow but scene dominated by cool blue sky. Steel platform, minimal
people. Two characters 2 meters apart.

Character 1 (male, tall): Stoic expression, mouth slightly downturned, eyes slightly down.
Dark jacket. Hands at sides, posture slightly slumped.

Character 2 (female, smaller): Sad expression, large soft eyes. Long hair. Light-colored
jacket. Arms crossed, protective posture.

Animation style: Minimal animation. Both largely static. At 3 s, Character 1's hand rises
slowly to grasp his own arm (1.5 s duration). At 4 s, Character 2's gaze shifts — eyes up,
then down (2 s).

At 5 s: Character 2's tear forms at inner eye corner over 0.5 s (glossy, reflecting light),
begins falling over 0.4 s. Character 1's expression softens very subtly (eyebrows relax,
slight tilt down) over 0.8 s.

At 8 s: Both reach hands toward each other — arms extend over 1.0 s. At 9 s, both reach
peak extension. Hold 0.3 s with hands near but not touching. Both retract slowly over 0.4 s.

At 10 s: Characters separate, Character 2 turns toward arriving train. Character 1 watches.

Lighting: Cool blue hour dominant throughout. Characters rim-lit with blue. Arriving train
light adds subtle warm counterpoint at 10 s.

[SPECIAL EFFECTS]
- Cherry blossoms: Continuous drift throughout, some petals pass between characters' hands
- Platform reflection: Characters partially reflected in glossy surface (50% opacity, blurred)
- Tear: Single tear, glossy, small cyan-white highlight on cheek
- Screen tone: 0.1-s diagonal pattern flash at 8.8 s (manga-style emotional emphasis)
- Train light: Distant light grows at 10 s

[PARAMETERS]
Model: wan2_7
Duration: 12 s
Aspect ratio: 16:9
Resolution: 1080p
input_files: [{ "id": "<confirmed_id>", "role": "start_image" }]
```

### A123. 写法 B：超精细参数化（电影工业级）

*Source: **lanshu-awesome-ai-video-kit** · `methodology/11-sora-公式.md` (line 39) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/11-sora-公式.md#L39 — MIT*

```text
Format & Look: [duration / shutter / capture format / grain]
Lenses & Filtration: [焦段 / 滤镜 / 偏振]
Grade/Palette: [highlights / mids / blacks 的色调]
Lighting & Atmosphere: [自然光方向 / 反光板 / 雾气]
Location & Framing: [前景 / 中景 / 背景的层次]
Wardrobe & Props: [服装具体细节]
Sound: [diegetic only / specific layers]
Optimized Shot List: [可选 — 多镜头列表]
Camera Notes: [可选 — 镜头规格细节]
Finishing: [可选 — 后期处理参考]
```

### A124. 推荐结构（3-6 句 / 100-150 词）

*Source: **lanshu-awesome-ai-video-kit** · `methodology/12-veo-公式.md` (line 22) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/12-veo-公式.md#L22 — MIT*

```text
[Shot type + framing]. [Subject description]. [Action sequence].
[Style / lighting / mood].
Dialogue: "[short line, 1-2 sentences]"
Audio: [environmental sounds, music cues, sfx layers]
```

### A125. Gen-4 文生视频公式

*Source: **lanshu-awesome-ai-video-kit** · `methodology/13-六大模型公式速查.md` (line 22) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/13-六大模型公式速查.md#L22 — MIT*

```text
[Subject — specific details] [Action — clear verbs] [Setting]
[Camera — framing + movement] [Motion — how it evolves over time]
[Style — film stock / mood / era] [Constraints — no morphing etc.]
```

### A126. 标准模板

*Source: **lanshu-awesome-ai-video-kit** · `methodology/13-六大模型公式速查.md` (line 53) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/13-六大模型公式速查.md#L53 — MIT*

```text
A [subject] [action] in [setting], [style/lighting], [camera], [quality], [no morphing].
```

### A127. 模板 C:多镜头时间轴

*Source: **lanshu-awesome-ai-video-kit** · `methodology/15-seedance-masterclass.md` (line 417) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/15-seedance-masterclass.md#L417 — MIT*

```text
Subject: [角色描述] (@image1 as reference)
Environment: [场景]
Mood: [情绪]
Color logic: [色彩]
Style: cinematic, [风格]

Shot 1 [0s–3s]: [动作]. [Camera]. Audio: [具体音效].
Shot 2 [3s–8s]: [动作]. [Camera]. Audio: [...].
Shot 3 [8s–15s]: [动作]. [Camera]. Audio: [...].

4K, ultra HD, rich detail, sharp clarity, cinematic textures, stable picture.
Maintaining face and clothing consistency without distortion.
Generate the video without subtitles.
```

### A128. Tip 4:迭代编辑(Edit Iteratively)— Gemini Omni 核心差异化

*Source: **lanshu-awesome-ai-video-kit** · `methodology/16-gemini-omni-公式.md` (line 107) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/16-gemini-omni-公式.md#L107 — MIT*

```text
[Iteration 1] Transport the violin to a new environment
[Iteration 2] Make the violin invisible
[Iteration 3] Change the camera angle so it's looking over the violinist's shoulder
```

### A129. 1. 核心 Prompt 公式(6 要素黄金公式)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 37) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L37 — MIT*

```text
[Subject] is [Action] in [Scene/Environment]. [Camera Movement], [Style/Composition]. AUDIO: [Audio/Ambiance].
```

### A130. 1. 核心 Prompt 公式(6 要素黄金公式)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 42) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L42 — MIT*

```text
Reference @character1 for the [Subject]'s appearance, and @Image2 for the environment.
Fully reference @Video1 for all camera movements and character actions.
[Subject] is [Action] in [Scene/Environment]. [Camera Movement], [Style/Composition].
AUDIO: [Audio/Ambiance].
```

### A131. 1. 核心 Prompt 公式(6 要素黄金公式)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 50) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L50 — MIT*

```text
Reference Setup: Use @character1 for the main character's appearance, @Image2 for the setting,
and fully reference @Video1 for camera motion and pacing. Preserve character appearance from input image.
Scene Setup: [Overall environment, lighting, and global style details]
SHOT 1 (0:00-0:05): [Camera angle/movement]. @character1 does [first action].
SHOT 2 (0:06-0:10): [New camera angle/movement]. @character1 does [next action].
AUDIO: [Specific background sounds, foley effects, and exact "dialogue in quotes"]
```

### A132. 时间码分段格式

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 179) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L179 — MIT*

```text
SHOT 1 (0:00-0:05): [Camera angle]. [Character] does [action].
SHOT 2 (0:06-0:10): [New camera]. [Character] does [next action].
SHOT 3 (0:11-0:15): [Camera]. [Resolution action].
AUDIO: [环境音, "对白必须加引号"]
```

### A133. 模板 A:6 要素单镜头(最常用)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 403) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L403 — MIT*

```text
[Subject] is [Action] in [Scene/Environment]. [Camera Movement], [Style/Composition]. AUDIO: [Audio/Ambiance].
```

### A134. 模板 B:带参考图单镜头

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 409) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L409 — MIT*

```text
Reference @character1 for the [Subject]'s appearance, and @Image2 for the environment.
Fully reference @Video1 for all camera movements and character actions.
[Subject] is [Action] in [Scene/Environment]. [Camera Movement], [Style/Composition].
AUDIO: [Audio/Ambiance].
```

### A135. 模板 C:多镜头时间码

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 418) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L418 — MIT*

```text
Reference Setup: Use @character1 for the main character's appearance, @Image2 for the setting,
and fully reference @Video1 for camera motion and pacing.
Scene Setup: [Overall environment, lighting, and global style details]
SHOT 1 (0:00-0:05): [Camera angle/movement]. @character1 does [first action].
SHOT 2 (0:06-0:10): [New camera angle/movement]. @character1 does [next action].
AUDIO: [Specific background sounds, foley effects, and exact "dialogue in quotes"]
```

### A136. 模板 F:Storyboard 分段生成

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 447) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L447 — MIT*

```text
Generate scenes [N1] to [N2] from the storyboard reference.
[Style descriptor]. [POV / camera style].
Consistent character appearance, realistic [setting] moments.
```

### A137. 模板 B:Multi-Shot 6 镜头(15s 内)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/18-kling-masterclass.md` (line 1262) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/18-kling-masterclass.md#L1262 — MIT*

```text
Shot 1 (0-3s): [type of camera angle] + [character action] + [environment]. 
  Audio: [具体音效].
Shot 2 (3-6s): [新角度] + [新动作]. Audio: [...].
Shot 3 (6-9s): [新角度] + [新动作]. Audio: [...].
Shot 4 (9-12s): [新角度] + [新动作]. Audio: [...].
Shot 5 (12-15s): [收尾]. Audio: [...].
[Each shot ≤ 500 characters, ≥ 3s.]
```

### A138. 五段式 Prompt 骨架(Five-Part Spine)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/19-seedance-masterclass-round3.md` (line 317) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/19-seedance-masterclass-round3.md#L317 — MIT*

```text
1. Subject  — 立刻写主体,不要先写背景。含 @tag 锁定身份 + 年龄/材质等具体词
2. Action   — 一个镜头一个主动词,现在时。禁止 "running and reloading while shouting" 这种复合
3. Camera   — 位置在 Action 之后。格式:Camera: [move] + [speed] + [subject lock]
              禁止在同一子句叠加 pan+zoom+dolly,复合运动必须用时间分段
4. Style    — 末尾,用一个强视觉锚(如 "Blade Runner aesthetic")
              不要堆砌通用形容词
5. Constraints — 否定语言明确禁止(no text overlays, no speed ramps, etc.)
```

### A139. FPV path-drawing template (author @MrLarus — keep attribution)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/21-fpv-航拍路径绘制玩法.md` (line 47) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/21-fpv-航拍路径绘制玩法.md#L47 — MIT*

```text
请擦除红线、箭头和所有辅助标记。红线和箭头仅作为镜头运动路径参考,
最终成片中不得出现。镜头以第一人称 FPV 视角呈现,超高速、电影级、
一镜到底,严格沿着图片中的红色路径运动,不要偏离、不要跳步、不要
简化路线。镜头从【起点】开始,经过【节点1】,随后【节点2】,再到
【节点3】,最后到达【终点主体】并完成【收尾动作】。画面要求超写实、
运动顺滑稳定、速度感强、空间连续清晰,不要重复建筑、不要变形、
不要文字、不要水印。
```

### A140. hg-001 — Higgsfield DoP 模板:Push In (higgsfield-soul, 16:9, 5s; orig. source: Higgsfield https://higgsfield.ai/)

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Slow push in. Medium close-up of a woman with dark wet hair under a flickering streetlamp at night. Her eyes track something off-frame to the left. Rain falls steadily, lit only by the lamp.
```

### A141. hg-002 — Higgsfield DoP 模板:Whip Pan (higgsfield-soul, 9:16, 4s; orig. source: Higgsfield https://higgsfield.ai/skills)

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Whip pan from left to right. A skater lands a trick on wet pavement at night. Neon signs streak in the motion blur. Cut on the landing impact.
```

### A142. hg-004 — Higgsfield DoP 模板:Crash Zoom (higgsfield-soul, 21:9, 4s; orig. source: Higgsfield · DoP Skills (Crash Zoom) https://higgsfield.ai/s

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Crash zoom from wide establishing to extreme close-up on the protagonist eye, the moment of realization frozen in his iris where a tiny silhouette approaches from far behind, cold cyan rim light with dim ambient fill, shallow focus, 24fps, single take with consistent character ID, no morphing of background plates.
```

### A143. hg-008 — Higgsfield 90s 短片完整结构 (higgsfield-soul, 21:9, 90s; orig. source: Higgsfield AI Director https://higgsfield.ai/blog/ai-short-film-yo

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
90-second cinematic short. [Soul ID: detective]. Opening: rainy noir alleyway, detective lights a cigarette, voiceover begins. Middle: flashback intercut — daytime cafe meeting with mystery client. Climax: chase through wet streets, jump cuts, motion blur. Ending: detective walks away into the rain, camera pulls back to high crane shot, title card fades in. Cold noir palette throughout with selective warm accents on key emotional beats.
```

### A144. sd-068 — Gladiator POV(罗马角斗士) (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 3 POV Gladiator https://higgsfield.ai/s/seedance-2

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
One continuous shot, POV gladiator perspective in the Colosseum arena, no cuts, no zoom, natural head movement, a furious enemy warrior sprints straight toward the camera through thick dust and sunlight, heavy footsteps shaking the ground, as he reaches close the POV character reacts instantly — grabs him mid-charge and slams him violently onto the sand, powerful impact, dust explosion, no pause, immediate chaos erupts all around, multiple gladiators fighting simultaneously, intense close combat everywhere, swords clashing, shields smashing, archers releasing arrows overhead, a chariot bursts through the scene, POV character fights barehanded with raw force — blocking strikes, grabbing opponents, throwing them aside, camera shaking from impacts, breath sounds, dust in the air, dramatic sunlight beams cutting through shadows, epic scale, photorealistic, motion blur on hits. Total: 15s / 1 shot / 16:9.
```

### A145. sd-069 — 中世纪骑士 POV(极简版) (seedance-2.0, 16:9, 8s; orig. source: Higgsfield · Format 3 Medieval Knight (Minimal) https://higgsfield.ai/s/seeda

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
A single-frame POV video of a medieval knight riding a horse with a sledgehammer in his hands, riding and fighting epically, smashing his opponents with a sledgehammer while riding a horse, to make it look realistic with blood.
```

### A146. sd-070 — 火车顶武士对决(Train Rooftop Fight) (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 4 Train Rooftop https://higgsfield.ai/s/se

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Single continuous shot 15s: The camera begins below the train roof level — an extreme low angle looking up, the grey sky above and the train's metal roof surface filling the upper frame, power line cables visible on both sides, electric sparks already arcing between the cables and the roof surface. The FPV arm accelerates upward and crests the rooftop edge just as both female samurai warriors sprint into frame from opposite ends — dark armor catching the electric flash light, katanas already drawn — the camera dropping to roof level and sweeping into a full 360-degree orbit around both fighters as they clash center-roof, blades ringing, feet sliding on the curved metal surface, electric sparks erupting in curtains. The orbit completes and camera settles tight behind the first warrior as she draws back her katana in a full overhead swing — motion ramping into deep slow motion, the second warrior already reading the strike, arching her entire body backward in a deep spine bend, the blade passing centimeters from her face, a single small lock of dark hair separating in the slow motion wind. Motion snaps back as the second warrior drives her elbow into the first warrior's chest, both fighters exchange rapid blade-locked strikes, then lock arms, pivot, and drive each other off the edge — both bodies leaving the roof, tumbling sideways, camera descending with them, both hitting the river surface in twin white explosions, camera plunges beneath the surface — the world going deep blue-green, sunlight filtering down in shafts, both warriors still moving through the underwater space, the fight continuing in the silent slow drift of the river current. NO MUSIC / NO SFX. Total: 15s / 1 shot / 16:9.
```

### A147. sd-071 — Lollipop Girl 工业厂房格斗 (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 4 Lollipop Girl https://higgsfield.ai/s/seedance-2

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Medium wide shot in a dark industrial warehouse, muscular bald man with black tribal face paint and open camouflage tactical vest over bare chest — squares off against a petite young woman half his size with messy dark hair and bangs, oversized gray sweatshirt slipping off one shoulder, dark pleated mini skirt, knee-high black socks, lollipop stick hanging from her lips. The big man swings a massive haymaker — she ducks under it effortlessly and delivers a rapid three-punch combo to his gut, the painted fighter doubles over in shock, she springboards off a metal crate and leaps onto his back wrapping both arms around his neck in a chokehold, the big man spins wildly trying to shake her off, crashing into steel shelving units that collapse in a domino chain, he finally grabs her by the back of her sweatshirt and hurls her across the room — she flips mid-air and lands on her feet sliding backward, pulls the lollipop from her mouth, grins, charges back in low to the ground weaving between his legs and delivers a devastating uppercut, the painted fighter's eyes go wide, slow-motion knees buckling, she winds up a running flying right hook that connects with the jaw sending him toppling backward like a felled tree through a stack of wooden pallets, dust cloud erupting on impact, harsh single-source overhead industrial light, warm amber on skin with cool steel-blue environment, anamorphic 35mm, Guy Ritchie speed-ramping with Snyder impact slow-motion. Total: 15s / 1 shot / 16:9.
```

### A148. 输出模板

*Source: **lanshu-awesome-ai-video-kit** · `skills/prompt-translator/SKILL.md` (line 121) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/skills/prompt-translator/SKILL.md#L121 — MIT*

```text
## 转换结果

**源模型**: [Sora 2] · **目标模型**: [Kling 3.0]
**参考场景**: [scene-N-xxx · 用户输入最像哪个对照场景]

\`\`\`
[转换后的目标模型 prompt — 必须带上表对应标签]
\`\`\`

## 转换映射(供检查)

| 源结构 | 目标结构 | 注释 |
|---|---|---|
| Style: ... | Scene: + Audio & Style: | Sora 单一 Style 段拆成 Kling 的环境+风格混合 |
| Cinematography: ... | Camera: | 字段重命名 |
| Actions: - beat - beat | Action: 流畅描述 | 按 beats 列表合并成自然语言 |
| Background Sound: ... | Audio & Style: | 合并进风格段 |
| (无角色对白栏) | (保留对白嵌入 Action) | Kling 5 层不单独分对白 |

## 注意事项

- ⚠️ [目标模型] 与 [源模型] 在 [某能力] 上有差异:[具体说明,例如 "Kling 中文比 Sora 强,可考虑改成中文版本"]
- 💡 推荐参数:[根据目标模型给出宽高比/时长/分辨率建议]
- 🔄 如果效果不理想,试试:[备选转换方向,如再转 Veo 用多人对话能力]
```

### A149. 步骤 2：按 8 要素填充

*Source: **lanshu-awesome-ai-video-kit** · `skills/seedance-prompter/SKILL.md` (line 48) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/skills/seedance-prompter/SKILL.md#L48 — MIT*

```text
[Subject with 2-3 stable identifying features].
[Action with specific body parts + speed/intensity].
[Scene/environment].
[Light source + time of day + color tone].
[Camera size + movement + angle].
[Visual style + film grain/aesthetic anchor].
[Quality: cinematic / 4K / photorealistic].
[Negative: avoid ...; no watermark; no logo; preserve face stability].
```

### A150. 10. Specification Template

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/references/cinematography-specification.md` (line 272) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/references/cinematography-specification.md#L272 — ISC*

```text
#### 2.3 Cinematography Specification

* **Format:** {Gauge / sensor equivalent}
* **Stock / sensor:** {Named stock or sensor family}
* **Aspect ratio:** {Width:height}
* **Target resolution:** {e.g. 1920×1080, 1344×768, or 1080×1920}
* **Generation resolution parameter:** {e.g. 1080p; model-specific equivalent}

* **Grain:**
  * Size: {fine / medium / coarse}
  * Distribution: {even / shadow-heavy / midtone}
  * Character: {organic / digital}
  * Exposure response: {description}

* **Colour process:** {Named process or description}

* **Colour timing:**
  * Overall bias: {cool / warm / neutral}
  * Shadows: {colour}
  * Midtones: {colour}
  * Highlights: {colour}
  * Saturation: {pulled / pushed / selective}
  * Scene-specific overrides:
    * {Condition}: {timing adjustment}
    * {Condition}: {timing adjustment}

* **Grading:**
  * Blacks: {crushed / lifted / milky}
  * Contrast: {low / medium / high}
  * Highlight rolloff: {hard / gentle / blown}
  * Shadow detail: {preserved / crushed}

* **Lens language:**
  * Type: {primes / zooms / anamorphic / spherical}
  * Focal range: {range}
  * Aberrations: {halation, flare, bokeh shape}
  * Vintage/modern: {description}

* **Depth of field rules:**
  * {Context}: {rule}
  * {Context}: {rule}

* **Shutter:** {Default angle; overrides}

* **Camera motion grammar:**
  * {Context}: {motion rule}
  * {Context}: {motion rule}
```

### A151. Prompt Template

*Source: **visual-storytelling-skills** · `skills/shot-specifier/SKILL.md` (line 390) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/shot-specifier/SKILL.md#L390 — ISC*

```text
# {S{XX}_SH{XXX}} — Video Prompt

## Metadata
- **Shot ID:** S{XX}_SH{XXX}
- **Scene:** SC-{XX} — {scene name}
- **Duration:** {4 / 6 / 8} seconds
- **Pacing:** {slow / moderate / fast}
- **Clip boundary (next):** {continuous / scene_cut}
- **Recommended model:** {model ID — see references/model-routing.md}
- **Model routing rationale:** {1 sentence explaining the routing choice}
- **Generation strategy:** {image_to_video / start_end_image / multi_shot / motion_control}
- **Aspect ratio:** {16:9 / 9:16 / 1:1 / 21:9}
- **Target resolution:** {pixel dimensions from cinematography spec}
- **Resolution parameter:** {720p / 1080p / model-specific equivalent; provider hint
  only until video-generator verifies actual pixels}
- **Model overrides:** {key=value list for live MCP defaults; include audio,
  quality/mode, cfg/guidance, genre, or "none"}
- **Count:** {1 by default; 2 only for review-gated hero/uncertain shots when
  video-generator confirms the live schema supports it}
- **Audio generation:** ambient={on/off}; sfx={on/off}; dialogue={on/off};
  music=off; narration=off; source={generated/none/supplied}

## Frames
- **Start frame:** shots/{shot_id}/start.png
- **End frame:** shots/{shot_id}/end.png
- **Key frames:** {paths or "None"}

## Reference Roles
- **start_image:** {file path}
- **end_image:** {file path}
- **image (subject):** {file path(s)}
- **image (style):** refs/style/style_anchor_01.png

## Reference Audit
- **Required refs:** {character/location/prop/recurring/style refs that must be uploaded}
- **Continuity-critical refs:** {refs named by continuity inventory or Phase 6 report}
- **Baked-frame refs:** {continuity-critical refs that cannot be uploaded to the chosen
  video model and therefore must be present in the start/end frames}
- **Reference priority:** start,end,principal_character,hero_prop,recurring_element,
  location,style
- **Missing or blocked refs:** {None or blocker}

## Prompt

[STYLE] {Global style phrase from keyword library}
[FILMSTOCK] {Filmstock phrase from keyword library}
[SCENE] {Location vocabulary + lighting condition vocabulary + global negative constraints}
[FRAMING] {Frame size, lens, camera mount, motion path}
[PACING] {slow / moderate / fast — with clip-specific meaning}
[ACTION] {transition_description — 2–4 sentences; subject appearance, movement trajectory,
         state changes, existence statements}
[SUBJECT] {Subject key visual features for consistency}
[AUDIO] {Audio direction from Phase 4.5}
[DURATION] {4 / 6 / 8 seconds}

## Audio Generation Preferences
- **Ambient audio:** {on/off}
- **Sound effects:** {on/off}
- **On-screen dialogue/lip-sync:** {on/off; exact lines if on}
- **Music:** off unless diegetic music is visible in-frame
- **Narration:** off; narration is a separate process
- **Audio source:** {generated / none / supplied}
- **Preserve silence:** {true/false}

## Generation Prompt

{Model-native plain text assembled with the algorithm in `references/model-routing.md`.
This is the exact prompt `video-generator` submits to Higgsfield.}

## Consistency Notes
- {Any WARN items from storyboard consistency check}
- {Continuity flags from shot list}
- {Action taken for each WARN/continuity item: regenerated frame, added reference,
  injected prompt constraint, or blocker}
```

### A152. Video Prompt (assembled in Phase 7)

*Source: **visual-storytelling-skills** · `skills/shot-specifier/templates/shot-spec-template.md` (line 113) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/shot-specifier/templates/shot-spec-template.md#L113 — ISC*

```text
[STYLE] {Copy from keyword library}
[FILMSTOCK] {Copy from keyword library}
[SCENE] {Location + lighting vocabulary + negative constraints — copy from keyword library}
[FRAMING] {Frame size + angle + lens + camera motion}
[PACING] {slow / moderate / fast — with clip-specific meaning}
[ACTION] {2–4 sentences: subject appearance, movement, state changes, existence statements}
[SUBJECT] {Key visual features for consistency}
[AUDIO] {From audio direction above}
[DURATION] {4 / 6 / 8 seconds}
```


## B. Product ad / DTC

### B153. prompt-examples — Coffee Mug — Morning Ritual

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 444) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L444 — MIT*

```text
Model: Kling 2.6 (video) / Nano Banana Pro (image)
Aspect: 16:9 | Duration: 5s | Style: Cinematic commercial

A matte black insulated mug, minimal design, no branding.
Placed on raw concrete countertop beside a morning window.
Camera: Robo Arm arcing slowly from base up around to the lid.
Hot coffee pours in — steam rises in macro close-up.
A hand wraps around the mug. Camera: Dolly In to hands + warmth detail.
Style: Cinematic commercial. Warm neutral tones, soft diffused natural light. 16:9.
Sound: quiet liquid pour, subtle ceramic texture.
```

### B154. prompt-examples — Sneaker Drop

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 458) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L458 — MIT*

```text
Model: Nano Banana Pro (image) → Kling 2.6 (video)
Aspect: 1:1 | Style: Cinematic

A single sneaker — white with minimal branding — suspended mid-air against a black void.
Dust particles float around it, backlit by a single strong side-light.
Camera: 3D Rotation — full 360 reveal.
Style: Cinematic. Pure black background, sharp product detail, 4K. 1:1.
```

### B155. prompt-examples — Coffee Beans — Label Iteration — Seedance 2.0 (Edit Shot)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 470) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L470 — MIT*

```text
Model: Seedance 2.0 (Edit Shot mode)
Aspect: 1:1 | Duration: 6s | Style: Commercial

[Source clip: the existing "Coffee Mug — Morning Ritual" generation]

Change the coffee bag in the background from the kraft-paper version to a
matte-black version with a single copper foil logo. Keep the steam, the
ceramic mug, the wooden counter, the light direction, and the camera move
unchanged.

Preserve identity, composition, lighting, and camera behavior from the
original. Preserve the morning window light, the warm tones, and the
shallow depth of field.

Camera: unchanged from source — slow push-in toward the mug.

Audio: same as source — kitchen ambience as the primary content, layered:
the low refrigerator hum two rooms over, faint traffic through a closed
window, the air itself in a quiet morning kitchen. The kettle's distant
whistle and the ceramic-on-wood touch sit inside the ambience, not on top
of it. No music.
```

### B156. Structure

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/SKILL.md` (line 156) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/SKILL.md#L156 — MIT*

```text
Please automatically generate a [output type] centered around [THEME].

Require the AI to automatically derive and uniformly design the entire following visual system based on this theme, without my extra specification:
- [list of derivations the model should make — core subject, supporting structure, hovering elements, color hierarchy, material contrast, lighting, typography, etc.]

[Overall Style]
[specific style direction — "cel-shaded illustration", "ultra-realistic 3D commercial CGI rendering", "watercolor and ink hand-drawn illustration", etc.]

[Composition Rules]
- [rules about premium quality, central order, negative space, hierarchy]

[Visual Quality]
- [rules about detail level, lighting, materials]

[Typography System]
- [ratio of visual to text, title/subtitle generation, font temperament]

[Signature]
Naturally add the signature "[NAME]" in the [position].
```

### B157. Mode A — Reference swap (when reference_image is present)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` (line 164) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md#L164 — MIT*

```text
Image 1 shows the reference ad layout. Use it as a structural template only — keep
the layout format, zone positions, element placement, and spacing. Replace everything
visual with the target brand's identity: background colour [BRAND BG from
visual-guidelines], typography [BRAND TYPEFACE + WEIGHT], accent colours
[BRAND ACCENT COLOURS]. Replace the product with the exact [BRAND PRODUCT] from
images 2+. Replace all copy with [VARIATION COPY]. Replace any third-party trust
badge with [BRAND TRUST SIGNAL]. Do not carry over any colour, typeface, or visual
treatment from the reference — those belong to another brand. [ASPECT RATIO] aspect
ratio. Safe zones: keep the top 10% and bottom 10% of the frame free from text,
logos, icons, buttons, and UI elements — photographic content such as hands, arms,
or product edges entering the frame is fine.
```

### B158. Mode B — Text-driven layout (no reference_image)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` (line 182) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md#L182 — MIT*

```text
Create: [AD FORMAT DESCRIPTION]. Background: [BRAND BG COLOR]. [ZONE-BY-ZONE
DESCRIPTION using brand typefaces, colours, and copy]. Product: exact
[BRAND PRODUCT] from images 1+. [ASPECT RATIO] aspect ratio. Safe zones: keep the
top 10% and bottom 10% of the frame free from text, logos, icons, buttons, and UI
elements — photographic content such as hands, arms, or product edges entering the
frame is fine.
```

### B159. 5.1 — iMessage / DM Conversation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` (line 227) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md#L227 — MIT*

```text
Use the attached images as brand reference for product design ONLY. Do NOT use polished
ad layouts. This must look like a real screenshot. Create: a static ad designed to look
like a genuine iMessage conversation screenshot. White background. Top: realistic iOS
header bar — centered contact name "[FIRST NAME]" in bold black with a gray circular
avatar initials icon, small gray "iMessage" label below the name, small blue "<" back
arrow left, blue "ⓘ" info button right. Below: a realistic iMessage thread. Three to
five message bubbles, alternating sides. Messages from the friend [gray bubbles,
left-aligned]: first bubble "[OPENING LINE — casual and natural, e.g. 'wait have you
tried [product category] yet?']". Second bubble "[FOLLOW-UP — a specific reason or
personal result, conversational, with an emoji]". Messages from the recipient
[blue bubbles, right-aligned]: one or two short skeptical or curious replies, e.g.
"[REPLY 1]" and "[REPLY 2]". Final gray bubble from the friend: "[CLOSING LINE —
product or brand mentioned naturally, recommendation energy, e.g. 'it's called
[BRAND], they have a deal rn']". Below the last bubble: a realistic iMessage link
preview card — rounded rectangle with [BRAND COLOR] header strip, small product
thumbnail left, bold black title "[PRODUCT NAME]" right, gray subtitle "[BRAND] ·
[TAGLINE or URL]". Timestamp "[TIME]" and blue "Delivered" in small text below.
iPhone bottom bar: white background, gray rounded text input field reading "iMessage",
camera and audio icons either side. No brand logo overlay. Should look exactly like a
screenshot a friend would text you. [ASPECT RATIO] aspect ratio.
```

### B160. 5.2 — Scarcity / Countdown Urgency

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` (line 254) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md#L254 — MIT*

```text
Use the attached images as brand reference. Match the exact product design, colors,
and typography style precisely. Create: a high-urgency limited-stock ad on a
[BACKGROUND COLOR] background. Top: small [ACCENT COLOR] all-caps label
"[URGENCY TAG]" in a rounded pill shape. Below: large bold white uppercase
sans-serif headline "[OFFER HEADLINE]". Second line in [ACCENT COLOR]:
"[SECONDARY HOOK — e.g. 'Only [N] left at this price.']". Center: product hero
shot on the dark background, clean studio lighting with dramatic rim light on one
edge. Below the product: a horizontal stock progress bar — [BRAND COLOR] fill
approximately [FILL %] full on the left, gray empty track on the right. Left label:
"[SOLD COUNT]" in small white text. Right label: "[REMAINING]" in small
[ACCENT COLOR] text. Below the bar: a realistic digital countdown timer with four
colon-separated blocks — days, hours, minutes, seconds — each in a dark
rounded-rectangle tile with white bold monospace digits and small gray labels. Below
timer: a large [ACCENT COLOR] rounded-rectangle CTA button spanning most of the
width, bold white text "[CTA TEXT]". Very bottom: small gray disclaimer text
"[DISCLAIMER]". Brand logo top-right corner in white. [ASPECT RATIO] aspect ratio.
```

### B161. 5.3 — Ingredient Spotlight / Clean Label

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` (line 277) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md#L277 — MIT*

```text
Use the attached images as brand reference. Match the exact product design and brand
colors precisely. Create: an educational ingredient-spotlight ad on a
[BACKGROUND COLOR] background. Top: small [BRAND COLOR] uppercase pill label
"[CATEGORY TAG — e.g. 'KEY INGREDIENT' / 'THE SCIENCE']". Below: large bold
[BRAND COLOR or dark] serif or heavy sans-serif headline: "[INGREDIENT NAME]." —
just the ingredient name with a period, confident and clinical. Below headline: a
dominant close-up photorealistic image of [THE INGREDIENT in natural form], macro
shot, sharp focus, soft diffused studio lighting — ingredient fills approximately 40%
of the total frame. To the right of or below the ingredient image: three stacked fact
rows, each with a [BRAND COLOR] filled bullet or thin left-border line: Row 1: bold
"[FACT LABEL 1:]" followed by one sentence on what the ingredient is. Row 2: bold
"[FACT LABEL 2:]" followed by one sentence on what it does. Row 3: bold
"[FACT LABEL 3:]" followed by one sentence on sourcing, dose, or form superiority.
Below the fact rows: product at a slight angle, clean studio lighting, partial crop
acceptable. To the left of the product: a small circular trust badge
"[TRUST BADGE TEXT]" in [BRAND COLOR] with white text. Brand logo bottom right,
small. No stars, no reviews, no CTA button. [ASPECT RATIO] aspect ratio.
```

### B162. `avatars` is a SEPARATE top-level media slot — not a nested parameter

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 224) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L224 — MIT*

```text
generate_video(
  params={
    model: 'marketing_studio_video',
    prompt: '<optional>',
    duration: 8,
    aspect_ratio: '9:16',
    resolution: '720p',
    generate_audio: false,
    hook_id: '<uuid>',         # UGC family only
    setting_id: '<uuid>',      # UGC family only
  },
  avatars=[{id: '<uuid>', type: 'preset'}],   # max 1 — see §5
  medias=[
    {value: '<product uuid or url>', role: 'image'},
    {value: '<location image>', role: 'image'},    # optional
    {value: '<packaging asset>', role: 'image'},   # optional
  ]
)
```

### B163. 10.1 — Pro Virtual Try-On — Liquid Scan Transition

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 354) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L354 — MIT*

```text
all HIGGS items including: white jersey t-shirt, neon yellow puffer jacket, black
track pants with neon green stripe, grey sneakers with neon yellow laces, and
black-to-neon-yellow gradient sunglasses. the female model — use her exact face,
hair, and body throughout the entire video without any changes.

CAMERA: COMPLETELY STATIC throughout the entire video. Fixed position, fixed
angle, zero movement. Only subjects and objects move within the frame.

Location part 1: Urban pedestrian overpass bridge. Glass-panel ceiling above
letting in diffused grey daylight. Metal railings on both sides, concrete floor,
city street with traffic visible far below. Overcast natural lighting.

Location part 2: Dark underground parking garage. Single harsh overhead lamp,
tight pool of light on concrete floor, deep shadows, concrete pillars in background.

0–3s: FULL BODY SHOT — static camera, low angle pointing upward. Female
model stands centered on the overpass in her own clothes, relaxed stance. She
raises the HIGGS sunglasses pinched between two fingers, cocks her wrist back,
then THROWS the glasses forward toward the camera with a sharp snap. The
sunglasses fly directly at the static lens in full 3D — tumbling and spinning in slow
motion, growing larger frame by frame until they nearly fill the screen. Glasses
stay fully intact. Neon yellow frame catches daylight. Model stands still in the
blurred background. CAMERA DOES NOT MOVE.

4–7s: The glasses reach maximum size, SLOW DOWN, STOP mid-air, then
REVERSE on their own — flying back toward the model spinning. As they travel
back the model shifts her pose dynamically — she leans her head slightly forward
to meet the glasses, lifts her chin, squares her shoulders with attitude. The
glasses arc back and land perfectly onto her face. CAMERA STATIC.

8–10s: THE MOMENT the glasses touch her face — LIQUID SCAN TRANSITION: a
wave of liquid mercury ripples outward from her face across the entire frame, like
a 3D scan pulse sweeping through space. The overpass environment MELTS and
DISSOLVES in 3D depth — the bridge, railings, ceiling peel away in layers like
liquid geometry dissolving into the scan wave. The dark parking garage
MATERIALIZES through the liquid scan, environment rebuilding itself in 3D layers
from background to foreground as the wave passes. Simultaneously the full
HIGGS outfit liquifies onto her body: white jersey t-shirt, neon yellow puffer jacket,
black track pants with neon green stripe, grey sneakers with neon yellow laces —
all five items flow onto her in one fluid wave synced with the environmental scan.
The model strikes a new powerful pose as the outfit locks in — weight shifted to
one leg, one hand at side, chin up. CAMERA STATIC.

11–15s: MEDIUM CLOSE-UP — static camera at chest-to-head height. She stands
fully dressed in all HIGGS items in the parking garage. Hard overhead lamp light,
sharp shadows. She adjusts sunglasses with one finger, holds the pose, stares
directly into camera with cold confident expression. No glow, no outlines on body.
Cinematic grade — deep blacks, punchy contrast, neon yellow only as real material
color on clothing. 9:16 vertical.
```

### B164. 10.4 — Pro Virtual Try-On — Skateboard Outfit Change

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 477) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L477 — MIT*

```text
The character — dark hair, grey tank top, oversized dark red baggy jeans,
crossbody tactical bag, red bandana on wrist, red paint mark on nose — rides a
skateboard continuously from left to right across the frame. Smooth push, steady
cruise, never stopping. Camera stays strictly side-on the entire time, drifting
smoothly alongside him at constant speed and height, never ahead, never behind,
never rotating. One continuous uncut shot.

As he skates, individual clothing items from the HIGGS collection levitate in the air
ahead of him — floating still, at body height, positioned exactly where they would
sit on a person — waiting. He skates straight through each one without slowing.
The moment he passes through a levitating item it is instantly on his body,
perfectly fitted, as if it was always there. No animation, no effect, no flash — it
simply appears on him as he exits the other side.

Item 1 — white and black HIGGS football jersey: floating at chest height in open air,
he skates through it, it is on him.
Item 2 — black cargo pants with neon green stripe: floating at waist height, legs
hanging naturally, he skates through it, it is on him.
Item 3 — neon yellow-black puffer jacket: floating with sleeves open wide, he
skates through it, it is on him.
Item 4 — grey and neon yellow chunky sneakers: floating at board level, pair side
by side, he skates through them, they are on his feet.
Item 5 — black wraparound sunglasses with neon yellow frame: floating at face
height, he skates through them, they are on his face.

After the last item he is fully dressed in the complete HIGGS collection. He does
not slow down. He pushes once more and keeps skating. Camera drifts to a halt.
He disappears into the distance still rolling. Frame holds on the empty space
where he just was. Silence.

Background: a single continuous urban environment scrolling — raw concrete wall,
cracked asphalt ground with skate marks, hard midday sun casting a sharp
shadow alongside him the entire time. Neon yellow-green appears on wall
markings and signage as he passes.

Sound: continuous skateboard wheel roll on asphalt throughout, occasional push
foot scrape. Each item landing produces no sound. No music. City ambience, wind,
distant traffic. Style: photorealistic cinematic, 2.39:1 Cinemascope, desaturated
warm daylight, neon yellow-green as the only saturated color, streetwear editorial,
identical grain throughout, strict side-on camera drift, one unbroken take.
```

### B165. 10.5 — Wild Card — Levitation in Clouds

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 525) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L525 — MIT*

```text
# LEVITATION IN CLOUDS — ONE SHOT HANDHELD

Style & Mood: Dreamlike high-fashion film. Practical Hollywood VFX — wire-work
levitation with camera operator also suspended on rig. Handheld shaky camera,
real operator breathing and body sway, no stabilization. Golden hour light breaking
through massive cloud formations. Anamorphic 28mm wide, natural film grain,
deep focus. One continuous unbroken shot, no cuts.

Dynamic Description: The camera is already mid-air, shaking with real handheld
weight, chasing the character from @image_1 who flies upright through a vast
open sky between towering cumulus clouds. The character glides ahead of the
camera in a natural standing pose — body vertical, arms slightly away from sides,
head tilted up, the outfit fabric pulling and fluttering backward from wind
resistance. The camera operator struggles to keep up, the framing loose and
imperfect, the character drifting in and out of center frame — the imperfection
sells the reality. The character banks left gently, leaning the whole body into the
turn like a bird, and glides through a narrow canyon between two massive cloud
walls — the camera follows, shaking harder from the turbulence, white vapor
streaking past the lens, momentarily obscuring the shot, then clearing. Golden
sunlight flashes in and out as the character weaves between cloud shadows and
sun pockets — the exposure shifts naturally, bright to dark to bright. The character
reaches one arm forward, fingers spread, dragging through a wisp of cloud, the
vapor splitting around the hand and trailing off the fingertips. The other arm stays
relaxed at the side. The character punches through a thin cloud layer — vapor
exploding around the body — and emerges into open golden sky above the cloud
floor, the sun massive and low on the horizon. The character slows, arms
dropping, floating upright, decelerating gently. The camera catches up and drifts
to face them frontally. The shaking calms. The character hangs still in the golden
light, the infinite cloud ocean below, breathing, fabric settling. The camera holds,
still swaying gently.

Static Description: Vast open sky between massive cumulus cloud formations.
Golden hour sun low on horizon. Single character flying upright in a natural vertical
pose — no flips, no spins, no unnatural body contortion. Handheld camera on wire
rig — real operator shake, no stabilization. Practical wire-work VFX. Real wind, real
cloth physics, real exposure shifts. One continuous unbroken shot. Stylized 3D
animation. 4K, Ultra HD, Rich details, Sharp clarity, Cinematic texture, No
ghosting, No flickering, No text overlays, No watermarks, No subtitles, Stable
picture, Realistic cloth physics.
```

### B166. 10.6 — Wild Card — Jacket (Portal Cuts Between Locations)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 572) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L572 — MIT*

```text
As Roko moves through the frame, vertical floor-to-ceiling rectangular cuts appear
ahead of him in open air — no border, no frame, no door, no arch, just a hard
straight-edged cut where one world ends and another begins. He walks and then
runs straight through each one without slowing.

Location 1 — rooftop of a housing block, midday: raw concrete underfoot, AC units
and satellite dishes, laundry lines overhead, harsh flat sun, city sprawl visible
beyond the edge, pigeons scatter as he passes.
Location 2 — outdoor basketball court, afternoon: cracked asphalt, faded court
markings, chain-link fence casting grid shadows across everything, a ball rolling
slowly across his path.
Location 3 — underpass, bright midday: concrete pillars, graffiti walls, skate marks
on the ground, a lone skater frozen mid-trick in the background, sun cutting in
hard from both ends.
Location 4 — street market, midday: folding tables with bootleg merch, tarpaulin
roofs, people parting as he moves through, cardboard boxes stacked high, sun
bleaching everything pale.
Location 5 — empty parking lot, late afternoon: flat open asphalt, faded yellow
lines, long hard shadows, a shopping cart on its side, heat shimmer off the ground.
Location 6 — rooftop again at golden hour, different building: wider, emptier, just
open sky and city behind him. He slows to a walk. Then stops facing right. Stands
still. Wind moves his clothes. Silence.

The background of each location scrolls naturally as he moves through it. Each
rectangular cut between worlds is pixel-sharp, hard edge, no blending, no
transition effect — just a seam in space. Sound: footsteps on concrete throughout,
texture shifts slightly each location. No music. Wind, city noise, distant traffic.
Style: photorealistic cinematic, 2.39:1 Cinemascope, desaturated warm daylight,
streetwear editorial, identical grain across all six spaces, static side-on camera,
one unbroken take.
```

### B167. 10.7 — TV Spot — Version 1

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 610) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L610 — MIT*

```text
Monochrome city street. Crowds blur past in long exposure. One guy walks toward
camera, wearing acid green and black streetwear. No green elements in the
environment — no lines, no glow. Only the clothing fabric is colored, everything
else is strictly black and white. Cut with fast negative invert flashes — full frame
color inversion, 2-3 frames each through the clip. Quick, cold, confident. Dynamic
streetwear commercial. No VFX. No box unpacking.
```

### B168. 10.8 — TV Spot — Version 2

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 624) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L624 — MIT*

```text
Monochrome city street, empty and cold. Blurred ghostly figures drift past in long
exposure — faceless, weightless, grey. A single figure walks through the street —
full natural color, acid green and black streetwear, face visible, natural confident
walk. Quick cuts between different camera angles — medium front, medium side,
medium close face level. He just walks, no dancing, no posing, no gestures.
Camera orbits around him 180 degrees on one shot. Invert flash on every cut —
full frame color inversion, nothing else. Cut to black. NO visual effects, NO
lightning, NO energy beams, NO particles, NO light trails on the character. Only
full-frame invert flashes on cuts. ABSOLUTELY NO PACKSHOT. NEVER SHOW
ISOLATED PRODUCTS.
```

### B169. 4. Locations stage (Soul Cinema)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/cross-surface-workflow.md` (line 348) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/cross-surface-workflow.md#L348 — MIT*

```text
medias=[
  {value: '<product uuid>', role: 'image'},
  {value: '<location image uuid or url>', role: 'image'},
]
```

### B170. 5. Refinements + packaging stage (Nano Banana Pro)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/cross-surface-workflow.md` (line 369) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/cross-surface-workflow.md#L369 — MIT*

```text
medias=[
  {value: '<product uuid>', role: 'image'},
  {value: '<packaging image uuid or url>', role: 'image'},
]
```

### B171. Pipeline C: Product Campaign (Commercial Chain)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 699) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L699 — MIT*

```text
[Product — describe precisely: material, color, form, no brand name].
[Surface/setting — clean, brand-appropriate].
Camera: [Robo Arm / Lazy Susan / Dolly In].
Lighting: [soft diffused / dramatic side-light / macro backlit].
Style: Commercial quality, [clean/warm/dramatic]. [Ratio].
```

### B172. Recipe 3: Product Advertisement

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 89) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L89 — MIT*

```text
[Product description — no brand name. Color, material, shape, size].
[Setting — surface, environment, lighting setup].
Camera: [Lazy Susan / Robo Arm] revealing [product feature].
[Hero moment — pour, cut, open, glow, activate — macro slow motion].
[Lifestyle context if relevant — who is using it, in what moment].
Style: Commercial ad quality, [clean/warm/dramatic] lighting. [Aspect ratio].
Sound: [product-specific audio cue].
```

### B173. Recipe 3: Product Advertisement

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 100) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L100 — MIT*

```text
A matte black insulated travel mug, minimal design, no branding.
Placed on a raw concrete countertop beside a morning window.
Camera: Robo Arm arcing slowly from the base up around to the lid.
Hot coffee pours in — steam rises in a slow macro shot.
A hand wraps around the mug. Close-up of warmth on the palms.
Style: Cinematic commercial, warm neutral tones, soft diffused light. 16:9.
Sound: gentle liquid pour, soft ceramic texture.
```

### B174. Template 02-product-ugc-showcase — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/02-product-ugc-showcase.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/02-product-ugc-showcase.md#L14 — MIT*

```text
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

### B175. Template 02-product-ugc-showcase — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/02-product-ugc-showcase.md` (line 65) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/02-product-ugc-showcase.md#L65 — MIT*

```text
@Image1 as the product. Smooth 360-degree orbit on a marble pedestal.
Soft studio lighting catches the matte-black finish. Subtle reflection on surface.
Camera: orbit. Style: clean white studio, shallow depth of field.
Audio: soft surface contact, gentle mechanical click.
```

### B176. Master Template

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 18) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L18 — MIT*

```text
MOTION DESIGN AD PROMPT

[OPENING HOOK — 2 SECONDS]
Start with: [hook type from hooks.md]
Visual: [describe primary visual element]
Motion: [specific movement — "explode outward", "morph smoothly", "zoom dramatically"]
Colour: [primary colour palette — dark/light, accent colour]
Sound: [audio element — whoosh, chime, electronic tone, bass drop]

[PRODUCT SHOWCASE — 4–6 SECONDS]
Device setup: [phone, laptop, tablet, multi-device]
Screen content: [what's shown on the interface]
Animation style: [movement pattern from motion-craft.md]
Callouts: [text overlays if needed, timing of appearance]
Transitions: [how each screen change occurs]

[BENEFIT / VALUE COMMUNICATION — 3–4 SECONDS]
Metric / stat: [number or benefit statement]
Visual: [how it is represented — counter, graph, icon, text]
Motion style: [energetic or contemplative]
Colour reinforcement: [brand colour usage]

[CALL-TO-ACTION — 1–2 SECONDS]
CTA text: ["Try Free", "Learn More", "Download Now"]
CTA animation: [how text enters — slide, fade, type-out, bounce]
Background: [changes or remains]
Final visual: [brand logo, product name, or key message]

[PARAMETERS]
Model: marketing_studio_video
Duration: [4–15 s]
Aspect ratio: [e.g., 16:9 for YouTube, 9:16 for TikTok]
Resolution: [480p / 720p / 1080p]
generate_audio: [true / false]
Style tone: [from Visual Style Library in motion-craft.md]
```

### B177. Example 1: SaaS Dashboard Launch (30 seconds)

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 60) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L60 — MIT*

```text
MOTION DESIGN AD PROMPT — SaaS DASHBOARD LAUNCH

[OPENING HOOK — 2 SECONDS]
Start with a Data Visualization Explosion. A single metric ("500K monthly active
users") sits centred on a deep navy background. The number EXPLODES outward in all
directions with particle trails. Small secondary metrics (engagement rate, retention,
revenue) shoot out alongside in rapid succession.
Colour palette: deep navy, electric cyan, and gold. Each number has a subtle glow.
Sound: whoosh as particles explode, ascending electronic chime notes (one per metric).

[PRODUCT SHOWCASE — 4–5 SECONDS]
Explosion particles morph and re-gather into a floating laptop in isometric view.
Dashboard interface now visible: clean grid with charts, metrics, and controls.
Dark premium style; glowing cyan accent traces laptop edges.
Four features highlighted in sequence:
1. Real-time data graph (0.8 s): line graph with animated data points
2. User engagement map (0.9 s): heatmap with gradient colours spreading
3. Revenue metrics card (0.8 s): numbers count upward with visual emphasis
4. Settings/controls panel (0.7 s): UI elements animate as if interactive
Each transition uses a smooth morph effect. Camera pulls back slightly as features
reveal, creating depth.

[BENEFIT COMMUNICATION — 3 SECONDS]
Dashboard fades to 70 % opacity. Large text animates in from left, scaling up:
"See all your data in one place." (1.2 s)
Three benefit callouts slide in from right with 0.2 s stagger:
— "Real-time insights" (icon + text, 0.6 s)
— "Customisable dashboards" (icon + text, 0.6 s)
— "Team collaboration" (icon + text, 0.6 s)
Sound: soft slide whoosh per callout, subtle click at end.

[CALL-TO-ACTION — 1.5 SECONDS]
Dashboard returns to full opacity. Bright cyan button (rounded rectangle) appears
at bottom centre: "Start Free Today". Button pulses (1.2 s scale + glow animation).
Above: "Join 50K+ teams" (fade + slight scale). Logo appears at bottom.

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s (split into multiple 15-s generations for full 30-s arc if needed)
Aspect ratio: 16:9
Resolution: 1080p
generate_audio: true
Style tone: Dark Premium with Data Visualisation elements
```

### B178. Example 2: Mobile App Feature Showcase (15 seconds)

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 110) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L110 — MIT*

```text
MOTION DESIGN AD PROMPT — MOBILE APP FEATURE SHOWCASE

[OPENING HOOK — 2 SECONDS]
Hand Interaction technique. A realistic animated hand appears from the right,
hovering over a floating iPhone at centre. The phone screen is black. As the hand
approaches, the screen illuminates with brand teal. The hand taps decisively.
Background: clean white (Clean Minimal style).
Sound: light tap sound (0.1 s) synced with hand contact.

[APP FLOW DEMONSTRATION — 8 SECONDS]
iPhone screen shows home feed. As hand swipes upward, screen transitions to next
feature (smooth wipe, 0.8 s). Sequence:
1. Home feed (2 s): content cards stacking, new card slides in
2. Messaging (2 s): conversation bubbles appear with animation
3. Discovery/Search (2 s): search bar highlights, results cascade down
4. Profile (2 s): circular profile image appears first, card animates in
App branding throughout; generous white space; hand occasionally taps to trigger.

[KEY BENEFIT — 3 SECONDS]
iPhone screen pauses. Headline slides in from left: "Connect with what matters."
Below: "Share. Discover. Connect." (each word with 0.4 s stagger).
Screen dims to 60 % opacity. Brand teal highlights each word.

[CTA — 2 SECONDS]
Phone returns to full opacity. Glowing CTA button on screen: "Download Now" (pulse
animation). Below phone: company name + app store badges fade in. Phone scales up
10 % for emphasis.

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 9:16
Resolution: 1080p
generate_audio: false
Style tone: Clean Minimal with brand colour accents
```

### B179. Example 3: AI/Data Product Abstract (20 seconds)

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 152) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L152 — MIT*

```text
MOTION DESIGN AD PROMPT — AI & DATA PRODUCT VISUALISATION

[OPENING HOOK — 2 SECONDS]
Code-to-Product Transformation. Black screen with green terminal text:
  $ process data
  > analysing patterns...
  > 1,234,567 data points processed
Text lines explode outward as particles. Screen MORPHS into an abstract data
visualisation: glowing nodes connected by bright cyan lines, floating in 3D space.
Background shifts from black to deep purple.
Sound: electronic ascending tone + data-processing sound effect.

[ABSTRACT VISUALISATION — 6 SECONDS]
Node network animates fluidly. New nodes appear in clusters, lines form connections
dynamically. Palette: deep purple, cyan blue, magenta, lime green accent nodes.
Camera slowly orbits (slight 3D movement), creating dimension.
At 3 s: text overlay "Machine learning powered insights" slides in from top.
At 5 s: metric "99.2 % accuracy rate" animates upward.

[BENEFIT FOCUS — 4 SECONDS]
Visualisation fades to 40 % opacity. Three benefit cards (glassmorphism) appear:
— "Real-time Analysis" (top-left, fade in 0.6 s)
— "Predictive Insights" (top-right, fade in 0.6 s with stagger)
— "Automated Workflows" (centre-bottom, fade in 0.6 s with stagger)
Icons animate from centre outward.

[CLOSING CTA — 3 SECONDS]
Cards fade. Company logo with glowing aura appears. Text: "Power your decisions
with AI" (slides up). CTA button: "Try Free" (neon cyan outline, dark fill, glow).

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 16:9
Resolution: 1080p
generate_audio: true
Style tone: Abstract Data + Neon Cyber
```

### B180. Example 4: Developer Tool Advertisement (25 seconds)

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 196) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L196 — MIT*

```text
MOTION DESIGN AD PROMPT — DEVELOPER TOOL PROMO

[OPENING HOOK — 2 SECONDS]
Glitch-to-Clean Transition. Flickering broken code editor with red error messages.
For 0.8 s: screen flickers and glitches (pixelation, colour shifts, distortion).
Then SNAP — clean code editor resolves: syntax highlighting in perfect colours,
error-free code. Background shifts deep red to deep navy.
Sound: electronic glitch sound (0.3 s) + satisfied "ding" tone.

[TOOL SHOWCASE — 8 SECONDS]
Code editor fills screen (or isometric view). Real code snippets visible.
1. Syntax highlighting (1.5 s): colour-coded elements glow briefly
2. Code completion (1.5 s): popup appears with completions; developer selects one
3. Error detection (1.5 s): red underline appears, transforms into suggestion tooltip
4. Performance metrics (1.5 s): status bar shows "Build time: 0.4 s | Tests: 42/42"
Morph transitions between each section. Palette: dark premium, navy, syntax colours.

[DEVELOPER BENEFIT — 4 SECONDS]
Editor fades to 50 % opacity. Bold text scales in: "Code faster. Catch errors before
they happen." (1.2 s). Three quick-win statements fade in (0.7 s each):
— "Instant syntax suggestions"
— "Smart error detection"
— "Performance insights"
Each line gets an accent colour highlight.

[SOCIAL PROOF — 4 SECONDS]
Stats appear: "Trusted by 10,000+ developers" (scales in), "Average 40 % faster
development" (icon + metric), "5-minute setup, zero configuration" (left-to-right).

[FINAL CTA — 2 SECONDS]
Dark navy background. Large button: "Start Coding Free Today" (bright cyan, glow,
pulse). Below: "No credit card required". Company logo at bottom.

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 16:9
Resolution: 1080p
generate_audio: false
Style tone: Dark Premium with Technical precision
```

### B181. Example 5: B2B Enterprise Platform (30 seconds)

*Source: **higgsfield-skills** · `skills/06-motion-design-ad/references/examples.md` (line 243) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/06-motion-design-ad/references/examples.md#L243 — MIT*

```text
MOTION DESIGN AD PROMPT — B2B ENTERPRISE PLATFORM LAUNCH

[OPENING HOOK — 2 SECONDS]
Isometric Camera Zoom. Isometric view of complex system: multiple connected
modules (Finance, HR, Operations, Analytics) in 3D space. Camera ZOOMS OUT rapidly,
revealing the full interconnected ecosystem. Flowing energy lines connect modules.
Palette: Dark Premium + electric blue data-flow accents.
Sound: rising electronic tone that peaks as zoom completes.

[ECOSYSTEM REVEAL — 5 SECONDS]
Five major modules visible, each with unique glow:
1. Finance Hub (teal)
2. Workforce Management (cyan)
3. Operations Centre (blue)
4. Analytics Engine (purple)
5. Integration Layer (green)
Glowing network of connections flows between modules. Text label: "Unified Platform
for Enterprise" (scales in, glows). Camera slowly pans/orbits.

[BENEFIT LAYER — 6 SECONDS]
Ecosystem zooms back to 60 % opacity. Three benefit headlines slide in from left
(1.5 s each with stagger):
— "Break Down Silos" + "Connect all your business systems in one place"
— "Real-Time Visibility" + "See what's happening across your entire organisation"
— "Automate Workflows" + "Eliminate manual processes"
Subtle icon animations; text colour matches corresponding module glow.

[SOCIAL PROOF — 4 SECONDS]
Stats: "Used by 500+ Fortune 500 Companies" (number animates up), "99.99 % Uptime",
"24/7 Enterprise Support". 2–3 recognisable company logos fade in.

[CTA — 3 SECONDS]
All fades to black (hold 0.5 s). Company logo appears with glowing aura. "Transform
Your Enterprise". CTA button: "Request a Demo" (bright cyan, pulse). "See results
in 30 days".

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 16:9
Resolution: 1080p
generate_audio: true
Style tone: Dark Premium + Isometric Tech
```

### B182. Master Template

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 18) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L18 — MIT*

```text
E-COMMERCE AD PROMPT

[PRODUCT NAME AND CONTEXT]
Generate a [LENGTH]-second e-commerce product advertisement for [PRODUCT].
Target: [AUDIENCE] on [PLATFORM].

[HOOK — 0–2 SECONDS]
Hook type: [from hooks.md]. [DETAILED VISUAL DESCRIPTION].

[PRODUCT SHOWCASE — 2–X SECONDS]
Main sequence: [ANGLE]. [LIGHTING]. [CAMERA MOVEMENT].
Show [SPECIFIC PRODUCT DETAILS — texture, colour, key features].

[LIFESTYLE INTEGRATION — X–Y SECONDS]
Context sequence: product in use. Setting: [SETTING]. Emotion: [EMOTION].
Aspirational context: [WHAT LIFE LOOKS LIKE WITH THIS PRODUCT].

[TEXT AND CTA]
Overlay text at [TIMESTAMP]: "[TEXT]"
Final CTA: "[CALL TO ACTION]" with [ANIMATION TYPE].

[PARAMETERS]
Model: marketing_studio_video
Duration: [4–15 s]
Aspect ratio: [platform format]
Resolution: [480p / 720p / 1080p]
generate_audio: [true / false]
Colour grade: [aesthetic description]
```

### B183. Example 1: Luxury Fashion — Designer Jumpsuit

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 53) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L53 — MIT*

```text
E-COMMERCE AD PROMPT — LUXURY FASHION JUMPSUIT

[PRODUCT CONTEXT]
25-second e-commerce fashion ad for a high-end designer jumpsuit.
Target: luxury fashion shoppers on Instagram and TikTok.

[HOOK — 0–2 SECONDS]
Black screen. Text appears "New Season. New You." A hand reaches into frame from
the left holding the folded jumpsuit in premium pearl-white fabric. The hand pulls
it into frame — luxury fabric with intricate detail visible: fine stitching, subtle
sheen, sophisticated gradient.

[PRODUCT SHOWCASE — 2–10 SECONDS]
The jumpsuit unfolds across the frame. Smooth 360-degree rotation showing:
- Front facing: clean minimalist neckline, tailored waist, elegant drape
- Side angle: depth of fit, fabric movement
- Back detail: dramatic open-back design with delicate straps
- Close-up macro: intricate beading detail on shoulders catching light
Invisible mannequin presentation; background soft white.

[LIFESTYLE INTEGRATION — 10–22 SECONDS]
Woman wearing the jumpsuit at an upscale evening event. She walks slowly, fabric
flows with movement, champagne glass in hand, confident expression. Camera from
multiple angles: full body, waist detail, fabric texture as she moves. She turns
and smiles. Text overlay: "Designed for You. Made for Tonight."

[CTA — 22–25 SECONDS]
Product shot returns. Animated button text: "SHOP NOW" with pulsing glow.
Secondary: "Exclusive Online" + "Free Shipping Worldwide."

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s (chain two generations for full 25-s arc if needed)
Aspect ratio: 9:16
Resolution: 1080p
generate_audio: false
Colour grade: Warm golden lighting on lifestyle; cool studio white on product
```

### B184. Example 2: Beauty — Illuminating Serum

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 97) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L97 — MIT*

```text
E-COMMERCE AD PROMPT — LUXURY ILLUMINATING SERUM

[PRODUCT CONTEXT]
20-second skincare ad for a luxury illuminating serum.
Target: women 25–45 on Instagram, Pinterest, YouTube Shorts.

[HOOK — 0–2 SECONDS]
Extreme macro close-up of skin texture — tired, dull, slightly uneven.
Text appears "Dull Skin?" in white sans-serif. Close-up pulls back, revealing
a woman's face at normal angle, looking straight at camera with slight frown.

[PRODUCT REVEAL — 2–4 SECONDS]
Cut to hand holding the serum bottle. Amber-tinted glass; light refracting through
golden luminous liquid catching light. Text: "Hyaluronic Acid + Vitamin C."

[INGREDIENT MOMENT — 4–6 SECONDS]
Macro shot of serum texture — glossy, lightweight, subtle shimmer, glistening.
Text overlay: "Hydrates. Brightens. Glows."

[APPLICATION AND TRANSFORMATION — 6–16 SECONDS]
Woman's finger touches serum droplet, brings to face. Serum blends into skin in
macro close-up — smooth, absorbing quickly. Cut to face at normal angle: skin
noticeably more radiant, glowing, hydrated. She looks in mirror, touches her
glowing cheek, smiles with satisfaction. Final lifestyle: dewy glow, natural light.

[BENEFITS TEXT — 16–18 SECONDS]
Animated text in succession: "Clinically Proven Results" / "Visible Glow in 3 Days"
/ "100% Natural Ingredients."

[CTA — 18–20 SECONDS]
Product bottle centre frame, glowing softly. Price: "$68." CTA: "SHOP SERUM" with
animated underline. "30-Day Money-Back Guarantee." "Flash Sale Ends Tomorrow."

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 1:1
Resolution: 1080p
generate_audio: false
Colour grade: Warm glowing skin tones; bright golden serum bottle
```

### B185. Example 3: Electronics — Noise-Canceling Earbuds

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 144) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L144 — MIT*

```text
E-COMMERCE AD PROMPT — PREMIUM WIRELESS EARBUDS

[PRODUCT CONTEXT]
20-second electronics ad for premium wireless noise-canceling earbuds.
Target: tech-forward consumers on YouTube Shorts, TikTok, Instagram Reels.

[HOOK — 0–2 SECONDS]
Dynamic product drop. Dark tech background (matte black, subtle blue accent
lighting). Earbuds descend into frame with motion blur, catching blue accent light.
As they land centre, a soft glow emanates. Text mid-drop: "SILENCE PERFECTED."

[UNBOXING — 2–5 SECONDS]
Hands open sleek black box (matte finish, subtle logo). Inside, earbuds sit in
custom compartment. Text overlay: "Award-Winning Design."

[PRODUCT SHOWCASE — 5–12 SECONDS]
Earbuds on white background. Smooth 360 rotation:
- Close-up of left earbud from front
- Rotate to show curved fit design
- Touch-control surface macro
- Charging case (sleek, minimal, aluminium finish)
- Single earbud with hand for scale
Animated text: "40-Hour Battery" / "Active Noise Cancellation" / "Titanium Build."

[LIFESTYLE — 12–18 SECONDS]
User scenarios in quick succession:
- Woman on flight wearing earbuds, relaxed, world map blurred behind
- Professional in modern office, focused, earbuds visible
- Person at gym, running, in-ear fit from side
- Late-night creator at desk, earbuds glowing subtly

[CTA — 18–20 SECONDS]
Earbuds on tech background. Price: "$199 → $149." CTA: "PRE-ORDER NOW."
"Early Access. Ships in 48 Hours." "2-Year Warranty."

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 9:16
Resolution: 1080p
generate_audio: false
Colour grade: Cool tech-forward (blacks, blues, whites)
```

### B186. Example 4: Food and Beverage — Specialty Coffee

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 193) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L193 — MIT*

```text
E-COMMERCE AD PROMPT — ARTISANAL SINGLE-ORIGIN COFFEE

[PRODUCT CONTEXT]
18-second food/beverage ad for artisanal single-origin coffee beans.
Target: coffee enthusiasts on Instagram, TikTok, Pinterest.

[HOOK — 0–2 SECONDS]
ASMR-focused opening. Macro close-up of coffee beans cascading into a burlap sack.
Sound: beans falling with satisfying plinking. Text appears: "Crafted. Roasted.
Perfected." in warm elegant serif font.

[INGREDIENT MOMENT — 2–5 SECONDS]
Extreme macro of individual coffee bean — rich dark chocolate brown, glossy with
natural oils. Camera pulls back to show full harvest of beans, steam rising subtly.
Text: "Single-Origin Ethiopia" + "Freshly Roasted."

[BREWING PROCESS — 5–11 SECONDS]
ASMR sequence:
- Beans pouring into grinder (pouring sound)
- Grinder running (grinding ASMR)
- Coffee powder in filter (whoosh sound)
- Water pouring over grounds (steam rising)
- Dark liquid dripping into cup (satisfying drip sounds)
- Final cup showing beautiful crema layer
Each step lit warmly, golden hour vibes.

[LIFESTYLE — 11–16 SECONDS]
Hands lifting finished cup of coffee. Person sits by bright window (morning light).
They take a sip, slight satisfaction expression. Steam rises. Cosy aesthetic.
Text: "Your Morning Ritual."

[CTA — 16–18 SECONDS]
Bag of coffee beans on warm neutral background. Price: "$18/bag" or "Subscribe
and Save 20%." CTA: "SHOP NOW." Trust: "Fair Trade. Sustainable."

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 1:1
Resolution: 1080p
generate_audio: true
Colour grade: Warm, golden, cosy tones
```

### B187. Example 5: Jewelry — Diamond Engagement Ring

*Source: **higgsfield-skills** · `skills/07-ecommerce-ad/references/examples.md` (line 242) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/07-ecommerce-ad/references/examples.md#L242 — MIT*

```text
E-COMMERCE AD PROMPT — LAB-GROWN DIAMOND ENGAGEMENT RING

[PRODUCT CONTEXT]
25-second luxury jewelry ad for an ethically-sourced lab-grown diamond ring.
Target: engaged couples and fine jewelry shoppers on Instagram, Pinterest, YouTube.

[HOOK — 0–2 SECONDS]
Intimate, emotional opening. Close-up of woman's hand resting on man's chest.
Newly placed engagement ring catches light and sparkles. Text in elegant serif:
"The Moment Everything Changed." Soft romantic music begins.

[RING HERO SHOT — 2–8 SECONDS]
Ring isolated on black velvet. Dramatic side lighting showing diamond brilliance.
Smooth 360 rotation:
- Front-facing stone (full sparkle, light-catching facets)
- 45° angle (side profile, band design)
- Top-down view (geometric pattern of diamond facets)
- Metal band macro (intricate filigree if applicable)
Stone sparkles with subtle light refraction.

[MATERIAL TEXT — 8–10 SECONDS]
Animated text per specification: "Lab-Grown Diamond" / "VS1 Clarity" / "2.5 Carats"
/ "Platinum" / "Ethically Sourced."

[LIFESTYLE STORY — 10–23 SECONDS]
Emotional sequence:
- Proposal scene: ring sliding on her finger in macro detail
- Her admiring ring on her hand, looking at partner with joy
- Ring on her hand as they walk together holding hands (fit and lifestyle context)
- Ring in elegant setting, ring visible on her hand
- Them together looking at the ring in wonder, faces happy
Emotional text at 20 s: "Forever Starts Today."

[CTA — 22–25 SECONDS]
Ring returns to hero shot. Price: "$4,500–$8,000." CTA: "DESIGN YOURS."
Trust: "100% Conflict-Free" + "Lifetime Warranty" + "Free Resizing."

[PARAMETERS]
Model: marketing_studio_video
Duration: 15 s
Aspect ratio: 16:9 or 1:1
Resolution: 1080p
generate_audio: false
Colour grade: Warm romantic on lifestyle; cool dramatic on ring
```

### B188. Master Template

*Source: **higgsfield-skills** · `skills/09-product-360/references/examples.md` (line 23) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/09-product-360/references/examples.md#L23 — MIT*

```text
[OPENING HOOK - 2 seconds]
Product Type: [category]
Hero Angle: [specific angle and lighting setup]
Hook Style: [particle / spotlight / crash / unwrap / macro-to-wide / assembly /
             exploded / liquid / lift / spin / zoom / halo]
Mood: [dramatic / elegant / energetic / serene / playful]

[HERO SHOWCASE - 3-5 seconds]
Rotation Speed: [slow / medium / fast]
Primary Rotation: [full 360 / half orbit / floating / hero lock]
Lighting: [key light angle / fill intensity / rim light presence]
Camera: [static / subtle orbit / push-in / pull-back / tilt]
Focus on: [main feature / material / proportion / detail]

[DETAIL PROGRESSION - 3-5 seconds]
Macro Shots: [specific textures / stitching / engravings / material close-ups]
Transition: [push-in / dissolve / spin-cut / morph]
Reveal: [hidden detail / underside / interior / feature callout]

[LIFESTYLE / CONTEXT - 2-3 seconds] (optional for product page videos)
Environment: [studio / lifestyle / lifestyle with hands / packaged]
Lighting Shift: [to warm / to natural / to product-focused]
Narrative: [in-use / luxury presentation / gifting moment]

[FINALE - 2 seconds]
Return to: [hero angle / product in light / brand moment]
Final Effect: [light flare / slow fade / gentle spin / freeze]
Text Overlay: [product name / key spec / price / CTA]
```

### B189. Master Template for Brand Story Prompts

*Source: **higgsfield-skills** · `skills/12-brand-story/references/examples.md` (line 26) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/12-brand-story/references/examples.md#L26 — MIT*

```text
---OPENING HOOK (0–2 seconds)---
[Choose from the 12 hooks in references/hooks.md]
[Sensory detail: light, sound, texture, emotion]

---ESTABLISHING WORLD (2–5 seconds)---
[Where are we? What is the environment telling us?]
[Character positioning: alone, with community, in nature, in creation]
[Color palette and mood: warm/cold, industrial/organic, busy/quiet]

---INCITING INCIDENT (5–8 seconds)---
[What moment shifted everything?]
[Show the catalyst: a realization, a conversation, a failure, a need]
[Emotional turning point: frustration, inspiration, heartbreak, determination]

---MONTAGE OF EMERGENCE (8–15 seconds)---
[How did the solution/brand come to be?]
[Multiple quick cuts showing: research, making, building, testing, failing, learning]
[Hands, faces, small victories, perseverance]

---TRANSFORMATION SEQUENCE (15–20 seconds)---
[How does the brand change lives/situations/possibilities?]
[Show concrete examples in authentic contexts]
[Before subtle, after subtle — avoid preachiness]

---CLOSING REFLECTION (20–22 seconds)---
[What is the bigger meaning?]
[Return to protagonist from opening, now transformed]
[Subtle reveal of brand/logo — no hard sell]

---BRAND SIGNATURE (22–25 seconds)---
[Logo, tagline, or final visual statement]
[Emotional note that lingers]
```

### B190. Master Template

*Source: **higgsfield-skills** · `skills/13-fashion-lookbook/references/examples.md` (line 25) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/13-fashion-lookbook/references/examples.md#L25 — MIT*

```text
MODEL: cinematic_studio_video_v2 (or seedance_2_0 if fallback applies)
ASPECT RATIO: [9:16 / 16:9 / 1:1 / 3:4]
DURATION: [3–12 s for cinematic_studio_video_v2; up to 15 s for seedance_2_0]
GENRE: [intimate / spectacle / action / auto — cinematic_studio_video_v2 only]

[2-SECOND HOOK]
Opening 0–2 s: [Specific hook type] — [What appears on screen]

[OUTFIT DESCRIPTION]
Garment: [Piece name, color, fabric, fit details]
Styling: [Accessories, shoes, hair, makeup, overall vibe]
Fit details: [Silhouette, drape, key visual features]

[MODEL DIRECTION]
Walk/Pose: [Confident strut / slow sway / playful spin / etc.]
Attitude: [Confidence / sensuality / approachability / edge / playfulness / etc.]
Expression: [Subtle smile / strong gaze / blank slate / contemplative / etc.]

[ENVIRONMENT & LIGHTING]
Location: [Studio / street / nature / interior / rooftop / etc.]
Lighting: [Golden hour / studio flash / neon / dramatic / natural / etc.]
Background: [Color, texture, relevance to outfit]

[MOTION SEQUENCE]
0–2 s: [Hook action]
2–5 s: [Primary movement — walk, sway, transition]
5–8 s: [Secondary movement — detail reveal, spin, gesture]
8–12 s: [Finale — confident pose, exit, or surprise element]

[SPECIAL EFFECTS & TRANSITIONS]
Camera movement: [Tracking / zoom / pan / static / orbital / etc.]
Transitions: [Cut / fade / spin / reveal / etc.]
Effects: [Wind / slow-motion / color shift / etc.]
```

### B191. The 2-Second Hook Principle

*Source: **higgsfield-skills** · `skills/13-fashion-lookbook/references/hooks.md` (line 30) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/13-fashion-lookbook/references/hooks.md#L30 — MIT*

```text
Opening 0–2 seconds: [Hook type] — [What appears on screen and how it creates intrigue]
```

### B192. Master Template

*Source: **higgsfield-skills** · `skills/14-food-beverage/references/examples.md` (line 18) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/14-food-beverage/references/examples.md#L18 — MIT*

```text
FOOD AND BEVERAGE VIDEO PROMPT

SCENE SETUP
[Specific location, time of day, ambiance]

HERO ELEMENT
[The dish, drink, or ingredient that is the star]

OPENING HOOK (0–2 seconds)
[One of the 2-second hooks from hooks.md. Build hunger immediately.]

PRIMARY MOVEMENTS
[How the food is prepared, plated, or consumed. What actions unfold?]

CAMERA WORK
[Specific camera movements: slow push, orbiting, overhead, close-up, etc.]

LIGHTING APPROACH
[Key light direction, backlight for steam, side light for texture, colour temperature]

SOUND DESIGN
[Which ASMR elements: sizzle, crunch, pour, fizz? Layer them strategically.]

FOOD STYLING NOTES
[Colours, props, surface, garnish, steam timing, condensation, etc.]

CLOSEUP MOMENTS
[Macro details that make texture visible and appetite-triggering]

THE MONEY SHOT
[The climactic moment that makes viewers say "I want that NOW."]

COLOUR PALETTE
[Dominant colours, mood, warmth / coolness]

MOOD AND PACING
[Energy level: slow-luxe, energetic, intimate, celebratory?]

PARAMETERS
Model: seedance_2_0
Duration: [4–15 s]
Aspect ratio: [e.g., 9:16 for TikTok, 1:1 for Instagram]
Resolution: [480p / 720p / 1080p]
Genre: [auto / drama / epic / noir / action — optional]
```

### B193. Master Template

*Source: **higgsfield-skills** · `skills/15-real-estate/references/examples.md` (line 26) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/15-real-estate/references/examples.md#L26 — MIT*

```text
MODEL: cinematic_studio_3_0 (or veo3_1 if fallback applies)
ASPECT RATIO: [16:9 / 9:16 / 1:1]
DURATION: [4–15 s]

[2-SECOND HOOK]
Opening 0–2 s: [Hook type] — [What appears on screen and viewer emotional response]

[ESTABLISHING CONTEXT]
Location and neighborhood context; drone aerial or approach.
Property type, style, and first impression.

[ARRIVAL AND ENTRY]
Approach sequence; front door threshold moment.
Initial interior reveal — ceiling height, light quality, or view.

[PRIMARY SPACES]
Living spaces: camera movement type, what to reveal, pacing.
Kitchen and dining: function and view.
Bedroom and bathroom: intimacy, views, luxury finishes.

[SPECIALTY AND OUTDOOR SPACES]
Any unique features: pool, view, specialty rooms.
Outdoor entertaining areas; drone aerial of grounds.

[EVENING OR TWILIGHT SEQUENCE]
Day-to-night transition showing 24-hour appeal.
Interior lights glowing; exterior architecture illuminated.

[FINAL STATEMENT]
Return to most iconic view or feature.
Music swells; emotional resonance.
Overlay: address, agent contact, call-to-action.

MUSIC: [Style, tempo, reference artists]
STYLE TONE: [Aspirational luxury / contemporary urban / etc.]
DURATION: [Target runtime]
```

### B194. The 2-Second Hook Principle

*Source: **higgsfield-skills** · `skills/15-real-estate/references/hooks.md` (line 29) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/15-real-estate/references/hooks.md#L29 — MIT*

```text
Opening 0–2 s: [Hook type] — [What appears on screen and the viewer's emotional response]
```

### B195. 模板 H:产品广告(Pollo AI 集成)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 465) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L465 — MIT*

```text
Turn this [product] into a premium cinematic advertisement, dynamic camera rotation,
dramatic lighting, dust particles, [energy descriptor], fast push-in,
high-contrast product reveal.
```

### B196. hg-007 — Higgsfield 化妆品 viral 短片 (higgsfield-soul, 9:16, 6s; orig. source: Higgsfield https://blog.segmind.com/higgsfield-ai-prompt-guide-vi

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Tabletop hero shot. Close-up of a frosted glass lipstick container on a marble surface. Soft pink and gold lighting. The lid pops off with a satisfying click, the lipstick slowly extends. Camera orbits halfway around. Particle sparkles drift across the frame. Aspirational beauty commercial tone.
```

### B197. Premium product shot

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 42) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L42 — ISC*

```text
[Product] on [surface], [camera angle], [lighting], premium commercial photography.
Show precise material detail: [glass, brushed aluminum, matte ceramic, embossed paper].
Use clean negative space and a natural contact shadow.
```

### B198. Product with exact text

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 50) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L50 — ISC*

```text
Create a clean packaging mockup for [product].
The label includes the exact text "[TEXT]".
Place the product on a neutral studio background with soft side lighting.
Keep typography sharp and centered.
```


## C. UGC and creator formats

### C199. 10.2 — UGC Try-On — 5 Clips Indoor Room

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-marketing-studio/SKILL.md` (line 411) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md#L411 — MIT*

```text
# HIGGS — 5 CLIPS

LOCATION: Indoor room. Large white-framed floor-to-ceiling glass door centered
in background. Dark night outside. Grey linen curtains floor-length on both sides.
Warm hardwood parquet floor. Cool blue backlight from behind the door, soft
frontal key light on face. Cold blue-teal cinematic color grade.
CAMERA: STATIC, FULL BODY SHOT, eye level. Same angle all 5 clips, never moves.
IMPORTANT: Female model has NO bag, NO backpack, NO purse on her at any
point in any clip. Hands are empty unless specified.

---

## CLIP 1 — 4s
Female model stands centered in her own clothes. No bag, no backpack. She
reaches off-frame, grabs the white HIGGS jersey t-shirt, pulls it over her head and
on — adjusts it, smooths it down. Looks into camera. No effects. 9:16 vertical.

---

## CLIP 2 — 4s — JACKET
Female model stands centered, already wearing the white HIGGS t-shirt. No bag,
no backpack. She reaches off-frame, grabs the HIGGS puffer jacket, shrugs it on
— one arm then the other — adjusts collar with both hands. Looks into camera.
No effects. 9:16 vertical.

---

## CLIP 3 — 4s — PANTS + SNEAKERS

Female model stands centered, already wearing HIGGS t-shirt and jacket. No bag,
no backpack. Already wearing HIGGS track pants with neon green side stripe and
grey HIGGS sneakers — changed off-screen. She runs one hand down the side
stripe, lifts one foot and stomps on the parquet once. Looks into camera. No
effects. 9:16 vertical.

---

## CLIP 4 — 3s — SUNGLASSES
Female model stands centered, fully dressed in HIGGS outfit. No bag, no
backpack. She holds the HIGGS sunglasses between two fingers, slides them onto
her face in one smooth motion. Looks into camera — cold confident expression.
No effects. 9:16 vertical.

---

## CLIP 5 — 3s — FINAL
Female model from stands centered, complete HIGGS outfit, sunglasses on. No
bag, no backpack. Arms relaxed at sides. She squares her shoulders, looks
directly into camera. Says: "That's it." Holds the pose cold and still. 9:16 vertical.
```

### C200. Pipeline B: Social Content Series (Streamlined Chain)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 657) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L657 — MIT*

```text
[Soul ID character] is [specific action] at [specific location].
[One specific visual detail that changes this post from the last.]
Camera: [simple control — Dolly In / Arc / Overhead].
Aspect: 9:16. Duration: 5s.
[Moodboard style modifier — same every post.]
```

### C201. Pipeline B: Social Content Series (Streamlined Chain)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 666) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L666 — MIT*

```text
Post 1: [Soul ID] sips coffee at a sun-drenched café terrace. Reading a book.
         Camera: Dolly In. Aspect: 9:16.
         Style: warm amber, shallow DOF, golden hour.

Post 2: [Soul ID] walks through a quiet morning market, tote bag on shoulder.
         Camera: slight Arc. Aspect: 9:16.
         Style: warm amber, shallow DOF, golden hour.

Post 3: [Soul ID] sits at a desk by a tall window, writing in a journal.
         Camera: Dolly In. Aspect: 9:16.
         Style: warm amber, shallow DOF, golden hour.
```

### C202. Template 08-comedy-social-media — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/08-comedy-social-media.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/08-comedy-social-media.md#L14 — MIT*

```text
Model: Kling 3.0
Aspect: 9:16 | Duration: 8s | Style: Cinematic

A man sits at a desk staring at his laptop, dead-eyed.
He takes a long sip of coffee, blinks slowly, sets the mug down.
He says flatly: "This is fine."
Behind him through the window — a building is on fire, fire trucks arriving.
He doesn't turn around.
Camera: static, locked-off, medium shot. No movement.
Style: Cinematic, bright office lighting, high-key, neutral tones. 9:16.
```

### C203. Template 08-comedy-social-media — Identity Block (if recurring character)

*Source: **higgsfield-ai-prompt-skill** · `templates/08-comedy-social-media.md` (line 56) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/08-comedy-social-media.md#L56 — MIT*

```text
The Soul ID character — round face, large expressive eyes, slightly disheveled hair,
wearing a wrinkled button-up with the sleeves rolled. Perpetually tired.
```

### C204. Template 08-comedy-social-media — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/08-comedy-social-media.md` (line 62) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/08-comedy-social-media.md#L62 — MIT*

```text
He sits at a desk, sips coffee, says "This is fine."
Camera: static, locked-off, medium shot.
Background: visible chaos through the window.
```

### C205. Template 08-comedy-social-media — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/08-comedy-social-media.md` (line 75) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/08-comedy-social-media.md#L75 — MIT*

```text
@Image1 as the character. He opens a gift box confidently.
A spring-loaded glitter bomb erupts in his face. He freezes, blinking.
Camera: static, deadpan framing. Style: bright, evenly lit, social media aesthetic.
Audio: box opening, explosion of glitter, stunned silence, distant laughter.
```

### C206. Quick Reference — Prompt Skeleton

*Source: **ai-video-generator-claude** · `skills/04-course-promo/SKILL.md` (line 433) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/04-course-promo/SKILL.md#L433 — MIT*

```text
Seedance 2.0 prompt — [DURATION] seconds, [ASPECT RATIO], [STYLE TEMPLATE NAME]

HOOK [0:00–0:02]
@material[[ASSET]] — [one-sentence visual description] — [camera movement].
[LIGHTING PRESET]. Color grade: [3-word descriptor].
Text overlay: "[HOOK COPY]" — [typography spec].
Sound: [music or silence description].
The viewer should feel: [target emotion].

BODY [0:02–[MIDPOINT]]
[2–4 beats following the Hook Patterns table above]
[Each beat: timestamp, asset reference, camera, text overlay, sound]

CTA [[MIDPOINT]–[END]]
Hard cut to [background color/treatment].
Text: "[CTA COPY]" — [typography spec] — held for [X] seconds.
[Secondary info: URL, date, handle]
Sound: [music resolution or silence instruction].
```

### C207. Input Specs — Seedance 2.0 Format

*Source: **ai-video-generator-claude** · `skills/05-faceless-channel/SKILL.md` (line 25) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/05-faceless-channel/SKILL.md#L25 — MIT*

```text
[SCENE DESCRIPTION] — [CAMERA MOVEMENT] — [LIGHTING] — [MOOD/ATMOSPHERE] — [MOTION DETAILS] — [SOUND DIRECTION]
```

### C208. Quick Reference Skeleton

*Source: **ai-video-generator-claude** · `skills/05-faceless-channel/SKILL.md` (line 269) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/05-faceless-channel/SKILL.md#L269 — MIT*

```text
TOPIC: [subject]
PLATFORM: [TikTok 9:16 / YouTube 16:9 / Reels 9:16]
DURATION: [4s / 8s / 10s]
STYLE: [cinematic b-roll / motion graphics / ambient / documentary]

HOOK (0-2s):
[Hook pattern] — [opening frame description]
Camera: [movement + speed]
Sound: [impact layer]

BEAT 1 (2-Xs):
[Scene description]
Camera: [movement]
Lighting: [setup]
Sound: [layer]

BEAT 2 (X-Ys):
[Scene description]
Camera: [movement]
Lighting: [shift if any]
Sound: [layer]

CLOSE (final 1-2s):
[Resolution frame]
Camera: [settling movement]
Sound: [resolution]

MATERIAL REFS: @image1 [what], @video1 [what], @audio1 [what]
```

### C209. Example 1: B2B Case Study — The Result-First Format (15s)

*Source: **ai-video-generator-claude** · `skills/08-testimonial-story/SKILL.md` (line 430) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/08-testimonial-story/SKILL.md#L430 — MIT*

```text
SEEDANCE 2.0 PROMPT:

Black frame. Single number fades in center: "312%". Large, white, bold
sans-serif. Below it in smaller text, also fading in 0.5s later: "increase
in qualified leads. 90 days."

0-2s: Number holds. Camera slowly pushes in toward the number — subtle,
barely perceptible movement. Sound: deep, resonant single note. Ambient
silence otherwise. The number is given space to land.

2-3s: Dissolve transition. Number dissolves into a face — the customer.
@material[image1] used as reference for customer portrait or as direct image source.
Subject seated slightly right of center in warm interview framing, looking
left-of-camera. Background: soft-bokeh office environment. Lighting: warm
three-point interview setup, key light from left, slight rim light separating
from background.

3-7s: Customer begins speaking. Camera is static. Every word is clear.
Warm room tone underneath voice. Below subject, lower-third text appears
at 4s: "[Customer Name] — [Title], [Company]". Clean sans-serif, white,
small. Above the lower-third, no other graphics yet — let the face tell
the story.

Sound: minimal music bed enters at 3s — -20dB under voice. Piano and
light percussion. Warm, confident. Does not compete with voice.

7-10s: Key quote moment. The most powerful phrase the customer says. At
this exact point, text appears over or beside the customer — the quote
itself in large typography. White, bold, appears word by word with 0.1s
stagger. Camera micro push-in: 1% zoom over 3 seconds — imperceptible
but felt. Music bed adds second element (pad or second instrument) at 7s.

10-13s: Camera pulls back slightly. Product screenshot or UI appears in
background on desk or screen, associating the result with the product.
@material[image2] used as product UI reference. Soft focus on product UI — it is
present but the customer remains the focal point.

Sound: music becomes slightly fuller. Voice continues or concludes.
Ambient environment enriches — background becomes more alive.

13-15s: Final frame. Customer finishes speaking. Five-star rating appears
below lower-third — animated left to right, 0.15s per star stagger, gold.
Platform attribution beneath stars. Product logo in upper-right corner,
small, fades in at 14s. Music resolves on final second. Warm, complete.

Material references: @material[image1] for customer photo, @material[image2] for product
screenshot, @material[audio1] for customer voice recording if available.
```

### C210. Example 3: SaaS Case Study — The Data Visualization (12s)

*Source: **ai-video-generator-claude** · `skills/08-testimonial-story/SKILL.md` (line 531) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/08-testimonial-story/SKILL.md#L531 — MIT*

```text
SEEDANCE 2.0 PROMPT:

Dark background, near-black with slight warm undertone — #0D0B09.
Premium data environment. Single line chart, minimal axes, centered frame.

0-1s: Empty chart axes appear — clean white lines, thin, on dark background.
A single label: "Monthly Recurring Revenue". Sound: soft ambient electronic,
deep and slow. A single ambient tone — held, expectant.

1-4s: Chart line begins building from left. It moves slowly, nearly flat —
the plateau before the change. Color: muted blue-gray, #8B9DC3. This is
the "before" period. The flatness is visible and intentional. Camera: static.
Sound: no change. Flat and honest about what was happening.

At exactly 4s: vertical dotted line appears on the chart — "Started using
[Product]". Text label appears at the top of this marker line in small caps.
Sound: a subtle, quiet tone — not dramatic, just a marker. A chime, brief.

4-7s: From the marker line, the chart diverges upward. New color: warm gold
#F5A623. The line climbs. Not gradually — it accelerates. Camera begins
a slow push-in toward the chart as it climbs. Sound: ascending ambient tone,
very subtle. The musical harmonic rises with the line. Not heavy-handed —
felt more than heard.

At the endpoint of the line (7s): the final value appears — a bold number
floating adjacent to the chart endpoint. Large, white, clear. Below it in
smaller text: the timeframe. @material[image1] if a real chart/data visualization
is provided as reference.

7-9s: Hold on the chart with the result visible. Camera rests. Sound:
music bed settles at this moment — a two-bar loop, warm, clean. Below
the chart, customer attribution fades in: "[Company Name]", small logo
mark if available via @material[image2]. Customer photo in small circle avatar
to left of attribution.

9-11s: Customer voice enters (if available via @material[audio1]). One or two
sentences — the human confirmation of the chart's story. A single
quote line appears in large typography, one phrase, above the chart.
Bold, white. The data told the story; the voice confirms it.

11-12s: Product logo appears center-right. Chart and quote remain visible.
Music resolves. Final composition: data, attribution, product logo — three
elements of proof in one clean frame.

Material references: @material[image1] for actual data chart or graph as visual
reference. @material[image2] for company/customer logo. @material[audio1] for customer voice.
```

### C211. Steps

*Source: **higgsfield-ugc-workflow** · `skills/ugc-base-character/SKILL.md` (line 28) — https://github.com/joebenscoter86/higgsfield-ugc-workflow/blob/6a9bea5/skills/ugc-base-character/SKILL.md#L28 — MIT*

```text
## <slug> — generated <date>
- source: ugc-base-character
- job_id: <job_id>
- brief: <one-line CREATOR_BRIEF summary>
- status: candidate   # promote to "keeper" after a winning ad
```

### C212. Steps

*Source: **higgsfield-ugc-workflow** · `skills/ugc-brief/SKILL.md` (line 32) — https://github.com/joebenscoter86/higgsfield-ugc-workflow/blob/6a9bea5/skills/ugc-brief/SKILL.md#L32 — MIT*

```text
# Production Brief — <Brand> (<format>)

> Living plan for <slug>. Created at step 2 (before generation); later steps fill in
> the TBD job_ids and check off the status list.

- **Project slug:** `YYYY-MM-DD-<slug>`
- **Folder:** `<DEST>/`
- **Format:** Vertical 9:16 UGC video ad, <DURATION>s
- **Purpose:** <one line — campaign goal or demo/tutorial>

## The product
- **What:** <name + classification>
- **Hero look:** <finish/colors>
- **Branding rule:** <logo shown legibly? or VO/captions only?>
- **product media_id:** `<from product-profile.md>`
- Full facts + usage motions: [product-profile.md](product-profile.md)

## The creator (on camera)
- **Look:** <CREATOR_BRIEF summary>
- **character job_id:** TBD (filled by ugc-base-character)
- Registered in [cast.md](cast.md)

## The angle
- <ANGLE — one or two lines, including the hook framing>

## Shot map (3 time-sliced cuts -> one continuous take)
1. **Hook (Tight, ~0-Xs):** <action> | VO intent: <...>
2. **Setup/Action (Macro, ~X-Ys):** <usage motion> | VO intent: <...>
3. **Recommendation (Wide, ~Y-<DURATION>s):** <present + brand> | VO intent: <...>
- Visual map: storyboard.png (TBD job_id, filled by ugc-storyboard-sheet)
- Final VO: script.md (TBD, filled by ugc-multicut-script)

## Production settings
- **Video model:** Seedance 2.0 (native VO + lip-sync + ambient), via ugc-video
- **Resolution:** 720p (1080p is 2x credits, no visible gain for this format)
- **Cost gate:** explicit user yes required before the paid video call
- **Audio check:** human confirms VO pronunciation of the brand name before finalizing
- **Enhance (default ON):** ducked music bed + karaoke subtitles + cut transitions -> `<slug>-enhanced.mp4`
- **Brand accent (captions):** <BRAND_ACCENT or a hex pulled from the product cues>

## Distribution
- **Master:** `<slug>-enhanced.mp4` (enhanced cut distributable; base preserved)
- **Caption + hashtags:** caption.md, hashtags.md (brand voice, no em-dashes)
- **Channels:** Instagram / TikTok / Facebook from one folder

## Status
- [x] Product profile
- [x] Brief
- [ ] Base character
- [ ] Storyboard sheet
- [ ] Multi-cut script
- [ ] Video (cost-gated)
- [ ] Enhance
- [ ] Virality read + caption/hashtags
```

### C213. Steps

*Source: **higgsfield-ugc-workflow** · `skills/ugc-multicut-script/SKILL.md` (line 25) — https://github.com/joebenscoter86/higgsfield-ugc-workflow/blob/6a9bea5/skills/ugc-multicut-script/SKILL.md#L25 — MIT*

```text
# UGC Script — <slug> (<DURATION>s, 3 cuts)

## Cut 1 — Hook (0–Xs, Tight, handheld micro-shake)
- Action: ...
- VO: "..."
- SFX: ...

## Cut 2 — Setup/Action (X–Ys, Macro, locked-off)
- Action: <exact usage step>
- VO: "..."
- SFX: ...

## Cut 3 — Recommendation (Y–<DURATION>s, Wide, handheld)
- Action: ...
- VO: "..."
- SFX: ...

## SEEDANCE_PROMPT
<one dense paragraph concatenating the three cuts as a continuous motion+dialogue description — this exact block is what the video step passes to seedance_2_0. OPEN with a one-line voice spec (e.g. "The voiceover is a calm, credible late-20s female narrator speaking clear American English. No subtitles, no on-screen captions."). Introduce each spoken line with `she says:` / `he says:` and put the line in quotes. End the block with "No subtitles.">
```

### C214. Steps

*Source: **higgsfield-ugc-workflow** · `skills/ugc-product-profile/SKILL.md` (line 31) — https://github.com/joebenscoter86/higgsfield-ugc-workflow/blob/6a9bea5/skills/ugc-product-profile/SKILL.md#L31 — MIT*

```text
# Product Profile: <name>
- Classification: ...
- Dimensions / form factor: ...
- Packaging: ...
- Brand cues (colors, logo, label): ...
- Exact usage steps:
  1. ...
  2. ...
- product media_id: <media_id>
```

### C215. 模板 E:UGC 广告

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 438) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L438 — MIT*

```text
[Person description] in [setting], natural lighting, [imperfection detail e.g. subtle acne texture].
[They apply/use product] and say, "[Quoted dialogue]." Casual, authentic UGC style.
Natural [body part] movement, realistic [background detail].
AUDIO: Their voice, soft room tone, no music.
```


## D. Viral effect / motion graphics

### D216. prompt-examples — Contemporary Solo

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 532) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L532 — MIT*

```text
Model: Minimax Hailuo 2.3
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A dancer in a white flowing dress performs alone in a vast black studio.
A single overhead spotlight. She moves through contemporary choreography —
slow arms, sudden explosive turns, floor work.
Camera: 360 Orbit tightening toward her as movement intensifies.
Overhead shot as she collapses to the floor in the final beat.
Style: Cinematic. Pure black and white contrast. 16:9.
Apply Glow Trace preset — her movement leaves a trail of white light.
```

### D217. prompt-examples — Hip-Hop Cypher

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 546) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L546 — MIT*

```text
Model: Minimax Hailuo 2.3
Aspect: 9:16 | Duration: 8s | Style: Cinematic

Four dancers in a circle under a single streetlight at night.
One steps into the center — starts hitting sharp isolated movements.
Camera: Rap Flex — quick zooms snapping in and out on each hit.
Crowd around the circle is a blur of energy.
Style: Cinematic. High contrast, deep shadows, neon from nearby signage. 9:16.
Apply Live Concert preset for lighting energy.
```

### D218. prompt-examples — Awakening

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 571) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L571 — MIT*

```text
Model: Kling 2.6
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A businesswoman in a grey suit stands in a sterile office, staring at rain on the window.
The lights flicker. She turns. Her eyes begin to glow blue-white.
Camera: Crash Zoom In on her eyes.
Her form expands slowly, suit pulling at the seams.
Style: Cinematic. Cold fluorescent transitioning to deep electric blue. 16:9.
Apply Cyborg preset for the transformation sequence.
```

### D219. prompt-examples — Into the Wild

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 584) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L584 — MIT*

```text
Model: Wan 2.5
Aspect: 16:9 | Duration: 8s | Style: Abstract

A man stands at the edge of a forest at night, arms outstretched.
Moonlight through the canopy.
Camera: Crane Up as transformation begins — he starts to lose human form.
Style: Abstract. Deep greens and silvers, moonlight as only source. 16:9.
Apply Animalization preset — he becomes a wolf, launching into the forest dark.
```

### D220. prompt-examples — Awakening II — Seedance 2.0 (Transformation prompt mode)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 597) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L597 — MIT*

```text
Model: Seedance 2.0 (Transformation prompt mode)
Aspect: 16:9 | Duration: 8s | Style: Cinematic

Style & Mood: sterile cold-fluorescent boardroom shifting to deep electric
blue glow as the change takes hold, anamorphic flares on overhead lights,
crushed shadows on the floor.

Dynamic Description: A businesswoman in a charcoal grey suit stands at the
window, rain on the glass behind her, her reflection faintly visible. The
overhead fluorescents flicker once. She turns toward camera, her eyes
beginning to glow blue-white from within. Mid-frame, her form expands
slowly — the suit's seams pulling tight, fabric stretching at the shoulders,
hairline fissures of blue light tracing along her sternum and forearms. She
ends standing taller, the suit fully strained, her eyes fully luminous, the
boardroom now bathed in cold blue cast from her own light.

Static Description: Modern corporate boardroom at night, floor-to-ceiling
windows, rain on the glass, conference table in soft focus behind her.

Camera: slow crash-zoom in toward her face, settling on the eyes at
mid-transformation, holding through the end state.

Audio: her voice anchors the scene — a low controlled hum begins in her
throat as the fluorescents flicker, soft and human at first. Through the
mid-transformation it lowers in pitch, gains a second harmonic underneath,
and resolves at the end as something other-than-human: a sustained tone
the suit can no longer contain. Surrounding sound recedes: rain on glass,
the ballast hum dropping with her, fabric stress under the expansion. No
music.
```

### D221. prompt-examples — Scene 5b — Finished Clip Playing on an In-Frame TV (1:1 Video Reference + SCREEN REALISM)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 755) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L755 — MIT*

```text
ACTIVE REFERENCES
[…]
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

[… full prompt also blocks the watcher low and to one side so the screen
stays unobstructed, locks the camera static for the full 6 seconds, and
repeats the 1:1 and screen-size locks in POSITIVE LOCKS — see the source
blog.]
```

### D222. How to Use Mixed Media in Prompts

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-mixed-media/SKILL.md` (line 122) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md#L122 — MIT*

```text
[Scene description as normal prompt.]
Mixed Media preset: [Preset Name]
```

### D223. How to Use Mixed Media in Prompts

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-mixed-media/SKILL.md` (line 128) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md#L128 — MIT*

```text
A woman in a red coat stands alone on a cobblestone bridge in winter rain.
Camera: Dolly In toward her face.
Style: Cinematic, cold tones, 16:9.
Mixed Media preset: Noir
```

### D224. How to Use Mixed Media in Prompts

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-mixed-media/SKILL.md` (line 136) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md#L136 — MIT*

```text
A fashion model in structured black tailoring, direct gaze to camera.
Style: High-contrast editorial. Studio white background.
Mixed Media preset: Two Color — black and vermillion.
```

### D225. Stacking Presets (Layer Mixed Media)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-mixed-media/SKILL.md` (line 162) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md#L162 — MIT*

```text
Mixed Media presets: [Preset A] + [Preset B] (layered)
```

### D226. Mixed Media for Social Content

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-mixed-media/SKILL.md` (line 186) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-mixed-media/SKILL.md#L186 — MIT*

```text
Post 1: [Street photography scene]. Mixed Media: J-Magazine
Post 2: [Portrait scene]. Mixed Media: J-Magazine  
Post 3: [Architecture scene]. Mixed Media: J-Magazine
```

### D227. Moodboard + Soul ID: The Power Combination

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-moodboard/SKILL.md` (line 162) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-moodboard/SKILL.md#L162 — MIT*

```text
[Soul ID character] is [action] at [specific location].
[One unique visual detail for this post.]
Camera: [movement]. Aspect: 9:16.
[No style description needed — moodboard + preset handle it.]
```

### D228. Moodboard as a Prompt Modifier

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-moodboard/SKILL.md` (line 176) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-moodboard/SKILL.md#L176 — MIT*

```text
[MOODBOARD: Project Name]
Color palette: [2–3 dominant colors]
Tone: [warm/cool + emotional register]
Film look: [sensor/grain if applicable]
Lighting character: [quality of light]
Cultural reference: [specific aesthetic if using a curated preset]
```

### D229. Higgsfield Named Motion Presets

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-motion/SKILL.md` (line 35) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md#L35 — MIT*

```text
[Your scene description.] Apply the [Preset Name] preset.
```

### D230. How to Request a Preset in a Prompt

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-motion/SKILL.md` (line 192) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md#L192 — MIT*

```text
A woman stands at the edge of a cliff at sunset, hair flowing in the wind.
She raises her hands slowly as energy builds around her.
Camera: Crane Up revealing the ocean below.
Style: Cinematic, golden hour, 16:9.
Apply the Plasma Explosion preset at the moment her hands reach full extension.
```

### D231. How to Request a Preset in a Prompt

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-motion/SKILL.md` (line 200) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md#L200 — MIT*

```text
Two fighters face each other in a rain-soaked alley.
Camera: Bullet Time as the first punch lands.
Style: Anamorphic, desaturated, high contrast.
Apply the Flame Transition preset to cut to the next scene.
```

### D232. @Video Reference as Primary Method

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-motion/SKILL.md` (line 236) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md#L236 — MIT*

```text
Reference @Video1 for movement choreography.
A swordsman draws his blade explosively, cutting through three bamboo stalks in rapid succession.
Stalks topple, leaves scatter, blade gleams in the sunlight.
```

### D233. Recipe 8: Dance / Music Video

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 244) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L244 — MIT*

```text
[Dancer/performer — description, outfit].
[Performance space — lighting, scale, atmosphere].
[Dance style / energy — specific movements to describe].
Camera: [movement, ideally synced to beats — orbit, dolly, overhead].
[Climax moment — signature move, camera impact].
Style: [Cinematic / Anamorphic], [color grade — neon / warm / high contrast]. [Ratio].
Apply [Glow Trace / Live Concert] preset for additional visual energy.
```

### D234. Recipe 8: Dance / Music Video

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 255) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L255 — MIT*

```text
A female dancer in a white flowing dress performs alone in a vast black studio.
Only a single overhead spotlight on her.
She moves through contemporary choreography — slow arms, sudden explosive turns.
Camera: 360 Orbit tightening toward her as the movement intensifies.
Overhead shot as she collapses to the floor in the final beat.
Style: Cinematic, pure black and white contrast, 16:9.
Apply Glow Trace preset — her movement leaves a trail of white light.
```

### D235. Recipe 9: Transformation / Before & After

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 276) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L276 — MIT*

```text
[Subject in their before state — normal, restrained, plain].
[Trigger moment — what causes the transformation].
Camera: [movement toward the trigger moment].
[Transformation unfolds — describe the visual change].
[After state — what they become].
Style: [appropriate to transformation type]. [Ratio].
Apply [preset name] preset to execute the transformation effect.
```

### D236. Recipe 9: Transformation / Before & After

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-recipes/SKILL.md` (line 287) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md#L287 — MIT*

```text
A businesswoman in a grey suit stands in a sterile office, staring out the window.
The lights flicker. She turns. Her eyes begin to glow.
Camera: Crash Zoom In on her eyes.
Her suit tears at the shoulders. Her form expands.
Style: Cinematic, cold fluorescent transitioning to deep red. 16:9.
Apply Monstrosity preset for the transformation sequence.
```

### D237. Output format

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-vfx/SKILL.md` (line 382) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-vfx/SKILL.md#L382 — MIT*

```text
@source: ...
@creature: ...            (only if a texture reference is used)

Photoreal. 16:9. <N>s. 4K. <look/grade>. NON-IP — generic <X>. SFX [and source dialogue] only.

<Continuous shot, same framing as source. Preserved performance. The transformation, with physics
and plate interaction. Any timed camera move with semantic + numeric anchor. Lock-down clause: face
and identity unchanged; everything else identical to the source.>

SFX [and source dialogue] only: <specific, ordered sounds>.
```

### D238. Transformation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 696) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L696 — MIT*

```text
[Subject in starting state — full identity descriptors]. [Triggering moment or
cue]. [Subject mid-transformation — what visibly changes, in observable
physical terms]. [Subject in ending state — new identity descriptors].
[Camera behavior across the change]. [Lighting / palette shift if any].
```

### D239. Step 1: Start in Chat

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 77) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L77 — MIT*

```text
Example opening prompts:
"Create a kinetic typography intro for a productivity app called Flowstate.
The tagline is 'Do less. Achieve more.' Brand colors: deep navy and electric lime."

"Animate this logo [upload] with a clean reveal — letters coming in one by one,
finishing with a subtle pulse. Professional, not flashy."

"Build an infographic animation showing our 3 key stats:
42% faster, 10x more leads, $2M saved. Minimal style, white background."
```

### D240. Step 4: Real-Time Editing Controls

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 137) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L137 — MIT*

```text
"Make the entrance faster — cut the timing in half"
"Change the headline font to something more geometric"
"The blue is too bright, move it to #1A2B8C"
"Add a subtle particle effect in the background"
"Make it feel more like an Apple keynote"
```

### D241. Typography / Text Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 153) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L153 — MIT*

```text
"The words 'CLARITY. SPEED. RESULTS.' appear one at a time, each letter
scaling in from small with a sharp snap. Inter font, all caps, white on black.
Each word holds for 0.8 seconds then the next appears. Total: 4 seconds."
```

### D242. Typography / Text Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 159) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L159 — MIT*

```text
"A single sentence builds word by word from left to right:
'The future of [pause] design [pause] is [pause] here.'
Clean sans-serif, navy blue, minimal white background.
Elegant timing — feels like Apple copy."
```

### D243. Logo Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 172) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L172 — MIT*

```text
"The logo [upload] fades in letterform by letterform, left to right.
Once fully revealed, it pulses once subtly — scale up 3%, back down.
Clean, professional. White background. Total: 2.5 seconds."
```

### D244. Logo Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 178) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L178 — MIT*

```text
"The icon [upload] draws itself on — like a pen tracing the outline —
then the wordmark slides in from the right. Bold, confident, tech brand feel.
Dark background, logo in white."
```

### D245. Infographic / Stats Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 190) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L190 — MIT*

```text
"Three statistics animate in sequence:
1. '10M+' — counter counts up from 0, large number, small label 'users'
2. '99.9%' — percentage fills like a progress arc, label 'uptime'
3. '$4B' — slides in from right, label 'saved annually'
White background, company blue (#0057FF), minimal, each stat holds 1.5s."
```

### D246. Infographic / Stats Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 198) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L198 — MIT*

```text
"Animated bar chart comparing our product vs. competitors across 4 metrics.
Bars grow upward on a staggered reveal — ours last, tallest, highlighted.
Clean grid, no clutter. Corporate presentation style."
```

### D247. Social Media Motion Graphics

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 210) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L210 — MIT*

```text
"A 9:16 Instagram Story title card.
Headline: 'How We 10X'd Our Revenue in 6 Months'
Subtext fades in below: 'The strategy nobody talks about'
Bottom: '@ourhandle' with subtle slide-up
Warm gradient background — amber to deep orange. 5 seconds total."
```

### D248. Social Media Motion Graphics

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 218) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L218 — MIT*

```text
"YouTube intro bumper — 5 seconds.
Channel name 'SIGNAL' appears with a glitch effect — letters scrambling
before snapping into place. Icon [upload] animates in beside it.
Dark background, neon blue accent. Energetic."
```

### D249. Product / Feature Animation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 229) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L229 — MIT*

```text
"Three feature callouts appear in sequence for a project management app:
Feature 1: 'Instant sync' — icon [upload] + text slides in from left
Feature 2: 'AI summaries' — icon [upload] + text slides in from right
Feature 3: 'One-click export' — icon [upload] + text slides in from left
Clean white background, product blue, 1.5s per feature. Total: 6s."
```

### D250. Combining Vibe Motion with Video Generation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 260) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L260 — MIT*

```text
1. Generate cinematic scene in Kling 2.6 (the video)
2. Create title card and lower thirds in Vibe Motion
3. Combine in editing workflow (DaVinci, Premiere, CapCut)
```

### D251. Combining Vibe Motion with Video Generation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 267) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L267 — MIT*

```text
1. Create animated logo intro in Vibe Motion (3–5s)
2. Generate product demo video with Click to Ad or manual prompt
3. Create animated CTA/outro in Vibe Motion
4. Assemble: intro → product video → outro
```

### D252. Combining Vibe Motion with Video Generation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-vibe-motion/SKILL.md` (line 275) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-vibe-motion/SKILL.md#L275 — MIT*

```text
1. Vibe Motion: animated hook text (0–2s) — stops the scroll
2. Kling 2.6: product or lifestyle footage (2–8s) — shows the thing
3. Vibe Motion: CTA + offer card (8–12s) — drives the action
```

### D253. Template 10-dance-music-performance — Example prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L14 — MIT*

```text
Model: Minimax Hailuo 2.3
Aspect: 16:9 | Duration: 10s | Style: Cinematic

A dancer in a white flowing dress performs alone in a vast black studio.
A single overhead spotlight. She moves through contemporary choreography —
slow arms, sudden explosive turns, floor work.
Camera: 360 Orbit tightening toward her as movement intensifies.
Overhead shot as she collapses to the floor in the final beat.
Style: Cinematic. Pure black and white contrast. 16:9.
Apply Glow Trace preset — her movement leaves a trail of white light.
```

### D254. Template 10-dance-music-performance — Identity Block (if using Soul ID)

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 57) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L57 — MIT*

```text
The Soul ID character — athletic build, braided hair pulled back tight,
barefoot, wearing a white flowing contemporary dance costume.
```

### D255. Template 10-dance-music-performance — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 63) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L63 — MIT*

```text
She moves through contemporary choreography — slow arms,
sudden explosive turns, floor work. Energy builds.
Camera: 360 Orbit tightening toward her.
Overhead shot as she collapses to the floor.
Apply Glow Trace preset.
```

### D256. Template 10-dance-music-performance — Beat-by-beat choreography (Seedance 2.0)

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 80) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L80 — MIT*

```text
first two crisp head nods, chin dipping on each beat; then his shoulders roll
back one at a time — right, then left; he steps off on his right foot with a
soft knee-dip and drags the left foot in to meet it with a small heel-bounce,
hips swaying side to side; halfway across he throws a loose finger-snap;
finishes with a light quarter-spin on the ball of his foot.
```

### D257. Template 10-dance-music-performance — `@music_track` drives the motion

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 99) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L99 — MIT*

```text
@music_track as the rhythmic foundation — the dancer's movement locks to its
beat throughout. Steps land on the downbeats, the spin releases on the drop.
```

### D258. Template 10-dance-music-performance — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/10-dance-music-performance.md` (line 116) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/10-dance-music-performance.md#L116 — MIT*

```text
Reference @Video1 for dance choreography.
@Image1 as the dancer. She performs on a rooftop at sunset,
city skyline behind her. Wind catches her dress on each spin.
Camera: 360 orbit. Style: anamorphic flares, crushed blacks.
Audio: heavy bass drop, rhythmic percussion, wind through fabric.
```

### D259. Master Template

*Source: **higgsfield-skills** · `skills/10-music-video/references/examples.md` (line 23) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/10-music-video/references/examples.md#L23 — MIT*

```text
[Song Title] - Music Video Prompt

AUDIO: [user audio track — uploaded via media_upload → media_confirm, role: audio]

VIDEO STRATEGY: [Performance / Narrative / Abstract]

OVERALL AESTHETIC:
Genre-visual language: [e.g., "urban hip-hop with neon accents," "ethereal pop with bright candy colors"]
Color palette: [primary colors]
Lighting style: [e.g., "hard shadows," "natural light," "neon glow"]
Camera movement priority: [e.g., "dynamic and fast," "slow and intimate," "orbital and geometric"]

VERSE 1 (0:00-0:25):
Energy level: [low / medium / high]
Visual focus: [performer / scene / abstract elements]
Key visual elements: [3-5 specific visual ideas]
Beat synchronization: "At [timing], [visual action] on [beat reference]"

CHORUS (0:25-0:40):
Energy level: [medium / high / maximum]
Visual hook: [describe the main 2-second visual hook]
Repetition strategy: "This visual repeats every 4 bars with [variation]"
Color / lighting: [specific changes or shifts]

BRIDGE (0:40-0:50):
Shift from chorus: [what changes]
Visual strategy: [new visual / continuation / subtle variation]
Key moment: "At [timing], [dramatic visual change]"

FINAL CHORUS / DROP (0:50-1:05):
Intensity level: [maximum / explosive]
Visual peak: [most impactful visual moment]
Layering: "Build from [starting visual] to [peak visual]"

OUTRO (1:05-end):
Energy trajectory: [fading / explosive / resolution]
Final image: [what viewers see last]

TECHNICAL NOTES:
- Emphasis on beat drops at [timings]
- Fast cut rate during [section] for rhythmic energy
- Particle / motion intensity should peak at [timing]
- Color transitions should happen at [harmonic shifts]
```

### D260. hg-005 — Higgsfield Soul + 变身爆款 (higgsfield-soul, 9:16, 5s; orig. source: Higgsfield https://higgsfield.ai/blog/ai-short-film-youtube-guide)

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
[Soul ID: my-character] stands in casual street clothes. Lightning flash. In the next frame she wears full cyberpunk samurai armor with glowing katana. Cool neon palette. Vertical short.
```

### D261. hg-006 — Higgsfield 60s 智能分镜 MV (higgsfield-soul, 9:16, 60s; orig. source: Higgsfield AI Director https://higgsfield.ai/)

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
60-second music video. [Soul ID: singer]. Scene 1: rooftop sunset, singer performs to camera, golden hour. Scene 2: car interior at night, singer drives through neon-lit tunnel, intercut close-ups. Scene 3: empty stage with single spotlight, singer holds final note, slow pull-back to reveal massive empty arena. Energetic synth-pop aesthetic throughout, cuts on beat.
```

### D262. sd-065 — Burger Girl 变形(Format 1 三幕式) (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 1 Burger Transformation https://higgsfield

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Montage, multi-shot action Hollywood movie, don't use one camera angle or single cut, cinematic lighting, photorealistic, 35mm film quality, ARRI ALEXA aesthetic. A pink-haired girl with glasses, cream top and jeans sits on the hood of a white pickup truck under a concrete overpass at dusk, casually eating a burger. A pale zombie with wet dark hair sprints toward her from the shadows. The girl calmly sets down the burger, her body erupts into a massive pale tusked creature with clawed hands, devours the zombie whole, then shrinks back to human form and picks up the burger. Handheld shake throughout, dark comedy pacing with horror undertones. Total: 15s / 6 shots / 16:9. No 3D, no cartoon, no VFX.
```

### D263. sd-066 — Bus 变形(Robo-Girl 反差) (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 1 Bus Transformation https://higgsfield.ai/s/seeda

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Montage, multi-shot action Hollywood movie, cinematic lighting, photorealistic, 35mm film quality, ARRI ALEXA aesthetic. Inside a suburban bus packed with passengers, a red-haired girl in white tank top, cat-eye sunglasses and headphones sits unbothered while outside a colossal dark-blue rocky creature with sharp shoulder horns rampages through the street. All passengers press against the left windows in terror. The girl calmly opens the right window, climbs onto the roof, transforms into a green-armored robo-girl, destroys the creature with one massive blast, then drops back inside as a human. Handheld shake throughout, escalation arc from calm to explosive to calm. Total: 15s / 6 shots / 16:9.
```

### D264. sd-067 — Electro POV — 第一视角电力幻想 (seedance-2.0, 16:9, 15s; orig. source: Higgsfield · Format 2 Orbs Electro https://higgsfield.ai/s/seedance-

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Single continuous shot, first-person POV perspective, the camera IS her eyes, hyper-chaotic handheld motion, completely unstabilized, violent raw human movement, constant micro-jitters, aggressive head swings, abrupt jerks, frequent over-rotation, wide-angle lens (strong distortion), 15 seconds, her hands always visible in frame, no music only raw SFX, cinematic lighting, photorealistic, grounded realism, 35mm film look, heavy film grain, ARRI ALEXA aesthetic, practical VFX feel. In a storm-soaked industrial ruin, her hand snaps forward catching a crackling violet lightning sphere, electricity arcing violently, she crushes it instantly — blinding energy surges through her fingers as fractal lightning veins explode across both forearms. Enemies emerge — jagged obsidian creatures crawl across walls, while a colossal iron titan rises behind them. She lunges forward, slamming both hands down releasing a radial lightning surge, the titan retaliates with a beam, she catches it with one hand and redirects it upward while sprinting at the titan, drives both hands into its core, RAMPS TO SLOW MOTION as the core fractures, energy tearing outward in layered shockwaves. SFX: electric crackle, energy burst, deep metallic titan rise, slow-motion electric hum. Total: 15s / 1 shot / 16:9.
```

### D265. sd-072 — 极简动画 prompt(Format 5) (seedance-2.0, 16:9, 8s; orig. source: Higgsfield · Format 5 Animation https://higgsfield.ai/s/seedance-2-0-h

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
Fight of a 3D person with 2D
```


## E. Character consistency

### E266. prompt-examples — Scene 8 — Battle v1 → v2: the VARIETY-Reference Fix (Clone Army)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 825) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L825 — MIT*

```text
@elf — STYLE reference for the elven army: silver-and-gold leaf-filigree
armor, pale-blue capes, elven swords. The army is a varied host — men and
women, each a distinct face, hair color, build, helmet and cape, every elf
unique while keeping this armor-and-weapon style, each fighting with a sword
and striking only at orcs. 100% matches the reference style.
```

### E267. prompt-examples — Scene 8 — Battle v1 → v2: the VARIETY-Reference Fix (Clone Army)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 834) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L834 — MIT*

```text
@elf — VARIETY reference for the elven army: a sheet of FOUR different elves
— men and women, blonde / dark / auburn / silver hair, silver-, gold- and
rose-toned leaf-filigree armor with capes, elven swords. The army is a varied
host drawn from these four types — a mix of men and women with different
faces, hair colors, builds and armor tones, every elf unique, no two alike,
each fighting with a sword and striking only at orcs.

POSITIVE LOCKS
[…] The elven army is a VARIED host built from the four elf types in @elf —
men and women, mixed hair colors and silver/gold/rose armor tones, every elf
unique and no two alike — each fighting with a sword in hand. […]
```

### E268. The acting master profile

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-acting/SKILL.md` (line 287) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-acting/SKILL.md#L287 — MIT*

```text
Character acting as [NAME]. [Build, physique, posture — the body as a document of their
biography]. [The psychological engine in one clause — the inner drive that explains the
physicality]. Vocal profile: [pitch/timbre, accent/origin, pace and delivery manner, and how
the voice breaks or shifts under emotion]. Key physical habits and tics: [signature tic with
its trigger; stress tic with its trigger; concealment behavior — what they do to hide what
they feel; the facial mask and the exact condition under which it cracks]. Eye life: [blink
quality and rate, scanning pattern, gaze-before-head, catchlights]. Walking style: [the gait
as characterization — named and specific, with weight, rhythm, and foot placement]. However,
when [emotional trigger], [the transformation — how the posture, gait, and face change].
[Optional: the softening target — the one person or thing that makes the face genuinely soften].
```

### E269. Voice — fixed identity, never adapted

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-acting/SKILL.md` (line 397) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-acting/SKILL.md#L397 — MIT*

```text
"A [origin / accent descriptor]. [Timbre and register]; [pace and delivery manner];
[emotional character — and how it shifts under pressure]."
```

### E270. Step 4 — Story Spine

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-character-design/SKILL.md` (line 105) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-character-design/SKILL.md#L105 — MIT*

```text
Beat N: [character] [does / discovers / loses] [thing]. Result: [the next problem].
```

### E271. Character Identity

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 508) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L508 — MIT*

```text
[Name]: [age range], [build], [skin tone], [hair style/color],
[defining features], [wardrobe], [emotional energy].
```

### E272. Spatial Blocking — Top-Down Schema for Multi-Character Scenes

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-pipeline/SKILL.md` (line 1035) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-pipeline/SKILL.md#L1035 — MIT*

```text
                      [WINDOW]
                          |
  [TABLE]    G(↓east)     |
    ┌─┐                   |        R(↑north)
    │ │       ~2m         |          @
    └─┘                  ~1.5m
                          |
                       [DOOR]
                          |
                  (camera mount, west wall)
```

### E273. Reference Roles — Say What to Use *and* What Not to Use

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/SKILL.md` (line 171) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/SKILL.md#L171 — MIT*

```text
@Image 1 defines <subject>'s <appearance, clothing, structure, or material>.
@Video 1 defines <motion, camera movement, or pacing>.
@Audio 1 defines <character or sound type>'s <voice, dialogue, ambience, or music>.
```

### E274. The Real-Person Character Formula

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/SKILL.md` (line 569) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/SKILL.md#L569 — MIT*

```text
[Role]  [Skin color / skin texture]  [Facial details]  [Eyes / soul]
[Hairstyle / hair color]  [Clothing / clothing texture]  [Body type / mood / temperament]
[Other requirements, if any]
```

### E275. Prompting With Soul ID

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 75) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L75 — MIT*

```text
The Soul ID character walks through a crowded Tokyo street at night.
```

### E276. Prompting With Soul ID

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 80) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L80 — MIT*

```text
The Soul ID character now wears a formal black suit. She stands at a podium,
addressing a conference room. Camera: Dolly In toward her face.
Style: Cinematic, cool corporate lighting, 16:9.
```

### E277. Prompting With Soul ID

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 87) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L87 — MIT*

```text
The Soul ID character is now in a red dress, dancing alone in a ballroom.
Camera: 360 Orbit.
Style: Cinematic, warm golden chandelier light.
```

### E278. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 116) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L116 — MIT*

```text
A tall woman with green eyes and freckles in a leather jacket sprints through
a warehouse while the camera tracks her and her green eyes flash with determination
and her freckles catch the fluorescent light as she vaults over a railing.
```

### E279. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 126) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L126 — MIT*

```text
The Soul ID character — tall build, green eyes, light freckles across the nose
and cheeks, wearing a fitted black leather jacket, dark jeans.
```

### E280. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 132) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L132 — MIT*

```text
She sprints through a dimly lit warehouse, vaults over a metal railing
without breaking stride.
Camera: Action Run — low behind her, matching pace.
Fluorescent lights flicker overhead.
Style: Cinematic, cold industrial blue, high contrast. 16:9.
```

### E281. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 145) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L145 — MIT*

```text
A weathered man with deep wrinkles and sad brown eyes wearing a grey wool coat
sits on a park bench as the camera slowly dollies in on his wrinkled face and
sad brown eyes while autumn leaves drift past his grey coat.
```

### E282. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 154) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L154 — MIT*

```text
The Soul ID character — man in his 60s, deep wrinkles, warm brown eyes,
wearing a heavy grey wool coat, brown leather gloves.
```

### E283. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 160) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L160 — MIT*

```text
He sits on a park bench, hands folded in his lap, staring at the ground.
A single autumn leaf drifts into frame and lands on the bench beside him.
Camera: slow Dolly In toward his face.
Style: Cinematic. Overcast diffused light, muted earth tones. 16:9.
```

### E284. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 172) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L172 — MIT*

```text
@Sarah with her dark curly hair and tattoo sleeve walks into the bar.
```

### E285. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 179) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L179 — MIT*

```text
@Sarah: dark curly hair, tattoo sleeve on left arm, wearing a vintage band tee.
```

### E286. Before/After Examples

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 184) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L184 — MIT*

```text
@Sarah pushes open the door and steps inside. She scans the room, then walks
to the far end of the bar. The bartender nods.
```

### E287. Character Sheet Creation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 408) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L408 — MIT*

```text
Front-facing portrait of [character description], neutral expression, even studio lighting,
clean background. Head and shoulders visible.
```

### E288. Multi-Character Consistency

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 741) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L741 — MIT*

```text
Shot 1 — establish both:
The Soul ID character [Character A] and a second character [Character B, describe
appearance] face each other across a table. Camera: Arc slowly around them.

Shot 2 — reference both:
The Soul ID character [A] slides a folder across the table.
[Character B] opens it, expression shifting from confusion to realization.
Camera: Dolly In toward [B's] face.
```

### E289. AI Influencer Workflow

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 834) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L834 — MIT*

```text
The Soul ID character [name] is in a modern kitchen at golden hour.
She holds a coffee mug, steam rising. She looks directly at camera with a warm smile.
Camera: slight Dolly In. Style: Lifestyle, warm tones, 9:16 vertical.
```

### E290. Character Consistency Best Practices

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 902) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L902 — MIT*

```text
@Image1 as Character A (the detective). @Image2 as Character B (the witness).
Character A leans across the table, speaking firmly. Character B looks away, fidgeting.
Camera: slow push-in on Character B's face.
```

### E291. Soul ID identity prompting in Soul Cinema

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 940) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L940 — MIT*

```text
The Soul ID character — [face/body/wardrobe descriptors only, no camera or motion language].
```

### E292. Soul ID identity prompting in Soul Cinema

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-soul/SKILL.md` (line 945) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md#L945 — MIT*

```text
[Setting], [time of day], [lighting quality], [color palette].
Style: Cinematic, [grade], [aspect ratio].
```

### E293. Template 06-portrait-character-intro — Identity Block

*Source: **higgsfield-ai-prompt-skill** · `templates/06-portrait-character-intro.md` (line 15) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/06-portrait-character-intro.md#L15 — MIT*

```text
The Soul ID character — a man in his late 40s, weathered skin, deep-set eyes,
salt-and-pepper stubble, wearing a worn leather jacket over a dark henley.
A thin scar across the left eyebrow.
```

### E294. Template 06-portrait-character-intro — Motion Block

*Source: **higgsfield-ai-prompt-skill** · `templates/06-portrait-character-intro.md` (line 22) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/06-portrait-character-intro.md#L22 — MIT*

```text
He stands at the edge of a rain-soaked harbour dock at night.
He stares at the horizon, collar turned up against the driving rain.
Camera: slow Dolly In from medium-wide to medium close-up.
Style: Cinematic. Crushed blacks, single sodium-vapour key light from the right,
cold blue fill. 2.35:1 anamorphic.
```

### E295. Template 06-portrait-character-intro — Combined prompt (for non-Soul ID use)

*Source: **higgsfield-ai-prompt-skill** · `templates/06-portrait-character-intro.md` (line 31) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/06-portrait-character-intro.md#L31 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A weathered man in his late 40s stands at the edge of a rain-soaked harbour dock at night.
Salt-and-pepper stubble, worn leather jacket, collar turned up against the driving rain.
An old leather briefcase sits at his feet, open, papers scattered by the wind.
He stares at the horizon.
Camera: slow Dolly In from medium-wide to medium close-up.
Style: Cinematic. Crushed blacks, single sodium-vapour key light from the right,
cold blue fill. 2.35:1 anamorphic.
```

### E296. Template 06-portrait-character-intro — Cinema Studio 3.0 (Business/Team Plan)

*Source: **higgsfield-ai-prompt-skill** · `templates/06-portrait-character-intro.md` (line 79) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/06-portrait-character-intro.md#L79 — MIT*

```text
@Image1 as the character. She sits at a café table, stirring coffee absently.
She notices someone through the window — expression shifts from sadness to surprise.
Camera: slow push-in. Style: warm interior light, shallow depth of field.
Audio: ceramic mug on saucer, spoon stirring, muffled street noise through glass.
```

### E297. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/facs-expression-beats.md` (line 21) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/facs-expression-beats.md#L21 — MIT*

```text
**Model:** Seedance 2.0
**Aspect ratio:** [1:1 / 16:9 / 9:16]   **Duration:** [Ns]

[Use the provided character @Image1 as the fixed identity reference. — optional,
 only for identity consistency; codes work without an image]

**Style & Mood:** [framing — tight close-up, face + shoulders], [lighting],
[background], shallow depth of field, [mood].

[Optional dialogue — generates speech + automatic lip-sync, see higgsfield-audio
 § Audio as a Conditioning Input:
 [AUDIO: 0s] "[the spoken line]"]

Beat 1 ([0-Xs]): [AU codes] ([optional short anatomical description]) [— delivers "<line>"]
Beat 2 ([X-Ys]): [AU codes] (...) [— delivers "<line>"]
Beat 3 ([Y-Zs]): [AU codes] (...) 
[3–4 beats max for reliable rendering]

[One-line mood / subtext — e.g. "the face never fully commits to either; the
 audience reads both at once."]

**Camera:** [one dominant move — slow push-in / static medium close-up]
```

### E298. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/multi-character-anchor.md` (line 16) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/multi-character-anchor.md#L16 — MIT*

```text
[At/from N seconds] N characters in frame.

Character A — [identity, Soul ID handle].
  Screen position: [left third / center / right third],
  x-position [%], y-position [%], frame occupancy [%].
  Depth layer: [foreground / midground / background].
  Body orientation: [toward camera / away / profile-left /
    profile-right / three-quarter].
  Pose: [physical configuration — standing, seated, mid-stride].
  Gaze: [where they look — frame-position OR "looking at Character B"].
  Contact points: [physical surfaces they touch — feet on wet
    asphalt, left hand on the railing].
  State lock: [emotional or physical state — calm, exhausted,
    injured, soaked].

Character B — [identity, Soul ID handle].
  [...same fields...]

Cross-character relationships:
  Distance between A and B: [approximate].
  Eyeline: [A → B, B → A, both → off-screen, mutual avoidance].
  Crossing rule: [neither crosses the central vertical axis /
    A may cross right-to-left at N seconds].
  Negative space: [where the empty area sits in frame].

Camera: [shot size], [angle], [lens], [movement].
Setting: [location, time, weather, atmosphere, production design].
Aesthetic: [genre, lighting, color grade, texture, VFX].
Audio: [ambience, SFX, dialogue, music].
Continuity locks: [costume / state / prop invariants].
Final frame: [composition at last frame].
```

### E299. The skeleton

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/omni-reference-2-5.md` (line 42) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/omni-reference-2-5.md#L42 — MIT*

```text
[Characters]
<Character A> corresponds to @Image 1. Use only the appearance, hairstyle, and clothing.
<Character B> corresponds to @Image 2. Use only the appearance, hairstyle, and clothing.
Do not interchange these characters' appearances, clothing, actions, positions, or dialogue.

[Props]
<Prop A> corresponds to @Image 3 and belongs only to <Character A>. Use only the structure,
material, and color.

[Scenes]
<Scene A> references @Image 4. Use only the spatial layout, architecture, and lighting.
Do not use the people in the image.

[Motion and Audio]
@Video 1 defines the pacing of <specific action>. Do not use the person's identity, clothing,
or scene from the video.
@Audio 1 defines <Character A>'s voice and specified dialogue.

[Subject Profile: <Character A>]          ← only for a subject recurring across scenes
Appearance and clothing: @Image 1.
Fixed prop: <Prop A> from @Image 3.
Locations: <Scene A>.
Motion references: the <action> motion from @Video 1.
Do not use: other characters' clothing. Do not give this character other equipment.

[Generation Goal]
Generate a <video type>. The central subject is <subject>, and the primary event is
<one-sentence story summary>.

[Stage 1]
Initial state: <initial state of characters, props, and scene>.
Primary event: <ONE primary action or event>.
End state: <character positions, prop ownership, or visible scene state>.

[Stage 2]
Continue from the previous stage: <state that must remain unchanged>.
Primary event: <ONE primary action or event>.
End state: <observable state>.

[Stage 3]
Primary event: <closing event>.
End state: <final visible state>.

[Visual Style]
<Lighting, color, materials, texture, mood — named specifics, not stacked adjectives>.

[Camera]
<Shot size, angle, movement, focus subject, cuts — matched to the action, not decorative>.

[Audio]
<Ambience and action SFX>. (music, only if the project wants it) <specific sound effect>
Dialogue language: <language and regional variety>. <Character A> says: {the line}

[Maintain Consistency]
Keep <character identity, number of characters, clothing, prop ownership, spatial direction,
and audio relationships> consistent throughout.
```

### E300. Filled example

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/omni-reference-2-5.md` (line 107) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/omni-reference-2-5.md#L107 — MIT*

```text
[Characters]
<Florist> corresponds to @Image 1. Use only the appearance, hairstyle, and dark green apron.
<Assistant> corresponds to @Image 2. Use only the appearance, hairstyle, and clothing.
Do not interchange these characters' appearances, clothing, actions, positions, or dialogue.

[Props]
<Wrapped Bouquet> corresponds to @Image 3 and belongs only to <Florist> until Stage 3.
Use only the structure, flower types, and ribbon color.

[Scenes]
<Shop Workbench> references @Image 4. Use only the spatial layout, timber surfaces, and
window light. Do not use the people in the image.

[Motion and Audio]
@Video 1 defines the pacing of trimming stems and tying a ribbon. Do not use the person's
identity, clothing, or scene from the video.

[Generation Goal]
Generate an observational documentary clip. The central subject is <Florist>, and the primary
event is packing a single order from loose stems to a finished bouquet on the pickup shelf.

[Stage 1]
Initial state: <Florist> stands behind <Shop Workbench>. Loose stems, scissors, and wrapping
paper lie on the tabletop.
Primary event: <Florist> arranges the stems and trims them to length.
End state: <Florist> holds the bouquet in the left hand; the scissors are back on the right
side of the workbench.

[Stage 2]
Continue from the previous stage: both characters keep the same identities and clothing, and
<Florist> still holds the bouquet.
Primary event: <Assistant> unfolds the wrapping paper; <Florist> places the bouquet inside and
ties it with the ribbon.
End state: <Wrapped Bouquet> lies flat in the center of the workbench, ribbon bow facing camera.

[Stage 3]
Primary event: <Assistant> lifts <Wrapped Bouquet> and sets it on the pickup shelf.
End state: the bouquet is centered on the pickup shelf; both characters stand behind the
workbench looking at the finished order.

[Visual Style]
Overcast morning window light from frame-left, no fill from the camera side. Muted greens and
raw timber, one saturated accent in the ribbon. Real skin texture, visible paper grain.

[Camera]
Open on a medium shot of the workbench at chest height, hold through Stage 1, push in slowly
to the ribbon knot across Stage 2, then a single lateral move to follow the bouquet to the
shelf in Stage 3. 47° diagonal field of view throughout, no drift mid-segment.

[Audio]
Room tone, scissor snips, paper rustle, the ribbon pulling tight. <A shop bell rings once,
distant> (no music)

[Maintain Consistency]
Keep <Florist> and <Assistant>'s identities and clothing, the workbench orientation, the
scissors' position, and bouquet ownership consistent throughout.
```

### E301. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/single-character-position.md` (line 16) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/single-character-position.md#L16 — MIT*

```text
[At/from N seconds] One character in frame.

[Identity, Soul ID handle].
  Screen position: [left third / center / right third],
  x-position [%], y-position [%], frame occupancy [%].
  Depth layer: [foreground / midground / background].
  Body orientation: [toward camera / away / profile-left /
    profile-right / three-quarter].
  Pose: [physical configuration].
  Gaze: [where they look — frame-position or off-screen direction].
  Contact points: [physical surfaces — feet planted, hand on doorframe].
  State lock: [emotional or physical state].

One dominant action: [single action — one motion verb at the spine
  of the shot per § Single-vs-multi-shot decision].
Motion: [secondary motion — hair, fabric, breath; eye motion].

Camera: [shot size], [angle], [lens], [movement — one dominant
  motion per § Multi-motion camera overload guidance].
Setting: [location, time, weather, atmosphere].
Aesthetic: [genre, lighting, color grade, texture].
Audio: [ambience, SFX, dialogue, music].
Final frame: [composition at last frame].
```

### E302. Step 1 — the diagram-generation prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/staging-reference.md` (line 68) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/staging-reference.md#L68 — MIT*

```text
@[Image 1](image_1) — use the attached image ONLY as the compositional guide: copy its
exact framing, camera angle, crop, and the positions, poses and scale of every person —
but do NOT copy its photographic look: no photo textures, no realistic lighting, no
realistic faces, no colors from the image. Do NOT add anything that is not in the attached
image. Do NOT complete cropped bodies — if a body part is cut off by the frame edge in the
image, cut it off in the drawing. The OUTPUT is a flat schematic:

Flat minimalist technical LINE DRAWING, a staging plan for a film scene — an obviously
schematic, non-photographic drawing on a white background with a very faint, thin,
light-grey graph-paper grid. Figures are drawn as clean THIN OUTLINES in muted colors —
NO fills, NO solid color blocks, NO shading, NO texture, NO realism, NO text, NO letters,
NO labels anywhere.

Front view matching the attached image's framing exactly: [N] outline figures.
[Per figure: POSITION IN FRAME — a MUTED-COLOR outline figure, what is visible (full body /
head and shoulders only / torso and arms only), pose exactly as in the image, facing
direction, any signature prop as a simple outlined shape and exactly where it sits relative
to the body.]
[Anchoring furniture/architecture as simple thin-outline shapes and where — or "no
furniture, open background."]

Nothing else — no ground line, no extra props, no extra figures. Simple, readable,
diagrammatic — flat 2D line drawing, minimal detail, only who is where.
--ar [match source frame] --style raw --stylize 30
--no photorealism, photo texture, realistic lighting, realistic faces, shading, solid color
fills, color blocks, text, letters, labels, typography
```

### E303. Step 2 — the connector block

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/staging-reference.md` (line 109) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/staging-reference.md#L109 — MIT*

```text
@staging_[PROJECT]_[scene]_[version] — POSITION REFERENCE ONLY
Use this reference solely to read where each figure is placed, its pose, and its facing
direction inside @loc_[PROJECT]_[name]_[scene]_[version]. Every visual quality of the shot
— style, light, color grade, faces, wardrobe, environment, props — comes exclusively from
@loc_[PROJECT]_[name]_[scene]_[version] and the character references. The shot is a fully
photoreal live-action frame.

LETTER LEGEND (letters exist only in this prompt; they do not appear on the reference)
@A = the BLUE figure on the staging reference = [character tag] → [position, pose, facing].
@B = the ORANGE figure on the staging reference = [character tag] → [position].

RENDER RULE: place the real, photoreal characters (from their own references) into the real
location @loc_[PROJECT]_[name]_[scene]_[version] at the positions this reference defines,
and take nothing else from it.

LOCKS: All style, light, and texture come exclusively from
@loc_[PROJECT]_[name]_[scene]_[version] and the character references;
@staging_[PROJECT]_[scene]_[version] defines positions only. The colors on the staging
reference identify WHO IS WHO on that reference only — wardrobe and grading come from the
character and location references. Everyone stays in their staging-locked position until
their scripted action.
```

### E304. Claude prompt template (paste-ready)

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/top-down-map.md` (line 36) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/top-down-map.md#L36 — MIT*

```text
Build a top-down floor plan for [SCENE]. Mark every character with
their position, which direction they're facing, and who they're
looking at. Include distance between characters and a scale.

Below the diagram, write a paste-ready blocking note for Seedance —
one short paragraph per character covering: where they are, which way
they face, gaze line, pose, what they're touching.

Render as an HTML artifact.

Scene: [DESCRIPTION]
```

### E305. The filled prompt

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/worked-example-two-character.md` (line 15) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/worked-example-two-character.md#L15 — MIT*

```text
At 0 seconds, two characters in frame.

Character A — Roco (Soul ID @Image1).
  Screen position: left third, x-position 30%, y-position 55%,
    frame occupancy 28%.
  Depth layer: midground.
  Body orientation: three-quarter toward Lulu, screen-right.
  Pose: standing, weight on back foot, right hand resting on coat
    pocket.
  Gaze: locked on Lulu's eyes.
  Contact points: boots planted on wet asphalt, shoulders square.
  State lock: composed, alert, controlled aggression.

Character B — Lulu (Soul ID @Image2).
  Screen position: right third, x-position 70%, y-position 60%,
    frame occupancy 24%.
  Depth layer: midground (1 meter behind Roco's depth plane).
  Body orientation: three-quarter toward Roco, screen-left.
  Pose: backing one step at a time, hands raised at chest height,
    palms out.
  Gaze: darting between Roco's eyes and the alley behind her.
  Contact points: back nearly touching chain-link fence, boots
    sliding on wet asphalt.
  State lock: cornered, calculating, afraid but controlled.

Cross-character relationships:
  Distance between Roco and Lulu: ~3 meters, closing.
  Eyeline: Roco → Lulu sustained; Lulu → Roco intermittent.
  Crossing rule: neither crosses the central vertical axis of the
    frame in this shot.
  Negative space: centered between them, narrowing as Roco advances.

Camera: medium-two-shot, low angle (camera at chest height), FOV 63
  degrees, anamorphic optical character, slow dolly-in 0.5m over the
  shot duration.
Setting: rain-soaked alleyway, 2am, light rain, sodium-vapor street
  lamp from screen-right above, steam from a manhole behind Lulu,
  garbage bags + chain-link fence + brick walls.
Aesthetic: neo-noir, high-contrast key-and-fill with deep shadows,
  desaturated palette with sodium-orange highlights, film grain
  visible, no VFX.
Audio: light rain continuous, distant traffic, Roco's footstep on
  wet asphalt at 2s, Lulu's breath audible, no music.
Continuity locks: Lulu's hands stay raised throughout; Roco's right
  hand stays on coat pocket; neither character changes position by
  more than ~1m.
Final frame: Roco one step closer, Lulu's back touching the fence,
  eyeline locked, negative space narrowed to half the original.
```

### E306. Step 0.A — Banana Pro single-pass face lock (default)

*Source: **ai-film-pipeline** · `banana-pro-director/SKILL.md` (line 368) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/banana-pro-director/SKILL.md#L368 — MIT*

```text
A clean cinema-character-reference 3:4 headshot, framed from forehead to upper chest with the face filling most of the frame. [Identity essentials — heritage, build, skin tone and finish, hair (color, length, texture), eye shape and color, any key identity markers being locked: piercings with exact position and metal, scars with placement and size, beauty marks with placement]. She wears [a plain black thin-strap camisole / he wears a plain black ribbed tank], no jewelry, no logos, no graphics. Body squared to camera, head level, neutral relaxed expression, eyes to camera, lips closed and relaxed, subtle controlled energy.

Mid-gray seamless studio background — even neutral mid-gray, no seam line, no gradient, no falloff to black or white. Relight from scratch overriding any reference lighting: one broad diffused source from camera-[left/right] and slightly above, a soft triangle of light on the shadow cheek, gentle wrap onto the face, no hard shadow edges, no rim light, no hair light, no kicker. Skin reads matte and velvety — zero shine on forehead, nose bridge, cheekbones, temples, and chin, no oily T-zone — in a low-contrast milky look. Skin renders at its true natural skin tone and wardrobe at its true natural color, warmth preserved and natural against the neutral gray, never pale or washed-out or cool-shifted by the background. Real peach fuzz at the jaw and hairline, real soft fine even pore texture, subsurface scattering reading as semi-translucent biology, never plastic, never waxy AI render, never glass-skin, never harsh — fine flattering texture that keeps the face looking good, no acne, no blemishes, no rough pores. Photographed on a 50mm prime at a wide aperture, natural round bokeh, even sharpness, soft natural film grain. Photographed not generated.

[Gray is the locked default — use the lean Rembrandt close above. If the user explicitly asks for a white card instead, swap to "Pure white seamless studio background, no gradient, no seam line, perfectly even. Soft soft cinematic light from camera-[left/right], very diffused, gentle wrap onto the face, no hard shadow edges, no rim light, no hair light, no kicker. Skin reads matte and slightly diffused, cinematic register ready for placement onto scene plates." and append the full cinema stack from "THE CINEMA STACK" section instead of this lean close.]

---

### Step 0.B — GPT-2 single-pass face lock (highest fidelity)

**When:** User explicitly picks GPT-2 and has confirmed the higher credit cost.

**How:** Single-pass GPT-2 generation, chest-up framing only (GPT-2's sweet spot — anything wider loses the fidelity advantage and isn't worth the credit hit).

**Pre-prompt check:**

Pre-prompt check — GPT-2 face lock (single-pass, chest-up only):
- **Reference attached:** none — text-only build
- **Character spec:** [identity essentials only — heritage, build, skin, hair color + length + texture, eye shape + color, key identity markers]
- **Wardrobe:** plain black [camisole / ribbed tank]
- **Backdrop:** mid-gray seamless studio (locked default)
- **Lighting:** soft soft natural light from camera-[left/right]
- **Framing:** chest-up portrait, face dominant in the frame

Sound good?

**Canonical Step 0.B prompt structure:** Use the GPT-2 prompt structure documented in the GPT-2 section of this skill (Mode 4). Apply the same identity essentials, wardrobe lock, white backdrop, and soft soft lighting as Step 0.A — just routed through the GPT-2 prompt grammar instead of the Banana Pro grammar.

---

### Step 0.1 + Step 0.2 — Soul Cinema two-pass face lock (iteration path)

**When:** User picks Soul Cinema. Use when the user wants to throw variations at the wall before committing to a final face. Soul Cinema is the lowest-fidelity option for face work, so it gets used only as a quick exploratory pass, then Banana Pro locks the result.

### Step 0.1 — Soul Cinema face plate

Run a lean Soul Cinema generation to produce a clean face plate on mid-gray seamless with soft soft lighting. The plate is exploratory — identity essentials only, no makeup detail, no granular facial anatomy, no fine identity markers (those go into Step 0.2 where Banana Pro can actually hold them).

**Pre-prompt check:**

Pre-prompt check — Step 0.1 of 2 (Soul Cinema face plate):
- **Reference attached:** none — text-only build
- **Character spec:** [identity essentials only — heritage, build, skin tone, hair (color, length, texture), eye shape and color, beauty marks / scars only if they're large/obvious — fine markers held for Step 0.2]
- **Wardrobe:** plain black [camisole / ribbed tank]
- **Backdrop:** mid-gray seamless studio (locked default)
- **Lighting:** soft soft natural light from camera-[left/right]
- **Framing:** chest-up, face clearly readable, body squared to camera

Sound good?

**Canonical Step 0.1 prompt structure (lean — identity essentials only):**
```

### E307. Step 0.1 — Soul Cinema face plate

*Source: **ai-film-pipeline** · `banana-pro-director/SKILL.md` (line 427) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/banana-pro-director/SKILL.md#L427 — MIT*

```text

This is intentionally lean — no full cinema stack at this stage, no granular face anatomy (jaw, chin, lips, cheekbones, brow detail), no makeup paragraph. Let Soul Cinema interpret the face from the essentials. Step 0.2 locks the rest.

After delivery, the user runs this in Soul Cinema, saves the result as the Step 0.1 face plate reference.

### Step 0.2 — Banana Pro 3:4 headshot to lock the full facial character

Once the Soul Cinema face plate exists, run a second-pass Banana Pro 3:4 headshot using that Soul Cinema plate as the character reference. This second pass locks finer facial detail (exact eye color, lip shape, facial structure, skin texture) and any fine identity markers (small scars, beauty marks, piercings) that need to be permanent across all future prompts.

**Pre-prompt check:**

Pre-prompt check — Step 0.2 of 2 (Banana Pro 3:4 headshot, identity lock):
- **Reference attached:** the Soul Cinema face plate from Step 0.1
- **Character spec:** [same essentials as Step 0.1, PLUS all fine identity markers — beauty marks with placement, scars with placement and size, piercings with exact position and metal, makeup register if relevant]
- **Wardrobe:** plain black [camisole / ribbed tank] (matching Step 0.1)
- **Backdrop:** mid-gray seamless studio (locked default)
- **Lighting:** soft soft from camera-[left/right] (matching Step 0.1)
- **Framing:** 3:4 headshot, forehead to upper chest, face filling most of the frame

Sound good?

**Canonical Step 0.2 prompt structure:**
```

### E308. MODE 1A — SINGLE-IMAGE CHARACTER OUTFIT, BANANA PRO PATH

*Source: **ai-film-pipeline** · `banana-pro-director/SKILL.md` (line 495) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/banana-pro-director/SKILL.md#L495 — MIT*

```text

**Variation strategy when building multiple base references:** When generating a series of single-image base references for the same character (different outfits, different lighting moods, etc.), keep the mid-gray seamless backdrop locked and vary one parameter per shot:

- Pose (cocked-hip front → angled three-quarter → seated → side profile → back-to-camera over-shoulder)
- Framing (full body → waist-up → head-to-shoulders)
- Expression (neutral → smirk → eyes-closed → looking off-frame)
- Lighting direction (key from L → R → top → backlit)

Don't vary face, skin, or core identity markers. Those stay locked.

---

## MODE 1B — SINGLE-IMAGE CHARACTER OUTFIT, SOUL CINEMA PATH

**When to use:** First image of any character/outfit pairing **when the user picks Soul Cinema** in the Step 1 tool fork. Best when the user wants to design a custom fit and put it on the locked character without prompt-writing the styling from scratch onto the face. Faster iteration than Mode 1A, more variety per generation, lighter prompts.

**How it works — TWO-STEP FLOW (critical):**

Soul Cinema is a two-step process. Do not skip Step 1B.1 and jump straight to compositing.

### Step 1B.1 — Generate the outfit on a neutral model

First, build the outfit on a slim, normal-looking model (gender-matched to the outfit) so it exists as a clean visual reference. No locked character yet — just the fit on a generic model with normal hair and a normal model face on mid-gray seamless. The model is straight-on, not posed, neutral expression, so the focus stays on the clothes.

**Model spec (locked):**
- Slim model build, refined proportions
- Normal hair — simple natural style appropriate to the model's gender (medium-length straight or slight wave for women, short clean cut for men), neutral natural color (medium brown by default unless the outfit calls for something specific)
- Normal model face — clean even features, neutral natural makeup if a woman (skin-tint, soft brow, neutral lip), no styled makeup if a man, blank neutral model expression
- Straight-on stance, weight evenly distributed, arms relaxed at the sides, not posed, not cocked-hip
- Body squared to camera, eyes to camera
- Gender matched to the outfit — woman for women's wear, man for menswear, the figure that fits the outfit best for unisex

**Pre-prompt check (clean bullet format):**

Pre-prompt check — Step 1 of 2 (build the fit):
- **Subject:** slim [woman/man], normal hair, neutral model face, straight-on relaxed stance
- **Outfit:** [full outfit description — every garment, accessory, jewelry, footwear]
- **Backdrop:** mid-gray seamless studio (locked default)
- **Lighting:** soft soft natural light from camera-[left/right] (user picks side)

Sound good?

**Canonical Step 1B.1 prompt structure:**
```

### E309. MODE 4 — GPT-2 DETAIL FACE SHOT (HIGGSFIELD GPT-2)

*Source: **ai-film-pipeline** · `banana-pro-director/SKILL.md` (line 896) — https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/banana-pro-director/SKILL.md#L896 — MIT*

```text

**Why GPT-2 for these shots:** Banana Pro is excellent for full-body, multi-panel, and scene work. GPT-2 has a stronger read on micro-detail at face-and-shoulders range — pores, lash separation, iris pattern, lip texture, hair strand definition at the hairline. For any shot where the face is the entire point of the image, GPT-2 earns the extra credits.

---

## MODE 5 — OUTFIT REPLACEMENT (BANANA PRO TWO-REFERENCE SWAP)

**When to use:** When the user wants to take an outfit and pose from one image and apply it to a different character. The outfit reference image has the wardrobe, styling, footwear, accessories, and body pose locked in. The character reference image has the face, bone structure, body type, skin tone, and hair locked in. The output combines them — the character from the second image now wears the outfit and holds the pose from the first image.

Trigger phrases include: "outfit replacement," "outfit swap," "put [character] in this outfit," "swap the face," "put this character in that fit," "replace the model with [character] wearing [outfit]," or any request that involves combining a wardrobe/pose reference with a separate character reference.

**Goal:** Maximum identity transfer of the character (from @image2) onto the outfit and pose (from @image1) with zero alteration to either side — the outfit stays exactly as shown, the character's identity stays exactly as shown, only the body underneath the outfit changes to match the new character.

**Reference attachment order (CRITICAL):**
- **@image1 = outfit reference** — the image containing the outfit, styling, footwear, accessories, and pose to keep
- **@image2 = character reference** — the image containing the face, bone structure, body type, skin tone, and hair to apply

This order is fixed. Do not swap. The prompt is written around this exact mapping and reversing it will break the swap.

**Pre-prompt confirmation rule applies.** Even though the prompt itself is short and locked, the user should confirm:
- Which reference is the outfit/pose source
- Which reference is the character/identity source
- That both references are uploaded and visible in chat

Use the standard pre-prompt check format — references first, then the two roles, then run.

**Canonical Mode 5 prompt (LOCKED — do not modify):**
```

### E310. hg-003 — Higgsfield Soul ID 角色保持样板 (higgsfield-soul, 9:16, 8s; orig. source: Higgsfield Soul https://higgsfield.ai/soul-intro)

*Source: **lanshu-awesome-ai-video-kit** · `prompts/data/all-prompts.json` — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json — MIT*

```text
[Soul ID: my-character] walks into a sunlit kitchen wearing a white linen shirt, opens the fridge, takes out a bottle of water, turns to camera with a slight smile. Warm morning light. Medium shot, eye level.
```

### E311. Character — Higgsfield AI Cast variant (ship BOTH, user picks)

*Source: **seedance-shotlist-director-en** · `references/asset-prompts.md` (line 38) — https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/asset-prompts.md#L38 — MIT*

```text
Soul: [age]yo [build] [ethnicity/look] [gender], [height if it matters].
[3–5 facial anchors: hair, face shape, eyes, one small verifiable mark].
[Resting expression / character in one clause].
[Wardrobe, item by item, compact].
[Lighting/mood matching the film, one clause]. Cinematic.
```

### E312. Location reference

*Source: **seedance-shotlist-director-en** · `references/asset-prompts.md` (line 72) — https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/asset-prompts.md#L72 — MIT*

```text
[Time of day] [interior/exterior], 3/4 angle with depth: [the space — architecture, surfaces,
light sources exactly as the scene's Lighting line designs them, palette].
Photorealistic, cinematic, no people, no readable signage.
```

### E313. Phone / screen UI props

*Source: **seedance-shotlist-director-en** · `references/asset-prompts.md` (line 85) — https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/asset-prompts.md#L85 — MIT*

```text
Product prop sheet: a modern smartphone [in a hand / on a surface], [app look, dark/light mode],
N separate stills: (1) [screen 1], (2) [screen 2], ...
All UI soft-focus and silhouette-legible only — shapes and colors read, no readable words.
[Ambient lighting matching the scene], screen glow on the hand.
```

### E314. Layout map (complex staging)

*Source: **seedance-shotlist-director-en** · `references/asset-prompts.md` (line 98) — https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/asset-prompts.md#L98 — MIT*

```text
Simple flat overhead diagram / schematic, not photorealistic: [the space] seen from above —
[element] marked [LABEL], [element] marked [LABEL], an arrow showing [the key movement or sightline].
Clean vector look, white background.
```

### E315. Character in a new scene

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 70) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L70 — ISC*

```text
Use Image A for identity with 100% facial consistency.
Place the same character in [new setting], wearing [wardrobe], [shot type], [lighting], [style].
Do not change face shape, skin tone, or core expression.
```

### E316. Single keyframe prompt

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 127) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L127 — ISC*

```text
[Subject] in [environment], [shot type], [lens], [camera movement feel], [lighting], [grade].
Keep continuity with previous frame: same wardrobe, same location, same time of day.
```

### E317. Local object addition

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 144) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L144 — ISC*

```text
Preserve the whole image.
Add [object] only in the empty area [location].
Match existing scale, light direction, and shadow softness.
```

### E318. Collective/Group Character Template

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/templates/character-template.md` (line 138) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/templates/character-template.md#L138 — ISC*

```text
#### {Group Name} ({number} people; {descriptor})

* **Role in story:** {Collective function — labour, opposition, chorus}
* **Look:** {Shared visual characteristics; individual variation notes}
* **Wardrobe:** {Uniform or shared clothing elements}
* **Behavioural tells:** {Shared behaviours; brief exchanges; group dynamics}
* **Inner conflict:** {Usually "Not foregrounded; they embody {X}"}
* **Arc:** {Usually "Static" as a group}
* **Voice notes:** {Shared speech patterns}
* **Key props:** {Shared tools or objects}
* **Continuity state chain:**
  * Wardrobe continuity by scene: {Uniform state or meaningful variation}
  * Carried items by scene: {Shared tools, bags, equipment}
  * Body-state continuity: {Weathering, dirt, injuries, fatigue markers}
  * Pocket / hand continuity risks: {Only if continuity-sensitive on camera}

* **Reference image requirements:**
  * Representative figure: Full body, front-facing, neutral pose, white background — shows the "type"
  * Variation figures (2–3): Showing diversity within the group (different builds, ages, etc.)
  * {Group shot only if the shot list requires the group as a composed unit}

* **Consistency anchors:** {Uniform details, shared equipment, build range}
```

### E319. Physical Space Template

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/templates/location-template.md` (line 11) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/templates/location-template.md#L11 — ISC*

```text
#### {Location Name} ({brief descriptor})

* **Look (materials, architecture, atmosphere):** {Detailed physical description — what defines this space visually}
* **Sound (beds + punctuations):**
  * Bed: {Continuous ambient sound}
  * Punctuations: {Discrete sounds marking moments}
* **Continuity constraints:**
  * Must: {Required elements that define this location}
  * Must not: {Prohibited elements — anachronisms, brands, etc.}
* **Signature motif:** {Visual or audio element that instantly identifies this space}
* **Continuity chain across appearances:**
  * First appearance state: {Baseline dressing and condition}
  * Subsequent appearance changes: {What changes, what persists, why}
  * Non-negotiable anchors: {Elements that must never drift}

* **Scouting specification:**

  * **Required angles:**
    * Establishing wide: {Camera position, e.g. "From entrance doorway, looking in"}
    * Working angle: {Primary shooting position for dialogue/action}
    * Character-entry POV: {What a character sees when entering}
    * Signature detail: {Insert shot of defining detail}
    * {Additional angles as shot list demands}

  * **Required lighting conditions:**
    * {Condition 1}: {Description — e.g. "Day, fluorescent overhead, grey window light"}
    * {Condition 2}: {Description — e.g. "Night, monitors only, blue-cast"}
    * {Condition 3}: {If applicable}

  * **Required weather conditions:** {If exterior or weather-visible}
    * {Condition 1}: {e.g. "Clear sky, harsh shadows"}
    * {Condition 2}: {e.g. "Heavy rain, diffused light, wet surfaces"}

  * **Narrative state variants:** {If the location changes during the story}
    * {State 1}: {Normal / undamaged / pre-event}
    * {State 2}: {Description of change — e.g. "Post-incident: broken monitors, scattered paper, emergency lighting"}

* **Scouting matrix:**

  | Ref ID | Angle | Lighting | Weather | Narrative State | Scene(s) Using |
  |--------|-------|----------|---------|-----------------|----------------|
  | LOC-{name}-01 | Establishing wide | Day | Clear | Normal | SC-01, SC-03 |
  | LOC-{name}-02 | Establishing wide | Night | N/A | Normal | SC-07 |
  | LOC-{name}-03 | Working angle | Day | Clear | Normal | SC-01, SC-02 |
  | LOC-{name}-04 | Working angle | Night | N/A | Post-incident | SC-08 |
  | LOC-{name}-05 | Detail insert | Day | Clear | Normal | SC-02 |

  _{Only include combinations the shot list actually visits.}_

* **Reference image generation notes:**
  * Primary reference (LOC-{name}-01): {Full style spec required; most common condition}
  * Variant generation: {What to emphasise in condition-change prompts}
  * Anchor statement: "Same room/space as reference; architecture, materials, proportions identical. Only {X} has changed."
  * Consistency anchors: {Key structural elements to verify: e.g. "window position, desk layout, ceiling height, door placement"}
```

### E320. Vehicle Interior Template

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/templates/location-template.md` (line 74) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/templates/location-template.md#L74 — ISC*

```text
#### {Vehicle Name} ({type})

* **Look:** {Interior materials, dashboard, seats, window view, wear}
* **Sound:**
  * Bed: {Engine, road noise, climate control}
  * Punctuations: {Indicators, alerts, phone, radio}
* **Continuity constraints:**
  * Must: {Dashboard layout, seat configuration, window visibility}
  * Must not: {Modern UI elements if period piece; wrong-hand drive; etc.}
* **Signature motif:** {Defining element — e.g. "cracked windscreen", "dangling air freshener"}
* **Continuity chain across appearances:**
  * First appearance state: {Baseline dashboard, seats, carried clutter}
  * Subsequent appearance changes: {Fuel, weathering, damage, loose objects}
  * Non-negotiable anchors: {Layout details that must never drift}

* **Scouting specification:**

  * **Required angles:**
    * Dashboard POV: {Looking out through windscreen}
    * Driver CU: {From passenger-side, OTS or profile}
    * Rear-view / mirror: {If narratively significant}
    * Exterior establishing: {If the vehicle is seen from outside}

  * **Required conditions:**
    * {Condition 1}: {e.g. "Moving, daytime, city traffic"}
    * {Condition 2}: {e.g. "Parked, night, rain on windscreen"}
    * {Condition 3}: {If applicable}

* **Scouting matrix:**

  | Ref ID | Angle | Condition | Scene(s) Using |
  |--------|-------|-----------|----------------|
  | VEH-{name}-01 | Dashboard POV | Moving, day | SC-01 |
  | VEH-{name}-02 | Driver CU | Parked, night, rain | SC-04 |

* **Consistency anchors:** {Dashboard layout, steering wheel position, seat material, window frame shape}
```

### E321. Digital Space Template

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/templates/location-template.md` (line 119) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/templates/location-template.md#L119 — ISC*

```text
#### {Digital Space Name} ({type — app, dashboard, feed, OS desktop, etc.})

* **Look:** {Colour scheme, typography, layout grid, UI density}
* **Sound:**
  * Bed: {Fan hum, digital silence, ambient office if diegetic}
  * Punctuations: {Notification sounds, clicks, error tones}
* **Continuity constraints:**
  * Must: {UI framework, colour scheme, font, grid}
  * Must not: {Real platform logos; recognisable OS chrome unless intentional}
* **Signature motif:** {Defining UI element — e.g. "pulsing notification badge", "loading spinner"}
* **Continuity chain across appearances:**
  * First appearance state: {Baseline layout and counts}
  * Subsequent appearance changes: {Unread counts, errors, popups, escalations}
  * Non-negotiable anchors: {Grid, font, icon family, accent colour}

* **Scouting specification:**

  * **Required views:**
    * Full-screen: {Complete interface as user sees it}
    * Detail inserts: {Specific UI elements the camera focuses on}
    * State variants: {If the interface changes: notifications accumulating, error states, etc.}

* **Scouting matrix:**

  | Ref ID | View | State | Scene(s) Using |
  |--------|------|-------|----------------|
  | DIG-{name}-01 | Full-screen | Normal | SC-02 |
  | DIG-{name}-02 | Notification detail | Escalated | SC-06 |

* **Consistency anchors:** {Layout grid, font family, accent colour, icon set}
```

### E322. Shot Detail Block

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/templates/shot-list-template.md` (line 45) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/templates/shot-list-template.md#L45 — ISC*

```text
**{Shot ID} — Frame Specification**

* **Start frame:**
  * Framing: {Shot size + angle + lens effect}
  * Visible content: {What is in frame — subjects, objects, environment}
  * Subject state: {Pose, expression, position in frame}
  * Lighting: {Condition key from location scouting matrix}

* **End frame:**
  * Framing: {Shot size + angle — may differ if camera moves}
  * Visible content: {What is in frame at end}
  * Subject state: {New pose, expression, position}
  * Lighting: {Same unless explicitly changing}

* **Key frames (if any):**
  * Key 01 ({timing}): {Intermediate state description}
  * Key 02 ({timing}): {Intermediate state description}

* **Interpolatable change:** {What changes between start and end — position, pose, state, composition}
* **End-frame derivation:** {edit-from-start / generate-new}

* **Reference images to use:**
  * Character: {refs/characters/{name}/{variant}.png}
  * Location: {refs/locations/{name}/{condition}.png}
  * Props: {refs/props/{name}/{variant}.png}
  * Recurring visual elements: {refs/recurring-elements/{name}/primary.png}

* **Transition description (for video prompt):**
  {2–4 sentence description including subject appearance, movement trajectory,
  state changes, and existence statements. This text feeds directly into the
  [ACTION] field of the video prompt.}
```


## F. Transitions, extensions and edits

### F323. prompt-examples — Hospital Vigil II — Seedance 2.0 (Continuation)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 274) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L274 — MIT*

```text
Model: Seedance 2.0 (Continuation mode)
Aspect: 21:9 | Duration: 6s | Style: Naturalistic

Continuing from the prior clip — the husband framed at the bedside, head
bowed, his hand on hers, the heart monitor's rhythm filling the silence.

[Identity block verbatim: man in his late 40s, lined face, three-day stubble,
grey sweater frayed at the cuffs, wedding ring loose on his finger, exhausted
but composed.]

Style & Mood: Cold blue practical light from the corridor bleeding through
the half-open door, single warm lamp by the bed. Naturalistic palette,
muted, shallow depth of field on his face.

Dynamic Description: Following his bowed posture, he slowly lifts his head,
looks at her face, and his composure cracks — eyes filling but not yet
spilling, jaw tightening, breath held. Camera holds steady on his face,
unmoving, letting the change play out.

Static Description: Hospital room at night, single bed, monitor cables, the
warm bedside lamp the only source of warm light.

Camera: Locked-off medium close-up, no movement.

Audio: a single sustained low cello note enters under the held silence —
quiet at first, then swelling almost imperceptibly through the moment his
composure breaks, holding under the cracked breath without resolving.
Diegetic sound recedes beneath it: the heart monitor's tempo, a distant
intercom, the rustle of bedsheets — present but pulled low in the mix.
```

### F324. Cinema Studio 3.0 @ reference patterns (8 patterns: identity, environment, camera cloning, audio, spatial mapping, extension, ad recreation,

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-cinema/SKILL.md` (line 1607) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md#L1607 — MIT*

```text
**Character identity (first frame):**
@Image1 as the main character. She walks through the market, picking up fruit and examining it closely.
**Environment / last frame:**
@Image1 as the starting environment. @Image2 as the destination. Camera tracks through a doorway transitioning from the first space to the second.
**Motion reference / camera cloning:**
Match the camera movement from @Video1. A dancer performs on a rooftop at sunset, wind catching her dress.
**Audio reference (BGM / dialogue / tone):**
Audio @Audio1 plays exactly as uploaded from 0s to end. Do not modify or replace the audio content. Voiceover tone references @Video1.
**Multi-image spatial mapping:**
@Image1 as first frame, @Image2 as top of frame, @Image3 as left side. Camera slowly pans right, revealing the full scene.
**Video extension:**
Extend @Video1 by 5s. The character continues walking, reaching the edge of the cliff and looking out over the valley.
**Ad recreation:**
Mimic @Video1's shot design, pacing, and transitions. Replace all products with @Image1. Match the lighting and camera angles.
**Outfit transformation:**
@Image1 as the character in casual clothes. @Image2 as the same character in formal attire. A quick-cut transformation sequence with fabric particles.
**One-shot continuity:**
@Image1 first frame, @Image2 midpoint, @Image3 final frame. No cuts throughout, one continuous shot tracking the subject across all three compositions.
```

### F325. Multi-Turn Iterative Editing

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 897) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L897 — MIT*

```text
Turn 1: "A modern living room with large windows overlooking the city"
Turn 2: [previous output] + "Replace the furniture with mid-century modern pieces"
Turn 3: [previous output] + "Change the lighting to evening with warm lamps"
```

### F326. Video editing

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 52) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L52 — MIT*

```text
[Edit Goal]
Edit @Video 1. Within <the entire video or a specific time range>, <add, remove, replace, or
adjust> <visual object, region, or audio category>.

[Source Video Role]
@Video 1 is the sole editing master. It defines <characters, scene, actions, composition,
camera movement, occlusion relationships, audio, and event order>.

[Target Material Role]
@Image 1 or @Audio 1 defines <specified attributes of the target object or sound>.

[Edit Scope]
Modify only <object, region, time range, or audio category>.

[Content to Preserve]
Keep <visual content, motion, audio, and timing relationships that must not change> from @Video 1.
```

### F327. Video editing

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 73) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L73 — MIT*

```text
[Edit Goal]
Edit @Video 1. Only from 4-7 seconds, change the cool blue light on the right wall to warm
orange light.

[Source Video Role]
@Video 1 is the sole editing master. It defines the character, room layout, actions,
composition, camera movement, audio, and event order.

[Edit Scope]
Change only the light color on the right wall and the area it illuminates. Allow the
character's skin tone to respond naturally to the environmental light.

[Content to Preserve]
Keep the character's identity, clothing, expression, position, motion, room structure, camera
movement, dialogue, and ambience from @Video 1.
```

### F328. Subject replacement — the Timeline Inheritance clause

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 96) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L96 — MIT*

```text
[Edit Scope]
Modify only <specific object and area>. The entire video contains <number> target object(s).
Do not modify <content to preserve>.

[Timeline Inheritance]
<Target object> inherits every appearance, motion, occlusion, and exit of <original object>,
including timing, duration, path, and speed changes.
Except for the object or area explicitly modified above, keep all other people, props, scene
content, camera movements, cuts, and event order from @Video 1 unchanged.
```

### F329. Background replacement — scope by silhouette

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 113) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L113 — MIT*

```text
[Target Reference Role]
@Image 1 defines only <target environment>'s spatial layout, materials, depth of field,
ambient color, and lighting direction. Do not use the people or foreground objects in the image.

[Edit Scope]
Modify only <background outside the subject's silhouette>. Do not modify <subject identity,
facial features, hairstyle, clothing, expression, position, size, or motion>.

[Timeline Inheritance]
Keep the character actions and occlusion relationships from @Video 1.
```

### F330. Written-scope editing (the annotation substitute)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 148) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L148 — MIT*

```text
[Specific modification object / what] + [action and change description] + [effective time range]
```

### F331. Forward extension (after the source)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 173) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L173 — MIT*

```text
@Video 1 is the source video to extend forward.

Extend @Video 1 forward. The first frame of the extended segment directly continues from the
last frame of @Video 1. Maintain continuity in <subject pose and orientation>, <prop
position>, <background and spatial relationships>, <camera position and composition>,
<lighting>, and <motion direction>.

Then, <describe the new action, event, camera treatment, or audio to add>.

Throughout the extension, maintain continuity in <character identity and clothing>, <key
props>, <background layout>, and <axis of action>.
Keep each subject as the same continuous instance throughout: do not duplicate or split it,
and keep the person's appearance or the object's number of parts stable.
```

### F332. Backward extension (before the source)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 195) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L195 — MIT*

```text
@Video 1 is the source video to extend backward.

Extend @Video 1 backward. Before the source video begins, <describe the preceding action,
event, camera treatment, or audio>.

The last frame of the extended segment naturally connects to the first frame of @Video 1:
<subject pose and orientation>, <prop position>, and <background and spatial relationships>.
Match the <camera position and composition>, <lighting>, and <motion direction> of @Video 1's
first frame.

Throughout the extension, maintain continuity in <character identity and clothing>, <key
props>, <background layout>, and <axis of action>.
```

### F333. Storyboard grids

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 245) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L245 — MIT*

```text
@Image 1 provides an <N-panel storyboard grid> for shot order and approximate composition.
Read it <left to right, top to bottom>. Do not use the grid's <line-art style, text labels,
or placeholder characters>.
@Image 2 defines <Subject A>'s <appearance and clothing>.
@Image 3 defines <key prop or scene>'s <structure, material, or lighting>.

Shot 1: <shot size, subject action, and scene state>.
Shot 2: <shot size, subject action, camera movement, or transition>.
...
Shot N: <closing action and final visible state>.

The final video uses <visual style>. Audio includes <dialogue, ambience, action sound effects,
or music>.
```

### F334. Coarse blockout

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 321) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L321 — MIT*

```text
@Video 1 is a coarse blockout reference. It provides only <motion paths, subject blocking,
camera position, camera movement, cuts, lighting changes, sound rhythm, or spatial
relationships>. Do not use its blockout appearance, materials, or scene.
<Blockout Subject A> in @Video 1 corresponds to <Subject A>.
<Blockout Subject B or geometric prop> in @Video 1 corresponds to <Subject B or key prop>.
@Image 1 defines <Subject A>'s <appearance, clothing, or structure>.
@Image 2 defines <specified attributes> of <Subject B, key prop, or scene>.

<Subject> completes <primary action or event> in <scene>.
Keep <motion path, blocking, camera movement, cuts, lighting, or sound rhythm> from @Video 1.
The final video uses <characters, scene, materials, and visual style>. Audio includes
<dialogue, ambience, or action sound effects>.
```

### F335. Fine blockout

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 343) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L343 — MIT*

```text
@Video 1 is a fine blockout reference. Preserve <subject structure, action, spatial layout,
camera position, camera movement, and cuts>. Do not use its original gray materials or empty
background.
@Image 1 defines <subject>'s <character appearance, material, color, or surface details>.
@Image 2 defines <scene>'s <space, materials, lighting, or visual style>.

Re-render <subject> from @Video 1 as <final subject>, and re-render the scene as <final scene>.
Keep <structure, action, camera treatment, and spatial relationships> from @Video 1.
Use <materials, colors, and style>. Audio includes <ambience, sound effects, or music>.
```

### F336. Fine blockout

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 360) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L360 — MIT*

```text
Render the blockout animation of @Video 1 into the final film.
0-<N>s: <background environment, tone, character material, light and shadow>.
At <N>s, <transition trigger point and method>: <rendering description of the new scene>.
Character rendering <remains unchanged / changes with the scene>.
```

### F337. One-click video

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 381) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L381 — MIT*

```text
[Material Roles]
@Image 1 is used for <character, product, scene, or opening image>.
@Image 2 is used for <character, product, scene, or process image>.
@Image 3 is used for <character, product, scene, or ending image>.
@Video 1 is used only for <editing rhythm, transitions, subtitle treatment, or music style>.
Do not use its character identities or scene.

[Arrangement]
Show the images in <upload order, a specified order, or a model-selected thematic order>.
<State the character, product, location, and event relationships that must remain consistent>.

[Image Motion]
Apply <subtle live motion, parallax, push-in/pull-out, lateral movement, or local action> to
each image.
Keep <subject appearance, product structure, text, or background relationships> stable.

[Final Style]
Use <editing rhythm, transition style, subtitle or graphic treatment, and color style>.

[Audio]
Include <dialogue, ambience, sound effects, or music>.
```

### F338. Seamless transitions

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md` (line 418) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance-2-5/MODE-PLAYBOOKS.md#L418 — MIT*

```text
@Video 1 is the before-transition clip. Use its <ending subject, action, composition, camera
direction, and audio>.
@Video 2 is the after-transition clip. Use its <opening subject, composition, camera direction,
and audio>.
Keep <character identity, product structure, scene, and primary action> stable in the original
portions of @Video 1 and @Video 2.

At the end of @Video 1, <subject or foreground object> triggers the transition through <action>.
The camera <movement direction and speed change>, while <shape, material, light, or space>
gradually transforms into <corresponding element> at the start of @Video 2.
The transition ends naturally at @Video 2's opening composition, preserving continuity in
<subject position, camera direction, and motion trend>.
Audio transitions smoothly from <before audio> to <after audio>.
```

### F339. Reference-Based

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 629) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L629 — MIT*

```text
[Source image role: "as the main character" / "as the starting frame"].
[Action the subject performs]. [Environment and atmosphere if not visible in source].
[Camera movement]. [Lighting cue if different from source].
```

### F340. Continuation

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 643) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L643 — MIT*

```text
[Continuing from prior clip]. [New action that follows from the last frame].
[Camera direction for the continuation]. [Any state change — light shift, new beat].
```

### F341. Expand Shot

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 657) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L657 — MIT*

```text
[Source frame reference]. Extend the scene [direction: outward / upward / leftward].
[What appears in the newly revealed area]. [Preserve the original subject/composition].
```

### F342. Edit Shot

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 671) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L671 — MIT*

```text
Change [specific element] to [new state]. Keep [everything else] unchanged.
[Preserve identity, composition, lighting, and camera behavior from the original.]
```

### F343. Bridge Skeleton

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 1350) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L1350 — MIT*

```text
Scene A ends with:
[final visible state of upstream scene]

Scene B begins with:
[opening visible state of downstream scene]

The missing thing between them is:
[reaction / movement into a new space / prop action /
emotional beat / spatial clarification]

The bridge must preserve:
[same character, same outfit, same location logic,
same emotional residue, same prop continuity]

The bridge must not do:
[no new subplot, no repeat of previous action,
no extra threat, no random spectacle]

The purpose of the bridge is:
[explain the transition / make the cut readable /
carry emotion / reposition the viewer in space]
```

### F344. Bridge Skeleton

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 1377) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L1377 — MIT*

```text
[Reference roles]
@Image1 = character identity reference
@Image2 = continuity start or location anchor (omit if neither is needed)

This is a bridging shot between the previous beat and the next scene.
Its purpose is continuity, not spectacle.

Keep the same character, same outfit, same space logic, same emotional
carryover, and same prop continuity.
Show one readable action that explains the transition.
Do not repeat the previous action beat.
Do not introduce a new threat or subplot.

Scene: [where the character is in this transition moment]
Bridge action: [one small but meaningful movement or reaction]
Camera: [restrained and readable]
Audio: [live sound only if needed]
```

### F345. Continuation Skeleton

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 1414) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L1414 — MIT*

```text
The previous clip ends on:
[end pose / camera direction / emotional state /
visible props]

The next clip must begin immediately after that.

Keep:
[identity / body direction / location / emotional
carryover / props]

Change:
[the new beat that begins now]

Do not repeat:
[the previous action phase]
```

### F346. Continuation Skeleton

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 1435) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L1435 — MIT*

```text
[Reference roles]
@Image1 = exact last-frame continuity anchor
@Image2 = character identity reference
@Image3 = optional environment or prop continuity reference

Use @Image1 as the exact continuity start anchor.
Keep the same character, same lighting logic, same spatial continuity,
same emotional carryover.
Start immediately after the final frame.
Do not repeat the previous beat.

Scene: [what remains unchanged]
New action: [what starts now]
Camera: [how the viewer reads the continuation]
Audio: [live sound only if needed]
```

### F347. Repair Skeleton

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-seedance/SKILL.md` (line 1479) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-seedance/SKILL.md#L1479 — MIT*

```text
Current clip / image state:
[what already works and must remain stable]

The exact problem:
[what is wrong]

Preserve:
[identity / framing / pacing / space / continuity /
lighting / emotion / prop logic]

Change only:
[one or two specific elements]

Do not damage:
[what tends to drift if the edit is too broad]
```

### F348. The skeleton

*Source: **higgsfield-ai-prompt-skill** · `templates/seedance/footage-vfx-transform.md` (line 28) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/seedance/footage-vfx-transform.md#L28 — MIT*

```text
@source: Original <clip> — <subject, wardrobe, setting, action>. Preserve identity, face,
wardrobe, performance, framing, lens, camera and motion exactly; <the one change>.
@creature: Reference photo of a real <animal/material> — <texture/anatomy notes>. Appearance
and texture reference only; ignore its background and lighting.   (only if a texture ref is used)

Photoreal. 16:9. <N>s. 4K. <look/grade>. NON-IP — generic <X>. SFX [and source dialogue] only.

<Continuous shot, same framing as source. Preserved performance. The transformation, with its
physics and how it interacts with the plate (light spill, contact shadow, refraction, parallax).
Any timed camera move with a semantic + numeric anchor. Lock-down clause: face and identity
unchanged; everything else identical to the source.>

SFX [and source dialogue] only: <specific, ordered sounds synced to the visible action>.
```

### F349. 4. Edit-First Prompt

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/frameworks.md` (line 108) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/frameworks.md#L108 — ISC*

```text
Preserve: [identity / pose / wardrobe / composition / lighting direction / background elements].
Change only: [targeted change].
Match existing: [perspective / shadows / colour temperature / texture].
Do not alter: [critical locked elements].
```


## G. Dialogue / lip-sync

### G350. prompt-examples — Example 5: No Audio Direction → Structured Sound (Dialogue)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 157) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L157 — MIT*

```text
Two people talking at a café. It should sound natural.
```

### G351. prompt-examples — Example 5: No Audio Direction → Structured Sound (Dialogue)

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 164) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L164 — MIT*

```text
Model: Kling 3.0
Aspect: 16:9 | Duration: 8s | Style: Cinematic

A woman and a man sit across from each other at a small café table by the window.
She leans forward: "I found something — you need to see this."
He sets down his cup slowly: "Not here."
Ambient: quiet café murmur, espresso machine hiss in background, rain on window.
Camera: Over-the-shoulder medium shots alternating. Static, locked-off.
Style: Cinematic. Warm interior, cold blue rain light through window, shallow DOF.
```

### G352. Kling 3.0 (V3) / 3.0 Omni (O3)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-audio/SKILL.md` (line 472) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-audio/SKILL.md#L472 — MIT*

```text
[Speaker: Character Name] "dialogue" in a [warm/confident/excited] [male/female] voice with [accent].
Add [sound: footsteps / rain / door closing] when [action].
Background ambient: [environment description].
```

### G353. Audio Speaker Attribution Format (V3, O3, 2.6)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 214) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L214 — MIT*

```text
[Speaker: Character Name] "dialogue" in a [warm/confident/excited] [male/female] voice with [accent].
Add [sound: footsteps / rain / door closing] when [action].
Background ambient: [environment description].
```

### G354. Multi-Shot Storyboard Format (V3/O3 only)

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 226) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L226 — MIT*

```text
Shot 1 ([Xs]): [Wide establishing shot]. Camera: static.
Shot 2 ([Xs]): [Medium shot, action begins]. Camera: slow push in.
Shot 3 ([Xs]): [Close-up, reaction or detail]. Camera: static.
Shot 4 ([Xs]): [Resolution]. Camera: tracking / pull back.
```

### G355. Voice Template

*Source: **ai-video-generator-claude** · `skills/04-course-promo/SKILL.md` (line 201) — https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/04-course-promo/SKILL.md#L201 — MIT*

```text
Voiceover: [gender/tone descriptor] voice, warm and direct, speaking at 140 words per minute,
no music during voiceover — underscore only (music at -18dB),
voice enters at [timestamp], one breath between each key statement,
tone is [choose: authoritative / conversational / conspiratorial / celebratory]
```

### G356. 8b) With dialogue

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/video-prompt.md` (line 136) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
Create a [duration] cinematic video.

Reference:
Use the uploaded storyboard/image as the exact visual and timing reference if provided.

Subject:
[subject]

Scene:
[scene]

Style:
[style]

Rules:
- Follow the shot order exactly if a storyboard is provided
- Each panel is one separate cinematic shot beat if a storyboard is provided
- Maintain character, outfit, environment, lighting, and prop continuity
- Dialogue must be short, natural, and timed to the shots
- No subtitles
- No text on screen
- No background music
- Natural sound design only
- Do not mention aspect ratio

Shot Sequence:
[00:00–00:02]
SHOT 1 - [title]
[action, camera, expression, movement]
Dialogue:
[Character]:
"[line]"

[00:02–00:04]
SHOT 2 - [title]
[action, camera, expression, movement]
Dialogue:
[Character]:
"[line]"
[continue until complete]

Audio:
Clear dialogue, natural room tone, movement sounds, object sounds, atmosphere, and realistic effects. No background music.

Negative:
No background music, no subtitles, no text on screen, no watermark, no logo, no UI, no aspect ratio, no extra characters unless requested, no off-story events, no identity drift, no style drift, no costume drift, no environment drift.
```

### G357. 9) Solo self-talk example

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/video-prompt.md` (line 231) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
[Character]:
"Stay calm."
[Character]:
"Just one more step."
[Character]:
"I can make it through this."
```

### G358. 模板 D:对话场景(单镜头 + 多动作)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/17-happyhorse-masterclass.md` (line 429) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md#L429 — MIT*

```text
[Subject1] [action 1] → [action 2] → [action 3 while glancing at @character2] → [action 4].
[Subject2] [reaction: e.g., quietly listens, slight nod].
[Camera shot]. [Lighting].
AUDIO: [ambient sound], "[Subject1 line]". "[Subject2 line]".
```

### G359. M1 文生视频对话场景(Brooklyn Bridge)

*Source: **lanshu-awesome-ai-video-kit** · `methodology/18-kling-masterclass.md` (line 1059) — https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/18-kling-masterclass.md#L1059 — MIT*

```text
Don't do this. I am begging you.
[Shot 1, Brooklyn Bridge, couple arguing, close-up on woman's face, 5s]
[Shot 2, reverse angle on man, 5s]
[Shot 3, wide establishing shot, 5s]
No music, no background dialogue.
```


## H. Storyboards, shot lists, stills and overlays

### H360. prompt-examples — Sci-Fi Character Tension — Nano Banana Pro

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 14) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L14 — MIT*

```text
Model: Nano Banana Pro
Aspect: 16:9 | Style: Cinematic

Medium Close-Up (MCU) Low Angle Dolly Zoom of a weathered space pilot in a cracked visor.
Staring intensely off-camera, jaw clenched.
The sparking, smoke-filled cockpit of a crashing starfighter.
Flashing red emergency lights, hard side-key illumination.
Photorealistic sci-fi cinematic, ultra-sharp detail.
```

### H361. prompt-examples — Epic Fantasy Scale — Seedream 4.5

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 26) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L26 — MIT*

```text
Model: Seedream 4.5
Aspect: 16:9 | Style: Concept Art

Extreme Wide Shot (EWS) Overhead / Bird's Eye Crane up of a lone knight in blackened armor.
Kneeling in the snow with a glowing broadsword planted in the ground.
A vast frozen lake surrounded by jagged obsidian mountains.
Cold blue hour, soft diffused moonlight piercing through heavy clouds.
Dark fantasy concept art, high contrast, 4K resolution.
```

### H362. prompt-examples — Psychological Thriller Detail — Nano Banana Pro

*Source: **higgsfield-ai-prompt-skill** · `prompt-examples.md` (line 38) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md#L38 — MIT*

```text
Model: Nano Banana Pro
Aspect: 3:4 | Style: 1970s Thriller

Extreme Close-Up (ECU) Dutch Angle Rack Focus of a trembling hand clutching an ornate silver key.
Knuckles white from gripping too hard, skin textured and cold.
A dimly lit vintage hallway with peeling floral wallpaper in the blurred background.
Sickly yellow-green practical light, deep crushed shadows.
1970s psychological thriller, heavy film grain, muted color palette.
```

### H363. Genre Templates — Ready-to-Use Starters

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 552) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L552 — MIT*

```text
[Product] hero-shot on [surface]. Camera slow orbit 90°.
Soft studio key, rim highlight, no fill. Macro depth-of-field.
No text. No people.
```

### H364. Genre Templates — Ready-to-Use Starters

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 559) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L559 — MIT*

```text
@Image1 [Fighter A]. @Image2 [Fighter B].
A throws [strike] → B blocks → B counters with [move].
[Location]. Handheld low-angle, whip-pan to follow impact.
Slow-motion 0–4s, real-time 4–10s.
Impact SFX at peak contact.
```

### H365. Genre Templates — Ready-to-Use Starters

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-models/MODELS-DEEP-REFERENCE.md` (line 568) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-models/MODELS-DEEP-REFERENCE.md#L568 — MIT*

```text
@Image1 [Character A]. @Image2 [Character B].
A speaks [emotion]: "[line]" — cut to B reaction.
Over-the-shoulder medium shots alternating.
Interior [location], practical lamp key.
Sync lip movement to @Audio1.
```

### H366. STEP 3 — Generate the storyboard

*Source: **higgsfield-ai-prompt-skill** · `skills/higgsfield-motion-design/SKILL.md` (line 71) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion-design/SKILL.md#L71 — MIT*

```text
Storyboard sheet, [N] sequential panels in a grid, each labeled "Frame 1"…"Frame N".
Panel 1: [scene]. Panel 2: [scene]. … Panel N: [logo lock / brand name].
Each panel: [camera angle], [motion state], [mood/lighting]. Style: [cinematic / kinetic].
Consistent color palette throughout. Clean storyboard design, thin borders between panels.
```

### H367. Beat format

*Source: **higgsfield-ai-prompt-skill** · `templates/character-design/story-spine.md` (line 8) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/character-design/story-spine.md#L8 — MIT*

```text
Beat N: [character] [does / discovers / loses] [thing]. Result: [the next problem].
```

### H368. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/text-overlays/slogan.md` (line 9) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/text-overlays/slogan.md#L9 — MIT*

```text
Display the text "[TEXT]" at [timing], positioned at [screen
position]. The text appears with [entrance style], in [font style],
[color], with [size and layout]. The text remains sharp, simple, and
readable.
```

### H369. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/text-overlays/speech-bubble.md` (line 10) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/text-overlays/speech-bubble.md#L10 — MIT*

```text
Character A says, "[SHORT DIALOGUE]". A clean speech bubble appears
near Character A's head, positioned in the upper-left area, with
simple readable text and no complex symbols.
```

### H370. Prompt template

*Source: **higgsfield-ai-prompt-skill** · `templates/text-overlays/subtitle.md` (line 9) — https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/templates/text-overlays/subtitle.md#L9 — MIT*

```text
Display clean subtitles at the bottom-center of the frame. The
subtitle text reads: "[TEXT]". The subtitles are synchronized with
the spoken line, using simple white sans-serif text with a subtle
black shadow for readability.
```

### H371. Prompt template (one per shot)

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/production-images.md` (line 44) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
[Shot N] [shot size + angle] of [subject/character with key identity + wardrobe], [action/moment], in [setting], [time of day]. [Lens + depth of field], [lighting + color/mood], [style + grade]. Ultra-detailed, sharp focus, [aspect ratio if image]. Consistent with the reference identity and style. No watermark, no logo, no text, no extra characters unless requested.
```

### H372. 7) Prompt template

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/storyboard.md` (line 67) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
Create a professional cinematic storyboard sheet.

Project:
[title]

Duration:
[duration]

Panels:
[number of shots]

Aspect Ratio:
16:9

Style:
[visual style]

Character/Subject:
[character or subject description]

Environment:
[location/world]

Storyboard Layout:
Clean widescreen production storyboard sheet with numbered panels, clear shot titles, camera notes, action notes, timing hints, and strong visual flow. Use a professional layout with readable panel structure.

Continuity Rules:
- Same character identity throughout
- Same outfit, proportions, props, and style throughout
- Same environment logic and lighting direction throughout
- Each panel must be a distinct cinematic shot
- Strong variety in camera angles: wide, medium, close-up, extreme close-up, overhead, low angle, tracking, hero shot where useful

Shot Sequence:
1. [shot title] — [action, camera, timing, emotion]
2. [shot title] — [action, camera, timing, emotion]
3. [shot title] — [action, camera, timing, emotion]
[continue until all shots are complete]

Visual Direction:
Use clear cinematic composition, readable silhouettes, emotional progression, strong pacing, and dynamic motion. Prioritize shot grammar, continuity, and story clarity.

Footer Notes:
Include camera tips, timing flow, style notes, and continuity reminders.

Negative:
No watermark, no logo, no random text inside panels, no inconsistent costume, no identity drift, no messy layout, no extra characters unless requested.
```

### H373. Prompt template (one per thumbnail)

*Source: **claude-higgsfield-skill** · `Higgsfield.skill › higgsfield/references/thumbnails.md` (line 43) — https://github.com/AIcentury/claude-higgsfield-skill/blob/0e0fc61/Higgsfield.skill — MIT*

```text
YouTube thumbnail, 16:9, for a video titled "[title/topic]". [Subject/character with key identity + expressive emotion], [crop/pose], [placement per composition]. Background: [scene/treatment, high contrast]. Color palette: [palette]. Text: "[3–5 word hook]" in [font weight/style, color, outline/shadow], placed [position], not covering the face. [Effects: glow/arrow/etc.]. Match the style and branding of the reference thumbnail: [fingerprint cues]. Bold, high-contrast, ultra-sharp, click-optimized. No clutter, no watermark unless it's the brand logo.
```

### H374. Overview

*Source: **higgsfield-skills** · `shared/generation-flow.md` (line 41) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/shared/generation-flow.md#L41 — MIT*

```text
[Step 1] Resolve model
    └─> [Step 2] Build prompt + assemble parameters
            └─> [Step 2b] (conditional) media_upload → media_confirm → add to input_files
                    └─> [Step 3] Confirmation gate ← REQUIRED — wait for explicit YES
                            └─> [Step 4] generate_image / generate_video → job_id
                                    └─> [Step 5] Poll job_status (backoff 30-60s, NEVER re-generate)
                                            └─> [Step 6] job_display → present result + URL
```

### H375. Step 4 — Generate

*Source: **higgsfield-skills** · `shared/generation-flow.md` (line 165) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/shared/generation-flow.md#L165 — MIT*

```text
higgsfield:generate_video({
  model: "<model_id>",
  prompt: "<prompt_text>",
  aspect_ratio: "<from_models_explore>",
  duration: <integer_within_range>,
  input_files: [{ "id": "<confirmed_id>", "role": "<role>" }]  // if Step 2b was run
})
→ returns job_id
```

### H376. Multi-Page Sequencing

*Source: **higgsfield-skills** · `skills/04-comic-to-video/references/panel-craft.md` (line 224) — https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/04-comic-to-video/references/panel-craft.md#L224 — MIT*

```text
READING ORDER: [format]
PAGES: [count]

PAGE 1:
[Panel-by-panel breakdown per page]

PAGE 2:
[Panel-by-panel breakdown]

OVERARCHING ARC: [Setup → Escalation → Climax → Resolution]
CHARACTER CONTINUITY: [Physical consistency notes]
ENVIRONMENT CONTINUITY: [Spatial / lighting / atmosphere notes]
```

### H377. Scene block pattern

*Source: **seedance-shotlist-director-en** · `references/board-spec.md` (line 82) — https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/board-spec.md#L82 — MIT*

```text
<div class="scene">
  <div class="scene-header">
    <input type="checkbox" data-scene="3">
    <div class="scene-num">3.</div>
    <div class="scene-desc">Anna confronts Marco in the kitchen — the first crack. <em>Match-cut in: bedroom door → fridge door.</em></div>
  </div>

  <div class="prompt-block">
    <div class="prompt-label">
      <span>Prompt 3a · gen 8s</span>
      <span class="badge risk-mid">tricky — two-person blocking</span>
      <span class="prompt-actions">
        <span class="edited-badge" data-prompt-id="3a" hidden>edited</span>
        <button class="tool-btn reset-btn" data-prompt-id="3a" hidden title="Restore the original generated text">Reset</button>
        <button class="tool-btn lang-btn" title="Show translation (Ctrl+Shift+L)" aria-pressed="false">RU</button>
        <button class="copy-btn" title="Copy the prompt for Seedance (Ctrl+Shift+C)">Copy</button>
      </span>
    </div>
    <div class="director-note"><b>purpose:</b> … · <b>edit role:</b> … · <b>must survive:</b> … <span class="plan-b">[high-risk only] Plan B: safe alternative + covering insert</span></div>
    <pre class="prompt" lang="en" data-prompt-id="3a">[FULL PROMPT — Style CORE, Lighting, Characters (@refs), Scene, CUTs, ENDS ON, SFX]</pre>
    <div class="mirror-stale" data-prompt-id="3a" hidden>The prompt was edited — the translation below matches the original version. Press Export edits and ask Claude to update the file.</div>
    <pre class="prompt-mirror" hidden>[Full read-only mirror of the prompt in the user’s language; dialogue lines stay English with a translation in brackets]</pre>
    <div class="prod-row">
      <select data-prompt-field="status" data-prompt-id="3a">
        <option value="">not started</option><option value="gen">generating</option>
        <option value="retry">retry</option><option value="keeper">keeper</option>
      </select>
      <input class="keeper" data-prompt-field="keeper" data-prompt-id="3a" placeholder="keeper 0:04–0:09">
      <input class="notes" data-prompt-field="notes" data-prompt-id="3a" placeholder="notes…">
      <textarea class="takes" data-prompt-field="takes" data-prompt-id="3a" placeholder="take log: result → the ONE change → keeper?"></textarea>
    </div>
  </div>
</div>
```

### H378. Brand board or cover

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 19) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L19 — ISC*

```text
Create a brand identity cover for [brand].
Aspect ratio: [ratio].
Header: "[exact text]" at the top.
Footer: logo lockup anchored in the lower right.
Visual language: [shapes, motif, color system].
Mood: futuristic, clean, expressive.
Lighting/finish: matte surfaces with soft neon edge glow.
```

### H379. Professional headshot

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 61) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L61 — ISC*

```text
Keep the person's facial identity exactly consistent with the reference image.
Dress them in [wardrobe].
Place them against [background].
Shot on an 85mm lens with soft three-point studio lighting, chest-up framing, natural skin texture, subtle catchlights, professional editorial finish.
```

### H380. Technical object breakdown

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 80) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L80 — ISC*

```text
Create a high-resolution technical breakdown of [object].
Show the full object in dynamic perspective.
Add clean white callout lines, labels, diagram boxes, and a top title reading "[TITLE]".
Use a crisp engineering aesthetic with readable annotation hierarchy.
```

### H381. Floor plan prompt

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 99) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L99 — ISC*

```text
Create a one-floor architectural plan.
Overall footprint: [dimensions and shape].
Include exactly [room count] rooms with stated dimensions and adjacency rules.
Render as a clean plan diagram with door swings, window placements, and readable room labels.
```

### H382. Layout with numeric constraints

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/examples.md` (line 108) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/examples.md#L108 — ISC*

```text
Show exactly [N] subjects arranged as [rows / arc / grid].
Use [specific count] in the front, [specific count] in the middle, and [specific count] in the back.
Each subject must hold or display a unique [qualified item].
```

### H383. 2. Structured Blueprint Prompt

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/frameworks.md` (line 33) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/frameworks.md#L33 — ISC*

```text
Create [artifact type].

Canvas:
- Aspect ratio: [ratio]
- Layout anchors: [top / center / footer / left column / right column]

Subject blocks:
- [Block name]: [content, placement, scale]

Typography:
- Headline text: "[exact text]"
- Placement: [where]
- Typographic character: [bold condensed / elegant serif / technical mono]

Visual system:
- Palette: [colours]
- Materials/textures: [paper, acrylic, matte ceramic, grain, etc.]

Lighting/rendering:
- [lighting and finish]

Constraints:
- Keep [specific element] fixed
- Leave [region] clean
- Preserve readability and spacing
```

### H384. 6. Text Rendering Pattern

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/frameworks.md` (line 144) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/frameworks.md#L144 — ISC*

```text
The image includes the exact text "[TEXT]".
Place it [location].
Render it in [font character].
Keep spacing, alignment, and readability clean.
```

### H385. 7. Logic and Enumeration Pattern

*Source: **visual-storytelling-skills** · `skills/nanobanana/references/frameworks.md` (line 162) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/nanobanana/references/frameworks.md#L162 — ISC*

```text
Show exactly [N] items arranged as [layout].
Each item must satisfy [rule].
Keep [row / cluster / center] balanced and clearly separated.
```

### H386. Phase 7: Scene Inventory

*Source: **visual-storytelling-skills** · `skills/scene-inventory-extractor-v2/SKILL.md` (line 317) — https://github.com/leynos/visual-storytelling-skills/blob/b615d40/skills/scene-inventory-extractor-v2/SKILL.md#L317 — ISC*

```text
#### SC-{XX}

* **Scene ID:** SC-{XX}
* **Location:** {Location name}
* **Time:** {Time of day; weather; season}
* **Lighting condition key:** {Maps to scouting matrix entry}
* **Characters present:** {Who}
* **Objective / tension:** {What's at stake}
* **What changes:** {State shift by scene end}
* **Key sensory notes:** {Smell/sound/temperature}
* **Transitions in/out:** In: {from}. Out: {to}.
* **Continuity dressing notes:**
  * Fixed location anchors: {architecture, furniture, installed fixtures}
  * Recurring visual elements: {monitor banks, robots, light strips, cabinets, console layouts, signage clusters}
  * Movable dressing: {objects that can shift position}
  * Character-carried items: {by character}
  * Consumables / depletion states: {food, drink, cigarettes, fuel, paper stacks}
  * Weather / dirt / damage state: {mud, blood, sweat, rain, soot, wrinkles}
  * Reset-sensitive details: {what must match across coverage and return visits}
```


## Other prompt galleries (not copied)

These large galleries are mostly generic Seedance / MiniMax / Kling prompts rather than Higgsfield presets. They are **indexed here** instead of copied. The Higgsfield-specific entries (`hg-*`, `sd-065…072`) were copied above.

| Gallery | Size | Categories | URL | License |
|---|---|---|---|---|
| lanshu-awesome-ai-video-kit · `prompts/data/all-prompts.json` | 433 prompts, 16 models (Seedance 117, HappyHorse 90, Kling 72, Sora 20, Veo 20, Higgsfield Soul 8, …) | 31 categories (cinematic 76, action 47, product-commercial 40, creative 32, fantasy-scifi 24, image-to-video 23, nature 22, social-viral 19, dialogue-driven 16, …) | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json | MIT |
| lanshu · `methodology/*.md` (21 formula files: basic formula, advanced formula, storyboard timing, emotion externalization, camera dictionary, constraint words, Kling/Sora/Veo/Seedance/HappyHorse/Gemini-Omni formulas, character consistency, FPV) | Templates A–H per model | — | https://github.com/cclank/lanshu-awesome-ai-video-kit/tree/b4ceecc/methodology | MIT |
| awesome-seedance-2.5-prompts · `README.md` | 20 prompts | One-take & Camera Choreography · Narrative & Multi-scene · VFX, Transformation & Reference Editing · Brand, Product & Fashion · Animation, Culture & Typography · Worldbuilding & Spectacle | https://github.com/forgewebO1/awesome-seedance-2.5-prompts/blob/14484c5/README.md | CC-BY-4.0 |
| awesome-minimax-h3-prompts · `README.md` | 20 prompts | Brand Films · Motion Design & AI Storytelling · Product, UI & Game Concepts · Animation & Stylized · Omni Reference & Performance Transfer · Precise Multimodal Editing | https://github.com/forgewebO1/awesome-minimax-h3-prompts/blob/827c802/README.md | CC-BY-4.0 |
| ai-film-pipeline · `docs/sample-prompts.md` | 4 long samples (Seedance multi-shot, Banana Pro face lock, …) | — | https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/docs/sample-prompts.md | MIT |
| ai-video-generator-claude · `skills/0X-*/SKILL.md` "Complete Example Prompts" | ~40 full Seedance-on-Higgsfield ad prompts (viral hook, SaaS, personal brand, course, faceless, luxury, before/after, testimonial, avatar, podcast) | see marketing-dtc.md §11 | https://github.com/rediumvex/ai-video-generator-claude/tree/ffdad7d/skills | MIT |
| higgsfield-skills · `skills/*/references/examples.md` | 15 skills × ~5 examples (only placeholder-bearing blocks copied above) | cinematic, 3D, cartoon, comic, fight, motion-design ad, e-commerce, anime, product 360, music video, social hook, brand story, fashion, food, real estate | https://github.com/pixelab-ch/higgsfield-skills/tree/2f6aa10/skills | MIT |
