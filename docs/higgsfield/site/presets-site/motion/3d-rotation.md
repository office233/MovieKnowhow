# 3D Rotation — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** The subject or product spins smoothly in place, showing a full 360° view. Clean, centered, and perfect for showcasing design, fashion, or product details in a modern way.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696 | `6f06f47e-922e-4660-9fe9-754e4be69696` | -252 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6f06f47e-922e-4660-9fe9-754e4be69696 |
| https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304 | `c2d8f36a-319f-40e4-b5d0-94d4ff9be304` | 82 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c2d8f36a-319f-40e4-b5d0-94d4ff9be304 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A white sneaker spins in place on a clean pastel background, showing every angle of its design.
```

Use it as: upload a start image that matches the scene, select motion preset **3D Rotation**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or object rotates in 3D space · **Best for:** Product, logo, artistic

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/06bc9a42-a754-43a6-959b-fee12f1bad23.webp (320×320)
- Card preview, variant `c2d8f36a`: https://d1xarpci4ikg0w.cloudfront.net/0d17a2c7-b4b7-40bd-b550-fb9eacca88fa.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c29644ca-bcdb-42cd-a05e-308d5f03c94a | https://static.higgsfield.ai/c29644ca-bcdb-42cd-a05e-308d5f03c94a.mp4 | https://static.higgsfield.ai/c29644ca-bcdb-42cd-a05e-308d5f03c94a.webp | https://d1xarpci4ikg0w.cloudfront.net/1984ee8a-d4de-41e7-9de6-5e2bc58a758e.webp (320×210) |
| 2 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15 | https://static.higgsfield.ai/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15.mp4 | https://static.higgsfield.ai/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15.webp | https://d1xarpci4ikg0w.cloudfront.net/15a7739d-de3f-4f08-afaa-05f79fee54b0.webp (320×210) |
| 3 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/46b09ee0-16e2-49d2-b752-5d331807cd83 | https://static.higgsfield.ai/46b09ee0-16e2-49d2-b752-5d331807cd83.mp4 | https://static.higgsfield.ai/46b09ee0-16e2-49d2-b752-5d331807cd83.webp | https://d1xarpci4ikg0w.cloudfront.net/c3964adb-ca5b-4076-9b5e-348afa5eefb5.webp (320×210) |
| 4 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/252cbae3-ce03-40d0-84d3-98ac08dddc89 | https://static.higgsfield.ai/252cbae3-ce03-40d0-84d3-98ac08dddc89.mp4 | https://static.higgsfield.ai/252cbae3-ce03-40d0-84d3-98ac08dddc89.webp | https://d1xarpci4ikg0w.cloudfront.net/4c198564-95ef-4f11-9592-3ff7c38d90f8.webp (320×210) |
| 5 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/9dc26b75-e2d6-481d-9622-9bdd4bf294e7 | https://static.higgsfield.ai/9dc26b75-e2d6-481d-9622-9bdd4bf294e7.mp4 | https://static.higgsfield.ai/9dc26b75-e2d6-481d-9622-9bdd4bf294e7.webp | https://d1xarpci4ikg0w.cloudfront.net/ad4ac648-12fb-4063-82b4-67fe76b0c145.webp (320×210) |
| 6 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/53187a5d-9d01-4567-85ce-5100c2972da1 | https://static.higgsfield.ai/53187a5d-9d01-4567-85ce-5100c2972da1.mp4 | https://static.higgsfield.ai/53187a5d-9d01-4567-85ce-5100c2972da1.webp | https://d1xarpci4ikg0w.cloudfront.net/ad00a402-35b7-4962-be8d-2139316312d9.webp (320×210) |
| 7 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c47d92c1-fc96-4122-9013-5b11489dbf8b | https://static.higgsfield.ai/c47d92c1-fc96-4122-9013-5b11489dbf8b.mp4 | https://static.higgsfield.ai/c47d92c1-fc96-4122-9013-5b11489dbf8b.webp | https://d1xarpci4ikg0w.cloudfront.net/cc1696d5-a5e2-418d-b500-0e5a6f67ed57.webp (320×320) |
| 8 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/9a5a588e-3468-44f1-8b36-d3e67cf864d8 | https://static.higgsfield.ai/9a5a588e-3468-44f1-8b36-d3e67cf864d8.mp4 | https://static.higgsfield.ai/9a5a588e-3468-44f1-8b36-d3e67cf864d8.webp | https://d1xarpci4ikg0w.cloudfront.net/ca19a400-958f-4753-94ff-4bc450593114.webp (320×242) |
| 9 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/67768d96-f2e0-4326-82da-68c699c01c80 | https://static.higgsfield.ai/67768d96-f2e0-4326-82da-68c699c01c80.mp4 | https://static.higgsfield.ai/67768d96-f2e0-4326-82da-68c699c01c80.webp | https://d1xarpci4ikg0w.cloudfront.net/5a3af72f-13f7-4e5e-ba99-f45e0c93cfa9.webp (320×562) |
| 10 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0 | https://static.higgsfield.ai/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0.mp4 | https://static.higgsfield.ai/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0.webp | https://d1xarpci4ikg0w.cloudfront.net/a5ab05c2-c122-40e5-b387-ca4890e7d8f1.webp (320×320) |
| 11 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/879c44e5-1070-4d3d-9a53-bcefce14cc30 | https://static.higgsfield.ai/879c44e5-1070-4d3d-9a53-bcefce14cc30.mp4 | https://static.higgsfield.ai/879c44e5-1070-4d3d-9a53-bcefce14cc30.webp | https://d1xarpci4ikg0w.cloudfront.net/58bdae8a-4c11-480c-9cfc-3ce209270243.webp (320×320) |
| 12 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/1ee702a4-fc89-44a0-92cf-7dfa557e84b3 | https://static.higgsfield.ai/1ee702a4-fc89-44a0-92cf-7dfa557e84b3.mp4 | https://static.higgsfield.ai/1ee702a4-fc89-44a0-92cf-7dfa557e84b3.webp | https://d1xarpci4ikg0w.cloudfront.net/23be449a-3a13-411b-9338-590a31a7704b.webp (320×486) |
| 13 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/57f67f6e-b068-40d4-8b04-f91d57acf899 | https://static.higgsfield.ai/57f67f6e-b068-40d4-8b04-f91d57acf899.mp4 | https://static.higgsfield.ai/57f67f6e-b068-40d4-8b04-f91d57acf899.webp | https://d1xarpci4ikg0w.cloudfront.net/b6f613ab-9755-441b-854c-27fef0bd397f.webp (320×424) |

Source pages: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696, https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304. Crawled 2026-09.
