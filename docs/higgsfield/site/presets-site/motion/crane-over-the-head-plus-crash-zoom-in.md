# Crane Over The Head + Crash Zoom In — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Starts with a smooth overhead rise, then suddenly zooms into the subject for dramatic impact. Combines epic buildup with an intense punch-in moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45 | `107cd0d5-62d4-476b-bf60-7461313bfa45` | 35 | isMix | mix of: Crane Over The Head (motion id `f77584f2-7442-4128-91b5-095829b108c7`, strength 0.8), Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7%2Ca2dddb76-03fa-429e-9905-577bffdf9d38&presetMotionStrengths=0.8%2C1 |
| https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b | `cc664502-7fdc-412e-8fd7-6af310c8891b` | 80 | isMix | mix of: Crane Over The Head (motion id `f77584f2-7442-4128-91b5-095829b108c7`, strength 0.8), Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7%2Ca2dddb76-03fa-429e-9905-577bffdf9d38&presetMotionStrengths=0.8%2C1 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A gladiator stands in an arena; the camera rises over his head, then crash-zooms into his face as the crowd roars.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Over The Head + Crash Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crane Over The Head](crane-over-the-head.md) (strength 0.8), [Crash Zoom In](crash-zoom-in.md) (strength 1.0)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/530c117f-bf01-4f8e-a9f5-f3829cb1ebaf.webp (320×242)
- Card preview, variant `cc664502`: https://d1xarpci4ikg0w.cloudfront.net/cbf91def-e759-48b1-ac38-f2a2fdf3f1aa.webp
- Component preview — Crane Over The Head: https://d1xarpci4ikg0w.cloudfront.net/3889c0ef-0a7c-492e-ae99-bdbfb4405856.webp
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/0ba15334-5502-49d9-aac2-9dfb87d3f1ab | https://static.higgsfield.ai/0ba15334-5502-49d9-aac2-9dfb87d3f1ab.mp4 | https://static.higgsfield.ai/0ba15334-5502-49d9-aac2-9dfb87d3f1ab.webp | https://d1xarpci4ikg0w.cloudfront.net/a1013146-0f3b-4b1c-892e-11a7f1ea205f.webp (320×242) |
| 2 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/be221a99-80ce-4c06-8ce3-b6b4bd7cae39 | https://static.higgsfield.ai/be221a99-80ce-4c06-8ce3-b6b4bd7cae39.mp4 | https://static.higgsfield.ai/be221a99-80ce-4c06-8ce3-b6b4bd7cae39.webp | https://d1xarpci4ikg0w.cloudfront.net/0cbd4f4c-a191-46d3-86b0-13e0f35f7127.webp (320×320) |
| 3 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed | https://static.higgsfield.ai/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed.mp4 | https://static.higgsfield.ai/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed.webp | https://d1xarpci4ikg0w.cloudfront.net/b7c540f0-6c99-4e3a-9e96-84ae151e0441.webp (320×210) |
| 4 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/8821485c-e264-40c4-9110-bc2ea7a6d2f1 | https://static.higgsfield.ai/8821485c-e264-40c4-9110-bc2ea7a6d2f1.mp4 | https://static.higgsfield.ai/8821485c-e264-40c4-9110-bc2ea7a6d2f1.webp | https://d1xarpci4ikg0w.cloudfront.net/c45e68ac-ff44-4155-a931-7d9b9756acb2.webp (320×424) |
| 5 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/74cc28fc-1053-4a24-aca3-adf2a5503229 | https://static.higgsfield.ai/74cc28fc-1053-4a24-aca3-adf2a5503229.mp4 | https://static.higgsfield.ai/74cc28fc-1053-4a24-aca3-adf2a5503229.webp | https://d1xarpci4ikg0w.cloudfront.net/a512d01c-2509-4227-9a04-6e64227a361a.webp (320×210) |
| 6 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/711c4a40-45c9-4043-8f58-cd76ec3eef83 | https://static.higgsfield.ai/711c4a40-45c9-4043-8f58-cd76ec3eef83.mp4 | https://static.higgsfield.ai/711c4a40-45c9-4043-8f58-cd76ec3eef83.webp | https://d1xarpci4ikg0w.cloudfront.net/a434b6e8-b665-4182-88c0-55e2a4d76dc9.webp (320×320) |
| 7 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b | https://static.higgsfield.ai/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b.mp4 | https://static.higgsfield.ai/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b.webp | https://d1xarpci4ikg0w.cloudfront.net/0e80eb52-bf59-4d6d-82b9-9e4cb9890f4d.webp (320×242) |

Source pages: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45, https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b. Crawled 2026-09.
