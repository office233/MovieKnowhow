# Robo Arm — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Uses a high-speed robotic camera to create fast, precise, and cinematic movements. Ideal for smooth motion shots, product reveals, or dynamic transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b | `1bd4363a-6e5a-4c57-90a5-30f0733a769b` | -249 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1bd4363a-6e5a-4c57-90a5-30f0733a769b |
| https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c | `6fef255d-cdd6-4463-b025-a42646866c1c` | 84 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6fef255d-cdd6-4463-b025-a42646866c1c |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A can of soda bursts from splashing ice water; a fast robotic camera whips around it in precise, slick motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Robo Arm**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Precise mechanical arc along a complex path · **Best use:** Choreographed scenes, product reveals · **Models:** Kling 3.0 · **Phrase/template:** "Robo Arm sweeps from headlights over the roof of the car" · "Camera: Robo Arm arcing slowly from the base up and around to the lid." · **Tips:** Tell the model the exact path ("from the base up and around to the lid"), not just "orbiting"

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/16ff46b6-72b2-4cdc-8d01-2b5e88f9b9de.webp (320×320)
- Card preview, variant `6fef255d`: https://d1xarpci4ikg0w.cloudfront.net/ba3205a2-c4a9-40ae-a6b3-5d4f270b8198.webp

### Sample videos (16; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880 | https://static.higgsfield.ai/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880.mp4 | https://static.higgsfield.ai/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880.webp | https://d1xarpci4ikg0w.cloudfront.net/5be9fccd-3e8b-4062-87da-e03aef55e45f.webp (320×180) |
| 2 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/8e22384b-2c94-4133-abe8-1834538a59c3 | https://static.higgsfield.ai/8e22384b-2c94-4133-abe8-1834538a59c3.mp4 | https://static.higgsfield.ai/8e22384b-2c94-4133-abe8-1834538a59c3.webp | https://d1xarpci4ikg0w.cloudfront.net/93a03e24-6678-4ab1-adab-bf38b383eed4.webp (320×180) |
| 3 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/046401fb-66b1-4765-953f-809b661b865e | https://static.higgsfield.ai/046401fb-66b1-4765-953f-809b661b865e.mp4 | https://static.higgsfield.ai/046401fb-66b1-4765-953f-809b661b865e.webp | https://d1xarpci4ikg0w.cloudfront.net/d41fcafa-7127-4a9e-adef-669ae2741100.webp (320×568) |
| 4 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3f89c641-05a1-473c-ac52-0f7a78a8b13b | https://static.higgsfield.ai/3f89c641-05a1-473c-ac52-0f7a78a8b13b.mp4 | https://static.higgsfield.ai/3f89c641-05a1-473c-ac52-0f7a78a8b13b.webp | https://d1xarpci4ikg0w.cloudfront.net/73242534-4684-441c-b5e3-5cb491cf5224.webp (320×236) |
| 5 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/bb7f992e-2dde-4603-bfc1-b11fd78cc43e | https://static.higgsfield.ai/bb7f992e-2dde-4603-bfc1-b11fd78cc43e.mp4 | https://static.higgsfield.ai/bb7f992e-2dde-4603-bfc1-b11fd78cc43e.webp | https://d1xarpci4ikg0w.cloudfront.net/fb9723ce-7a11-46d8-9d95-559f08e444bd.webp (320×432) |
| 6 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/bb5d5aff-0f0f-4e3a-8521-e9f30f048531 | https://static.higgsfield.ai/bb5d5aff-0f0f-4e3a-8521-e9f30f048531.mp4 | https://static.higgsfield.ai/bb5d5aff-0f0f-4e3a-8521-e9f30f048531.webp | https://d1xarpci4ikg0w.cloudfront.net/bc0496f7-ed68-4fbe-be00-e5986c0feb9b.webp (320×236) |
| 7 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/246d31f1-b280-43da-aede-0002bdc1710f | https://static.higgsfield.ai/246d31f1-b280-43da-aede-0002bdc1710f.mp4 | https://static.higgsfield.ai/246d31f1-b280-43da-aede-0002bdc1710f.webp | https://d1xarpci4ikg0w.cloudfront.net/4e7b8c39-d2c2-49d0-8bb8-c44dcf81d00b.webp (320×236) |
| 8 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e | https://static.higgsfield.ai/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e.mp4 | https://static.higgsfield.ai/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e.webp | https://d1xarpci4ikg0w.cloudfront.net/fbefb29b-f03f-491b-80dc-8fbb558eb787.webp (320×320) |
| 9 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7 | https://static.higgsfield.ai/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7.mp4 | https://static.higgsfield.ai/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7.webp | https://d1xarpci4ikg0w.cloudfront.net/a3404d4b-0b17-4a98-b711-20b5884a1ac9.webp (320×180) |
| 10 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419 | https://static.higgsfield.ai/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419.mp4 | https://static.higgsfield.ai/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419.webp | https://d1xarpci4ikg0w.cloudfront.net/e6ca42ba-f205-442b-88b1-329180c05e86.webp (320×180) |
| 11 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/d4c60e0c-4026-4f02-ad67-a12fa6249af5 | https://static.higgsfield.ai/d4c60e0c-4026-4f02-ad67-a12fa6249af5.mp4 | https://static.higgsfield.ai/d4c60e0c-4026-4f02-ad67-a12fa6249af5.webp | https://d1xarpci4ikg0w.cloudfront.net/4728eb20-e278-4240-a1d6-e913e3c69bd7.webp (320×180) |
| 12 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/f4501926-2665-4b03-8850-6ac8dc6c25b5 | https://static.higgsfield.ai/f4501926-2665-4b03-8850-6ac8dc6c25b5.mp4 | https://static.higgsfield.ai/f4501926-2665-4b03-8850-6ac8dc6c25b5.webp | https://d1xarpci4ikg0w.cloudfront.net/f0e014ef-f0e4-46eb-94cd-386d9f2fa456.webp (320×320) |
| 13 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/68e9b863-0eaa-45a3-9615-1252ccf3d8d3 | https://static.higgsfield.ai/68e9b863-0eaa-45a3-9615-1252ccf3d8d3.mp4 | https://static.higgsfield.ai/68e9b863-0eaa-45a3-9615-1252ccf3d8d3.webp | https://d1xarpci4ikg0w.cloudfront.net/bf18e6e6-acb1-4c82-9a9a-e5876076b53c.webp (320×242) |
| 14 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/c1ed6baf-f075-4db4-8bb8-6a423e4c2430 | https://static.higgsfield.ai/c1ed6baf-f075-4db4-8bb8-6a423e4c2430.mp4 | https://static.higgsfield.ai/c1ed6baf-f075-4db4-8bb8-6a423e4c2430.webp | https://d1xarpci4ikg0w.cloudfront.net/86a60579-6de6-4f1a-8bdb-317f06560b20.webp (320×182) |
| 15 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3b2651f9-f845-4646-ad1c-8a315995b4b4 | https://static.higgsfield.ai/3b2651f9-f845-4646-ad1c-8a315995b4b4.mp4 | https://static.higgsfield.ai/3b2651f9-f845-4646-ad1c-8a315995b4b4.webp | https://d1xarpci4ikg0w.cloudfront.net/8e47f51a-4297-42b2-9aaa-c23d48520bcd.webp (320×424) |
| 16 | https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/b0cc1b2c-55ae-4aab-80fd-cc33ce751152 | https://static.higgsfield.ai/b0cc1b2c-55ae-4aab-80fd-cc33ce751152.mp4 | https://static.higgsfield.ai/b0cc1b2c-55ae-4aab-80fd-cc33ce751152.webp | https://d1xarpci4ikg0w.cloudfront.net/642399d4-b3cb-4270-a23d-95fc250cb09f.webp (320×210) |

