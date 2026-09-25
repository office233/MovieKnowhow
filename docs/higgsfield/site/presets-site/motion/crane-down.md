# Crane Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gently lowers the camera from above to the subject, creating a dramatic or revealing entrance. Perfect for introductions, transitions, or emotional emphasis.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0 | `41d4241f-8e3a-4c72-bd1d-89e93f06b0f0` | 65 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=41d4241f-8e3a-4c72-bd1d-89e93f06b0f0 |
| https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee | `494db3c2-2297-4cf7-bef7-cba0cebe73ee` | -191 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=494db3c2-2297-4cf7-bef7-cba0cebe73ee |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
From high above a candlelit ballroom, the camera cranes down to a masked woman standing alone at the center of the dance floor.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera descends from a high position · **Best use:** Introduce location from above, personalize · **Models:** — · **Phrase/template:** "Crane Down from the skyline to the lone figure on the street" · "Camera descends 20 feet over 3 seconds. Start wide-overhead, end at eye level with subject. Slow tilt up during descent…" · **Tips:** Maps to Cinema Studio **Jib Down**

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/861da213-324a-487a-a48b-f5a22c92c7b2.webp (320×182)
- Card preview, variant `494db3c2`: https://d1xarpci4ikg0w.cloudfront.net/db3c2ac6-3181-48e5-bb81-b725af1e20dc.webp

### Sample videos (4; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/882b7462-7bed-4827-bae2-7f0081990849 | https://static.higgsfield.ai/882b7462-7bed-4827-bae2-7f0081990849.mp4 | https://static.higgsfield.ai/882b7462-7bed-4827-bae2-7f0081990849.webp | https://d1xarpci4ikg0w.cloudfront.net/56c12cd7-cd18-45fd-acdc-8b57018c9ccb.webp (320×320) |
| 2 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/7b3025c0-d083-47e7-ad54-8b303d2021b2 | https://static.higgsfield.ai/7b3025c0-d083-47e7-ad54-8b303d2021b2.mp4 | https://static.higgsfield.ai/7b3025c0-d083-47e7-ad54-8b303d2021b2.webp | https://d1xarpci4ikg0w.cloudfront.net/ce504b15-1524-42f9-80ef-e8f9d30a2d9b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/d84ba087-53b7-4a14-8a86-6fcdd619e1ad | https://static.higgsfield.ai/d84ba087-53b7-4a14-8a86-6fcdd619e1ad.mp4 | https://static.higgsfield.ai/d84ba087-53b7-4a14-8a86-6fcdd619e1ad.webp | https://d1xarpci4ikg0w.cloudfront.net/2c8320b7-91bf-4a78-989c-e4b732b5323b.webp (320×170) |
| 4 | https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1 | https://static.higgsfield.ai/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1.mp4 | https://static.higgsfield.ai/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1.webp | https://d1xarpci4ikg0w.cloudfront.net/9532964a-1584-4ce9-8293-4a5256ce42cc.webp (320×132) |

Source pages: https://higgsfield.ai/motion/41d4241f-8e3a-4c72-bd1d-89e93f06b0f0, https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee. Crawled 2026-09.


## Real sample prompts (site)

4 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `bc0d2687-3704-47c2-9d5e-5e2dd54db6e1`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c10ecfdd-87ea-421e-88e3-abbfc649ea95.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/be3a3edc-a1e4-4ce6-8304-aa596a0eb167.mp4
  - page: https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee/bc0d2687-3704-47c2-9d5e-5e2dd54db6e1

```text
The camera slowly pans down to the people on the ground and a black cat runs up to them and strokes them
```

- **Sample `d84ba087-53b7-4a14-8a86-6fcdd619e1ad`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1296×688
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2484a0da-2427-4620-bf78-3e856aa9c103.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f875d2c6-e8de-4574-a99b-a88880fa8c54.mp4
  - page: https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee/d84ba087-53b7-4a14-8a86-6fcdd619e1ad

```text
The camera slides smoothly down on the man in the foreground and he's wearing pink underwear, the people in the background are shocked
```

- **Sample `7b3025c0-d083-47e7-ad54-8b303d2021b2`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c0ec5289-07d2-4d31-8425-288234384c3d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3e8c224a-0a6e-45ae-a6f9-0d34a08a9ab3.mp4
  - page: https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee/7b3025c0-d083-47e7-ad54-8b303d2021b2

```text
The camera begins high in the rafters of a chaotic artist’s studio, light flickering across walls layered with wild splashes of paint. As it cranes slowly downward, we pass suspended canvases, stacked frames, and paint-splattered floors until the frame settles on a woman seated in an orange chair at the center of the mess. Her elbow rests on her knee, head leaning into her hand with cool defiance. Torn mint-green sleeves reveal slashes of skin like accidental brushstrokes. She stares through the camera—unbothered, regal, electric. 
```

- **Sample `882b7462-7bed-4827-bae2-7f0081990849`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fe32f113-214e-4473-baa5-0563274f56f7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4e8aa336-c4b7-40ff-b640-a6f408013e09.mp4
  - page: https://higgsfield.ai/motion/494db3c2-2297-4cf7-bef7-cba0cebe73ee/882b7462-7bed-4827-bae2-7f0081990849

```text
The camera glides downward in a slow, hypnotic crane move — revealing a pristine pink floor, like velvet candy. As we descend, a woman’s porcelain face emerges, framed by sleek, sculpted brows and satin skin. Her head rests atop a pale blue disc like a museum display, eyes locked to the lens, unreadable. A single arm, elegant and bare, reaches in from above, delicately gripping her long braid like a ceremonial ribbon. Black dotted lines slice across the pink floor with graphic precision, forming surreal pathways that frame her body like couture geometry. 
```
