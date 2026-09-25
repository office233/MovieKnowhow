# Car Chasing + Building Explosion — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A high-speed car pursuit unfolds as a massive explosion erupts from a nearby building—flames and debris fill the scene. Pure cinematic chaos, packed with action and adrenaline.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b | `54791805-4c3d-4878-ad38-eebded133f0b` | -228 | isMix | mix of: Car Chasing (motion id `a76f2e99-0a41-4fdf-934d-9c95b0ee85bf`, strength 0.8), Building Explosion (motion id `0d53b135-337d-4918-aaf4-2af7ecf4f045`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a76f2e99-0a41-4fdf-934d-9c95b0ee85bf%2C0d53b135-337d-4918-aaf4-2af7ecf4f045&presetMotionStrengths=0.8%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A police chase tears through downtown as a building erupts in flames beside the cars.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Chasing + Building Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Car Chasing](car-chasing.md) (strength 0.8), [Building Explosion](building-explosion.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bf72cdb0-faa2-4de1-b3c8-b2730127e6cf.webp (320×182)
- Component preview — Car Chasing: https://d1xarpci4ikg0w.cloudfront.net/00052de6-aed3-4beb-99a2-0ba966a6a1ce.webp
- Component preview — Building Explosion: https://d1xarpci4ikg0w.cloudfront.net/c31ec0d6-70c3-4955-b76a-78dff8798ca3.webp

