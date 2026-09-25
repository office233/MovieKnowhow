# Lidar transition

- **Site page:** https://higgsfield.ai/effects/examples/lidar
- **Preset id:** `af71aba0-66b8-42a2-a33d-d08aa7ec5836` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `lidar` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 6 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (LiDAR scan)

## What it does

The world tilts around the subject, sending loose objects sliding and tumbling past while they remain calmly in place. Built for surreal fashion edits, playful gravity distortions, and offbeat music videos.

> Note: the site shows the **same description as Incline** for this preset, which looks like a copy-paste error on the page. Judging by the name and the preview, it is a LiDAR point-cloud scan transition between two images (inputs: Images + Prompt).

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Images | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3150 credit_units (~31.5 credits)
- 480p: 2100 credit_units (~21 credits), same for every aspect ratio
- 720p: 3150 credit_units (~31.5 credits), same for every aspect ratio
- 1080p: 6300 credit_units (~63 credits), same for every aspect ratio
- 4k: 15400 credit_units (~154 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/9a8e4804-9e49-4a3b-8087-021ba9b447cf.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/b703fc00-16e8-4036-acc2-6519ab82bf03.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/9ab738ce-71a1-4f5d-94ad-e3999e8adc10.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/2fd1220a-5cfa-496a-8028-1d4ac8dd3abc.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/8b7bca0e-8b3a-4237-863b-d3e551ee8553.mp4

## Example generations (9 with settings; total on page: 9)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_132530_bf5881e8-5a94-4ddc-9fed-70d8a805fb73.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_132530_bf5881e8-5a94-4ddc-9fed-70d8a805fb73_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/daeb74bc-9e13-4f56-9d6f-909e90005781_resize.jpg) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_132628_a5c70607-00b8-4abc-960c-baf59bcb7d03.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_132628_a5c70607-00b8-4abc-960c-baf59bcb7d03_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/1db65a1c-defa-4a71-9fb1-36ba70a010f2.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144530_948bc450-e9fc-4b73-9fd3-17e106f2a87f.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144530_948bc450-e9fc-4b73-9fd3-17e106f2a87f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/0e9104b8-96d6-46d4-883f-e0c07652e4dc.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_133725_920e9d05-5985-4848-9ecb-1983386e6fda.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_133725_920e9d05-5985-4848-9ecb-1983386e6fda_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/ec4662af-d2d7-4d8b-b8ef-41c8da6a8ff5.png) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_150041_7968fc22-34d6-4f36-b39f-b7a31a96c072.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_150041_7968fc22-34d6-4f36-b39f-b7a31a96c072_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/4b41d90f-8f32-479b-ac8c-f9d952e13a90_resize.jpg) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144002_72d70792-45ed-4501-999e-ff54bbdc2dd6.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144002_72d70792-45ed-4501-999e-ff54bbdc2dd6_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/4bf3dc6f-a9e9-4cde-aac5-cddf7c970c79.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144003_68b45d7f-d605-4489-822b-a58660ad100c.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_144003_68b45d7f-d605-4489-822b-a58660ad100c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/4bf3dc6f-a9e9-4cde-aac5-cddf7c970c79.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_141642_578ecc9c-6325-40a5-bab1-688c043b603f.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260828_141642_578ecc9c-6325-40a5-bab1-688c043b603f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/f7553412-f16f-4c90-a886-1c1a6cde53a9_resize.jpg) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260820_125359_86f41912-8c5c-4a90-bf30-e52e61c3cd75.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260820_125359_86f41912-8c5c-4a90-bf30-e52e61c3cd75_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/7cab1f01-9648-492b-b7c3-8dd38fb7f280.png) | 16:9 | 1080p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/lidar-transition.md](../../../presets/viral/lidar-transition.md)

Source: https://higgsfield.ai/effects/examples/lidar (crawled page, extracted from embedded page data)
