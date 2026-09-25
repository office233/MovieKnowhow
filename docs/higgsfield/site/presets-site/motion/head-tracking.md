# Head Tracking — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** music video
- **What it does (site description, verbatim):** Keeps the camera locked to the subject’s head movement, making the background shift while the face stays centered. Ideal for immersive, POV-like effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe | `5a6b5390-6605-4786-86e6-c6703ce44bbe` | 77 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5a6b5390-6605-4786-86e6-c6703ce44bbe |
| https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6 | `fe520e06-7971-4f28-9e10-e45911c57bb6` | 39 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fe520e06-7971-4f28-9e10-e45911c57bb6 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl on a skateboard turns her head side to side; her face stays centered while the city spins behind her.
```

Use it as: upload a start image that matches the scene, select motion preset **Head Tracking**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera locked to the character's head movement · **Best use:** First-person intensity, disorientation · **Models:** — · **Phrase/template:** "Head Tracking as the boxer staggers after the punch" · **Tips:** —

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/53692311-6ed5-4047-bca6-340a0af6f7e3.webp (320×182)
- Card preview, variant `fe520e06`: https://d1xarpci4ikg0w.cloudfront.net/7e5f89e6-2abf-4f4f-a29c-c2eb10e09661.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/83ba8b7e-de47-422d-9eef-5d1f4e95afc8 | https://static.higgsfield.ai/83ba8b7e-de47-422d-9eef-5d1f4e95afc8.mp4 | https://static.higgsfield.ai/83ba8b7e-de47-422d-9eef-5d1f4e95afc8.webp | https://d1xarpci4ikg0w.cloudfront.net/1dad2f04-d1b1-4721-97c6-d143e619ee49.webp (320×320) |
| 2 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/8ad69eb9-e556-4421-9d2b-ef60f115e79c | https://static.higgsfield.ai/8ad69eb9-e556-4421-9d2b-ef60f115e79c.mp4 | https://static.higgsfield.ai/8ad69eb9-e556-4421-9d2b-ef60f115e79c.webp | https://d1xarpci4ikg0w.cloudfront.net/f33a006d-efa5-4f6d-a46a-b483acf8d0ec.webp (320×182) |
| 3 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/49a3aa89-6765-4709-aaa2-f8bea67d723c | https://static.higgsfield.ai/49a3aa89-6765-4709-aaa2-f8bea67d723c.mp4 | https://static.higgsfield.ai/49a3aa89-6765-4709-aaa2-f8bea67d723c.webp | https://d1xarpci4ikg0w.cloudfront.net/e764dd80-27c3-44c4-a259-3ef065e3a0a0.webp (320×180) |
| 4 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/22037267-0c93-4da3-a4eb-6fd1d1353b6d | https://static.higgsfield.ai/22037267-0c93-4da3-a4eb-6fd1d1353b6d.mp4 | https://static.higgsfield.ai/22037267-0c93-4da3-a4eb-6fd1d1353b6d.webp | https://d1xarpci4ikg0w.cloudfront.net/15e8a432-878c-4c80-acc7-615fb3777dfc.webp (320×182) |
| 5 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/48155e4b-f9b1-409e-8c3e-610c49fc63c6 | https://static.higgsfield.ai/48155e4b-f9b1-409e-8c3e-610c49fc63c6.mp4 | https://static.higgsfield.ai/48155e4b-f9b1-409e-8c3e-610c49fc63c6.webp | https://d1xarpci4ikg0w.cloudfront.net/b3ba8ef0-7ee6-42ef-9c1d-26a1ea30e02d.webp (320×182) |
| 6 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/cbd36dde-5172-4587-8c72-9f208592ed33 | https://static.higgsfield.ai/cbd36dde-5172-4587-8c72-9f208592ed33.mp4 | https://static.higgsfield.ai/cbd36dde-5172-4587-8c72-9f208592ed33.webp | https://d1xarpci4ikg0w.cloudfront.net/bd312da3-ecae-4097-923c-abae640e6062.webp (320×424) |
| 7 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/b25387f0-c577-464b-8f98-e5c034402bfe | https://static.higgsfield.ai/b25387f0-c577-464b-8f98-e5c034402bfe.mp4 | https://static.higgsfield.ai/b25387f0-c577-464b-8f98-e5c034402bfe.webp | https://d1xarpci4ikg0w.cloudfront.net/7b944f2e-dac1-4984-8f8b-a5107d6bb1dd.webp (320×182) |
| 8 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/4f563412-5303-4750-a36c-f07772083b88 | https://static.higgsfield.ai/4f563412-5303-4750-a36c-f07772083b88.mp4 | https://static.higgsfield.ai/4f563412-5303-4750-a36c-f07772083b88.webp | https://d1xarpci4ikg0w.cloudfront.net/f7598fe2-cf53-443b-a92c-0c210b3a7a06.webp (320×182) |
| 9 | https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/09661f2e-9172-4abc-9e0d-82b0e60caa70 | https://static.higgsfield.ai/09661f2e-9172-4abc-9e0d-82b0e60caa70.mp4 | https://static.higgsfield.ai/09661f2e-9172-4abc-9e0d-82b0e60caa70.webp | https://d1xarpci4ikg0w.cloudfront.net/e1253ac9-2497-4529-b3e9-bffa9d8dafc6.webp (320×182) |

Source pages: https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe, https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `09661f2e-9172-4abc-9e0d-82b0e60caa70`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e7d81bd4-d528-4435-bec7-9d25c042e276.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a20debd3-c120-429c-a564-95a3c878f2c6.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/09661f2e-9172-4abc-9e0d-82b0e60caa70

```text
Head tracking shot. The camera stays locked onto the fighter’s face as he lies on the mat, dazed, sweat glistening under the bright arena lights. His breathing is heavy, his muscles trembling from exhaustion and impact. The muffled roar of the crowd swells in the background, blurred figures watching, waiting. Slowly, his expression shifts—from pain to determination. His jaw clenches, his eyes sharpen, focus returning. With a deep inhale, he pushes himself up, the camera tilting as he rises, sweat dripping from his brow. The scene is raw, cinematic—a moment of resilience, the turning point of a brutal fight, where willpower overcomes pain.
```

- **Sample `4f563412-5303-4750-a36c-f07772083b88`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b42660ba-4022-4060-a4d3-647c973cf449.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e88d47df-2d94-46e5-a415-cc2ae6d5d63c.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/4f563412-5303-4750-a36c-f07772083b88

```text
Head tracking shot. The camera stays locked onto the samurai’s face as he charges forward on horseback, his expression unwavering, eyes scanning the battlefield with intense focus. His armor, layered with intricate red and gold lacquered plates, clinks with each movement. Wind sweeps through his hair, his topknot trailing behind as dust and smoke swirl in the air. A crimson war banner flutters in the background, partially obscured by motion blur. The rhythmic pounding of hooves echoes as the blurred shapes of soldiers and weapons flash past. The atmosphere is cinematic—gritty yet elegant, the weight of battle pressing forward as honor and destiny collide in the chaos of war.
```

- **Sample `b25387f0-c577-464b-8f98-e5c034402bfe`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2c785548-d690-4566-8e84-30fcafdf3db2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f07879dc-e65f-4b20-ae2e-1c638b5dd29a.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/b25387f0-c577-464b-8f98-e5c034402bfe

```text
Head tracking shot. The camera smoothly follows the rooster’s head movements, maintaining sharp focus on its face while the background subtly shifts with a soft motion blur. The rooster, dressed in a sleek designer tracksuit with gold trim, oversized translucent glasses resting on its beak, exudes an air of confidence. A pair of hands holds it up like a fashion icon, adjusting its posture slightly as if presenting it for a high-end campaign. The dimly lit background is punctuated by a single off-camera flash, casting dramatic highlights on the rooster’s glossy feathers. The atmosphere is surreal—high-fashion meets absurdist streetwear aesthetic. Shot in a cinematic, editorial style with subtle slow-motion details enhancing the grandeur of the moment.
```

- **Sample `cbd36dde-5172-4587-8c72-9f208592ed33`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/efb63760-2cda-4002-ad3c-72cec98e5f6d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cfa6372e-11bc-41cf-9eee-f1c0712746ac.mp4
  - page: https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/cbd36dde-5172-4587-8c72-9f208592ed33

```text
The camera smoothly tracks the man’s head as he moves, maintaining perfect focus on his face while the background blurs with kinetic energy. His silver hair flows wildly, catching the sunlight as he dances atop the sleek black car, his neon green outfit shifting with each movement. His futuristic visor reflects the sky, obscuring his eyes, adding a mysterious edge. His dance is a fusion of sharp, robotic isolations and fluid, groove-heavy footwork, exuding effortless confidence. The giant die in his hand bounces rhythmically, emphasizing the playfulness of the scene. The energy is electric—cyberpunk meets high-fashion street performance, shot with a smooth, cinematic feel.
```

- **Sample `48155e4b-f9b1-409e-8c3e-610c49fc63c6`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/808b9676-a183-4f43-9098-9db42a9730c5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/92444293-aaf6-4007-9a17-26711826a771.mp4
  - page: https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/48155e4b-f9b1-409e-8c3e-610c49fc63c6

```text
Head tracking shot. The camera remains locked onto the grotesque, bloodstained face of a decaying, undead horse as it slowly moves forward, its hollow eyes burning with eerie intensity. Tattered, skeletal wings extend from its back, draped in rotting fabric and hanging sinews, shifting slightly with each movement. The dim, atmospheric lighting casts dramatic neon hues of red, green, and violet, creating a surreal, nightmarish glow. The background is blurred, emphasizing the creature’s terrifying presence as it breathes heavily, strands of decayed flesh peeling from its muzzle. The mood is haunting—dark fantasy meets apocalyptic horror, evoking a sense of dread and awe.
```

- **Sample `22037267-0c93-4da3-a4eb-6fd1d1353b6d`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3de89ebb-9b19-4ae1-82b9-75b38ea4939e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8d2e6fc5-fe3c-46e0-a9db-95c47c31d2f4.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/22037267-0c93-4da3-a4eb-6fd1d1353b6d

```text
Head tracking shot. The camera locks onto the grotesque, decaying face of a relentless undead figure sprinting forward at full speed. Its rotting flesh is cracked and leathery, deep fissures revealing bone beneath. Empty, hollow eye sockets stare ahead with terrifying intensity. Its mouth, filled with jagged, yellowed teeth, gapes open in a primal snarl. A broken silver necklace dangles from its neck, fluttering in the wind as it moves. The blurred desert highway behind it stretches endlessly, the golden hour sun casting long shadows across the barren landscape. Dust swirls around the frame, adding grit and urgency. The film grain and subtle scratches on the lens evoke a raw, vintage horror aesthetic—brutal, cinematic, and unrelenting.
```

- **Sample `49a3aa89-6765-4709-aaa2-f8bea67d723c`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b8efe33d-fb89-43d2-91c4-cfd980ac575a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/570a0d5c-408d-4eb7-b949-7e35d39be5c7.mp4
  - page: https://higgsfield.ai/motion/5a6b5390-6605-4786-86e6-c6703ce44bbe/49a3aa89-6765-4709-aaa2-f8bea67d723c

```text
Head tracking shot. The camera stays locked onto the rider’s face as he speed down a rugged dirt trail, their expression intense with adrenaline—teeth gritted, eyes squinting against the wind. Motion blur streaks past in the background, capturing the sunlit hills and winding path in a rush of speed. The energy is visceral—high-speed, immersive, a first-person rush of extreme downhill biking.
```

- **Sample `8ad69eb9-e556-4421-9d2b-ef60f115e79c`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a4d02322-8151-4b62-9b3e-aa459b4878bf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/040b4a26-b41e-4041-937e-35ea321b79a2.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/8ad69eb9-e556-4421-9d2b-ef60f115e79c

```text
Head tracking shot. The camera stays locked onto the subject’s face as she walks forward with effortless confidence, exhaling a slow stream of smoke from a thick cigar. The lens distorts slightly with a subtle fisheye effect, pulling the viewer closer into her space. Her bold eye makeup glows under the warm desert light, long lashes flickering with each slow blink. Pearl and chain jewelry drape across her shoulders, reflecting glints of neon and gold with each measured step. The blurred background suggests a surreal, endless wasteland stretching beyond her, dust swirling at her feet. Smoke curls around her lips, dissolving into the air with a hypnotic rhythm. The atmosphere is cinematic—high-fashion attitude blended with cyberpunk opulence, exuding control, power, and an unshakable presence.
```

- **Sample `83ba8b7e-de47-422d-9eef-5d1f4e95afc8`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1920
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7cf712e9-0810-4769-946b-063fb9367370.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/424a2ba4-ffaa-4a0a-a03b-3c5c3f4ce27f.mp4
  - page: https://higgsfield.ai/motion/fe520e06-7971-4f28-9e10-e45911c57bb6/83ba8b7e-de47-422d-9eef-5d1f4e95afc8

```text
A stylish young man sits confidently on a mustard-yellow couch in a retro-styled room, wearing gold jewelry, amber-tinted sunglasses, plaid pants, and a cream-colored T-shirt that reads “we change the game.” Large over-ear headphones cover his ears as music flows through him. At first still, he gradually begins to groove—his head nods, shoulders bounce subtly, and his hands move with relaxed precision, following the rhythm.

The camera stays in a medium close-up, locked in on his upper body. Soft warm lighting enhances the rich textures of the wood-paneled wall behind him and the golden tones of the furniture. His expression is joyful, immersed, and totally in sync with the beat—his eyes closed at times, lips parting with a quiet smile, and his posture loose and fluid.

The atmosphere is warm, expressive, and soulful, capturing a pure moment of personal connection with music. The styling blends retro aesthetics with a modern edge, emphasizing individuality and good vibes. The scene feels like a celebration of rhythm and identity, subtle yet full of life.
```
