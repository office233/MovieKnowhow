# 3D Rotation — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** The subject or product spins smoothly in place, showing a full 360° view. Clean, centered, and perfect for showcasing design, fashion, or product details in a modern way.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696 | `6f06f47e-922e-4660-9fe9-754e4be69696` | -252 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6f06f47e-922e-4660-9fe9-754e4be69696 |
| https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304 | `c2d8f36a-319f-40e4-b5d0-94d4ff9be304` | 82 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c2d8f36a-319f-40e4-b5d0-94d4ff9be304 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A white sneaker spins in place on a clean pastel background, showing every angle of its design.
```

Use it as: upload a start image that matches the scene, select motion preset **3D Rotation**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or object rotates in 3D space · **Best for:** Product, logo, artistic

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/06bc9a42-a754-43a6-959b-fee12f1bad23.webp (320×320)
- Card preview, variant `c2d8f36a`: https://d1xarpci4ikg0w.cloudfront.net/0d17a2c7-b4b7-40bd-b550-fb9eacca88fa.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c29644ca-bcdb-42cd-a05e-308d5f03c94a | https://static.higgsfield.ai/c29644ca-bcdb-42cd-a05e-308d5f03c94a.mp4 | https://static.higgsfield.ai/c29644ca-bcdb-42cd-a05e-308d5f03c94a.webp | https://d1xarpci4ikg0w.cloudfront.net/1984ee8a-d4de-41e7-9de6-5e2bc58a758e.webp (320×210) |
| 2 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15 | https://static.higgsfield.ai/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15.mp4 | https://static.higgsfield.ai/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15.webp | https://d1xarpci4ikg0w.cloudfront.net/15a7739d-de3f-4f08-afaa-05f79fee54b0.webp (320×210) |
| 3 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/46b09ee0-16e2-49d2-b752-5d331807cd83 | https://static.higgsfield.ai/46b09ee0-16e2-49d2-b752-5d331807cd83.mp4 | https://static.higgsfield.ai/46b09ee0-16e2-49d2-b752-5d331807cd83.webp | https://d1xarpci4ikg0w.cloudfront.net/c3964adb-ca5b-4076-9b5e-348afa5eefb5.webp (320×210) |
| 4 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/252cbae3-ce03-40d0-84d3-98ac08dddc89 | https://static.higgsfield.ai/252cbae3-ce03-40d0-84d3-98ac08dddc89.mp4 | https://static.higgsfield.ai/252cbae3-ce03-40d0-84d3-98ac08dddc89.webp | https://d1xarpci4ikg0w.cloudfront.net/4c198564-95ef-4f11-9592-3ff7c38d90f8.webp (320×210) |
| 5 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/9dc26b75-e2d6-481d-9622-9bdd4bf294e7 | https://static.higgsfield.ai/9dc26b75-e2d6-481d-9622-9bdd4bf294e7.mp4 | https://static.higgsfield.ai/9dc26b75-e2d6-481d-9622-9bdd4bf294e7.webp | https://d1xarpci4ikg0w.cloudfront.net/ad4ac648-12fb-4063-82b4-67fe76b0c145.webp (320×210) |
| 6 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/53187a5d-9d01-4567-85ce-5100c2972da1 | https://static.higgsfield.ai/53187a5d-9d01-4567-85ce-5100c2972da1.mp4 | https://static.higgsfield.ai/53187a5d-9d01-4567-85ce-5100c2972da1.webp | https://d1xarpci4ikg0w.cloudfront.net/ad00a402-35b7-4962-be8d-2139316312d9.webp (320×210) |
| 7 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c47d92c1-fc96-4122-9013-5b11489dbf8b | https://static.higgsfield.ai/c47d92c1-fc96-4122-9013-5b11489dbf8b.mp4 | https://static.higgsfield.ai/c47d92c1-fc96-4122-9013-5b11489dbf8b.webp | https://d1xarpci4ikg0w.cloudfront.net/cc1696d5-a5e2-418d-b500-0e5a6f67ed57.webp (320×320) |
| 8 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/9a5a588e-3468-44f1-8b36-d3e67cf864d8 | https://static.higgsfield.ai/9a5a588e-3468-44f1-8b36-d3e67cf864d8.mp4 | https://static.higgsfield.ai/9a5a588e-3468-44f1-8b36-d3e67cf864d8.webp | https://d1xarpci4ikg0w.cloudfront.net/ca19a400-958f-4753-94ff-4bc450593114.webp (320×242) |
| 9 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/67768d96-f2e0-4326-82da-68c699c01c80 | https://static.higgsfield.ai/67768d96-f2e0-4326-82da-68c699c01c80.mp4 | https://static.higgsfield.ai/67768d96-f2e0-4326-82da-68c699c01c80.webp | https://d1xarpci4ikg0w.cloudfront.net/5a3af72f-13f7-4e5e-ba99-f45e0c93cfa9.webp (320×562) |
| 10 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0 | https://static.higgsfield.ai/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0.mp4 | https://static.higgsfield.ai/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0.webp | https://d1xarpci4ikg0w.cloudfront.net/a5ab05c2-c122-40e5-b387-ca4890e7d8f1.webp (320×320) |
| 11 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/879c44e5-1070-4d3d-9a53-bcefce14cc30 | https://static.higgsfield.ai/879c44e5-1070-4d3d-9a53-bcefce14cc30.mp4 | https://static.higgsfield.ai/879c44e5-1070-4d3d-9a53-bcefce14cc30.webp | https://d1xarpci4ikg0w.cloudfront.net/58bdae8a-4c11-480c-9cfc-3ce209270243.webp (320×320) |
| 12 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/1ee702a4-fc89-44a0-92cf-7dfa557e84b3 | https://static.higgsfield.ai/1ee702a4-fc89-44a0-92cf-7dfa557e84b3.mp4 | https://static.higgsfield.ai/1ee702a4-fc89-44a0-92cf-7dfa557e84b3.webp | https://d1xarpci4ikg0w.cloudfront.net/23be449a-3a13-411b-9338-590a31a7704b.webp (320×486) |
| 13 | https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/57f67f6e-b068-40d4-8b04-f91d57acf899 | https://static.higgsfield.ai/57f67f6e-b068-40d4-8b04-f91d57acf899.mp4 | https://static.higgsfield.ai/57f67f6e-b068-40d4-8b04-f91d57acf899.webp | https://d1xarpci4ikg0w.cloudfront.net/b6f613ab-9755-441b-854c-27fef0bd397f.webp (320×424) |

Source pages: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696, https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304. Crawled 2026-09.


## Real sample prompts (site)

13 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `57f67f6e-b068-40d4-8b04-f91d57acf899`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9cfa495e-f377-4c3b-a4ea-59daabc72a1d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7eaab208-8c7f-4df3-9e5f-299fef054e6c.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/57f67f6e-b068-40d4-8b04-f91d57acf899

```text
The model stands in the center of a cosmic environment, surrounded by swirling galaxies and distant stars. Dressed in a sleek black leather outfit, with a long coat flowing behind him, he slowly begins to rotate around his axis. His expression remains intense, his movements controlled and deliberate, creating a sense of power and mystery. The camera remains completely still, capturing every angle of his rotation as the dark leather reflects the soft starlight, contrasting with the vibrant cosmic background. The lighting is dramatic, casting deep shadows on his face and emphasizing the smooth textures of the leather. The atmosphere is tense and futuristic, with a sense of otherworldly elegance as the model continues his slow, hypnotic spin, his silhouette shifting against the vast expanse of space. The visual style is cinematic, with high contrast and deep shadows, accentuating the starkness of his form against the vibrant cosmos.
```

- **Sample `1ee702a4-fc89-44a0-92cf-7dfa557e84b3`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=7, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cc41f6c0-e1a9-4215-9d55-c76067b9f233.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1f67f77a-0d85-4f0a-b75e-efef5e4b5837.mp4
  - page: https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304/1ee702a4-fc89-44a0-92cf-7dfa557e84b3

```text
The model stands confidently in the center, dressed in a vibrant pink fur jacket and glossy blue pants. The soft, bright sunlight filters through scattered clouds, illuminating the bold colors of his outfit against the expansive blue sky. As he rotates slowly, his serious expression remains fixed, embodying a powerful presence amidst the playful atmosphere. The texture of the fur catches the light beautifully, while the shiny pants reflect the sun’s rays, creating a striking visual interplay. The setting feels surreal, as if the world twirls around his stable figure, accentuating the emotional tension. This scene radiates a high-contrast aesthetic, celebrating individuality and vibrant expression.
```

- **Sample `879c44e5-1070-4d3d-9a53-bcefce14cc30`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a3edd3b8-048d-4601-85c8-849d63a3f59e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/796dfb9a-4cd0-4c25-9c48-4998033f2a9d.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/879c44e5-1070-4d3d-9a53-bcefce14cc30

```text
The model is seated in a minimalist, brightly lit environment, wearing a shiny silver bomber jacket adorned with colorful patches, a purple crop top, vibrant green shorts, and fishnet tights. The camera remains static, capturing her as she rotates slowly around her own axis, her body remaining still while the rotation emphasizes her confident posture. As she spins, the bold colors of her outfit shimmer, catching the light with every turn. The playful combination of bright orange sunglasses, a yellow cap, and black boots creates a striking contrast with the soft, clean backdrop. The lighting is bright and clean, casting subtle shadows that accentuate the edges of her jacket and the curves of her figure. The overall atmosphere is vibrant and energetic, with the slow, controlled rotation creating a mesmerizing effect. The visual style is contemporary and dynamic, with sharp contrasts between the model's colorful ensemble and the simple, neutral background.

