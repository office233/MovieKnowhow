# Vanish

- **Site page:** https://higgsfield.ai/effects/examples/vanish
- **Preset id:** `8b8d053d-08ff-436c-9767-315efe5f0cfc` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `vanish` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 1 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 5 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral hook (clothes collapse)

## What it does

The subject's body instantly disappears, leaving their empty clothing to suddenly collapse and fall flat onto the ground. Built for viral hooks, comedic reveals, and surreal visual effects.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2250 credit_units (~22.5 credits)
- 480p: 1500 credit_units (~15 credits), same for every aspect ratio
- 720p: 2250 credit_units (~22.5 credits), same for every aspect ratio
- 1080p: 4500 credit_units (~45 credits), same for every aspect ratio
- 4k: 11000 credit_units (~110 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/d63d47dd-d00f-42c8-9c45-9bddd3df7a38.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/a9944d26-47dc-463f-b4d6-446c371ae2f7.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/568cb428-46b4-4eb8-8698-40a0086a1b92.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/4aa748fd-d279-4a1c-8991-af967fe10bf4.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/982da2c9-a410-4fd7-ab88-a74929de3f3d.mp4

## Example generations (14 with settings; total on page: 14)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_100741_fe888ee9-8a46-4eda-8610-9a3c937ef2d3.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_100741_fe888ee9-8a46-4eda-8610-9a3c937ef2d3_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/35fbce24-6176-462a-9c6e-50965500f9be.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_111754_d679a5c6-29e7-42f3-b61d-67a155f6cf68.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_111754_d679a5c6-29e7-42f3-b61d-67a155f6cf68_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/1b695af7-1703-4989-a119-5d971dfccb02.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_232622_d484dfe3-2a02-4c7b-96a8-7649ae3e0866.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_232622_d484dfe3-2a02-4c7b-96a8-7649ae3e0866_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/280f3344-b6a7-45bc-9e6c-b43754412052.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_112507_af27d0dd-69ca-47a1-95c0-c33dbf5e6326.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_112507_af27d0dd-69ca-47a1-95c0-c33dbf5e6326_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/97d9d2b8-16cf-4447-aad0-09fe915cb4f1.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_211250_a2db350c-e615-4957-9009-2d0e8d0ec302.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_211250_a2db350c-e615-4957-9009-2d0e8d0ec302_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/1d83cc1b-d7d0-4e2e-a678-25ed10d17c02_resize.jpg) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_230415_9b1eab62-1479-42de-b7c0-f2939a66822b.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_230415_9b1eab62-1479-42de-b7c0-f2939a66822b_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/521e7a9d-358b-4d62-9236-e869bfe5b19e_resize.jpg) | 9:16 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_213202_7f120334-fccb-4ebb-b6a9-90a9184967bb.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_213202_7f120334-fccb-4ebb-b6a9-90a9184967bb_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/ffc7edc2-a4bf-4e8f-bae8-8c460bce3b4f.png) | 3:4 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_093422_7c0ddc88-504f-494f-b136-a2392497bf71.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260828_093422_7c0ddc88-504f-494f-b136-a2392497bf71_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/1cde1cdc-dc97-48e1-9576-4524776022cb.png) | 9:16 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_203216_06a2b97c-71c3-45b4-bb4b-4fcc74fbdfc0.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_203216_06a2b97c-71c3-45b4-bb4b-4fcc74fbdfc0_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/b4c4589e-7a7c-4075-80c4-f0890e010963.png) | 3:4 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_211337_95e01ac4-b67f-4564-83a9-6740ef38910b.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_211337_95e01ac4-b67f-4564-83a9-6740ef38910b_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/06c56dc7-3c98-4cae-8bb4-889fb460b2cc.png) | 9:16 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260820_185610_d43d0c40-7d7c-4180-9a51-a62bc8390253.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260820_185610_d43d0c40-7d7c-4180-9a51-a62bc8390253_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/04fec968-d502-40d1-beef-ae9bf53a3c31.png) | 16:9 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_191703_339a8bb7-9025-405c-b125-1a40f53c9852.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_191703_339a8bb7-9025-405c-b125-1a40f53c9852_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/7b98d157-ff52-4eef-bac4-17f1e265e693_resize.jpg) | 9:16 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260820_204100_19d759dc-9d5c-467d-a2e0-b24523b48487.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260820_204100_19d759dc-9d5c-467d-a2e0-b24523b48487_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/63d48979-2827-4535-8184-f99920200fe6.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_205052_091f5573-6c79-4bec-b9f4-2f6997bca7ce.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260821_205052_091f5573-6c79-4bec-b9f4-2f6997bca7ce_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/f9f6fc4a-a7dc-446b-9a7d-2cad19215445_resize.jpg) | 9:16 | 4k | 5 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/vanish.md](../../../presets/viral/vanish.md)

Source: https://higgsfield.ai/effects/examples/vanish (crawled page, extracted from embedded page data)
