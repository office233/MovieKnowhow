# Higgsfield camera-motion presets

This file collects every named camera-motion preset, camera control and camera enum found in the cloned open-source repos under `../opensource/` (licenses: MIT, CC-BY or ISC; see `../opensource/SOURCES.tsv`). The 87 Viral Hub presets and 63 bundled recipes that were captured from the live MCP are indexed in [INDEX.md](INDEX.md). Where one of those overlaps a camera move, this file links to it.

**Counts:** 42 named camera controls (general generation / DoP), 13 angle presets, 8 shot sizes, 18 + Auto Cinema Studio Director Panel moves, 9 CS 3.5 Camera Moveset Styles, 6 + 7 + 8 speed-ramp modes, 22 precision-phrased moves (higgsfield-skills), 7 hook moves, 12 luxury/faceless moves, 21 implied-motion image moves, 4 DoP API/official templates.

## Source legend

Each table row cites one or more of these codes. Every code is a repo plus a relative path, pinned to the commit that was cloned.

| Code | Repo · path | URL |
|---|---|---|
| **C1** | higgsfield-ai-prompt-skill · `skills/higgsfield-camera/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md |
| **C2** | higgsfield-ai-prompt-skill · `vocab.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/vocab.md |
| **C3** | higgsfield-ai-prompt-skill · `skills/higgsfield-cinema/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md |
| **C4** | higgsfield-ai-prompt-skill · `model-guide.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/model-guide.md |
| **C5** | higgsfield-ai-prompt-skill · `skills/higgsfield-image-shots/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-image-shots/SKILL.md |
| **C6** | higgsfield-ai-prompt-skill · `skills/higgsfield-recipes/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-recipes/SKILL.md |
| **C7** | higgsfield-skills · `skills/01-cinematic/references/camera.md` | https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/camera.md |
| **C8** | ai-video-generator-claude · `skills/01-viral-hook/SKILL.md` | https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/01-viral-hook/SKILL.md |
| **C9** | ai-video-generator-claude · `skills/05-faceless-channel/SKILL.md` | https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/05-faceless-channel/SKILL.md |
| **C10** | ai-video-generator-claude · `skills/06-luxury-aesthetic/SKILL.md` | https://github.com/rediumvex/ai-video-generator-claude/blob/ffdad7d/skills/06-luxury-aesthetic/SKILL.md |
| **C11** | lanshu-awesome-ai-video-kit · `methodology/05-运镜词典.md` | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/05-运镜词典.md |
| **C12** | lanshu-awesome-ai-video-kit · `methodology/21-fpv-航拍路径绘制玩法.md` | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/21-fpv-航拍路径绘制玩法.md |
| **C13** | lanshu-awesome-ai-video-kit · `prompts/data/all-prompts.json` (ids `hg-001`…`hg-008`) | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/prompts/data/all-prompts.json |
| **C14** | cli · `MODELS.md` | https://github.com/higgsfield-ai/cli/blob/dc7e2d2/MODELS.md |
| **C15** | higgsfield_ai_mcp · `src/higgsfield_mcp/client.py` + `server.py` | https://github.com/geopopos/higgsfield_ai_mcp/blob/a2bea49/src/higgsfield_mcp/client.py |
| **C16** | higgsfield-ai-prompt-skill · `skills/higgsfield-motion/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-motion/SKILL.md |
| **C17** | higgsfield-ai-prompt-skill · `prompt-examples.md` + `templates/01…10-*.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/prompt-examples.md |
| **C18** | higgsfield-ai-prompt-skill · `specs/models_explore_snapshot_2026-08-07.json` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/specs/models_explore_snapshot_2026-08-07.json |

## How camera presets are called (four surfaces)

| Surface | How to invoke | Vocabulary | Source |
|---|---|---|---|
| **General video generation** (Kling, Seedance, Wan, Veo, Hailuo, and others) | Write the exact preset name in the prompt, usually on a `Camera:` line: `Camera: Crash Zoom In on her eyes.` Use one primary move per shot. Layer at most two moves, and only if they are compatible. | The 42 controls in Table A | C1, C2, C17 |
| **Higgsfield DoP (image-to-video)** | API: `POST /v1/image2video` with `params.motions: [{id: <motion_uuid>, strength: 0.5}]` and `model: dop-lite \| dop-turbo \| dop-preview`. List the IDs with `GET /v1/motions`. Each entry returns `id, name, description, preview_url, start_end_frame`. The same repo lists Soul image styles at `GET /v1/text2image/soul-styles` (`style_id`). | "50+ cinematic camera presets." UI categories: All, New, Trending, Effects, Basic Camera Control, Epic Camera Control, Catch the Pulse, Mix | C15, C4 |
| **Higgsfield Preset model** (`higgsfield_preset`) | `generate_video(model='higgsfield_preset', preset_id=<id from presets_show>)` plus exactly one `image`. Aspect ratios 16:9, 9:16, 1:1. Tags: preset, image-to-video, viral, template. | Viral Hub / preset catalog (see INDEX.md) | C18 |
| **Cinema Studio** | UI dropdowns. Camera names never go in the prompt text. 2.5 and 3.0 use the **Director Panel** (18 moves plus Auto, Table C). 3.5 uses **Camera Moveset Style** (9, Table D; CLI `--camera_style`). CLI `cinematic_studio_video_v2` / `_3_0` accept `--speedramp`. | Tables C, D, E | C3, C14 |

> **Scope caveat** (C16): motion presets belong to the viral-effects / social product, not to film grammar. The source reports that none of 13 harvested community film/ad productions used a motion preset; serious film work free-prompts the camera through Cinema Studio or Seedance. A live catalog pull expanded about 100 unique preset names into about 1,900 per-model variants (Kling, Higgsfield, Wan, MiniMax and Seedance families, with parameters baked in).

---