Source pages: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b, https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c. Crawled 2026-09.


## Real sample prompts (site)

16 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `b0cc1b2c-55ae-4aab-80fd-cc33ce751152`** (priority 15) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/432a8377-9017-41da-886c-c95cb942130c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/45333335-c8fe-45dc-87fc-da03c5b957b7.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/b0cc1b2c-55ae-4aab-80fd-cc33ce751152

```text
A woman in a sharp, sculptural red dress stands on the upper level of a modernist building, the sun casting deep shadows across the sleek white façade behind her. Her posture is poised and distant, one hand draped elegantly over the steel railing. She holds a small navy handbag, and her face is set in a quiet expression of control, her hair slicked back and sculptural. Harsh light carves geometric patterns across her dress and the surrounding architecture, reinforcing the minimalist power of the scene.

Angle 1: The camera begins from a low angle, looking up as she gazes downward, her face partially in shadow. The sun behind the corner of the building flares softly into frame. The lines of the architecture and her body form a sharp diagonal composition, giving the frame a feeling of tension and stillness.

Angle 2: The camera flies around her, revealing her from the other side — she now stands motionless, but perched on her shoulder is a vibrant green iguana. The shift is surreal. The animal blinks slowly while she stares into the distance, statuesque. In this new scene, the wind catches her dress ever so slightly, and the iguana shifts its claws against her fabric. Her face is calm, but the reptile’s presence adds an otherworldly contrast.

Angle 3: The camera floats back behind her, looking upward toward the clean verticals of the building. The iguana climbs gently toward her neck. She tilts her chin upward, letting the light trace across her jaw and collarbone. Shadows stretch across the concrete as the world falls quiet — fashion, nature, and control blending in a visual meditation.
```

