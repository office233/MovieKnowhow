# Action figure

- **Site page:** https://higgsfield.ai/effects/examples/action-figure-exported
- **Preset id:** `7608c318-2752-407b-acd6-6fd33732bdbf` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `action-figure-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 267 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (toy/product-style reveal)

## What it does

A hand lifts you out of the scene like a rigid plastic action figure and rotates you for a toy-review showcase — same pose, same expression, completely stiff.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4500 credit_units (~45 credits)
- 480p: 3000 credit_units (~30 credits), same for every aspect ratio
- 720p: 4500 credit_units (~45 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio
- 4k: 22000 credit_units (~220 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/b98ae9ed-ec67-4e73-8e1d-df440181e908.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/082b9571-dbee-4b38-a9af-7007534aa6b8.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/8abeb9f7-3b91-4ce8-a9c9-bb1560949c1b.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/3c932148-7387-41a0-b93f-fc31dde21404.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/082b9571-dbee-4b38-a9af-7007534aa6b8.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/a037aa82-8b35-4464-b384-a3f454d31cd7.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_174450_e26fc9fc-953a-4d6b-a717-5b07909c5952_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_174450_e26fc9fc-953a-4d6b-a717-5b07909c5952_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/4344b933-3c6d-4c42-8eab-c47a40f0414e.png) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_160429_007fb612-27cd-4dc7-a0e5-b7ed611bc174_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_160429_007fb612-27cd-4dc7-a0e5-b7ed611bc174_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/9ba3cfe5-6103-4844-98f6-6cc4c5976a72.png) | 9:16 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_181241_253e04e8-940f-41c8-bfb7-0f0559282195_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_181241_253e04e8-940f-41c8-bfb7-0f0559282195_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/8c296753-7096-4fd8-94f0-649737412161.png) | 16:9 | 1080p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_165403_dc56fa19-460a-487a-8f41-aaf4ac0bcc96_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_165403_dc56fa19-460a-487a-8f41-aaf4ac0bcc96_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/111c47c4-7bab-4190-9b41-ed22b7b7d3bc.png) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_171127_a414d6b4-da0d-48e4-a75d-33101553d69f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_171127_a414d6b4-da0d-48e4-a75d-33101553d69f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/bcf80cea-3b65-4d40-a210-c5bea7d4a191.png) | 1:1 | 1080p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/action-figure.md](../../../presets/viral/action-figure.md)

Source: https://higgsfield.ai/effects/examples/action-figure-exported (crawled page, extracted from embedded page data)
