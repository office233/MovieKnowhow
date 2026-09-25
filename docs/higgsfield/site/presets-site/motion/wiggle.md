# Wiggle — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Combines slight shaky “wiggle” motion with a smooth zoom or pan to reveal the subject. Adds playful energy and keeps the shot dynamic and engaging, perfect for stylish intros or creative reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702 | `cfbe9732-1b5a-4f59-9dbc-801f85f5c702` | -199 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cfbe9732-1b5a-4f59-9dbc-801f85f5c702 |
| https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376 | `fbc42e4f-222c-4c79-a5f2-b3a23d169376` | 72 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fbc42e4f-222c-4c79-a5f2-b3a23d169376 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl in a colorful sweater strikes a pose in her bedroom; playful wiggle motion with a quick zoom reveal.
```

Use it as: upload a start image that matches the scene, select motion preset **Wiggle**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/892f780d-c2f4-4b49-a662-6de18f44e0ff.webp (320×242)
- Card preview, variant `fbc42e4f`: https://d1xarpci4ikg0w.cloudfront.net/7bef11fa-2699-41a8-9f9d-3af3ea00a496.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/9406fc76-861d-4167-a506-9dff3f15265a | https://static.higgsfield.ai/9406fc76-861d-4167-a506-9dff3f15265a.mp4 | https://static.higgsfield.ai/9406fc76-861d-4167-a506-9dff3f15265a.webp | https://d1xarpci4ikg0w.cloudfront.net/2985efa5-55dd-4882-b50d-dd13f5aa6cac.webp (320×242) |
| 2 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/55242a39-40b7-40a0-b956-16e2503440d0 | https://static.higgsfield.ai/55242a39-40b7-40a0-b956-16e2503440d0.mp4 | https://static.higgsfield.ai/55242a39-40b7-40a0-b956-16e2503440d0.webp | https://d1xarpci4ikg0w.cloudfront.net/60182e1d-bc17-4700-a947-451f114dbf76.webp (320×242) |
| 3 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/48080d59-d8c7-4730-83f3-d9ab387be0b3 | https://static.higgsfield.ai/48080d59-d8c7-4730-83f3-d9ab387be0b3.mp4 | https://static.higgsfield.ai/48080d59-d8c7-4730-83f3-d9ab387be0b3.webp | https://d1xarpci4ikg0w.cloudfront.net/350e94c1-5cf7-43fc-b5cc-047a5e5cfff3.webp (320×424) |
| 4 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/f785c166-ca12-47a2-a8c1-92c4b5de4916 | https://static.higgsfield.ai/f785c166-ca12-47a2-a8c1-92c4b5de4916.mp4 | https://static.higgsfield.ai/f785c166-ca12-47a2-a8c1-92c4b5de4916.webp | https://d1xarpci4ikg0w.cloudfront.net/6c8599c2-b1d4-4fad-8487-e131c73acec3.webp (320×320) |
| 5 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/d9ef5a8d-a55e-412f-916d-733ba44a3706 | https://static.higgsfield.ai/d9ef5a8d-a55e-412f-916d-733ba44a3706.mp4 | https://static.higgsfield.ai/d9ef5a8d-a55e-412f-916d-733ba44a3706.webp | https://d1xarpci4ikg0w.cloudfront.net/c5a96dea-80e3-419a-8e17-f0937d2f50ce.webp (320×242) |
| 6 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/e99267b2-06fe-4525-b1b8-511feab522f8 | https://static.higgsfield.ai/e99267b2-06fe-4525-b1b8-511feab522f8.mp4 | https://static.higgsfield.ai/e99267b2-06fe-4525-b1b8-511feab522f8.webp | https://d1xarpci4ikg0w.cloudfront.net/bb00e4fa-f9a7-416f-8370-ae1c2f8adf37.webp (320×424) |
| 7 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/4ecb6327-ee1a-4639-89c4-1aad96cd396a | https://static.higgsfield.ai/4ecb6327-ee1a-4639-89c4-1aad96cd396a.mp4 | https://static.higgsfield.ai/4ecb6327-ee1a-4639-89c4-1aad96cd396a.webp | https://d1xarpci4ikg0w.cloudfront.net/731586fb-4811-4da0-a41f-213e434e91dc.webp (320×424) |
| 8 | https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/909d061e-ae20-4a03-acc7-5156c17646e5 | https://static.higgsfield.ai/909d061e-ae20-4a03-acc7-5156c17646e5.mp4 | https://static.higgsfield.ai/909d061e-ae20-4a03-acc7-5156c17646e5.webp | https://d1xarpci4ikg0w.cloudfront.net/98250068-1e2f-4a7c-b478-6e2358ed722b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702, https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `909d061e-ae20-4a03-acc7-5156c17646e5`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ef54a06f-d0b8-4df8-a13b-2b64e142f384.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ca10e157-0bd2-4186-8b5f-9451e712b27c.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/909d061e-ae20-4a03-acc7-5156c17646e5

```text
An asian man walking through the city.
```

- **Sample `4ecb6327-ee1a-4639-89c4-1aad96cd396a`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d8eb551b-8136-498d-aee8-42f55919aec0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/edc47b52-d539-47ab-bd69-106f1b37c4e2.mp4
  - page: https://higgsfield.ai/motion/cfbe9732-1b5a-4f59-9dbc-801f85f5c702/4ecb6327-ee1a-4639-89c4-1aad96cd396a

```text
A man looks straight at the camera.
```

- **Sample `e99267b2-06fe-4525-b1b8-511feab522f8`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7e0bb064-a5ad-4722-85e9-b96f7f2b34c4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/20a80241-3ab6-4c0f-b44f-3e24da883a3d.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/e99267b2-06fe-4525-b1b8-511feab522f8

```text
An Asian man sits confidently on the front hood of a modified blue Nissan Skyline parked in a neon-lit Japanese street at night. The camera is positioned directly in front of him. He looks straight into the lens with attitude, slightly adjusting his pose. Apply a subtle wiggle effect to the frame to give the scene a handheld, vintage hip-hop video feel. The background glows with colorful kanji signs, flashing lights, and city textures, while the flash highlights his face, tattoos, and outfit, enhancing the gritty, energetic mood of Tokyo’s night. Keep the car and lighting static while the camera motion gives life to the scene.
```

- **Sample `d9ef5a8d-a55e-412f-916d-733ba44a3706`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d4914b65-8591-4666-9060-11ed4bc21479.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7af2b299-8c3b-4535-b165-f1da78c2d342.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/d9ef5a8d-a55e-412f-916d-733ba44a3706

```text
A woman stands confidently, striking a playful pose with her fingers wrapped around a colorful lollipop. Dressed in a fitted denim jumpsuit, she exudes a bold, fashionable flair, accentuated by oversized shades and chunky jewelry. The bright convenience store behind her bursts with vibrant bottles of sodas and juices, creating a lively backdrop that radiates energy. Soft overhead lights illuminate the scene, casting a warm glow that highlights her engaging smile. The contrast between her playful demeanor and the colorful shelves adds a layer of excitement, inviting viewers into her dynamic world.
```

- **Sample `f785c166-ca12-47a2-a8c1-92c4b5de4916`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/900d4351-bc87-4310-998e-eb144ae6cae5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/df596b49-b887-4f70-8cc9-1be051b2d150.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/f785c166-ca12-47a2-a8c1-92c4b5de4916

```text
A confident individual stands at a convenience store, sipping from a bright red cup, her striking style on full display. Dressed in a colorful striped polo, she radiates personality against the backdrop of glass coolers filled with refreshing drinks, illuminated by soft fluorescent lights. Her round glasses catch the light, reflecting her thoughtful gaze, while oversized earrings and layered gold chains emphasize her fashion-forward attitude. The atmosphere is casual yet electric, showcasing a blend of everyday life and personal expression. The vibrant colors and bold lighting enhance her presence, creating a moment that feels both intimate and relatable.
```

- **Sample `48080d59-d8c7-4730-83f3-d9ab387be0b3`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d7a58456-21c4-461a-9ca4-c83692e08e92.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/173d57d1-5b14-45fc-b616-a83762d9b852.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/48080d59-d8c7-4730-83f3-d9ab387be0b3

```text
A young man with long hair and a black hoodie sits calmly on a metal bar in a narrow brick alleyway at night. The camera slowly dollies in toward him, capturing his relaxed yet intense gaze directly into the lens. Around him, colorful balloons float gently in the air, swaying and drifting as if caught in a soft breeze. A subtle flash effect highlights his face and sneakers. The lighting is moody with a slight vintage tone, evoking a nostalgic streetwear editorial vibe. Add a soft handheld wiggle and flickering light to enhance the dreamy, surreal atmosphere.
```

- **Sample `55242a39-40b7-40a0-b956-16e2503440d0`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/324cac16-5367-4a2e-b207-19f226aac06f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ed514505-a8f3-49d3-b74d-371b3e30b92d.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/55242a39-40b7-40a0-b956-16e2503440d0

```text
A stylish man in a red and black outfit walks confidently forward through a dark urban alley, captured with a Snorricam rig that locks his face in the center of the frame. Harsh flash lighting accentuates his sharp features and bold fashion, while the background blurs dynamically with every step — neon signs flicker and city elements rush by, enhancing the raw, cinematic feel. The man's intense gaze never leaves the lens, giving the viewer a sense of direct confrontation and power.
```

- **Sample `9406fc76-861d-4167-a506-9dff3f15265a`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0c7f0eda-61ab-47e7-bf57-054b1cdccc33.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c814220b-650c-4c5d-9c51-e46a79a1b3e0.mp4
  - page: https://higgsfield.ai/motion/fbc42e4f-222c-4c79-a5f2-b3a23d169376/9406fc76-861d-4167-a506-9dff3f15265a

```text
A young woman stands confidently, her posture relaxed yet assertive, dressed in a brightly colored, oversized jacket covered in playful graphics, with a matching cap. The setting is a bustling convenience store, adorned with rows of vividly colored bottles, illuminated by vibrant blue and neon lights that reflect off the glass. She gazes over her shoulder with a cool, defiant expression, tinted pink sunglasses adding to her edgy vibe. The atmosphere buzzes with urban energy, the soft hum of the vending machines underscoring the scene. As the lighting shifts, the textures of her attire come to life, revealing depth and character in an otherwise stark environment.
```
