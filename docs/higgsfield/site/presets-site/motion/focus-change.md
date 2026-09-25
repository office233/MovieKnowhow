# Focus Change — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Shifts the focus from one subject to another in the same shot, guiding the viewer’s attention. Great for storytelling, reveals, or emotional emphasis.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224 | `0753d80c-7369-4682-b725-8729ab638224` | 76 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0753d80c-7369-4682-b725-8729ab638224 |
| https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d | `390e084a-4a80-410b-a808-77411828c61d` | -188 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=390e084a-4a80-410b-a808-77411828c61d |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Focus racks from a wedding ring on a table in the foreground to a woman crying by the window.
```

Use it as: upload a start image that matches the scene, select motion preset **Focus Change**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Named control: a focus shift between subjects · **Best use:** Drama, romance · **Models:** — · **Phrase/template:** "Camera: Focus Change from the rain on the window to her face." · **Tips:** Romance: "slight Focus Change between faces"

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/74f2caaf-2982-4f8f-b1d6-961bd5b2020c.webp (320×210)
- Card preview, variant `390e084a`: https://d1xarpci4ikg0w.cloudfront.net/cdc25ae9-0bd7-4a5a-9fd1-583b0e4309d0.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/28b72af3-89d4-4376-80fe-3ae4e4603860 | https://static.higgsfield.ai/28b72af3-89d4-4376-80fe-3ae4e4603860.mp4 | https://static.higgsfield.ai/28b72af3-89d4-4376-80fe-3ae4e4603860.webp | https://d1xarpci4ikg0w.cloudfront.net/16f6ad9c-cc10-4dd8-af43-374deb1c352e.webp (320×182) |
| 2 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/ec740d10-ac50-47ac-aece-1b85becde6f9 | https://static.higgsfield.ai/ec740d10-ac50-47ac-aece-1b85becde6f9.mp4 | https://static.higgsfield.ai/ec740d10-ac50-47ac-aece-1b85becde6f9.webp | https://d1xarpci4ikg0w.cloudfront.net/5a14a8d6-f6ca-4ab9-8dbe-d77574557ba0.webp (320×182) |
| 3 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db | https://static.higgsfield.ai/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db.mp4 | https://static.higgsfield.ai/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db.webp | https://d1xarpci4ikg0w.cloudfront.net/f290551a-2033-4045-bbf1-c0f17d327fd6.webp (320×242) |
| 4 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7 | https://static.higgsfield.ai/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7.mp4 | https://static.higgsfield.ai/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7.webp | https://d1xarpci4ikg0w.cloudfront.net/d48ba6f4-f00a-469f-9a2e-cd7ccab2cf19.webp (320×210) |
| 5 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/49fcabb7-6423-462d-bfd2-d2754b7fc93a | https://static.higgsfield.ai/49fcabb7-6423-462d-bfd2-d2754b7fc93a.mp4 | https://static.higgsfield.ai/49fcabb7-6423-462d-bfd2-d2754b7fc93a.webp | https://d1xarpci4ikg0w.cloudfront.net/66f60e77-eb17-4821-a211-244029cf0d75.webp (320×424) |
| 6 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/1ad22817-6b2e-4926-aaa1-cc087af2b058 | https://static.higgsfield.ai/1ad22817-6b2e-4926-aaa1-cc087af2b058.mp4 | https://static.higgsfield.ai/1ad22817-6b2e-4926-aaa1-cc087af2b058.webp | https://d1xarpci4ikg0w.cloudfront.net/7945e67e-3803-4fcf-9420-6379e0a95f7c.webp (320×320) |
| 7 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/1bc84d37-b387-4589-aa1e-3da5947122d5 | https://static.higgsfield.ai/1bc84d37-b387-4589-aa1e-3da5947122d5.mp4 | https://static.higgsfield.ai/1bc84d37-b387-4589-aa1e-3da5947122d5.webp | https://d1xarpci4ikg0w.cloudfront.net/5fbec3d3-ed3a-4731-aa48-70a4638d53e9.webp (320×424) |
| 8 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/0d1c71cb-9779-41c2-aa56-2330757d4e6f | https://static.higgsfield.ai/0d1c71cb-9779-41c2-aa56-2330757d4e6f.mp4 | https://static.higgsfield.ai/0d1c71cb-9779-41c2-aa56-2330757d4e6f.webp | https://d1xarpci4ikg0w.cloudfront.net/99645176-305e-467e-a6cd-4dd214ad9a7d.webp (320×424) |
| 9 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/7a5a9c8f-685f-460c-9122-c83ca6657eaf | https://static.higgsfield.ai/7a5a9c8f-685f-460c-9122-c83ca6657eaf.mp4 | https://static.higgsfield.ai/7a5a9c8f-685f-460c-9122-c83ca6657eaf.webp | https://d1xarpci4ikg0w.cloudfront.net/aee0f275-d40e-467d-912a-1b8bea0ecc2e.webp (320×174) |
| 10 | https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9 | https://static.higgsfield.ai/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9.mp4 | https://static.higgsfield.ai/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9.webp | https://d1xarpci4ikg0w.cloudfront.net/3a83bf5b-3488-431d-9674-7d7b776b815f.webp (320×426) |

Source pages: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224, https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `4be9bbe0-f881-4c02-9a94-ca2195d2fdc9`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1080×1440
  - input image: https://d1xarpci4ikg0w.cloudfront.net/83406f73-d52a-405c-9a2a-4d90f805b41c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dc172348-227b-4395-8568-a4bf775718ce.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/4be9bbe0-f881-4c02-9a94-ca2195d2fdc9

```text
Focus on the man who looked towards the girl. Focus shifts to the girl who walks straight to the camera and looks at it confidently and poses
```

- **Sample `7a5a9c8f-685f-460c-9122-c83ca6657eaf`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2592×1408
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5419b51d-be4e-4421-86ff-adbbecb00ebc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ac0b41f6-5103-42b2-84ca-f6e8417b9f03.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/7a5a9c8f-685f-460c-9122-c83ca6657eaf

```text
Start with a sharp focus on the flowers, showing delicate details. Slowly shift to her face, making the flowers blur as she breathes in the moment. Keep the colors soft, blending warmth and serenity.
```

- **Sample `0d1c71cb-9779-41c2-aa56-2330757d4e6f`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/508e7824-bb73-400b-b295-a0693d6dc91f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e69b996b-a2d4-4ba2-8085-e7287f2877ee.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/0d1c71cb-9779-41c2-aa56-2330757d4e6f

```text
Create a stylish cinematic animation beginning with a sharp focus on the young man wearing sunglasses seated thoughtfully on his bike. Gradually and smoothly shift the lens focus toward the vibrant background, clearly revealing a lively Korean urban street scene, including neon-lit signs, city lights, and bustling activities around a Korean supermarket. Maintain the evening's warm ambient lighting, subtle reflections in his sunglasses, and introduce gentle camera movements for added cinematic realism.
```

- **Sample `1bc84d37-b387-4589-aa1e-3da5947122d5`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4bb84c05-d030-45d6-a36b-3f74ec85c4fc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/31870874-f3fd-420c-bc6c-bfc618d253c6.mp4
  - page: https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d/1bc84d37-b387-4589-aa1e-3da5947122d5

```text
Create an inspiring cinematic animation starting with the woman standing confidently, her figure remaining still and centered, highlighted by warm, golden sunlight. Gradually move the camera laterally, slowly revealing the magnificent mountain landscape in the background, with dynamic, realistic clouds gently drifting and subtle atmospheric haze enhancing the depth. Preserve the vivid, warm colors of sunrise or sunset, emphasizing tranquility, reflection, and the grandeur of nature.
```

- **Sample `1ad22817-6b2e-4926-aaa1-cc087af2b058`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/11ceb63d-4fc8-4813-9a16-97e8833bfeb2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/606c4776-2c6c-4e39-a912-736812f24b4f.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/1ad22817-6b2e-4926-aaa1-cc087af2b058

```text
Create a dynamic cinematic animation starting with clear, sharp focus on the graceful silhouette of the woman dancing expressively, her hair gently flowing and body elegantly moving. Gradually and smoothly transition the camera’s focus from her silhouette toward the roaring campfire behind her, bringing clarity and vivid detail to the flames and sparks rising into the night sky. Maintain dramatic, warm lighting, deep shadows, and a vibrant fiery glow to enhance the atmosphere of passion, freedom, and mystique.
```

- **Sample `49fcabb7-6423-462d-bfd2-d2754b7fc93a`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8a52bfbd-232a-4cf7-9aa7-5916c86d1ec7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6a321048-d210-47e2-94bc-26bd26841093.mp4
  - page: https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d/49fcabb7-6423-462d-bfd2-d2754b7fc93a

```text
Create a cinematic rack-focus animation beginning with sharp focus on the two men sitting confidently inside the car. Gradually and smoothly shift the lens focus to the background, clearly revealing the bustling street activity and people walking behind them. Ensure natural depth-of-field transitions, preserving realistic lighting, reflections on the car, and vibrant street colors. Enhance the overall cinematic feel with subtle camera shake or handheld motion for authenticity.
```

- **Sample `47f352f0-61e1-48d4-9c08-a4e07cd5f5c7`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/061688f5-2260-4498-888d-cc25ac979f75.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ee4d457a-9845-412f-896f-4345692e518d.mp4
  - page: https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d/47f352f0-61e1-48d4-9c08-a4e07cd5f5c7

```text
Start with a close-up shot of a woman’s face in the foreground, blurred and out of focus. Her profile dominates the left side of the frame, her gaze fixed on something distant. The background is stark white, with a striking red fabric stretched across the floor like a runway. Shift focus to reveal a sleek, black-clad figure walking confidently across the red fabric — a bold presence in contrast to the soft blur of the foreground. The figure’s reflection ripples across a mirror-like pool, adding depth and distortion. Gradually, pull focus back to the blurred face in the foreground, now sharpening just enough to reveal her tense expression — eyes following the distant figure with quiet intensity. Keep the lighting stark and minimal, emphasizing the contrast between the red fabric and the crisp white backdrop.
```

- **Sample `6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b403bdf5-c73e-4de1-b793-f151a8f52db8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ef5b2763-9f9b-4dbd-b7ec-1a8040ae0559.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/6f58f3f1-b1ec-4438-bf8e-f9f5e8bd25db

