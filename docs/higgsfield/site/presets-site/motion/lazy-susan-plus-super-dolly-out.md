# Lazy Susan + Super Dolly Out — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** product ad
- **What it does (site description, verbatim):** Rotates around the subject while smoothly pulling away, creating a stylish, cinematic reveal. Feels elegant, dramatic, and fashion-forward.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685 | `71e3e642-561f-46d9-b9af-8af420f99685` | -163 | isMix | mix of: Lazy Susan (motion id `025866ff-677c-4af2-92ef-52d6ec3b035e`, strength 0.95), Super Dolly Out (motion id `d66685ce-8c2b-4aeb-8d4a-195d474c7eca`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e%2Cd66685ce-8c2b-4aeb-8d4a-195d474c7eca&presetMotionStrengths=0.95%2C0.65 |
| https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4 | `bf81db64-714e-4195-acd4-21065b317dd4` | 75 | isMix | mix of: Lazy Susan (motion id `025866ff-677c-4af2-92ef-52d6ec3b035e`, strength 0.95), Super Dolly Out (motion id `d66685ce-8c2b-4aeb-8d4a-195d474c7eca`, strength 0.65) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=025866ff-677c-4af2-92ef-52d6ec3b035e%2Cd66685ce-8c2b-4aeb-8d4a-195d474c7eca&presetMotionStrengths=0.95%2C0.65 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A model in couture stands still as the camera rotates around her and pulls far back to reveal a marble hall.
```

Use it as: upload a start image that matches the scene, select motion preset **Lazy Susan + Super Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Lazy Susan](lazy-susan.md) (strength 0.95), [Super Dolly Out](super-dolly-out.md) (strength 0.65)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/df056ee7-7ece-468c-bf53-df187a412f2d.webp (320×238)
- Card preview, variant `bf81db64`: https://d1xarpci4ikg0w.cloudfront.net/ed5f59c0-d592-471f-bc71-ba7d80439844.webp
- Component preview — Lazy Susan: https://d1xarpci4ikg0w.cloudfront.net/e27cfd60-07f5-49dc-8c7a-bb609e71ec73.webp
- Component preview — Super Dolly Out: https://d1xarpci4ikg0w.cloudfront.net/ee9451aa-da82-4c44-9cb4-f903c88ab800.webp

### Sample videos (6; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/c8054127-cdc2-4e42-a608-9897be0bb6e5 | https://static.higgsfield.ai/c8054127-cdc2-4e42-a608-9897be0bb6e5.mp4 | https://static.higgsfield.ai/c8054127-cdc2-4e42-a608-9897be0bb6e5.webp | https://d1xarpci4ikg0w.cloudfront.net/691f247c-524c-43c7-b765-8f87e3e0bac8.webp (320×182) |
| 2 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/e3976531-d562-45d5-a98c-5eaad9b3baa2 | https://static.higgsfield.ai/e3976531-d562-45d5-a98c-5eaad9b3baa2.mp4 | https://static.higgsfield.ai/e3976531-d562-45d5-a98c-5eaad9b3baa2.webp | https://d1xarpci4ikg0w.cloudfront.net/03bbb328-91b1-4e6d-ab98-55605c26b248.webp (320×320) |
| 3 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9a76f7e8-f1f6-41db-9200-0004d7981ad7 | https://static.higgsfield.ai/9a76f7e8-f1f6-41db-9200-0004d7981ad7.mp4 | https://static.higgsfield.ai/9a76f7e8-f1f6-41db-9200-0004d7981ad7.webp | https://d1xarpci4ikg0w.cloudfront.net/02b17a77-b233-4cab-868a-dd67f8e99265.webp (320×242) |
| 4 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/38de5533-9a02-4b2b-85b4-c12e3aaaa771 | https://static.higgsfield.ai/38de5533-9a02-4b2b-85b4-c12e3aaaa771.mp4 | https://static.higgsfield.ai/38de5533-9a02-4b2b-85b4-c12e3aaaa771.webp | https://d1xarpci4ikg0w.cloudfront.net/fdeb0cd3-1c5d-4d14-8043-8f0cd24a19a0.webp (320×320) |
| 5 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9ba152f0-08f8-474d-adbc-e2360b45ee48 | https://static.higgsfield.ai/9ba152f0-08f8-474d-adbc-e2360b45ee48.mp4 | https://static.higgsfield.ai/9ba152f0-08f8-474d-adbc-e2360b45ee48.webp | https://d1xarpci4ikg0w.cloudfront.net/750623c6-d425-450d-9d56-529bf1cf4b91.webp (320×424) |
| 6 | https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/8d4fc90a-b075-475a-829f-a2a978265324 | https://static.higgsfield.ai/8d4fc90a-b075-475a-829f-a2a978265324.mp4 | https://static.higgsfield.ai/8d4fc90a-b075-475a-829f-a2a978265324.webp | https://d1xarpci4ikg0w.cloudfront.net/6f0f95d9-6ce3-4d77-8f95-0f36b47a5dca.webp (320×486) |

Source pages: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685, https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4. Crawled 2026-09.


## Real sample prompts (site)

6 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `e3976531-d562-45d5-a98c-5eaad9b3baa2`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/041c61cf-7a0f-46ee-9fe7-28c83f0de61f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/75e72083-06fe-4c9c-876d-f9e5654c4fbd.mp4
  - page: https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4/e3976531-d562-45d5-a98c-5eaad9b3baa2

```text
An extreme closeup of a woman’s mouth — her lips matte black, parted slightly, holding a burning joint between perfect white teeth. Smoke coils upward in soft, elegant spirals. Reflections of red and purple club lights dance across the enamel like neon licking chrome. Her breath is slow, deliberate.

The Lazy Suzan camera rotation begins — orbiting her mouth with precision, smooth and entrancing. As it circles, the background subtly distorts — shifting from velvet curtain to electric void to nightclub strobes, synced with her inhale. Each pass reveals more details: glitter flecks on her lip, the glow of embers deepening, a faint smile threatening to form.

As the rotation widens, a dolly out begins. The camera slowly pulls back to reveal her entire lower face, then her eyes — unreadable behind shimmering wet lashes. Her skin glows with sweat and gold. Surrounding her now: hands, glitter, glass, feathers — a surrealist temple built for worshipping indulgence.
```

- **Sample `8d4fc90a-b075-475a-829f-a2a978265324`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0ae46f63-2d2f-4acc-967e-57ea81607ac0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/66032b90-991d-4d39-a574-03e467f5efee.mp4
  - page: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/8d4fc90a-b075-475a-829f-a2a978265324

```text
A young woman stands in a sunless courtyard, wind whispering through her loose curls. Her eyes are closed, expression poised between peace and resistance. She wears an indigo cross-wrapped top and a pale blue blazer that slips from her shoulders like water. Her seafoam eyeshadow glimmers softly beneath the overcast light — a small rebellion of color in a grayscale space.

The rotation begins — gliding around her in a slow, contemplative circle. With each pass, her silhouette shifts slightly against the minimal concrete backdrop. A subtle breeze animates her hair like waves against polished stone. The folds of her garment move with breath-like grace.

Midway through the orbit, a dolly out begins, revealing her as the sole presence in an otherwise abandoned space — high, silent architecture framing her like a statue. Reflections ghost in nearby windows.

Final orbit: she lifts her face slightly toward the sky.
```

- **Sample `9a76f7e8-f1f6-41db-9200-0004d7981ad7`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f4533db9-2325-4294-9fe1-de830909f14d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/00826972-4fcd-489a-956c-ba39de889579.mp4
  - page: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9a76f7e8-f1f6-41db-9200-0004d7981ad7

```text
A young woman lounges in a retro salon chair beneath a silver hair dryer dome, dressed in a shimmering violet tracksuit. Her nails are immaculate, fingers laced like she’s plotting a heist. She pops a silver jawbreaker onto her tongue, her expression a cocktail of mischief and divine indifference. Behind her, a glowing neon sign reads: “DEEP CUTS.”

The Lazy Suzan rotation begins — orbiting her slowly as the camera glides around the chair. On each pass, the reflections in the chrome dome shift subtly: one moment showing disco lights, the next, a burning skyline, then a reflection of herself — much older. The tinsel on the wall shivers like it’s underwater.

As the rotation continues, the camera begins a dolly out. The pink-violet lighting intensifies. Other salon chairs emerge from the periphery, each occupied by motionless clones of her — identical tracksuits, identical poses. But only the center version is breathing.

On the final pass, her fingers slowly unlatch and tap the armrest. The gum glows faintly. The lights flicker. A low synth bass pulses through the room. She blows a perfect silver bubble as the dolly reveals the full salon: a closed loop of mirrors, neon, and silence.

```

- **Sample `9ba152f0-08f8-474d-adbc-e2360b45ee48`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/843dbc4b-871c-4041-9997-704898a7943a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c4295a05-e47c-47e8-b9d4-85ac6629cfc2.mp4
  - page: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/9ba152f0-08f8-474d-adbc-e2360b45ee48

```text
A young woman stands confidently, her gaze intense and lips slightly parted, dressed in a striking red blazer that amplifies her bold personality. The scene unfolds at night, illuminated by a dramatic red traffic light that casts an electric hue across her features, highlighting the sleek texture of her accessories. As the camera performs a dolly-out, the surrounding urban landscape comes into focus—blurry bokeh lights twinkle in the background, hinting at the lively city atmosphere. The light from the traffic signal sharpens the tension in the air, suggesting a moment poised between urgency and allure. The interplay of shadows and the vibrant reds envelops her, revealing the depth of her character amidst the pulse of the city.
```

- **Sample `38de5533-9a02-4b2b-85b4-c12e3aaaa771`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9248c812-b4d7-4871-ae77-428ec51a5f41.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/104f1075-c9ac-48bb-b095-df958800fc25.mp4
  - page: https://higgsfield.ai/motion/bf81db64-714e-4195-acd4-21065b317dd4/38de5533-9a02-4b2b-85b4-c12e3aaaa771

```text
A young boy wears a striking orange coat, sitting in a carnival ride with a relaxed yet slightly tense posture. The environment around him is alive with vibrant colors and swirling lights from nearby attractions, creating a dynamic glow that fills the scene. As the camera dolly out, the boy's tousled hair is caught in the wind, and his thoughtful expression stands out against the backdrop of relentless excitement. The atmosphere crackles with energy, the blurred greens and pinks illuminating the area, merging joy with contemplation. This interplay of movement and stillness highlights his emotional depth, inviting the viewer to reflect on the ephemeral joy of childhood.
```

- **Sample `c8054127-cdc2-4e42-a608-9897be0bb6e5`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3496dbde-a311-4389-a536-86e0ae842f78.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9022bd2f-e359-4619-b1e7-30728132bcc4.mp4
  - page: https://higgsfield.ai/motion/71e3e642-561f-46d9-b9af-8af420f99685/c8054127-cdc2-4e42-a608-9897be0bb6e5

```text
A man reclines in a glossy red plastic chair under flickering green neon. He wears rhinestone-crusted shades, layered silver chains, and a white tank top that catches the strobe. His expression is unreadable — part amused, part disconnected. The ground is littered with a single sneaker, crushed roses, a spilled soda can, a plastic toy horse. Behind him, a shimmering gold emergency blanket ripples like water.

The Lazy Suzan rotation begins, orbiting slowly around the chair. With each revolution, the detritus around him subtly changes: the flowers bloom and wilt, the toy horse crawls forward an inch, the sneaker shifts. His chair begins to rotate as well, perfectly counter to the camera’s spin — creating a hypnotic friction in motion.

As the rotation continues, a dolly out pulls back from the scene. The gold foil backdrop stretches infinitely. Light sources multiply — purple strobes, green floor lights, pink flickers. The chair, once isolated, now appears to sit at the center of a ritualistic ring of soft toy animals and broken bottles.

Final rotation: the man raises his hand as if conducting a symphony. All lights blink once. Everything goes still — except the foil behind him, still rustling like it’s breathing. 
```
