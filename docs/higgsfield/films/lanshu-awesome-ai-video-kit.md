# lanshu-awesome-ai-video-kit (cclank) — 543 tested prompts, 21 methodology SOPs, 7 skills (Chinese, with Higgsfield sections)

- Upstream: <https://github.com/cclank/lanshu-awesome-ai-video-kit> (commit `b4ceecc`) · demo <https://lanshu-awesome-ai-video-kit.lank.workers.dev>
- Local copy: [`../opensource/lanshu-awesome-ai-video-kit/`](../opensource/lanshu-awesome-ai-video-kit/)
- License: MIT © 2026 lanshu ("prompt content sourced from public docs & review blogs, for educational & research use only")
- Type: **prompt library + methodology** (15–16 models; Higgsfield is one chapter)

## What it is

"543 实测 prompt · 16 模型 · 7 Claude Skill · 21 篇方法论" — a corporate-video team's kit: `prompts/data/all-prompts.json` (433 single-model + 110 cross-model), methodology SOPs in `methodology/`, skills (`seedance-prompter`, `seedance-storyboard`, `seedance-debugger`, `kling-prompter`, `model-selector`, `prompt-translator`, `happyhorse-prompter`) and a weekly endpoint monitor. Most text is Chinese; summaries below are translations/paraphrases, quotes are verbatim.

## Higgsfield-specific prompts (verbatim from `prompts/data/all-prompts.json`, ids `hg-001…008`)

| id | Use | Params | Prompt |
|---|---|---|---|
| hg-001 | DoP template: push in | 16:9, 5s | "Slow push in. Medium close-up of a woman with dark wet hair under a flickering streetlamp at night. Her eyes track something off-frame to the left. Rain falls steadily, lit only by the lamp." |
| hg-002 | DoP template: whip pan | 9:16, 4s | "Whip pan from left to right. A skater lands a trick on wet pavement at night. Neon signs streak in the motion blur. Cut on the landing impact." |
| hg-003 | Soul ID character | 9:16, 8s | "[Soul ID: my-character] walks into a sunlit kitchen wearing a white linen shirt, opens the fridge, takes out a bottle of water, turns to camera with a slight smile. Warm morning light. Medium shot, eye level." |
| hg-004 | DoP crash zoom | 21:9, 4s | "Crash zoom from wide establishing to extreme close-up on the protagonist eye, the moment of realization frozen in his iris where a tiny silhouette approaches from far behind, cold cyan rim light with dim ambient fill, shallow focus, 24fps, single take with consistent character ID, no morphing of background plates." |
| hg-005 | Soul transformation | 9:16, 5s | "[Soul ID: my-character] stands in casual street clothes. Lightning flash. In the next frame she wears full cyberpunk samurai armor with glowing katana. Cool neon palette. Vertical short." |
| hg-006 | 60 s music video (AI Director) | 9:16, 60s | "60-second music video. [Soul ID: singer]. Scene 1: rooftop sunset, singer performs to camera, golden hour. Scene 2: car interior at night, singer drives through neon-lit tunnel, intercut close-ups. Scene 3: empty stage with single spotlight, singer holds final note, slow pull-back to reveal massive empty arena. Energetic synth-pop aesthetic throughout, cuts on beat." |
| hg-007 | Cosmetics product | 9:16, 6s | "Tabletop hero shot. Close-up of a frosted glass lipstick container on a marble surface. Soft pink and gold lighting. The lid pops off with a satisfying click, the lipstick slowly extends. Camera orbits halfway around. Particle sparkles drift across the frame. Aspirational beauty commercial tone." |
| hg-008 | 90 s short film (AI Director) | 21:9, 90s | "90-second cinematic short. [Soul ID: detective]. Opening: rainy noir alleyway, detective lights a cigarette, voiceover begins. Middle: flashback intercut — daytime cafe meeting with mystery client. Climax: chase through wet streets, jump cuts, motion blur. Ending: detective walks away into the rain, camera pulls back to high crane shot, title card fades in. Cold noir palette throughout with selective warm accents on key emotional beats." |

Note in the JSON for hg-001: short prompts beat long ones on Higgsfield DoP ("短 prompt 优于长 prompt。DoP 模板直接给运镜动词" — short prompt over long; give the camera verb first). `methodology/14-四大开源模型速查.md` illustrates the same with "Slow push in. [Soul ID: jenny] in leather jacket. Neon alley. Rain."

## Production workflows documented (methodology/)

**AI anime four-step + Higgsfield Elements** (`methodology/19-seedance-masterclass-round3.md`, source YouTube MGfcx_NXRww):
1. Black-and-white storyboard frames (layout control, Nano Banana).
2. Colourise for consistent palette.
3. (Optional) motion-annotation arrows drawn on the image (via Claude).
4. Generate video from image + Element references (Seedance).
- **Elements training:** upload ~20 reference images of a character (front/side/expressions) → a named Element → reference as `@Kai` without re-uploading; more stable than a single reference. **Every new look (scar, energy effect, costume) = a new Element**, not an edit of the old one.
- Seedance prompt skeleton, same opening for every clip: 1) style declaration ("90s anime style, bold ink outlines"), 2) first-frame note ("do not use the uploaded image as a literal first frame"), 3) character description, 4) voice style (same every time), 5) timeline ("0-4s: ..., 4-9s: ..."), 6) end with "no music".

**Omni Reference on Higgsfield** (`methodology/15-seedance-masterclass.md`): upload character sheet + location + second sheet + object + audio, reference with `@`:

```
@image1 character (young man in blue jacket) enters the restaurant.
@image2 character (woman in red dress) is already seated.
@image3 (fortune cookie) is placed on the table between them.
```

Audio + character three-in-one: generate 15 s of dialogue in Higgsfield Audio → upload two character images + the audio → write the lines in the prompt → Seedance lip-syncs.

**Start/end frames:** screenshot a good frame → use as the next clip's start frame ("the core method for long video"); first + last frame with the minimal prompt `Show me what happens in between. Use multiple camera angles.`

**Credit-saving ladder:** test prompts at **480p + 4s**, check quality at 720p, final at 1080p. Prompt limit noted: Seedance ≤4,000 chars (Higgsfield ≤3,000–3,500).

**Arena Zero case** (`methodology/20-realistic-character-consistency.md` §7, YouTube 036jyFZWppw): 4-person team, **~5,000 generations** for one full AI episode; Soul Cinema for images + Seedance 2.0 for video; "location scouting" by generating 60 apartment variants; deliberately symmetrical circular arena to ease multi-angle consistency; switched from photoreal to 2D anime in 3 prompts; planet-destruction VFX at zero budget.

**Kling masterclass** (`methodology/18-kling-masterclass.md`): Higgsfield "Angles 2.0" — upload a base image, "Generate from 12 best angles" for **2.4 credits**.

**CapCut/Dreamina note** (round3): "15 秒 = 1000 credits" on CapCut's Seedance (CapCut credits, not Higgsfield) — test at 5 s first.

## Lessons

- Keep one voice description and one style declaration identical across every clip of a series.
- New visual state → new Element/asset, never overwrite.
- Iterate cheap (480p/4 s) and only then render final resolution.
