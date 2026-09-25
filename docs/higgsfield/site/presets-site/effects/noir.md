# Noir

- **Site page:** https://higgsfield.ai/effects/examples/noir
- **Preset id:** `dfef0d55-b122-4727-aa3d-9fc9ffda976b` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `noir` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 255 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Cinematic noir lighting

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
- Observed: 1k @ 8 fps, 4 s clip = 64 credits (32 frames x 2) in the sample jobs below.

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/9f68f799-81a0-47c0-8ed9-437a10c71cb9.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/448e170c-1c61-4151-b897-fa57c2a4276d.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/66c1b3e6-9468-468f-94cc-b5810e7dc385.webp

## Example generations (9 with settings; total on page: 9)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2cbd2e94-748a-40db-afef-cf0c31b3cb7d.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2cbd2e94-748a-40db-afef-cf0c31b3cb7d_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_3675GNge361XSvQV9fPdojfwRe5/44bb51a2-dd5a-46bb-9085-26736782d70f.mp4) | 1440x1440 | 4k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/cc3b182b-45fe-4aaa-a2b7-8b578ec67599.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/cc3b182b-45fe-4aaa-a2b7-8b578ec67599_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_3675GNge361XSvQV9fPdojfwRe5/869fe3b0-9912-4325-bfb8-ecd7dd718fc7.mp4) | 1440x1440 | 4k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/585c205f-536b-4b66-9a04-dd95befc90bc.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/585c205f-536b-4b66-9a04-dd95befc90bc_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/3642e4d4-2e7a-4c9f-94f3-b58a7cf1439a.mp4) | 2212x936 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e8c28ed2-afc7-49db-8e42-856caf099bca.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e8c28ed2-afc7-49db-8e42-856caf099bca_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/a0118065-a109-4ac9-9986-fe34cdb3cea9.mp4) | 1440x1440 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/47ffa796-4939-4511-927c-63c47c8632fc.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/47ffa796-4939-4511-927c-63c47c8632fc_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/c8e099e1-da53-45ce-a1be-fafcf06136e0.mp4) | 1440x1440 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/c6afcc5c-27b2-453f-a353-408cff6f10ee.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/c6afcc5c-27b2-453f-a353-408cff6f10ee_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/bb63aa2c-3125-41b3-a8e3-a33be7d1bca7.mp4) | 1440x1440 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bfe520bc-08d8-4685-962e-300886fdbe1d.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bfe520bc-08d8-4685-962e-300886fdbe1d_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/90851639-dedb-4ece-a211-8c5d9d3d2609.mp4) | 1440x1440 | 1k |  | 10 | 100 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2f18c590-5e50-40cf-baa3-f6b6c32d2b65.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2f18c590-5e50-40cf-baa3-f6b6c32d2b65_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_3675GNge361XSvQV9fPdojfwRe5/57a04579-c06c-438a-9491-a2062088c2b4.mp4) | 1440x1440 | 4k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2d27e4d8-e4fe-454c-a3a6-f09845b9ca86.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/2d27e4d8-e4fe-454c-a3a6-f09845b9ca86_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/981c9e9f-b515-45d6-89b5-40fe578ed2ce.mp4) | 2212x936 | 1k |  | 10 | 100 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/noir.md](../../../presets/viral/noir.md)
- Mixed Media preset page note: [../mixed-media/noir.md](../mixed-media/noir.md) (Mixed Media preset id `c92d1f34-8bc3-410a-99c4-4b8f387140ec`)

Source: https://higgsfield.ai/effects/examples/noir (crawled page, extracted from embedded page data)
