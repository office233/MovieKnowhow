# 3D render

- **Site page:** https://higgsfield.ai/effects/examples/3d-render-exported
- **Preset id:** `c18f36af-b7cc-4b9e-b320-8b3b06f25683` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `3d-render-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 266 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (character reveal)

## What it does

Clean 3D software reveal — camera orbiting a hyper-detailed character model, fast zooms, rotating lights, mouse clicks only.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2450 credit_units (~24.5 credits)
- 480p: 1050 credit_units (~10.5 credits), same for every aspect ratio
- 720p: 2450 credit_units (~24.5 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/d215b031-c484-405e-bb3e-79ae0912f0f8.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/38f26ced-8e66-4a85-bbd9-ad5504319547.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/5fcf738e-22f9-4a73-b6bd-7f80769427e8.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/1d23a691-7ed4-4b51-88a8-f2b19e185bda.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/38f26ced-8e66-4a85-bbd9-ad5504319547.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/933f0bcf-d577-4166-9b95-7acdfe9a20e0.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163621_f45ebeec-6cac-435d-a0f5-8a642ad3c917_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163621_f45ebeec-6cac-435d-a0f5-8a642ad3c917_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/d13fdf47-b8a7-4b20-b328-8abd60f56291.png) | 4:3 | 720p | 7 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163610_11dc82e0-023b-4892-aeed-18be0b604c9a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163610_11dc82e0-023b-4892-aeed-18be0b604c9a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/a9b31407-37d9-4f1f-a95d-cd905ca5ed57.png) | 16:9 | 720p | 7 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163648_25c9672a-0929-48a0-b816-256cc4acd938_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163648_25c9672a-0929-48a0-b816-256cc4acd938_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/59a00bc9-547e-47da-b44e-3f2703b2b171.png) | 1:1 | 720p | 7 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163631_5f300a90-878f-4a0e-b584-5c59f5df90ab_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163631_5f300a90-878f-4a0e-b584-5c59f5df90ab_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/d4b989b3-2ef7-4be0-b472-3db997a6d23b.png) | 3:4 | 720p | 7 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163552_44de435f-ef19-4279-b32e-4bc8845396b3_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260805_163552_44de435f-ef19-4279-b32e-4bc8845396b3_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/dfebdc0d-6676-416c-8adb-4bab6788e2fc.png) | 9:16 | 720p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/3d-render.md](../../../presets/viral/3d-render.md)

Source: https://higgsfield.ai/effects/examples/3d-render-exported (crawled page, extracted from embedded page data)
