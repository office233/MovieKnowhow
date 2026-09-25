# Blue depth

- **Site page:** https://higgsfield.ai/effects/examples/blue-depth-exported
- **Preset id:** `16187c71-9db0-40ae-b1a4-4c2035933068` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `blue-depth-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 243 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 12 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** transition (moody)

## What it does

A wall of dark water fills the frame as fish drift past in slow motion and everything else holds perfectly still. Moody and hypnotic—perfect for transitions or storytelling.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 4200 credit_units (~42 credits)
- 480p: 1800 credit_units (~18 credits), same for every aspect ratio
- 720p: 4200 credit_units (~42 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/429f29f6-8cfb-4a2d-8fde-3f3db4c8c658.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/218629b5-2e80-491d-9728-26f002cde57d.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/aedaf3f8-79bd-422a-b9f1-299075432538.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/e1d91c03-079c-47ea-a598-41846b5cc5fd.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/218629b5-2e80-491d-9728-26f002cde57d.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/682f7971-983b-4af7-a580-9153b234d666.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_132526_412e2e0d-1c98-4f8f-af2a-5670c67b5f2c_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_132526_412e2e0d-1c98-4f8f-af2a-5670c67b5f2c_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/7d0c93c8-eae4-48ac-98b6-935347353285.jpg) | 4:3 | 720p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131750_967f42cf-e14f-49bb-90b0-0c35284aabf2_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131750_967f42cf-e14f-49bb-90b0-0c35284aabf2_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/7b22bc0d-8c5d-4e86-95ed-82799cbd7c6a_resize.jpg) | 9:16 | 720p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131811_c9436f35-7bb8-436a-a81a-0238a2e7fa0b_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131811_c9436f35-7bb8-436a-a81a-0238a2e7fa0b_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/24669d46-0ca7-440f-b688-77614d8629f9_resize.jpg) | 3:4 | 720p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131801_e3ac649e-dec3-4ddd-8530-1b438e1e1bc8_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131801_e3ac649e-dec3-4ddd-8530-1b438e1e1bc8_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/054185d3-8adc-4172-b286-2c4b1b4410df.png) | 16:9 | 720p | 12 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131824_0b799bc0-8fd7-454a-8759-25dbdeae1311_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131824_0b799bc0-8fd7-454a-8759-25dbdeae1311_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/11bcc1e4-d86a-43f3-bfa8-bfad1ed80720.jpg) | 1:1 | 720p | 12 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/blue-depth.md](../../../presets/viral/blue-depth.md)

Source: https://higgsfield.ai/effects/examples/blue-depth-exported (crawled page, extracted from embedded page data)
