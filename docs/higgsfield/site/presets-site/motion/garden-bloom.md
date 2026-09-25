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
