# Cold vision

- **Site page:** https://higgsfield.ai/effects/examples/cold-vision
- **Preset id:** `d5702ff7-e146-4369-bc84-8816929446ff` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `cold-vision` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 232 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Cold neon shadow lighting

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/a1a4d75a-b6e9-42fb-af01-be96d279b375.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/03511e0e-cf56-44fe-ad6c-bf0dd128573f.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/2e418ad7-f76e-46c7-8c30-8702fee56a4b.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/687bb04a-635e-4405-a4f5-58327e13de1b.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/687bb04a-635e-4405-a4f5-58327e13de1b_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/fffe5a58-e750-4721-890c-951d1099a2f1.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/19ed71d9-cf60-4868-91ff-4199dbedb612.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/19ed71d9-cf60-4868-91ff-4199dbedb612_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/9f5f5439-28dc-4d0b-aa7a-a951da0fba0f.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/2db1b734-d47d-4a1b-98c0-2b0e73dc03c2.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/2db1b734-d47d-4a1b-98c0-2b0e73dc03c2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/3b6ac55a-50da-4fc5-9029-8ad547fd78d2.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/cold-vision.md](../../../presets/viral/cold-vision.md)
- Mixed Media preset page note: [../mixed-media/cold-vision.md](../mixed-media/cold-vision.md) (Mixed Media preset id `d6ebc1b1-55b0-4379-8276-b46d47d8b056`)

Source: https://higgsfield.ai/effects/examples/cold-vision (crawled page, extracted from embedded page data)
