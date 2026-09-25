# Skin Surge — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Objects like hands, flowers, or surreal forms emerge smoothly from the subject’s skin, as if breaking through a living surface. Organic, eerie, or poetic—perfect for fantasy, horror, or dreamlike visuals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520 | `a03dfa10-3e92-43ed-a76a-fe9ba1395520` | 67 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a03dfa10-3e92-43ed-a76a-fe9ba1395520 |
| https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b | `aae6a422-fee1-4b89-ac7a-aea5d484fc1b` | -195 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=aae6a422-fee1-4b89-ac7a-aea5d484fc1b |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Flowers and pale hands push out from the skin of a woman's shoulder like breaking through a surface.
```

Use it as: upload a start image that matches the scene, select motion preset **Skin Surge**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fc49afef-b245-48c0-91c6-7f5eced0f7ef.webp (320×182)
- Card preview, variant `aae6a422`: https://d1xarpci4ikg0w.cloudfront.net/b8046c9f-3a5b-4b13-a3c4-9595f0f6a7c6.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/386a1ad7-6a7b-4732-85a3-d107c9e0808f | https://static.higgsfield.ai/386a1ad7-6a7b-4732-85a3-d107c9e0808f.mp4 | https://static.higgsfield.ai/386a1ad7-6a7b-4732-85a3-d107c9e0808f.webp | https://d1xarpci4ikg0w.cloudfront.net/66b1a002-88c8-48d8-a0a1-de778501699f.webp (320×320) |
| 2 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/14bd9968-2298-4e8c-92a4-e4ae473ff885 | https://static.higgsfield.ai/14bd9968-2298-4e8c-92a4-e4ae473ff885.mp4 | https://static.higgsfield.ai/14bd9968-2298-4e8c-92a4-e4ae473ff885.webp | https://d1xarpci4ikg0w.cloudfront.net/409a7ea3-f082-48b1-ac0b-07643d77fc21.webp (320×320) |
| 3 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/1f700c0c-f5f8-4190-96a0-86bb17f231cc | https://static.higgsfield.ai/1f700c0c-f5f8-4190-96a0-86bb17f231cc.mp4 | https://static.higgsfield.ai/1f700c0c-f5f8-4190-96a0-86bb17f231cc.webp | https://d1xarpci4ikg0w.cloudfront.net/006c8ffd-2d30-44e1-b167-6ea333b36e7f.webp (320×210) |
| 4 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/147eb75d-c077-4f9d-b0da-20858093668f | https://static.higgsfield.ai/147eb75d-c077-4f9d-b0da-20858093668f.mp4 | https://static.higgsfield.ai/147eb75d-c077-4f9d-b0da-20858093668f.webp | https://d1xarpci4ikg0w.cloudfront.net/ad59b23c-cbd1-459a-a44f-86e8d23e63d8.webp (320×320) |
| 5 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/9a100037-b7fb-44ac-85a4-aaf098461e99 | https://static.higgsfield.ai/9a100037-b7fb-44ac-85a4-aaf098461e99.mp4 | https://static.higgsfield.ai/9a100037-b7fb-44ac-85a4-aaf098461e99.webp | https://d1xarpci4ikg0w.cloudfront.net/e88e32f2-d4d2-41b1-907e-6e8811719cf0.webp (320×320) |
| 6 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/05b016fc-e7f9-4d4f-887c-a66593c3e08f | https://static.higgsfield.ai/05b016fc-e7f9-4d4f-887c-a66593c3e08f.mp4 | https://static.higgsfield.ai/05b016fc-e7f9-4d4f-887c-a66593c3e08f.webp | https://d1xarpci4ikg0w.cloudfront.net/0afdc24a-fdab-4e8d-ab7c-749e19832897.webp (320×182) |
| 7 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60 | https://static.higgsfield.ai/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60.mp4 | https://static.higgsfield.ai/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60.webp | https://d1xarpci4ikg0w.cloudfront.net/c26098d8-4c36-4a00-b76b-a90ce83e00bc.webp (320×210) |
| 8 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/819c5031-e83a-4dd8-89b6-0203d7d60eb8 | https://static.higgsfield.ai/819c5031-e83a-4dd8-89b6-0203d7d60eb8.mp4 | https://static.higgsfield.ai/819c5031-e83a-4dd8-89b6-0203d7d60eb8.webp | https://d1xarpci4ikg0w.cloudfront.net/b1011162-c3e5-4ea6-b19b-eb893674cdb9.webp (320×486) |
| 9 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/0dd88cc0-475c-498b-a4e6-16cdedb5c475 | https://static.higgsfield.ai/0dd88cc0-475c-498b-a4e6-16cdedb5c475.mp4 | https://static.higgsfield.ai/0dd88cc0-475c-498b-a4e6-16cdedb5c475.webp | https://d1xarpci4ikg0w.cloudfront.net/bc38792d-4437-499b-92c6-f1739d61904b.webp (320×242) |
| 10 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/36558f58-f7e6-4237-97c0-d172ad54e6e3 | https://static.higgsfield.ai/36558f58-f7e6-4237-97c0-d172ad54e6e3.mp4 | https://static.higgsfield.ai/36558f58-f7e6-4237-97c0-d172ad54e6e3.webp | https://d1xarpci4ikg0w.cloudfront.net/201a8190-bf22-4005-8f0b-7500db12473a.webp (320×242) |
| 11 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/fa27070e-c61e-4c02-9c86-faf35297c798 | https://static.higgsfield.ai/fa27070e-c61e-4c02-9c86-faf35297c798.mp4 | https://static.higgsfield.ai/fa27070e-c61e-4c02-9c86-faf35297c798.webp | https://d1xarpci4ikg0w.cloudfront.net/1d60cbc5-5761-4420-bb64-eb9682903556.webp (320×404) |
| 12 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4 | https://static.higgsfield.ai/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4.mp4 | https://static.higgsfield.ai/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4.webp | https://d1xarpci4ikg0w.cloudfront.net/a87179aa-7832-4565-ad4e-4daf131b54fb.webp (320×180) |
| 13 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/ab39fead-12ee-415e-865b-793ce65d35d3 | https://static.higgsfield.ai/ab39fead-12ee-415e-865b-793ce65d35d3.mp4 | https://static.higgsfield.ai/ab39fead-12ee-415e-865b-793ce65d35d3.webp | https://d1xarpci4ikg0w.cloudfront.net/02b52b43-c285-44d6-b85d-02cfa9c668dc.webp (320×320) |
| 14 | https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/00334ae0-20bf-4713-b945-d0ce6de1aa71 | https://static.higgsfield.ai/00334ae0-20bf-4713-b945-d0ce6de1aa71.mp4 | https://static.higgsfield.ai/00334ae0-20bf-4713-b945-d0ce6de1aa71.webp | https://d1xarpci4ikg0w.cloudfront.net/fcdf6911-61a9-4432-8e0e-3281c2fa4b03.webp (320×486) |

Source pages: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520, https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b. Crawled 2026-09.


## Real sample prompts (site)

14 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `00334ae0-20bf-4713-b945-d0ce6de1aa71`** (priority 14) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/68691806-a538-4ec8-a9a5-6d503a0334ae.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/65b0243c-30dc-471f-8539-b21f6c02b18c.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/00334ae0-20bf-4713-b945-d0ce6de1aa71

```text
A young man in a beige corduroy jacket leaning against a wall at sunset, captured in a cinematic close-up with warm golden-hour lighting. His intense gaze pierces the lens, while from his cheeks, nose, and forehead, surreal elongated human fingers begin to rapidly emerge, curling outward unnaturally but seamlessly, as if his skin were morphing into something else. The background blurs softly with city rooftops and water, enhancing the eerie yet polished sci-fi atmosphere. The tone is both beautiful and unsettling, with a touch of dreamlike body horror, extremely realistic lighting and facial textures.

