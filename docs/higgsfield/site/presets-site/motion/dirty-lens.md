# Dirty Lens — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Simulates a camera lens with smudges, dust, or water drops for a raw, gritty look. Great for adding realism, mood, or a behind-the-scenes feel.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9 | `635e322f-f711-4a4b-98b8-c1b62d7befe9` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=635e322f-f711-4a4b-98b8-c1b62d7befe9 |
| https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382 | `86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382` | 41 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A mechanic works under a car in a dusty garage, smudged, rain-spotted lens for a gritty documentary feel.
```

Use it as: upload a start image that matches the scene, select motion preset **Dirty Lens**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/8c8ea0da-59b3-46bf-b48f-dd58b5cb8fa3.webp (320×242)
- Card preview, variant `86b3d8dd`: https://d1xarpci4ikg0w.cloudfront.net/51c02f54-a235-4f7d-9327-31eccb680094.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/a0c63af5-a7ba-43a5-afd2-7813a58683b9 | https://static.higgsfield.ai/a0c63af5-a7ba-43a5-afd2-7813a58683b9.mp4 | https://static.higgsfield.ai/a0c63af5-a7ba-43a5-afd2-7813a58683b9.webp | https://d1xarpci4ikg0w.cloudfront.net/fb42aad5-fbbe-44b6-ad4e-44f010eefdae.webp (320×176) |
| 2 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/1478584d-ac28-4507-81b6-330dc7b7d280 | https://static.higgsfield.ai/1478584d-ac28-4507-81b6-330dc7b7d280.mp4 | https://static.higgsfield.ai/1478584d-ac28-4507-81b6-330dc7b7d280.webp | https://d1xarpci4ikg0w.cloudfront.net/c8494f96-589f-459d-aa71-2592eb34d54e.webp (320×132) |
| 3 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/b1623a4d-4c30-43dd-a23e-e51362392dd4 | https://static.higgsfield.ai/b1623a4d-4c30-43dd-a23e-e51362392dd4.mp4 | https://static.higgsfield.ai/b1623a4d-4c30-43dd-a23e-e51362392dd4.webp | https://d1xarpci4ikg0w.cloudfront.net/771c2e5c-c08b-4e21-9392-05a4f7707f2a.webp (320×180) |
| 4 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/3bd1ea1a-1b93-44c3-a210-331e43a5b792 | https://static.higgsfield.ai/3bd1ea1a-1b93-44c3-a210-331e43a5b792.mp4 | https://static.higgsfield.ai/3bd1ea1a-1b93-44c3-a210-331e43a5b792.webp | https://d1xarpci4ikg0w.cloudfront.net/e2d12ce2-edb0-4e65-be0a-06a071fc6c26.webp (320×242) |
| 5 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/d5514fc9-df25-4dc7-a063-d535052fbf52 | https://static.higgsfield.ai/d5514fc9-df25-4dc7-a063-d535052fbf52.mp4 | https://static.higgsfield.ai/d5514fc9-df25-4dc7-a063-d535052fbf52.webp | https://d1xarpci4ikg0w.cloudfront.net/520f7736-74f5-4b8d-9d0f-7b2e7bb1bec6.webp (320×242) |
| 6 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/1e5c11e7-5265-4acb-84a6-a8740e6785d6 | https://static.higgsfield.ai/1e5c11e7-5265-4acb-84a6-a8740e6785d6.mp4 | https://static.higgsfield.ai/1e5c11e7-5265-4acb-84a6-a8740e6785d6.webp | https://d1xarpci4ikg0w.cloudfront.net/60731e7d-0185-44cd-8444-7c6746775cdd.webp (320×180) |
| 7 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/3971f904-0ba8-47d7-9584-a6aa710d7e76 | https://static.higgsfield.ai/3971f904-0ba8-47d7-9584-a6aa710d7e76.mp4 | https://static.higgsfield.ai/3971f904-0ba8-47d7-9584-a6aa710d7e76.webp | https://d1xarpci4ikg0w.cloudfront.net/c7492aec-e3ea-4db3-ab77-f7cc65eb10c5.webp (320×180) |
| 8 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/ff766d56-6dad-47a3-b6e1-a25ce4f529f0 | https://static.higgsfield.ai/ff766d56-6dad-47a3-b6e1-a25ce4f529f0.mp4 | https://static.higgsfield.ai/ff766d56-6dad-47a3-b6e1-a25ce4f529f0.webp | https://d1xarpci4ikg0w.cloudfront.net/93383983-da53-420e-b746-54590da27453.webp (320×180) |
| 9 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/2b8e464b-3941-4909-b29c-cf6ba263b8f0 | https://static.higgsfield.ai/2b8e464b-3941-4909-b29c-cf6ba263b8f0.mp4 | https://static.higgsfield.ai/2b8e464b-3941-4909-b29c-cf6ba263b8f0.webp | https://d1xarpci4ikg0w.cloudfront.net/e1f288a5-5e7e-4312-bf27-4d50553aa0ed.webp (320×180) |
| 10 | https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9/f7595be8-f85c-4fa8-afc7-848cb3d768ed | https://static.higgsfield.ai/f7595be8-f85c-4fa8-afc7-848cb3d768ed.mp4 | https://static.higgsfield.ai/f7595be8-f85c-4fa8-afc7-848cb3d768ed.webp | https://d1xarpci4ikg0w.cloudfront.net/f8c8c1ad-4a94-448b-be18-495e6416c00b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/635e322f-f711-4a4b-98b8-c1b62d7befe9, https://higgsfield.ai/motion/86b3d8dd-78e2-4c84-9ca3-5a5b3c5a6382. Crawled 2026-09.
