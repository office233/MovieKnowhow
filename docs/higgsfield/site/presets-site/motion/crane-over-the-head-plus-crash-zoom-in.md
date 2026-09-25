# Crane Over The Head + Crash Zoom In — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Starts with a smooth overhead rise, then suddenly zooms into the subject for dramatic impact. Combines epic buildup with an intense punch-in moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45 | `107cd0d5-62d4-476b-bf60-7461313bfa45` | 35 | isMix | mix of: Crane Over The Head (motion id `f77584f2-7442-4128-91b5-095829b108c7`, strength 0.8), Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7%2Ca2dddb76-03fa-429e-9905-577bffdf9d38&presetMotionStrengths=0.8%2C1 |
| https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b | `cc664502-7fdc-412e-8fd7-6af310c8891b` | 80 | isMix | mix of: Crane Over The Head (motion id `f77584f2-7442-4128-91b5-095829b108c7`, strength 0.8), Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 1.0) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f77584f2-7442-4128-91b5-095829b108c7%2Ca2dddb76-03fa-429e-9905-577bffdf9d38&presetMotionStrengths=0.8%2C1 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A gladiator stands in an arena; the camera rises over his head, then crash-zooms into his face as the crowd roars.
```

Use it as: upload a start image that matches the scene, select motion preset **Crane Over The Head + Crash Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crane Over The Head](crane-over-the-head.md) (strength 0.8), [Crash Zoom In](crash-zoom-in.md) (strength 1.0)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/530c117f-bf01-4f8e-a9f5-f3829cb1ebaf.webp (320×242)
- Card preview, variant `cc664502`: https://d1xarpci4ikg0w.cloudfront.net/cbf91def-e759-48b1-ac38-f2a2fdf3f1aa.webp
- Component preview — Crane Over The Head: https://d1xarpci4ikg0w.cloudfront.net/3889c0ef-0a7c-492e-ae99-bdbfb4405856.webp
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/0ba15334-5502-49d9-aac2-9dfb87d3f1ab | https://static.higgsfield.ai/0ba15334-5502-49d9-aac2-9dfb87d3f1ab.mp4 | https://static.higgsfield.ai/0ba15334-5502-49d9-aac2-9dfb87d3f1ab.webp | https://d1xarpci4ikg0w.cloudfront.net/a1013146-0f3b-4b1c-892e-11a7f1ea205f.webp (320×242) |
| 2 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/be221a99-80ce-4c06-8ce3-b6b4bd7cae39 | https://static.higgsfield.ai/be221a99-80ce-4c06-8ce3-b6b4bd7cae39.mp4 | https://static.higgsfield.ai/be221a99-80ce-4c06-8ce3-b6b4bd7cae39.webp | https://d1xarpci4ikg0w.cloudfront.net/0cbd4f4c-a191-46d3-86b0-13e0f35f7127.webp (320×320) |
| 3 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed | https://static.higgsfield.ai/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed.mp4 | https://static.higgsfield.ai/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed.webp | https://d1xarpci4ikg0w.cloudfront.net/b7c540f0-6c99-4e3a-9e96-84ae151e0441.webp (320×210) |
| 4 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/8821485c-e264-40c4-9110-bc2ea7a6d2f1 | https://static.higgsfield.ai/8821485c-e264-40c4-9110-bc2ea7a6d2f1.mp4 | https://static.higgsfield.ai/8821485c-e264-40c4-9110-bc2ea7a6d2f1.webp | https://d1xarpci4ikg0w.cloudfront.net/c45e68ac-ff44-4155-a931-7d9b9756acb2.webp (320×424) |
| 5 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/74cc28fc-1053-4a24-aca3-adf2a5503229 | https://static.higgsfield.ai/74cc28fc-1053-4a24-aca3-adf2a5503229.mp4 | https://static.higgsfield.ai/74cc28fc-1053-4a24-aca3-adf2a5503229.webp | https://d1xarpci4ikg0w.cloudfront.net/a512d01c-2509-4227-9a04-6e64227a361a.webp (320×210) |
| 6 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/711c4a40-45c9-4043-8f58-cd76ec3eef83 | https://static.higgsfield.ai/711c4a40-45c9-4043-8f58-cd76ec3eef83.mp4 | https://static.higgsfield.ai/711c4a40-45c9-4043-8f58-cd76ec3eef83.webp | https://d1xarpci4ikg0w.cloudfront.net/a434b6e8-b665-4182-88c0-55e2a4d76dc9.webp (320×320) |
| 7 | https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b | https://static.higgsfield.ai/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b.mp4 | https://static.higgsfield.ai/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b.webp | https://d1xarpci4ikg0w.cloudfront.net/0e80eb52-bf59-4d6d-82b9-9e4cb9890f4d.webp (320×242) |

Source pages: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45, https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `be221a99-80ce-4c06-8ce3-b6b4bd7cae39`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6c8a434a-c21f-4cd9-8b85-d9ab4511c37f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/24cda824-c91c-4f65-a7fd-3764aed8866f.mp4
  - page: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/be221a99-80ce-4c06-8ce3-b6b4bd7cae39

```text
The camera zooms in slowly on the young man’s head, emphasizing his thoughtful expression framed by a vibrant, curly hairstyle. He wears a stylish, peach-colored suit that contrasts against the stark background of a softly lit room with beige walls and a gentle golden hue spilling through the blinds. The air carries a palpable tension as a pink balloon rests playfully on his lap, contrasting against his serious demeanor. Shadows dance subtly across his face, highlighting the depth of his contemplation. The shiny white loafers and the minimalist furniture reflect a modern aesthetic, underscoring his sophisticated yet whimsical vibe.
```

- **Sample `a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ffd915fa-ca38-46bb-9916-d1748352deb4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/88dfa1de-4231-4fdc-9c34-01d17f960cf2.mp4
  - page: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a1c9bd9d-6b34-42b6-98a6-d1c0a4f2640b

