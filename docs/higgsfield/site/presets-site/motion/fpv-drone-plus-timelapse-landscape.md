# FPV Drone + Timelapse Landscape — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A fast, fluid drone flight over a landscape with time sped up—clouds race, light shifts, and the world transforms beneath the lens. Dreamy and dynamic.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c | `4f016058-bdcf-450b-9ec1-273fb98c927c` | 50 | isMix | mix of: FPV Drone (motion id `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7`, strength 0.9), Timelapse Landscape (motion id `51ef3ada-73fd-4663-a406-48f3ff6d2def`, strength 0.9) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7%2C51ef3ada-73fd-4663-a406-48f3ff6d2def&presetMotionStrengths=0.9%2C0.9 |
| https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8 | `7018b2c3-a855-4836-959c-44b6ca0097c8` | 120 | isMix | mix of: FPV Drone (motion id `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7`, strength 0.9), Timelapse Landscape (motion id `51ef3ada-73fd-4663-a406-48f3ff6d2def`, strength 0.9) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7%2C51ef3ada-73fd-4663-a406-48f3ff6d2def&presetMotionStrengths=0.9%2C0.9 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
FPV drone flight over Icelandic mountains while clouds race and light shifts from dawn to dusk.
```

Use it as: upload a start image that matches the scene, select motion preset **FPV Drone + Timelapse Landscape**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [FPV Drone](fpv-drone.md) (strength 0.9), [Timelapse Landscape](timelapse-landscape.md) (strength 0.9)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d2719b44-ecc9-41ee-a03c-640f04265e3e.webp (320×210)
- Card preview, variant `7018b2c3`: https://d1xarpci4ikg0w.cloudfront.net/0038730c-37c8-4c92-9ff0-b36035e84b38.webp
- Component preview — FPV Drone: https://d1xarpci4ikg0w.cloudfront.net/36c8a32a-df85-4788-9590-ccf7c3488e54.webp
- Component preview — Timelapse Landscape: https://d1xarpci4ikg0w.cloudfront.net/b8171f9d-698d-4f79-9f79-173ec50306a7.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/1723acd3-2fdc-4beb-a35d-1fbb641936af | https://static.higgsfield.ai/1723acd3-2fdc-4beb-a35d-1fbb641936af.mp4 | https://static.higgsfield.ai/1723acd3-2fdc-4beb-a35d-1fbb641936af.webp | https://d1xarpci4ikg0w.cloudfront.net/bc1060b1-a6ae-4a7d-adbd-e7cf71a9ce3a.webp (320×424) |
| 2 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/f344555d-3c4c-452b-8b7e-5e3c17906201 | https://static.higgsfield.ai/f344555d-3c4c-452b-8b7e-5e3c17906201.mp4 | https://static.higgsfield.ai/f344555d-3c4c-452b-8b7e-5e3c17906201.webp | https://d1xarpci4ikg0w.cloudfront.net/356a2ca0-bd0a-4b38-8076-845a98b933f0.webp (320×242) |
| 3 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/4b7c92d4-2b19-4ebf-a759-3520b48c62cc | https://static.higgsfield.ai/4b7c92d4-2b19-4ebf-a759-3520b48c62cc.mp4 | https://static.higgsfield.ai/4b7c92d4-2b19-4ebf-a759-3520b48c62cc.webp | https://d1xarpci4ikg0w.cloudfront.net/f4f146ce-675a-4f16-931c-fbc9634733c4.webp (320×242) |
| 4 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/e2280d66-357f-4972-899f-3c7c475684be | https://static.higgsfield.ai/e2280d66-357f-4972-899f-3c7c475684be.mp4 | https://static.higgsfield.ai/e2280d66-357f-4972-899f-3c7c475684be.webp | https://d1xarpci4ikg0w.cloudfront.net/310704aa-ebbf-488e-bea9-0fdb716b3ac2.webp (320×210) |
| 5 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/8837da5b-7611-41e7-b1f0-f2ed2905f2ed | https://static.higgsfield.ai/8837da5b-7611-41e7-b1f0-f2ed2905f2ed.mp4 | https://static.higgsfield.ai/8837da5b-7611-41e7-b1f0-f2ed2905f2ed.webp | https://d1xarpci4ikg0w.cloudfront.net/af499d3f-9c5e-49dd-9a2e-7a82205f2b76.webp (320×210) |
| 6 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/f7b39ce6-2160-491d-a6eb-96dcdc149f65 | https://static.higgsfield.ai/f7b39ce6-2160-491d-a6eb-96dcdc149f65.mp4 | https://static.higgsfield.ai/f7b39ce6-2160-491d-a6eb-96dcdc149f65.webp | https://d1xarpci4ikg0w.cloudfront.net/7ff3c943-4591-4da5-8e87-c42d1a15aee3.webp (320×182) |
| 7 | https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c/af1f8912-f9ba-419a-8142-f0d1b3754985 | https://static.higgsfield.ai/af1f8912-f9ba-419a-8142-f0d1b3754985.mp4 | https://static.higgsfield.ai/af1f8912-f9ba-419a-8142-f0d1b3754985.webp | https://d1xarpci4ikg0w.cloudfront.net/e2e50fdb-48df-4409-a914-273e4f174ab6.webp (320×424) |

Source pages: https://higgsfield.ai/motion/4f016058-bdcf-450b-9ec1-273fb98c927c, https://higgsfield.ai/motion/7018b2c3-a855-4836-959c-44b6ca0097c8. Crawled 2026-09.
