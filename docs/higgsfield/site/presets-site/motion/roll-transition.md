# Roll Transition — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** The scene spins forward like a rolling wheel, smoothly transitioning from the start frame to the end frame. Clean, dynamic, and perfect for stylish edits or seamless scene changes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab | `8c4f184b-bccb-40ea-9c72-24793b8233ab` | -178 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8c4f184b-bccb-40ea-9c72-24793b8233ab |
| https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3 | `a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3` | -291 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The scene rolls forward like a wheel from a sunny beach (start frame) to a snowy mountain top (end frame).
```

Use it as: upload a start image that matches the scene, select motion preset **Roll Transition**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Frame rolls like a scroll · **Best for:** Artistic, playful

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7e5420cc-e526-4347-882a-54c13b1481e8.webp (320×210)
- Card preview, variant `a8e2bc3a`: https://d1xarpci4ikg0w.cloudfront.net/ab56cd44-c321-4846-ab59-df1218907609.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/ccb16971-5b18-47fa-98b1-c060773173e3 | https://static.higgsfield.ai/ccb16971-5b18-47fa-98b1-c060773173e3.mp4 | https://static.higgsfield.ai/ccb16971-5b18-47fa-98b1-c060773173e3.webp | https://d1xarpci4ikg0w.cloudfront.net/620de576-6e5a-4353-bf34-cc7c880c4886.webp (320×236) |
| 2 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3 | https://static.higgsfield.ai/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3.mp4 | https://static.higgsfield.ai/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3.webp | https://d1xarpci4ikg0w.cloudfront.net/9e64edba-c848-466d-b05d-dabf54fc5dad.webp (320×210) |
| 3 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/067df180-c287-4711-bea9-aa95d5db94ac | https://static.higgsfield.ai/067df180-c287-4711-bea9-aa95d5db94ac.mp4 | https://static.higgsfield.ai/067df180-c287-4711-bea9-aa95d5db94ac.webp | https://d1xarpci4ikg0w.cloudfront.net/d0ce2475-75bf-4940-afb7-1997ca272ebd.webp (320×320) |
| 4 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/1deac532-4ccc-4df1-8dbc-006da45d45e3 | https://static.higgsfield.ai/1deac532-4ccc-4df1-8dbc-006da45d45e3.mp4 | https://static.higgsfield.ai/1deac532-4ccc-4df1-8dbc-006da45d45e3.webp | https://d1xarpci4ikg0w.cloudfront.net/0c6b3c63-19c3-44f7-bffa-58bb7f5ab757.webp (320×210) |
| 5 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/fc69ae56-60c1-4533-ad55-7824a8ee4694 | https://static.higgsfield.ai/fc69ae56-60c1-4533-ad55-7824a8ee4694.mp4 | https://static.higgsfield.ai/fc69ae56-60c1-4533-ad55-7824a8ee4694.webp | https://d1xarpci4ikg0w.cloudfront.net/1a8e1e99-e723-4f87-b590-59478f4b3ea4.webp (320×432) |
| 6 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/30fe0b41-ccd5-4628-b1a8-8c2a942d7639 | https://static.higgsfield.ai/30fe0b41-ccd5-4628-b1a8-8c2a942d7639.mp4 | https://static.higgsfield.ai/30fe0b41-ccd5-4628-b1a8-8c2a942d7639.webp | https://d1xarpci4ikg0w.cloudfront.net/c9be52e1-8f6a-40c7-8dee-f5ca2c4e26fa.webp (320×486) |
| 7 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/6111b3af-fa30-4bf0-a592-c32d9b838a63 | https://static.higgsfield.ai/6111b3af-fa30-4bf0-a592-c32d9b838a63.mp4 | https://static.higgsfield.ai/6111b3af-fa30-4bf0-a592-c32d9b838a63.webp | https://d1xarpci4ikg0w.cloudfront.net/f0dadb39-6e6d-45aa-82f3-df673a5d0124.webp (320×210) |

Source pages: https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab, https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3. Crawled 2026-09.
