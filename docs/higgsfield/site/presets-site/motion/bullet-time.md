# Bullet Time — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Freezes or slows down the action while the camera moves around the subject. Creates a dramatic, cinematic effect often seen in action or sci-fi scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f | `855c5272-8f39-48b7-a362-e1337590387f` | 56 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=855c5272-8f39-48b7-a362-e1337590387f |
| https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946 | `9312c53a-f191-4aab-94fb-6b1dbdfdc946` | -243 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9312c53a-f191-4aab-94fb-6b1dbdfdc946 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A martial artist leaps into a flying kick as water droplets hang frozen in the air; the camera sweeps around him in slow motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Bullet Time**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Subject frozen or in slow motion while the camera sweeps around · **Best use:** Action climax, impact moments · **Models:** Kling 2.6, Sora 2† · **Phrase/template:** "Bullet Time around the leaping assassin" · "Camera: Bullet Time as she leaps from a loading dock onto a moving truck below." · image: "Bullet time effect. Time is frozen with snowflakes suspended in mid-air, while the camera smoothly rotates 180 degrees around [img 1]." · **Tips:** Motion-preset variants: Bullet Time Scene / White / Splash. CS 3.0 speed ramp "Bullet Time". Viral Hub: [bullet-time](viral/bullet-time.md).

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d13bbb8b-f78d-41b7-8147-a88e923c529f.webp (320×230)
- Card preview, variant `9312c53a`: https://d1xarpci4ikg0w.cloudfront.net/c55f67ca-c924-4112-b89b-c45c3616c34d.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/71b162dc-d783-4cba-9767-f5803379145d | https://static.higgsfield.ai/71b162dc-d783-4cba-9767-f5803379145d.mp4 | https://static.higgsfield.ai/71b162dc-d783-4cba-9767-f5803379145d.webp | https://d1xarpci4ikg0w.cloudfront.net/e2ebb025-d430-4dac-a763-a6f004fa3a50.webp (320×236) |
| 2 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f | https://static.higgsfield.ai/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f.mp4 | https://static.higgsfield.ai/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f.webp | https://d1xarpci4ikg0w.cloudfront.net/3637a8ae-237a-4479-a248-dc364f3c74fc.webp (320×236) |
| 3 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592 | https://static.higgsfield.ai/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592.mp4 | https://static.higgsfield.ai/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592.webp | https://d1xarpci4ikg0w.cloudfront.net/9b10d8c3-2107-464e-bf14-99945dd7a1bc.webp (320×180) |
| 4 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a | https://static.higgsfield.ai/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a.mp4 | https://static.higgsfield.ai/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a.webp | https://d1xarpci4ikg0w.cloudfront.net/a359db86-c918-4943-a7a2-e1db49decf7c.webp (320×236) |
| 5 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/a56430c3-e0ae-4563-8bcb-4d4a52de0c64 | https://static.higgsfield.ai/a56430c3-e0ae-4563-8bcb-4d4a52de0c64.mp4 | https://static.higgsfield.ai/a56430c3-e0ae-4563-8bcb-4d4a52de0c64.webp | https://d1xarpci4ikg0w.cloudfront.net/574aa0a8-4142-420a-af3e-726f46c54fa2.webp (320×180) |
| 6 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/3501b7e4-9aa0-47a2-8861-22b6dba4785b | https://static.higgsfield.ai/3501b7e4-9aa0-47a2-8861-22b6dba4785b.mp4 | https://static.higgsfield.ai/3501b7e4-9aa0-47a2-8861-22b6dba4785b.webp | https://d1xarpci4ikg0w.cloudfront.net/ffed6d7e-9052-4bee-92c2-223c2122ad40.webp (320×182) |
| 7 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7 | https://static.higgsfield.ai/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7.mp4 | https://static.higgsfield.ai/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7.webp | https://d1xarpci4ikg0w.cloudfront.net/ff6a1c5e-fda1-4512-b51c-0741d485b4b2.webp (320×182) |
| 8 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955 | https://static.higgsfield.ai/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955.mp4 | https://static.higgsfield.ai/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955.webp | https://d1xarpci4ikg0w.cloudfront.net/ad440b3b-d0a5-44ea-96df-a5f4191c5b2e.webp (320×182) |
| 9 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c | https://static.higgsfield.ai/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c.mp4 | https://static.higgsfield.ai/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c.webp | https://d1xarpci4ikg0w.cloudfront.net/21c5d2e1-91b9-4fb2-b8f4-84b31eef31ac.webp (320×320) |
| 10 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/78add2fc-e067-439d-9ff0-89e204889348 | https://static.higgsfield.ai/78add2fc-e067-439d-9ff0-89e204889348.mp4 | https://static.higgsfield.ai/78add2fc-e067-439d-9ff0-89e204889348.webp | https://d1xarpci4ikg0w.cloudfront.net/8d47195b-7263-4d25-9fc3-29cddf8bd6c7.webp (320×182) |

