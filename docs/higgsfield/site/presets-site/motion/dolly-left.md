# Dolly Left — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera smoothly to the left, following or revealing the scene. Perfect for tracking shots, transitions, or adding visual interest.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab | `36186f21-e20f-479f-a7b9-f7f12354a4ab` | 79 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=36186f21-e20f-479f-a7b9-f7f12354a4ab |
| https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba | `b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba` | -167 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A runner jogs along a seaside promenade at golden hour; the camera tracks left alongside her, palm trees sliding past in the foreground.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Left**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Lateral track to the left · **Best use:** Following horizontal movement, revealing the scene · **Models:** — · **Phrase/template:** "Camera Dolly Left tracking alongside the runner" · **Tips:** Also called Truck Left

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/1c764a1c-0454-4a6d-83c3-cf0c5eedbe50.webp (320×244)
- Card preview, variant `b03fa9e3`: https://d1xarpci4ikg0w.cloudfront.net/8a30693b-47dd-4b72-bf62-5526e7e4823c.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/dc61d9cb-fec2-4380-99ea-b62e00af079f | https://static.higgsfield.ai/dc61d9cb-fec2-4380-99ea-b62e00af079f.mp4 | https://static.higgsfield.ai/dc61d9cb-fec2-4380-99ea-b62e00af079f.webp | https://d1xarpci4ikg0w.cloudfront.net/0f7e10bd-2263-4d42-8f5a-07f6cd102875.webp (320×182) |
| 2 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/3a4ba17c-48a5-4a20-863e-93599239066b | https://static.higgsfield.ai/3a4ba17c-48a5-4a20-863e-93599239066b.mp4 | https://static.higgsfield.ai/3a4ba17c-48a5-4a20-863e-93599239066b.webp | https://d1xarpci4ikg0w.cloudfront.net/f987677a-a479-48de-beb3-56959672d49d.webp (320×182) |
| 3 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/d06416b7-751f-426b-8f65-313fb9a4c690 | https://static.higgsfield.ai/d06416b7-751f-426b-8f65-313fb9a4c690.mp4 | https://static.higgsfield.ai/d06416b7-751f-426b-8f65-313fb9a4c690.webp | https://d1xarpci4ikg0w.cloudfront.net/ad5c1362-81ff-4cea-81f4-13226982cbd3.webp (320×486) |
| 4 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/265484cf-a1ad-408a-8b8d-e59e4a818f21 | https://static.higgsfield.ai/265484cf-a1ad-408a-8b8d-e59e4a818f21.mp4 | https://static.higgsfield.ai/265484cf-a1ad-408a-8b8d-e59e4a818f21.webp | https://d1xarpci4ikg0w.cloudfront.net/13f41558-9013-4805-9ab4-374eccd0d19c.webp (320×210) |
| 5 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/52d84f61-e6ce-4290-a177-95d1119ada3a | https://static.higgsfield.ai/52d84f61-e6ce-4290-a177-95d1119ada3a.mp4 | https://static.higgsfield.ai/52d84f61-e6ce-4290-a177-95d1119ada3a.webp | https://d1xarpci4ikg0w.cloudfront.net/b4beac8a-d858-4eca-921c-acefdadb3318.webp (320×182) |
| 6 | https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/00ee75e4-6abc-484c-8ef9-1300789c5f09 | https://static.higgsfield.ai/00ee75e4-6abc-484c-8ef9-1300789c5f09.mp4 | https://static.higgsfield.ai/00ee75e4-6abc-484c-8ef9-1300789c5f09.webp | https://d1xarpci4ikg0w.cloudfront.net/248151b0-bf22-4348-bafa-377e0beee6be.webp (320×424) |

Source pages: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab, https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba. Crawled 2026-09.


## Real sample prompts (site)

6 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `00ee75e4-6abc-484c-8ef9-1300789c5f09`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b109782b-62d3-418d-868e-7dfd56227e85.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6c697b87-6198-473b-9308-e6c0285bd496.mp4
  - page: https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba/00ee75e4-6abc-484c-8ef9-1300789c5f09

```text
A dramatic black-and-white animation of an older man standing solemnly in a narrow, dimly lit hallway, his shadow long against the wall beneath a single overhead light. The camera begins a slow dolly left movement, gliding past the man’s contemplative expression. As the frame shifts, it gradually reveals a 10-year-old version of the man standing a few steps away—dressed in a crisp Japanese school uniform, mirroring the elder’s posture and gaze. The lighting remains stark, casting dual shadows that stretch toward each other. A soft, haunting piano melody plays in the background, underscoring themes of memory, time, and identity. The young and old never speak—but the silence is heavy with meaning.
```

