# Stop world

- **Site page:** https://higgsfield.ai/effects/examples/stop-world
- **Preset id:** `8bca1173-5327-478c-b476-cbdfcaf001a3` (same id as the Viral Hub / MCP `get_presets(source:'viral')` entry)
- **Slug:** `stop-world` · **kind:** `chain` · **job_set_type:** `viral_hub_video`
- **Tags:** — · **priority:** 123 · **is_main_page flag:** True · **IP check required:** False
- **Output duration (preset clip):** 8 s
- **Model:** not exposed on the public page (chain preset; sample jobs report `model: null`, `provider: unknown`).
- **Use-case:** viral effect (time-stop)

## What it does

(no description on page)

## Inputs

| Label | Type | Min | Max | Required | Binds to |
|---|---|---|---|---|---|
| Image | image | 1 | 1 | yes | input_images, image_references |
| Prompt | text |  |  | optional | user_prompt |

## Settings

- **resolution:** 480p, 720p, 1080p (default `720p`)
- **aspect_ratio:** auto, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 (default `auto`)

## Pricing

- Pricing type: `matrix` (resolution x aspect ratio). Values are raw `credit_units` from the page; the frame-rate presets declare `unit_scale: 100`, so **credit_units / 100 is very likely the credit cost** (unverified).
- Default settings: 5200 credit_units (~52 credits)
- 480p: 2000 credit_units (~20 credits), same for every aspect ratio
- 720p: 5200 credit_units (~52 credits), same for every aspect ratio
- 1080p: 7200 credit_units (~72 credits), same for every aspect ratio

## Prompt

