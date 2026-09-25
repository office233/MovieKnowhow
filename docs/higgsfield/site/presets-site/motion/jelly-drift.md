# Jelly Drift — Higgsfield Motion preset

- **Category:** VFX · creatures & ambient
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Three translucent glowing jellyfish float into the frame behind her, moving elegantly through the air. The woman interacts gently with the jellyfish.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: nature/ambient presets → Veo 3 or Wan 2.5.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/61b802b1-4594-4758-9c4a-524f7bb39840 | `61b802b1-4594-4758-9c4a-524f7bb39840` | -184 | none | steps 30, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=61b802b1-4594-4758-9c4a-524f7bb39840 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Three glowing translucent jellyfish float in behind a woman; she gently reaches out to touch one.
```

Use it as: upload a start image that matches the scene, select motion preset **Jelly Drift**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · creatures & ambient):** [Floating Fish](floating-fish.md), [Glowing Fish](glowing-fish.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/cfd993a5-19a7-4bb4-a3b7-0ace8b7ba505.webp (320×562)

### Sample videos (1)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/61b802b1-4594-4758-9c4a-524f7bb39840/d678a45a-3a3f-4a53-b46f-03772a97a4bd | https://static.higgsfield.ai/d678a45a-3a3f-4a53-b46f-03772a97a4bd.mp4 | https://static.higgsfield.ai/d678a45a-3a3f-4a53-b46f-03772a97a4bd.webp | https://d1xarpci4ikg0w.cloudfront.net/ef3a90e3-7d96-49aa-b75e-aedc04d4ba0d.webp (320×562) |

Source pages: https://higgsfield.ai/motion/61b802b1-4594-4758-9c4a-524f7bb39840. Crawled 2026-09.


## Real sample prompts (site)

1 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `d678a45a-3a3f-4a53-b46f-03772a97a4bd`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4043a663-700e-46a9-a318-e933b2855d40.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4d31362d-548e-472f-9789-1ef546466c30.mp4
  - page: https://higgsfield.ai/motion/61b802b1-4594-4758-9c4a-524f7bb39840/d678a45a-3a3f-4a53-b46f-03772a97a4bd

```text
In a softly lit, airy room filled with gentle sunlight, a woman stands at the center, her relaxed posture and warm smile exuding tranquility and joy. The camera remains static, capturing the serene moment as three translucent glowing jellyfish float into the frame behind her, moving elegantly through the air like specters of the deep sea. The woman interacts gently with the jellyfish, her hand reaching out in awe as bubbles of air drift upwards, reminiscent of an underwater world. This captivating interaction creates a dreamlike atmosphere, enhanced by the light filtering through the jellyfish, casting soft, shimmering reflections across the walls. The composition emphasizes the contrast between the stillness of the room and the grace of the jellyfish, inviting viewers into this enchanting moment.
```
