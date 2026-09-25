# Selfie twin

- **Site page:** https://higgsfield.ai/effects/examples/selfie-twin-exported
- **Preset id:** `f9547ac5-21a8-4eb0-9312-12b62aec529c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `selfie-twin-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 258 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** UGC selfie (twin/humor)

## What it does

A second, identical version walks in, sits down, takes a selfie, and vanishes. Uncanny and playful—perfect for transitions or humor.

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/f0eee690-e157-4188-bcaa-5670edaae510.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/31b82f93-8464-499d-9806-88a18e8a78f8.webp
- Full-res preview (mp4, 1280x1708): https://cdn.higgsfield.ai/viral_hub/f6695ffd-010d-4700-b959-c0aa8acb31b8.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/1c46ead2-cc4f-499c-8cc3-f21043dbfb80.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/31b82f93-8464-499d-9806-88a18e8a78f8.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/1a2354a7-3f80-47ea-81de-b5e2b53bbb6d.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150457_3f440343-d3fc-4369-999d-b6301d44a9d8_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150457_3f440343-d3fc-4369-999d-b6301d44a9d8_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/dbfa3345-c475-4d96-9e7d-b7251a9c4c19.png) | 9:16 | 4k | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150551_8f08c96d-c8ca-4641-a8a5-e0b107ad1d8b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150551_8f08c96d-c8ca-4641-a8a5-e0b107ad1d8b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/f5d8785e-2aff-4ee9-90a8-106ba2385bd9.png) | 1:1 | 4k | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150428_7d3d492f-32d1-4aed-a653-038b499d135b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150428_7d3d492f-32d1-4aed-a653-038b499d135b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/eb0fbbca-2567-4406-a2fd-d5429af5ebe6_resize.jpg) | 16:9 | 4k | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150445_5b20ac3c-2e10-4024-9290-d7f297bcf02f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150445_5b20ac3c-2e10-4024-9290-d7f297bcf02f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/66ffd7e6-3701-4886-baf9-2b43a7396f6e.png) | 4:3 | 4k | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150600_f818d57b-619a-4a11-8385-d16c9f14ec62_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150600_f818d57b-619a-4a11-8385-d16c9f14ec62_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/995c64de-b396-4c05-b8e6-db1e8cac4603_resize.jpg) | 3:4 | 4k | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/selfie-twin.md](../../../presets/viral/selfie-twin.md)

Source: https://higgsfield.ai/effects/examples/selfie-twin-exported (crawled page, extracted from embedded page data)
