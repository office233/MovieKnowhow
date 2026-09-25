# Earth zoom

- **Site page:** https://higgsfield.ai/effects/examples/earth-zoom-exported
- **Preset id:** `1ac7759b-5b1a-4523-bd77-b6bb5d6df84e` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `earth-zoom-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 226 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (orbit-to-street camera move)

## What it does

The camera plunges from orbit — through clouds, past the city grid — and lands at street level in one unbroken move. Built for scale, transitions, and dramatic reveals.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3500 credit_units (~35 credits)
- 480p: 1500 credit_units (~15 credits), same for every aspect ratio
- 720p: 3500 credit_units (~35 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/d1b7d148-46a1-4e57-b808-4af2e8c823f1.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/821f48ad-f4c6-4313-9300-7dc4abf5ffc3.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/8ec68813-66ef-4f9c-8932-30f1dc9aee27.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/12f956de-ba22-4fea-ab50-de259e10abaa.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/821f48ad-f4c6-4313-9300-7dc4abf5ffc3.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/5d0f1528-0222-4ab4-a554-b6ccf71572ad.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141941_8b4950aa-cdd3-4484-bf0c-c50b2e34be3a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141941_8b4950aa-cdd3-4484-bf0c-c50b2e34be3a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/a79a42ef-a466-490d-b165-bcc9811c97b4_resize.jpg) | 9:16 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142024_56a0b549-4cae-4d3f-8fe3-f227a1db346a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142024_56a0b549-4cae-4d3f-8fe3-f227a1db346a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/b5e44844-0150-4df4-9685-e87b9e72a6cb_resize.jpg) | 16:9 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141956_bc15010f-b8e2-46a6-bc3c-4a9385b3f3c3_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_141956_bc15010f-b8e2-46a6-bc3c-4a9385b3f3c3_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/84563f75-5b25-4284-9e89-23fe5d6a454a_resize.jpg) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142018_eb87c7a4-0861-4405-9009-68b8ffac9cf1_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142018_eb87c7a4-0861-4405-9009-68b8ffac9cf1_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/5759902b-cffc-491c-aeed-9b6bdbafa251_resize.jpg) | 4:3 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142003_dcba22ff-b00e-4b2d-9658-b93434e125f3_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_142003_dcba22ff-b00e-4b2d-9658-b93434e125f3_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/40c792de-78e2-449f-986a-c0b8beb6234d_resize.jpg) | 1:1 | 720p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/earth-zoom.md](../../../presets/viral/earth-zoom.md)

Source: https://higgsfield.ai/effects/examples/earth-zoom-exported (crawled page, extracted from embedded page data)
