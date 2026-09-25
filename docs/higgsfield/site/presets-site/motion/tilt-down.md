# Tilt Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Rotates the camera angle downward, revealing what’s below or shifting focus. Great for dramatic reveals, transitions, or guiding the viewer’s eye.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84 | `1958a932-8ffb-4f1a-a5cd-480858f6ae84` | 38 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1958a932-8ffb-4f1a-a5cd-480858f6ae84 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera tilts down from a stormy sky to a lone lighthouse keeper standing on the rocks below.
```

Use it as: upload a start image that matches the scene, select motion preset **Tilt Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/a5601c9d-5678-4344-9882-021cbaa8d125.webp (320×182)

### Sample videos (8)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb | https://static.higgsfield.ai/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb.mp4 | https://static.higgsfield.ai/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb.webp | https://d1xarpci4ikg0w.cloudfront.net/b17fa4dc-7223-4f6b-8220-208dbb8e1a82.webp (320×242) |
| 2 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/b1a1d766-18b8-4c7d-ad17-61d94712f29f | https://static.higgsfield.ai/b1a1d766-18b8-4c7d-ad17-61d94712f29f.mp4 | https://static.higgsfield.ai/b1a1d766-18b8-4c7d-ad17-61d94712f29f.webp | https://d1xarpci4ikg0w.cloudfront.net/f0f31931-a18f-4bd9-9c5a-c31ba3c72d66.webp (320×210) |
| 3 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/edaefd5a-bdd1-4002-bcbf-2a2132dd8457 | https://static.higgsfield.ai/edaefd5a-bdd1-4002-bcbf-2a2132dd8457.mp4 | https://static.higgsfield.ai/edaefd5a-bdd1-4002-bcbf-2a2132dd8457.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8acc90-d65b-44a9-8167-eb6b81d8e6bb.webp (0×0) |
| 4 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e | https://static.higgsfield.ai/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e.mp4 | https://static.higgsfield.ai/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e.webp | https://d1xarpci4ikg0w.cloudfront.net/18d80a76-b8a4-4f7b-bec0-090b662106a4.webp (0×0) |
| 5 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/cfc3d532-5f87-4c2b-9479-1cf60dc5d835 | https://static.higgsfield.ai/cfc3d532-5f87-4c2b-9479-1cf60dc5d835.mp4 | https://static.higgsfield.ai/cfc3d532-5f87-4c2b-9479-1cf60dc5d835.webp | https://d1xarpci4ikg0w.cloudfront.net/a93319e1-38a9-44ca-9d1c-77d4603e5607.webp (320×242) |
| 6 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01 | https://static.higgsfield.ai/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01.mp4 | https://static.higgsfield.ai/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01.webp | https://d1xarpci4ikg0w.cloudfront.net/188945b6-d045-4aa1-a966-4a7edfd1ca34.webp (320×182) |
| 7 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/9c241aeb-7898-4b99-a116-e0dff42f12be | https://static.higgsfield.ai/9c241aeb-7898-4b99-a116-e0dff42f12be.mp4 | https://static.higgsfield.ai/9c241aeb-7898-4b99-a116-e0dff42f12be.webp | https://d1xarpci4ikg0w.cloudfront.net/e8f0df22-0e75-4a2d-84b5-3b3216fb0dff.webp (320×182) |
| 8 | https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/924bf3a1-d2d6-40df-8901-de45d66edf4f | https://static.higgsfield.ai/924bf3a1-d2d6-40df-8901-de45d66edf4f.mp4 | https://static.higgsfield.ai/924bf3a1-d2d6-40df-8901-de45d66edf4f.webp | https://d1xarpci4ikg0w.cloudfront.net/e3994875-4793-46ff-be90-474a3311dc74.webp (320×182) |

Source pages: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `924bf3a1-d2d6-40df-8901-de45d66edf4f`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/22200d86-52a2-4bc0-bf1d-4fc6eda8a540.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/07a45018-ca8e-4271-9c4a-5c11d5944f1d.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/924bf3a1-d2d6-40df-8901-de45d66edf4f

```text
A man, dressed in a long, flowing coat, stands in a vast, open field, gazing upward with a mix of wonder and determination as a UFO descends slowly above him. The soft glow of sunset casts elongated shadows on the grass, adding depth to the scene. As the camera tilts downward, it follows the UFO's descent, emphasizing its massive, otherworldly presence against the fading light of the day. The atmosphere is thick with tension and curiosity, capturing the emotion of the moment. The edges of the UFO shimmer with a metallic sheen, reflecting the warmth of the dusk, while the man remains rooted, his coat fluttering gently in the breeze.
```

- **Sample `9c241aeb-7898-4b99-a116-e0dff42f12be`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4a29d92e-1b8b-4501-8a03-4409932f6c79.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/767ca5d5-bfee-4ce2-9eb1-f614ff63ae8c.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/9c241aeb-7898-4b99-a116-e0dff42f12be

```text
A man stands in awe, his back to the camera, wearing a light-colored coat that flutters slightly in the breeze. He gazes upward, his expression a mix of wonder and uncertainty, as a massive UFO descends from the sky, casting an ominous shadow over the landscape. The setting is an empty sports field, bathed in soft twilight, with a faint glow from a distant floodlight illuminating the scene. As the camera tilts down, the viewer's attention shifts from the alien craft to the man, revealing a profound emotional tension in the air, a blend of curiosity and fear as the unknown approaches.
```

- **Sample `989a8f2b-c5a5-4da4-8c3f-09b2bb240b01`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/51973a95-a797-40a3-99c2-9656859f1bc2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/53553aee-516a-482d-b3e6-a7d21bcfbc57.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/989a8f2b-c5a5-4da4-8c3f-09b2bb240b01

```text
camera tilts down revealing the main entrance to the building with a doorman opening the dorr
```

- **Sample `cfc3d532-5f87-4c2b-9479-1cf60dc5d835`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3fe45295-f9c8-474a-b9f1-89f0ce4b779b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/29dcf6e2-95e7-493e-8ce6-bc318e9fcd71.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/cfc3d532-5f87-4c2b-9479-1cf60dc5d835

```text
A woman in a flowing yellow dress leans pensively against a sunlit windowsill, her expression thoughtful as she gazes outside. The warm glow of the late afternoon sun fills the room, casting golden hues that dance across her face and the wooden surface dotted with fallen leaves. As the camera tilts down, a fluffy cat comes into view, nestled comfortably at her feet, adding a sense of warmth and companionship. Outside the window, city skyscrapers loom in twilight, their lights beginning to twinkle against the deepening blue sky. The atmosphere is intimate yet expansive, reflecting a blend of solitude and connection as day transitions into night.
```

- **Sample `5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 0×0
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0a225757-ea88-47f8-9f17-20454a95fab3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/88024c9e-2742-47e3-9252-eeb0b6267ccb.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/5e41ee5d-a8a9-4b32-92fd-5ddeab69a46e

