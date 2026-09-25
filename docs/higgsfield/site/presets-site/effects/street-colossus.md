# Street colossus

- **Site page:** https://higgsfield.ai/effects/examples/street-colossus
- **Preset id:** `c277871a-938b-4c09-b825-41c217e7f727` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `street-colossus` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 16 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (giant scale)

## What it does

A cinematic scale-shifting effect that transforms you into a towering giant seamlessly integrated into a sprawling cityscape. Built for surreal urban edits, colossal creature aesthetics storytelling, and epic visual impact.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 6500 credit_units (~65 credits)
- 480p: 2500 credit_units (~25 credits), same for every aspect ratio
- 720p: 6500 credit_units (~65 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/e0278141-12c9-4139-91eb-b4294d833ed9.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/5e67ff0a-60f7-4c0a-8ace-18c9bf3e5426.webp
- Full-res preview (mp4, 720x1280): https://cdn.higgsfield.ai/viral_hub/bf728e55-564f-4bcf-8e87-9596092bc9de.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/7c673e49-f32d-4863-9aa3-959217787029.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/c7d07c5e-e8b1-4d14-9e42-99e3a39793f4.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_174720_c0965805-f17c-4302-a962-fe5984bc6e54.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_174720_c0965805-f17c-4302-a962-fe5984bc6e54_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/624cc6df-3aa6-4bf9-b081-f876d24141b0.png) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_142012_8850a8ef-3e23-4e8c-9bd0-518e51e6b0a6.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_142012_8850a8ef-3e23-4e8c-9bd0-518e51e6b0a6_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/dde12b25-5716-40ba-9fdb-4a4331c102d2.png) | 16:9 | 720p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_141859_e0a39fb0-5308-4b81-a65f-121c002ebc3d.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_141859_e0a39fb0-5308-4b81-a65f-121c002ebc3d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/b6295e92-989c-4151-a0eb-47ac0fcc3805.png) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_142023_493c21c5-536b-46d1-9304-27f0ad90e085.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_142023_493c21c5-536b-46d1-9304-27f0ad90e085_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/0577ffb3-6a3d-493d-a08e-171524e298e9.png) | 1:1 | 720p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_143023_28b7c9f5-9ba2-4bfa-affc-cb2616885858.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_143023_28b7c9f5-9ba2-4bfa-affc-cb2616885858_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/038836a9-baa6-4d26-879f-f1e6d0adab6f.png) | 9:16 | 720p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/street-colossus.md](../../../presets/viral/street-colossus.md)

Source: https://higgsfield.ai/effects/examples/street-colossus (crawled page, extracted from embedded page data)
