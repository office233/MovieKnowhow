# Orbit 360

- **Site page:** https://higgsfield.ai/effects/examples/orbit-360-exported
- **Preset id:** `0d12822c-e095-43ec-a335-b4d335a897b3` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `orbit-360-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 269 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 9 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** camera move (360 orbit)

## What it does

The camera circles around you in a smooth 360° motion, turning any photo into a cinematic video. Perfect for bold reveals, dynamic edits, and stylish transitions.

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/4b866a81-e773-4be5-b041-9dcad102e9b9.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/fcb93aa6-e953-4b3c-8f22-14dbd8397dd2.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/ccc18ea3-be25-4a8f-b5fa-e4dac520941b.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/fe66fce2-d25e-4bdb-a3b3-c51b67e768a2.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/fcb93aa6-e953-4b3c-8f22-14dbd8397dd2.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/39a5fdd2-ecc5-4ffd-a120-80dde6fa3bf1.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_193152_667a3fa2-59f0-436d-8f27-2ead93eb938f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_193152_667a3fa2-59f0-436d-8f27-2ead93eb938f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/45d9fea2-d5d6-4657-8139-3b53c1438328_resize.jpg) | 16:9 | 4k | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194438_a447f711-474a-458f-a58f-bec22bc0fbb2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194438_a447f711-474a-458f-a58f-bec22bc0fbb2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/59c1a9ba-98b7-4e29-89f8-04655ef94317_resize.jpg) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194517_177c8fe8-c49a-4fde-9009-4d85781ad187_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194517_177c8fe8-c49a-4fde-9009-4d85781ad187_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/72ac0caf-9a78-42a6-bf99-a0903ba0010a.png) | 1:1 | 1080p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_195009_c55220d6-4de2-4d35-8026-4fdbe0fcbb68_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_195009_c55220d6-4de2-4d35-8026-4fdbe0fcbb68_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/cf76f63e-e714-4b68-b28e-ea6e5ccc8442.png) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194423_ed171342-b5db-43d6-9c15-8a967d9a9ced_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_194423_ed171342-b5db-43d6-9c15-8a967d9a9ced_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/cca915ae-5082-4829-8952-e2aecbb89a8d.png) | 3:4 | 1080p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/orbit-360.md](../../../presets/viral/orbit-360.md)

Source: https://higgsfield.ai/effects/examples/orbit-360-exported (crawled page, extracted from embedded page data)
