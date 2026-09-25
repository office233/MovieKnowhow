# Acid

- **Site page:** https://higgsfield.ai/effects/examples/acid
- **Preset id:** `92e39a66-01a4-4f17-9b86-2ffd8ceaac93` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `acid` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 271 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Psychedelic neon color distortion

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main object color** (`main_object_color`, color picker) default `#ccff00`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/d1cdb860-cff9-46de-b75f-4e821317bd30.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/bf57d2d1-1f10-4136-9199-ebfe44ff5f0f.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/3792c10f-b125-4917-8827-bfed0c2de657.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/11831e74-9312-4129-bdd9-b475b371289a.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/11831e74-9312-4129-bdd9-b475b371289a_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/9f811c36-484f-43af-a40e-7f838be67064.mp4) | 1920x1080 | 1k |  | 8 | 64 | {"main_object_color": "#6d0bf9"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/1db570ef-b098-4d2b-b0b3-084a7743d8e5.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/1db570ef-b098-4d2b-b0b3-084a7743d8e5_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_33NEiBV3NhrGrf468faTNSVf2Bd/c70ccb0d-c0de-4091-95b2-7071d4098ae3.mp4) | 1928x1076 | 1k |  | 8 | 108 | {"main_object_color": "#fae90a"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bf69dea2-4e7e-492b-8ac9-63e84da5420e.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bf69dea2-4e7e-492b-8ac9-63e84da5420e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTgPjBmzxyzlC4A7nzfcUJVem/751ea525-6c96-4ea5-882a-8bcea87700be_trim.mp4) | 1928x1076 | 1k |  | 12 | 162 | {"main_object_color": "#ff0000"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/101dfba1-a85d-4add-9ae0-a996dbd1ebd3.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/101dfba1-a85d-4add-9ae0-a996dbd1ebd3_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/b6ddd37c-2902-410d-8cc0-13c3c169e95d.mp4) | 1920x1080 | 1k |  | 8 | 64 | {"main_object_color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bd6d308c-50d6-4dca-88af-ca8af3089e63.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/bd6d308c-50d6-4dca-88af-ca8af3089e63_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_37qTgPjBmzxyzlC4A7nzfcUJVem/37d776cb-d545-4d0f-ad5d-46c81122c587_trim.mp4) | 1920x1080 | 1k |  | 12 | 96 | {"main_object_color": "#ff008a"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/acid.md](../../../presets/viral/acid.md)
- Mixed Media preset page note: [../mixed-media/acid.md](../mixed-media/acid.md) (Mixed Media preset id `b501a54d-7c2a-42f8-a47d-484cbdace0a6`)

Source: https://higgsfield.ai/effects/examples/acid (crawled page, extracted from embedded page data)
