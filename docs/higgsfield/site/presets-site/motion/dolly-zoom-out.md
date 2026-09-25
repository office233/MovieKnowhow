# Dolly Zoom Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera backward while zooming in, distorting perspective to heighten emotion or suspense. Perfect for dramatic reveals or intense moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976 | `520a2d8d-f9b2-4d0a-9fdf-85d02a13c976` | 69 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=520a2d8d-f9b2-4d0a-9fdf-85d02a13c976 |
| https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e | `e057dbd5-1734-4462-bb4c-7d64fe20795e` | -200 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e057dbd5-1734-4462-bb4c-7d64fe20795e |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman stands on a crowded subway platform, frozen in panic; the station seems to close in around her as the perspective warps.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Dolly back while zooming in · **Best use:** Overwhelm, isolation, world closing in · **Models:** — · **Phrase/template:** "Dolly Zoom Out — city swallows the figure" · **Tips:** —

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fe957e85-88cf-4372-9f65-aaaa48504d8a.webp (320×210)
- Card preview, variant `e057dbd5`: https://d1xarpci4ikg0w.cloudfront.net/cedab22a-fa43-4060-9c2b-822685d50d59.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/45b10018-9d07-487a-adfe-fd7ad83df01d | https://static.higgsfield.ai/45b10018-9d07-487a-adfe-fd7ad83df01d.mp4 | https://static.higgsfield.ai/45b10018-9d07-487a-adfe-fd7ad83df01d.webp | https://d1xarpci4ikg0w.cloudfront.net/12ffc177-ead0-4583-bcae-acce54201da2.webp (320×180) |
| 2 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/28354294-d622-4e33-a681-4536b5cd8616 | https://static.higgsfield.ai/28354294-d622-4e33-a681-4536b5cd8616.mp4 | https://static.higgsfield.ai/28354294-d622-4e33-a681-4536b5cd8616.webp | https://d1xarpci4ikg0w.cloudfront.net/5ca9b80e-6ed5-48e6-9259-2801571827c3.webp (320×568) |
| 3 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/5b6a7651-e5ef-4169-8699-eae818ebf605 | https://static.higgsfield.ai/5b6a7651-e5ef-4169-8699-eae818ebf605.mp4 | https://static.higgsfield.ai/5b6a7651-e5ef-4169-8699-eae818ebf605.webp | https://d1xarpci4ikg0w.cloudfront.net/785781e5-c822-42ea-a399-cb1cb99f2a8b.webp (320×210) |
| 4 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/27f9318b-521f-47f5-9558-a71439914695 | https://static.higgsfield.ai/27f9318b-521f-47f5-9558-a71439914695.mp4 | https://static.higgsfield.ai/27f9318b-521f-47f5-9558-a71439914695.webp | https://d1xarpci4ikg0w.cloudfront.net/26e430d3-ac7d-4f2f-804b-f97acf9945c0.webp (320×242) |
| 5 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/98b72285-cd8d-4c1d-b42d-d585b3854761 | https://static.higgsfield.ai/98b72285-cd8d-4c1d-b42d-d585b3854761.mp4 | https://static.higgsfield.ai/98b72285-cd8d-4c1d-b42d-d585b3854761.webp | https://d1xarpci4ikg0w.cloudfront.net/346d2667-785b-46d4-95fe-df55540a4859.webp (320×182) |
| 6 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/abb27c03-6be5-4104-9b4a-bc755c070fde | https://static.higgsfield.ai/abb27c03-6be5-4104-9b4a-bc755c070fde.mp4 | https://static.higgsfield.ai/abb27c03-6be5-4104-9b4a-bc755c070fde.webp | https://d1xarpci4ikg0w.cloudfront.net/36a0058a-ffd3-46f9-a463-4a220c1c84a4.webp (320×182) |
| 7 | https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/2329181f-473d-4b81-a091-cb76d49ec256 | https://static.higgsfield.ai/2329181f-473d-4b81-a091-cb76d49ec256.mp4 | https://static.higgsfield.ai/2329181f-473d-4b81-a091-cb76d49ec256.webp | https://d1xarpci4ikg0w.cloudfront.net/7fc2c6da-0ab0-4870-80a4-44be4a9fb356.webp (320×182) |

Source pages: https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976, https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `2329181f-473d-4b81-a091-cb76d49ec256`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f44d4c7c-7bbc-4981-9432-51edb9c421b8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/13b87b78-6d7d-48d6-8a3a-d9eb887e1cdf.mp4
  - page: https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/2329181f-473d-4b81-a091-cb76d49ec256

```text
A young schoolgirl in uniform stands at the back of a vintage green-seated school bus, gripping the seat rails with both hands, her expression shifting from curiosity to subtle realization. As she leans forward slightly, the camera performs a dramatic dolly zoom—moving backward while zooming in—causing the background to warp and stretch away behind her while her face stays perfectly framed and steady. The motion creates a surreal, emotional tension as the bus interior elongates, and soft golden light flickers through the dusty windows. The atmosphere is contemplative and cinematic, like a moment of sudden insight. Styling is naturalistic Japanese drama with warm tones, shallow depth of field, and slight grain for softness.
```

- **Sample `abb27c03-6be5-4104-9b4a-bc755c070fde`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8624bb72-e6b4-44ef-a6fe-2e0f86e1de73.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dc64e7d8-6dae-4910-a821-a320ae946c2a.mp4
  - page: https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e/abb27c03-6be5-4104-9b4a-bc755c070fde

