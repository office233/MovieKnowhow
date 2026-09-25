# FPV Drone — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Captures fast, fluid shots with a first-person view drone, flying through tight spaces and dynamic paths. Ideal for thrilling, immersive, and cinematic footage.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3 | `244dc358-abee-426c-8966-b735978421b3` | 55 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=244dc358-abee-426c-8966-b735978421b3 |
| https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7 | `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7` | -280 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
FPV drone dives off a sea cliff, skims the waves, and threads between rock arches at high speed.
```

Use it as: upload a start image that matches the scene, select motion preset **FPV Drone**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fast, agile, drone-like weaving · **Best use:** Chases, aerial action, kinetic energy · **Models:** Kling 2.6, Sora 2† · **Phrase/template:** "FPV Drone chasing the motorcycle through the warehouse" · reliable: "FPV camera weaving through the environment at walking pace" · image: "Fast FPV drone shot flying through a snowy canyon and swooping past [img 1]…" · **Tips:** Path-drawing workflow (Seedance): draw a red line on the start image (template below)

## Related presets

- **Mixes that use this preset:** [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/6551f64a-98ac-4149-9aae-82403b2f5044.webp (320×180)
- Card preview, variant `5eb82f94`: https://d1xarpci4ikg0w.cloudfront.net/36c8a32a-df85-4788-9590-ccf7c3488e54.webp

### Sample videos (18; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/cb52c281-e42c-43b1-9a08-82119c91d658 | https://static.higgsfield.ai/cb52c281-e42c-43b1-9a08-82119c91d658.mp4 | https://static.higgsfield.ai/cb52c281-e42c-43b1-9a08-82119c91d658.webp | https://d1xarpci4ikg0w.cloudfront.net/129aa0ee-433f-4f6d-97fe-27f0533b9f8c.webp (320×182) |
| 2 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/63db790d-dcfd-4715-8247-92744567aead | https://static.higgsfield.ai/63db790d-dcfd-4715-8247-92744567aead.mp4 | https://static.higgsfield.ai/63db790d-dcfd-4715-8247-92744567aead.webp | https://d1xarpci4ikg0w.cloudfront.net/64d131c6-2c2a-4610-8b88-fda683d10780.webp (320×180) |
| 3 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/229f189a-b57e-44fd-907f-8a13307a996c | https://static.higgsfield.ai/229f189a-b57e-44fd-907f-8a13307a996c.mp4 | https://static.higgsfield.ai/229f189a-b57e-44fd-907f-8a13307a996c.webp | https://d1xarpci4ikg0w.cloudfront.net/2abc911d-253f-42bd-a305-11dfa12c3402.webp (320×424) |
| 4 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8dc30a96-560a-4fb8-b997-075b31d57ea3 | https://static.higgsfield.ai/8dc30a96-560a-4fb8-b997-075b31d57ea3.mp4 | https://static.higgsfield.ai/8dc30a96-560a-4fb8-b997-075b31d57ea3.webp | https://d1xarpci4ikg0w.cloudfront.net/3127d0eb-5184-4bb6-89d1-1cbe4c3519e9.webp (320×182) |
| 5 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/96904c29-a3ae-48f7-b51e-9d29eea0b227 | https://static.higgsfield.ai/96904c29-a3ae-48f7-b51e-9d29eea0b227.mp4 | https://static.higgsfield.ai/96904c29-a3ae-48f7-b51e-9d29eea0b227.webp | https://d1xarpci4ikg0w.cloudfront.net/028a27f3-a922-496d-967b-168f419fcf45.webp (320×182) |
| 6 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/301f3213-455c-43f6-bf16-08ba4577c1df | https://static.higgsfield.ai/301f3213-455c-43f6-bf16-08ba4577c1df.mp4 | https://static.higgsfield.ai/301f3213-455c-43f6-bf16-08ba4577c1df.webp | https://d1xarpci4ikg0w.cloudfront.net/ff76ae22-6195-4057-8bb2-db86f832748b.webp (320×242) |
| 7 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3 | https://static.higgsfield.ai/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3.mp4 | https://static.higgsfield.ai/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3.webp | https://d1xarpci4ikg0w.cloudfront.net/dc2af330-1154-4d25-abe3-b9f2108384b8.webp (320×180) |
| 8 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/b26bbd92-4e54-42ee-b3e5-b425d614fb59 | https://static.higgsfield.ai/b26bbd92-4e54-42ee-b3e5-b425d614fb59.mp4 | https://static.higgsfield.ai/b26bbd92-4e54-42ee-b3e5-b425d614fb59.webp | https://d1xarpci4ikg0w.cloudfront.net/9ef815db-ff47-479a-a128-0e647e56c3a6.webp (320×432) |
| 9 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/25c7d66f-1fdf-483f-823c-cd20958f4b56 | https://static.higgsfield.ai/25c7d66f-1fdf-483f-823c-cd20958f4b56.mp4 | https://static.higgsfield.ai/25c7d66f-1fdf-483f-823c-cd20958f4b56.webp | https://d1xarpci4ikg0w.cloudfront.net/c5c7088a-3806-4745-825e-3595c2905139.webp (320×192) |
| 10 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c | https://static.higgsfield.ai/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c.mp4 | https://static.higgsfield.ai/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c.webp | https://d1xarpci4ikg0w.cloudfront.net/a0473f87-551f-4fa3-8879-d4790bf51970.webp (320×182) |
| 11 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/d33e119f-1e02-4b08-9ad1-f6df09a41802 | https://static.higgsfield.ai/d33e119f-1e02-4b08-9ad1-f6df09a41802.mp4 | https://static.higgsfield.ai/d33e119f-1e02-4b08-9ad1-f6df09a41802.webp | https://d1xarpci4ikg0w.cloudfront.net/54eace3f-40ba-4abb-85c5-a19a26ca2022.webp (320×242) |
| 12 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/4c21fae5-e0a8-43ee-80cc-f1e5a56df354 | https://static.higgsfield.ai/4c21fae5-e0a8-43ee-80cc-f1e5a56df354.mp4 | https://static.higgsfield.ai/4c21fae5-e0a8-43ee-80cc-f1e5a56df354.webp | https://d1xarpci4ikg0w.cloudfront.net/64eb745b-895e-44eb-9369-7a6dba3a7aab.webp (320×210) |
| 13 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/ac8ca389-0da1-49de-b515-20ca5624bf41 | https://static.higgsfield.ai/ac8ca389-0da1-49de-b515-20ca5624bf41.mp4 | https://static.higgsfield.ai/ac8ca389-0da1-49de-b515-20ca5624bf41.webp | https://d1xarpci4ikg0w.cloudfront.net/111776e9-f199-4225-863f-c0dc29175780.webp (320×210) |
| 14 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/e1560386-0c3d-47d7-a5c8-0d6fcd84d819 | https://static.higgsfield.ai/e1560386-0c3d-47d7-a5c8-0d6fcd84d819.mp4 | https://static.higgsfield.ai/e1560386-0c3d-47d7-a5c8-0d6fcd84d819.webp | https://d1xarpci4ikg0w.cloudfront.net/91a6f64b-e0fd-4e3b-8a88-d95ee40be822.webp (320×210) |
| 15 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/19dd5d9a-4041-406d-8751-09cd85b13d5c | https://static.higgsfield.ai/19dd5d9a-4041-406d-8751-09cd85b13d5c.mp4 | https://static.higgsfield.ai/19dd5d9a-4041-406d-8751-09cd85b13d5c.webp | https://d1xarpci4ikg0w.cloudfront.net/3c348d5a-3f6c-4282-aa5d-79a3898bf69b.webp (320×210) |
| 16 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/f829fd2b-3b91-4e19-b7c4-7a8170849470 | https://static.higgsfield.ai/f829fd2b-3b91-4e19-b7c4-7a8170849470.mp4 | https://static.higgsfield.ai/f829fd2b-3b91-4e19-b7c4-7a8170849470.webp | https://d1xarpci4ikg0w.cloudfront.net/efea4168-0d70-4c75-b5ef-a4067b0fa3c6.webp (320×210) |
| 17 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/33069ec3-aea8-491f-b378-4528ac329c9c | https://static.higgsfield.ai/33069ec3-aea8-491f-b378-4528ac329c9c.mp4 | https://static.higgsfield.ai/33069ec3-aea8-491f-b378-4528ac329c9c.webp | https://d1xarpci4ikg0w.cloudfront.net/31665250-8653-4f30-9476-32319b169d73.webp (320×210) |
| 18 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c | https://static.higgsfield.ai/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c.mp4 | https://static.higgsfield.ai/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c.webp | https://d1xarpci4ikg0w.cloudfront.net/1abadf71-1d4d-4d12-afe2-fc77e40054c2.webp (320×210) |

Source pages: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3, https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7. Crawled 2026-09.


## Real sample prompts (site)

18 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c`** (priority 17) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/46d8dbff-9fd4-4716-b2f7-004454d1a0b5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bcab5aa3-0ff1-4ab3-8a29-e294eeb3b6c5.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c

