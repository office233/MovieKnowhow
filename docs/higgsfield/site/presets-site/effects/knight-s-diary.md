# Knight's diary

- **Site page:** https://higgsfield.ai/effects/examples/knight-s-diary
- **Preset id:** `18c71d5b-f702-47fd-99c8-ce8392265c70` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `knight-s-diary` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 246 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** cinematic fantasy portrait

## What it does

An off-duty knight lounges above the Alps with a diary and a cat. Epic and cinematic — perfect for fantasy portraits and character reveals.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/eefdd4a1-d9d6-484a-b257-2bb5ccea9a3d.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/4f4a4bc6-c218-49e0-81a7-767ee5b7e0c5.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/bb9d79cb-a80c-4386-8fdd-1acdb0f65b1e.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/0c793289-cc3c-4611-ae53-aa5a303f18a5.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/4f4a4bc6-c218-49e0-81a7-767ee5b7e0c5.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/4b657b97-97c6-4b9b-855e-0b0a0c962cb1.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150839_9cfd7dad-3ead-482c-b207-01034bde7b89_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150839_9cfd7dad-3ead-482c-b207-01034bde7b89_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/b1150095-54ef-41bb-a673-c80843d05d0e.png) | 3:4 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150922_d17ddc8c-77b9-47d3-ac6e-0c4e34151a53_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150922_d17ddc8c-77b9-47d3-ac6e-0c4e34151a53_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/c4ce494f-4b90-43c7-9fc6-0362381f4dd8.png) | 1:1 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150909_cf6e51e4-7628-4c17-b192-85594b790bca_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150909_cf6e51e4-7628-4c17-b192-85594b790bca_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/a1db34c5-d5d5-4d18-8af0-8edfa686b763.png) | 16:9 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150815_06b39d1a-5976-429e-852a-8978e8e12fde_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_150815_06b39d1a-5976-429e-852a-8978e8e12fde_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/a8a09d1c-5930-4106-af55-b6cfe9141953.png) | 4:3 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_151009_ed326c26-4ec3-4caa-a643-4a9d925865c7_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_151009_ed326c26-4ec3-4caa-a643-4a9d925865c7_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/6b8ebcc7-318e-426d-9dcb-5314810dc355.png) | 9:16 | 4k | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/knight-s-diary.md](../../../presets/viral/knight-s-diary.md)

Source: https://higgsfield.ai/effects/examples/knight-s-diary (crawled page, extracted from embedded page data)
