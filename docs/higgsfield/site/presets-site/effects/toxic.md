# Toxic

- **Site page:** https://higgsfield.ai/effects/examples/toxic
- **Preset id:** `27c5dbb2-9411-4c14-a55d-0004d304fcc6` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `toxic` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 276 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Radioactive neon color blast

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/9ea0e5af-9f30-4a2e-89ea-54fbf2ad4874.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/9f8407e6-7f75-405e-99e3-630164868262.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/b4f73a91-8636-4b00-b4cd-f2d0a768d10b.webp

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/f6b525c2-f6e2-4cf4-bc91-be39683283bb.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/f6b525c2-f6e2-4cf4-bc91-be39683283bb_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/bb0a789b-9481-4a20-b544-ebbf1a091b94.mp4) | 1920x1080 | 1k |  | 8 | 108 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/1d829616-09af-444b-b2a4-c42c0bf22b41.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/1d829616-09af-444b-b2a4-c42c0bf22b41_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/4807d93b-a8c7-4d53-8aed-dd6f7cd780b4.mp4) | 1920x1080 | 1k |  | 8 | 108 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/f8afb237-2da4-4a15-b391-daee5ec9c6a6.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/f8afb237-2da4-4a15-b391-daee5ec9c6a6_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/180a6779-5ba5-4e25-bfed-a6babf0afa5d.mp4) | 1920x1080 | 1k |  | 8 | 108 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/1737c361-df85-451f-81d2-4658ccce3292.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/1737c361-df85-451f-81d2-4658ccce3292_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/de52e516-ba1d-442f-ab74-d69b956ec439.mp4) | 1920x1080 | 1k |  | 8 | 108 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/99409d30-7056-4cd1-b44f-ff4cf586e1d2.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/99409d30-7056-4cd1-b44f-ff4cf586e1d2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/91fe9326-622c-475c-9001-4cc32b3b0057_trim.mp4) | 1920x1080 | 1k |  | 8 | 108 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/ab384777-87fd-4da1-a035-75f182079e34.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/ab384777-87fd-4da1-a035-75f182079e34_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/12442895-0343-49f9-8d7d-ed3723ac3209.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/toxic.md](../../../presets/viral/toxic.md)
- Mixed Media preset page note: [../mixed-media/toxic.md](../mixed-media/toxic.md) (Mixed Media preset id `fd3ca94d-6c3d-443f-970b-a4e8dd7338da`)

Source: https://higgsfield.ai/effects/examples/toxic (crawled page, extracted from embedded page data)
