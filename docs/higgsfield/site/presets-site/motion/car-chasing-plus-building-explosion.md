# Car Chasing + Building Explosion — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A high-speed car pursuit unfolds as a massive explosion erupts from a nearby building—flames and debris fill the scene. Pure cinematic chaos, packed with action and adrenaline.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b | `54791805-4c3d-4878-ad38-eebded133f0b` | -228 | isMix | mix of: Car Chasing (motion id `a76f2e99-0a41-4fdf-934d-9c95b0ee85bf`, strength 0.8), Building Explosion (motion id `0d53b135-337d-4918-aaf4-2af7ecf4f045`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a76f2e99-0a41-4fdf-934d-9c95b0ee85bf%2C0d53b135-337d-4918-aaf4-2af7ecf4f045&presetMotionStrengths=0.8%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A police chase tears through downtown as a building erupts in flames beside the cars.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Chasing + Building Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Car Chasing](car-chasing.md) (strength 0.8), [Building Explosion](building-explosion.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bf72cdb0-faa2-4de1-b3c8-b2730127e6cf.webp (320×182)
- Component preview — Car Chasing: https://d1xarpci4ikg0w.cloudfront.net/00052de6-aed3-4beb-99a2-0ba966a6a1ce.webp
- Component preview — Building Explosion: https://d1xarpci4ikg0w.cloudfront.net/c31ec0d6-70c3-4955-b76a-78dff8798ca3.webp

