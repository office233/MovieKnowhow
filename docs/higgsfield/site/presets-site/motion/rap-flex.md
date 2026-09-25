# Rap Flex — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** music video
- **What it does (site description, verbatim):** Mimics iconic camera moves from rap music videos—smooth slides, low angles, and slow zooms. Perfect for giving your video a bold, confident, star-like vibe.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90 | `809c1acb-6be5-4eb7-afde-dd08910f1e90` | 37 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=809c1acb-6be5-4eb7-afde-dd08910f1e90 |
| https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55 | `dc292dd4-12aa-431a-a576-48adb132dd55` | 81 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=dc292dd4-12aa-431a-a576-48adb132dd55 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A rapper in a fur coat and gold chains poses in front of a lowrider; low-angle slide and slow zoom, confident star energy.
```

Use it as: upload a start image that matches the scene, select motion preset **Rap Flex**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Quick zooms snapping in and out on each hit · **Best use:** Hip-hop / dance · **Models:** Minimax Hailuo 2.3 · **Phrase/template:** "Camera: Rap Flex — quick zooms snapping in and out on each hit." · **Tips:** Pair with the Live Concert preset

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7c2a4854-8797-483f-9424-0cb8a6bb0488.webp (320×320)
- Card preview, variant `dc292dd4`: https://d1xarpci4ikg0w.cloudfront.net/a53acb22-05c3-4e38-894c-befc7864471a.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/c48e57bd-41ba-414f-9311-9c56cdba8b45 | https://static.higgsfield.ai/c48e57bd-41ba-414f-9311-9c56cdba8b45.mp4 | https://static.higgsfield.ai/c48e57bd-41ba-414f-9311-9c56cdba8b45.webp | https://d1xarpci4ikg0w.cloudfront.net/90de3d81-739c-4400-8f7f-28def9afcacf.webp (320×320) |
| 2 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/be843dce-72e9-4717-a219-673a32bb53cb | https://static.higgsfield.ai/be843dce-72e9-4717-a219-673a32bb53cb.mp4 | https://static.higgsfield.ai/be843dce-72e9-4717-a219-673a32bb53cb.webp | https://d1xarpci4ikg0w.cloudfront.net/a01f2ac5-b2ec-44fc-a812-da09db7b3dd0.webp (320×424) |
| 3 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/32ea2ee6-f22a-494d-a696-277c87014ad9 | https://static.higgsfield.ai/32ea2ee6-f22a-494d-a696-277c87014ad9.mp4 | https://static.higgsfield.ai/32ea2ee6-f22a-494d-a696-277c87014ad9.webp | https://d1xarpci4ikg0w.cloudfront.net/c30cfd1d-a46e-4a20-96d4-3c7376efb358.webp (320×424) |
| 4 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1 | https://static.higgsfield.ai/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1.mp4 | https://static.higgsfield.ai/a021c3a1-ccd2-4b79-a9ab-e1e80a98cac1.webp | https://d1xarpci4ikg0w.cloudfront.net/8987e113-5528-42c4-ae97-7a726103881d.webp (320×182) |
| 5 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/7fce68dd-9b0f-4c83-9581-0f046ae8ebab | https://static.higgsfield.ai/7fce68dd-9b0f-4c83-9581-0f046ae8ebab.mp4 | https://static.higgsfield.ai/7fce68dd-9b0f-4c83-9581-0f046ae8ebab.webp | https://d1xarpci4ikg0w.cloudfront.net/3d960573-7c75-4c08-9679-e9300cd0187c.webp (320×182) |
| 6 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/091f8069-7fa9-4773-b919-3e8a48aa9597 | https://static.higgsfield.ai/091f8069-7fa9-4773-b919-3e8a48aa9597.mp4 | https://static.higgsfield.ai/091f8069-7fa9-4773-b919-3e8a48aa9597.webp | https://d1xarpci4ikg0w.cloudfront.net/d54a0719-c0cf-4379-aed2-da8a1bc49cfe.webp (320×182) |
| 7 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/f82117ab-bb4e-4a90-b427-9dfc859de188 | https://static.higgsfield.ai/f82117ab-bb4e-4a90-b427-9dfc859de188.mp4 | https://static.higgsfield.ai/f82117ab-bb4e-4a90-b427-9dfc859de188.webp | https://d1xarpci4ikg0w.cloudfront.net/55e9f608-ede0-47e6-905d-551e474b5637.webp (320×182) |
| 8 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/a3315f66-b0b8-4f6f-813b-b48483a3d582 | https://static.higgsfield.ai/a3315f66-b0b8-4f6f-813b-b48483a3d582.mp4 | https://static.higgsfield.ai/a3315f66-b0b8-4f6f-813b-b48483a3d582.webp | https://d1xarpci4ikg0w.cloudfront.net/d9563b63-1dca-425f-a0a5-393320e560ed.webp (320×182) |
| 9 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb | https://static.higgsfield.ai/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb.mp4 | https://static.higgsfield.ai/33bf2b00-eb27-4c65-ae4e-54f9f7080bdb.webp | https://d1xarpci4ikg0w.cloudfront.net/859817b8-3bd5-47af-92dc-e634ce2067f5.webp (320×182) |
| 10 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/d6065663-49a1-4294-b3ce-928e64eae25e | https://static.higgsfield.ai/d6065663-49a1-4294-b3ce-928e64eae25e.mp4 | https://static.higgsfield.ai/d6065663-49a1-4294-b3ce-928e64eae25e.webp | https://d1xarpci4ikg0w.cloudfront.net/9fb18b10-c5d6-4b57-94bd-1d43003f31c6.webp (320×182) |
| 11 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/1a46c718-a2e0-4f21-9726-b12e35f55723 | https://static.higgsfield.ai/1a46c718-a2e0-4f21-9726-b12e35f55723.mp4 | https://static.higgsfield.ai/1a46c718-a2e0-4f21-9726-b12e35f55723.webp | https://d1xarpci4ikg0w.cloudfront.net/3e578779-9a2d-4e60-b3d4-ea54a1ae053e.webp (320×182) |
| 12 | https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90/7e2342d3-600a-4000-bee7-a36fac8e909c | https://static.higgsfield.ai/7e2342d3-600a-4000-bee7-a36fac8e909c.mp4 | https://static.higgsfield.ai/7e2342d3-600a-4000-bee7-a36fac8e909c.webp | https://d1xarpci4ikg0w.cloudfront.net/087c11e3-ea78-44c9-b0dd-823298fb0d95.webp (320×182) |

Source pages: https://higgsfield.ai/motion/809c1acb-6be5-4eb7-afde-dd08910f1e90, https://higgsfield.ai/motion/dc292dd4-12aa-431a-a576-48adb132dd55. Crawled 2026-09.
