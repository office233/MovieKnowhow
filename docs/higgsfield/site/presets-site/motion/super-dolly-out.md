# Super Dolly Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Smoothly pulls the camera away from the subject, revealing more of the scene. Perfect for dramatic exits, emotional distance, or scene transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd | `9dda3fb8-b917-457a-a995-72233031b1fd` | 61 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9dda3fb8-b917-457a-a995-72233031b1fd |
| https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca | `d66685ce-8c2b-4aeb-8d4a-195d474c7eca` | -193 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d66685ce-8c2b-4aeb-8d4a-195d474c7eca |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl in a red coat stands on a rooftop; the camera pulls far back to reveal the entire burning city skyline behind her.
```

Use it as: upload a start image that matches the scene, select motion preset **Super Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Exaggerated fast pull back · **Best use:** Dramatic reveal of scale, sudden context shift · **Models:** Sora 2† (fallback: Seedance 2.0, Hailuo 2.3) · **Phrase/template:** "Super Dolly Out to reveal the entire burning city" · **Tips:** Pairs with the Anamorphic style

## Related presets

- **Mixes that use this preset:** [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md)
- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/80a6a808-2a7d-42b5-b33b-05b49dbaa8e9.webp (320×180)
- Card preview, variant `d66685ce`: https://d1xarpci4ikg0w.cloudfront.net/ee9451aa-da82-4c44-9cb4-f903c88ab800.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/8ead4a81-8efc-44a2-99f4-783fdc1c1331 | https://static.higgsfield.ai/8ead4a81-8efc-44a2-99f4-783fdc1c1331.mp4 | https://static.higgsfield.ai/8ead4a81-8efc-44a2-99f4-783fdc1c1331.webp | https://d1xarpci4ikg0w.cloudfront.net/5af2bca6-6f83-4857-89ce-fe1601768bf7.webp (320×210) |
| 2 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445 | https://static.higgsfield.ai/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445.mp4 | https://static.higgsfield.ai/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445.webp | https://d1xarpci4ikg0w.cloudfront.net/4a4980b7-4fd8-49a5-9ae9-d6dfc40c611e.webp (320×210) |
| 3 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/b9946b17-9b3e-4fd0-8143-37d7b2597d27 | https://static.higgsfield.ai/b9946b17-9b3e-4fd0-8143-37d7b2597d27.mp4 | https://static.higgsfield.ai/b9946b17-9b3e-4fd0-8143-37d7b2597d27.webp | https://d1xarpci4ikg0w.cloudfront.net/f6a037d9-5ad5-4228-b8d4-3512ee7ab554.webp (320×562) |
| 4 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/0cea5fb1-7b8c-474a-a889-cd4985811550 | https://static.higgsfield.ai/0cea5fb1-7b8c-474a-a889-cd4985811550.mp4 | https://static.higgsfield.ai/0cea5fb1-7b8c-474a-a889-cd4985811550.webp | https://d1xarpci4ikg0w.cloudfront.net/6d03fba3-5b7e-4275-b945-cefba8dea420.webp (320×132) |
| 5 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e14fbf8d-2e4c-4724-9efb-2253737dea63 | https://static.higgsfield.ai/e14fbf8d-2e4c-4724-9efb-2253737dea63.mp4 | https://static.higgsfield.ai/e14fbf8d-2e4c-4724-9efb-2253737dea63.webp | https://d1xarpci4ikg0w.cloudfront.net/2aa21dd9-752c-40c9-9a4a-fc9c0c57258a.webp (320×236) |
| 6 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d | https://static.higgsfield.ai/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d.mp4 | https://static.higgsfield.ai/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d.webp | https://d1xarpci4ikg0w.cloudfront.net/64282471-a6f8-483d-9752-2b038352e4f7.webp (320×182) |
| 7 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/985502c7-4046-4344-9864-219a091ecb8b | https://static.higgsfield.ai/985502c7-4046-4344-9864-219a091ecb8b.mp4 | https://static.higgsfield.ai/985502c7-4046-4344-9864-219a091ecb8b.webp | https://d1xarpci4ikg0w.cloudfront.net/4fa7c0c8-900e-4b15-a5b5-705242c13f2d.webp (320×182) |
| 8 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e3222bc5-d0ad-48ba-b98d-281a6e899039 | https://static.higgsfield.ai/e3222bc5-d0ad-48ba-b98d-281a6e899039.mp4 | https://static.higgsfield.ai/e3222bc5-d0ad-48ba-b98d-281a6e899039.webp | https://d1xarpci4ikg0w.cloudfront.net/53e5efac-e9ba-4e53-bda5-8631250b7db0.webp (320×210) |
| 9 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/66c75f2d-99e5-4c73-84a2-a49d74729f9e | https://static.higgsfield.ai/66c75f2d-99e5-4c73-84a2-a49d74729f9e.mp4 | https://static.higgsfield.ai/66c75f2d-99e5-4c73-84a2-a49d74729f9e.webp | https://d1xarpci4ikg0w.cloudfront.net/f3639e13-a3c5-4052-a606-0500750999f2.webp (320×320) |
| 10 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573 | https://static.higgsfield.ai/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573.mp4 | https://static.higgsfield.ai/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573.webp | https://d1xarpci4ikg0w.cloudfront.net/54897999-8ce9-42bf-ba66-e16c6d92b51b.webp (320×182) |

Source pages: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd, https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca. Crawled 2026-09.
