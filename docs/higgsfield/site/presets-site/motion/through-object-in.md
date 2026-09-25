# Through Object In — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** Moves the camera inward through an object to focus on the subject behind it. Perfect for creative reveals and smooth, immersive transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb | `2b353671-da2e-4c9e-841d-b7af200ceadb` | 45 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2b353671-da2e-4c9e-841d-b7af200ceadb |
| https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520 | `ae7a6c18-0db0-4c17-817b-fe73b10da520` | 87 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ae7a6c18-0db0-4c17-817b-fe73b10da520 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera pushes through the leaves of a hedge to reveal a couple dancing in a secret garden.
```

Use it as: upload a start image that matches the scene, select motion preset **Through Object In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera passes through a narrow object into a new space · **Best use:** Reveal secrets, creative transition · **Models:** "Camera glides Through Object In — through the keyhole into the dusty study" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5f8bba0a-5214-4f15-a430-56d28406ac92.webp (320×254)
- Card preview, variant `ae7a6c18`: https://d1xarpci4ikg0w.cloudfront.net/e064ec58-6932-486e-9899-c7a7a3057b87.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/8991674c-b083-41b0-b08f-1cea15afe394 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.mp4 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.webp | https://d1xarpci4ikg0w.cloudfront.net/0bd42f35-ac27-4d5e-81a9-814a271ddf85.webp (320×180) |
| 2 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/9de79919-6afe-4f2c-851f-194f1df3714b | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.mp4 | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.webp | https://d1xarpci4ikg0w.cloudfront.net/ef9bf805-e414-4858-8f81-87185eed0139.webp (320×132) |
| 3 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/6cadca24-7d44-49d4-a0dd-429926708a75 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.mp4 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.webp | https://d1xarpci4ikg0w.cloudfront.net/275a4cb9-b7b2-4f34-a2db-d8eb9dc963ac.webp (320×174) |
| 4 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ded68630-a55f-4bde-a7d1-5a5190cc15e2 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.mp4 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.webp | https://d1xarpci4ikg0w.cloudfront.net/e5edd7fb-855a-4d95-a5fd-bef1714a74d3.webp (320×242) |
| 5 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/1de648d1-dc77-4460-a258-345e60c3b6f8 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.mp4 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.webp | https://d1xarpci4ikg0w.cloudfront.net/d422f549-1cc5-4096-a03e-2712567c3483.webp (320×182) |
| 6 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/432d5b5c-f065-4d59-bb2f-fce673b55aeb | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.mp4 | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.webp | https://d1xarpci4ikg0w.cloudfront.net/b0aad333-dda2-45fb-bd9e-1845ad54de03.webp (320×182) |
| 7 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/5d282128-6f18-41a6-b5da-c52b3c2075de | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.mp4 | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.webp | https://d1xarpci4ikg0w.cloudfront.net/a42d996d-0aac-40e3-be47-325636ab11c8.webp (320×242) |
| 8 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/97d567a2-c100-48cd-87e3-eb53f1841446 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.mp4 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.webp | https://d1xarpci4ikg0w.cloudfront.net/9bf3f60e-ea53-4b0c-afe6-a71666a9aec0.webp (320×182) |
| 9 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ccb5d386-16a7-407f-9465-1d478d24cdce | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.mp4 | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.webp | https://d1xarpci4ikg0w.cloudfront.net/75008bcf-7f93-4120-b68d-52b685af60d4.webp (320×218) |
| 10 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ab74806f-d19a-4ff0-8833-8b98eb00b4c9 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.mp4 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.webp | https://d1xarpci4ikg0w.cloudfront.net/9f78f945-6594-404e-8d96-cbd8c071cf38.webp (320×210) |
| 11 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/3095e3b6-b619-465f-87e8-e0fa02bc09d9 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.mp4 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.webp | https://d1xarpci4ikg0w.cloudfront.net/91df6ee7-a0e2-43cf-90a0-4c42f0868b07.webp (320×210) |

Source pages: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb, https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3095e3b6-b619-465f-87e8-e0fa02bc09d9`** (priority 10) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f8051883-b8b0-4559-a7e6-0543a97a0dfc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c2f3ece1-720f-4a53-9c2a-ed08c6e2bc6f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/3095e3b6-b619-465f-87e8-e0fa02bc09d9

