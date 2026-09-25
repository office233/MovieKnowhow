# Car Explosion — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A car bursts into flames and debris, creating a powerful, high-impact shot full of action and intensity
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5 | `41574f0a-2e5d-4b8c-8b9d-b3fef81151a5` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=41574f0a-2e5d-4b8c-8b9d-b3fef81151a5 |
| https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac | `e0394620-9694-441b-b3f8-a4230abcd9ac` | -229 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e0394620-9694-441b-b3f8-a4230abcd9ac |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A parked sedan in an empty lot explodes into a fireball, flipping into the air.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · elemental & destruction):** [Building Explosion](building-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5c36fe71-31b0-4b23-9d82-14ee1cb358b6.webp (320×210)
- Card preview, variant `e0394620`: https://d1xarpci4ikg0w.cloudfront.net/e4a140a9-e9ae-44f6-a101-0ef53598cf95.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59 | https://static.higgsfield.ai/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59.mp4 | https://static.higgsfield.ai/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59.webp | https://d1xarpci4ikg0w.cloudfront.net/34efe8da-253a-4aed-a27e-5c48fad2fa24.webp (320×242) |
| 2 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/2014a532-f9b9-4aad-aad4-50bcfbe7210b | https://static.higgsfield.ai/2014a532-f9b9-4aad-aad4-50bcfbe7210b.mp4 | https://static.higgsfield.ai/2014a532-f9b9-4aad-aad4-50bcfbe7210b.webp | https://d1xarpci4ikg0w.cloudfront.net/ca81fb4b-f0c6-4cc0-88a0-c62d42e6af17.webp (320×210) |
| 3 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/e38365a4-0e97-4d8d-9ade-4cba0d059abe | https://static.higgsfield.ai/e38365a4-0e97-4d8d-9ade-4cba0d059abe.mp4 | https://static.higgsfield.ai/e38365a4-0e97-4d8d-9ade-4cba0d059abe.webp | https://d1xarpci4ikg0w.cloudfront.net/53a0ff5c-01a3-4d6e-ad52-8e2da1484f1a.webp (320×210) |
| 4 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab | https://static.higgsfield.ai/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab.mp4 | https://static.higgsfield.ai/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab.webp | https://d1xarpci4ikg0w.cloudfront.net/f5a5b5ce-f2ef-49c5-b3ee-dee8c5869402.webp (320×182) |
| 5 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/babe06c5-d183-4763-b431-eb8fd8d35ffd | https://static.higgsfield.ai/babe06c5-d183-4763-b431-eb8fd8d35ffd.mp4 | https://static.higgsfield.ai/babe06c5-d183-4763-b431-eb8fd8d35ffd.webp | https://d1xarpci4ikg0w.cloudfront.net/428bf0da-0753-4415-823e-64cecdf68554.webp (320×210) |
| 6 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/d339e830-1e5d-4e00-bcd7-832217ac6fb8 | https://static.higgsfield.ai/d339e830-1e5d-4e00-bcd7-832217ac6fb8.mp4 | https://static.higgsfield.ai/d339e830-1e5d-4e00-bcd7-832217ac6fb8.webp | https://d1xarpci4ikg0w.cloudfront.net/0605b85b-ede7-4c60-aefc-aa551f687109.webp (320×210) |
| 7 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc | https://static.higgsfield.ai/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc.mp4 | https://static.higgsfield.ai/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc.webp | https://d1xarpci4ikg0w.cloudfront.net/9a2c9ccb-5631-40f6-b4f1-242f2dd276f3.webp (320×182) |

Source pages: https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5, https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac. Crawled 2026-09.
