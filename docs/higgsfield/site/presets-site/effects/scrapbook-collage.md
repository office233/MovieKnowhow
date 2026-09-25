# Scrapbook collage

- **Site page:** https://higgsfield.ai/effects/examples/scrapbook-collage
- **Preset id:** `4f46bb84-20f5-44d5-bee1-e1e2c0faa809` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `scrapbook-collage` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 119 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 6 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** fashion / multi-panel edit

## What it does

A dynamic, multi-panel layout where a central full-body shot is displayed alongside smaller inset frames showing simultaneous close-up details of the subject. Built for fashion videos, lookbooks, and stylized edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Character | image | 1 | 1 | yes | input_images, input_images |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p (default `720p`)
- **aspect_ratio:** 21:9, 16:9, 4:3, 1:1, 3:4, 9:16, auto (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2100 credit_units (~21 credits)
- 480p: 900 credit_units (~9 credits), same for every aspect ratio
- 720p: 2100 credit_units (~21 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/84f761d0-2033-417f-aee0-a2029cfb78fe.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/9a24d748-3552-4c01-ad2c-38d547feb16e.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/d13a5ecd-0149-4a46-be19-fb2af8e11536.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/f37c4cee-f841-47f2-bced-c8aa4d4ba09c.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/8a26bd1e-44df-4fc9-98dd-834638df9768.mp4

## Example generations (15 with settings; total on page: 15)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172100_f97b82d4-c543-4df1-99c2-891d7af6f162.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172100_f97b82d4-c543-4df1-99c2-891d7af6f162_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/990c6e4d-ff54-4b26-80a5-7bec36bb6c59_resize.jpg) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_173835_dbd52020-b128-4143-bf85-177b935fc425.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_173835_dbd52020-b128-4143-bf85-177b935fc425_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/dc5abe6e-97ad-4a3e-8eee-9cb9d943c90e_resize.jpg) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_171953_c19acc0a-6204-40e1-a05b-136d432b2f7a.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_171953_c19acc0a-6204-40e1-a05b-136d432b2f7a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/3def156b-5ac9-4934-9387-81eb4b83c991_resize.jpg) | 16:9 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_173028_ba00f096-0c97-4f81-ba95-eea28be18ecf.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_173028_ba00f096-0c97-4f81-ba95-eea28be18ecf_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/148f6650-f00f-43c3-9df1-057b27416d29_resize.jpg) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_183145_a60ef93f-339f-4423-b0fa-15a6321859fe.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_183145_a60ef93f-339f-4423-b0fa-15a6321859fe_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/53171924-f0f0-4c8e-8e28-d4d37bc2b887_resize.jpg) | 4:3 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_180144_a0d5a201-d7a1-4998-b2ca-1c69a1bc8b72.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_180144_a0d5a201-d7a1-4998-b2ca-1c69a1bc8b72_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/e277e0d0-6616-4f3d-ab69-bc5b442e0a28_resize.jpg) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172906_8d723f44-9cb8-4f4f-84f8-467e32d9e403.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172906_8d723f44-9cb8-4f4f-84f8-467e32d9e403_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/ac1f916a-057b-453c-9d76-9c50aa8eafc0_resize.jpg) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_175346_8ba87867-420a-44f7-9173-a6c7d5c71695.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_175346_8ba87867-420a-44f7-9173-a6c7d5c71695_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/b2728753-5e9b-4595-b303-8e1eb20f4aec_resize.jpg) | 1:1 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172719_5b6354a2-2b50-40e3-bec2-773500a2f343.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172719_5b6354a2-2b50-40e3-bec2-773500a2f343_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/f33af0e3-03d1-4805-b6ac-132ba19b9f89_resize.jpg) | 4:3 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_223728_53885237-8614-4e73-8924-d45a04edef48.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_223728_53885237-8614-4e73-8924-d45a04edef48_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/65741bfd-0015-4eed-a68e-667a3a650c14_resize.jpg) | 3:4 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172241_38cb53b7-f023-4afb-9613-e2b087c5a3a9.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_172241_38cb53b7-f023-4afb-9613-e2b087c5a3a9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/53171924-f0f0-4c8e-8e28-d4d37bc2b887_resize.jpg) | 3:4 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_175559_2c7092b0-4e8d-4edb-afae-d12d01885b38.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260831_175559_2c7092b0-4e8d-4edb-afae-d12d01885b38_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/5d2d784f-7641-431d-bb97-ea947818f5ed_resize.jpg) | 16:9 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_204322_75167441-21fb-4918-bf24-4006818da5fd.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_204322_75167441-21fb-4918-bf24-4006818da5fd_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/4a3437ff-7462-4eb6-8db3-4b57c1b61e8e.png) | 16:9 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_191321_73847ad8-7f70-4acf-921a-31d526910540.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_191321_73847ad8-7f70-4acf-921a-31d526910540_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/5adc17ae-7abf-43ff-8aec-534d416f4f8e.png) | 9:16 | 720p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_191243_1f3e96ac-ff8e-435f-b07e-1af46a008ab9.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260821_191243_1f3e96ac-ff8e-435f-b07e-1af46a008ab9_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/1f91bd9b-6ccb-4dc3-8b5d-758a0661f5bc_resize.jpg) | 9:16 | 720p | 6 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/scrapbook-collage.md](../../../presets/viral/scrapbook-collage.md)

Source: https://higgsfield.ai/effects/examples/scrapbook-collage (crawled page, extracted from embedded page data)
