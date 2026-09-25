# Hyperlapse — Higgsfield Motion preset

- **Category:** Camera · time (lapse)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A moving timelapse where the camera travels through space over time, creating a fast, fluid journey. Perfect for dynamic cityscapes, travel scenes, or visual storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb | `2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb` | 93 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb |
| https://higgsfield.ai/motion/f0f07997-34fe-4bef-84c1-ee9d4da94a1a | `f0f07997-34fe-4bef-84c1-ee9d4da94a1a` | -165 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f0f07997-34fe-4bef-84c1-ee9d4da94a1a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Hyperlapse walking through Times Square at night, crowds and traffic streaking past.
```

Use it as: upload a start image that matches the scene, select motion preset **Hyperlapse**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Moving camera combined with time-lapse · **Best use:** City transformation, travel · **Models:** Veo 3, Sora 2† · **Phrase/template:** "Hyperlapse down the boulevard from dawn to dusk" · **Tips:** C1, C4

## Related presets

- **Same category (Camera · time (lapse)):** [Timelapse Human](timelapse-human.md), [Timelapse Landscape](timelapse-landscape.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/8868ce62-5489-486d-a4ba-ff6bc2f12abd.webp (320×242)
- Card preview, variant `f0f07997`: https://d1xarpci4ikg0w.cloudfront.net/8f04c130-b70f-4c94-8d4e-da7d682b5dd2.webp

### Sample videos (2; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb/8e636a63-84e1-4824-9b61-6a23b52bf214 | https://static.higgsfield.ai/8e636a63-84e1-4824-9b61-6a23b52bf214.mp4 | https://static.higgsfield.ai/8e636a63-84e1-4824-9b61-6a23b52bf214.webp | https://d1xarpci4ikg0w.cloudfront.net/aa88f253-1fee-435d-8130-fc8117a04076.webp (320×182) |
| 2 | https://higgsfield.ai/motion/2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb/d4b12954-2ad1-4e0b-bbe6-bb22b3eb9263 | https://static.higgsfield.ai/d4b12954-2ad1-4e0b-bbe6-bb22b3eb9263.mp4 | https://static.higgsfield.ai/d4b12954-2ad1-4e0b-bbe6-bb22b3eb9263.webp | https://d1xarpci4ikg0w.cloudfront.net/5c9cfefc-1134-4a2b-87f2-821ec69fac7d.webp (320×242) |

Source pages: https://higgsfield.ai/motion/2dec4bb0-5d8d-4a2d-bd9f-242ec613a9fb, https://higgsfield.ai/motion/f0f07997-34fe-4bef-84c1-ee9d4da94a1a. Crawled 2026-09.
