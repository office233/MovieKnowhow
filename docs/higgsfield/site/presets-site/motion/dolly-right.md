# Dolly Right — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly to the right alongside the subject or scene. Great for tracking motion, revealing space, or adding cinematic flow.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023 | `17a8f1d4-88a4-4bb5-a662-c28e8ea7d023` | 74 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=17a8f1d4-88a4-4bb5-a662-c28e8ea7d023 |
| https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261 | `22f946c2-ed60-44bf-bca3-2be92c07d261` | 36 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=22f946c2-ed60-44bf-bca3-2be92c07d261 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A vintage car cruises down a desert highway; the camera tracks right alongside it, heat haze shimmering over the asphalt.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Right**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Lateral track to the right · **Best use:** Same as Dolly Left · **Models:** — · **Phrase/template:** "Camera Dolly Right as the car accelerates" · **Tips:** Parallax: "Background moves slower than foreground."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/9eb5d907-5a7f-4990-9b09-c108dd4e90e9.webp (320×424)
- Card preview, variant `22f946c2`: https://d1xarpci4ikg0w.cloudfront.net/d39ae76c-52df-4908-8c82-fb3d17741152.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/4e040a7a-9409-47f7-89d3-632311466cbc | https://static.higgsfield.ai/4e040a7a-9409-47f7-89d3-632311466cbc.mp4 | https://static.higgsfield.ai/4e040a7a-9409-47f7-89d3-632311466cbc.webp | https://d1xarpci4ikg0w.cloudfront.net/a41b10b7-4e22-467c-a690-09eddacdde05.webp (320×424) |
| 2 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/90ba870f-f6f7-4abb-a4bf-94574a663b55 | https://static.higgsfield.ai/90ba870f-f6f7-4abb-a4bf-94574a663b55.mp4 | https://static.higgsfield.ai/90ba870f-f6f7-4abb-a4bf-94574a663b55.webp | https://d1xarpci4ikg0w.cloudfront.net/c8dd50c7-420f-4af8-83f4-6e12cb14330c.webp (320×486) |
| 3 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/46e70134-b7ba-432c-ae02-969423e6d26f | https://static.higgsfield.ai/46e70134-b7ba-432c-ae02-969423e6d26f.mp4 | https://static.higgsfield.ai/46e70134-b7ba-432c-ae02-969423e6d26f.webp | https://d1xarpci4ikg0w.cloudfront.net/276ad313-1b8f-424b-8898-0481d7babef1.webp (320×562) |
| 4 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/b8ea73fb-4042-4ffc-9bda-90ae27855477 | https://static.higgsfield.ai/b8ea73fb-4042-4ffc-9bda-90ae27855477.mp4 | https://static.higgsfield.ai/b8ea73fb-4042-4ffc-9bda-90ae27855477.webp | https://d1xarpci4ikg0w.cloudfront.net/e3e6bd82-76ea-40b2-98ff-b8289c76f4bd.webp (320×242) |
| 5 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/15539cad-365b-454c-a5a1-e5590f58c481 | https://static.higgsfield.ai/15539cad-365b-454c-a5a1-e5590f58c481.mp4 | https://static.higgsfield.ai/15539cad-365b-454c-a5a1-e5590f58c481.webp | https://d1xarpci4ikg0w.cloudfront.net/c9af3c07-ce09-40a5-bcc0-1e8fc0ca870c.webp (320×180) |
| 6 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/3c9105d3-3e99-450a-a409-6cfc0216de71 | https://static.higgsfield.ai/3c9105d3-3e99-450a-a409-6cfc0216de71.mp4 | https://static.higgsfield.ai/3c9105d3-3e99-450a-a409-6cfc0216de71.webp | https://d1xarpci4ikg0w.cloudfront.net/e7a328d0-1a41-4a4c-95c2-d2ae34ef3b88.webp (320×182) |
| 7 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/bf13f461-35d2-4681-81cb-e5845914f330 | https://static.higgsfield.ai/bf13f461-35d2-4681-81cb-e5845914f330.mp4 | https://static.higgsfield.ai/bf13f461-35d2-4681-81cb-e5845914f330.webp | https://d1xarpci4ikg0w.cloudfront.net/aa0ee0bc-0be0-43a2-9a4c-9d533e323c3f.webp (320×182) |
| 8 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/22de4e0f-2e81-4468-b1ed-82afc456deae | https://static.higgsfield.ai/22de4e0f-2e81-4468-b1ed-82afc456deae.mp4 | https://static.higgsfield.ai/22de4e0f-2e81-4468-b1ed-82afc456deae.webp | https://d1xarpci4ikg0w.cloudfront.net/04885cb8-1926-4afa-b8b4-38bc9f9a5b0f.webp (320×242) |
| 9 | https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973 | https://static.higgsfield.ai/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973.mp4 | https://static.higgsfield.ai/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973.webp | https://d1xarpci4ikg0w.cloudfront.net/7965ebae-cec9-4fa9-bc80-758a4d40d495.webp (320×136) |