```text
camera slowly circles two tense police officers standing side by side in a dimly lit graffiti-covered street, both aiming their pistols directly at the viewer. The white officer on the left has a thick mustache and blue uniform, his face frozen in focused determination. The Black officer on the right wears a tactical vest and snarls, both guns steady in their grip. The camera finishes its 180° arc behind them, then bursts forward down the alley in a fast, gliding motion. Neon-orange streetlight pours from above, revealing a Black rapper in the middle of the road. He wears a green bomber jacket, a white tank top, and a thick silver chain around his neck. His face is fierce and defiant, grillz flashing as he leans into the camera, aggressively delivering lines with clenched jaw and unwavering eye contact.








```

- **Sample `33069ec3-aea8-491f-b378-4528ac329c9c`** (priority 16) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b7b1734d-b2de-4920-b0cf-a4ec37344c57.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/68eb47f4-4873-4fe3-a9c7-d1c8afb6ccc8.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/33069ec3-aea8-491f-b378-4528ac329c9c

```text
A young Black man in a bright blue and yellow Vault 21 jumpsuit, with open chest showing gold chains, confidently walks straight toward the camera with a relaxed smile, surrounded by teal industrial walls, pipes, and retro-futuristic panels of the underground vault. The camera performs a smooth 180-degree arc around him from left to right, circling his body as he keeps walking, head slightly tilted in calm confidence, lights glinting off his gold watch and earrings. As the rotation completes, the camera seamlessly glides straight forward through the industrial space and into a new chamber, revealing a curvy Black woman with short pink hair in a tight blue Vault 21 jumpsuit and bold yellow boots, leaning on a locker. She unzips her suit partway with one hand while holding a black visor helmet in the other, revealing a black lace bra beneath. Her gaze is confident and direct, lips pursed with subtle attitude, body language exuding power as green and red lights flicker from control panels behind her. The environment maintains the same vault setting with steel walls, pipes, and dim industrial lighting, ensuring seamless continuity.


















```