## Table A — Named camera controls (general generation and DoP)

Column key: **Does** = what the move does. **Best use** = when to reach for it. **Model(s)** = best-performing models per C4 ("†Sora 2 is UI-only as of 2026-07-05"). **Phrase / template** = exact prompt wording from the source. **Pair / tips** = pairing guidance.

### A1. Dolly

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **Dolly In** | Smooth linear move toward the subject | Intimacy, revelation, tension build | Kling 2.6 / 3.0 | "Camera Dolly In toward her face" · precise: "Camera dolly forward at constant 2 feet/second. Maintain subject center-frame. Slight lens breathing… No focus shift." | + Dutch Angle = villain reveal. The horror default is a slow Dolly In (creep). For micro-moves, state distance and time: "over the full 7 seconds the camera pulls back only 10–15 centimeters." | C1, C4, C7 |
| **Dolly Out** | Smooth linear move away from the subject | Isolation, departure, widening context | Kling | "Camera Dolly Out revealing the empty square" · "Camera: Dolly Out — retreating as she advances, never quite letting her fill the frame." | Fashion runway (retreat as the model advances). Horror: "Dolly Out slowly as the figure keeps approaching — never quite reaching us." | C1, C17 |
| **Dolly Left** | Lateral track to the left | Following horizontal movement, revealing the scene | — | "Camera Dolly Left tracking alongside the runner" | Also called Truck Left | C1, C2 |
| **Dolly Right** | Lateral track to the right | Same as Dolly Left | — | "Camera Dolly Right as the car accelerates" | Parallax: "Background moves slower than foreground." | C1, C7 |
| **Dolly Zoom In** | Dolly forward while zooming out (Hitchcock / vertigo) | Vertigo, shock, realization | — | "Dolly Zoom In — subject stays size as background rushes away" · image: "Dolly zoom effect on [img 1]. The background mountains appear to warp and grow larger while she stays the same size. Vertigo effect." | One move only; do not stack with a pan | C1, C5 |
| **Dolly Zoom Out** | Dolly back while zooming in | Overwhelm, isolation, world closing in | — | "Dolly Zoom Out — city swallows the figure" | — | C1 |
| **Super Dolly In** | Exaggerated fast rush toward the subject | Sudden shock, urgent revelation | — | "Super Dolly In on the handprint on the window" | Similar to Crash Zoom but a physical move | C1 |
| **Super Dolly Out** | Exaggerated fast pull back | Dramatic reveal of scale, sudden context shift | Sora 2† (fallback: Seedance 2.0, Hailuo 2.3) | "Super Dolly Out to reveal the entire burning city" | Pairs with the Anamorphic style | C1, C4 |
| **Truck (L/R)** | Another term for a lateral dolly | Parallax | — | "Truck right camera movement. The camera slides sideways parallel to [img 1]…" | — | C2, C5 |
| **Push In / Slow push-in** | Generic dolly-in (Higgsfield DoP template name "Push In") | Suspense, realization | Higgsfield DoP / Soul | DoP template: "Slow push in. Medium close-up of a woman with dark wet hair under a flickering streetlamp at night. Her eyes track something off-frame to the left. Rain falls steadily, lit only by the lamp." | The source's rule of thumb: short prompts beat long ones on DoP. See recipe [push-in](recipes/push-in.md). | C13 (hg-001), C11 |
| **Pull Back / Pull-Back Reveal** | Start tight, move backward, context expands | "Oh wow" reveal, scale | — | "Pull back reveal. Camera starts on the detail of [img 1]'s eye, then pulls back rapidly to show she is standing on top of a burning village." · hook: "Tight close-up on detail. Camera pulls back steadily over 2s revealing the full scene…" | Emotional space: a slow pull-back from medium to wide to "leave the character alone." See recipe [pull-back](recipes/pull-back.md). | C5, C8, C1 |

### A2. Crane / vertical

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **Crane Up** | Camera rises from ground or subject level | Reveal scope; intimate to grand | Sora 2† | "Crane Up from the soldier's hands to the war-torn landscape" · precise: "Camera rises vertically 30 feet over 4 seconds. Subject remains visible in lower frame… Tilt down slightly to maintain subject connection throughout rise." | + 360 Orbit = epic reveal of scale. Maps to Cinema Studio **Jib Up**. See recipe [crane-reveal](recipes/crane-reveal.md). | C1, C4, C7 |
| **Crane Down** | Camera descends from a high position | Introduce location from above, personalize | — | "Crane Down from the skyline to the lone figure on the street" · "Camera descends 20 feet over 3 seconds. Start wide-overhead, end at eye level with subject. Slow tilt up during descent…" | Maps to Cinema Studio **Jib Down** | C1, C7 |
| **Crane Over The Head** | Overhead god-like view, directly above | Vulnerability, surveillance, choreography | — | "Crane Over The Head — top-down view of the crowd" | See recipe [topdown-dive](recipes/topdown-dive.md) | C1, C2 |
| **Levitation** (camera) | Smooth, dreamlike upward float | Mystical, transcendence, out-of-body | — | "Camera Levitates from her feet to her serene face" | There is also a Levitation *motion* preset where the subject floats (effects-and-styles.md) | C1 |
| **Tilt Up / Tilt Down** | Camera rotates on its horizontal axis (not a physical move) | Scale, aspiration / weight, consequence | — | "Camera: Tilt Down following his flashlight beam slowly down the stairs." · "Camera tilts upward from feet to face at 20 degrees per second…" | Director Panel names: Tilt Up / Tilt Down | C2, C3, C7, C17 |
| **Pedestal Up / Down** | The whole camera moves up or down (elevator motion) | Change the subject's relationship to the ground | — | "Camera pedestals up, rising from the snow level to eye-level with [img 1]…" | — | C5 |
| **Rise Reveal** (hook) | 20 ft rise in 2 s | Scale, majesty | Seedance 2.0 | "Camera rises vertically 20 feet over 2s. Ground-level detail gives way to aerial perspective…" | — | C8 |
| **Drop Shot** (hook) | 6 ft vertical drop in 0.4 s | Falling sensation | Seedance 2.0 | "Camera drops vertically 6 feet in 0.4s. Creates stomach-drop sensation… Frame shakes slightly on landing." | — | C8 |

