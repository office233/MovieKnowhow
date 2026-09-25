# Object POV — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Shows the scene from the object’s point of view, making viewers feel like they're seeing through its "eyes." Great for immersive, creative storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa | `76a7036d-2f69-4e0b-82fe-c91f9d7a71aa` | 78 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=76a7036d-2f69-4e0b-82fe-c91f9d7a71aa |
| https://higgsfield.ai/motion/ab14b29d-f23e-449e-a40e-ebdbb4f7437a | `ab14b29d-f23e-449e-a40e-ebdbb4f7437a` | 44 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ab14b29d-f23e-449e-a40e-ebdbb4f7437a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
POV from inside a refrigerator as a sleepy man opens the door and stares in at midnight.
```

Use it as: upload a start image that matches the scene, select motion preset **Object POV**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ef157805-2d28-40df-9321-622ff5681883.webp (320×236)
- Card preview, variant `ab14b29d`: https://d1xarpci4ikg0w.cloudfront.net/a2085d33-c1dc-4eb8-9d67-85dee68a5ef6.webp

### Sample videos (4; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa/bc70648a-de4f-44fe-ab9b-434b2c59ef89 | https://static.higgsfield.ai/bc70648a-de4f-44fe-ab9b-434b2c59ef89.mp4 | https://static.higgsfield.ai/bc70648a-de4f-44fe-ab9b-434b2c59ef89.webp | https://d1xarpci4ikg0w.cloudfront.net/15d0bbaa-006d-41e3-b43a-34acd2aa4395.webp (320×236) |
| 2 | https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa/9106df60-f292-481b-a032-c1c1e6ab678c | https://static.higgsfield.ai/9106df60-f292-481b-a032-c1c1e6ab678c.mp4 | https://static.higgsfield.ai/9106df60-f292-481b-a032-c1c1e6ab678c.webp | https://d1xarpci4ikg0w.cloudfront.net/248c3bb6-b103-43e6-bc81-c6036c689db3.webp (320×180) |
| 3 | https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa/c2f1946a-005c-4bdf-bbb2-087c2faafdea | https://static.higgsfield.ai/c2f1946a-005c-4bdf-bbb2-087c2faafdea.mp4 | https://static.higgsfield.ai/c2f1946a-005c-4bdf-bbb2-087c2faafdea.webp | https://d1xarpci4ikg0w.cloudfront.net/59da664e-0010-4140-b6f6-b2761b060ba8.webp (320×182) |
| 4 | https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa/7a1d53f7-bac1-4955-bb29-e38d80afdce7 | https://static.higgsfield.ai/7a1d53f7-bac1-4955-bb29-e38d80afdce7.mp4 | https://static.higgsfield.ai/7a1d53f7-bac1-4955-bb29-e38d80afdce7.webp | https://d1xarpci4ikg0w.cloudfront.net/1e456126-4b24-410e-8cdc-75ae444b5d0d.webp (320×180) |

Source pages: https://higgsfield.ai/motion/76a7036d-2f69-4e0b-82fe-c91f9d7a71aa, https://higgsfield.ai/motion/ab14b29d-f23e-449e-a40e-ebdbb4f7437a. Crawled 2026-09.