### Sample videos (16)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/1131f62d-42a4-401e-979b-0ce30c669878 | https://static.higgsfield.ai/1131f62d-42a4-401e-979b-0ce30c669878.mp4 | https://static.higgsfield.ai/1131f62d-42a4-401e-979b-0ce30c669878.webp | https://d1xarpci4ikg0w.cloudfront.net/15c30454-427c-4708-a037-3b96426243d7.webp (320×182) |
| 2 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/61332a9f-46a4-4b50-94fb-20b78e5fbce8 | https://static.higgsfield.ai/61332a9f-46a4-4b50-94fb-20b78e5fbce8.mp4 | https://static.higgsfield.ai/61332a9f-46a4-4b50-94fb-20b78e5fbce8.webp | https://d1xarpci4ikg0w.cloudfront.net/ba22e4da-bb6e-4ea2-aff6-1ad8aecf2002.webp (320×182) |
| 3 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/47529eef-6f78-4c2f-a380-92aa7b83d83f | https://static.higgsfield.ai/47529eef-6f78-4c2f-a380-92aa7b83d83f.mp4 | https://static.higgsfield.ai/47529eef-6f78-4c2f-a380-92aa7b83d83f.webp | https://d1xarpci4ikg0w.cloudfront.net/fa59c3bd-22d0-422c-bfc1-95c1fca9e5f2.webp (320×182) |
| 4 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/916fda25-bbaf-4776-92c4-d627d2ec5d24 | https://static.higgsfield.ai/916fda25-bbaf-4776-92c4-d627d2ec5d24.mp4 | https://static.higgsfield.ai/916fda25-bbaf-4776-92c4-d627d2ec5d24.webp | https://d1xarpci4ikg0w.cloudfront.net/9b1afad4-289b-4e5a-a63f-6f1a7dd5893d.webp (320×182) |
| 5 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/b234461c-54e8-454b-b38e-880ad0aea5b5 | https://static.higgsfield.ai/b234461c-54e8-454b-b38e-880ad0aea5b5.mp4 | https://static.higgsfield.ai/b234461c-54e8-454b-b38e-880ad0aea5b5.webp | https://d1xarpci4ikg0w.cloudfront.net/1a4a7d5b-5601-4721-8276-424a7ea4a6ee.webp (320×320) |
| 6 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb | https://static.higgsfield.ai/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb.mp4 | https://static.higgsfield.ai/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb.webp | https://d1xarpci4ikg0w.cloudfront.net/fb85879a-cad0-4d87-8f2f-2d921f4ca5e0.webp (320×182) |
| 7 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/2ef71398-0972-4311-bffb-30ecdef49f32 | https://static.higgsfield.ai/2ef71398-0972-4311-bffb-30ecdef49f32.mp4 | https://static.higgsfield.ai/2ef71398-0972-4311-bffb-30ecdef49f32.webp | https://d1xarpci4ikg0w.cloudfront.net/fbadd2f5-6a35-4666-bf08-a789e4257231.webp (320×210) |
| 8 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/04279db7-10e9-4c31-8be1-43472aee7dbb | https://static.higgsfield.ai/04279db7-10e9-4c31-8be1-43472aee7dbb.mp4 | https://static.higgsfield.ai/04279db7-10e9-4c31-8be1-43472aee7dbb.webp | https://d1xarpci4ikg0w.cloudfront.net/6f58b4dc-6901-4580-ab46-4b5727504e05.webp (320×182) |
| 9 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d915e9a2-97b9-4ed9-a7ba-511adaad17e6 | https://static.higgsfield.ai/d915e9a2-97b9-4ed9-a7ba-511adaad17e6.mp4 | https://static.higgsfield.ai/d915e9a2-97b9-4ed9-a7ba-511adaad17e6.webp | https://d1xarpci4ikg0w.cloudfront.net/7e686b56-d441-4896-999b-cb0df97be994.webp (320×424) |
| 10 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/15577732-a9de-4ac9-9468-84606d69869d | https://static.higgsfield.ai/15577732-a9de-4ac9-9468-84606d69869d.mp4 | https://static.higgsfield.ai/15577732-a9de-4ac9-9468-84606d69869d.webp | https://d1xarpci4ikg0w.cloudfront.net/aca4e235-ef95-44df-bd59-596a515e1250.webp (320×210) |
| 11 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/507ca197-80bd-4dd2-8a3f-1550fe444c5c | https://static.higgsfield.ai/507ca197-80bd-4dd2-8a3f-1550fe444c5c.mp4 | https://static.higgsfield.ai/507ca197-80bd-4dd2-8a3f-1550fe444c5c.webp | https://d1xarpci4ikg0w.cloudfront.net/76b112b2-6a0c-4e79-8b88-d94fff5c15d8.webp (320×182) |
| 12 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0 | https://static.higgsfield.ai/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0.mp4 | https://static.higgsfield.ai/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0.webp | https://d1xarpci4ikg0w.cloudfront.net/355c8711-0b96-4388-8c47-401ec9491592.webp (320×182) |
| 13 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0 | https://static.higgsfield.ai/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0.mp4 | https://static.higgsfield.ai/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0.webp | https://d1xarpci4ikg0w.cloudfront.net/26ef8aef-71a0-4c87-9186-d1f7273e5a2d.webp (320×182) |
| 14 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/01a6db2f-7840-4bae-9d2c-1781b074e4ac | https://static.higgsfield.ai/01a6db2f-7840-4bae-9d2c-1781b074e4ac.mp4 | https://static.higgsfield.ai/01a6db2f-7840-4bae-9d2c-1781b074e4ac.webp | https://d1xarpci4ikg0w.cloudfront.net/1d9101ba-ae44-4e4e-aeca-5ccab5fd08ee.webp (320×424) |
| 15 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d0fa70dd-d05b-4d3f-b336-00375466ab09 | https://static.higgsfield.ai/d0fa70dd-d05b-4d3f-b336-00375466ab09.mp4 | https://static.higgsfield.ai/d0fa70dd-d05b-4d3f-b336-00375466ab09.webp | https://d1xarpci4ikg0w.cloudfront.net/db2cc245-dad5-4cad-a2a2-3ec4490b5aa5.webp (320×562) |
| 16 | https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c69a29e-9390-47e9-82ce-59ae68a502b9 | https://static.higgsfield.ai/6c69a29e-9390-47e9-82ce-59ae68a502b9.mp4 | https://static.higgsfield.ai/6c69a29e-9390-47e9-82ce-59ae68a502b9.webp | https://d1xarpci4ikg0w.cloudfront.net/22aadb03-4b07-4898-a7af-467ff3e905ba.webp (320×320) |

Source pages: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b. Crawled 2026-09.


## Real sample prompts (site)

16 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `61332a9f-46a4-4b50-94fb-20b78e5fbce8`** (priority 0) — Wan 2.5 motion preset, steps=40, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/62f2d61c-55cc-4286-bb5f-acc478c8e9c0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/54f97a83-37c7-42b9-9fe2-fd18d97c1851.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/61332a9f-46a4-4b50-94fb-20b78e5fbce8

```text
An intense cinematic car chase scene. A yellow BMW races through the street at night at high speed, behind it a sleek silver Mercedes GTR appears and overtakes it. The camera captures the intense motion and splashes of water coming from the cars' wheels. Explosions erupt from the buildings they pass, sending fireballs and debris into the air, adding to the chaos and urgency of the chase.
```

