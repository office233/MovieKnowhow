# Higgsfield Knowledge Base (Swypik)

A knowledge base on generating clips, ads and full films on Higgsfield, focused on **presets**. Collected 2026-09-25.

## Contents
| Section | Contents | Count |
|---|---|---|
| [presets/INDEX.md](presets/INDEX.md) | Index of all presets | — |
| [presets/viral/](presets/viral/) | Viral Hub (effects) presets, with description and preview, plus open-source equivalents | **87/87** |
| [presets/marketing-studio/](presets/marketing-studio/) | Marketing Studio presets (first page) | 50/649 |
| [presets/recipes/](presets/recipes/) | Bundled recipes (hero-shot, crane-reveal, whip-pan…) | 63 |
| [presets/shorts-studio.md](presets/shorts-studio.md) | Shorts Studio styles | 32 |
| [presets/camera-motion.md](presets/camera-motion.md) | Camera moves, angles, shot sizes, speed ramps | 63 moves |
| [presets/cinema-studio.md](presets/cinema-studio.md) | Camera bodies, lenses, genres, color grading, lighting | — |
| [presets/marketing-dtc.md](presets/marketing-dtc.md) | Marketing Studio / DTC / UGC presets, 148 hooks | 9 presets |
| [presets/effects-and-styles.md](presets/effects-and-styles.md) | Motion/VFX, Mixed Media, Photodump, Moodboard, apps | ~235 |
| [presets/opensource-prompt-templates.md](presets/opensource-prompt-templates.md) | Verbatim prompt templates with attribution | **386** |
| [presets/animation-actions-3d.md](presets/animation-actions-3d.md) | 3D animations | 300/678 |
| [films/INDEX.md](films/INDEX.md) | How films, ads and UGC were made, shot by shot (20 projects) | 21 |
| [films/cli-and-api.md](films/cli-and-api.md) | Official Higgsfield CLI and API, credit costs | — |
| [models.md](models.md) | All models: parameters, durations, resolutions, inputs | **99** |
| [workflows/ad-multiplier/](workflows/ad-multiplier/) | Official Ad Multiplier workflow (SKILL + references) | 1/16 |
| [guides/](guides/) | Summaries of public guides | 5 |
| [opensource/](opensource/) | Full copies of 20 open-source projects (MIT/CC-BY/ISC), see SOURCES.tsv | 20 |
| [open-questions.md](open-questions.md) | Gaps and what was blocked | — |

## higgsfield.ai site (crawled 2026-09-25, robots.txt respected)
| Section | Contents |
|---|---|
| [site/presets-site/motion/](site/presets-site/motion/INDEX.md) | **245 Motion presets** (Wan 2.5 / Minimax Hailuo 2.3 / Seedance Pro / Kling 2.5 Turbo) + [**1,239 real sample prompts**](site/presets-site/motion/SAMPLE-PROMPTS.md) |
| [site/presets-site/effects/](site/presets-site/effects/INDEX.md) · [mixed-media/](site/presets-site/mixed-media/INDEX.md) | 87 Effects (= Viral Hub) + 33 Mixed Media: inputs, settings, prices, examples |
| [site/presets-site/apps/](site/presets-site/apps/INDEX.md) | 92 Apps (one-click), costs, inputs |
| [site/academy/](site/academy/) | **16 Academy courses, 171 lessons**, ~250 prompts, official skills + scene frames in `assets/` |
| [site/blog/](site/blog/) | 245 articles, ~640 prompts |
| [site/creator-hub/](site/creator-hub/INDEX.md) | 96 pages (guides, help center, customer stories) |
| [site/features/](site/features/INDEX.md) | Model/tool pages, [pricing](site/features/pricing.md), 506 prompts |
| [site/mcp/](site/mcp/INDEX.md) | 41 MCP pages, 116 prompts |
| [site/films-site/](site/films-site/INDEX.md) | Original Series + 28 showcase projects (model stack, credits, generations/second) |
| [site/round2/](site/round2/INDEX.md) | Contests (23 winning films + jury notes), 38 skills, plugins, 166 prompts |
| [site/media/](site/media/) | All ~12.5k images from the pages (input frames, previews, course frames) as 640px copies + `index.tsv` (URL → file) |
| [site/crawl.py](site/crawl.py) | The crawler (reproducible) |

**Total: ~5,300 public pages, ~2,650 real prompts on the site + 386 open-source templates.**

## Quick decision guide: "I want X"
| I want | Model | Preset / recipe | Details |
|---|---|---|---|
| A multi-scene cinematic film | Characters in Soul Cinema → lock them with Nano Banana Pro → video with Seedance 2.0 (std), extend with Seedance 2.5 | Cinema Studio camera / genre | [films/higgsfield-ai-prompt-skill.md](films/higgsfield-ai-prompt-skill.md) (Hell Grind) |
| A single cinematic hero shot | Cinema Studio Video 3.0 / Veo 3.1 | camera-motion (Dolly, Crane, Orbit…) | [presets/camera-motion.md](presets/camera-motion.md) |
| A product ad | Marketing Studio Video / Seedance 2.0 with a product reference | recipes: hero-shot, product-spin, liquid-wrap, crane-reveal… | [presets/marketing-dtc.md](presets/marketing-dtc.md) |
| UGC / testimonial | Seedance 2.0 (storyboard + character + product refs) | Marketing Studio: UGC, Unboxing, Tutorial, Try-On | [films/higgsfield-ugc-workflow.md](films/higgsfield-ugc-workflow.md) |
| A viral clip with an effect | Viral Hub preset (execute_preset) | [presets/viral/](presets/viral/) | [presets/effects-and-styles.md](presets/effects-and-styles.md) |
| The same character across scenes | Soul ID (soul_2 / soul_cinematic) for one person; Elements `<<<id>>>` for several | — | [guides/character-consistency.md](guides/character-consistency.md) |
| Camera moves / b-roll | Kling 3.0 / Kling 3.0 Turbo | camera-motion | — |

## Key production rules (from the open-source projects)
1. Lock characters, locations and props (a text descriptor plus a reference image) BEFORE any shot.
2. Paste each descriptor word for word into every prompt; the model has no memory between generations.
3. Keep reference sheets on a neutral background with flat light; any change to a character becomes a new asset.
4. Fix a spatial map for each scene, open with a static wide, and end every clip on a described final frame so the next one continues from it.
5. Use 10–15 s multi-shot clips with timed cuts, changing both framing and camera style at each cut.
6. Put dialogue only in the audio block and keep only diegetic sound; add music in post.
7. Change one line per retry and log every take. After 10–15 failures, simplify the shot.
8. Draft at 480p/720p and generate the high-risk shots first. Acceptance rates are ~1–1.5%, so budget accordingly.

## Rules for agents
See [.claude/skills/higgsfield-director/SKILL.md](../../.claude/skills/higgsfield-director/SKILL.md). **Any generation consumes credits and requires the user's explicit confirmation.**
