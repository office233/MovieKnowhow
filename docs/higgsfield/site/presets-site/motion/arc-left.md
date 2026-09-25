# Arc Left — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera curves gracefully around the subject to the left, adding a sense of movement, focus, and cinematic style. Ideal for emotional build-up or visual flair.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131 | `2a5d8f86-aef3-4b34-b5ee-fb2020daa131` | -241 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2a5d8f86-aef3-4b34-b5ee-fb2020daa131 |
| https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433 | `a5b35657-5a5f-47cb-8042-786381f47433` | 82 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5b35657-5a5f-47cb-8042-786381f47433 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman on a train platform turns to say goodbye; the camera arcs left around her as steam drifts behind.
```

Use it as: upload a start image that matches the scene, select motion preset **Arc Left**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa4751ab-d651-422f-9ce6-7a1f76bc737b.webp (320×236)
- Card preview, variant `a5b35657`: https://d1xarpci4ikg0w.cloudfront.net/04f94311-3be7-4f92-9006-4dcf995687f4.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/36936010-9845-47f6-be49-afa2ad4602f6 | https://static.higgsfield.ai/36936010-9845-47f6-be49-afa2ad4602f6.mp4 | https://static.higgsfield.ai/36936010-9845-47f6-be49-afa2ad4602f6.webp | https://d1xarpci4ikg0w.cloudfront.net/05d7d0ac-254e-48ca-99ad-b0a3b8f5b5ee.webp (320×424) |
| 2 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/9aab013a-eba1-4158-84c6-7dcebeca3803 | https://static.higgsfield.ai/9aab013a-eba1-4158-84c6-7dcebeca3803.mp4 | https://static.higgsfield.ai/9aab013a-eba1-4158-84c6-7dcebeca3803.webp | https://d1xarpci4ikg0w.cloudfront.net/b79ebabe-3f5f-4aff-92b8-1ff44aa59cb0.webp (320×424) |
| 3 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/ec46b6c1-9089-4264-ab7f-dc494893895a | https://static.higgsfield.ai/ec46b6c1-9089-4264-ab7f-dc494893895a.mp4 | https://static.higgsfield.ai/ec46b6c1-9089-4264-ab7f-dc494893895a.webp | https://d1xarpci4ikg0w.cloudfront.net/812b1ef1-3c25-46e4-9848-8007b8427b40.webp (320×242) |
| 4 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/f9043e58-c9fe-44d7-942e-4266f1ca1405 | https://static.higgsfield.ai/f9043e58-c9fe-44d7-942e-4266f1ca1405.mp4 | https://static.higgsfield.ai/f9043e58-c9fe-44d7-942e-4266f1ca1405.webp | https://d1xarpci4ikg0w.cloudfront.net/2b73c966-786d-4a5e-92e2-ec4231a66874.webp (320×210) |
| 5 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/5a92f3a5-3437-4ff8-9edd-b87a8c423674 | https://static.higgsfield.ai/5a92f3a5-3437-4ff8-9edd-b87a8c423674.mp4 | https://static.higgsfield.ai/5a92f3a5-3437-4ff8-9edd-b87a8c423674.webp | https://d1xarpci4ikg0w.cloudfront.net/d6d06122-f69a-4bfa-bc60-5fb25b79a21c.webp (320×424) |
| 6 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/2e7dd41c-bd13-478f-aa55-168449627a35 | https://static.higgsfield.ai/2e7dd41c-bd13-478f-aa55-168449627a35.mp4 | https://static.higgsfield.ai/2e7dd41c-bd13-478f-aa55-168449627a35.webp | https://d1xarpci4ikg0w.cloudfront.net/92a7787d-110b-42f5-b80a-bc3d1626e663.webp (320×236) |
| 7 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/03c7a83c-fe19-4ef8-b017-2f25194595cc | https://static.higgsfield.ai/03c7a83c-fe19-4ef8-b017-2f25194595cc.mp4 | https://static.higgsfield.ai/03c7a83c-fe19-4ef8-b017-2f25194595cc.webp | https://d1xarpci4ikg0w.cloudfront.net/d45fb578-ff4b-4bd9-92ac-d9f5b3cd38aa.webp (320×182) |
| 8 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/b541406c-d840-4297-8300-6524322b1113 | https://static.higgsfield.ai/b541406c-d840-4297-8300-6524322b1113.mp4 | https://static.higgsfield.ai/b541406c-d840-4297-8300-6524322b1113.webp | https://d1xarpci4ikg0w.cloudfront.net/511d24df-b1b7-4df4-83b1-42f7c2277fd6.webp (320×242) |
| 9 | https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/e2b86912-8d1d-40d2-ba81-d3fd96c23359 | https://static.higgsfield.ai/e2b86912-8d1d-40d2-ba81-d3fd96c23359.mp4 | https://static.higgsfield.ai/e2b86912-8d1d-40d2-ba81-d3fd96c23359.webp | https://d1xarpci4ikg0w.cloudfront.net/d93ea746-e33f-4f97-afbd-491e1ad586bc.webp (320×180) |

Source pages: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131, https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `e2b86912-8d1d-40d2-ba81-d3fd96c23359`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/395a463a-3ac7-4bf2-a946-6aa15524d195.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6ca773a3-a960-46f9-8535-47b7013f49a2.mp4
  - page: https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433/e2b86912-8d1d-40d2-ba81-d3fd96c23359

```text
The camera rotates around the woman and shows preparing for a tennis match
```

- **Sample `b541406c-d840-4297-8300-6524322b1113`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b0fb4c8e-231a-4e17-9a7d-8f2557e3dfc9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0f4829e8-48f9-4de9-b2b4-af3a5cd10e90.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/b541406c-d840-4297-8300-6524322b1113

```text
The camera arcs gracefully to the left around a young noblewoman seated in stillness, her embroidered sapphire robe shimmering softly under ambient light. Ornate chains from her jeweled headpiece sway gently as she turns her face toward camera, eyes calm yet unreadable. The movement draws out the quiet power in her posture — elegant, unshaken, eternal.
```

- **Sample `03c7a83c-fe19-4ef8-b017-2f25194595cc`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/072ddcac-f3d9-4763-87db-c4cf87a61149.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/96b011ee-9b6e-40fa-9bbb-a4106e97cced.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/03c7a83c-fe19-4ef8-b017-2f25194595cc

```text
A weathered gladiator walks through a golden wheatfield at sunset, his scarred hand grazing the tops of the swaying stalks. The camera performs a gentle arc around his hand, capturing the movement of the wheat brushing against his fingers, illuminated by warm sunlight. Dust particles float in the air, and the field stretches endlessly into the distance. The fabric on his wrist flutters slightly in the breeze. The atmosphere is meditative and solemn, evoking memory and legacy. Styling is cinematic with warm, desaturated tones, anamorphic flares, and a shallow depth of field that isolates the hand against the soft golden sea of grain.
```

- **Sample `2e7dd41c-bd13-478f-aa55-168449627a35`** (priority 6) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2df5be24-3d9e-481a-ae72-7e7c1f8d1629.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ea8974f2-adb3-46f9-a752-cc1daffa3397.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/2e7dd41c-bd13-478f-aa55-168449627a35

```text
A young woman stands waist-deep in still, dark water, wearing a glossy black raincoat with the hood up. Her expression is calm and introspective. Around her, several golden koi fish glide gently beneath the surface. The upper background is a clean, soft neutral wall, while below the waterline, the scene fades into a rich navy depth. Her hands hang relaxed at her sides, partially submerged, with the fish weaving between them.