```text
The camera follows tightly behind a white ice cream van decorated with colorful cartoon images of ice cream cones and popsicles, riding straight down a city street. Motion blur intensifies the sense of rapid movement, the van swerving slightly as it races forward. Suddenly, in one seamless, sharp move, the camera accelerates and flies forward fast, phasing straight through the van’s closed doors. Instantly, the inside of the van is revealed: a dark, neon-lit interior filled with several serious-looking special forces soldiers, clad in tactical armor with bright graffiti-style emblems on their gear, sitting sternly in two rows facing each other, gripping weapons, their expressions tense and focused under the pulsating colored lights.

```

- **Sample `ab74806f-d19a-4ff0-8833-8b98eb00b4c9`** (priority 9) — Wan 2.5 motion preset, steps=33, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c08ef5df-1cbc-4802-8ee9-56bf97c9baef.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c7ea1b64-f4f6-4f74-91a4-07cabe30633f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/ab74806f-d19a-4ff0-8833-8b98eb00b4c9

```text
The camera swiftly moves forward, spiraling smoothly through a glossy, surreal blue tunnel reflecting distorted shapes and vibrant colors. As it moves deeper, reflections grow sharper, revealing a glamorous woman elegantly posed in a vibrant yellow latex bodysuit, lounging gracefully while holding a transparent handbag filled with colorful spheres. The camera exits the tunnel in a fluid motion, seamlessly transitioning into a crystal-clear close-up, capturing the bold details of the woman’s striking makeup and intense expression under vivid, editorial lighting.
```

- **Sample `ccb5d386-16a7-407f-9465-1d478d24cdce`** (priority 8) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=5.5, output video 1152×784
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cc53c6b3-0ef9-4915-90d2-ec32c54b4fed.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fb6563dd-6f4e-46c4-8ffa-31ca696ee43a.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/ccb5d386-16a7-407f-9465-1d478d24cdce

```text
Camera swiftly executes a dynamic “through object in” movement, starting from an artistic scene featuring a young man lounging stylishly on vivid red stairs, dressed casually with sunglasses, boots, and a relaxed pose. Accelerating forward, the camera moves sharply through the staircase structure, seamlessly transitioning into an electrifying, surreal fashion editorial scene. Revealed are three bold, fashionably styled individuals surrounded by vivid, colorful props and eccentric decor, their striking makeup and eclectic attire amplifying a dynamic atmosphere rich in avant-garde creativity and dramatic contrasts.
```

- **Sample `97d567a2-c100-48cd-87e3-eb53f1841446`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b0b55a07-047d-4832-93ac-878d7020e458.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5c04d012-960c-4b76-9876-82d1e1a6d89a.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/97d567a2-c100-48cd-87e3-eb53f1841446

```text
An old wood-framed CRT television displays a grainy music video of a rapper in a black hoodie and gold chains performing under colorful stage lights. The camera pushes forward toward the screen, then seamlessly passes through the glass, transitioning into a vivid 1990s-style rap video world. Inside, multiple men in oversized streetwear, bucket hats, and chains flex and rap in sync, surrounded by boomboxes, and graffiti-covered walls. The camera flows with dynamic handheld close-ups. The atmosphere is raw and hyped, soaked in analog warmth. Styling is pure 90s hip-hop VHS aesthetic with scanlines, light film grain, and colorful lens flares.
```

- **Sample `5d282128-6f18-41a6-b5da-c52b3c2075de`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/513538da-26ad-46dd-bb30-296910a20877.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/56b7c1da-d205-46c6-a175-7ec5aa63801f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/5d282128-6f18-41a6-b5da-c52b3c2075de

```text
A glamorous woman in a 1950s-style polka dot dress stands behind a tall windowpane, performing in front of a retro microphone on a dimly lit soundstage. Two warm spotlights glow behind her, casting soft shadows. The camera moves through the glass, the lens refocuses on her glowing face—she smiles confidently and delivers a playful wink directly into the camera. The motion is smooth and deliberate, with soft rack focus and subtle lens distortion. The atmosphere is nostalgic and intimate, evoking golden-era jazz club vibes. Styling reflects mid-century elegance with tungsten lighting, sepia undertones, and classic Hollywood softness.
```

- **Sample `432d5b5c-f065-4d59-bb2f-fce673b55aeb`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d04a4092-7831-4b48-9580-7212f7873cee.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6d51a6ab-0fdb-4e39-83a4-36489df82931.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/432d5b5c-f065-4d59-bb2f-fce673b55aeb

```text
A man in a white and orange long-sleeve shirt, jeans, and thick gold chains stands behind rusty prison bars, bathed in moody, directional overhead light. The camera slowly pushes forward through the metal bars, narrowing focus as it gets closer, until it stops in a tight close-up of the man’s face as puts his fingers to his temple. One continuous take with shallow depth of field and slight handheld shake for realism. The atmosphere is gritty, introspective, and raw. Styling is cinematic urban realism with dark shadows, warm tungsten tones, and a focus on emotional performance.
```

