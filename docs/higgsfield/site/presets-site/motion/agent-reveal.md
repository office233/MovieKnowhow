# Agent Reveal — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject jerks or shakes their head as their face and body glitch and morph into a sharp-suited agent figure. Fast, surreal, and powerful—perfect for sudden identity shifts or secret transformations.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b | `a5e7e831-c323-4f69-926f-74f31197809b` | 75 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5e7e831-c323-4f69-926f-74f31197809b |
| https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3 | `b6eb17bb-d336-46db-99c6-34f01ae754f3` | -231 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b6eb17bb-d336-46db-99c6-34f01ae754f3 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A guy in a hoodie jerks his head and glitches into a sharp black-suited agent with sunglasses.
```

Use it as: upload a start image that matches the scene, select motion preset **Agent Reveal**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d4173638-c843-42d0-abb1-6bae37ff34e6.webp (320×182)
- Card preview, variant `b6eb17bb`: https://d1xarpci4ikg0w.cloudfront.net/b9373a4a-bbd9-4a53-afd4-d60e30e47a65.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/83303d5c-1556-421b-b48f-3388b0d41f05 | https://static.higgsfield.ai/83303d5c-1556-421b-b48f-3388b0d41f05.mp4 | https://static.higgsfield.ai/83303d5c-1556-421b-b48f-3388b0d41f05.webp | https://d1xarpci4ikg0w.cloudfront.net/4472403b-c733-48e1-8b0e-3ff576fd7f7d.webp (320×182) |
| 2 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904 | https://static.higgsfield.ai/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904.mp4 | https://static.higgsfield.ai/c6bad2dc-b4bc-4d95-a170-2a6c7a59d904.webp | https://d1xarpci4ikg0w.cloudfront.net/92cdb979-f505-4153-b499-6a363eeb79d4.webp (320×486) |
| 3 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/265b0843-a63d-44a8-aa9c-3117c5450742 | https://static.higgsfield.ai/265b0843-a63d-44a8-aa9c-3117c5450742.mp4 | https://static.higgsfield.ai/265b0843-a63d-44a8-aa9c-3117c5450742.webp | https://d1xarpci4ikg0w.cloudfront.net/30b1eacb-158a-4c56-aa26-ff95b1db6a5a.webp (320×486) |
| 4 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/e526c39b-2312-4f50-8f27-1ad1ebe5d920 | https://static.higgsfield.ai/e526c39b-2312-4f50-8f27-1ad1ebe5d920.mp4 | https://static.higgsfield.ai/e526c39b-2312-4f50-8f27-1ad1ebe5d920.webp | https://d1xarpci4ikg0w.cloudfront.net/9e7afb35-134f-43e9-8187-bda4879a3fab.webp (320×486) |
| 5 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/09c36559-b8e3-437d-b041-c6392f9b81f1 | https://static.higgsfield.ai/09c36559-b8e3-437d-b041-c6392f9b81f1.mp4 | https://static.higgsfield.ai/09c36559-b8e3-437d-b041-c6392f9b81f1.webp | https://d1xarpci4ikg0w.cloudfront.net/aa0f9ed6-9beb-4047-ab85-1874f0cd4e47.webp (320×486) |
| 6 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/e37beb80-8cca-4d1d-82d7-76e055e529dd | https://static.higgsfield.ai/e37beb80-8cca-4d1d-82d7-76e055e529dd.mp4 | https://static.higgsfield.ai/e37beb80-8cca-4d1d-82d7-76e055e529dd.webp | https://d1xarpci4ikg0w.cloudfront.net/ec927c09-ebea-461b-85f6-3b6288a59f4b.webp (320×182) |
| 7 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43 | https://static.higgsfield.ai/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43.mp4 | https://static.higgsfield.ai/7c9c2491-48aa-4241-9f07-f2d1f3ba8b43.webp | https://d1xarpci4ikg0w.cloudfront.net/5e9fe161-f240-4574-80ba-035b8df139b7.webp (320×486) |
| 8 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/484e20f8-d4f1-49f5-b336-3a557c92d8e0 | https://static.higgsfield.ai/484e20f8-d4f1-49f5-b336-3a557c92d8e0.mp4 | https://static.higgsfield.ai/484e20f8-d4f1-49f5-b336-3a557c92d8e0.webp | https://d1xarpci4ikg0w.cloudfront.net/d3bdde35-a524-4a12-9620-f3dc1fd6e32d.webp (320×210) |
| 9 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/8698cc1a-8432-4b17-8011-160ca88c1b05 | https://static.higgsfield.ai/8698cc1a-8432-4b17-8011-160ca88c1b05.mp4 | https://static.higgsfield.ai/8698cc1a-8432-4b17-8011-160ca88c1b05.webp | https://d1xarpci4ikg0w.cloudfront.net/ec4163ae-0f94-4ad0-aac7-1df98bd9cb32.webp (320×182) |
| 10 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/25320337-f658-4b47-bdfb-98097756c3bd | https://static.higgsfield.ai/25320337-f658-4b47-bdfb-98097756c3bd.mp4 | https://static.higgsfield.ai/25320337-f658-4b47-bdfb-98097756c3bd.webp | https://d1xarpci4ikg0w.cloudfront.net/15432e43-f46f-45d5-afae-a2481cce2d0f.webp (320×486) |
| 11 | https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b/ae9be239-b3ad-458a-a164-fcd3378ae288 | https://static.higgsfield.ai/ae9be239-b3ad-458a-a164-fcd3378ae288.mp4 | https://static.higgsfield.ai/ae9be239-b3ad-458a-a164-fcd3378ae288.webp | https://d1xarpci4ikg0w.cloudfront.net/c32600ac-0357-4586-bf5f-a2bf4e55eaf3.webp (320×320) |

Source pages: https://higgsfield.ai/motion/a5e7e831-c323-4f69-926f-74f31197809b, https://higgsfield.ai/motion/b6eb17bb-d336-46db-99c6-34f01ae754f3. Crawled 2026-09.
