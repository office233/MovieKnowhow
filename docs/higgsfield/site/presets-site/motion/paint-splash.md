# Paint Splash — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The object or subject transforms into a burst of liquid paint—splattering outward in colorful, fluid motion. Surreal and expressive, ideal for artistic transitions or dramatic visual effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f | `a1ee18d7-3705-4218-a05e-45b31badf04f` | -247 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a1ee18d7-3705-4218-a05e-45b31badf04f |
| https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29 | `e520303a-70ed-4438-9306-830528fbdd29` | -198 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e520303a-70ed-4438-9306-830528fbdd29 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A ballerina leaps and bursts into a splash of vivid liquid paint.
```

Use it as: upload a start image that matches the scene, select motion preset **Paint Splash**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ee836b6c-3584-4337-908f-ecbeca10987b.webp (320×432)
- Card preview, variant `e520303a`: https://d1xarpci4ikg0w.cloudfront.net/baad4cb3-9579-462f-a588-b492ec0ada96.webp

### Sample videos (17; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/2896d5ff-531d-4d35-9b04-7ee69227ebbf | https://static.higgsfield.ai/2896d5ff-531d-4d35-9b04-7ee69227ebbf.mp4 | https://static.higgsfield.ai/2896d5ff-531d-4d35-9b04-7ee69227ebbf.webp | https://d1xarpci4ikg0w.cloudfront.net/2a5d98dc-3227-454f-8f31-05be0561d3ee.webp (320×432) |
| 2 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb | https://static.higgsfield.ai/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb.mp4 | https://static.higgsfield.ai/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb.webp | https://d1xarpci4ikg0w.cloudfront.net/61e62d45-6d89-4ddb-81cf-0e3e5cd825d2.webp (320×432) |
| 3 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04 | https://static.higgsfield.ai/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04.mp4 | https://static.higgsfield.ai/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04.webp | https://d1xarpci4ikg0w.cloudfront.net/7f252368-5a51-46d2-bd4f-7329640ab2fb.webp (320×432) |
| 4 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/a15a77f5-cff4-4b3a-a4d4-0df86065c937 | https://static.higgsfield.ai/a15a77f5-cff4-4b3a-a4d4-0df86065c937.mp4 | https://static.higgsfield.ai/a15a77f5-cff4-4b3a-a4d4-0df86065c937.webp | https://d1xarpci4ikg0w.cloudfront.net/6989adf9-eb00-4b8d-8677-ae3faa65f3ec.webp (320×432) |
| 5 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/262f46b2-87c2-494b-9252-1b9dde91d925 | https://static.higgsfield.ai/262f46b2-87c2-494b-9252-1b9dde91d925.mp4 | https://static.higgsfield.ai/262f46b2-87c2-494b-9252-1b9dde91d925.webp | https://d1xarpci4ikg0w.cloudfront.net/0d6c66ca-cf2e-431d-ace4-a29ee2563e28.webp (320×432) |
| 6 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/e6d5bd16-9193-40f3-bb12-d5a62170b239 | https://static.higgsfield.ai/e6d5bd16-9193-40f3-bb12-d5a62170b239.mp4 | https://static.higgsfield.ai/e6d5bd16-9193-40f3-bb12-d5a62170b239.webp | https://d1xarpci4ikg0w.cloudfront.net/36088762-85a9-4f89-9af1-45460289551d.webp (320×304) |
| 7 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/c11e6191-1cea-427d-83ea-cc0c71d0d0e4 | https://static.higgsfield.ai/c11e6191-1cea-427d-83ea-cc0c71d0d0e4.mp4 | https://static.higgsfield.ai/c11e6191-1cea-427d-83ea-cc0c71d0d0e4.webp | https://d1xarpci4ikg0w.cloudfront.net/7c5e4dda-2398-4098-8f23-d8059465e271.webp (320×432) |
| 8 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/abbdd700-8d01-434a-9708-119282eebd79 | https://static.higgsfield.ai/abbdd700-8d01-434a-9708-119282eebd79.mp4 | https://static.higgsfield.ai/abbdd700-8d01-434a-9708-119282eebd79.webp | https://d1xarpci4ikg0w.cloudfront.net/e69d6060-1f0c-403a-bd3c-5ceca756fc0c.webp (320×432) |
| 9 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/3896b7b7-36ac-44b5-a94a-0e69e30742fb | https://static.higgsfield.ai/3896b7b7-36ac-44b5-a94a-0e69e30742fb.mp4 | https://static.higgsfield.ai/3896b7b7-36ac-44b5-a94a-0e69e30742fb.webp | https://d1xarpci4ikg0w.cloudfront.net/93e4d01d-3a6e-482c-8ed4-cda5f95cf7bd.webp (320×432) |
| 10 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/5526214d-f261-4cac-96cd-9ebc6dcf55d7 | https://static.higgsfield.ai/5526214d-f261-4cac-96cd-9ebc6dcf55d7.mp4 | https://static.higgsfield.ai/5526214d-f261-4cac-96cd-9ebc6dcf55d7.webp | https://d1xarpci4ikg0w.cloudfront.net/9b833df3-04c5-43bf-81f4-b630e24993ee.webp (320×432) |
| 11 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/6594748c-0f5d-4fa9-a562-4ace95682b48 | https://static.higgsfield.ai/6594748c-0f5d-4fa9-a562-4ace95682b48.mp4 | https://static.higgsfield.ai/6594748c-0f5d-4fa9-a562-4ace95682b48.webp | https://d1xarpci4ikg0w.cloudfront.net/7670ffc8-c403-450f-aceb-e4459621380f.webp (320×236) |
| 12 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/33ab84b7-4a95-4d81-81c0-66bfce145bd3 | https://static.higgsfield.ai/33ab84b7-4a95-4d81-81c0-66bfce145bd3.mp4 | https://static.higgsfield.ai/33ab84b7-4a95-4d81-81c0-66bfce145bd3.webp | https://d1xarpci4ikg0w.cloudfront.net/7523a8f6-8980-4ea0-87c3-bd5a02058385.webp (320×210) |
| 13 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/3ef198f3-2096-4817-912d-d5276c91b9d6 | https://static.higgsfield.ai/3ef198f3-2096-4817-912d-d5276c91b9d6.mp4 | https://static.higgsfield.ai/3ef198f3-2096-4817-912d-d5276c91b9d6.webp | https://d1xarpci4ikg0w.cloudfront.net/5672aa27-a940-4d76-84f0-b46575629e37.webp (320×320) |
| 14 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/8fa39c4b-441a-4b6c-adba-810429539c84 | https://static.higgsfield.ai/8fa39c4b-441a-4b6c-adba-810429539c84.mp4 | https://static.higgsfield.ai/8fa39c4b-441a-4b6c-adba-810429539c84.webp | https://d1xarpci4ikg0w.cloudfront.net/5f71976b-6314-4d23-a9fc-ccf185dd2b04.webp (320×236) |
| 15 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/b212a790-a2d6-4e10-afb4-159d480fda8a | https://static.higgsfield.ai/b212a790-a2d6-4e10-afb4-159d480fda8a.mp4 | https://static.higgsfield.ai/b212a790-a2d6-4e10-afb4-159d480fda8a.webp | https://d1xarpci4ikg0w.cloudfront.net/9c220b1b-b575-4eef-8692-70c3f89bd465.webp (320×432) |
| 16 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/1bd058fd-1638-4e4e-bd70-9251622cc2cb | https://static.higgsfield.ai/1bd058fd-1638-4e4e-bd70-9251622cc2cb.mp4 | https://static.higgsfield.ai/1bd058fd-1638-4e4e-bd70-9251622cc2cb.webp | https://d1xarpci4ikg0w.cloudfront.net/53e0fc26-a355-408f-b036-4c86da2c4c35.webp (320×320) |
| 17 | https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95 | https://static.higgsfield.ai/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95.mp4 | https://static.higgsfield.ai/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95.webp | https://d1xarpci4ikg0w.cloudfront.net/d443f6ce-05af-4970-ad0e-2d917f47033a.webp (320×320) |

Source pages: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f, https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29. Crawled 2026-09.


## Real sample prompts (site)

17 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95`** (priority 17) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f1ee41d1-0ad8-4a5d-944b-01e468e8fcaa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/72a41740-daa4-4922-b2b0-505cc8837459.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/6475a3b1-b8bb-4cc6-82b7-7c05fbe57c95

