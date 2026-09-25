# Pearl earring

- **Site page:** https://higgsfield.ai/effects/examples/pearl-earring
- **Preset id:** `cbf62edd-296f-493e-b4dc-29bef0a7214c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `pearl-earring` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** New · **priority:** 241 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 7 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** art recreation (split-screen)

## What it does

Vermeer’s original "Girl with a Pearl Earring" below, a personalized animated recreation starring you above. Timeless and instantly recognizable—a split-screen format built to go viral.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Upload image | image | 1 | 1 | yes | input_images, image_references |

## Settings

- **resolution:** 480p, 720p (default `720p`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 2750 credit_units (~27.5 credits)
- 480p: 1350 credit_units (~13.5 credits), same for every aspect ratio
- 720p: 2750 credit_units (~27.5 credits), same for every aspect ratio

## Prompt

- No prompt field: the preset is fully templated (image/video in, video out). All public samples have an empty prompt.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/1565d8db-fefe-4934-a7e5-1f3800df0419.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub_preset/00e18824-2297-42c3-bc92-e7cdba5e0f0e.webp
- Full-res preview (mp4, 960x1920): https://cdn.higgsfield.ai/viral_hub/4c51b83c-ea41-44f2-a764-cbb1e5e402ef.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/81fd7058-bab6-47f6-9246-92acb4f07c67.webp
- Static preview image: https://cdn.higgsfield.ai/viral_hub_preset/00e18824-2297-42c3-bc92-e7cdba5e0f0e.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/435ed2c6-c698-4d6c-b763-9fa81e374985.mp4

## Example generations (20 with settings; total on page: 30)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://cdn.higgsfield.ai/stacked/job/27c08386-480b-4ac3-8f78-91f9c7f44059/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/27c08386-480b-4ac3-8f78-91f9c7f44059/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/df9766a4-d14b-4bcc-a135-a25ac5c8ca65.png) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/40908df4-4e4e-4a9c-ab76-d5b8271a4028/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/40908df4-4e4e-4a9c-ab76-d5b8271a4028/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/e64ad4b1-4436-4058-b6ce-f0d209b7ad31.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/8bc2c6a5-90ea-437f-8482-5f913cbf5ddb/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/8bc2c6a5-90ea-437f-8482-5f913cbf5ddb/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/adb42d47-ef0f-41a6-866f-68b451c9538d.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/3b3393cd-f2fa-4381-8774-03d6fd1e4dc1/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/3b3393cd-f2fa-4381-8774-03d6fd1e4dc1/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/d538368e-49f3-40ae-8a2c-ca67d0a71ad1_resize.jpg) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/40b6bfa2-6ff1-4ccb-ba39-6e572e2f2414/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/40b6bfa2-6ff1-4ccb-ba39-6e572e2f2414/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/bf1cb8e8-2c3b-43a2-8fa9-9c0017c3467b_resize.jpg) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/fb3afaee-9383-4ed6-a311-a942b8e4c7a4/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/fb3afaee-9383-4ed6-a311-a942b8e4c7a4/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/58580726-5158-4852-b6a7-b3c7e528530a.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/dfb86410-3cdd-414d-bb54-9e062b4acc91/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/dfb86410-3cdd-414d-bb54-9e062b4acc91/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/50bf7433-a8c4-4e8c-801e-29deb76c0080.jpg) | 1440x2880 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/b19de6d6-4195-4f52-b391-62b2c9a07ecc/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/b19de6d6-4195-4f52-b391-62b2c9a07ecc/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/3112df10-24ce-43a7-9c63-315c1dfe544c.png) | 1440x2880 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/a28c25d8-8261-4efd-84cb-08077bde12a9/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/a28c25d8-8261-4efd-84cb-08077bde12a9/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/1647a905-7839-4ee2-8682-abcc3ba6bc59.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/dfb7101b-dcce-4fa7-afe4-c0cdb7dec0c2/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/dfb7101b-dcce-4fa7-afe4-c0cdb7dec0c2/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/cdd98f8f-2217-4a74-82d5-fc8187afbfde_resize.jpg) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/1a439863-a72a-4d1e-aa33-f68b4d75f44e/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/1a439863-a72a-4d1e-aa33-f68b4d75f44e/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/b7303e46-72df-423b-b3d6-79349aee9b4f_resize.jpg) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/da9573b3-b00f-4005-bbd9-831f564fda82/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/da9573b3-b00f-4005-bbd9-831f564fda82/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/dbaa59ee-234f-47b3-b105-9af3d4c4b1e3_resize.jpg) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/2fb4b4bd-109d-4748-b3c5-c4bb35c8d5df/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/2fb4b4bd-109d-4748-b3c5-c4bb35c8d5df/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3HB6esxYuWRQK4Ljqz5btVNpjcp/f04475d9-b52c-4cd8-9451-8b08303e6caa_resize.jpg) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/801cf8d1-8f6b-4edf-814f-40daf0a207bf/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/801cf8d1-8f6b-4edf-814f-40daf0a207bf/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/44dc976e-1672-46be-bd2d-2a1db6e8bc6a.png) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/378bfcc2-4aa4-4292-aeb3-fda2362d09ac/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/378bfcc2-4aa4-4292-aeb3-fda2362d09ac/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/db01f962-ca3a-4410-a06b-b6d70ecdab57.png) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/c661639b-452e-49e6-a814-d1a84be19a0f/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/c661639b-452e-49e6-a814-d1a84be19a0f/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/17e1ab55-8407-4a14-a74a-f0563d89f6b3.png) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/2c28727e-df81-4e65-bcf8-af845907935a/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/2c28727e-df81-4e65-bcf8-af845907935a/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3E2rnQvU0fCTk5iGN1MMbzgiYer/aea7bafa-a983-406c-b0cf-b3e10e063295.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/98d6df7a-0ac1-41c2-9124-06c6188ef284/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/98d6df7a-0ac1-41c2-9124-06c6188ef284/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DM3djpjYDVEDT5wTH9U4EZR2R3/d7e704b3-83f8-484e-9e7a-78729e0124e0_resize.jpg) | 960x1920 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/a828ab02-2932-4947-9e80-eef8540d54b6/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/a828ab02-2932-4947-9e80-eef8540d54b6/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/385c0657-0ea8-44fd-88d9-35eeaaeb1078.png) | 2880x5760 | None |  |  |  |  |
| [mp4](https://cdn.higgsfield.ai/stacked/job/a7eddfbc-3004-4d4a-85f7-8b7302a901a8/video.mp4) · [poster](https://cdn.higgsfield.ai/stacked/job/a7eddfbc-3004-4d4a-85f7-8b7302a901a8/thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/13515d27-f527-46e9-864d-2c179264dd61.png) | 2880x5760 | None |  |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/pearl-earring.md](../../../presets/viral/pearl-earring.md)

Source: https://higgsfield.ai/effects/examples/pearl-earring (crawled page, extracted from embedded page data)
