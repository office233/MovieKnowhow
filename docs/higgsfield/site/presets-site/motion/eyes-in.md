# Eyes In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera close to the subject’s eyes, creating an intense and emotional connection with the viewer
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187 | `0ab33462-481e-4c78-8ffc-086bebd84187` | -263 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0ab33462-481e-4c78-8ffc-086bebd84187 |
| https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3 | `f226ac67-43d3-4726-ad9c-132608bda8b3` | 90 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f226ac67-43d3-4726-ad9c-132608bda8b3 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Close-up of an old sailor with weathered skin; the camera pushes into his pale gray eyes as a tear forms.
```

Use it as: upload a start image that matches the scene, select motion preset **Eyes In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Turning Metal + Eyes In](turning-metal-plus-eyes-in.md)
- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/87172d19-e58b-4d25-8a98-209f0f82e3fb.webp (320×562)
- Card preview, variant `f226ac67`: https://d1xarpci4ikg0w.cloudfront.net/fa4c2d12-d5c1-4446-b2af-ee682853a97b.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/2469f14c-5441-4524-883b-8b6759a79e30 | https://static.higgsfield.ai/2469f14c-5441-4524-883b-8b6759a79e30.mp4 | https://static.higgsfield.ai/2469f14c-5441-4524-883b-8b6759a79e30.webp | https://d1xarpci4ikg0w.cloudfront.net/5c502ce8-f39d-41f0-81cf-545fbe9a3d38.webp (320×562) |
| 2 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca | https://static.higgsfield.ai/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca.mp4 | https://static.higgsfield.ai/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca.webp | https://d1xarpci4ikg0w.cloudfront.net/012e851c-ba85-4ed6-af6a-85d1cb0d0e8e.webp (320×132) |
| 3 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/aabe5434-a4ae-4c95-982e-6c909bdb6993 | https://static.higgsfield.ai/aabe5434-a4ae-4c95-982e-6c909bdb6993.mp4 | https://static.higgsfield.ai/aabe5434-a4ae-4c95-982e-6c909bdb6993.webp | https://d1xarpci4ikg0w.cloudfront.net/b037e0bf-ef6b-4038-aa9b-7ea474697405.webp (320×176) |
| 4 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/e6fd7d2b-c799-44e4-97c6-91270b84a49e | https://static.higgsfield.ai/e6fd7d2b-c799-44e4-97c6-91270b84a49e.mp4 | https://static.higgsfield.ai/e6fd7d2b-c799-44e4-97c6-91270b84a49e.webp | https://d1xarpci4ikg0w.cloudfront.net/82d72d84-3089-4a24-a83f-7b774f752853.webp (320×176) |
| 5 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b | https://static.higgsfield.ai/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b.mp4 | https://static.higgsfield.ai/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b.webp | https://d1xarpci4ikg0w.cloudfront.net/85969350-a634-4dbd-9818-34241b985928.webp (320×432) |
| 6 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/986dc080-e881-445e-b257-f20267609106 | https://static.higgsfield.ai/986dc080-e881-445e-b257-f20267609106.mp4 | https://static.higgsfield.ai/986dc080-e881-445e-b257-f20267609106.webp | https://d1xarpci4ikg0w.cloudfront.net/876d4501-9424-435a-a779-f3a644ff8837.webp (320×320) |
| 7 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/168e2166-aec9-4d33-956a-0b7fb9c4317f | https://static.higgsfield.ai/168e2166-aec9-4d33-956a-0b7fb9c4317f.mp4 | https://static.higgsfield.ai/168e2166-aec9-4d33-956a-0b7fb9c4317f.webp | https://d1xarpci4ikg0w.cloudfront.net/558ce982-f7cb-48c3-956f-96243454dab2.webp (320×562) |
| 8 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/eb56c2cb-d76b-407c-b69f-c6963cad4ebc | https://static.higgsfield.ai/eb56c2cb-d76b-407c-b69f-c6963cad4ebc.mp4 | https://static.higgsfield.ai/eb56c2cb-d76b-407c-b69f-c6963cad4ebc.webp | https://d1xarpci4ikg0w.cloudfront.net/34f472a6-19f4-4983-830d-b88be12b1a24.webp (320×176) |
| 9 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/268799a8-d5f0-4f19-847a-1428d0770836 | https://static.higgsfield.ai/268799a8-d5f0-4f19-847a-1428d0770836.mp4 | https://static.higgsfield.ai/268799a8-d5f0-4f19-847a-1428d0770836.webp | https://d1xarpci4ikg0w.cloudfront.net/18f53abf-edd5-416b-99f5-75e9e4895b46.webp (320×180) |
| 10 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/f637a879-6071-4312-a801-379345e70e3d | https://static.higgsfield.ai/f637a879-6071-4312-a801-379345e70e3d.mp4 | https://static.higgsfield.ai/f637a879-6071-4312-a801-379345e70e3d.webp | https://d1xarpci4ikg0w.cloudfront.net/6ae866bf-8620-43c7-8331-11b60e616320.webp (320×176) |
| 11 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/c9aebe22-9cae-4eec-87ce-a29a715e4bb7 | https://static.higgsfield.ai/c9aebe22-9cae-4eec-87ce-a29a715e4bb7.mp4 | https://static.higgsfield.ai/c9aebe22-9cae-4eec-87ce-a29a715e4bb7.webp | https://d1xarpci4ikg0w.cloudfront.net/86c8497d-717c-4b02-a701-99cc5c95fd51.webp (320×218) |
| 12 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/2c53a2b3-6882-4b33-83c7-79df6b264c1d | https://static.higgsfield.ai/2c53a2b3-6882-4b33-83c7-79df6b264c1d.mp4 | https://static.higgsfield.ai/2c53a2b3-6882-4b33-83c7-79df6b264c1d.webp | https://d1xarpci4ikg0w.cloudfront.net/e3da31fe-2dcd-46f8-8f5c-c486e3d84949.webp (320×176) |

Source pages: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187, https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3. Crawled 2026-09.
