# Marble

- **Site page:** https://higgsfield.ai/effects/examples/marble
- **Preset id:** `ea4f53a8-a265-44ed-8f25-b7ce86da16b9` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `marble` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 280 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Sculpted marble visual style

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`color`, color picker) default `#ffffff`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/f300c8f1-9071-4737-abd0-9f7dbd354519.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/00006660-8b5e-426a-ad0e-51b02c8c14f7.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/dd6f957f-f361-4b22-b7e8-2767df951fdd.webp

## Example generations (2 with settings; total on page: 2)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/824b7979-76c5-4d67-b0c6-5051e99cfdb9.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/824b7979-76c5-4d67-b0c6-5051e99cfdb9_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/82ba72ab-2d6d-43dc-b726-f31e7b21da46.mp4) | 1920x1080 | 1k |  | 10 | 74 | {"color": "#ef0808"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/b71e9ba4-fa89-459c-a2e2-11ab8e621b41.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/b71e9ba4-fa89-459c-a2e2-11ab8e621b41_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/b73071a6-d968-4d39-857b-df27e51169a5_trim.mp4) | 1920x1080 | 1k |  | 12 | 148 | {"color": "#1896eb"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/marble.md](../../../presets/viral/marble.md)
- Mixed Media preset page note: [../mixed-media/marble.md](../mixed-media/marble.md) (Mixed Media preset id `ff617894-b1bc-4931-85b3-1e5b159d2106`)

Source: https://higgsfield.ai/effects/examples/marble (crawled page, extracted from embedded page data)