### A3. Orbit / arc

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **360 Orbit** | Full circle around the subject | Emotional isolation, dramatic emphasis, dance | Kling 2.6 / 3.0 | "360 Orbit around the boxer in the ring" · "Camera: 360 Orbit tightening toward her as movement intensifies." · precise: "Camera orbits 270 degrees counterclockwise around subject over 5 seconds. Maintain constant 8-foot distance… Speed: 54 degrees per second." | Reliable phrase: "smooth 180-degree orbit at eye level, constant distance." See [orbit-360](viral/orbit-360.md) and recipe [product-spin](recipes/product-spin.md). | C1, C3, C7, C17 |
| **Arc** | Semi-circular sweep around the subject | Revelations, emotional turning points, romance | — | "Camera Arcs slowly around the two detectives" · "Camera: Arc slowly around both of them, city blurring behind." | Romance recipe: Arc, Dolly In, Focus Change, Kiss. See recipe [half-turn](recipes/half-turn.md). | C1, C6, C17 |
| **Lazy Susan** | Slow turntable rotation, subject centered | Product shots, character intros, costume reveal | Kling 3.0 | "Lazy Susan around the antique watch on the table" | Luxury: a dark background with a single hard side-light | C1, C17 (template 02) |
| **Robo Arm** | Precise mechanical arc along a complex path | Choreographed scenes, product reveals | Kling 3.0 | "Robo Arm sweeps from headlights over the roof of the car" · "Camera: Robo Arm arcing slowly from the base up and around to the lid." | Tell the model the exact path ("from the base up and around to the lid"), not just "orbiting" | C1, C17 |
| **Orbit Reveal** (hook) | 180° in 3 s | 360 discovery | Seedance 2.0 | "Camera orbits 180 degrees around subject over 3s. Each 45 degrees reveals new environmental element…" | — | C8 |
| **Spiral Motion** | Orbit combined with a rise or descent | Dreamlike, complex | — | "Camera spirals upward and around subject simultaneously. Rise 15 feet, orbit 180 degrees, both over 5 seconds…" | — | C7 |
| **Camera Roll / 360 Roll** | Camera rotates on its lens axis | Disorientation, stylized | — | "Camera roll. The horizon line spins 360 degrees while focused on [img 1]…" | Director Panel name: **360 Roll** | C5, C3 |
| **3D Rotation** (preset) | Subject or object rotates in 3D space | Product, logo, artistic | — | "Camera: 3D Rotation — full 360 reveal." · "360 product spin: Use 3D Rotation preset, pure black background, 'sharp product detail, 4K, 1:1'" | Also an App and a Mixed Media preset | C16, C17 |

### A4. Zoom and focus

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **Crash Zoom In** | Rapid, sudden zoom toward the subject | Shock, realization, emphasis on a detail | Higgsfield DoP | "Crash Zoom In on the bloody handprint" · DoP template: "Crash zoom from wide establishing to extreme close-up on the protagonist eye, the moment of realization frozen in his iris… cold cyan rim light… shallow focus, 24fps, single take with consistent character ID, no morphing of background plates." · reliable: "crash zoom from wide to extreme close-up on impact" | + FPV Drone = chase climax. Avoid in lifestyle and drama. | C1, C13 (hg-004), C1 |
| **Crash Zoom Out** | Rapid, sudden zoom away | Disconnection, sudden wider context | — | "Crash Zoom Out revealing the battlefield" | — | C1 |
| **Snap Zoom** | 0.3 s hard mechanical zoom | Hook: instant focus, shock | Seedance 2.0 | "Snap zoom from wide to tight close-up in 0.3s. No easing — hard, mechanical zoom. Subject centered…" | Music video and comedy (snap zoom) | C8, C1 |
| **Zoom In / Zoom Out** | Focal-length change | Intensity / revelation | — | "Slow zoom in on [img 1]'s face. The background compresses…" | "Never write `zoom` for a physical move": name dolly, track, push-in or pull-out instead. Director Panel: Zoom In / Zoom Out. | C1, C3, C5 |
| **Rack Focus** | Refocus between a near and a far subject | Guide attention | — | "Rack focus from foreground (sharp, 2 feet away) to background (sharp, 30 feet away) over 1.5 seconds… f/1.4 cinema equivalent." | Lens Behavior Sequence: trigger → shift → state → return → repeat | C2, C7 |
| **Focus Change** | Named control: a focus shift between subjects | Drama, romance | — | "Camera: Focus Change from the rain on the window to her face." | Romance: "slight Focus Change between faces" | C6, C17 |
| **Push-In Zoom + Dolly** | Dolly forward while zooming to 85 mm | Subjective intensity | — | "Simultaneous dolly forward 5 feet AND zoom to 85mm over 3 seconds…" | — | C7 |
| **Rap Flex** | Quick zooms snapping in and out on each hit | Hip-hop / dance | Minimax Hailuo 2.3 | "Camera: Rap Flex — quick zooms snapping in and out on each hit." | Pair with the Live Concert preset | C17 |

