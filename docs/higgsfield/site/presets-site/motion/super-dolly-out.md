# Super Dolly Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Smoothly pulls the camera away from the subject, revealing more of the scene. Perfect for dramatic exits, emotional distance, or scene transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd | `9dda3fb8-b917-457a-a995-72233031b1fd` | 61 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9dda3fb8-b917-457a-a995-72233031b1fd |
| https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca | `d66685ce-8c2b-4aeb-8d4a-195d474c7eca` | -193 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d66685ce-8c2b-4aeb-8d4a-195d474c7eca |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A girl in a red coat stands on a rooftop; the camera pulls far back to reveal the entire burning city skyline behind her.
```

Use it as: upload a start image that matches the scene, select motion preset **Super Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Exaggerated fast pull back · **Best use:** Dramatic reveal of scale, sudden context shift · **Models:** Sora 2† (fallback: Seedance 2.0, Hailuo 2.3) · **Phrase/template:** "Super Dolly Out to reveal the entire burning city" · **Tips:** Pairs with the Anamorphic style

## Related presets

- **Mixes that use this preset:** [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md)
- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/80a6a808-2a7d-42b5-b33b-05b49dbaa8e9.webp (320×180)
- Card preview, variant `d66685ce`: https://d1xarpci4ikg0w.cloudfront.net/ee9451aa-da82-4c44-9cb4-f903c88ab800.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/8ead4a81-8efc-44a2-99f4-783fdc1c1331 | https://static.higgsfield.ai/8ead4a81-8efc-44a2-99f4-783fdc1c1331.mp4 | https://static.higgsfield.ai/8ead4a81-8efc-44a2-99f4-783fdc1c1331.webp | https://d1xarpci4ikg0w.cloudfront.net/5af2bca6-6f83-4857-89ce-fe1601768bf7.webp (320×210) |
| 2 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445 | https://static.higgsfield.ai/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445.mp4 | https://static.higgsfield.ai/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445.webp | https://d1xarpci4ikg0w.cloudfront.net/4a4980b7-4fd8-49a5-9ae9-d6dfc40c611e.webp (320×210) |
| 3 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/b9946b17-9b3e-4fd0-8143-37d7b2597d27 | https://static.higgsfield.ai/b9946b17-9b3e-4fd0-8143-37d7b2597d27.mp4 | https://static.higgsfield.ai/b9946b17-9b3e-4fd0-8143-37d7b2597d27.webp | https://d1xarpci4ikg0w.cloudfront.net/f6a037d9-5ad5-4228-b8d4-3512ee7ab554.webp (320×562) |
| 4 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/0cea5fb1-7b8c-474a-a889-cd4985811550 | https://static.higgsfield.ai/0cea5fb1-7b8c-474a-a889-cd4985811550.mp4 | https://static.higgsfield.ai/0cea5fb1-7b8c-474a-a889-cd4985811550.webp | https://d1xarpci4ikg0w.cloudfront.net/6d03fba3-5b7e-4275-b945-cefba8dea420.webp (320×132) |
| 5 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e14fbf8d-2e4c-4724-9efb-2253737dea63 | https://static.higgsfield.ai/e14fbf8d-2e4c-4724-9efb-2253737dea63.mp4 | https://static.higgsfield.ai/e14fbf8d-2e4c-4724-9efb-2253737dea63.webp | https://d1xarpci4ikg0w.cloudfront.net/2aa21dd9-752c-40c9-9a4a-fc9c0c57258a.webp (320×236) |
| 6 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d | https://static.higgsfield.ai/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d.mp4 | https://static.higgsfield.ai/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d.webp | https://d1xarpci4ikg0w.cloudfront.net/64282471-a6f8-483d-9752-2b038352e4f7.webp (320×182) |
| 7 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/985502c7-4046-4344-9864-219a091ecb8b | https://static.higgsfield.ai/985502c7-4046-4344-9864-219a091ecb8b.mp4 | https://static.higgsfield.ai/985502c7-4046-4344-9864-219a091ecb8b.webp | https://d1xarpci4ikg0w.cloudfront.net/4fa7c0c8-900e-4b15-a5b5-705242c13f2d.webp (320×182) |
| 8 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e3222bc5-d0ad-48ba-b98d-281a6e899039 | https://static.higgsfield.ai/e3222bc5-d0ad-48ba-b98d-281a6e899039.mp4 | https://static.higgsfield.ai/e3222bc5-d0ad-48ba-b98d-281a6e899039.webp | https://d1xarpci4ikg0w.cloudfront.net/53e5efac-e9ba-4e53-bda5-8631250b7db0.webp (320×210) |
| 9 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/66c75f2d-99e5-4c73-84a2-a49d74729f9e | https://static.higgsfield.ai/66c75f2d-99e5-4c73-84a2-a49d74729f9e.mp4 | https://static.higgsfield.ai/66c75f2d-99e5-4c73-84a2-a49d74729f9e.webp | https://d1xarpci4ikg0w.cloudfront.net/f3639e13-a3c5-4052-a606-0500750999f2.webp (320×320) |
| 10 | https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573 | https://static.higgsfield.ai/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573.mp4 | https://static.higgsfield.ai/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573.webp | https://d1xarpci4ikg0w.cloudfront.net/54897999-8ce9-42bf-ba66-e16c6d92b51b.webp (320×182) |

Source pages: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd, https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `bc0a07f6-72eb-4e56-b477-d8fcbe7cd573`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d1d735c4-93ce-4262-ad13-3e3c92500994.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/026f677f-f51e-4dcd-9a0b-4cfdbc81f7af.mp4
  - page: https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca/bc0a07f6-72eb-4e56-b477-d8fcbe7cd573

```text
An ultra-tight medium shot. A woman’s arm drapes over a man’s shoulder. Her skin glows under cold studio lighting, while he wears a tailored black suit, his face obscured entirely in ivory bandages. The wrapped texture casts dramatic shadows across where identity should be. Her dress is rich black velvet, sculpted and elegant; her heels are soft nude, a whisper against the stark floor. Both figures are statuesque, frozen like a photograph that has started to breathe.

