# Vintage

- **Site page:** https://higgsfield.ai/effects/examples/vintage
- **Preset id:** `f9f7c94c-beca-4799-8276-238e54390a9d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `vintage` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 286 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Hand-inked illustrated style

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
- Observed in sample/community jobs: 1k @ 8 fps, 4 s = 64 credits (32 frames x 2); 1k @ 10 fps, 5 s = 100 credits; 4k @ 10 fps, 5 s = 200 credits (x4 per frame). So credits = seconds x fps x per-frame rate (the per-frame numbers are already in credits).

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/9b029b09-f910-431e-94c0-b9ca6db41715.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/b837742c-3354-4502-80af-fe0a415fb4f5.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/7c808642-4f51-4a48-b5e1-dfba47e99147.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/1c1bbe88-bd15-4da3-801c-5c86518490fe.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/1c1bbe88-bd15-4da3-801c-5c86518490fe_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/cdd81c2b-07ac-4137-bd10-b9b74855a8d8.mp4) | 1920x1080 | 1k |  | 12 | 82 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/20d887d6-5e1f-47d9-8599-1c9b54fc3c51.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/20d887d6-5e1f-47d9-8599-1c9b54fc3c51_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/b87f043c-7ef3-477c-8094-38c514899bcb.mp4) | 1934x1080 | 1k |  | 12 | 140 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/36a0bdac-3f36-4c79-9c97-6ea9e40535f0.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/36a0bdac-3f36-4c79-9c97-6ea9e40535f0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/6aa738e0-8768-44c7-a87d-ae3ed6f6709a.mp4) | 1928x1072 | 1k |  | 12 | 120 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/vintage.md](../../../presets/viral/vintage.md)
- Mixed Media preset page note: [../mixed-media/vintage.md](../mixed-media/vintage.md) (Mixed Media preset id `ee12f76c-ed17-4471-bf2e-52bda1bcae64`)

Source: https://higgsfield.ai/effects/examples/vintage (crawled page, extracted from embedded page data)
