# Moonwalk Right — Higgsfield Motion preset

- **Category:** Action · sports, dance & people
- **Use-case group:** music video
- **What it does (site description, verbatim):** A smooth, gliding backward walk while facing forward, moving to the right. Iconic, stylish, and full of retro energy—perfect for dance or character flair.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: dance/motion-glow → Minimax Hailuo 2.3; for exact choreography use Kling Motion Control instead of a preset.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50 | `c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50` | -244 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl in a sequined jacket moonwalks to the right across a checkered floor.
```

Use it as: upload a start image that matches the scene, select motion preset **Moonwalk Right**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Action · sports, dance & people):** [Baseball Kick](baseball-kick.md), [Basketball Dunks](basketball-dunks.md), [Boxing](boxing.md), [Catwalk](catwalk.md), [Face Punch](face-punch.md), [Kiss](kiss.md), [Moonwalk Left](moonwalk-left.md), [Paparazzi](paparazzi.md), [Skate Cruise](skate-cruise.md), [Skateboard Glide](skateboard-glide.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/76f926cb-266f-48a9-a27f-fa5339d83f9a.webp (320×210)

### Sample videos (3)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/025b8c80-0671-43ad-b9ac-f238f0f6baa3 | https://static.higgsfield.ai/025b8c80-0671-43ad-b9ac-f238f0f6baa3.mp4 | https://static.higgsfield.ai/025b8c80-0671-43ad-b9ac-f238f0f6baa3.webp | https://d1xarpci4ikg0w.cloudfront.net/32e1e33f-e7c4-4210-99d3-3a7c4c015ec3.webp (320×182) |
| 2 | https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/e2060b52-56fb-4fb4-889a-0a6b3022aa0e | https://static.higgsfield.ai/e2060b52-56fb-4fb4-889a-0a6b3022aa0e.mp4 | https://static.higgsfield.ai/e2060b52-56fb-4fb4-889a-0a6b3022aa0e.webp | https://d1xarpci4ikg0w.cloudfront.net/1c5b6b1f-8592-4a39-996e-6c814454ded3.webp (320×182) |
| 3 | https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/360624f7-e013-4c9f-aac6-d20c82993f64 | https://static.higgsfield.ai/360624f7-e013-4c9f-aac6-d20c82993f64.mp4 | https://static.higgsfield.ai/360624f7-e013-4c9f-aac6-d20c82993f64.webp | https://d1xarpci4ikg0w.cloudfront.net/71850d20-05a3-47af-87b0-ad12bacc5cd5.webp (320×210) |

Source pages: https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50. Crawled 2026-09.


## Real sample prompts (site)

3 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `360624f7-e013-4c9f-aac6-d20c82993f64`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6d73157f-c9c0-4ca4-af59-b1baba91e5b4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8f757bce-046d-48d4-85ad-a616be2df898.mp4
  - page: https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/360624f7-e013-4c9f-aac6-d20c82993f64

```text
A male dancer stands in a poised silhouette, his body elegantly twisted as he extends one arm delicately outward. The stark white background enhances the clarity of his form, casting a bold shadow on the reflective floor beneath him. As he shifts his weight, the subtle curvature of his posture reveals a graceful tension, mirroring the dynamics of his movement. The lighting bathes the scene in soft contrast, highlighting the fluid lines of his body against the minimalist space. A sense of solitude envelops the atmosphere, inviting introspection as the dancer embodies a moment of artistic expression.
```

- **Sample `e2060b52-56fb-4fb4-889a-0a6b3022aa0e`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/72a34af9-3f95-40d4-811d-117b5a273a7b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/81680ffb-8e93-4e8b-88db-1cad0edec3a8.mp4
  - page: https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/e2060b52-56fb-4fb4-889a-0a6b3022aa0e

```text
A man in a long coat stands dramatically on a stage with bright lights behind him, facing the audience. As the camera starts to roll, he instantly begins to moonwalk to the right, smooth and precise, under the spotlight in a cinematic wide shot.
```

- **Sample `025b8c80-0671-43ad-b9ac-f238f0f6baa3`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bd03dba8-e88b-4939-8352-630ab9f00f1c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f43fa47f-430e-4708-8a2f-5fd49c0a6b4f.mp4
  - page: https://higgsfield.ai/motion/c9da59da-aabd-4fd5-a7c8-f09a1d9f9f50/025b8c80-0671-43ad-b9ac-f238f0f6baa3

```text
A joyful man in a bright turquoise outfit performing a moonwalk to the right while slightly dancing, in front of a glowing metal sculpture with sparkling fireworks behind him. The setting is dramatic and festive, with classical architecture and a clear night sky, illuminated by warm lights and bursts of energy. The man’s motion is smooth, charismatic, and confident, reflecting a celebratory vibe.
```
