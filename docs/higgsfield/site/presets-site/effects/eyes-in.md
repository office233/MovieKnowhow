# Eyes in

- **Site page:** https://higgsfield.ai/effects/examples/eyes-in
- **Preset id:** `a5e06af0-626e-4634-a523-76bf57c7b3a8` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `eyes-in` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 2 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (eye dive)

## What it does

The camera dives directly into the subject’s eye, seamlessly passing through the dark void of the pupil to transport the viewer into an entirely new scene. Built for surreal narratives, psychological aesthetics, and mesmerizing visual flow.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload images | image | 1 | 1 | yes | input_images, image_references |
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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/dba03734-6e8a-4337-acb4-17ce943563d8.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/5354ce11-c68c-45a0-8a97-5aab94f52833.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/469bd2e0-cf08-42fa-ab36-d5eb402182c5.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/0ce7f10e-b170-4124-8e23-30cf67358e13.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/2a2fe17f-3af8-4d26-919b-788ce5b8b32d.mp4

## Example generations (10 with settings; total on page: 10)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_103651_f82109f0-4f16-4951-bdb8-aa5633b73c8c.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_103651_f82109f0-4f16-4951-bdb8-aa5633b73c8c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ab259f7e-104c-4af8-b4d9-9d66ac7e6cff.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_103640_f81ffd87-686f-4aa0-9d91-6cbe726592e9.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_103640_f81ffd87-686f-4aa0-9d91-6cbe726592e9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ab259f7e-104c-4af8-b4d9-9d66ac7e6cff.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_170321_f0f7f026-d1c0-4928-983c-7ff74592a72f.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_170321_f0f7f026-d1c0-4928-983c-7ff74592a72f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/78969214-4747-47e7-aa98-e2a751a4bffe_resize.jpg) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_183041_c8ff7713-f295-48d1-b678-c6e735f96807.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_183041_c8ff7713-f295-48d1-b678-c6e735f96807_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/b1525355-d2ec-4743-a14d-d9ea20eedc51_resize.jpg) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_150930_7f637039-c934-4256-b573-e2b710487fc5.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_150930_7f637039-c934-4256-b573-e2b710487fc5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/0bfc8b5f-4f4c-470f-b78c-9d8eb91c4e3c.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_181104_6c6a4754-f243-4594-8ad8-ba9ce017c73f.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_181104_6c6a4754-f243-4594-8ad8-ba9ce017c73f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/a1e120f7-506a-4267-beb6-5a9b823c4383.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_120115_56c906bc-6205-4cf4-8d25-f28826ee3161.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_120115_56c906bc-6205-4cf4-8d25-f28826ee3161_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/8d36aeac-0c41-484e-a093-d42131e431ce.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_144217_4881435c-562f-44d8-8259-7c4125d72785.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260827_144217_4881435c-562f-44d8-8259-7c4125d72785_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/a7f7f301-0395-4577-bb60-593906654cfc.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_180014_10036046-c253-40fe-a6d8-bb9a64cc92e2.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_180014_10036046-c253-40fe-a6d8-bb9a64cc92e2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/a547422f-d53c-4b62-be3f-245e297c1b36.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_165446_05beb99c-a73a-445f-abfb-cf7b1dd5975b.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260829_165446_05beb99c-a73a-445f-abfb-cf7b1dd5975b_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/a69b95fb-4b5d-4156-b4fb-afadcb48f485.png) | 16:9 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/eyes-in.md](../../../presets/viral/eyes-in.md)

Source: https://higgsfield.ai/effects/examples/eyes-in (crawled page, extracted from embedded page data)
