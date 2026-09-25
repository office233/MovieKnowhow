# Melting

- **Site page:** https://higgsfield.ai/effects/examples/melting
- **Preset id:** `bc0f007c-3319-405e-b1f4-341f65000e2b` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `melting` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 24 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 6 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (surreal melt)

## What it does

The subject slowly melts into a glossy puddle, with their clothing and accessories stretching into liquid trails before pooling on the ground. Built for surreal transformations, experimental fashion edits, and playful disappearing acts.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, image_references |
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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/f661157c-af00-46f7-8b7c-6a7ae711ef98.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/6ecca888-1780-46ae-a86d-a05b69b2fe34.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/76e2f2cd-ba40-449b-8c76-02e0b1beed42.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/1c8e0607-89d6-4253-9dbe-a288d91097a5.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/7a3f044f-0a2c-44ba-8239-a9b013c954d5.mp4

## Example generations (7 with settings; total on page: 7)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_215717_d1fe11c3-fc76-45ed-afcf-eeddda1158fb.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_215717_d1fe11c3-fc76-45ed-afcf-eeddda1158fb_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/18710517-e1b2-490a-a1af-a3819571eb43_resize.jpg) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_211744_ac77cd8e-8830-49f0-95a7-1e40569c48e7.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_211744_ac77cd8e-8830-49f0-95a7-1e40569c48e7_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/ca244eae-dce0-4a75-9c8a-5fa1d4ecd8a3_resize.jpg) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_205659_9de9e305-9ed7-4e4c-9186-aa80da0b2201.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_205659_9de9e305-9ed7-4e4c-9186-aa80da0b2201_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/44f59d3c-eb86-40eb-aae7-1475fa31f883_resize.jpg) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_220353_eb355a41-eda7-43ff-bebc-cbf908712be6.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_220353_eb355a41-eda7-43ff-bebc-cbf908712be6_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/be2a3051-e442-4518-9cb5-fcb57d1dbd6d_resize.jpg) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_205549_ea388ccb-ab6c-4dac-bcd1-77e54c5d3d57.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_205549_ea388ccb-ab6c-4dac-bcd1-77e54c5d3d57_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/b61230e3-941b-4b7b-91a2-4166d43c3fc6.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_212756_4c77c9a6-2ea2-413a-a0ed-d650d897803a.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_212756_4c77c9a6-2ea2-413a-a0ed-d650d897803a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/63b4bd8a-5d54-4d23-8ea1-95dda128c61a.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_211454_259905ce-e8c3-4c4a-8833-d47d94ce82e6.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260901_211454_259905ce-e8c3-4c4a-8833-d47d94ce82e6_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/c1e04e63-1d4a-4d8a-a450-34ff5d6fcbc4_resize.jpg) | 4:3 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/melting.md](../../../presets/viral/melting.md)

Source: https://higgsfield.ai/effects/examples/melting (crawled page, extracted from embedded page data)