- **Sample `3b2651f9-f845-4646-ad1c-8a315995b4b4`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/05218afe-9044-4f4d-b127-6b336d8c06fa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/98957e1a-8d2d-4a6d-852b-8b4676031d50.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/3b2651f9-f845-4646-ad1c-8a315995b4b4

```text
Pepe's frog head floats motionlessly inside a glass jar filled with a greenish fluid, its eyes open and expression neutral. The camera begins by moving to the right, slowly revealing the frog’s face with detailed texture, its melancholic eyes staring straight ahead, unblinking. As the camera continues its movement, it smoothly zooms out, transitioning to a wide shot that captures the entire dark laboratory in the background, dimly lit by eerie green and orange lights reflecting off metal surfaces and other similar jars lined along the shelves. In the final phase, the camera moves left, sliding past the jar while maintaining a steady focus on Pepe’s head. Its gaze remains unbroken, looking straight ahead with a lifeless, resigned expression, emphasizing the haunting stillness of the scene.
```

- **Sample `c1ed6baf-f075-4db4-8bb8-6a423e4c2430`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/608e3a10-1f48-426c-828f-e38295105f05.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/02f5d923-6644-4e8c-8bda-1c7906d9003b.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/c1ed6baf-f075-4db4-8bb8-6a423e4c2430

```text
Huge robot stands in a bustling sea port, its metallic body gleaming under the sun's rays. The camera begins by moving to the right, slowly revealing the intricate details of the robot’s face—its sharp angles, glowing eyes, and mechanical components intertwined with wires and metal plates. As the camera continues its movement, it smoothly zooms out, transitioning to a wide shot that captures the expansive sea port in the background, with towering cranes, stacked shipping containers, and docked cargo ships stretched across the harbor. In the final phase, the camera moves left, sliding past the robot's profile while maintaining a steady focus on its head. Its gaze remains unbroken, looking straight ahead with a stoic and imposing expression, emphasizing its dominating presence against the industrial landscape.
```

- **Sample `68e9b863-0eaa-45a3-9615-1252ccf3d8d3`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7f720f54-3b40-43ab-9c66-12bfb72f5c40.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4913ab22-601d-42de-99ce-6a2fb905dd48.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/68e9b863-0eaa-45a3-9615-1252ccf3d8d3

```text
The camera hovers motionless in front of the elderly woman, then abruptly shifts to follow the slow tilt of her head as she looks up at the darkening sky. Her arms tighten around the glossy, oversized orb, its surface catching a flicker of lightning. With a sharp jolt, the camera rises overhead, revealing her isolated figure in the middle of a vast, empty field under storm clouds. 
```

- **Sample `f4501926-2665-4b03-8850-6ac8dc6c25b5`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/87f0bb4e-d0d3-45d5-8179-508f083f1e0e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/812ca5eb-76d7-49fc-afb9-9a454de87b67.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/f4501926-2665-4b03-8850-6ac8dc6c25b5

```text
A man with long braids sits alone at a low wooden table in a dimly lit Japanese restaurant. He wears a surreal, pleated pink headpiece that frames his face like a sculptural halo — bold and theatrical against the minimalist surroundings. Tatami mats line the floor, and soft amber lanterns glow overhead, casting warm, dappled light across shoji screens and hand-painted scrolls hanging on the walls. He leans in with focused grace, chopsticks delicately lifting a tangle of steaming ramen noodles toward his lips. A lacquered soup spoon rests gently in his other hand, poised above the deep ceramic bowl with a hand-brushed crown motif.

Angle 1: The camera starts tight on his face as he slurps the noodles in slow motion. The ornate pink headpiece ripples slightly with his movement, illuminated by warm lantern glow. Behind him, the restaurant’s quiet elegance frames his stillness.

Angle 2: The camera swings to the side, revealing the full setting: a long counter lined with silent patrons, each immersed in their meals. A chef behind an open bar flame-sears a piece of fish, the motion captured in a blur of orange. The man’s bowl steams gently as he lowers his spoon into the broth, his expression serene.

Angle 3: The camera glides behind his shoulder, showing his back now slightly straighter. In this new moment, he has paused mid-meal, his gaze drifting toward a low wooden stage where a performer in a Noh mask begins a slow, hypnotic dance. His pink headpiece casts petal-like shadows onto the wall behind him as he watches, entranced.
```

