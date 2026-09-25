# Static — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** The camera remains completely still, with no motion or shake. Clean, neutral, and steady—ideal for dialogue scenes or minimalist aesthetics.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e | `aab8440c-0d65-4554-b88a-7a9a5e084b6e` | -261 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=aab8440c-0d65-4554-b88a-7a9a5e084b6e |
| https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2 | `fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2` | 68 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Two friends sit on a couch talking and laughing, locked-off camera, no movement.
```

Use it as: upload a start image that matches the scene, select motion preset **Static**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2be46cee-38bd-4122-be77-3baa4985b20b.webp (320×136)
- Card preview, variant `fffe5dfd`: https://d1xarpci4ikg0w.cloudfront.net/5e5e1a70-5475-45f1-b851-944746950533.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/22e14e56-66b4-4e5d-ae2a-73b338b76fee | https://static.higgsfield.ai/22e14e56-66b4-4e5d-ae2a-73b338b76fee.mp4 | https://static.higgsfield.ai/22e14e56-66b4-4e5d-ae2a-73b338b76fee.webp | https://d1xarpci4ikg0w.cloudfront.net/06c86bca-3344-4657-a5ac-80dce44981cb.webp (320×398) |
| 2 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/c8ff0a43-3900-4b40-9299-1ed90fa69691 | https://static.higgsfield.ai/c8ff0a43-3900-4b40-9299-1ed90fa69691.mp4 | https://static.higgsfield.ai/c8ff0a43-3900-4b40-9299-1ed90fa69691.webp | https://d1xarpci4ikg0w.cloudfront.net/3318874b-1c79-49ea-bf0f-1ef4364fe887.webp (320×486) |
| 3 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/f5f36adf-a2a9-41cc-8371-7e9074a8ef10 | https://static.higgsfield.ai/f5f36adf-a2a9-41cc-8371-7e9074a8ef10.mp4 | https://static.higgsfield.ai/f5f36adf-a2a9-41cc-8371-7e9074a8ef10.webp | https://d1xarpci4ikg0w.cloudfront.net/7bc420a2-d33b-4fe2-86f2-58d8b4b1b4a9.webp (320×486) |
| 4 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/40e15535-cc4c-4c19-be32-5ab399379e84 | https://static.higgsfield.ai/40e15535-cc4c-4c19-be32-5ab399379e84.mp4 | https://static.higgsfield.ai/40e15535-cc4c-4c19-be32-5ab399379e84.webp | https://d1xarpci4ikg0w.cloudfront.net/6afe5db0-74cb-4699-a698-c5758d16f07c.webp (320×182) |
| 5 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3951e7bb-1429-43eb-82b4-e470d7cfbd6f | https://static.higgsfield.ai/3951e7bb-1429-43eb-82b4-e470d7cfbd6f.mp4 | https://static.higgsfield.ai/3951e7bb-1429-43eb-82b4-e470d7cfbd6f.webp | https://d1xarpci4ikg0w.cloudfront.net/63c76f77-534e-4528-8e8a-69e8fc3f88e5.webp (320×486) |
| 6 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/79ba0cec-4ab3-431a-a266-eb95ca65be7d | https://static.higgsfield.ai/79ba0cec-4ab3-431a-a266-eb95ca65be7d.mp4 | https://static.higgsfield.ai/79ba0cec-4ab3-431a-a266-eb95ca65be7d.webp | https://d1xarpci4ikg0w.cloudfront.net/7032aef6-3e57-4b3a-b3e1-539f26dbba29.webp (320×424) |
| 7 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3776e411-a7d9-4476-9d30-80c4aa92ad0d | https://static.higgsfield.ai/3776e411-a7d9-4476-9d30-80c4aa92ad0d.mp4 | https://static.higgsfield.ai/3776e411-a7d9-4476-9d30-80c4aa92ad0d.webp | https://d1xarpci4ikg0w.cloudfront.net/e2548025-88d2-4b68-a857-80ab1c766a49.webp (320×210) |
| 8 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3f069b1f-7124-4fb8-92b3-a9a3a99a2996 | https://static.higgsfield.ai/3f069b1f-7124-4fb8-92b3-a9a3a99a2996.mp4 | https://static.higgsfield.ai/3f069b1f-7124-4fb8-92b3-a9a3a99a2996.webp | https://d1xarpci4ikg0w.cloudfront.net/d3e79d84-bbb0-41bc-ad8b-b41b4de8e86c.webp (320×562) |
| 9 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/e6326292-87d1-4971-8005-6b44dde2f5b6 | https://static.higgsfield.ai/e6326292-87d1-4971-8005-6b44dde2f5b6.mp4 | https://static.higgsfield.ai/e6326292-87d1-4971-8005-6b44dde2f5b6.webp | https://d1xarpci4ikg0w.cloudfront.net/fcba7abf-6de8-4d12-95ec-7a70a45e18f0.webp (320×432) |
| 10 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a31e59c2-6c33-4446-9e85-bc0a53669553 | https://static.higgsfield.ai/a31e59c2-6c33-4446-9e85-bc0a53669553.mp4 | https://static.higgsfield.ai/a31e59c2-6c33-4446-9e85-bc0a53669553.webp | https://d1xarpci4ikg0w.cloudfront.net/96c53586-a1cc-427e-a65a-c704a3085204.webp (320×182) |
| 11 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a4194ed9-5136-4173-b76f-0f028c415bcc | https://static.higgsfield.ai/a4194ed9-5136-4173-b76f-0f028c415bcc.mp4 | https://static.higgsfield.ai/a4194ed9-5136-4173-b76f-0f028c415bcc.webp | https://d1xarpci4ikg0w.cloudfront.net/0650e18d-9da0-435d-8dd4-4f283179a29b.webp (320×424) |
| 12 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/04271eef-84c5-47c2-9a88-6a52cad9b1ac | https://static.higgsfield.ai/04271eef-84c5-47c2-9a88-6a52cad9b1ac.mp4 | https://static.higgsfield.ai/04271eef-84c5-47c2-9a88-6a52cad9b1ac.webp | https://d1xarpci4ikg0w.cloudfront.net/0aab473d-029a-4fc3-8575-3d4e93f8a18c.webp (320×320) |
| 13 | https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/bd5d9a44-7bcb-404b-b886-75df2876e3ce | https://static.higgsfield.ai/bd5d9a44-7bcb-404b-b886-75df2876e3ce.mp4 | https://static.higgsfield.ai/bd5d9a44-7bcb-404b-b886-75df2876e3ce.webp | https://d1xarpci4ikg0w.cloudfront.net/c6584d1b-2de9-4bf6-ab5f-544611e3dbfe.webp (320×424) |

Source pages: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e, https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2. Crawled 2026-09.


## Real sample prompts (site)

13 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `bd5d9a44-7bcb-404b-b886-75df2876e3ce`** (priority 18) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fdbcf205-839d-4e76-8efe-4424de8d7f6e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/41068a4a-155a-4340-8b47-df285fb0c494.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/bd5d9a44-7bcb-404b-b886-75df2876e3ce

```text
Static shot. A young woman with slick dark hair, vivid yellow eyeshadow, and multicolored gummy candies gently placed on her face. A playful, bright background decorated with colorful gummy bears evenly spaced across a white wall. The woman slowly lifts a gummy candy to her mouth, smiling softly as she enjoys the treat. Centered close-up framing, steady and focused on her expression and candy details. Cheerful and whimsical, filled with sweetness and youthful charm. Bold, candy-inspired makeup with a soft pink fuzzy garment, playful and pop-art influenced.
```

- **Sample `04271eef-84c5-47c2-9a88-6a52cad9b1ac`** (priority 17) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1b0a7672-b36f-4d63-ae63-6ee6c4c8ad5e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/208762a0-bfae-4ea5-a4a2-d2f6838f7079.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/04271eef-84c5-47c2-9a88-6a52cad9b1ac

```text
Static shot. A young woman with sleek, wet black hair and black dots painted across her cheeks, partially submerged in calm water, holding a large slice of watermelon. Open, serene water under a clear blue sky, the woman’s reflection mirrored perfectly on the water’s surface, minimalistic and tranquil. She gently bites off a piece, leaving a fresh, curved mark in the bright red flesh. She chews slowly with subtle satisfaction. Centered close-up, perfectly level with the water, creating a symmetrical visual between subject and reflection. Calm and playful, summery with a hint of surreal charm. Natural look with artistic face detail, no visible clothing, emphasizing purity, contrast, and softness.
```

- **Sample `a4194ed9-5136-4173-b76f-0f028c415bcc`** (priority 16) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/351ba1b8-7c66-48ac-9fb7-626ae41d0404.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7c737c01-2fa1-4725-a9c2-ed9c9dc900fd.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a4194ed9-5136-4173-b76f-0f028c415bcc

```text
A well-dressed man sits confidently on a vintage upholstered sofa, exuding calm and elegance in a striking tuxedo. The golden light of sunset bathes the expansive grassy field, highlighting the serene backdrop of distant mountains. Yet chaos ensues as flames burst from one side of the sofa, casting flickering shadows that dance across his composed face. The contrast of the raging fire against the tranquil setting creates a palpable tension, inviting viewers to ponder his inner turmoil. The rich colors of the setting sun meld with the warm glow of the flames, enhancing the scene's emotional weight.
```

- **Sample `a31e59c2-6c33-4446-9e85-bc0a53669553`** (priority 15) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e4e3b5a7-3fc0-48a0-b220-9be099b04ca7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/463754b8-154b-4261-a806-b4958e9f4f24.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/a31e59c2-6c33-4446-9e85-bc0a53669553

```text
A young man with bleached hair lies on a simple bed, his leopard-print sweater contrasting the muted tones of the room. He serenely holds a microphone, lost in song, while large headphones rest against his ears, enhancing his focus on the music. The warm, soft lighting bathes the space, creating an intimate glow that highlights his tattoos and the textures of the bed's linens. The atmosphere is rich with a sense of solitude and creativity, as sound waves seem to dance around him, merging with the minimalist backdrop of peeling walls and scattered cushions.
```

- **Sample `e6326292-87d1-4971-8005-6b44dde2f5b6`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4049fd0d-51fe-4efa-8ffa-5c975fd8e273.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/208bb49c-ba76-4b4e-9f79-8c7c04d12225.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/e6326292-87d1-4971-8005-6b44dde2f5b6

```text
A girl with vibrant yellow hair poses confidently in a playful crouch, her expression beaming with a warm smile as she flashes a peace sign with one hand. The scene is set against a backdrop of sleek, glass skyscrapers, the sunlight filtering through, creating a vivid, almost surreal atmosphere. Her striking, long nails are adorned with intricate designs that catch the light, drawing attention to her playful gesture. The urban environment buzzes quietly with the hint of distant traffic, while her outfit combines a modern twist on classic school elements, enhancing the anime-inspired vibe. This energetic moment captures a youthful spirit, underlined by the vivid colors and dynamic composition of the cityscape.
```

- **Sample `3f069b1f-7124-4fb8-92b3-a9a3a99a2996`** (priority 12) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=7, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a934f936-8d10-4ca8-86da-0053f82acc50.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a2eea1f2-13c8-4090-8166-6ecf7209d9f7.mp4
  - page: https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2/3f069b1f-7124-4fb8-92b3-a9a3a99a2996

```text
Static shot. Young woman with striking makeup—vivid pink eyeshadow with gold accents, turquoise lipstick, faux freckles, and geometric turquoise earrings. Studio-lit neutral background, focused entirely on the woman's expressive face, emphasizing her stylized appearance. She slowly blinks, and as her eyes reopen, they reveal snake-like vertical reptilian pupils. A long, forked at еру end tongue slithers out from between her lips. Tight close-up, symmetrical frontal framing, sharp focus on facial features and expressions. Strange and surreal, merging fashion aesthetics with otherworldly transformation. Hyper-stylized, with vivid color blocking, retro-futuristic accessories, and high-contrast makeup that supports the supernatural twist.
```

- **Sample `3776e411-a7d9-4476-9d30-80c4aa92ad0d`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4ca35fcd-17bf-49a1-9c3e-d435101fdf92.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7cf4e8f2-c5d7-4daf-ae31-a6ba8f68c202.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3776e411-a7d9-4476-9d30-80c4aa92ad0d

```text
A static camera shot frames a young man standing outdoors under a vibrant blue sky, holding a perfectly intact ice cream cone in a gloved hand. Dressed in a bold maroon blazer and wearing a silver cross earring, he stands motionless in the center of the frame. Slowly, without changing his posture, he lifts the ice cream cone closer to his face. Then, without shifting his body or gaze, he extends his tongue and gently licks the surface of the pristine ice cream — a single, slow motion. Afterward, he returns to his original still pose, holding the cone near his chest, and continues to stare directly into the camera with an unreadable, calm expression. The camera remains fixed, and the background — with distant trees and a ferris wheel — stays softly blurred and undisturbed.
```

- **Sample `79ba0cec-4ab3-431a-a266-eb95ca65be7d`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2be88a45-9cf2-49e2-9df5-20b2a7c93e09.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/361a804f-ec7b-4641-8276-f00465ca9d3c.mp4
  - page: https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2/79ba0cec-4ab3-431a-a266-eb95ca65be7d

```text
Static shot. A shirtless man with smooth, dark skin and short natural afro-textured hair, with his hand covered in golden glitter. Outdoors under a clear blue sky, open and minimal background with soft sunlight. He gently places his glitter-covered hand on his forehead and slowly slides it down his face, continuing down his neck to his collarbone, leaving behind a shimmering golden trail. Medium close-up shot, straight-on angle, with shallow depth of field to isolate the subject from the background and emphasize the glitter movement. Serene and radiant, with a magical, sunlit calmness that contrasts the natural skin tone with the surreal golden sparkle. Bare upper body, clean and natural look, with golden glitter on the hand as the primary stylistic element, creating a striking visual effect.
```

- **Sample `3951e7bb-1429-43eb-82b4-e470d7cfbd6f`** (priority 8) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6.5, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/399d3f98-28ae-445d-8f5d-89b3ee52cf18.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/eddd820e-3a8e-43cd-90a5-4b58d9b9eef8.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/3951e7bb-1429-43eb-82b4-e470d7cfbd6f

```text
Static shot. A confident man with dark skin, short afro hairstyle, reflective sunglasses, wearing a bright orange shirt under an olive tactical vest, adorned with bold rings and a watch. Studio setting with a solid, vivid red background and controlled lighting focused on the upper body. He boldly opens his left hand toward the sky — a tall, twisting burst of shimmering silver flame erupts from his palm. Centered medium close-up, straight-on angle, with a shallow depth of field isolating the subject and flame. Bold, stylish, and slightly surreal — blending high fashion with a sense of contained supernatural energy. Futuristic urban elegance — vibrant color blocking, structured tactical wear, luxury accessories, contrasted with a magical flame effect.
```

- **Sample `40e15535-cc4c-4c19-be32-5ab399379e84`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/98ec7730-b7a6-4730-89eb-5878bc0e671d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/712e6427-cd29-4576-b35f-785183603bd7.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/40e15535-cc4c-4c19-be32-5ab399379e84

```text
A young man with bleached hair lies on a simple bed, his leopard-print sweater contrasting the muted tones of the room. He serenely holds a microphone, lost in song, while large headphones rest against his ears, enhancing his focus on the music. The warm, soft lighting bathes the space, creating an intimate glow that highlights his tattoos and the textures of the bed's linens. The atmosphere is rich with a sense of solitude and creativity, as sound waves seem to dance around him, merging with the minimalist backdrop of peeling walls and scattered cushions.
```

- **Sample `f5f36adf-a2a9-41cc-8371-7e9074a8ef10`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/46cf7994-fbd4-4f0e-9dfb-d4aac7d6da63.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/54f7f35c-2a84-4d89-938b-b0f570bd0770.mp4
  - page: https://higgsfield.ai/motion/aab8440c-0d65-4554-b88a-7a9a5e084b6e/f5f36adf-a2a9-41cc-8371-7e9074a8ef10

```text
“A colorful close-up shot of a young woman covered in vibrant stickers and playful decorations, with detailed nail art on her fingers. She begins making exaggerated, funny faces at the camera rapidly, changing expressions in quick succession. At the same time, she moves her hands and arms in fast-paced, playful Korean-style selfie poses — forming hearts with her fingers, peace signs, winks, chin-holding poses, and framing her face. The camera remains static, emphasizing the joyful and chaotic energy. Lighting is bright and studio-like, with a clean white background and sharp focus on her face and hands.”

