# 2000's paparazzi

- **Site page:** https://higgsfield.ai/effects/examples/2000-s-paparazzi-exported
- **Preset id:** `731211fd-ee97-463d-b279-4ca3259a5d29` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `2000-s-paparazzi-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 249 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (retro/Y2K UGC)

## What it does

A retro VHS paparazzi clip — Y2K celebrity in graphic tee and low-rise jeans exits a luxury hotel through a golden revolving door, walks past flashing cameras into a black car.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2800 credit_units (~28 credits)
- 480p: 1200 credit_units (~12 credits), same for every aspect ratio
- 720p: 2800 credit_units (~28 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/5ec2d059-facf-45a5-968c-7fa45b090a8a.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/29b4657e-6b49-4719-8794-5f60338fc490.webp
- Full-res preview (mp4, 960x960): https://cdn.higgsfield.ai/viral_hub/3ccb29ab-5975-445f-84c0-e139f5f72a54.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/d6431acb-3cda-449a-b438-e0ea7d6941e0.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/29b4657e-6b49-4719-8794-5f60338fc490.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/cbcafcee-055d-4c9c-899c-85f923522a84.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_184531_16b125f4-1851-41ed-80e4-4680f5e935b5_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_184531_16b125f4-1851-41ed-80e4-4680f5e935b5_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/e52c8bf5-1446-46e5-85e1-53c6e4decc14.png) | 1:1 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_165411_221a664e-4634-495a-954b-5c55d2db5fe8_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_165411_221a664e-4634-495a-954b-5c55d2db5fe8_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/cc5ed8ad-46e9-4a8f-a9a7-159e64200e00.png) | 4:3 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_180605_efe7a1eb-f6aa-482d-8a0d-c8efd99ba829_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_180605_efe7a1eb-f6aa-482d-8a0d-c8efd99ba829_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/236e1182-9dfc-4acd-81f7-fa91a84fd1d7.png) | 3:4 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_165627_878edeaa-fbdf-4920-8589-db930bd22fdc_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_165627_878edeaa-fbdf-4920-8589-db930bd22fdc_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/609e69ec-e166-467c-a4d8-ff7bcb370a64.png) | 9:16 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_191509_7c3c62fb-db46-45e6-b856-720c4c9f44d1_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260805_191509_7c3c62fb-db46-45e6-b856-720c4c9f44d1_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/2631da0d-7ee5-4be6-b892-a10b1372cc8b.png) | 16:9 | 720p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/2000-s-paparazzi.md](../../../presets/viral/2000-s-paparazzi.md)

Source: https://higgsfield.ai/effects/examples/2000-s-paparazzi-exported (crawled page, extracted from embedded page data)