- Has an optional free-text **Prompt** field (binds to the chain's `user_prompt` port). The page shows no default or example text, and every public sample was generated with an **empty prompt** — the preset's internal prompt template does the work.
- Verbatim example prompts on this page: **none** (0).

## Preview media

- Card preview (mp4): https://cdn.higgsfield.ai/viral_hub/fd94af6b-adf5-4eb2-90f7-22e92e34bb5a.mp4
- Thumbnail: https://cdn.higgsfield.ai/viral_hub/4421b2a7-66f8-474d-9019-da309ab8fd37.webp
- Full-res preview (mp4, 1248x1664): https://cdn.higgsfield.ai/viral_hub/0c2fe56a-7a94-4597-a971-39261acedfdc.mp4
- Animated/optimized webp: https://cdn.higgsfield.ai/viral_hub/d6dcd951-4f1f-4379-bb18-41f43a7770d5.webp
- Widescreen preview (mp4): https://cdn.higgsfield.ai/viral_hub/12dad1ed-dbf1-4d5b-940c-ffa5a2777d42.mp4

## Example generations (19 with settings; total on page: 19)

| Output | Inputs | AR / size | Res | Dur | FPS | Credits | Config |
|---|---|---|---|---|---|---|---|
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_185421_d772be77-37b9-485f-bedd-bf85b7ffd5da.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_185421_d772be77-37b9-485f-bedd-bf85b7ffd5da_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ff34e12d-ad89-4df3-964c-8d32f5abfc24_resize.jpg) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_193948_d001cbde-143a-4d45-b3cf-37813d87f188.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_193948_d001cbde-143a-4d45-b3cf-37813d87f188_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/72909a5e-ba49-4f60-87aa-df8733ed4d33.png) | 9:16 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192708_b15f5d23-4761-4591-ab03-ce7b3b006fb0.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192708_b15f5d23-4761-4591-ab03-ce7b3b006fb0_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/88dbd11f-3dc0-4567-a683-1337c92b1fda_resize.jpg) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_194757_999dc9ec-7010-4e87-ad6d-a3198853f388.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_194757_999dc9ec-7010-4e87-ad6d-a3198853f388_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/31101e18-506a-470c-a3f7-fc3890fa94b5.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_184703_8ef29588-914d-4904-9206-daf29fc001ca.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_184703_8ef29588-914d-4904-9206-daf29fc001ca_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/ded5fcc8-245c-40e5-b742-942c7a74b41e_resize.jpg) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130848_8e9c7313-5fba-4ceb-8162-95ce3469b08e.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130848_8e9c7313-5fba-4ceb-8162-95ce3469b08e_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1d17c6ad-e015-40df-9d32-fe61776d7907.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_190953_f16ddb8c-2dae-4557-aff1-1f35342c7c39.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_190953_f16ddb8c-2dae-4557-aff1-1f35342c7c39_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/7fbc6102-b0a6-4005-bea7-91e7aacc8b1f.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_190931_ed3473d5-4e5c-4d55-ab9d-7d5374ef79d2.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_190931_ed3473d5-4e5c-4d55-ab9d-7d5374ef79d2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/6fe41e63-4a0a-4b78-8aca-2b8933057b5c.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130852_e5e9940f-05ee-4030-a6f1-8fba50de77f8.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130852_e5e9940f-05ee-4030-a6f1-8fba50de77f8_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1d17c6ad-e015-40df-9d32-fe61776d7907.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_141645_ac6e1dcc-4c62-4763-a166-df7a974eec64.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_141645_ac6e1dcc-4c62-4763-a166-df7a974eec64_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/6c365c5e-15e8-49d3-9069-6110fd1d89e4.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_135418_a0c36acf-82d2-4c71-ab57-092b0fee0bb2.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260827_135418_a0c36acf-82d2-4c71-ab57-092b0fee0bb2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/b07582b0-f307-4662-98d5-a0a4d802c2e1_resize.jpg) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192703_80f86586-c2e3-47ae-ac6b-ca42ada8f621.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192703_80f86586-c2e3-47ae-ac6b-ca42ada8f621_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/88dbd11f-3dc0-4567-a683-1337c92b1fda_resize.jpg) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130854_71857516-55ef-404d-ab72-13e0e320480c.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130854_71857516-55ef-404d-ab72-13e0e320480c_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1d17c6ad-e015-40df-9d32-fe61776d7907.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130934_41c1b814-aa59-4393-b13e-1279b7ceda2a.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130934_41c1b814-aa59-4393-b13e-1279b7ceda2a_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/76c8f0d4-8222-47d8-a6ef-bbccccc79e63.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192314_2a8fa0f0-06ac-4fae-9343-ca709208e684.mp4) · [poster](https://cdn.higgsfield.ai/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/hf_20260901_192314_2a8fa0f0-06ac-4fae-9343-ca709208e684_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3DgH8zZ7H7xieJnKMyo5N4NA9ge/53ee89c2-9c66-4538-a1cd-90ad9bfb47de_resize.jpg) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_182354_2822826e-f6dd-4c65-8634-3ccb736924f2.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_182354_2822826e-f6dd-4c65-8634-3ccb736924f2_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/97d7d9a8-579b-4f06-8625-3d4d3a65f97d.png) | 16:9 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_200304_14051544-e7a6-4839-a4c4-4787e125f2ee.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260901_200304_14051544-e7a6-4839-a4c4-4787e125f2ee_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/76c8f0d4-8222-47d8-a6ef-bbccccc79e63.png) | 3:4 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130851_034f1d98-39a7-49ad-890a-587d80a01040.mp4) · [poster](https://cdn.higgsfield.ai/user_3Bu7akX4ftWjoK20kCV3IUadpQd/hf_20260902_130851_034f1d98-39a7-49ad-890a-587d80a01040_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3Bu7akX4ftWjoK20kCV3IUadpQd/1d17c6ad-e015-40df-9d32-fe61776d7907.png) | 4:3 | 1080p | 8 |  |  |  |
| [mp4](https://d8j0ntlcm91z4.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_145459_217925b3-36eb-4100-8019-7ca697d6c581.mp4) · [poster](https://cdn.higgsfield.ai/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/hf_20260822_145459_217925b3-36eb-4100-8019-7ca697d6c581_thumbnail.webp) | [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/bdc6945b-b622-45cd-899c-4b11b93d06b5_resize.jpg) [image](https://d2ol7oe51mr4n9.cloudfront.net/user_3CIezRC2bfkh5fn1Cl8MjaHdSlp/2f137cea-384f-4a60-b8e6-2c464c657c93_resize.jpg) | 3:4 | 1080p | 9 |  |  |  |

## Cross-links

- Viral Hub (MCP) note: [../../../presets/viral/stop-world.md](../../../presets/viral/stop-world.md)

Source: https://higgsfield.ai/effects/examples/stop-world (crawled page, extracted from embedded page data)
