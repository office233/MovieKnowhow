# Double Dolly — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** music video
- **What it does (site description, verbatim):** Both the camera and subject move together on dollies, keeping the subject perfectly still in frame while the background shifts. Creates a surreal, floating effect often used in music videos and dreamlike scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25 | `66ab5702-475d-4153-92a1-ff67cc3dec25` | 81 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=66ab5702-475d-4153-92a1-ff67cc3dec25 |
| https://higgsfield.ai/motion/e522bff4-da3b-4f7d-8c6e-f925b60979c5 | `e522bff4-da3b-4f7d-8c6e-f925b60979c5` | -185 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e522bff4-da3b-4f7d-8c6e-f925b60979c5 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A singer in a white suit glides forward, perfectly still in frame, while the neon-lit street drifts past behind him like a dream.
```

Use it as: upload a start image that matches the scene, select motion preset **Double Dolly**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7cc251c4-a8be-4b6b-b1fe-ecca65ebb16f.webp (320×210)
- Card preview, variant `e522bff4`: https://d1xarpci4ikg0w.cloudfront.net/886cac42-6af9-4a71-a9db-e40705acbef7.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/a9528ee7-aee4-4f79-afd3-8a90c5f6060c | https://static.higgsfield.ai/a9528ee7-aee4-4f79-afd3-8a90c5f6060c.mp4 | https://static.higgsfield.ai/a9528ee7-aee4-4f79-afd3-8a90c5f6060c.webp | https://d1xarpci4ikg0w.cloudfront.net/724ad6da-c642-44ae-b197-149df1540daf.webp (320×242) |
| 2 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/b0c3adab-1872-4c9c-b8ec-26b6f99e3ae4 | https://static.higgsfield.ai/b0c3adab-1872-4c9c-b8ec-26b6f99e3ae4.mp4 | https://static.higgsfield.ai/b0c3adab-1872-4c9c-b8ec-26b6f99e3ae4.webp | https://d1xarpci4ikg0w.cloudfront.net/9867365d-302d-43b7-94c1-ef9d49de5890.webp (320×210) |
| 3 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/30d75c77-a746-4645-81e7-73cad1dcdad2 | https://static.higgsfield.ai/30d75c77-a746-4645-81e7-73cad1dcdad2.mp4 | https://static.higgsfield.ai/30d75c77-a746-4645-81e7-73cad1dcdad2.webp | https://d1xarpci4ikg0w.cloudfront.net/c8eb65ad-7d3f-48ad-955b-cb4c0177e8bb.webp (320×182) |
| 4 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/f13d9ec5-3e42-4ed8-a255-53377d38b054 | https://static.higgsfield.ai/f13d9ec5-3e42-4ed8-a255-53377d38b054.mp4 | https://static.higgsfield.ai/f13d9ec5-3e42-4ed8-a255-53377d38b054.webp | https://d1xarpci4ikg0w.cloudfront.net/75ffe719-355b-470d-a891-7ecb31232c92.webp (320×210) |
| 5 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/5a7116ea-aadb-4ea0-b1c3-ce6ca3ab635c | https://static.higgsfield.ai/5a7116ea-aadb-4ea0-b1c3-ce6ca3ab635c.mp4 | https://static.higgsfield.ai/5a7116ea-aadb-4ea0-b1c3-ce6ca3ab635c.webp | https://d1xarpci4ikg0w.cloudfront.net/d5d049e0-e0d9-49fb-8241-ae075f806769.webp (320×182) |
| 6 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/7f9695be-0a51-4d02-a8e7-2381a8e94b27 | https://static.higgsfield.ai/7f9695be-0a51-4d02-a8e7-2381a8e94b27.mp4 | https://static.higgsfield.ai/7f9695be-0a51-4d02-a8e7-2381a8e94b27.webp | https://d1xarpci4ikg0w.cloudfront.net/73f61a30-7837-4198-81d7-fb2feff8a905.webp (320×182) |
| 7 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/70bb66ff-088e-4826-a706-6ee565a2b64b | https://static.higgsfield.ai/70bb66ff-088e-4826-a706-6ee565a2b64b.mp4 | https://static.higgsfield.ai/70bb66ff-088e-4826-a706-6ee565a2b64b.webp | https://d1xarpci4ikg0w.cloudfront.net/1028d982-9cba-4141-952e-dde979c7c12b.webp (320×182) |
| 8 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/96767778-08e0-4d5b-b930-1f19b1fa7946 | https://static.higgsfield.ai/96767778-08e0-4d5b-b930-1f19b1fa7946.mp4 | https://static.higgsfield.ai/96767778-08e0-4d5b-b930-1f19b1fa7946.webp | https://d1xarpci4ikg0w.cloudfront.net/b0116587-d886-4fac-8422-d05d0babed8f.webp (320×182) |
| 9 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/307f8279-c625-41d1-85c9-c427a58b6eda | https://static.higgsfield.ai/307f8279-c625-41d1-85c9-c427a58b6eda.mp4 | https://static.higgsfield.ai/307f8279-c625-41d1-85c9-c427a58b6eda.webp | https://d1xarpci4ikg0w.cloudfront.net/8c15aaee-2628-47af-81d3-e660090c16d6.webp (320×182) |
| 10 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/9d32ff7b-a153-4d37-9553-3cadffd88b63 | https://static.higgsfield.ai/9d32ff7b-a153-4d37-9553-3cadffd88b63.mp4 | https://static.higgsfield.ai/9d32ff7b-a153-4d37-9553-3cadffd88b63.webp | https://d1xarpci4ikg0w.cloudfront.net/0bd4f768-ae26-40eb-b9fa-d47ca4d047af.webp (320×242) |
| 11 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/099054f2-17f0-468d-8f2b-027278a0bac6 | https://static.higgsfield.ai/099054f2-17f0-468d-8f2b-027278a0bac6.mp4 | https://static.higgsfield.ai/099054f2-17f0-468d-8f2b-027278a0bac6.webp | https://d1xarpci4ikg0w.cloudfront.net/83e972f9-89e6-44c5-9b5f-92a8c17ec84a.webp (320×182) |
| 12 | https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25/a51c84fb-cdc5-4b5a-bafb-74061f21bd8f | https://static.higgsfield.ai/a51c84fb-cdc5-4b5a-bafb-74061f21bd8f.mp4 | https://static.higgsfield.ai/a51c84fb-cdc5-4b5a-bafb-74061f21bd8f.webp | https://d1xarpci4ikg0w.cloudfront.net/e6be1dc1-3edb-4c0f-9a91-33227ea06611.webp (320×210) |

Source pages: https://higgsfield.ai/motion/66ab5702-475d-4153-92a1-ff67cc3dec25, https://higgsfield.ai/motion/e522bff4-da3b-4f7d-8c6e-f925b60979c5. Crawled 2026-09.
