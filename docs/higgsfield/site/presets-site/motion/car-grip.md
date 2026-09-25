# Car Grip — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Attaches the camera to a car, capturing dynamic driving shots with smooth motion. Perfect for action scenes or showing movement from the vehicle’s perspective.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16 | `b7334ffd-a260-42a5-8911-714bcc541b16` | 58 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b7334ffd-a260-42a5-8911-714bcc541b16 |
| https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0 | `d4c62a9d-df77-4222-af4e-5645b81844e0` | -181 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d4c62a9d-df77-4222-af4e-5645b81844e0 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Camera mounted on the side of a black muscle car racing through a rain-soaked neon tunnel.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Grip**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera mounted on the vehicle, riding with it · **Best use:** Immersive vehicle sequences · **Models:** "Car Grip — fixed to the hood, shaking on every bump" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fc624f2c-cb31-4f41-9eba-dd3609b9f4ca.webp (320×136)
- Card preview, variant `d4c62a9d`: https://d1xarpci4ikg0w.cloudfront.net/ac536efc-f3e6-48c4-af25-5cbce6ec0d9f.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/3bb33e88-b357-43b4-8451-2070b635e729 | https://static.higgsfield.ai/3bb33e88-b357-43b4-8451-2070b635e729.mp4 | https://static.higgsfield.ai/3bb33e88-b357-43b4-8451-2070b635e729.webp | https://d1xarpci4ikg0w.cloudfront.net/e26d15ab-e9e7-4e3a-b6ea-d371f90afe36.webp (320×132) |
| 2 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/d690c957-0124-4da1-9565-b2ff3e26bb96 | https://static.higgsfield.ai/d690c957-0124-4da1-9565-b2ff3e26bb96.mp4 | https://static.higgsfield.ai/d690c957-0124-4da1-9565-b2ff3e26bb96.webp | https://d1xarpci4ikg0w.cloudfront.net/a8052fa4-9772-457c-bdb1-01dff2667571.webp (320×242) |
| 3 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/36919198-e418-4c03-b559-1c7b3c0de514 | https://static.higgsfield.ai/36919198-e418-4c03-b559-1c7b3c0de514.mp4 | https://static.higgsfield.ai/36919198-e418-4c03-b559-1c7b3c0de514.webp | https://d1xarpci4ikg0w.cloudfront.net/b4e40fd0-9d34-4c0c-b9d0-a1da89d73603.webp (320×182) |
| 4 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a467b59f-1581-4762-b9da-2e85e50e6742 | https://static.higgsfield.ai/a467b59f-1581-4762-b9da-2e85e50e6742.mp4 | https://static.higgsfield.ai/a467b59f-1581-4762-b9da-2e85e50e6742.webp | https://d1xarpci4ikg0w.cloudfront.net/d84e0a77-7a88-4950-aee5-4e31216d477e.webp (320×320) |
| 5 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/de83f422-d009-43ab-a39e-efefd3a4c7b8 | https://static.higgsfield.ai/de83f422-d009-43ab-a39e-efefd3a4c7b8.mp4 | https://static.higgsfield.ai/de83f422-d009-43ab-a39e-efefd3a4c7b8.webp | https://d1xarpci4ikg0w.cloudfront.net/2ba67a7a-37cd-4c75-8b7f-412e59abd6c6.webp (320×132) |
| 6 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/3a87df55-b7a6-4e92-9953-f511a8b29fec | https://static.higgsfield.ai/3a87df55-b7a6-4e92-9953-f511a8b29fec.mp4 | https://static.higgsfield.ai/3a87df55-b7a6-4e92-9953-f511a8b29fec.webp | https://d1xarpci4ikg0w.cloudfront.net/59c980f6-a9bd-49da-85d2-1411f1a3d65a.webp (320×320) |
| 7 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/24d5487e-affb-40e2-b59b-ff180f59ccf4 | https://static.higgsfield.ai/24d5487e-affb-40e2-b59b-ff180f59ccf4.mp4 | https://static.higgsfield.ai/24d5487e-affb-40e2-b59b-ff180f59ccf4.webp | https://d1xarpci4ikg0w.cloudfront.net/4c00f903-81f9-49c4-8fc9-458000098761.webp (320×210) |
| 8 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/af8f4960-1825-46af-9efe-554aebea223e | https://static.higgsfield.ai/af8f4960-1825-46af-9efe-554aebea223e.mp4 | https://static.higgsfield.ai/af8f4960-1825-46af-9efe-554aebea223e.webp | https://d1xarpci4ikg0w.cloudfront.net/c2393b7d-8aa7-43c9-8a5d-d93a26a47c9e.webp (320×242) |
| 9 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/c979344c-7511-49ed-abc4-fdf7c3989ed5 | https://static.higgsfield.ai/c979344c-7511-49ed-abc4-fdf7c3989ed5.mp4 | https://static.higgsfield.ai/c979344c-7511-49ed-abc4-fdf7c3989ed5.webp | https://d1xarpci4ikg0w.cloudfront.net/715fb199-6df7-4a43-8e70-5abc0ac71ef5.webp (320×424) |
| 10 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/28465d2b-122e-4666-8fe6-f730bc43d0a2 | https://static.higgsfield.ai/28465d2b-122e-4666-8fe6-f730bc43d0a2.mp4 | https://static.higgsfield.ai/28465d2b-122e-4666-8fe6-f730bc43d0a2.webp | https://d1xarpci4ikg0w.cloudfront.net/49af2024-5764-4d71-b241-53baf61f18dd.webp (320×486) |
| 11 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5 | https://static.higgsfield.ai/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5.mp4 | https://static.higgsfield.ai/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5.webp | https://d1xarpci4ikg0w.cloudfront.net/8ae3d6ed-312f-4e2d-8fc9-02993a90c839.webp (320×182) |
| 12 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/c3ba19b8-b113-4fc2-8290-08c40beebf5e | https://static.higgsfield.ai/c3ba19b8-b113-4fc2-8290-08c40beebf5e.mp4 | https://static.higgsfield.ai/c3ba19b8-b113-4fc2-8290-08c40beebf5e.webp | https://d1xarpci4ikg0w.cloudfront.net/d3ca8eea-ea08-40e3-a210-a7805203a216.webp (320×242) |
| 13 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/d0678d84-a410-43a7-9be6-f78d1b7fd675 | https://static.higgsfield.ai/d0678d84-a410-43a7-9be6-f78d1b7fd675.mp4 | https://static.higgsfield.ai/d0678d84-a410-43a7-9be6-f78d1b7fd675.webp | https://d1xarpci4ikg0w.cloudfront.net/b451ade7-e0ec-42cf-b038-9721a979bab6.webp (320×562) |
| 14 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a291cb02-85f0-4ddf-b694-8dc37610a600 | https://static.higgsfield.ai/a291cb02-85f0-4ddf-b694-8dc37610a600.mp4 | https://static.higgsfield.ai/a291cb02-85f0-4ddf-b694-8dc37610a600.webp | https://d1xarpci4ikg0w.cloudfront.net/80f9131f-0b6c-45b7-a3df-1b113aea5460.webp (320×424) |

Source pages: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16, https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0. Crawled 2026-09.
