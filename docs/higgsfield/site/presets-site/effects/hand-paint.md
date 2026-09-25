# Hand paint

- **Site page:** https://higgsfield.ai/effects/examples/hand-paint
- **Preset id:** `9b3ff025-252e-40c5-bddb-97513d35c38a` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `hand-paint` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 278 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Freeform hand-painted brushwork

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Background color** (`background_color`, color picker) default `#ffffff`
- **Draw instrument** (`draw_instrument`, select) default `pastel`; options:
  - `gouache/crayon` — Crayon
  - `pencil` — Pencil
  - `pastel` — Pastel
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/0adfa8b5-7e87-461b-90a8-5542a506d0f6.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/c054cfb5-0b35-4d43-9ac3-3ea9bc0f5a87.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/f8ca594e-efee-4a94-b612-f11e9d5b1441.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/53f21ef5-3837-43dd-a95d-ddf989bce909.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/53f21ef5-3837-43dd-a95d-ddf989bce909_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/3d6c3b8a-3ae6-4c9d-baed-e9a3b2ac57e3.mp4) | 1934x1080 | 1k |  | 12 | 140 | {"draw_instrument": "pastel", "background_color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/23e9079f-96d2-45f8-823c-6c31e9f002b5.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/23e9079f-96d2-45f8-823c-6c31e9f002b5_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/7dab84ec-c72e-43a2-b2e4-66181a0b7c25.mp4) | 1934x1080 | 1k |  | 12 | 140 | {"draw_instrument": "pastel", "background_color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/134f3f62-9f12-4364-a647-173c0c5117af.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/134f3f62-9f12-4364-a647-173c0c5117af_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/08806db4-f202-4db1-9897-d148b4b547f9.mp4) | 1934x1080 | 1k |  | 12 | 140 | {"draw_instrument": "pastel", "background_color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/51fd1a08-c8e8-487b-9adf-5905b4914803.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/51fd1a08-c8e8-487b-9adf-5905b4914803_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/b39e1cc9-d634-49b6-84b0-564fafe2ea90.mp4) | 1934x1080 | 1k |  | 10 | 116 | {"draw_instrument": "pastel", "background_color": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/de83aa9e-37bf-4c8a-9277-6d522c164c36.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/de83aa9e-37bf-4c8a-9277-6d522c164c36_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/e9a49c84-3e51-457a-a746-a196e1f09507.mp4) | 1934x1080 | 1k |  | 12 | 140 | {"draw_instrument": "pastel", "background_color": "#ffffff"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/hand-paint.md](../../../presets/viral/hand-paint.md)
- Mixed Media preset page note: [../mixed-media/hand-paint.md](../mixed-media/hand-paint.md) (Mixed Media preset id `ad8401a0-39a2-4c95-b65e-1634d41378ab`)

Source: https://higgsfield.ai/effects/examples/hand-paint (crawled page, extracted from embedded page data)
