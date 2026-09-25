# boarding pass

- **Site page:** https://higgsfield.ai/effects/examples/boarding-pass
- **Preset id:** `eee3cd37-1072-428d-a921-a37c3735423c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `boarding-pass` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 25 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 9 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (outfit/location change)

## What it does

A dynamic travel transition that turns your walk into a global runway, seamlessly changing your outfit and scenic backdrop with every giant flight ticket you cross. Built for travel vlogs, fashion lookbooks, and stylish lifestyle edits.

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
- Default settings: 5850 credit_units (~58.5 credits)
- 480p: 2250 credit_units (~22.5 credits), same for every aspect ratio
- 720p: 5850 credit_units (~58.5 credits), same for every aspect ratio
- 1080p: 8100 credit_units (~81 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/dcd67e05-0b1e-4475-9b6c-3f96e69c5384.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/45c263b5-7820-423c-97b5-c383e25e9ff9.webp
- Full-res preview (mp4, 1280x960): https://cdn.higgsfield.ai/viral_hub/cd166ec1-d021-44fe-b88b-45e39ad88792.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/a026e8c9-b03f-4a20-b12f-8e5e6b789285.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/798de080-0dce-4c74-8dc8-55ce402c261d.mp4

## Example generations (8 with settings; total on page: 8)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_193009_e90c43bc-db46-4f39-9cf9-a140422ff051.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_193009_e90c43bc-db46-4f39-9cf9-a140422ff051_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/60626991-454d-497d-9625-3af734f1c172_resize.jpg) | 9:16 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_160200_d87a54a9-9ce8-463d-897c-4fcb49b8029d.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_160200_d87a54a9-9ce8-463d-897c-4fcb49b8029d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/0dbad888-a9cd-474e-a0d9-4f724d9ebffd.jpg) | 3:4 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_154248_8274bedc-ed2a-4f20-a18e-4a42cbe21297.mp4) · [poster](https://cdn.higgsfield.ai/user_3BtsEcww7blE0e9EKFuXmUaobas/hf_20260827_154248_8274bedc-ed2a-4f20-a18e-4a42cbe21297_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3BtsEcww7blE0e9EKFuXmUaobas/2204b84d-02b6-46d0-88f9-75955ec7ec4d.jpg) | 1:1 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_202453_68e26508-8a74-46ab-b31d-de997d4f06f1.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_202453_68e26508-8a74-46ab-b31d-de997d4f06f1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/3c25ebb4-004d-4684-bc7d-f4260e837b2c_resize.jpg) | 3:4 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192616_6499234b-651c-46fd-86f7-da3006fd393a.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192616_6499234b-651c-46fd-86f7-da3006fd393a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/f1e940c2-9935-4a1c-8c54-fbc9c11e6285_resize.jpg) | 3:4 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192858_5aff6d1a-8621-4f41-b3cc-7926c2670af9.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192858_5aff6d1a-8621-4f41-b3cc-7926c2670af9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/6c702712-895a-4c2e-b462-44011acf891c_resize.jpg) | 1:1 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_202414_47bcfab1-b279-443c-8848-8cb5548a60b1.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_202414_47bcfab1-b279-443c-8848-8cb5548a60b1_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/4fba4118-500a-4b3e-8756-be8814992b86_resize.jpg) | 4:3 | 1080p | 9 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192520_45727c2c-d6f0-4ea3-b568-acdf0f677e0d.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260831_192520_45727c2c-d6f0-4ea3-b568-acdf0f677e0d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/fb49637f-e4eb-4263-bdb9-4f77cb14b15e_resize.jpg) | 16:9 | 1080p | 9 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/boarding-pass.md](../../../presets/viral/boarding-pass.md)

Source: https://higgsfield.ai/effects/examples/boarding-pass (crawled page, extracted from embedded page data)