- **Sample `1de648d1-dc77-4460-a258-345e60c3b6f8`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/968dbc83-18da-4223-b719-3dbb80719805.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8eac1630-465e-4689-bd43-0abba61ad6bf.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/1de648d1-dc77-4460-a258-345e60c3b6f8

```text
camera passes through the holographic screen as a the music producer makes beats, smoke in the room
```

- **Sample `ded68630-a55f-4bde-a7d1-5a5190cc15e2`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/853fee76-7db1-4d11-be06-a2d432eb4ba6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/871db247-e812-47dd-b0ae-76236efc9c2a.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ded68630-a55f-4bde-a7d1-5a5190cc15e2

```text
A well-dressed man in a sharp blue suit stands behind layers of reflective glass or acrylic panels, each fragment mirroring his movement. The camera slowly pushes through the layered reflections, capturing refracted duplicates of his face and hands, until it emerges into a clear view. The man gently touches the vintage microphone in front of him, pausing with serene focus as the lens centers on his face in a crisp medium close-up. Light sparkles off the surrounding surfaces, adding subtle shimmer to the frame. The atmosphere is intimate and poised, with soft cool lighting and echo-like visual symmetry. Styling evokes refined contemporary performance aesthetics with modern stage minimalism and light optical distortion.
```

- **Sample `6cadca24-7d44-49d4-a0dd-429926708a75`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1296×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/53695dad-c505-47ad-bc5c-b379e0af447f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ef17ee63-2570-46c4-b833-5150ff3c04d0.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/6cadca24-7d44-49d4-a0dd-429926708a75

```text
The camera passes through a tiny, distorted peephole, revealing a man standing just beyond the door. His wide grin stretches beneath large, round glasses, his neatly pressed suit catching the glow of the afternoon sun. The fisheye distortion melts away, revealing the scene beyond the door in full clarity. The man’s smile is frozen in place—too wide, too perfect—as he stands motionless on the street. The warm sunlight flickers against the sidewalk, a soft breeze rustling the trees.

Behind him, the street is alive—cars passing, people walking, a dog barking in the distance. The normalcy of the world around him contrasts sharply with his unnerving stillness. His eyes, now fully in focus, seem locked onto the door, locked onto us, as if he knows someone is watching.

The camera lingers, the weight of an unspoken moment settling in the air
```

- **Sample `9de79919-6afe-4f2c-851f-194f1df3714b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e188ed6e-88c9-499b-a412-972d07c9006c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0f1276d6-bfae-4004-ba2e-764f5fe2d22e.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/9de79919-6afe-4f2c-851f-194f1df3714b

```text
A sterile, dimly lit hospital corridor, the hum of fluorescent lights casting a cold glow. The camera passes through the window. The distortion of the glass fades, bringing clarity to the scene inside. Beyond the glass, a lone figure walks away, his posture heavy, his pace slow.

The soft shuffle of footsteps echoes in the empty hall. The man, dressed in a muted jacket, keeps his head slightly down, his shoulders subtly slumped. The surrounding walls, painted in washed-out tones, feel oppressive, the sterile air thick with unspoken weight.

As the camera closes in, the focus sharpens on him—his breathing is slow, controlled, yet each step feels like an effort. His fingers twitch slightly at his side, as if suppressing something. The exit door looms ahead, bathed in dim light, a silent threshold between past and future. The scene lingers for a moment before he disappears around the corner, leaving behind an air of finality.
```

- **Sample `8991674c-b083-41b0-b08f-1cea15afe394`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/385380b9-5795-4118-a192-4520f37b36b6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6f5fd33c-5d77-415c-948c-9c94fa58f81b.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/8991674c-b083-41b0-b08f-1cea15afe394

```text
A cinematic black-and-white composition, where the camera passes through a sharp diamond-shaped window, framing a man in a crisp black suit and dark sunglasses. He sits cross-legged in front of a large window, his posture relaxed yet deliberate. Wisps of smoke curl from the cigarette between his fingers, diffusing in the bright backlight, casting an aura of mystery.

the camera locks onto his face, the details become intimate: the shadowed hollows of his cheeks, the faint smirk forming at the corner of his lips. The reflections in his dark lenses distort the world outside, but something flickers within them—a presence unseen, a secret untold. The smoke rises between them like a barrier, a final layer between the man and the observer, before the frame lingers in a moment of profound stillness
```
