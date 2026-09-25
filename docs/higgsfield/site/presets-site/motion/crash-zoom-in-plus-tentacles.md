# Crash Zoom In + Tentacles — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Snaps into the subject’s face with a fast zoom as eerie tentacles emerge from their eyes. A shocking, surreal mix of horror and intensity.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971 | `52862ad0-ca56-4a11-bb1d-cb0ca74f7971` | -162 | isMix | mix of: Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 0.9), Tentacles (motion id `8fccea16-08b5-432c-8123-8456523e2d60`, strength 0.85) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38%2C8fccea16-08b5-432c-8123-8456523e2d60&presetMotionStrengths=0.9%2C0.85 |
| https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069 | `6b658ac3-48a7-49a7-85cc-97af9ff50069` | 100 | isMix | mix of: Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 0.9), Tentacles (motion id `8fccea16-08b5-432c-8123-8456523e2d60`, strength 0.85) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38%2C8fccea16-08b5-432c-8123-8456523e2d60&presetMotionStrengths=0.9%2C0.85 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman turns toward the camera; fast zoom into her face as tentacles emerge from her eyes.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In + Tentacles**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crash Zoom In](crash-zoom-in.md) (strength 0.9), [Tentacles](tentacles.md) (strength 0.85)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e3dc3811-d8c7-459b-94dc-da5102517b87.webp (320×242)
- Card preview, variant `6b658ac3`: https://d1xarpci4ikg0w.cloudfront.net/b0308903-c377-42d9-9690-4927e2b64592.webp
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp
- Component preview — Tentacles: https://d1xarpci4ikg0w.cloudfront.net/edf4f63f-06ca-46d5-bc1c-4f0bcfd50be7.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/a12fef43-ae3f-495a-b6f0-01622a1b6a02 | https://static.higgsfield.ai/a12fef43-ae3f-495a-b6f0-01622a1b6a02.mp4 | https://static.higgsfield.ai/a12fef43-ae3f-495a-b6f0-01622a1b6a02.webp | https://d1xarpci4ikg0w.cloudfront.net/c05d703b-3e6a-41a7-8d1d-0c27297003bf.webp (320×424) |
| 2 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26 | https://static.higgsfield.ai/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26.mp4 | https://static.higgsfield.ai/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26.webp | https://d1xarpci4ikg0w.cloudfront.net/1d38bce5-2b12-461b-8ad2-96ef7bc40085.webp (320×242) |
| 3 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7085fc3d-f400-4bfa-b0da-01aa159e2834 | https://static.higgsfield.ai/7085fc3d-f400-4bfa-b0da-01aa159e2834.mp4 | https://static.higgsfield.ai/7085fc3d-f400-4bfa-b0da-01aa159e2834.webp | https://d1xarpci4ikg0w.cloudfront.net/e57712c9-18b1-4494-a730-093dc4136492.webp (320×424) |
| 4 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/afc3fe45-7ed3-400e-affb-5110688922a4 | https://static.higgsfield.ai/afc3fe45-7ed3-400e-affb-5110688922a4.mp4 | https://static.higgsfield.ai/afc3fe45-7ed3-400e-affb-5110688922a4.webp | https://d1xarpci4ikg0w.cloudfront.net/a083bd46-6c7c-4da4-aae2-93eceff4e0cc.webp (320×210) |
| 5 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/8c4b9216-115a-4dd7-898a-f4d567c9abed | https://static.higgsfield.ai/8c4b9216-115a-4dd7-898a-f4d567c9abed.mp4 | https://static.higgsfield.ai/8c4b9216-115a-4dd7-898a-f4d567c9abed.webp | https://d1xarpci4ikg0w.cloudfront.net/2036664d-ca50-4249-aaa8-ce651b4b2eca.webp (320×242) |
| 6 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32 | https://static.higgsfield.ai/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32.mp4 | https://static.higgsfield.ai/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32.webp | https://d1xarpci4ikg0w.cloudfront.net/e752af2c-aa37-4648-9ee8-e0e903dff6e4.webp (320×242) |
| 7 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/1eed2a41-f138-407d-abd3-b4faaaaa65d2 | https://static.higgsfield.ai/1eed2a41-f138-407d-abd3-b4faaaaa65d2.mp4 | https://static.higgsfield.ai/1eed2a41-f138-407d-abd3-b4faaaaa65d2.webp | https://d1xarpci4ikg0w.cloudfront.net/97a62073-f516-4f14-86ec-9acea0ee6acc.webp (320×424) |

Source pages: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971, https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069. Crawled 2026-09.
