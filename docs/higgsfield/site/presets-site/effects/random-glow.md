# Random Glow

- **Site page:** https://higgsfield.ai/effects/examples/random-glow
- **Preset id:** `a036628d-9723-435a-9d24-1060a9ab3699` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `random-glow` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 275 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

random glow

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/7f697ee1-9df8-45c5-8523-005fb7482278.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/7a52a17e-75c5-4d69-b1d3-3e6c217369df.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/d1f27317-a3db-4000-98cd-527cfd6a66af.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/a344eca2-e43b-4519-ad1d-112aec0f2447.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/a344eca2-e43b-4519-ad1d-112aec0f2447_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/8e9d3a84-622f-4676-9a0e-6c83ec4b9a82.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/672596ce-dfcc-44aa-8797-3b2d757f3041.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/672596ce-dfcc-44aa-8797-3b2d757f3041_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/cc5b130d-77e5-457d-bbdb-b0aa38a0d2fa.mp4) | 1920x1080 | 1k |  | 8 | 92 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/random-glow.md](../../../presets/viral/random-glow.md)
- Mixed Media preset page note: [../mixed-media/random-glow.md](../mixed-media/random-glow.md) (Mixed Media preset id `f1706661-007e-424b-8734-b755d602d580`)

Source: https://higgsfield.ai/effects/examples/random-glow (crawled page, extracted from embedded page data)
