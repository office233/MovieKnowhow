# Tracking

- **Site page:** https://higgsfield.ai/effects/examples/tracking
- **Preset id:** `91506e72-9b2f-474d-ada5-e1b144699b86` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `tracking` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 239 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Dynamic object tracking lines

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Line style** (`type_of_lines`, select) default `Curved`; options:
  - `Curved` — Curved: Tracks movement using smooth, flowing curved paths. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/fffd56c0-1ab3-40b7-a45f-cb80a5a49249.webp))
  - `straight` — Straight: Tracks movement using rigid, linear paths. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/5a68510e-c3ca-45e2-ad76-e075591893ca.webp))
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/c694ed05-d2b0-4850-a1e9-2b90dcee95d8.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/e2ec7f9e-a599-4569-a1d7-4342da9479c3.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/60cbd4f9-2c0d-4a79-9909-ce2d15705162.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/9954a6f7-991d-4d51-a4e3-66621c0a26a9.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/9954a6f7-991d-4d51-a4e3-66621c0a26a9_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/44a2b7e1-60a3-4932-9495-57b192b31f10.mp4) | 1920x1440 | 2k |  | 12 | 240 | {"type_of_lines": "straight"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/4e872ded-3929-4351-b803-dcd97c97c329.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/4e872ded-3929-4351-b803-dcd97c97c329_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/6dfedc4b-6cd3-46d1-9e88-5e802bd78393.mp4) | 1920x1440 | 1k |  | 8 | 160 | {"type_of_lines": "Curved"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/325a4a53-8411-4209-95a7-bc487be4ba60.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/325a4a53-8411-4209-95a7-bc487be4ba60_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/a7c4e6c9-ebdd-4f1a-bf41-5f926c7c69e0.mp4) | 1920x1440 | 1k |  | 8 | 160 | {"type_of_lines": "straight"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/tracking.md](../../../presets/viral/tracking.md)
- Mixed Media preset page note: [../mixed-media/tracking.md](../mixed-media/tracking.md) (Mixed Media preset id `9fa35d36-e5f4-4488-9068-8813bd232a22`)

Source: https://higgsfield.ai/effects/examples/tracking (crawled page, extracted from embedded page data)
