# Architecture wave

- **Site page:** https://higgsfield.ai/effects/examples/architecture-wave
- **Preset id:** `118138a4-5b5d-471e-a29f-69faa58aee5a` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `architecture-wave` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 53 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (surreal environment)

## What it does

A massive architectural reality warp. While the subject moves naturally in the foreground, towering buildings behind them bend, fold, and ripple as if made of liquid. Built for surreal city scenes, cinematic scale reveals, and mind-bending transitions.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image References | image | 1 | 1 | yes | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4550 credit_units (~45.5 credits)
- 480p: 1750 credit_units (~17.5 credits), same for every aspect ratio
- 720p: 4550 credit_units (~45.5 credits), same for every aspect ratio
- 1080p: 6300 credit_units (~63 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/0cc7ac70-a981-406b-aac6-1d9fcc06e218.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/13b4a006-8897-46d0-a00a-bcf3a4851c0d.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/6abd7e02-7d9b-444e-96f0-305a20a35b72.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/ce53f80c-c926-405d-9fc0-b5213ee2a719.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/ecc923d0-464d-4dd4-a8f8-c901f3968d4b.mp4

## Example generations (16 with settings; total on page: 16)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260829_203027_f73a631d-73cc-4edc-91ba-62886f244878.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260829_203027_f73a631d-73cc-4edc-91ba-62886f244878_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/0942d69f-90c9-49f7-b4b1-48be3654263e.jpg) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260828_201929_f22bcbe1-db7d-4488-8ed1-fab53dc7800e.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260828_201929_f22bcbe1-db7d-4488-8ed1-fab53dc7800e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/e19e6cea-a55e-4b26-aa67-00936c085b42.png) | 3:4 | 720p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_195911_f1b495bd-608b-4759-a5ad-443e885b92c8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_195911_f1b495bd-608b-4759-a5ad-443e885b92c8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/f15c54ec-2de1-49cb-b725-b8a07adbca9e.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_201603_e7e5db2f-6e96-4e06-8f3e-c49a077c733e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_201603_e7e5db2f-6e96-4e06-8f3e-c49a077c733e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/0eb14310-37be-4a0d-a09d-a89efa8ebd54.png) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_120654_c338c108-6950-4b12-be50-359e33b3eba9.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_120654_c338c108-6950-4b12-be50-359e33b3eba9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/6333cde0-41ce-499b-ba7b-6a290315e9aa.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_193049_b8a2de1a-46e1-478d-8144-ed1a05398b67.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_193049_b8a2de1a-46e1-478d-8144-ed1a05398b67_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/519c449c-b447-47c8-83ed-68a7a122f3cf_resize.jpg) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260829_195815_a24d8749-d225-40aa-a5dc-d37afbd46e06.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260829_195815_a24d8749-d225-40aa-a5dc-d37afbd46e06_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/48f88af4-836a-4cf3-826e-9df102b26827.png) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_201740_78a9d4e6-1f39-4d49-86b3-1001e090f8a3.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_201740_78a9d4e6-1f39-4d49-86b3-1001e090f8a3_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/fc3c5131-81d6-42a6-b89c-f215817bae2b.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260829_212521_51e43473-2328-490f-be24-0d83ea38b12f.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260829_212521_51e43473-2328-490f-be24-0d83ea38b12f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/605477f9-61ca-40dd-9018-d1d886c85ec6.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260829_221208_4fb5c6b3-3026-4216-9875-2bd74d5830ae.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260829_221208_4fb5c6b3-3026-4216-9875-2bd74d5830ae_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/69930807-06d3-4c07-b432-28dae82bb447.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_193221_1bc92f2c-c6a7-481f-af84-e2c7784a3c46.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_193221_1bc92f2c-c6a7-481f-af84-e2c7784a3c46_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/2ec01a72-8e74-4c66-b919-003eac7ed0b1.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260828_203220_16ab60b0-979f-4491-8310-4fc73319aaf1.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtuMjeO56IlCCzTiD419c4NiyM/hf_20260828_203220_16ab60b0-979f-4491-8310-4fc73319aaf1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtuMjeO56IlCCzTiD419c4NiyM/06ee30b8-a27f-4fe5-abb5-e37bfe3e9a23.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_191724_07d2ff38-67fa-4523-a0e5-0e4093d7ada2.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_191724_07d2ff38-67fa-4523-a0e5-0e4093d7ada2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/866caf3c-7715-48df-adb1-562a15ac7bb5.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260826_180741_535d20df-c444-4350-bd09-a8f6a26fec0f.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260826_180741_535d20df-c444-4350-bd09-a8f6a26fec0f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/bc2566c5-3d3a-49ea-95b2-1340bb12311c_resize.jpg) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260821_194154_46c11538-8224-4811-bbb8-57b3f8ab29c2.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260821_194154_46c11538-8224-4811-bbb8-57b3f8ab29c2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/87ccd5b4-1dd2-4f98-bc53-0141aa6e0288_resize.jpg) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260822_152025_ec2bc041-9b7b-4667-94a5-903e87c006c3.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260822_152025_ec2bc041-9b7b-4667-94a5-903e87c006c3_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/78a421a5-86f0-4292-b998-c916c7b4b661.png) | 16:9 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/architecture-wave.md](../../../presets/viral/architecture-wave.md)

Source: https://higgsfield.ai/effects/examples/architecture-wave (crawled page, extracted from embedded page data)
