# Overhead — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera is positioned above the subject, smoothly tracking their movement. Great for showing layout, movement, or creating a stylized, cinematic look.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706 | `b6395b91-a356-4bc6-9cda-fc2793b3d706` | 46 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b6395b91-a356-4bc6-9cda-fc2793b3d706 |
| https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9 | `cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9` | 80 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Top-down view of a cyclist weaving through a sunlit city intersection, the camera tracking her from directly above.
```

Use it as: upload a start image that matches the scene, select motion preset **Overhead**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Direct top-down bird's-eye view · **Best use:** Choreography, spatial relationships · **Models:** — · **Phrase/template:** "Overhead shot of the dancers forming patterns" · **Tips:** —

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/39ff405a-4967-421b-8c48-5f0c5a7236d7.webp (320×210)
- Card preview, variant `cdb0b964`: https://d1xarpci4ikg0w.cloudfront.net/03905d2b-0b84-48cd-9be3-f7ed5bb27b9d.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/16b91c58-0aed-48ad-87ec-ec4c61e99eae | https://static.higgsfield.ai/16b91c58-0aed-48ad-87ec-ec4c61e99eae.mp4 | https://static.higgsfield.ai/16b91c58-0aed-48ad-87ec-ec4c61e99eae.webp | https://d1xarpci4ikg0w.cloudfront.net/ee7efd26-7802-4183-9fe7-f7edf493e7a3.webp (320×424) |
| 2 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/68f36ba4-a74e-494c-8c4e-85a06a96e5e0 | https://static.higgsfield.ai/68f36ba4-a74e-494c-8c4e-85a06a96e5e0.mp4 | https://static.higgsfield.ai/68f36ba4-a74e-494c-8c4e-85a06a96e5e0.webp | https://d1xarpci4ikg0w.cloudfront.net/baccf46a-aca1-4a30-9aa1-db664abab2cb.webp (320×210) |
| 3 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/9df17da1-80ee-4406-a7a5-763eeea8fd22 | https://static.higgsfield.ai/9df17da1-80ee-4406-a7a5-763eeea8fd22.mp4 | https://static.higgsfield.ai/9df17da1-80ee-4406-a7a5-763eeea8fd22.webp | https://d1xarpci4ikg0w.cloudfront.net/795a1dcf-61f8-4a0d-a023-4e796987553b.webp (320×132) |
| 4 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/77cbebbb-0352-4760-a948-673366380d6d | https://static.higgsfield.ai/77cbebbb-0352-4760-a948-673366380d6d.mp4 | https://static.higgsfield.ai/77cbebbb-0352-4760-a948-673366380d6d.webp | https://d1xarpci4ikg0w.cloudfront.net/a34a1ce7-7951-43c4-abbc-6d0b15bf0dd5.webp (320×424) |
| 5 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/306087e0-5b55-42ac-96d7-0abce99c9ab6 | https://static.higgsfield.ai/306087e0-5b55-42ac-96d7-0abce99c9ab6.mp4 | https://static.higgsfield.ai/306087e0-5b55-42ac-96d7-0abce99c9ab6.webp | https://d1xarpci4ikg0w.cloudfront.net/a02e2aa8-28e5-4cea-a58d-c05b76ca5ad0.webp (320×486) |
| 6 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/fd339b39-fcff-43ad-b2a4-765881695647 | https://static.higgsfield.ai/fd339b39-fcff-43ad-b2a4-765881695647.mp4 | https://static.higgsfield.ai/fd339b39-fcff-43ad-b2a4-765881695647.webp | https://d1xarpci4ikg0w.cloudfront.net/1f938f65-7b09-42fb-ae38-ef6ae5ca6a60.webp (320×228) |
| 7 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/103440d1-4375-415c-ab84-43de47ac7e80 | https://static.higgsfield.ai/103440d1-4375-415c-ab84-43de47ac7e80.mp4 | https://static.higgsfield.ai/103440d1-4375-415c-ab84-43de47ac7e80.webp | https://d1xarpci4ikg0w.cloudfront.net/99f548e5-5bda-4ad4-9591-7a103b8dd4d2.webp (320×138) |
| 8 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/b5f9d488-c04c-415f-af77-6684e1a3cc75 | https://static.higgsfield.ai/b5f9d488-c04c-415f-af77-6684e1a3cc75.mp4 | https://static.higgsfield.ai/b5f9d488-c04c-415f-af77-6684e1a3cc75.webp | https://d1xarpci4ikg0w.cloudfront.net/32d88b92-8cc2-4aa7-b7ba-9610d402c46c.webp (320×320) |
| 9 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/5984b190-e5a7-4745-8875-c6a511661056 | https://static.higgsfield.ai/5984b190-e5a7-4745-8875-c6a511661056.mp4 | https://static.higgsfield.ai/5984b190-e5a7-4745-8875-c6a511661056.webp | https://d1xarpci4ikg0w.cloudfront.net/97d9d49c-02cb-4653-8a75-27f62019d0df.webp (320×320) |
| 10 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/bcca1594-30f1-4665-922a-add244c84074 | https://static.higgsfield.ai/bcca1594-30f1-4665-922a-add244c84074.mp4 | https://static.higgsfield.ai/bcca1594-30f1-4665-922a-add244c84074.webp | https://d1xarpci4ikg0w.cloudfront.net/c9e73c86-0a81-4697-b320-785bd31a08f9.webp (320×210) |
| 11 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/3a62bbe3-a529-4db6-937e-eca829843534 | https://static.higgsfield.ai/3a62bbe3-a529-4db6-937e-eca829843534.mp4 | https://static.higgsfield.ai/3a62bbe3-a529-4db6-937e-eca829843534.webp | https://d1xarpci4ikg0w.cloudfront.net/82e12730-9a54-4893-bac7-4aaa89397cab.webp (320×320) |

Source pages: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706, https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9. Crawled 2026-09.
