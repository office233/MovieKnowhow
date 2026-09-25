# Fisheye — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** music video
- **What it does (site description, verbatim):** A wide, distorted lens look that curves the edges of the frame, making everything appear rounded and exaggerated. Adds a fun, surreal, or edgy vibe to the shot.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0 | `6c689fc3-e421-4ed5-892c-2092d1c60be0` | -204 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=6c689fc3-e421-4ed5-892c-2092d1c60be0 |
| https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd | `a5915704-2b92-476b-b67b-3a1394c613cd` | 49 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a5915704-2b92-476b-b67b-3a1394c613cd |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A skater grins right into the lens mid-trick, fisheye distortion bending the skatepark around him.
```

Use it as: upload a start image that matches the scene, select motion preset **Fisheye**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Wide-lens distortion, curved perspective · **Best use:** Surreal, skateboarding, experimental · **Models:** — · **Phrase/template:** "Fisheye lens capturing the skateboarder's trick" · **Tips:** —

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/a71c3e8e-9c69-4b25-adf9-606133b04af1.webp (320×320)
- Card preview, variant `a5915704`: https://d1xarpci4ikg0w.cloudfront.net/10fe69f5-e502-4ff9-b40a-e3996fb346a2.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/a9e8c129-843a-46a3-8580-bf04efef697d | https://static.higgsfield.ai/a9e8c129-843a-46a3-8580-bf04efef697d.mp4 | https://static.higgsfield.ai/a9e8c129-843a-46a3-8580-bf04efef697d.webp | https://d1xarpci4ikg0w.cloudfront.net/fd8eabb7-8cfa-49bb-91a8-8c028bb44519.webp (320×424) |
| 2 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/8d72e429-5787-450b-abf7-5c12a5339608 | https://static.higgsfield.ai/8d72e429-5787-450b-abf7-5c12a5339608.mp4 | https://static.higgsfield.ai/8d72e429-5787-450b-abf7-5c12a5339608.webp | https://d1xarpci4ikg0w.cloudfront.net/64fe5be2-e9fd-4ac8-a4b9-a34896c78790.webp (320×320) |
| 3 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb | https://static.higgsfield.ai/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb.mp4 | https://static.higgsfield.ai/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb.webp | https://d1xarpci4ikg0w.cloudfront.net/4b94b2b4-be39-42ef-a8ab-48dc59bf5947.webp (320×424) |
| 4 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/de88b7a2-a37b-42bd-806d-806e13ab9f73 | https://static.higgsfield.ai/de88b7a2-a37b-42bd-806d-806e13ab9f73.mp4 | https://static.higgsfield.ai/de88b7a2-a37b-42bd-806d-806e13ab9f73.webp | https://d1xarpci4ikg0w.cloudfront.net/06203c51-ba7f-4f29-8599-7499a3160efc.webp (320×182) |
| 5 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/37d7f64a-3bea-498c-9956-9603c38910e4 | https://static.higgsfield.ai/37d7f64a-3bea-498c-9956-9603c38910e4.mp4 | https://static.higgsfield.ai/37d7f64a-3bea-498c-9956-9603c38910e4.webp | https://d1xarpci4ikg0w.cloudfront.net/52b0a009-5b04-4e80-814b-e1d472603f33.webp (320×182) |
| 6 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/644419ab-85fa-481a-af69-8a4945acb6f8 | https://static.higgsfield.ai/644419ab-85fa-481a-af69-8a4945acb6f8.mp4 | https://static.higgsfield.ai/644419ab-85fa-481a-af69-8a4945acb6f8.webp | https://d1xarpci4ikg0w.cloudfront.net/376f0ea2-dbfb-4596-a1e4-0fae752eec2e.webp (320×424) |
| 7 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/08c8ba3d-5f98-421a-ad34-8738e6f8efe0 | https://static.higgsfield.ai/08c8ba3d-5f98-421a-ad34-8738e6f8efe0.mp4 | https://static.higgsfield.ai/08c8ba3d-5f98-421a-ad34-8738e6f8efe0.webp | https://d1xarpci4ikg0w.cloudfront.net/918bc1e4-e8aa-4ad5-aa51-aaaa6c492510.webp (320×424) |
| 8 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/a89082c2-198f-4a74-8d17-885e282d37e3 | https://static.higgsfield.ai/a89082c2-198f-4a74-8d17-885e282d37e3.mp4 | https://static.higgsfield.ai/a89082c2-198f-4a74-8d17-885e282d37e3.webp | https://d1xarpci4ikg0w.cloudfront.net/8f61956d-0249-4ddf-ad99-4776a6289092.webp (320×320) |
| 9 | https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/44c533dd-3099-48b0-bc53-fbefbe76cb87 | https://static.higgsfield.ai/44c533dd-3099-48b0-bc53-fbefbe76cb87.mp4 | https://static.higgsfield.ai/44c533dd-3099-48b0-bc53-fbefbe76cb87.webp | https://d1xarpci4ikg0w.cloudfront.net/6d13fa45-f752-44c5-859c-bfb65301437b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0, https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `44c533dd-3099-48b0-bc53-fbefbe76cb87`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/03773ef7-1c2d-451f-ad6b-ac2d52ac9024.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4a1c8739-c47b-40e0-85ea-c40da03d75a3.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/44c533dd-3099-48b0-bc53-fbefbe76cb87

```text
A young man performs a dynamic skateboard trick, leaning low and confident, his expression a mix of focus and thrill. The setting is a concrete skate park, with soft overcast light diffusing the atmosphere in a nostalgic haze. The fisheye lens accentuates his movement, creating a sense of depth and urgency as the skateboard glides along the edge of a ramp. Surrounding greenery peeks through with blurred edges, enhancing the urban feel while evoking a retro vibe reminiscent of VHS tapes. The texture of the pavement contrasts with his sneakers, which are dusted with gritty fragments, illustrating a passionate moment captured in motion.
```

- **Sample `a89082c2-198f-4a74-8d17-885e282d37e3`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c5b8ab4f-d0d0-4844-9847-04caaa50256a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a7404c4e-d12b-4526-b1b7-86f30e7945b5.mp4
  - page: https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/a89082c2-198f-4a74-8d17-885e282d37e3

```text
A man dances energetically, showcasing stylish movements with confidence. He is dressed in oversized, flowing pants and a sleek black jacket, embodying an urban vibe. The scene is set in a dimly lit underground tunnel, bathed in vibrant green light that gleams off the concrete walls. The fisheye lens distorts the surroundings, exaggerating the dancer's dynamic poses as they seem to leap into the lens. A palpable sense of energy fills the atmosphere, with each movement reflecting a fusion of rhythm and emotion. The stark contrast of the green light against the darkened space amplifies his presence, creating a hypnotic effect that invites the viewer into his world.
```

- **Sample `08c8ba3d-5f98-421a-ad34-8738e6f8efe0`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5be36b1b-ebb9-4fd9-8c0b-f523be038641.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/23bf5c17-2cb3-4bed-b7d0-a310f00f3488.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/08c8ba3d-5f98-421a-ad34-8738e6f8efe0

```text
A man stands confidently in front of the camera, his exuberant smile illuminated dramatically against a black backdrop. He wears bold white sunglasses that reflect a glimmer of light, enhancing his playful demeanor. His posture is forward, emphasizing his engaging presence, as he playfully touches his chin with a finger, inviting connection. The fisheye lens distorts the space around him, creating an intense, immersive atmosphere. Shadows dance across his bare skin, revealing a texture that adds depth to the scene. The high contrast of black and white highlights his confident expression, amplifying the jubilant mood.
```

- **Sample `644419ab-85fa-481a-af69-8a4945acb6f8`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/01dcf109-353c-47ea-8ff7-8aa3c6fd8175.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/790f5ba9-8810-4f1f-b216-0b2b0b9f9044.mp4
  - page: https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/644419ab-85fa-481a-af69-8a4945acb6f8

```text
Two guys speak directly to the camera with confidence, their playful energy radiating from vibrant expressions. The sun casts a warm, golden light behind them, creating a halo effect that outlines their figures against a clear blue sky, filled with palm trees that sway gently in the breeze. Dressed in colorful, stylish clothing, one guy shows a hand gesture while the other crosses his arms, both exuding a casual charisma. The fisheye lens bends the scene, emphasizing their dynamic postures and the expansive beach atmosphere, creating a sense of depth and movement. The playful interaction captures a moment of connection, inviting the viewer into their lively world.
```

- **Sample `37d7f64a-3bea-498c-9956-9603c38910e4`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/57667310-e056-4a09-94b6-32e987ecbc5e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1651257b-02f8-409b-a56b-5825359ce6e8.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/37d7f64a-3bea-498c-9956-9603c38910e4

```text
A girl sits regally on a golden throne, exuding confidence as she raps directly into the camera. The fisheye lens warps the space around her, enhancing the striking contrast between her poised demeanor and the chaotic graffiti-covered walls. Neon lights cast an electric glow, illuminating her form-fitting dress and highlighting the intricate patterns. Her long legs stretch gracefully, adorned with shiny red boots that command attention, while her expression radiates strength and passion. The surrounding chaos of colors in the graffiti adds depth and texture to the atmosphere, underscoring her commanding presence in this vibrant urban realm.
```

- **Sample `de88b7a2-a37b-42bd-806d-806e13ab9f73`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/79521ef8-aa65-42da-b281-a08dfb0128c4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4632c6c3-2259-4c0e-b878-5c0c1edfc813.mp4
  - page: https://higgsfield.ai/motion/6c689fc3-e421-4ed5-892c-2092d1c60be0/de88b7a2-a37b-42bd-806d-806e13ab9f73

```text
A man sits confidently at a lavish chessboard, dressed in a strikingly luxurious white fur coat paired with a vivid red bonnet and oversized white sunglasses. The scene is set in an open courtyard under a bright blue sky, the sun casting dramatic shadows that dance on the ground. Each piece on the ornate board shimmers with gold and black hues, reflecting the intense concentration in his focused expression. As he hovers over the board, his hands poised above the pieces, a palpable tension fills the air, suggesting a moment of strategic decision-making. The environment feels bold and vibrant, with the architecture around him embellished with large windows that glint in the sunlight, enriching the cinematic depth of the moment.
```

- **Sample `0628aa3e-ffc8-4318-8f30-ddd20d3c81fb`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c39156d1-448e-4f5c-a69d-281174642ae4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5a3c2129-719c-4ada-ad92-673c0218aa17.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/0628aa3e-ffc8-4318-8f30-ddd20d3c81fb

```text
A stylish young woman stands prominently in the foreground, posing with a captivating gaze as she gently touches the camera lens. The setting is a bustling fashion show, dressed in muted black and white tones that amplify the high-fashion vibe. The dim lighting casts soft shadows across the sleek, elegant garments of the surrounding models, highlighting their poised postures and serious expressions. Through the circular framing, an intimate atmosphere is created, revealing both the isolation and allure of the girl amidst the crowd. Her flowing gown sways gently, reflecting the light with a silken sheen that contrasts with the stark surroundings, embodying both confidence and vulnerability.
```

- **Sample `8d72e429-5787-450b-abf7-5c12a5339608`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/113cfba5-bff7-4d90-adbd-8b004bc35091.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e70bd02f-fd10-442e-a461-410eff115e80.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/8d72e429-5787-450b-abf7-5c12a5339608

```text
Old man sitting on sheeps
```

- **Sample `a9e8c129-843a-46a3-8580-bf04efef697d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/42e644b6-9318-48ca-98fc-d092a698506c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e63afaed-e5c9-4e4e-bfb1-ce79fb4bb634.mp4
  - page: https://higgsfield.ai/motion/a5915704-2b92-476b-b67b-3a1394c613cd/a9e8c129-843a-46a3-8580-bf04efef697d

```text
A girl in stylish sunglasses and a sleek outfit crouches confidently, rapping energetically to the camera, her expression fierce and engaging. The setting is a sunlit tarmac, where a helicopter begins to lift off, its blades creating a sense of movement and urgency. Around her, tigers lounge with regal ease, while dollar bills whirl through the air, adding an element of opulence and excitement. The sky is clear blue, illuminating her skin and creating a vibrant backdrop that contrasts with the ruggedness of the helicopter. Each rap line seems to resonate with the rhythm of the spinning blades overhead, symbolizing power and success.
```