```

- **Sample `ab39fead-12ee-415e-865b-793ce65d35d3`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/59246f22-9b7a-4680-8207-980dec94f14f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5c9556d5-e327-4d83-9163-8f3c8de236e9.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/ab39fead-12ee-415e-865b-793ce65d35d3

```text
A mid-shot of a serious young woman standing in a subway train, gripping the metal handrail above her head. She wears a translucent raincoat over a blue shirt, with cool artificial lighting casting reflections off the plastic. Suddenly, long slender human fingers begin rapidly pushing out from her cheeks, nose, and under her eyes, stretching the skin unnaturally. Her expression remains tense and controlled, contrasting the surreal horror of the transformation. The setting is realistic, with cinematic detail, smooth color grading, and sharp focus on the face and emerging fingers.

```

- **Sample `adf03d91-6d2c-49c8-8e6d-d86dfb58dac4`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8956624c-ef40-4421-9a22-29464d32c5dd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/30fe2a2f-c7c4-4510-8c5c-c2b12fed322c.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/adf03d91-6d2c-49c8-8e6d-d86dfb58dac4

```text
A dramatic low-angle shot of a young man standing in the rain in front of a car with glowing headlights, his face tense with fear. Suddenly, long human fingers rapidly emerge from his cheeks, nose, and around his eyes, stretching outward unnaturally as if something inside is trying to break free. The atmosphere is surreal and nightmarish, with cinematic lighting reflecting off his wet coat. The background is slightly blurred, emphasizing the grotesque transformation as the camera captures every detail with sharp focus and shallow depth of field.
```

- **Sample `fa27070e-c61e-4c02-9c86-faf35297c798`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 848×1072
  - input image: https://d1xarpci4ikg0w.cloudfront.net/216679ab-6482-4779-b1f8-856a9bc53f78.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9aaa7785-9452-42ab-87aa-6818303ae00e.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/fa27070e-c61e-4c02-9c86-faf35297c798

```text
A man stands confidently in front of the camera, framed in a centered medium shot at eye level with soft studio lighting. Suddenly, long, fleshy human fingers begin to rapidly extend from his cheeks, nose, and eye sockets, curling and twitching naturally but with hyper-realistic textures and lighting. The mood is tense and stylish, mixing high fashion editorial with unsettling body horror.
```

- **Sample `36558f58-f7e6-4237-97c0-d172ad54e6e3`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f73a6ef3-7e8c-4b90-8ee2-dfb63f835340.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8a02c1eb-c440-4669-994e-d2bbdffafaac.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/36558f58-f7e6-4237-97c0-d172ad54e6e3

```text
A young man in a black turtleneck and gold chain stands confidently in front of red velvet curtains, framed in a centered, eye-level medium shot with soft studio lighting. Suddenly, long, fleshy human fingers begin to rapidly grow out of his cheeks, nose, and eye sockets, curling and twitching unnaturally yet with hyper-realistic textures and lighting. The polished mid-century modern furniture in the background contrasts sharply with the surreal and disturbing transformation. The mood is tense and stylish, blending high fashion editorial with unsettling body horror.
```

- **Sample `0dd88cc0-475c-498b-a4e6-16cdedb5c475`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5c120ff3-8ee3-4241-8f2a-57b9a16f6286.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c2a20978-8bf9-49db-853d-0403f039111f.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/0dd88cc0-475c-498b-a4e6-16cdedb5c475

```text
A mysterious woman stands in a futuristic, pale-toned tunnel bathed in soft diffused light. She wears a flowing beige robe with a hood, her gaze calm and direct. Suddenly, human-sized fingers begin rapidly protruding from her eyes, nostrils, and cheeks, stretching outward as if pushing through from inside her skull. The transformation is surreal and unsettling, yet the environment remains pristine and calm, intensifying the visual contrast.
```

- **Sample `819c5031-e83a-4dd8-89b6-0203d7d60eb8`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7a4f0c14-7624-48dc-9f9a-b0601a7cdff4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/19d94ecd-492c-4f3a-b043-3748c24aa3d6.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/819c5031-e83a-4dd8-89b6-0203d7d60eb8

```text
A close-up of a man's face, with an expression of worry and fear, under harsh golden lighting. From his face - particularly from his eyes, nostrils and the corner of his mouth - emerge very large fleshy worms, thick and sinewy. The worms naturally emerge from his skin as they push out, creating visible lumps and slightly tearing the skin as they emerge. The background is a soft yellow-orange wash that contrasts with the grotesque organic horror unfolding on his face, heightening the unsettling tension of the scene.
```

- **Sample `caf3cfce-92ef-4fd6-a2c4-50677ecc9b60`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/038325da-b2bc-4f26-a355-1150be744bfb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d77da8d0-3c25-4ba4-98d1-80e1c484be74.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/caf3cfce-92ef-4fd6-a2c4-50677ecc9b60

```text
Extreme close-up of a sweaty man under warm, golden stadium lighting, captured with cinematic intensity and shallow depth of field. His eyes are wide open, fixed directly at the camera, sweat dripping from his forehead. From his eyes, nostrils, and slightly opened mouth, five oversized human fingers slowly begin to emerge — glossy, fleshy, and unnaturally large — pushing outward as if someone is trying to escape from inside his body. The atmosphere is surreal and grotesque, blending psychological horror with physical body distortion, inspired by high-definition horror visuals and uncanny anatomical mutations.
```

- **Sample `05b016fc-e7f9-4d4f-887c-a66593c3e08f`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/17ebd460-8093-41b6-9df9-1d8583dd593c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3cd91c8c-cda6-498d-a52a-596e8a8b86e3.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/05b016fc-e7f9-4d4f-887c-a66593c3e08f

```text

