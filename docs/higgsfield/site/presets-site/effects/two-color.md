# Two color

- **Site page:** https://higgsfield.ai/effects/examples/two-color
- **Preset id:** `928dd98a-20e4-42f8-8772-0cb5c9a758f9` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `two-color` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 284 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

High-contrast two-tone style

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **First color** (`color_1`, color picker) default `#ad00ff`
- **Second color** (`color_2`, color picker) default `#83bfdc`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/70c0bc83-9ba2-49c5-9a5d-80fa7c118dcc.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/e5426b50-caea-4e84-9ea0-275da7da373d.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/352add22-1d8c-4c17-ab7b-2dac46d9db7b.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/7ba7945f-4262-4d6f-b28f-b4167b6034a0.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/7ba7945f-4262-4d6f-b28f-b4167b6034a0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/795484ed-7137-45b2-9cf8-1f5370572666.mp4) | 1920x1080 | 1k |  | 12 | 106 | {"color_1": "#0effa1", "color_2": "#ec287b"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3bab1c2a-3aa5-4204-a2b8-84cd93285479.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/3bab1c2a-3aa5-4204-a2b8-84cd93285479_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/eb3a9616-7f34-48e2-b218-6fe24db64d87.mp4) | 1920x1080 | 1k |  | 12 | 106 | {"color_1": "#ff0101", "color_2": "#00ff30"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c19df3c5-f3d9-4a5b-9376-d7f34b991936.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c19df3c5-f3d9-4a5b-9376-d7f34b991936_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/39c60dc4-263f-411f-8121-1242e55cd573.mp4) | 1920x1080 | 1k |  | 12 | 118 | {"color_1": "#ff0d0d", "color_2": "#aeed28"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/two-color.md](../../../presets/viral/two-color.md)
- Mixed Media preset page note: [../mixed-media/two-color.md](../mixed-media/two-color.md) (Mixed Media preset id `ac3612ce-b1c9-4034-a04b-b46732c2d7a3`)

Source: https://higgsfield.ai/effects/examples/two-color (crawled page, extracted from embedded page data)
