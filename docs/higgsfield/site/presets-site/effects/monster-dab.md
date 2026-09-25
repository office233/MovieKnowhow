# Monster dab

- **Site page:** https://higgsfield.ai/effects/examples/monster-dab
- **Preset id:** `ddb12fd4-5bbf-4bb1-800b-7d409f3066b5` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `monster-dab` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 15 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** cinematic creature reveal

## What it does

A colossal fantasy creature drops from the sky behind the subject, seamlessly matching their visual style. Built for cinematic creature reveals, dark fantasy scenes, and dramatic character moments.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4500 credit_units (~45 credits)
- 480p: 3000 credit_units (~30 credits), same for every aspect ratio
- 720p: 4500 credit_units (~45 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio
- 4k: 22000 credit_units (~220 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/0ab0fb19-95df-44c7-9b92-6804122e02ff.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/afd75c6a-1880-4cc0-bab9-576c4d1e7ff1.webp
- Full-res preview (mp4, 1280x960): https://cdn.higgsfield.ai/viral_hub/4c2947f1-cf6c-48c1-aee1-19d7c323fccb.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/417f5024-3d79-4036-91c1-04435676b1b1.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/e28b1c30-8d32-48ae-9cc5-67539eaa1d44.mp4

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260831_185838_e691aaa2-b6cd-4841-b110-9abc00e39f25.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260831_185838_e691aaa2-b6cd-4841-b110-9abc00e39f25_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/2062d510-b05d-4fa5-8f9c-4e7bed747ec6.png) | 4:3 | 4k | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260831_174506_2905e4f5-d55c-48bd-ab5a-fb5859f4e0b8.mp4) · [poster](https://cdn.higgsfield.ai/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/hf_20260831_174506_2905e4f5-d55c-48bd-ab5a-fb5859f4e0b8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/d27e45d4-23d7-47c4-a7b4-b01a31a5f273.png) | 16:9 | 4k | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_221456_119bf7dd-72cf-43c7-817d-32daaa6e248a.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_221456_119bf7dd-72cf-43c7-817d-32daaa6e248a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/9764730b-88c3-4883-b286-c4c0490310c5.jpg) | 3:4 | 4k | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_172929_55a911c2-295e-4f52-9a33-b76c278d5bd8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_172929_55a911c2-295e-4f52-9a33-b76c278d5bd8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/ee2c5539-ea00-4831-9528-cb223b2a79c8.png) | 3:4 | 4k | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_172843_c0aad959-274b-4ab3-a29f-394969d0cdbf.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_172843_c0aad959-274b-4ab3-a29f-394969d0cdbf_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/10601b10-90e7-4fb6-afe8-3f036e57829d.png) | 9:16 | 4k | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_180517_bd961f0d-6362-4b7c-ad87-01ec3d4a752d.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260826_180517_bd961f0d-6362-4b7c-ad87-01ec3d4a752d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/128c71b4-2d3e-4848-902a-5b745309e478.png) | 4:3 | 4k | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/monster-dab.md](../../../presets/viral/monster-dab.md)

Source: https://higgsfield.ai/effects/examples/monster-dab (crawled page, extracted from embedded page data)
