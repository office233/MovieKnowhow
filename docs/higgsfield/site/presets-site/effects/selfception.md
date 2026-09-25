# Selfception

- **Site page:** https://higgsfield.ai/effects/examples/selfception
- **Preset id:** `2e215b1a-7df1-4c96-a97a-baf611f7d38e` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `selfception` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 13 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 5 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (recursive zoom)

## What it does

Endless versions of the subject repeat inside one another as the camera continuously zooms into the miniature figure held in their hands. Built for recursive illusions, seamless zoom loops, and mind-bending character edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2250 credit_units (~22.5 credits)
- 480p: 1500 credit_units (~15 credits), same for every aspect ratio
- 720p: 2250 credit_units (~22.5 credits), same for every aspect ratio
- 1080p: 4500 credit_units (~45 credits), same for every aspect ratio
- 4k: 11000 credit_units (~110 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/6ef62a07-2609-4693-8225-e6263b76afab.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/495d9e85-0417-47d9-9e0a-722ace805852.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/35363d03-4dfa-4414-82d4-0af3ef9221b4.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/f780e31b-fdaa-4f32-9cc6-f74ed051b72a.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/70520015-94d0-4851-bd51-605a0fddc44b.mp4

## Example generations (8 with settings; total on page: 8)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194317_9bbb4254-e04e-4269-9f49-6842f9c3e804.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194317_9bbb4254-e04e-4269-9f49-6842f9c3e804_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/b9dad35e-509c-4827-a3ea-11e247a159e7.png) | 9:16 | 4k | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194302_322eed38-b62e-4a23-b3b8-152831641a17.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194302_322eed38-b62e-4a23-b3b8-152831641a17_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/f1cfd2b5-d498-41ba-a7c4-8448b6c80365.png) | 9:16 | 4k | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_224308_1df17ccf-bfb0-4e9c-98aa-1da3df498586.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_224308_1df17ccf-bfb0-4e9c-98aa-1da3df498586_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/0413ab11-1bca-401e-a0bb-c6040c9adf56.png) | 3:4 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194944_116fc6a9-16f3-4658-a642-194efe10498e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_194944_116fc6a9-16f3-4658-a642-194efe10498e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/fc45af56-083c-4802-a57c-dcc37560c101.png) | 16:9 | 4k | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161442_c8bf958f-d3be-48cb-b2bd-6b6050c2e2c2.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161442_c8bf958f-d3be-48cb-b2bd-6b6050c2e2c2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/f4f18e63-3237-4ac1-84bf-3a38196b5614.png) | 3:4 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161313_b4120fbb-f6aa-4082-b4de-2266a16e60ec.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161313_b4120fbb-f6aa-4082-b4de-2266a16e60ec_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/43c7b928-3327-4d79-8883-6e0630695813.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/b5dac927-07b1-424a-8a1e-c2c21c639448.png) | 9:16 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161143_9e9de9e2-0ede-41ed-958e-05cd259fe505.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260826_161143_9e9de9e2-0ede-41ed-958e-05cd259fe505_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/8751995a-ce3c-4325-a289-8fa9e0fedbe6.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/51874d77-0415-4800-9327-642f9664ad5c.png) | 4:3 | 1080p | 5 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_174744_19bbf87d-9e39-4e41-92d6-fc1deb26187e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_174744_19bbf87d-9e39-4e41-92d6-fc1deb26187e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/ed7eb5b8-4903-441c-a753-ea3ffea47f77.png) | 16:9 | 1080p | 5 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/selfception.md](../../../presets/viral/selfception.md)

Source: https://higgsfield.ai/effects/examples/selfception (crawled page, extracted from embedded page data)
