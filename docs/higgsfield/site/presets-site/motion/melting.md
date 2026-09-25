# Melting — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject visibly softens and melts under intense heat—skin, clothes, or objects start to drip and distort. Evokes extreme temperature, tension, or surreal discomfort.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4 | `d8c13031-7117-4a3d-9a30-6a00d0d408b4` | 45 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d8c13031-7117-4a3d-9a30-6a00d0d408b4 |
| https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad | `ed15397e-0a3d-49e3-add4-b9529698a8ad` | -240 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ed15397e-0a3d-49e3-add4-b9529698a8ad |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man in a desert sun begins to melt, his face and suit dripping and distorting in the heat.
```

Use it as: upload a start image that matches the scene, select motion preset **Melting**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Turning Metal + Melting](turning-metal-plus-melting.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/46766895-aa51-4514-809f-f679710fb067.webp (320×182)
- Card preview, variant `ed15397e`: https://d1xarpci4ikg0w.cloudfront.net/7898c6af-e55b-4393-86da-6f580ad39bb7.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/559549dd-2884-4472-8839-070e8d09ca42 | https://static.higgsfield.ai/559549dd-2884-4472-8839-070e8d09ca42.mp4 | https://static.higgsfield.ai/559549dd-2884-4472-8839-070e8d09ca42.webp | https://d1xarpci4ikg0w.cloudfront.net/35cd7fa9-d2d8-4f23-9b50-27736d22a6a7.webp (320×210) |
| 2 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/90c61ccf-959b-4fb0-87df-c531cb8a47a2 | https://static.higgsfield.ai/90c61ccf-959b-4fb0-87df-c531cb8a47a2.mp4 | https://static.higgsfield.ai/90c61ccf-959b-4fb0-87df-c531cb8a47a2.webp | https://d1xarpci4ikg0w.cloudfront.net/20212088-878c-464a-b4d7-4d9bb66b2d67.webp (320×210) |
| 3 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/ab08836c-d8dd-4cb5-9347-8edad78d3fb1 | https://static.higgsfield.ai/ab08836c-d8dd-4cb5-9347-8edad78d3fb1.mp4 | https://static.higgsfield.ai/ab08836c-d8dd-4cb5-9347-8edad78d3fb1.webp | https://d1xarpci4ikg0w.cloudfront.net/744e8829-b84e-4a62-8f39-065a461001ac.webp (320×562) |
| 4 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/748f870f-54c2-4606-bf4d-d374c37ccad6 | https://static.higgsfield.ai/748f870f-54c2-4606-bf4d-d374c37ccad6.mp4 | https://static.higgsfield.ai/748f870f-54c2-4606-bf4d-d374c37ccad6.webp | https://d1xarpci4ikg0w.cloudfront.net/7fb3f02f-8297-46ae-aeac-d4cb2b98aba4.webp (320×182) |
| 5 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/487e2e42-4024-4daf-93b5-faed43cb9a7d | https://static.higgsfield.ai/487e2e42-4024-4daf-93b5-faed43cb9a7d.mp4 | https://static.higgsfield.ai/487e2e42-4024-4daf-93b5-faed43cb9a7d.webp | https://d1xarpci4ikg0w.cloudfront.net/96fb03ea-8c9b-422b-928c-28d00d472570.webp (320×486) |
| 6 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/e619be72-eda0-4bda-963a-d3bf8fe9893c | https://static.higgsfield.ai/e619be72-eda0-4bda-963a-d3bf8fe9893c.mp4 | https://static.higgsfield.ai/e619be72-eda0-4bda-963a-d3bf8fe9893c.webp | https://d1xarpci4ikg0w.cloudfront.net/b5f0d6b7-8896-468c-8444-983e5c215da3.webp (320×210) |
| 7 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/ae58ba32-db21-4080-afb8-d4d706f4937d | https://static.higgsfield.ai/ae58ba32-db21-4080-afb8-d4d706f4937d.mp4 | https://static.higgsfield.ai/ae58ba32-db21-4080-afb8-d4d706f4937d.webp | https://d1xarpci4ikg0w.cloudfront.net/dc1e5f37-a338-4f45-86b6-9b6f2167cd2d.webp (320×424) |
| 8 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/73013cc9-d010-440a-83b3-7336be9e0d99 | https://static.higgsfield.ai/73013cc9-d010-440a-83b3-7336be9e0d99.mp4 | https://static.higgsfield.ai/73013cc9-d010-440a-83b3-7336be9e0d99.webp | https://d1xarpci4ikg0w.cloudfront.net/97f00adc-8066-4214-b9f3-2e7a110c0e68.webp (320×242) |
| 9 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/8041b897-6b1c-4b15-9954-dc7ade3b5170 | https://static.higgsfield.ai/8041b897-6b1c-4b15-9954-dc7ade3b5170.mp4 | https://static.higgsfield.ai/8041b897-6b1c-4b15-9954-dc7ade3b5170.webp | https://d1xarpci4ikg0w.cloudfront.net/640ae750-97ac-4913-8790-a5bae8f63155.webp (320×424) |
| 10 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/e5b89ae7-68e5-4858-a66d-27f15f4fddf7 | https://static.higgsfield.ai/e5b89ae7-68e5-4858-a66d-27f15f4fddf7.mp4 | https://static.higgsfield.ai/e5b89ae7-68e5-4858-a66d-27f15f4fddf7.webp | https://d1xarpci4ikg0w.cloudfront.net/67d30698-0a91-4991-9bb5-6adc49c3c65f.webp (320×424) |

Source pages: https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4, https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad. Crawled 2026-09.
