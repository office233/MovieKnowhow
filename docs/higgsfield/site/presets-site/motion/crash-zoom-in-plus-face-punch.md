# Crash Zoom In + Face Punch — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A sudden, intense zoom punches into the subject’s face just as a blow lands—amplifying impact, shock, and raw emotion in a single explosive moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c | `b58e69b3-a23a-4e5b-8901-f5b170a7755c` | -221 | isMix | mix of: Crash Zoom In (motion id `1cc27a2b-3b89-44d4-a7f9-d583454a8960`, strength 0.85), Face Punch (motion id `91da0dd0-c8e1-4793-b77e-946e98bc7ebb`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=1cc27a2b-3b89-44d4-a7f9-d583454a8960%2C91da0dd0-c8e1-4793-b77e-946e98bc7ebb&presetMotionStrengths=0.85%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
In a boxing ring the camera snaps into a fighter's face as a punch lands.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In + Face Punch**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crash Zoom In](crash-zoom-in.md) (strength 0.85), [Face Punch](face-punch.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7e318181-6c4e-47a5-ad88-6453af99f47b.webp (320×320)
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/5c86ea16-50ec-492e-a2ff-3a5f2226613b.webp
- Component preview — Face Punch: https://d1xarpci4ikg0w.cloudfront.net/057c390c-360a-49ab-bd34-d3639bba7d22.webp

### Sample videos (10)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cab961f6-a173-4432-b56c-aac6e5974ee7 | https://static.higgsfield.ai/cab961f6-a173-4432-b56c-aac6e5974ee7.mp4 | https://static.higgsfield.ai/cab961f6-a173-4432-b56c-aac6e5974ee7.webp | https://d1xarpci4ikg0w.cloudfront.net/47399837-6b35-4323-87f9-ac973b5d7355.webp (320×242) |
| 2 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/12dad4c8-a369-42ec-b3aa-268196f815ca | https://static.higgsfield.ai/12dad4c8-a369-42ec-b3aa-268196f815ca.mp4 | https://static.higgsfield.ai/12dad4c8-a369-42ec-b3aa-268196f815ca.webp | https://d1xarpci4ikg0w.cloudfront.net/c89e2c2a-9a60-4f0d-a101-0979e60b75ea.webp (320×424) |
| 3 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cbd99279-1f90-404e-8711-c162d9d22a49 | https://static.higgsfield.ai/cbd99279-1f90-404e-8711-c162d9d22a49.mp4 | https://static.higgsfield.ai/cbd99279-1f90-404e-8711-c162d9d22a49.webp | https://d1xarpci4ikg0w.cloudfront.net/64aafbba-0294-470d-8b18-bf6f6d9a5cc0.webp (320×424) |
| 4 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/56744f16-fb9a-41fc-8efc-e7392b17136d | https://static.higgsfield.ai/56744f16-fb9a-41fc-8efc-e7392b17136d.mp4 | https://static.higgsfield.ai/56744f16-fb9a-41fc-8efc-e7392b17136d.webp | https://d1xarpci4ikg0w.cloudfront.net/1810ad06-f8d9-4296-a67a-5234955393b7.webp (320×182) |
| 5 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/843ebd6b-638e-4748-95fb-f83c3d450377 | https://static.higgsfield.ai/843ebd6b-638e-4748-95fb-f83c3d450377.mp4 | https://static.higgsfield.ai/843ebd6b-638e-4748-95fb-f83c3d450377.webp | https://d1xarpci4ikg0w.cloudfront.net/12f3ca49-529d-455a-9cbf-dfe47d4d09da.webp (320×320) |
| 6 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/76d54964-90e0-4e81-986e-5ad49d658d8d | https://static.higgsfield.ai/76d54964-90e0-4e81-986e-5ad49d658d8d.mp4 | https://static.higgsfield.ai/76d54964-90e0-4e81-986e-5ad49d658d8d.webp | https://d1xarpci4ikg0w.cloudfront.net/143b4d0a-f286-4279-8887-ebbeec5b0562.webp (320×562) |
| 7 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/bd78d07f-a690-4a16-9ea5-8a0ed4314093 | https://static.higgsfield.ai/bd78d07f-a690-4a16-9ea5-8a0ed4314093.mp4 | https://static.higgsfield.ai/bd78d07f-a690-4a16-9ea5-8a0ed4314093.webp | https://d1xarpci4ikg0w.cloudfront.net/8cbb44eb-539c-46bb-b438-eb4d2ef71589.webp (320×242) |
| 8 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1 | https://static.higgsfield.ai/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1.mp4 | https://static.higgsfield.ai/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1.webp | https://d1xarpci4ikg0w.cloudfront.net/05f5672e-58d7-47c8-b3bf-668a124ba01b.webp (320×424) |
| 9 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/fe8499f7-19e2-461e-a4fb-19db6ed75a4e | https://static.higgsfield.ai/fe8499f7-19e2-461e-a4fb-19db6ed75a4e.mp4 | https://static.higgsfield.ai/fe8499f7-19e2-461e-a4fb-19db6ed75a4e.webp | https://d1xarpci4ikg0w.cloudfront.net/f90ca507-fc5d-4caa-9c73-72ca828f6e09.webp (320×242) |
| 10 | https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/d8b7f63c-6b8b-4128-83e5-e973a893954c | https://static.higgsfield.ai/d8b7f63c-6b8b-4128-83e5-e973a893954c.mp4 | https://static.higgsfield.ai/d8b7f63c-6b8b-4128-83e5-e973a893954c.webp | https://d1xarpci4ikg0w.cloudfront.net/2b6ebb92-5205-4834-8fa5-f7ece185b9d0.webp (320×320) |

