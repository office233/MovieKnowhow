# Snorricam + Low Shutter — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** music video
- **What it does (site description, verbatim):** The subject stays locked in frame while the world blurs with motion streaks. A dizzying, chaotic blend perfect for intense or disoriented scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf | `7c3b76f5-92b7-4629-8b6f-c8f9042635bf` | 69 | isMix | mix of: Snorricam (motion id `893cb65f-c528-40aa-83d8-c5aeb2bfe59f`, strength 0.9), Low Shutter (motion id `f7949a2f-2bcd-459a-96c0-80eb222abcdc`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=893cb65f-c528-40aa-83d8-c5aeb2bfe59f%2Cf7949a2f-2bcd-459a-96c0-80eb222abcdc&presetMotionStrengths=0.9%2C1 |
| https://higgsfield.ai/motion/a3ce0054-2745-40e9-99b8-29977324bff1 | `a3ce0054-2745-40e9-99b8-29977324bff1` | -206 | isMix | mix of: Snorricam (motion id `893cb65f-c528-40aa-83d8-c5aeb2bfe59f`, strength 0.9), Low Shutter (motion id `f7949a2f-2bcd-459a-96c0-80eb222abcdc`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=893cb65f-c528-40aa-83d8-c5aeb2bfe59f%2Cf7949a2f-2bcd-459a-96c0-80eb222abcdc&presetMotionStrengths=0.9%2C1 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A drunk man stumbles through a neon street, locked in frame while the world smears into motion streaks.
```

Use it as: upload a start image that matches the scene, select motion preset **Snorricam + Low Shutter**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Snorricam](snorricam.md) (strength 0.9), [Low Shutter](low-shutter.md) (strength 1.0)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/53f012d2-2c74-4cc7-93da-9bb2b02e6de8.webp (320×190)
- Card preview, variant `a3ce0054`: https://d1xarpci4ikg0w.cloudfront.net/da0f2cde-2a59-401e-a265-a77783f4a130.webp
- Component preview — Snorricam: https://d1xarpci4ikg0w.cloudfront.net/c5634f64-fc8c-4cfe-ba93-c9bff1ea37dc.webp
- Component preview — Low Shutter: https://d1xarpci4ikg0w.cloudfront.net/d4f55fca-2d75-49c8-9638-464bd8498c4e.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/40a6259b-5d8f-4f36-839e-ee984eb15412 | https://static.higgsfield.ai/40a6259b-5d8f-4f36-839e-ee984eb15412.mp4 | https://static.higgsfield.ai/40a6259b-5d8f-4f36-839e-ee984eb15412.webp | https://d1xarpci4ikg0w.cloudfront.net/688d45b8-cab0-4e6b-bb78-b7c80f3f353e.webp (320×242) |
| 2 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/1a96779b-bb6f-4db9-a886-1a7b32932015 | https://static.higgsfield.ai/1a96779b-bb6f-4db9-a886-1a7b32932015.mp4 | https://static.higgsfield.ai/1a96779b-bb6f-4db9-a886-1a7b32932015.webp | https://d1xarpci4ikg0w.cloudfront.net/69639b44-107e-4eb0-beec-df80f8cf719c.webp (320×210) |
| 3 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/eaf1e455-47f3-4bbd-a055-8f0cdec259b0 | https://static.higgsfield.ai/eaf1e455-47f3-4bbd-a055-8f0cdec259b0.mp4 | https://static.higgsfield.ai/eaf1e455-47f3-4bbd-a055-8f0cdec259b0.webp | https://d1xarpci4ikg0w.cloudfront.net/dcaf664a-acab-4343-8d01-98e8cc0bfed4.webp (320×210) |
| 4 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/400dda8a-fa82-48bf-b642-5deebe214ee2 | https://static.higgsfield.ai/400dda8a-fa82-48bf-b642-5deebe214ee2.mp4 | https://static.higgsfield.ai/400dda8a-fa82-48bf-b642-5deebe214ee2.webp | https://d1xarpci4ikg0w.cloudfront.net/40d904ea-60ea-40b3-a6f0-255ab8f06a8f.webp (320×320) |
| 5 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/1af2b18e-68ec-4814-8afc-b79b0cb508db | https://static.higgsfield.ai/1af2b18e-68ec-4814-8afc-b79b0cb508db.mp4 | https://static.higgsfield.ai/1af2b18e-68ec-4814-8afc-b79b0cb508db.webp | https://d1xarpci4ikg0w.cloudfront.net/1f8b3550-c1ba-4161-9fac-d71f81c1e072.webp (320×242) |
| 6 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/31738351-33dd-495c-8670-1b517ed4212c | https://static.higgsfield.ai/31738351-33dd-495c-8670-1b517ed4212c.mp4 | https://static.higgsfield.ai/31738351-33dd-495c-8670-1b517ed4212c.webp | https://d1xarpci4ikg0w.cloudfront.net/6541cfdb-7c73-4295-bc0b-505f0a85a2bc.webp (320×210) |

Source pages: https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf, https://higgsfield.ai/motion/a3ce0054-2745-40e9-99b8-29977324bff1. Crawled 2026-09.