- **Sample `d4c60e0c-4026-4f02-ad67-a12fa6249af5`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b8e89f96-8444-44d6-9277-85610f3f930f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c16e9906-a8f8-452c-8621-7f64e04494e2.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/d4c60e0c-4026-4f02-ad67-a12fa6249af5

```text
A man in a business suit stands in a sterile office environment, his face reflecting confusion or unease. The white walls, sharp lines, and bright lighting give the space an air of strict order and control. A badge hangs from his neck, reinforcing the corporate setting. His posture and expression hint at an underlying tension within this meticulously structured world.
```

- **Sample `3d4a9d4b-52d8-4f29-ae30-cc6c7999e419`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6de116e6-0488-4df7-b190-8e8db3ed312b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4639b18d-a8f8-4c72-ad0b-15b868139f06.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/3d4a9d4b-52d8-4f29-ae30-cc6c7999e419

```text
A soldier stands alone in a field of tall grass, his uniform dusty and worn. His rifle is slung over his back, and his helmet is tucked under his arm. He looks toward the horizon, where the sky is painted in shades of orange and purple. The distant hum of helicopters fades, leaving only the rustling of the wind in the silence.
```

- **Sample `fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bae42958-2d2a-4d66-b9f7-070867a6bdd9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0dc8e540-9310-422f-b7e1-c42e143d7bec.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/fb8ff2df-ca5c-47c8-be7c-88d1a9d113f7

```text
A person in a striking yellow-and-black tiger-striped jacket stands in a futuristic corridor, holding a phone. Their platinum blonde hair adds to their bold and eccentric appearance, while the tilted camera angle gives the scene a surreal quality. The metallic walls and cold lighting create a sleek, high-tech atmosphere. The contrast between the vivid outfit and the sterile surroundings heightens the visual impact of the image.
```

- **Sample `af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f77408b1-1ffb-4d67-8f7d-dea1cb2bc7ed.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/40761beb-043a-4591-af64-f40c28c10fed.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/af5a9c0f-dce5-44a0-b64a-43b9a5f87c8e

```text
A young man with curly hair stands in a dimly lit room, reaching out toward the camera with an intense expression, his mouth open as if mid-sentence or mid-shout. He wears a textured red sweater that contrasts with the cool-toned lighting behind him. The room features a black-and-white checkered floor and tiled walls. A neon sign in electric pink and blue glows behind him, casting soft hues across the scene. To the side, a round mirror reflects his outstretched hand and face, amplifying the tension. An old television set flickers static on the floor, adding a chaotic, surreal touch to the vibrant yet unsettling atmosphere. Bolt cam technique. ohwx tchnq
```

- **Sample `246d31f1-b280-43da-aede-0002bdc1710f`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/664b55e7-8f7b-4418-9f76-e73d4df2e218.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/661efd82-4c08-4a3e-8200-a22f54a5e7cd.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/246d31f1-b280-43da-aede-0002bdc1710f

```text
A man stands motionless in front of a massive, glowing full moon that dominates the background. He wears a textured lab coat over a suit and tie, with dark sunglasses masking his expression. His posture is rigid, hands resting stiffly at his sides. The ground beneath him is scattered with rocks and debris, evoking an otherworldly or lunar landscape. The stark black-and-white palette, combined with the grainy texture, creates a surreal and timeless atmosphere, as if frozen in a forgotten sci-fi narrative. The man’s calm presence contrasts sharply with the vastness of the moon behind him. Bolt cam technique.
```

- **Sample `bb5d5aff-0f0f-4e3a-8521-e9f30f048531`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/33dbabc5-c522-4659-aa8a-b100ee0824f8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1910a447-c193-47f7-aa04-24078eb3b4cb.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/bb5d5aff-0f0f-4e3a-8521-e9f30f048531

```text
A figure stands on a mound of earth beneath a dramatic, cloud-filled sky. The figure’s face is a reflective metallic skull, expressionless and cold. Dressed in a sharply tailored black suit with knee-length shorts, they wear polished shoes and gleaming metal prosthetic legs that shimmer under faint starlight. The clouds behind them are illuminated by bursts of radiant light, creating a stark contrast between shadow and glow. The figure’s imposing stance, combined with the surreal backdrop, evokes a haunting and futuristic presence. Bolt cam technique. ohwx tchnq
```

