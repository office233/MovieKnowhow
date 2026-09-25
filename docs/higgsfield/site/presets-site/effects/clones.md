# Clones

- **Site page:** https://higgsfield.ai/effects/examples/clones
- **Preset id:** `32650589-e3dc-48c7-b26d-c1116e3acf9d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `clones` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 10 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (fashion clones)

## What it does

Identical clones appear throughout the scene, mirroring the subject’s movements as the original steps toward the camera. Built for surreal fashion edits, synchronized performances, and playful music videos.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, input_images |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3150 credit_units (~31.5 credits)
- 480p: 2100 credit_units (~21 credits), same for every aspect ratio
- 720p: 3150 credit_units (~31.5 credits), same for every aspect ratio
- 1080p: 6300 credit_units (~63 credits), same for every aspect ratio
- 4k: 15400 credit_units (~154 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/9cedf121-64a9-4eb9-88e9-608844ff1929.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/e56a428d-6795-49f2-a456-6457ce90b346.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/8699498d-03a0-4095-b135-377cb94097ca.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/ea4416bb-cfab-47ed-81f6-099f74912648.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/2f7f9e5d-6bb6-4bf5-ad26-80c4e3ff0681.mp4

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184858_ca2b3ca8-0323-4d1a-b1fa-9e458cc61628.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184858_ca2b3ca8-0323-4d1a-b1fa-9e458cc61628_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/d08b952f-dc9f-42a3-8611-d48bc1a3ed2b.png) | 4:3 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184953_c1c84f30-de8b-4b40-b706-e505f96cdd5c.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184953_c1c84f30-de8b-4b40-b706-e505f96cdd5c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/d27d6e00-ecc7-41d6-8c48-62780e96b53b.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184843_a1751f82-3cf0-4885-8dfd-a44c593a723e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_184843_a1751f82-3cf0-4885-8dfd-a44c593a723e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/8c66319e-2a9e-4828-8f26-cd5d4b55dead.png) | 3:4 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_185008_f76dd2b7-94d2-49be-95da-321ad772c658.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_185008_f76dd2b7-94d2-49be-95da-321ad772c658_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1627fd1f-c9c6-475b-a5c9-d49666d29fec.png) | 1:1 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_185021_dc762a3f-1505-40d8-aa64-376886729b5e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_185021_dc762a3f-1505-40d8-aa64-376886729b5e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/fc227e21-3145-41c6-bf52-524d18c1660d.png) | 16:9 | 1080p | 7 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_165121_30a85651-66b7-454e-a47d-5041f23c92f9.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260904_165121_30a85651-66b7-454e-a47d-5041f23c92f9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/af7197ce-0a96-4c1b-97c2-e92421a516ff.png) | 3:4 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/clones.md](../../../presets/viral/clones.md)

Source: https://higgsfield.ai/effects/examples/clones (crawled page, extracted from embedded page data)
