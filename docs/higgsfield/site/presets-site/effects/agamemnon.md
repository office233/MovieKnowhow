# Agamemnon

- **Site page:** https://higgsfield.ai/effects/examples/agamemnon
- **Preset id:** `81e45e83-caa5-4d06-a935-2ad776bf039f` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `agamemnon` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** New · **priority:** 224 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition / epic reveal

## What it does

Agamemnon steps out of the screen as armored warriors storm the theater. Larger-than-life and perfect for bold reveals or transitions.

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/99017935-54a8-4d3a-9fd6-445710265fac.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/0fdf936f-797b-4860-8b0d-474b06c27890.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/b7d69cfa-b246-4270-b5d8-02718570de58.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/19f55c0b-0b94-432d-8145-b10e37bf40b2.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/0fdf936f-797b-4860-8b0d-474b06c27890.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/3b4a4e3c-346d-4efc-af0e-5432d7be8f6b.mp4

## Example generations (8 with settings; total on page: 8)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_180822_813c1aaf-b1a8-45f8-8564-9e6ba08992fc_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_180822_813c1aaf-b1a8-45f8-8564-9e6ba08992fc_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/7b7a625f-c08e-4b80-a3b4-209b650ffb0c.png) | 16:9 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_141851_56470cef-d024-4093-a8fc-387af4997a0b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_141851_56470cef-d024-4093-a8fc-387af4997a0b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/fe63042e-b55a-4311-a96f-684d56568930_resize.jpg) | 3:4 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_180603_8849cc75-842d-4661-875f-f88853e6ced3_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260804_180603_8849cc75-842d-4661-875f-f88853e6ced3_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/289a011a-74a2-4335-ba85-0546a3e3b4df.png) | 9:16 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_170402_ecaaac5e-8faa-493d-a1cb-c279a1ddbe76_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_170402_ecaaac5e-8faa-493d-a1cb-c279a1ddbe76_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/57dfa575-5e3c-4d63-9430-065447c1a61b.png) | 1:1 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_174621_9531c7f0-acb6-450a-8d7a-270277b084a5_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_174621_9531c7f0-acb6-450a-8d7a-270277b084a5_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/a4bd84cc-d36e-4171-9ef0-9c7eeda859aa_resize.jpg) | 16:9 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_141609_30aa0810-eeba-4bf4-97ea-030eb8919d8a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_141609_30aa0810-eeba-4bf4-97ea-030eb8919d8a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/ea53a84f-ce24-4a36-8b8b-cb27c459bbe6_resize.jpg) | 9:16 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_150053_560f0349-cb08-4b90-815a-767b06108bdf_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260804_150053_560f0349-cb08-4b90-815a-767b06108bdf_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/39e903c5-5a25-42e0-8ac3-1bae25096097_resize.jpg) | 4:3 | 1080p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_182819_a8733cff-e394-49c0-b135-74236d4cb0f9_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260804_182819_a8733cff-e394-49c0-b135-74236d4cb0f9_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/d39b0c60-6c84-4e1f-bb7e-83fd8cfc1a81.png) | 1:1 | 4k | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/agamemnon.md](../../../presets/viral/agamemnon.md)

Source: https://higgsfield.ai/effects/examples/agamemnon (crawled page, extracted from embedded page data)
