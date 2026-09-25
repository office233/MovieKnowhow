# Garden Bloom — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A lush visual effect where the entire body becomes enveloped in blooming flowers and greenery, as if nature reclaims the subject.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b25600ef-238e-448a-bb07-1ff74fd0207f | `b25600ef-238e-448a-bb07-1ff74fd0207f` | -257 | none | steps 30, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b25600ef-238e-448a-bb07-1ff74fd0207f |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman in a meadow is slowly enveloped by blooming roses, ivy and greenery.
```

Use it as: upload a start image that matches the scene, select motion preset **Garden Bloom**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Garden bursts into bloom · **Best for:** Spring, life, beauty

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2f26b92b-3970-44b1-9235-2784e0acb302.webp (320×568)

### Sample videos (1)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b25600ef-238e-448a-bb07-1ff74fd0207f/29731034-c01e-4cef-83c2-3272911e0af7 | https://static.higgsfield.ai/29731034-c01e-4cef-83c2-3272911e0af7.mp4 | https://static.higgsfield.ai/29731034-c01e-4cef-83c2-3272911e0af7.webp | https://d1xarpci4ikg0w.cloudfront.net/1e03419e-6086-4623-a510-03b2bd94c3da.webp (320×568) |

Source pages: https://higgsfield.ai/motion/b25600ef-238e-448a-bb07-1ff74fd0207f. Crawled 2026-09.


## Real sample prompts (site)

1 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `29731034-c01e-4cef-83c2-3272911e0af7`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9df2a6c2-c24a-4e9b-831d-aa0f0915a77e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59165799-d857-4017-9651-d30ce8882627.mp4
  - page: https://higgsfield.ai/motion/b25600ef-238e-448a-bb07-1ff74fd0207f/29731034-c01e-4cef-83c2-3272911e0af7

```text
Subject: A bold young woman with long dark hair, standing confidently on a truck step. She wears a vivid oversized red graphic T-shirt with black lettering, a tiered cream lace skirt, and chunky black combat boots. Her pose is relaxed yet powerful, with a slightly tilted head and confident gaze.

Scene: Urban alleyway next to an open truck, with neutral-toned residential buildings and parked vehicles in the background. The setting feels gritty and authentic.

Motion: An explosion of wild and elegant flowers begins to bloom across her body. Roses, lilies, poppies, and jasmine wrap around her arms, weave through the lace layers of her skirt, and sprout along her boots. Petals emerge from her shirt sleeves and spill down the fabric, while clusters of flowers nestle in her hair and around her neckline like natural jewelry. A few blossoms trail off behind her onto the metallic truck platform.

Camera Language: Three-quarter body shot, slightly low angle to emphasize her strength and stature. Natural daylight with soft shadows enhances the vibrancy of the flowers.

Atmosphere: Bold and surreal, a collision of edgy streetwear and blooming nature. The floral overlay contrasts beautifully with her strong presence, transforming the scene into a moment of wild beauty.

Styling: Floral surrealism with street-style fusion — ultra-detailed blossoms in reds, whites, and greens, integrated seamlessly with the outfit’s texture. The lace captures the petals delicately, while the red T-shirt provides striking contrast to the organic forms. The overall aesthetic is expressive, vibrant, and rebellious.


```