The camera begins a slow, fluid super dolly out. With each inch of retreat, more is revealed. Their bodies form a diagonal composition on a vast, seamless set — white floor, pale grey gradient walls, and no visible edges. Minimalist. Isolated. Intentional.

Her body leans into his. One leg outstretched, toes arched. His hand rests gently at her waist, fingers relaxed but stylized. They are mannequins mid-embrace. Lovers from a forgotten film. Icons from a magazine no one’s printed yet.

Further out, the illusion fractures. Softbox lights are visible now — two large, glowing panels suspended like moons above the scene. C-stands, rigging cables, even a stylist’s coat on a chair just out of frame. It’s no longer just a moment — it’s a set. A fashion image deconstructed mid-performance.
```

- **Sample `66c75f2d-99e5-4c73-84a2-a49d74729f9e`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9d303919-cc25-4603-b8ec-822760db4e0f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/616a7d9e-8135-4cad-809a-0ddb4dbaae7f.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/66c75f2d-99e5-4c73-84a2-a49d74729f9e

```text
The scene opens with a slow rotating overhead shot. A man in a tailored black suit lies motionless on a wet city street, arms splayed in perfect symmetry like a fallen saint. Neon reflections dance across the asphalt — pink, teal, orange — distorted by the movement of traffic blurring past him on both sides. He is untouched. Sacred. Like time has paused around his collapse.

His face is obscured behind a transparent, art-object mask — intricate and cold, part fashion accessory, part emotional armor. Around his body, chaos: loose coins, lipstick tubes, printed receipts, an ID photo, crumpled cash, and a still-burning cigarette between two lifeless fingers.

Cars rush by in streaks of light and sound. But he remains still, like a mannequin placed at the center of a moving world.

The camera begins a super dolly out — lifting steadily, widening the scene. As it rises, more is revealed: the surrounding city’s glow, pedestrians blurred by motion, storefronts flickering with fractured advertisements. Yet no one stops. The man becomes smaller in the frame — his carefully composed chaos now an abstract symbol of burnout, beauty, or a breakdown too elegant to interrupt.
```

- **Sample `e3222bc5-d0ad-48ba-b98d-281a6e899039`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/add3dbaa-ab0f-4df3-8000-04bce08e3535.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/849cf3bc-9155-437d-b8e0-52db0867e64e.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e3222bc5-d0ad-48ba-b98d-281a6e899039

```text
The film opens in an ultra-tight close-up. A deep crimson velvet glove, adorned with thick, polished gold rings, holds a single wooden match just inches from the tip of a flickering candle flame. The glove’s texture absorbs the soft, warm glow, while the flame casts subtle reflections onto the curve of the gold. The background is an opulent blur of rainbow-toned bokeh — surreal, painterly, dreamlike.

With surgical stillness, the hand tilts the match into the flame. A sharp flick. The tip ignites. In a flash of orange and sulfuric blue, the fire blooms.

As the match sparks, the camera begins to super dolly out. Smoke swirls upward. A second hand enters the frame — slender, feminine, ungloved — raising a cigarette to parted lips. The match is brought forward, lighting the cigarette with quiet ritual. Her lips are painted in high-gloss crimson, her gaze unbroken, fixed forward like a goddess in mid-offering.

