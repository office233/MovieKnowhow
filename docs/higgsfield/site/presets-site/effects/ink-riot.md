# Ink Riot

- **Site page:** https://higgsfield.ai/effects/examples/ink-riot
- **Preset id:** `aa5d78cc-00bf-466d-bb91-aff6ea79495c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `ink-riot` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 227 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Stacked mixed-media composition

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Background color** (`background_color`, color picker) default `#ffffff`
- **Mid layer color** (`mid_layer_color`, color picker) default `#790000`
- **Main object color** (`main_object_color`, color picker) default `#000000`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/c3fcf814-6542-4b51-a704-3b76153c91c6.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/2d4a39c0-21e4-48b8-90ed-83f29598f90c.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/605f1de6-4922-4c7c-90c6-4a53c5a2a70e.webp

## Example generations (6 with settings; total on page: 6)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/449530bb-454b-4956-b426-991ad7b6abe8.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/449530bb-454b-4956-b426-991ad7b6abe8_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/431cfc84-e0f5-4545-bb37-a67457a0e646.mp4) | 1920x1080 | 1k |  | 8 | 124 | {"mid_layer_color": "#4037ed", "background_color": "#000000", "main_object_color": "#ff0a0a"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/dbc7105a-5233-47d7-8261-abfe04385790.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/dbc7105a-5233-47d7-8261-abfe04385790_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/375c07a0-c3e1-4bed-8bb7-60c81cc8a38e.mp4) | 1920x1080 | 1k |  | 8 | 84 | {"mid_layer_color": "#7e7eff", "background_color": "#f6e8e8", "main_object_color": "#fc0088"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/de84f301-4e92-4e3c-83ab-c9f77ddc5fa7.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/de84f301-4e92-4e3c-83ab-c9f77ddc5fa7_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/8ea2e003-39d9-434d-9a37-e715ce0d9ec0.mp4) | 1920x1080 | 1k |  | 8 | 84 | {"mid_layer_color": "#1919bd", "background_color": "#f6e8e8", "main_object_color": "#fcfa00"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/01227e48-cb45-4d84-ad7c-345a32928583.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/01227e48-cb45-4d84-ad7c-345a32928583_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/1bb13c1a-041b-4929-b5b2-e2cc96a9b3cd.mp4) | 1920x1080 | 1k |  | 8 | 80 | {"mid_layer_color": "#0000ff", "background_color": "#f6e8e8", "main_object_color": "#51ff0a"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/ad3c9a68-3adc-49af-9d7e-26f1a63cbeca.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/ad3c9a68-3adc-49af-9d7e-26f1a63cbeca_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/bf063485-3597-4f3c-8542-22171d537961.mp4) | 1920x1080 | 1k |  | 8 | 124 | {"mid_layer_color": "#000000", "background_color": "#ffffff", "main_object_color": "#faff09"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/9872ce76-9a4e-4e4b-96ba-3dae5778ec2e.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/9872ce76-9a4e-4e4b-96ba-3dae5778ec2e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/cb2f94e1-31ba-470f-a917-67db12c128b2.mp4) | 1920x1080 | 1k |  | 8 | 84 | {"mid_layer_color": "#bd1919", "background_color": "#f6e8e8", "main_object_color": "#fcfa00"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/ink-riot.md](../../../presets/viral/ink-riot.md)
- Mixed Media preset page note: [../mixed-media/layer-mixed-media.md](../mixed-media/layer-mixed-media.md) (Mixed Media preset id `6ff15c8c-de78-459e-af32-e7a1266dc075`)

Source: https://higgsfield.ai/effects/examples/ink-riot (crawled page, extracted from embedded page data)
