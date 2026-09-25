# Timelapse Landscape — Higgsfield Motion preset

- **Category:** Camera · time (lapse)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Captures the rapid movement of natural elements like clouds, sunlight, or crowds over time. Creates a majestic, dreamlike view of changing landscapes and passing moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed | `128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed` | 89 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed |
| https://higgsfield.ai/motion/51ef3ada-73fd-4663-a406-48f3ff6d2def | `51ef3ada-73fd-4663-a406-48f3ff6d2def` | 37 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=51ef3ada-73fd-4663-a406-48f3ff6d2def |
| https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11 | `d45f0a80-62b8-4651-bd62-0373a09b8f11` | -164 | none | none published (empty `settings`); model Minimax Hailuo 2.3 | https://higgsfield.ai/ai/video?model=minimax-2.3&presetMotionId=d45f0a80-62b8-4651-bd62-0373a09b8f11 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Minimax Hailuo 2.3 — family `minimax`, Generate button opens `/ai/video?model=minimax-2.3&presetMotionId=<id>` (the page's samples block reports model `minimax_hailuo`). These pages publish no settings.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Clouds race over a mountain lake as sunlight sweeps across the valley and day turns to dusk.
```

Use it as: upload a start image that matches the scene, select motion preset **Timelapse Landscape**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fixed camera, nature over time · **Best use:** Weather, seasons, sunrise and sunset · **Models:** Veo 3 · **Phrase/template:** "Timelapse Landscape — mountain valley sunrise to dusk" · "Camera: Timelapse Landscape as the storm front advances, sky darkening fast." · **Tips:** C1, C4, C17

## Related presets

- **Mixes that use this preset:** [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md)
- **Same category (Camera · time (lapse)):** [Hyperlapse](hyperlapse.md), [Timelapse Human](timelapse-human.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c939dea5-8dea-4f47-a96e-6dd074b22a42.webp (320×182)
- Card preview, variant `51ef3ada`: https://d1xarpci4ikg0w.cloudfront.net/b8171f9d-698d-4f79-9f79-173ec50306a7.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/cbf1faa3-add1-415c-a3d6-d95385c1dd32 | https://static.higgsfield.ai/cbf1faa3-add1-415c-a3d6-d95385c1dd32.mp4 | https://static.higgsfield.ai/cbf1faa3-add1-415c-a3d6-d95385c1dd32.webp | https://d1xarpci4ikg0w.cloudfront.net/42a5bed2-e7a3-4aec-9dbd-149be9adc245.webp (320×182) |
| 2 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/063c5208-35f4-4253-b90b-452be72ec4ef | https://static.higgsfield.ai/063c5208-35f4-4253-b90b-452be72ec4ef.mp4 | https://static.higgsfield.ai/063c5208-35f4-4253-b90b-452be72ec4ef.webp | https://d1xarpci4ikg0w.cloudfront.net/1557d462-ab69-43cd-8c17-46babf84b04a.webp (320×182) |
| 3 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/0e9e2c38-c34c-4c68-8612-4374dd782adb | https://static.higgsfield.ai/0e9e2c38-c34c-4c68-8612-4374dd782adb.mp4 | https://static.higgsfield.ai/0e9e2c38-c34c-4c68-8612-4374dd782adb.webp | https://d1xarpci4ikg0w.cloudfront.net/e78d3123-12c5-4fea-81fc-10627e344388.webp (320×182) |
| 4 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/e463f693-7a23-47b2-a4db-c0ab32c37e9a | https://static.higgsfield.ai/e463f693-7a23-47b2-a4db-c0ab32c37e9a.mp4 | https://static.higgsfield.ai/e463f693-7a23-47b2-a4db-c0ab32c37e9a.webp | https://d1xarpci4ikg0w.cloudfront.net/85b567e1-c6b6-4a51-bba6-4e9dca51896d.webp (320×210) |
| 5 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/28ffba44-d256-4aac-9308-5eb0d887f459 | https://static.higgsfield.ai/28ffba44-d256-4aac-9308-5eb0d887f459.mp4 | https://static.higgsfield.ai/28ffba44-d256-4aac-9308-5eb0d887f459.webp | https://d1xarpci4ikg0w.cloudfront.net/61316aff-44ba-4f2f-afe1-a4226f5df643.webp (320×242) |
| 6 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/2da65c7b-24c4-4211-b026-1e17b916e3a3 | https://static.higgsfield.ai/2da65c7b-24c4-4211-b026-1e17b916e3a3.mp4 | https://static.higgsfield.ai/2da65c7b-24c4-4211-b026-1e17b916e3a3.webp | https://d1xarpci4ikg0w.cloudfront.net/78b639f3-533e-429f-98ee-66ea134d0b14.webp (320×210) |
| 7 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/cb3cd472-aa64-4700-892a-17cab400ca66 | https://static.higgsfield.ai/cb3cd472-aa64-4700-892a-17cab400ca66.mp4 | https://static.higgsfield.ai/cb3cd472-aa64-4700-892a-17cab400ca66.webp | https://d1xarpci4ikg0w.cloudfront.net/7bd2a1b4-768e-44b2-a60f-1a51acf00786.webp (320×242) |
| 8 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/5743c5e0-978c-4a03-9160-0640779f6714 | https://static.higgsfield.ai/5743c5e0-978c-4a03-9160-0640779f6714.mp4 | https://static.higgsfield.ai/5743c5e0-978c-4a03-9160-0640779f6714.webp | https://d1xarpci4ikg0w.cloudfront.net/82e62624-a50e-4af7-9aa3-23a6e2bc9118.webp (320×210) |
| 9 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/60926e8b-5baa-43d9-b0ae-3fbbf84dbe63 | https://static.higgsfield.ai/60926e8b-5baa-43d9-b0ae-3fbbf84dbe63.mp4 | https://static.higgsfield.ai/60926e8b-5baa-43d9-b0ae-3fbbf84dbe63.webp | https://d1xarpci4ikg0w.cloudfront.net/633a3ead-22b8-4064-81b4-5861fc18eefe.webp (320×176) |
| 10 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/7e2a2b96-10f4-400a-aa37-15c1fcf8652f | https://static.higgsfield.ai/7e2a2b96-10f4-400a-aa37-15c1fcf8652f.mp4 | https://static.higgsfield.ai/7e2a2b96-10f4-400a-aa37-15c1fcf8652f.webp | https://d1xarpci4ikg0w.cloudfront.net/85a35288-74e4-48d3-993a-e3decb308c9c.webp (320×168) |
| 11 | https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed/4f9cae45-38f5-4fbd-8032-18b7c7c41873 | https://static.higgsfield.ai/4f9cae45-38f5-4fbd-8032-18b7c7c41873.mp4 | https://static.higgsfield.ai/4f9cae45-38f5-4fbd-8032-18b7c7c41873.webp | https://d1xarpci4ikg0w.cloudfront.net/0212fc91-a0d4-4432-947a-5f57833fd659.webp (320×176) |

- Card preview, round-2 variant `d45f0a80` (Minimax Hailuo 2.3): https://cdn.higgsfield.ai/minimax_hailuo_motion/d8232abc-8da9-4084-ab2f-e5ced13cb136.mp4 · thumbnail https://cdn.higgsfield.ai/minimax_hailuo_motion/13127d34-5cea-4b17-ba3b-4738a6dc3eeb.webp (600×800)

### Sample videos, round-2 variant `d45f0a80` (Minimax Hailuo 2.3) (7)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/693bb843-601a-4cd8-8f40-57f412c850b1 | https://cdn.higgsfield.ai/minimax_hailuo_sample/693bb843-601a-4cd8-8f40-57f412c850b1.mp4 | 1438×1080 |
| 2 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/543af39d-8ada-4ca9-897e-079149a178d3 | https://cdn.higgsfield.ai/minimax_hailuo_sample/543af39d-8ada-4ca9-897e-079149a178d3.mp4 | 1080×1438 |
| 3 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/18fdb910-8f44-4c5f-93a0-ad3a5d0c933e | https://cdn.higgsfield.ai/minimax_hailuo_sample/18fdb910-8f44-4c5f-93a0-ad3a5d0c933e.mp4 | 1080×1438 |
| 4 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/7ec3ede0-2448-48b2-8943-799142322166 | https://cdn.higgsfield.ai/minimax_hailuo_sample/7ec3ede0-2448-48b2-8943-799142322166.mp4 | 1438×1080 |
| 5 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/964a584f-c9c6-455f-af41-1626a6ef4f29 | https://cdn.higgsfield.ai/minimax_hailuo_sample/964a584f-c9c6-455f-af41-1626a6ef4f29.mp4 | 1438×1080 |
| 6 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/acb4b223-4dd6-4c0b-b0c6-867b5b7c8b61 | https://cdn.higgsfield.ai/minimax_hailuo_sample/acb4b223-4dd6-4c0b-b0c6-867b5b7c8b61.mp4 | 1620×1080 |
| 7 | https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11/5016af5f-61c3-472b-a602-ff754ec6b16e | https://cdn.higgsfield.ai/minimax_hailuo_sample/5016af5f-61c3-472b-a602-ff754ec6b16e.mp4 | 1080×1918 |

Source pages: https://higgsfield.ai/motion/128ab1d9-f6d3-4a06-8a5c-ba47f16e37ed, https://higgsfield.ai/motion/51ef3ada-73fd-4663-a406-48f3ff6d2def, https://higgsfield.ai/motion/d45f0a80-62b8-4651-bd62-0373a09b8f11. Crawled 2026-09.
