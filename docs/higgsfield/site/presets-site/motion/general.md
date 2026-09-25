# General — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** A balanced, all-purpose camera style with natural movement and clean framing. Works well for any scene, offering a neutral look without dramatic effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218 | `6e4e30fb-fe99-4df7-b3ab-10e16c6e0218` | 83 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6e4e30fb-fe99-4df7-b3ab-10e16c6e0218 |
| https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a | `d2389a9a-91c2-4276-bc9c-c9e35e8fb85a` | -262 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d2389a9a-91c2-4276-bc9c-c9e35e8fb85a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A barista pours latte art in a sunny café, natural camera movement, clean framing.
```

Use it as: upload a start image that matches the scene, select motion preset **General**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Default — no strong stylistic bias · **Best for:** Neutral starting point

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa4b70c0-5a4d-43e8-9d72-1a77857017a0.webp (320×242)
- Card preview, variant `d2389a9a`: https://d1xarpci4ikg0w.cloudfront.net/689874f3-72c7-4978-9c8d-21b46e81a919.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/57ea664a-1fc7-4f25-9402-094c4514a9fe | https://static.higgsfield.ai/57ea664a-1fc7-4f25-9402-094c4514a9fe.mp4 | https://static.higgsfield.ai/57ea664a-1fc7-4f25-9402-094c4514a9fe.webp | https://d1xarpci4ikg0w.cloudfront.net/9b4b6d30-d59e-4979-8b84-9786506b4771.webp (320×180) |
| 2 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/4ee6faba-8808-430f-9a8c-1ec5aa8515d6 | https://static.higgsfield.ai/4ee6faba-8808-430f-9a8c-1ec5aa8515d6.mp4 | https://static.higgsfield.ai/4ee6faba-8808-430f-9a8c-1ec5aa8515d6.webp | https://d1xarpci4ikg0w.cloudfront.net/82fc98fa-3562-4051-91e0-89ab9e3b8883.webp (320×486) |
| 3 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/472d0757-6dba-4c64-a2a3-32e3ad47399b | https://static.higgsfield.ai/472d0757-6dba-4c64-a2a3-32e3ad47399b.mp4 | https://static.higgsfield.ai/472d0757-6dba-4c64-a2a3-32e3ad47399b.webp | https://d1xarpci4ikg0w.cloudfront.net/b2bbe1f3-cee1-4dd5-86eb-60cd030259f7.webp (320×242) |
| 4 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/dd7aaa92-99cd-4ecd-875a-852b60148ce4 | https://static.higgsfield.ai/dd7aaa92-99cd-4ecd-875a-852b60148ce4.mp4 | https://static.higgsfield.ai/dd7aaa92-99cd-4ecd-875a-852b60148ce4.webp | https://d1xarpci4ikg0w.cloudfront.net/9353a3f9-f3e2-4964-ae84-df0c07db1434.webp (320×242) |
| 5 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/56c92d59-97ce-4d08-82eb-3e165384ba18 | https://static.higgsfield.ai/56c92d59-97ce-4d08-82eb-3e165384ba18.mp4 | https://static.higgsfield.ai/56c92d59-97ce-4d08-82eb-3e165384ba18.webp | https://d1xarpci4ikg0w.cloudfront.net/28be6157-8841-40c2-8db7-ce6575273426.webp (320×242) |
| 6 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/947c29c6-6018-427e-9f99-88f65650876b | https://static.higgsfield.ai/947c29c6-6018-427e-9f99-88f65650876b.mp4 | https://static.higgsfield.ai/947c29c6-6018-427e-9f99-88f65650876b.webp | https://d1xarpci4ikg0w.cloudfront.net/6ea92581-f937-4c69-91eb-35bee13a2b43.webp (320×182) |
| 7 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/7d448a9d-eb7c-4084-9c91-0945e9c67d7e | https://static.higgsfield.ai/7d448a9d-eb7c-4084-9c91-0945e9c67d7e.mp4 | https://static.higgsfield.ai/7d448a9d-eb7c-4084-9c91-0945e9c67d7e.webp | https://d1xarpci4ikg0w.cloudfront.net/df2b3126-46bf-4af2-bb8e-9248bbddcaa5.webp (320×182) |
| 8 | https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218/f6fdc7ec-d2a9-4b39-b564-081decfc0b15 | https://static.higgsfield.ai/f6fdc7ec-d2a9-4b39-b564-081decfc0b15.mp4 | https://static.higgsfield.ai/f6fdc7ec-d2a9-4b39-b564-081decfc0b15.webp | https://d1xarpci4ikg0w.cloudfront.net/2cc45ca4-f121-4c2b-ade6-6383d5537e4e.webp (320×210) |

Source pages: https://higgsfield.ai/motion/6e4e30fb-fe99-4df7-b3ab-10e16c6e0218, https://higgsfield.ai/motion/d2389a9a-91c2-4276-bc9c-c9e35e8fb85a. Crawled 2026-09.