Source pages: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `12dad4c8-a369-42ec-b3aa-268196f815ca`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/12e1382b-0276-4d5b-aabe-9873b2ce7c1d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7ebd7468-1d2e-40a9-b3d3-e6c904a08cf1.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/12dad4c8-a369-42ec-b3aa-268196f815ca

```text
The scene begins with a vibrant backdrop of solid orange, setting a bold stage for an intense moment. Suddenly, the camera performs a rapid crash zoom, focusing sharply on the woman’s face, capturing her confident expression just before the impending action. The atmosphere is charged as her expression shifts slightly, brimming with anticipation. In the blink of an eye, a ball caked in vivid purple powder rockets in from the left side of the frame, striking her face with an impact that is both unexpected and explosive. The colorful powder bursts around her, forming a cloud that envelops her briefly, creating a striking visual juxtaposition against her bright attire. The chaos of the moment is punctuated by the dramatic change in tone, the powder contrasting starkly with the smoothness of her skin and the calmness of her initial demeanor. Concrete visual keys: vibrant purple powder exploding in the air, her surprised eyes momentarily wide, the surrounding purple sand reflecting the vividness of the impact.
```

- **Sample `3be68aa2-4e85-4f73-bfcf-a82f7285bcd1`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eabf2e22-5e17-45eb-b66d-c16ac0ca4457.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9aff4d94-5c55-4f89-a427-b88082a79b87.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/3be68aa2-4e85-4f73-bfcf-a82f7285bcd1

```text
The scene opens with a brightly lit exterior amphitheater, sun casting shadows across the smooth, geometrically curved steps. A young man advances confidently, dressed in an elegant cream wrap top contrasted by flowing gray trousers, his face intent and focused. Suddenly, the camera crashes into a swift zoom, locking onto his piercing expression—eyes narrowed, fully immersed in thought. Just as the tension peaks, a small rock hurtles in from the left, striking him squarely in the face with a sharp, jolting impact. The sound of the collision echoes, highlighting the raw energy of the moment and casting a ripple of surprise across his features. His head snaps back slightly, and momentarily, time feels suspended as he processes the unexpected assault. Concrete visual keys: vivid detail of the rock's trajectory, the shockwave through his expression, and the shimmering reflections of sunlight on the amphitheater's curves.
```

- **Sample `cbd99279-1f90-404e-8711-c162d9d22a49`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/08f7dd99-f4f0-4d0c-abd4-0681afd667d2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/72cba1a4-9460-4dd7-8df6-4976b5ead522.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cbd99279-1f90-404e-8711-c162d9d22a49

