# Lazy Susan — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Rotates the camera smoothly around a still subject, like it's on a turntable. Great for stylish product shots or dramatic character reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e | `025866ff-677c-4af2-92ef-52d6ec3b035e` | -196 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e |
| https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975 | `692c5527-3580-4c65-adfd-c47c6dc1f975` | 67 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=692c5527-3580-4c65-adfd-c47c6dc1f975 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A luxury perfume bottle stands still on a black marble pedestal; the camera rotates smoothly around it like a turntable.
```

Use it as: upload a start image that matches the scene, select motion preset **Lazy Susan**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Slow turntable rotation, subject centered · **Best use:** Product shots, character intros, costume reveal · **Models:** Kling 3.0 · **Phrase/template:** "Lazy Susan around the antique watch on the table" · **Tips:** Luxury: a dark background with a single hard side-light

## Related presets

- **Mixes that use this preset:** [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md)
- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e27cfd60-07f5-49dc-8c7a-bb609e71ec73.webp (320×242)
- Card preview, variant `692c5527`: https://d1xarpci4ikg0w.cloudfront.net/c5642420-3640-4515-bb84-e72c49928bf9.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/154db783-8d22-431a-9cb4-5fa4e7b32249 | https://static.higgsfield.ai/154db783-8d22-431a-9cb4-5fa4e7b32249.mp4 | https://static.higgsfield.ai/154db783-8d22-431a-9cb4-5fa4e7b32249.webp | https://d1xarpci4ikg0w.cloudfront.net/54b5e110-71c9-473b-94ba-a33b9d387420.webp (320×210) |
| 2 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/d09dd399-9714-4443-baf6-724a6569b2b5 | https://static.higgsfield.ai/d09dd399-9714-4443-baf6-724a6569b2b5.mp4 | https://static.higgsfield.ai/d09dd399-9714-4443-baf6-724a6569b2b5.webp | https://d1xarpci4ikg0w.cloudfront.net/77839a27-2e8d-4e77-bf02-173f57ff80b4.webp (320×242) |
| 3 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/e9bfa433-f330-46ed-b7ab-ffb944f1e601 | https://static.higgsfield.ai/e9bfa433-f330-46ed-b7ab-ffb944f1e601.mp4 | https://static.higgsfield.ai/e9bfa433-f330-46ed-b7ab-ffb944f1e601.webp | https://d1xarpci4ikg0w.cloudfront.net/6368bd5f-ded8-4fc1-b674-f8af2becd7a4.webp (320×242) |
| 4 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/a3eaf904-d218-48ef-812a-aecc971a8c33 | https://static.higgsfield.ai/a3eaf904-d218-48ef-812a-aecc971a8c33.mp4 | https://static.higgsfield.ai/a3eaf904-d218-48ef-812a-aecc971a8c33.webp | https://d1xarpci4ikg0w.cloudfront.net/70967917-9af6-4802-90ba-8b61e19fa65d.webp (320×320) |
| 5 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/25cbf105-a66b-4f6f-8ed9-e837d10ca02a | https://static.higgsfield.ai/25cbf105-a66b-4f6f-8ed9-e837d10ca02a.mp4 | https://static.higgsfield.ai/25cbf105-a66b-4f6f-8ed9-e837d10ca02a.webp | https://d1xarpci4ikg0w.cloudfront.net/4fac48f0-67a2-45cf-9070-fc8214fc6937.webp (320×182) |
| 6 | https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/4ade1025-9300-4def-b79b-5bbd0e5f8d43 | https://static.higgsfield.ai/4ade1025-9300-4def-b79b-5bbd0e5f8d43.mp4 | https://static.higgsfield.ai/4ade1025-9300-4def-b79b-5bbd0e5f8d43.webp | https://d1xarpci4ikg0w.cloudfront.net/65456ad0-bc92-4005-b3c1-90e5496eba32.webp (320×182) |

Source pages: https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e, https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975. Crawled 2026-09.


## Real sample prompts (site)

6 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `4ade1025-9300-4def-b79b-5bbd0e5f8d43`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e0c9e604-c39d-423f-a4a2-8874bf2180d9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d9fb3a01-c7c7-415c-82dd-133e3730e7ce.mp4
  - page: https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975/4ade1025-9300-4def-b79b-5bbd0e5f8d43

```text
A heavily tattooed man stands confidently at the center of a pulsing nightclub, oversized sunglasses framing his face as he throws his head back with laughter. Neon pink and turquoise lights bathe him in a surreal glow, highlighting his plaid jacket while the background blurs with the ecstatic movements of the crowd. The camera, mounted on a Lazy Susan-style platform, smoothly rotates around him, capturing the energy of people raising their hands in sync with the beat, their movements a kaleidoscopic blend of light and motion. The atmosphere pulses with euphoria, reflecting music video surrealism fused with fashion-forward aesthetics. Soft lens flares accentuate the saturated color palette, while the hypnotic camera rotation immerses the viewer in an electrified sensation of joy and freedom.
```

- **Sample `25cbf105-a66b-4f6f-8ed9-e837d10ca02a`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/002ec8d4-fbc8-4538-968c-e795a39c340e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bbbe1256-d440-4549-8545-c1b537d1ad95.mp4
  - page: https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/25cbf105-a66b-4f6f-8ed9-e837d10ca02a

```text
A man sits at a round table, his blue shirt contrasting with the fire-red lanterns overhead. His wide grin and gleaming expression radiate sheer excitement as he gestures toward an impressive spread of vibrant dishes. The warm glow from overhead lights creates an inviting atmosphere, highlighting the intricate details of the food. Surrounding him, the spacious restaurant buzzes with a sense of celebration, the tables adorned with rich colors and elegant décor. The angle captures the luxurious textures of the meal, while the upbeat energy of the scene invites viewers into this joyful dining experience.
```

- **Sample `a3eaf904-d218-48ef-812a-aecc971a8c33`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d8eb5caa-3462-4850-9abe-381da4c4207d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f268f260-31e1-47b4-a0d5-8f4342418405.mp4
  - page: https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/a3eaf904-d218-48ef-812a-aecc971a8c33

```text
A young man with tousled hair plays passionately at his drum set, his shirt unbuttoned and patterned, revealing an expressive mood of joy and concentration. The room is softly lit, with golden light streaming from a skylight, creating warm highlights on the polished surfaces of the drums. As he strikes the cymbals, the sound reverberates, echoing off the minimalist walls, amplifying the pulse of his rhythm. There’s a sense of euphoria in the air, each beat translating his inner world into sound. The camera captures close-ups of his focused expression and the dynamic movement of his arms, intertwining motion and emotion amidst the tranquil yet electric environment.
```

- **Sample `e9bfa433-f330-46ed-b7ab-ffb944f1e601`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7f24a410-9953-4ac3-bba5-79bacaf3b43f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0f969c83-db0c-478a-b4c8-deb753062f49.mp4
  - page: https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975/e9bfa433-f330-46ed-b7ab-ffb944f1e601

```text
A man in a shimmering rhinestone suit and wide white cowboy hat crouches in the middle of a sun-scorched desert, golden sand stretching endlessly. He sits on a vintage CRT television half-buried in the sand — its screen glows with a deep cyan static, displaying a black silhouette of a galloping horse in looping animation. The man slowly straightens, lifting the TV with reverence, dust swirling gently around his boots.
Spin begins, the camera rotates around him in a steady, hypnotic motion. The background blue sky, infinite ring of vintage televisions all broadcasting the same horse silhouette, flickering like a ritual. The colors become more saturated: cobalt shadows, burnt sienna sand, electric cyan glows from the TV screens.
```

- **Sample `d09dd399-9714-4443-baf6-724a6569b2b5`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d44fd019-cb6e-40e9-bccd-78032bf348f3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/25e0c32f-789d-44b1-97b1-c3b8cc247d71.mp4
  - page: https://higgsfield.ai/motion/692c5527-3580-4c65-adfd-c47c6dc1f975/d09dd399-9714-4443-baf6-724a6569b2b5

```text
A boy in a school uniform sits cross-legged at the center of a ruined cathedral, surrounded by tall white candles that flicker gently in a perfect circle. He holds a silver statuette in his lap like a sacred relic. As the camera begins its Lazy Suzan rotation, shafts of sunlight pour through the broken dome above, illuminating dust particles that float like falling ash.

Behind him, a delicate wire halo holds rotating icons of saints and martyrs, each turning slowly in orbit. The candle flames bend as if drawn by gravity toward the boy. His eyes remain locked on the viewer, serene and unnervingly still, while the cathedral spins behind him
```

- **Sample `154db783-8d22-431a-9cb4-5fa4e7b32249`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/31ad2890-4728-4093-8e1b-694a540b49e4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/14894c78-01c6-4166-88b0-2398752ee203.mp4
  - page: https://higgsfield.ai/motion/025866ff-677c-4af2-92ef-52d6ec3b035e/154db783-8d22-431a-9cb4-5fa4e7b32249

```text
A young woman in crimson-stained chainmail kneels at the center of a blood-drenched battlefield. Her hands are open, trembling, as blood runs down her arms like ribbons. A blade pierces her chest — not deep enough to kill, but enough to silence. Around her, the bodies of knights lay motionless, armor glinting in the cold, wet dirt.

The camera begins its Lazy Suzan rotation — slow, solemn. Arrows are frozen mid-air, spears locked in place, raindrops suspended like glass beads. The world turns around her as if time itself hesitates. Her breathing slows. Her eyes close.
```
