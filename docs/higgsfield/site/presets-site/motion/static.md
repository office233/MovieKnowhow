# Static — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** The camera remains completely still, with no motion or shake. Clean, neutral, and steady—ideal for dialogue scenes or minimalist aesthetics.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e | `aab8440c-0d65-4554-b88a-7a9a5e084b6e` | -261 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=aab8440c-0d65-4554-b88a-7a9a5e084b6e |
| https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2 | `fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2` | 68 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Two friends sit on a couch talking and laughing, locked-off camera, no movement.
```

Use it as: upload a start image that matches the scene, select motion preset **Static**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2be46cee-38bd-4122-be77-3baa4985b20b.webp (320×136)
- Card preview, variant `fffe5dfd`: https://d1xarpci4ikg0w.cloudfront.net/5e5e1a70-5475-45f1-b851-944746950533.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/22e14e56-66b4-4e5d-ae2a-73b338b76fee | https://static.higgsfield.ai/22e14e56-66b4-4e5d-ae2a-73b338b76fee.mp4 | https://static.higgsfield.ai/22e14e56-66b4-4e5d-ae2a-73b338b76fee.webp | https://d1xarpci4ikg0w.cloudfront.net/06c86bca-3344-4657-a5ac-80dce44981cb.webp (320×398) |
| 2 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/c8ff0a43-3900-4b40-9299-1ed90fa69691 | https://static.higgsfield.ai/c8ff0a43-3900-4b40-9299-1ed90fa69691.mp4 | https://static.higgsfield.ai/c8ff0a43-3900-4b40-9299-1ed90fa69691.webp | https://d1xarpci4ikg0w.cloudfront.net/3318874b-1c79-49ea-bf0f-1ef4364fe887.webp (320×486) |
| 3 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/f5f36adf-a2a9-41cc-8371-7e9074a8ef10 | https://static.higgsfield.ai/f5f36adf-a2a9-41cc-8371-7e9074a8ef10.mp4 | https://static.higgsfield.ai/f5f36adf-a2a9-41cc-8371-7e9074a8ef10.webp | https://d1xarpci4ikg0w.cloudfront.net/7bc420a2-d33b-4fe2-86f2-58d8b4b1b4a9.webp (320×486) |
| 4 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/40e15535-cc4c-4c19-be32-5ab399379e84 | https://static.higgsfield.ai/40e15535-cc4c-4c19-be32-5ab399379e84.mp4 | https://static.higgsfield.ai/40e15535-cc4c-4c19-be32-5ab399379e84.webp | https://d1xarpci4ikg0w.cloudfront.net/6afe5db0-74cb-4699-a698-c5758d16f07c.webp (320×182) |
| 5 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3951e7bb-1429-43eb-82b4-e470d7cfbd6f | https://static.higgsfield.ai/3951e7bb-1429-43eb-82b4-e470d7cfbd6f.mp4 | https://static.higgsfield.ai/3951e7bb-1429-43eb-82b4-e470d7cfbd6f.webp | https://d1xarpci4ikg0w.cloudfront.net/63c76f77-534e-4528-8e8a-69e8fc3f88e5.webp (320×486) |
| 6 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/79ba0cec-4ab3-431a-a266-eb95ca65be7d | https://static.higgsfield.ai/79ba0cec-4ab3-431a-a266-eb95ca65be7d.mp4 | https://static.higgsfield.ai/79ba0cec-4ab3-431a-a266-eb95ca65be7d.webp | https://d1xarpci4ikg0w.cloudfront.net/7032aef6-3e57-4b3a-b3e1-539f26dbba29.webp (320×424) |
| 7 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3776e411-a7d9-4476-9d30-80c4aa92ad0d | https://static.higgsfield.ai/3776e411-a7d9-4476-9d30-80c4aa92ad0d.mp4 | https://static.higgsfield.ai/3776e411-a7d9-4476-9d30-80c4aa92ad0d.webp | https://d1xarpci4ikg0w.cloudfront.net/e2548025-88d2-4b68-a857-80ab1c766a49.webp (320×210) |
| 8 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3f069b1f-7124-4fb8-92b3-a9a3a99a2996 | https://static.higgsfield.ai/3f069b1f-7124-4fb8-92b3-a9a3a99a2996.mp4 | https://static.higgsfield.ai/3f069b1f-7124-4fb8-92b3-a9a3a99a2996.webp | https://d1xarpci4ikg0w.cloudfront.net/d3e79d84-bbb0-41bc-ad8b-b41b4de8e86c.webp (320×562) |
| 9 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/e6326292-87d1-4971-8005-6b44dde2f5b6 | https://static.higgsfield.ai/e6326292-87d1-4971-8005-6b44dde2f5b6.mp4 | https://static.higgsfield.ai/e6326292-87d1-4971-8005-6b44dde2f5b6.webp | https://d1xarpci4ikg0w.cloudfront.net/fcba7abf-6de8-4d12-95ec-7a70a45e18f0.webp (320×432) |
| 10 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a31e59c2-6c33-4446-9e85-bc0a53669553 | https://static.higgsfield.ai/a31e59c2-6c33-4446-9e85-bc0a53669553.mp4 | https://static.higgsfield.ai/a31e59c2-6c33-4446-9e85-bc0a53669553.webp | https://d1xarpci4ikg0w.cloudfront.net/96c53586-a1cc-427e-a65a-c704a3085204.webp (320×182) |
| 11 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a4194ed9-5136-4173-b76f-0f028c415bcc | https://static.higgsfield.ai/a4194ed9-5136-4173-b76f-0f028c415bcc.mp4 | https://static.higgsfield.ai/a4194ed9-5136-4173-b76f-0f028c415bcc.webp | https://d1xarpci4ikg0w.cloudfront.net/0650e18d-9da0-435d-8dd4-4f283179a29b.webp (320×424) |
| 12 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/04271eef-84c5-47c2-9a88-6a52cad9b1ac | https://static.higgsfield.ai/04271eef-84c5-47c2-9a88-6a52cad9b1ac.mp4 | https://static.higgsfield.ai/04271eef-84c5-47c2-9a88-6a52cad9b1ac.webp | https://d1xarpci4ikg0w.cloudfront.net/0aab473d-029a-4fc3-8575-3d4e93f8a18c.webp (320×320) |
| 13 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/bd5d9a44-7bcb-404b-b886-75df2876e3ce | https://static.higgsfield.ai/bd5d9a44-7bcb-404b-b886-75df2876e3ce.mp4 | https://static.higgsfield.ai/bd5d9a44-7bcb-404b-b886-75df2876e3ce.webp | https://d1xarpci4ikg0w.cloudfront.net/c6584d1b-2de9-4bf6-ab5f-544611e3dbfe.webp (320×424) |

Source pages: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e, https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2. Crawled 2026-09.