```text
A dynamic, low-angle photo of a confident man in a vibrant neon green tracksuit leaning against a bold red wall under a bright sunflare. His arms are crossed as he tilts his head slightly, exuding calm dominance. At the peak of this moment, his body suddenly erupts into a spectacular explosion of neon green, lime yellow, and glowing white paint — the particles blast outward in fluid motion, tracing his former shape for a split second before completely dissolving into radiant mist and vanishing. His presence fades as if absorbed into the color around him.

```

- **Sample `1bd058fd-1638-4e4e-bd70-9251622cc2cb`** (priority 16) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fbdfe7da-19de-4d35-b681-2c6b71475222.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0157f5f7-563b-4c81-9d6e-f32d960bc468.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/1bd058fd-1638-4e4e-bd70-9251622cc2cb

```text
A golden-hour urban subway platform bathed in warm sunset light. A stylish young man in an orange hoodie and dark sunglasses leans casually against a graffiti-covered silver train car, his posture relaxed as he gazes into the distance. Suddenly, in a vivid surreal twist, his body detonates into a brilliant explosion of vibrant paint—blazing oranges, hot pinks, deep indigos, and fluorescent yellows burst outward, echoing the colors of the train’s graffiti. The blast envelops the surrounding metal and air with wild splashes and ribbons of liquid color. Within seconds, his entire form melts into the fluid chaos—no bones, no traces—just swirling pigments dripping across the train’s surface, as if he was never solid to begin with. The scene freezes mid-transformation, the chaos of color lingering in motion as the train doors close behind where he once stood.

```

