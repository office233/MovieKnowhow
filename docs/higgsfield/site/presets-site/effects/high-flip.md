# High flip

- **Site page:** https://higgsfield.ai/effects/examples/high-flip
- **Preset id:** `93a606f8-87cb-4fb0-98a8-694d08f9b319` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `high-flip` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 19 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 9 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (start/end frame scene switch)

## What it does

The camera rises above the subject and flips overhead, seamlessly revealing a new character and location on the other side. Built for cinematic scene switches, dramatic character reveals, and fluid music video transitions.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Start frame | image | 1 | 1 | yes | input_images, input_images |
| Last frame | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4050 credit_units (~40.5 credits)
- 480p: 2700 credit_units (~27 credits), same for every aspect ratio
- 720p: 4050 credit_units (~40.5 credits), same for every aspect ratio
- 1080p: 8100 credit_units (~81 credits), same for every aspect ratio
- 4k: 19800 credit_units (~198 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/001156a7-cfdb-4e16-8f13-68c246ddc06c.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/95cd0d73-4f3c-40d1-ac0b-c8668a99440b.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/1ed1b8b7-8c12-4606-a315-e28dade312f0.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/f364160d-cccf-4456-9742-48d308a6000d.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/66cf899d-b278-48c5-9600-67fbbf1cab19.mp4

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_172558_cff93d0f-118e-418e-b2de-0d43b0f40c21.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_172558_cff93d0f-118e-418e-b2de-0d43b0f40c21_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/3a45f501-a0c2-430e-82bd-11983c8bf564.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/f604564f-dea7-43f6-9e44-401fed9d0ce7.png) | 16:9 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_201000_9e652097-ea52-48f1-bb0e-89f17e9885cd.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_201000_9e652097-ea52-48f1-bb0e-89f17e9885cd_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/4ea728bf-20ea-42d2-b900-b323634a328e.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/75d7a11c-994b-4e29-8c1c-733caea55667.png) | 9:16 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_175008_7fa7bf39-9c29-42c8-bfa7-b27ea8c68c22.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_175008_7fa7bf39-9c29-42c8-bfa7-b27ea8c68c22_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/86960bde-9525-49a0-be3f-d13a9c77e45d.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/91e3006d-6c7f-4468-adfe-18b04a311c3d.png) | 16:9 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_114100_4c00de00-7665-42d2-aa9d-723160dc4bf3.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_114100_4c00de00-7665-42d2-aa9d-723160dc4bf3_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/64e4b402-ad26-4b6e-a876-cf1cd3297866.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/a23129bc-0739-47eb-b153-9b47cb0f3299.png) | 3:4 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_223831_3017f3ae-9e68-44f9-b8d6-72ac983de3a1.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_223831_3017f3ae-9e68-44f9-b8d6-72ac983de3a1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/2c48021e-7151-422a-a986-23727e934f20.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/a2a9ce1d-9ef8-414c-90c0-bef17191fa7a.png) | 3:4 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260831_205526_26dc901f-4000-4880-b26c-9f48c2ced3d0.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260831_205526_26dc901f-4000-4880-b26c-9f48c2ced3d0_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/43407890-869c-4e90-892f-2d5e955011bf.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/a872417e-639a-4469-a694-4bffb5ffd0f7.png) | 16:9 | 1080p | 9 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/high-flip.md](../../../presets/viral/high-flip.md)

Source: https://higgsfield.ai/effects/examples/high-flip (crawled page, extracted from embedded page data)