Source pages: https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f, https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `78add2fc-e067-439d-9ff0-89e204889348`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/85a38b00-64f2-47fb-b51e-aabd29c0fd6f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dbea0eb6-e859-423c-97f6-abf164d2caf2.mp4
  - page: https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/78add2fc-e067-439d-9ff0-89e204889348

```text
Deadpool is suspended mid-air in a chaotic parking garage, dual-wielding pistols as he fires in opposite directions. Concrete debris and shell casings hover around him in perfect stasis, frozen by a dramatic bullet time effect. Flames from muzzle flashes illuminate his suit with rapid orange bursts. The camera rotates around him in a full 360° arc, capturing the slow-motion geometry of the moment—bullets tearing through the air, enemies in frozen panic, a van door mid-swing. Deadpool’s pose is perfectly theatrical, with one eyebrow raised behind the mask, as if winking at the absurdity of the moment. The atmosphere is stylized, intense, and hilarious. Styling fuses comic book spectacle with cinematic realism—crisp details, dynamic lighting, and gravity-defying debris.
```

- **Sample `cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/72c90e4c-244c-4cc5-8b70-deae9f06a72e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cde01cee-286a-402e-a14f-f45b917e9496.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c

```text
A tactical agent in a black vest is mid-air in a dramatic leap through a narrow alley, aiming a pistol with fierce intensity as fiery explosions erupt behind him. Time slows dramatically as the bullet time effect kicks in—glass shards, debris, and flames freeze in a radial moment around him. The camera orbits slowly around the agent in full 360°, capturing his determined expression, flying debris, and suspended chaos with ultra-sharp clarity. Vehicles are mid-flip, fire and sparks frozen in motion, and bullet casings hover in the air. The atmosphere is explosive and hyper-real. Styling references high-end action cinema, with dynamic lighting, cinematic slow-motion physics, and volumetric glow from the fire.
```

- **Sample `c0a4dd0f-d7cc-42c2-a267-cf2bd8633955`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/347847ea-14e6-4879-9d87-e5ca5d65a7f0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f3ea82da-0557-443e-9844-ba75933f2a7c.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955

```text
Bullet time shot. Debris and glass shards hang in the air, suspended mid-blast. The camera circles around the woman sprinting forward, her face bloodied, uniform torn, clutching an assault rifle. The explosion behind her freezes in a fiery bloom—flames curling outward, frozen in time. Her hair lifts slightly from the shockwave, her expression locked in fierce determination as the scene hangs in cinematic suspension.
```

- **Sample `8f321539-b91f-4a0a-a10b-5d7d8a2de6d7`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ae190c60-6dea-4d54-ae22-7721812e8e2e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/986fb795-9970-4fc2-b7b7-a4c7df2b7bc9.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7

```text
Bullet time shot. The camera spins around the man mid-stride as a massive explosion erupts behind him. Shards of glass, chunks of debris, and flaming fragments freeze in the air. His tie flutters, his face turned in panic—suspended in a moment of chaos, caught between destruction and escape.
```

- **Sample `3501b7e4-9aa0-47a2-8861-22b6dba4785b`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1896×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dc20e9c9-eded-4945-b3f7-1a45790af9ca.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/51f0f80f-2cf1-4b29-b332-f313ea0c95bf.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/3501b7e4-9aa0-47a2-8861-22b6dba4785b

```text
Bullet time shot. The camera freezes on the bullet suspended mid-air, just as it leaves her mouth in a bloom of red mist. It circles slowly around her chrome-sculpted face, catching every glint of metal, every ripple of shockwave. Time dilates—her lips still parted,teeth broken because of bullet her eyes unblinking—while the shell spins in perfect symmetry, violence captured in poetic pause.
```

- **Sample `a56430c3-e0ae-4563-8bcb-4d4a52de0c64`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/33d20c8f-9135-452c-ba4b-ef1ac96f98d9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4b874f38-52ac-44de-8a64-29d5c409fa02.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/a56430c3-e0ae-4563-8bcb-4d4a52de0c64

```text
The camera glides in slow motion, starting with a wide shot of the rocky landscape. The man stands firm, boots grounded amid scattered stones, as if anchoring himself to the earth. His gaze shifts slowly to the swirling sky — a cosmic dance of Van Gogh’s Starry Night blended with drifting clouds.

Pebbles shift under his boots, moving in slow, deliberate tumbles. A gust of wind sends his jacket flaring out, the fabric rippling in hypnotic waves. The river’s surface undulates lazily, shimmering reflections of the vibrant sky swirling like liquid gold.

