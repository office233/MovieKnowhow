# Lava

- **Site page:** https://higgsfield.ai/effects/examples/lava
- **Preset id:** `3f631876-f34e-499f-87e6-bc9eada94581` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `lava` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 279 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Liquid lava color motion

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`color`, color picker) default `#7d26ad`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/d62537bf-2356-4131-90bb-c398a27c46c7.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/2553e368-e35c-4d9f-8b38-d670d94bad62.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/511241b1-0994-4a35-9d64-3cb347e3313f.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/91854908-738a-4103-a5d5-65beacd61a1a.mp4) · [poster](https://cdn.higgsfield.ai/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/91854908-738a-4103-a5d5-65beacd61a1a_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/e99bd26f-8144-4a18-9ef2-f9153a515cb9.mp4) | 1928x1076 | 1k |  | 8 | 80 | {"color": "#781ed2"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/d788db04-bfc3-40c0-8cd3-93bef5a8292d.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/d788db04-bfc3-40c0-8cd3-93bef5a8292d_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/25371035-d485-47cf-bedf-d757affc2d7b.mp4) | 1934x1080 | 1k |  | 12 | 140 | {"color": "#7d26ad"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/2f2acac0-3e05-4569-97d4-f6f88e6fab13.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/2f2acac0-3e05-4569-97d4-f6f88e6fab13_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/5148960e-5d7c-4d13-a6e4-ffd4b55f7bad.mp4) | 1920x1080 | 1k |  | 8 | 64 | {"color": "#7d26ad"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/7dd4338a-4036-48fa-adb0-93bf623fb0c9.mp4) · [poster](https://cdn.higgsfield.ai/user_34ymCzBjd5sPiSK3FtejvJl09UP/7dd4338a-4036-48fa-adb0-93bf623fb0c9_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/820a68fd-8947-42ea-990b-434566a803a5.mp4) | 1920x1080 | 1k |  | 8 | 70 | {"color": "#7d26ad"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/667a0484-33ce-4b32-9edb-85a8cfcd0d25.mp4) · [poster](https://cdn.higgsfield.ai/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/667a0484-33ce-4b32-9edb-85a8cfcd0d25_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34ymCzBjd5sPiSK3FtejvJl09UP/8f078774-4a23-4908-a431-82921d53bc98.mp4) | 1928x1076 | 1k |  | 8 | 80 | {"color": "#781ed2"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/lava.md](../../../presets/viral/lava.md)
- Mixed Media preset page note: [../mixed-media/lava.md](../mixed-media/lava.md) (Mixed Media preset id `bb33da96-918c-4754-ba55-6d0dcbaf5173`)

Source: https://higgsfield.ai/effects/examples/lava (crawled page, extracted from embedded page data)
