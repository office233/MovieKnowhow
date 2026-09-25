# Infinite clones

- **Site page:** https://higgsfield.ai/effects/examples/infinite-clones
- **Preset id:** `6821208a-3078-4431-92df-8f2e46a833f4` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `infinite-clones` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 12 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (comedy clones)

## What it does

A static wide-angle shot where a person and their identical clones continuously get out of a small car and run away in all directions. Built for surreal effects, comedy, and music videos.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4550 credit_units (~45.5 credits)
- 480p: 1750 credit_units (~17.5 credits), same for every aspect ratio
- 720p: 4550 credit_units (~45.5 credits), same for every aspect ratio
- 1080p: 6300 credit_units (~63 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/04df3d28-67de-464a-9426-55568d4ee55c.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/a54ccc43-8866-4b56-89ba-35f199ab977f.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/95872c93-9e56-4109-92d3-f758bb617aa2.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/d119c511-6148-4c33-be30-51194f20af25.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/c277929e-ae59-4b55-9793-3ff44ffbc0fc.mp4

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_220417_e8a3b836-8dfb-4c7c-b265-4ecb3ff12e01.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_220417_e8a3b836-8dfb-4c7c-b265-4ecb3ff12e01_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/f9e5266b-4f90-4b31-a723-dad3b2062c0f.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_184540_c85c86ed-0854-449f-85a6-2c79fe8cc022.mp4) · [poster](https://cdn.higgsfield.ai/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_184540_c85c86ed-0854-449f-85a6-2c79fe8cc022_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/06634015-5aac-45ae-8f85-f93b91fd1119.png) | 21:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_195258_aef9a658-a752-4963-87b2-8177503ecfce.mp4) · [poster](https://cdn.higgsfield.ai/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_195258_aef9a658-a752-4963-87b2-8177503ecfce_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/a557f082-3c09-4d97-a06b-bde9acb8272f.png) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_194342_6a096598-84e1-48a6-9555-43dc4ca6d780.mp4) · [poster](https://cdn.higgsfield.ai/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_194342_6a096598-84e1-48a6-9555-43dc4ca6d780_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/b3790895-419d-4294-bdf6-9e9f9194cf91.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_192253_1a6534f5-b923-4c63-bd5a-6cd9b07e2bd0.mp4) · [poster](https://cdn.higgsfield.ai/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_192253_1a6534f5-b923-4c63-bd5a-6cd9b07e2bd0_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/79b0a94a-6203-4242-b35e-eb76ddbce634.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_175225_04b6d5fd-4c24-4609-b75b-cefb6246c363.mp4) · [poster](https://cdn.higgsfield.ai/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/hf_20260829_175225_04b6d5fd-4c24-4609-b75b-cefb6246c363_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HoZBgQWe2UbXvMOxCeqiw0jqhA/1f77b33e-9239-4e59-bb02-8c5e35a90f1e.png) | 9:16 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/infinite-clones.md](../../../presets/viral/infinite-clones.md)

Source: https://higgsfield.ai/effects/examples/infinite-clones (crawled page, extracted from embedded page data)
