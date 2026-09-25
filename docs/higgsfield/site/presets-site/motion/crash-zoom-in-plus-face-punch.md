# Crash Zoom In + Face Punch — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A sudden, intense zoom punches into the subject’s face just as a blow lands—amplifying impact, shock, and raw emotion in a single explosive moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c | `b58e69b3-a23a-4e5b-8901-f5b170a7755c` | -221 | isMix | mix of: Crash Zoom In (motion id `1cc27a2b-3b89-44d4-a7f9-d583454a8960`, strength 0.85), Face Punch (motion id `91da0dd0-c8e1-4793-b77e-946e98bc7ebb`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1cc27a2b-3b89-44d4-a7f9-d583454a8960%2C91da0dd0-c8e1-4793-b77e-946e98bc7ebb&presetMotionStrengths=0.85%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
In a boxing ring the camera snaps into a fighter's face as a punch lands.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In + Face Punch**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crash Zoom In](crash-zoom-in.md) (strength 0.85), [Face Punch](face-punch.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7e318181-6c4e-47a5-ad88-6453af99f47b.webp (320×320)
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/5c86ea16-50ec-492e-a2ff-3a5f2226613b.webp
- Component preview — Face Punch: https://d1xarpci4ikg0w.cloudfront.net/057c390c-360a-49ab-bd34-d3639bba7d22.webp

### Sample videos (10)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cab961f6-a173-4432-b56c-aac6e5974ee7 | https://static.higgsfield.ai/cab961f6-a173-4432-b56c-aac6e5974ee7.mp4 | https://static.higgsfield.ai/cab961f6-a173-4432-b56c-aac6e5974ee7.webp | https://d1xarpci4ikg0w.cloudfront.net/47399837-6b35-4323-87f9-ac973b5d7355.webp (320×242) |
| 2 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/12dad4c8-a369-42ec-b3aa-268196f815ca | https://static.higgsfield.ai/12dad4c8-a369-42ec-b3aa-268196f815ca.mp4 | https://static.higgsfield.ai/12dad4c8-a369-42ec-b3aa-268196f815ca.webp | https://d1xarpci4ikg0w.cloudfront.net/c89e2c2a-9a60-4f0d-a101-0979e60b75ea.webp (320×424) |
| 3 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cbd99279-1f90-404e-8711-c162d9d22a49 | https://static.higgsfield.ai/cbd99279-1f90-404e-8711-c162d9d22a49.mp4 | https://static.higgsfield.ai/cbd99279-1f90-404e-8711-c162d9d22a49.webp | https://d1xarpci4ikg0w.cloudfront.net/64aafbba-0294-470d-8b18-bf6f6d9a5cc0.webp (320×424) |
| 4 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/56744f16-fb9a-41fc-8efc-e7392b17136d | https://static.higgsfield.ai/56744f16-fb9a-41fc-8efc-e7392b17136d.mp4 | https://static.higgsfield.ai/56744f16-fb9a-41fc-8efc-e7392b17136d.webp | https://d1xarpci4ikg0w.cloudfront.net/1810ad06-f8d9-4296-a67a-5234955393b7.webp (320×182) |
| 5 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/843ebd6b-638e-4748-95fb-f83c3d450377 | https://static.higgsfield.ai/843ebd6b-638e-4748-95fb-f83c3d450377.mp4 | https://static.higgsfield.ai/843ebd6b-638e-4748-95fb-f83c3d450377.webp | https://d1xarpci4ikg0w.cloudfront.net/12f3ca49-529d-455a-9cbf-dfe47d4d09da.webp (320×320) |
| 6 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/76d54964-90e0-4e81-986e-5ad49d658d8d | https://static.higgsfield.ai/76d54964-90e0-4e81-986e-5ad49d658d8d.mp4 | https://static.higgsfield.ai/76d54964-90e0-4e81-986e-5ad49d658d8d.webp | https://d1xarpci4ikg0w.cloudfront.net/143b4d0a-f286-4279-8887-ebbeec5b0562.webp (320×562) |
| 7 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/bd78d07f-a690-4a16-9ea5-8a0ed4314093 | https://static.higgsfield.ai/bd78d07f-a690-4a16-9ea5-8a0ed4314093.mp4 | https://static.higgsfield.ai/bd78d07f-a690-4a16-9ea5-8a0ed4314093.webp | https://d1xarpci4ikg0w.cloudfront.net/8cbb44eb-539c-46bb-b438-eb4d2ef71589.webp (320×242) |
| 8 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1 | https://static.higgsfield.ai/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1.mp4 | https://static.higgsfield.ai/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1.webp | https://d1xarpci4ikg0w.cloudfront.net/05f5672e-58d7-47c8-b3bf-668a124ba01b.webp (320×424) |
| 9 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/fe8499f7-19e2-461e-a4fb-19db6ed75a4e | https://static.higgsfield.ai/fe8499f7-19e2-461e-a4fb-19db6ed75a4e.mp4 | https://static.higgsfield.ai/fe8499f7-19e2-461e-a4fb-19db6ed75a4e.webp | https://d1xarpci4ikg0w.cloudfront.net/f90ca507-fc5d-4caa-9c73-72ca828f6e09.webp (320×242) |
| 10 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/d8b7f63c-6b8b-4128-83e5-e973a893954c | https://static.higgsfield.ai/d8b7f63c-6b8b-4128-83e5-e973a893954c.mp4 | https://static.higgsfield.ai/d8b7f63c-6b8b-4128-83e5-e973a893954c.webp | https://d1xarpci4ikg0w.cloudfront.net/2b6ebb92-5205-4834-8fa5-f7ece185b9d0.webp (320×320) |

Source pages: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c. Crawled 2026-09.
