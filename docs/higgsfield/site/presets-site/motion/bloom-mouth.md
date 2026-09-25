# Bloom Mouth — Higgsfield Motion preset

- **Category:** VFX · surreal & body horror
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Person open mouth, petals or flower instead of tongue.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: surreal/glitch/multiverse → Wan 2.5; horror → Kling 2.6 or Wan 2.5.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/32332330-5b5c-4dd1-913c-e39ed6dd4c43 | `32332330-5b5c-4dd1-913c-e39ed6dd4c43` | -183 | none | steps 30, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=32332330-5b5c-4dd1-913c-e39ed6dd4c43 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman opens her mouth and flower petals unfold where her tongue should be.
```

Use it as: upload a start image that matches the scene, select motion preset **Bloom Mouth**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · surreal & body horror):** [Angel Wings](angel-wings.md), [Black Tears](black-tears.md), [Clone Explosion](clone-explosion.md), [Duplicate](duplicate.md), [Head Off](head-off.md), [Levitation](levitation.md), [Push To Glass](push-to-glass.md), [Soul Jump](soul-jump.md), [Tentacles](tentacles.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/f17e8c81-061c-4d3c-afc3-877796a8ba94.webp (320×486)

### Sample videos (1)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/32332330-5b5c-4dd1-913c-e39ed6dd4c43/48418c27-2d94-4430-bfbd-32f62bb40367 | https://static.higgsfield.ai/48418c27-2d94-4430-bfbd-32f62bb40367.mp4 | https://static.higgsfield.ai/48418c27-2d94-4430-bfbd-32f62bb40367.webp | https://d1xarpci4ikg0w.cloudfront.net/f5963af2-ea8d-4cce-8f39-c696cce04354.webp (320×486) |

Source pages: https://higgsfield.ai/motion/32332330-5b5c-4dd1-913c-e39ed6dd4c43. Crawled 2026-09.


## Real sample prompts (site)

1 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `48418c27-2d94-4430-bfbd-32f62bb40367`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7446a2a4-e6da-4b3f-9c43-9fff1c46c7e8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/19cb08e0-e8c2-481f-8f99-283033210c4d.mp4
  - page: https://higgsfield.ai/motion/32332330-5b5c-4dd1-913c-e39ed6dd4c43/48418c27-2d94-4430-bfbd-32f62bb40367

```text
Sitting casually at an outdoor café, the woman opens her mouth gently, revealing soft, delicate petals in place of her tongue. The petals are vividly colored in shades of rose-pink, lavender, and subtle ivory, creating a mesmerizing, surreal contrast with her urban-chic outfit. Her calm and unbothered expression accentuates the intriguing and dreamy atmosphere of this fantastical detail, merging effortlessly with the realistic city background.
```
