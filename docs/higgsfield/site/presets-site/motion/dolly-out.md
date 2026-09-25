# Dolly Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Pulls the camera smoothly away from the subject, revealing more of the scene. Great for emotional distance, dramatic exits, or cinematic reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543 | `96e95a3c-ad0e-49ee-84e3-a39e0f13b543` | 50 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=96e95a3c-ad0e-49ee-84e3-a39e0f13b543 |
| https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17 | `c1a8c847-4ea8-4d31-9cec-ef62897a2d17` | -214 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c1a8c847-4ea8-4d31-9cec-ef62897a2d17 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A lone soldier stands in the middle of an empty, smoke-filled city square; the camera dollies out to reveal the ruined buildings around him.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Smooth linear move away from the subject · **Best use:** Isolation, departure, widening context · **Models:** Kling · **Phrase/template:** "Camera Dolly Out revealing the empty square" · "Camera: Dolly Out — retreating as she advances, never quite letting her fill the frame." · **Tips:** Fashion runway (retreat as the model advances). Horror: "Dolly Out slowly as the figure keeps approaching — never quite reaching us."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bb84a42b-c21a-4aba-82f0-455251d1457b.webp (320×242)
- Card preview, variant `c1a8c847`: https://d1xarpci4ikg0w.cloudfront.net/ce75e22b-1680-4cd4-a3de-a1696672b6c1.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/b9df4a77-c6c0-45d0-9e34-bf075c4cd733 | https://static.higgsfield.ai/b9df4a77-c6c0-45d0-9e34-bf075c4cd733.mp4 | https://static.higgsfield.ai/b9df4a77-c6c0-45d0-9e34-bf075c4cd733.webp | https://d1xarpci4ikg0w.cloudfront.net/3ab79fdd-8c95-4cb7-9bd5-794cf1ae43ac.webp (320×242) |
| 2 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/3c4c9e92-873c-4d78-831b-c94642a6e94b | https://static.higgsfield.ai/3c4c9e92-873c-4d78-831b-c94642a6e94b.mp4 | https://static.higgsfield.ai/3c4c9e92-873c-4d78-831b-c94642a6e94b.webp | https://d1xarpci4ikg0w.cloudfront.net/ea912610-3539-4e84-9c25-3607f02f5786.webp (320×242) |
| 3 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/279ca788-fa56-410a-bd27-9d1567c73b95 | https://static.higgsfield.ai/279ca788-fa56-410a-bd27-9d1567c73b95.mp4 | https://static.higgsfield.ai/279ca788-fa56-410a-bd27-9d1567c73b95.webp | https://d1xarpci4ikg0w.cloudfront.net/214d176b-b3b7-4186-8672-ee2155ce21ad.webp (320×486) |
| 4 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/21546381-0368-4424-8647-2c938f7fa7c3 | https://static.higgsfield.ai/21546381-0368-4424-8647-2c938f7fa7c3.mp4 | https://static.higgsfield.ai/21546381-0368-4424-8647-2c938f7fa7c3.webp | https://d1xarpci4ikg0w.cloudfront.net/5f857cb5-9d12-46b9-b81e-bce33259620f.webp (320×562) |
| 5 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/2955748c-1206-403e-8dad-306487359c5f | https://static.higgsfield.ai/2955748c-1206-403e-8dad-306487359c5f.mp4 | https://static.higgsfield.ai/2955748c-1206-403e-8dad-306487359c5f.webp | https://d1xarpci4ikg0w.cloudfront.net/aba504bb-94ed-4bca-a9ad-3d47043cc65b.webp (320×210) |
| 6 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/8e6280a8-d398-4260-a16e-30ab3be074b6 | https://static.higgsfield.ai/8e6280a8-d398-4260-a16e-30ab3be074b6.mp4 | https://static.higgsfield.ai/8e6280a8-d398-4260-a16e-30ab3be074b6.webp | https://d1xarpci4ikg0w.cloudfront.net/25e2e5b5-a1e6-49d2-b835-0282f0181ff5.webp (320×210) |
| 7 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/c826f62e-3223-4448-8360-b04fd0a3a78b | https://static.higgsfield.ai/c826f62e-3223-4448-8360-b04fd0a3a78b.mp4 | https://static.higgsfield.ai/c826f62e-3223-4448-8360-b04fd0a3a78b.webp | https://d1xarpci4ikg0w.cloudfront.net/6d7533f9-e107-4f01-bedc-ca869271cbf1.webp (320×210) |
| 8 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/e9e19d6c-463b-42dd-aa33-e72712e42e95 | https://static.higgsfield.ai/e9e19d6c-463b-42dd-aa33-e72712e42e95.mp4 | https://static.higgsfield.ai/e9e19d6c-463b-42dd-aa33-e72712e42e95.webp | https://d1xarpci4ikg0w.cloudfront.net/e2fd0895-fb35-4766-81a7-8faf04dfba5d.webp (320×210) |
| 9 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/5027149a-a009-4d30-bf72-cb46e7006af7 | https://static.higgsfield.ai/5027149a-a009-4d30-bf72-cb46e7006af7.mp4 | https://static.higgsfield.ai/5027149a-a009-4d30-bf72-cb46e7006af7.webp | https://d1xarpci4ikg0w.cloudfront.net/205838b7-f812-4d95-b5ce-8f9c635309ea.webp (320×182) |

Source pages: https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543, https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17. Crawled 2026-09.