The camera begins a slow arc-left movement, starting from her right-front angle and gliding gradually toward her left profile. As the arc progresses, she gently lowers her gaze, looking downward into the water to observe the fish. Her eyes follow their subtle movement as light flickers across the surface. Her expression remains serene, almost meditative, as the fish continue to drift peacefully around her.

Ensure her eye movement is smooth and realistic, timed with the camera’s pace. Fish should swim with believable momentum, creating soft ripples. Maintain the clarity of the waterline and the texture of both the coat and background wall throughout. No warping or stretching should affect the subject, water, or marine life during the arc. The lighting must stay soft and continuous across her face and the fish below.
```

- **Sample `5a92f3a5-3437-4ff8-9edd-b87a8c423674`** (priority 5) — Wan 2.5 motion preset, steps=24, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d5d48f91-be6d-48f5-babf-a9e0d3340761.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a0b2f2e7-028d-4f28-82da-c3ddae152a36.mp4
  - page: https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433/5a92f3a5-3437-4ff8-9edd-b87a8c423674

```text
A woman stands with her back to the viewer, wearing a sculptural helmet carved from light marble, detailed with classical floral reliefs and vertical ridges. Her black draped garment falls elegantly, evoking Greco-Roman ceremonial dress. The background is neutral gray, allowing focus on the interplay of smooth stone texture and rich black fabric. The atmosphere is regal and timeless, as though she’s a living statue about to come to life.

The camera begins a slow arc-left movement from directly behind her, curving steadily around her right shoulder to gradually reveal her face. As the camera moves, her head remains still, allowing her features to emerge gradually. Her face is striking — high-cheekboned with strong dark brows, luminous olive skin, and deep, expressive brown eyes that catch the light with intensity. Her features reflect ancient Greek beauty, stoic yet full of presence.

Ensure the helmet remains sharply defined, with no warping of marble patterns or distortion of floral reliefs. Keep the fabric motionless and natural, without flicker or stretching. The facial reveal must be smooth, with consistent lighting and clear focus on the eyes. Avoid any changes to skin tone or background during the arc. The transition should feel fluid, dignified, and sculpturally precise.
```

- **Sample `f9043e58-c9fe-44d7-942e-4266f1ca1405`** (priority 4) — Wan 2.5 motion preset, steps=25, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cfd40fbd-681a-4fde-af66-5cebcde3d0ae.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2af4cc11-dc6c-4d21-af98-41c957beca1b.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/f9043e58-c9fe-44d7-942e-4266f1ca1405

```text
A stylish man sits confidently in a modern lounge chair, dressed entirely in rich red textures — a tailored suit jacket with beaded embroidery, ribbed knit top, and glossy vinyl trousers. Jewelry gleams from his wrist and neck, complementing his relaxed, poised hand placement. He gazes directly into the camera, exuding quiet power and elegance. The deep red velvet backdrop and matching carpeted floor create a monochromatic luxury atmosphere with cinematic depth.

