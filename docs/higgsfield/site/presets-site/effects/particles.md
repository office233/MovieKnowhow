# Particles

- **Site page:** https://higgsfield.ai/effects/examples/particles
- **Preset id:** `f1f09357-8db4-4932-b598-4b62e962a716` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `particles` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 234 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Luminous particles in motion

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/27b85cfd-0747-4375-969f-b93eb9da19de.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/8376156c-dd55-4321-b3af-5f808eb71b8f.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/e208fbf0-fefa-4245-b2e7-9300b0d9e9a6.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/a4018bd1-be00-4b37-9cef-f6e6f2034ee2.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/a4018bd1-be00-4b37-9cef-f6e6f2034ee2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/d9529e16-0981-4a87-9af3-996b4cf7b623.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/8030e9c2-1fe0-43a9-9f15-2edab3f99397.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/8030e9c2-1fe0-43a9-9f15-2edab3f99397_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/039639a3-8bd3-4619-abe8-f9284ea02b07.mp4) | 1936x1080 | 1k |  | 8 | 94 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/2b2a5b2d-3f95-4f30-bda5-b857d8328639.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/2b2a5b2d-3f95-4f30-bda5-b857d8328639_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/bb52b30b-e41a-42d4-acc6-c6051c75dd38.mp4) | 1928x1076 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/c8b7bbbe-44ac-4e16-99dc-22db235ab2c0.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/c8b7bbbe-44ac-4e16-99dc-22db235ab2c0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/b3832b2b-af5c-44e3-b6d5-0d5dda11984a.mp4) | 1080x1438 | 1k |  | 8 | 94 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/8f3054c9-3882-48c5-be00-4f93c8a4cbf6.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/8f3054c9-3882-48c5-be00-4f93c8a4cbf6_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/431d551f-6edd-4aaa-812c-67fa175f8439.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/particles.md](../../../presets/viral/particles.md)
- Mixed Media preset page note: [../mixed-media/particles.md](../mixed-media/particles.md) (Mixed Media preset id `386ebb9d-643f-4108-a12f-3f867f18fb36`)

Source: https://higgsfield.ai/effects/examples/particles (crawled page, extracted from embedded page data)
