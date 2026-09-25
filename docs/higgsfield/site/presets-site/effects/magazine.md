# Magazine

- **Site page:** https://higgsfield.ai/effects/examples/magazine
- **Preset id:** `28f715ae-0f20-4e57-87b7-9a856e96621a` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `magazine` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 262 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Printed magazine visual look

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **First color** (`first_color`, color picker) default `#810000`
- **Second color** (`second_color`, color picker) default `#000ea1`
- **Third color** (`third_color`, color picker) default `#dfff00`
- **Fourth color** (`fourth_color`, color picker) default `(none)`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/f48ae4ba-635d-47ed-bbe5-0d519c009106.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/b8e1d24c-b389-4fe6-88c4-14a5e2bdcb32.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/c8e90697-7fdb-414d-84b2-839dd537be0c.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/2432d260-f5e7-4232-9455-b4f21dfa8d08.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/2432d260-f5e7-4232-9455-b4f21dfa8d08_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/82787af4-c988-475e-9e8e-227a96f484b3.mp4) | 1920x1080 | 1k |  | 8 | 130 | {"first_color": "#810000", "third_color": "#dfff00", "fourth_color": "#ffffff", "second_color": "#000ea1"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/517e8c65-7304-4f3f-af2b-bc77d9f56fc2.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/517e8c65-7304-4f3f-af2b-bc77d9f56fc2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/9983304c-c844-4192-8d76-f2653d0cb051.mp4) | 1920x1080 | 1k |  | 8 | 130 | {"first_color": "#810000", "third_color": "#dfff00", "fourth_color": "#ffffff", "second_color": "#000ea1"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/a7c65cbd-c9c5-4f8b-a91e-13fe64f76caa.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/a7c65cbd-c9c5-4f8b-a91e-13fe64f76caa_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/d0a69e5a-3b56-4b8e-aebf-d8dc3ef50c64.mp4) | 1920x1080 | 1k |  | 8 | 130 | {"first_color": "#810000", "third_color": "#dfff00", "fourth_color": "#ffffff", "second_color": "#000ea1"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/bd094490-739c-4e2a-91ae-dabc9bc2b7a8.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/bd094490-739c-4e2a-91ae-dabc9bc2b7a8_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/4af02312-825e-41de-bc43-6164529a5c8c.mp4) | 1920x1080 | 1k |  | 8 | 130 | {"first_color": "#810000", "third_color": "#dfff00", "fourth_color": "#ffffff", "second_color": "#000ea1"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/magazine.md](../../../presets/viral/magazine.md)
- Mixed Media preset page note: [../mixed-media/magazine.md](../mixed-media/magazine.md) (Mixed Media preset id `963c3300-8967-4880-b078-c956de4c1e12`)

Source: https://higgsfield.ai/effects/examples/magazine (crawled page, extracted from embedded page data)
