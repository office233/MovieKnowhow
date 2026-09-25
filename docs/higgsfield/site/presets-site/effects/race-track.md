# Race track

- **Site page:** https://higgsfield.ai/effects/examples/race-track-exported
- **Preset id:** `96e1865c-c551-4aae-ad17-bf18447e74a1` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `race-track-exported` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** Viral · **priority:** 272 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 9 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** UGC selfie (action)

## What it does

Confident selfie walk on a sunlit race track while cars blast past at full speed — hair and clothes whipping violently from every shockwave, camera shaking, all smiles.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3150 credit_units (~31.5 credits)
- 480p: 1350 credit_units (~13.5 credits), same for every aspect ratio
- 720p: 3150 credit_units (~31.5 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub_preset/9f0c4caa-06f5-4e12-bb4f-a2a221a8afc8.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/6387512c-ccf3-47af-8ce9-9624de8cf1b9.webp
- Full-res preview (mp4, 1280x2276): https://cdn.higgsfield.ai/viral_hub_preset/329127a8-34df-4889-b7fb-1ff8e894f4c1.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub_preset/3f4d50f0-76ac-4a96-a211-d09b2d123d22.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/6387512c-ccf3-47af-8ce9-9624de8cf1b9.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/01787027-897e-40f4-8d48-bfa8d18b778d.mp4

## Example generations (5 with settings; total on page: 5)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_194620_adeccbe1-947c-4aee-8262-8cd3e924dd2f_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_194620_adeccbe1-947c-4aee-8262-8cd3e924dd2f_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/7b442c66-6c49-4fff-91a1-0be57cb7a7c4_resize.jpg) | 1:1 | 720p | 9 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_193917_969c3446-9068-4665-bec2-9796fe7da9ab_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_193917_969c3446-9068-4665-bec2-9796fe7da9ab_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/5e85c1b8-cfcf-44e0-8c44-2a5f95d399af_resize.jpg) | 16:9 | 720p | 9 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_195411_c0b2f1ff-f578-4162-b2f4-b69e6ed7a82c_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/hf_20260805_195411_c0b2f1ff-f578-4162-b2f4-b69e6ed7a82c_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/b6f793eb-36b9-4bd3-9ceb-10ac70beb1c1.png) | 4:3 | 720p | 9 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_194126_363e64c6-bf05-4aa9-a573-1f2838ee6699_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_194126_363e64c6-bf05-4aa9-a573-1f2838ee6699_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/02a698bb-f7e3-454a-abb3-bb0a9d627f03.png) | 9:16 | 720p | 9 |  |  |  |
| [mp4](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_201402_f2391cf3-5dfb-40d9-9ce2-2268b3370e64_min.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260805_201402_f2391cf3-5dfb-40d9-9ce2-2268b3370e64_thumbnail_min.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/812e6dbb-c9e5-4e1c-b925-600e30f55400.png) | 3:4 | 720p | 9 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/race-track.md](../../../presets/viral/race-track.md)

Source: https://higgsfield.ai/effects/examples/race-track-exported (crawled page, extracted from embedded page data)
