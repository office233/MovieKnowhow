# Mighty fighter

- **Site page:** https://higgsfield.ai/effects/examples/mighty-fighter-exported
- **Preset id:** `ac033a3c-4a91-4340-b19f-c6df281c9e80` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `mighty-fighter-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 235 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** cinematic fantasy portrait

## What it does

Become a battle-worn knight in a misty field of red poppies. Melancholic and cinematic—perfect for fallen-hero portraits or dark fantasy storytelling.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3800 credit_units (~38 credits)
- 480p: 1800 credit_units (~18 credits), same for every aspect ratio
- 720p: 3800 credit_units (~38 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/e68f7c19-0247-4832-9c7f-98807635b6bd.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/df011157-4e01-416f-ab0f-2fce85b7fd3e.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/bade1cbf-ad2f-4eba-9d91-c5d8f182c696.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/b75c7185-4fd7-4002-a1fd-aa308e4d084d.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/df011157-4e01-416f-ab0f-2fce85b7fd3e.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/d289df9a-141b-470d-9e2f-5ccb4d96b575.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174408_f72b2552-6729-43c3-8b89-55780557f214_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174408_f72b2552-6729-43c3-8b89-55780557f214_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/24880433-d94a-4144-af01-fdd6b8769670.jpg) | 9:16 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174304_4b95dd26-7d53-4a67-a5d4-a59526a1e497_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174304_4b95dd26-7d53-4a67-a5d4-a59526a1e497_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/71a9e655-a651-4bb6-bf05-a0d6d075fb78.png) | 16:9 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174318_bca157e4-97fd-4192-b613-e77bf90297c6_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174318_bca157e4-97fd-4192-b613-e77bf90297c6_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/2beb5ee4-39f0-44fb-9249-18d0b8717340.png) | 1:1 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174312_bd64ce57-e086-456d-8cd4-21929e3236b2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_174312_bd64ce57-e086-456d-8cd4-21929e3236b2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/51751ca9-9fb5-4c79-880f-eafce1a65bd3.png) | 4:3 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_175749_bfc29153-6655-484a-81aa-057726033bed_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_175749_bfc29153-6655-484a-81aa-057726033bed_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/1039af88-e4e0-4fc9-8a2c-fe1dca85ff73.png) | 3:4 | 720p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/mighty-fighter.md](../../../presets/viral/mighty-fighter.md)

Source: https://higgsfield.ai/effects/examples/mighty-fighter-exported (crawled page, extracted from embedded page data)
