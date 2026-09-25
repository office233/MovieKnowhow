# Dolly In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly toward the subject, drawing viewers closer and building focus or emotion. Ideal for intense or intimate moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3 | `06463063-551a-4cbb-abc0-0ff1007784b3` | 57 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=06463063-551a-4cbb-abc0-0ff1007784b3 |
| https://higgsfield.ai/motion/8d582076-10e2-40f7-bbef-6384532147c2 | `8d582076-10e2-40f7-bbef-6384532147c2` | -205 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8d582076-10e2-40f7-bbef-6384532147c2 |
| https://higgsfield.ai/motion/1438937c-a220-4859-93f4-f373da3f73fb | `1438937c-a220-4859-93f4-f373da3f73fb` | -329 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=1438937c-a220-4859-93f4-f373da3f73fb |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`). These pages publish no settings. Their community publications carry 2 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman sits alone at a rain-streaked diner window at night, neon reflecting on her face; she slowly looks up as the camera dollies in toward her eyes.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Smooth linear move toward the subject · **Best use:** Intimacy, revelation, tension build · **Models:** Kling 2.6 / 3.0 · **Phrase/template:** "Camera Dolly In toward her face" · precise: "Camera dolly forward at constant 2 feet/second. Maintain subject center-frame. Slight lens breathing… No focus shift." · **Tips:** + Dutch Angle = villain reveal. The horror default is a slow Dolly In (creep). For micro-moves, state distance and time: "over the full 7 seconds the camera pulls back only 10–15 centimeters."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/b451713f-06ec-4a72-ae24-4a96bfbaf951.webp (320×182)
- Card preview, variant `8d582076`: https://d1xarpci4ikg0w.cloudfront.net/e6365a1a-a21e-42c0-8000-62790d47b223.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/3231174f-61a3-4218-b6a9-b2d863507d48 | https://static.higgsfield.ai/3231174f-61a3-4218-b6a9-b2d863507d48.mp4 | https://static.higgsfield.ai/3231174f-61a3-4218-b6a9-b2d863507d48.webp | https://d1xarpci4ikg0w.cloudfront.net/89e0740c-824b-449c-aeb2-eb334303fd3f.webp (320×424) |
| 2 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/1c01e3e6-0731-4c02-a3dd-dab870d54adb | https://static.higgsfield.ai/1c01e3e6-0731-4c02-a3dd-dab870d54adb.mp4 | https://static.higgsfield.ai/1c01e3e6-0731-4c02-a3dd-dab870d54adb.webp | https://d1xarpci4ikg0w.cloudfront.net/c650e709-ee15-412f-9f50-a66566fb8c05.webp (320×242) |
| 3 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/262b6919-5b32-4cf4-92c9-34d7a2eb7f69 | https://static.higgsfield.ai/262b6919-5b32-4cf4-92c9-34d7a2eb7f69.mp4 | https://static.higgsfield.ai/262b6919-5b32-4cf4-92c9-34d7a2eb7f69.webp | https://d1xarpci4ikg0w.cloudfront.net/b1471709-8598-434f-bd54-2a42d049b930.webp (320×182) |
| 4 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/5eb4d2a3-ec59-447b-a107-2c09deb5a94d | https://static.higgsfield.ai/5eb4d2a3-ec59-447b-a107-2c09deb5a94d.mp4 | https://static.higgsfield.ai/5eb4d2a3-ec59-447b-a107-2c09deb5a94d.webp | https://d1xarpci4ikg0w.cloudfront.net/072e5f3e-e198-460b-b8cd-95fbdb52339c.webp (320×182) |
| 5 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba | https://static.higgsfield.ai/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba.mp4 | https://static.higgsfield.ai/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba.webp | https://d1xarpci4ikg0w.cloudfront.net/c87f0006-f018-4315-917f-c045a9712694.webp (320×182) |
| 6 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6 | https://static.higgsfield.ai/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6.mp4 | https://static.higgsfield.ai/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6.webp | https://d1xarpci4ikg0w.cloudfront.net/1c55504f-d9fc-4e9b-8ffe-86cd6f9614e4.webp (320×242) |
| 7 | https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/fa658788-d7d1-442d-9afb-ffd3222bfad0 | https://static.higgsfield.ai/fa658788-d7d1-442d-9afb-ffd3222bfad0.mp4 | https://static.higgsfield.ai/fa658788-d7d1-442d-9afb-ffd3222bfad0.webp | https://d1xarpci4ikg0w.cloudfront.net/81fe7c1f-b607-4924-8dff-5636a1f12402.webp (320×242) |

