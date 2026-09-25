# Cannabis

- **Site page:** https://higgsfield.ai/effects/examples/cannabis
- **Preset id:** `7ffc5f58-47d0-46f8-b90c-8539f70c3d13` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `cannabis` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 265 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Smoky psychedelic poster look

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`color`, color picker) default `#de2323`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/ca8b9113-730d-4594-b916-6d530b16df8a.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/812e4d6b-cb10-47ff-8c6f-942232a3b60b.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/9fb84e9f-6bc3-4855-90db-0a8eac453604.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/3e48c60b-9d99-418b-a619-1aabdbe9d232.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/3e48c60b-9d99-418b-a619-1aabdbe9d232_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/5bab90f9-0f6f-47bc-b8ad-d27237d245e3.mp4) | 1920x1080 | 1k |  | 8 | 80 | {"color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e47ea69e-f5cf-4089-b084-3ab0ff91806c.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e47ea69e-f5cf-4089-b084-3ab0ff91806c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/e6046bff-90ce-4817-aa5e-2c089fcaa615.mp4) | 1920x1080 | 2k |  | 8 | 80 | {"color": "#cf1111"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/0016951d-9962-4759-96db-ebed7b090e0c.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/0016951d-9962-4759-96db-ebed7b090e0c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/1f44a717-dd07-4386-8ba8-19340e1e57b6.mp4) | 1920x1080 | 1k |  | 8 | 80 | {"color": "#f211a6"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/37bea3c7-835e-4d39-b348-78815c9ba842.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/37bea3c7-835e-4d39-b348-78815c9ba842_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/1fa01dd9-d952-487a-814e-11c9aec4e3e5.mp4) | 1920x1080 | 1k |  | 8 | 80 | {"color": "#cf1111"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/cannabis.md](../../../presets/viral/cannabis.md)
- Mixed Media preset page note: [../mixed-media/cannabis.md](../mixed-media/cannabis.md) (Mixed Media preset id `c90cd302-d409-48fd-8643-36c34d7798e4`)

Source: https://higgsfield.ai/effects/examples/cannabis (crawled page, extracted from embedded page data)
