# Studio slide

- **Site page:** https://higgsfield.ai/effects/examples/studio-slide
- **Preset id:** `568a5b0d-f82d-4441-b833-a14c48a0d815` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `studio-slide` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 18 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** fashion / multi-scale clones

## What it does

Multiple copies of a single person appear simultaneously at varying scales, angles, and depths within the same frame. The figures smoothly slide past one another, creating a dynamic 3D layering effect against a solid background. Built for fashion reels, lookbooks, and stylized edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p, 4k (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3600 credit_units (~36 credits)
- 480p: 2400 credit_units (~24 credits), same for every aspect ratio
- 720p: 3600 credit_units (~36 credits), same for every aspect ratio
- 1080p: 7200 credit_units (~72 credits), same for every aspect ratio
- 4k: 17600 credit_units (~176 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/c129fb83-2014-4a37-a3f8-6c7dfeab0254.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/05201733-c72f-43ed-8393-8b8cea28b8ce.webp
- Full-res preview (mp4, 1280x960): https://cdn.higgsfield.ai/viral_hub/8f8fa68d-5ed4-447a-a286-a56785c7974e.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/db909ec4-25e0-4d0b-8336-2333c6048896.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/40b658df-2709-43d3-9706-8406527b397a.mp4

## Example generations (8 with settings; total on page: 8)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_191241_f24ed583-9bfd-4a89-8ce0-9808947025ce.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_191241_f24ed583-9bfd-4a89-8ce0-9808947025ce_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/861a2140-d033-4ad7-8841-160bfa14ab70.png) | 16:9 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_193022_da66d05a-bdc9-480f-8958-b8ac3b42aa42.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_193022_da66d05a-bdc9-480f-8958-b8ac3b42aa42_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/f2a8ae32-287b-4433-8b7f-69df44c25854.png) | 4:3 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_194107_86dcc26c-3197-40cd-9439-be7521785c27.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_194107_86dcc26c-3197-40cd-9439-be7521785c27_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/0bfc8b5f-4f4c-470f-b78c-9d8eb91c4e3c.png) | 3:4 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_223245_7952369b-476a-443a-a61a-2b0db948182f.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_223245_7952369b-476a-443a-a61a-2b0db948182f_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/0965fad7-7b0d-43e2-bdaa-3d9d9e31fdeb.png) | 3:4 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_223856_5b100db6-15b9-4777-bbf9-21370de727bb.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_223856_5b100db6-15b9-4777-bbf9-21370de727bb_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/08c299d9-8d2b-4630-888e-e68abc8a952f_resize.jpg) | 16:9 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_192832_32e8ca60-a93b-4cf7-9a8e-a3cabb978884.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260831_192832_32e8ca60-a93b-4cf7-9a8e-a3cabb978884_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/49cd81fc-02fb-499d-8dff-564a26c17976.png) | 9:16 | 4k | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_160123_cd45920e-9869-4c7a-8a7c-ab95b9a683e4.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_160123_cd45920e-9869-4c7a-8a7c-ab95b9a683e4_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/995b738b-8768-4226-af98-b9fafb5b4239.png) | 4:3 | 1080p | 10 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_170626_c5dbd3fd-ebbf-4d39-91a4-959c523a2b06.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_170626_c5dbd3fd-ebbf-4d39-91a4-959c523a2b06_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/290c2cd9-f22f-4701-a846-dde99ba040c5.png) | 3:4 | 1080p | 10 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/studio-slide.md](../../../presets/viral/studio-slide.md)

Source: https://higgsfield.ai/effects/examples/studio-slide (crawled page, extracted from embedded page data)