The dolly continues. Her face is now visible — symmetrical, mysterious, framed in heavy shadow and velvet drapery. Her coat collar is exaggerated and sculptural, her posture upright and composed like a vintage perfume ad. The candle remains lit beside her, casting theatrical flickers across her jawline.
```

- **Sample `985502c7-4046-4344-9864-219a091ecb8b`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/73850417-1f2f-441a-92f7-70da5bba6744.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/027e0f0b-9319-431d-bfce-ad34599a1b25.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/985502c7-4046-4344-9864-219a091ecb8b

```text
Create a cinematic animation featuring mysterious figures in golden robes and reflective masks arranged in symmetrical rows. Begin with a tight, detailed close-up of the central figure, highlighting reflections and fabric textures, then slowly dolly out to reveal the larger group, emphasizing the symmetry, depth, and intriguing atmosphere. Lighting should remain soft and dramatic to enhance the reflective surfaces and golden hues, contributing to an enigmatic and majestic ambiance.
```

- **Sample `5febab41-d9df-4dd0-9b8c-9ed73b6eff2d`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fc7c5dea-4174-441a-91a8-9840bf9e933c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b00ad713-c1e6-4ada-8172-e2133472cb9c.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/5febab41-d9df-4dd0-9b8c-9ed73b6eff2d

```text
Animate a serene yet dynamic scene featuring a monk in vibrant orange robes peacefully DJing atop a majestic mountain landscape. Begin with a close-up on the monk’s calm, focused expression and his skilled hands controlling the turntables, then gradually dolly out to unveil the breathtaking panorama of mountain peaks, clouds, and mist that surround him. Enhance the dreamy and tranquil atmosphere with gentle, drifting mist and subtle cloud movements, creating an ethereal, meditative visual experience.
```

- **Sample `e14fbf8d-2e4c-4724-9efb-2253737dea63`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2208×1632
  - input image: https://d1xarpci4ikg0w.cloudfront.net/86e5b26b-dcca-4fa5-974f-1ba1c5aaa513.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/743cc0b4-ce1e-4d01-9ed8-20c1bfb6fb07.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/e14fbf8d-2e4c-4724-9efb-2253737dea63

```text
A skilled chef in a crisp white uniform with rolled-up sleeves and a leather apron is intensely focused as he carefully places a meticulously crafted dessert onto a pristine white plate. The dessert is an exquisite layered creation, featuring a golden, flaky texture, delicate edible flowers, and precisely piped cream. The scene takes place in an elegant, softly lit fine-dining kitchen with classical paneling and gold accents. The chef’s movements are slow and deliberate, emphasizing precision and artistry. The camera employs an extreme close-up with a shallow depth of field, focusing sharply on the dessert while the chef’s face remains slightly blurred, adding depth and intensity. The lighting is warm and cinematic, with soft shadows highlighting the textures and intricate details of the dish. The atmosphere is refined and sophisticated, evoking the world of haute cuisine. The visual style is highly detailed, resembling a high-end food commercial with a mix of vintage European fine dining aesthetics and modern cinematography.
```

- **Sample `0cea5fb1-7b8c-474a-a889-cd4985811550`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 2944×1216
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c10501b0-0c4d-4fdd-8f1b-43fcc5147288.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/83f1b327-7364-4b72-8255-6a7f53505e13.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/0cea5fb1-7b8c-474a-a889-cd4985811550

```text
A piercing gaze dominates the frame in this extreme close-up, capturing a person’s striking green eyes framed by thick, furrowed brows. The moody red and green lighting adds an eerie intensity, emphasizing the depth of emotion behind the stare. Shadows creep along the contours of the face, accentuating the texture of the skin and the subtle redness around the eyes, hinting at exhaustion, turmoil, or deep focus. The cinematic composition, with its shallow depth of field, isolates the subject’s eyes, pulling the viewer into an almost hypnotic confrontation with their expression. The interplay of colors and light suggests a heightened psychological state, making this shot feel both intimate and unsettling
```

- **Sample `b9946b17-9b3e-4fd0-8143-37d7b2597d27`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dd9a89f0-4804-4563-be87-c280b6ce8326.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/aa68744e-c7ef-45df-9bd3-3fb8e407b391.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/b9946b17-9b3e-4fd0-8143-37d7b2597d27

```text
zoom out revealing her standing near colorful wall
```

- **Sample `a3fbd592-0ef6-42d4-b5f0-ef035ec9e445`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/58631a44-df82-4e40-8147-70448aa7d7e7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d0ba2585-9497-4954-9fec-be4c1f68d52c.mp4
  - page: https://higgsfield.ai/motion/d66685ce-8c2b-4aeb-8d4a-195d474c7eca/a3fbd592-0ef6-42d4-b5f0-ef035ec9e445

```text
the camera begins to pull back, higher and higher. The rough texture of the moon fades into a sprawling grey sphere dotted with impact scars. The astronaut becomes a barely visible speck. Further out still—the full shape of the moon is revealed, suspended in the void, with Earth slowly rising in the distance behind it.
```

- **Sample `8ead4a81-8efc-44a2-99f4-783fdc1c1331`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a23b000d-8bab-4133-ba54-7a26ef7719b1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2a2e2417-9be2-4c3f-9b41-7375c4be3d6a.mp4
  - page: https://higgsfield.ai/motion/9dda3fb8-b917-457a-a995-72233031b1fd/8ead4a81-8efc-44a2-99f4-783fdc1c1331

```text
The camera pulls back slowly, revealing the man perched alone on the very edge of a tall building's rooftop. His silhouette becomes smaller against the deepening twilight sky, hues of violet and orange brushing the horizon. 
```
