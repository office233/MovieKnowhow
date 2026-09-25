# Tilt Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Rotates the camera angle downward, revealing what’s below or shifting focus. Great for dramatic reveals, transitions, or guiding the viewer’s eye.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84 | `1958a932-8ffb-4f1a-a5cd-480858f6ae84` | 38 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1958a932-8ffb-4f1a-a5cd-480858f6ae84 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera tilts down from a stormy sky to a lone lighthouse keeper standing on the rocks below.
```

Use it as: upload a start image that matches the scene, select motion preset **Tilt Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/a5601c9d-5678-4344-9882-021cbaa8d125.webp (320×182)

### Sample videos (8)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb | https://static.higgsfield.ai/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb.mp4 | https://static.higgsfield.ai/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb.webp | https://d1xarpci4ikg0w.cloudfront.net/b17fa4dc-7223-4f6b-8220-208dbb8e1a82.webp (320×242) |
| 2 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/b1a1d766-18b8-4c7d-ad17-61d94712f29f | https://static.higgsfield.ai/b1a1d766-18b8-4c7d-ad17-61d94712f29f.mp4 | https://static.higgsfield.ai/b1a1d766-18b8-4c7d-ad17-61d94712f29f.webp | https://d1xarpci4ikg0w.cloudfront.net/f0f31931-a18f-4bd9-9c5a-c31ba3c72d66.webp (320×210) |
| 3 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/edaefd5a-bdd1-4002-bcbf-2a2132dd8457 | https://static.higgsfield.ai/edaefd5a-bdd1-4002-bcbf-2a2132dd8457.mp4 | https://static.higgsfield.ai/edaefd5a-bdd1-4002-bcbf-2a2132dd8457.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8acc90-d65b-44a9-8167-eb6b81d8e6bb.webp (0×0) |
| 4 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e | https://static.higgsfield.ai/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e.mp4 | https://static.higgsfield.ai/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e.webp | https://d1xarpci4ikg0w.cloudfront.net/18d80a76-b8a4-4f7b-bec0-090b662106a4.webp (0×0) |
| 5 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/cfc3d532-5f87-4c2b-9479-1cf60dc5d835 | https://static.higgsfield.ai/cfc3d532-5f87-4c2b-9479-1cf60dc5d835.mp4 | https://static.higgsfield.ai/cfc3d532-5f87-4c2b-9479-1cf60dc5d835.webp | https://d1xarpci4ikg0w.cloudfront.net/a93319e1-38a9-44ca-9d1c-77d4603e5607.webp (320×242) |
| 6 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01 | https://static.higgsfield.ai/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01.mp4 | https://static.higgsfield.ai/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01.webp | https://d1xarpci4ikg0w.cloudfront.net/188945b6-d045-4aa1-a966-4a7edfd1ca34.webp (320×182) |
| 7 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/9c241aeb-7898-4b99-a116-e0dff42f12be | https://static.higgsfield.ai/9c241aeb-7898-4b99-a116-e0dff42f12be.mp4 | https://static.higgsfield.ai/9c241aeb-7898-4b99-a116-e0dff42f12be.webp | https://d1xarpci4ikg0w.cloudfront.net/e8f0df22-0e75-4a2d-84b5-3b3216fb0dff.webp (320×182) |
| 8 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/924bf3a1-d2d6-40df-8901-de45d66edf4f | https://static.higgsfield.ai/924bf3a1-d2d6-40df-8901-de45d66edf4f.mp4 | https://static.higgsfield.ai/924bf3a1-d2d6-40df-8901-de45d66edf4f.webp | https://d1xarpci4ikg0w.cloudfront.net/e3994875-4793-46ff-be90-474a3311dc74.webp (320×182) |

Source pages: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84. Crawled 2026-09.
