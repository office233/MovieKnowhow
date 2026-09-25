# Canvas

- **Site page:** https://higgsfield.ai/effects/examples/canvas
- **Preset id:** `51ce6a8b-3921-466b-b6d5-25816720af11` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `canvas` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 237 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Hand-drawn canvas-style artwork

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **Outline color** (`outline_color`, color picker) default `#ffffff`
- **Outline instrument** (`outline_instrument`, select) default `spray`; options:
  - `marker` — Marker: A felt-tip ink pen for bold lines and fast coloring ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/d33097ba-1c58-4756-b792-bc8245f4eaeb.webp))
  - `spray` — Spray: A paint tool that applies color in a fine mist for smooth, airbrushed coverage ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/2f498116-78dc-4bbc-9dd4-53c6718112ba.webp))
  - `gouache` — Gouache: An opaque water-based paint used for solid, flat color painting ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/74ea86d7-cd9d-471f-8824-f5b76dee894a.webp))
- **Top layer drawings** (`top_layer_drawings`, select) default `random`; options:
  - `japanese_calligraph` — Japanese calligraph: A brush-based writing style using expressive ink strokes ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/4e4f8f56-5488-4830-99b9-262e82e38a0a.webp))
  - `childish` — Childish: A simple, playful drawing style that looks hand-drawn by a child ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/2d2659dc-72a4-4a9b-a3b0-9c7585350d2a.webp))
  - `random` — Random: An unpredictable drawing mode that applies strokes in varied directions and sizes ([preview](https://cdn.higgsfield.ai/mixed_media_preset_option/8e9da5ff-e0af-4d11-9508-e6e45725d8c0.webp))
- **Drawings instrument** (`drawings_instrument`, select) default `markers`; options:
  - `markers` — Markers
  - `feather` — Feather
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/ecdb540e-d1d6-4562-b29f-0bafe2961cdf.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/3792173a-6073-43ac-bffb-22cda9ffa9a0.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/68998590-4bfd-413b-9b95-79305f33bbef.webp

## Example generations (8 with settings; total on page: 8)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/aa11261a-a6de-4f73-8b98-8d720f387ef2.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/aa11261a-a6de-4f73-8b98-8d720f387ef2_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/8eda0fcf-2bac-4901-a02c-9c009036750b.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/cc1c4708-b358-4dfc-a121-a581a5edeae7.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/cc1c4708-b358-4dfc-a121-a581a5edeae7_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/8aeef950-b5fc-429f-a6dc-99d077670703.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/a08a1632-e34a-4312-9af5-d1d1ddbd6f26.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/a08a1632-e34a-4312-9af5-d1d1ddbd6f26_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/77ac8777-aaa6-465b-8efe-e42582ae02a5.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/57b11286-e61d-4f28-a5d1-43d7526cf373.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/57b11286-e61d-4f28-a5d1-43d7526cf373_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/df4a6edc-1d52-459f-8f80-b5642876ae80.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/e2c150b7-a063-4137-a9f8-0594e4e308a8.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/e2c150b7-a063-4137-a9f8-0594e4e308a8_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/5c2b3f5c-3c7e-46ed-9715-2268c49a06f6.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/5937ffaa-7829-4009-85cd-b7e2269bc048.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/5937ffaa-7829-4009-85cd-b7e2269bc048_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/58a50015-bb91-42c9-894c-47aa3673d084.mp4) | 1440x1440 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/584e02f7-9a09-47fe-b261-97b54f23b8eb.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/584e02f7-9a09-47fe-b261-97b54f23b8eb_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/f64f1a28-0532-495b-ba44-979cfca80f10.mp4) | 1928x1076 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c5d07f11-6839-4f13-b8a3-093b9e9b773c.mp4) · [poster](https://cdn.higgsfield.ai/user_2vV68Ukpv101mL5Dprsk6JvfLMI/c5d07f11-6839-4f13-b8a3-093b9e9b773c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2vV68Ukpv101mL5Dprsk6JvfLMI/61529ef2-a0b0-415c-8edc-ae7cca3623f1.mp4) | 1176x1756 | 1k |  | 12 | 120 | {"outline_color": "#ffffff", "outline_instrument": "spray", "top_layer_drawings": "random", "drawings_instrument": "markers"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/canvas.md](../../../presets/viral/canvas.md)
- Mixed Media preset page note: [../mixed-media/canvas.md](../mixed-media/canvas.md) (Mixed Media preset id `1a722581-6ba0-48b2-b990-a177a3f26cc8`)

Source: https://higgsfield.ai/effects/examples/canvas (crawled page, extracted from embedded page data)