```

- **Sample `66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/de1f6ac8-3652-4187-8ea6-97c1feb51546.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/be2c648b-8883-42df-95db-67d66a4b7dab.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/66fdbf3c-bc9f-4c22-a3fe-bfdb126490c0

```text
The mannequin stands in the center of the frame, wearing a striking red bear hat with fur accents and a thick gold chain around its neck. The camera remains completely still, capturing the mannequin as it is slowly rotated around its own axis. As the mannequin spins, the rich details of the fur hat and shiny gold chain catch the light, reflecting off the glossy black surface of the mannequin’s body. The background is a bold, deep red, contrasting with the dark, polished form of the mannequin. The soft lighting emphasizes the texture of the hat and chain, creating a sharp contrast with the deep shadows cast on the mannequin. The rotation adds a dynamic, almost hypnotic quality to the scene, allowing the viewer to observe every detail of the fashion-forward look. The atmosphere is bold and striking, with a sense of luxury and eccentricity. The visual style is clean, minimal, and cinematic, with a focus on high contrast and the bold silhouette of the mannequin.

```

- **Sample `67768d96-f2e0-4326-82da-68c699c01c80`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4a2b5617-ad7e-4ff6-a5e2-cdc1db310392.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1110d5eb-86f7-4a05-aeee-4b58fb1dc21e.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/67768d96-f2e0-4326-82da-68c699c01c80