A static shot focuses on a woman, her face partially turned toward the camera, revealing her striking features and large gold hoop earrings. The soft, warm light creates a dramatic contrast against the background of blurred, vivid colors, highlighting the smooth texture of her skin. Slowly, sharp, metallic spikes begin to emerge across her face, growing from her skin in chaotic patterns. The spikes extend outward, varying in length and direction, as they create an unsettling transformation. The camera lingers on her expression, capturing the slow, deliberate emergence of the spikes with a shallow depth of field, emphasizing the disturbing yet beautiful details. The atmosphere is tense and surreal, with the warm lighting enhancing the eerie transformation. The visual style is cinematic, high-contrast, with soft bokeh in the background, highlighting the woman's enigmatic transformation.

```

- **Sample `9a100037-b7fb-44ac-85a4-aaf098461e99`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c9b70ca5-b6ed-4c32-8720-106c56dcedc5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e5916c9e-92b2-4cb5-9ccb-4d0ccad9d737.mp4
  - page: https://higgsfield.ai/motion/a03dfa10-3e92-43ed-a76a-fe9ba1395520/9a100037-b7fb-44ac-85a4-aaf098461e99

```text
A static shot captures a haunting, close-up of a woman's face, partially obscured by a black, grid-patterned veil, with glowing blue eyes locked in a deep, almost surreal stare. The dramatic lighting casts shadows, making the grid appear as if it's embedded into her skin. As the scene unfolds, dozens of long metallic nails begin to emerge from her face, slowly extending outward in sharp, chaotic formations, creating a surreal and unsettling visual. The nails vary in size and direction, some jagged, others sleek, adding to the disturbing atmosphere. The mood is eerie, with cold, clinical lighting accentuating the smooth texture of her skin against the harsh, angular shapes of the protruding nails. The camera remains focused on her face in extreme close-up, highlighting the growing chaos of the nails with a shallow depth of field, capturing every intricate detail. The overall atmosphere is tense and surreal, evoking a sense of quiet dread. The styling is avant-garde, featuring an abstract, almost cyberpunk aesthetic with high-contrast lighting, geometric patterns, and unsettling beauty.