### Sample videos (16)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/1131f62d-42a4-401e-979b-0ce30c669878 | https://static.higgsfield.ai/1131f62d-42a4-401e-979b-0ce30c669878.mp4 | https://static.higgsfield.ai/1131f62d-42a4-401e-979b-0ce30c669878.webp | https://d1xarpci4ikg0w.cloudfront.net/15c30454-427c-4708-a037-3b96426243d7.webp (320×182) |
| 2 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/61332a9f-46a4-4b50-94fb-20b78e5fbce8 | https://static.higgsfield.ai/61332a9f-46a4-4b50-94fb-20b78e5fbce8.mp4 | https://static.higgsfield.ai/61332a9f-46a4-4b50-94fb-20b78e5fbce8.webp | https://d1xarpci4ikg0w.cloudfront.net/ba22e4da-bb6e-4ea2-aff6-1ad8aecf2002.webp (320×182) |
| 3 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/47529eef-6f78-4c2f-a380-92aa7b83d83f | https://static.higgsfield.ai/47529eef-6f78-4c2f-a380-92aa7b83d83f.mp4 | https://static.higgsfield.ai/47529eef-6f78-4c2f-a380-92aa7b83d83f.webp | https://d1xarpci4ikg0w.cloudfront.net/fa59c3bd-22d0-422c-bfc1-95c1fca9e5f2.webp (320×182) |
| 4 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/916fda25-bbaf-4776-92c4-d627d2ec5d24 | https://static.higgsfield.ai/916fda25-bbaf-4776-92c4-d627d2ec5d24.mp4 | https://static.higgsfield.ai/916fda25-bbaf-4776-92c4-d627d2ec5d24.webp | https://d1xarpci4ikg0w.cloudfront.net/9b1afad4-289b-4e5a-a63f-6f1a7dd5893d.webp (320×182) |
| 5 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/b234461c-54e8-454b-b38e-880ad0aea5b5 | https://static.higgsfield.ai/b234461c-54e8-454b-b38e-880ad0aea5b5.mp4 | https://static.higgsfield.ai/b234461c-54e8-454b-b38e-880ad0aea5b5.webp | https://d1xarpci4ikg0w.cloudfront.net/1a4a7d5b-5601-4721-8276-424a7ea4a6ee.webp (320×320) |
| 6 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb | https://static.higgsfield.ai/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb.mp4 | https://static.higgsfield.ai/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb.webp | https://d1xarpci4ikg0w.cloudfront.net/fb85879a-cad0-4d87-8f2f-2d921f4ca5e0.webp (320×182) |
| 7 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/2ef71398-0972-4311-bffb-30ecdef49f32 | https://static.higgsfield.ai/2ef71398-0972-4311-bffb-30ecdef49f32.mp4 | https://static.higgsfield.ai/2ef71398-0972-4311-bffb-30ecdef49f32.webp | https://d1xarpci4ikg0w.cloudfront.net/fbadd2f5-6a35-4666-bf08-a789e4257231.webp (320×210) |
| 8 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/04279db7-10e9-4c31-8be1-43472aee7dbb | https://static.higgsfield.ai/04279db7-10e9-4c31-8be1-43472aee7dbb.mp4 | https://static.higgsfield.ai/04279db7-10e9-4c31-8be1-43472aee7dbb.webp | https://d1xarpci4ikg0w.cloudfront.net/6f58b4dc-6901-4580-ab46-4b5727504e05.webp (320×182) |
| 9 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d915e9a2-97b9-4ed9-a7ba-511adaad17e6 | https://static.higgsfield.ai/d915e9a2-97b9-4ed9-a7ba-511adaad17e6.mp4 | https://static.higgsfield.ai/d915e9a2-97b9-4ed9-a7ba-511adaad17e6.webp | https://d1xarpci4ikg0w.cloudfront.net/7e686b56-d441-4896-999b-cb0df97be994.webp (320×424) |
| 10 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/15577732-a9de-4ac9-9468-84606d69869d | https://static.higgsfield.ai/15577732-a9de-4ac9-9468-84606d69869d.mp4 | https://static.higgsfield.ai/15577732-a9de-4ac9-9468-84606d69869d.webp | https://d1xarpci4ikg0w.cloudfront.net/aca4e235-ef95-44df-bd59-596a515e1250.webp (320×210) |
| 11 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/507ca197-80bd-4dd2-8a3f-1550fe444c5c | https://static.higgsfield.ai/507ca197-80bd-4dd2-8a3f-1550fe444c5c.mp4 | https://static.higgsfield.ai/507ca197-80bd-4dd2-8a3f-1550fe444c5c.webp | https://d1xarpci4ikg0w.cloudfront.net/76b112b2-6a0c-4e79-8b88-d94fff5c15d8.webp (320×182) |
| 12 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0 | https://static.higgsfield.ai/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0.mp4 | https://static.higgsfield.ai/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0.webp | https://d1xarpci4ikg0w.cloudfront.net/355c8711-0b96-4388-8c47-401ec9491592.webp (320×182) |
| 13 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0 | https://static.higgsfield.ai/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0.mp4 | https://static.higgsfield.ai/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0.webp | https://d1xarpci4ikg0w.cloudfront.net/26ef8aef-71a0-4c87-9186-d1f7273e5a2d.webp (320×182) |
| 14 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/01a6db2f-7840-4bae-9d2c-1781b074e4ac | https://static.higgsfield.ai/01a6db2f-7840-4bae-9d2c-1781b074e4ac.mp4 | https://static.higgsfield.ai/01a6db2f-7840-4bae-9d2c-1781b074e4ac.webp | https://d1xarpci4ikg0w.cloudfront.net/1d9101ba-ae44-4e4e-aeca-5ccab5fd08ee.webp (320×424) |
| 15 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d0fa70dd-d05b-4d3f-b336-00375466ab09 | https://static.higgsfield.ai/d0fa70dd-d05b-4d3f-b336-00375466ab09.mp4 | https://static.higgsfield.ai/d0fa70dd-d05b-4d3f-b336-00375466ab09.webp | https://d1xarpci4ikg0w.cloudfront.net/db2cc245-dad5-4cad-a2a2-3ec4490b5aa5.webp (320×562) |
| 16 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c69a29e-9390-47e9-82ce-59ae68a502b9 | https://static.higgsfield.ai/6c69a29e-9390-47e9-82ce-59ae68a502b9.mp4 | https://static.higgsfield.ai/6c69a29e-9390-47e9-82ce-59ae68a502b9.webp | https://d1xarpci4ikg0w.cloudfront.net/22aadb03-4b07-4898-a7af-467ff3e905ba.webp (320×320) |

Source pages: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b. Crawled 2026-09.
