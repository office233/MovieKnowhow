# Modern

- **Site page:** https://higgsfield.ai/effects/examples/modern
- **Preset id:** `744ebc4f-b323-47a0-aefe-560663bfe1a7` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `modern` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 281 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Clean geometric minimalism

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Frame rate / resolution (Mixed Media):** `target_fps` 4-24 (samples used 8), `resolution` 1k / 2k / 4k, optional `start_seconds`/`end_seconds` trim.

## Pricing

- Pricing type: `frame_rate` — cost = number of output frames (clip seconds x target fps) x per-frame rate by resolution.
- Per-frame rate by resolution: {"1k": 2, "2k": 2, "4k": 4} (unit_scale 100)
- Limits: clip 1-10 s, 4-24 fps (trim via start_seconds/end_seconds)
- Observed: 1k @ 8 fps, 4 s clip = 64 credits (32 frames x 2) in the sample jobs below.

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/04bab337-d074-465d-9c5f-27e4eb270225.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/59ad84b2-f971-4432-a060-2113c0b9387a.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/2e59b4fc-9a29-4ddb-81f8-4328a86711d1.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3cf95ae2-1c86-4986-a477-220f3d33d8f9.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3cf95ae2-1c86-4986-a477-220f3d33d8f9_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/dacb847f-4159-442d-a834-484101698449.mp4) | 1928x1076 | 1k |  | 12 | 178 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/20c9e0cf-0dc4-41d8-934e-53daebe5541e.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/20c9e0cf-0dc4-41d8-934e-53daebe5541e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/8827b770-ad09-454e-a583-33179a224304.mp4) | 1928x1076 | 1k |  | 12 | 166 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/e5945623-cab8-47f0-93a4-682ab8628952.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/e5945623-cab8-47f0-93a4-682ab8628952_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/d143d78f-22d7-4163-a332-11aed38cb4c4.mp4) | 1920x1080 | 1k |  | 12 | 112 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/modern.md](../../../presets/viral/modern.md)
- Mixed Media preset page note: [../mixed-media/modern.md](../mixed-media/modern.md) (Mixed Media preset id `9196d356-1406-43ef-bc68-cb26e7eaf507`)

Source: https://higgsfield.ai/effects/examples/modern (crawled page, extracted from embedded page data)
