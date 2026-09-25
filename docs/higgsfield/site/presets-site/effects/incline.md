# Incline

- **Site page:** https://higgsfield.ai/effects/examples/incline
- **Preset id:** `ff501ca6-1d60-4ab4-8675-6273adfd977b` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `incline` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 8 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (tilted world)

## What it does

The world tilts around the subject, sending loose objects sliding and tumbling past while they remain calmly in place. Built for surreal fashion edits, playful gravity distortions, and offbeat music videos.

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/bade6252-7039-42eb-a50c-45c142c7f70f.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/30142c8a-46ee-4930-aca3-6fa5321dd84a.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/e0aa400c-4664-4248-bfbd-e213d9d304fc.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/368b7cde-aa9d-4b44-8386-86d9ac76644b.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/b1f096a3-bb9e-44fd-a26e-b55e7af51e02.mp4

## Example generations (7 with settings; total on page: 7)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205528_caf1fcb4-96bb-4992-be1e-87fbddcf4813.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205528_caf1fcb4-96bb-4992-be1e-87fbddcf4813_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/cfd02704-3aee-4c2e-86d7-d91bf7a045f7.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205316_ae461e43-4e73-4e0f-9c42-2155945e0cc9.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205316_ae461e43-4e73-4e0f-9c42-2155945e0cc9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/861a2140-d033-4ad7-8841-160bfa14ab70.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_004238_ac18afdb-1bcc-42d1-9023-2f82f0eaa8c1.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_004238_ac18afdb-1bcc-42d1-9023-2f82f0eaa8c1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/60e393ba-64c7-4594-a582-39a8bce146f9_resize.jpg) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205548_997e1613-d61d-485e-9411-862edb2c1c37.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205548_997e1613-d61d-485e-9411-862edb2c1c37_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/766a591c-618a-46cb-ae31-606bf86fdfc7.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205045_e63e9832-e5ab-449e-8701-55fbc42f149c.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_205045_e63e9832-e5ab-449e-8701-55fbc42f149c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/08c299d9-8d2b-4630-888e-e68abc8a952f_resize.jpg) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_005336_e4eefd7c-2884-4efd-9ea4-990442958588.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_005336_e4eefd7c-2884-4efd-9ea4-990442958588_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/7e95b82a-4bb5-4fe7-9b17-58c01dafbdd8.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_005220_3d7cc1cd-8cf7-462d-9d66-41835e4ece2b.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260902_005220_3d7cc1cd-8cf7-462d-9d66-41835e4ece2b_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/aac382cf-a52a-4a8c-8a08-cdce3276f297_resize.jpg) | 16:9 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/incline.md](../../../presets/viral/incline.md)

Source: https://higgsfield.ai/effects/examples/incline (crawled page, extracted from embedded page data)