### A5. Follow / immersive / action

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **FPV Drone** | Fast, agile, drone-like weaving | Chases, aerial action, kinetic energy | Kling 2.6, Sora 2† | "FPV Drone chasing the motorcycle through the warehouse" · reliable: "FPV camera weaving through the environment at walking pace" · image: "Fast FPV drone shot flying through a snowy canyon and swooping past [img 1]…" | Path-drawing workflow (Seedance): draw a red line on the start image (template below) | C1, C4, C5, C12 |
| **Action Run** | Low follow shot behind a running subject | Chase, escape, pursuit | Minimax Hailuo 2.3, Kling 2.6 | "Action Run — camera low behind him, matching his sprint" | + Handheld = escape sequence | C1, C4 |
| **Handheld** | Organic, shaky handheld feel | Documentary realism, intimacy, chaos | Kling 2.6, Veo 3 | "Handheld camera jostling with the crowd" · reliable: "handheld tracking following the subject, subtle shake, not chaotic" · precise: "Micro-vibrations: 0.5–1 mm frame jitter at 2 Hz frequency…" | Camera-emotion sync: rage = jittery handheld; calm = smooth breathing handheld | C1, C4, C7 |
| **Head Tracking** | Camera locked to the character's head movement | First-person intensity, disorientation | — | "Head Tracking as the boxer staggers after the punch" | — | C1 |
| **Snorricam** | Camera mounted on the actor; the background sways | Stress, drunkenness, heightened emotion | — | "Snorricam locked on her face as the room spins" | — | C1 |
| **Camera Follows** / Tracking | Tracks the subject's movement | Chase, pursuit, accompaniment | — | "Camera tracks subject from side profile… Move in sync with subject motion at 3 mph equivalent." | Director Panel name: **Camera Follows** | C3, C7 |
| **Steadicam / Gimbal Follow** | Liquid-smooth follow | Ethereal, controlled | — | "Gimbal-smooth follow shot. Camera maintains 3-foot distance from walking subject…" | — | C7, C11 |
| **Flying** | Free-floating aerial glide | — | — | (vocab entry) | — | C2 |
| **Fly-Through** | Camera moves through environment elements | Immersion, momentum | — | "Camera flies through a gap in the trees and past falling snow to land on a medium shot of [img 1]." | — | C5 |
| **Drone Shot** | Aerial movement | Landscape, scale, geography | — | Director Panel option | — | C3 |

### A6. Specialty / cinematic

| Preset | Does | Best use | Model(s) | Phrase / template | Pair / tips | Src |
|---|---|---|---|---|---|---|
| **Bullet Time** | Subject frozen or in slow motion while the camera sweeps around | Action climax, impact moments | Kling 2.6, Sora 2† | "Bullet Time around the leaping assassin" · "Camera: Bullet Time as she leaps from a loading dock onto a moving truck below." · image: "Bullet time effect. Time is frozen with snowflakes suspended in mid-air, while the camera smoothly rotates 180 degrees around [img 1]." | Motion-preset variants: Bullet Time Scene / White / Splash. CS 3.0 speed ramp "Bullet Time". Viral Hub: [bullet-time](viral/bullet-time.md). | C1, C4, C5, C16 |
| **Dutch Angle** | Camera tilted diagonally | Psychological tension, instability, dread | Wan 2.5, Kling 2.6 | "Dutch Angle as the conspirators whisper" · precise: "Frame tilted 25 degrees counterclockwise…" | Horror: "slow Dolly In… Camera: Dutch Angle as she realizes." Avoid in lifestyle and luxury. | C1, C4, C7 |
| **Dutch Snap** (hook) | 30° rotation in 0.3 s | Unease, style | Seedance 2.0 | "Camera rotates 30 degrees clockwise in 0.3s. Horizon tilts… Hold the tilted frame — don't correct it." | — | C8 |
| **Fisheye** | Wide-lens distortion, curved perspective | Surreal, skateboarding, experimental | — | "Fisheye lens capturing the skateboarder's trick" | — | C1 |
| **Whip Pan** | Fast lateral blur pan | Dynamic transitions, following rapid action | Higgsfield DoP | "Whip Pan from the thief to the officer" · DoP template: "Whip pan from left to right. A skater lands a trick on wet pavement at night. Neon signs streak in the motion blur. Cut on the landing impact." · precise: "Whip pan from subject A to subject B in 0.5 seconds. Speed: 90 degrees per second. Motion blur acceptable…" | A music-video primary move. Forbidden in luxury. See recipe [whip-pan](recipes/whip-pan.md). | C1, C13 (hg-002), C7, C10 |
| **Overhead** | Direct top-down bird's-eye view | Choreography, spatial relationships | — | "Overhead shot of the dancers forming patterns" | — | C1 |
| **Kiss** (control) | Named romance camera control | Romance / intimate | — | "Camera: [Arc / Dolly In / Kiss control]." | Listed only in the recipe template | C6 |
| **Glow Trace** | Moving subject leaves a glowing trail (a motion preset often used as camera garnish) | Dance | Minimax Hailuo 2.3 | "Apply Glow Trace preset — her movement leaves a trail of white light." | — | C16, C17 |

### A7. Time-based

| Preset | Does | Best use | Model(s) | Phrase / template | Src |
|---|---|---|---|---|---|
| **Hyperlapse** | Moving camera combined with time-lapse | City transformation, travel | Veo 3, Sora 2† | "Hyperlapse down the boulevard from dawn to dusk" | C1, C4 |
| **Timelapse Human** | Fixed camera, human activity fast-forwarded | Daily routines, urban pulse | — | "Timelapse Human — subway platform, people rushing" | C1 |
| **Timelapse Landscape** | Fixed camera, nature over time | Weather, seasons, sunrise and sunset | Veo 3 | "Timelapse Landscape — mountain valley sunrise to dusk" · "Camera: Timelapse Landscape as the storm front advances, sky darkening fast." | C1, C4, C17 |
| **Low Shutter** | Slow shutter, motion blur on fast movement | Speed, urgency, intoxication | — | "Low Shutter on the spinning dancer — silhouette blurs" | C1 |

### A8. Through-object

