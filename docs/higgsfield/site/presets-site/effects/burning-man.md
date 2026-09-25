# Burning man

- **Site page:** https://higgsfield.ai/effects/examples/burning-man
- **Preset id:** `acc07eb5-2d40-4ace-9789-48d5bf19639c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `burning-man` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 21 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** character (surreal double)

## What it does

A flaming double appears before the subject and reaches out for a handshake, bringing them face-to-face with their burning counterpart. Built for surreal character reveals, cinematic music videos, and dramatic visual storytelling.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Images | image | 1 | 1 | yes | input_images, image_references |
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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/c370022d-d99a-4cff-bb35-9d73b7a3a95d.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/a1560137-597c-455a-be9e-9622cccf76a3.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/50f79602-86e0-44a9-b305-52681d0c0e53.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/1b58500a-1e1a-4ac8-8b22-adc8d0692082.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/72de89a2-9674-4dd1-8593-bdd041a93a56.mp4

## Example generations (10 with settings; total on page: 10)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_221543_b6433aab-11f0-440f-af35-451bd77c23fa.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_221543_b6433aab-11f0-440f-af35-451bd77c23fa_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/eb928d1f-8681-43a9-b087-fb501bdfd13e.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211740_939811f8-f77b-4249-971b-9c1519e5b931.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211740_939811f8-f77b-4249-971b-9c1519e5b931_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/0769f803-dd1f-4a91-8dbc-ec1d4a51a407.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_214616_836bf6a3-5a38-4404-ab3a-33c33e02e2d8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_214616_836bf6a3-5a38-4404-ab3a-33c33e02e2d8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/274a1252-b671-4042-8f0a-78d1fdacdc4c.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_205317_826e7842-27aa-4317-b474-ea0bb2207015.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_205317_826e7842-27aa-4317-b474-ea0bb2207015_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/cba89520-85c8-4d05-aa0d-8ef8ffbaf88a.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_000715_eb73bf02-3117-4b89-bc15-d3bb98ffa23c.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_000715_eb73bf02-3117-4b89-bc15-d3bb98ffa23c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/c1e08fa3-0857-4b57-8f6f-fe6894330945.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_222603_476b32a7-615e-4386-ac17-9d7df68383ac.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_222603_476b32a7-615e-4386-ac17-9d7df68383ac_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/8a3aaa5b-2d5d-4f48-aea6-b5c6827fb988.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_215801_4529b7bb-c735-4c36-99c9-c1c9d1f0ad41.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_215801_4529b7bb-c735-4c36-99c9-c1c9d1f0ad41_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/c3ef8561-0fd2-4890-b078-b16569936b2c.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_235948_363c4a33-d20c-43b8-aa7d-83a7d277cb9e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_235948_363c4a33-d20c-43b8-aa7d-83a7d277cb9e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/c1e08fa3-0857-4b57-8f6f-fe6894330945.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211746_1d08be7c-4558-4b2f-8adf-8ba281527934.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211746_1d08be7c-4558-4b2f-8adf-8ba281527934_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/005cfa6e-9f43-46d6-b248-915ef89d339b.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211844_002ba087-54cd-47c0-953b-068f8668b34a.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_211844_002ba087-54cd-47c0-953b-068f8668b34a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/4d332d80-cea2-4baa-9ec3-0ff413bce67d.png) | 4:3 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/burning-man.md](../../../presets/viral/burning-man.md)

Source: https://higgsfield.ai/effects/examples/burning-man (crawled page, extracted from embedded page data)