The camera begins a slow arc-left movement, starting from a frontal angle and gliding steadily toward his left side, all while maintaining eye-level framing. As it moves, the man's gaze follows the camera slightly but subtly — never breaking his composed presence. The shift reveals more contour and texture in the folds of his pants and chair’s wood grain, enhancing the richness of the scene.

Maintain lighting balance across all surfaces — highlights on vinyl, shadows in folds, reflections on jewelry. The background curtain and carpet should remain stable and undistorted throughout. Keep the man's pose and expression fixed with no glitches or deformations in the movement of the arc.
```

- **Sample `ec46b6c1-9089-4264-ab7f-dc494893895a`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/056b223c-ac6b-48e0-b9d7-e306243a19f5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fcf8fc34-e625-4c35-b3a1-b520d7376d9b.mp4
  - page: https://higgsfield.ai/motion/a5b35657-5a5f-47cb-8042-786381f47433/ec46b6c1-9089-4264-ab7f-dc494893895a

```text
A man stands motionless at the center of a minimalist, surreal stage — a green, raised platform suspended in a void of deep black. He wears an oversized cream blazer, wide-legged denim jeans, and futuristic sneakers. His posture is relaxed yet self-assured, head turned slightly to the left as if observing something in the distance. The lighting is focused, casting a soft halo around him, while the rest of the scene remains in complete shadow, heightening the visual isolation and fashion-forward atmosphere.

The camera performs a slow arc to the left, gradually shifting from a frontal angle to a three-quarter left profile view. The man does not move, remaining perfectly still throughout the motion. As the camera curves, subtle perspective changes emphasize the platform’s volume and symmetry, revealing its floating edges and dimensionality while keeping the figure centered and sharp.

Ensure the black background remains solid and artifact-free, with no edge bleeding or motion flicker. The green platform must retain perfect geometry and shadow falloff, with no warping during the arc. The man’s silhouette, folds of his blazer, and shape of the jeans should remain intact without any visual distortion. Keep lighting and reflection on his clothing consistent and realistic throughout the movement.
```

- **Sample `9aab013a-eba1-4158-84c6-7dcebeca3803`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c96687e3-b858-404d-a15b-7daf56d5efdd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6bc5992e-02e4-4c74-bd28-82fa466c3a09.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/9aab013a-eba1-4158-84c6-7dcebeca3803

```text
A young man stands motionless against a clean gradient background fading from pale cyan at the bottom to soft blue at the top. He wears a glossy oversized black puffer jacket, bright yellow vinyl pants cinched at the ankles, and white sneakers. His posture is calm and composed, gaze lowered slightly. The lighting is crisp and diffused, casting a soft shadow beneath him and emphasizing the texture contrast between the matte floor and the reflective jacket and pants.

The camera begins a slow arc-left movement, starting from his right-front side and gliding smoothly around to his left-front quarter view. Just as the arc starts, the man silently crosses his arms in front of his chest—minimal, deliberate, and synchronized with the camera’s rhythm. The background color and studio floor remain perfectly consistent throughout, reinforcing a clean fashion editorial vibe.

Preserve smooth gradients and lighting uniformity—no color banding or jumps. Ensure the crossing arms animation is subtle and clean, without distorting the jacket or breaking silhouette. Keep shoe shape, floor shadows, and fabric reflections fully stable during movement. Background must remain seamless with no horizon or texture shift.
```

- **Sample `36936010-9845-47f6-be49-afa2ad4602f6`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a5af8e11-1a45-4876-8e8c-55e24bd0046f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9be00b3b-58a3-43a3-9804-51262bfa9d37.mp4
  - page: https://higgsfield.ai/motion/2a5d8f86-aef3-4b34-b5ee-fb2020daa131/36936010-9845-47f6-be49-afa2ad4602f6

```text
A cozy, sun-drenched living room where golden afternoon light streams through a white-framed window, casting soft shadows on the floor. A young woman lies still on a cream leather sofa, dressed in olive cargo pants and a beige tank top, silver headphones over her ears. She remains motionless, eyes closed, calmly enjoying the music and the warmth of the sun on her skin. The atmosphere is quiet, peaceful, and emotionally rich.

The camera begins a slow arc-left movement, capturing the moment as the small brown dog in the foreground suddenly leaps onto the sofa. The girl opens her eyes slightly, smiling gently as she shifts her arm to greet the dog, her hand resting softly on its back as it nestles beside her. The arc continues smoothly, showing this subtle interaction as the light grazes across her relaxed expression and the dog’s soft fur.

Preserve the gentle lighting, soft shadows, and consistent sunlight throughout the camera movement. The sofa, pillow, and fish tank must remain stable and unaffected by motion. Ensure the dog’s jump is fluid and realistic—no warping or floating—and the girl’s hand motion must be minimal and natural. All background elements should stay locked in place for visual consistency.
```
