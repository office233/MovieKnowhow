# Windows

- **Site page:** https://higgsfield.ai/effects/examples/windows
- **Preset id:** `507b31bc-1eed-4651-880a-3fbafbb1e21e` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `windows` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Mixed Media · **priority:** 236 · **is_main_page flag:** True · **IP check required:** False
- **Output duration:** follows your input video (1-10 s window)
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** video stylization (Mixed Media restyle of your own clip)

## What it does

Overlapping digital interface windows

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

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/a247a841-8eab-4021-b34a-50ae15dd289e.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/33fbee41-8c5b-4ac8-9c77-b65f25dad5a9.webp
- Full-res preview (mp4, 1280x714): https://cdn.higgsfield.ai/viral_hub/11d0353c-5670-4d23-bcae-9e26d49a96c8.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/e80e476a-d55e-4e87-b8d1-2d32ee40f303.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/0c2f0cd6-7cb9-4000-9302-516d291aeb85.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/0c2f0cd6-7cb9-4000-9302-516d291aeb85_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/7568c21b-6a71-4827-bdef-54582719d938.mp4) | 1920x1440 | 1k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/f5e8ad01-139b-4d1d-b48c-4a8977df916e.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/f5e8ad01-139b-4d1d-b48c-4a8977df916e_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/fe524b06-4ac0-450f-b75e-3cd0aa36130e.mp4) | 1920x1440 | 1k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/6adc1345-ffe2-4c08-895c-04f341a857b3.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/6adc1345-ffe2-4c08-895c-04f341a857b3_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/b7348ea3-1c42-42cd-bfdd-efe7fafa77aa.mp4) | 1920x1440 | 1k |  | 10 | 200 |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/ec36855a-e2e8-455d-a729-ccf21a2e7c48.mp4) · [poster](https://cdn.higgsfield.ai/user_32EcRyiEXuuaRsd6l97gBl9bCTU/ec36855a-e2e8-455d-a729-ccf21a2e7c48_thumbnail.webp) | [video](https://d2ol7oe51mr4n9.cloudfront.net/user_2ufYpvM9KF2DKuL8NRKvQzMwZu0/4ac04575-7c69-4ac3-8304-ae0c1fed8d93.mp4) | 1920x1440 | 1k |  | 10 | 200 |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/windows.md](../../../presets/viral/windows.md)
- Mixed Media preset page note: [../mixed-media/windows.md](../mixed-media/windows.md) (Mixed Media preset id `4f7a1589-c604-44e5-b0ec-bc87d3929906`)

Source: https://higgsfield.ai/effects/examples/windows (crawled page, extracted from embedded page data)
