# Zoom In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gradually moves closer to the subject, building focus, tension, or emotional intensity
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b | `223929fa-99b1-4a61-a454-90226684901b` | 81 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=223929fa-99b1-4a61-a454-90226684901b |
| https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82 | `a3a3db5d-d3c5-4d95-b429-235ae3d1ee82` | -169 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a3a3db5d-d3c5-4d95-b429-235ae3d1ee82 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A chess player stares at the board in a dim smoky hall; slow zoom in on his face as he realizes he has lost.
```

Use it as: upload a start image that matches the scene, select motion preset **Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d319e644-2edb-4c6b-8344-f0a9934f2b7d.webp (320×176)
- Card preview, variant `a3a3db5d`: https://d1xarpci4ikg0w.cloudfront.net/95756e2a-0c18-4bbb-bbbf-78270a72910a.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/fa9e8d11-f1bf-4590-a3a6-fc59e927480e | https://static.higgsfield.ai/fa9e8d11-f1bf-4590-a3a6-fc59e927480e.mp4 | https://static.higgsfield.ai/fa9e8d11-f1bf-4590-a3a6-fc59e927480e.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8f84b4-b21a-41ee-ac83-8b8273f75185.webp (320×176) |
| 2 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/ce82761b-a2cf-46f3-a874-15338b532105 | https://static.higgsfield.ai/ce82761b-a2cf-46f3-a874-15338b532105.mp4 | https://static.higgsfield.ai/ce82761b-a2cf-46f3-a874-15338b532105.webp | https://d1xarpci4ikg0w.cloudfront.net/a609e9ac-0f67-42bb-bf04-6b27e5165844.webp (320×182) |
| 3 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031 | https://static.higgsfield.ai/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031.mp4 | https://static.higgsfield.ai/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031.webp | https://d1xarpci4ikg0w.cloudfront.net/5b662c0d-c995-4d71-bd13-ecda2657eb6f.webp (320×182) |
| 4 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/07d4393f-dca0-4667-9023-326c803aa15a | https://static.higgsfield.ai/07d4393f-dca0-4667-9023-326c803aa15a.mp4 | https://static.higgsfield.ai/07d4393f-dca0-4667-9023-326c803aa15a.webp | https://d1xarpci4ikg0w.cloudfront.net/98563e76-cab8-482e-9e41-245cd0dba9a7.webp (320×182) |
| 5 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/477346e8-f0a0-4077-bef5-46465d92e951 | https://static.higgsfield.ai/477346e8-f0a0-4077-bef5-46465d92e951.mp4 | https://static.higgsfield.ai/477346e8-f0a0-4077-bef5-46465d92e951.webp | https://d1xarpci4ikg0w.cloudfront.net/12a076db-48f0-4724-bf0d-11d97abb059e.webp (320×424) |
| 6 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/e095695f-4ea0-4d70-a41b-f70292ce0a52 | https://static.higgsfield.ai/e095695f-4ea0-4d70-a41b-f70292ce0a52.mp4 | https://static.higgsfield.ai/e095695f-4ea0-4d70-a41b-f70292ce0a52.webp | https://d1xarpci4ikg0w.cloudfront.net/e2c8e700-3af9-4611-a881-a2111d1bc98c.webp (320×242) |
| 7 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/953a18ff-b536-4b9c-af91-e6ee7cf80bc2 | https://static.higgsfield.ai/953a18ff-b536-4b9c-af91-e6ee7cf80bc2.mp4 | https://static.higgsfield.ai/953a18ff-b536-4b9c-af91-e6ee7cf80bc2.webp | https://d1xarpci4ikg0w.cloudfront.net/638f9b0d-41e3-4369-aa7d-2e4812217d50.webp (320×168) |
| 8 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/5457582d-c9f4-4a5e-aae0-9eef79633103 | https://static.higgsfield.ai/5457582d-c9f4-4a5e-aae0-9eef79633103.mp4 | https://static.higgsfield.ai/5457582d-c9f4-4a5e-aae0-9eef79633103.webp | https://d1xarpci4ikg0w.cloudfront.net/7f778e51-d9c0-4b72-9977-dd1365736c25.webp (320×168) |
| 9 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/e3a115e3-fbb1-49c1-8d87-95506f632550 | https://static.higgsfield.ai/e3a115e3-fbb1-49c1-8d87-95506f632550.mp4 | https://static.higgsfield.ai/e3a115e3-fbb1-49c1-8d87-95506f632550.webp | https://d1xarpci4ikg0w.cloudfront.net/834e2975-789b-4cfe-a372-1b03dea13474.webp (320×132) |
| 10 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/cafe1a27-39c2-41d0-8611-9e446a2b8ba2 | https://static.higgsfield.ai/cafe1a27-39c2-41d0-8611-9e446a2b8ba2.mp4 | https://static.higgsfield.ai/cafe1a27-39c2-41d0-8611-9e446a2b8ba2.webp | https://d1xarpci4ikg0w.cloudfront.net/9af0a712-6124-40f1-b6a6-d7850b541797.webp (320×176) |

Source pages: https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b, https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82. Crawled 2026-09.