Source pages: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023, https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×624
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0a2d6812-ff62-45c8-b87b-54fdc79367c0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/965b4df6-dbb2-4479-a267-ef0a7bd9bf40.mp4
  - page: https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261/4eb5ab87-8b84-4a7a-b7d1-28b0fc73e973

```text
A man wrapped in a striped wool blanket stands at the edge of a foggy cliffside road, screaming into the vast, overcast landscape. Camera begins in a still wide shot, then dolly right movement starts—slow and smooth—gliding across the scene as the man’s anguished cry echoes. As the camera passes him, the background opens up to reveal an endless sea of dense forest stretching across misty rolling hills. The morning light is diffused and pale blue, lending the scene a melancholic, cinematic tone. 
```

- **Sample `22de4e0f-2e81-4468-b1ed-82afc456deae`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f8c716c7-958e-41f2-9d29-1275140d45dd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8c84a253-f84f-4f9e-a0e9-bce918c508cd.mp4
  - page: https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261/22de4e0f-2e81-4468-b1ed-82afc456deae

```text
Camera begins a slow dolly right, tracking past the glowing vehicle. As the camera moves, a figure steps into frame: a police officer, upright and stern, wearing a dark uniform and aviator sunglasses, illuminated by the reflection of flashing red and blue patrol lights. The officer pauses at the driver’s side window, silent, expression unreadable beneath his canine features.
```

- **Sample `bf13f461-35d2-4681-81cb-e5845914f330`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/50db29e4-4e65-4d40-a1c4-1a10bc6b4269.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fc0b64cb-ceaa-4775-a9c5-02eab43ae75c.mp4
  - page: https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261/bf13f461-35d2-4681-81cb-e5845914f330

```text
A woman walks purposefully to the right, her silhouette framed against the darkened cityscape. Street lamps cast a warm, golden hue, illuminating her path while the surrounding buildings loom like silent witnesses in the twilight. The atmosphere is a blend of solitude and contemplation, as the soft evening breeze ruffles her hair slightly. In this quiet urban moment, the play of light and shadow accentuates her determined expression, suggesting a deeper narrative beneath her casual demeanor. The scene is infused with a sense of movement, echoing the rhythm of the city as night descends.
```

- **Sample `3c9105d3-3e99-450a-a409-6cfc0216de71`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cf1611d4-aeaa-427c-88aa-b7da95c05ee8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7cebb7bb-4a59-43e6-b827-ab7879a16e1d.mp4
  - page: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/3c9105d3-3e99-450a-a409-6cfc0216de71

```text
A young man, clad in a black leather jacket that flutters with his brisk pace, runs down a bustling street under the glow of neon lights. The atmosphere pulses with energy as the reflective surfaces of the pavement glimmer under the stark colors of the city at night. His expression is focused, conveying determination and urgency. The kinetic motion creates a blur of city life around him, accentuating his speed and relentless drive. As he navigates the urban landscape, the ambient light plays across his features, revealing a story of aspiration and adventure amid the vibrant chaos.
```

