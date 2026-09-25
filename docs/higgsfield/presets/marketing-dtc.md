# Marketing, DTC and UGC ad presets

This file lists every ad-format preset, hook, setting, avatar type, ad structure and template found in the open-source repos under `../opensource/`. Items captured from the live MCP (649 Marketing Studio style presets, 63 bundled recipes) are indexed in [INDEX.md](INDEX.md); the relevant sections link there.

**Counts:** 9 Marketing Studio video presets (mode slugs) · 3 `specific_mode` values · 9 hooks · 14 settings · 3 avatar types · 3 Marketing Studio models · 6 Marketing Studio style-preset *types* (649 presets, live) · 5 UGC campaign formats · 15 concept seeds · 3 static-ad templates plus 3 ad-recreation modes · 17 product/commercial apps · 148 named hooks across 11 libraries · 5 quick-cut ad structures · 1 UGC 3-cut spine · 10 ai-video-generator ad formats · 8 worked Marketing Studio prompts (verbatim in [opensource-prompt-templates.md](opensource-prompt-templates.md#b-product-ad--dtc)).

## Source legend

| Code | Repo · path | URL |
|---|---|---|
| **M1** | higgsfield-ai-prompt-skill · `skills/higgsfield-marketing-studio/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/SKILL.md |
| **M2** | higgsfield-ai-prompt-skill · `skills/higgsfield-marketing-studio/cross-surface-workflow.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-marketing-studio/cross-surface-workflow.md |
| **M3** | higgsfield-ai-prompt-skill · `skills/higgsfield-content-factory/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-content-factory/SKILL.md |
| **M4** | cli · `MODELS.md` | https://github.com/higgsfield-ai/cli/blob/dc7e2d2/MODELS.md |
| **M5** | higgsfield-ai-prompt-skill · `specs/models_explore_snapshot_2026-08-07.json` (+ `_image_2026-08-01.json`) | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/specs/models_explore_snapshot_2026-08-07.json |
| **M6** | higgsfield-ai-prompt-skill · `skills/higgsfield-gpt-image-2/static-ads-workflow.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-gpt-image-2/static-ads-workflow.md |
| **M7** | higgsfield-ai-prompt-skill · `skills/higgsfield-apps/SKILL.md` | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/c0b73ab/skills/higgsfield-apps/SKILL.md |
| **M8** | higgsfield-skills · `skills/07-ecommerce-ad/references/{hooks,ad-craft,examples}.md` | https://github.com/pixelab-ch/higgsfield-skills/tree/2f6aa10/skills/07-ecommerce-ad/references |
| **M9** | higgsfield-skills · `skills/{01,02,03,04,05,06,08,09,13,14,15}-*/references/hooks.md`, `skills/11-social-hook/references/hook-craft.md` | https://github.com/pixelab-ch/higgsfield-skills/tree/2f6aa10/skills |
| **M10** | higgsfield-ugc-workflow · `skills/{ugc-ad,ugc-brief,ugc-multicut-script,ugc-video}/SKILL.md` | https://github.com/joebenscoter86/higgsfield-ugc-workflow/tree/6a9bea5/skills |
| **M11** | ai-video-generator-claude · `skills/01…10-*/SKILL.md` | https://github.com/rediumvex/ai-video-generator-claude/tree/ffdad7d/skills |
| **M12** | higgsfield-ai-prompt-skill · `templates/02-product-ugc-showcase.md`, `templates/ad-asset-prep.md`, `skills/higgsfield-recipes/SKILL.md` (Recipe 3) | https://github.com/OSideMedia/higgsfield-ai-prompt-skill/tree/c0b73ab/templates |
| **M13** | lanshu-awesome-ai-video-kit · `methodology/17-happyhorse-masterclass.md` (Templates E, H) | https://github.com/cclank/lanshu-awesome-ai-video-kit/blob/b4ceecc/methodology/17-happyhorse-masterclass.md |
| **M14** | this repo · `presets/INDEX.md` (live MCP capture, 2026-09-25) | [INDEX.md](INDEX.md) |

---

## 1. Marketing Studio video: the 9 presets (M1, M3, M5)

Marketing Studio is a routing layer for short ad creative. The preset is the load-bearing choice: it sets camera language, register, pacing and which picklists are available.

| # | Display name | Slug (`mode`) | Hook + setting? | What it is for | Structure / camera (director notes) | Prompt template / cue |
|---|---|---|---|---|---|---|
| 1 | **UGC** | `ugc` | Yes | Realistic single-take social video with a person and the product | Phone-native selfie framing, handheld, eye level, one continuous take, casual conversational register | Flowing paragraph under 50 words; let the hook and setting structure it. **ASMR variant:** same preset + `generate_audio: true` + intimate setting (Kitchen/Bathroom/Bedroom) + no hook + close-up handling sounds, no talking |
| 2 | **Tutorial** | `tutorial` | Yes | Step-by-step how-to or recipe | Stable camera (tripod, overhead rig or locked handheld); cuts allowed between steps; imperative-voice dialogue ("apply," "hold," "press") | Numbered steps in imperative voice |
| 3 | **Unboxing** | `ugc_unboxing` | Yes | High-quality reveal from packaging | Top-down or 3/4 angle, hands in frame, tactile close-ups on reveal moments; accepts a custom packaging image in the additional-asset slot | Seeds: trio reveal, ribbon-pull solo drop, subscription-box drop |
| 4 | **Hyper Motion** | `hyper_motion` | **No** | Kinetic product hero shots: splash, pour, spin, drop | Works **without** an avatar; default arc is "element-by-element assembly" with an **auto pack-shot** at the end; accepts logos as the hero; whip pans, orbits, speed ramps | Five words is enough: `logo creating with comet tail.` |
| 5 | **Product Review** | `product_review` | Yes | Authentic talking-head review, product in hand | Medium shot of the presenter + B-roll inserts of product detail; measured, observational register | Seeds: two-ingredient test, fridge-ranking, 7-day diary; "label read aloud, ranking" |
| 6 | **TV Spot** | `tv_spot` | **No** | Cinematic narrative spot in a polished commercial register | Composed dolly / crane / cinematic framing; arc: establishing → product → lifestyle → hero/logo; **default packshot beat** | Can work from a five-word prompt; to suppress the packshot, add `ABSOLUTELY NO PACKSHOT. NEVER SHOW ISOLATED PRODUCTS.` |
| 7 | **Wild Card** | `wild_card` | **No** | Surreal one-shot creative concept | Permission to break ad grammar: impossible geometry, surreal juxtaposition, unexpected scale | Sectioned `Style & Mood:` / `Dynamic Description:` / `Static Description:` + quality suffix + negatives; portal-cut device for many locations in one 15 s take |
| 8 | **UGC Virtual Try On** | `ugc_virtual_try_on` | Yes | Casual try-before-buy | Selfie or mirror framing, casual environment, natural movement (turn, walk, gesture) | Multi-clip campaign: shared `LOCATION:` + `CAMERA:` block, then `## CLIP N — Xs — ITEM` |
| 9 | **Pro Virtual Try On** | `virtual_try_on` (**not** `pro_virtual_try_on`) | **No** | Editorial / lookbook try-on | Studio quality: clean backdrop (cyc wall, studio seamless), controlled light, composed poses; orbit / push-in / static editorial | Time-coded beats (`0–3s: FULL BODY SHOT…`, `8–10s: … LIQUID SCAN TRANSITION…`) with a static-camera contract |

**Routing:** the MCP routes via `show_marketing_studio(action='fetch'|'create', …, mode='<slug>')` (M1). The 2026-08-07 catalog snapshot adds a `mode` parameter directly on `marketing_studio_video`: "pass the chosen format's `presets[].slug`; get options from `marketing_list_video_presets` or `show_marketing_studio(action='presets')`" (M5). The CLI uses `--mode` (default `ugc`) (M4).

**CLI `specific_mode`** (M4): `default` · `web_product` (with `--web_product_ids`, `--web_product_type desktop|mobile`) · `from_storyboard` (with `--storyboard_id`).

### Parameters (M1, M4, M5)

| Param | Values / notes |
|---|---|
| `duration` | 4–15 s (M1); snapshot `duration_range` 12–15 (M5); CLI default 15 |
| `aspect_ratio` | `auto`, `21:9`, `16:9`, `4:3`, `1:1`, `3:4`, `9:16` |
| `resolution` | `480p`, `720p` (default), `1080p` |
| `generate_audio` | the output is **auto-scored music**; default false in M1/M4, true in M5 |
| `hook_id` / `setting_id` | UGC-family presets only (UGC, Tutorial, Unboxing, Product Review, UGC Virtual Try On); independent of each other |
| `ad_reference_id` | recreate an analyzed reference ad's scenario (composition, pacing, hook, narration); **mutually exclusive** with hook_id and setting_id |
| `avatars` / `avatar_ids` | max 1; `avatars:[{id,type:'preset'\|'custom'}]` or `avatar_ids:['<uuid>']`; an empty list gives a random face per render |
| `product_ids` / `web_product_ids` | plural arrays; cannot both be set |
| `medias` | roles `image`, `start_image`, `end_image`: product image (required), location plate, packaging asset |
| none | no `get_cost` preflight; verify spend afterwards with `transactions(limit=200)` |

### Hooks (9, snapshot 2026-05-18; enumerate live with `show_marketing_studio(action='list', type='hook')`) (M1)

| Type | Hooks |
|---|---|
| **Stunt** (4) | Product Hit · Random Object Mic · Blizzard · Product Dodge |
| **Subtle** (5) | Spicy · Interview · Product Crash · Camera Bump · Epic Fail |

Example hook prompt ("Interview"): *"Interviewer asks a second stranger a question based entirely on the first stranger's random answer; confusion builds until the second person naturally notices the product (Erewhon-style aspirational item) and pivots into a casual review."* The M5 description gives another example of a hook mechanic: "Object flies into frame".

### Settings (14) (M1)

| Type | Settings |
|---|---|
| **Realistic** (8) | Bedroom · Bathroom · Kitchen · Office · In Car · Street · Gym · Nature |
| **Unrealistic** (6) | Airplane Wing · Roofing · Volcano Rim · Tiny Reviewer · Car Roof · Train Surf |

### Avatars (M1)

| Type | How | Note |
|---|---|---|
| preset | `show_marketing_studio(action='list', type='avatar')` | about 40 (roughly 24F / 16M) as of 2026-05-18 |
| uploaded | Web UI → upload → name → "Create avatar" | a real creator or ambassador |
| text-generated | Web UI → "Create avatar" → prompt, e.g. *"elegant 60-year-old woman"*, *"Asian woman with pink hair, mid-20s, dressed in soft beige and lilac modern fashion"* | — |

Two-person scene: primary person in `avatars`, secondary as a reference image in `medias`.

### What Marketing Studio cannot do, and the escape hatches (M1, M3)

It cannot do clips over 15 s, non-human lip-sync, multi-character dialogue, multiple settings or split-screen in one output, free-form hook or setting IDs, or more than one avatar. Route these to **Wan 2.7** (synced audio + character consistency), **Veo 3.1**, **Cinema Studio Video 3.0**, **Seedance 2.0** (multi-SKU reference) or **Kling 3.0** (multi-shot, motion transfer). Label such ideas "Outside Marketing Studio".

## 2. Marketing Studio style presets (649, live MCP) (M14)

`get_presets(source:'marketing_studio')` returns 649 presets. The first 50 were captured, in six **types**, each a folder under `marketing-studio/`: `product_shots` (image) · `product_shots_people` (image) · `hypermotion` (video) · `mixed_media` (video) · `2d_motion` (video) · `saas_motion` (video). The open-source repos contain none of these names and no prompt text for them; the only name match found was the generic word "Simple". The Marketing Studio **video** model's 9 modes (§1) are a separate axis from these style presets.

## 3. The three Marketing Studio models (M1, M2, M4, M5)

| Model id | UI name | Output | Key params |
|---|---|---|---|
| `marketing_studio_video` | Marketing Studio | video | §1 |
| `marketing_studio_image` | Marketing Studio Image | image | `resolution 1k\|2k\|4k`, 11 aspect ratios (`auto` needs a reference), ≤ 14 image refs, prompt or reference required |
| `ms_image` | **DTC Ads** (call it this with users) | image | `style_id` **REQUIRED** (platform-curated ad-format library; no default); `brand_kit_id`; `resolution 1k\|2k\|4k`; `quality low\|medium\|high`; `batch_size 1–20`; 15 aspect ratios (`1:1, 3:2, 2:3, 16:9, 9:16, 4:3, 3:4, 21:9, 27:16, 16:27, 9:8, 8:9, 4:9, 9:4, auto`); ≤ 14 refs |

Enumerate brand kits with `show_marketing_studio(action='list', type='brand_kit')`. **No repo lists `style_id` names.** Prefer DTC Ads over GPT Image 2 for brand-kit consistency, batches of 5–20, or picking from the curated ad-format library.

## 4. Bundled product recipes (63, live MCP) (M14)

Catalog metadata is in [recipes/](recipes/). By output type:

- **Video recipes (18):** crane-reveal, detail-scan, floating-roll, half-turn, impact, label-trace, light-sweep, liquid-wrap, macro-glide, paint-wave, product-spin, pull-back, push-in, shadow-motion, sunrise-pass, texture-track, topdown-dive, whip-pan. Camera recipes are cross-referenced in [camera-motion.md](camera-motion.md).
- **Image recipes (45):** angles, before-after, benefits, bundle, care-guide, color-pop, fabric-wave, feature-zoom, flatlay, gym-bag, hero-shot, how-it-works, ice-capsule, in-hand, inside-pack, kitchen-scene, luxury, main-benefit, minimalist-white, moodboard, myth-fact, new-drop, on-desk, pedestal-shot, powder-cloud, power-angle, product-match, quick-steps, reel-cover, retail-stack, saveable-tip, share-card, shelf-ready, signature-frame, specs, swipe-opener, symmetry, three-reasons, travel-pack, unboxing, usage-guide, vertical-hook, water-splash, weekend-carry, whats-inside.

Open-source equivalents were appended to the individual recipe files (`## From open-source`) where a genuine match exists.

## 5. Content Factory: 5 UGC campaign formats (M3)

| # | Format | Default share | Marketing Studio preset | Concept seeds |
|---|---|---|---|---|
| 1 | UGC Entertainment | 20% | `ugc` | blind taste try · "$100 to try it" street challenge · will-it-pour |
| 2 | Street Interview | 20% | `ugc` (+ Interview hook) | "rate it out of 10" · "sing for the product" · blind opinion → brand reveal |
| 3 | Unboxing | 20% | `ugc_unboxing` | trio reveal · ribbon-pull solo drop · subscription-box drop |
| 4 | Product Review | 20% | `product_review` | two-ingredient test · fridge-ranking · 7-day diary |
| 5 | ASMR | 20% | `ugc` + audio on | macro cap-unscrew + glug pour · condensation slide · spoon-clink ice-drop |

Allocation: `per_format = floor(VIDEO_COUNT / 5)`; the remainder goes one per format from format 1. Rules: no on-screen text in prompts; generate one preset batch at a time behind a confirmation gate; resolve hook and setting IDs at runtime.

## 6. UGC ad pipeline: the 3-cut spine (M10)

Pipeline: product profile → brief (**checkpoint**) → base character (**checkpoint**) → storyboard sheet (**checkpoint**) → multi-cut script (**checkpoint**) → Seedance 2.0 video (cost gate; 9:16, native VO, ≤ 15 s, 720p) → audio checkpoint → enhance (ducked music + karaoke subtitles + flash/zoom-punch cuts) → virality read (`virality_predictor`; flag if `hook_score < 50`) → caption.md + hashtags.md.

| Cut | Framing | Camera | Content |
|---|---|---|---|
| 1 — Hook (0–~4 s) | **Tight** | handheld micro-shake (selfie) | creator reacts or speaks to camera; topic framed in the first 2–3 s |
| 2 — Setup/Action (~4–10 s) | **Macro** | locked-off | the key usage motion (tactile or quality beat) |
| 3 — Recommendation (~10–15 s) | **Wide** | handheld | creator presents the product to camera; brand named |

Voice rules: open the SEEDANCE_PROMPT with a one-line voice spec, write dialogue as `she says: "…"`, end with `No subtitles.`, spell brand names phonetically (`nustandardlabs` → `Noo Standard Labz`, `vial` → `vile`), and budget about 2.5 words/s (~32 words for 15 s). Model router: `kling3_0` for camera-path control; `cinematic_studio_video_v2` for premium commercial themes.

## 7. Static ads: GPT Image 2 ad-recreation presets (M6)

- **Modes:** A, reference swap (a reference image is present) · B, text-driven layout · C, edit an existing still (location or scene).
- **Template patterns:** 5.1 **iMessage / DM Conversation** · 5.2 **Scarcity / Countdown Urgency** · 5.3 **Ingredient Spotlight / Clean Label**. The full templates are verbatim in [opensource-prompt-templates.md](opensource-prompt-templates.md#b-product-ad--dtc).
- **Rules:** fractional-coordinate layout zones · brand-neutral wireframe intermediate · keep the top and bottom 10% as safe zones · brand-vs-structure two-list rule · a spec.json per run.

## 8. Product and commercial apps (one-click) (M7)

Click to Ad (product URL/image → video ad) · Packshot · Giant Product · Macro Scene · Macroshot product · Billboard Ad · Graffiti Ad · Truck Ad · Volcano Ad · Fridge Ad · Kick Ad · Commercial Faces · AI Stylist · Outfit Swap · Outfit Shot · ASMR Promo · ASMR Host. (The full apps list is in [effects-and-styles.md](effects-and-styles.md#apps).)

## 9. Hook libraries (named, 148 total)

| Library | Hooks | Src |
|---|---|---|
| **E-commerce (12)** | Product Drop with Dramatic Impact · Satisfying Texture ASMR Close-Up · Before/After Transformation · Stop Scrolling Direct Address · Unboxing Reveal · Colour/Variant Cascade · Ingredient Explosion · Problem-Solution Snap · In-Hand Usage Tease · Lifestyle Aspiration Flash · Scarcity/Urgency Signal · Creator Reaction | M8 `hooks.md` |
| **Product 360 (12)** | Particle Materialization · Dramatic Spotlight Snap · Crash and Shockwave · Unwrap and Peel Reveal · Impossible-Angle Macro-to-Wide · Self-Assembly · Exploded View Snap-Together · Liquid Pour and Transparency Bloom · Slow-Motion Lift · Spin-to-Reveal · Zoom and Pan Transition · Halo Light Flare | M9 `09-product-360` |
| **Food & beverage (12)** | Cheese Pull / Stretch · Slow-Motion Sauce Pour · Steam Rising from Hot Dish · Knife Cutting with Satisfying Crunch · Chocolate Break / Snap · Ice Cream Scoop with Drip · Sizzling on Hot Surface · Bubbles Rising in Drink · Ingredient Cascade / Rain · Flame or Torch Moment · Juice or Oil Drizzle · Bread Tear / Crumb Reveal | M9 `14-food-beverage` |
| **Fashion lookbook (12)** | Dramatic Outfit Reveal (Curtain / Door) · Model Power-Walk Directly at Camera · Rapid Outfit Change Flash Cuts · Fabric Texture Extreme Macro · Slow-Motion Hair and Fabric Wind · Mirror or Reflection Reveal · Color-Coordinated Environment Match · Accessory Close-Up to Full Look · Silhouette Shadow Spin · Elevator or Descent Reveal · Zoom or Scale Shift · Rotation Spin (360° or Partial) | M9 `13-fashion-lookbook` |
| **Real estate (12)** | Drone Aerial Swoop Toward Property · Door Opening to Reveal Stunning Interior · Window View That Takes Your Breath Away · Before / After Renovation Flash · Light Flooding Into Dark Space · Infinity Pool Edge With Landscape Beyond · Architectural Detail Extreme Close-Up · Day-to-Night Transition · Front Door Approach · Skyline from Penthouse Window · Negative Space and Light Play · Material Transformation Under Light | M9 `15-real-estate` |
| **Motion-design / SaaS ad (12)** | Data Visualization Explosion · UI Morphing · Device Appearing from Void · Code-to-Product Transformation · Metric Counter Rapid Climb · Glitch-to-Clean Transition · Hand Interaction with Device · Neon Glow Activation · Isometric Camera Zoom · Particle Burst from Logo · Split-Screen Feature Stack · Light Beam Scan | M9 `06-motion-design-ad` |
| **Social hook encyclopedia (27)** | Impossible Scale · Impossible Physics · Color Explosion · Unexpected Reveal · Extreme Close-up Zoom · Split Screen Transformation · Freeze Frame Break · Half-Reveal · Wait For It Setup · Before/After Tease · Ladder Reveal · Misdirection Hook · Cute Overload · Fear or Tension · Awe/Wonder · Humor/Absurdity · Inspiration/Aspiration · Shock/Disgust · Reverse Motion · Glitch Effect · Negative Space Break · Audio Jump · Rapid Cuts · Focus Shift · Camera Look · Direct Question · On-Screen Text Command | M9 `11-social-hook/references/hook-craft.md` |
| **Viral hook arsenal (12 + 4 audio)** | Physics Break · Scale Warp · Color Bomb · Obscured Subject · Reaction Before Action · Countdown Tension · Satisfying Motion · Before-After Flash · Kinetic Typography · Eye Contact · Sudden Movement · Silence Then Sound · audio: The Bass Drop · The Glitch · ASMR Crunch · Voice Hook | M11 `01-viral-hook` |
| **Cinematic (12)** | Extreme Close-Up Snap to Wide Reveal · Black Screen to Dramatic Light Burst · Reverse Motion That Catches the Eye · Unexpected Scale — Macro Detail of Familiar Object · Silent Beat Then Explosive Sound · Extreme Color Shift · Fast Movement Entering Frame · Extreme Depth of Field Rack Focus · Stark Geometric Contrast · Protagonist's Eyes Open / Look · Disorienting Camera Rotation · Scale Impossibility | M9 `01-cinematic` |
| **3D/CGI (12)** | Dramatic Camera Fly-Through · Scale Reveal (Tiny to Massive) · Impossible Camera Angle · Object Materializing from Particles · Photorealistic Object in Surreal Setting · Transformative Morph Sequence · Revealing Through Transparency · Depth Shift with Depth of Field · Chromatic Separation and Refraction · Kinetic Decomposition · Environmental Reaction · Temporal Speed Manipulation | M9 `02-3d-cgi` |
| **Before/after (4 hook structures + 5 transitions)** | Flash Compare · Slow Morph · Destruction-to-Beauty · Timeline Collapse; transitions: Hard Cut · Wipe · Morph Dissolve · Object Match · Time-Lapse Compress | M11 `07-before-after` |

The cartoon, comic, fight and anime hook sets are listed in [effects-and-styles.md](effects-and-styles.md#hook-sets-for-stylized-content).

**Hook prompt phrasing example** (M8, Hook 1, verbatim): *"Dark matte background. Product descends into frame with motion blur, catching dramatic side-light mid-drop. Soft glow emanates as it lands centre frame."* Best for luxury watches, electronics, premium skincare and jewelry.

## 10. Ad structures (timing presets)

| Structure | Beats | Src |
|---|---|---|
| Hook → Showcase → Benefit → CTA (15 s) | 0–2 hook · 2–8 showcase (2–3 cuts) · 8–12 lifestyle/benefit · 12–15 CTA with urgency | M8 `ad-craft.md` |
| Before/After Sandwich (12 s) | 0–3 before · 3–9 showcase · 9–12 after + CTA | M8 |
| Rapid Variant Carousel (15 s) | 0–2 first variant · 2–13 cuts through variants (1–2 s each) · 13–15 best-seller + CTA | M8 |
| Unboxing Journey (15 s) | 0–2 sealed box · 2–5 opening · 5–12 reveal + rotation · 12–15 CTA | M8 |
| Testimonial Embed (15 s) | 0–1 hook · 1–8 showcase · 8–13 reaction · 13–15 CTA | M8 |
| Emotional arc (15 s) | relatable opening → product intro → transformation → aspiration → CTA; 30–40% lifestyle / 60–70% product | M8 |
| Recipe 3: Product Advertisement | Hero reveal → detail → hand interaction; camera Lazy Susan / Robo Arm | M12 |
| TV Spot default arc | establishing → product → lifestyle → hero/logo (packshot) | M1 |
| Product/commercial style recipe | 8–10 short sections, hard match-cuts on action, 0.3 s macro montage, ends on a hero packshot (product in one third, dark negative space, slow dolly, particle drift, hold); no music, VO or text | `higgsfield-ai-prompt-skill/skills/higgsfield-style/SKILL.md` |

## 11. ai-video-generator-claude ad formats (Seedance 2.0 on Higgsfield) (M11)

| Skill | Format presets inside |
|---|---|
| 01 viral-hook | 12 hooks, fast/reveal camera hooks, 4 sound templates, TikTok/Reels/Shorts specs, 5 examples (Product Reveal, Founder Authority, Dopamine Transformation, Mystery Loop, Speed Ramp Energy) |
| 02 saas-launch | Floating Device Shot · Perspective Zoom · Split Comparison; lighting: Dark Mode Showcase · Clean Studio · Neon Tech |
| 03 personal-brand | Power Portrait · Natural Authority · Creator Workshop; Slow Push-In · Documentary Track · Reveal Orbit |
| 04 course-promo | Template A Classroom Cinematic · B Screen-to-Reality · C Knowledge Montage; lighting: Academy Clean · Moody Expert · Warm Workshop |
| 05 faceless-channel | Cinematic B-Roll · Motion Graphics Hybrid · Ambient Aesthetic · Documentary Reconstruction |
| 06 luxury-aesthetic | Editorial Minimal · Black & Gold · White Studio · Architectural; lighting: Soft Sculptural · Single Source Drama · Diffused Daylight · Candlelight Intimate; grades: Desaturated Premium · Monochromatic · Cream and Shadow · Metallic Accents |
| 07 before-after | Flash Compare · Slow Morph · Destruction-to-Beauty · Timeline Collapse; contrasts: Cold→Warm, Gray→Saturated, Chaos→Order, Empty→Full |
| 08 testimonial-story | Documentary Interview · Data Visualization · Split Journey · Montage Proof; lighting: Interview Warm · Documentary Natural · Success Glow |
| 09 ai-avatar | Photorealistic · Stylized 3D · 2D Animated · Abstract; hooks: Glitch-to-Perfect · Digital Birth · Style Morph · Fourth Wall Break |
| 10 podcast-visual | Abstract Visualization · Cinematic B-Roll Narrative · Split-Screen Interview Reconstruction · Kinetic Typography |

## 12. Short structural templates (full versions are in the templates file)

**UGC ad (M13, Template E, verbatim):**

```
[Person description] in [setting], natural lighting, [imperfection detail e.g. subtle acne texture].
[They apply/use product] and say, "[Quoted dialogue]." Casual, authentic UGC style.
Natural [body part] movement, realistic [background detail].
AUDIO: Their voice, soft room tone, no music.
```

**Product ad one-liner (M13, Template H, verbatim):**

```
Turn this [product] into a premium cinematic advertisement, dynamic camera rotation,
dramatic lighting, dust particles, [energy descriptor], fast push-in,
high-contrast product reveal.
```

**Cinema Studio 3.0 product @reference (M12, verbatim):**

```
@Image1 as the product. Smooth 360-degree orbit on a marble pedestal.
Soft studio lighting catches the matte-black finish. Subtle reflection on surface.
Camera: orbit. Style: clean white studio, shallow depth of field.
Audio: soft surface contact, gentle mechanical click.
```

**Ad recreation in Cinema Studio 3.0** (`higgsfield-ai-prompt-skill/skills/higgsfield-cinema/SKILL.md`): `Mimic @Video1's shot design, pacing, and transitions. Replace all products with @Image1. Match the lighting and camera angles.`

## Gaps

- No repo names the `ms_image` / DTC Ads `style_id` library, the 40 preset avatars, or the 649 Marketing Studio style presets beyond the 50 captured live.
- The hook and setting UUIDs, and each hook's full `prompt` text (except "Interview"), are not present.
- `marketing_list_video_presets` output (the canonical mode list) is not captured in any repo. Later snapshots may add modes beyond the 9.
