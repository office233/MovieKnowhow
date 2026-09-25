# Palette

- **Site page:** https://higgsfield.ai/effects/examples/palette
- **Preset id:** `3a4261c7-da21-4879-b4c1-f2516c5cd9be` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `palette` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 244 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Hand-painted color composition

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Brush type** (`brush_type`, select) default `oil`; options:
  - `oil` — Oil: A traditional paint medium using slow-drying, oil-based pigments ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/f0f09a0c-ef56-47e6-a68c-71c58727b072.webp))
  - `spray` — Spray: A paint application method that uses sprayed pigment for fast, even coverage ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/98bde39b-7a8f-43b3-bf06-59905edca335.webp))
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/26bed71d-7789-4a45-8d95-7c01f1474ca1.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/08178a2a-f0bf-4f95-b5ae-8e48fc8015e0.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/085d575a-d734-460f-a932-a45f88639c29.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/f3601029-ecd3-4956-9888-e888b8a36177.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/f3601029-ecd3-4956-9888-e888b8a36177_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c3d04c28-bf6e-476c-8243-78805b97426d.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"brush_type": "oil"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3d49bd47-b741-4531-9966-137798824678.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3d49bd47-b741-4531-9966-137798824678_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/ec830594-691d-4a9b-b936-cec7e4523a47.mp4) | 1936x1072 | 1k |  | 12 | 114 | {"brush_type": "oil"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/palette.md](../../../presets/viral/palette.md)
- Mixed Media preset page note: [../mixed-media/palette.md](../mixed-media/palette.md) (Mixed Media preset id `15b97a49-9912-4a58-8424-b4ef1c302a05`)

Source: https://higgsfield.ai/effects/examples/palette (crawled page, extracted from embedded page data)
