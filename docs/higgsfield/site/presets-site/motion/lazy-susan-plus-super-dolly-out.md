# Lazy Susan + Super Dolly Out — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Rotates around the subject while smoothly pulling away, creating a stylish, cinematic reveal. Feels elegant, dramatic, and fashion-forward.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685 | `71e3e642-561f-46d9-b9af-8af420f99685` | -163 | isMix | mix of: Lazy Susan (motion id `025866ff-677c-4af2-92ef-52d6ec3b035e`, strength 0.95), Super Dolly Out (motion id `d66685ce-8c2b-4aeb-8d4a-195d474c7eca`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e%2Cd66685ce-8c2b-4aeb-8d4a-195d474c7eca&presetMotionStrengths=0.95%2C0.65 |
| https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4 | `bf81db64-714e-4195-acd4-21065b317dd4` | 75 | isMix | mix of: Lazy Susan (motion id `025866ff-677c-4af2-92ef-52d6ec3b035e`, strength 0.95), Super Dolly Out (motion id `d66685ce-8c2b-4aeb-8d4a-195d474c7eca`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e%2Cd66685ce-8c2b-4aeb-8d4a-195d474c7eca&presetMotionStrengths=0.95%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A model in couture stands still as the camera rotates around her and pulls far back to reveal a marble hall.
```

Use it as: upload a start image that matches the scene, select motion preset **Lazy Susan + Super Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Lazy Susan](lazy-susan.md) (strength 0.95), [Super Dolly Out](super-dolly-out.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/df056ee7-7ece-468c-bf53-df187a412f2d.webp (320×238)
- Card preview, variant `bf81db64`: https://d1xarpci4ikg0w.cloudfront.net/ed5f59c0-d592-471f-bc71-ba7d80439844.webp
- Component preview — Lazy Susan: https://d1xarpci4ikg0w.cloudfront.net/e27cfd60-07f5-49dc-8c7a-bb609e71ec73.webp
- Component preview — Super Dolly Out: https://d1xarpci4ikg0w.cloudfront.net/ee9451aa-da82-4c44-9cb4-f903c88ab800.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/c8054127-cdc2-4e42-a608-9897be0bb6e5 | https://static.higgsfield.ai/c8054127-cdc2-4e42-a608-9897be0bb6e5.mp4 | https://static.higgsfield.ai/c8054127-cdc2-4e42-a608-9897be0bb6e5.webp | https://d1xarpci4ikg0w.cloudfront.net/691f247c-524c-43c7-b765-8f87e3e0bac8.webp (320×182) |
| 2 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/e3976531-d562-45d5-a98c-5eaad9b3baa2 | https://static.higgsfield.ai/e3976531-d562-45d5-a98c-5eaad9b3baa2.mp4 | https://static.higgsfield.ai/e3976531-d562-45d5-a98c-5eaad9b3baa2.webp | https://d1xarpci4ikg0w.cloudfront.net/03bbb328-91b1-4e6d-ab98-55605c26b248.webp (320×320) |
| 3 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9a76f7e8-f1f6-41db-9200-0004d7981ad7 | https://static.higgsfield.ai/9a76f7e8-f1f6-41db-9200-0004d7981ad7.mp4 | https://static.higgsfield.ai/9a76f7e8-f1f6-41db-9200-0004d7981ad7.webp | https://d1xarpci4ikg0w.cloudfront.net/02b17a77-b233-4cab-868a-dd67f8e99265.webp (320×242) |
| 4 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/38de5533-9a02-4b2b-85b4-c12e3aaaa771 | https://static.higgsfield.ai/38de5533-9a02-4b2b-85b4-c12e3aaaa771.mp4 | https://static.higgsfield.ai/38de5533-9a02-4b2b-85b4-c12e3aaaa771.webp | https://d1xarpci4ikg0w.cloudfront.net/fdeb0cd3-1c5d-4d14-8043-8f0cd24a19a0.webp (320×320) |
| 5 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9ba152f0-08f8-474d-adbc-e2360b45ee48 | https://static.higgsfield.ai/9ba152f0-08f8-474d-adbc-e2360b45ee48.mp4 | https://static.higgsfield.ai/9ba152f0-08f8-474d-adbc-e2360b45ee48.webp | https://d1xarpci4ikg0w.cloudfront.net/750623c6-d425-450d-9d56-529bf1cf4b91.webp (320×424) |
| 6 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/8d4fc90a-b075-475a-829f-a2a978265324 | https://static.higgsfield.ai/8d4fc90a-b075-475a-829f-a2a978265324.mp4 | https://static.higgsfield.ai/8d4fc90a-b075-475a-829f-a2a978265324.webp | https://d1xarpci4ikg0w.cloudfront.net/6f0f95d9-6ce3-4d77-8f95-0f36b47a5dca.webp (320×486) |

Source pages: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685, https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4. Crawled 2026-09.
