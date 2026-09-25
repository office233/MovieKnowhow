# Super Dolly In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Smoothly moves the camera straight toward the subject for a focused, cinematic effect. Great for building tension, emotion, or spotlighting key moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d | `1c2140b0-0847-4a74-a3d9-f0298aec817d` | 85 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1c2140b0-0847-4a74-a3d9-f0298aec817d |
| https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a | `6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a` | -194 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A detective notices a bloody handprint on a fogged window; the camera pushes straight in on the handprint, building tension.
```

Use it as: upload a start image that matches the scene, select motion preset **Super Dolly In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Exaggerated fast rush toward the subject · **Best use:** Sudden shock, urgent revelation · **Models:** — · **Phrase/template:** "Super Dolly In on the handprint on the window" · **Tips:** Similar to Crash Zoom but a physical move

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2938ff18-3089-4324-86e5-e5823927c295.webp (320×182)
- Card preview, variant `6a6fb1b9`: https://d1xarpci4ikg0w.cloudfront.net/89a0c32b-1654-48c3-aed4-98e17388db47.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/472ef93a-2f0e-4efa-b69f-84de4ed6809f | https://static.higgsfield.ai/472ef93a-2f0e-4efa-b69f-84de4ed6809f.mp4 | https://static.higgsfield.ai/472ef93a-2f0e-4efa-b69f-84de4ed6809f.webp | https://d1xarpci4ikg0w.cloudfront.net/aaded9e4-b554-486f-8731-9789bc986654.webp (320×432) |
| 2 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e | https://static.higgsfield.ai/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e.mp4 | https://static.higgsfield.ai/ad8b7ea9-f74a-45f4-8fe0-f692bf6a868e.webp | https://d1xarpci4ikg0w.cloudfront.net/4a6ee7c1-6fba-404d-8888-c72aac933d24.webp (320×236) |
| 3 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/574e1d86-870a-4c63-9106-906e04cc414c | https://static.higgsfield.ai/574e1d86-870a-4c63-9106-906e04cc414c.mp4 | https://static.higgsfield.ai/574e1d86-870a-4c63-9106-906e04cc414c.webp | https://d1xarpci4ikg0w.cloudfront.net/2c4d1e52-fdf7-421b-8828-52dce5693324.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/6433e2f3-4909-4c04-8639-bbbe91739f0e | https://static.higgsfield.ai/6433e2f3-4909-4c04-8639-bbbe91739f0e.mp4 | https://static.higgsfield.ai/6433e2f3-4909-4c04-8639-bbbe91739f0e.webp | https://d1xarpci4ikg0w.cloudfront.net/3e14739c-8c8f-41f8-904c-9d3a5ffa871f.webp (320×424) |
| 5 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/37782437-ca95-42cc-b023-94141e47a169 | https://static.higgsfield.ai/37782437-ca95-42cc-b023-94141e47a169.mp4 | https://static.higgsfield.ai/37782437-ca95-42cc-b023-94141e47a169.webp | https://d1xarpci4ikg0w.cloudfront.net/f9280ce8-999b-49f2-9cf9-a9e3de581b17.webp (320×424) |
| 6 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/c7fb897d-15d7-4497-8812-73a413fb3f71 | https://static.higgsfield.ai/c7fb897d-15d7-4497-8812-73a413fb3f71.mp4 | https://static.higgsfield.ai/c7fb897d-15d7-4497-8812-73a413fb3f71.webp | https://d1xarpci4ikg0w.cloudfront.net/bb2a0ff0-26dd-49ab-b680-81d6b58d0e72.webp (320×242) |
| 7 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/5fbe9b17-f07b-4ec3-a505-4a83fb36c730 | https://static.higgsfield.ai/5fbe9b17-f07b-4ec3-a505-4a83fb36c730.mp4 | https://static.higgsfield.ai/5fbe9b17-f07b-4ec3-a505-4a83fb36c730.webp | https://d1xarpci4ikg0w.cloudfront.net/6d48ae46-0234-4a41-bd31-1834570e5110.webp (320×486) |
| 8 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/2798109b-5cb4-4d48-8a3d-cc3630be22b7 | https://static.higgsfield.ai/2798109b-5cb4-4d48-8a3d-cc3630be22b7.mp4 | https://static.higgsfield.ai/2798109b-5cb4-4d48-8a3d-cc3630be22b7.webp | https://d1xarpci4ikg0w.cloudfront.net/d22174d1-766d-4599-82cf-5aeb4b371c51.webp (320×182) |
| 9 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/a4454187-c9c8-458f-aadd-c6d70305a156 | https://static.higgsfield.ai/a4454187-c9c8-458f-aadd-c6d70305a156.mp4 | https://static.higgsfield.ai/a4454187-c9c8-458f-aadd-c6d70305a156.webp | https://d1xarpci4ikg0w.cloudfront.net/a1db6617-035c-4141-883b-2b27c678efeb.webp (320×182) |
| 10 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/71871e70-47b8-44e6-b607-8fc20cb87e35 | https://static.higgsfield.ai/71871e70-47b8-44e6-b607-8fc20cb87e35.mp4 | https://static.higgsfield.ai/71871e70-47b8-44e6-b607-8fc20cb87e35.webp | https://d1xarpci4ikg0w.cloudfront.net/2e909af1-0b03-40b7-a1a9-bb1b68483b84.webp (320×210) |
| 11 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/936b32c9-67a9-4aab-a16e-dd329281bb78 | https://static.higgsfield.ai/936b32c9-67a9-4aab-a16e-dd329281bb78.mp4 | https://static.higgsfield.ai/936b32c9-67a9-4aab-a16e-dd329281bb78.webp | https://d1xarpci4ikg0w.cloudfront.net/fc2ff6a5-37ab-4da5-a243-9e1afcf9fc88.webp (320×210) |
| 12 | https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d/f240a57c-32aa-4512-8874-6b2fa6750e51 | https://static.higgsfield.ai/f240a57c-32aa-4512-8874-6b2fa6750e51.mp4 | https://static.higgsfield.ai/f240a57c-32aa-4512-8874-6b2fa6750e51.webp | https://d1xarpci4ikg0w.cloudfront.net/65ed7f31-fc91-41c9-acd6-83baa205acbc.webp (320×210) |

Source pages: https://higgsfield.ai/motion/1c2140b0-0847-4a74-a3d9-f0298aec817d, https://higgsfield.ai/motion/6a6fb1b9-28ea-44c8-9be4-e5d8c6ab1f3a. Crawled 2026-09.