The camera pans upward, where the painted heavens seem to pulse and shimmer as if alive, the swirls expanding outward in mesmerizing detail. The man exhales, his breath visible in the cool air, dissipating like smoke into the painted sky.
```

- **Sample `745e5e8f-3c98-44e1-8af4-b0279b7e3f5a`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/64a504ae-e79c-4fe1-89ed-51098b09c7c9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/84d7094f-a13b-43de-953c-7ece4d65c18b.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a

```text
The main subject is a man in a sleek black suit with a flowing overcoat, mid-air with arms outstretched and legs bent, appearing to be flung backward. His expression is frozen in surprise, his body twisting as shattered glass and debris explode around him. The background reveals a spacious modern room with large floor-to-ceiling windows, sunlight streaming in and illuminating the particles in the air. A distant city skyline is visible through the glass.

The bullet time effect captures fragments of glass suspended in intricate detail, some reflecting the sunlight in sharp glints, while others blur slightly in motion. Tiny shards hover mid-air, frozen alongside droplets of water and dust particles. The camera smoothly rotates around the man, revealing his coat billowing outward in slow motion, rippling like a dark wave. Each suspended fragment adds a sense of chaos frozen in time, heightening the tension of the moment.
```

- **Sample `b9c9b741-4ca0-4c93-9d3e-fff37b9e6592`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cd2c9d9e-ff8b-4863-99c5-859be4f350d0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c8ff4ec1-c937-4468-9593-f521ca14f55c.mp4
  - page: https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592

```text
The main subject is a man in a sleek black suit with a flowing overcoat, mid-air with arms outstretched and legs bent, appearing to be flung backward. His expression is frozen in surprise, his body twisting as shattered glass and debris explode around him. The background reveals a spacious modern room with large floor-to-ceiling windows, sunlight streaming in and illuminating the particles in the air. A distant city skyline is visible through the glass.

The bullet time effect captures fragments of glass suspended in intricate detail, some reflecting the sunlight in sharp glints, while others blur slightly in motion. Tiny shards hover mid-air, frozen alongside droplets of water and dust particles. The camera smoothly rotates around the man, revealing his coat billowing outward in slow motion, rippling like a dark wave. Each suspended fragment adds a sense of chaos frozen in time, heightening the tension of the moment.
```

- **Sample `3bbcc4c7-74bf-4ba4-87b4-414e541eda2f`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/babf3602-3ccb-4fa2-9b09-c73ad9ca1816.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e5236281-3a89-4c8d-998b-5ef6a2347f0c.mp4
  - page: https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f

```text
The main subject is a majestic eagle with its wings fully extended, soaring through a sky bathed in golden sunlight. Its sharp gaze is fixed forward, its feathers detailed and illuminated by beams of light piercing the clouds. Around the eagle, dozens of feathers are scattered, suspended mid-air.

The bullet time effect unfolds as each feather hangs frozen in intricate detail, some catching the sunlight, their edges glowing with radiant gold, while others drift in soft shadow. Particles of dust and faint mist fill the air, shimmering as they hover in slow motion. The camera sweeps upward from below, rotating around the eagle to emphasize its wingspan and dominance of the sky. The eagle’s feathers appear to ripple in suspended motion, each individual barb distinct as if time itself has paused to frame the moment in perfect clarity. The intense light creates a divine, almost surreal atmosphere, heightening the power and majesty of the scene. 
```

- **Sample `71b162dc-d783-4cba-9767-f5803379145d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eb92cb06-ccea-442d-88c4-b2d6f058c2b2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f3e5fe31-6a48-4dba-a691-2f646b9f6d67.mp4
  - page: https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946/71b162dc-d783-4cba-9767-f5803379145d

```text
The main subject is a young man with shoulder-length curly hair, walking calmly across a desolate, rocky landscape. He wears a loose white shirt with suspenders, tucked into high-waisted trousers, and a long dark coat that billows slightly with his movement. His gaze is distant yet resolute as he strides forward. Behind him, plumes of dust and smoke rise ominously into the air.

The bullet time effect unfolds as hundreds of feathers and birds are suspended mid-flight around him. Each feather is frozen in intricate detail, some drifting closer to the camera while others scatter far into the distance. A flock of birds appears paused in chaotic motion, their wings contorted in various stages of flight. Small fragments of debris and dust particles are suspended mid-air, amplifying the tension.

The camera rotates slowly around the man, capturing the movement of his coat curling in the air and the tranquil expression on his face as the chaotic storm of feathers, birds, and dust frames him in surreal stillness. The muted, smoky light softens the scene, giving it a dreamlike quality as the world appears frozen in time.
```
