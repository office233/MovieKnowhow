# Paper

- **Site page:** https://higgsfield.ai/effects/examples/paper
- **Preset id:** `b3629014-bb3a-457d-88e9-448358233878` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `paper` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 274 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Handcrafted paper texture

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/e908cd25-8fc5-43b5-9835-f5193fcb1d46.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/e030016e-2e12-4444-8c63-47d3213808aa.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/74e4f171-3871-413c-8a37-b38cb48a39e6.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/d47a72c6-b3d4-4cb2-9bfd-e6d594cbb7ba.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/d47a72c6-b3d4-4cb2-9bfd-e6d594cbb7ba_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/0167d050-2f54-4089-b4a2-0a489330fc4f.mp4) | 1928x1072 | 1k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/27c301c0-c625-4ccf-b958-5a67d0fc0fcd.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/27c301c0-c625-4ccf-b958-5a67d0fc0fcd_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/9dc5c02b-2954-45e6-947a-4c2759f8d086.mp4) | 1080x1920 | 1k |  | 8 | 48 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/96dfbf6e-931f-4d40-8f28-e43aba8617f8.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/96dfbf6e-931f-4d40-8f28-e43aba8617f8_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_3675GNge361XSvQV9fPdojfwRe5/44bb51a2-dd5a-46bb-9085-26736782d70f.mp4) | 1080x1920 | 2k |  | 10 | 60 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/53fb1ffc-4d6a-4402-b111-847c7751d4f7.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/53fb1ffc-4d6a-4402-b111-847c7751d4f7_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vtxM3DRcDcQIjpmiCpUDF2wcAT/ef1572a5-1498-4d84-9933-a125f048a03e.mp4) | 1936x1080 | 1k |  | 8 | 94 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/paper.md](../../../presets/viral/paper.md)
- Mixed Media preset page note: [../mixed-media/paper.md](../mixed-media/paper.md) (Mixed Media preset id `f63bf420-f98a-44e6-ba54-3f7eaa599d40`)

Source: https://higgsfield.ai/effects/examples/paper (crawled page, extracted from embedded page data)
