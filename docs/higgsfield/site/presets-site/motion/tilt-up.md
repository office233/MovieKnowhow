# Tilt up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera upward to reveal something or make the subject feel powerful, grand, or important
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec | `359bd4f6-252a-405e-bb5c-3807b3b9d9ec` | 102 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=359bd4f6-252a-405e-bb5c-3807b3b9d9ec |
| https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6 | `9f127dad-0db0-4e3d-a440-3cfbffca30b6` | -212 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9f127dad-0db0-4e3d-a440-3cfbffca30b6 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Starting on muddy combat boots, the camera tilts up a towering warrior in scarred armor to his defiant face.
```

Use it as: upload a start image that matches the scene, select motion preset **Tilt up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/f4e1bce6-54fc-410c-af8d-5c5f5a00ad03.webp (320×210)
- Card preview, variant `9f127dad`: https://d1xarpci4ikg0w.cloudfront.net/4fe77b79-2edc-4879-a0f9-bd3eb0f6e0d8.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/9c1e7bde-eaba-43d1-9180-d82cca447e1d | https://static.higgsfield.ai/9c1e7bde-eaba-43d1-9180-d82cca447e1d.mp4 | https://static.higgsfield.ai/9c1e7bde-eaba-43d1-9180-d82cca447e1d.webp | https://d1xarpci4ikg0w.cloudfront.net/feb0e9f9-6113-4b17-9d37-8bd2ed5dd8c6.webp (320×210) |
| 2 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed | https://static.higgsfield.ai/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed.mp4 | https://static.higgsfield.ai/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed.webp | https://d1xarpci4ikg0w.cloudfront.net/ecc81585-8b2c-461b-9e4d-b28c25ac8a83.webp (320×210) |
| 3 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/c33ec08f-8309-444a-b08d-a670e084bb4c | https://static.higgsfield.ai/c33ec08f-8309-444a-b08d-a670e084bb4c.mp4 | https://static.higgsfield.ai/c33ec08f-8309-444a-b08d-a670e084bb4c.webp | https://d1xarpci4ikg0w.cloudfront.net/245b3e80-688b-4858-b8e9-dfe5508c9693.webp (320×210) |
| 4 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/aefc1a36-8222-4f8c-97bd-01dfdea6cd39 | https://static.higgsfield.ai/aefc1a36-8222-4f8c-97bd-01dfdea6cd39.mp4 | https://static.higgsfield.ai/aefc1a36-8222-4f8c-97bd-01dfdea6cd39.webp | https://d1xarpci4ikg0w.cloudfront.net/387f18a0-80c3-4d63-a66f-32beb88816a2.webp (320×210) |
| 5 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/1f33838a-a42b-4669-b58e-a674f8ab6969 | https://static.higgsfield.ai/1f33838a-a42b-4669-b58e-a674f8ab6969.mp4 | https://static.higgsfield.ai/1f33838a-a42b-4669-b58e-a674f8ab6969.webp | https://d1xarpci4ikg0w.cloudfront.net/6110aecf-42b4-43d5-a283-21300223f5b7.webp (320×424) |
| 6 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/c43087ec-2afe-43db-8ffc-a3539e7252ee | https://static.higgsfield.ai/c43087ec-2afe-43db-8ffc-a3539e7252ee.mp4 | https://static.higgsfield.ai/c43087ec-2afe-43db-8ffc-a3539e7252ee.webp | https://d1xarpci4ikg0w.cloudfront.net/ebc26fe1-f1b9-40bb-b09e-ff0ac2a649e2.webp (320×182) |
| 7 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/93354d38-018d-4130-8154-54fee842e6ad | https://static.higgsfield.ai/93354d38-018d-4130-8154-54fee842e6ad.mp4 | https://static.higgsfield.ai/93354d38-018d-4130-8154-54fee842e6ad.webp | https://d1xarpci4ikg0w.cloudfront.net/3ffd2996-be73-40a4-8687-9656267c2e65.webp (320×182) |
| 8 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/49ca988f-f0a1-43a9-8fc7-c69d0f26455f | https://static.higgsfield.ai/49ca988f-f0a1-43a9-8fc7-c69d0f26455f.mp4 | https://static.higgsfield.ai/49ca988f-f0a1-43a9-8fc7-c69d0f26455f.webp | https://d1xarpci4ikg0w.cloudfront.net/0a1fe726-b036-44d0-9d09-6c704f693297.webp (320×182) |
| 9 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/5774a72e-fac7-4c6a-8af1-a9279eea6409 | https://static.higgsfield.ai/5774a72e-fac7-4c6a-8af1-a9279eea6409.mp4 | https://static.higgsfield.ai/5774a72e-fac7-4c6a-8af1-a9279eea6409.webp | https://d1xarpci4ikg0w.cloudfront.net/6f4e6b11-86a5-4064-9d78-539b1eb21a41.webp (320×210) |
| 10 | https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/3195417e-00cc-4a2a-a9fe-16c7752c129f | https://static.higgsfield.ai/3195417e-00cc-4a2a-a9fe-16c7752c129f.mp4 | https://static.higgsfield.ai/3195417e-00cc-4a2a-a9fe-16c7752c129f.webp | https://d1xarpci4ikg0w.cloudfront.net/0126a72b-bb21-4789-955d-dba21e65087e.webp (320×210) |

Source pages: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec, https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3195417e-00cc-4a2a-a9fe-16c7752c129f`** (priority 13) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8bdb4f62-2b65-451b-908a-3ceec0943458.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/58b76e5c-afe9-4597-8443-8743917dfe07.mp4
  - page: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/3195417e-00cc-4a2a-a9fe-16c7752c129f

