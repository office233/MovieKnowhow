# Fragments

- **Site page:** https://higgsfield.ai/effects/examples/fragments
- **Preset id:** `f41020a7-8f3d-46fa-9ef7-cd966037121d` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `fragments` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 248 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Layered abstract visual fragments

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Drop or upload video | video | 1 | 1 | yes | input_videos |

## Settings

- **First fragment color** (`color_of_1_fragment`, color picker) default `#ffffff`
- **Second fragment color** (`color_of_2_fragment`, color picker) default `#000000`
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

- Card preview (mp4): https://cdn.higgsfield.ai/mixed_media_preset/4f884245-2915-4a24-a19a-b18cd252ab1f.mp4
- Thumbnail: https://cdn.higgsfield.ai/mixed_media_preset/a9a7aaa6-86ea-4cec-b454-8506de1e9c04.webp
- Animated/optimized webp: https://cdn.higgsfield.ai/mixed_media_preset/2b2eb029-8849-41d9-8b8e-0cf7429a5669.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/d505b1e8-afc2-4d6b-a87c-fe03174056b5.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/d505b1e8-afc2-4d6b-a87c-fe03174056b5_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/cdc745c5-333e-4667-a432-de88e488e60f.mp4) | 1928x1072 | 2k |  | 10 | 100 | {"color_of_1_fragment": "#e30000", "color_of_2_fragment": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/cdd48a9e-4405-4b31-acb1-f46ddfacacda.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/cdd48a9e-4405-4b31-acb1-f46ddfacacda_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/4aeba5f6-da27-4b0b-aa38-4f931a16e119.mp4) | 1928x1072 | 2k |  | 10 | 100 | {"color_of_1_fragment": "#2cdc00", "color_of_2_fragment": "#333333"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/5e1b3bb2-08fe-45cb-a2f6-28498e32af24.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/5e1b3bb2-08fe-45cb-a2f6-28498e32af24_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/1cc54c78-41c6-4ac4-b15c-087233206764.mp4) | 1928x1072 | 2k |  | 10 | 100 | {"color_of_1_fragment": "#000000", "color_of_2_fragment": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/3582237a-6afa-4202-a6b5-d8470e085e98.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/3582237a-6afa-4202-a6b5-d8470e085e98_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/30d61467-b550-4570-b3b5-4e4c89c89992.mp4) | 1928x1072 | 1k |  | 10 | 100 | {"color_of_1_fragment": "#ff1f1f", "color_of_2_fragment": "#ffffff"} |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c3f5681b-5527-4c87-aec8-cb4220e3813c.mp4) · [poster](https://cdn.higgsfield.ai/user_34hPp7fXOu4gkTrKKk2ESqFSfG1/c3f5681b-5527-4c87-aec8-cb4220e3813c_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2zGhKQBhNr4agrkbTBHMUGRiaSQ/4b244c32-383d-443e-9e23-397e605b46b0.mp4) | 1928x1072 | 2k |  | 10 | 100 | {"color_of_1_fragment": "#ff6b00", "color_of_2_fragment": "#000000"} |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/fragments.md](../../../presets/viral/fragments.md)
- Mixed Media preset page note: [../mixed-media/fragments.md](../mixed-media/fragments.md) (Mixed Media preset id `525fc0d7-abf1-49e5-a3e6-2f97eb50973c`)

Source: https://higgsfield.ai/effects/examples/fragments (crawled page, extracted from embedded page data)