| Preset | Does | Best use | Phrase | Src |
|---|---|---|---|---|
| **Through Object In** | Camera passes through a narrow object into a new space | Reveal secrets, creative transition | "Camera glides Through Object In — through the keyhole into the dusty study" | C1 |
| **Through Object Out** | Camera exits through a narrow space, revealing the exterior | Confined-to-open transition | "Through Object Out — pulls back through the cabin window into the blizzard" | C1 |
| **Mouth In** | Camera zooms into a character's open mouth | Surreal transitions, entering a memory or dream | "Mouth In transition — camera enters the storyteller's mouth into the fantasy world" | C1 |
| (related) **Eyes in** | Viral Hub chain: the camera dives into the pupil into a new scene | — | See [eyes-in](viral/eyes-in.md) | INDEX |

### A9. Vehicle / action

| Preset | Does | Best use | Phrase | Src |
|---|---|---|---|---|
| **Car Chasing** | Low, ground-level follow of speeding vehicles | High-speed pursuits | "Car Chasing — camera hugs the side of the black car through the streets" | C1 |
| **Car Grip** | Camera mounted on the vehicle, riding with it | Immersive vehicle sequences | "Car Grip — fixed to the hood, shaking on every bump" | C1 |
| **Buckle Up** | Jarring, turbulent shaking camera | Rough rides, turbulence, loss of control | "Buckle Up as the car skids around the corner" | C1 |

---

## Table B — Angle and shot-size presets (named, recognized by name)

| Angle preset | Does | Best for | Prompt phrase | Src |
|---|---|---|---|---|
| Low Angle | Looks up at the subject | Power, heroism | "Low angle looking up at the general on horseback" | C1 |
| High Angle | Looks down | Vulnerability | "High angle looking down at the child in the empty hall" | C1 |
| Eye Level | Neutral | Dialogue, documentary | "Eye level, two characters facing each other" | C1 |
| Bird's-Eye View | Directly overhead | Maps, choreography | "Bird's-eye view of the marketplace from above" | C1 |
| Worm's-Eye View | Extreme low, looking straight up | Towering scale | "Worm's-eye view looking up through the forest canopy" | C1 |
| Ground Level | Camera resting on the ground | Terrain, small subjects | "Ground level — ants marching across cracked earth" | C1 |
| Canted Angle Left / Right | Tilted horizon (Dutch tilt) | Unease | "Canted angle right — the interrogation room feels wrong" | C1 |
| Static Oblique | Off-axis angled framing | Stylized unease | "Static oblique angle on the staircase" | C1 |
| Over-the-Shoulder (OTS) | Behind one subject, facing the other | Shot-reverse-shot | "OTS from behind the detective, facing the suspect" | C1 |
| POV / First Person | The camera is the character's eyes | Immersion, horror | "POV — hands push open the heavy wooden door" | C1 |
| Two-Shot | Two subjects framed together | Relationship | "Two-shot of the couple walking along the pier" | C1 |
| Cowboy Shot | Framed from mid-thigh up | Western swagger | "Cowboy shot — hands hovering near the holster" | C1 |
| Selfie Angle | Arm's-length front camera | UGC | (image-shots entry) | C5 |

Shot sizes (C1, C2, C11): Extreme Long Shot (ELS) / Extreme Wide (EWS) · Long / Wide Shot (LS/WS) · Medium Long / Cowboy (MLS) · Medium Wide (MWS) · Medium (MS) · Medium Close-Up (MCU) · Close-Up (CU) · Extreme Close-Up (ECU) · Insert Shot · Macro Shot.

---

## Table C — Cinema Studio Director Panel (2.5 / 3.0): 18 movements plus Auto

"Use ONLY these exact movement names in Cinema Studio output." Map general names to the closest option: Crane Down → **Jib Down**, Crane Up → **Jib Up** (C3).

| Movement | Description | Best for |
|---|---|---|
| Static | Locked off, no movement | Dialogue, tension, composition |
| Handheld | Organic shake, documentary feel | Urgency, realism, action |
| Zoom Out | Focal length pulls back | Revelation, isolation |
| Zoom In | Focal length pushes in | Intensity, focus on subject |
| Camera Follows | Tracks subject movement | Chase, pursuit |
| Pan Left | Horizontal sweep left | Reveal, environment scan |
| Pan Right | Horizontal sweep right | Reveal, environment scan |
| Tilt Up | Vertical sweep up | Scale, aspiration |
| Tilt Down | Vertical sweep down | Weight, consequence |
| Orbit Around | 360° around the subject | Isolation, drama |
| Dolly In | Physical push toward the subject | Emotional intimacy |
| Dolly Out | Physical pull away from the subject | Distance, context reveal |
| Jib Up | Camera rises on an arm | Scale, god's eye |
| Jib Down | Camera descends on an arm | Grounding, arrival |
| Drone Shot | Aerial movement | Landscape, geography |
| Dolly Left | Lateral push left | Parallel tracking |
| Dolly Right | Lateral push right | Parallel tracking |
| 360 Roll | Camera rolls on its axis | Disorientation, stylized |
| Auto | Model selects the best movement | When unsure |

CS 3.0 **Smart** shot control: the model auto-plans camera language from genre and scene. Describe feeling and genre rather than moves (C1, C3).

## Table D — Cinema Studio 3.5 Camera Moveset Style (9), with CLI slugs

`higgsfield generate create cinematic_studio_video_3_5 --camera_style <slug>` (C14). The inline style axes `camera_style`, `light_scheme` and `color_grading` are mutually exclusive with `style_prompt`, which is Manual Style.