- **Sample `f829fd2b-3b91-4e19-b7c4-7a8170849470`** (priority 15) — Wan 2.5 motion preset, steps=37, frames=81, strength=1, guide_scale=5.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b81e62ea-8daa-4ddd-897a-cf915ca797c1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e3520df5-54d0-44d6-a807-e77c476c7872.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/f829fd2b-3b91-4e19-b7c4-7a8170849470

```text
Camera swiftly executes a dynamic “through object in” movement, starting from an artistic scene featuring a young man lounging stylishly on vivid red stairs, dressed casually with sunglasses, boots, and a relaxed pose. Accelerating forward, the camera moves sharply through the staircase structure, seamlessly transitioning into an electrifying, surreal fashion editorial scene. Revealed are three bold, fashionably styled individuals surrounded by vivid, colorful props and eccentric decor, their striking makeup and eclectic attire amplifying a dynamic atmosphere rich in avant-garde creativity and dramatic contrasts.
```

- **Sample `19dd5d9a-4041-406d-8751-09cd85b13d5c`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/27ac16a5-9e5c-4c81-9b28-eb491e647fb1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/006e6361-d5fc-49f3-8963-2722b1f611ef.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/19dd5d9a-4041-406d-8751-09cd85b13d5c

```text
A stylish cinematic scene opens on a confident woman seated atop a sleek white countertop, dressed in an eye-catching bright yellow pantsuit, paired with bold pink platform heels and striking yellow eye makeup. Her posture is commanding and elegant, one arm gracefully raised. The camera swiftly pans downward, dynamically transitioning through the floor to reveal a young man reclining confidently on a vibrant orange sofa, dressed in a matching vivid yellow suit, jacket open, exuding a casual yet intense presence against the stark contrast of the minimalist white walls.
```

- **Sample `e1560386-0c3d-47d7-a5c8-0d6fcd84d819`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8a3fd373-d350-4b65-8f1e-a74903d5cbeb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/876f798a-7dd7-4f38-8a02-1d88da60f931.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/e1560386-0c3d-47d7-a5c8-0d6fcd84d819

```text
A dynamic aerial drone shot at high speed, swiftly moving over a vibrant and surreal garden landscape under a saturated magenta sky. The camera rapidly follows a winding earthy path flanked by lush green grass, playful metallic spheres, white wooden fences, and a lone silver stepladder. The motion seamlessly transitions, revealing an even more surreal dreamscape of giant, vividly colored fruits and whimsical fruit-tree hybrids lining the road. Dominating the horizon, an enormous, strikingly realistic human head emerges from behind rolling hills, its eyes ethereally white, gazing upward against the vivid purple twilight backdrop.
```

