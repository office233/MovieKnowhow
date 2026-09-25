# Floating fall

- **Site page:** https://higgsfield.ai/effects/examples/floating-fall
- **Preset id:** `fb6ca8f7-493e-42e6-9e0d-f3e2e695825d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `floating-fall` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 0 · **is_main_page flag:** False · **IP check required:** False
- **Output duration (preset clip):** 12 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** product ad (floating products)

## What it does

Falls backward as their belongings float in midair, with the camera moving through crisp product close-ups before the fall resumes. Built for playful product reveals, dynamic lifestyle ads, and surreal slow-motion edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, image_references |
| Location | image | 0 | 1 | optional | input_images, image_references |
| Products | image | 0 | 3 | optional | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 7800 credit_units (~78 credits)
- 480p: 3000 credit_units (~30 credits), same for every aspect ratio
- 720p: 7800 credit_units (~78 credits), same for every aspect ratio
- 1080p: 10800 credit_units (~108 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/d877f71c-d2f3-44df-9317-f3ce6889bcb6.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/151664fa-7f7f-43d6-80fa-4683104a3c02.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/95c7104f-9cff-40c5-b430-44354ee73074.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/95e315f0-e668-4581-a855-f4323265302d.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_195455_e89fe05d-09ad-4e88-b7aa-67b1d70b6e8d.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_195455_e89fe05d-09ad-4e88-b7aa-67b1d70b6e8d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/887e8c38-4b34-4c0f-8390-7f44086702a2.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/b1993bc5-2069-457d-ab87-fc237721e76e.jpg) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/49048fb6-8fe3-41f2-a7ac-f5dc01d7c683.jpg) | 16:9 | 1080p | 12 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_203743_e36b99a1-6078-4b70-9226-fc463561f871.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_203743_e36b99a1-6078-4b70-9226-fc463561f871_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_320bUtdC5TyGJFaK5RXMfgPPBTP/24e7e467-e6cb-4182-8edb-c06e149b2387.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_320bUtdC5TyGJFaK5RXMfgPPBTP/d95ebdbf-448f-4acb-afc4-1b556353339a.jpg) | 4:3 | 1080p | 12 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_202533_9ef9e8a9-f03e-43ee-926f-d793f70b0741.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_202533_9ef9e8a9-f03e-43ee-926f-d793f70b0741_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_30KPJ4KDXfcp7uYBL0FrtiBtO4R/a47d1ed9-9170-4cbd-a916-87bd0870222a.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_30KPJ4KDXfcp7uYBL0FrtiBtO4R/4d2a4e98-1db1-4939-8a40-ccb5a39d558d.jpg) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_30KPJ4KDXfcp7uYBL0FrtiBtO4R/53ef50e1-fe8c-4733-b9fa-f45c1edc60b8.jpg) | 9:16 | 720p | 12 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_202040_59e99405-2a5d-4cc5-8b37-9d42339081aa.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_202040_59e99405-2a5d-4cc5-8b37-9d42339081aa_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_2xzhcddd2UoK56LzxphgYJ8iW3q/b7b3eb61-4c7b-4629-9482-1473d44b7511.png) | 3:4 | 1080p | 12 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/floating-fall.md](../../../presets/viral/floating-fall.md)

Source: https://higgsfield.ai/effects/examples/floating-fall (crawled page, extracted from embedded page data)
