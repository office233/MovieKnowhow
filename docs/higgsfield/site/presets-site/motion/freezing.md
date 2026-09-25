# Freezing — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject slowly turns to ice—skin frosts over, breath becomes visible, and motion stops. Cold, dramatic, and perfect for supernatural, winter, or time-stopping effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86 | `777f1604-afee-406d-a711-bf1e0ea23c86` | -302 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=777f1604-afee-406d-a711-bf1e0ea23c86 |
| https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432 | `8b0ab021-b240-42bd-a6b5-4e28e8f19432` | -177 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8b0ab021-b240-42bd-a6b5-4e28e8f19432 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man stands in a snowy forest as frost spreads over his skin, his breath fogs, and he turns to ice.
```

Use it as: upload a start image that matches the scene, select motion preset **Freezing**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or scene freezes into ice · **Best for:** Winter, magic, time-stop

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3e747c15-6a58-4afd-ad6c-a2f7dc581658.webp (320×210)
- Card preview, variant `8b0ab021`: https://d1xarpci4ikg0w.cloudfront.net/e1b38550-88d8-4327-9e55-8df2c9118686.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/4a3b2c6e-95b3-4eeb-86a6-5502477698d7 | https://static.higgsfield.ai/4a3b2c6e-95b3-4eeb-86a6-5502477698d7.mp4 | https://static.higgsfield.ai/4a3b2c6e-95b3-4eeb-86a6-5502477698d7.webp | https://d1xarpci4ikg0w.cloudfront.net/02d31ce4-5296-416e-be74-be7db8aa32d2.webp (320×562) |
| 2 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/cf61da33-7d42-4bf7-bdde-cd392ab727db | https://static.higgsfield.ai/cf61da33-7d42-4bf7-bdde-cd392ab727db.mp4 | https://static.higgsfield.ai/cf61da33-7d42-4bf7-bdde-cd392ab727db.webp | https://d1xarpci4ikg0w.cloudfront.net/fb793113-e87f-41bb-a43d-a07432b493e3.webp (320×432) |
| 3 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/af5d9bad-f2e1-42e9-81dc-73dd931043e9 | https://static.higgsfield.ai/af5d9bad-f2e1-42e9-81dc-73dd931043e9.mp4 | https://static.higgsfield.ai/af5d9bad-f2e1-42e9-81dc-73dd931043e9.webp | https://d1xarpci4ikg0w.cloudfront.net/83c96f6d-5b02-4f05-a947-fedd303511ea.webp (320×236) |
| 4 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/9fc91c5d-02e2-41be-8058-a4b7469ae3a9 | https://static.higgsfield.ai/9fc91c5d-02e2-41be-8058-a4b7469ae3a9.mp4 | https://static.higgsfield.ai/9fc91c5d-02e2-41be-8058-a4b7469ae3a9.webp | https://d1xarpci4ikg0w.cloudfront.net/e3b8a5ee-a06f-4b3d-99ed-8c3085343fcc.webp (320×432) |
| 5 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/da003c0f-3ffc-4e3a-84f1-063071fa51c6 | https://static.higgsfield.ai/da003c0f-3ffc-4e3a-84f1-063071fa51c6.mp4 | https://static.higgsfield.ai/da003c0f-3ffc-4e3a-84f1-063071fa51c6.webp | https://d1xarpci4ikg0w.cloudfront.net/ee428b11-b28a-49b4-a20b-801b5e02f121.webp (320×486) |
| 6 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/e1487d2e-c86b-4a44-bb7f-9dea43e139b2 | https://static.higgsfield.ai/e1487d2e-c86b-4a44-bb7f-9dea43e139b2.mp4 | https://static.higgsfield.ai/e1487d2e-c86b-4a44-bb7f-9dea43e139b2.webp | https://d1xarpci4ikg0w.cloudfront.net/d1b3c9f7-87fb-4888-b057-e12d69e13d43.webp (320×210) |
| 7 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d | https://static.higgsfield.ai/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d.mp4 | https://static.higgsfield.ai/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d.webp | https://d1xarpci4ikg0w.cloudfront.net/1e677f34-c2b9-4337-ae3f-54a05c5ad4a1.webp (320×210) |
| 8 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/b34167f1-323d-4395-8eda-079777b8c043 | https://static.higgsfield.ai/b34167f1-323d-4395-8eda-079777b8c043.mp4 | https://static.higgsfield.ai/b34167f1-323d-4395-8eda-079777b8c043.webp | https://d1xarpci4ikg0w.cloudfront.net/9616ad69-979e-4a70-9aab-a70da6a10591.webp (320×210) |
| 9 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/d243c787-8ad0-47da-a30c-450f73489962 | https://static.higgsfield.ai/d243c787-8ad0-47da-a30c-450f73489962.mp4 | https://static.higgsfield.ai/d243c787-8ad0-47da-a30c-450f73489962.webp | https://d1xarpci4ikg0w.cloudfront.net/3419475b-39c2-4e6d-90a2-61af0444e4df.webp (320×210) |
| 10 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/d19909d3-68f9-4f0c-a43b-d9fa30a572ec | https://static.higgsfield.ai/d19909d3-68f9-4f0c-a43b-d9fa30a572ec.mp4 | https://static.higgsfield.ai/d19909d3-68f9-4f0c-a43b-d9fa30a572ec.webp | https://d1xarpci4ikg0w.cloudfront.net/304b0a59-3c7d-4c1a-9494-aa45d84d8075.webp (320×210) |
| 11 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a | https://static.higgsfield.ai/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a.mp4 | https://static.higgsfield.ai/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a.webp | https://d1xarpci4ikg0w.cloudfront.net/79073556-c8fc-4aa7-92ef-3a37488989c7.webp (320×398) |

Source pages: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86, https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432. Crawled 2026-09.
