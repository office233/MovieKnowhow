# Multiverse

- **Site page:** https://higgsfield.ai/effects/examples/multiverse
- **Preset id:** `a8bc6ac3-f47c-40f9-900d-96fc06f20da7` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `multiverse` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 253 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Layered reality collision effect

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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/f12b80d6-b7dc-48ac-8a77-8eadcee6e3ac.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/e8956394-cbd6-4e10-9491-899a9c993131.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/06c621a6-080e-46dc-8ccf-f97f3ba4f46b.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e8e1a66b-b4ba-4454-8b53-acf324e8e629.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e8e1a66b-b4ba-4454-8b53-acf324e8e629_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/539e8d5b-c675-4a1a-8264-c97d5eb6f611.mp4) | 1920x1440 | 1k |  | 8 | 160 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/59f3b1ca-ed3c-4aae-86d8-bf8d3d71a85b.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/59f3b1ca-ed3c-4aae-86d8-bf8d3d71a85b_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/5ad0b614-854f-467d-904a-d11e11eb6dee.mp4) | 1920x1440 | 2k |  | 8 | 160 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/80dd359a-d8e3-4df5-b4aa-e41f785a70fd.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/80dd359a-d8e3-4df5-b4aa-e41f785a70fd_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTjCkSoyo0HOZUjeGKYV6oFaY/e3579d3e-f7a4-45a1-b957-497ddb3270d7.mp4) | 1920x1440 | 1k |  | 8 | 160 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/046e0e3f-a8ec-4978-b73f-64f0d34be079.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/046e0e3f-a8ec-4978-b73f-64f0d34be079_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/966c3605-b043-4426-8edc-5a22d1d26f3d.mp4) | 1920x1440 | 2k |  | 8 | 160 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/multiverse.md](../../../presets/viral/multiverse.md)
- Mixed Media preset page note: [../mixed-media/multiverse.md](../mixed-media/multiverse.md) (Mixed Media preset id `c38c2630-3986-4e28-858f-596fd254e5e9`)

Source: https://higgsfield.ai/effects/examples/multiverse (crawled page, extracted from embedded page data)