- **Sample `6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7ca1d4a6-5432-493b-8558-5e5d8f6a22d2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ef3645e8-b069-48b5-826e-3db2ec34fac2.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c40616e-f5fe-4a7d-bd34-9bf46d7bcae0

```text
The scene bursts into action as a sleek red muscle car speeds through a sun-drenched cityscape, its engine roaring like a beast unleashed. Dynamic camera angles dart alongside it, capturing the glint of sunlight reflecting off its polished surface as it weaves through the streets. Suddenly, with a deafening roar, buildings in the background erupt in a massive explosion, sending clouds of debris spiraling toward the asphalt. The camera captures the chaos in thrilling cuts, revealing shards of concrete tumbling dangerously close to the car. The driver remains focused, narrowly avoiding the chaos as the landscape unfolds in a heart-pounding blur. Each explosion punctuates the chase, mixing danger with exhilaration, while fiery flames dance against the blue sky. Concrete visual keys: shards of concrete littering the pavement, smoke curling ominously in the air, a dramatic plume of dust rising behind the car as it accelerates forward.
```

- **Sample `d915e9a2-97b9-4ed9-a7ba-511adaad17e6`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e1978b16-cf92-4577-bbea-f95c2e5c88e6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cd61a001-72d5-4a7e-be72-9990172f16b5.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d915e9a2-97b9-4ed9-a7ba-511adaad17e6

```text
The scene bursts to life with a thrilling car chase in a bustling city at night, the sleek black car darting through streaks of neon lights and shadows. Dynamic camera angles follow every twist and turn, capturing the adrenaline-fueled excitement as the police car closes in, sirens blaring. Suddenly, the ground shakes as a building erupts in a massive explosion, sending a torrent of debris flying into the air, silhouetting the chasing vehicles in a fiery backdrop. The camera sweeps low alongside the black car, revealing the shock on the driver's face, every detail amplified by the chaos unfolding around them. Just as the explosion peaks, a shower of glass rains down, glimmering in the bright headlights. The police car skids sideways, barely escaping the cascading debris, as the black car accelerates forward, engine roaring against the encroaching flames. Concrete visual keys: chunks of masonry caught in the air, illuminated city skyline now framed by smoke, and the intense glow of the police lights reflecting off shattered glass.
```

- **Sample `6c69a29e-9390-47e9-82ce-59ae68a502b9`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/833887ae-ca30-4faf-817e-a4a1ca0628e0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7c3aa1f4-dc1e-467b-86b6-de7c3f2dc3ce.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/6c69a29e-9390-47e9-82ce-59ae68a502b9

```text
A silver Porsche roars through a narrow, cobblestone street, its engine roaring in a symphony of speed and adrenaline. The camera captures this exhilarating chase from dynamic angles, emphasizing the sleek curves of the car as it narrowly weaves between aged stone buildings. Suddenly, a series of explosions erupt along the row of structures, sending clouds of debris and concrete fragments hurtling towards the road. Dust fills the air, and the heat of the blasts distorts the light, adding a sense of urgency. The Porsche swerves dramatically, tires screeching as it narrowly misses large chunks of falling masonry, a testament to the driver's skill and sheer luck. The camera follows the car in a tight close-up, revealing the intense focus on the driver’s face, juxtaposed against the chaotic background. With each explosive blast, reflections of the fiery destruction shimmer menacingly off the car's polished surface. Concrete visual keys: debris swirling around the vehicle, ominous dust clouds illuminated by the fiery blasts, and the Porsche’s tail lights glowing fiercely in the dimming light.
```

- **Sample `d0fa70dd-d05b-4d3f-b336-00375466ab09`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1a00cd09-aeaf-4a92-a513-f27c1e57c2aa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/756554d4-b432-441a-b537-f229a3eaea7a.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/d0fa70dd-d05b-4d3f-b336-00375466ab09

```text
The scene opens with a sleek BMW roaring down a neon-lit city street, its headlights cutting through the darkness like twin blades. The camera performs dynamic angles, shifting from a low perspective that captures the tires screeching on the asphalt to a rapid aerial view, illustrating the car's swift ascent through the urban landscape. Suddenly, a series of buildings behind the car erupt in brilliant explosions, clouds of dust and debris filling the air and creating a vivid contrast against the illuminated cityscape. Pieces of concrete rain down, narrowly missing the car, which swerves expertly through the chaos. The camera shakes with each blast, further amplifying the sense of speed as the BMW accelerates through the smoke and falling debris. The thrilling pace of the chase intertwines with the explosive backdrop, generating a heartbeat of tension. Concrete visual keys: shards of glass glittering in the air, the BMW's sleek silhouette framed against the fiery explosions, and a massive plume of smoke rising into the night sky.
```

- **Sample `1131f62d-42a4-401e-979b-0ce30c669878`** (priority 0) — Wan 2.5 motion preset, steps=40, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d8a9cd56-d0bc-4213-824c-e9b9df730542.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b9a074ad-7c49-4d0c-aaf5-c90e58d028bb.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/1131f62d-42a4-401e-979b-0ce30c669878

```text
A vibrant magenta Cadillac Eldorado lowrider with gold accents cruises confidently down a palm-lined boulevard at sunset, its hydraulics bouncing softly as it accelerates. Just ahead, a sleek black Chevrolet Impala glides in the same direction, but the Cadillac surges forward, beginning to overtake it with smooth dominance. Tracking shot from a low front-left angle, slowly dollying forward to capture the Cadillac as it pulls alongside and begins to pass the Impala. Explosions erupt from the buildings they pass, including a neon-lit casino, sending bursts of fire and debris into the air. Neon signs and retro diners blur behind in glowing motion trails. The atmosphere is euphoric and bold, bathed in warm sunset tones of violet, pink, and orange. Styling evokes retro West Coast street cruising with glossy chrome reflections, motion blur, and soft bokeh from streetlights.
```

- **Sample `2ef71398-0972-4311-bffb-30ecdef49f32`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/91f18037-7504-4985-9710-65743f420fe0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b74e6af5-eb08-41de-9a2b-c1f791b8a70d.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/2ef71398-0972-4311-bffb-30ecdef49f32

```text
Under the brilliant sunlight of a bustling city, sleek cars race along the freeway, engines roaring and tires screeching against the asphalt. The camera darts alongside them in breathtaking speed, executing dynamic angles that capture the chrome glimmer and powerful postures of each vehicle as they veer into sharp turns. As they navigate through the urban landscape, the tension escalates, and the sound of their engines creates an exhilarating rhythm. Suddenly, a massive explosion shatters the chase; a building erupts into a fiery blaze, with debris spiraling into the sky like confetti of chaos. The camera captures the shockwave of flames lashing out, illuminating the astonished drivers. The continuous motion from the chase seamlessly melds into this explosive aftermath, heightening the emotional stakes. Visual keys include flaming debris raining down amidst the speeding cars, smoke swirling into the blue sky, and reflections of the fiery explosion glimmering off the sleek surfaces of the cars.
```

- **Sample `cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cd305826-6ea0-4c98-bade-37002e074d28.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5cb5a228-26f7-46ca-9152-357d61cde4b9.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/cc8bf0cd-7b13-4bd0-a2a7-db5fdbe089d0

