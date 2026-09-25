# Car Chasing — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Follows fast-moving cars with dynamic camera angles to create thrilling, high-speed chase scenes. Ideal for action-packed sequences and cinematic intensity.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae | `2f2a541b-6ce5-4115-92fb-4d6473d8e3ae` | 62 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2f2a541b-6ce5-4115-92fb-4d6473d8e3ae |
| https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf | `a76f2e99-0a41-4fdf-934d-9c95b0ee85bf` | -230 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a76f2e99-0a41-4fdf-934d-9c95b0ee85bf |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Two sports cars race through downtown streets at night, weaving through traffic, sparks flying on the corners.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Chasing**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Low, ground-level follow of speeding vehicles · **Best use:** High-speed pursuits · **Models:** "Car Chasing — camera hugs the side of the black car through the streets" · **Phrase/template:** C1

## Related presets

- **Mixes that use this preset:** [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/642dce9f-5f66-4db5-8bc4-68323e4ef605.webp (320×486)
- Card preview, variant `a76f2e99`: https://d1xarpci4ikg0w.cloudfront.net/00052de6-aed3-4beb-99a2-0ba966a6a1ce.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158 | https://static.higgsfield.ai/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158.mp4 | https://static.higgsfield.ai/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158.webp | https://d1xarpci4ikg0w.cloudfront.net/15433452-b843-4546-bf08-d4ba5205b6e5.webp (320×486) |
| 2 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/5fdba71e-81a8-483c-807a-02e7c672e103 | https://static.higgsfield.ai/5fdba71e-81a8-483c-807a-02e7c672e103.mp4 | https://static.higgsfield.ai/5fdba71e-81a8-483c-807a-02e7c672e103.webp | https://d1xarpci4ikg0w.cloudfront.net/3ce47e37-d3ed-4f3a-9f3a-73d5a426fcb5.webp (320×182) |
| 3 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a7a375dd-8040-4b65-8575-ecec9fca6120 | https://static.higgsfield.ai/a7a375dd-8040-4b65-8575-ecec9fca6120.mp4 | https://static.higgsfield.ai/a7a375dd-8040-4b65-8575-ecec9fca6120.webp | https://d1xarpci4ikg0w.cloudfront.net/4eb2c8ad-cebf-4c7c-a306-81eb4a946a76.webp (320×182) |
| 4 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/2c907ba5-9426-4e36-9007-3226f859f391 | https://static.higgsfield.ai/2c907ba5-9426-4e36-9007-3226f859f391.mp4 | https://static.higgsfield.ai/2c907ba5-9426-4e36-9007-3226f859f391.webp | https://d1xarpci4ikg0w.cloudfront.net/2088234e-f742-4e2d-b3ad-ec3294ddd166.webp (320×182) |
| 5 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/0338f787-0b28-4d03-9a4f-c5504a2939c7 | https://static.higgsfield.ai/0338f787-0b28-4d03-9a4f-c5504a2939c7.mp4 | https://static.higgsfield.ai/0338f787-0b28-4d03-9a4f-c5504a2939c7.webp | https://d1xarpci4ikg0w.cloudfront.net/4ce11cd1-5964-449b-b251-8993960f3083.webp (320×182) |
| 6 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0 | https://static.higgsfield.ai/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0.mp4 | https://static.higgsfield.ai/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0.webp | https://d1xarpci4ikg0w.cloudfront.net/96355753-f4fd-4346-a1a4-d46fc2704b53.webp (320×182) |
| 7 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/01cb21b2-c935-4ead-be0b-b5d6b0714dbb | https://static.higgsfield.ai/01cb21b2-c935-4ead-be0b-b5d6b0714dbb.mp4 | https://static.higgsfield.ai/01cb21b2-c935-4ead-be0b-b5d6b0714dbb.webp | https://d1xarpci4ikg0w.cloudfront.net/b9422548-2407-4467-a74e-f7ee1c0bda93.webp (320×320) |
| 8 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/0b93fedd-e622-4f24-acbe-4f402fa2bd31 | https://static.higgsfield.ai/0b93fedd-e622-4f24-acbe-4f402fa2bd31.mp4 | https://static.higgsfield.ai/0b93fedd-e622-4f24-acbe-4f402fa2bd31.webp | https://d1xarpci4ikg0w.cloudfront.net/22ae73ef-3f9f-4f99-8c9b-fcc4b9ccb13c.webp (320×182) |
| 9 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/4fe8aecd-ba72-49db-bc8c-de24334f5ca5 | https://static.higgsfield.ai/4fe8aecd-ba72-49db-bc8c-de24334f5ca5.mp4 | https://static.higgsfield.ai/4fe8aecd-ba72-49db-bc8c-de24334f5ca5.webp | https://d1xarpci4ikg0w.cloudfront.net/40060f88-5b0b-4d79-994d-9856a2ecf372.webp (320×182) |
| 10 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/948a9398-ec6f-41ba-841c-2e7349d08c96 | https://static.higgsfield.ai/948a9398-ec6f-41ba-841c-2e7349d08c96.mp4 | https://static.higgsfield.ai/948a9398-ec6f-41ba-841c-2e7349d08c96.webp | https://d1xarpci4ikg0w.cloudfront.net/1c362187-99c9-4b8f-9908-9662fe8d566b.webp (320×182) |
| 11 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ac3d647f-6530-4343-b6f4-8492fb8bf9d9 | https://static.higgsfield.ai/ac3d647f-6530-4343-b6f4-8492fb8bf9d9.mp4 | https://static.higgsfield.ai/ac3d647f-6530-4343-b6f4-8492fb8bf9d9.webp | https://d1xarpci4ikg0w.cloudfront.net/a4e607b5-e7f3-456b-b507-6aecba24f6fd.webp (320×562) |
| 12 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/34883e35-9921-4503-a4fe-680cf0dfc1c2 | https://static.higgsfield.ai/34883e35-9921-4503-a4fe-680cf0dfc1c2.mp4 | https://static.higgsfield.ai/34883e35-9921-4503-a4fe-680cf0dfc1c2.webp | https://d1xarpci4ikg0w.cloudfront.net/416d96d7-a747-41b4-a0f4-2e350622bf69.webp (320×182) |
| 13 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/3f02ca5e-6296-49a2-87ec-e46d148c25e6 | https://static.higgsfield.ai/3f02ca5e-6296-49a2-87ec-e46d148c25e6.mp4 | https://static.higgsfield.ai/3f02ca5e-6296-49a2-87ec-e46d148c25e6.webp | https://d1xarpci4ikg0w.cloudfront.net/d8199c4f-61dd-4ed2-a72c-6e68231c5e02.webp (320×562) |
| 14 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b | https://static.higgsfield.ai/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b.mp4 | https://static.higgsfield.ai/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b.webp | https://d1xarpci4ikg0w.cloudfront.net/d99c9c06-69a8-478c-9d39-9821973753bc.webp (320×182) |

Source pages: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae, https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf. Crawled 2026-09.
