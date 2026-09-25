# Fairytale castle

- **Site page:** https://higgsfield.ai/effects/examples/fairytale-castle-exported
- **Preset id:** `6eab963f-5a31-4f3c-bb23-26ba1d86a49f` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `fairytale-castle-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 230 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** cinematic fantasy intro

## What it does

An empty field at dusk leads to a glowing castle, with a winding stream and fireworks overhead. Dreamlike and cinematic—built for fantasy intros, magical reveals, or storybook worlds.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 6750 credit_units (~67.5 credits)
- 480p: 4500 credit_units (~45 credits), same for every aspect ratio
- 720p: 6750 credit_units (~67.5 credits), same for every aspect ratio
- 1080p: 13500 credit_units (~135 credits), same for every aspect ratio
- 4k: 33000 credit_units (~330 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/1afef4f9-70ec-44ab-b8b3-8ba5c2c286fa.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/edf4cda5-ea89-43c0-a376-53f97d0905b8.webp
- Full-res preview (mp4, 720x1280): https://cdn.higgsfield.ai/viral_hub/2918e912-eb2a-4865-b658-511805fd9804.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/5f295e9f-a855-46fb-929b-de5e2894dc43.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/edf4cda5-ea89-43c0-a376-53f97d0905b8.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/88a46a6b-0590-452d-8d8c-56c2435736d6.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135833_365ddeb8-70af-4c00-9066-3ed1aadedb54_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135833_365ddeb8-70af-4c00-9066-3ed1aadedb54_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/7ade97f9-2cf1-4ba7-b30c-60f83c33ed78.png) | 4:3 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135811_14acfc78-a7a9-4904-b4f4-7735d02c50d2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135811_14acfc78-a7a9-4904-b4f4-7735d02c50d2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/2e2fb928-37aa-4f0c-a348-7eb5d381d678.png) | 4:3 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135818_d07796cb-4369-43d7-a877-880598a79fb4_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135818_d07796cb-4369-43d7-a877-880598a79fb4_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/23aebb14-f6ec-484f-b090-9868927bdf01.png) | 4:3 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135842_6dc9fa15-2821-49c5-9c3b-d3ea04c222d2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_135842_6dc9fa15-2821-49c5-9c3b-d3ea04c222d2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/49cb96b8-df26-4b67-a289-f39a344b42e7.png) | 4:3 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141231_822d5e2b-68c7-40f6-a343-d282a223e71f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141231_822d5e2b-68c7-40f6-a343-d282a223e71f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/dec276ff-1aae-4463-b14a-d67619294bfb.png) | 4:3 | 1080p | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/fairytale-castle.md](../../../presets/viral/fairytale-castle.md)

Source: https://higgsfield.ai/effects/examples/fairytale-castle-exported (crawled page, extracted from embedded page data)