```text
The scene opens with a sleek red muscle car roaring down a sunlit urban street, the camera locked on its glistening curves as it accelerates with exhilarating speed. Dynamic angles shift rapidly, capturing the car's powerful engine growling, its tires skidding against the asphalt, sending up small plumes of smoke. As the car veers around a corner, buildings loom ominously in the background, their glass facades glinting in the sunlight. Just as it races forward, a massive explosion erupts from the nearest building, debris bursting outward in a stunning display of chaos. Concrete chunks and shards rain down, hitting the pavement with a thunderous crash, nearly grazing the car. The camera shifts perspective, now in a low-angle shot that showcases both the car and the billowing smoke clouds rising in its wake. The high-speed chase intensifies as the muscle car emerges unscathed, the driver’s face a mix of focus and thrill. Concrete visual keys: pieces of debris clearly visible tumbling down around the car, the reflection of the explosion visible in the car's polished surface, and the smoldering outlines of the destroyed building against a clear blue sky.
```

- **Sample `01a6db2f-7840-4bae-9d2c-1781b074e4ac`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/790e6010-f22a-4215-b13c-42df33d15996.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b85b1fa9-852b-45e0-a7b3-9f5df50344f3.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/01a6db2f-7840-4bae-9d2c-1781b074e4ac

```text
In a moody black and white frame, a vintage car roars down a dimly lit city street, gliding through mist with shining headlights piercing the gloom. The camera follows closely in a frenetic, dynamic chase, weaving effortlessly around corners as the car maneuvers with agile precision. Suddenly, with a thunderous roar, buildings along the road erupt in massive explosions, sending clouds of debris careening toward the asphalt. Dangerously close, chunks of concrete rain down, and the car swerves sharply, tires skidding against cobblestones as it deftly avoids disaster. The smoky chaos contrasts sharply against the elegance of the vintage design, creating a surreal visual moment. Each explosion sends shockwaves that ripple through the thick night air, heightening the tension as the driver’s expression shifts from determination to adrenaline-fueled urgency. Concrete visual keys: fragments of concrete suspended in mid-air, shattered glass glinting from the blasts, and the burning embers illuminating the scene, all framing the daring escape of the classic car.
```

