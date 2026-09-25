# Sticker peel

- **Site page:** https://higgsfield.ai/effects/examples/sticker-peel-exported
- **Preset id:** `33f1fe65-287a-4711-ac37-0b88d5a56708` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `sticker-peel-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 252 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (sticker peel)

## What it does

A giant hand reaches in and peels the figure off the wall like a sticker, leaving blank surface behind, then presses it back down. Tactile and graphic—perfect for transitions or reveals.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4500 credit_units (~45 credits)
- 480p: 3000 credit_units (~30 credits), same for every aspect ratio
- 720p: 4500 credit_units (~45 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio
- 4k: 22000 credit_units (~220 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/c560128d-9812-4211-8d96-c1c5ce909f09.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/12ace1c6-4ed6-4078-90e2-236ef37b932e.webp
- Full-res preview (mp4, 720x1280): https://cdn.higgsfield.ai/viral_hub/077e2d1d-9e7a-459f-be20-7b2da6cce4a1.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/9d62b9be-43da-4f5f-a38d-9b960f7e98c2.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/12ace1c6-4ed6-4078-90e2-236ef37b932e.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/5b1adb06-dcc0-449b-aab7-8562e3e7ed0b.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_162916_9289befd-3fce-4892-aefa-4523435d61ac_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_162916_9289befd-3fce-4892-aefa-4523435d61ac_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ef9e01ce-f19b-4545-9c08-4548666e88ad.png) | 1:1 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_171145_13f95028-f114-4cbb-bf81-034b44cd23e5_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_171145_13f95028-f114-4cbb-bf81-034b44cd23e5_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ff12e5c7-d958-4b65-bbe9-f52861f1c7fd.png) | 9:16 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_162745_bf693e6d-0800-43a0-988d-f00194dce3a4_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_162745_bf693e6d-0800-43a0-988d-f00194dce3a4_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/23add661-5840-4636-af20-c167408ba082.png) | 4:3 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_163505_732712fe-2087-4e19-a403-3ddc3b9d000b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_163505_732712fe-2087-4e19-a403-3ddc3b9d000b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/936337c3-3fbd-415d-a191-f7df9b11679f.png) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_165921_52c2ecfc-c86e-491a-90db-b4c12f323dfe_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_165921_52c2ecfc-c86e-491a-90db-b4c12f323dfe_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/6d6db934-f2ac-4f2c-9417-6a72772875ff.png) | 16:9 | 720p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/sticker-peel.md](../../../presets/viral/sticker-peel.md)

Source: https://higgsfield.ai/effects/examples/sticker-peel-exported (crawled page, extracted from embedded page data)
