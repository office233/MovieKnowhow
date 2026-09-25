# Zoom Out — Higgsfield Motion preset

- **Category:** Camera · zoom
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Gradually pulls back to reveal more of the scene, creating distance, suspense, or a sense of isolation
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945 | `b731109c-5856-436f-b269-b44b75f20945` | 74 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b731109c-5856-436f-b269-b44b75f20945 |
| https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa | `f9e6792f-b385-4eca-87f6-f439e917a7aa` | -222 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f9e6792f-b385-4eca-87f6-f439e917a7aa |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A child sits alone on a swing in a snowy playground; slow zoom out reveals the vast empty park around her.
```

Use it as: upload a start image that matches the scene, select motion preset **Zoom Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · zoom):** [Crash Zoom In](crash-zoom-in.md), [Crash Zoom Out](crash-zoom-out.md), [Earth Zoom Out](earth-zoom-out.md), [Eyes In](eyes-in.md), [Mouth In](mouth-in.md), [YoYo Zoom](yoyo-zoom.md), [Zoom In](zoom-in.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/2028a8d9-cae2-48cc-bfe3-f584a1c9e257.webp (320×242)
- Card preview, variant `f9e6792f`: https://d1xarpci4ikg0w.cloudfront.net/56edba43-3fe5-4435-9717-05d3ef6ae03c.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd | https://static.higgsfield.ai/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd.mp4 | https://static.higgsfield.ai/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd.webp | https://d1xarpci4ikg0w.cloudfront.net/838b6d4a-2ce3-407f-a79b-1d11037dff7c.webp (320×562) |
| 2 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89 | https://static.higgsfield.ai/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89.mp4 | https://static.higgsfield.ai/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89.webp | https://d1xarpci4ikg0w.cloudfront.net/c65b9c46-5a1e-4b74-946c-13bdbcc73e98.webp (320×182) |
| 3 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/a74b1863-4d6f-4c00-8ae1-bb618871841e | https://static.higgsfield.ai/a74b1863-4d6f-4c00-8ae1-bb618871841e.mp4 | https://static.higgsfield.ai/a74b1863-4d6f-4c00-8ae1-bb618871841e.webp | https://d1xarpci4ikg0w.cloudfront.net/2e4e7597-2b31-49b7-81e8-8f98bf57dd0d.webp (320×182) |
| 4 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/958f4376-5dd1-4614-97f9-dbee4f66d33c | https://static.higgsfield.ai/958f4376-5dd1-4614-97f9-dbee4f66d33c.mp4 | https://static.higgsfield.ai/958f4376-5dd1-4614-97f9-dbee4f66d33c.webp | https://d1xarpci4ikg0w.cloudfront.net/625c386e-9537-41ab-9329-a3372adc9be9.webp (320×242) |
| 5 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/942c77b6-b0b2-45a7-9e69-8811b297a158 | https://static.higgsfield.ai/942c77b6-b0b2-45a7-9e69-8811b297a158.mp4 | https://static.higgsfield.ai/942c77b6-b0b2-45a7-9e69-8811b297a158.webp | https://d1xarpci4ikg0w.cloudfront.net/cf2a4cc7-09b5-4b30-aac2-561227a4e37e.webp (320×242) |
| 6 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/adba5edf-5c53-449a-8830-9ac683d98ad8 | https://static.higgsfield.ai/adba5edf-5c53-449a-8830-9ac683d98ad8.mp4 | https://static.higgsfield.ai/adba5edf-5c53-449a-8830-9ac683d98ad8.webp | https://d1xarpci4ikg0w.cloudfront.net/9270a01e-4ee0-4705-9234-0d1e67ebb485.webp (320×234) |
| 7 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/fb693cee-bd4f-49da-9cac-22a2eaa77f8a | https://static.higgsfield.ai/fb693cee-bd4f-49da-9cac-22a2eaa77f8a.mp4 | https://static.higgsfield.ai/fb693cee-bd4f-49da-9cac-22a2eaa77f8a.webp | https://d1xarpci4ikg0w.cloudfront.net/4b75ef23-9904-4def-841f-892159517684.webp (320×132) |
| 8 | https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/ff366925-aa66-42f6-92a9-07083e8848ae | https://static.higgsfield.ai/ff366925-aa66-42f6-92a9-07083e8848ae.mp4 | https://static.higgsfield.ai/ff366925-aa66-42f6-92a9-07083e8848ae.webp | https://d1xarpci4ikg0w.cloudfront.net/45de224b-2db0-4d4a-93f5-33abed7ee018.webp (320×226) |

Source pages: https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945, https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `ff366925-aa66-42f6-92a9-07083e8848ae`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1136×800
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ad505ccb-71f0-4e0e-8f01-75c793bd8f8e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bcee44b7-573f-4a29-bfcc-1c733d31d2ad.mp4
  - page: https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa/ff366925-aa66-42f6-92a9-07083e8848ae

```text
A red-haired girl drinks water in a quiet, sunlit kitchen, viewed from a low angle as morning light paints the wooden cabinets around her. Slow zoom out reveals the peaceful domestic space, grounding the viewer in a gentle, everyday moment. The atmosphere is warm and nostalgic, with a hint of childhood innocence. Styling includes vintage-inspired striped clothing and natural tones
```

- **Sample `fb693cee-bd4f-49da-9cac-22a2eaa77f8a`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/66937521-7700-4ccd-ab38-915ebe4d95f9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ac09ee8f-8544-40ea-ae39-cb9bb73e3645.mp4
  - page: https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa/fb693cee-bd4f-49da-9cac-22a2eaa77f8a

```text
A shocked teenage girl stands frozen in the middle of a chaotic high school hallway packed with dancing and partying students, center-framed as confetti rains down. Slow zoom out from her face, capturing the surrounding madness as she processes the moment. The atmosphere is overwhelming, surreal, and intense, with youthful energy clashing against her stillness. Styling reflects modern teen fashion with layered textures and vibrant colors.
```

- **Sample `adba5edf-5c53-449a-8830-9ac683d98ad8`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1120×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e86ee710-9abe-4cc7-b98b-afa55aff6fae.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6842886e-ad3d-48fb-be3f-3ed9caacf21b.mp4
  - page: https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/adba5edf-5c53-449a-8830-9ac683d98ad8

```text
Four boys stand confidently in a retro urban courtyard, one holding a vintage soccer ball and staring directly into camera. Slow zoom out emphasizes the symmetry of brutalist buildings behind them, giving a sense of youthful unity and pride. The atmosphere is timeless and subtly rebellious, infused with nostalgia. Styling is distinctly 70s: fitted shirts, soft curls, and muted tones.
```

- **Sample `942c77b6-b0b2-45a7-9e69-8811b297a158`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a63c18ad-aa78-4e93-8b35-b20e8f4a0591.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b192d1e2-1009-4aee-8031-bea730f0ffe9.mp4
  - page: https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/942c77b6-b0b2-45a7-9e69-8811b297a158

```text
The camera zooms out, revealing her sitting gracefully on a soft pink cloud, her expression serene yet powerful. She dons a glossy, lavender bodysuit adorned with iridescent butterflies that seem to dance around her. The backdrop is a dreamy sky filled with pastel hues of pink and blue, softly illuminated by ethereal light, creating a whimsical atmosphere. As the view expands, a subtle halo of light encircles her head, hinting at an otherworldly presence. The gentle movement of the clouds adds an enchanting texture to the scene, while the overall mood evokes a sense of peace and wonder.
```

- **Sample `958f4376-5dd1-4614-97f9-dbee4f66d33c`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/48dd6ba7-ff77-447a-b6f2-5860ed76b00d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/76a7cc29-48fb-4b53-aa6a-b1fadc400100.mp4
  - page: https://higgsfield.ai/motion/b731109c-5856-436f-b269-b44b75f20945/958f4376-5dd1-4614-97f9-dbee4f66d33c

```text
A young woman with short platinum hair stands confidently, wearing a shimmering gold jacket. Her striking makeup, featuring vibrant colors and geometric shapes, enhances her bold expression as she holds a colorful popsicle. The scene zooms out, revealing her walking through an enchanting desert made of pink paper, the soft dunes curving gently around her. In the background, whimsical green cacti dot the landscape, contrasting with the playful pink hues of the sand. The atmosphere is bright and surreal, filled with an inviting warmth that reflects her adventurous spirit. The sky seamlessly transitions from pastel pink to a deep blue, embodying a dreamlike quality as sunlight casts soft shadows across the terrain.
```

- **Sample `a74b1863-4d6f-4c00-8ae1-bb618871841e`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/159b74b6-594b-4f27-8fa0-7848338ef744.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/331b6df3-db70-4b5d-b2d8-4b09588f9339.mp4
  - page: https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa/a74b1863-4d6f-4c00-8ae1-bb618871841e

```text
camera zoom out showing her singing a song on night street
```

- **Sample `1b0be4ec-8c7a-4c0a-b631-62abc2b81e89`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5eccd276-7e84-4d93-85a2-302a6564fe71.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/55dcd345-0bf7-4feb-916d-1000129614fc.mp4
  - page: https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa/1b0be4ec-8c7a-4c0a-b631-62abc2b81e89

```text
The camera zooms out, revealing the artist, dressed in a bright yellow puffer jacket and goggles, aggressive emotion etched on his face as he passionately raps an energetic song. The backdrop pulses with vibrant graffiti, alive in hues of blue and orange, while towering speakers dominate the space, emanating an electrifying bass. Wisps of fog swirl around, amplifying the intensity of the performance, creating a charged atmosphere. Bright, dynamic lights flicker, reflecting the raw energy of the moment, capturing the audience's attention with their rhythmic bursts. There’s a palpable tension, the relentless beat matching the fierce expression, immersing viewers in this explosive musical experience.
```

- **Sample `f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ac8a7bd3-fa9d-434b-aec3-4ae1e7456d63.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d16d7688-1bd1-45b5-86f7-9d11ba848d65.mp4
  - page: https://higgsfield.ai/motion/f9e6792f-b385-4eca-87f6-f439e917a7aa/f8d64eef-a473-4b51-9bab-7ebbcb8bb4bd

```text
A young man stands confidently on the roof of a skyscraper, wearing a striking neon green bomber jacket embellished with an intricate dragon design. The warm glow of the setting sun casts a golden light over the urban landscape, accentuating the glass facades of the skyscrapers surrounding him. As the camera gradually zooms out, the expansive cityscape reveals itself, showcasing the bustling streets below and the vast horizon beyond. His expression reflects a mix of defiance and introspection, embodying the spirit of ambition and youth. The vibrant colors and dramatic lighting create an electrifying atmosphere, resonating with the beat of city life.
```