- **Sample `52d84f61-e6ce-4290-a177-95d1119ada3a`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c74c5ca5-8a4b-4a4e-8376-20e244a92def.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d700b48b-9cff-40eb-b8f1-baa0c4653752.mp4
  - page: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/52d84f61-e6ce-4290-a177-95d1119ada3a

```text
A luxurious, cinematic animation begins with a composed woman in a deep red velvet dress, reclining confidently on a vintage leather sofa in a richly decorated room. The lighting is soft and moody, evoking a timeless elegance. The camera begins a slow dolly left movement, gliding past her calm expression. As it moves, the frame expands to reveal a regal Great Dane sitting beside the sofa. The dog wears a thick golden chain around its neck, exuding quiet power and presence. The woman briefly glances toward the dog with a subtle smile. Classical music or a jazzy noir track plays in the background, reinforcing the atmosphere of sophistication and quiet dominance.
```

- **Sample `265484cf-a1ad-408a-8b8d-e59e4a818f21`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/43475360-ff98-425c-a366-8e0d14c683cc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bcd5ad02-ddb8-4d9d-82e9-53528056322b.mp4
  - page: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/265484cf-a1ad-408a-8b8d-e59e4a818f21

```text
camera dollies left as the woman turns left and walks away, natural motion, fast motion
```

- **Sample `d06416b7-751f-426b-8f65-313fb9a4c690`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/06ed5a02-00b0-44e8-843b-6a3fc5dd0755.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/781968f1-abf7-406e-97ab-37ddd82161d2.mp4
  - page: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/d06416b7-751f-426b-8f65-313fb9a4c690

```text
Salvador Dali leans intently over his canvas, his posture poised and deliberate, a slender paintbrush held delicately between his fingers. The camera dollies left, revealing a softly lit artist's studio, where shadows dance across the wooden easel and the textured surface of the canvas. The atmosphere is charged with creativity, each brushstroke whispering tales of surreal dreams and vibrant emotions. Dali’s carefully groomed mustache curves sharply, accentuating the intense concentration etched on his face. Warm, muted colors envelop the scene, evoking a sense of nostalgia and reverence for the creative process. As the brush glides across the canvas, a subtle tension builds, reflecting the artist's inner world of imagination and innovation.
```

- **Sample `3a4ba17c-48a5-4a20-863e-93599239066b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4d8fb26e-0be1-45db-9e6c-41daf8cefe25.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a2d7fc7f-e849-4e2e-8213-59faa10202f0.mp4
  - page: https://higgsfield.ai/motion/36186f21-e20f-479f-a7b9-f7f12354a4ab/3a4ba17c-48a5-4a20-863e-93599239066b

```text
A man walks steadily down the street, his posture relaxed yet purposeful, underscored by a serene expression that hints at introspection. The warm, golden light of sunset envelops the scene, casting long shadows and creating a quiet atmosphere amid the urban sprawl. In the foreground, people rush past in a blur, their movements swift and chaotic, heightening the man's stillness and solitude. The warm glow illuminates the textures of the buildings beyond him, enhancing the sense of a bustling world moving at a different pace. As he walks, the play of light and shadow accentuates the contrast between his calm demeanor and the blurred lives of those around him.
```

- **Sample `dc61d9cb-fec2-4380-99ea-b62e00af079f`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2d689657-b323-4893-9d15-ec38dcf56be9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e2141d6e-a9a1-440b-92f0-2ffdc9f37bd1.mp4
  - page: https://higgsfield.ai/motion/b03fa9e3-8e69-4fa2-bcc2-b18e362f9fba/dc61d9cb-fec2-4380-99ea-b62e00af079f

```text
A wide shot of a man in vintage clothing walking toward a crumbling building in the middle of a sun-scorched desert. The camera begins a smooth dolly movement to the left, slowly revealing the parched landscape around him. As the camera glides, a majestic black horse comes into view—standing still just beyond the ruin, framed by the mountains in the distance. The horse's mane flutters gently in the wind, its presence calm yet powerful. Dust swirls lightly around its hooves, and the lighting glints off its coat. The man hasn’t noticed it yet, but the moment feels loaded with meaning—like fate has just entered the scene.
```
