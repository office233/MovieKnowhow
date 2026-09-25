# Flying — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Simulates a smooth, gliding flight through the scene, like soaring with a drone. Perfect for epic reveals, dynamic transitions, or creating a sense of freedom and flow.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c | `3b83bad3-64bd-4baa-bf73-be886f19a10c` | 75 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=3b83bad3-64bd-4baa-bf73-be886f19a10c |
| https://higgsfield.ai/motion/d5ec4a6e-d982-4245-92eb-971c74505c9a | `d5ec4a6e-d982-4245-92eb-971c74505c9a` | 43 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d5ec4a6e-d982-4245-92eb-971c74505c9a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Gliding flight over misty pine forests at dawn toward a hidden mountain monastery.
```

Use it as: upload a start image that matches the scene, select motion preset **Flying**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Free-floating aerial glide · **Best use:** — · **Models:** — · **Phrase/template:** (vocab entry) · **Tips:** —

## Related presets

- **Mixes that use this preset:** [Flying + Set on Fire](flying-plus-set-on-fire.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3729d861-cf91-40d4-bfa9-ee31949ba53d.webp (320×182)
- Card preview, variant `d5ec4a6e`: https://d1xarpci4ikg0w.cloudfront.net/27f3e7a8-0300-43ea-82fa-834b482ec3e9.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/2d2f33ec-e943-4af9-ba45-5d93f0c256a7 | https://static.higgsfield.ai/2d2f33ec-e943-4af9-ba45-5d93f0c256a7.mp4 | https://static.higgsfield.ai/2d2f33ec-e943-4af9-ba45-5d93f0c256a7.webp | https://d1xarpci4ikg0w.cloudfront.net/c39fcada-ee05-42fa-b4d7-5e4482929ff9.webp (320×182) |
| 2 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/c9dc0369-bff4-41dc-8aec-1e6569965ed0 | https://static.higgsfield.ai/c9dc0369-bff4-41dc-8aec-1e6569965ed0.mp4 | https://static.higgsfield.ai/c9dc0369-bff4-41dc-8aec-1e6569965ed0.webp | https://d1xarpci4ikg0w.cloudfront.net/352430de-c9a7-4b2b-ab10-075875540911.webp (320×562) |
| 3 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/c8aafb69-f77d-40b4-b458-3cf35c69d0dc | https://static.higgsfield.ai/c8aafb69-f77d-40b4-b458-3cf35c69d0dc.mp4 | https://static.higgsfield.ai/c8aafb69-f77d-40b4-b458-3cf35c69d0dc.webp | https://d1xarpci4ikg0w.cloudfront.net/b14d59b2-8f0d-4eff-af53-ae8eee5cc1ce.webp (320×182) |
| 4 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/41a60a0d-c65b-449b-9177-3fef34086cc3 | https://static.higgsfield.ai/41a60a0d-c65b-449b-9177-3fef34086cc3.mp4 | https://static.higgsfield.ai/41a60a0d-c65b-449b-9177-3fef34086cc3.webp | https://d1xarpci4ikg0w.cloudfront.net/c5d791c6-c91e-4d54-919f-ab652faa8a42.webp (320×182) |
| 5 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/aee5064e-fc66-403f-9577-64cf38d993c3 | https://static.higgsfield.ai/aee5064e-fc66-403f-9577-64cf38d993c3.mp4 | https://static.higgsfield.ai/aee5064e-fc66-403f-9577-64cf38d993c3.webp | https://d1xarpci4ikg0w.cloudfront.net/28e0032c-18f8-42fc-bc25-c96795030dc0.webp (320×182) |
| 6 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/d15cdde5-022a-4360-9f65-86da7a8cf591 | https://static.higgsfield.ai/d15cdde5-022a-4360-9f65-86da7a8cf591.mp4 | https://static.higgsfield.ai/d15cdde5-022a-4360-9f65-86da7a8cf591.webp | https://d1xarpci4ikg0w.cloudfront.net/1610bf08-d08a-4c8b-bdbd-f3aadd512126.webp (320×182) |
| 7 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/1ee7f632-056b-488f-ac6d-b5292b802b8d | https://static.higgsfield.ai/1ee7f632-056b-488f-ac6d-b5292b802b8d.mp4 | https://static.higgsfield.ai/1ee7f632-056b-488f-ac6d-b5292b802b8d.webp | https://d1xarpci4ikg0w.cloudfront.net/6d7d7ea7-7431-4627-87c0-fba608d75c02.webp (320×182) |
| 8 | https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c/da4890a9-fbe7-4f3d-9bb0-1df852fff802 | https://static.higgsfield.ai/da4890a9-fbe7-4f3d-9bb0-1df852fff802.mp4 | https://static.higgsfield.ai/da4890a9-fbe7-4f3d-9bb0-1df852fff802.webp | https://d1xarpci4ikg0w.cloudfront.net/dac7d2c5-24d9-410b-b6af-8319943d112f.webp (320×182) |

Source pages: https://higgsfield.ai/motion/3b83bad3-64bd-4baa-bf73-be886f19a10c, https://higgsfield.ai/motion/d5ec4a6e-d982-4245-92eb-971c74505c9a. Crawled 2026-09.
