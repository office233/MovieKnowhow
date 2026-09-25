# Crane Up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Lifts the camera smoothly upward using a crane, revealing the scene below or creating an epic rising shot. Great for transitions, reveals, or emotional build-up.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e | `2da63d27-94e0-48e0-8e2e-936274bd176e` | 60 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2da63d27-94e0-48e0-8e2e-936274bd176e |
| https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc | `45d7f47f-2c7b-4c5e-84b7-943758a39dcc` | -211 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=45d7f47f-2c7b-4c5e-84b7-943758a39dcc |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A knight kneels in a misty field before battle; the camera cranes up to reveal thousands of soldiers lined up behind him.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera rises from ground or subject level · **Best use:** Reveal scope; intimate to grand · **Models:** Sora 2† · **Phrase/template:** "Crane Up from the soldier's hands to the war-torn landscape" · precise: "Camera rises vertically 30 feet over 4 seconds. Subject remains visible in lower frame… Tilt down slightly to maintain subject connection throughout rise." · **Tips:** + 360 Orbit = epic reveal of scale. Maps to Cinema Studio **Jib Up**. See recipe [crane-reveal](recipes/crane-reveal.md).

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bbf52504-e94e-47ab-b380-8728f9ad0a87.webp (320×320)
- Card preview, variant `45d7f47f`: https://d1xarpci4ikg0w.cloudfront.net/a2da3319-c132-47bc-91e5-514d056d540c.webp

### Sample videos (5; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/36999a65-d883-4154-b00d-c280b0c077d9 | https://static.higgsfield.ai/36999a65-d883-4154-b00d-c280b0c077d9.mp4 | https://static.higgsfield.ai/36999a65-d883-4154-b00d-c280b0c077d9.webp | https://d1xarpci4ikg0w.cloudfront.net/544534ba-103b-4f96-8029-038922cc2b7b.webp (320×180) |
| 2 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/02951165-8abe-4431-95e8-b75cd717a3d9 | https://static.higgsfield.ai/02951165-8abe-4431-95e8-b75cd717a3d9.mp4 | https://static.higgsfield.ai/02951165-8abe-4431-95e8-b75cd717a3d9.webp | https://d1xarpci4ikg0w.cloudfront.net/9c3010c1-5813-4474-9226-f9f235505951.webp (320×242) |
| 3 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/31ec1561-fb2b-44cc-b963-a2c3ec665125 | https://static.higgsfield.ai/31ec1561-fb2b-44cc-b963-a2c3ec665125.mp4 | https://static.higgsfield.ai/31ec1561-fb2b-44cc-b963-a2c3ec665125.webp | https://d1xarpci4ikg0w.cloudfront.net/b34cc79d-3677-4790-87b5-abd92a714b09.webp (320×320) |
| 4 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/c8015b49-9ddc-49de-baf9-9b96681791d8 | https://static.higgsfield.ai/c8015b49-9ddc-49de-baf9-9b96681791d8.mp4 | https://static.higgsfield.ai/c8015b49-9ddc-49de-baf9-9b96681791d8.webp | https://d1xarpci4ikg0w.cloudfront.net/29eb367e-0dc8-4de9-83c7-9dc928f79dd6.webp (320×242) |
| 5 | https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/c40ca2eb-9b01-430b-8ab7-5452a1ba19db | https://static.higgsfield.ai/c40ca2eb-9b01-430b-8ab7-5452a1ba19db.mp4 | https://static.higgsfield.ai/c40ca2eb-9b01-430b-8ab7-5452a1ba19db.webp | https://d1xarpci4ikg0w.cloudfront.net/1ddf6654-86d4-4ff5-88d5-f726ce21614f.webp (320×138) |

Source pages: https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e, https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc. Crawled 2026-09.


## Real sample prompts (site)