```text
The figure floats effortlessly in the air, surrounded by a vibrant cityscape at dusk, with glowing neon lights illuminating the background. Dressed in a striking purple metallic raincoat and neon-accented boots, the person is suspended mid-air, rotating slowly around their own axis. Their body remains still as they spin, with the fabric of the raincoat fluttering gently in the air, catching the colorful lights that reflect off its shiny surface. A sleek mask conceals their face, adding an air of mystery to the scene. The camera remains completely stationary, capturing the mesmerizing rotation from a low angle, allowing the full impact of the neon lights on the outfit to be seen. The vibrant city lights blur into bokeh in the background, creating a surreal and futuristic atmosphere. The lighting is soft but dramatic, emphasizing the reflective textures of the raincoat and the glowing accents on the boots. The mood is mysterious, almost otherworldly, with the levitating figure adding an ethereal, surreal quality to the scene. The visual style is cinematic, with high contrast and vibrant colors that emphasize the figure's fluid motion in the stillness of the urban environment.
```

- **Sample `9a5a588e-3468-44f1-8b36-d3e67cf864d8`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e7e7de38-0cb8-4fb9-9d0f-1666398cdfcd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7fdaf67a-f771-4c3d-87e7-d236597a81c3.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/9a5a588e-3468-44f1-8b36-d3e67cf864d8

