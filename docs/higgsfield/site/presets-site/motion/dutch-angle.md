# Dutch Angle — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Tilts the camera to create a slanted horizon, adding tension, unease, or a stylized look. Perfect for thrillers, dream sequences, or edgy vibes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345 | `28a18555-b8ed-4cac-aad6-40ecaaad9345` | 63 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=28a18555-b8ed-4cac-aad6-40ecaaad9345 |
| https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f | `b593944e-ae3e-47ce-8c6d-ea8dd87fe01f` | -208 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b593944e-ae3e-47ce-8c6d-ea8dd87fe01f |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A nervous man waits in a flickering motel room, tilted horizon, growing unease.
```

Use it as: upload a start image that matches the scene, select motion preset **Dutch Angle**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera tilted diagonally · **Best use:** Psychological tension, instability, dread · **Models:** Wan 2.5, Kling 2.6 · **Phrase/template:** "Dutch Angle as the conspirators whisper" · precise: "Frame tilted 25 degrees counterclockwise…" · **Tips:** Horror: "slow Dolly In… Camera: Dutch Angle as she realizes." Avoid in lifestyle and luxury.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/68eef02a-e835-4cf2-b9c9-7fef8e93d6ac.webp (320×182)
- Card preview, variant `b593944e`: https://d1xarpci4ikg0w.cloudfront.net/7116678b-3446-44f2-ab94-ef1f3c12fa51.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/18b6ae6f-74b7-404b-8014-1350e5e41177 | https://static.higgsfield.ai/18b6ae6f-74b7-404b-8014-1350e5e41177.mp4 | https://static.higgsfield.ai/18b6ae6f-74b7-404b-8014-1350e5e41177.webp | https://d1xarpci4ikg0w.cloudfront.net/1ed87ab0-f156-432f-8bf3-caf181ee17ad.webp (320×404) |
| 2 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/c5db2fbe-a53d-4d16-a881-f24fdf2424c4 | https://static.higgsfield.ai/c5db2fbe-a53d-4d16-a881-f24fdf2424c4.mp4 | https://static.higgsfield.ai/c5db2fbe-a53d-4d16-a881-f24fdf2424c4.webp | https://d1xarpci4ikg0w.cloudfront.net/707ace65-fbc2-4f13-8a74-633982cb3a1b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/982ded99-6175-40c1-8866-524f90cfedc8 | https://static.higgsfield.ai/982ded99-6175-40c1-8866-524f90cfedc8.mp4 | https://static.higgsfield.ai/982ded99-6175-40c1-8866-524f90cfedc8.webp | https://d1xarpci4ikg0w.cloudfront.net/8c9b3abb-cbab-4b47-9e68-6acf61a1847e.webp (320×210) |
| 4 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/0f621c87-62a9-4be2-82a1-4a48896b479c | https://static.higgsfield.ai/0f621c87-62a9-4be2-82a1-4a48896b479c.mp4 | https://static.higgsfield.ai/0f621c87-62a9-4be2-82a1-4a48896b479c.webp | https://d1xarpci4ikg0w.cloudfront.net/568dcdd1-3643-48d7-bb48-f07ac9330f6b.webp (320×182) |
| 5 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/843cbf0d-516a-420c-a24a-8d8ba69ba6a4 | https://static.higgsfield.ai/843cbf0d-516a-420c-a24a-8d8ba69ba6a4.mp4 | https://static.higgsfield.ai/843cbf0d-516a-420c-a24a-8d8ba69ba6a4.webp | https://d1xarpci4ikg0w.cloudfront.net/bd2c612a-fc29-4297-ad78-6ebd33d0de46.webp (320×182) |
| 6 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/f76098eb-b080-40ca-ae1b-3863427cb0b4 | https://static.higgsfield.ai/f76098eb-b080-40ca-ae1b-3863427cb0b4.mp4 | https://static.higgsfield.ai/f76098eb-b080-40ca-ae1b-3863427cb0b4.webp | https://d1xarpci4ikg0w.cloudfront.net/fd4c14be-6483-4274-84f4-1c40afdccd76.webp (320×320) |
| 7 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/bbfb5bb0-fff7-437f-9a61-d3cef8486af5 | https://static.higgsfield.ai/bbfb5bb0-fff7-437f-9a61-d3cef8486af5.mp4 | https://static.higgsfield.ai/bbfb5bb0-fff7-437f-9a61-d3cef8486af5.webp | https://d1xarpci4ikg0w.cloudfront.net/d6de95f1-9c81-4c4f-aa70-d3a42cc4255f.webp (320×210) |
| 8 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/bdbc96d5-b281-4215-937e-4cd550a7a18a | https://static.higgsfield.ai/bdbc96d5-b281-4215-937e-4cd550a7a18a.mp4 | https://static.higgsfield.ai/bdbc96d5-b281-4215-937e-4cd550a7a18a.webp | https://d1xarpci4ikg0w.cloudfront.net/40643f80-3d29-48e6-a36a-3c5d85594521.webp (320×182) |
| 9 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/13681105-3c83-4b70-80ff-0259244cd140 | https://static.higgsfield.ai/13681105-3c83-4b70-80ff-0259244cd140.mp4 | https://static.higgsfield.ai/13681105-3c83-4b70-80ff-0259244cd140.webp | https://d1xarpci4ikg0w.cloudfront.net/9ab63e93-7801-4abd-b112-5fd8de9490ea.webp (320×182) |
| 10 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c | https://static.higgsfield.ai/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c.mp4 | https://static.higgsfield.ai/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c.webp | https://d1xarpci4ikg0w.cloudfront.net/3f0b0a0d-f223-4f41-a016-bcfd0dcb0bb8.webp (320×182) |
| 11 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/dc656da3-745c-4abf-8e59-cf008933159d | https://static.higgsfield.ai/dc656da3-745c-4abf-8e59-cf008933159d.mp4 | https://static.higgsfield.ai/dc656da3-745c-4abf-8e59-cf008933159d.webp | https://d1xarpci4ikg0w.cloudfront.net/8cf786d3-adf0-4d6b-990d-fd674056a9b6.webp (320×160) |
| 12 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/20f1bb72-790d-4980-a15a-0b68a0cc7603 | https://static.higgsfield.ai/20f1bb72-790d-4980-a15a-0b68a0cc7603.mp4 | https://static.higgsfield.ai/20f1bb72-790d-4980-a15a-0b68a0cc7603.webp | https://d1xarpci4ikg0w.cloudfront.net/6c0292bc-bde7-405c-8322-ab2744d2c146.webp (320×126) |

Source pages: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345, https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f. Crawled 2026-09.
