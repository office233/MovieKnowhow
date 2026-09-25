# Earth Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** transitions
- **What it does (site description, verbatim):** The camera pulls back rapidly from the subject to reveal their city, then the continent, and finally the entire Earth. Epic and cinematic—perfect for transitions, scale, or storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0 | `70e490b9-26b7-4572-8d9c-2ac8dcc9adc0` | -350 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=70e490b9-26b7-4572-8d9c-2ac8dcc9adc0 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman waves up at the sky from a rooftop garden in Tokyo; the camera rockets upward and out past the city, the continent, and finally the whole Earth.
```

Use it as: upload a start image that matches the scene, select motion preset **Earth Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Camera pulls back from earth's surface · **Best for:** Epic reveal, scale, planet

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/8fbf0cbb-67cd-4390-9bc2-d3f6c0693bf3.webp (320×486)

### Sample videos (5)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/32fe360d-1568-4fb6-af4c-6ad904f4d691 | https://static.higgsfield.ai/32fe360d-1568-4fb6-af4c-6ad904f4d691.mp4 | https://static.higgsfield.ai/32fe360d-1568-4fb6-af4c-6ad904f4d691.webp | https://d1xarpci4ikg0w.cloudfront.net/83d55772-5d2f-48ed-baaa-386d064323b2.webp (320×236) |
| 2 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/9e5c8ba6-4842-4dde-ae64-72749256884c | https://static.higgsfield.ai/9e5c8ba6-4842-4dde-ae64-72749256884c.mp4 | https://static.higgsfield.ai/9e5c8ba6-4842-4dde-ae64-72749256884c.webp | https://d1xarpci4ikg0w.cloudfront.net/49e5d3f0-edce-485b-8392-fac01eb7af3e.webp (320×242) |
| 3 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe | https://static.higgsfield.ai/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe.mp4 | https://static.higgsfield.ai/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe.webp | https://d1xarpci4ikg0w.cloudfront.net/b9550695-10b5-4aa4-a211-9f1a635ffecf.webp (320×210) |
| 4 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/0c9ab87d-4171-4721-8b8a-be99d66e8d57 | https://static.higgsfield.ai/0c9ab87d-4171-4721-8b8a-be99d66e8d57.mp4 | https://static.higgsfield.ai/0c9ab87d-4171-4721-8b8a-be99d66e8d57.webp | https://d1xarpci4ikg0w.cloudfront.net/6796220e-d9d3-4585-be0e-107de068a404.webp (320×486) |
| 5 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/62ba3477-410d-4984-ac22-c8022c5653af | https://static.higgsfield.ai/62ba3477-410d-4984-ac22-c8022c5653af.mp4 | https://static.higgsfield.ai/62ba3477-410d-4984-ac22-c8022c5653af.webp | https://d1xarpci4ikg0w.cloudfront.net/adad7749-116a-4dbd-9e86-7113eb0d0d37.webp (320×486) |

Source pages: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0. Crawled 2026-09.
