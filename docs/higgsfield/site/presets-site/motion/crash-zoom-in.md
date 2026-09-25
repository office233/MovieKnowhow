# Crash Zoom In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Quickly zooms into the subject to create a dramatic, intense effect. Perfect for highlighting reactions or adding sudden focus in your video.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960 | `1cc27a2b-3b89-44d4-a7f9-d583454a8960` | 71 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1cc27a2b-3b89-44d4-a7f9-d583454a8960 |
| https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38 | `a2dddb76-03fa-429e-9905-577bffdf9d38` | -256 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man opens a letter at his kitchen table and his eyes go wide in shock; fast crash zoom into his face.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Rapid, sudden zoom toward the subject · **Best use:** Shock, realization, emphasis on a detail · **Models:** Higgsfield DoP · **Phrase/template:** "Crash Zoom In on the bloody handprint" · DoP template: "Crash zoom from wide establishing to extreme close-up on the protagonist eye, the moment of realization frozen in his iris… cold cyan rim light… shallow focus, 24fps, single take with consistent character ID, no morphing of background plates." · reliable: "crash zoom from wide to extreme close-up on impact" · **Tips:** + FPV Drone = chase climax. Avoid in lifestyle and drama.

## Related presets

- **Mixes that use this preset:** [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md)
- **Same category (Camera · zoom):** [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5c86ea16-50ec-492e-a2ff-3a5f2226613b.webp (320×182)
- Card preview, variant `a2dddb76`: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp

### Sample videos (17; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/39cf50cd-26ea-4793-a32f-0d906e38d1f5 | https://static.higgsfield.ai/39cf50cd-26ea-4793-a32f-0d906e38d1f5.mp4 | https://static.higgsfield.ai/39cf50cd-26ea-4793-a32f-0d906e38d1f5.webp | https://d1xarpci4ikg0w.cloudfront.net/49bf1746-f59b-4651-9f03-8dc464ffdf8c.webp (320×168) |
| 2 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/858fa028-22a2-407e-8a51-4a3b8cc31e0d | https://static.higgsfield.ai/858fa028-22a2-407e-8a51-4a3b8cc31e0d.mp4 | https://static.higgsfield.ai/858fa028-22a2-407e-8a51-4a3b8cc31e0d.webp | https://d1xarpci4ikg0w.cloudfront.net/ee41e2b9-f3a1-4622-8f90-8677043d464d.webp (320×130) |
| 3 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/7c934ae4-5d7c-4097-843e-8ae5737a7380 | https://static.higgsfield.ai/7c934ae4-5d7c-4097-843e-8ae5737a7380.mp4 | https://static.higgsfield.ai/7c934ae4-5d7c-4097-843e-8ae5737a7380.webp | https://d1xarpci4ikg0w.cloudfront.net/4a508012-2a5e-4503-a441-a8303c10b4a2.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/3dbead9d-3e93-42c7-a726-0e6fb6f52a60 | https://static.higgsfield.ai/3dbead9d-3e93-42c7-a726-0e6fb6f52a60.mp4 | https://static.higgsfield.ai/3dbead9d-3e93-42c7-a726-0e6fb6f52a60.webp | https://d1xarpci4ikg0w.cloudfront.net/8a846a53-7c7b-4e3c-a63d-6d8a105691f2.webp (320×180) |
| 5 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53 | https://static.higgsfield.ai/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53.mp4 | https://static.higgsfield.ai/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53.webp | https://d1xarpci4ikg0w.cloudfront.net/2ad27578-a9ea-4cd0-a772-3b5f076afb58.webp (320×180) |
| 6 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/18a1bac8-73ff-4f58-a4c5-7e623b90e600 | https://static.higgsfield.ai/18a1bac8-73ff-4f58-a4c5-7e623b90e600.mp4 | https://static.higgsfield.ai/18a1bac8-73ff-4f58-a4c5-7e623b90e600.webp | https://d1xarpci4ikg0w.cloudfront.net/ca5a6b11-91ed-49dd-b999-95638e13086b.webp (320×562) |
| 7 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/fc4b0693-d283-4289-b260-c5776a361cbd | https://static.higgsfield.ai/fc4b0693-d283-4289-b260-c5776a361cbd.mp4 | https://static.higgsfield.ai/fc4b0693-d283-4289-b260-c5776a361cbd.webp | https://d1xarpci4ikg0w.cloudfront.net/5b029147-9545-466a-8270-5c944d6f45cc.webp (320×180) |
| 8 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/10a12ce6-c759-4c0a-8323-eda064d5ac5a | https://static.higgsfield.ai/10a12ce6-c759-4c0a-8323-eda064d5ac5a.mp4 | https://static.higgsfield.ai/10a12ce6-c759-4c0a-8323-eda064d5ac5a.webp | https://d1xarpci4ikg0w.cloudfront.net/4be08d8c-b25b-47eb-b0ab-0b6fa731b114.webp (320×562) |
| 9 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/e870d5b9-5613-430a-9181-e03e6d52f84e | https://static.higgsfield.ai/e870d5b9-5613-430a-9181-e03e6d52f84e.mp4 | https://static.higgsfield.ai/e870d5b9-5613-430a-9181-e03e6d52f84e.webp | https://d1xarpci4ikg0w.cloudfront.net/a154f4e0-55e8-408e-9b86-ed12984c462a.webp (320×182) |
| 10 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/7cdc16a3-7c49-4297-864e-d595806ac78d | https://static.higgsfield.ai/7cdc16a3-7c49-4297-864e-d595806ac78d.mp4 | https://static.higgsfield.ai/7cdc16a3-7c49-4297-864e-d595806ac78d.webp | https://d1xarpci4ikg0w.cloudfront.net/c72755fa-9039-4d21-a411-fc9e8eb48e9b.webp (320×242) |
| 11 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/90f7df37-089e-438e-b029-a730abfce331 | https://static.higgsfield.ai/90f7df37-089e-438e-b029-a730abfce331.mp4 | https://static.higgsfield.ai/90f7df37-089e-438e-b029-a730abfce331.webp | https://d1xarpci4ikg0w.cloudfront.net/513b1811-a4a0-4151-a1ca-409199a92904.webp (320×242) |
| 12 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/81d24a54-e3a6-4651-bc71-9bb0596b26e2 | https://static.higgsfield.ai/81d24a54-e3a6-4651-bc71-9bb0596b26e2.mp4 | https://static.higgsfield.ai/81d24a54-e3a6-4651-bc71-9bb0596b26e2.webp | https://d1xarpci4ikg0w.cloudfront.net/04ca4a0e-466c-41af-a14c-9fa276ac8d6b.webp (320×486) |
| 13 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ee7e672d-5db7-40e6-be64-cbc8ffe46c26 | https://static.higgsfield.ai/ee7e672d-5db7-40e6-be64-cbc8ffe46c26.mp4 | https://static.higgsfield.ai/ee7e672d-5db7-40e6-be64-cbc8ffe46c26.webp | https://d1xarpci4ikg0w.cloudfront.net/3be4a9c4-6a3a-4d0d-9167-77177d0a7444.webp (320×182) |
| 14 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/1686dbf4-f6c6-4776-8035-4c1f94fee9e3 | https://static.higgsfield.ai/1686dbf4-f6c6-4776-8035-4c1f94fee9e3.mp4 | https://static.higgsfield.ai/1686dbf4-f6c6-4776-8035-4c1f94fee9e3.webp | https://d1xarpci4ikg0w.cloudfront.net/4dfc8e1a-adbd-40c0-8a62-d9c944ca8d2d.webp (320×210) |
| 15 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ba294e2c-c76d-499a-949c-bc56c25bb621 | https://static.higgsfield.ai/ba294e2c-c76d-499a-949c-bc56c25bb621.mp4 | https://static.higgsfield.ai/ba294e2c-c76d-499a-949c-bc56c25bb621.webp | https://d1xarpci4ikg0w.cloudfront.net/b12071e6-38ba-4b5b-b67c-b34e284c0003.webp (320×210) |
| 16 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/dd82f729-859c-42ec-a39c-61af06735bdb | https://static.higgsfield.ai/dd82f729-859c-42ec-a39c-61af06735bdb.mp4 | https://static.higgsfield.ai/dd82f729-859c-42ec-a39c-61af06735bdb.webp | https://d1xarpci4ikg0w.cloudfront.net/54eed361-cc44-4024-8217-2207b71219c7.webp (320×210) |
| 17 | https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/f92d8357-8ea4-4d11-a3da-99351fc10ff7 | https://static.higgsfield.ai/f92d8357-8ea4-4d11-a3da-99351fc10ff7.mp4 | https://static.higgsfield.ai/f92d8357-8ea4-4d11-a3da-99351fc10ff7.webp | https://d1xarpci4ikg0w.cloudfront.net/4d24114c-f9f1-4d15-a346-0fbad401361b.webp (320×486) |

Source pages: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960, https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38. Crawled 2026-09.


## Real sample prompts (site)

17 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `f92d8357-8ea4-4d11-a3da-99351fc10ff7`** (priority 16) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2daefd46-5bb0-46d0-875c-8401d8729ca6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b78288db-6d03-4b41-bf71-a52209042b34.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/f92d8357-8ea4-4d11-a3da-99351fc10ff7

```text
A man dressed in a dark coat stands hunched over a perfectly still body of water under a pale white sky, his hands drooping toward the glassy surface. The camera is centered in front of him at eye level, capturing his melancholic posture and the flawless reflection of his silhouette in the mirror-like water. Suddenly, the camera fast zooms in with cinematic precision, the sound dims, and the world blurs into a surreal ripple. In one continuous motion, the perspective shifts beneath the waterline to reveal the same man now fully submerged, suspended in an eerie underwater void. His body is limp, floating in a fetal hunch, untouched by gravity. The light above him is faint and diffused, casting ghostly shadows on his form, emphasizing his solitude and introspective stillness. The transition is smooth and dreamlike, enhancing the emotional weight of the descent.

















```

- **Sample `dd82f729-859c-42ec-a39c-61af06735bdb`** (priority 15) — Wan 2.5 motion preset, steps=45, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d4a4c837-7f6c-4680-85e9-d654da10c2e8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/18739e07-89ff-4958-a3e5-9fb7380e3bd5.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/dd82f729-859c-42ec-a39c-61af06735bdb

```text
The camera make a fast zoom-in to the female rap artist’s face. Her expression is fierce and unyielding, lips moving fast as she delivers bold, aggressive lines directly to the lens. Just as the zoom reaches a sharp close-up—her eyes locked with the viewer—two hands, emerging from the top of the frame, lower a gleaming golden crown onto her head. The crown settles just as she finishes her verse, her expression never breaking.
```

- **Sample `ba294e2c-c76d-499a-949c-bc56c25bb621`** (priority 14) — Wan 2.5 motion preset, steps=35, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/36a129b8-0b3d-40cb-9655-44edb61578cf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b2f73bb9-22b6-44b3-aea8-5fb7bc4bfe75.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ba294e2c-c76d-499a-949c-bc56c25bb621

```text
In a vivid kitchen adorned with pastel hues and quirky contrasts, the atmosphere hums with an unusual tension, the vibrant green countertops buzzing against the backdrop of yellow cabinets. Potatoes lay scattered, hinting at a domestic ritual poised for disruption. Suddenly, the camera crashes inward, zeroing in on the model’s hand, gloved in bright red, fiercely gripping a potato peeler while her eyes burn with intensity. The focus sharpens on the peeling action, the shiny blade flickering as it glides against the potato's surface, revealing layers of skin and essence. This pivotal moment amplifies the emotional stakes, merging beauty and an undercurrent of chaos, inviting the viewer to become entangled in the juxtaposition of art and labor.
```

- **Sample `1686dbf4-f6c6-4776-8035-4c1f94fee9e3`** (priority 13) — Wan 2.5 motion preset, steps=34, frames=81, strength=1, guide_scale=3.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/05474bd1-a8d7-40a7-ae75-079df7daccf1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5f2ee62f-23f4-489b-bd98-0e72753f917a.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/1686dbf4-f6c6-4776-8035-4c1f94fee9e3

```text
Camera dives smoothly downward in a fluid “crane down” motion, starting from the serene portrait of a blonde woman in a white blazer standing outdoors beneath clear skies, gently lowering beneath a watery surface. As bubbles and soft ripples emerge, the image seamlessly transitions underwater, revealing a surreal monochrome close-up of another figure submerged in fine, shimmering sand. The submerged person’s face and hands slowly emerge through the sand, fingers spreading open as though gently pushing the grains away, capturing a tranquil yet mysterious atmosphere beneath the water.
```

- **Sample `ee7e672d-5db7-40e6-be64-cbc8ffe46c26`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2528×1440
  - input image: https://d1xarpci4ikg0w.cloudfront.net/82881961-3689-4500-a556-f93d7617c0a4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/544e533b-6f44-44c7-8899-5975911eae6e.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/ee7e672d-5db7-40e6-be64-cbc8ffe46c26

```text
Crash zoom in on a man as he walks to the car
```

- **Sample `81d24a54-e3a6-4651-bc71-9bb0596b26e2`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7731dc7d-039f-4cc8-8539-367e5c789df8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fb0e0ce0-bd0b-41fa-a09a-68f1cb7dcb5e.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/81d24a54-e3a6-4651-bc71-9bb0596b26e2

```text
A woman in a sleek black suit stands poised atop a vivid blue wall, her arm outstretched as if beckoning someone. Below, a black panther prowls silently across the blue floor, muscles rippling under its glossy fur. ZOOM IN the woman’s face, her calm expression flickering with unease as she slowly lowers her hand. The sky overhead darkens slightly, clouds rolling in.
```

- **Sample `90f7df37-089e-438e-b029-a730abfce331`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/44439e40-051b-4738-a73c-2dd79491689d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3b63e13d-0ace-4b40-bf54-61bea93d4148.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/90f7df37-089e-438e-b029-a730abfce331

```text
A sleek neon-green sports car begins to exit a dimly lit garage, the large industrial door slowly lifting open. Overhead fluorescent lights cast sharp, clean reflections along the glossy hood as the car rolls forward. A stylish woman in oversized sunglasses and a white jacket sits confidently behind the wheel, her expression calm and composed. As the car passes the garage threshold, the environment dramatically shifts—now she’s in the vibrant heart of a bustling metropolis at night. Skyscrapers, glowing billboards, and neon signs reflect on the car’s surface, blending the transition from the quiet garage to the electric city.

Style: Cinematic, neon lighting, futuristic to urban transition
Mood: Cool, powerful, fashion-forward, seamless transformation
Camera angle: Low front-facing, centered
Details: Smooth transition in environment, strong contrast between dim garage and vivid city lights, reflections dancing across the windshield and hood, cyberpunk edge
```

- **Sample `7cdc16a3-7c49-4297-864e-d595806ac78d`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/60fefb5c-634c-4f84-8535-191fc71d1ec0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7be7404c-e133-4530-9d46-a846c0ded411.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/7cdc16a3-7c49-4297-864e-d595806ac78d

```text
Camera begins with the woman in a bright pink rabbit suit confidently reading rap under the scorching sun. Sand blows gently in the desert breeze. Suddenly, the camera makes a fast zoom in toward the man in the background—dressed in a bee costume and standing inside a rusty convertible. His expression is fierce, eyes locked forward, aggressively delivering rap verses with sharp gestures and intense energy, commanding the scene with raw attitude.
```

- **Sample `e870d5b9-5613-430a-9181-e03e6d52f84e`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b2a286d3-f94c-4d65-9a58-9f0eb981e2ac.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8b859d56-2a0d-49e8-8bf5-7a3bf676ac39.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/e870d5b9-5613-430a-9181-e03e6d52f84e

```text
Camera fast zooms in to the cabin of the flying helicopter, revealing the intense, focused gaze of the pilot. He wears a white pilot's helmet with a visor slightly lowered, his face lit dimly by the control panel glow, eyes locked ahead with determination.
```

- **Sample `10a12ce6-c759-4c0a-8323-eda064d5ac5a`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9cf8f758-7f88-4d34-8694-c94152c38026.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c7b529ac-d328-4f53-b186-09066387d2d7.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/10a12ce6-c759-4c0a-8323-eda064d5ac5a

```text
Fast zoom in to the man's face in the sky at the center of the frame—his expression calm but commanding, a thick cigar resting between his lips, black sunglasses hiding his eyes, contrasting against the divine radiance and ethereal presence surrounding him.
```

- **Sample `fc4b0693-d283-4289-b260-c5776a361cbd`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c6f35c6c-8faa-4282-b4fc-7604c8c88132.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0a8f649b-c027-46d5-9285-12e036348a73.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/fc4b0693-d283-4289-b260-c5776a361cbd

```text
hyper realistic, unreal engine 5, zoom in toward a colossal robot striding through the raging ocean, each step sending waves surging outward. Storm clouds churn above, lightning flickers in the distance, and the robot’s glowing core illuminates its mechanical frame as it advances directly toward the viewer with unstoppable force. The sea roars beneath it, amplifying the dramatic, apocalyptic atmosphere.
```

- **Sample `18a1bac8-73ff-4f58-a4c5-7e623b90e600`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1bdd5103-38a6-4566-bb82-68bd5de51113.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2dd7a506-fd54-4719-9963-8fe099b4f0c3.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/18a1bac8-73ff-4f58-a4c5-7e623b90e600

```text
A black and white street scene focuses on the face of a man getting a haircut on the sidewalk. He is sitting on a box, the barber carefully and precisely cutting his hair. The camera is focused on him.The rough texture of the city, the fallen hair on the sidewalk and the gritty urban energy give the image a poetic documentary feel.

Style: Black and white, urban street photography
Mood: Intense, expressive, real
Camera angle: Medium-close focus on the rapper's face
Details: The tension of his face as he raps, the trimmer near his head, the surrounding city life frozen around them
```

- **Sample `d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b2f28f88-af07-4e16-97be-0b63997d803a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/86873ddd-ddff-4c36-9769-558b2f5cbf9a.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/d9f90d10-bdc9-4b13-a2f4-aa3a4c1b4c53

```text
The camera focuses on the man's head, he takes off his glasses and looks straight into the camera and smiles
```

- **Sample `3dbead9d-3e93-42c7-a726-0e6fb6f52a60`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f5414332-78c2-48ee-a939-8c9daa8ee1fc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7fd95b59-8d89-4cf8-86e3-532a66460fe6.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/3dbead9d-3e93-42c7-a726-0e6fb6f52a60

```text
The camera focuses on the raven's head, the raven looks at the camera and winks
```

- **Sample `7c934ae4-5d7c-4097-843e-8ae5737a7380`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b699f514-269c-4954-8478-76e00769c7db.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/43dacf16-9644-41cb-b218-ae329cba7a2a.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/7c934ae4-5d7c-4097-843e-8ae5737a7380

```text
Focus on the man's face, he looks around and continues to tug at the knife in his hand
```

- **Sample `858fa028-22a2-407e-8a51-4a3b8cc31e0d`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1488×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1df7c979-52a3-47c7-aa61-138e60978187.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ae454e01-a55f-4acd-972c-fea10e967279.mp4
  - page: https://higgsfield.ai/motion/a2dddb76-03fa-429e-9905-577bffdf9d38/858fa028-22a2-407e-8a51-4a3b8cc31e0d

```text
Monk throws away the heavy water can and starts running towards a forest.
```

- **Sample `39cf50cd-26ea-4793-a32f-0d906e38d1f5`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1312×688
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8a267f99-ac2c-4140-bcfc-1029f6b7d7b9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c119b9d2-0903-4240-9f25-59ece75222f2.mp4
  - page: https://higgsfield.ai/motion/1cc27a2b-3b89-44d4-a7f9-d583454a8960/39cf50cd-26ea-4793-a32f-0d906e38d1f5

```text
A man takes out a gun and takes aim to a moving far away target. Then shoots.
```
