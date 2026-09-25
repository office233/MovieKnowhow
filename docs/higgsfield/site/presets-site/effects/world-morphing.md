# World morphing

- **Site page:** https://higgsfield.ai/effects/examples/world-morphing
- **Preset id:** `262d1281-9e6e-4530-b1b2-ce74f7a33df9` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `world-morphing` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 17 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (world folds, Inception-like)

## What it does

The entire background environment lifts and folds inward around a stationary central subject, dramatically morphing the landscape into a massive, gravity-defying enclosure. Built for surreal visual effects and mind-bending scene shifts.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, image_references |

## Settings

- **resolution:** 480p, 720p, 1080p (default `1080p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 9000 credit_units (~90 credits)
- 480p: 2500 credit_units (~25 credits), same for every aspect ratio
- 720p: 6500 credit_units (~65 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/950efc04-6ae6-4b31-bfa5-83c87244014c.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/0abb112e-068d-45e4-acea-9c8c44a16781.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub/ee10fe72-073f-4e63-a041-222216df6a5f.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/76f52d45-44eb-4f68-a5bd-c672dc29e4fa.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/b13fa8ff-d811-406a-8206-edfbb3fe5ab1.mp4

## Example generations (7 with settings; total on page: 7)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_195823_f251e15d-86bf-40ef-845b-fffb2de3a3e8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_195823_f251e15d-86bf-40ef-845b-fffb2de3a3e8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/7508f51f-e014-49cf-a42a-81008bff249b.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_213838_ca76a0cd-995a-4477-9128-dc5603f9ee13.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_213838_ca76a0cd-995a-4477-9128-dc5603f9ee13_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/928ee8ca-8b7a-414f-8f1b-e823cb074203.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/76a68fb0-4654-4c12-b092-50508a661995.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260829_202426_0e6b8f3e-386f-4583-afff-cf13c07e85b5.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260829_202426_0e6b8f3e-386f-4583-afff-cf13c07e85b5_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/8f5316a2-b307-401f-b1f9-e4c92c0dd4ee.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_122639_765e27ff-50e0-4331-99d9-87de94f15541.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_122639_765e27ff-50e0-4331-99d9-87de94f15541_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/96ee9b03-5d7c-4cc9-9f29-729c75d45a6e.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_195835_7241d9b8-dd76-47e0-a980-138a1320b58d.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_195835_7241d9b8-dd76-47e0-a980-138a1320b58d_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/ccba02a9-c725-46aa-8fda-d538cbabccc3.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_124417_48e48a3d-cd82-4125-9f57-5db34fa17571.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260903_124417_48e48a3d-cd82-4125-9f57-5db34fa17571_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/e8de0588-4a56-449d-8782-11458c001592.png) | 9:16 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260822_150913_4b2134c0-fcdd-42ad-abd6-dc18737b9628.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260822_150913_4b2134c0-fcdd-42ad-abd6-dc18737b9628_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/74410c4a-c583-4a70-8b82-f61581f51f8b.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/0f305438-dfb4-4eeb-8b46-2bdcc43a024f.png) | 4:3 | 1080p | 8 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/world-morphing.md](../../../presets/viral/world-morphing.md)

Source: https://higgsfield.ai/effects/examples/world-morphing (crawled page, extracted from embedded page data)
