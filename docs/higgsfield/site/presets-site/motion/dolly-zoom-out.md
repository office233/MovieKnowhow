# Dolly Zoom Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera backward while zooming in, distorting perspective to heighten emotion or suspense. Perfect for dramatic reveals or intense moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976 | `520a2d8d-f9b2-4d0a-9fdf-85d02a13c976` | 69 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=520a2d8d-f9b2-4d0a-9fdf-85d02a13c976 |
| https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e | `e057dbd5-1734-4462-bb4c-7d64fe20795e` | -200 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e057dbd5-1734-4462-bb4c-7d64fe20795e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman stands on a crowded subway platform, frozen in panic; the station seems to close in around her as the perspective warps.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Dolly back while zooming in · **Best use:** Overwhelm, isolation, world closing in · **Models:** — · **Phrase/template:** "Dolly Zoom Out — city swallows the figure" · **Tips:** —

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fe957e85-88cf-4372-9f65-aaaa48504d8a.webp (320×210)
- Card preview, variant `e057dbd5`: https://d1xarpci4ikg0w.cloudfront.net/cedab22a-fa43-4060-9c2b-822685d50d59.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/45b10018-9d07-487a-adfe-fd7ad83df01d | https://static.higgsfield.ai/45b10018-9d07-487a-adfe-fd7ad83df01d.mp4 | https://static.higgsfield.ai/45b10018-9d07-487a-adfe-fd7ad83df01d.webp | https://d1xarpci4ikg0w.cloudfront.net/12ffc177-ead0-4583-bcae-acce54201da2.webp (320×180) |
| 2 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/28354294-d622-4e33-a681-4536b5cd8616 | https://static.higgsfield.ai/28354294-d622-4e33-a681-4536b5cd8616.mp4 | https://static.higgsfield.ai/28354294-d622-4e33-a681-4536b5cd8616.webp | https://d1xarpci4ikg0w.cloudfront.net/5ca9b80e-6ed5-48e6-9259-2801571827c3.webp (320×568) |
| 3 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/5b6a7651-e5ef-4169-8699-eae818ebf605 | https://static.higgsfield.ai/5b6a7651-e5ef-4169-8699-eae818ebf605.mp4 | https://static.higgsfield.ai/5b6a7651-e5ef-4169-8699-eae818ebf605.webp | https://d1xarpci4ikg0w.cloudfront.net/785781e5-c822-42ea-a399-cb1cb99f2a8b.webp (320×210) |
| 4 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/27f9318b-521f-47f5-9558-a71439914695 | https://static.higgsfield.ai/27f9318b-521f-47f5-9558-a71439914695.mp4 | https://static.higgsfield.ai/27f9318b-521f-47f5-9558-a71439914695.webp | https://d1xarpci4ikg0w.cloudfront.net/26e430d3-ac7d-4f2f-804b-f97acf9945c0.webp (320×242) |
| 5 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/98b72285-cd8d-4c1d-b42d-d585b3854761 | https://static.higgsfield.ai/98b72285-cd8d-4c1d-b42d-d585b3854761.mp4 | https://static.higgsfield.ai/98b72285-cd8d-4c1d-b42d-d585b3854761.webp | https://d1xarpci4ikg0w.cloudfront.net/346d2667-785b-46d4-95fe-df55540a4859.webp (320×182) |
| 6 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/abb27c03-6be5-4104-9b4a-bc755c070fde | https://static.higgsfield.ai/abb27c03-6be5-4104-9b4a-bc755c070fde.mp4 | https://static.higgsfield.ai/abb27c03-6be5-4104-9b4a-bc755c070fde.webp | https://d1xarpci4ikg0w.cloudfront.net/36a0058a-ffd3-46f9-a463-4a220c1c84a4.webp (320×182) |
| 7 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/2329181f-473d-4b81-a091-cb76d49ec256 | https://static.higgsfield.ai/2329181f-473d-4b81-a091-cb76d49ec256.mp4 | https://static.higgsfield.ai/2329181f-473d-4b81-a091-cb76d49ec256.webp | https://d1xarpci4ikg0w.cloudfront.net/7fc2c6da-0ab0-4870-80a4-44be4a9fb356.webp (320×182) |

Source pages: https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976, https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e. Crawled 2026-09.