- **Sample `b212a790-a2d6-4e10-afb4-159d480fda8a`** (priority 15) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e159c65a-68ea-47fd-9db6-5420ef16846f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/50e52af7-a8cd-4c4d-8a11-79721798220f.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/b212a790-a2d6-4e10-afb4-159d480fda8a

```text
A nostalgic retro-style street scene glowing with warm orange light, featuring a smiling young man in a red tracksuit leaning confidently against a vintage blue car beside a neon soda machine. His relaxed posture and calm gaze reflect quiet confidence as the vibrant gradient sky bathes the scene in color. Suddenly, his figure erupts into a brilliant explosion of thick liquid paint—fiery reds, golden yellows, sky blues, and soft creams burst outward from his chest in bold, swirling streams. The glossy pigments cascade over the car and brick pavement as his entire body begins to dissolve into the flood of color. Within seconds, his form vanishes completely—absorbed into the cascading paint, leaving behind nothing but a vivid, abstract splash where he once stood. The soda machine, car, and glowing backdrop remain untouched, amplifying the surreal energy of joyful transformation and total disappearance into pure color.

```

- **Sample `8fa39c4b-441a-4b6c-adba-810429539c84`** (priority 14) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/59ae430f-46e2-4027-982b-76f741759983.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f411f2a2-9287-49c4-a046-f6f692fc3bbd.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/8fa39c4b-441a-4b6c-adba-810429539c84

```text
A cinematic neon-drenched street corner at night, bathed in deep magenta and electric blue light. A fierce young woman stands defiantly in front of a glowing vintage diner, dressed in an oversized black leather jacket with arms crossed and lips painted dark. Her expression radiates intensity and control, her face partially illuminated by the fluorescent sign behind her. Suddenly, her body detonates into a violent eruption of thick liquid paint—rich crimson, deep black, violet blue, and glossy magenta explode outward in a wave of surreal color. The paint floods the scene with motion, consuming her form entirely as her silhouette vanishes in mid-air. There is no trace of her left—only a swirling mass of vivid, dripping pigment suspended in the atmosphere. The diner and empty streets remain untouched, frozen in silence, while all that was solid has melted into pure, chaotic color.

```

- **Sample `3ef198f3-2096-4817-912d-d5276c91b9d6`** (priority 13) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/43531c16-c1da-4828-aa43-599f1d5f5add.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0ae209ef-0b9e-41ef-9ee0-71afa6e2e77a.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/3ef198f3-2096-4817-912d-d5276c91b9d6

