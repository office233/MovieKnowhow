# Cinema Studio presets: camera bodies, lenses, focal lengths, genres, looks

This file covers every Cinema Studio (CS) option found in the cloned open-source repos: 2.5, 3.0, 3.5, image mode, Soul Cast, the CLI enums, and how to call each option from the UI, the CLI and the MCP. Camera **movements** (the Director Panel) are listed in [camera-motion.md](camera-motion.md) Tables C, D and E.

**Counts:** 6 CS 2.5 camera bodies · 10 CS 2.5 lenses · 4 CS 2.5 focal lengths · 3 apertures · 3 CS 3.5 bodies · 5 CS 3.5 lenses · 5 CS 3.5 focal lengths · 8 + 7 + 7 genres · 8 color palettes · 6 lighting schemes · 9 camera moveset styles · 5 recommended stacks · 21 intent-based optical stacks · 8 color-grade controls · 4 per-character emotions · 4 image-mode Cinematic models · 14 + 12 + 7 Soul Cast parameter values · 5 platform styles · 10 + 10 color-grade looks · 5 film stocks.

## Source legend

| Code | Repo · path | URL |
|---|---|---|
| **S1** | higgsfield-ai-prompt-skill · `skills/higgsfield-cinema/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-cinema/SKILL.md |
| **S2** | cli · `MODELS.md` | https://github.com/higgsfield-ai/cli/blob/dc7e2d2/MODELS.md |
| **S3** | higgsfield-ai-prompt-skill · `specs/models_explore_snapshot_2026-08-07.json` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/specs/models_explore_snapshot_2026-08-07.json |
| **S4** | higgsfield-ai-prompt-skill · `skills/higgsfield-soul/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-soul/SKILL.md |
| **S5** | higgsfield-ai-prompt-skill · `vocab.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/vocab.md |
| **S6** | higgsfield-ai-prompt-skill · `skills/higgsfield-style/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-style/SKILL.md |
| **S7** | seedance-shotlist-director-en · `references/asset-prompts.md` | https://github.com/afloy011-spec/seedance-shotlist-director-en/blob/74e6f5e/references/asset-prompts.md |
| **S8** | higgsfield-ai-prompt-skill · `skills/higgsfield-camera/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-camera/SKILL.md |
| **S9** | higgsfield-skills · `skills/01-cinematic/references/camera.md` | https://github.com/pixelab-ch/higgsfield-skills/blob/2f6aa10/skills/01-cinematic/references/camera.md |
| **S10** | ai-film-pipeline · `docs/higgsfield-ui-guide.md` | https://github.com/Gregory-Esman/ai-film-pipeline/blob/560cfc1/docs/higgsfield-ui-guide.md |

---

## 1. Versions at a glance (S1, S2, S3)

| | CS 2.5 | CS 3.0 (Business/Team plans) | CS 3.5 |
|---|---|---|---|
| API / CLI model id | `cinematic_studio_video_v2` (video, genre enum 2.5) · `cinematic_studio_2_5` (image) | `cinematic_studio_3_0` | `cinematic_studio_video_3_5` |
| Camera control | Director Panel (18) | Director Panel + Smart | Camera Settings (4 axes) + Camera Moveset Style |
| Optical physics (body/lens) | **Yes** (6 bodies / 10 lenses) | No | Yes (3 bodies / 5 lenses, *new vocabulary*) |
| Color grading | Built-in suite (8 controls) | No | Color Palette axis (8 presets) |
| Genres | 8 | 7 | 7 confirmed (the picker scrolls, so more may exist) |
| Speed ramp | 6 | 7 | not separately documented; CLI 3.0 enum has 8 |
| Max duration | 12 s total across up to 6 scenes (CLI v2: 3–12 s) | 15 s (CLI: 4–15) | 4–15 s |
| Resolution | up to 1080p video, 4K image | 720p (CLI adds 1080p and 4k) | 480p / 720p / 1080p |
| Aspect ratios | 6 (CLI v2: 1:1, 4:3, 3:4, 16:9, 9:16) | 7 incl. 21:9 | Auto, 16:9, 9:16, 4:3, 3:4, 1:1, 21:9 |
| Prompt cap | 512 chars (each @ Element chip uses about 80–100 hidden chars; max 2 chips) | 512 chars (keep visible text around 350–400 with @ refs) | 512; Manual Style block ≤ 2,000 chars |
| @ references | Elements: @Character / @Location / @Prop | ≤ 9 images, ≤ 3 videos (combined ≤ 15 s), ≤ 3 audio (combined ≤ 15 s), ≤ 12 files total | extends 3.0; CLI allows ≤ 15 media |
| Other | 3D Mode (Gaussian splat), Grid (16 variations), Popcorn storyboard, Soul Cast | native stereo audio, 48 credits/gen | AI Director toggle, Batch Size, Sound On/Off |

Always ask which version first. Never mix values between versions (S1).

---

## 2. Camera bodies

### CS 2.5 (also Image mode, the **Cinematic Cameras** model) (S1)

| Body | Character | Best for |
|---|---|---|
| Premium Large Format Digital | Ultra-sharp, clinical, modern | Commercial, fashion, product |
| Classic 16mm Film | Grain, texture, organic warmth | Drama, indie, period, horror |
| Modular 8K Digital | High dynamic range, clean | Nature, documentary, landscape, architecture |
| Full-Frame Cine Digital | Cinematic standard, versatile | Narrative, character, romance, drama |
| Studio Digital S35 | Super 35, industry standard | Action, thriller, genre, suspense |
| Grand Format 70mm Film | Epic scale, rich grain | Spectacle, prestige cinema, blockbuster |

### CS 3.5 Camera Settings (S1)

| Body | Use when |
|---|---|
| Clean Digital | Sharp and neutral, no character: corporate, commercial, clinical sci-fi |
| Fine Film | Film texture without heavy grain: narrative drama, prestige |
| Raw 16mm | Heavy grain, organic, lo-fi: period grit, indie, horror, documentary |

## 3. Lenses

### CS 2.5 (10) (S1)

| Lens | Effect | Best for |
|---|---|---|
| Creative Tilt Lens | Selective focus plane, miniature effect | Surreal, abstract, stylized |
| Compact Anamorphic | Oval bokeh, subtle flare | Cinematic standard, action, thriller |
| Halation Diffusion | Glow around highlights, dreamy | Romance, memory, soft drama, horror atmosphere |
| Extreme Macro | Hyper close-up detail | Product texture, food, insects |
| 70s Cinema Prime | Warm, slightly soft vintage character | Period, nostalgia, retro |
| Warm Cinema Prime | Golden warmth, skin-flattering | Portraits, drama, lifestyle |
| Swirl Bokeh Portrait | Swirling background blur | Artistic portrait, fashion editorial |
| Vintage Prime | Classic rendering, subtle distortion | Retro, lo-fi, character, horror |
| Classic Anamorphic | Strong flare, wide horizontal bokeh | Prestige, blockbuster, fashion |
| Clinical Sharp Prime | No aberration, maximum resolution | Commercial, technical, product, documentary |

### CS 3.5 (5) (S1)

| Lens | Use when |
|---|---|
| Vintage Haze | Soft vintage character with a subtle glow: nostalgia, memory, romance |
| Warm Halation | Warm highlight glow: golden hour, dreamy interiors |
| Anamorphic | Oval bokeh and horizontal flare: blockbuster, prestige |
| Extreme Macro | Texture detail: food, product, insects |
| Clinical Sharp | Maximum resolution: commercial, surveillance, product |

## 4. Focal lengths and apertures (S1, S8)

| Focal | CS 2.5 | CS 3.5 | Use |
|---|---|---|---|
| 8mm | ✓ | ✓ | Ultra-wide, immersive distortion; action POV, disorientation |
| 14mm | ✓ | ✓ | Wide, environmental; establishing, landscape, architecture |
| 35mm | ✓ | ✓ | Natural human field of view; documentary, street, two-shots |
| 50mm | ✓ | ✓ | Portrait compression; close-ups, product |
| 75mm | — | ✓ (new) | Tight portrait compression; reaction, emotional climax |

Apertures (both versions): **f/1.4** (shallow, creamy bokeh) · **f/4** (balanced, most versatile) · **f/11** (deep focus; product, landscape, architecture).

**Lens and aperture by shot purpose** (official Higgsfield shotlist-builder, S8): tight emotional CU → 85 or 100mm, F1.4 · dialogue two-shot → 50mm, F2.0–2.8 · wide/establishing → 35mm, F4–5.6 · insert → 50/85mm, F1.4 · macro → 45mm macro, F2.8. Standing clauses: *"focus plane locked on [object] from first frame to last — no focus drift, no rack focus, no autofocus hunting."* · *"straight rectilinear lines, no barrel or pincushion distortion, no fisheye, no wide-angle warp."*

## 5. Optical stacks by intent: CS 2.5 / Cinematic Cameras (21 recipes) (S1)

| Intent | Feel | Body | Lens | Focal | f/ |
|---|---|---|---|---|---|
| Portrait | Warm, intimate, skin-flattering | Full-Frame Cine Digital | Warm Cinema Prime | 50mm | 1.4 |
| Portrait | Artistic / swirling bokeh | Full-Frame Cine Digital | Swirl Bokeh Portrait | 50mm | 1.4 |
| Portrait | Prestige / awards-film | Grand Format 70mm Film | Classic Anamorphic | 50mm | 1.4 |
| Portrait | Fashion / editorial sharp | Premium Large Format Digital | Clinical Sharp Prime | 50mm | 4 |
| Portrait | Nostalgic / vintage | Classic 16mm Film | 70s Cinema Prime | 50mm | 1.4 |
| Scene | Cinematic wide establishing | Studio Digital S35 | Compact Anamorphic | 14mm | 4 |
| Scene | Epic / spectacle | Grand Format 70mm Film | Classic Anamorphic | 14mm | 4 |
| Scene | Documentary / real | Modular 8K Digital | Clinical Sharp Prime | 35mm | 4 |
| Scene | Moody / atmospheric | Classic 16mm Film | Halation Diffusion | 35mm | 4 |
| Scene | Nature / landscape | Modular 8K Digital | Clinical Sharp Prime | 14mm | 11 |
| Emotion | Romance / dreamlike | Full-Frame Cine Digital | Halation Diffusion | 50mm | 1.4 |
| Emotion | Tension / suspense | Studio Digital S35 | Compact Anamorphic | 35mm | 4 |
| Emotion | Dread / horror | Classic 16mm Film | Vintage Prime | 35mm | 4 |
| Emotion | Energy / action | Studio Digital S35 | Compact Anamorphic | 35mm | 4 |
| Emotion | Melancholy / memory | Classic 16mm Film | Halation Diffusion | 50mm | 1.4 |
| Emotion | Surreal / abstract | Full-Frame Cine Digital | Creative Tilt Lens | 14mm | 1.4 |
| Commercial | Product / packshot | Premium Large Format Digital | Clinical Sharp Prime | 50mm | 11 |
| Commercial | Product with lifestyle feel | Full-Frame Cine Digital | Warm Cinema Prime | 50mm | 4 |
| Commercial | Food / texture detail | Premium Large Format Digital | Extreme Macro | 50mm | 4 |
| Commercial | Architecture / interior | Modular 8K Digital | Clinical Sharp Prime | 14mm | 11 |
| Commercial | Fashion editorial | Premium Large Format Digital | Classic Anamorphic | 50mm | 1.4 |

**CS 3.5 five recommended stacks** (not built-in UI presets; S1):

| Stack | Body | Lens | Focal | f/ | Pair with (Style axes) |
|---|---|---|---|---|---|
| Intimate Drama | Fine Film | Warm Halation | 50mm | 1.4 | Naturalistic Clean + Soft Cross + Intimate Observer |
| Gritty Realism | Raw 16mm | Vintage Haze | 35mm | 4 | — |
| Cold Thriller | Clean Digital | Clinical Sharp | 50mm | 4 | — |
| Epic Landscape | Fine Film | Anamorphic | 14mm | 11 | — |
| Impact Close-up | Fine Film | Anamorphic | 75mm | 1.4 | — |

**Delivery rule** (S1): camera body, lens, focal, aperture, genre, movement and speed ramp are **UI settings**. They never go in the prompt text. Output two blocks: `UI SETTINGS` and `PROMPT`. Vocabulary follows the selected model: write "Clean Digital" only for 3.5, and "Studio Digital S35" only for 2.5 or Cinematic Cameras.

---

## 6. Genres

| Version | Genres | CLI / API enum | Src |
|---|---|---|---|
| CS 2.5 | General · Action · Horror · Comedy · Western · Suspense · Intimate · Spectacle | `cinematic_studio_video_v2 --genre auto\|action\|horror\|comedy\|western\|suspense\|intimate\|spectacle` | S1, S2, S3 |
| CS 3.0 | General · Action · Horror · Comedy · Noir · Drama · Epic | `cinematic_studio_3_0 --genre auto\|action\|horror\|comedy\|noir\|drama\|epic` | S1, S2, S3 |
| CS 3.5 | General · Action · Horror · Comedy · Noir · Drama · Epic (plus unconfirmed scroll entries) | `cinematic_studio_video_3_5 --genre` (same 3.0 enum) | S1, S2 |
| Soul Cast (2.5) | Action, Adventure, Comedy, Drama, Thriller, Horror, Detective, Romance, Sci-Fi, Fantasy, War, Western, Historical, Sitcom (14) | — | S1 |

CS 2.5 genre defaults (S1):

| Genre | Lighting default | Color tendency | Motion style |
|---|---|---|---|
| General | Neutral | Balanced | Varies |
| Action | Hard, high contrast | Desaturated, cool | Dynamic |
| Horror | Low key, harsh shadows | Desaturated, teal/green tint | Slow or sudden |
| Comedy | Bright, even | Warm, saturated | Light, energetic |
| Western | Golden hour / dusty | Warm amber | Steady, wide |
| Suspense | Low key, motivated | Cold, muted | Slow build |
| Intimate | Soft, warm | Warm, skin-flattering | Gentle |
| Spectacle | Dramatic, high contrast | Bold, saturated | Epic, sweeping |

## 7. Style Settings (CS 3.5): color, lighting, moveset (S1, S2)

Call via the UI Style pill (the label reads e.g. "Style: One Take, Practicals, Sodium Decay") or the CLI flags `--color_grading`, `--light_scheme` and `--camera_style`. These three are mutually exclusive with `--style_prompt` (Manual Style).

**Color Palette (8)**

| UI name | CLI `--color_grading` | Use when |
|---|---|---|
| Naturalistic Clean | `naturalistic_clean` | Realistic, neutral: dialogue, documentary, brand work that must read as captured |
| Bleached Warm | `bleached_warm` | Sun-faded warmth: beach, exterior day, nostalgic memory |
| Hyper Neon | `hyper_neon` | Saturated neon: cyberpunk, club, music video |
| Teal Orange Epic | `teal_orange_epic` | Blockbuster grade: action, thriller |
| Sodium Decay | `sodium_decay` | Sodium-lamp orange plus decay: urban night, post-apocalyptic, gritty crime |
| Cold Steel | `cold_steel` | Desaturated cool: corporate, surveillance, clinical sci-fi |
| Bleach Bypass | `bleach_bypass` | High contrast, reduced saturation: war film, harsh drama |
| Classic B&W | `classic_bw` | Black and white: noir, archival |

**Lighting (6)**

| UI name | CLI `--light_scheme` | Use when |
|---|---|---|
| Soft Cross | `soft_cross` | Soft cross-key plus fill: flattering portraiture, conversation |
| Contre Jour | `contre_jour` | Strong backlight: silhouette, golden-hour reveal, entrance |
| Overhead Fall | `overhead_fall` | Top-down hard light: interrogation, isolation |
| Window | `window` | Motivated window light: interior daylight |
| Practicals | `practicals` | Lights inside the frame: bars, restaurants, night signage |
| Silhouette | `silhouette` | Subject reduced to shape: mystery, abstract reveal |

**Camera Moveset Style (9):** see [camera-motion.md Table D](camera-motion.md#table-d--cinema-studio-35-camera-moveset-style-9-with-cli-slugs).

**Manual Style** (saved block of ≤ 2,000 chars of project *laws*: grade, lighting law, texture, performance register). This is the worked master block, verbatim (S1):

```
Cold procedural thriller. Grade: desaturated cool with steel-blue shadows,
highlights never bloom, blacks held just above crush. Lighting law: every
source is practical or motivated — fluorescents, monitors, car headlights;
no beauty fill; faces may fall to 50% shadow. Texture: clean digital with
faint sensor noise in low light, no film grain, no halation. Performance
register: contained and procedural — small eye movements over gestures,
nobody raises their voice.
```

**Per-shot settings strip** (S1). Canonical format:

```
Genre: <genre> · AR: <ratio> · Quality: <480p|720p|1080p> · Duration: <N>s · Shots: <N> · Sound: <On|Off> · Camera: <Body> / <Lens> / <Focal> / <Aperture> · Style: <Auto | preset, preset, preset | Manual>
```

Example: `Genre: Noir · AR: 21:9 · Quality: 1080p · Duration: 12s · Shots: 3 · Sound: On · Camera: Fine Film / Anamorphic / 50mm / f/1.4 · Style: Manual`. The UI shot counter caps internal cuts; the observed cap is 4 shots per generation.

## 8. CS 2.5 color-grading suite (S1)

Applied to keyframes **before** video generation (click keyframe → "Colorgrade"). Controls: Color temperature · Contrast · Saturation · Sharpness + effects · Highlights · Film grain · Exposure · Bloom. Grade the Hero Frame first, then match the others to it.

## 9. Image mode (CS 3.0 / 3.5) (S1, S2)

| Cinematic model | Picker text | Use when | Resolution | CLI id |
|---|---|---|---|---|
| **Soul Cinema** (default) | Cinematic image generation | General cinematic frames, Hero Frames, I2V keyframes | 1.5K / 2K | `soul_cinematic` (`--quality 1.5k\|2k`, `--soul-id`) |
| Cinematic Characters | Expressive faces and detailed styling | Face-driven close-ups, micro-expressions | not verified | — |
| Cinematic Locations | Rich environments with cinematic lighting | Establishing shots, location sheets | not verified | `soul_location` (AR incl. 9:21) |
| Cinematic Cameras | Image generation with camera controls | Explicit 2.5 optical stack; tabs All / Recommended / Saved; "+ Save setup" | 1K / 2K / 4K | `cinematic_studio_2_5` (`--resolution 1k\|2k\|4k`, `--mode auto`, ≤ 14 refs) |

Image aspect ratios (8): 1:1 · 3:4 · 2:3 · 9:16 · 3:2 · 4:3 · 16:9 (Cinematic) · 21:9 (Cinematic). The picker also lists **Featured models** (Soul 2.0, GPT Image 2, Seedream 5.0 Lite and others, prompt-only control). "Higgsfield Soul Cinema" in the Featured list is a different model from "Soul Cinema".

## 10. Soul Cast: AI actor presets (S1, S4, S2, S7)

| Parameter | 2.5 options | 3.0 options |
|---|---|---|
| Genre | 14 (Action, Adventure, Comedy, Drama, Thriller, Horror, Detective, Romance, Sci-Fi, Fantasy, War, Western, Historical, Sitcom) | 7 (General, Action, Horror, Comedy, Noir, Drama, Epic) |
| Budget | slider (millions) | $10M–$500M; CLI `soul_cast --budget` (default 50), `--aspect_ratio 16:9` |
| Era | decades from the 1900s | 1900s–2020s |
| Archetype (12) | Innocent, Everyman, Hero, Caregiver, Explorer, Rebel, Lover, Creator, Jester, Sage, Magician, Ruler | same |
| Identity | gender, race, age | same |
| Physical | height, eye color, hair, facial hair | + build, hair texture/color |
| Details | scars, tattoos, freckles | + accessories |
| Outfit (7) | Casual, Formal, High Fashion, Military, Sporty, Workwear, Vintage | clothing, materials, colors |
| Modes (3.0) | — | General (2K) · Character (4K) · Location (4K); 0.125 credits; batch 1 or 10 |

Up to 3 Soul Cast actors per keyframe, "Save to elements", and an auto-generated backstory and character sheet. It runs on Nano Banana 2. **AI Cast casting-card template** (S7), 50–75 words max:

```
Soul: [age]yo [build] [ethnicity/look] [gender], [height if it matters].
[3–5 facial anchors: hair, face shape, eyes, one small verifiable mark].
[Resting expression / character in one clause].
[Wardrobe, item by item, compact].
[Lighting/mood matching the film, one clause]. Cinematic.
```

**Per-character emotion presets** (Multi-Shot, per scene; S1): Joy · Fear · Surprise · Sadness.
**Micro-expression presets** (S4). Core 9: Deadpan Neutral, Fierce Focus, Subtle Arrogance, Candid Profile, Post-Workout Fatigue, Predator Glare, Sunblind Squint, Total Dissociation, Controlled Breath. Extended 10: Suppressed Smile, Quiet Devastation, Wary Recognition, Nervous Composure, Cold Calculation, Bitter Amusement, Exhausted Relief, Frozen Shock, Simmering Rage, Vulnerable Openness.

## 11. Shot modes and other surfaces (S1, S2)

- **Single Shot** · **Multi-Shot Auto** (CLI `--multi_shots --multi_shot_mode auto`) · **Multi-Shot Manual / Custom** (`--multi_shot_mode custom --multi_prompt [...]`; up to 6 scenes; 12 s on 2.5, 15 s on 3.0). Suggested six-scene arc: Establishing → Character intro → Action beat → Reaction → Consequence/turn → Resolution. Prompt a 2-second still moment at the start and end of every shot so morph and smooth cuts have somewhere to land.
- **Elements:** `@Character`, `@Location`, `@Prop`. Picker tabs: Uploads, Image Generations, Video Generations, Elements, Liked. Categories: All, Pinned, Shared, Characters, Locations, Props. Elements added in Scene 1 persist; in later scenes refer to characters by description.
- **Reference Anchor**, **Hero Frame**, **Popcorn** storyboard, **Keyframe interpolation** (start/end frames), **3D Mode** (Gaussian splatting), **Grid generation** (up to 16 variations), **Frame Extraction Loop**, **Object & Person Insertion**, **Clustering**.
- CLI-only knobs: `--enhance_prompt`, `--prompt_language en|zh` (default `zh`), `--cfg_scale` (v2, 0–1, default 0.5), `--mode pro|std` (v2), `--preset_id` (v2 and 3.0: a preset from `presets_show`), `--kling_element_ids` (v2), `--batch_size`.

## 12. Platform looks, grades and film stocks (usable inside or outside CS)

**Core platform styles** (call with `Style: <Name>`; S6): **Cinematic** (pair: Kling 2.6/3.0, Dolly In, Arc, Crane Up) · **VHS** (pair: Handheld, Wan 2.5, horror presets) · **Super 8MM** (pair: Handheld, natural light) · **Anamorphic** ("Style: Anamorphic, 2.35:1 widescreen"; pair: Crane Up, 360 Orbit, Super Dolly Out) · **Abstract** (pair: Wan 2.5, Portal, Multiverse, Glitch).

**Color-grade language** (S5): Blockbuster (teal shadows, orange highlights) · Cold thriller (desaturated blue-grey, crushed blacks) · Warm nostalgia (golden amber, lifted shadows, soft grain) · Cyberpunk (neon magenta + cyan, HDR) · Horror (sickly yellow-green, murky) · Romance (soft pink-gold) · Documentary (neutral) · Epic fantasy (deep jewel tones, volumetric) · Noir (high-contrast B&W) · Post-apocalyptic (desaturated orange-brown, dust haze).

**Precision grade presets** (S9, verbatim prompt starts): Teal & Orange / Modern Action ("Shadows biased toward cyan-teal (200° hue…) Highlights biased toward orange-gold (30° hue…)") · Desaturated with Accent Color ("reduce overall saturation to 30%… Maintain 100% saturation on accent color only") · Golden Hour / Warm Nostalgia ("color temperature shifted to 3200K amber-gold") · Cool Blue / Cold Isolation ("6500K… Overall desaturation 85%") · Bleach Bypass / Crushed Blacks ("lift black point… Increase visible grain 150%") · Desaturated Vintage / Film Stock ("reduce saturation to 70%… 35mm stock aesthetic") · High Contrast B&W ("0% saturation… High contrast gamma curve (S-curve)") · Cyberpunk / Neon Saturation ("boost saturation to 140%… split-toning: shadows cyan, highlights magenta-pink") · Monochromatic Single-Color · Warm-Cool Split / Day-for-Night ("foreground… warm 2700K… Background… cool 6500K").

**Film stocks** (S5): Kodak Portra 400 · Fuji Velvia · Kodak Vision3 500T · Ilford HP5 · Kodak Ektachrome.

**Style recipes** (official Higgsfield cinematic-prompt-builder, S6): Live-action epic · 3D animated feature (6 shots / 15 s) · Game cutscene (3 shots / 15 s, screen-pinned HUD) · Gameplay footage · FPV / POV oner · Product / commercial (8–10 sections, ending on a hero packshot) · VFX composite (INPUT LOCK) · Kaiju / creature (containment rule).

## 13. Calling templates (verbatim, S1)

```
━━━ UI SETTINGS (select in Higgsfield) ━━━━━━━━━━━━━━━━━━
Camera:   [body name]
Lens:     [lens name]
Focal:    [focal length]
Aperture: [aperture]
↳ Why: [one sentence — what this stack gives the image and why]

━━━ PROMPT (paste into Cinema Studio) ━━━━━━━━━━━━━━━━━━━
[Scene description only. No camera/lens/aperture language.]
```

```
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

CLI equivalent (S2):

```
higgsfield generate create cinematic_studio_video_3_5 \
  --prompt "<scene only>" --genre noir --aspect_ratio 21:9 --resolution 1080p \
  --duration 12 --camera_style intimate_observer --light_scheme practicals \
  --color_grading sodium_decay --generate_audio true --wait
```

More CS templates (multi-shot manual, @reference patterns, and so on) are in [opensource-prompt-templates.md](opensource-prompt-templates.md#a-cinematic-film-scene).

## Gaps

- The CS 3.5 genre picker scrolls past the 7 confirmed names; the rest are unnamed in every repo.
- The AI Director toggle's function is undocumented.
- Resolution for Cinematic Characters and Cinematic Locations is unverified.
- CS 2.5 Soul Cast's "Budget" slider range is given only in 3.0 terms.