- **Sample `15577732-a9de-4ac9-9468-84606d69869d`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2efa812f-38e0-414c-a23d-fc60195f8028.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e96fe648-8154-403d-99bb-56c2dab8c05d.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/15577732-a9de-4ac9-9468-84606d69869d

```text
Tracking shot, smoothly following the two fast-moving cars from behind, staying in motion with them as they speed through the city. A red sports car and an orange sports car with sleek designs, glowing rear lights, and powerful engines, racing side by side. A neon-lit city at night, with buildings lined up on both sides. The streets are lit up by streetlights and digital billboards, while explosions tear through the buildings, sending debris flying. The cars speed forward, their exhausts roaring, leaving light trails behind them. As the cars continue their high-speed chase, the camera follows them closely, matching their rapid pace. Low-angle shot, focusing on the cars from behind, with a slight tilt to capture the high-speed movement. The camera stays close to the action, maintaining a dynamic feel. The lens used has a slight motion blur effect to enhance the speed. Intense, high-energy, filled with tension and adrenaline, with neon colors contrasting against the dark night. Cyberpunk aesthetic with neon colors, glowing lights, futuristic cityscape, and a sense of chaos as explosions disrupt the environment.
```

- **Sample `47529eef-6f78-4c2f-a380-92aa7b83d83f`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/146b64fc-4029-440e-9a6c-82c36dac7c52.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f1b281c1-7c00-4b10-98eb-1ca6a7255b57.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/47529eef-6f78-4c2f-a380-92aa7b83d83f

```text
A tense front-view action shot: a classic silver Porsche 911 barrels down a suburban street, with two police cars close behind, red-and-blue lights flashing, sirens wailing, and tires screeching. Dust kicks up from the road as the driver, focused and unflinching, punches the gas. Explosions erupt from the buildings they pass, sending fireballs and debris into the air, intensifying the high-speed chase.
```

- **Sample `04279db7-10e9-4c31-8be1-43472aee7dbb`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9699834f-c319-4179-89f6-a48224f2f232.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3dc00fa1-dda2-4434-9ebd-9efda925baf3.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/04279db7-10e9-4c31-8be1-43472aee7dbb

```text
Tracking shot, smoothly following the high-performance black sports car and the police car as they speed forward. The camera starts closely behind them and then pulls back to reveal the full scope of the chase and the surrounding destruction. A sleek black sports car and a police car, racing side by side through the city streets, the police car with its sirens blaring while the black car speeds ahead. A bustling city street at night, with towering skyscrapers and bright lights illuminating the road. The city’s atmosphere is electric, with neon signs reflecting off the streets. Explosions occur behind the cars, causing buildings to crumble and debris to scatter through the air. The cars accelerate quickly, cutting through the city as the camera follows them, pulling back to capture the chase. The explosions and chaos increase as the cars continue their high-speed journey. Low-angle shot focusing on the cars, emphasizing their speed as they race down the urban streets. The camera pulls back to show the full scale of the chase and the destruction caused by the explosions. Motion blur adds to the high-speed effect. High-energy, action-packed, and cinematic, with a sense of urgency and danger heightened by the explosions and flashing sirens from the police car. A modern action style set in a sleek, urban, nighttime environment. The high-performance car contrasts against the city’s towering buildings, with explosions and dynamic lighting effects from the neon signs creating a thrilling atmosphere.
```

