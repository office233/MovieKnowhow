# Timelapse Human — Higgsfield Motion preset

- **Category:** Camera · time (lapse)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Speeds up human motion while the environment stays natural, showing quick movements like walking, dressing, or dancing. Adds energy, urgency, or a surreal, fast-forwarded feel.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db | `b8789aa0-bced-4d69-9eca-7245ee9ce7db` | 94 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b8789aa0-bced-4d69-9eca-7245ee9ce7db |
| https://higgsfield.ai/motion/c4ce82e4-1426-46b4-b184-db8f7fe41a5f | `c4ce82e4-1426-46b4-b184-db8f7fe41a5f` | -182 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c4ce82e4-1426-46b4-b184-db8f7fe41a5f |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman gets dressed and does her makeup in fast-forward while the bedroom stays natural and calm.
```

Use it as: upload a start image that matches the scene, select motion preset **Timelapse Human**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fixed camera, human activity fast-forwarded · **Best use:** Daily routines, urban pulse · **Models:** — · **Phrase/template:** "Timelapse Human — subway platform, people rushing" · **Tips:** C1

## Related presets

- **Same category (Camera · time (lapse)):** [Hyperlapse](hyperlapse.md), [Timelapse Landscape](timelapse-landscape.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7017dbb5-ead0-4aa9-8195-1da5c00b327e.webp (320×242)
- Card preview, variant `c4ce82e4`: https://d1xarpci4ikg0w.cloudfront.net/3307796f-29f4-408a-9f4f-962fca2410c8.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/ec28fa40-b68e-4fc4-af45-672f71ab5e61 | https://static.higgsfield.ai/ec28fa40-b68e-4fc4-af45-672f71ab5e61.mp4 | https://static.higgsfield.ai/ec28fa40-b68e-4fc4-af45-672f71ab5e61.webp | https://d1xarpci4ikg0w.cloudfront.net/3e977eff-8867-4b97-a556-775f115ec061.webp (320×320) |
| 2 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/a069e1d8-756a-473d-af83-14507cbe5400 | https://static.higgsfield.ai/a069e1d8-756a-473d-af83-14507cbe5400.mp4 | https://static.higgsfield.ai/a069e1d8-756a-473d-af83-14507cbe5400.webp | https://d1xarpci4ikg0w.cloudfront.net/be1b7828-f5cc-4017-8c66-851455aae430.webp (320×320) |
| 3 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/8be4df25-668f-4de5-a988-a8e51b4dd6e6 | https://static.higgsfield.ai/8be4df25-668f-4de5-a988-a8e51b4dd6e6.mp4 | https://static.higgsfield.ai/8be4df25-668f-4de5-a988-a8e51b4dd6e6.webp | https://d1xarpci4ikg0w.cloudfront.net/d0532274-4953-4ded-87eb-327a6d84c02a.webp (320×242) |
| 4 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/de323c82-a54d-44dc-9252-5836b05d98c2 | https://static.higgsfield.ai/de323c82-a54d-44dc-9252-5836b05d98c2.mp4 | https://static.higgsfield.ai/de323c82-a54d-44dc-9252-5836b05d98c2.webp | https://d1xarpci4ikg0w.cloudfront.net/bccb4c26-89eb-4ef1-a893-3b3a47f4e200.webp (320×320) |
| 5 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de | https://static.higgsfield.ai/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de.mp4 | https://static.higgsfield.ai/0382dc1a-f2fa-42dd-ae98-0f3d3c00d2de.webp | https://d1xarpci4ikg0w.cloudfront.net/066a26c5-6222-4a1a-85c3-b3b371e1bc67.webp (320×182) |
| 6 | https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db/2c13bf69-591d-4274-9c0e-f8780fb4bc16 | https://static.higgsfield.ai/2c13bf69-591d-4274-9c0e-f8780fb4bc16.mp4 | https://static.higgsfield.ai/2c13bf69-591d-4274-9c0e-f8780fb4bc16.webp | https://d1xarpci4ikg0w.cloudfront.net/0b1a536a-b532-46ae-b502-f832d5ced5de.webp (320×136) |

Source pages: https://higgsfield.ai/motion/b8789aa0-bced-4d69-9eca-7245ee9ce7db, https://higgsfield.ai/motion/c4ce82e4-1426-46b4-b184-db8f7fe41a5f. Crawled 2026-09.
