# Flash comic

- **Site page:** https://higgsfield.ai/effects/examples/flash-comic
- **Preset id:** `fec762be-6b12-4fb3-92dc-588522ac814f` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `flash-comic` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 273 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

High-energy comic visuals

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/cd6524d8-d06f-4d6c-8883-9177b537840f.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/7ef545e5-b424-45cb-a812-990a2773602e.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/a3608aaa-f1c5-4574-9830-864294272510.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/0f9fc17c-0940-45b5-9216-c98c1577b996.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/0f9fc17c-0940-45b5-9216-c98c1577b996_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/612a40e8-821d-4dbc-8c34-283bc5111385.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/122103df-362e-402f-8a3d-bdadbc1e1dc0.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/122103df-362e-402f-8a3d-bdadbc1e1dc0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bccb0906-8a98-4bf5-876b-b823986930d4.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/flash-comic.md](../../../presets/viral/flash-comic.md)
- Mixed Media preset page note: [../mixed-media/flash-comic.md](../mixed-media/flash-comic.md) (Mixed Media preset id `3fbd5057-50e1-4d1d-9a6f-8655836711b8`)

Source: https://higgsfield.ai/effects/examples/flash-comic (crawled page, extracted from embedded page data)
