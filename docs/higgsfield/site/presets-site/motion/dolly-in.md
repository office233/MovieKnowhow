# Dolly In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly toward the subject, drawing viewers closer and building focus or emotion. Ideal for intense or intimate moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3 | `06463063-551a-4cbb-abc0-0ff1007784b3` | 57 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=06463063-551a-4cbb-abc0-0ff1007784b3 |
| https://higgsfield.ai/motion/8d582076-10e2-40f7-bbef-6384532147c2 | `8d582076-10e2-40f7-bbef-6384532147c2` | -205 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8d582076-10e2-40f7-bbef-6384532147c2 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman sits alone at a rain-streaked diner window at night, neon reflecting on her face; she slowly looks up as the camera dollies in toward her eyes.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Smooth linear move toward the subject · **Best use:** Intimacy, revelation, tension build · **Models:** Kling 2.6 / 3.0 · **Phrase/template:** "Camera Dolly In toward her face" · precise: "Camera dolly forward at constant 2 feet/second. Maintain subject center-frame. Slight lens breathing… No focus shift." · **Tips:** + Dutch Angle = villain reveal. The horror default is a slow Dolly In (creep). For micro-moves, state distance and time: "over the full 7 seconds the camera pulls back only 10–15 centimeters."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/b451713f-06ec-4a72-ae24-4a96bfbaf951.webp (320×182)
- Card preview, variant `8d582076`: https://d1xarpci4ikg0w.cloudfront.net/e6365a1a-a21e-42c0-8000-62790d47b223.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/3231174f-61a3-4218-b6a9-b2d863507d48 | https://static.higgsfield.ai/3231174f-61a3-4218-b6a9-b2d863507d48.mp4 | https://static.higgsfield.ai/3231174f-61a3-4218-b6a9-b2d863507d48.webp | https://d1xarpci4ikg0w.cloudfront.net/89e0740c-824b-449c-aeb2-eb334303fd3f.webp (320×424) |
| 2 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/1c01e3e6-0731-4c02-a3dd-dab870d54adb | https://static.higgsfield.ai/1c01e3e6-0731-4c02-a3dd-dab870d54adb.mp4 | https://static.higgsfield.ai/1c01e3e6-0731-4c02-a3dd-dab870d54adb.webp | https://d1xarpci4ikg0w.cloudfront.net/c650e709-ee15-412f-9f50-a66566fb8c05.webp (320×242) |
| 3 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/262b6919-5b32-4cf4-92c9-34d7a2eb7f69 | https://static.higgsfield.ai/262b6919-5b32-4cf4-92c9-34d7a2eb7f69.mp4 | https://static.higgsfield.ai/262b6919-5b32-4cf4-92c9-34d7a2eb7f69.webp | https://d1xarpci4ikg0w.cloudfront.net/b1471709-8598-434f-bd54-2a42d049b930.webp (320×182) |
| 4 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/5eb4d2a3-ec59-447b-a107-2c09deb5a94d | https://static.higgsfield.ai/5eb4d2a3-ec59-447b-a107-2c09deb5a94d.mp4 | https://static.higgsfield.ai/5eb4d2a3-ec59-447b-a107-2c09deb5a94d.webp | https://d1xarpci4ikg0w.cloudfront.net/072e5f3e-e198-460b-b8cd-95fbdb52339c.webp (320×182) |
| 5 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba | https://static.higgsfield.ai/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba.mp4 | https://static.higgsfield.ai/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba.webp | https://d1xarpci4ikg0w.cloudfront.net/c87f0006-f018-4315-917f-c045a9712694.webp (320×182) |
| 6 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6 | https://static.higgsfield.ai/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6.mp4 | https://static.higgsfield.ai/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6.webp | https://d1xarpci4ikg0w.cloudfront.net/1c55504f-d9fc-4e9b-8ffe-86cd6f9614e4.webp (320×242) |
| 7 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/fa658788-d7d1-442d-9afb-ffd3222bfad0 | https://static.higgsfield.ai/fa658788-d7d1-442d-9afb-ffd3222bfad0.mp4 | https://static.higgsfield.ai/fa658788-d7d1-442d-9afb-ffd3222bfad0.webp | https://d1xarpci4ikg0w.cloudfront.net/81fe7c1f-b607-4924-8dff-5636a1f12402.webp (320×242) |

Source pages: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3, https://higgsfield.ai/motion/8d582076-10e2-40f7-bbef-6384532147c2. Crawled 2026-09.