```text
The camera starts above the head of a black male rapper standing confidently in the center of a cartoonish cereal aisle filled with oversized cereal boxes and graffiti. He wears a vivid red tracksuit with white stripes, neon sneakers, oversized yellow shades, and heavy gold chains around his neck. His arms are crossed, and he tilts his head up with a wide, satisfied grin as neon light reflects off his glasses. As the camera tilts upward past him, it moves through a transparent glass ceiling above him to reveal two stylish black women standing powerfully on either side of a gumball machine and an arcade cabinet. The woman on the left wears a yellow cropped bomber jacket, black top, ripped denim shorts, and gold hoop earrings, her expression fierce and focused. The woman on the right stands in a bright pink vest and shorts set with black socks and pink-accented sneakers, afro hair styled voluminously. Both women strike dominant poses, one foot raised on a red cooler, gazing directly at the camera with bold attitude, as neon arcade lighting glows behind them and fills the convenience store.

















```

- **Sample `5774a72e-fac7-4c6a-8af1-a9279eea6409`** (priority 12) — Wan 2.5 motion preset, steps=35, frames=81, strength=1, guide_scale=3.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/766ba3c2-8753-41da-894f-cf1d24c33c3a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3e93f418-ff5b-4842-b6f8-0ba75332ef7d.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/5774a72e-fac7-4c6a-8af1-a9279eea6409

```text
Camera performs a gentle “tilt up,” beginning with an intimate, warmly lit scene of a young woman in casual attire—a white t-shirt and ripped jeans—seated pensively on a worn leather sofa, leaning forward thoughtfully. As the camera slowly tilts upward, the relaxed living room atmosphere smoothly transitions into a lavish, softly illuminated bedroom setting. Revealed is a dreamy tableau of three young women in elegant vintage dresses lying together on an ornate bed, their poses languid and serene, evoking a mood of quiet luxury, introspection, and delicate sisterhood.
```

- **Sample `49ca988f-f0a1-43a9-8fc7-c69d0f26455f`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/572d800f-5f1c-49c1-a9a1-0d7d0b92699e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9b581cba-d2c9-4f44-8ae0-4fd56ca1f02a.mp4
  - page: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/49ca988f-f0a1-43a9-8fc7-c69d0f26455f

```text
The camera tilts up, revealing a ninja stealthily hanging from the ceiling, concealed in the shadows. Below, a dimly lit room hums with tension, filled with an extensive array of weapons displayed against stark white walls. The atmosphere is thick with anticipation, accentuated by the sharp contrasts of light and shadow. A figure stands in silhouette, their back turned, a sleek firearm slung over one shoulder, embodying both confidence and vulnerability. The room's cool tones harmonize with the character’s focused demeanor, setting the stage for an impending encounter. As the ninja remains motionless, the palpable energy suggests a moment before chaos unfolds.
```

- **Sample `93354d38-018d-4130-8154-54fee842e6ad`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7542baaf-4749-4ca8-a763-f15ccea986df.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8df2ffbe-0d4c-4c89-ba0b-e1626cf37464.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/93354d38-018d-4130-8154-54fee842e6ad

```text
The camera tilts up, revealing a stark contrast between innocence and destruction as two women in vintage floral swimsuits stand stoically in a sunlit desert. They wear gas masks, their expressions hidden and unyielding beneath the weight of impending catastrophe. In the background, an immense mushroom cloud billows into the blue sky, its colors vivid against the sandy palette. The atmosphere pulses with tension, the harsh sunlight casting sharp shadows on the ground. As the dust settles, the stillness of the scene is pierced by the distant roar of military airplanes overhead, their silhouettes cutting sharply against the vibrant sky.
```

