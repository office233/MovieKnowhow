# Zoom In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gradually moves closer to the subject, building focus, tension, or emotional intensity
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b | `223929fa-99b1-4a61-a454-90226684901b` | 81 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=223929fa-99b1-4a61-a454-90226684901b |
| https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82 | `a3a3db5d-d3c5-4d95-b429-235ae3d1ee82` | -169 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a3a3db5d-d3c5-4d95-b429-235ae3d1ee82 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A chess player stares at the board in a dim smoky hall; slow zoom in on his face as he realizes he has lost.
```

Use it as: upload a start image that matches the scene, select motion preset **Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d319e644-2edb-4c6b-8344-f0a9934f2b7d.webp (320×176)
- Card preview, variant `a3a3db5d`: https://d1xarpci4ikg0w.cloudfront.net/95756e2a-0c18-4bbb-bbbf-78270a72910a.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/fa9e8d11-f1bf-4590-a3a6-fc59e927480e | https://static.higgsfield.ai/fa9e8d11-f1bf-4590-a3a6-fc59e927480e.mp4 | https://static.higgsfield.ai/fa9e8d11-f1bf-4590-a3a6-fc59e927480e.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8f84b4-b21a-41ee-ac83-8b8273f75185.webp (320×176) |
| 2 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/ce82761b-a2cf-46f3-a874-15338b532105 | https://static.higgsfield.ai/ce82761b-a2cf-46f3-a874-15338b532105.mp4 | https://static.higgsfield.ai/ce82761b-a2cf-46f3-a874-15338b532105.webp | https://d1xarpci4ikg0w.cloudfront.net/a609e9ac-0f67-42bb-bf04-6b27e5165844.webp (320×182) |
| 3 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031 | https://static.higgsfield.ai/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031.mp4 | https://static.higgsfield.ai/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031.webp | https://d1xarpci4ikg0w.cloudfront.net/5b662c0d-c995-4d71-bd13-ecda2657eb6f.webp (320×182) |
| 4 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/07d4393f-dca0-4667-9023-326c803aa15a | https://static.higgsfield.ai/07d4393f-dca0-4667-9023-326c803aa15a.mp4 | https://static.higgsfield.ai/07d4393f-dca0-4667-9023-326c803aa15a.webp | https://d1xarpci4ikg0w.cloudfront.net/98563e76-cab8-482e-9e41-245cd0dba9a7.webp (320×182) |
| 5 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/477346e8-f0a0-4077-bef5-46465d92e951 | https://static.higgsfield.ai/477346e8-f0a0-4077-bef5-46465d92e951.mp4 | https://static.higgsfield.ai/477346e8-f0a0-4077-bef5-46465d92e951.webp | https://d1xarpci4ikg0w.cloudfront.net/12a076db-48f0-4724-bf0d-11d97abb059e.webp (320×424) |
| 6 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/e095695f-4ea0-4d70-a41b-f70292ce0a52 | https://static.higgsfield.ai/e095695f-4ea0-4d70-a41b-f70292ce0a52.mp4 | https://static.higgsfield.ai/e095695f-4ea0-4d70-a41b-f70292ce0a52.webp | https://d1xarpci4ikg0w.cloudfront.net/e2c8e700-3af9-4611-a881-a2111d1bc98c.webp (320×242) |
| 7 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/953a18ff-b536-4b9c-af91-e6ee7cf80bc2 | https://static.higgsfield.ai/953a18ff-b536-4b9c-af91-e6ee7cf80bc2.mp4 | https://static.higgsfield.ai/953a18ff-b536-4b9c-af91-e6ee7cf80bc2.webp | https://d1xarpci4ikg0w.cloudfront.net/638f9b0d-41e3-4369-aa7d-2e4812217d50.webp (320×168) |
| 8 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/5457582d-c9f4-4a5e-aae0-9eef79633103 | https://static.higgsfield.ai/5457582d-c9f4-4a5e-aae0-9eef79633103.mp4 | https://static.higgsfield.ai/5457582d-c9f4-4a5e-aae0-9eef79633103.webp | https://d1xarpci4ikg0w.cloudfront.net/7f778e51-d9c0-4b72-9977-dd1365736c25.webp (320×168) |
| 9 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/e3a115e3-fbb1-49c1-8d87-95506f632550 | https://static.higgsfield.ai/e3a115e3-fbb1-49c1-8d87-95506f632550.mp4 | https://static.higgsfield.ai/e3a115e3-fbb1-49c1-8d87-95506f632550.webp | https://d1xarpci4ikg0w.cloudfront.net/834e2975-789b-4cfe-a372-1b03dea13474.webp (320×132) |
| 10 | https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/cafe1a27-39c2-41d0-8611-9e446a2b8ba2 | https://static.higgsfield.ai/cafe1a27-39c2-41d0-8611-9e446a2b8ba2.mp4 | https://static.higgsfield.ai/cafe1a27-39c2-41d0-8611-9e446a2b8ba2.webp | https://d1xarpci4ikg0w.cloudfront.net/9af0a712-6124-40f1-b6a6-d7850b541797.webp (320×176) |

Source pages: https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b, https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `cafe1a27-39c2-41d0-8611-9e446a2b8ba2`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0e31423d-aaea-4b80-91a9-818c57c37647.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f82a0468-3162-4d09-83ed-ae04085217dd.mp4
  - page: https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/cafe1a27-39c2-41d0-8611-9e446a2b8ba2

```text
A sharply dressed man in a navy overcoat and tie stands between towering skyscrapers, fixated on the phone in his hands as overcast light casts a muted tone on the cityscape. His jaw is tense, his expression unreadable. Captured in a low-angle close-up with a wide lens, the buildings around him loom high into the sky. The camera slowly zooms in, enhancing the feeling of isolation and pressure within an urban power structure. The atmosphere is corporate, suspenseful, and introspective. Styling is prestige drama with desaturated tones, formal wardrobe, and architectural dominance.
```

- **Sample `e3a115e3-fbb1-49c1-8d87-95506f632550`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/df941d86-682b-4c0f-98aa-9f0bd30e5ea7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f1b5d968-2683-47b2-a8b0-e873067555b6.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/e3a115e3-fbb1-49c1-8d87-95506f632550

```text
A brooding man in a black coat and loosened tie lights a cigarette with a metal Zippo, his face flickering in the glow of the flame as he stands beneath a weathered, ornate ceiling. His expression is fatigued yet focused, caught between routine and ritual. Captured in a low-angle close-up, the camera slowly zooms in, drawing attention to the ritualistic motion and emotional weight in his gestures. The atmosphere is moody, intimate, and noir-inspired. Styling blends gothic urban grit with supernatural thriller tones, using deep shadows, amber light, and vintage interior textures.
```

- **Sample `5457582d-c9f4-4a5e-aae0-9eef79633103`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1312×688
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fa9423bb-6d5c-47a7-a169-b2bb67860109.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c62d9bfa-0760-4492-9774-5bf512cc2576.mp4
  - page: https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/5457582d-c9f4-4a5e-aae0-9eef79633103

```text
A young girl in a red jacket and brown pants stands alone in a dimly lit hallway, turned slightly toward the camera with a wary, searching expression. Soft daylight spills through an unseen window, casting gentle shadows along the corridor’s textured walls. Captured in a centered wide shot with a long lens, the camera slowly zooms in, heightening the tension and sense of isolation. The atmosphere is quiet, eerie, and suspenseful. Styling draws from minimalist psychological drama with muted colors, architectural framing, and naturalistic lighting.
```

- **Sample `953a18ff-b536-4b9c-af91-e6ee7cf80bc2`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1312×688
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f2d92401-1422-4cd1-a8ef-6f70f8b7f0e8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a9e7ba19-da36-4a9b-9606-c270aef67edf.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/953a18ff-b536-4b9c-af91-e6ee7cf80bc2

```text
A laid-back middle-aged man with long messy hair and a goatee lies on a richly patterned Persian rug, eyes closed, wearing a grey t-shirt and loose shorts, listening to music through a vintage Walkman. Cassette tapes are scattered nearby, and warm ambient lighting highlights the textures of the rug. Captured in a symmetrical top-down shot with shallow depth of field and a slow zoom-in toward his peaceful face. The atmosphere is tranquil, nostalgic, and slightly ironic. Styling embraces 90s slacker aesthetics with cozy textures, analog tech, and warm cinematic tones.
```

- **Sample `e095695f-4ea0-4d70-a41b-f70292ce0a52`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ab5f66e3-40bf-4ce7-bb05-d3fbd5f0cf13.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/144fbea0-537c-44d1-8b21-6556ce9713fc.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/e095695f-4ea0-4d70-a41b-f70292ce0a52

```text
Two sharply dressed men stand confidently on a bustling city street, their sleek black suits contrasting with the muted colors of the background vehicles. The camera slowly glides toward them, capturing their cool demeanor, marked by dark sunglasses that reflect the vibrant city lights. A soft glow surrounds them, enhancing their intensity amidst the stillness of the idle taxis, which seem frozen in time. The faint haze of cigarette smoke curls up from one man's hand, adding an air of edginess to the scene. The atmosphere is thick with anticipation, as pedestrians pass by, unaware of the power dynamics at play. The color palette is rich and deep, with shadows playing across their faces, reflecting an inner world of confidence and mystery.
```

- **Sample `477346e8-f0a0-4077-bef5-46465d92e951`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e0847812-be46-4bf8-ba73-7d4674694e49.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ee13b3fc-0656-420c-8f5d-9870dbbe6d0d.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/477346e8-f0a0-4077-bef5-46465d92e951

```text
A cool young man leans against a sleek black muscle car, wearing casual black attire with a hint of an orange jacket draped nearby. The sun casts a warm glow on the open asphalt, creating a vibrant contrast against the shiny chrome of classic cars that surround him. His thoughtful expression and relaxed pose convey calm confidence, inviting intrigue. As the camera slowly zooms in, it captures the detailed textures of the cars and the subtle shadows created by the afternoon light. The scene is suffused with an air of effortless style and sophistication, embodying freedom and coolness.
```

- **Sample `07d4393f-dca0-4667-9023-326c803aa15a`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3365d887-06d1-40d6-bd8d-ad79b92301b2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5f51d993-034c-4c33-99e4-19d89ccc6d21.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/07d4393f-dca0-4667-9023-326c803aa15a

```text
A young man stands defiantly, raising a vivid orange smoke cartridge high above his head, his face contorted in an aggressive expression that radiates intensity. The bright pink smoke streams outward, enveloping the scene in a surreal haze as the camera zooms out, revealing towering concrete bridges that loom in the background under a clear blue sky. The stark contrast between the bold colors of the smoke and the industrial setting heightens the sense of rebellion. His tattooed arms are tense, embodying a powerful energy that fills the air with anticipation. The soft glow of sunlight casts dramatic shadows, accentuating the textures of his metallic silver jacket, while the swirling smoke adds an ethereal quality to the urban environment, creating a striking visual narrative.
```

- **Sample `dfc87bd1-9924-4830-a9ee-9bc0cf6c2031`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6aafcc99-e1c8-4ada-83a7-7c75b7afc314.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ca2252c5-fd0c-47f8-9754-8d8875e6ff1a.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/dfc87bd1-9924-4830-a9ee-9bc0cf6c2031

```text
The camera zooms in on his face, capturing the raw emotion as he speaks directly to the viewer. He stands confidently beneath a graffiti-covered overpass, the vibrant colors reflecting the intensity of his message. His eyes glisten with passion, and his expressive gestures emphasize the weight of his words. The soft golden light filters through the structure, creating a warm yet gritty atmosphere around him. Urban sounds echo in the background, adding texture to this poignant moment as he reveals his story with authenticity and depth.
```

- **Sample `ce82761b-a2cf-46f3-a874-15338b532105`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1fb25e44-5c77-434e-bb66-b3bf84994484.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a526b6b9-389b-4eb1-83cb-3c80bbe0a512.mp4
  - page: https://higgsfield.ai/motion/223929fa-99b1-4a61-a454-90226684901b/ce82761b-a2cf-46f3-a874-15338b532105

```text
The camera zooms in on his face, filled with raw emotion as he talks passionately, holding a banana near his ear. The scene is set under a bustling concrete bridge, with overhanging structures casting shadowy patterns that contrast the bright sunlight. The urban environment buzzes with life, yet creates a surreal, almost whimsical atmosphere as he interacts with the banana like it’s a confidant. His green jacket stands out against the muted tones of the surroundings, reflecting his vibrant inner world, while the tattooed arms reveal stories inked in skin. The play of light highlights the intensity of his expression, revealing vulnerability and determination as he navigates his thoughts.
```

- **Sample `fa9e8d11-f1bf-4590-a3a6-fc59e927480e`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/391bb646-fac0-4fb7-bc9c-20fc52eaeed2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/16436888-052e-4d62-9293-bcbf6152d426.mp4
  - page: https://higgsfield.ai/motion/a3a3db5d-d3c5-4d95-b429-235ae3d1ee82/fa9e8d11-f1bf-4590-a3a6-fc59e927480e

```text
camera zoom in to the face of the man, man looks straight to the camera and stay serious 
```
