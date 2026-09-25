# Action Run + Set on Fire — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject sprints at full speed while engulfed in flames—each stride leaving a fiery trail. A dramatic, high-stakes visual perfect for intense escape or hero moments.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 1
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5 | `cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5` | -203 | isMix | mix of: Action Run (motion id `89ee6db9-a56e-48e6-bdd4-806c528b3ba5`, strength 0.85), Set on Fire (motion id `06b50d3a-65a9-432b-bf0b-493fc3dcc006`, strength 0.5) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=89ee6db9-a56e-48e6-bdd4-806c528b3ba5%2C06b50d3a-65a9-432b-bf0b-493fc3dcc006&presetMotionStrengths=0.85%2C0.5 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A stuntman sprints down an alley fully engulfed in flames, leaving a fiery trail.
```

Use it as: upload a start image that matches the scene, select motion preset **Action Run + Set on Fire**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Action Run](action-run.md) (strength 0.85), [Set on Fire](set-on-fire.md) (strength 0.5)
- **Same category (Mix (2 stacked motions)):** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Crash Zoom In + Tentacles](crash-zoom-in-plus-tentacles.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/9fffa163-43db-4417-b36c-9d379cbf0a29.webp (320×210)
- Component preview — Action Run: https://d1xarpci4ikg0w.cloudfront.net/727e0399-f326-424b-a38e-fc6a28f38644.webp
- Component preview — Set on Fire: https://d1xarpci4ikg0w.cloudfront.net/a17709a2-ab6e-4900-9a9c-a47b3f847f27.webp

### Sample videos (8)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/490fffe3-6e41-46eb-8286-a0f9a7306d6d | https://static.higgsfield.ai/490fffe3-6e41-46eb-8286-a0f9a7306d6d.mp4 | https://static.higgsfield.ai/490fffe3-6e41-46eb-8286-a0f9a7306d6d.webp | https://d1xarpci4ikg0w.cloudfront.net/782bb0d8-3029-4800-a383-d05f695723ec.webp (320×242) |
| 2 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e273005c-4f8a-4289-9918-305f4a4b366f | https://static.higgsfield.ai/e273005c-4f8a-4289-9918-305f4a4b366f.mp4 | https://static.higgsfield.ai/e273005c-4f8a-4289-9918-305f4a4b366f.webp | https://d1xarpci4ikg0w.cloudfront.net/b623620c-2f9f-430d-8b25-65d2a904f723.webp (320×242) |
| 3 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/d7002947-a953-409d-9b9a-a17adece35b1 | https://static.higgsfield.ai/d7002947-a953-409d-9b9a-a17adece35b1.mp4 | https://static.higgsfield.ai/d7002947-a953-409d-9b9a-a17adece35b1.webp | https://d1xarpci4ikg0w.cloudfront.net/67b095a9-cf51-42cc-a5ce-056ece571294.webp (320×424) |
| 4 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/0712ae74-3737-446f-9151-6f6608a67e74 | https://static.higgsfield.ai/0712ae74-3737-446f-9151-6f6608a67e74.mp4 | https://static.higgsfield.ai/0712ae74-3737-446f-9151-6f6608a67e74.webp | https://d1xarpci4ikg0w.cloudfront.net/1a37ae4c-c224-480a-9e5f-4397afc95c1b.webp (320×424) |
| 5 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec | https://static.higgsfield.ai/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec.mp4 | https://static.higgsfield.ai/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec.webp | https://d1xarpci4ikg0w.cloudfront.net/c9c56196-5b56-42cf-968a-dbd5c3fc5f5e.webp (320×424) |
| 6 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e4410ade-ef15-494c-b9d1-a27caf6de3e7 | https://static.higgsfield.ai/e4410ade-ef15-494c-b9d1-a27caf6de3e7.mp4 | https://static.higgsfield.ai/e4410ade-ef15-494c-b9d1-a27caf6de3e7.webp | https://d1xarpci4ikg0w.cloudfront.net/586fb63c-879f-4488-b656-0cac5820f33e.webp (320×424) |
| 7 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/28199823-dd87-4c58-8356-957141a19cc7 | https://static.higgsfield.ai/28199823-dd87-4c58-8356-957141a19cc7.mp4 | https://static.higgsfield.ai/28199823-dd87-4c58-8356-957141a19cc7.webp | https://d1xarpci4ikg0w.cloudfront.net/2f0d93d3-3838-4ab1-a6e3-61e106a7146d.webp (320×210) |
| 8 | https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/c8edaba1-30b6-457b-bddd-6946973d25a4 | https://static.higgsfield.ai/c8edaba1-30b6-457b-bddd-6946973d25a4.mp4 | https://static.higgsfield.ai/c8edaba1-30b6-457b-bddd-6946973d25a4.webp | https://d1xarpci4ikg0w.cloudfront.net/d43a5e5b-fb3f-42eb-96da-6b07809764b1.webp (320×242) |

Source pages: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `490fffe3-6e41-46eb-8286-a0f9a7306d6d`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/88ca40e7-239f-4989-a824-59ebe91f9fe0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5ca439b9-db0a-494a-957b-56e776276312.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/490fffe3-6e41-46eb-8286-a0f9a7306d6d

```text
The scene bursts to life in the dimly lit subway as the woman sprints down the platform, her determination evident in every powerful stride. The camera follows her in a tight, shaky motion, capturing the blurred lines of the tile walls and the harsh white lights overhead, reflecting the urgency of her escape. Suddenly, without warning, she ignites; flames erupt around her, creating an awe-inspiring contrast against the cool, metallic hues of the subway. Her hair whips behind her, illuminated by the fiery glow that envelops her, as she continues to run, each step releasing sparks that dance along the ground. The flames twist and swirl, almost as if they are alive, enhancing the drama of her fierce effort to break free. The scene culminates with an explosive view of her dashing forward, engulfed in fire, leaving behind streaks of vivid orange flames that pulse and flicker in the subway's stark environment. Concrete visual keys: glowing embers trailing behind her, flames reflected in the polished floor, trains blurring into streaks of light.
```

- **Sample `e4410ade-ef15-494c-b9d1-a27caf6de3e7`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b501c96c-b407-48e8-b1e6-a35af82cae94.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c5422f4f-c5ca-43a4-9521-c575047c2624.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e4410ade-ef15-494c-b9d1-a27caf6de3e7

```text
The scene erupts in an inferno as the soldier bursts into flames, his silhouette stark against the backdrop of a war-torn battlefield. The fire engulfs him instantly, creating a roaring blaze that crackles and hisses, illuminating his fearsome expression of determination. As he instinctively breaks into an action run, the camera shifts into exhilarating motion—shaky angles capturing the urgency and peril of his escape. His boots pound against the scorched earth, dirt and debris flying as he races toward the viewer, flames licking at his back. Explosions light the sky, punctuating the chaos around him while the camera dynamically transitions with him through the fiery onslaught. The camera spins as he ducks and weaves through smoke-filled air, the heat radiating off him palpable and intense. Concrete visual keys: flames trailing behind him like a fiery cloak, smoke curling into the air, stray debris swirling in the heat of battle.
```

- **Sample `28199823-dd87-4c58-8356-957141a19cc7`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c50a683b-6156-4120-ae7f-ab2e29f138cd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0fd6f714-8edd-4ef6-b194-251c6f0f87ec.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/28199823-dd87-4c58-8356-957141a19cc7

```text
The scene opens in a vibrant, sunlit tunnel, its walls pulsating with streaks of gold, mimicking rushing energy. The camera follows the man in a tailored suit as he propels forward, his intensity palpable. Fast-paced, dynamic angles capture the grit and determination etched across his face while the background blurs into streaks of light, emphasizing the momentum of his run. Suddenly, he erupts in a burst of fierce flames, the fire engulfing him in an instant and illuminating the entire tunnel. The camera weaves around him, showing how the flames synchronize with his frantic pace, escalating the sensation of motion. Shaky cam techniques add urgency, capturing the sheer power of the moment, as he runs unabated, fire dancing around him like an aura of unstoppable force. The visual climax culminates in his silhouette framed by the burning intensity, embodying both danger and exhilaration. Concrete visual keys: flames saturating the golden streaks of light, contrasting the darkness of the tunnel, and the determined expression of the man, fierce and unyielding amidst the chaos.
```

- **Sample `0712ae74-3737-446f-9151-6f6608a67e74`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/45552639-9933-4b99-99ac-221ff8ba6f72.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/02a24020-1a2d-43d7-8f6b-2f210af1c6ef.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/0712ae74-3737-446f-9151-6f6608a67e74

```text
As the scene opens, the woman bursts into flames, the vivid orange and yellow fire rapidly enveloping her figure in a stunning display of supernatural intensity. The flames flicker wildly, highlighting her fierce expression as she becomes a fiery silhouette against the background of brightly colored shelves. Following this moment of shock, the camera shifts into an Action Run, capturing each agile stride she takes, the shaky cam enhancing the frantic energy of her escape. The aisles blur past in a vibrant cascade of products, accentuating her speed and urgency as she navigates through the narrow space. Dynamic angles capture the flames trailing behind her, leaving a dramatic wake of flickering light and heat as she races forward. The camera ducks and weaves, immersing the viewer in the chaos of the chase while contrasting the ordinary grocery store setting with the extraordinary spectacle of her fiery presence. Concrete visual keys: shelves shimmering in the heat of the flames, reflections dancing off the polished tiles, and the fierce determination etched across her face framed against trailing fire.
```

- **Sample `1f02f3fb-fc57-4e46-99cb-caaf3d9654ec`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/80f271da-c601-4e3f-a8a7-a324dfd0cab9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/49351b2d-bfed-4bb8-80ae-2d3dc8aeeba5.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/1f02f3fb-fc57-4e46-99cb-caaf3d9654ec

```text
The scene begins with a sweat-drenched athlete bursting up the steep, concrete staircase, each muscular stride powered by sheer determination. As the camera captures his hurried ascent, dynamic angles whirl around him, a shaky cam emphasizing his frantic energy as he grips the metal railing with urgency. Suddenly, in an explosive flash, his form ignites, engulfed by vivid flames that illuminate the dimly lit stairwell, casting flickering shadows on the stark walls. The intense fire swirls around him, portraying a surreal transformation as he barrels forward, seemingly unfazed by the roaring inferno. The raw power of his action run is heightened, the flames trailing behind him like a comet, inciting a sense of both awe and peril within the viewer. The stairwell becomes a fiery tunnel, his silhouette illuminated against the blaze, embodying an unstoppable force. Concrete visual keys: flames dancing vividly in the dim light, smoke trailing in his wake, the contrast of sweat and fire illuminating his determined expression.
```

- **Sample `d7002947-a953-409d-9b9a-a17adece35b1`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/63c87b7d-fd12-4719-8ba4-5afa052efd5a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a95f8f11-caca-45ab-92b6-9e5c53449fd4.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/d7002947-a953-409d-9b9a-a17adece35b1

```text
The scene opens in a shadowy alleyway, rain pouring down as neon lights create a kaleidoscope of reflections on the slick pavement. Suddenly, the man bursts into flames, engulfed in a fierce inferno, illuminating the alley with an orange glow against the midnight blue of the rain-soaked street. The fire roars dramatically, casting flickering shadows as he sprints forward, unphased by the raging flames that dance around him. The camera shifts into Action Run mode, dynamically tracking his swift movements, the ground exploding beneath his feet as he splashes through puddles, water spraying in chaotic arcs. With each sharp turn, the angles shift, embodying his frantic energy and determination. The flames trail behind him, creating a stunning visual contrast against the streaming rain, amplifying the urgency of his escape. Concrete visual keys: flames reflecting on the wet pavement, droplets of rain caught in mid-air, vibrant neon light refracted through the chaos.
```

- **Sample `c8edaba1-30b6-457b-bddd-6946973d25a4`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8bb75830-d5aa-40dc-a86a-36e013f95ca5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bc16fc55-734e-4285-bf9a-a5b4374365f6.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/c8edaba1-30b6-457b-bddd-6946973d25a4

```text
On a vibrant basketball court, the atmosphere is light as a man bursts into laughter, his smile revealing dazzling gold teeth while he sprints away from a group of frantic firefighters, extinguishers in hand. In an instant, the mood shifts as he ignites, flames engulfing him with a dramatic intensity, turning his playful run into a chaotic spectacle. The camera captures this fierce moment in a fast-paced, shaky Action Run style, following him closely as he dashes across the court—even as the fire blazes around him. The firefighters, with desperate looks, scramble in pursuit, their efforts amplified by dynamic angles that highlight the growing urgency of the situation. Smoke billows behind him, adding to the chaos, while the fiery spectacle unfolds against the backdrop of bright court lines. Concluding with a tight shot of the man’s face, now illuminated by the flames, we see a mix of exhilaration and fear as he races through the haze. Concrete visual keys: flames flickering wildly around his silhouette, firefighters’ figures distorted in the smoke, contrasting brightly colored court lines fading into the chaos.
```

- **Sample `e273005c-4f8a-4289-9918-305f4a4b366f`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4f64071c-c1ef-4c6d-9113-6986d7df3b99.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a3a131e7-0d7e-472e-959a-f3691e57a5c6.mp4
  - page: https://higgsfield.ai/motion/cb9fcdea-32f6-42e4-b2ba-ef7d51abe8e5/e273005c-4f8a-4289-9918-305f4a4b366f

```text
The dimly lit parking garage buzzes with tension, illuminated by flickering neon lights casting ominous glows across the slick floor. Suddenly, the woman bursts into flames, engulfed in an intense, swirling inferno that dances around her, turning her crimson outfit into a vivid silhouette against the fiery backdrop. The camera captures this moment with an exhilarating 'Action Run', dynamically shaking as it follows her swift movements, her hair billowing like flames in the breeze. As she sprints forward, the flames trail behind her, illuminating the space with eerie flickers of light, reflecting off puddles of water beneath. Each footfall resonates with urgency, the camera pivoting and swaying to mirror her breathless speed. Shadows of her burning form carve out frantic shapes on the walls, heightening the drama of her escape. Concrete visual keys: raging fire flickering in her wake, reflections dancing on the ground, the distorted glow of neon lights illuminating her path.
```
