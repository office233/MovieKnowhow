# Superstar

- **Site page:** https://higgsfield.ai/effects/examples/superstar
- **Preset id:** `6551373d-7ad9-4f33-8bb1-9bb7b570cf6e` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `superstar` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 240 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 15 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** music / concert hook

## What it does

Stadium lights, a sea of raised phones, and a face taking over the jumbotron—all seen from deep inside the crowd. Raw and charged—an instant hook for high-energy intros

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images, input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 5250 credit_units (~52.5 credits)
- 480p: 2250 credit_units (~22.5 credits), same for every aspect ratio
- 720p: 5250 credit_units (~52.5 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/69352fc9-6a72-4197-b13d-969d906512ce.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/df7c908c-ca28-4161-ba3e-1118405cb742.webp
- Full-res preview (mp4, 1280x1280): https://cdn.higgsfield.ai/viral_hub/ee900ef8-f6a9-4eff-b400-a4dd7df903f5.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/6136d06c-d15f-4864-8c3b-5272e919d3d8.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/df7c908c-ca28-4161-ba3e-1118405cb742.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/cc46e65a-8e30-48e2-a1ad-84115506fd91.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_140554_48590024-7bfb-40f2-b868-f053ca9bc40a_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_140554_48590024-7bfb-40f2-b868-f053ca9bc40a_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/fe33da69-7235-42be-ad4d-2e1ed1f9d58d.jpg) | 9:16 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_132727_c77612f9-294f-4d63-bf4e-7d59914f614d_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_132727_c77612f9-294f-4d63-bf4e-7d59914f614d_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/d40a1961-88be-442b-bd49-3d2b5bf1c9eb.png) | 3:4 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_153800_93ee7972-8812-4a6b-b19d-e7a44847d980_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_153800_93ee7972-8812-4a6b-b19d-e7a44847d980_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/8cf38107-0f65-4c4d-a8cb-8001df9cf179.jpg) | 1:1 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_145926_bd6309f8-1959-474c-a55f-95b4e79a0d20_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_145926_bd6309f8-1959-474c-a55f-95b4e79a0d20_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/33ae964b-2f87-4992-8f66-28ca8563b91f.png) | 4:3 | 720p | 15 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131612_2dc7c09e-8499-479b-bacd-4492fbfe3ea3_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260804_131612_2dc7c09e-8499-479b-bacd-4492fbfe3ea3_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/4baaceea-5a6f-45fd-9180-5e35d61ca2cd.png) | 16:9 | 720p | 15 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/superstar.md](../../../presets/viral/superstar.md)

Source: https://higgsfield.ai/effects/examples/superstar (crawled page, extracted from embedded page data)