- **Sample `c43087ec-2afe-43db-8ffc-a3539e7252ee`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/59daabbe-da1f-4484-9c88-9720c259d8cc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/12013490-1863-4610-af16-17e388e54b39.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/c43087ec-2afe-43db-8ffc-a3539e7252ee

```text
Camera tilts up revealing giant spider on ceiling 
```

- **Sample `1f33838a-a42b-4669-b58e-a674f8ab6969`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/da8f3082-e81a-4f1a-a6d8-a334b063eb7f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b8841f58-beab-4634-8f16-8316815964ac.mp4
  - page: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/1f33838a-a42b-4669-b58e-a674f8ab6969

```text
A woman, dressed in a flowing white dress, sits curled up inside a slightly submerged phone booth, her expression one of deep contemplation. As the camera tilts upward, the twilight sky transforms into a backdrop for a mysterious UFO hovering above. The dim light from the booth casts an ethereal glow, illuminating the water that gently laps around it. Silhouettes of birds fly across the darkening sky, enhancing the sense of isolation and wonder. The rocky cliff looms in the background, adding a feeling of enigma to the atmosphere, while the cool colors amplify the surreal tension of this otherworldly moment.
```

- **Sample `aefc1a36-8222-4f8c-97bd-01dfdea6cd39`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bfb51270-80e3-4d7d-8888-5dd74fd384ba.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8dba43a9-cf35-4790-a2d7-916ca9dcf3e8.mp4
  - page: https://higgsfield.ai/motion/359bd4f6-252a-405e-bb5c-3807b3b9d9ec/aefc1a36-8222-4f8c-97bd-01dfdea6cd39

```text
The camera tilts up from the rappers’ expressive hand movements, their voices flowing with the rhythm of the beat. The view ascends past their intense faces, glistening with raindrops under neon lights, until it reaches the towering skyscrapers above. Bright signs and advertisements flicker against the dark, stormy sky, their glow distorted by the falling rain. The sense of urban grandeur and raw energy blends into the scene, amplifying the intensity of their performance.
```

- **Sample `c33ec08f-8309-444a-b08d-a670e084bb4c`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/78d377a0-c0aa-4336-a004-ab801c3a4cb0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59877e8f-f372-44f1-89ff-453e010f07aa.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/c33ec08f-8309-444a-b08d-a670e084bb4c

```text
Two men dressed in streetwear rap passionately on a rooftop at dusk. The first man, in a dark red hoodie, gestures powerfully to the beat, his hood partially hiding his face. The second man, in a bulky, bright orange puffer jacket, follows the rhythm with assertive, deliberate hand movements. Neon pink lights from the cityscape below reflect off puddles of rainwater on the rooftop, creating an atmospheric glow against the darkening sky. The city’s skyline stretches in the background, its towers partially cloaked in mist. After a few moments, the camera tilts up to reveal a helicopter flying above them, its rotors slicing through the thick, gloomy air, lights blinking against the moody twilight.
```

- **Sample `d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ef2483ef-dd0e-4fb8-b2c1-d76cfa5df8c7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1ea90f06-4713-4b93-a420-6c81ddde6818.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/d82fb2b9-1fd4-4dbd-8809-21aaeb8b3bed

```text
A woman with long silver hair flowing down her back stands beneath a towering glass skyscraper, her face illuminated by the cold blue glow of neon lights reflecting off the sleek urban structures. She wears a dark, elegant coat, her expression serene and almost otherworldly, her eyes gazing upward as her fingers gesture delicately in the air. The atmosphere is heavy, with the distant sounds of the city muffled by the thick nighttime fog. After a few moments, the camera tilts up to reveal the skyscraper above her engulfed in flames. Bright orange and red fire dances against the steel and glass, creating a fierce contrast against the cool blue light of the surrounding buildings. The flames flicker and pulse like a living creature against the dark sky.
```

- **Sample `9c1e7bde-eaba-43d1-9180-d82cca447e1d`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b63170f3-54aa-426b-bac9-1807de814050.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a6524da3-4df1-41cb-9346-0f2a99c81708.mp4
  - page: https://higgsfield.ai/motion/9f127dad-0db0-4e3d-a440-3cfbffca30b6/9c1e7bde-eaba-43d1-9180-d82cca447e1d

```text
A woman with dark skin and silver tattoos, wearing an orange oversized jacket and black pants, sits on the hood of a futuristic car. Her hair is braided and adorned with silver rings, and her expression is intense and defiant. She raises her finger to the sky, her gaze locked directly with the viewer. The background reveals towering skyscrapers glittering with neon lights against the dark night sky. After a brief pause, the camera tilts upward, following her gesture to reveal a dark white moon glowing ominously above the skyline, partially shrouded by swirling clouds.
```
