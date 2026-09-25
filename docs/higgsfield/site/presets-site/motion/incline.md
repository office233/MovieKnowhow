# Incline — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject moves or stands on a steep angle, as if the entire world is tilted. Creates tension, imbalance, or a surreal, gravity-defying visual effect.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302 | `342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302 |
| https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92 | `b120f292-74e3-4878-817b-626e203f8a92` | -245 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b120f292-74e3-4878-817b-626e203f8a92 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man in a suit leans impossibly forward on a tilted city street as if gravity has shifted.
```

Use it as: upload a start image that matches the scene, select motion preset **Incline**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5f1e0105-f48a-404a-a411-35b8d0fd7286.webp (320×180)
- Card preview, variant `b120f292`: https://d1xarpci4ikg0w.cloudfront.net/2d2bd9c2-500d-4b04-b3e0-58ba71ea1cde.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/7f91c398-1795-4048-bd05-7b02be07fa9f | https://static.higgsfield.ai/7f91c398-1795-4048-bd05-7b02be07fa9f.mp4 | https://static.higgsfield.ai/7f91c398-1795-4048-bd05-7b02be07fa9f.webp | https://d1xarpci4ikg0w.cloudfront.net/59ccfc35-2fb6-438c-ab19-43b4c957ed4b.webp (320×486) |
| 2 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/d2f74135-a15b-4dba-a017-f90f921ae0db | https://static.higgsfield.ai/d2f74135-a15b-4dba-a017-f90f921ae0db.mp4 | https://static.higgsfield.ai/d2f74135-a15b-4dba-a017-f90f921ae0db.webp | https://d1xarpci4ikg0w.cloudfront.net/48bca49a-4506-4198-90f4-0f9b02ef441f.webp (320×236) |
| 3 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/425ba331-27c8-4a87-939a-4074cb2aa9a5 | https://static.higgsfield.ai/425ba331-27c8-4a87-939a-4074cb2aa9a5.mp4 | https://static.higgsfield.ai/425ba331-27c8-4a87-939a-4074cb2aa9a5.webp | https://d1xarpci4ikg0w.cloudfront.net/ad8c0d3b-4905-434c-a4e6-4769a81227b2.webp (320×236) |
| 4 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/653792b1-7ec4-4600-815d-8a9aea4d873b | https://static.higgsfield.ai/653792b1-7ec4-4600-815d-8a9aea4d873b.mp4 | https://static.higgsfield.ai/653792b1-7ec4-4600-815d-8a9aea4d873b.webp | https://d1xarpci4ikg0w.cloudfront.net/a23eedcf-5cee-43f0-914e-dc65bc65ebc2.webp (320×180) |
| 5 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/389a7a31-a65d-4d06-b16c-d445b5fcb961 | https://static.higgsfield.ai/389a7a31-a65d-4d06-b16c-d445b5fcb961.mp4 | https://static.higgsfield.ai/389a7a31-a65d-4d06-b16c-d445b5fcb961.webp | https://d1xarpci4ikg0w.cloudfront.net/65146fed-fba0-4b56-b078-95c638a5f9c9.webp (320×236) |
| 6 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/e09be5e8-33ad-41fb-9692-de0c1620d0d2 | https://static.higgsfield.ai/e09be5e8-33ad-41fb-9692-de0c1620d0d2.mp4 | https://static.higgsfield.ai/e09be5e8-33ad-41fb-9692-de0c1620d0d2.webp | https://d1xarpci4ikg0w.cloudfront.net/56237772-4f0d-4dd7-bda1-f289138c47bd.webp (320×180) |
| 7 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/234b69dd-fcfa-4964-99ea-aa6221db2d61 | https://static.higgsfield.ai/234b69dd-fcfa-4964-99ea-aa6221db2d61.mp4 | https://static.higgsfield.ai/234b69dd-fcfa-4964-99ea-aa6221db2d61.webp | https://d1xarpci4ikg0w.cloudfront.net/d090e6a1-326a-4e56-9797-151fcf3502c5.webp (320×236) |
| 8 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/0bcbc317-25e3-4d01-9612-b292d8c2602e | https://static.higgsfield.ai/0bcbc317-25e3-4d01-9612-b292d8c2602e.mp4 | https://static.higgsfield.ai/0bcbc317-25e3-4d01-9612-b292d8c2602e.webp | https://d1xarpci4ikg0w.cloudfront.net/8575caa5-5874-4801-bab5-f564bc2cdf8e.webp (320×236) |
| 9 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/3ae3e219-34ed-4c25-8ecc-c13699dbf04e | https://static.higgsfield.ai/3ae3e219-34ed-4c25-8ecc-c13699dbf04e.mp4 | https://static.higgsfield.ai/3ae3e219-34ed-4c25-8ecc-c13699dbf04e.webp | https://d1xarpci4ikg0w.cloudfront.net/741bfca3-f584-42c7-bfc2-78b396fea901.webp (320×236) |

Source pages: https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302, https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92. Crawled 2026-09.