- **Sample `bb7f992e-2dde-4603-bfc1-b11fd78cc43e`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/70ea008f-b8cd-4178-805c-43f24dfcfeff.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/531c40a9-872c-4ab5-919c-ea61046802fa.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/bb7f992e-2dde-4603-bfc1-b11fd78cc43e

```text
A mysterious woman dressed in a dark, textured trench coat cinched at the waist stands against a chaotic backdrop of colorful, hand-painted symbols and abstract spider-like shapes. Her face is concealed beneath a tight black mask, leaving only her intense, focused eyes visible. She moves with calculated precision, her gloved hands gesturing rhythmically as her body sways in fluid, controlled motions. The soft glow of light emphasizes the sheen of her black leather boots as she pivots gracefully. The vibrant, chaotic mural behind her pulses with energy, contrasting her poised and enigmatic presence. Bolt cam technique. ohwx tchnq
```

- **Sample `3f89c641-05a1-473c-ac52-0f7a78a8b13b`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b6597d5d-7b88-4a31-85f3-fd8e836dfd70.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f02783d1-5ffa-458d-b781-671855e43c05.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/3f89c641-05a1-473c-ac52-0f7a78a8b13b

```text
A woman with voluminous curly hair sways gently under moody purple and blue lighting. She wears a dark blazer, her expression introspective as she moves with slow, deliberate grace. Her eyes flicker with emotion, and her body language tells a quiet story — her arms rising and falling in fluid motions, her shoulders shifting to the rhythm. Beams of soft light streak across the background, illuminating her face in fleeting glimpses, highlighting her poised yet vulnerable presence. The atmosphere feels intimate, her movements resembling a silent conversation with herself. Bolt cam technique. ohwx tchnq
```

- **Sample `046401fb-66b1-4765-953f-809b661b865e`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6394ea7d-f02a-48da-a51b-41d700985ba3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/273660a6-99e6-47fc-a622-d8497ad6fbab.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/046401fb-66b1-4765-953f-809b661b865e

```text
A figure clad in a sleek, form-fitting black bodysuit with elongated rabbit-like ears stands in a narrow dirt path surrounded by dense, sunlit foliage. The figure’s body undulates in slow, fluid motions, each gesture sharp yet hypnotic. Their gloved hands extend gracefully, fingers curling as they sway, bathed in the golden glow of the sun directly behind their head — forming a radiant halo effect. Lens flares dance across the frame, enhancing the ethereal yet unsettling energy. The figure’s faceless mask and surreal presence create a dreamlike, otherworldly atmosphere. Bolt cam technique. ohwx tchnq
```

- **Sample `8e22384b-2c94-4133-abe8-1834538a59c3`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/88bad6cc-bf67-4e41-9797-af00a2e3aa60.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d2bc79fe-b833-482f-8178-d9f3ba3b6c4c.mp4
  - page: https://higgsfield.ai/motion/1bd4363a-6e5a-4c57-90a5-30f0733a769b/8e22384b-2c94-4133-abe8-1834538a59c3

```text
Animate a dramatic bullet time shot of a fashion-forward woman with short hair standing poised in the center of a grand vintage ballroom, surrounded by suspended shards of shattered glass. She wears a sleek black jumpsuit with sharp lines and sheer sleeves, exuding quiet confidence and cinematic elegance. The stained glass windows cast a kaleidoscope of colored light across the wooden floor, illuminating the fragments mid-air like frozen fireworks. The camera rotates around her in a slow, precise arc, capturing every shard from multiple angles as they glint and hover in frozen time. Maintain editorial intensity, surreal atmosphere, and high-fashion styling throughout. Very fast motion.
```

- **Sample `11bbdf0a-b24f-4e4d-9bb4-6557c7b74880`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5e2a710e-e53d-475b-9224-7413e1f1759a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/abf10078-a02f-4a77-aaaa-ce0dfaf670f0.mp4
  - page: https://higgsfield.ai/motion/6fef255d-cdd6-4463-b025-a42646866c1c/11bbdf0a-b24f-4e4d-9bb4-6557c7b74880

```text
Animate a high-energy wide shot of a futuristic fashion icon leaning confidently against a crimson hypercar in the heart of a neon-lit metropolis. She wears a sleek black leather jumpsuit with asymmetric cuts, her silhouette sharp against the sun-drenched skyline of reflective skyscrapers. The camera pulls in on a smooth dolly move from a low angle, capturing lens flares as sunlight ricochets off the car’s curves and the mirrored buildings around her. Her expression is fierce, her pose statuesque, radiating power and control like a digital-age femme fatale. Maintain bold contrast, hyperreal saturation, and luxury-infused cyber-glam energy. boltcam cam technique.
```
