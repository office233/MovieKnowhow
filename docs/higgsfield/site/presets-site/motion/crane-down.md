# Crane Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gently lowers the camera from above to the subject, creating a dramatic or revealing entrance. Perfect for introductions, transitions, or emotional emphasis.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0 | `41d4241f-8e3a-4c72-bd1d-89e93f06b0f0` | 65 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=41d4241f-8e3a-4c72-bd1d-89e93f06b0f0 |
| https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee | `494db3c2-2297-4cf7-bef7-cba0cebe73ee` | -191 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=494db3c2-2297-4cf7-bef7-cba0cebe73ee |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
From high above a candlelit ballroom, the camera cranes down to a masked woman standing alone at the center of the dance floor.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera descends from a high position · **Best use:** Introduce location from above, personalize · **Models:** — · **Phrase/template:** "Crane Down from the skyline to the lone figure on the street" · "Camera descends 20 feet over 3 seconds. Start wide-overhead, end at eye level with subject. Slow tilt up during descent…" · **Tips:** Maps to Cinema Studio **Jib Down**

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/861da213-324a-487a-a48b-f5a22c92c7b2.webp (320×182)
- Card preview, variant `494db3c2`: https://d1xarpci4ikg0w.cloudfront.net/db3c2ac6-3181-48e5-bb81-b725af1e20dc.webp

### Sample videos (4; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/882b7462-7bed-4827-bae2-7f0081990849 | https://static.higgsfield.ai/882b7462-7bed-4827-bae2-7f0081990849.mp4 | https://static.higgsfield.ai/882b7462-7bed-4827-bae2-7f0081990849.webp | https://d1xarpci4ikg0w.cloudfront.net/56c12cd7-cd18-45fd-acdc-8b57018c9ccb.webp (320×320) |
| 2 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/7b3025c0-d083-47e7-ad54-8b303d2021b2 | https://static.higgsfield.ai/7b3025c0-d083-47e7-ad54-8b303d2021b2.mp4 | https://static.higgsfield.ai/7b3025c0-d083-47e7-ad54-8b303d2021b2.webp | https://d1xarpci4ikg0w.cloudfront.net/ce504b15-1524-42f9-80ef-e8f9d30a2d9b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/d84ba087-53b7-4a14-8a86-6fcdd619e1ad | https://static.higgsfield.ai/d84ba087-53b7-4a14-8a86-6fcdd619e1ad.mp4 | https://static.higgsfield.ai/d84ba087-53b7-4a14-8a86-6fcdd619e1ad.webp | https://d1xarpci4ikg0w.cloudfront.net/2c8320b7-91bf-4a78-989c-e4b732b5323b.webp (320×170) |
| 4 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1 | https://static.higgsfield.ai/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1.mp4 | https://static.higgsfield.ai/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1.webp | https://d1xarpci4ikg0w.cloudfront.net/9532964a-1584-4ce9-8293-4a5256ce42cc.webp (320×132) |

Source pages: https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0, https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee. Crawled 2026-09.
