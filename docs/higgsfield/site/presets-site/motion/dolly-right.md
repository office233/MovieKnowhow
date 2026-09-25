# Dolly Right — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly to the right alongside the subject or scene. Great for tracking motion, revealing space, or adding cinematic flow.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023 | `17a8f1d4-88a4-4bb5-a662-c28e8ea7d023` | 74 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=17a8f1d4-88a4-4bb5-a662-c28e8ea7d023 |
| https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261 | `22f946c2-ed60-44bf-bca3-2be92c07d261` | 36 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=22f946c2-ed60-44bf-bca3-2be92c07d261 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A vintage car cruises down a desert highway; the camera tracks right alongside it, heat haze shimmering over the asphalt.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Right**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Lateral track to the right · **Best use:** Same as Dolly Left · **Models:** — · **Phrase/template:** "Camera Dolly Right as the car accelerates" · **Tips:** Parallax: "Background moves slower than foreground."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/9eb5d907-5a7f-4990-9b09-c108dd4e90e9.webp (320×424)
- Card preview, variant `22f946c2`: https://d1xarpci4ikg0w.cloudfront.net/d39ae76c-52df-4908-8c82-fb3d17741152.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/4e040a7a-9409-47f7-89d3-632311466cbc | https://static.higgsfield.ai/4e040a7a-9409-47f7-89d3-632311466cbc.mp4 | https://static.higgsfield.ai/4e040a7a-9409-47f7-89d3-632311466cbc.webp | https://d1xarpci4ikg0w.cloudfront.net/a41b10b7-4e22-467c-a690-09eddacdde05.webp (320×424) |
| 2 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/90ba870f-f6f7-4abb-a4bf-94574a663b55 | https://static.higgsfield.ai/90ba870f-f6f7-4abb-a4bf-94574a663b55.mp4 | https://static.higgsfield.ai/90ba870f-f6f7-4abb-a4bf-94574a663b55.webp | https://d1xarpci4ikg0w.cloudfront.net/c8dd50c7-420f-4af8-83f4-6e12cb14330c.webp (320×486) |
| 3 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/46e70134-b7ba-432c-ae02-969423e6d26f | https://static.higgsfield.ai/46e70134-b7ba-432c-ae02-969423e6d26f.mp4 | https://static.higgsfield.ai/46e70134-b7ba-432c-ae02-969423e6d26f.webp | https://d1xarpci4ikg0w.cloudfront.net/276ad313-1b8f-424b-8898-0481d7babef1.webp (320×562) |
| 4 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/b8ea73fb-4042-4ffc-9bda-90ae27855477 | https://static.higgsfield.ai/b8ea73fb-4042-4ffc-9bda-90ae27855477.mp4 | https://static.higgsfield.ai/b8ea73fb-4042-4ffc-9bda-90ae27855477.webp | https://d1xarpci4ikg0w.cloudfront.net/e3e6bd82-76ea-40b2-98ff-b8289c76f4bd.webp (320×242) |
| 5 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/15539cad-365b-454c-a5a1-e5590f58c481 | https://static.higgsfield.ai/15539cad-365b-454c-a5a1-e5590f58c481.mp4 | https://static.higgsfield.ai/15539cad-365b-454c-a5a1-e5590f58c481.webp | https://d1xarpci4ikg0w.cloudfront.net/c9af3c07-ce09-40a5-bcc0-1e8fc0ca870c.webp (320×180) |
| 6 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/3c9105d3-3e99-450a-a409-6cfc0216de71 | https://static.higgsfield.ai/3c9105d3-3e99-450a-a409-6cfc0216de71.mp4 | https://static.higgsfield.ai/3c9105d3-3e99-450a-a409-6cfc0216de71.webp | https://d1xarpci4ikg0w.cloudfront.net/e7a328d0-1a41-4a4c-95c2-d2ae34ef3b88.webp (320×182) |
| 7 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/bf13f461-35d2-4681-81cb-e5845914f330 | https://static.higgsfield.ai/bf13f461-35d2-4681-81cb-e5845914f330.mp4 | https://static.higgsfield.ai/bf13f461-35d2-4681-81cb-e5845914f330.webp | https://d1xarpci4ikg0w.cloudfront.net/aa0ee0bc-0be0-43a2-9a4c-9d533e323c3f.webp (320×182) |
| 8 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/22de4e0f-2e81-4468-b1ed-82afc456deae | https://static.higgsfield.ai/22de4e0f-2e81-4468-b1ed-82afc456deae.mp4 | https://static.higgsfield.ai/22de4e0f-2e81-4468-b1ed-82afc456deae.webp | https://d1xarpci4ikg0w.cloudfront.net/04885cb8-1926-4afa-b8b4-38bc9f9a5b0f.webp (320×242) |
| 9 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973 | https://static.higgsfield.ai/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973.mp4 | https://static.higgsfield.ai/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973.webp | https://d1xarpci4ikg0w.cloudfront.net/7965ebae-cec9-4fa9-bc80-758a4d40d495.webp (320×136) |

Source pages: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023, https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261. Crawled 2026-09.
