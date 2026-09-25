# Smash and grab

- **Site page:** https://higgsfield.ai/effects/examples/smash-and-grab
- **Preset id:** `3e568b72-8d27-4b0d-a772-399137f18850` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `smash-and-grab` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 7 · **is_main_page flag:** False · **IP check required:** False
- **Output duration (preset clip):** 10 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** product ad (heist)

## What it does

The camera frames the product through a car window as the subject shatters the glass and snatches it, then cuts to a fast tracking shot of their getaway. Built for bold product reveals, playful action edits, and dynamic lifestyle ads.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, image_references |
| Product | image | 0 | 1 | optional | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 6500 credit_units (~65 credits)
- 480p: 2500 credit_units (~25 credits), same for every aspect ratio
- 720p: 6500 credit_units (~65 credits), same for every aspect ratio
- 1080p: 9000 credit_units (~90 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/c32886ee-2d15-4697-a366-041a9deaffe2.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/4a2315f6-57e1-4378-82a5-598ddbbfbbcb.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/cb98053e-c632-4db2-8d59-46b003e732bd.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/73a5a24b-de6b-475a-be71-90373a72123f.webp

## Example generations (4 with settings; total on page: 4)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_215002_26b514ff-be22-4063-9a8c-203b5275f8e0.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_215002_26b514ff-be22-4063-9a8c-203b5275f8e0_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/afa50e49-e0a3-4cc2-ab34-207da49ab3a7.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_32EcRyiEXuuaRsd6l97gBl9bCTU/ae732f0e-72c6-4920-b5eb-df4aff8d39b2.png) | 3:4 | 720p | 10 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_213713_2239e9e9-8ad1-4ed2-9a37-654f5bbb4d1c.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_213713_2239e9e9-8ad1-4ed2-9a37-654f5bbb4d1c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_361DOWfsXi4RsfiPGMGdm4wzT0y/d0a7fa4a-199b-4833-990e-cc3c21c8013f.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_361DOWfsXi4RsfiPGMGdm4wzT0y/006953a6-32c6-4aba-b2a2-3dbe41f4ca41.png) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_214447_a9e8b113-f130-4443-854b-2a800b227c54.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_214447_a9e8b113-f130-4443-854b-2a800b227c54_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_319Ak6zpE9fkEhw8gDcveIOKYng/944f7145-ac21-44d3-bbc3-7c74374429cf.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_319Ak6zpE9fkEhw8gDcveIOKYng/dacbbe90-af6e-42a7-bece-ea113db926f1.png) | 9:16 | 1080p | 10 |  |  |  |
| [mp4](https://dqv0cqkoy5oj7.cloudfront.net/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_211535_e3a4bfe4-ab71-4d69-b43d-53a36bf57c80.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu5JuVtOLeUf9Tqr2GbRxGUfPp/hf_20260908_211535_e3a4bfe4-ab71-4d69-b43d-53a36bf57c80_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_2zO4OBOUyFEfDkmsHX9xjyJTwsY/d8b5874a-6a5c-42bc-b29c-cb2a05f9b43c.png) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_2zO4OBOUyFEfDkmsHX9xjyJTwsY/bd1bb613-628a-4d88-93f2-ecf610ce6919.jpg) | 16:9 | 1080p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/smash-and-grab.md](../../../presets/viral/smash-and-grab.md)

Source: https://higgsfield.ai/effects/examples/smash-and-grab (crawled page, extracted from embedded page data)
