# Lazy Susan — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Rotates the camera smoothly around a still subject, like it's on a turntable. Great for stylish product shots or dramatic character reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e | `025866ff-677c-4af2-92ef-52d6ec3b035e` | -196 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e |
| https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975 | `692c5527-3580-4c65-adfd-c47c6dc1f975` | 67 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=692c5527-3580-4c65-adfd-c47c6dc1f975 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A luxury perfume bottle stands still on a black marble pedestal; the camera rotates smoothly around it like a turntable.
```

Use it as: upload a start image that matches the scene, select motion preset **Lazy Susan**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Slow turntable rotation, subject centered · **Best use:** Product shots, character intros, costume reveal · **Models:** Kling 3.0 · **Phrase/template:** "Lazy Susan around the antique watch on the table" · **Tips:** Luxury: a dark background with a single hard side-light

## Related presets

- **Mixes that use this preset:** [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md)
- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e27cfd60-07f5-49dc-8c7a-bb609e71ec73.webp (320×242)
- Card preview, variant `692c5527`: https://d1xarpci4ikg0w.cloudfront.net/c5642420-3640-4515-bb84-e72c49928bf9.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/154db783-8d22-431a-9cb4-5fa4e7b32249 | https://static.higgsfield.ai/154db783-8d22-431a-9cb4-5fa4e7b32249.mp4 | https://static.higgsfield.ai/154db783-8d22-431a-9cb4-5fa4e7b32249.webp | https://d1xarpci4ikg0w.cloudfront.net/54b5e110-71c9-473b-94ba-a33b9d387420.webp (320×210) |
| 2 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/d09dd399-9714-4443-baf6-724a6569b2b5 | https://static.higgsfield.ai/d09dd399-9714-4443-baf6-724a6569b2b5.mp4 | https://static.higgsfield.ai/d09dd399-9714-4443-baf6-724a6569b2b5.webp | https://d1xarpci4ikg0w.cloudfront.net/77839a27-2e8d-4e77-bf02-173f57ff80b4.webp (320×242) |
| 3 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/e9bfa433-f330-46ed-b7ab-ffb944f1e601 | https://static.higgsfield.ai/e9bfa433-f330-46ed-b7ab-ffb944f1e601.mp4 | https://static.higgsfield.ai/e9bfa433-f330-46ed-b7ab-ffb944f1e601.webp | https://d1xarpci4ikg0w.cloudfront.net/6368bd5f-ded8-4fc1-b674-f8af2becd7a4.webp (320×242) |
| 4 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/a3eaf904-d218-48ef-812a-aecc971a8c33 | https://static.higgsfield.ai/a3eaf904-d218-48ef-812a-aecc971a8c33.mp4 | https://static.higgsfield.ai/a3eaf904-d218-48ef-812a-aecc971a8c33.webp | https://d1xarpci4ikg0w.cloudfront.net/70967917-9af6-4802-90ba-8b61e19fa65d.webp (320×320) |
| 5 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/25cbf105-a66b-4f6f-8ed9-e837d10ca02a | https://static.higgsfield.ai/25cbf105-a66b-4f6f-8ed9-e837d10ca02a.mp4 | https://static.higgsfield.ai/25cbf105-a66b-4f6f-8ed9-e837d10ca02a.webp | https://d1xarpci4ikg0w.cloudfront.net/4fac48f0-67a2-45cf-9070-fc8214fc6937.webp (320×182) |
| 6 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/4ade1025-9300-4def-b79b-5bbd0e5f8d43 | https://static.higgsfield.ai/4ade1025-9300-4def-b79b-5bbd0e5f8d43.mp4 | https://static.higgsfield.ai/4ade1025-9300-4def-b79b-5bbd0e5f8d43.webp | https://d1xarpci4ikg0w.cloudfront.net/65456ad0-bc92-4005-b3c1-90e5496eba32.webp (320×182) |

Source pages: https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e, https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975. Crawled 2026-09.
