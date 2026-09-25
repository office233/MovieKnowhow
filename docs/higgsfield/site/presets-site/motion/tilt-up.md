# Tilt up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera upward to reveal something or make the subject feel powerful, grand, or important
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec | `359bd4f6-252a-405e-bb5c-3807b3b9d9ec` | 102 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=359bd4f6-252a-405e-bb5c-3807b3b9d9ec |
| https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6 | `9f127dad-0db0-4e3d-a440-3cfbffca30b6` | -212 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9f127dad-0db0-4e3d-a440-3cfbffca30b6 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Starting on muddy combat boots, the camera tilts up a towering warrior in scarred armor to his defiant face.
```

Use it as: upload a start image that matches the scene, select motion preset **Tilt up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/f4e1bce6-54fc-410c-af8d-5c5f5a00ad03.webp (320×210)
- Card preview, variant `9f127dad`: https://d1xarpci4ikg0w.cloudfront.net/4fe77b79-2edc-4879-a0f9-bd3eb0f6e0d8.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/9c1e7bde-eaba-43d1-9180-d82cca447e1d | https://static.higgsfield.ai/9c1e7bde-eaba-43d1-9180-d82cca447e1d.mp4 | https://static.higgsfield.ai/9c1e7bde-eaba-43d1-9180-d82cca447e1d.webp | https://d1xarpci4ikg0w.cloudfront.net/feb0e9f9-6113-4b17-9d37-8bd2ed5dd8c6.webp (320×210) |
| 2 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed | https://static.higgsfield.ai/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed.mp4 | https://static.higgsfield.ai/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed.webp | https://d1xarpci4ikg0w.cloudfront.net/ecc81585-8b2c-461b-9e4d-b28c25ac8a83.webp (320×210) |
| 3 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/c33ec08f-8309-444a-b08d-a670e084bb4c | https://static.higgsfield.ai/c33ec08f-8309-444a-b08d-a670e084bb4c.mp4 | https://static.higgsfield.ai/c33ec08f-8309-444a-b08d-a670e084bb4c.webp | https://d1xarpci4ikg0w.cloudfront.net/245b3e80-688b-4858-b8e9-dfe5508c9693.webp (320×210) |
| 4 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/aefc1a36-8222-4f8c-97bd-01dfdea6cd39 | https://static.higgsfield.ai/aefc1a36-8222-4f8c-97bd-01dfdea6cd39.mp4 | https://static.higgsfield.ai/aefc1a36-8222-4f8c-97bd-01dfdea6cd39.webp | https://d1xarpci4ikg0w.cloudfront.net/387f18a0-80c3-4d63-a66f-32beb88816a2.webp (320×210) |
| 5 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/1f33838a-a42b-4669-b58e-a674f8ab6969 | https://static.higgsfield.ai/1f33838a-a42b-4669-b58e-a674f8ab6969.mp4 | https://static.higgsfield.ai/1f33838a-a42b-4669-b58e-a674f8ab6969.webp | https://d1xarpci4ikg0w.cloudfront.net/6110aecf-42b4-43d5-a283-21300223f5b7.webp (320×424) |
| 6 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/c43087ec-2afe-43db-8ffc-a3539e7252ee | https://static.higgsfield.ai/c43087ec-2afe-43db-8ffc-a3539e7252ee.mp4 | https://static.higgsfield.ai/c43087ec-2afe-43db-8ffc-a3539e7252ee.webp | https://d1xarpci4ikg0w.cloudfront.net/ebc26fe1-f1b9-40bb-b09e-ff0ac2a649e2.webp (320×182) |
| 7 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/93354d38-018d-4130-8154-54fee842e6ad | https://static.higgsfield.ai/93354d38-018d-4130-8154-54fee842e6ad.mp4 | https://static.higgsfield.ai/93354d38-018d-4130-8154-54fee842e6ad.webp | https://d1xarpci4ikg0w.cloudfront.net/3ffd2996-be73-40a4-8687-9656267c2e65.webp (320×182) |
| 8 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/49ca988f-f0a1-43a9-8fc7-c69d0f26455f | https://static.higgsfield.ai/49ca988f-f0a1-43a9-8fc7-c69d0f26455f.mp4 | https://static.higgsfield.ai/49ca988f-f0a1-43a9-8fc7-c69d0f26455f.webp | https://d1xarpci4ikg0w.cloudfront.net/0a1fe726-b036-44d0-9d09-6c704f693297.webp (320×182) |
| 9 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/5774a72e-fac7-4c6a-8af1-a9279eea6409 | https://static.higgsfield.ai/5774a72e-fac7-4c6a-8af1-a9279eea6409.mp4 | https://static.higgsfield.ai/5774a72e-fac7-4c6a-8af1-a9279eea6409.webp | https://d1xarpci4ikg0w.cloudfront.net/6f4e6b11-86a5-4064-9d78-539b1eb21a41.webp (320×210) |
| 10 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/3195417e-00cc-4a2a-a9fe-16c7752c129f | https://static.higgsfield.ai/3195417e-00cc-4a2a-a9fe-16c7752c129f.mp4 | https://static.higgsfield.ai/3195417e-00cc-4a2a-a9fe-16c7752c129f.webp | https://d1xarpci4ikg0w.cloudfront.net/0126a72b-bb21-4789-955d-dba21e65087e.webp (320×210) |

Source pages: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec, https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6. Crawled 2026-09.
