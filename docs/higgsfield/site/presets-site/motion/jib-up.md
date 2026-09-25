# Jib Up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera lifts smoothly upward in a vertical motion, revealing more of the scene or emphasizing height. Great for epic intros or transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b | `c22b1586-837b-480f-a456-d4e8ba9c3a4b` | 65 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c22b1586-837b-480f-a456-d4e8ba9c3a4b |
| https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7 | `d6b43086-d5d1-415b-a239-016698b425d7` | -216 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d6b43086-d5d1-415b-a239-016698b425d7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A street dancer finishes a move in an alley; the camera jibs up to show the graffiti-covered building towering above him.
```

Use it as: upload a start image that matches the scene, select motion preset **Jib Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/395a2a6f-28e9-4319-8a58-e8af77048f69.webp (320×242)
- Card preview, variant `d6b43086`: https://d1xarpci4ikg0w.cloudfront.net/68cdb529-88e5-4feb-85c4-1cb2301b0061.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/fe709573-0f8c-446f-baaf-f83f06d39c60 | https://static.higgsfield.ai/fe709573-0f8c-446f-baaf-f83f06d39c60.mp4 | https://static.higgsfield.ai/fe709573-0f8c-446f-baaf-f83f06d39c60.webp | https://d1xarpci4ikg0w.cloudfront.net/cc204b6c-a187-4cc8-b442-c1d2f22bec3e.webp (320×242) |
| 2 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/ca5a4a86-60c6-4533-ae06-6a0ac37134c2 | https://static.higgsfield.ai/ca5a4a86-60c6-4533-ae06-6a0ac37134c2.mp4 | https://static.higgsfield.ai/ca5a4a86-60c6-4533-ae06-6a0ac37134c2.webp | https://d1xarpci4ikg0w.cloudfront.net/a7c6ab68-0179-476a-bb1b-f066393692a8.webp (320×424) |
| 3 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/562f8905-e376-4d78-b39a-eefa2a07ce6a | https://static.higgsfield.ai/562f8905-e376-4d78-b39a-eefa2a07ce6a.mp4 | https://static.higgsfield.ai/562f8905-e376-4d78-b39a-eefa2a07ce6a.webp | https://d1xarpci4ikg0w.cloudfront.net/4256769f-47fa-49f6-a902-5a1e39102770.webp (320×486) |
| 4 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/aa83f8d2-d11c-4e9a-9929-447bddd6f52d | https://static.higgsfield.ai/aa83f8d2-d11c-4e9a-9929-447bddd6f52d.mp4 | https://static.higgsfield.ai/aa83f8d2-d11c-4e9a-9929-447bddd6f52d.webp | https://d1xarpci4ikg0w.cloudfront.net/1f170ee1-44b3-4647-bcd1-96a0d13028b5.webp (320×182) |
| 5 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/a72e9bcd-8768-4257-ae43-1571c67df228 | https://static.higgsfield.ai/a72e9bcd-8768-4257-ae43-1571c67df228.mp4 | https://static.higgsfield.ai/a72e9bcd-8768-4257-ae43-1571c67df228.webp | https://d1xarpci4ikg0w.cloudfront.net/68514b6a-316b-4cf2-a299-0195d3e26047.webp (320×182) |
| 6 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/916906ec-2e41-4b1d-826b-3ec5b7b7a387 | https://static.higgsfield.ai/916906ec-2e41-4b1d-826b-3ec5b7b7a387.mp4 | https://static.higgsfield.ai/916906ec-2e41-4b1d-826b-3ec5b7b7a387.webp | https://d1xarpci4ikg0w.cloudfront.net/32ce602a-d839-4c24-acfc-6a9ce71534ec.webp (320×242) |
| 7 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/c7f7b437-d494-4138-9881-25026ea6d1bd | https://static.higgsfield.ai/c7f7b437-d494-4138-9881-25026ea6d1bd.mp4 | https://static.higgsfield.ai/c7f7b437-d494-4138-9881-25026ea6d1bd.webp | https://d1xarpci4ikg0w.cloudfront.net/31ee067e-43c8-4f4c-95cd-9260360ec987.webp (320×210) |
| 8 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/6202de41-9d14-42c1-88cf-bb83a53b147f | https://static.higgsfield.ai/6202de41-9d14-42c1-88cf-bb83a53b147f.mp4 | https://static.higgsfield.ai/6202de41-9d14-42c1-88cf-bb83a53b147f.webp | https://d1xarpci4ikg0w.cloudfront.net/84eaedb3-9252-4e34-8b7c-7c725f5fe8c4.webp (320×210) |

Source pages: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b, https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7. Crawled 2026-09.