```text
A woman in a bold red suit sits on a futuristic stage surrounded by glowing holographic kanji signs and slicing laser lights. As she gazes forward with wide eyes, the camera performs a dramatic dolly zoom—moving backward while zooming in—causing the environment behind her to stretch outward while her face stays perfectly centered. Simultaneously, the camera begins a slow roll along its axis, creating a swirling, disorienting motion as the lights around her warp and rotate. Her hair subtly lifts in the artificial breeze, and the background pulses with blue and green hues. The atmosphere is hyper-stylized and intense. Styling blends modern K-pop performance aesthetics with cinematic sci-fi visuals, using synchronized camera techniques, strobe lasers, and a dreamy tilt-shift effect.
```

- **Sample `98b72285-cd8d-4c1d-b42d-d585b3854761`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7206e47a-ee10-4c56-893f-ed801e71d9c6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/90f84488-d9bb-4d7b-ae0d-ee11b8022cf9.mp4
  - page: https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e/98b72285-cd8d-4c1d-b42d-d585b3854761

```text
A young man stands motionless under pulsing LED walls, his face lit by a soft rainbow streak across his skin. He suddenly widens his eyes in a moment of realization, frozen in surprise. At that exact moment, the camera performs a dramatic dolly zoom—tracking backward while zooming in—causing his face to remain sharp and centered while the vibrant dancers behind him stretch and warp in depth, frozen mid-move. The visual space around him expands with a subtle ripple as if time is bending. The atmosphere is electric and heightened. Styling is futuristic music video aesthetic with saturated neon hues, stylized rainbow reflections, and a sharp contrast between stillness and motion.
```

- **Sample `27f9318b-521f-47f5-9558-a71439914695`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f37998f4-736f-428b-b33f-68b183af9bf9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dd2e345f-8977-408b-9f27-edf0debe6349.mp4
  - page: https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e/27f9318b-521f-47f5-9558-a71439914695

```text
A battle-worn soldier stares straight ahead, his blue eyes wide with shock, face covered in dirt, blood, and fear, as distant explosions flicker in the background. The camera begins a slow dolly zoom out—tracking backward while zooming in—creating a disorienting effect where his terrified face remains frozen in the center while the smoky, chaotic battlefield behind him stretches and warps away. Flames flicker in the bokeh, and falling ash drifts through the frame. Time seems to slow around him. The atmosphere is intense, raw, and devastating. Styling evokes high-contrast war cinematography with desaturated tones, handheld camera shake, film grain, and naturalistic lighting.
```

- **Sample `5b6a7651-e5ef-4169-8699-eae818ebf605`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e7f47763-0d4c-4929-af9a-7abd456bdc29.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/93eb603c-7578-432e-8da2-f6b793b29581.mp4
  - page: https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e/5b6a7651-e5ef-4169-8699-eae818ebf605

```text
A broken man sits motionless on a disheveled bed in a dim green room, his body bruised and smeared with dried blood. In a torn and stained tank top, he holds something to his temple, his arm trembling uncontrollably. Tears stream down his cheeks, mixing with sweat and dirt. The camera performs a slow dolly zoom out—tracking backwards while zooming in—causing his face to remain locked in frame as the claustrophobic room behind him stretches and warps, amplifying his isolation. His breath shakes, the room spins ever so slightly, and silence overwhelms the scene. The atmosphere is heavy, raw, and devastating. Styling echoes gritty arthouse realism with handheld textures, deep shadows, and natural lighting softened by emotional weight.
```

- **Sample `28354294-d622-4e33-a681-4536b5cd8616`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1239576e-74ad-46ea-8cc3-99c6cc271ff0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/32deb292-5ed3-4108-9464-09f48181185c.mp4
  - page: https://higgsfield.ai/motion/520a2d8d-f9b2-4d0a-9fdf-85d02a13c976/28354294-d622-4e33-a681-4536b5cd8616

```text
The camera begins a dolly zoom out, slowly revealing the scale of her surroundings. The jagged peaks of distant mountains stretch endlessly toward the horizon, and a winding river snakes its way through the valley far below. The further the camera retreats, the smaller her figure becomes — a vibrant red mark against the vastness of the wilderness.

As the camera continues to pull back, her stillness becomes even more powerful — a solitary figure standing defiant against the enormity of the world. The atmosphere is stoic, heroic, and introspective, evoking themes of courage, purpose, and isolation. The visual style is warm and cinematic, with sunlit peaks, rich earth tones, and her vibrant red costume providing a powerful focal point in the vast, untamed landscape.
```

- **Sample `45b10018-9d07-487a-adfe-fd7ad83df01d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b4bb2110-95a5-400d-98ef-1ae36edbefee.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/068b3ffd-be88-4458-a122-333d76dfa69e.mp4
  - page: https://higgsfield.ai/motion/e057dbd5-1734-4462-bb4c-7d64fe20795e/45b10018-9d07-487a-adfe-fd7ad83df01d

```text
The camera starts with a tight medium shot, framing the cat’s face and upper body. The figure’s stillness dominates the moment, its expression unreadable behind the dark lenses. The flickering orange lights pulse faintly, adding tension. As the camera begins a slow dolly zoom-out, the circular structure reveals intricate metallic gears and mechanical details, suggesting an enigmatic device or ritualistic symbol. The glow intensifies, bathing the room in an eerie warmth. The cat figure’s presence feels imposing yet enigmatic, its gaze locked forward.

The expanding frame reveals the darkened walls lined with faded tapestries and scattered objects — tarot cards, coins, and parchment paper etched with symbols. The atmosphere is mysterious, cryptic, and almost ceremonial. The visual style leans heavily on rich textures, warm highlights, and deep shadows, creating a noir-inspired yet surreal aesthetic. 
```
