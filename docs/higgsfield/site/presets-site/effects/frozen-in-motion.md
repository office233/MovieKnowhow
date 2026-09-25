# Frozen in motion

- **Site page:** https://higgsfield.ai/effects/examples/frozen-in-motion
- **Preset id:** `6e822598-7221-4f89-9a7d-81bb812433d9` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `frozen-in-motion` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 28 · **is_main_page flag:** False · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (time-freeze, fashion)

## What it does

The subject freezes in midair while pedestrians and traffic continue moving naturally around them. Built for surreal street scenes, striking fashion edits, and cinematic moments suspended in time.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, image_references |
| Location | image | 0 | 1 | optional | input_images, image_references |
| Change Pose | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3250 credit_units (~32.5 credits)
- 480p: 1250 credit_units (~12.5 credits), same for every aspect ratio
- 720p: 3250 credit_units (~32.5 credits), same for every aspect ratio
- 1080p: 4500 credit_units (~45 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Change Pose** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/59c46689-f756-4843-b298-f34b9761187e.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/4bd4d456-d335-42da-b6ca-d0d8b8dffcea.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/7726a7fd-730b-451e-9cd0-db4bb87ff44a.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/a6e82fda-463f-47d6-9490-c2e9ba565343.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_172112_30398aea-7404-4895-b5cc-7423b4924e22.mp4) · [poster](https://cdn.higgsfield.ai/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_172112_30398aea-7404-4895-b5cc-7423b4924e22_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_2uewaW7csP6pZQjxspfKwYetHFd/4bd2b3b7-33aa-4f37-b399-5a1a0a6001e0.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_173355_7cb7687c-a47c-4dfd-9ac6-1d0d54bdca24.mp4) · [poster](https://cdn.higgsfield.ai/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_173355_7cb7687c-a47c-4dfd-9ac6-1d0d54bdca24_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_319Ak6zpE9fkEhw8gDcveIOKYng/f89e8260-af2b-40fa-bc96-e2938c6029dd.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_190138_cf910041-70cf-44fc-a6d5-4c1e7d0bd975.mp4) · [poster](https://cdn.higgsfield.ai/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_190138_cf910041-70cf-44fc-a6d5-4c1e7d0bd975_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_34C85VsegqgJpGYeYUl9nx5WQrR/421aed31-c367-4c72-8af1-ed021ea8b880.png) | 9:16 | 1080p | 7 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_172114_ec0ec230-8213-41a3-83f8-cbbb9f98f284.mp4) · [poster](https://cdn.higgsfield.ai/user_3HYpK76mlEqR2VdqpNrnkSO1r7J/hf_20260908_172114_ec0ec230-8213-41a3-83f8-cbbb9f98f284_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_2uewaW7csP6pZQjxspfKwYetHFd/4bd2b3b7-33aa-4f37-b399-5a1a0a6001e0.png) | 9:16 | 1080p | 7 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/frozen-in-motion.md](../../../presets/viral/frozen-in-motion.md)

Source: https://higgsfield.ai/effects/examples/frozen-in-motion (crawled page, extracted from embedded page data)
