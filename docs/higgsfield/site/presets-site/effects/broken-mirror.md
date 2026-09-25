# Broken mirror

- **Site page:** https://higgsfield.ai/effects/examples/broken-mirror
- **Preset id:** `536da8e0-dbbc-4990-9bfc-5da9df93ac49` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `broken-mirror` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 277 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Broken glass reflection effect

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Background color** (`color_of_the_background`, color picker) default `(none)`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/20397c83-0280-4dc2-950c-5b72a548bd5f.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/41f316db-8201-4432-b986-ead4fa4e3ea4.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/895a6470-4ed5-4ea2-af62-db4dc4db5864.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/a393bc7e-4a21-4cb7-b22b-7247084b10d4.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/a393bc7e-4a21-4cb7-b22b-7247084b10d4_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/cd2e3cc3-7691-4df8-b3ab-8a4db0df4893.mp4) | 1920x1080 | 1k |  | 12 | 160 | {"color_of_the_background": "#000000"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/d47ad6f2-c283-4f0f-a7c5-dbb28f3f4b70.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/d47ad6f2-c283-4f0f-a7c5-dbb28f3f4b70_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/19319260-2699-4458-a617-ccfbba48e380.mp4) | 1920x1080 | 1k |  | 12 | 114 | {"color_of_the_background": "#ffffff"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/broken-mirror.md](../../../presets/viral/broken-mirror.md)
- Mixed Media preset page note: [../mixed-media/broken-mirror.md](../mixed-media/broken-mirror.md) (Mixed Media preset id `5d89951e-ac83-4c7f-ac47-4d8db50c835e`)

Source: https://higgsfield.ai/effects/examples/broken-mirror (crawled page, extracted from embedded page data)
