# Turning Metal + Eyes In — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A metallic layer gradually spreads over the character’s body. The camera slowly pushes in, focusing on the transformation. It ends locked on the character’s eyes as they turn to reflective chrome.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9 | `7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9` | -253 | isMix | mix of: Turning Metal (motion id `46e23a6b-1047-40f1-9cf5-33f5f55ddf2e`, strength 0.89), Eyes In (motion id `0ab33462-481e-4c78-8ffc-086bebd84187`, strength 0.88) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=46e23a6b-1047-40f1-9cf5-33f5f55ddf2e%2C0ab33462-481e-4c78-8ffc-086bebd84187&presetMotionStrengths=0.89%2C0.88 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A metallic layer spreads over a woman's body as the camera pushes in to her eyes turning to reflective chrome.
```

Use it as: upload a start image that matches the scene, select motion preset **Turning Metal + Eyes In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Turning Metal](turning-metal.md) (strength 0.89), [Eyes In](eyes-in.md) (strength 0.88)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/f9e635da-db62-4b4a-83b9-76c134090a9d.webp (320×568)
- Component preview — Turning Metal: https://d1xarpci4ikg0w.cloudfront.net/ec4542b5-e939-4f46-8a35-2308020d567b.webp
- Component preview — Eyes In: https://d1xarpci4ikg0w.cloudfront.net/87172d19-e58b-4d25-8a98-209f0f82e3fb.webp

### Sample videos (4)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9/8f1e1b35-4a76-418f-93ae-0b7cf6c4afb6 | https://static.higgsfield.ai/8f1e1b35-4a76-418f-93ae-0b7cf6c4afb6.mp4 | https://static.higgsfield.ai/8f1e1b35-4a76-418f-93ae-0b7cf6c4afb6.webp | https://d1xarpci4ikg0w.cloudfront.net/35aa58a7-3cff-44d6-90c9-f5768af78711.webp (320×182) |
| 2 | https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9/788b578b-026d-4415-910a-73e233708b49 | https://static.higgsfield.ai/788b578b-026d-4415-910a-73e233708b49.mp4 | https://static.higgsfield.ai/788b578b-026d-4415-910a-73e233708b49.webp | https://d1xarpci4ikg0w.cloudfront.net/366532ba-c1da-4ae9-9ec0-d2f9fef8fdfa.webp (320×320) |
| 3 | https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9/898e877d-3aa9-4e92-b9b3-c3d63e4a9a05 | https://static.higgsfield.ai/898e877d-3aa9-4e92-b9b3-c3d63e4a9a05.mp4 | https://static.higgsfield.ai/898e877d-3aa9-4e92-b9b3-c3d63e4a9a05.webp | https://d1xarpci4ikg0w.cloudfront.net/98910651-6bfb-4dfd-b3bd-69876e784aa3.webp (320×562) |
| 4 | https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9/e6c77451-b009-4793-a3a1-708d9efe76ce | https://static.higgsfield.ai/e6c77451-b009-4793-a3a1-708d9efe76ce.mp4 | https://static.higgsfield.ai/e6c77451-b009-4793-a3a1-708d9efe76ce.webp | https://d1xarpci4ikg0w.cloudfront.net/82146a21-f8e0-4f58-b95f-325055bcfadb.webp (320×562) |

Source pages: https://higgsfield.ai/motion/7e7d313e-1fb1-44a4-bd89-ec66e1f17ec9. Crawled 2026-09.