```

- **Sample `c8ff0a43-3900-4b40-9299-1ed90fa69691`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b9079e58-1f66-4571-a525-343dbf73aef7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8cb31366-7019-4b32-99e5-7bdeb103fafb.mp4
  - page: https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2/c8ff0a43-3900-4b40-9299-1ed90fa69691

```text
“A young woman stands still in the middle of a moving crowd. Her expression is lost and confused as she slowly turns her head, looking from side to side, trying to understand where she is. The camera is completely static and does not move, capturing her reaction as people pass by her in the background.”

```

- **Sample `22e14e56-66b4-4e5d-ae2a-73b338b76fee`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 848×1056
  - input image: https://d1xarpci4ikg0w.cloudfront.net/00e8e137-0b67-4aba-b192-74dc76792ecc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/44cf7252-717c-4466-98cb-af2e02cc40a4.mp4
  - page: https://higgsfield.ai/motion/fffe5dfd-f63b-4659-b7dd-e45f9c7d4ea2/22e14e56-66b4-4e5d-ae2a-73b338b76fee

```text
A girl with a playful expression poses for the camera, showing a peace sign with her hand and smiling brightly. She is dressed in a school uniform with a cardigan, complementing her short, wavy blonde hair. The bustling cityscape serves as a backdrop, filled with towering skyscrapers reflecting the afternoon sun, casting vibrant shadows. Bright colors from her outfit contrast against the urban greys, adding to the lively atmosphere. Her exaggerated anime-inspired aesthetics, like embellished nails, highlight her playful personality, creating a sense of joy and spontaneity. The camera angle is slightly tilted upward, capturing her enthusiasm and the height of the city around her.
```
