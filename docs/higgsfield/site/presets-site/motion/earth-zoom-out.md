# Earth Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** transitions
- **What it does (site description, verbatim):** The camera pulls back rapidly from the subject to reveal their city, then the continent, and finally the entire Earth. Epic and cinematic—perfect for transitions, scale, or storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0 | `70e490b9-26b7-4572-8d9c-2ac8dcc9adc0` | -350 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=70e490b9-26b7-4572-8d9c-2ac8dcc9adc0 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman waves up at the sky from a rooftop garden in Tokyo; the camera rockets upward and out past the city, the continent, and finally the whole Earth.
```

Use it as: upload a start image that matches the scene, select motion preset **Earth Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Camera pulls back from earth's surface · **Best for:** Epic reveal, scale, planet

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/8fbf0cbb-67cd-4390-9bc2-d3f6c0693bf3.webp (320×486)

### Sample videos (5)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/32fe360d-1568-4fb6-af4c-6ad904f4d691 | https://static.higgsfield.ai/32fe360d-1568-4fb6-af4c-6ad904f4d691.mp4 | https://static.higgsfield.ai/32fe360d-1568-4fb6-af4c-6ad904f4d691.webp | https://d1xarpci4ikg0w.cloudfront.net/83d55772-5d2f-48ed-baaa-386d064323b2.webp (320×236) |
| 2 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/9e5c8ba6-4842-4dde-ae64-72749256884c | https://static.higgsfield.ai/9e5c8ba6-4842-4dde-ae64-72749256884c.mp4 | https://static.higgsfield.ai/9e5c8ba6-4842-4dde-ae64-72749256884c.webp | https://d1xarpci4ikg0w.cloudfront.net/49e5d3f0-edce-485b-8392-fac01eb7af3e.webp (320×242) |
| 3 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe | https://static.higgsfield.ai/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe.mp4 | https://static.higgsfield.ai/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe.webp | https://d1xarpci4ikg0w.cloudfront.net/b9550695-10b5-4aa4-a211-9f1a635ffecf.webp (320×210) |
| 4 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/0c9ab87d-4171-4721-8b8a-be99d66e8d57 | https://static.higgsfield.ai/0c9ab87d-4171-4721-8b8a-be99d66e8d57.mp4 | https://static.higgsfield.ai/0c9ab87d-4171-4721-8b8a-be99d66e8d57.webp | https://d1xarpci4ikg0w.cloudfront.net/6796220e-d9d3-4585-be0e-107de068a404.webp (320×486) |
| 5 | https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/62ba3477-410d-4984-ac22-c8022c5653af | https://static.higgsfield.ai/62ba3477-410d-4984-ac22-c8022c5653af.mp4 | https://static.higgsfield.ai/62ba3477-410d-4984-ac22-c8022c5653af.webp | https://d1xarpci4ikg0w.cloudfront.net/adad7749-116a-4dbd-9e86-7113eb0d0d37.webp (320×486) |

Source pages: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0. Crawled 2026-09.


## Real sample prompts (site)

5 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `62ba3477-410d-4984-ac22-c8022c5653af`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7254452d-3766-40ef-909a-20119fe14360.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/be49024e-4f2c-46aa-8915-f4cae1510da0.mp4
  - page: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/62ba3477-410d-4984-ac22-c8022c5653af

```text
A young East Asian woman stands in a dim urban nightlife setting, illuminated by harsh flash lighting. She wears a silver spaghetti-strap top and slicked-back hair, biting down on a sparkly grill while holding a lollipop stick in one hand. Neon signage glows faintly in the dark background behind her. The camera begins with a tight close-up on her bold, confident face and expressive gesture. Suddenly, the camera begins a sharp and fluid zoom-out, but the woman stays perfectly still in her pose. The view quickly pulls away, through the nightlife environment, rising above rooftops and glowing signs. The zoom accelerates upward into the night sky and continues through the atmosphere. In the final wide shot, Earth appears as a single, pristine, photorealistic globe slowly rotating in the blackness of space. There are no duplicated planets, overlays, or graphics. Her location is softly marked by a glowing dot far below.

