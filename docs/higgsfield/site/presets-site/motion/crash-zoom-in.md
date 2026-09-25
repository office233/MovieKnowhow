# Crash Zoom In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Quickly zooms into the subject to create a dramatic, intense effect. Perfect for highlighting reactions or adding sudden focus in your video.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960 | `1cc27a2b-3b89-44d4-a7f9-d583454a8960` | 71 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1cc27a2b-3b89-44d4-a7f9-d583454a8960 |
| https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38 | `a2dddb76-03fa-429e-9905-577bffdf9d38` | -256 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man opens a letter at his kitchen table and his eyes go wide in shock; fast crash zoom into his face.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Rapid, sudden zoom toward the subject · **Best use:** Shock, realization, emphasis on a detail · **Models:** Higgsfield DoP · **Phrase/template:** "Crash Zoom In on the bloody handprint" · DoP template: "Crash zoom from wide establishing to extreme close-up on the protagonist eye, the moment of realization frozen in his iris… cold cyan rim light… shallow focus, 24fps, single take with consistent character ID, no morphing of background plates." · reliable: "crash zoom from wide to extreme close-up on impact" · **Tips:** + FPV Drone = chase climax. Avoid in lifestyle and drama.

## Related presets

- **Mixes that use this preset:** [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md)
- **Same category (Camera · zoom):** [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5c86ea16-50ec-492e-a2ff-3a5f2226613b.webp (320×182)
- Card preview, variant `a2dddb76`: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp

### Sample videos (17; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/39cf50cd-26ea-4793-a32f-0d906e38d1f5 | https://static.higgsfield.ai/39cf50cd-26ea-4793-a32f-0d906e38d1f5.mp4 | https://static.higgsfield.ai/39cf50cd-26ea-4793-a32f-0d906e38d1f5.webp | https://d1xarpci4ikg0w.cloudfront.net/49bf1746-f59b-4651-9f03-8dc464ffdf8c.webp (320×168) |
| 2 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/858fa028-22a2-407e-8a51-4a3b8cc31e0d | https://static.higgsfield.ai/858fa028-22a2-407e-8a51-4a3b8cc31e0d.mp4 | https://static.higgsfield.ai/858fa028-22a2-407e-8a51-4a3b8cc31e0d.webp | https://d1xarpci4ikg0w.cloudfront.net/ee41e2b9-f3a1-4622-8f90-8677043d464d.webp (320×130) |
| 3 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/7c934ae4-5d7c-4097-843e-8ae5737a7380 | https://static.higgsfield.ai/7c934ae4-5d7c-4097-843e-8ae5737a7380.mp4 | https://static.higgsfield.ai/7c934ae4-5d7c-4097-843e-8ae5737a7380.webp | https://d1xarpci4ikg0w.cloudfront.net/4a508012-2a5e-4503-a441-a8303c10b4a2.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/3dbead9d-3e93-42c7-a726-0e6fb6f52a60 | https://static.higgsfield.ai/3dbead9d-3e93-42c7-a726-0e6fb6f52a60.mp4 | https://static.higgsfield.ai/3dbead9d-3e93-42c7-a726-0e6fb6f52a60.webp | https://d1xarpci4ikg0w.cloudfront.net/8a846a53-7c7b-4e3c-a63d-6d8a105691f2.webp (320×180) |
| 5 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53 | https://static.higgsfield.ai/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53.mp4 | https://static.higgsfield.ai/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53.webp | https://d1xarpci4ikg0w.cloudfront.net/2ad27578-a9ea-4cd0-a772-3b5f076afb58.webp (320×180) |
| 6 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/18a1bac8-73ff-4f58-a4c5-7e623b90e600 | https://static.higgsfield.ai/18a1bac8-73ff-4f58-a4c5-7e623b90e600.mp4 | https://static.higgsfield.ai/18a1bac8-73ff-4f58-a4c5-7e623b90e600.webp | https://d1xarpci4ikg0w.cloudfront.net/ca5a6b11-91ed-49dd-b999-95638e13086b.webp (320×562) |
| 7 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/fc4b0693-d283-4289-b260-c5776a361cbd | https://static.higgsfield.ai/fc4b0693-d283-4289-b260-c5776a361cbd.mp4 | https://static.higgsfield.ai/fc4b0693-d283-4289-b260-c5776a361cbd.webp | https://d1xarpci4ikg0w.cloudfront.net/5b029147-9545-466a-8270-5c944d6f45cc.webp (320×180) |
| 8 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/10a12ce6-c759-4c0a-8323-eda064d5ac5a | https://static.higgsfield.ai/10a12ce6-c759-4c0a-8323-eda064d5ac5a.mp4 | https://static.higgsfield.ai/10a12ce6-c759-4c0a-8323-eda064d5ac5a.webp | https://d1xarpci4ikg0w.cloudfront.net/4be08d8c-b25b-47eb-b0ab-0b6fa731b114.webp (320×562) |
| 9 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/e870d5b9-5613-430a-9181-e03e6d52f84e | https://static.higgsfield.ai/e870d5b9-5613-430a-9181-e03e6d52f84e.mp4 | https://static.higgsfield.ai/e870d5b9-5613-430a-9181-e03e6d52f84e.webp | https://d1xarpci4ikg0w.cloudfront.net/a154f4e0-55e8-408e-9b86-ed12984c462a.webp (320×182) |
| 10 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/7cdc16a3-7c49-4297-864e-d595806ac78d | https://static.higgsfield.ai/7cdc16a3-7c49-4297-864e-d595806ac78d.mp4 | https://static.higgsfield.ai/7cdc16a3-7c49-4297-864e-d595806ac78d.webp | https://d1xarpci4ikg0w.cloudfront.net/c72755fa-9039-4d21-a411-fc9e8eb48e9b.webp (320×242) |
| 11 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/90f7df37-089e-438e-b029-a730abfce331 | https://static.higgsfield.ai/90f7df37-089e-438e-b029-a730abfce331.mp4 | https://static.higgsfield.ai/90f7df37-089e-438e-b029-a730abfce331.webp | https://d1xarpci4ikg0w.cloudfront.net/513b1811-a4a0-4151-a1ca-409199a92904.webp (320×242) |
| 12 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/81d24a54-e3a6-4651-bc71-9bb0596b26e2 | https://static.higgsfield.ai/81d24a54-e3a6-4651-bc71-9bb0596b26e2.mp4 | https://static.higgsfield.ai/81d24a54-e3a6-4651-bc71-9bb0596b26e2.webp | https://d1xarpci4ikg0w.cloudfront.net/04ca4a0e-466c-41af-a14c-9fa276ac8d6b.webp (320×486) |
| 13 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ee7e672d-5db7-40e6-be64-cbc8ffe46c26 | https://static.higgsfield.ai/ee7e672d-5db7-40e6-be64-cbc8ffe46c26.mp4 | https://static.higgsfield.ai/ee7e672d-5db7-40e6-be64-cbc8ffe46c26.webp | https://d1xarpci4ikg0w.cloudfront.net/3be4a9c4-6a3a-4d0d-9167-77177d0a7444.webp (320×182) |
| 14 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/1686dbf4-f6c6-4776-8035-4c1f94fee9e3 | https://static.higgsfield.ai/1686dbf4-f6c6-4776-8035-4c1f94fee9e3.mp4 | https://static.higgsfield.ai/1686dbf4-f6c6-4776-8035-4c1f94fee9e3.webp | https://d1xarpci4ikg0w.cloudfront.net/4dfc8e1a-adbd-40c0-8a62-d9c944ca8d2d.webp (320×210) |
| 15 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ba294e2c-c76d-499a-949c-bc56c25bb621 | https://static.higgsfield.ai/ba294e2c-c76d-499a-949c-bc56c25bb621.mp4 | https://static.higgsfield.ai/ba294e2c-c76d-499a-949c-bc56c25bb621.webp | https://d1xarpci4ikg0w.cloudfront.net/b12071e6-38ba-4b5b-b67c-b34e284c0003.webp (320×210) |
| 16 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/dd82f729-859c-42ec-a39c-61af06735bdb | https://static.higgsfield.ai/dd82f729-859c-42ec-a39c-61af06735bdb.mp4 | https://static.higgsfield.ai/dd82f729-859c-42ec-a39c-61af06735bdb.webp | https://d1xarpci4ikg0w.cloudfront.net/54eed361-cc44-4024-8217-2207b71219c7.webp (320×210) |
| 17 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/f92d8357-8ea4-4d11-a3da-99351fc10ff7 | https://static.higgsfield.ai/f92d8357-8ea4-4d11-a3da-99351fc10ff7.mp4 | https://static.higgsfield.ai/f92d8357-8ea4-4d11-a3da-99351fc10ff7.webp | https://d1xarpci4ikg0w.cloudfront.net/4d24114c-f9f1-4d15-a346-0fbad401361b.webp (320×486) |

Source pages: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960, https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38. Crawled 2026-09.