```text
A vibrant sunlit street scene featuring a joyful young woman walking past a pastel pink building under a clear blue sky. She wears a colorful windbreaker in bold cyan, red, and yellow, paired with a bright yellow bucket hat. Her smile beams confidently as she turns slightly toward the camera mid-step, her curly hair bouncing with motion. Suddenly, her figure bursts into a dazzling explosion of bright liquid paint—sunshine yellows, bubblegum pinks, cyan blues, and glowing whites shoot outward from her torso in energetic, swirling ribbons. As the colors splash through the warm air, her body begins to dissolve into vibrant particles, scattering across the scene like floating confetti. Her joyful form fades into waves of color that shimmer and blend with the golden light, while the cheerful street and building behind her remain untouched—evoking a surreal moment of blissful disappearance frozen in time.

```

- **Sample `33ab84b7-4a95-4d81-81c0-66bfce145bd3`** (priority 12) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/99500d0c-5b17-4132-bae2-e61b890acda6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b22c87a4-42aa-4bd0-b8e5-afc0235f341c.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/33ab84b7-4a95-4d81-81c0-66bfce145bd3

```text
A moody and cinematic nighttime city scene viewed through a rain-soaked window, capturing a mysterious young woman standing still behind the glass. Her face is softly lit by neon lights in vivid magenta, electric blue, and soft violet tones, casting surreal reflections across her features. Raindrops streak the surface of the glass, distorting the glowing city behind her into a kaleidoscope of color. She gazes forward in silence, her expression unreadable, head slightly tilted as if suspended in thought. Suddenly, her form erupts into a fluid explosion of radiant paint—fluorescent purples, shimmering blues, hot pinks, and soft midnight hues burst outward from her chest and face in slow, swirling streams. The pigments dissolve into the air and smear across the wet glass as her body begins to disintegrate into the colored mist. Her silhouette gradually loses shape, fragmenting into delicate, iridescent particles that float into the night, leaving only the glowing city lights and rainfall untouched—amplifying the feeling of dreamy vanishing and emotional surrender.

```

- **Sample `6594748c-0f5d-4fa9-a562-4ace95682b48`** (priority 11) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4d7a08e5-6c4c-462a-91a1-32e0aef5361f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9ad1608a-93b0-4a78-b815-0fd3fc15bb6a.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/6594748c-0f5d-4fa9-a562-4ace95682b48

```text
A minimalist urban underpass scene featuring a striking young woman in a bold black outfit and spiked leather choker. She stands confidently beneath a massive concrete overpass, her head slightly tilted upward, chin raised, and eyes shielded by angular reflective sunglasses. Her posture is calm yet commanding, with a faint breeze subtly moving strands of her dark hair. Suddenly, her form erupts into a bold explosion of liquid paint—jet black, glossy charcoal, muted steel gray, and metallic titanium tones burst outward from her upper body in sharp, fluid streaks. The pigments shoot through the air like sharp brushstrokes, echoing the geometry of the overpass above, while the surrounding structure remains untouched—amplifying the surreal tension between human energy and brutalist architecture.
```

- **Sample `5526214d-f261-4cac-96cd-9ebc6dcf55d7`** (priority 10) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9de14438-4a60-4ebd-8f5a-e8789cbc47b4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d6e50781-1cec-4996-a399-73dfecfc7dfb.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/5526214d-f261-4cac-96cd-9ebc6dcf55d7

```text
A cinematic retro diner scene bathed in soft neon light, featuring a stylish young man seated alone in a green leather booth. He wears a sleek oversized leather jacket, wide gray trousers, and futuristic wraparound sunglasses. With one hand, he casually lifts a spoonful of soup toward his lips, his head slightly turned toward the glowing window signs, capturing a moment of calm intensity. Suddenly, his form erupts into a fluid explosion of molten color—glossy cherry reds, creamy whites, retro mint greens, and golden yellows burst outward from his torso in dynamic, swirling streams. The liquid pigments spiral and splash across the chrome table, upholstered booth, and checkered floor, creating a vivid contrast against the warm, nostalgic setting of the diner—yet the background remains untouched, amplifying the surreal spectacle of motion and color.
```

- **Sample `3896b7b7-36ac-44b5-a94a-0e69e30742fb`** (priority 9) — Wan 2.5 motion preset, steps=70, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/551c1ded-39e3-43e4-bf55-d8ea0166b49a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d205457a-de44-4e4a-95b6-885f392db4b7.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/3896b7b7-36ac-44b5-a94a-0e69e30742fb