```

- **Sample `0c9ab87d-4171-4721-8b8a-be99d66e8d57`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b6209a26-af8f-4934-b798-8d7021b62db2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bc48cedf-8770-4379-9a12-7109922fbbe8.mp4
  - page: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/0c9ab87d-4171-4721-8b8a-be99d66e8d57

```text
A young man wearing black wide-leg pants, a black jacket, layered silver chains, and rectangular sunglasses stands confidently at a gas station under a clear blue sky. The sunlight flares behind him, creating a dramatic lens glow. The camera is positioned low and close, looking slightly up toward him, capturing his assertive stance and expression. Suddenly, the camera begins a rapid and smooth zoom-out, while the man remains completely still. The scene expands quickly through the gas station, over the surrounding desert, climbing high above the landscape. The zoom continues beyond the atmosphere. In the final view, we see a single, photorealistic Earth slowly rotating in the darkness of space, with no duplicated elements or overlays. A soft glowing dot marks the man’s original position on the planet.

```

- **Sample `f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6a1030ec-a3db-450f-ad66-f0c47d7467fd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/65cbb5d5-9e84-4764-b4c0-55bdd6a52379.mp4
  - page: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/f7d12759-7e8f-459e-bdb5-6ee27bfe4fbe

```text
A young woman in a translucent white raincoat stands on a long pier extending into the ocean, her wet hair swept by the wind. The sky is stormy and dramatic, with dark clouds over the horizon and the sea beneath her. Her gaze is calm yet intense as she looks directly into the camera. The camera begins close-up, centered on her face and hood, capturing the moody ambiance of the scene. Suddenly, the camera begins a fast and seamless zoom-out. She remains completely motionless as the view pulls back—past the pier, above the sea, over the coastline, and then rapidly ascends through the cloudy sky. The scene transitions through the atmosphere into outer space, revealing a clean, photorealistic Earth slowly rotating in the darkness. No overlays or extra effects — just a single glowing dot marking her original position on the planet.

```

- **Sample `9e5c8ba6-4842-4dde-ae64-72749256884c`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/850db64f-be21-4744-9843-0cbc6627c7a0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9c35a30b-33a7-4dd6-9bcb-1330d4d29df1.mp4
  - page: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/9e5c8ba6-4842-4dde-ae64-72749256884c

```text
A stylish young woman stands confidently in the desert under the blazing sun, wearing a bold, colorful pleated outfit and round sunglasses. She’s positioned next to a vintage “MOTEL” neon sign with a mid-century design, surrounded by clear blue skies and distant mountains. The camera faces her directly, capturing her from a low angle to emphasize her power and presence. A sense of heat and retro Americana fills the scene. Suddenly, the camera starts to zoom out — first revealing the full desolate roadside setting, then the surrounding desert, expanding to the entire region, the continent, and eventually pulling back into the blackness of space, showing a photorealistic Earth spinning slowly, with a soft glowing dot marking her location in the desert.
```

- **Sample `32fe360d-1568-4fb6-af4c-6ad904f4d691`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0fa8b74e-e443-41c7-902f-6b0caa250c42.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f9e671af-d98f-4d9a-92bc-155b5ca83712.mp4
  - page: https://higgsfield.ai/motion/70e490b9-26b7-4572-8d9c-2ac8dcc9adc0/32fe360d-1568-4fb6-af4c-6ad904f4d691

```text
A fashionable young man with bleached blonde hair and bold sunglasses stands confidently in a vibrant green field dotted with yellow wildflowers, surrounded by pine-covered hills under a deep blue sky. He wears a bright, abstract geometric-print oversized shirt and red pants. The camera is positioned low, looking up at him with a wide lens, emphasizing his presence against the open landscape. As he holds still and looks into the camera, the shot smoothly zooms out — revealing the field, surrounding mountains, the entire valley, then the continent — and finally transitions to a photorealistic full view of Earth from space.

```
