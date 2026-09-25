# Akrill

- **Site page:** https://higgsfield.ai/effects/examples/akrill
- **Preset id:** `9552b708-eaac-4fc0-ab3a-e9e5dacb4e9a` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `akrill` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 261 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Layered acrylic color blocks

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Background color** (`color_of_the_background`, color picker) default `#000000`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/59a6a0fb-834e-4e86-b41e-5f21ce8ee55a.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/d6648ba5-8188-4842-ac68-e4356dd5f483.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/cb2cd718-ac06-4324-a588-7ff0756c2231.webp

## Example generations (3 with settings; total on page: 3)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/db01b2b2-9aca-4204-a9c0-f53192e41f4f.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/db01b2b2-9aca-4204-a9c0-f53192e41f4f_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/a0b5b0a1-d93f-46c1-b20c-017c71274220.mp4) | 1924x1076 | 2k |  | 10 | 100 | {"color_of_the_background": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/73d2c473-ab9c-4d9a-9c43-9cd4bb69e350.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/73d2c473-ab9c-4d9a-9c43-9cd4bb69e350_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/b1ece837-60cc-4dea-96fd-5440d27594bc.mp4) | 1924x1076 | 2k |  | 8 | 80 | {"color_of_the_background": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/aa9f9adf-2f55-487e-a143-36e12aa44cb0.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/aa9f9adf-2f55-487e-a143-36e12aa44cb0_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/8863530e-9853-4e99-b492-427ad553eb30.mp4) | 1924x1076 | 2k |  | 10 | 100 | {"color_of_the_background": "#ffffff"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/akrill.md](../../../presets/viral/akrill.md)
- Mixed Media preset page note: [../mixed-media/akrill.md](../mixed-media/akrill.md) (Mixed Media preset id `73f9e01d-eb92-41d6-9119-53cc2686ecfa`)

Source: https://higgsfield.ai/effects/examples/akrill (crawled page, extracted from embedded page data)