```text
A stylish young person stands in a dramatic pose, their spiky, bright hair contrasting against the solid blue background. As they casually shift weight, a sudden rupture occurs at their torso, causing an eruption of translucent paint splashes that burst outwards in vibrant arcs of red, orange, yellow, green, blue, indigo, and violet. The paint trails swirl dynamically, suspended mid-air like liquid ribbons, enveloping the space where the figure once stood. Tiny droplets hover closely, enhancing the sense of depth and chaos in this surreal moment. Despite the action, the backdrop remains unchanged, emphasizing the stark division between the erupting chaos and the stability of reality.
```

- **Sample `abbdd700-8d01-434a-9708-119282eebd79`** (priority 8) — Wan 2.5 motion preset, steps=70, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6ff3bf2d-b7ca-4c9d-ada5-82d740560b02.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5bbeaf13-2f96-46c8-a1ef-4a2d8dca514b.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/abbdd700-8d01-434a-9708-119282eebd79

```text
A joyful, red-haired man with glowing skin, futuristic ski goggles, and a chunky diamond chain explodes mid-laughter into vibrant paint. His entire body—including arms, chest, and head—shatters into a fluid burst of translucent pigments, radiating outward in swirling splashes of red, orange, yellow, green, blue, indigo, and violet. The paint arcs mid-air, dripping in slow motion and wrapping the fading contours of his energetic pose. His wide-open smile and expressive posture remain briefly visible in the color before fully dissolving. The rich green studio background stays perfectly untouched, enhancing the surreal contrast between human motion and chromatic chaos.


```

- **Sample `c11e6191-1cea-427d-83ea-cc0c71d0d0e4`** (priority 7) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c07d0be4-3549-42b6-90aa-9593f746cd4b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/697027de-bfd8-42c3-a338-14d90fff87f6.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/c11e6191-1cea-427d-83ea-cc0c71d0d0e4

```text
A composed young man stands in profile, his neatly braided hair framing a calm, almost meditative expression. He wears a striking yellow varsity jacket emblazoned with an embroidered crest, embodying stillness in a twilight-toned studio setting. Suddenly, his figure erupts into a dynamic explosion of liquid paint, as deep navy blues, shimmering silvers, vibrant whites, and soft sandy hues burst outward from his face, braids, and jacket. The pigments swirl and flow through the air in dramatic motion, creating a vivid contrast against the untouched minimalist backdrop. This transformation embodies a striking juxtaposition of serenity and chaos, revealing the energy beneath his composed exterior.
```

- **Sample `e6d5bd16-9193-40f3-bb12-d5a62170b239`** (priority 6) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 976×928
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1064a6f5-0910-4db1-8bbe-0c738b76ad62.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/51cc4ad7-630c-4f6d-beec-336536f47122.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/e6d5bd16-9193-40f3-bb12-d5a62170b239

```text
A young man sits on a wooden stool, dressed in vibrant pink attire, including a loose-fitting pink jacket and matching pants. His braided hair gently tousles in the air, while his calm yet contemplative expression suggests tranquility. The set is enveloped in a soft pink hue, with a minimalistic backdrop that heightens the focus on him. Suddenly, a burst of dynamic pink paint explodes outward, enveloping him in a vivid cloud of color, as it splashes violently across the pristine wooden surface below. As the paint settles, he mysteriously vanishes, leaving a haunting emptiness that contrasts sharply with the lively explosion, while the background retains its serene essence.
```

- **Sample `262f46b2-87c2-494b-9252-1b9dde91d925`** (priority 5) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dea3e165-872d-44e1-8e80-92a6c269caa1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/14c6659f-b041-4aea-b495-9a334c219ce2.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/262f46b2-87c2-494b-9252-1b9dde91d925

```text
A fashionable man with pink bleached hair and bright cyan sunglasses sits casually on a vibrant yellow shag carpet, wearing an oversized hot pink ribbed sweater and wide pink jeans, arms relaxed between his spread knees. The atmosphere is charged with a sense of anticipation, as his figure suddenly bursts into a dramatic eruption of thick paint. Viscous streams of bubblegum pink, rich brown, cotton-candy blush, and icy blue explode outward from his head, sleeves, and knees in slow-motion, creating a striking contrast against the unchanging yellow backdrop. The fluid twists and curls dynamically in the air, dripping in glowing arcs, while his fingers tense subtly, capturing a moment of stillness before the vibrant chaos unfolds.
```

