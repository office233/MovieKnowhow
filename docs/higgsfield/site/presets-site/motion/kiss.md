# Kiss — Higgsfield Motion preset

- **Category:** Action · sports, dance & people
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Captures the intimate moment of a kiss with soft focus, slow motion, or dramatic angles. Evokes emotion, romance, and connection between characters.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: dance/motion-glow → Minimax Hailuo 2.3; for exact choreography use Kling Motion Control instead of a preset.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba | `38c80734-90b7-4fcb-8fc2-16a055d2b3ba` | 95 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=38c80734-90b7-4fcb-8fc2-16a055d2b3ba |
| https://higgsfield.ai/motion/ad85a3a8-919d-45a3-8fa6-0727fc7b7fe7 | `ad85a3a8-919d-45a3-8fa6-0727fc7b7fe7` | -202 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ad85a3a8-919d-45a3-8fa6-0727fc7b7fe7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Two lovers kiss under a streetlamp in the rain, soft focus, slow motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Kiss**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Action · sports, dance & people):** [Baseball Kick](baseball-kick.md), [Basketball Dunks](basketball-dunks.md), [Boxing](boxing.md), [Catwalk](catwalk.md), [Face Punch](face-punch.md), [Moonwalk Left](moonwalk-left.md), [Moonwalk Right](moonwalk-right.md), [Paparazzi](paparazzi.md), [Skate Cruise](skate-cruise.md), [Skateboard Glide](skateboard-glide.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fb3b5190-ec06-4c2b-b715-7082d4761c78.webp (320×182)
- Card preview, variant `ad85a3a8`: https://d1xarpci4ikg0w.cloudfront.net/38d319c1-ad28-4602-a95e-10b6086e83e7.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/9e04654a-3877-4101-a24a-c95b55c7bef6 | https://static.higgsfield.ai/9e04654a-3877-4101-a24a-c95b55c7bef6.mp4 | https://static.higgsfield.ai/9e04654a-3877-4101-a24a-c95b55c7bef6.webp | https://d1xarpci4ikg0w.cloudfront.net/bd6d2d50-2a1c-4a50-a375-2507d7bed781.webp (320×424) |
| 2 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/ce49e43c-5d69-463b-bbff-dca4dbd28ce3 | https://static.higgsfield.ai/ce49e43c-5d69-463b-bbff-dca4dbd28ce3.mp4 | https://static.higgsfield.ai/ce49e43c-5d69-463b-bbff-dca4dbd28ce3.webp | https://d1xarpci4ikg0w.cloudfront.net/cc2de6e0-9901-499a-890f-39a52af43a8c.webp (320×424) |
| 3 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/9265bb7a-c3ad-4286-a6c9-b586af4a1687 | https://static.higgsfield.ai/9265bb7a-c3ad-4286-a6c9-b586af4a1687.mp4 | https://static.higgsfield.ai/9265bb7a-c3ad-4286-a6c9-b586af4a1687.webp | https://d1xarpci4ikg0w.cloudfront.net/1ff80310-e7ef-4d9c-a3ee-5a7a2708ed59.webp (320×182) |
| 4 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/b7a53f6d-f995-4b2f-9a29-8ae068e89e51 | https://static.higgsfield.ai/b7a53f6d-f995-4b2f-9a29-8ae068e89e51.mp4 | https://static.higgsfield.ai/b7a53f6d-f995-4b2f-9a29-8ae068e89e51.webp | https://d1xarpci4ikg0w.cloudfront.net/cf34c060-5f47-4eb0-a8d1-f52ca38f382a.webp (320×320) |
| 5 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/d3f3cf6d-2146-45cd-864c-a68eed4d3b7d | https://static.higgsfield.ai/d3f3cf6d-2146-45cd-864c-a68eed4d3b7d.mp4 | https://static.higgsfield.ai/d3f3cf6d-2146-45cd-864c-a68eed4d3b7d.webp | https://d1xarpci4ikg0w.cloudfront.net/c860cf47-66fd-499b-beb4-a82f256ba53b.webp (320×424) |
| 6 | https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba/463a1f95-5e61-426d-9ed3-b3a7bc9d4848 | https://static.higgsfield.ai/463a1f95-5e61-426d-9ed3-b3a7bc9d4848.mp4 | https://static.higgsfield.ai/463a1f95-5e61-426d-9ed3-b3a7bc9d4848.webp | https://d1xarpci4ikg0w.cloudfront.net/0f720c64-fc3f-4ccb-9be5-264729a4accd.webp (320×486) |

Source pages: https://higgsfield.ai/motion/38c80734-90b7-4fcb-8fc2-16a055d2b3ba, https://higgsfield.ai/motion/ad85a3a8-919d-45a3-8fa6-0727fc7b7fe7. Crawled 2026-09.