- Card preview, round-2 variant `1438937c` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/80f7f16b-acb1-4300-810d-3ad9453a43cd.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/20054468-7620-469a-9a89-ace3b09a3e42.webp (600×800)

### Sample videos, round-2 variant `1438937c` (Wan 2.5) (2 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/f3a27a40-14ed-4805-a1e1-990aea8da6ff_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/5e368557-768b-4f4e-9d85-bf2f2402f2f8.jpg | wan2_5_video · 5 s · 1080p · 1536×2048 | The scene starts with a medium shot from the side, capturing two stylishly dressed people in the foreground engaged in quiet conversation, their faces partially in profile, wearing dark suits and sunglasses under soft lighting. The background features a smooth blue backdrop. The camera performs a slow, steady dolly-in, smoothly advancing straight ahead toward the two individuals standing behind them. These two people, dressed in fashionable business attire, casually hold red lollipops and exchange subtle, playful glances as if quietly interacting. Soft ambient sounds and distant conversation murmurs fill the space, emphasizing the stylish, modern, and slightly mysterious atmosphere of the scene. |
| 2 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/e82ca455-1484-4811-a526-f04d4848d8d0_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/0a15efd3-c43b-4e7f-9150-15249d792eac.jpg | wan2_5_video · 5 s · 1080p · 2048×1536 | The scene starts with a medium-wide shot from a straight-on angle using a professional camera with a standard lens, showing a group of six young people sitting and standing confidently on and around a bright turquoise sports car inside an industrial garage with textured concrete walls and a semi-transparent roof letting in natural light. The group all looks directly into the camera with confident expressions. The camera smoothly performs a slow dolly in, gradually moving closer to the central figure seated on top of the car, highlighting their intense gaze. The shot captures the detailed urban grunge atmosphere with ambient industrial sounds and muted city noises. The overall visual tone is modern, stylish, and edgy, emphasizing coolness and group unity. |

Source pages: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3, https://higgsfield.ai/motion/8d582076-10e2-40f7-bbef-6384532147c2, https://higgsfield.ai/motion/1438937c-a220-4859-93f4-f373da3f73fb. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `fa658788-d7d1-442d-9afb-ffd3222bfad0`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/973eb03c-7868-4ce0-a035-8edb2ca4d5ad.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3911efd1-acbb-4e8a-ab6b-5a0a51f0862d.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/fa658788-d7d1-442d-9afb-ffd3222bfad0

```text
As twilight descends over a Soviet-era apartment block skyline, the camera begins a slow dolly in on a young woman standing on a narrow balcony. She wears a black leather jacket over a sheer bodysuit, her hands confidently gripping the railing. Her blonde hair tousles gently in the evening breeze, her gaze fixed calmly forward. Neon reflections from car headlights shimmer on the wet street far below. The camera moves closer, emphasizing her defiant pose against the cool-toned cityscape, building an atmosphere of quiet strength and urban solitude. Shot in rich Ektachrome-style hues, with soft cinematic grain and shallow depth of field.
```

