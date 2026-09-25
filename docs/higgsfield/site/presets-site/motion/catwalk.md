# Catwalk — Higgsfield Motion preset

- **Category:** Action · sports, dance & people
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Tracks a confident runway walk with smooth camera motion and fashion-forward energy. Sleek and stylish, like a high-fashion show moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: dance/motion-glow → Minimax Hailuo 2.3; for exact choreography use Kling Motion Control instead of a preset.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a0a7c624-cf2a-4204-a9f8-60623d4a7383 | `a0a7c624-cf2a-4204-a9f8-60623d4a7383` | -232 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a0a7c624-cf2a-4204-a9f8-60623d4a7383 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A model walks confidently down a runway in a tailored blazer, flashes popping.
```

Use it as: upload a start image that matches the scene, select motion preset **Catwalk**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Action · sports, dance & people):** [Baseball Kick](baseball-kick.md), [Basketball Dunks](basketball-dunks.md), [Boxing](boxing.md), [Face Punch](face-punch.md), [Kiss](kiss.md), [Moonwalk Left](moonwalk-left.md), [Moonwalk Right](moonwalk-right.md), [Paparazzi](paparazzi.md), [Skate Cruise](skate-cruise.md), [Skateboard Glide](skateboard-glide.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3d89cf13-6f9a-4369-9cf5-4a2b8656dbd4.webp (320×242)

### Sample videos (0)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|

Source pages: https://higgsfield.ai/motion/a0a7c624-cf2a-4204-a9f8-60623d4a7383. Crawled 2026-09.