- **Sample `15539cad-365b-454c-a5a1-e5590f58c481`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/307fdd07-57ce-4f24-bd6c-08177e67fb1f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/133db62b-47ee-46f5-9366-0db76d965cfc.mp4
  - page: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/15539cad-365b-454c-a5a1-e5590f58c481

```text
A man in a dark trench coat walks past a black car, lost in deep thought. The fading twilight bathes the scene in soft blues and grays, with shadows elongating across the ground. His face is slightly obscured by his glasses, reflecting a sense of introspection and solitude. The car stands still, its sleek surface contrasting with the blurred movement of the man, suggesting a moment frozen in time. The atmosphere feels heavy, filled with unspoken tension, as the wind rustles the nearby trees, enhancing the emotional weight of his solitary journey.
```

- **Sample `b8ea73fb-4042-4ffc-9bda-90ae27855477`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3ddc9f38-04c3-4104-bfef-ab9c4443b75e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bf2af35e-f4cd-4ccf-bc71-cc09190938d2.mp4
  - page: https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261/b8ea73fb-4042-4ffc-9bda-90ae27855477

```text
A man sits at a rustic wooden table, his silhouette framed against the warm glow of a sunbeam piercing through a dusty window. His thoughtful posture and contemplative expression hint at a story untold, as he rests his chin on his hand, lost in thought. The camera dollies right. Dust particles dance in the air, illuminated by the warm, golden hue of the sun, enhancing the scene's emotional weight. The fan beside him stands still, a testament to time's passing, as the atmosphere fills with palpable tension.
```

- **Sample `46e70134-b7ba-432c-ae02-969423e6d26f`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5d0fa7fe-a1c8-4869-b1cc-b6264ce80f4c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/29a61615-122e-485e-b41b-4c7f4fa4399f.mp4
  - page: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/46e70134-b7ba-432c-ae02-969423e6d26f

```text
The camera dollies right fast, revealing the other part of a sleek dodge. The license plate shows Higgsfield" text written in bold black"
```

- **Sample `90ba870f-f6f7-4abb-a4bf-94574a663b55`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eda731c3-58fc-4d62-9b02-47bb07bd836d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7af12f62-50d1-4205-b656-d082521133d8.mp4
  - page: https://higgsfield.ai/motion/17a8f1d4-88a4-4bb5-a662-c28e8ea7d023/90ba870f-f6f7-4abb-a4bf-94574a663b55

```text
The scene unfolds in a serene green pasture, illuminated by soft morning light that casts gentle shadows across the flock of sheep. As the camera dollies smoothly to the right, the texture of the woolen sheep coats becomes prominent. The lush backdrop, filled with vibrant greens, adds depth to this intricate narrative.
```

- **Sample `4e040a7a-9409-47f7-89d3-632311466cbc`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c84fdb06-dd83-4a2e-9202-130c8c05fcf2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/70629f48-7620-4297-b4d9-5e7a1ac471f1.mp4
  - page: https://higgsfield.ai/motion/22f946c2-ed60-44bf-bca3-2be92c07d261/4e040a7a-9409-47f7-89d3-632311466cbc

```text
A vibrant animation begins with a static view of a pink Ferrari parked on lush green grass, framed by tropical palm trees under a moody sky. The camera begins a smooth dolly movement to the right, slowly revealing a stylish European grandpa standing next to the car. He's wearing a pastel pink longsleeve polo, crisp white golf pants, and a matching visor. His pose is confident—one hand on his hip, the other adjusting his shades. The lighting is soft and cinematic, and the atmosphere is cool and slightly surreal, as if out of a Wes Anderson film. Light breeze flutters his shirt slightly as birds chirp and the faint sound of distant ocean waves can be heard in the background.
```
