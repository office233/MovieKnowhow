# Pigeons

- **Site page:** https://higgsfield.ai/effects/examples/pigeons
- **Preset id:** `e0da05ed-12ae-485b-93ac-939f885f314d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `pigeons` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** New · **priority:** 238 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (absurd hook)

## What it does

A rider glides through the city on pigeons like roller skates, hovering above the street. Absurd and hilarious — a trend-ready visual built to stop the scroll.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images, input_images |

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

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/95e80ebb-98d7-41d6-ad33-e81d405d9400.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/12f59342-3468-4dbf-8d4c-e6c28cedba35.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/b686dc11-a5b4-4f50-898e-99fd132976ae.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/f9ef2f19-2774-4dd8-aef3-b3ac66332d12.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/12f59342-3468-4dbf-8d4c-e6c28cedba35.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/4ca67863-e21e-476a-8277-c1a718d76c1e.mp4

## Example generations (19 with settings; total on page: 19)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_161038_812526da-eb37-4b73-857b-576267ab9638_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_161038_812526da-eb37-4b73-857b-576267ab9638_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/2e7ec527-6b14-4045-ae33-babde08dd61f.png) | 4:3 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_161721_f43fa7c2-24e7-4f91-9a1b-57c193b220f4_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_161721_f43fa7c2-24e7-4f91-9a1b-57c193b220f4_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/1ca9b771-dee0-4dfb-acad-0b41d123ee87.png) | 16:9 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_164937_18e8990a-2c18-4f46-aaf9-7e71f10923ad_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_164937_18e8990a-2c18-4f46-aaf9-7e71f10923ad_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/5c2d1ef6-35ab-4e77-978e-d66c53efbd6b.png) | 4:3 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_150559_71b30227-21a9-4df6-b135-e815acde8b8b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_150559_71b30227-21a9-4df6-b135-e815acde8b8b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/aebd867d-8e9e-4b7e-98b5-24f4fee53d0f.png) | 3:4 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_171531_dad75ded-be82-4fb6-b242-a4bd21573fab_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_171531_dad75ded-be82-4fb6-b242-a4bd21573fab_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/c9c873e0-f318-417f-915c-c3eefd438f36.png) | 1:1 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_161742_0d5e3dd9-30b8-4725-ad1f-90916d989a81_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_161742_0d5e3dd9-30b8-4725-ad1f-90916d989a81_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/e6451b8c-cd1d-48b7-a45b-61c5c77df2a8.jpg) | 3:4 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_123602_0b4f8eb8-88a6-4236-ad16-e74848567375_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_123602_0b4f8eb8-88a6-4236-ad16-e74848567375_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/4ff50b32-ebf7-4437-a3ab-d16bb4fb6502.png) | 16:9 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_175801_5ce002cd-b96d-43e1-9ad0-5c177ff23e44_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_175801_5ce002cd-b96d-43e1-9ad0-5c177ff23e44_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/fef74277-ddcf-4278-a7e8-c36cea36eaaf.png) | 16:9 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_163406_d5c99652-d2a1-48a0-bec1-9e614f8ce4de_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_163406_d5c99652-d2a1-48a0-bec1-9e614f8ce4de_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/22597f38-f200-4275-8cc9-4665743fa904.png) | 9:16 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_162433_268db867-c4f1-46ed-beb6-93d6c504055f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_162433_268db867-c4f1-46ed-beb6-93d6c504055f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/6559e915-9161-48d0-8ef9-3684faee0310.png) | 9:16 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_123518_7705ad72-15f1-4e5e-ae5e-45b9c66744a2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_123518_7705ad72-15f1-4e5e-ae5e-45b9c66744a2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/5497ad2f-ebce-435e-8796-9be6f5d47ec2.png) | 4:3 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_130629_61c67eaf-b2cc-485a-91ce-abcdd11cd20d_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_130629_61c67eaf-b2cc-485a-91ce-abcdd11cd20d_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/28c8396e-920b-4d91-9d80-819d40bea4d0.png) | 9:16 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_115638_3e3488bb-e146-4052-9a42-2180b1c743ac_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_115638_3e3488bb-e146-4052-9a42-2180b1c743ac_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/ce44add4-9103-44d4-9fe7-1641f78bbc7e.png) | 1:1 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_175804_df0676c9-1a06-4817-a2f1-bb7297050c25_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_175804_df0676c9-1a06-4817-a2f1-bb7297050c25_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/fef74277-ddcf-4278-a7e8-c36cea36eaaf.png) | 16:9 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_135645_99439828-0c61-4035-9750-7845a9aece1a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_135645_99439828-0c61-4035-9750-7845a9aece1a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/3ea5f11f-8244-411b-b0b8-af8dc8411c4b.png) | 3:4 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_173308_917c4b59-8c42-4815-a04e-599c8fccf490_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_173308_917c4b59-8c42-4815-a04e-599c8fccf490_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/82a03237-9973-4620-bbcf-2cc16ba62e50.png) | 3:4 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_140348_07047633-acfd-4f82-9460-a6eabc777809_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_140348_07047633-acfd-4f82-9460-a6eabc777809_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/36e10cf2-3eb6-43ea-b8a0-c0da98b6b479_resize.jpg) | 1:1 | 720p | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_180920_bb90a3b2-cb49-4d73-b7ac-10bd6acd5340_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_180920_bb90a3b2-cb49-4d73-b7ac-10bd6acd5340_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/92b79b9e-2286-4d94-8ecb-375a509fa1f8.png) | 4:3 | 4k | 8 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_162150_bec1c5c1-272f-4d7e-afa2-3ae3ff6c20ba_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_162150_bec1c5c1-272f-4d7e-afa2-3ae3ff6c20ba_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/c3c25dbb-7d25-4bec-874a-dab5cebbd128.png) | 16:9 | 720p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/pigeons.md](../../../presets/viral/pigeons.md)

Source: https://higgsfield.ai/effects/examples/pigeons (crawled page, extracted from embedded page data)