| UI name | CLI slug | Use when (C3) |
|---|---|---|
| Classic Static | `classic_static` | Locked off, no movement: dialogue, composition, tension |
| Silent Machine | `silent_machine` | Smooth motorized motion: corporate, surveillance, controlled cinematic |
| One Take | `one_take` | A single continuous take: long developing reveal |
| Epic Scale | `epic_scale` | Wide sweeping moves: landscape, spectacle |
| Intimate Observer | `intimate_observer` | Quiet, restrained handheld: drama, conversation |
| Impossible Camera | `impossible_camera` | Paths no real rig could take: through walls, around objects |
| Documentary Snap | `documentary_snap` | Reactive handheld: news or documentary feel |
| Raw Chaos | `raw_chaos` | Unsteady, kinetic: action, riot, sensory overload |
| Dreamy Flow | `dreamy_flow` | Floating, slowed, dreamlike: memory, surreal, romance |

## Table E — Speed ramps

| Surface | Modes | Src |
|---|---|---|
| Cinema Studio 2.5 UI (6) | Linear · Slow Mo · Speed Up · Impact (fast, then a sudden slow at the key moment) · Auto · Custom (draw a curve: drag a node up to slow, down to speed up) | C3 |
| Cinema Studio 3.0 UI (7) | Auto · Slow-mo · Ramp Up · Flash In (fast start easing to normal) · Flash Out (normal, then a snap acceleration) · Bullet Time (ultra-slow at the key moment) · Hero Moment (slow build → pause → release) | C3 |
| CLI `cinematic_studio_video_v2 --speedramp` | `auto`, `custom`, `linear`, `slowmo`, `speedup`, `impact` | C14, C18 |
| CLI `cinematic_studio_3_0 --speedramp` | `auto`, `linear`, `slowmo`, `speedup`, `fast_to_slowmo`, `slowmo_to_fast`, `super_slowmo`, `impact` | C14 |
| CLI `cinematic_studio_video --slow_motion` | boolean | C14 |

Never output a 2.5 ramp name in 3.0 output, or the reverse (C3).

---

## Table F — Precision-phrased moves (higgsfield-skills, 22 moves)

Source C7 ("Camera Movement Encyclopedia") gives distance, speed and time for each move. Use these when the model oversells or undersells a move.

| Move | Duration | Exact prompt phrasing (verbatim) |
|---|---|---|
| Dolly Forward | 1–3 s | "Camera dolly forward at constant 2 feet/second. Maintain subject center-frame. Slight lens breathing (2–3 pixel aperture fluctuation). No focus shift. Sharp maintenance throughout movement." |
| Dolly Backward / Push Out | 1–4 s | "Camera pulls back 15 feet at 3 feet/second. Maintain subject in frame-center. Background gradually reveals. No focus breathing. Speed creates anticipatory tension." |
| Truck Left / Right | 2–4 s | "Camera trucks left 10 feet at 2 feet/second. Subject remains frame-right. Reveals background-left environment gradually. Parallax effect: background moves slower than foreground." |
| Pan Left / Right | 0.5–2 s | "Camera pan left across scene at 30 degrees per second. Smooth acceleration and deceleration at start and end. No jerkiness. Sweeps across 60° total field. Ends on secondary subject." |
| Tilt Up / Down | 1–3 s | "Camera tilts upward from feet to face at 20 degrees per second. Reveals vertical scale. Slightly faster at start (30°/s), decelerates at end (10°/s) for smooth stop. Builds toward sky/scale." |
| Whip Pan | 0.3–0.6 s | "Whip pan from subject A to subject B in 0.5 seconds. Speed: 90 degrees per second. Motion blur acceptable. No pause between subjects. Creates seamless energetic transition without hard cut." |
| Handheld / Operator Shake | 2–6 s | "Handheld camera following subject. Micro-vibrations: 0.5–1 mm frame jitter at 2 Hz frequency. Breathing motion: subtle frame size expansion/contraction 1–2 pixels per second. NOT locked-off." |
| Steadicam / Gimbal Follow | 3–8 s | "Gimbal-smooth follow shot. Camera maintains 3-foot distance from walking subject. Stabilization removes all micro-vibrations. Motion is liquid-smooth. Breathing micro-motion optional (subtle). Feels ethereal, controlled." |
| Tracking Shot / Side Follow | 3–6 s | "Camera tracks subject from 4-foot side distance. Subject remains frame-right, environment at frame-left. Move in sync with subject's speed (assume 2 mph walk). Parallax reveals background detail progressively." |
| Crane Up / Vertical Rise | 3–6 s | "Camera rises vertically 30 feet over 4 seconds. Subject remains visible in lower frame. Landscape/cityscape reveals as crane rises. Tilt down slightly to maintain subject connection throughout rise." |
| Crane Down / Vertical Descent | 2–4 s | "Camera descends 20 feet over 3 seconds. Start wide-overhead, end at eye level with subject. Slow tilt up during descent to maintain subject visibility. Creates transition from god-view to human perspective." |
| 360 Orbit / Orbital Spin | 4–8 s | "Camera orbits 270 degrees counterclockwise around subject over 5 seconds. Maintain constant 8-foot distance. Subject always frame-center. Reveals background environment progressively. Speed: 54 degrees per second." |
| Spiral Motion | 4–8 s | "Camera spirals upward and around subject simultaneously. Rise 15 feet, orbit 180 degrees, both over 5 seconds. Subject maintains frame-center. Dizzying yet hypnotic. Speed: 2.5 ft/vertical per second + 36°/horizontal per second." |
| Rack Focus / Focus Breathing | 0.5–2 s | "Rack focus from sharp foreground (2 feet away) to sharp background (25 feet away) over 1.5 seconds. Midfield blurs during transition. Maintains continuous sharpness on primary subjects. Aperture breathing: subtle highlight changes during transition." |
| Zoom (use sparingly) | 1–3 s | "Zoom from 35mm equivalent to 85mm equivalent over 2 seconds. Smooth zoom acceleration. Subject grows in frame. Depth of field decreases (appears shallower) as zoom increases. Feels false, use sparingly." |
| Dutch Angle / Tilted Horizon | 3–8 s | "Frame tilted 20 degrees counterclockwise. Horizon line diagonal across frame bottom-left to top-right. Maintain this tilt throughout clip duration. Conveys psychological imbalance, danger, or dreamlike state. Creates tension without explicit threat." |
| Push-In Zoom + Dolly | 2–4 s | "Simultaneous dolly forward 5 feet AND zoom to 85mm over 3 seconds. Creates intense focus compression. Eliminates depth cues. Subject feels isolated, magnified. Creates subjective intensity and psychological pressure." |
| Parallax Pan / Depth Layer Pan | 2–4 s | "Pan camera left 20 degrees over 3 seconds. Foreground moves fast (full pan amount), midground moves medium (65% of pan), background moves slow (35% of pan). Creates depth layering without camera moving laterally." |
| Push-In + Reveal | 2–4 s | "Dolly forward 10 feet at 3 feet/second. Foreground object gradually obscures background subject. Reverse: foreground object gradually reveals hidden background subject. Reveals narrative information through positional change." |
| Whip Transition / Match Cut Movement | 0.4–0.7 s | "Whip pan/blur transition from Scene A to Scene B. Motion blur obscures cut point. Subject A exits left with blur, Subject B enters right simultaneously. Invisible seam created through motion. Energy maintained across scenes." |
| Lock-Off Static / Locked Tripod | 2–6 s | "Camera locked in fixed position. Zero movement. Subject moves through frame. Camera observes without participation. Depth of field: f/2.8 for moderate separation. Feels objective, observational. Quiet psychological power." |
| Reverse Parallax / Negative Parallax | 3–5 s | "Camera pans right 30 degrees. Foreground moves slow (20% of pan amount), background moves fast (100% of pan amount). Impossible spatial illusion creates dreamlike or unsettling effect. Reverses normal spatial logic." |

