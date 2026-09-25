# Ocean

- **Site page:** https://higgsfield.ai/effects/examples/ocean
- **Preset id:** `9ce05278-37ec-4cde-a483-c04868242f77` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `ocean` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 257 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Liquid sea color overlay

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`color`, color picker) default `#fc5bff`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/bcc94f8c-d4f6-4f1c-870c-258a98529418.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/a16ff2f4-1ec6-41e7-b64d-f61925d3b262.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/fbb7b211-6463-4e48-a673-fb970cb7e353.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_30SoPL3LiJARG7QHorTKWeKlLyE/6c76e215-f80a-47e9-ab40-f85414d9d455.mp4) · [poster](https://cdn.higgsfield.ai/user_30SoPL3LiJARG7QHorTKWeKlLyE/6c76e215-f80a-47e9-ab40-f85414d9d455_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_30SoPL3LiJARG7QHorTKWeKlLyE/a6b5aedd-aa3c-4f20-98b5-d3dc35d96eb6.mp4) | 1928x1072 | 1k |  | 8 | 62 | {"color": "#fc5bff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_30SoPL3LiJARG7QHorTKWeKlLyE/b3e31530-c64e-400d-a912-e338c4b3e301.mp4) · [poster](https://cdn.higgsfield.ai/user_30SoPL3LiJARG7QHorTKWeKlLyE/b3e31530-c64e-400d-a912-e338c4b3e301_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_30SoPL3LiJARG7QHorTKWeKlLyE/8c161ce6-3b17-432c-88b5-8557c3f7c866.mp4) | 1928x1072 | 1k |  | 10 | 84 | {"color": "#ef1515"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/ocean.md](../../../presets/viral/ocean.md)
- Mixed Media preset page note: [../mixed-media/ocean.md](../mixed-media/ocean.md) (Mixed Media preset id `19115d24-276e-4222-a23f-39cc23d9a326`)

Source: https://higgsfield.ai/effects/examples/ocean (crawled page, extracted from embedded page data)
