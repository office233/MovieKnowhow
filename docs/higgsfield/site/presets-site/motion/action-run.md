# Action Run — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Follows the subject in fast-paced motion, often with shaky cam and dynamic angles. Perfect for chase scenes, high-energy moments, or intense action shots.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5 | `89ee6db9-a56e-48e6-bdd4-806c528b3ba5` | -187 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=89ee6db9-a56e-48e6-bdd4-806c528b3ba5 |
| https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725 | `c9feeb46-e10b-4199-a369-100bfd543725` | 52 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c9feeb46-e10b-4199-a369-100bfd543725 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A spy sprints across rooftops at night, shaky follow-cam chasing her as she leaps between buildings.
```

Use it as: upload a start image that matches the scene, select motion preset **Action Run**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Low follow shot behind a running subject · **Best use:** Chase, escape, pursuit · **Models:** Minimax Hailuo 2.3, Kling 2.6 · **Phrase/template:** "Action Run — camera low behind him, matching his sprint" · **Tips:** + Handheld = escape sequence

## Related presets

- **Mixes that use this preset:** [Action Run + Set on Fire](action-run-plus-set-on-fire.md)
- **Same category (Camera · rig, POV & handheld):** [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/727e0399-f326-424b-a38e-fc6a28f38644.webp (320×182)
- Card preview, variant `c9feeb46`: https://d1xarpci4ikg0w.cloudfront.net/95d7998b-538e-4802-bcb7-b4f27438504a.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/39c51109-93e4-4a3d-89b2-b140e342b9cf | https://static.higgsfield.ai/39c51109-93e4-4a3d-89b2-b140e342b9cf.mp4 | https://static.higgsfield.ai/39c51109-93e4-4a3d-89b2-b140e342b9cf.webp | https://d1xarpci4ikg0w.cloudfront.net/b0f5af9e-33da-4064-bc21-f4c7d2fe2f98.webp (320×112) |
| 2 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f | https://static.higgsfield.ai/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f.mp4 | https://static.higgsfield.ai/d3f72dd0-5613-47f7-96df-0d9f8b2ed66f.webp | https://d1xarpci4ikg0w.cloudfront.net/8949f763-99e7-4d55-aaee-dc2c8573dd86.webp (320×180) |
| 3 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/40b039e5-27b6-49e6-a974-e83fe06bc2b5 | https://static.higgsfield.ai/40b039e5-27b6-49e6-a974-e83fe06bc2b5.mp4 | https://static.higgsfield.ai/40b039e5-27b6-49e6-a974-e83fe06bc2b5.webp | https://d1xarpci4ikg0w.cloudfront.net/dc060457-b107-4034-895d-a0a5fc0e855d.webp (320×180) |
| 4 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/44de5b32-ced1-498d-8b7e-611b1af5aeed | https://static.higgsfield.ai/44de5b32-ced1-498d-8b7e-611b1af5aeed.mp4 | https://static.higgsfield.ai/44de5b32-ced1-498d-8b7e-611b1af5aeed.webp | https://d1xarpci4ikg0w.cloudfront.net/6490bfb7-58f2-4ee3-9687-69a7f9ac3c03.webp (320×180) |
| 5 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/f69e4a73-fc92-4717-a98b-9057e098e9c0 | https://static.higgsfield.ai/f69e4a73-fc92-4717-a98b-9057e098e9c0.mp4 | https://static.higgsfield.ai/f69e4a73-fc92-4717-a98b-9057e098e9c0.webp | https://d1xarpci4ikg0w.cloudfront.net/42a04e58-689c-4cf8-bb12-0fa4f73216a0.webp (320×568) |
| 6 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/ece85902-9751-4b8f-a352-c149842bf3ed | https://static.higgsfield.ai/ece85902-9751-4b8f-a352-c149842bf3ed.mp4 | https://static.higgsfield.ai/ece85902-9751-4b8f-a352-c149842bf3ed.webp | https://d1xarpci4ikg0w.cloudfront.net/6b67d25b-381f-4b56-8d04-33ad31f73d8b.webp (320×562) |
| 7 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/9fb59e0d-6f30-440c-8d60-482569c20ead | https://static.higgsfield.ai/9fb59e0d-6f30-440c-8d60-482569c20ead.mp4 | https://static.higgsfield.ai/9fb59e0d-6f30-440c-8d60-482569c20ead.webp | https://d1xarpci4ikg0w.cloudfront.net/dfc698ca-4245-4e95-b6af-fbbc13b19010.webp (320×562) |
| 8 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe | https://static.higgsfield.ai/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe.mp4 | https://static.higgsfield.ai/8e5fcfb8-e15f-481a-8809-8acaf3bf22fe.webp | https://d1xarpci4ikg0w.cloudfront.net/45d9cf67-7044-49f8-86ad-dacfa0755993.webp (320×182) |
| 9 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/d94bd631-8467-4f6f-ac98-b8f41445cae1 | https://static.higgsfield.ai/d94bd631-8467-4f6f-ac98-b8f41445cae1.mp4 | https://static.higgsfield.ai/d94bd631-8467-4f6f-ac98-b8f41445cae1.webp | https://d1xarpci4ikg0w.cloudfront.net/93ce1a15-b3d0-4a97-85d1-2a3c019ce226.webp (320×182) |
| 10 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/db080845-65c3-4541-a273-72dd91d6c6db | https://static.higgsfield.ai/db080845-65c3-4541-a273-72dd91d6c6db.mp4 | https://static.higgsfield.ai/db080845-65c3-4541-a273-72dd91d6c6db.webp | https://d1xarpci4ikg0w.cloudfront.net/80ce2e90-fe79-4add-ae65-5319ed0bb9ec.webp (320×182) |
| 11 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/ccc6a8b4-3c7a-4331-ac60-075cb0704b96 | https://static.higgsfield.ai/ccc6a8b4-3c7a-4331-ac60-075cb0704b96.mp4 | https://static.higgsfield.ai/ccc6a8b4-3c7a-4331-ac60-075cb0704b96.webp | https://d1xarpci4ikg0w.cloudfront.net/3d2d2d11-b1f5-4c91-bf23-efa6a508f9e5.webp (320×182) |
| 12 | https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5/731789a0-57f4-4f02-8949-ff7a14ddc49d | https://static.higgsfield.ai/731789a0-57f4-4f02-8949-ff7a14ddc49d.mp4 | https://static.higgsfield.ai/731789a0-57f4-4f02-8949-ff7a14ddc49d.webp | https://d1xarpci4ikg0w.cloudfront.net/e810eee2-504f-49d9-8dd2-cb4aa69fe4ef.webp (320×320) |

Source pages: https://higgsfield.ai/motion/89ee6db9-a56e-48e6-bdd4-806c528b3ba5, https://higgsfield.ai/motion/c9feeb46-e10b-4199-a369-100bfd543725. Crawled 2026-09.
