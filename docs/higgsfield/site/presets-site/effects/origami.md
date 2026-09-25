# Origami

- **Site page:** https://higgsfield.ai/effects/examples/origami
- **Preset id:** `35b52620-f7b6-400a-9664-3f93838fe01f` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `origami` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 283 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Crisp origami-style geometr

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/4b844a70-1eb9-4ac2-b2ea-9e017f7fa31a.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/7c9692ba-9b67-4dfa-82c4-4d6f9483026a.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/4b7c53a9-935f-4349-9b1e-2249d7e8a604.webp

## Example generations (12 with settings; total on page: 12)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/f99985db-1482-45d3-b3ad-01e24c70fb13.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/f99985db-1482-45d3-b3ad-01e24c70fb13_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/0efb372a-40fc-425e-8278-252e8f61b1e3.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/47e9d110-c5ff-4e77-a269-6cdcb4f4652a.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/47e9d110-c5ff-4e77-a269-6cdcb4f4652a_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/ee1afb3c-f663-46da-b747-b71653bf9408.mp4) | 1928x1076 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/fdc216c7-d728-444c-b77b-b3c09cb40621.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/fdc216c7-d728-444c-b77b-b3c09cb40621_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/c643d0c7-ae21-4e98-8fe2-be15e4c1f6aa.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c09d2594-2376-4d56-90c8-061a72d47e5e.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c09d2594-2376-4d56-90c8-061a72d47e5e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/82a4acec-d1e5-4ea7-ae10-4938386b4ec3.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/9d58884f-d5f4-47e0-a39c-7117cce03448.mp4) · [poster](https://cdn.higgsfield.ai/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/9d58884f-d5f4-47e0-a39c-7117cce03448_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/3c318693-7242-417c-8671-9ed5c3f814b9.mp4) | 1928x1076 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/2d2c43a9-63cf-4f45-9aac-e460d1d3ac5d.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/2d2c43a9-63cf-4f45-9aac-e460d1d3ac5d_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/a8c2e385-402a-4843-a73b-c8369529486b.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/77092dac-441e-4b77-bc4c-b6c090b75a7f.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/77092dac-441e-4b77-bc4c-b6c090b75a7f_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/3c318693-7242-417c-8671-9ed5c3f814b9.mp4) | 1928x1076 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/1552268f-c5b3-47da-9fa0-9bca6dcd1d6c.mp4) · [poster](https://cdn.higgsfield.ai/user_2x8ap0ZOdCcy5oLs7FeVpLjH02w/1552268f-c5b3-47da-9fa0-9bca6dcd1d6c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/ee1afb3c-f663-46da-b747-b71653bf9408.mp4) | 1928x1076 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c4073e43-cf8e-405b-b0a6-b431a703f158.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c4073e43-cf8e-405b-b0a6-b431a703f158_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/a1233076-09b0-43a2-a8ae-e13bc2a6051a.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/420d9ded-9ed5-4784-83fb-d7781c2f997d.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/420d9ded-9ed5-4784-83fb-d7781c2f997d_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/9376a5d2-3efb-4c60-bd96-b8b59ad603eb.mp4) | 1176x1756 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/127c3972-ffe4-47aa-950e-342827f55671.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/127c3972-ffe4-47aa-950e-342827f55671_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/3a4bc8e2-0f8b-4025-afe2-8ef867680bdb.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/05f70133-bf3c-4c69-b9e5-c6e69195acdf.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/05f70133-bf3c-4c69-b9e5-c6e69195acdf_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/029b5810-4ed9-4252-a5cf-82b712729c81.mp4) | 1928x1072 | 2k |  | 10 | 100 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/origami.md](../../../presets/viral/origami.md)
- Mixed Media preset page note: [../mixed-media/origami.md](../mixed-media/origami.md) (Mixed Media preset id `8c88dac7-0314-40b4-b611-5dcd3fda004d`)

Source: https://higgsfield.ai/effects/examples/origami (crawled page, extracted from embedded page data)
