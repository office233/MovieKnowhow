# Jib Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera moves gently downward, focusing on the subject or revealing what's below. Perfect for dramatic entrances or scene reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb | `2057206c-09ef-40b2-9cc9-049e41a0b8bb` | -224 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2057206c-09ef-40b2-9cc9-049e41a0b8bb |
| https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43 | `cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43` | 59 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera jibs down from a chandelier to a bride adjusting her veil in front of a gilded mirror.
```

Use it as: upload a start image that matches the scene, select motion preset **Jib Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ee646153-2f1f-431d-9e02-55bad908e640.webp (320×242)
- Card preview, variant `cd68bb84`: https://d1xarpci4ikg0w.cloudfront.net/48c57a56-d074-4752-b94c-5eb127fb3233.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/4c45cf51-55df-435b-bb6e-2f6ad9b29100 | https://static.higgsfield.ai/4c45cf51-55df-435b-bb6e-2f6ad9b29100.mp4 | https://static.higgsfield.ai/4c45cf51-55df-435b-bb6e-2f6ad9b29100.webp | https://d1xarpci4ikg0w.cloudfront.net/8ec64adb-4a0f-4d4b-8485-9701c80cbcca.webp (320×242) |
| 2 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/daf43acd-6672-4315-bd5f-2abfdf5325d4 | https://static.higgsfield.ai/daf43acd-6672-4315-bd5f-2abfdf5325d4.mp4 | https://static.higgsfield.ai/daf43acd-6672-4315-bd5f-2abfdf5325d4.webp | https://d1xarpci4ikg0w.cloudfront.net/a034da38-6736-480c-9d42-433aec132dfe.webp (320×210) |
| 3 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/391a4970-b196-46b9-a1d2-d851536e49be | https://static.higgsfield.ai/391a4970-b196-46b9-a1d2-d851536e49be.mp4 | https://static.higgsfield.ai/391a4970-b196-46b9-a1d2-d851536e49be.webp | https://d1xarpci4ikg0w.cloudfront.net/fc769ef1-4fe0-4bb7-8df3-5a1cbaea867e.webp (320×320) |
| 4 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/ded5df8a-765b-41cf-b05a-0b0cebf002e3 | https://static.higgsfield.ai/ded5df8a-765b-41cf-b05a-0b0cebf002e3.mp4 | https://static.higgsfield.ai/ded5df8a-765b-41cf-b05a-0b0cebf002e3.webp | https://d1xarpci4ikg0w.cloudfront.net/28136fcf-4806-4b32-8e23-3e3b0d748392.webp (320×210) |
| 5 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73 | https://static.higgsfield.ai/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73.mp4 | https://static.higgsfield.ai/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73.webp | https://d1xarpci4ikg0w.cloudfront.net/9db54506-e926-4cb9-9bba-4b2f0a4626fe.webp (320×486) |
| 6 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/a7b24c94-37d4-4d19-967d-2996c1f77c4a | https://static.higgsfield.ai/a7b24c94-37d4-4d19-967d-2996c1f77c4a.mp4 | https://static.higgsfield.ai/a7b24c94-37d4-4d19-967d-2996c1f77c4a.webp | https://d1xarpci4ikg0w.cloudfront.net/8027d159-34a0-4579-9c8d-e35ffcef5969.webp (320×486) |
| 7 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/e04ef8f6-311c-4be2-a2e5-7c738554f5d0 | https://static.higgsfield.ai/e04ef8f6-311c-4be2-a2e5-7c738554f5d0.mp4 | https://static.higgsfield.ai/e04ef8f6-311c-4be2-a2e5-7c738554f5d0.webp | https://d1xarpci4ikg0w.cloudfront.net/7e86ce00-c758-4aa5-a85d-22ba1786b30c.webp (320×182) |
| 8 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/6b861662-502f-4d4d-8827-815aebd95075 | https://static.higgsfield.ai/6b861662-502f-4d4d-8827-815aebd95075.mp4 | https://static.higgsfield.ai/6b861662-502f-4d4d-8827-815aebd95075.webp | https://d1xarpci4ikg0w.cloudfront.net/0223a89e-2c18-4664-aeaa-39f79050cb67.webp (320×424) |
| 9 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/b2d291d2-571e-4f99-a479-06d1c3b57ed6 | https://static.higgsfield.ai/b2d291d2-571e-4f99-a479-06d1c3b57ed6.mp4 | https://static.higgsfield.ai/b2d291d2-571e-4f99-a479-06d1c3b57ed6.webp | https://d1xarpci4ikg0w.cloudfront.net/6eb39d78-f2e2-4d19-82b2-2ff87690b7d2.webp (320×486) |
| 10 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/dd7d3559-ce34-400f-bd1c-1bbadb34986c | https://static.higgsfield.ai/dd7d3559-ce34-400f-bd1c-1bbadb34986c.mp4 | https://static.higgsfield.ai/dd7d3559-ce34-400f-bd1c-1bbadb34986c.webp | https://d1xarpci4ikg0w.cloudfront.net/a1eb0a81-35f5-4dd3-852c-b5b0fe566975.webp (320×182) |

Source pages: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb, https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43. Crawled 2026-09.
