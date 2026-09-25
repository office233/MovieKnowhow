# Wind to Face — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Intense wind blasts the subject with extreme force—hair whips, clothes thrash, and the body leans into the pressure. Creates a dramatic, chaotic, or high-impact visual moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5 | `080d9f40-110d-4e74-bc93-bc4e9a9032d5` | 90 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=080d9f40-110d-4e74-bc93-bc4e9a9032d5 |
| https://higgsfield.ai/motion/52d0b18d-c098-4526-b576-b2838d34855e | `52d0b18d-c098-4526-b576-b2838d34855e` | -166 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=52d0b18d-c098-4526-b576-b2838d34855e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman in a red dress leans into a hurricane wind, hair and fabric whipping violently.
```

Use it as: upload a start image that matches the scene, select motion preset **Wind to Face**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Thunder God + Wind to Face](thunder-god-plus-wind-to-face.md)
- **Same category (VFX · elemental & destruction):** [Building Explosion](building-explosion.md), [Car Explosion](car-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/16357360-6a4d-4497-ae0c-06299f21e758.webp (320×182)
- Card preview, variant `52d0b18d`: https://d1xarpci4ikg0w.cloudfront.net/24c52983-df42-4514-9ec3-4b2cfdabb8b3.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/03406e5f-7ca3-4f8a-bbc7-5065bd2a38f5 | https://static.higgsfield.ai/03406e5f-7ca3-4f8a-bbc7-5065bd2a38f5.mp4 | https://static.higgsfield.ai/03406e5f-7ca3-4f8a-bbc7-5065bd2a38f5.webp | https://d1xarpci4ikg0w.cloudfront.net/bf4a03a3-098f-4c91-bb4b-fa055619dd30.webp (320×182) |
| 2 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/2dca4227-8296-4a0e-bb18-bc7f3cfcb962 | https://static.higgsfield.ai/2dca4227-8296-4a0e-bb18-bc7f3cfcb962.mp4 | https://static.higgsfield.ai/2dca4227-8296-4a0e-bb18-bc7f3cfcb962.webp | https://d1xarpci4ikg0w.cloudfront.net/e2bf092b-f377-4a9e-a7b3-2cde859baf9a.webp (320×182) |
| 3 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/d9d48ac5-2e69-46fb-86ca-08c4884a0f56 | https://static.higgsfield.ai/d9d48ac5-2e69-46fb-86ca-08c4884a0f56.mp4 | https://static.higgsfield.ai/d9d48ac5-2e69-46fb-86ca-08c4884a0f56.webp | https://d1xarpci4ikg0w.cloudfront.net/31405dcd-ddd8-43bc-98c8-e0e49412d692.webp (320×182) |
| 4 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/ebfeb90d-4fed-4aa6-b45b-14700b93d86c | https://static.higgsfield.ai/ebfeb90d-4fed-4aa6-b45b-14700b93d86c.mp4 | https://static.higgsfield.ai/ebfeb90d-4fed-4aa6-b45b-14700b93d86c.webp | https://d1xarpci4ikg0w.cloudfront.net/3f2fc08a-f529-4ee3-80c0-9fcb788e153a.webp (320×182) |
| 5 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/20c48b6a-d7de-4704-a61e-0b43d0eb82ff | https://static.higgsfield.ai/20c48b6a-d7de-4704-a61e-0b43d0eb82ff.mp4 | https://static.higgsfield.ai/20c48b6a-d7de-4704-a61e-0b43d0eb82ff.webp | https://d1xarpci4ikg0w.cloudfront.net/75ecd431-068e-4d3f-ac67-fc0b47884e99.webp (320×182) |
| 6 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/54e4b52d-d20c-4da5-8066-6941e2d0a73f | https://static.higgsfield.ai/54e4b52d-d20c-4da5-8066-6941e2d0a73f.mp4 | https://static.higgsfield.ai/54e4b52d-d20c-4da5-8066-6941e2d0a73f.webp | https://d1xarpci4ikg0w.cloudfront.net/3909ea1a-2abe-4d92-8455-06c2d29d5c2d.webp (320×486) |
| 7 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/b432bd65-577c-4749-bc71-63f98321258c | https://static.higgsfield.ai/b432bd65-577c-4749-bc71-63f98321258c.mp4 | https://static.higgsfield.ai/b432bd65-577c-4749-bc71-63f98321258c.webp | https://d1xarpci4ikg0w.cloudfront.net/5940d6a4-c4cc-4d2b-8149-0c9e090036ee.webp (320×320) |
| 8 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/89e2c70c-b575-45e9-b602-e868f55300b9 | https://static.higgsfield.ai/89e2c70c-b575-45e9-b602-e868f55300b9.mp4 | https://static.higgsfield.ai/89e2c70c-b575-45e9-b602-e868f55300b9.webp | https://d1xarpci4ikg0w.cloudfront.net/93d98c24-4dcf-4f48-91c3-067d14d22101.webp (320×210) |
| 9 | https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5/546f09c4-1835-4dc6-b36e-95ab9f086908 | https://static.higgsfield.ai/546f09c4-1835-4dc6-b36e-95ab9f086908.mp4 | https://static.higgsfield.ai/546f09c4-1835-4dc6-b36e-95ab9f086908.webp | https://d1xarpci4ikg0w.cloudfront.net/aecab12c-a537-40b0-b655-7b1d3109af23.webp (320×486) |

Source pages: https://higgsfield.ai/motion/080d9f40-110d-4e74-bc93-bc4e9a9032d5, https://higgsfield.ai/motion/52d0b18d-c098-4526-b576-b2838d34855e. Crawled 2026-09.
