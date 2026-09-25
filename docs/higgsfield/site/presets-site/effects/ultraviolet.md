# Ultraviolet

- **Site page:** https://higgsfield.ai/effects/examples/ultraviolet
- **Preset id:** `be3585f5-8246-4670-87a7-19c750e6da02` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `ultraviolet` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 285 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Neon ultraviolet glow effect

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/dd675cab-cc8e-4305-96b7-9a808df33321.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/097b4dcb-ed44-4846-9557-67e709626b9b.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/44428da1-76f4-4454-b90c-2940562f3054.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/7289564d-0a03-450f-abcf-588a81c5a818.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/7289564d-0a03-450f-abcf-588a81c5a818_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/d95e9a61-5e98-4fe2-9f1d-1b47e4081ba4.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bbee6f55-7929-4a22-8bf8-88549ccd4264.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bbee6f55-7929-4a22-8bf8-88549ccd4264_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/890c3534-d32c-4b89-b711-14a5bb6f23ee.mp4) | 1920x1080 | 1k |  | 8 | 86 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/ultraviolet.md](../../../presets/viral/ultraviolet.md)
- Mixed Media preset page note: [../mixed-media/ultraviolet.md](../mixed-media/ultraviolet.md) (Mixed Media preset id `c9682e42-9891-4118-86bb-f8cf79c84055`)

Source: https://higgsfield.ai/effects/examples/ultraviolet (crawled page, extracted from embedded page data)
