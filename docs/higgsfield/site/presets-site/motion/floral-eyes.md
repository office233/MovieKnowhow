# Floral Eyes — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** An enchanting transformation where vibrant flowers blossom from the subject’s face, merging nature with identity.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/15f877f1-ccf8-4cc3-8269-6c7cfb028259 | `15f877f1-ccf8-4cc3-8269-6c7cfb028259` | -179 | none | steps 30, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=15f877f1-ccf8-4cc3-8269-6c7cfb028259 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Close-up portrait; vibrant flowers blossom from around the woman's eyes and across her face.
```

Use it as: upload a start image that matches the scene, select motion preset **Floral Eyes**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/f83d7de0-f77e-4b86-84c6-18244b540369.webp (320×486)

### Sample videos (1)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/15f877f1-ccf8-4cc3-8269-6c7cfb028259/3ba1b44e-30bd-4b51-a490-3d0d6c1f9df0 | https://static.higgsfield.ai/3ba1b44e-30bd-4b51-a490-3d0d6c1f9df0.mp4 | https://static.higgsfield.ai/3ba1b44e-30bd-4b51-a490-3d0d6c1f9df0.webp | https://d1xarpci4ikg0w.cloudfront.net/81e3d189-da7a-4078-aef4-1bf1c972df91.webp (320×486) |

Source pages: https://higgsfield.ai/motion/15f877f1-ccf8-4cc3-8269-6c7cfb028259. Crawled 2026-09.


## Real sample prompts (site)

1 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3ba1b44e-30bd-4b51-a490-3d0d6c1f9df0`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ff8b47df-ecdb-428a-952d-662fb949632f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a4f2883d-6aff-4b1b-bbd0-d19c4401c99e.mp4
  - page: https://higgsfield.ai/motion/15f877f1-ccf8-4cc3-8269-6c7cfb028259/3ba1b44e-30bd-4b51-a490-3d0d6c1f9df0

```text
A cinematic close-up frames a young woman bathed in warm, intimate lighting, showcasing her vivid yellow eyeshadow and glossy lips. Her gaze, thoughtful and intriguing, fills the frame. Gradually, a captivating transformation begins: her eyelashes elegantly lengthen and transform into luxurious orchid petals. The large, velvety petals slowly bloom outward from her eyes, exhibiting rich textures and captivating shades of soft purples, creamy whites, and delicate hints of yellow. These expansive blossoms gently frame her eyes, enhancing the surreal beauty and poetic intensity of the scene, accentuated by moody cinematic lighting and bold, saturated colors.
```