```text
The camera sweeps high above the church, the vibrant stained glass casting intricate patterns across the pews, as sunlight filters in, wrapping the boy in a warm embrace. A graceful crane movement descends, highlighting his solitude amid the vibrant colors and solemnity of the space. The gentle hum of silence around him is palpable. Suddenly, the camera crashes zooms in on his face, capturing the flicker of concern in his eyes, glistening with a hint of moisture under the stained glass glow. Every detail—the worry lines of his forehead, the gloss of his wet hair—brings an intimate tension, drawing viewers into his introspection. As the camera holds this tight shot, the world beyond fades, leaving only the weight of his thoughts surrounded by the echoes of the sacred space. The air thickens with unspoken questions and the light shifts, underlining the gravity of his moment.
```

- **Sample `8821485c-e264-40c4-9110-bc2ea7a6d2f1`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/095589aa-03c3-4cb1-83c9-0dec79fd80d2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5cff9fef-b951-495d-8d7e-221b5a07562e.mp4
  - page: https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b/8821485c-e264-40c4-9110-bc2ea7a6d2f1

```text
The camera crash zooms in on the character's head, revealing a focused expression behind the gas mask, eyes shimmering with uncertainty. Surrounded by vibrant yellow and green hues of the laundromat, the fluorescent lighting casts a surreal glow across his white puffy coat. The atmosphere is thick with an unusual tension, accentuated by the murky green water swirling around his legs. As the plastic film billows around him, it adds a sense of entrapment to the scene, suggesting a disconnection from reality. The contrasting textures of the wet floor and the smooth coat amplify the emotional weight, creating a hauntingly beautiful tableau.
```

- **Sample `0ba15334-5502-49d9-aac2-9dfb87d3f1ab`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8623406b-c31d-4d1f-bcee-702fc0588727.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/eedbccc9-1102-44da-ba58-2c299b9e3f83.mp4
  - page: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/0ba15334-5502-49d9-aac2-9dfb87d3f1ab

```text
As the camera zooms in on her head, the woman sits at a small table, her gaze piercing yet contemplative, framed by the vibrant floral wrap that contrasts with the stark green walls. Soft light from a bare bulb casts shadows, illuminating her face while deepening the mood of solitude. The shadows highlight her defined features, and a hint of smoke curls from the cigarette resting between her fingers, adding a touch of rebellion. The cracked floor and the vintage fridge in the background enhance the sense of unease in this seemingly mundane space. She exudes a blend of vulnerability and strength, encapsulating a moment of introspection as the world outside falls away.
```

- **Sample `711c4a40-45c9-4043-8f58-cd76ec3eef83`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6c03a6a5-422e-4af8-86c7-982e2a605281.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/39f4414e-5d84-4dcf-aad6-fc9b56edf215.mp4
  - page: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/711c4a40-45c9-4043-8f58-cd76ec3eef83

```text
A man sits confidently on a taut rope, adorned in a vibrant blue fur coat that billows around him. The camera zooms in on his head, capturing the intricate details of his mask and the glint of gold chains around his neck, underscored by his piercing gaze. The environment is stark white, contrasting sharply with the multitude of beige-suited figures in the background, who move with synchronized precision. As the camera closes in, the atmosphere shifts; the space feels both isolating and empowering, revealing the man's inner struggle against the backdrop of conformity. Bright lighting emphasizes the textures of his outfit, creating a captivating visual narrative filled with tension and charisma.
```

- **Sample `74cc28fc-1053-4a24-aca3-adf2a5503229`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c7b085f3-406d-4617-8835-562b20a7ec2d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b0cde083-7440-4201-96bf-fda27ec71b4f.mp4
  - page: https://higgsfield.ai/motion/cc664502-7fdc-412e-8fd7-6af310c8891b/74cc28fc-1053-4a24-aca3-adf2a5503229

```text
The camera zooms in on his face, showcasing a calm yet confident expression, framed by an intricately patterned wall tapestry of deep reds and golds. His posture is relaxed, leaning slightly forward as if inviting the viewer into his world. The warm lighting illuminates his features, casting soft shadows that enhance the texture of his gentle smile and the glint of his gold jewelry. The rich colors of his rust-colored blazer contrast sharply with the vibrant background, setting a lively yet contemplative mood. As the shot narrows, the ambiance shifts from a broad view of the room to an intimate exploration of his self-assured gaze, inviting an emotional connection that resonates deeply.
```

- **Sample `a0944a3f-d9f4-4d19-9430-979f9ebcc4ed`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5e1443bd-cf0d-4dba-9438-be300664b43e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7f890116-7fb9-4f95-9cad-dd6b6da87990.mp4
  - page: https://higgsfield.ai/motion/107cd0d5-62d4-476b-bf60-7461313bfa45/a0944a3f-d9f4-4d19-9430-979f9ebcc4ed

```text
The camera zooms in on her head, capturing the shimmering, oversized sunglasses reflecting the vivid colors of a neon-lit room. She exudes confidence, her braided hair cascading down her shoulder as she forms a peace sign with one hand. The ambient glow of red and blue illuminates her metallic silver puffer jacket, blending seamlessly with the electric motifs on the walls. The environment feels alive, pulsating with energy as the dynamic lighting shifts, enhancing her striking presence. Her bold expression conveys a sense of defiance and individuality, inviting viewers into this electrifying world.
```
