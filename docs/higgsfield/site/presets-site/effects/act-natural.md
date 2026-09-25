# Act natural

- **Site page:** https://higgsfield.ai/effects/examples/act-natural
- **Preset id:** `d43818b0-7c5c-4c19-a67c-2b38beb5367c` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `act-natural` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 14 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 6 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (time-freeze)

## What it does

A cinematic time-manipulation effect that completely suspends your subject and surrounding objects mid-action while the rest of the world continues to move in real-time. Built for surreal visual storytelling, dramatic pauses, and scroll-stopping creative edits.

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `9:16`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 3900 credit_units (~39 credits)
- 480p: 1500 credit_units (~15 credits), same for every aspect ratio
- 720p: 3900 credit_units (~39 credits), same for every aspect ratio
- 1080p: 5400 credit_units (~54 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/7a261cff-8d6c-4bab-84e7-515364061f3e.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/17cc1333-9822-442c-adaa-d208c59e3e01.webp
- Full-res preview (mp4, 1080x1920): https://cdn.higgsfield.ai/viral_hub/91088781-2e26-4892-8986-3e17dbdde671.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/ff99cab9-d927-418f-a737-f0d4e8d5d219.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/1ff9d693-323a-4c8e-9b0a-cb9d09243620.mp4

## Example generations (13 with settings; total on page: 13)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_125914_9b942ab8-e3dd-4ec2-8b1c-46554875f257.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_125914_9b942ab8-e3dd-4ec2-8b1c-46554875f257_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/1e8f3932-f71d-40f2-97fa-e4667e227de7.png) | 9:16 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_221054_f1562cac-bd33-48a1-979c-728b8241b404.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_221054_f1562cac-bd33-48a1-979c-728b8241b404_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/5eced555-2dd1-41bf-96d6-58578ed98dcd.png) | 4:3 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_130543_d90722a0-9326-4215-a204-7e6706aaa302.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_130543_d90722a0-9326-4215-a204-7e6706aaa302_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/8ad6cd61-9d78-4a47-bb38-13731f251180.png) | 16:9 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175542_d4394b5b-083b-421a-bff1-9d4e91acd210.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175542_d4394b5b-083b-421a-bff1-9d4e91acd210_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/3de8b3f9-dc5a-46a0-bdd6-67a0f4b8c186.png) | 3:4 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175559_c2b850aa-63fe-4b56-9478-869c1d1c86ba.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175559_c2b850aa-63fe-4b56-9478-869c1d1c86ba_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/246f5184-d547-4b97-b4c9-0b7081957f35.png) | 1:1 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_124308_9d0bcfb9-ce83-47b5-9a65-63285583709c.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_124308_9d0bcfb9-ce83-47b5-9a65-63285583709c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/044fff3f-b2a1-40ae-b5cd-4a530fbd734d.png) | 16:9 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175505_903a10cc-979e-4b05-b546-ad535ef4f6ca.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175505_903a10cc-979e-4b05-b546-ad535ef4f6ca_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/34df7671-8c8c-4506-bc74-6cd02be36029.png) | 4:3 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175634_81bd5b7b-be37-4657-9835-d94f41584138.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175634_81bd5b7b-be37-4657-9835-d94f41584138_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/312970b3-e429-4fe7-90ba-b1c3904f17da.png) | 9:16 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175711_66c4b748-0ab2-448f-a647-80674a4361a8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175711_66c4b748-0ab2-448f-a647-80674a4361a8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/742ece48-a836-4735-8ee8-36d4c0898c3b.png) | 9:16 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_173905_4f9e8d0e-afc0-44a1-a321-9328daaf4f31.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_173905_4f9e8d0e-afc0-44a1-a321-9328daaf4f31_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/24746530-7bd8-4872-aa82-9f77e89f7d06.png) | 4:3 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175646_1f61f74a-347b-4bea-aaad-837eaa132d45.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_175646_1f61f74a-347b-4bea-aaad-837eaa132d45_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/b77d8516-975d-4505-8d84-9e22b05de432.png) | 4:3 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_214933_1d7e730c-1733-4d96-82fb-9ae1bc784aed.mp4) · [poster](https://cdn.higgsfield.ai/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/hf_20260829_214933_1d7e730c-1733-4d96-82fb-9ae1bc784aed_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Cfdr00kbZ1hJCLpPQkaicInqxv/0ac8fda6-4ad5-4cb6-97b5-07a48af44234_resize.jpg) | 9:16 | 1080p | 6 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_120715_1dad204a-60fc-4c01-8df3-08281346a843.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260826_120715_1dad204a-60fc-4c01-8df3-08281346a843_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/618ebf0b-e65f-4554-adbc-bb428f773e30.png) | 16:9 | 1080p | 6 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/act-natural.md](../../../presets/viral/act-natural.md)

Source: https://higgsfield.ai/effects/examples/act-natural (crawled page, extracted from embedded page data)