```text
The model is suspended on a swing, dressed in a striking orange satin dress, with bold black boots completing the look. The camera remains completely still, capturing her as she is slowly rotated around her axis while hanging from the ropes. Her gaze is intense, peeking through a sleek black mask, while her hands grip the ropes, adding to her confident and powerful presence. The orange fabric of her dress moves fluidly as she spins, creating soft, dynamic ripples that catch the light. The background features a serene sky with soft clouds, which contrasts with the dramatic colors of her outfit. The ropes gently sway with her rotation, adding a sense of effortless motion to the scene. The lighting is bright, enhancing the sheen of the satin and casting soft shadows that define the shape of her figure. The overall atmosphere is surreal and cinematic, with the slow, controlled rotation of the swing giving the scene a hypnotic, almost dreamlike quality.

```

- **Sample `c47d92c1-fc96-4122-9013-5b11489dbf8b`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b413698c-5385-45f3-b7dc-561f23f56cc9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/33b1f593-8a3a-40a7-a56c-21511c55f2a1.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c47d92c1-fc96-4122-9013-5b11489dbf8b

```text
The model sits on a simple, vintage office chair in the center of the frame, wearing a black leather jacket, oversized leather pants, and sneakers. The camera remains completely still, capturing him as he slowly rotates around his own axis while sitting. His posture is relaxed yet confident, with his arms resting loosely at his sides. As he spins, the soft shine of the leather pants and jacket catches the light, emphasizing the smooth texture and the contrasts in the shadows. The background is minimalistic, with pure white walls that highlight the sharp edges and clean lines of the model's outfit. The lighting is soft yet dramatic, casting deep shadows that emphasize the contours of his body and the folds of his clothing. The motion is subtle but mesmerizing, with the slow, controlled rotation adding an almost hypnotic quality to the scene. The overall mood is sleek, modern, and cinematic, with a focus on the fluidity of the rotation and the bold simplicity of the look.
```

- **Sample `53187a5d-9d01-4567-85ce-5100c2972da1`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a72c2c3d-7003-4a30-b1c6-d9d4009d3056.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bce3ab37-9a9a-41d4-b152-2b445062b9b0.mp4
  - page: https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304/53187a5d-9d01-4567-85ce-5100c2972da1

```text
A single subject is centered in the frame, smoothly levitating and performing a slow, continuous 360-degree rotation. The motion is perfectly smooth and looped, showcasing all sides of the subject with clear and elegant movement. The camera remains static while the subject rotates gracefully in place. Maintain detailed lighting that highlights the textures, shapes, and materials of the subject from every angle as it spins. The background stays softly blurred or minimalistic to keep full focus on the rotating subject. Ensure the original colors and lighting are preserved exactly as in the input image. The overall mood is clean, cinematic, and product-focused, perfect for stylish visual presentations or character showcases.
```

- **Sample `9dc26b75-e2d6-481d-9622-9bdd4bf294e7`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/96bb0f49-3000-4bc7-a049-e6881a99267f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/11d45691-7bc9-46b6-896e-ac583fd0df47.mp4
  - page: https://higgsfield.ai/motion/c2d8f36a-319f-40e4-b5d0-94d4ff9be304/9dc26b75-e2d6-481d-9622-9bdd4bf294e7