```text
A man stands on his knees on the cold floor, tears streaming down his face, his expression a mix of anguish and despair. The dim, chiaroscuro lighting casts harsh shadows across his features, accentuating the raw emotion in his eyes. As the camera tilts down, it reveals the man's knees standing on the floor. The stark monochrome tones amplify the emotional gravity, pulling the audience deeper into the man's turmoil and the danger lurking close by.
```

- **Sample `edaefd5a-bdd1-4002-bcbf-2a2132dd8457`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 0×0
  - input image: https://d1xarpci4ikg0w.cloudfront.net/60e4297a-d9a9-44dd-bc2d-2c5883405223.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4fc2fc0f-c673-4297-be74-e62ed0cb80f7.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/edaefd5a-bdd1-4002-bcbf-2a2132dd8457

```text
The camera tilts down, revealing a soldier clad in worn combat gear, dirt and grime splattered across his face. He clutches a small black and white photo of his wife, the edges frayed, a symbol of lost innocence. The battlefield looms ominously around him, cloaked in mist and shadow, the air thick with tension and despair. Light filters through dark clouds, casting a muted gray tone that echoes the soldier’s emotional turmoil. His wide, frightened eyes reflect both fear and deep longing, as flickers of hope fight against the backdrop of war. Each tremor in his hands echoes the fragility of love in such a brutal world.
```

- **Sample `b1a1d766-18b8-4c7d-ad17-61d94712f29f`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fb83e492-eb36-478f-ae14-7b25e068ac15.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fa53806f-72d1-4c69-8262-fa836e3b8bf4.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/b1a1d766-18b8-4c7d-ad17-61d94712f29f

```text
Start with an ultra-tight close-up of a mysterious hooded figure wearing oversized red goggles, standing motionless against a murky, textured backdrop. The camera slowly tilts down with deliberate grace, the heavy fabric of the cloak cascading into frame as shadows deepen. As the camera continues downward, it reveals the figure’s hands gently cupping a weathered clay pot. Nestled inside the pot is a lush aglaonema plant, its variegated leaves glowing faintly in the low, bluish-green ambient light. The surreal tone blurs the line between botanical reverence and cryptic ritual. 
```

- **Sample `d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1613f57d-999a-4064-ac19-e2f739388de8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e38ee290-35f4-4e43-845d-97bb65f41b81.mp4
  - page: https://higgsfield.ai/motion/1958a932-8ffb-4f1a-a5cd-480858f6ae84/d58199cd-f66f-40ca-b9a5-5d6ffc67bbcb

```text
With unsettling calm, she parts her lips and eat the frog whole — its limbs disappearing slowly as her throat contracts. The camera tilts down in a smooth, surreal motion, revealing her bare neck, then her shoulders, then beyond — into a lush, humid swamp below. Giant lotus flowers bloom across the water’s surface, their petals dripping with dew. Dozens of colorful frogs—red, blue, emerald—rest quietly among the floating pads, as if awaiting their turn. 
```