- **Sample `916fda25-bbaf-4776-92c4-d627d2ec5d24`** (priority 0) — Wan 2.5 motion preset, steps=40, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/508f75e3-d78b-48b9-84cb-b47ee5c4cd5e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/48c683a9-b55b-46d7-b7f1-4a160cbb356d.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/916fda25-bbaf-4776-92c4-d627d2ec5d24

```text
In the heart of an ancient city, two sleek cars dart through the cobblestone streets under the bright sun, their engines roaring in a symphony of power. The camera executes swift, dynamic angles to capture the thrill of the chase, weaving seamlessly between towering ruins and historic columns as the vehicles accelerate, dust flying in their wake. Suddenly, a sharp turn reveals a close call; the rear-view mirror catches a glimpse of a crumbling building that ominously shakes as they speed past. Just then, the building erupts in a spectacular explosion, sending a shower of debris and clouds of dust into the air, framed beautifully against the blue sky. The lead car swerves dramatically to evade the blast, while the second car's front end is nearly caught in the chaos. The scene intensifies, capturing the fiery brilliance mingling with the dust of the historic backdrop, as the chase continues unabated. Concrete visual keys: debris showering down, a plume of smoke contrasting with sunlit ruins, and the sleek silhouette of a car framed against an explosion.
```

- **Sample `8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cbc47763-0dfb-4091-b502-4284ac3819ba.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ad16b0ff-edac-4db6-8e0a-0d7cbc9c0b03.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/8b7aa375-cdbf-4eff-8a6b-b1d772f42ceb

```text
A black lowrider car cruises down an urban street at night, with bright chrome details and illuminated headlights. As it moves forward, a red lowrider appears from behind. The atmosphere intensifies with explosions erupting in the buildings they pass, sending fireballs and debris into the night, adding to the adrenaline-pumping action.
```

- **Sample `507ca197-80bd-4dd2-8a3f-1550fe444c5c`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/57e08527-463e-4d6f-8671-589fa9fa6b26.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/edb6ebe7-9ac5-4e96-929f-1de853639c56.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/507ca197-80bd-4dd2-8a3f-1550fe444c5c

```text
In a sun-drenched cityscape, a sleek yellow sports car zooms down the urban streets, tires screeching against the asphalt, capturing the thrill of speed. The camera follows the vehicle with dynamic angles, perfectly framing its aggressive lines against the backdrop of towering buildings. As the excitement peaks, the camera begins to zoom out, shaking slightly to convey the raw power of motion. Suddenly, a series of explosions ripple through the skyline; buildings erupt with flames and debris, sending chunks of concrete crumbling to the ground in slow motion. The car, unfazed, weaves through a cascade of wreckage, swiftly dodging falling blocks that crash around it, emphasizing the adrenaline-fueled escape. Moments later, the yellow beauty emerges from the chaos, illuminated by the fiery glow of destruction behind it, cementing its heroic stance. Concrete visual keys: flames licking upwards from the demolished buildings, shards of glass and debris capturing sunlight as they cascade through the air, and the car’s headlights blazing defiantly against the chaos.
```

- **Sample `b234461c-54e8-454b-b38e-880ad0aea5b5`** (priority 0) — Wan 2.5 motion preset, steps=50, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b9e9103d-8f11-47a2-b005-f9c1494a2e8a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bafdb60c-da9a-402f-b5ec-e6af33634842.mp4
  - page: https://higgsfield.ai/motion/54791805-4c3d-4878-ad38-eebded133f0b/b234461c-54e8-454b-b38e-880ad0aea5b5

```text
The night is electric with anticipation as the camera captures a sleek silver sports car, its blue stripes glimmering under the neon lights. Starting with a low-angle Car Chasing shot, the camera follows the car's every twist and turn, weaving through the bustling urban landscape with breathtaking speed. The sound of revving engines fills the air as the car accelerates, its headlights piercing the darkness. Just as the chase reaches its fever pitch, the vehicle skids to a halt in front of an imposing building. Suddenly, with a thunderous roar, the structure erupts in a massive Building Explosion that sends debris and fire cascading into the night sky. Shattered glass and flames illuminate the frantic expression of the driver, blending adrenaline with chaos. The blast creates a shockwave that ripples through the streets, emphasizing the thrill of the chase. Concrete visual keys: fragments of the exploding building lit up by the fiery eruption, sparks shooting through the air, and the sports car barely escaping the fiery aftermath.
```
