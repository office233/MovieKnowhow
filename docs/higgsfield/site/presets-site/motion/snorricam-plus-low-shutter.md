# Snorricam + Low Shutter — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** music video
- **What it does (site description, verbatim):** The subject stays locked in frame while the world blurs with motion streaks. A dizzying, chaotic blend perfect for intense or disoriented scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf | `7c3b76f5-92b7-4629-8b6f-c8f9042635bf` | 69 | isMix | mix of: Snorricam (motion id `893cb65f-c528-40aa-83d8-c5aeb2bfe59f`, strength 0.9), Low Shutter (motion id `f7949a2f-2bcd-459a-96c0-80eb222abcdc`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=893cb65f-c528-40aa-83d8-c5aeb2bfe59f%2Cf7949a2f-2bcd-459a-96c0-80eb222abcdc&presetMotionStrengths=0.9%2C1 |
| https://higgsfield.ai/motion/a3ce0054-2745-40e9-99b8-29977324bff1 | `a3ce0054-2745-40e9-99b8-29977324bff1` | -206 | isMix | mix of: Snorricam (motion id `893cb65f-c528-40aa-83d8-c5aeb2bfe59f`, strength 0.9), Low Shutter (motion id `f7949a2f-2bcd-459a-96c0-80eb222abcdc`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=893cb65f-c528-40aa-83d8-c5aeb2bfe59f%2Cf7949a2f-2bcd-459a-96c0-80eb222abcdc&presetMotionStrengths=0.9%2C1 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A drunk man stumbles through a neon street, locked in frame while the world smears into motion streaks.
```

Use it as: upload a start image that matches the scene, select motion preset **Snorricam + Low Shutter**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Snorricam](snorricam.md) (strength 0.9), [Low Shutter](low-shutter.md) (strength 1.0)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/53f012d2-2c74-4cc7-93da-9bb2b02e6de8.webp (320×190)
- Card preview, variant `a3ce0054`: https://d1xarpci4ikg0w.cloudfront.net/da0f2cde-2a59-401e-a265-a77783f4a130.webp
- Component preview — Snorricam: https://d1xarpci4ikg0w.cloudfront.net/c5634f64-fc8c-4cfe-ba93-c9bff1ea37dc.webp
- Component preview — Low Shutter: https://d1xarpci4ikg0w.cloudfront.net/d4f55fca-2d75-49c8-9638-464bd8498c4e.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/40a6259b-5d8f-4f36-839e-ee984eb15412 | https://static.higgsfield.ai/40a6259b-5d8f-4f36-839e-ee984eb15412.mp4 | https://static.higgsfield.ai/40a6259b-5d8f-4f36-839e-ee984eb15412.webp | https://d1xarpci4ikg0w.cloudfront.net/688d45b8-cab0-4e6b-bb78-b7c80f3f353e.webp (320×242) |
| 2 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/1a96779b-bb6f-4db9-a886-1a7b32932015 | https://static.higgsfield.ai/1a96779b-bb6f-4db9-a886-1a7b32932015.mp4 | https://static.higgsfield.ai/1a96779b-bb6f-4db9-a886-1a7b32932015.webp | https://d1xarpci4ikg0w.cloudfront.net/69639b44-107e-4eb0-beec-df80f8cf719c.webp (320×210) |
| 3 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/eaf1e455-47f3-4bbd-a055-8f0cdec259b0 | https://static.higgsfield.ai/eaf1e455-47f3-4bbd-a055-8f0cdec259b0.mp4 | https://static.higgsfield.ai/eaf1e455-47f3-4bbd-a055-8f0cdec259b0.webp | https://d1xarpci4ikg0w.cloudfront.net/dcaf664a-acab-4343-8d01-98e8cc0bfed4.webp (320×210) |
| 4 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/400dda8a-fa82-48bf-b642-5deebe214ee2 | https://static.higgsfield.ai/400dda8a-fa82-48bf-b642-5deebe214ee2.mp4 | https://static.higgsfield.ai/400dda8a-fa82-48bf-b642-5deebe214ee2.webp | https://d1xarpci4ikg0w.cloudfront.net/40d904ea-60ea-40b3-a6f0-255ab8f06a8f.webp (320×320) |
| 5 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/1af2b18e-68ec-4814-8afc-b79b0cb508db | https://static.higgsfield.ai/1af2b18e-68ec-4814-8afc-b79b0cb508db.mp4 | https://static.higgsfield.ai/1af2b18e-68ec-4814-8afc-b79b0cb508db.webp | https://d1xarpci4ikg0w.cloudfront.net/1f8b3550-c1ba-4161-9fac-d71f81c1e072.webp (320×242) |
| 6 | https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf/31738351-33dd-495c-8670-1b517ed4212c | https://static.higgsfield.ai/31738351-33dd-495c-8670-1b517ed4212c.mp4 | https://static.higgsfield.ai/31738351-33dd-495c-8670-1b517ed4212c.webp | https://d1xarpci4ikg0w.cloudfront.net/6541cfdb-7c73-4295-bc0b-505f0a85a2bc.webp (320×210) |

Source pages: https://higgsfield.ai/motion/7c3b76f5-92b7-4629-8b6f-c8f9042635bf, https://higgsfield.ai/motion/a3ce0054-2745-40e9-99b8-29977324bff1. Crawled 2026-09.


## Real sample prompts (site)

18 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `7f38146e-42c3-44f9-a057-04f73164eebc`** (priority 17) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4da351e4-e593-43b7-a9b8-f55b5a0f455f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fb4f9889-cd0f-4536-b0d6-131eac28ed45.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/7f38146e-42c3-44f9-a057-04f73164eebc

```text
An elderly Japanese man walks calmly beneath towering city overpasses, sipping coffee from a takeaway cup.  The cool urban environment contrasts with his warm drink, as muted daylight filters through the overpass above. His pace is slow and steady, and he occasionally glances around at the quiet city around him.
```

- **Sample `c1767b7c-ef81-441a-a099-8641cfe14b90`** (priority 16) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8787c35c-f2f8-4544-b562-770eb9ac240e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2c4b0c99-1a74-4443-a30c-2734cf2f4281.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/c1767b7c-ef81-441a-a099-8641cfe14b90

```text
A drunk and carefree man walks through a wild crowd of screaming fans in a packed nightclub. He wears oversized sunglasses and a loose, unbuttoned shirt under a brown jacket, revealing tattoos on his chest. Neon lights flash across his face as he sways and smiles, looking around with dazed amusement. Fans around him reach out, shout, and cheer, their hands raised in excitement. The camera follows him closely, capturing his swagger and the chaotic energy of the moment.

Style: Cinematic, chaotic nightlife
Mood: Euphoric, messy, rebellious
Lighting: Neon pink, blue, and green strobes
Angle: Medium close-up with shallow depth of field, party blur
Details: Sweat, motion blur, crowd hands in frame, loud energy
```

- **Sample `347ac770-d7c8-4a97-b7a8-046c2db1220e`** (priority 15) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/90da7d45-530c-4786-8108-47095636e939.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8130efb1-6a7f-4348-be0e-5521cb87cbb4.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/347ac770-d7c8-4a97-b7a8-046c2db1220e

```text
A man in a red blazer rises from the bed with a wide smile, grabs a bottle of whiskey, takes a deep swig straight from it, and confidently walks forward, radiating swagger and energy. cinematic shot, hip-hop vibe
```

- **Sample `125519b3-7a37-4ca2-8cbf-8b19eb28942b`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eb897b46-ec9f-467a-a57e-f05028e5b12a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b38e6790-7bee-476f-b3b0-1e34bd12dae7.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/125519b3-7a37-4ca2-8cbf-8b19eb28942b

```text
A man walks through Chinatown at night, vibrant neon signs reflecting off the wet pavement around him. The bustling crowd moves past, but he walks with calm purpose. He pauses briefly, pulls a pair of sleek, narrow sunglasses from his coat pocket, and puts them on with slow, deliberate motion. The camera lingers on his face as the glasses reflect flashing red and blue signs. Without hesitation, he continues walking deeper into the glowing street.
```

- **Sample `2efca3f8-6819-4595-86ca-9537fd9fda92`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a586c7b0-c72a-4213-ba0c-0151cf50c393.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f7925924-c426-4c59-aba6-f12cd327820c.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/2efca3f8-6819-4595-86ca-9537fd9fda92

```text
The girl is filming and walking forward inside the metro, staggering a little and filming people and looking at the camera.
```

- **Sample `1ee08a97-d064-49b9-a067-ae2dca26080b`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2172ad89-3b2f-4906-a2a3-94478915fdfc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ff65c63a-1e3e-44f0-97d9-8452751362c8.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/1ee08a97-d064-49b9-a067-ae2dca26080b

```text
Man in neon ski mask walks through a hallway with sharp head movements, people pass by closely, camera shakes realistically.
```

- **Sample `98dc42c7-5be1-4852-bd61-1aadb6fb3ae9`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fbccb954-f122-4d05-87d7-90977492a4a6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/797e5a21-06da-45fb-8dcd-0b5fef3ce66a.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/98dc42c7-5be1-4852-bd61-1aadb6fb3ae9

```text
A drunk and disoriented man stumbles down a neon-lit bar corridor, overwhelmed and confused. His face is sweaty and dazed, with smudges of makeup or bruises. He holds his head with both hands, looking around in panic, not understanding where he is or what’s happening. People pass by him in a blur, talking and laughing, their movements chaotic and out of sync with his slow, unstable steps. The lighting is vibrant—pink, purple, and blue neon casting harsh glows and deep shadows across his face, adding to the surreal, intoxicated atmosphere.

Style: Neo-noir, cinematic realism, handheld feel
Mood: Disoriented, intense, emotionally raw
Lighting: Neon bar glow, high contrast
Details: Motion blur, shaky perspective, tight hallway with people passing in the background
```

- **Sample `aa5f1f23-e300-4ded-b2fb-25c6c731cba5`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/973e8404-aadb-4ad4-b1a9-ff0c6aff983b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b7545353-d2e0-41c4-a8f3-df8392c7cc7d.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/aa5f1f23-e300-4ded-b2fb-25c6c731cba5

```text
The girl gets up and starts talking on the phone.
```

- **Sample `fa27ef84-1e04-4072-8cf2-000169fc004d`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/122994bb-05ea-42fd-be9d-0378c90fccf7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b97fadbf-02e2-4286-9b56-4ba550653730.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/fa27ef84-1e04-4072-8cf2-000169fc004d

```text
A man in tactical gear moves through a crowded nightclub, eyes sharp and body tense. Neon lights flash around him as partygoers dance in slow motion, unaware of the tension cutting through the air. He grips a pistol tightly, making quick, deliberate movements as he scans the room. The camera follows closely with jittery, handheld motion, capturing his shifting gaze and rapid breathing. He's tracking someone—his focus is intense, his jaw clenched, and every motion is calculated as he weaves through the chaos under pulsing lights and pounding bass.

Style: Action-thriller, neon-drenched, high tension
Mood: Suspenseful, alert, cinematic urgency
Camera angle: Handheld close-up, fast tracking shots
Details: Tactical gear, glowing dance floor, fast eye movements, club lights reflecting off his weapon
```

- **Sample `6e185c69-ced2-4b91-b8f2-9ceab8d1a34a`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/22f76532-5b8d-4aea-807d-0092a149566b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/996b667d-3090-4da6-b4d3-61adf507cd3b.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/6e185c69-ced2-4b91-b8f2-9ceab8d1a34a

```text
A stylish man walks alone in the heart of Las Vegas at night, surrounded by neon lights and a hazy glow. He looks around, confused and slightly disoriented, one hand resting on his head as if trying to remember something. His expression reveals a mix of exhaustion and intoxication, his steps uneven. The vibrant red and yellow lighting from nearby signs and street lamps casts dramatic shadows across his face and suit. The atmosphere feels cinematic and dreamlike, capturing the surreal buzz of a city that never sleeps.

Style: Neon noir, cinematic street photography
Mood: Disoriented, hazy, lost-in-the-moment
Lighting: Intense red and yellow neon, soft glowing haze
Setting: Nighttime Las Vegas strip
Camera angle: Low and close, looking slightly up to enhance dramatic lighting and urban energy
```

- **Sample `296b0830-bfd2-43c9-af95-c0f5634c6db8`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3fb9fcdf-57e2-45c4-acc8-232978d18834.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ae5851d4-45b3-49eb-ace9-0237ad3c2b56.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/296b0830-bfd2-43c9-af95-c0f5634c6db8

```text
A man walks, takes off his glasses with his left hand, smiles, people around him walk in the direction where they are looking, the glasses remain on his left hand
```

- **Sample `bd6f7ad0-8228-4f65-aa49-4d36d6607457`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fb14c982-41ca-463e-a0c1-a4d7ce35223a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dfe7d9a9-0c00-4008-8055-5fee81ecd4cb.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/bd6f7ad0-8228-4f65-aa49-4d36d6607457

```text
A determined soldier, clad in a weathered brown uniform and helmet, walks straight toward the viewer through a smoke-filled battlefield. His eyes scan intensely for threats, his face hardened with fury and resolve. Gripping his rifle tightly, he moves forward with heavy, deliberate steps, every muscle tense and ready. The camera tracks his movement from the front, smoothly matching his pace, keeping the focus locked on his fierce expression and unwavering aim. Behind him, fire blazes and fellow soldiers move in the hazy background, amplifying the chaos and urgency of the scene.
```

- **Sample `2c5a1481-abad-418b-ac5e-1e5b7e0c2b80`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6793cf2f-0504-4576-8ce3-58ddc2582f88.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4c0b2c24-8c4e-415d-8b73-f9bf995584f2.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/2c5a1481-abad-418b-ac5e-1e5b7e0c2b80

```text
The massive blue creature storms forward toward the viewer with furious intensity, its piercing glowing eyes locked directly ahead, radiating anger and primal dominance. Each step it takes causes the ground to tremble beneath its enormous, muscular frame. Its clenched jaw, deeply furrowed brow, and flexing claws all emphasize a sense of unrelenting rage and imminent danger. The camera rapidly pulls back while staying centered on its face and upper body, heightening the tension as the beast closes the distance at a threatening pace, filling the frame with sheer power and menace.
```

- **Sample `8c48b4ec-6de3-4561-a085-6deab1c42bbf`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6b7bc5f8-e2df-47e0-b26e-f602bdedfd2d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/497f2f63-7622-4b63-a260-4db45d8c5681.mp4
  - page: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/8c48b4ec-6de3-4561-a085-6deab1c42bbf

```text
Man looks attentively to the left as he starts disgustingly eating a steak with his hands
```

- **Sample `e6d35ba0-7c3b-4eb0-8bfd-83f3ba221d58`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1200×752
  - input image: https://d1xarpci4ikg0w.cloudfront.net/68356a59-1202-42d7-a06a-9f3cefd52bc3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/04e6bbc6-19fe-4052-96fb-b0e54b3826f0.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/e6d35ba0-7c3b-4eb0-8bfd-83f3ba221d58

```text
Woman in the forest, falls down on her knees with teary eyes, and then exhaustingly lies on the ground. Her hands cover her face, and the sunbeams illuminate her providing a sense of hope
```

- **Sample `a7b17ff2-94eb-4402-97a7-4531a8aae806`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1376×656
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bdcc8e5c-c1db-40cf-bb91-43b996ae9d6d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e295d1f8-cdb4-4a96-881f-48da59e25578.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/a7b17ff2-94eb-4402-97a7-4531a8aae806

```text
Woman shakes her head to the music's beat, walks to the window in her room, light shines on her hair, she bites Snickers bar.
```

- **Sample `98f28410-8a62-47de-8fee-294a943e328b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2b8b1a23-be04-46f2-886f-e2c9b23f693d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/23b4d350-a38c-4ea6-b5c0-1ee26d51da67.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/98f28410-8a62-47de-8fee-294a943e328b

```text
Woman in white dress loads a rifle, take aim, smiles and shoot.
```

- **Sample `e7da29e1-8ebc-461e-b934-85cd5df6ee93`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/de5b09b2-2ad9-4f8d-95d1-e82065056716.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c4389315-ce53-4a3c-b4e9-3204f446f233.mp4
  - page: https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f/e7da29e1-8ebc-461e-b934-85cd5df6ee93

```text
Woman start looking at the phone, quickly types on it while walking on the busy streets of New York. City lights periodically illuminate her face.
```
