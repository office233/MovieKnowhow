# Lacewalker

- **Site page:** https://higgsfield.ai/effects/examples/lacewalker
- **Preset id:** `7ca07da7-5471-48fa-80a7-97a29a7ec2bc` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `lacewalker` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 20 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** product ad (fashion/handbags)

## What it does

A miniature version of the subject strolls past their giant counterpart before balancing on a thin strap stretched between oversized handbags. Built for playful scale illusions, surreal fashion campaigns, and imaginative product showcases.

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
- Default settings: 5200 credit_units (~52 credits)
- 480p: 2000 credit_units (~20 credits), same for every aspect ratio
- 720p: 5200 credit_units (~52 credits), same for every aspect ratio
- 1080p: 7200 credit_units (~72 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/d806368c-0d8a-4a7b-b43a-8ff22fa64563.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/ef3dfc4c-a4c2-44a0-af27-d005bd1c319d.webp
- Full-res preview (mp4, 1280x720): https://cdn.higgsfield.ai/viral_hub/3ad11ddc-d1dd-4e57-863a-d2fd59d6db35.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/105773a7-8987-4af0-841f-75f680dd521a.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/c078a088-f71e-49a0-becb-198eaa89f83a.mp4

## Example generations (10 with settings; total on page: 10)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161355_d5ac0979-323f-48e8-a8ae-46e73617be68.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161355_d5ac0979-323f-48e8-a8ae-46e73617be68_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1705d39d-3ed7-4419-aa65-7ea3652ad601.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195626_cbf8ace5-f3bb-4f2d-b4bd-0b25dd069366.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195626_cbf8ace5-f3bb-4f2d-b4bd-0b25dd069366_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/d10feefb-41ff-491f-ac9f-91ddff2e2aa9.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161406_c6e4ac98-2928-49c4-9237-c4d93a353e95.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161406_c6e4ac98-2928-49c4-9237-c4d93a353e95_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/156ef4e7-3a6a-4f57-b0c8-b70c8e51b786.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_172034_c421087f-3c1f-4fb8-98ec-fb996a3f1952.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_172034_c421087f-3c1f-4fb8-98ec-fb996a3f1952_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/bdc7efb8-e3aa-4a66-ae22-e02e0c546b14.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161340_e3935c64-1680-4c48-8073-7b7bd3aa0b1f.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161340_e3935c64-1680-4c48-8073-7b7bd3aa0b1f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/eb928d1f-8681-43a9-b087-fb501bdfd13e.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_164128_60879478-d414-4eb3-9f91-c0c879e63e7a.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_164128_60879478-d414-4eb3-9f91-c0c879e63e7a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/d0533cb2-49ce-4af0-9f06-c815119bca7c.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_174534_5f093f8c-3157-4ced-886f-4c7629d1cd7f.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_174534_5f093f8c-3157-4ced-886f-4c7629d1cd7f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/65bf484e-c7a5-47dd-b9f8-9bfca06ec5a4.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195824_3e2e12c9-70a8-491c-9d85-d1feed97ce51.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195824_3e2e12c9-70a8-491c-9d85-d1feed97ce51_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/ac1251a0-024a-4291-adf0-4d88ba7b1480.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195656_3dddf13e-4ec2-40f1-b5ee-8a123e80eb82.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_195656_3dddf13e-4ec2-40f1-b5ee-8a123e80eb82_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/3e64cbb0-ad42-482e-8f4c-5e6232fcef70.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161316_12b46708-ce51-445d-8bd2-b1d786a006a5.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_161316_12b46708-ce51-445d-8bd2-b1d786a006a5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/63ef9df9-a1c0-4740-b526-92d617b2befb.png) | 4:3 | 1080p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/lacewalker.md](../../../presets/viral/lacewalker.md)

Source: https://higgsfield.ai/effects/examples/lacewalker (crawled page, extracted from embedded page data)