```

- **Sample `147eb75d-c077-4f9d-b0da-20858093668f`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0f94eb91-036d-49db-a128-62ed278e2a6b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7f7f31ca-e508-4887-968c-1048df4de4da.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/147eb75d-c077-4f9d-b0da-20858093668f

```text
A static shot captures a woman standing in the dark, deep forest, her face softly illuminated by a faint, ethereal light. The atmosphere remains shadowy and mysterious, with the forest background fading into darkness. As the scene progresses, rough, branched antlers, like those of a deer, begin to grow from her forehead. These antlers are made of mineral-like crystals, with sharp, jagged edges that reflect the minimal light, giving them a raw, unrefined, and earthy appearance. The branches of the antlers twist and extend in intricate, organic patterns, much like the natural growth of tree limbs. The camera focuses on her face, capturing the slow emergence of the antlers, their crystalline surfaces shimmering faintly in the dark. The atmosphere is one of quiet awe and eerie calm, as the rough, mineral-like antlers contrast with her serene expression. The visual style is dark and cinematic, with minimal light and high contrast to emphasize the raw beauty and otherworldly nature of the growing antlers.
```

- **Sample `1f700c0c-f5f8-4190-96a0-86bb17f231cc`** (priority 3) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=7, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5020f55e-f064-432a-9a78-5eea3282cee9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f07636a6-2361-4dc3-bb75-aa02777f90de.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/1f700c0c-f5f8-4190-96a0-86bb17f231cc

```text
A static shot focuses on a woman lying on her back, her gaze fixed directly at the camera with a serene expression. She is surrounded by a soft layer of snow-like substance that enhances the otherworldly feel of the scene. As the scene progresses, ice-cold icicles begin to emerge from her face. These icicles, formed entirely from crystal-clear ice, slowly push outward from her skin, growing from her cheeks and forehead. The icicles glisten with a frosty sheen, their jagged, translucent edges giving them an eerie, unnatural appearance. They stretch and grow, extending outward in slow, deliberate movements, their chilling surfaces catching the light with an almost magical glow. The camera focuses closely on her face as these frozen formations continue to emerge, the stark contrast between the warmth of her skin and the cold, crystalline icicles heightening the surreal atmosphere. The background remains soft and ethereal, with the icy icicles gradually taking over her features, creating a haunting yet beautiful transformation. The visual style is cinematic, emphasizing the delicate, chilling growth of the icicles and their surreal emergence from her skin.

