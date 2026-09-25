# higgsfield-skills (Pixelab) — 15 genre skills with model routing and an opt-in MCP generation flow

- Upstream: <https://github.com/pixelab-ch/higgsfield-skills> (commit `2f6aa10`; README install URL says `higgsfield-ai/higgsfield-skills`)
- Local copy: [`../opensource/higgsfield-skills/`](../opensource/higgsfield-skills/)
- License: MIT © 2026 Higgsfield Skills contributors
- Type: **ad / clip prompt tool** (Claude Agent Skills; generation through the Higgsfield MCP on confirmation)

## What it is

"15 Claude Agent Skills that turn Claude into an expert prompt engineer for AI image and video generation on the Higgsfield platform. Each skill [...] routes it to the most appropriate Higgsfield model, and — on explicit user confirmation — can submit the generation directly through the Higgsfield MCP server." Each skill has `SKILL.md` + `references/` (hooks, craft, examples, model-specs). No finished film ships.

## Model routing table (verbatim, README.md)

| Skill | Primary model | Fallback model |
|-------|--------------|----------------|
| 01-cinematic | `cinematic_studio_3_0` | `veo3_1` |
| 02-3d-cgi | `seedance_2_0` | `wan2_7` |
| 03-cartoon | `wan2_7` | `seedance_2_0` |
| 04-comic-to-video | `wan2_6` | `seedance_2_0` (I2V) |
| 05-fight-scenes | `cinematic_studio_3_0` | `kling3_0` |
| 06-motion-design-ad | `marketing_studio_video` | `seedance_2_0` |
| 07-ecommerce-ad | `marketing_studio_video` | `seedance_2_0` (+ `ms_image` for stills) |
| 08-anime-action | `wan2_7` | `wan2_6` (I2V) |
| 09-product-360 | `seedance_2_0` | `cinematic_studio_3_0` (I2V) |
| 10-music-video | `veo3_1` | `veo3_1_lite` (audio) |
| 11-social-hook | `kling3_0` | `grok_video` |
| 12-brand-story | `cinematic_studio_3_0` | `veo3_1` |
| 13-fashion-lookbook | `cinematic_studio_video_v2` | `seedance_2_0` |
| 14-food-beverage | `seedance_2_0` | `marketing_studio_video` |
| 15-real-estate | `cinematic_studio_3_0` | `veo3_1` |

## The canonical generation flow (`shared/generation-flow.md`)

```
[Step 1] Resolve model
    └─> [Step 2] Build prompt + assemble parameters
            └─> [Step 2b] (conditional) media_upload → media_confirm → add to input_files
                    └─> [Step 3] Confirmation gate ← REQUIRED — wait for explicit YES
                            └─> [Step 4] generate_image / generate_video → job_id
                                    └─> [Step 5] Poll job_status (backoff 30-60s, NEVER re-generate)
                                            └─> [Step 6] job_display → present result + URL
```

- Always call `higgsfield:models_explore` for the live schema: "never assume values from training knowledge".
- `media_upload` → `media_confirm` "are an atomic pair [...] Never pass a `pending_id` directly to `input_files`." Roles: `image`, `start_image`, `end_image`, `video`, `audio`.
- Confirmation panel = model + rationale, full prompt, key params, media inputs, `higgsfield:balance`, `show_plans_and_credits`.
- Poll with backoff; re-calling generate "submits a NEW generation job and charges credits again".
- Output constraint: "Video output is up to **1080p**. There is no 4K video output [...] The `4k` value that appears in some model parameter enums (e.g. `kling3_0` mode) is a generation-pipeline setting, not an output-resolution guarantee."

## Multi-shot brand film template (verbatim, `skills/12-brand-story/references/examples.md`)

```
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

Worked Example 1 ("From Kitchen Table to Market Leader", `cinematic_studio_3_0`, 16:9 or 9:16, 15 s full arc / 8 s hook): opens on hands typing, cuts to the founder's frustrated face with her own voice-over ("I kept losing client data. Everything I did felt broken."), co-founder coffee-shop recognition, midnight montage, first skeptical customer, final office smile with no voice-over; "Music: Builds subtly from sparse to present, never overwhelming dialogue."; "Text overlay: Product name and tagline appear at very end, understated."

## Music-video strategy (`skills/10-music-video/references/beat-sync.md`)

"veo3_1 generates clips of 4, 6, or 8 seconds. A full music video requires multiple segments: 1. Map the song structure [...] 2. Assign clips per section: A 30-second chorus = 3–4 clips of 6–8 s each. 3. Maintain visual continuity: Use consistent color palette, lighting style, and character description across clips in the same section. 4. Vary within sections [...] 5. Credit planning: Each clip is a separate generation." Philosophy: "Every beat is an opportunity for visual change." "The drop is sacred."

## Costs

Not stated as numbers; credit cost/balance are always surfaced live at the confirmation gate.

## Lessons

- Route by genre to a primary/fallback model and verify schema live every time.
- Never auto-generate; confirmation with cost and balance is mandatory.
- Longer narratives = multiple clips with shared palette/lighting/character description, assembled externally.
