# Overexposed

- **Site page:** https://higgsfield.ai/effects/examples/overexposed
- **Preset id:** `e3329ff5-dd6f-4773-aa3d-a1d3fba3cc0d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `overexposed` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 250 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Extreme light exposure effect

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/2b60f7f8-19ab-4e0a-ad83-a96e4d4fb3d0.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/c09070e1-d568-4ea6-b7a1-406b5a8d9c39.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/897cd311-ed89-41e5-a070-e9f4fc0b5f6e.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/aabf67f1-fb91-401f-9b06-0487ffd17f22.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/aabf67f1-fb91-401f-9b06-0487ffd17f22_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/fc04e91f-61d2-4518-9970-c724f03a884c.mp4) | 1440x1080 | 1k |  | 12 | 92 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/f000e2bd-65d1-4ccf-9649-0f13d8920ee2.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/f000e2bd-65d1-4ccf-9649-0f13d8920ee2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/edeb99c9-6373-4bc1-aa77-83fd5b24bbeb.mp4) | 1934x1080 | 1k |  | 12 | 140 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c4a65a5b-5032-484e-bd8e-5569a6509a2e.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c4a65a5b-5032-484e-bd8e-5569a6509a2e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/1dc99ef3-ad6a-49a6-841c-ecc6f871e87b.mp4) | 1928x1076 | 1k |  | 12 | 120 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/overexposed.md](../../../presets/viral/overexposed.md)
- Mixed Media preset page note: [../mixed-media/overexposed.md](../mixed-media/overexposed.md) (Mixed Media preset id `1c79bffd-0839-42c3-90ab-2cd7e6ff4619`)

Source: https://higgsfield.ai/effects/examples/overexposed (crawled page, extracted from embedded page data)
