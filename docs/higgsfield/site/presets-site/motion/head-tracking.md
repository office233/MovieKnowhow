# Head Tracking — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** music video
- **What it does (site description, verbatim):** Keeps the camera locked to the subject’s head movement, making the background shift while the face stays centered. Ideal for immersive, POV-like effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe | `5a6b5390-6605-4786-86e6-c6703ce44bbe` | 77 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5a6b5390-6605-4786-86e6-c6703ce44bbe |
| https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6 | `fe520e06-7971-4f28-9e10-e45911c57bb6` | 39 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fe520e06-7971-4f28-9e10-e45911c57bb6 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl on a skateboard turns her head side to side; her face stays centered while the city spins behind her.
```

Use it as: upload a start image that matches the scene, select motion preset **Head Tracking**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera locked to the character's head movement · **Best use:** First-person intensity, disorientation · **Models:** — · **Phrase/template:** "Head Tracking as the boxer staggers after the punch" · **Tips:** —

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/53692311-6ed5-4047-bca6-340a0af6f7e3.webp (320×182)
- Card preview, variant `fe520e06`: https://d1xarpci4ikg0w.cloudfront.net/7e5f89e6-2abf-4f4f-a29c-c2eb10e09661.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/83ba8b7e-de47-422d-9eef-5d1f4e95afc8 | https://static.higgsfield.ai/83ba8b7e-de47-422d-9eef-5d1f4e95afc8.mp4 | https://static.higgsfield.ai/83ba8b7e-de47-422d-9eef-5d1f4e95afc8.webp | https://d1xarpci4ikg0w.cloudfront.net/1dad2f04-d1b1-4721-97c6-d143e619ee49.webp (320×320) |
| 2 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/8ad69eb9-e556-4421-9d2b-ef60f115e79c | https://static.higgsfield.ai/8ad69eb9-e556-4421-9d2b-ef60f115e79c.mp4 | https://static.higgsfield.ai/8ad69eb9-e556-4421-9d2b-ef60f115e79c.webp | https://d1xarpci4ikg0w.cloudfront.net/f33a006d-efa5-4f6d-a46a-b483acf8d0ec.webp (320×182) |
| 3 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/49a3aa89-6765-4709-aaa2-f8bea67d723c | https://static.higgsfield.ai/49a3aa89-6765-4709-aaa2-f8bea67d723c.mp4 | https://static.higgsfield.ai/49a3aa89-6765-4709-aaa2-f8bea67d723c.webp | https://d1xarpci4ikg0w.cloudfront.net/e764dd80-27c3-44c4-a259-3ef065e3a0a0.webp (320×180) |
| 4 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/22037267-0c93-4da3-a4eb-6fd1d1353b6d | https://static.higgsfield.ai/22037267-0c93-4da3-a4eb-6fd1d1353b6d.mp4 | https://static.higgsfield.ai/22037267-0c93-4da3-a4eb-6fd1d1353b6d.webp | https://d1xarpci4ikg0w.cloudfront.net/15e8a432-878c-4c80-acc7-615fb3777dfc.webp (320×182) |
| 5 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/48155e4b-f9b1-409e-8c3e-610c49fc63c6 | https://static.higgsfield.ai/48155e4b-f9b1-409e-8c3e-610c49fc63c6.mp4 | https://static.higgsfield.ai/48155e4b-f9b1-409e-8c3e-610c49fc63c6.webp | https://d1xarpci4ikg0w.cloudfront.net/b3ba8ef0-7ee6-42ef-9c1d-26a1ea30e02d.webp (320×182) |
| 6 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/cbd36dde-5172-4587-8c72-9f208592ed33 | https://static.higgsfield.ai/cbd36dde-5172-4587-8c72-9f208592ed33.mp4 | https://static.higgsfield.ai/cbd36dde-5172-4587-8c72-9f208592ed33.webp | https://d1xarpci4ikg0w.cloudfront.net/bd312da3-ecae-4097-923c-abae640e6062.webp (320×424) |
| 7 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/b25387f0-c577-464b-8f98-e5c034402bfe | https://static.higgsfield.ai/b25387f0-c577-464b-8f98-e5c034402bfe.mp4 | https://static.higgsfield.ai/b25387f0-c577-464b-8f98-e5c034402bfe.webp | https://d1xarpci4ikg0w.cloudfront.net/7b944f2e-dac1-4984-8f8b-a5107d6bb1dd.webp (320×182) |
| 8 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/4f563412-5303-4750-a36c-f07772083b88 | https://static.higgsfield.ai/4f563412-5303-4750-a36c-f07772083b88.mp4 | https://static.higgsfield.ai/4f563412-5303-4750-a36c-f07772083b88.webp | https://d1xarpci4ikg0w.cloudfront.net/f7598fe2-cf53-443b-a92c-0c210b3a7a06.webp (320×182) |
| 9 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/09661f2e-9172-4abc-9e0d-82b0e60caa70 | https://static.higgsfield.ai/09661f2e-9172-4abc-9e0d-82b0e60caa70.mp4 | https://static.higgsfield.ai/09661f2e-9172-4abc-9e0d-82b0e60caa70.webp | https://d1xarpci4ikg0w.cloudfront.net/e1253ac9-2497-4529-b3e9-bffa9d8dafc6.webp (320×182) |

Source pages: https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe, https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6. Crawled 2026-09.
