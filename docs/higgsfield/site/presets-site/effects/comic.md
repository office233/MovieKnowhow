# Comic

- **Site page:** https://higgsfield.ai/effects/examples/comic
- **Preset id:** `f6566fe4-418b-46bc-9d13-bd4b19de0ff6` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `comic` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 231 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Graphic illustrated comic look

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/b2836797-7dc2-481c-8929-abc1ddbbb891.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/94ca24cf-0bc5-48da-9d70-461b0b83d93a.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/2dd9cb44-50cb-4778-9ab1-34d3ded303a7.webp

## Example generations (10 with settings; total on page: 10)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c2c73cf8-d00e-450d-b648-baf96e14d880.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c2c73cf8-d00e-450d-b648-baf96e14d880_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/a71551cb-7b5d-470a-920e-ac26e6986a26.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/4b4c713a-c80a-4073-bc4f-0c687b9ba068.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/4b4c713a-c80a-4073-bc4f-0c687b9ba068_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/d829b102-b9a1-4d29-a84b-4b81007da691.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/dfd10731-c2d8-42d7-9741-43319d5755f0.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/dfd10731-c2d8-42d7-9741-43319d5755f0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/5a0ac61f-073a-402d-8178-511207281088.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/6206908e-ef88-400e-a964-36e5f1520d91.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/6206908e-ef88-400e-a964-36e5f1520d91_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/3e5b34f0-ca38-4d24-bf20-9a37e594e2bd.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/d4de4576-b75d-4adf-895b-6a8a0a445d98.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/d4de4576-b75d-4adf-895b-6a8a0a445d98_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/fa97ff28-7c66-44c5-a2e6-105c735e8a01.mp4) | 1928x1076 | 2k |  | 8 | 80 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/82e8835c-ebcf-4010-9c11-49b53261ae64.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/82e8835c-ebcf-4010-9c11-49b53261ae64_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/75084248-acbe-4709-b478-dada3b95eff4.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/b98defce-5486-4fbb-8a07-8fd6b3052f44.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/b98defce-5486-4fbb-8a07-8fd6b3052f44_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/9f4416c6-6b9f-49b6-9a5a-70309465ea74.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/bc76d789-3ac3-4995-bd8a-03f4f89ea4aa.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/bc76d789-3ac3-4995-bd8a-03f4f89ea4aa_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/b9fdd0fa-b60f-4dca-b030-26e886e673a1.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/8643ad67-ee61-4a20-9e3c-8b9720c44382.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/8643ad67-ee61-4a20-9e3c-8b9720c44382_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/2a877f39-ac09-48e2-b548-275ec4181718.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/215933c9-a0d5-458b-a2bc-d46a1cc8f558.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/215933c9-a0d5-458b-a2bc-d46a1cc8f558_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/f0eec2c3-63bf-4e2c-aa6a-f7c2f24f37ea.mp4) | 1928x1076 | 2k |  | 10 | 100 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/comic.md](../../../presets/viral/comic.md)
- Mixed Media preset page note: [../mixed-media/comic.md](../mixed-media/comic.md) (Mixed Media preset id `94cd1315-c820-4314-806d-f1b0936e8a46`)

Source: https://higgsfield.ai/effects/examples/comic (crawled page, extracted from embedded page data)