```text
The scene opens with a wide view of a rooftop at dusk, the city skyline bathed in soft orange hues. A striking, confident man stands at the center, his shirt unbuttoned, showcasing his chiseled torso, his captivating gaze directed toward the camera. Suddenly, the camera executes a swift Crash Zoom In, closing in on his intense expression, eyebrows arched in anticipation as he locks eyes with the viewer. Just as the tension peaks, a pigeon swoops in from the left, its wings flapping powerfully, and collides directly with his face in a comically exaggerated moment. The force of impact freezes the scene momentarily, his head jolting back, eyes wide in shock. The background blurs, emphasizing the sharpness of the collision and the absurdity of the situation. Concrete visual keys: feathers scattering around him, a surprised look imprinted on his face, city lights beginning to flicker on in the distance.
```

- **Sample `bd78d07f-a690-4a16-9ea5-8a0ed4314093`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fa3c410f-01ef-431d-998c-e26c3b845493.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9d4d28c7-f235-41a0-887c-76718f4a0693.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/bd78d07f-a690-4a16-9ea5-8a0ed4314093

```text
The scene unfolds against a stark volcanic landscape, the sun casting a fiery glow over the man kneeling, adorned in an armor-like spiked jacket. As the camera focuses tightly on his intense expression, a tense silence fills the air, capturing the anticipation in the moment. Suddenly, the scene shifts to a fast-paced Crash Zoom In on his face, amplifying the urgency of the moment just before chaos strikes. Like a surge of energy, a small black rock flies in from the right, propelled by volcanic fury, colliding sharply with his face in a visceral Face Punch moment. Dust and volcanic ash plume dramatically around him, accentuating the raw impact. The man's features contort in shock, the camera preserving the visceral details of his reaction. Concrete visual keys: dust swirling in a dynamic cloud around the point of impact, his startled expression juxtaposed against the calm volcanic backdrop.
```