```

- **Sample `14bd9968-2298-4e8c-92a4-e4ae473ff885`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/74d37193-5dbb-49d4-bb92-26052a9c6064.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0fb17fc5-21bf-45f0-8a74-2b6ddb46ec04.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/14bd9968-2298-4e8c-92a4-e4ae473ff885

```text
The scene begins with a static close-up shot of a woman dressed in a red sweater with a gleaming golden sequin choker. Her expression is calm and serene, her gaze slightly off-center. As the camera lingers on her face, something unusual starts to unfold. From beneath her skin, large, bright burnt-red centipedes begin to emerge. Their massive, segmented bodies slowly push outward, breaking through the smooth surface of her cheeks, forehead, and along the jawline. The centipedes' movement is slow yet deliberate, their jagged, sharp legs pushing through her skin as if escaping from deep within. The shiny, translucent texture of their bodies catches the light, contrasting sharply with the warmth of her skin. As they crawl from under her flesh, their massive forms slither and twist, their size and grotesque beauty taking center stage. They continue to emerge, crawling and wriggling across her face, with more centipedes pushing through the skin in slow, steady motions. The background remains softly blurred, intensifying the surreal, unsettling transformation. The visual style is cinematic, focusing on the chilling yet mesmerizing appearance of the centipedes as they break free from her skin, creating a striking and eerie spectacle.
```

- **Sample `386a1ad7-6a7b-4732-85a3-d107c9e0808f`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=7, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/51b17b9f-8462-4a4c-80ab-a503e248d27c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7f7051da-8663-4bd3-b1dc-f0ed57c28d44.mp4
  - page: https://higgsfield.ai/motion/aae6a422-fee1-4b89-ac7a-aea5d484fc1b/386a1ad7-6a7b-4732-85a3-d107c9e0808f

```text
A static shot focuses on a woman dressed in a vibrant neon green outfit, her braided hair framing her face as she gazes confidently at the camera. The soft, luxurious light from a chandelier casts a warm glow around her, accentuating her sharp features and the shimmer of her earrings. Beneath the smooth surface of her skin, wide, neon-green snakes begin to slither, their outlines visibly moving under her skin. The snakes occasionally push outward, their shimmering, glittering scales peeking through her skin, revealing a disturbing yet captivating transformation. At the same time, her hair begins to change—snakes, just as vibrant and iridescent, crawl from her scalp, replacing her braids and transforming them into a serpentine, Medusa-like hairstyle. These snakes twist and coil around her head, their bright green bodies contrasting against her dark skin and the opulent setting. As the transformation unfolds, one snake slithers down her neck, wrapping around it gently and adding an eerie, almost sensual touch to the scene. The camera remains focused on her face, capturing the eerie, yet mesmerizing, transformation. The atmosphere is surreal and unsettling, with the vibrant, neon colors of the snakes against her skin creating an uncanny contrast to the elegant surroundings. The visual style is cinematic, with vivid contrasts and a focus on high detail, emphasizing the bizarre beauty of the moment.

```
