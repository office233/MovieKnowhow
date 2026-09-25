# Wild ride

- **Site page:** https://higgsfield.ai/effects/examples/wild-ride
- **Preset id:** `23507548-cd71-423b-a5fd-0de1b0a09222` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `wild-ride` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 4 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** camera move (aggressive orbit around subject)

## What it does

A high-speed, dynamic camera orbit that aggressively sweeps around a rapidly spinning or drifting subject. The camera executes precise, controlled movements, smoothly shifting from high overhead angles to low ground-level perspectives while keeping the central action perfectly locked in frame. Built for action sequences, automotive edits, and high-energy music videos. 

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | image_references |
| Location | image | 1 | 1 | yes | image_references |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 6500 credit_units (~65 credits)
- 480p: 2500 credit_units (~25 credits), same for every aspect ratio
- 720p: 6500 credit_units (~65 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/8cd9e3fc-8e4f-4071-abff-8934f3381507.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/99aa3365-5ae0-4616-9722-ce0dc087607d.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/e173a71b-328c-4cf7-8c3f-943ae214a04c.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/582f12ba-fec5-4074-9bc2-2b23f83b3342.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/4c03c58a-7623-453b-9cb5-84de5dffd472.mp4

## Example generations (17 with settings; total on page: 17)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_231300_f354625a-6b06-4b88-9881-b324e5da9147.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_231300_f354625a-6b06-4b88-9881-b324e5da9147_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/8926a386-df41-44a0-9e43-bf6eed16e1a0.png) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_154102_ea2ec170-ec08-4203-8f9c-d7937a4dd6e5.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_154102_ea2ec170-ec08-4203-8f9c-d7937a4dd6e5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/571097a0-af23-4a3d-9ae0-261c16551113.jpg) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_191949_d7a7375a-5780-4859-b4b4-17874bd013a1.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_191949_d7a7375a-5780-4859-b4b4-17874bd013a1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/0d14dceb-7fe1-444b-ac82-bb95af394223_resize.jpg) | 16:9 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_165114_986bc77d-5ef6-44a2-bc8c-a83a17a69483.mp4) · [poster](https://cdn.higgsfield.ai/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/hf_20260827_165114_986bc77d-5ef6-44a2-bc8c-a83a17a69483_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/84494f6d-aa7d-48be-bb5f-fe17e18d1358.png) | 16:9 | 720p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192016_94ac0902-ba53-4f8e-ac9a-8a87f2729739.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192016_94ac0902-ba53-4f8e-ac9a-8a87f2729739_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/860a7204-09d5-4266-8245-4f1fe779bcc8.png) | 3:4 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192046_66f274c0-5597-4a3a-8f1f-2d139b771807.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192046_66f274c0-5597-4a3a-8f1f-2d139b771807_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/f48b155a-3c3d-4539-9549-ec60bd4ea872_resize.jpg) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192004_64485b19-4228-4538-a7f7-97a73368562d.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192004_64485b19-4228-4538-a7f7-97a73368562d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/a2730557-a1da-41c6-b641-0ad01dbd5536.png) | 1:1 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_191252_5ba55942-3f51-44d8-a751-d04014dacdd8.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_191252_5ba55942-3f51-44d8-a751-d04014dacdd8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/eeed5e1a-9181-4474-b597-c60a1a541d06.png) | 1:1 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190703_4d149150-3394-47e2-9326-d2c032458e10.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190703_4d149150-3394-47e2-9326-d2c032458e10_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/287cfe2b-0bcd-4b57-8207-e61ebb5a7217.png) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192025_40768e73-90ad-4537-919d-1125e2c6da29.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192025_40768e73-90ad-4537-919d-1125e2c6da29_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/16d548dd-0e42-4417-8d4d-721e49c5b62c.png) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_230213_26130ef5-3783-4863-bca0-9b8db22ff3c5.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_230213_26130ef5-3783-4863-bca0-9b8db22ff3c5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/8e52bf0a-adfe-4c31-b9e6-f4ac45ceeaa4.png) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190639_1dc3087a-e877-46e8-a539-a56668105fb5.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190639_1dc3087a-e877-46e8-a539-a56668105fb5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/2fad7e57-b15a-4cbd-8858-bbba6ee98538.png) | 21:9 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192038_1ce66aa6-f57e-42da-b0fb-098416ed62ae.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_192038_1ce66aa6-f57e-42da-b0fb-098416ed62ae_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/ebb28623-e182-46e7-b2e0-7d6e253bd0c0_resize.jpg) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190342_1a504071-3142-4e13-9b34-32c899a717be.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260831_190342_1a504071-3142-4e13-9b34-32c899a717be_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/418f6f47-0eba-4974-82e5-c41d8217a92a.webp) | 1:1 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_221127_bfa8d6da-bcd5-4086-8e86-9fe4365f7877.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_221127_bfa8d6da-bcd5-4086-8e86-9fe4365f7877_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/f9f6fc4a-a7dc-446b-9a7d-2cad19215445_resize.jpg) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_210550_01d0ef54-51fe-40d1-8440-5bbc53b269aa.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_210550_01d0ef54-51fe-40d1-8440-5bbc53b269aa_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/554e464b-303f-413a-b013-0da018855a31.png) | 16:9 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_233010_43136687-c43c-449c-be75-7e910add2067.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_233010_43136687-c43c-449c-be75-7e910add2067_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/995b738b-8768-4226-af98-b9fafb5b4239.png) | 4:3 | 1080p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/wild-ride.md](../../../presets/viral/wild-ride.md)

Source: https://higgsfield.ai/effects/examples/wild-ride (crawled page, extracted from embedded page data)