- **Sample `a15a77f5-cff4-4b3a-a4d4-0df86065c937`** (priority 4) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e7cc2e8a-28e3-4a7f-a481-b95560222749.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/45b860f5-db80-4aa7-96cd-a4abe93dac5f.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/a15a77f5-cff4-4b3a-a4d4-0df86065c937

```text
A masked man in a neon green balaclava and matching tracksuit leans out of a futuristic white supercar, its scissor doors raised high. His aggressive posture, with both middle fingers raised and dark sunglasses obscuring his expression, echoes defiance. Suddenly, his form detonates into a fierce burst of high-gloss paint, splattering viscous neon green, frosty white, and chrome black in jagged arcs of chaos. The explosion radiates outward, with thick pigment streams freezing in mid-air while dripping with inertia. Despite this vivid turmoil, the serene desert landscape and crystal blue sky remain undisturbed in the background, amplifying the surreal contrast. His fingers remain suspended in their gesture, caught in the moment of explosive expression.
```

- **Sample `a40b65a4-6cc9-4fcd-b945-d106aaa0ec04`** (priority 3) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/581b5547-848b-4f3a-8dde-ec58c5147bc6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/236b438b-2b09-435f-894d-f7b32d18ab11.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/a40b65a4-6cc9-4fcd-b945-d106aaa0ec04

```text
A young man dons a vibrant oversized pink streetwear shirt, baggy dark denim jeans, and white chunky sneakers, pausing mid-step on a wet asphalt street. The ground is speckled with scattered autumn leaves and small puddles, while he glances back over his shoulder with playful abandon. His headphones rest snugly on his head and sunglasses shield his eyes, embodying a carefree youth. Suddenly, his entire figure erupts into a dazzling explosion of glossy, liquid paint—intense hot pink, deep denim blue, bright white, and hints of charcoal black radiate from his limbs and torso. This paint splashes spiral and drip mid-air, capturing his movement in a moment of expressive color, while the damp street and moody overcast lighting highlight the vivid contrast of the surreal pigment burst.
```

- **Sample `89bc82f5-4cb9-48fc-8d4a-4b07c20488cb`** (priority 2) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/910f3498-cdc6-4b74-801e-d0746bd75f0d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bc3560ba-e672-4e44-b88b-e60096330b2d.mp4
  - page: https://higgsfield.ai/motion/e520303a-70ed-4438-9306-830528fbdd29/89bc82f5-4cb9-48fc-8d4a-4b07c20488cb

```text
A young woman with braided space buns, wearing a white graphic T-shirt, loose ripped jeans, and bold red sneakers, sits cross-legged against a deep burgundy backdrop, resting her face on her hand with a calm, introspective expression. Suddenly, her entire body bursts into thick streams of matte red, denim blue, muted white, and rich brown liquid paint—exploding from her shoes, jeans, shirt, and hair. The viscous colors spiral outward with gravity and force, mimicking natural paint behavior as they scatter mid-air. Despite the motion, the dark red background remains untouched, emphasizing the vibrant color contrast and emotional stillness beneath the chaos

```

- **Sample `2896d5ff-531d-4d35-9b04-7ee69227ebbf`** (priority 1) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3ad0d88d-74f0-495f-9a69-db31148e279c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9b9a25df-7de7-48a1-bc0a-cc5a62dd49ab.mp4
  - page: https://higgsfield.ai/motion/a1ee18d7-3705-4218-a05e-45b31badf04f/2896d5ff-531d-4d35-9b04-7ee69227ebbf

```text
A confident woman in profile, wearing a white and purple MERBICX cap, large hoop earrings, layered silver chains, and a white basketball jersey, stands against a vivid orange background. In an electrifying moment, her figure erupts into a bold explosion of bright orange, royal purple, glossy white, and metallic silver liquid paint. The burst originates from her hat, jewelry, and shoulder line—swirling through the air in thick, dynamic streams that mimic high-gloss paint in motion. Each color matches her actual accessories and outfit. The orange background remains perfectly still and untouched, heightening the contrast between calm and chaos.
```
