# 360 Orbit — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** The camera smoothly circles all the way around the subject, creating a dynamic, immersive view. Perfect for dramatic reveals, showcasing outfits, or adding visual energy.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c | `866a58b8-46e2-4a09-bcd8-1aaaa489730c` | 91 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=866a58b8-46e2-4a09-bcd8-1aaaa489730c |
| https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4 | `d7c180bc-793c-4d29-83ba-c2d5e84e53d4` | -233 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d7c180bc-793c-4d29-83ba-c2d5e84e53d4 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A model in a flowing emerald gown stands in a white studio; the camera circles fully around her, fabric catching the light.
```

Use it as: upload a start image that matches the scene, select motion preset **360 Orbit**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Full circle around the subject · **Best use:** Emotional isolation, dramatic emphasis, dance · **Models:** Kling 2.6 / 3.0 · **Phrase/template:** "360 Orbit around the boxer in the ring" · "Camera: 360 Orbit tightening toward her as movement intensifies." · precise: "Camera orbits 270 degrees counterclockwise around subject over 5 seconds. Maintain constant 8-foot distance… Speed: 54 degrees per second." · **Tips:** Reliable phrase: "smooth 180-degree orbit at eye level, constant distance." See [orbit-360](viral/orbit-360.md) and recipe [product-spin](recipes/product-spin.md).

## Related presets

- **Same category (Camera · orbit & rotation):** [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa369a2c-50e1-4930-a851-01a99352b6ac.webp (320×424)
- Card preview, variant `d7c180bc`: https://d1xarpci4ikg0w.cloudfront.net/e826fd3e-43c7-4304-8138-4c7ea70a3feb.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f | https://static.higgsfield.ai/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f.mp4 | https://static.higgsfield.ai/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f.webp | https://d1xarpci4ikg0w.cloudfront.net/222432d7-78ff-44ec-9ced-12653b12fae7.webp (320×180) |
| 2 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/15cc174f-348c-430f-9395-5cb0fae95da6 | https://static.higgsfield.ai/15cc174f-348c-430f-9395-5cb0fae95da6.mp4 | https://static.higgsfield.ai/15cc174f-348c-430f-9395-5cb0fae95da6.webp | https://d1xarpci4ikg0w.cloudfront.net/9360f9f0-e0a8-4f1f-b062-5d89fffbe7f9.webp (320×320) |
| 3 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/33943184-c234-4f4b-8d18-2d1cd00731d3 | https://static.higgsfield.ai/33943184-c234-4f4b-8d18-2d1cd00731d3.mp4 | https://static.higgsfield.ai/33943184-c234-4f4b-8d18-2d1cd00731d3.webp | https://d1xarpci4ikg0w.cloudfront.net/b4c328da-b209-4164-80c3-c25fdcf50bc0.webp (320×320) |
| 4 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/b9be742b-6038-4637-ba20-0a9d68563d66 | https://static.higgsfield.ai/b9be742b-6038-4637-ba20-0a9d68563d66.mp4 | https://static.higgsfield.ai/b9be742b-6038-4637-ba20-0a9d68563d66.webp | https://d1xarpci4ikg0w.cloudfront.net/a7caeb2b-409b-4c6b-88e2-240a65720f53.webp (320×242) |
| 5 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/b68804af-c9c4-4e89-a768-7bbb38342504 | https://static.higgsfield.ai/b68804af-c9c4-4e89-a768-7bbb38342504.mp4 | https://static.higgsfield.ai/b68804af-c9c4-4e89-a768-7bbb38342504.webp | https://d1xarpci4ikg0w.cloudfront.net/1ee79c59-9b4c-4be7-bc69-b8196d4d8a0c.webp (320×424) |
| 6 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/3620f33d-589a-4e1c-9a7a-b89f92076013 | https://static.higgsfield.ai/3620f33d-589a-4e1c-9a7a-b89f92076013.mp4 | https://static.higgsfield.ai/3620f33d-589a-4e1c-9a7a-b89f92076013.webp | https://d1xarpci4ikg0w.cloudfront.net/2aa9c9c6-4379-4c1f-a384-14a5cdbb0c44.webp (320×182) |
| 7 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/c7138a1d-933a-4533-93f5-f4de86cf933d | https://static.higgsfield.ai/c7138a1d-933a-4533-93f5-f4de86cf933d.mp4 | https://static.higgsfield.ai/c7138a1d-933a-4533-93f5-f4de86cf933d.webp | https://d1xarpci4ikg0w.cloudfront.net/fd2b5ec5-189b-4b73-8ba6-fd1411401e50.webp (320×424) |
| 8 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec | https://static.higgsfield.ai/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec.mp4 | https://static.higgsfield.ai/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec.webp | https://d1xarpci4ikg0w.cloudfront.net/e8eea1f7-866d-409d-ac52-c305efb2ae87.webp (320×424) |

Source pages: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c, https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4. Crawled 2026-09.