```text
Shift focus on the sequined clutch resting on the marble table. The glistening sequins catch the faint light, their metallic sheen shimmering as shadows ripple across the surface. The camera lingers, emphasizing the texture — a luxurious yet ominous detail.
```

- **Sample `ec740d10-ac50-47ac-aece-1b85becde6f9`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/57d9df26-9db0-4462-af1c-a125e9c1e841.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/941fb5f9-6677-4c94-85b8-ca71f7ee2acd.mp4
  - page: https://higgsfield.ai/motion/0753d80c-7369-4682-b725-8729ab638224/ec740d10-ac50-47ac-aece-1b85becde6f9

```text
Start with an extreme close-up of the revolver’s barrel, sharply in focus. The muzzle flash erupts — a violent burst of light and flame illuminating the metallic surface. The camera lingers on the gun’s details — the spinning cylinder, the hammer still recoiling, smoke curling from the chamber.

Then, slowly shift focus past the weapon to reveal the woman’s face — her expression cold, her gaze locked with ruthless intensity. Her blonde hair is slightly tousled, and her leather jacket clings tightly against her tense shoulders. Her knuckles are clenched white around the gun.

Hold the focus on her piercing stare, the faint smoke drifting in the air, before fading to a wide shot of the barren landscape behind her — empty, silent, and vast — a stark contrast to the violence that just unfolded. The echo of the gunshot fades as the tension lingers.
```

- **Sample `28b72af3-89d4-4376-80fe-3ae4e4603860`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/575aeb07-75fc-4a12-8c4a-f9f218320da0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0f2822ba-6e84-4ebd-aa82-d304ee4ce42d.mp4
  - page: https://higgsfield.ai/motion/390e084a-4a80-410b-a808-77411828c61d/28b72af3-89d4-4376-80fe-3ae4e4603860

```text
Start with a tight focus on the warrior in the foreground, his face stern and painted with bold black markings. His gaze is unwavering, locked on something distant. The camera lingers on the intricate details — the feathers tucked into his hair, the layers of worn leather and beads draped across his chest, and his firm grip on a long rifle. The sky behind him stretches wide and brooding.

Slowly shift focus to the figures behind him — two more warriors, their faces similarly marked, gripping spears while seated on horseback. Their distant expressions suggest tension, their postures rigid as they survey the open plains. The shifting focus creates a sense of hierarchy — the lead warrior as the commanding presence, with his allies standing firm behind him.
```
