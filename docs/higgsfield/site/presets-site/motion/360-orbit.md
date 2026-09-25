# 360 Orbit — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** product ad
- **What it does (site description, verbatim):** The camera smoothly circles all the way around the subject, creating a dynamic, immersive view. Perfect for dramatic reveals, showcasing outfits, or adding visual energy.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c | `866a58b8-46e2-4a09-bcd8-1aaaa489730c` | 91 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=866a58b8-46e2-4a09-bcd8-1aaaa489730c |
| https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4 | `d7c180bc-793c-4d29-83ba-c2d5e84e53d4` | -233 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d7c180bc-793c-4d29-83ba-c2d5e84e53d4 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A model in a flowing emerald gown stands in a white studio; the camera circles fully around her, fabric catching the light.
```

Use it as: upload a start image that matches the scene, select motion preset **360 Orbit**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Full circle around the subject · **Best use:** Emotional isolation, dramatic emphasis, dance · **Models:** Kling 2.6 / 3.0 · **Phrase/template:** "360 Orbit around the boxer in the ring" · "Camera: 360 Orbit tightening toward her as movement intensifies." · precise: "Camera orbits 270 degrees counterclockwise around subject over 5 seconds. Maintain constant 8-foot distance… Speed: 54 degrees per second." · **Tips:** Reliable phrase: "smooth 180-degree orbit at eye level, constant distance." See [orbit-360](viral/orbit-360.md) and recipe [product-spin](recipes/product-spin.md).

## Related presets

- **Same category (Camera · orbit & rotation):** [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Bullet Time](bullet-time.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fa369a2c-50e1-4930-a851-01a99352b6ac.webp (320×424)
- Card preview, variant `d7c180bc`: https://d1xarpci4ikg0w.cloudfront.net/e826fd3e-43c7-4304-8138-4c7ea70a3feb.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f | https://static.higgsfield.ai/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f.mp4 | https://static.higgsfield.ai/7f4b10b4-c01b-482a-b43f-99fe4eca0a9f.webp | https://d1xarpci4ikg0w.cloudfront.net/222432d7-78ff-44ec-9ced-12653b12fae7.webp (320×180) |
| 2 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/15cc174f-348c-430f-9395-5cb0fae95da6 | https://static.higgsfield.ai/15cc174f-348c-430f-9395-5cb0fae95da6.mp4 | https://static.higgsfield.ai/15cc174f-348c-430f-9395-5cb0fae95da6.webp | https://d1xarpci4ikg0w.cloudfront.net/9360f9f0-e0a8-4f1f-b062-5d89fffbe7f9.webp (320×320) |
| 3 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/33943184-c234-4f4b-8d18-2d1cd00731d3 | https://static.higgsfield.ai/33943184-c234-4f4b-8d18-2d1cd00731d3.mp4 | https://static.higgsfield.ai/33943184-c234-4f4b-8d18-2d1cd00731d3.webp | https://d1xarpci4ikg0w.cloudfront.net/b4c328da-b209-4164-80c3-c25fdcf50bc0.webp (320×320) |
| 4 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/b9be742b-6038-4637-ba20-0a9d68563d66 | https://static.higgsfield.ai/b9be742b-6038-4637-ba20-0a9d68563d66.mp4 | https://static.higgsfield.ai/b9be742b-6038-4637-ba20-0a9d68563d66.webp | https://d1xarpci4ikg0w.cloudfront.net/a7caeb2b-409b-4c6b-88e2-240a65720f53.webp (320×242) |
| 5 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/b68804af-c9c4-4e89-a768-7bbb38342504 | https://static.higgsfield.ai/b68804af-c9c4-4e89-a768-7bbb38342504.mp4 | https://static.higgsfield.ai/b68804af-c9c4-4e89-a768-7bbb38342504.webp | https://d1xarpci4ikg0w.cloudfront.net/1ee79c59-9b4c-4be7-bc69-b8196d4d8a0c.webp (320×424) |
| 6 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/3620f33d-589a-4e1c-9a7a-b89f92076013 | https://static.higgsfield.ai/3620f33d-589a-4e1c-9a7a-b89f92076013.mp4 | https://static.higgsfield.ai/3620f33d-589a-4e1c-9a7a-b89f92076013.webp | https://d1xarpci4ikg0w.cloudfront.net/2aa9c9c6-4379-4c1f-a384-14a5cdbb0c44.webp (320×182) |
| 7 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/c7138a1d-933a-4533-93f5-f4de86cf933d | https://static.higgsfield.ai/c7138a1d-933a-4533-93f5-f4de86cf933d.mp4 | https://static.higgsfield.ai/c7138a1d-933a-4533-93f5-f4de86cf933d.webp | https://d1xarpci4ikg0w.cloudfront.net/fd2b5ec5-189b-4b73-8ba6-fd1411401e50.webp (320×424) |
| 8 | https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec | https://static.higgsfield.ai/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec.mp4 | https://static.higgsfield.ai/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec.webp | https://d1xarpci4ikg0w.cloudfront.net/e8eea1f7-866d-409d-ac52-c305efb2ae87.webp (320×424) |

Source pages: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c, https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4. Crawled 2026-09.


## Real sample prompts (site)

6 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `4eaf38d6-1ce5-4eac-a284-78b3ebe459ec`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/558b2558-fee3-4354-9269-e058dd933051.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ae12a51d-e571-4eb5-af89-66ba14c8115e.mp4
  - page: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/4eaf38d6-1ce5-4eac-a284-78b3ebe459ec

```text
The camera orbits smoothly in a 360-degree motion around two figures standing still in a white void. One is clad in a white cloak with a luminous Omega symbol, exuding a calm and otherworldly presence, while the other, dressed in a skin-tight suit adorned with a swirling galaxy, suggests a connection to the cosmos. The atmosphere is thick with ethereal fog, lending an enigmatic quality to the scene. With each rotation, the interplay of light reflects off their distinct textures, creating highlights that accentuate their contrasting forms. A sense of tension builds as the viewer witnesses the silent communication between the two, leaving a lingering aura of mystery in this surreal environment.
```

- **Sample `c7138a1d-933a-4533-93f5-f4de86cf933d`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/216f5aa2-f48f-4816-a042-0ae5bca9d5e1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/809afda4-5dcb-46a0-b2fb-9aea6d601bb7.mp4
  - page: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/c7138a1d-933a-4533-93f5-f4de86cf933d

```text
camera making a fast smooth 360 degree orbit around her head as she opens her beautiful blue eyes 
```

- **Sample `b68804af-c9c4-4e89-a768-7bbb38342504`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/34928a59-2b07-46be-b800-643e01a28e52.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4307351e-8799-4093-b8b9-e04d1ff66454.mp4
  - page: https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4/b68804af-c9c4-4e89-a768-7bbb38342504

```text
A man stands confidently with his arms crossed, wearing a vibrant red athletic jacket adorned with white stripes, juxtaposed against a backdrop of colorful graffiti. As the camera executes a smooth 360-degree orbit around him, his piercing gaze reveals an unwavering resolve and strength. The urban environment buzzes with energy, casting dynamic shadows that dance along his figure, while the bright colors of the graffiti create an intriguing contrast to his solemn expression. With each pass, the lighting shifts, accentuating the texture of his jacket and the depth in his eyes, capturing the tension between tradition and modernity.
```

- **Sample `b9be742b-6038-4637-ba20-0a9d68563d66`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eba4f21c-77f2-405c-a67b-3ed21219bcb7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0299ff01-88e9-4647-b2fd-7363d9ae3956.mp4
  - page: https://higgsfield.ai/motion/d7c180bc-793c-4d29-83ba-c2d5e84e53d4/b9be742b-6038-4637-ba20-0a9d68563d66

```text
Camera orbits 360° around the man, maintaining a close-medium shot. As it circles, shadows from the neon light shift across his face and body, revealing the tense veins in his arm, the glint of metal, and subtle movement in his expression — resolve wavering into vulnerability. Posters blur and reappear behind him, frozen moments of cultural icons. The room feels heavy, timeless.
```

- **Sample `33943184-c234-4f4b-8d18-2d1cd00731d3`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d5de7e7a-c704-40c6-836d-6a3bd57ebaf6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f75ee5d8-3648-453c-a5c0-081c00aa193f.mp4
  - page: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/33943184-c234-4f4b-8d18-2d1cd00731d3

```text
A barefoot young woman in a yellow blouse and navy skirt walks slowly along a seaside stone ledge at golden hour. She holds her sandals loosely in one hand, the breeze gently tousling her hair. The camera orbits around her in a smooth 360-degree motion, capturing her serene expression and the soft, rippling sea to her left. Distant mountains rise behind the ocean under a dreamy orange-pink sky. The mood is contemplative, with subtle film grain and nostalgic warmth. 
```

- **Sample `15cc174f-348c-430f-9395-5cb0fae95da6`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/56584a5b-5ccd-4b32-afa8-feec47dae60f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0e05ff21-8fb1-403c-9a86-6136a62ee4e2.mp4
  - page: https://higgsfield.ai/motion/866a58b8-46e2-4a09-bcd8-1aaaa489730c/15cc174f-348c-430f-9395-5cb0fae95da6

```text
360 orbit shot around a old woman with platinum curls and heart-shaped red sunglasses, seated alone on a dimly lit subway train. She lights a cigarette with a wooden match as she reads a paperback book on her lap. The camera smoothly circles her, capturing flickers of flame and her composed expression from all angles. Fluorescent lights streak in the background, blending warm firelight with cool subway tones. The smoke curls upward as the orbit completes.
```
