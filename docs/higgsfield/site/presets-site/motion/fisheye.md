# Fisheye — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** music video
- **What it does (site description, verbatim):** A wide, distorted lens look that curves the edges of the frame, making everything appear rounded and exaggerated. Adds a fun, surreal, or edgy vibe to the shot.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0 | `6c689fc3-e421-4ed5-892c-2092d1c60be0` | -204 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6c689fc3-e421-4ed5-892c-2092d1c60be0 |
| https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd | `a5915704-2b92-476b-b67b-3a1394c613cd` | 49 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5915704-2b92-476b-b67b-3a1394c613cd |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A skater grins right into the lens mid-trick, fisheye distortion bending the skatepark around him.
```

Use it as: upload a start image that matches the scene, select motion preset **Fisheye**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Wide-lens distortion, curved perspective · **Best use:** Surreal, skateboarding, experimental · **Models:** — · **Phrase/template:** "Fisheye lens capturing the skateboarder's trick" · **Tips:** —

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/a71c3e8e-9c69-4b25-adf9-606133b04af1.webp (320×320)
- Card preview, variant `a5915704`: https://d1xarpci4ikg0w.cloudfront.net/10fe69f5-e502-4ff9-b40a-e3996fb346a2.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/a9e8c129-843a-46a3-8580-bf04efef697d | https://static.higgsfield.ai/a9e8c129-843a-46a3-8580-bf04efef697d.mp4 | https://static.higgsfield.ai/a9e8c129-843a-46a3-8580-bf04efef697d.webp | https://d1xarpci4ikg0w.cloudfront.net/fd8eabb7-8cfa-49bb-91a8-8c028bb44519.webp (320×424) |
| 2 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/8d72e429-5787-450b-abf7-5c12a5339608 | https://static.higgsfield.ai/8d72e429-5787-450b-abf7-5c12a5339608.mp4 | https://static.higgsfield.ai/8d72e429-5787-450b-abf7-5c12a5339608.webp | https://d1xarpci4ikg0w.cloudfront.net/64fe5be2-e9fd-4ac8-a4b9-a34896c78790.webp (320×320) |
| 3 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb | https://static.higgsfield.ai/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb.mp4 | https://static.higgsfield.ai/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb.webp | https://d1xarpci4ikg0w.cloudfront.net/4b94b2b4-be39-42ef-a8ab-48dc59bf5947.webp (320×424) |
| 4 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/de88b7a2-a37b-42bd-806d-806e13ab9f73 | https://static.higgsfield.ai/de88b7a2-a37b-42bd-806d-806e13ab9f73.mp4 | https://static.higgsfield.ai/de88b7a2-a37b-42bd-806d-806e13ab9f73.webp | https://d1xarpci4ikg0w.cloudfront.net/06203c51-ba7f-4f29-8599-7499a3160efc.webp (320×182) |
| 5 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/37d7f64a-3bea-498c-9956-9603c38910e4 | https://static.higgsfield.ai/37d7f64a-3bea-498c-9956-9603c38910e4.mp4 | https://static.higgsfield.ai/37d7f64a-3bea-498c-9956-9603c38910e4.webp | https://d1xarpci4ikg0w.cloudfront.net/52b0a009-5b04-4e80-814b-e1d472603f33.webp (320×182) |
| 6 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/644419ab-85fa-481a-af69-8a4945acb6f8 | https://static.higgsfield.ai/644419ab-85fa-481a-af69-8a4945acb6f8.mp4 | https://static.higgsfield.ai/644419ab-85fa-481a-af69-8a4945acb6f8.webp | https://d1xarpci4ikg0w.cloudfront.net/376f0ea2-dbfb-4596-a1e4-0fae752eec2e.webp (320×424) |
| 7 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/08c8ba3d-5f98-421a-ad34-8738e6f8efe0 | https://static.higgsfield.ai/08c8ba3d-5f98-421a-ad34-8738e6f8efe0.mp4 | https://static.higgsfield.ai/08c8ba3d-5f98-421a-ad34-8738e6f8efe0.webp | https://d1xarpci4ikg0w.cloudfront.net/918bc1e4-e8aa-4ad5-aa51-aaaa6c492510.webp (320×424) |
| 8 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/a89082c2-198f-4a74-8d17-885e282d37e3 | https://static.higgsfield.ai/a89082c2-198f-4a74-8d17-885e282d37e3.mp4 | https://static.higgsfield.ai/a89082c2-198f-4a74-8d17-885e282d37e3.webp | https://d1xarpci4ikg0w.cloudfront.net/8f61956d-0249-4ddf-ad99-4776a6289092.webp (320×320) |
| 9 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/44c533dd-3099-48b0-bc53-fbefbe76cb87 | https://static.higgsfield.ai/44c533dd-3099-48b0-bc53-fbefbe76cb87.mp4 | https://static.higgsfield.ai/44c533dd-3099-48b0-bc53-fbefbe76cb87.webp | https://d1xarpci4ikg0w.cloudfront.net/6d13fa45-f752-44c5-859c-bfb65301437b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0, https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd. Crawled 2026-09.
