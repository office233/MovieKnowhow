# Sketch

- **Site page:** https://higgsfield.ai/effects/examples/sketch
- **Preset id:** `a6b66c57-2d6b-40cd-9bf3-c4f5dcc276ee` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `sketch` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 259 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Hand-drawn textured linework

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Main instrument color** (`main_instrument_color`, color picker) default `#710c0c`
- **Background color** (`background_color`, color picker) default `#ffffff`
- **Main instrument** (`main_instrument`, select) default `crayon`; options:
  - `gouache` — Gouache: An opaque water-based paint used for solid, flat color painting. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/aca2ee99-4fbb-4d2f-b87a-1d07a7660926.webp))
  - `marker` — Marker: A felt-tip ink pen for bold lines and fast coloring. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/dad3f390-efcd-4f27-9602-7ad137bb979f.webp))
  - `watercolor` — Watercolor: A water-based paint used for transparent, layered washes. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/557bfb9b-b7c2-45d0-9c70-21e6a069e9c5.webp))
  - `brush` — Brush: A digital paintbrush for free-form strokes and painting. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/29fa10bf-be06-469c-8472-c2ea3f5565ea.webp))
  - `crayon` — Crayon: A wax-based drawing stick for rough, textured strokes. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/d3c9b5b1-fb47-4342-9f9e-45f09949241b.webp))
  - `pencil` — Pencil: A graphite drawing tool for sketching, outlining, and shading. ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/562336e7-ba79-4c88-8ec8-28022b3a64e0.webp))
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/5e169eba-a6db-41a7-afed-d852615efc07.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/20b71097-a115-42b8-b767-35ba25492431.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/99613fa3-117b-4931-a0a8-8eca76ebed65.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/58b2c804-2d52-4a29-a5f0-c11c50b4a89f.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/58b2c804-2d52-4a29-a5f0-c11c50b4a89f_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/f64d96a1-d178-45af-83d4-491e012fbc55.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"main_instrument": "crayon", "background_color": "#ffffff", "main_instrument_color": "#710c0c"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/659c6acd-65c1-4bc1-9886-c0c70a980c12.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/659c6acd-65c1-4bc1-9886-c0c70a980c12_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/687f6aa0-b88d-4400-92ca-991e7b482bac.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"main_instrument": "crayon", "background_color": "#ffffff", "main_instrument_color": "#ab03b4"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/269876ac-d4b0-4c64-95be-5d7fef403e1b.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/269876ac-d4b0-4c64-95be-5d7fef403e1b_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/2b769eba-b33a-4fd4-b2bb-bb5ed9757b2b.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"main_instrument": "crayon", "background_color": "#000000", "main_instrument_color": "#710c0c"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/f7fa93c4-5636-46ed-9ce4-d04ba9699451.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/f7fa93c4-5636-46ed-9ce4-d04ba9699451_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/56b02e70-ffb5-42e0-8ca1-14698c8bf98f.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"main_instrument": "crayon", "background_color": "#a300cc", "main_instrument_color": "#ffffff"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/sketch.md](../../../presets/viral/sketch.md)
- Mixed Media preset page note: [../mixed-media/sketch.md](../mixed-media/sketch.md) (Mixed Media preset id `6377b231-5cea-4259-8a6b-0314728c1982`)

Source: https://higgsfield.ai/effects/examples/sketch (crawled page, extracted from embedded page data)
