# Dolly Left — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly to the left, following or revealing the scene. Perfect for tracking shots, transitions, or adding visual interest.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab | `36186f21-e20f-479f-a7b9-f7f12354a4ab` | 79 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=36186f21-e20f-479f-a7b9-f7f12354a4ab |
| https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba | `b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba` | -167 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A runner jogs along a seaside promenade at golden hour; the camera tracks left alongside her, palm trees sliding past in the foreground.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Left**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Lateral track to the left · **Best use:** Following horizontal movement, revealing the scene · **Models:** — · **Phrase/template:** "Camera Dolly Left tracking alongside the runner" · **Tips:** Also called Truck Left

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/1c764a1c-0454-4a6d-83c3-cf0c5eedbe50.webp (320×244)
- Card preview, variant `b03fa9e3`: https://d1xarpci4ikg0w.cloudfront.net/8a30693b-47dd-4b72-bf62-5526e7e4823c.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/dc61d9cb-fec2-4380-99ea-b62e00af079f | https://static.higgsfield.ai/dc61d9cb-fec2-4380-99ea-b62e00af079f.mp4 | https://static.higgsfield.ai/dc61d9cb-fec2-4380-99ea-b62e00af079f.webp | https://d1xarpci4ikg0w.cloudfront.net/0f7e10bd-2263-4d42-8f5a-07f6cd102875.webp (320×182) |
| 2 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/3a4ba17c-48a5-4a20-863e-93599239066b | https://static.higgsfield.ai/3a4ba17c-48a5-4a20-863e-93599239066b.mp4 | https://static.higgsfield.ai/3a4ba17c-48a5-4a20-863e-93599239066b.webp | https://d1xarpci4ikg0w.cloudfront.net/f987677a-a479-48de-beb3-56959672d49d.webp (320×182) |
| 3 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/d06416b7-751f-426b-8f65-313fb9a4c690 | https://static.higgsfield.ai/d06416b7-751f-426b-8f65-313fb9a4c690.mp4 | https://static.higgsfield.ai/d06416b7-751f-426b-8f65-313fb9a4c690.webp | https://d1xarpci4ikg0w.cloudfront.net/ad5c1362-81ff-4cea-81f4-13226982cbd3.webp (320×486) |
| 4 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/265484cf-a1ad-408a-8b8d-e59e4a818f21 | https://static.higgsfield.ai/265484cf-a1ad-408a-8b8d-e59e4a818f21.mp4 | https://static.higgsfield.ai/265484cf-a1ad-408a-8b8d-e59e4a818f21.webp | https://d1xarpci4ikg0w.cloudfront.net/13f41558-9013-4805-9ab4-374eccd0d19c.webp (320×210) |
| 5 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/52d84f61-e6ce-4290-a177-95d1119ada3a | https://static.higgsfield.ai/52d84f61-e6ce-4290-a177-95d1119ada3a.mp4 | https://static.higgsfield.ai/52d84f61-e6ce-4290-a177-95d1119ada3a.webp | https://d1xarpci4ikg0w.cloudfront.net/b4beac8a-d858-4eca-921c-acefdadb3318.webp (320×182) |
| 6 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/00ee75e4-6abc-484c-8ef9-1300789c5f09 | https://static.higgsfield.ai/00ee75e4-6abc-484c-8ef9-1300789c5f09.mp4 | https://static.higgsfield.ai/00ee75e4-6abc-484c-8ef9-1300789c5f09.webp | https://d1xarpci4ikg0w.cloudfront.net/248151b0-bf22-4348-bafa-377e0beee6be.webp (320×424) |

Source pages: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab, https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba. Crawled 2026-09.
