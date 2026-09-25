# Glam — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** A high-speed camera moves smoothly around the subject, creating epic, slow-motion shots full of glamour and impact
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8 | `5763f4ec-ea6b-449d-9509-4596962668a8` | 79 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5763f4ec-ea6b-449d-9509-4596962668a8 |
| https://higgsfield.ai/motion/ae4a319d-a06f-4b30-8b67-55a35a22f24a | `ae4a319d-a06f-4b30-8b67-55a35a22f24a` | -220 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ae4a319d-a06f-4b30-8b67-55a35a22f24a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A fashion model flips her glossy hair in a golden-lit studio; high-speed camera sweeps around her in slow motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Glam**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/eaf6a8c8-b310-4cf4-8700-04ea0aa8d205.webp (320×242)
- Card preview, variant `ae4a319d`: https://d1xarpci4ikg0w.cloudfront.net/63c9770f-e2bf-434d-915e-ee66f4a674dd.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/c894871c-6906-40be-8bba-b50652dd7646 | https://static.higgsfield.ai/c894871c-6906-40be-8bba-b50652dd7646.mp4 | https://static.higgsfield.ai/c894871c-6906-40be-8bba-b50652dd7646.webp | https://d1xarpci4ikg0w.cloudfront.net/ad17a3fa-4536-4378-a6ef-af47413ee7d2.webp (320×242) |
| 2 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/ad04ee86-5706-44ce-8f92-70d271fb465f | https://static.higgsfield.ai/ad04ee86-5706-44ce-8f92-70d271fb465f.mp4 | https://static.higgsfield.ai/ad04ee86-5706-44ce-8f92-70d271fb465f.webp | https://d1xarpci4ikg0w.cloudfront.net/a0559205-cd9f-4652-b093-c49fa87f9d36.webp (320×242) |
| 3 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/59995ebf-df67-46f2-8600-01c4df9f898d | https://static.higgsfield.ai/59995ebf-df67-46f2-8600-01c4df9f898d.mp4 | https://static.higgsfield.ai/59995ebf-df67-46f2-8600-01c4df9f898d.webp | https://d1xarpci4ikg0w.cloudfront.net/11eb4a62-70e2-4a04-82fe-de8ac8b76ac1.webp (320×210) |
| 4 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/953f3ffc-c3dd-47cd-a353-b4869ed38925 | https://static.higgsfield.ai/953f3ffc-c3dd-47cd-a353-b4869ed38925.mp4 | https://static.higgsfield.ai/953f3ffc-c3dd-47cd-a353-b4869ed38925.webp | https://d1xarpci4ikg0w.cloudfront.net/1bc50957-2d9d-471e-b5d5-cd02986d9753.webp (320×210) |
| 5 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/14b9156c-2cb1-40b4-8a21-1cd7075ba8df | https://static.higgsfield.ai/14b9156c-2cb1-40b4-8a21-1cd7075ba8df.mp4 | https://static.higgsfield.ai/14b9156c-2cb1-40b4-8a21-1cd7075ba8df.webp | https://d1xarpci4ikg0w.cloudfront.net/b6e7b301-d165-4161-b8a9-329b99636946.webp (320×486) |
| 6 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/c29c18ab-9597-4ba1-a5c2-1f5890d0c149 | https://static.higgsfield.ai/c29c18ab-9597-4ba1-a5c2-1f5890d0c149.mp4 | https://static.higgsfield.ai/c29c18ab-9597-4ba1-a5c2-1f5890d0c149.webp | https://d1xarpci4ikg0w.cloudfront.net/fdf84f90-a683-444a-998f-46c36f223b02.webp (320×182) |
| 7 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/7cb8c248-c631-4e4a-8338-3399b1fdd177 | https://static.higgsfield.ai/7cb8c248-c631-4e4a-8338-3399b1fdd177.mp4 | https://static.higgsfield.ai/7cb8c248-c631-4e4a-8338-3399b1fdd177.webp | https://d1xarpci4ikg0w.cloudfront.net/9a165c88-35b3-490a-8fba-266d23fc1ddf.webp (320×242) |
| 8 | https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8/1ff21d5b-6cc7-46e5-8228-91cd6bc725dd | https://static.higgsfield.ai/1ff21d5b-6cc7-46e5-8228-91cd6bc725dd.mp4 | https://static.higgsfield.ai/1ff21d5b-6cc7-46e5-8228-91cd6bc725dd.webp | https://d1xarpci4ikg0w.cloudfront.net/b366ea69-8ca8-42f0-a03c-9e9ac39fe494.webp (320×242) |

Source pages: https://higgsfield.ai/motion/5763f4ec-ea6b-449d-9509-4596962668a8, https://higgsfield.ai/motion/ae4a319d-a06f-4b30-8b67-55a35a22f24a. Crawled 2026-09.
