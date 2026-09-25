# Eyes In — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera close to the subject’s eyes, creating an intense and emotional connection with the viewer
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187 | `0ab33462-481e-4c78-8ffc-086bebd84187` | -263 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0ab33462-481e-4c78-8ffc-086bebd84187 |
| https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3 | `f226ac67-43d3-4726-ad9c-132608bda8b3` | 90 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f226ac67-43d3-4726-ad9c-132608bda8b3 |
| https://higgsfield.ai/motion/3afdf962-2709-44a9-a41c-6565e6998529 | `3afdf962-2709-44a9-a41c-6565e6998529` | -346 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=3afdf962-2709-44a9-a41c-6565e6998529 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`). These pages publish no settings. Their community publications carry 1 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Close-up of an old sailor with weathered skin; the camera pushes into his pale gray eyes as a tear forms.
```

Use it as: upload a start image that matches the scene, select motion preset **Eyes In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Turning Metal + Eyes In](turning-metal-plus-eyes-in.md)
- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md), [Zoom Out](zoom-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/87172d19-e58b-4d25-8a98-209f0f82e3fb.webp (320×562)
- Card preview, variant `f226ac67`: https://d1xarpci4ikg0w.cloudfront.net/fa4c2d12-d5c1-4446-b2af-ee682853a97b.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/2469f14c-5441-4524-883b-8b6759a79e30 | https://static.higgsfield.ai/2469f14c-5441-4524-883b-8b6759a79e30.mp4 | https://static.higgsfield.ai/2469f14c-5441-4524-883b-8b6759a79e30.webp | https://d1xarpci4ikg0w.cloudfront.net/5c502ce8-f39d-41f0-81cf-545fbe9a3d38.webp (320×562) |
| 2 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca | https://static.higgsfield.ai/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca.mp4 | https://static.higgsfield.ai/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca.webp | https://d1xarpci4ikg0w.cloudfront.net/012e851c-ba85-4ed6-af6a-85d1cb0d0e8e.webp (320×132) |
| 3 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/aabe5434-a4ae-4c95-982e-6c909bdb6993 | https://static.higgsfield.ai/aabe5434-a4ae-4c95-982e-6c909bdb6993.mp4 | https://static.higgsfield.ai/aabe5434-a4ae-4c95-982e-6c909bdb6993.webp | https://d1xarpci4ikg0w.cloudfront.net/b037e0bf-ef6b-4038-aa9b-7ea474697405.webp (320×176) |
| 4 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/e6fd7d2b-c799-44e4-97c6-91270b84a49e | https://static.higgsfield.ai/e6fd7d2b-c799-44e4-97c6-91270b84a49e.mp4 | https://static.higgsfield.ai/e6fd7d2b-c799-44e4-97c6-91270b84a49e.webp | https://d1xarpci4ikg0w.cloudfront.net/82d72d84-3089-4a24-a83f-7b774f752853.webp (320×176) |
| 5 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b | https://static.higgsfield.ai/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b.mp4 | https://static.higgsfield.ai/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b.webp | https://d1xarpci4ikg0w.cloudfront.net/85969350-a634-4dbd-9818-34241b985928.webp (320×432) |
| 6 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/986dc080-e881-445e-b257-f20267609106 | https://static.higgsfield.ai/986dc080-e881-445e-b257-f20267609106.mp4 | https://static.higgsfield.ai/986dc080-e881-445e-b257-f20267609106.webp | https://d1xarpci4ikg0w.cloudfront.net/876d4501-9424-435a-a779-f3a644ff8837.webp (320×320) |
| 7 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/168e2166-aec9-4d33-956a-0b7fb9c4317f | https://static.higgsfield.ai/168e2166-aec9-4d33-956a-0b7fb9c4317f.mp4 | https://static.higgsfield.ai/168e2166-aec9-4d33-956a-0b7fb9c4317f.webp | https://d1xarpci4ikg0w.cloudfront.net/558ce982-f7cb-48c3-956f-96243454dab2.webp (320×562) |
| 8 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/eb56c2cb-d76b-407c-b69f-c6963cad4ebc | https://static.higgsfield.ai/eb56c2cb-d76b-407c-b69f-c6963cad4ebc.mp4 | https://static.higgsfield.ai/eb56c2cb-d76b-407c-b69f-c6963cad4ebc.webp | https://d1xarpci4ikg0w.cloudfront.net/34f472a6-19f4-4983-830d-b88be12b1a24.webp (320×176) |
| 9 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/268799a8-d5f0-4f19-847a-1428d0770836 | https://static.higgsfield.ai/268799a8-d5f0-4f19-847a-1428d0770836.mp4 | https://static.higgsfield.ai/268799a8-d5f0-4f19-847a-1428d0770836.webp | https://d1xarpci4ikg0w.cloudfront.net/18f53abf-edd5-416b-99f5-75e9e4895b46.webp (320×180) |
| 10 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/f637a879-6071-4312-a801-379345e70e3d | https://static.higgsfield.ai/f637a879-6071-4312-a801-379345e70e3d.mp4 | https://static.higgsfield.ai/f637a879-6071-4312-a801-379345e70e3d.webp | https://d1xarpci4ikg0w.cloudfront.net/6ae866bf-8620-43c7-8331-11b60e616320.webp (320×176) |
| 11 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/c9aebe22-9cae-4eec-87ce-a29a715e4bb7 | https://static.higgsfield.ai/c9aebe22-9cae-4eec-87ce-a29a715e4bb7.mp4 | https://static.higgsfield.ai/c9aebe22-9cae-4eec-87ce-a29a715e4bb7.webp | https://d1xarpci4ikg0w.cloudfront.net/86c8497d-717c-4b02-a701-99cc5c95fd51.webp (320×218) |
| 12 | https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/2c53a2b3-6882-4b33-83c7-79df6b264c1d | https://static.higgsfield.ai/2c53a2b3-6882-4b33-83c7-79df6b264c1d.mp4 | https://static.higgsfield.ai/2c53a2b3-6882-4b33-83c7-79df6b264c1d.webp | https://d1xarpci4ikg0w.cloudfront.net/e3da31fe-2dcd-46f8-8f5c-c486e3d84949.webp (320×176) |

- Card preview, round-2 variant `3afdf962` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/7bbe18f1-b0d9-4d0d-bb28-2b63a800be75.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/15741d28-1cd2-4674-b32f-75b0f193b1d7.webp (600×800)

### Sample videos, round-2 variant `3afdf962` (Wan 2.5) (1 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_3262uqBpOaCby92z8zqMPv0oYEr/131f3ef6-61e2-4f09-9d49-dd0faeda0483_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/2f6ff163-07da-473f-a6e6-de0e4eaba33a.jpg | wan2_5_video · 5 s · 1080p · 2048×1536 | The camera opens on the young woman's intense expression, her naturally lit face glowing with warm shadows playing across her cheeks and nose. Her right dark brown eye reflects the ambient light, shimmering with slight moistness and vivid detail. A cool denim jacket and a camo cap frame her face, while her hand, adorned with rings and long pale nails, partially veils her lips, adding tension. The lens glides smoothly closer, narrowing focus to her right eye's iris, rich and deep in color, every micro-movement and reflection palpable. The progression is seamless and steady, advancing into a macro shot of the iris, before crossing the pupil's edge. The frame dissolves gently into pitch black inside the pupil void. |

Source pages: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187, https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3, https://higgsfield.ai/motion/3afdf962-2709-44a9-a41c-6565e6998529. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `2c53a2b3-6882-4b33-83c7-79df6b264c1d`** (priority 12) — Wan 2.5 motion preset, steps=15, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b9f9489f-0a38-4f94-94c1-b675e8f133a0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fb0afd15-a670-423a-b79c-76d5a88025e3.mp4
  - page: https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3/2c53a2b3-6882-4b33-83c7-79df6b264c1d

```text
A muscular, bearded man with tattoos and facial scars, wearing a white tank top and patterned bandana, sits inside an old car, staring tensely toward the camera. The camera begins with a tight close-up through the rain-covered window, then abruptly zooms into his eyes, highlighting the intensity of his expression and the sweat trickling down his temples. The lighting is cold green, with reflective highlights on the glass. The atmosphere is tense and cinematic, evoking a neo-noir crime film with B-movie aesthetics.
```

- **Sample `c9aebe22-9cae-4eec-87ce-a29a715e4bb7`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1152×784
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2ea6f97d-1603-4ef4-89e2-59d25f26edeb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/424b5013-0f50-4089-8eea-a0ad5da9bc42.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/c9aebe22-9cae-4eec-87ce-a29a715e4bb7

```text
An elderly man with graying hair, a thick beard, and piercing blue eyes filled with memories. Wrinkles on his face add depth and character. Extreme close-up of his eyes, shot at a 3/4 angle. The camera suddenly zooms into his pupil, as if trying to access his memories. The lighting is warm and natural daylight, with soft shadows gently contouring his skin. Atmosphere — nostalgic and contemplative. Visual style — cinematic and realistic, emphasizing skin texture and aging details.
```

- **Sample `f637a879-6071-4312-a801-379345e70e3d`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/52926deb-95b4-4548-8484-874d2fbe413e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/28c861b9-be3e-4615-9d3d-7b9027746bf3.mp4
  - page: https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3/f637a879-6071-4312-a801-379345e70e3d

```text
A young basketball player in a red jersey marked with number 12 stands in a locker room, her teammates blurred in the background. She looks directly into the camera with a confident yet slightly tense expression, as if preparing for an important game. The lighting is soft and diffused, highlighting the texture of her skin and the shine in her eyes. Suddenly, the camera makes a sharp zoom into her eyes. Shot type — medium shot transitioning into an extreme close-up of the eyes, angle — straight-on, eye-level. Atmosphere — intense, determined. Style — realistic, cinematic, with natural color tones and soft bokeh.
```

- **Sample `268799a8-d5f0-4f19-847a-1428d0770836`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c0d8cefa-06d7-40f2-86ce-06d46e211020.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e7aa074d-21f2-46d0-b3d1-704504331bf7.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/268799a8-d5f0-4f19-847a-1428d0770836

```text
An unknown person’s eye peeking through a keyhole, framed by a vivid red wooden surface. Extreme close-up, static camera, front-facing angle. Then the camera suddenly zooms sharply into the eye, evoking a sense of intrusion and tension. The lighting is muted, emphasizing the contrast between the darkness of the peephole and the saturated red background. Atmosphere — unsettling, paranoid, as if someone is being watched. Visual style — surreal thriller with heightened colors and harsh shadows.
```

- **Sample `eb56c2cb-d76b-407c-b69f-c6963cad4ebc`** (priority 8) — Wan 2.5 motion preset, steps=22, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a20b6052-9564-4b92-98ee-a14593217399.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5f9f2318-e35e-4653-ae53-252201d99cd3.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/eb56c2cb-d76b-407c-b69f-c6963cad4ebc

```text
A man with braids dressed in a white suit and heavy chains walks through a hall filled with men in black suits and felt hats. The camera starts with a frontal medium shot and then performs a sudden zoom into his eyes, creating a sense of rising tension and significance. The lighting is soft and warm, with golden hues coming from chandeliers in the background. The atmosphere is ceremonial and solemn, with subtle undertones of threat. The styling is cinematic, inspired by crime dramas like American Gangster and The Godfather, featuring a deep color palette and strong chiaroscuro lighting.
```

- **Sample `168e2166-aec9-4d33-956a-0b7fb9c4317f`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/48925942-b3aa-4029-b583-dfa65f1d9100.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a1c5260c-1999-4609-baa0-2a127561fd6a.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/168e2166-aec9-4d33-956a-0b7fb9c4317f

```text
camera zoom in to her eye fast
```

- **Sample `986dc080-e881-445e-b257-f20267609106`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/db9f05b8-87b3-4f8d-b49f-142479b76945.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ce73c09e-02ed-4471-bb02-27a32f165366.mp4
  - page: https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3/986dc080-e881-445e-b257-f20267609106

```text
A man stands at the subway station, cigarette hanging from his lips, exuding a relaxed yet defiant air. The dim light casts sharp shadows across his face, highlighting the creases of weariness and hints of rebellion. As the camera zooms directly into his eye, the surrounding chaos of the metro fades, revealing a world steeped in solitude and introspection. Wisps of smoke curl around him, dancing in the air like fleeting thoughts against the cold, industrial backdrop. The muted colors of the subway reflect the weight of his mood, as the scene pulsates with a sense of tension and unspoken stories.
```

- **Sample `6db02a1e-34f7-45a6-bf6d-c1e584e72c1b`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/14073a54-1ced-4864-b53e-a21060dbe287.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d9444c9a-6cf3-473d-9be2-127d78bcf9f7.mp4
  - page: https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3/6db02a1e-34f7-45a6-bf6d-c1e584e72c1b

```text
A man stands wearing a balaclava, his posture confident yet guarded. The camera plunges directly into his eye, creating an intense focus that captures the glint of streetlights reflecting in the darkness. Night envelops the scene, punctuated by the soft glow of distant lights, evoking an atmosphere of tension and anonymity. Shadows dance around him, contrasting with the warmth of the lights, suggesting an underlying story waiting to unfold. The puffy texture of his jacket adds depth, while his piercing gaze hints at an emotional complexity, drawing viewers into his world.
```

- **Sample `e6fd7d2b-c799-44e4-97c6-91270b84a49e`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d5606f30-39fe-427d-ad03-f64fd1319f07.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e414c099-748f-48ea-ba4a-76170f304990.mp4
  - page: https://higgsfield.ai/motion/f226ac67-43d3-4726-ad9c-132608bda8b3/e6fd7d2b-c799-44e4-97c6-91270b84a49e

```text
A young woman in a gray hoodie with a fearful and tense expression looks upward, her face lit by a mix of cold and warm light creating a strong visual contrast. The camera is positioned from above in an extreme close-up, highlighting her terrified, anxious stare. At one point, the camera sharply zooms into one of her pupils, as if trying to peer into her inner world. The atmosphere is tense and foreboding, evoking a looming sense of danger. The visual style is cinematic and realistic, with contrasting lighting and moody tonality.
```

- **Sample `aabe5434-a4ae-4c95-982e-6c909bdb6993`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4b72f616-a754-4574-af0f-68572fcfd2b2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b4580085-744b-4def-93e7-5d86dd95a694.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/aabe5434-a4ae-4c95-982e-6c909bdb6993

```text
A young woman with curly hair and a contemplative expression stands in a dark room, with lines of unknown language projected across her face. The camera uses a low angle with a sharp zoom into her eyes, emphasizing the reflections in her pupils and amplifying the sense of inner tension. The lighting is high contrast and directional, with warm glints in her hair and cool tones on her skin. The atmosphere is technological and mysterious, as if the character is connected to a stream of digital information. The styling is neon-noir with cyberpunk elements.
```

- **Sample `f13419cf-f583-4b14-bb5d-6d1a5e02f4ca`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4ff8d8f9-30e3-45d3-897d-fa48865b01b5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/38a44bb7-a122-41f7-8fd8-262e289eef2e.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/f13419cf-f583-4b14-bb5d-6d1a5e02f4ca

```text
A woman with chestnut hair and shining grey-green eyes, gazing with a soft smile. Gentle sunlight illuminates her face, emphasizing the warmth in her expression. Extreme close-up of her eyes, shot from a slight side angle. The camera suddenly zooms into her pupils, as if diving into her inner world. Atmosphere — intimate and tender, with a touch of mystery. Visual style — vintage, cinematic, with warm tones and subtle film grain.
```

- **Sample `2469f14c-5441-4524-883b-8b6759a79e30`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f16ea647-9589-4123-a684-f837445b7a0b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4284aa0d-c58c-40b5-9fba-d1e2daa23cc9.mp4
  - page: https://higgsfield.ai/motion/0ab33462-481e-4c78-8ffc-086bebd84187/2469f14c-5441-4524-883b-8b6759a79e30

```text
camera zoom in to his right eye fast
```