- **Sample `76d54964-90e0-4e81-986e-5ad49d658d8d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c8a8abdb-b14a-4bc7-b878-ff4b1fc543c9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3794eacf-37eb-4615-b845-53f4b9bbcc10.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/76d54964-90e0-4e81-986e-5ad49d658d8d

```text
The scene unfolds in a chaotic, trash-strewn environment, vibrant colors splattered amidst the debris, and the sun setting dramatically behind. A dramatic Crash Zoom In swiftly captures the man's face, framed against the wild backdrop, his expression shifting from composed to startled as he locks eyes with the camera. Just as the zoom reaches its apex, a small empty can of Coke hurtles in from the left of the frame, flying through the air with surprising speed. The camera captures the explosive moment of impact as the can slams against his face, the crisp sound echoing sharply in the chaotic atmosphere. This raw action freezes time for a second, showcasing the mix of confusion and intensity in his eyes, fully highlighted by the zoom. As the can bounces off, chaotic reflections from the surrounding trash glint in his sunglasses, further heightening the absurdity of the moment. Concrete visual keys: the moment of impact framed tightly, the can's trajectory clearly visible, and the burst of colors from the surroundings reflecting dramatically in his glasses.
```

- **Sample `843ebd6b-638e-4748-95fb-f83c3d450377`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4e2cfabb-288d-47c4-b21f-0209976d601c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/86cd70f7-a6d7-46a3-8c5e-3ad98d7002d0.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/843ebd6b-638e-4748-95fb-f83c3d450377

```text
The scene opens in a futuristic corridor, its glossy metallic surfaces reflecting vibrant hues of gold and blue, lending an otherworldly quality. As the camera prepares to capture the unfolding moment, it suddenly crashes into a swift zoom towards the woman's face, drawing in tight on her piercing gaze. Her expression shifts from calm curiosity to shocked disbelief as she locks eyes with the viewer, intensifying the atmosphere. Just as the tension peaks, a small silver ball hurtles into the frame from the left side, executing a sharp trajectory toward her. With a violent impact, the ball hits her square in the face, the force capturing the raw energy of a face punch. The sudden collision is accompanied by a sound that reverberates through the space, echoing the intensity of the moment. Reflections dance wildly on the metallic walls around her, capturing the chaos of the encounter. Concrete visual keys: the silver ball glinting in the light as it approaches, shattered reflections across the walls in the aftermath of the impact, and the woman's startled expression frozen in a moment of disbelief.
```

- **Sample `cab961f6-a173-4432-b56c-aac6e5974ee7`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bb92775e-9d5a-40c4-87b6-084bfa3ad0ce.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c37a2063-9d06-4ea3-be05-fd13a7cac1c3.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/cab961f6-a173-4432-b56c-aac6e5974ee7

```text
The scene opens in a vibrant conservatory, where a woman stands tall in a radiant, colorful outfit, surrounded by lush greenery and diffused sunlight filtering through stained glass. Suddenly, the camera performs a quick crash zoom into her face, capturing a moment of contemplation that morphs into surprise. As the zoom intensifies, her eyes widen in anticipation—a fleeting second infused with energy. Then, from the left side of the frame, a pineapple hurtles towards her with cartoonish speed, striking her squarely in the face with a comedic, exaggerated crunch. The vivid colors of her attire contrast starkly with the absurdity of the impact, which reverberates through the serene atmosphere of the conservatory. The sound of the hit reverberates, and tropical leaves rustle in response, emphasizing the sheer absurdity of the moment. Concrete visual keys: pineapple visibly squishing against her face, vivid reflections from stained glass bouncing around the scene.
```

- **Sample `d8b7f63c-6b8b-4128-83e5-e973a893954c`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fc03d0be-6c28-40c4-88d9-cf7d28efb223.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6367e423-cc67-4fc9-ac37-f05237c0a596.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/d8b7f63c-6b8b-4128-83e5-e973a893954c

```text
The scene opens with a sleek, futuristic room illuminated by soft blue and purple lights, casting a vibrant glow around a young man standing confidently in the center. As the tension builds, the camera performs a rapid crash zoom directly into his composed face, capturing the flicker of determination in his eyes. Just as the focus sharpens, an iPhone hurtles into the frame from the left, a sleek blur of motion. With a visceral impact, the device collides sharply with his face, the sound echoing in the quiet space as his expression morphs from calm to shock. Surrounding lights flicker momentarily, emphasizing the raw energy of the punch, and small digital fragments scatter like pixels, adding to the surreal atmosphere. Concrete visual keys: the phone's sleek design striking the man's face, scattered digital bits momentarily suspended in the air, and the shocked expression vividly captured in close-up.
```

- **Sample `fe8499f7-19e2-461e-a4fb-19db6ed75a4e`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e35bf277-48ee-4e09-87ea-ed775437df4e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/77d625da-d5b3-47f5-bb11-7b7d3d833a56.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/fe8499f7-19e2-461e-a4fb-19db6ed75a4e

```text
The scene unfolds in a mesmerizing celestial observatory, where twilight blankets the universe in deep blue hues. A stunning woman in a black evening gown stands poised, her expression serene yet enigmatic, surrounded by intricate celestial instruments glimmering softly under the stars. Suddenly, the camera crashes in, rapidly zooming into her face, capturing every nuanced detail of her poised demeanor. Just as the tension peaks, a small blue globe zips into frame from the left, striking her with concussive force directly on the face. The impact radiates through the air, while her features contort in an explosion of surprise and energy, dramatic and raw. The camera freezes on the moment of contact, capturing the shattering stillness that follows the chaos. Concrete visual keys: her stunned, wide-eyed expression at the moment of impact, the blue globe's vibrant color contrasting sharply against the dark night sky, and the celestial instruments momentarily frozen in the background.
```

- **Sample `56744f16-fb9a-41fc-8efc-e7392b17136d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e32c9ab9-d0ba-4b43-8060-1bc33bc4d29a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/850f0916-99d5-4229-8abb-4f172e863190.mp4
  - page: https://higgsfield.ai/motion/b58e69b3-a23a-4e5b-8901-f5b170a7755c/56744f16-fb9a-41fc-8efc-e7392b17136d

```text
The scene begins with a clean, bright backdrop, where a young man stands poised but uncertain, his chiseled features illuminated by soft light. Suddenly, the camera performs a swift crash zoom in, focusing sharply on his eyes, revealing a flicker of surprise just before the impending chaos. Tension builds palpably as the frame surrounds his face, capturing every detail of his expression. In a split second, a rock wrapped in white paper hurtles into the frame from the right, creating a visually arresting contrast against the simplicity of the background. The impact is palpable, depicted through a close-up of the moment the rock connects with his face, an explosion of motion and raw energy as it strikes him hard. Facial muscles tense and recoil, with papers fluttering around him as his head jerks back dramatically. Concrete visual keys: the stark contrast of the rock’s texture against his smooth skin, the sudden shift in his expression, and the scattering papers that enhance the chaotic atmosphere.
```
