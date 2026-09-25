# Robo Arm — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Uses a high-speed robotic camera to create fast, precise, and cinematic movements. Ideal for smooth motion shots, product reveals, or dynamic transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b | `1bd4363a-6e5a-4c57-90a5-30f0733a769b` | -249 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1bd4363a-6e5a-4c57-90a5-30f0733a769b |
| https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c | `6fef255d-cdd6-4463-b025-a42646866c1c` | 84 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6fef255d-cdd6-4463-b025-a42646866c1c |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A can of soda bursts from splashing ice water; a fast robotic camera whips around it in precise, slick motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Robo Arm**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Precise mechanical arc along a complex path · **Best use:** Choreographed scenes, product reveals · **Models:** Kling 3.0 · **Phrase/template:** "Robo Arm sweeps from headlights over the roof of the car" · "Camera: Robo Arm arcing slowly from the base up and around to the lid." · **Tips:** Tell the model the exact path ("from the base up and around to the lid"), not just "orbiting"

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/16ff46b6-72b2-4cdc-8d01-2b5e88f9b9de.webp (320×320)
- Card preview, variant `6fef255d`: https://d1xarpci4ikg0w.cloudfront.net/ba3205a2-c4a9-40ae-a6b3-5d4f270b8198.webp

### Sample videos (16; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880 | https://static.higgsfield.ai/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880.mp4 | https://static.higgsfield.ai/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880.webp | https://d1xarpci4ikg0w.cloudfront.net/5be9fccd-3e8b-4062-87da-e03aef55e45f.webp (320×180) |
| 2 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/8e22384b-2c94-4133-abe8-1834538a59c3 | https://static.higgsfield.ai/8e22384b-2c94-4133-abe8-1834538a59c3.mp4 | https://static.higgsfield.ai/8e22384b-2c94-4133-abe8-1834538a59c3.webp | https://d1xarpci4ikg0w.cloudfront.net/93a03e24-6678-4ab1-adab-bf38b383eed4.webp (320×180) |
| 3 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/046401fb-66b1-4765-953f-809b661b865e | https://static.higgsfield.ai/046401fb-66b1-4765-953f-809b661b865e.mp4 | https://static.higgsfield.ai/046401fb-66b1-4765-953f-809b661b865e.webp | https://d1xarpci4ikg0w.cloudfront.net/d41fcafa-7127-4a9e-adef-669ae2741100.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3f89c641-05a1-473c-ac52-0f7a78a8b13b | https://static.higgsfield.ai/3f89c641-05a1-473c-ac52-0f7a78a8b13b.mp4 | https://static.higgsfield.ai/3f89c641-05a1-473c-ac52-0f7a78a8b13b.webp | https://d1xarpci4ikg0w.cloudfront.net/73242534-4684-441c-b5e3-5cb491cf5224.webp (320×236) |
| 5 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/bb7f992e-2dde-4603-bfc1-b11fd78cc43e | https://static.higgsfield.ai/bb7f992e-2dde-4603-bfc1-b11fd78cc43e.mp4 | https://static.higgsfield.ai/bb7f992e-2dde-4603-bfc1-b11fd78cc43e.webp | https://d1xarpci4ikg0w.cloudfront.net/fb9723ce-7a11-46d8-9d95-559f08e444bd.webp (320×432) |
| 6 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/bb5d5aff-0f0f-4e3a-8521-e9f30f048531 | https://static.higgsfield.ai/bb5d5aff-0f0f-4e3a-8521-e9f30f048531.mp4 | https://static.higgsfield.ai/bb5d5aff-0f0f-4e3a-8521-e9f30f048531.webp | https://d1xarpci4ikg0w.cloudfront.net/bc0496f7-ed68-4fbe-be00-e5986c0feb9b.webp (320×236) |
| 7 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/246d31f1-b280-43da-aede-0002bdc1710f | https://static.higgsfield.ai/246d31f1-b280-43da-aede-0002bdc1710f.mp4 | https://static.higgsfield.ai/246d31f1-b280-43da-aede-0002bdc1710f.webp | https://d1xarpci4ikg0w.cloudfront.net/4e7b8c39-d2c2-49d0-8bb8-c44dcf81d00b.webp (320×236) |
| 8 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e | https://static.higgsfield.ai/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e.mp4 | https://static.higgsfield.ai/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e.webp | https://d1xarpci4ikg0w.cloudfront.net/fbefb29b-f03f-491b-80dc-8fbb558eb787.webp (320×320) |
| 9 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7 | https://static.higgsfield.ai/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7.mp4 | https://static.higgsfield.ai/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7.webp | https://d1xarpci4ikg0w.cloudfront.net/a3404d4b-0b17-4a98-b711-20b5884a1ac9.webp (320×180) |
| 10 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419 | https://static.higgsfield.ai/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419.mp4 | https://static.higgsfield.ai/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419.webp | https://d1xarpci4ikg0w.cloudfront.net/e6ca42ba-f205-442b-88b1-329180c05e86.webp (320×180) |
| 11 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/d4c60e0c-4026-4f02-ad67-a12fa6249af5 | https://static.higgsfield.ai/d4c60e0c-4026-4f02-ad67-a12fa6249af5.mp4 | https://static.higgsfield.ai/d4c60e0c-4026-4f02-ad67-a12fa6249af5.webp | https://d1xarpci4ikg0w.cloudfront.net/4728eb20-e278-4240-a1d6-e913e3c69bd7.webp (320×180) |
| 12 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/f4501926-2665-4b03-8850-6ac8dc6c25b5 | https://static.higgsfield.ai/f4501926-2665-4b03-8850-6ac8dc6c25b5.mp4 | https://static.higgsfield.ai/f4501926-2665-4b03-8850-6ac8dc6c25b5.webp | https://d1xarpci4ikg0w.cloudfront.net/f0e014ef-f0e4-46eb-94cd-386d9f2fa456.webp (320×320) |
| 13 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/68e9b863-0eaa-45a3-9615-1252ccf3d8d3 | https://static.higgsfield.ai/68e9b863-0eaa-45a3-9615-1252ccf3d8d3.mp4 | https://static.higgsfield.ai/68e9b863-0eaa-45a3-9615-1252ccf3d8d3.webp | https://d1xarpci4ikg0w.cloudfront.net/bf18e6e6-acb1-4c82-9a9a-e5876076b53c.webp (320×242) |
| 14 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/c1ed6baf-f075-4db4-8bb8-6a423e4c2430 | https://static.higgsfield.ai/c1ed6baf-f075-4db4-8bb8-6a423e4c2430.mp4 | https://static.higgsfield.ai/c1ed6baf-f075-4db4-8bb8-6a423e4c2430.webp | https://d1xarpci4ikg0w.cloudfront.net/86a60579-6de6-4f1a-8bdb-317f06560b20.webp (320×182) |
| 15 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3b2651f9-f845-4646-ad1c-8a315995b4b4 | https://static.higgsfield.ai/3b2651f9-f845-4646-ad1c-8a315995b4b4.mp4 | https://static.higgsfield.ai/3b2651f9-f845-4646-ad1c-8a315995b4b4.webp | https://d1xarpci4ikg0w.cloudfront.net/8e47f51a-4297-42b2-9aaa-c23d48520bcd.webp (320×424) |
| 16 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/b0cc1b2c-55ae-4aab-80fd-cc33ce751152 | https://static.higgsfield.ai/b0cc1b2c-55ae-4aab-80fd-cc33ce751152.mp4 | https://static.higgsfield.ai/b0cc1b2c-55ae-4aab-80fd-cc33ce751152.webp | https://d1xarpci4ikg0w.cloudfront.net/642399d4-b3cb-4270-a23d-95fc250cb09f.webp (320×210) |

Source pages: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b, https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c. Crawled 2026-09.
