# Crane Over The Head — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera rises smoothly above the subject using a crane, revealing the surroundings or adding drama. Perfect for epic moments or scene transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7 | `f77584f2-7442-4128-91b5-095829b108c7` | 40 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A hiker stands at a cliff edge looking out; the camera rises over her head to reveal the vast canyon below.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Over The Head**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Overhead god-like view, directly above · **Best use:** Vulnerability, surveillance, choreography · **Models:** — · **Phrase/template:** "Crane Over The Head — top-down view of the crowd" · **Tips:** See recipe [topdown-dive](recipes/topdown-dive.md)

## Related presets

- **Mixes that use this preset:** [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md)
- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3889c0ef-0a7c-492e-ae99-bdbfb4405856.webp (320×180)

### Sample videos (12)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/97cf9e35-eda5-4346-953c-b6d15af1b443 | https://static.higgsfield.ai/97cf9e35-eda5-4346-953c-b6d15af1b443.mp4 | https://static.higgsfield.ai/97cf9e35-eda5-4346-953c-b6d15af1b443.webp | https://d1xarpci4ikg0w.cloudfront.net/ebd48af6-440f-434f-8b2c-93312f56f321.webp (320×486) |
| 2 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf | https://static.higgsfield.ai/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf.mp4 | https://static.higgsfield.ai/85fd2ee1-3422-4ba8-902f-ba0c782fa2bf.webp | https://d1xarpci4ikg0w.cloudfront.net/b6a2daa8-6270-4b5c-8f61-e5be484339e4.webp (320×398) |
| 3 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/b04c6456-834f-4b91-9e3e-9253b806b894 | https://static.higgsfield.ai/b04c6456-834f-4b91-9e3e-9253b806b894.mp4 | https://static.higgsfield.ai/b04c6456-834f-4b91-9e3e-9253b806b894.webp | https://d1xarpci4ikg0w.cloudfront.net/9fcb95eb-e038-46c4-9fb1-79a580e13fc3.webp (320×398) |
| 4 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/2f5517f9-a322-4355-b468-a48b79d694f9 | https://static.higgsfield.ai/2f5517f9-a322-4355-b468-a48b79d694f9.mp4 | https://static.higgsfield.ai/2f5517f9-a322-4355-b468-a48b79d694f9.webp | https://d1xarpci4ikg0w.cloudfront.net/a92d3ef8-f059-41fa-b7fe-eac7a80f8628.webp (320×424) |
| 5 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/5c282e44-62ab-4130-bd99-161c0f232409 | https://static.higgsfield.ai/5c282e44-62ab-4130-bd99-161c0f232409.mp4 | https://static.higgsfield.ai/5c282e44-62ab-4130-bd99-161c0f232409.webp | https://d1xarpci4ikg0w.cloudfront.net/f9b1c267-c208-4a42-b72e-451053411dd8.webp (320×424) |
| 6 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7 | https://static.higgsfield.ai/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7.mp4 | https://static.higgsfield.ai/9d5fd172-b4c2-4ffd-8bed-c1a49accffe7.webp | https://d1xarpci4ikg0w.cloudfront.net/3168cf8b-82b7-44e2-81ea-d786bc21c84b.webp (320×320) |
| 7 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/0370526b-6053-4128-bc87-107d8a92677e | https://static.higgsfield.ai/0370526b-6053-4128-bc87-107d8a92677e.mp4 | https://static.higgsfield.ai/0370526b-6053-4128-bc87-107d8a92677e.webp | https://d1xarpci4ikg0w.cloudfront.net/82e29cd5-bc4a-4210-b95b-2407d93ef3ba.webp (320×424) |
| 8 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a28a446a-b96a-4d3f-8c5e-e827beea6ee5 | https://static.higgsfield.ai/a28a446a-b96a-4d3f-8c5e-e827beea6ee5.mp4 | https://static.higgsfield.ai/a28a446a-b96a-4d3f-8c5e-e827beea6ee5.webp | https://d1xarpci4ikg0w.cloudfront.net/55abe955-0f05-4380-8271-94e5dd0139f9.webp (320×424) |
| 9 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7079d313-48f8-4e6e-9a20-46701338f199 | https://static.higgsfield.ai/7079d313-48f8-4e6e-9a20-46701338f199.mp4 | https://static.higgsfield.ai/7079d313-48f8-4e6e-9a20-46701338f199.webp | https://d1xarpci4ikg0w.cloudfront.net/e2dc0b5d-db35-4404-b042-6e7f062c357c.webp (320×424) |
| 10 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/a26c8727-7868-4734-b854-bbdee45c2f38 | https://static.higgsfield.ai/a26c8727-7868-4734-b854-bbdee45c2f38.mp4 | https://static.higgsfield.ai/a26c8727-7868-4734-b854-bbdee45c2f38.webp | https://d1xarpci4ikg0w.cloudfront.net/18b68bf2-5b29-4728-a89b-debafea4b639.webp (320×182) |
| 11 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/7d1b34bf-45b2-43ca-8219-c06b67ea8363 | https://static.higgsfield.ai/7d1b34bf-45b2-43ca-8219-c06b67ea8363.mp4 | https://static.higgsfield.ai/7d1b34bf-45b2-43ca-8219-c06b67ea8363.webp | https://d1xarpci4ikg0w.cloudfront.net/0f105721-5f14-442e-9822-da38fa7b6168.webp (320×182) |
| 12 | https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7/aecae0f4-1f6b-46b2-8f31-5db4c758b46a | https://static.higgsfield.ai/aecae0f4-1f6b-46b2-8f31-5db4c758b46a.mp4 | https://static.higgsfield.ai/aecae0f4-1f6b-46b2-8f31-5db4c758b46a.webp | https://d1xarpci4ikg0w.cloudfront.net/0324a628-dd30-43c4-9a33-b4205e1aa4c0.webp (320×180) |

Source pages: https://higgsfield.ai/motion/f77584f2-7442-4128-91b5-095829b108c7. Crawled 2026-09.
