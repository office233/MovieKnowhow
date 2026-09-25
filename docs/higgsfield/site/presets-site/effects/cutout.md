# Cutout

- **Site page:** https://higgsfield.ai/effects/examples/cutout
- **Preset id:** `dd509a98-fffe-4b30-915b-3fd93b31bbc9` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `cutout` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 3 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (fashion)

## What it does

The surroundings break apart into floating cutout layers, revealing a clean white void around the subject before snapping back into place. Built for surreal fashion edits, mixed-media visuals, and playful architectural transitions.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3600 credit_units (~36 credits)
- 480p: 2400 credit_units (~24 credits), same for every aspect ratio
- 720p: 3600 credit_units (~36 credits), same for every aspect ratio
- 1080p: 7200 credit_units (~72 credits), same for every aspect ratio
- 4k: 17600 credit_units (~176 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/a64711ac-93b8-46ee-a9ce-37ee5c18e148.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/b5c90864-c3c5-4b14-87a0-3739250fd00b.webp
- Full-res preview (mp4, 1280x960): https://cdn.higgsfield.ai/viral_hub/50e19d6b-c8ff-48e5-8b13-afed804f0008.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/c6447d94-7c69-4bc5-81cf-7dfeea1beefe.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/ba9aed65-528d-4ed3-a193-0a3ca9b30efa.mp4

## Example generations (9 with settings; total on page: 9)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260820_154224_9ebf4f75-ce9c-483b-b19f-8d5dd4f1f153.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260820_154224_9ebf4f75-ce9c-483b-b19f-8d5dd4f1f153_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/a1d76e3e-288d-45a8-9c88-432b540e626d.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212525_b89e29c2-c338-44bc-8dc4-d33eab935810.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212525_b89e29c2-c338-44bc-8dc4-d33eab935810_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/fb208ed2-7d47-45d3-b624-21996b802480.png) | 1:1 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_214628_ab2054ab-377e-4339-93fe-143b472a7bba.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_214628_ab2054ab-377e-4339-93fe-143b472a7bba_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/444b313c-6fab-47f3-9e10-516909f3a8fb.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_210705_919fffed-f103-4003-83c7-16758430b8d8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260828_210705_919fffed-f103-4003-83c7-16758430b8d8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/06a5c384-1d2b-4b58-9200-000f15e4eebd.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_213753_8bf2b342-6aae-4a7a-944f-fc0a5a3f0943.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_213753_8bf2b342-6aae-4a7a-944f-fc0a5a3f0943_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/23140ed1-d1c0-4e99-8ce7-0aaabbc0cb3f.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212530_60409df7-e7f1-4d5a-b9d9-d1f11f0f79f5.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212530_60409df7-e7f1-4d5a-b9d9-d1f11f0f79f5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/9069c3d5-6bed-4381-8b74-42c971a1309f.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212546_3a8b2d7c-fc91-4e81-b8ec-3fd84a8facc7.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260827_212546_3a8b2d7c-fc91-4e81-b8ec-3fd84a8facc7_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/0a5b812a-818d-41c2-b819-0d8262630878.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260820_152811_76ae307d-674f-4861-835e-4dc3604dd77b.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260820_152811_76ae307d-674f-4861-835e-4dc3604dd77b_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/ed211ddb-a2eb-45d7-88c3-31a77f178640.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_175737_d435e4dc-b87d-4c00-8fe2-caf7f982ad0e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_175737_d435e4dc-b87d-4c00-8fe2-caf7f982ad0e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/7733e505-d92b-4166-95a1-53791b2e2baf.png) | 4:3 | 1080p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/cutout.md](../../../presets/viral/cutout.md)

Source: https://higgsfield.ai/effects/examples/cutout (crawled page, extracted from embedded page data)
