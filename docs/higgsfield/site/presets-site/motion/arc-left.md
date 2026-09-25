# Arc Left — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera curves gracefully around the subject to the left, adding a sense of movement, focus, and cinematic style. Ideal for emotional build-up or visual flair.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131 | `2a5d8f86-aef3-4b34-b5ee-fb2020daa131` | -241 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2a5d8f86-aef3-4b34-b5ee-fb2020daa131 |
| https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433 | `a5b35657-5a5f-47cb-8042-786381f47433` | 82 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5b35657-5a5f-47cb-8042-786381f47433 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman on a train platform turns to say goodbye; the camera arcs left around her as steam drifts behind.
```

Use it as: upload a start image that matches the scene, select motion preset **Arc Left**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa4751ab-d651-422f-9ce6-7a1f76bc737b.webp (320×236)
- Card preview, variant `a5b35657`: https://d1xarpci4ikg0w.cloudfront.net/04f94311-3be7-4f92-9006-4dcf995687f4.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/36936010-9845-47f6-be49-afa2ad4602f6 | https://static.higgsfield.ai/36936010-9845-47f6-be49-afa2ad4602f6.mp4 | https://static.higgsfield.ai/36936010-9845-47f6-be49-afa2ad4602f6.webp | https://d1xarpci4ikg0w.cloudfront.net/05d7d0ac-254e-48ca-99ad-b0a3b8f5b5ee.webp (320×424) |
| 2 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/9aab013a-eba1-4158-84c6-7dcebeca3803 | https://static.higgsfield.ai/9aab013a-eba1-4158-84c6-7dcebeca3803.mp4 | https://static.higgsfield.ai/9aab013a-eba1-4158-84c6-7dcebeca3803.webp | https://d1xarpci4ikg0w.cloudfront.net/b79ebabe-3f5f-4aff-92b8-1ff44aa59cb0.webp (320×424) |
| 3 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/ec46b6c1-9089-4264-ab7f-dc494893895a | https://static.higgsfield.ai/ec46b6c1-9089-4264-ab7f-dc494893895a.mp4 | https://static.higgsfield.ai/ec46b6c1-9089-4264-ab7f-dc494893895a.webp | https://d1xarpci4ikg0w.cloudfront.net/812b1ef1-3c25-46e4-9848-8007b8427b40.webp (320×242) |
| 4 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/f9043e58-c9fe-44d7-942e-4266f1ca1405 | https://static.higgsfield.ai/f9043e58-c9fe-44d7-942e-4266f1ca1405.mp4 | https://static.higgsfield.ai/f9043e58-c9fe-44d7-942e-4266f1ca1405.webp | https://d1xarpci4ikg0w.cloudfront.net/2b73c966-786d-4a5e-92e2-ec4231a66874.webp (320×210) |
| 5 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/5a92f3a5-3437-4ff8-9edd-b87a8c423674 | https://static.higgsfield.ai/5a92f3a5-3437-4ff8-9edd-b87a8c423674.mp4 | https://static.higgsfield.ai/5a92f3a5-3437-4ff8-9edd-b87a8c423674.webp | https://d1xarpci4ikg0w.cloudfront.net/d6d06122-f69a-4bfa-bc60-5fb25b79a21c.webp (320×424) |
| 6 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/2e7dd41c-bd13-478f-aa55-168449627a35 | https://static.higgsfield.ai/2e7dd41c-bd13-478f-aa55-168449627a35.mp4 | https://static.higgsfield.ai/2e7dd41c-bd13-478f-aa55-168449627a35.webp | https://d1xarpci4ikg0w.cloudfront.net/92a7787d-110b-42f5-b80a-bc3d1626e663.webp (320×236) |
| 7 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/03c7a83c-fe19-4ef8-b017-2f25194595cc | https://static.higgsfield.ai/03c7a83c-fe19-4ef8-b017-2f25194595cc.mp4 | https://static.higgsfield.ai/03c7a83c-fe19-4ef8-b017-2f25194595cc.webp | https://d1xarpci4ikg0w.cloudfront.net/d45fb578-ff4b-4bd9-92ac-d9f5b3cd38aa.webp (320×182) |
| 8 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/b541406c-d840-4297-8300-6524322b1113 | https://static.higgsfield.ai/b541406c-d840-4297-8300-6524322b1113.mp4 | https://static.higgsfield.ai/b541406c-d840-4297-8300-6524322b1113.webp | https://d1xarpci4ikg0w.cloudfront.net/511d24df-b1b7-4df4-83b1-42f7c2277fd6.webp (320×242) |
| 9 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/e2b86912-8d1d-40d2-ba81-d3fd96c23359 | https://static.higgsfield.ai/e2b86912-8d1d-40d2-ba81-d3fd96c23359.mp4 | https://static.higgsfield.ai/e2b86912-8d1d-40d2-ba81-d3fd96c23359.webp | https://d1xarpci4ikg0w.cloudfront.net/d93ea746-e33f-4f97-afbd-491e1ad586bc.webp (320×180) |

Source pages: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131, https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433. Crawled 2026-09.
