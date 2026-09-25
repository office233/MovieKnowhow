# LSD

- **Site page:** https://higgsfield.ai/effects/examples/lsd
- **Preset id:** `16ac0b13-2e62-4764-9469-56ff287b6a08` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `lsd` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 242 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Hallucinogenic color waves

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
- Observed in sample/community jobs: 1k @ 8 fps, 4 s = 64 credits (32 frames x 2); 1k @ 10 fps, 5 s = 100 credits; 4k @ 10 fps, 5 s = 200 credits (x4 per frame). So credits = seconds x fps x per-frame rate (the per-frame numbers are already in credits).

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/f2163456-4099-4b1e-9f62-2d4953d2b7bf.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/e4f288a5-8d1a-4844-8958-80d3176d4b95.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/4ffe07f7-5751-40f0-80e5-3756f4f34d61.webp

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/ac4b060a-893d-4579-a8a1-15e61f418cac.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/ac4b060a-893d-4579-a8a1-15e61f418cac_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/5644fbde-9bd4-4996-b88b-3f92c95a0459.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/f865733c-6799-4bcb-b3d6-1e944a701fbc.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/f865733c-6799-4bcb-b3d6-1e944a701fbc_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/fbefaabd-69c9-4aeb-9c7c-dae22c379faf.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/e3f7968f-c700-44dd-b7e1-3cc1c15fb1bc.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/e3f7968f-c700-44dd-b7e1-3cc1c15fb1bc_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/610a7430-13c8-4111-ba60-3033950f149c.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/da2d814f-7efe-437e-b697-36f5800977bc.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/da2d814f-7efe-437e-b697-36f5800977bc_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/8e245b0e-43c5-44be-a79b-78425a3364a7.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/cd035bd2-b4d4-4c1a-ab49-012f78115deb.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/cd035bd2-b4d4-4c1a-ab49-012f78115deb_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/6633bac3-75ae-4184-b42d-413e90b16c83.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/4cae5d54-2fa2-48a6-a058-ef724c821225.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/4cae5d54-2fa2-48a6-a058-ef724c821225_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/a8e07b9c-9d49-43ca-9897-0ff8e1914467.mp4) | 1176x1756 | 1k |  | 10 | 100 | {"color": "#ffffff"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/lsd.md](../../../presets/viral/lsd.md)
- Mixed Media preset page note: [../mixed-media/lsd.md](../mixed-media/lsd.md) (Mixed Media preset id `c2b241c5-5239-4465-869f-fef60a06822e`)

Source: https://higgsfield.ai/effects/examples/lsd (crawled page, extracted from embedded page data)