## Table G — Genre and use-case camera presets

**Cinema Studio 3.0 genre-based camera presets** (C1):

| Genre | Primary camera | Secondary | Avoid |
|---|---|---|---|
| Product / E-commerce | Orbit, slow push-in, static | Crane down reveal | Handheld, whip pan |
| Lifestyle / Social | Handheld, static, slow pan | Dolly alongside | Dutch angle, crash zoom |
| Drama / Narrative | Slow push-in, dolly pull-out, tracking | Crane up | Fast moves, snap zoom |
| Music Video | Whip pan, snap zoom, fast tracking | 360 orbit | Static (too boring) |
| Horror | Slow creep (dolly in), static hold, Dutch angle | Crane down | Fast tracking (breaks tension) |
| Action / Chase | FPV drone, tracking, handheld run | Crash zoom | Static, slow orbit |
| Landscape / Travel | Crane up, slow pan, drone flyover | Dolly out reveal | Handheld, tight shots |
| Comedy / Social | Static (deadpan), snap zoom | Whip pan | Slow dramatic moves |

**Genre recipe camera sets** (C6): Action/Chase: Action Run, FPV Drone, Crash Zoom In, Bullet Time · Emotional Drama: Dolly In, Arc, Head Tracking, Focus Change · Romance: Arc, Dolly In, Focus Change, Kiss · Product: Lazy Susan / Robo Arm · Sci-Fi: crane up / FPV / orbit · Horror: slow Dolly In + Dutch Angle · Documentary: slow pan, timelapse, crane · Dance/MV: orbit, dolly, overhead.

**Luxury: approved vs forbidden** (C10). Approved: Slow Push-In ("extremely slow push-in", "barely perceptible dolly toward subject"), Gentle Orbit/Arc ("slow lateral arc… 10-degree arc"), Static Composition ("locked-off camera, static composition"), Slow Tilt (max 15° in 5 s), Subtle Rack Focus. Forbidden: handheld, fast pans or whip pans, fast zoom-in, Dutch angle, multiple movement types in one prompt, fast drone descent.

**Faceless-channel moves** (C9): Slow push-in (8–10 s), Pull-back reveal, Crash zoom (to punctuate a stat), Slow orbit (360°, 10–15 s), Partial orbit (45–90°), Tilt orbit, Horizontal drift, Vertical drift up / down, Layer parallax, Focus pull, plus three signature moves: **the slide-and-reveal** (replaces a cut), **the breathe** ("0.5% drift + subtle zoom" on a still), **the linger** (arrive, then hold 2 s).

## Reliable phrasing library (C1, Cinema Studio 3.0)

| Intent | Reliable phrase |
|---|---|
| No camera motion | `locked-off static camera, no movement` |
| Slow approach | `slow dolly push from medium shot to tight close-up over 8 seconds` |
| Follow subject | `handheld tracking following the subject, subtle shake, not chaotic` |
| Reveal scale | `crane shot rising from ground level to overhead` |
| Circle subject | `smooth 180-degree orbit at eye level, constant distance` |
| Dramatic zoom | `crash zoom from wide to extreme close-up on impact` |
| POV movement | `FPV camera weaving through the environment at walking pace` |

**Camera contracts** (C2): `Static locked-off camera. Zero movement. No pan, no zoom, no dolly, no shake.` · `Slow push-in only — 10% scale change over the full duration.` · `Single handheld drift, slight organic sway, no cuts.` Pair each contract with negative-prompt reinforcement that names the excluded moves.

**Camera transfer via @Video** (C1): `Match the camera movement from @Video1. A dancer performs on a rooftop at sunset.` Dual reference: `Reference @Video1 for the character's movement and choreography. Reference @Video2 for camera movement only.`

## Combination rules (C1, C3)

