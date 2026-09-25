# Flood — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The water is the moving force — it spreads, rises, and dominates the space.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2a731e66-b6c9-472a-aa7b-aa0b90960245 | `2a731e66-b6c9-472a-aa7b-aa0b90960245` | -245 | none | steps 30, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2a731e66-b6c9-472a-aa7b-aa0b90960245 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Water floods into an elegant living room, rising fast around a woman seated on the sofa.
```

Use it as: upload a start image that matches the scene, select motion preset **Flood**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · elemental & destruction):** [Building Explosion](building-explosion.md), [Car Explosion](car-explosion.md), [Fire Breathe](fire-breathe.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c6099629-66fe-46d0-994a-7ed7d54ed522.webp (320×424)

### Sample videos (1)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2a731e66-b6c9-472a-aa7b-aa0b90960245/92c32b1b-5c7c-416c-816c-c4ad1f3250b7 | https://static.higgsfield.ai/92c32b1b-5c7c-416c-816c-c4ad1f3250b7.mp4 | https://static.higgsfield.ai/92c32b1b-5c7c-416c-816c-c4ad1f3250b7.webp | https://d1xarpci4ikg0w.cloudfront.net/e662f56e-decf-475d-bc78-29c883e948b1.webp (320×424) |

Source pages: https://higgsfield.ai/motion/2a731e66-b6c9-472a-aa7b-aa0b90960245. Crawled 2026-09.