- **Sample `ac8ca389-0da1-49de-b515-20ca5624bf41`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2b058966-c72e-4d45-bb82-06875f23dcb7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2462b098-304e-4cd6-ac5f-9dae777dea8e.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/ac8ca389-0da1-49de-b515-20ca5624bf41

```text
A visually arresting cinematic scene opens on a glamorous woman reclining elegantly on a reflective blue surface. She wears a sleek, glossy red pantsuit, vibrant red stilettos, and dramatic blue eye makeup, her platinum blonde hair styled impeccably. Her polished red nails delicately touch a crystal-clear sphere placed in front of her. The camera swiftly moves forward, smoothly passing through the transparent sphere, revealing another striking woman lying gracefully on a deep green background. She wears a vivid magenta dress, surrounded by scattered, shiny blue heels, holding a mirrored disc partially obscuring her dramatically made-up face, enhancing the surreal, fashion-editorial aesthetic.
```

- **Sample `4c21fae5-e0a8-43ee-80cc-f1e5a56df354`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1923fdee-ed12-4fd0-8b96-56f486fc0722.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7909e094-0d5b-48d6-98da-e3ff6b8c0f3a.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/4c21fae5-e0a8-43ee-80cc-f1e5a56df354

```text
Camera cranes downward, smoothly transitioning from an intimate monochrome shot of a young couple embracing tenderly in the center of an expansive, tranquil seascape, their expressions serious yet calm, to gradually reveal a surreal, haunting image of a man’s face and hands partially submerged beneath pale, soft sand. The landscape subtly shifts from serene waters extending endlessly toward a distant horizon into textured, close-up detail of delicate sand grains enveloping the submerged man’s serene yet enigmatic features. His fingers gently press against the sand’s surface, motionless but poised as if frozen in a moment of awakening. The camera movement utilizes a precise vertical descent, shifting from a broad, atmospheric wide-angle framing to a tight, detailed overhead close-up. Atmosphere moves from quietly romantic to dreamlike and introspective. Styled in striking black-and-white cinematography, rich with contrasts and grain texture evoking timeless, poetic elegance.
```

- **Sample `d33e119f-1e02-4b08-9ad1-f6df09a41802`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/41e88d30-32bb-40d6-ac2b-9966cc6cb1be.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/58feaacb-31e3-4ef5-a46b-07ed52fdf71a.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/d33e119f-1e02-4b08-9ad1-f6df09a41802

```text
An FPV drone swiftly flies through an open window, diving smoothly downward to reveal two high-performance sports cars—one metallic silver, the other glossy red—surrounded by thick smoke from spinning tires. The cars suddenly accelerate forward, tires screeching as smoke trails behind. The drone skillfully maneuvers, closely following the vehicles as they speed off, weaving dynamically behind them with precision. The scene is thrilling, intense, and action-packed, enhanced by realistic, cinematic visuals, dynamic motion blur, and immersive FPV drone perspective. 
```

- **Sample `4dfe1661-92a6-4bdc-a26f-007c9f0feb4c`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/57194485-f34f-4e05-9a2e-75236151f0b7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e433c21e-6451-4434-b1dd-9ccb61d78ee8.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c

```text
fpv drone shot of a biker riding the dirtbike on a dusty track, he makes a U-turn with the camera following his movement.
```

- **Sample `25c7d66f-1fdf-483f-823c-cd20958f4b56`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1232×736
  - input image: https://d1xarpci4ikg0w.cloudfront.net/73b91bcb-58cb-42af-ae4b-e3dd8cad2144.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/15e87346-053d-416b-a6a9-2a1dd523cecd.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/25c7d66f-1fdf-483f-823c-cd20958f4b56

```text
microworld fpv drone shot.
```

- **Sample `b26bbd92-4e54-42ee-b3e5-b425d614fb59`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/61aa4592-a306-4b9f-948a-2daa81a2ffca.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8f13b042-01fb-4713-aab8-7106861b690e.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/b26bbd92-4e54-42ee-b3e5-b425d614fb59

```text
man stands and smokes, the camera flies past him revealing the magnificent landscape,
```

- **Sample `8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4e7ee293-aa31-4277-919b-f6c88046caaf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ea625ef1-52ac-4390-aac2-bfbbdb9e5b23.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3

```text
A breathtaking FPV drone shot, soaring through the misty morning air, approaching a stunning red and gold pagoda nestled among lush, green mountains. The camera begins high, capturing the golden sunlight filtering through drifting clouds, casting a warm glow over the landscape. The serene village below slowly fades into the background as the drone tilts downward, diving toward the pagoda’s intricate, curved rooftops.

