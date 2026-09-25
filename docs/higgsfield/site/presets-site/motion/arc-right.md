# Arc Right — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera circles gently to the right around the subject, creating dynamic depth and flow. Perfect for adding elegance or cinematic intensity to a scene.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806 | `0bdbf318-f918-4f9b-829a-74cab681d806` | -284 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0bdbf318-f918-4f9b-829a-74cab681d806 |
| https://higgsfield.ai/motion/f0eca915-e819-4295-a3c5-a46ac6e63a2a | `f0eca915-e819-4295-a3c5-a46ac6e63a2a` | 54 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f0eca915-e819-4295-a3c5-a46ac6e63a2a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A boxer sits on the stool between rounds, breathing hard; the camera arcs right around him under harsh ring lights.
```

Use it as: upload a start image that matches the scene, select motion preset **Arc Right**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/b663b30a-42b9-4847-aa46-e7a4808e9b3e.webp (320×136)
- Card preview, variant `f0eca915`: https://d1xarpci4ikg0w.cloudfront.net/29d51b43-1e8f-4e7c-a547-8cd3215b3ef7.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/6bbbc606-256c-4ea4-bfd3-bb676717fa0a | https://static.higgsfield.ai/6bbbc606-256c-4ea4-bfd3-bb676717fa0a.mp4 | https://static.higgsfield.ai/6bbbc606-256c-4ea4-bfd3-bb676717fa0a.webp | https://d1xarpci4ikg0w.cloudfront.net/c9f271f7-fc8e-4788-a0d7-9937c724ba84.webp (320×320) |
| 2 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/710e10dd-490c-4c78-a089-7f12a1f16539 | https://static.higgsfield.ai/710e10dd-490c-4c78-a089-7f12a1f16539.mp4 | https://static.higgsfield.ai/710e10dd-490c-4c78-a089-7f12a1f16539.webp | https://d1xarpci4ikg0w.cloudfront.net/53f2160e-8383-49cb-ad9d-c4bd2d7b2ba1.webp (320×486) |
| 3 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/74eb55fa-287b-444f-81ed-30d492e57f85 | https://static.higgsfield.ai/74eb55fa-287b-444f-81ed-30d492e57f85.mp4 | https://static.higgsfield.ai/74eb55fa-287b-444f-81ed-30d492e57f85.webp | https://d1xarpci4ikg0w.cloudfront.net/aaa99f4d-ab05-458a-8a44-516e899c1113.webp (320×182) |
| 4 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/5f74f3b7-1d92-494d-924a-11d8fc1fcd6e | https://static.higgsfield.ai/5f74f3b7-1d92-494d-924a-11d8fc1fcd6e.mp4 | https://static.higgsfield.ai/5f74f3b7-1d92-494d-924a-11d8fc1fcd6e.webp | https://d1xarpci4ikg0w.cloudfront.net/b4149830-a87d-48a1-a3f7-58cccc49cbe2.webp (320×182) |
| 5 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/a58a76e7-73ab-4466-9fe4-12e5e7f1fca1 | https://static.higgsfield.ai/a58a76e7-73ab-4466-9fe4-12e5e7f1fca1.mp4 | https://static.higgsfield.ai/a58a76e7-73ab-4466-9fe4-12e5e7f1fca1.webp | https://d1xarpci4ikg0w.cloudfront.net/98f76afd-55e8-4264-8a7b-b5f2a39b45e3.webp (320×182) |
| 6 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/8e425303-a77d-4b61-9344-b2bac7f49327 | https://static.higgsfield.ai/8e425303-a77d-4b61-9344-b2bac7f49327.mp4 | https://static.higgsfield.ai/8e425303-a77d-4b61-9344-b2bac7f49327.webp | https://d1xarpci4ikg0w.cloudfront.net/945dbdd0-01b1-4987-908d-b481835b8fe4.webp (320×486) |
| 7 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/5455a663-f14d-434b-8861-6ba1958f07e6 | https://static.higgsfield.ai/5455a663-f14d-434b-8861-6ba1958f07e6.mp4 | https://static.higgsfield.ai/5455a663-f14d-434b-8861-6ba1958f07e6.webp | https://d1xarpci4ikg0w.cloudfront.net/423bd272-d64c-4c7a-89f9-832305fb40ed.webp (320×486) |
| 8 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/bb65b31b-29ca-428a-8e5f-d3efcad2a2f7 | https://static.higgsfield.ai/bb65b31b-29ca-428a-8e5f-d3efcad2a2f7.mp4 | https://static.higgsfield.ai/bb65b31b-29ca-428a-8e5f-d3efcad2a2f7.webp | https://d1xarpci4ikg0w.cloudfront.net/fe863e0b-ef4a-4d4b-b780-ee4c31bd75f2.webp (320×424) |
| 9 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/e0a3d673-6660-484e-b873-bfb51efdf134 | https://static.higgsfield.ai/e0a3d673-6660-484e-b873-bfb51efdf134.mp4 | https://static.higgsfield.ai/e0a3d673-6660-484e-b873-bfb51efdf134.webp | https://d1xarpci4ikg0w.cloudfront.net/0e2a8e60-fdca-415c-bd96-c8155c16230f.webp (320×424) |
| 10 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/efd2d4ba-9c51-48b1-b68c-b0bf0d9a0375 | https://static.higgsfield.ai/efd2d4ba-9c51-48b1-b68c-b0bf0d9a0375.mp4 | https://static.higgsfield.ai/efd2d4ba-9c51-48b1-b68c-b0bf0d9a0375.webp | https://d1xarpci4ikg0w.cloudfront.net/ad95f0d6-308e-42df-b5f2-d6ccd7dbecff.webp (320×424) |
| 11 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/9ff8c158-147a-422e-9be0-56d097765512 | https://static.higgsfield.ai/9ff8c158-147a-422e-9be0-56d097765512.mp4 | https://static.higgsfield.ai/9ff8c158-147a-422e-9be0-56d097765512.webp | https://d1xarpci4ikg0w.cloudfront.net/d5228d28-af04-4e53-a24f-414a6f85ee95.webp (320×424) |
| 12 | https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806/21fef2ca-f87a-4a5e-86cd-c97a0ca818af | https://static.higgsfield.ai/21fef2ca-f87a-4a5e-86cd-c97a0ca818af.mp4 | https://static.higgsfield.ai/21fef2ca-f87a-4a5e-86cd-c97a0ca818af.webp | https://d1xarpci4ikg0w.cloudfront.net/24f43a9c-4ec3-4602-a1f1-57c5b64f88dd.webp (320×424) |

Source pages: https://higgsfield.ai/motion/0bdbf318-f918-4f9b-829a-74cab681d806, https://higgsfield.ai/motion/f0eca915-e819-4295-a3c5-a46ac6e63a2a. Crawled 2026-09.
