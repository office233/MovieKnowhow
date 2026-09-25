# Bubbles

- **Site page:** https://higgsfield.ai/effects/examples/bubbles
- **Preset id:** `ab21d192-ae60-411f-ae52-ddf9cd9fedd5` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `bubbles` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 268 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Dreamy soap bubble texture

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`color`, color picker) default `(none)`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/6eee81db-e7d6-4794-9190-39d0a8c1693c.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/c66d942e-c319-42fe-b25b-eff342516df4.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/93e3a48a-f97a-4291-92da-8d629e0eaf8e.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/a1cfdce0-2fa9-4208-83ca-b1024bd00e38.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/a1cfdce0-2fa9-4208-83ca-b1024bd00e38_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/b51dde65-7400-4a0c-8d05-69d523c5e9e8.mp4) | 1440x1440 | 1k |  | 8 | 80 | {"color": "#05ff9e"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/78dbe4cd-cfe9-4e0b-b93f-26f0acd48f2c.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/78dbe4cd-cfe9-4e0b-b93f-26f0acd48f2c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/e6b5b1a0-6acd-4d9e-99dd-b482a4a9b299.mp4) | 1440x1440 | 1k |  | 8 | 80 | {"color": "#ff0594"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/c8482afb-933c-42ce-91d2-c2ac037e20bd.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/c8482afb-933c-42ce-91d2-c2ac037e20bd_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/65fce0b8-3e48-4e48-8b0e-464db520d8fd.mp4) | 1440x1440 | 1k |  | 8 | 80 | {"color": "#cdff05"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/bubbles.md](../../../presets/viral/bubbles.md)
- Mixed Media preset page note: [../mixed-media/bubbles.md](../mixed-media/bubbles.md) (Mixed Media preset id `dacdca94-27b2-417a-bc8c-6d4168e6109a`)

Source: https://higgsfield.ai/effects/examples/bubbles (crawled page, extracted from embedded page data)
