# Orbital presence

- **Site page:** https://higgsfield.ai/effects/examples/orbital-presence-exported
- **Preset id:** `f9fcdd8a-38f2-42fb-9a7d-aa24530e1354` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `orbital-presence-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 270 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 9 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (cosmic giant)

## What it does

You become a cosmic giant, smoothing hurricanes with your fingertips before sitting on Earth beneath the stars. Perfect for surreal reveals, dreamlike edits, and cosmic transitions.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3500 credit_units (~35 credits)
- 480p: 1500 credit_units (~15 credits), same for every aspect ratio
- 720p: 3500 credit_units (~35 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/88c7e4e9-ffd1-44fa-8e70-91ddd6e3e756.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/cfaefbac-42ed-495f-88cd-8943f252cd88.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/fa983698-e7de-4beb-aca9-98fff86119f7.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/1ee530af-89ae-4ff8-9208-33b12557b930.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/cfaefbac-42ed-495f-88cd-8943f252cd88.webp

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_190101_486ef7a1-034a-4545-8795-0ddb510a7153_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_190101_486ef7a1-034a-4545-8795-0ddb510a7153_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/0129cb5f-e029-482c-9ed4-09682b82dab3.jpg) | 16:9 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_182401_950c18ca-2d0c-4c76-af59-685af0cf1513_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_182401_950c18ca-2d0c-4c76-af59-685af0cf1513_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/d33d732f-be69-49ff-9ae6-6f8e145869a3.jpg) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_191255_d64ed86c-6092-4c61-8cf2-4392e0289948_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_191255_d64ed86c-6092-4c61-8cf2-4392e0289948_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/acaacb6a-6da7-4529-bae0-c98777a96e80_resize.jpg) | 4:3 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_191742_896b78da-a00c-4682-91fc-bb31ac7e6b39_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_191742_896b78da-a00c-4682-91fc-bb31ac7e6b39_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/54a7f949-68b7-4bd1-8438-fecf38f6bca0_resize.jpg) | 9:16 | 720p | 10 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_180852_c7cb1044-2ba2-4754-a4c7-f0603840147b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_180852_c7cb1044-2ba2-4754-a4c7-f0603840147b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/0eb57635-1e0d-43fc-824a-5f3e5c306206.png) | 1:1 | 720p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/orbital-presence.md](../../../presets/viral/orbital-presence.md)

Source: https://higgsfield.ai/effects/examples/orbital-presence-exported (crawled page, extracted from embedded page data)