As the drone swoops in, the details of the ornate wooden railings and tiled roofs come into focus, every beam and ridge meticulously carved. The camera weaves effortlessly, gliding past golden finials and upturned eaves, tracing the layered architecture with smooth, dynamic movement.

ohwx tchnq
```

- **Sample `301f3213-455c-43f6-bf16-08ba4577c1df`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f3b82f6a-ecae-4e3f-b75e-95d5b5c63b03.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a43bded9-70d5-4c89-b998-059e4644bf93.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/301f3213-455c-43f6-bf16-08ba4577c1df

```text
A rapid, exhilarating FPV drone shot, accelerating toward a breathtaking coastal ridge. The camera tilts sharply along green cliffs, the golden sunlight casting long shadows over the rolling landscape.

The camera swoops low, skimming just above the rugged terrain before twisting into a sharp turn, revealing the hidden beach cove below—pristine, untouched sands where waves gently lap against the shore. The crystal-clear water glows turquoise, the foam swirling into intricate patterns as the drone dips closer, tracing the shoreline with precision and speed.

With a sudden burst of acceleration, the camera pulls up, climbing high above the cliffs, offering a breathtaking aerial view of the entire coastline. The ocean stretches endlessly, the deep blue merging with the sky as the drone spins in a cinematic barrel roll, before banking back down toward the land, rushing past rock formations and cliffs, capturing every detail in a thrilling, seamless flow.

ohwx tchnq
```

- **Sample `96904c29-a3ae-48f7-b51e-9d29eea0b227`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f1742771-1673-40cf-9c85-fe23967ea596.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8824bcba-4922-4e8e-b0a4-ba26d7ad7c49.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/96904c29-a3ae-48f7-b51e-9d29eea0b227

```text
An intense FPV drone shot begins in freefall from high above, pointing straight down at a geometric skyscraper rooftop. The city grid blurs around the edges as the drone dives, hurtling toward the triangular crown of the building with precision and speed.

The camera slices through air, spiraling tighter as it nears the structure. It threads through the rooftop frame, then twists sharply alongside the glass facade, catching reflections of city lights and sky as it rushes down the vertical wall.

Each level streaks by—windows, balconies, metal beams—until the drone pulls up just above the street.

ohwx tchnq
```

- **Sample `8dc30a96-560a-4fb8-b997-075b31d57ea3`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c0d14e7b-79e1-4c31-aaab-a05651a3b5a8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/33223e5e-fe92-4e16-af33-e085486aae1b.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8dc30a96-560a-4fb8-b997-075b31d57ea3

```text
A smooth, immersive FPV drone shot, flying low and fast across a frozen lake glowing under a stunning violet-and-rose sunset. 

The drone approaches from behind, hugging the icy surface, the sound of skates slicing across the ice growing louder. Then, with precise motion, it sweeps between the two skaters. The moment is intimate and electric—fleeting wind, falling breath, a synchronized rhythm.

ohwx tchnq
```

- **Sample `229f189a-b57e-44fd-907f-8a13307a996c`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0c78b3d5-658c-4a5b-b9bd-dbeb49ef6a3f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/96369fa8-a214-4313-8672-cc998ef62120.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/229f189a-b57e-44fd-907f-8a13307a996c

```text
A cinematic micro-FPV drone shot, beginning with an intense close-up of coarse sea salt crystals suspended midair in slow motion. The camera hovers in fast circling around the steak, capturing every details of it.

ohwx tchnq
```

- **Sample `63db790d-dcfd-4715-8247-92744567aead`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9e3cb7d1-b459-4c73-9832-385569a3b7ce.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c7061241-b120-44f8-a597-19cd157b5e2c.mp4
  - page: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/63db790d-dcfd-4715-8247-92744567aead

```text
Man riding snowbard,
```

- **Sample `cb52c281-e42c-43b1-9a08-82119c91d658`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e8707f55-9f00-44b4-8a10-52b702e419c4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/133bdcc7-0585-47a6-9ac4-5a7288809f5f.mp4
  - page: https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7/cb52c281-e42c-43b1-9a08-82119c91d658

```text
A low, immersive high speed, FPV drone shot races through the tight golden corridors of a wheat field, the sun casting warm highlights on each swaying stalk. The camera weaves between stems, brushing past brittle husks and loose chaff floating in the air.

It tilts upward slightly, revealing a narrow tunnel of blue sky above the amber sea, then dips again, the sound of wind and rustling grain guiding the way forward in a steady, cinematic glide.

Each twist feels alive—natural, fast, and full of summer breath.

ohwx tchnq
```
