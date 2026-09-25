# Bullet time

- **Site page:** https://higgsfield.ai/effects/examples/bullet-time
- **Preset id:** `6626ad13-f00f-4b67-be41-c768b9c0a380` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `bullet-time` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** New · **priority:** 229 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** cinematic film scene (360 freeze)

## What it does

A waitress trips, sending coffee and plates flying as time freezes for a sweeping 360° camera move. Everything snaps back into place, ending on her knowing smirk. Slick and cinematic—perfect for high-impact reveals.

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/08dad223-9baf-4d51-a07d-07062cf392d9.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/30e317bf-1388-4988-858b-eaf8e3636671.webp
- Full-res preview (mp4, 1280x960): https://cdn.higgsfield.ai/viral_hub/ce8b0d4f-30c1-41ce-b1f9-4c5b32f0b836.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/dac5a5f2-3d87-4435-a965-a3fe045c8ca3.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/30e317bf-1388-4988-858b-eaf8e3636671.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_130403_ceb98e29-923b-4178-9f3f-683c22fa0572_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_130403_ceb98e29-923b-4178-9f3f-683c22fa0572_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/29fcda08-78fc-49ad-9d9c-f6ec8bad8671.png) | 3:4 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124537_568f15e5-cc63-47fc-8b41-c195710484a9_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124537_568f15e5-cc63-47fc-8b41-c195710484a9_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/c4ce494f-4b90-43c7-9fc6-0362381f4dd8.png) | 16:9 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_130349_8134717c-6cb5-4619-b747-ac52f2b65c22_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_130349_8134717c-6cb5-4619-b747-ac52f2b65c22_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/9ce7929d-845b-4ba8-8734-fec480eac056.png) | 4:3 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124513_59c4b288-7fb6-4b2e-836d-56bbd3e2bb3a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124513_59c4b288-7fb6-4b2e-836d-56bbd3e2bb3a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/a1db34c5-d5d5-4d18-8af0-8edfa686b763.png) | 9:16 | 4k | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124632_028c9a0b-535d-4e14-99b6-d0812680baa0_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260804_124632_028c9a0b-535d-4e14-99b6-d0812680baa0_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/0741efee-06b0-48ac-baa3-bd3b57f5f00d.png) | 1:1 | 4k | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/bullet-time.md](../../../presets/viral/bullet-time.md)

Source: https://higgsfield.ai/effects/examples/bullet-time (crawled page, extracted from embedded page data)