- **Sample `88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/41fcef48-e0aa-4182-a596-61b8d4d22154.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3178bbb1-0241-4b7c-9252-877c68dc6a32.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/88fd0e5e-2e8d-4bb8-9456-a2f51e6243e6

```text
Slow dolly in on two identical young blonde girls standing hand in hand in front of a faded green vintage car and retro bumper cars. They wear matching red polka-dot dresses and green sandals, their solemn expressions fixed forward. The camera pushes steadily closer, capturing the subtle twitch of their fingers and the blinking reflection in their eyes. In the background, the geometric facade of a beige apartment building towers over them. Harsh sunlight creates sharp shadows across the ground, while children’s rides and playground equipment fade slightly out of focus. Tension builds as the camera nears their faces, amplifying the uncanny symmetry. 
```

- **Sample `12c7d2f7-c95f-43ed-b159-cc74ee25a1ba`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/66379854-14b7-46d1-9e28-fb3575a72474.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a88a03c2-46f5-4da3-a17a-7fec6f34f301.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/12c7d2f7-c95f-43ed-b159-cc74ee25a1ba

```text
A bright, cinematic animation of a young girl in a pink dress standing at the top of a small lighthouse, looking through binoculars out over the calm ocean. The camera begins a steady, realistic dolly-in movement—gliding smoothly closer toward the girl while maintaining perfect horizontal alignment. The sea sparkles in the background and the sky is dotted with soft clouds. The girl remains focused, shifting slightly as she scans the horizon. Her hair and dress gently move in the breeze. The tone is curious and serene, evoking a sense of wonder and adventure without fantasy or slow-motion exaggeration.
```

- **Sample `5eb4d2a3-ec59-447b-a107-2c09deb5a94d`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ec5ffb94-2572-4fa2-a521-0c0dfc08c1bd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/17eac430-fcbd-4645-940d-840ebed6ff91.mp4
  - page: https://higgsfield.ai/motion/8d582076-10e2-40f7-bbef-6384532147c2/5eb4d2a3-ec59-447b-a107-2c09deb5a94d

```text
A realistic, cinematic animation of a group of horse-mounted riders standing motionless in a wide open field under a clear sky. The camera performs a steady dolly-in movement toward the group, closing the distance with natural pacing—like a camera mounted on tracks or a vehicle approaching. As the camera glides forward, dust gently stirs in the grass, the horses flick their ears or tails slightly, and clothing subtly rustles in the breeze. The characters maintain their poses, exuding stoic presence and anticipation. The mood is tense yet grounded, like a prelude to a standoff or declaration. Lighting stays warm and golden, casting long shadows behind the riders.
```

- **Sample `262b6919-5b32-4cf4-92c9-34d7a2eb7f69`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b46b6825-bfaa-4fe3-9365-41f564664645.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e0a024b1-87e3-416a-902f-01f59fe4147f.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/262b6919-5b32-4cf4-92c9-34d7a2eb7f69

```text
As the camera steadily zooms in, an array of vintage televisions flicker with a stark, electrifying question mark, casting shadows across the dimly lit room. The environment is cloaked in darkness, enhanced by the harsh white glow from overhead fluorescent lights, creating a surreal contrast. Each screen comes alive in sync, radiating a sense of urgency and mystery, as static crackles around them. A polished, reflective floor captures the luminous display, amplifying the drama of this enigmatic moment. The air is thick with anticipation, drawing viewers into an unfolding narrative that hints at unanswered queries and hidden truths.
```

- **Sample `1c01e3e6-0731-4c02-a3dd-dab870d54adb`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a28179dc-3abd-4315-a81c-f46f674b2a1d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6546be27-ebdb-4727-bd91-c7717f7ce37e.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/1c01e3e6-0731-4c02-a3dd-dab870d54adb

```text
A young man lounges confidently on a striking orange couch, stylishly gazing at the camera. The sun shines brightly, illuminating his sporty outfit consisting of a light beige shirt, black shorts, and sleek sneakers. he takes a can of soda and drinks it. Fast motion, dynamic motion
```

- **Sample `3231174f-61a3-4218-b6a9-b2d863507d48`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c032f228-64f2-40fb-b4d0-fea054f796d1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d3760bd1-4134-485a-a492-bc06749f151f.mp4
  - page: https://higgsfield.ai/motion/06463063-551a-4cbb-abc0-0ff1007784b3/3231174f-61a3-4218-b6a9-b2d863507d48

```text
A mysterious armored figure stands motionless against a deep red background, cloaked in a regal red robe with golden embroidery. The camera slowly dollies in toward the figure, creating a sense of suspense and intensity. As the camera approaches, subtle movements in the fabric of the robe and gentle flickers of light on the ornate metallic mask and shoulder armor bring the character to life. The figure's breathing is slow and controlled, adding tension. Faint ambient sound or distant chanting echoes in the background. The hat’s intricate tower design catches the light as shadows shift dramatically across the face, enhancing the aura of secrecy and power.
```
