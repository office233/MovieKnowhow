# Casual monster slayer

- **Site page:** https://higgsfield.ai/effects/examples/casual-monster-slayer-seedance-2
- **Preset id:** `57757dbc-7669-4495-b158-3f0104c6c1c1` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `casual-monster-slayer-seedance-2` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** superhero · **priority:** 256 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`). Slug suffix suggests **Seedance 2**.
- **Use-case:** action / transformation

## What it does

You transform into a cybernetic battle suit as a flaming giant crashes into the laundromat, then snap back to normal. Perfect for action edits, comic twists, and bold transformations.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 5400 credit_units (~54 credits)
- 480p: 3600 credit_units (~36 credits), same for every aspect ratio
- 720p: 5400 credit_units (~54 credits), same for every aspect ratio
- 1080p: 10800 credit_units (~108 credits), same for every aspect ratio
- 4k: 26400 credit_units (~264 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/13be43ee-5c17-456f-a08c-1e2d1a13c718.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/89d8afaa-8ce3-4ec6-88ff-82939579f21c.webp
- Full-res preview (mp4, 1280x720): https://cdn.higgsfield.ai/viral_hub_preset/62ba863a-4a1e-4067-b099-f25dd7bc9c41.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/0bc8e04c-211c-4c43-aa7d-81c01efde639.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/89d8afaa-8ce3-4ec6-88ff-82939579f21c.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/5a192d36-653b-4b04-8b88-c364d4164d22.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_180531_6730f4f2-c51c-4b96-a011-1a8d3d58b996_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_180531_6730f4f2-c51c-4b96-a011-1a8d3d58b996_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/7f1dd382-a584-4cc1-a6ff-0f81673955f8.png) | 9:16 | 1080p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175405_5b3f1764-87e5-4dec-bb4c-6041bad27f5c_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175405_5b3f1764-87e5-4dec-bb4c-6041bad27f5c_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/b78025cf-fe22-4553-a814-c8b578d74dad.png) | 4:3 | 4k | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_180542_5a55ec64-cdf0-4003-9c6c-f2a648b45fde_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_180542_5a55ec64-cdf0-4003-9c6c-f2a648b45fde_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/5e9da445-499e-4e04-9dc5-79e524b9c404.png) | 3:4 | 1080p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175355_ace38aa6-8a15-4722-a7fd-146f86fdd904_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175355_ace38aa6-8a15-4722-a7fd-146f86fdd904_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/6cf57de3-7328-4877-b062-4d3e30cd8117.png) | 16:9 | 4k | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175415_5b8cbe93-5918-4edd-9ac7-d40e217ae5f1_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_175415_5b8cbe93-5918-4edd-9ac7-d40e217ae5f1_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/1bbbee27-bd8a-4a68-871c-cfccd7571169.png) | 1:1 | 4k | 12 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/casual-monster-slayer.md](../../../presets/viral/casual-monster-slayer.md)

Source: https://higgsfield.ai/effects/examples/casual-monster-slayer-seedance-2 (crawled page, extracted from embedded page data)