- **Simultaneous combos that work:** Dolly In + Dutch Angle (villain reveal) · Crane Up + 360 Orbit (final battle) · FPV Drone + Crash Zoom In (chase climax) · Handheld + Action Run (escape).
- **Avoid** Dolly In + Dolly Out, or Crane Up + Crane Down, in the same shot.
- **Sequenced:** `Camera pans left from 0-3s tracking the character, holds, then pushes in on the face from 4-8s`.
- **One-Move Rule** (CS 3.0): one primary move per shot. "Wrong: dolly push forward while panning left and tilting up." Use multi-shot mode for more than one move.
- **Static pan vs glide:** `the camera stays in position and pans to follow him` is a different instruction from `the camera glides alongside him as he walks`.
- **Micro-moves:** state total travel and time. Check that the move can actually produce the stated end framing.

## Camera-emotion sync (C1)

| Focal emotion | Camera prescription |
|---|---|
| Anger / rage / tension | Jittery, unstable breathing handheld; small amplitude, irregular rhythm; no stabilizer |
| Calm / control | Smooth breathing handheld, regular micro-amplitude |
| Sadness / vulnerability | Slow, low handheld with a slight downward drift |
| Shock / revelation | Static plus a very slow push-in or pull-out; freeze at the reveal |
| Action | 60 fps, 180° shutter |
| Final beat / verdict | Top-shot freeze, 0.3–0.5 s |
| Breakdown / needs space | Slow pull-back from medium/close to wide ("leave the character alone") |

## Model × camera compatibility (C4)

| Camera control | Best model |
|---|---|
| Dolly In (emotional close-up) | Kling 2.6 / 3.0 |
| FPV Drone (kinetic chase) | Kling 2.6, Sora 2† |
| 360 Orbit (character isolation) | Kling 2.6 / 3.0 |
| Crane Up (epic reveal) | Sora 2† |
| Timelapse Landscape | Veo 3 |
| Hyperlapse | Veo 3, Sora 2† |
| Handheld (documentary feel) | Kling 2.6, Veo 3 |
| Action Run (physical chase) | Minimax Hailuo 2.3, Kling 2.6 |
| Super Dolly Out (scale reveal) | Sora 2† |
| Dutch Angle (horror/tension) | Wan 2.5, Kling 2.6 |
| Long camera motion path / motion transfer | Kling 3.0 Motion Control |

DoP tiers (C4): Higgsfield Lite / Standard / Turbo, all 720p at 3–5 s. The API model names are `dop-lite`, `dop-turbo` and `dop-preview` (C15). Multi-Frame Guidance: a start image plus a "last frame" reference.

## FPV path-drawing template (Seedance, C12; author @MrLarus, CC-BY attribution required)

Draw a thick (8–15 px) red line with a closing arrow on the start image. Then prompt (Chinese original, verbatim):

```
请擦除红线、箭头和所有辅助标记。红线和箭头仅作为镜头运动路径参考,
最终成片中不得出现。镜头以第一人称 FPV 视角呈现,超高速、电影级、
一镜到底,严格沿着图片中的红色路径运动,不要偏离、不要跳步、不要
简化路线。镜头从【起点】开始,经过【节点1】,随后【节点2】,再到
【节点3】,最后到达【终点主体】并完成【收尾动作】。画面要求超写实、
运动顺滑稳定、速度感强、空间连续清晰,不要重复建筑、不要变形、
不要文字、不要水印。
```

English rendering: *"Erase the red line, arrow and all guide marks; they are only a camera-path reference and must not appear in the final video. First-person FPV, ultra-fast, cinematic, one continuous take, strictly following the red path in the image. Do not deviate, skip or simplify the route. Start at [START], pass [NODE 1], then [NODE 2], then [NODE 3], and arrive at [END SUBJECT], finishing with [ENDING MOVE]. Hyper-real, smooth and stable motion, strong sense of speed, clear spatial continuity. No repeated buildings, no deformation, no text, no watermark."* Match line length to duration (short line: 5–8 s; long line: 15 s). Split routes with more than 5 turns.

## Implied camera movement for stills (C5)

Static · Pan · Tilt · Zoom In · Zoom Out · Pedestal Up/Down · Dolly In · Dolly Out · Truck Left/Right · Orbit · Crane · Dolly Zoom · Crash Zoom · FPV Drone · Bullet Time · Handheld Follow · Camera Roll · Rack Focus · Pull Back Reveal · Fly-Through. Each uses the template `"<Move> … [img 1] …"`; see Table A for the verbatim phrasings.

## Related existing preset files

- Viral Hub camera-heavy chains: [bullet-time](viral/bullet-time.md), [orbit-360](viral/orbit-360.md), [orbital-presence](viral/orbital-presence.md), [earth-zoom](viral/earth-zoom.md), [eyes-in](viral/eyes-in.md), [wild-ride](viral/wild-ride.md), [high-flip](viral/high-flip.md), [incline](viral/incline.md), [selfception](viral/selfception.md)
- Bundled camera recipes: [push-in](recipes/push-in.md), [pull-back](recipes/pull-back.md), [whip-pan](recipes/whip-pan.md), [crane-reveal](recipes/crane-reveal.md), [product-spin](recipes/product-spin.md), [half-turn](recipes/half-turn.md), [floating-roll](recipes/floating-roll.md), [macro-glide](recipes/macro-glide.md), [topdown-dive](recipes/topdown-dive.md), [label-trace](recipes/label-trace.md), [texture-track](recipes/texture-track.md), [detail-scan](recipes/detail-scan.md)

## Gaps

- The full DoP motion catalog (50+ names with UUIDs from `GET /v1/motions`) is **not** in any cloned repo. Only the category names and two example UUIDs (`31177282-bde3-4870-b283-1135ca0a201a` motion, `1cb4b936-77bf-4f9a-9039-f3d349a4cdbe` Soul style) appear, in C15's docstrings. Their preset names are unknown.
- None of the repos documents these DoP UI presets by name: Arc Left/Right, Hero Cam, Yoyo Zoom, Double Dolly, Dirty Lens, Glam, Wiggle.
