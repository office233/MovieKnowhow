# Action Run + Set on Fire — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject sprints at full speed while engulfed in flames—each stride leaving a fiery trail. A dramatic, high-stakes visual perfect for intense escape or hero moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5 | `cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5` | -203 | isMix | mix of: Action Run (motion id `89ee6db9-a56e-48e6-bdd4-806c528b3ba5`, strength 0.85), Set on Fire (motion id `06b50d3a-65a9-432b-bf0b-493fc3dcc006`, strength 0.5) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=89ee6db9-a56e-48e6-bdd4-806c528b3ba5%2C06b50d3a-65a9-432b-bf0b-493fc3dcc006&presetMotionStrengths=0.85%2C0.5 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A stuntman sprints down an alley fully engulfed in flames, leaving a fiery trail.
```

Use it as: upload a start image that matches the scene, select motion preset **Action Run + Set on Fire**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Action Run](action-run.md) (strength 0.85), [Set on Fire](set-on-fire.md) (strength 0.5)
- **Same category (Mix (2 stacked motions)):** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/9fffa163-43db-4417-b36c-9d379cbf0a29.webp (320×210)
- Component preview — Action Run: https://d1xarpci4ikg0w.cloudfront.net/727e0399-f326-424b-a38e-fc6a28f38644.webp
- Component preview — Set on Fire: https://d1xarpci4ikg0w.cloudfront.net/a17709a2-ab6e-4900-9a9c-a47b3f847f27.webp

### Sample videos (8)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/490fffe3-6e41-46eb-8286-a0f9a7306d6d | https://static.higgsfield.ai/490fffe3-6e41-46eb-8286-a0f9a7306d6d.mp4 | https://static.higgsfield.ai/490fffe3-6e41-46eb-8286-a0f9a7306d6d.webp | https://d1xarpci4ikg0w.cloudfront.net/782bb0d8-3029-4800-a383-d05f695723ec.webp (320×242) |
| 2 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e273005c-4f8a-4289-9918-305f4a4b366f | https://static.higgsfield.ai/e273005c-4f8a-4289-9918-305f4a4b366f.mp4 | https://static.higgsfield.ai/e273005c-4f8a-4289-9918-305f4a4b366f.webp | https://d1xarpci4ikg0w.cloudfront.net/b623620c-2f9f-430d-8b25-65d2a904f723.webp (320×242) |
| 3 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/d7002947-a953-409d-9b9a-a17adece35b1 | https://static.higgsfield.ai/d7002947-a953-409d-9b9a-a17adece35b1.mp4 | https://static.higgsfield.ai/d7002947-a953-409d-9b9a-a17adece35b1.webp | https://d1xarpci4ikg0w.cloudfront.net/67b095a9-cf51-42cc-a5ce-056ece571294.webp (320×424) |
| 4 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/0712ae74-3737-446f-9151-6f6608a67e74 | https://static.higgsfield.ai/0712ae74-3737-446f-9151-6f6608a67e74.mp4 | https://static.higgsfield.ai/0712ae74-3737-446f-9151-6f6608a67e74.webp | https://d1xarpci4ikg0w.cloudfront.net/1a37ae4c-c224-480a-9e5f-4397afc95c1b.webp (320×424) |
| 5 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec | https://static.higgsfield.ai/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec.mp4 | https://static.higgsfield.ai/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec.webp | https://d1xarpci4ikg0w.cloudfront.net/c9c56196-5b56-42cf-968a-dbd5c3fc5f5e.webp (320×424) |
| 6 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e4410ade-ef15-494c-b9d1-a27caf6de3e7 | https://static.higgsfield.ai/e4410ade-ef15-494c-b9d1-a27caf6de3e7.mp4 | https://static.higgsfield.ai/e4410ade-ef15-494c-b9d1-a27caf6de3e7.webp | https://d1xarpci4ikg0w.cloudfront.net/586fb63c-879f-4488-b656-0cac5820f33e.webp (320×424) |
| 7 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/28199823-dd87-4c58-8356-957141a19cc7 | https://static.higgsfield.ai/28199823-dd87-4c58-8356-957141a19cc7.mp4 | https://static.higgsfield.ai/28199823-dd87-4c58-8356-957141a19cc7.webp | https://d1xarpci4ikg0w.cloudfront.net/2f0d93d3-3838-4ab1-a6e3-61e106a7146d.webp (320×210) |
| 8 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/c8edaba1-30b6-457b-bddd-6946973d25a4 | https://static.higgsfield.ai/c8edaba1-30b6-457b-bddd-6946973d25a4.mp4 | https://static.higgsfield.ai/c8edaba1-30b6-457b-bddd-6946973d25a4.webp | https://d1xarpci4ikg0w.cloudfront.net/d43a5e5b-fb3f-42eb-96da-6b07809764b1.webp (320×242) |

Source pages: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5. Crawled 2026-09.
