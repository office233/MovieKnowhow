# Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gradually pulls back to reveal more of the scene, creating distance, suspense, or a sense of isolation
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945 | `b731109c-5856-436f-b269-b44b75f20945` | 74 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b731109c-5856-436f-b269-b44b75f20945 |
| https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa | `f9e6792f-b385-4eca-87f6-f439e917a7aa` | -222 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f9e6792f-b385-4eca-87f6-f439e917a7aa |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A child sits alone on a swing in a snowy playground; slow zoom out reveals the vast empty park around her.
```

Use it as: upload a start image that matches the scene, select motion preset **Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2028a8d9-cae2-48cc-bfe3-f584a1c9e257.webp (320×242)
- Card preview, variant `f9e6792f`: https://d1xarpci4ikg0w.cloudfront.net/56edba43-3fe5-4435-9717-05d3ef6ae03c.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd | https://static.higgsfield.ai/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd.mp4 | https://static.higgsfield.ai/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd.webp | https://d1xarpci4ikg0w.cloudfront.net/838b6d4a-2ce3-407f-a79b-1d11037dff7c.webp (320×562) |
| 2 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89 | https://static.higgsfield.ai/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89.mp4 | https://static.higgsfield.ai/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89.webp | https://d1xarpci4ikg0w.cloudfront.net/c65b9c46-5a1e-4b74-946c-13bdbcc73e98.webp (320×182) |
| 3 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/a74b1863-4d6f-4c00-8ae1-bb618871841e | https://static.higgsfield.ai/a74b1863-4d6f-4c00-8ae1-bb618871841e.mp4 | https://static.higgsfield.ai/a74b1863-4d6f-4c00-8ae1-bb618871841e.webp | https://d1xarpci4ikg0w.cloudfront.net/2e4e7597-2b31-49b7-81e8-8f98bf57dd0d.webp (320×182) |
| 4 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/958f4376-5dd1-4614-97f9-dbee4f66d33c | https://static.higgsfield.ai/958f4376-5dd1-4614-97f9-dbee4f66d33c.mp4 | https://static.higgsfield.ai/958f4376-5dd1-4614-97f9-dbee4f66d33c.webp | https://d1xarpci4ikg0w.cloudfront.net/625c386e-9537-41ab-9329-a3372adc9be9.webp (320×242) |
| 5 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/942c77b6-b0b2-45a7-9e69-8811b297a158 | https://static.higgsfield.ai/942c77b6-b0b2-45a7-9e69-8811b297a158.mp4 | https://static.higgsfield.ai/942c77b6-b0b2-45a7-9e69-8811b297a158.webp | https://d1xarpci4ikg0w.cloudfront.net/cf2a4cc7-09b5-4b30-aac2-561227a4e37e.webp (320×242) |
| 6 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/adba5edf-5c53-449a-8830-9ac683d98ad8 | https://static.higgsfield.ai/adba5edf-5c53-449a-8830-9ac683d98ad8.mp4 | https://static.higgsfield.ai/adba5edf-5c53-449a-8830-9ac683d98ad8.webp | https://d1xarpci4ikg0w.cloudfront.net/9270a01e-4ee0-4705-9234-0d1e67ebb485.webp (320×234) |
| 7 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/fb693cee-bd4f-49da-9cac-22a2eaa77f8a | https://static.higgsfield.ai/fb693cee-bd4f-49da-9cac-22a2eaa77f8a.mp4 | https://static.higgsfield.ai/fb693cee-bd4f-49da-9cac-22a2eaa77f8a.webp | https://d1xarpci4ikg0w.cloudfront.net/4b75ef23-9904-4def-841f-892159517684.webp (320×132) |
| 8 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/ff366925-aa66-42f6-92a9-07083e8848ae | https://static.higgsfield.ai/ff366925-aa66-42f6-92a9-07083e8848ae.mp4 | https://static.higgsfield.ai/ff366925-aa66-42f6-92a9-07083e8848ae.webp | https://d1xarpci4ikg0w.cloudfront.net/45de224b-2db0-4d4a-93f5-33abed7ee018.webp (320×226) |

Source pages: https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945, https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa. Crawled 2026-09.
