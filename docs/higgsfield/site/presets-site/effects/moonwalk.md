# Moonwalk

- **Site page:** https://higgsfield.ai/effects/examples/moonwalk-exported
- **Preset id:** `7e2ea896-2c5b-42d8-9992-95ae24cae5cc` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `moonwalk-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 245 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (cosmic)

## What it does

Journey across the Moon, Sun, and Earth as a crowned cosmic wanderer. Whimsical and surreal—perfect for dreamy, viral-ready edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 5550 credit_units (~55.5 credits)
- 480p: 2550 credit_units (~25.5 credits), same for every aspect ratio
- 720p: 5550 credit_units (~55.5 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/f67251d5-9830-4435-9feb-aa3b54515f30.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/910a617a-3448-4b37-97fa-1c3498942784.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/f1470fa6-7354-4c36-b6e1-8b302997a2a7.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/f0308f8d-a7c9-4c14-be09-cdc5f829383f.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/910a617a-3448-4b37-97fa-1c3498942784.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/438183ee-6e6c-4f09-904c-4882dd007635.mp4

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_175102_000c66fe-d4a8-46e9-b52d-2a0943fbd52b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_175102_000c66fe-d4a8-46e9-b52d-2a0943fbd52b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/7c6eaa4f-df16-4607-9dea-13c4e5da1d04.jpg) | 4:3 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_145947_06b63f3d-8d91-4895-a49b-e7e23e9b0a50_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_145947_06b63f3d-8d91-4895-a49b-e7e23e9b0a50_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/9c5e5a17-d68f-4024-aeae-ace17c135159.png) | 4:3 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_141120_7131f4b1-af17-46d0-b64c-b44e541b1662_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_141120_7131f4b1-af17-46d0-b64c-b44e541b1662_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/3dba88af-2b36-42f6-9c65-a48d2dde51a5.png) | 16:9 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_174931_f9d1e195-953e-4a01-b091-12fe6d53e402_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_174931_f9d1e195-953e-4a01-b091-12fe6d53e402_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/c4857f9e-74b2-4193-9acd-c3c7ddbb357c.jpg) | 9:16 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_133900_f46c4b4d-b2b8-4be8-82d0-b0f6e8970a14_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_133900_f46c4b4d-b2b8-4be8-82d0-b0f6e8970a14_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/acc82034-cf9b-4f3c-b2fd-d5174a9428b0.png) | 3:4 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_133916_2e453369-649c-4309-8dac-fa6e36de93d7_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_133916_2e453369-649c-4309-8dac-fa6e36de93d7_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ce55cd33-9482-4660-b9c0-03318533da2b.png) | 1:1 | 720p | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/moonwalk.md](../../../presets/viral/moonwalk.md)

Source: https://higgsfield.ai/effects/examples/moonwalk-exported (crawled page, extracted from embedded page data)