```text
A single subject is centered in the frame, smoothly levitating and performing a slow, continuous 360-degree rotation. The motion is perfectly smooth and looped, showcasing all sides of the subject with clear and elegant movement. The camera remains static while the subject rotates gracefully in place. Maintain detailed lighting that highlights the textures, shapes, and materials of the subject from every angle as it spins. The background stays softly blurred or minimalistic to keep full focus on the rotating subject. Ensure the original colors and lighting are preserved exactly as in the input image. The overall mood is clean, cinematic, and product-focused, perfect for stylish visual presentations or character showcases.
```

- **Sample `252cbae3-ce03-40d0-84d3-98ac08dddc89`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a5b7531a-d6f4-4c1c-b09f-8fcebaf29bde.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f5de0082-6e8a-4c8d-ae5a-0acce9ad75c2.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/252cbae3-ce03-40d0-84d3-98ac08dddc89

```text
A single subject is perfectly centered in the frame, resting on a stationary surface. The subject smoothly performs a continuous, slow 360-degree rotation while the surface beneath and the background remain completely static. The spinning motion is clean, fluid, and seamlessly looped, allowing all sides of the subject to be clearly viewed. Lighting is consistent and highlights the textures, materials, and fine details of the subject as it rotates. The original colors and lighting are preserved, with no alterations or filters applied. The camera remains static, focusing entirely on the subject’s rotation without moving the surface or environment. Professional, clean, and ideal for product showcases or character presentations.
```

- **Sample `46b09ee0-16e2-49d2-b752-5d331807cd83`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d3b2b900-c0ae-4d9c-bbaf-9df9a21fd7f8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e0778bc7-7745-4144-92ed-5e864dcc47dd.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/46b09ee0-16e2-49d2-b752-5d331807cd83

```text
A single subject is perfectly centered in the frame, resting on a stationary surface. The subject smoothly performs a continuous, slow 360-degree rotation while the surface beneath and the background remain completely static. The spinning motion is clean, fluid, and seamlessly looped, allowing all sides of the subject to be clearly viewed. Lighting is consistent and highlights the textures, materials, and fine details of the subject as it rotates. The original colors and lighting are preserved, with no alterations or filters applied. The camera remains static, focusing entirely on the subject’s rotation without moving the surface or environment. Professional, clean, and ideal for product showcases or character presentations.
```

- **Sample `c88e6ca3-ca68-4341-b1c2-ab0696dc2b15`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f0f457c0-e573-466c-854a-be6529253e17.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/943ba932-f3d0-49ff-9a81-2d16979decca.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c88e6ca3-ca68-4341-b1c2-ab0696dc2b15

```text
A single subject is perfectly centered in the frame, resting on a stationary surface. The subject smoothly performs a continuous, slow 360-degree rotation while the surface beneath and the background remain completely static. The spinning motion is clean, fluid, and seamlessly looped, allowing all sides of the subject to be clearly viewed. Lighting is consistent and highlights the textures, materials, and fine details of the subject as it rotates. The original colors and lighting are preserved, with no alterations or filters applied. The camera remains static, focusing entirely on the subject’s rotation without moving the surface or environment. Professional, clean, and ideal for product showcases or character presentations.
```

- **Sample `c29644ca-bcdb-42cd-a05e-308d5f03c94a`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a26386a1-161d-42cd-8959-0fe2380b6ee7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4657c7ce-34aa-4ea1-bf7b-241970e684b4.mp4
  - page: https://higgsfield.ai/motion/6f06f47e-922e-4660-9fe9-754e4be69696/c29644ca-bcdb-42cd-a05e-308d5f03c94a

```text
A single subject is perfectly centered in the frame, resting on a stationary surface. The subject smoothly performs a continuous, slow 360-degree rotation while the surface beneath and the background remain completely static. The spinning motion is clean, fluid, and seamlessly looped, allowing all sides of the subject to be clearly viewed. Lighting is consistent and highlights the textures, materials, and fine details of the subject as it rotates. The original colors and lighting are preserved, with no alterations or filters applied. The camera remains static, focusing entirely on the subject’s rotation without moving the surface or environment. Professional, clean, and ideal for product showcases or character presentations.
```