5 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `c40ca2eb-9b01-430b-8ab7-5452a1ba19db`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1456×624
  - input image: https://d1xarpci4ikg0w.cloudfront.net/74b7f6d6-f67c-4fd4-aa3f-a08618297f6c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a8b429fb-3f87-4b10-b8e3-df2d710298d3.mp4
  - page: https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc/c40ca2eb-9b01-430b-8ab7-5452a1ba19db

```text
Smooth crane-up cinematic animation starting at street level, closely tracking a cyclist riding leisurely down a peaceful, tree-lined suburban street during golden hour. Gradually, the camera elevates, revealing the expansive, serene neighborhood with neatly lined houses, lush greenery, and a soft, warm sunlight filtering through trees. The calm atmosphere and subtle movements—such as leaves gently swaying and a dog resting on the grass—enhance the tranquility and natural realism of the scene.
```

- **Sample `c8015b49-9ddc-49de-baf9-9b96681791d8`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cee55107-18b4-4cab-85c5-ad76d703b1a4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0aa11eff-f3f6-423b-a4eb-2bdcea4ba756.mp4
  - page: https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/c8015b49-9ddc-49de-baf9-9b96681791d8

```text
Cinematic animation with a graceful crane-up camera movement starting close on Mike Tyson's calm and focused expression, gradually rising to reveal his outstretched hand. A pure white dove elegantly takes flight from his finger, ascending gently into the air. The lighting is dramatic and soft, highlighting Tyson's physique, tattoos, and expressive eyes against a moody, dark background. The dove’s smooth and gentle wing motions symbolize peace and freedom, creating a powerful visual contrast between strength and serenity.
```

- **Sample `31ec1561-fb2b-44cc-b963-a2c3ec665125`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6074b6cf-0025-4dfa-a7de-ece17ca60aa2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a949a127-0d8c-4385-9022-7457fc69ca8d.mp4
  - page: https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc/31ec1561-fb2b-44cc-b963-a2c3ec665125

```text
The camera rises above the man sprawled on the wet asphalt, neon lights reflecting off his black suit and the plastic wrap stretched over his face. Coins, receipts, and scattered pills surround him like remnants of a fallen life. Cars blur past on either side, streaks of red and white light slicing through the night. As the camera ascends higher, the chaos below begins to shrink. We pass glowing signs, rain-slicked streets, and eventually rise above the intersection—revealing a giant billboard of the same man, smiling in a polished ad campaign. The world keeps moving. 
```

- **Sample `02951165-8abe-4431-95e8-b75cd717a3d9`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/34e1dbe3-3758-48f6-a57b-2071da6f35bd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9b939cdb-7f6e-4358-bb38-895f5cb2c286.mp4
  - page: https://higgsfield.ai/motion/2da63d27-94e0-48e0-8e2e-936274bd176e/02951165-8abe-4431-95e8-b75cd717a3d9

```text
The camera rises above the woman lying still among fresh vegetables and burgers. Her face rests gently on a bun, eyes staring forward, expression calm and distant. As the camera continues upward, the table of scattered lettuce, tomatoes, and garlic is revealed in full, arranged like a feast. The camera keeps lifting—above her, the red mesh netting behind begins to resemble a stage curtain. Slowly, the entire scene is framed like a theatrical set from above, quiet and surreal.
```

- **Sample `36999a65-d883-4154-b00d-c280b0c077d9`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c8348bb2-6daa-43cb-a33e-9d1755b36334.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bb2f31a4-571a-404a-a418-b38a1313af28.mp4
  - page: https://higgsfield.ai/motion/45d7f47f-2c7b-4c5e-84b7-943758a39dcc/36999a65-d883-4154-b00d-c280b0c077d9

```text
Start with a low-angle shot behind Travis Scott, silhouetted against dim overhead lights in a dark warehouse. He begins walking confidently toward a sleek yellow Lamborghini parked in front of a large garage door. The camera starts at ground level behind him, then performs a slow, dramatic crane up, rising smoothly to reveal more of the car and the massive space around him. Moody lighting creates sharp reflections on the polished floor. The scene should feel cinematic, intense, and powerful — like the buildup before a major event.ohwx tchnq
```
