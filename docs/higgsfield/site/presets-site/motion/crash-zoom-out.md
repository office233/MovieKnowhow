# Crash Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Rapidly zooms out from the subject to reveal the full scene or create a sense of surprise, urgency, or comic effect. Great for dramatic reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee | `3972c090-a448-4fd4-b8f0-cb71b4b523ee` | -210 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=3972c090-a448-4fd4-b8f0-cb71b4b523ee |
| https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62 | `d5cf181f-b75b-4827-8614-f08953b92e62` | 73 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d5cf181f-b75b-4827-8614-f08953b92e62 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A chef proudly lifts a tiny cupcake; crash zoom out reveals the entire kitchen is on fire behind him.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Rapid, sudden zoom away · **Best use:** Disconnection, sudden wider context · **Models:** — · **Phrase/template:** "Crash Zoom Out revealing the battlefield" · **Tips:** —

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2c74d502-ebb4-478a-8e3d-cf09dfb5a40e.webp (320×240)
- Card preview, variant `d5cf181f`: https://d1xarpci4ikg0w.cloudfront.net/0a366c4f-c829-4cb9-815e-dd6f6ec24ce1.webp

### Sample videos (20; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/8ae5bd45-2176-4de4-9aec-45264a87b953 | https://static.higgsfield.ai/8ae5bd45-2176-4de4-9aec-45264a87b953.mp4 | https://static.higgsfield.ai/8ae5bd45-2176-4de4-9aec-45264a87b953.webp | https://d1xarpci4ikg0w.cloudfront.net/8e17d7f3-4ec2-48ca-8134-78822b638e15.webp (320×176) |
| 2 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/87c085cc-0cbd-43f6-b52a-09ea76b0de5b | https://static.higgsfield.ai/87c085cc-0cbd-43f6-b52a-09ea76b0de5b.mp4 | https://static.higgsfield.ai/87c085cc-0cbd-43f6-b52a-09ea76b0de5b.webp | https://d1xarpci4ikg0w.cloudfront.net/4794a371-5797-460b-b8b4-ec5c362de55a.webp (320×174) |
| 3 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/91c74b1b-dc59-4a3b-814b-3ee1e7914395 | https://static.higgsfield.ai/91c74b1b-dc59-4a3b-814b-3ee1e7914395.mp4 | https://static.higgsfield.ai/91c74b1b-dc59-4a3b-814b-3ee1e7914395.webp | https://d1xarpci4ikg0w.cloudfront.net/2ff103e4-33f5-45ac-b6f2-cf16f245600b.webp (320×180) |
| 4 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/82853236-976c-470e-ac71-0c6e6dd14e12 | https://static.higgsfield.ai/82853236-976c-470e-ac71-0c6e6dd14e12.mp4 | https://static.higgsfield.ai/82853236-976c-470e-ac71-0c6e6dd14e12.webp | https://d1xarpci4ikg0w.cloudfront.net/c4b525a0-a61d-43fc-93c3-9a6e67439dac.webp (320×192) |
| 5 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/864db28b-d784-4104-98e9-18d34674d1c9 | https://static.higgsfield.ai/864db28b-d784-4104-98e9-18d34674d1c9.mp4 | https://static.higgsfield.ai/864db28b-d784-4104-98e9-18d34674d1c9.webp | https://d1xarpci4ikg0w.cloudfront.net/de49989d-554d-484e-becb-68ca65d56cec.webp (320×236) |
| 6 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/35210a51-08d8-4405-beb2-d0efee11d725 | https://static.higgsfield.ai/35210a51-08d8-4405-beb2-d0efee11d725.mp4 | https://static.higgsfield.ai/35210a51-08d8-4405-beb2-d0efee11d725.webp | https://d1xarpci4ikg0w.cloudfront.net/d00ae63d-03ee-44d9-a349-117f47d885f8.webp (320×180) |
| 7 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/b01a4cef-5d96-43b0-ae64-7e78d7115132 | https://static.higgsfield.ai/b01a4cef-5d96-43b0-ae64-7e78d7115132.mp4 | https://static.higgsfield.ai/b01a4cef-5d96-43b0-ae64-7e78d7115132.webp | https://d1xarpci4ikg0w.cloudfront.net/7c1a39a0-cc38-4da4-9bd0-bff1f550733b.webp (320×182) |
| 8 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6 | https://static.higgsfield.ai/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6.mp4 | https://static.higgsfield.ai/41e4f6a9-d7d1-4f84-a417-8a85f1d8bcc6.webp | https://d1xarpci4ikg0w.cloudfront.net/6249479a-713f-4355-84ef-85f3816e704f.webp (320×424) |
| 9 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/8f74c0a8-9326-4110-8e1f-98bfd95f831a | https://static.higgsfield.ai/8f74c0a8-9326-4110-8e1f-98bfd95f831a.mp4 | https://static.higgsfield.ai/8f74c0a8-9326-4110-8e1f-98bfd95f831a.webp | https://d1xarpci4ikg0w.cloudfront.net/4d3e7766-a786-4e0c-b3a3-84cf79598b1b.webp (320×242) |
| 10 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/fbec0148-693b-4645-9de5-359bd1a6882b | https://static.higgsfield.ai/fbec0148-693b-4645-9de5-359bd1a6882b.mp4 | https://static.higgsfield.ai/fbec0148-693b-4645-9de5-359bd1a6882b.webp | https://d1xarpci4ikg0w.cloudfront.net/9845d189-cb51-46c0-be15-5a6c1dda976c.webp (320×242) |
| 11 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/568dffe3-6314-48c1-9449-2398fce76929 | https://static.higgsfield.ai/568dffe3-6314-48c1-9449-2398fce76929.mp4 | https://static.higgsfield.ai/568dffe3-6314-48c1-9449-2398fce76929.webp | https://d1xarpci4ikg0w.cloudfront.net/9979e5b6-a87a-4457-b6a1-6fe481d89704.webp (320×182) |
| 12 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/c3f80212-931d-463e-bf7e-a0f892068e57 | https://static.higgsfield.ai/c3f80212-931d-463e-bf7e-a0f892068e57.mp4 | https://static.higgsfield.ai/c3f80212-931d-463e-bf7e-a0f892068e57.webp | https://d1xarpci4ikg0w.cloudfront.net/575c4001-822c-44a8-9ad4-9886e3e89c01.webp (320×182) |
| 13 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5a8be6b5-b93e-4ab8-9651-649e4c87869b | https://static.higgsfield.ai/5a8be6b5-b93e-4ab8-9651-649e4c87869b.mp4 | https://static.higgsfield.ai/5a8be6b5-b93e-4ab8-9651-649e4c87869b.webp | https://d1xarpci4ikg0w.cloudfront.net/24ac490d-5885-42d7-9bd2-5c7754c304c5.webp (320×242) |
| 14 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5a65510d-e4f7-429d-b179-a923ca07bbe0 | https://static.higgsfield.ai/5a65510d-e4f7-429d-b179-a923ca07bbe0.mp4 | https://static.higgsfield.ai/5a65510d-e4f7-429d-b179-a923ca07bbe0.webp | https://d1xarpci4ikg0w.cloudfront.net/0519b692-0744-4bde-b520-5275c7da212d.webp (320×182) |
| 15 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/5914955d-6a42-47b2-8a91-a01fb0d3d775 | https://static.higgsfield.ai/5914955d-6a42-47b2-8a91-a01fb0d3d775.mp4 | https://static.higgsfield.ai/5914955d-6a42-47b2-8a91-a01fb0d3d775.webp | https://d1xarpci4ikg0w.cloudfront.net/6df67bf6-9754-48bb-b192-cd8a6886e93e.webp (320×424) |
| 16 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/75f23973-9d59-4047-bcd5-ea461faebd75 | https://static.higgsfield.ai/75f23973-9d59-4047-bcd5-ea461faebd75.mp4 | https://static.higgsfield.ai/75f23973-9d59-4047-bcd5-ea461faebd75.webp | https://d1xarpci4ikg0w.cloudfront.net/ed5da7ea-6ddc-43e3-a1f3-2a73a2dbb1d1.webp (320×242) |
| 17 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/2e914157-8bd5-4c8a-a56c-cce94b98e3b0 | https://static.higgsfield.ai/2e914157-8bd5-4c8a-a56c-cce94b98e3b0.mp4 | https://static.higgsfield.ai/2e914157-8bd5-4c8a-a56c-cce94b98e3b0.webp | https://d1xarpci4ikg0w.cloudfront.net/df4c40ef-69f6-4828-9e7e-b48112229da5.webp (320×210) |
| 18 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/3d7138b4-5e7a-4390-8116-4430807845bb | https://static.higgsfield.ai/3d7138b4-5e7a-4390-8116-4430807845bb.mp4 | https://static.higgsfield.ai/3d7138b4-5e7a-4390-8116-4430807845bb.webp | https://d1xarpci4ikg0w.cloudfront.net/085da2da-062a-4e3a-a7ce-f93f42334273.webp (320×210) |
| 19 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/97394223-51cf-4306-890d-4d33560696d6 | https://static.higgsfield.ai/97394223-51cf-4306-890d-4d33560696d6.mp4 | https://static.higgsfield.ai/97394223-51cf-4306-890d-4d33560696d6.webp | https://d1xarpci4ikg0w.cloudfront.net/eb728c62-178f-4387-8730-8b79e39733b1.webp (320×326) |
| 20 | https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee/12ddc9c7-c946-4bc7-91be-76c5e686fa5c | https://static.higgsfield.ai/12ddc9c7-c946-4bc7-91be-76c5e686fa5c.mp4 | https://static.higgsfield.ai/12ddc9c7-c946-4bc7-91be-76c5e686fa5c.webp | https://d1xarpci4ikg0w.cloudfront.net/82d1a768-8c44-4efe-a1f8-c232eaa3a3d9.webp (320×210) |

Source pages: https://higgsfield.ai/motion/3972c090-a448-4fd4-b8f0-cb71b4b523ee, https://higgsfield.ai/motion/d5cf181f-b75b-4827-8614-f08953b92e62. Crawled 2026-09.
