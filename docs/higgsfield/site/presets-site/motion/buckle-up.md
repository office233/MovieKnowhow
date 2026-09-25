# Buckle Up — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Low angle shot from beneath, as if filmed through a transparent glass floor, revealing the person’s figure and soles, creating a dynamic, voyeuristic perspective.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f | `4ef72175-227a-418b-923d-2831dcdf7d4f` | 35 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=4ef72175-227a-418b-923d-2831dcdf7d4f |
| https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653 | `678f065d-cf5b-4d3d-8d49-9251c43e8653` | 64 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=678f065d-cf5b-4d3d-8d49-9251c43e8653 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Low angle from beneath a glass floor looking up at a woman in sneakers standing on it, city skyline above her.
```

Use it as: upload a start image that matches the scene, select motion preset **Buckle Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Jarring, turbulent shaking camera · **Best use:** Rough rides, turbulence, loss of control · **Models:** "Buckle Up as the car skids around the corner" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/922bf801-0c23-4c12-8d90-b68a4cd15b32.webp (320×242)
- Card preview, variant `678f065d`: https://d1xarpci4ikg0w.cloudfront.net/3f9c74fb-4977-4e1b-8b94-50ba7102fd13.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/e5257b46-e18d-4052-897b-9a65f3c764b9 | https://static.higgsfield.ai/e5257b46-e18d-4052-897b-9a65f3c764b9.mp4 | https://static.higgsfield.ai/e5257b46-e18d-4052-897b-9a65f3c764b9.webp | https://d1xarpci4ikg0w.cloudfront.net/619ffcac-b7b0-416b-8a3d-f104768768a4.webp (320×182) |
| 2 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/334f044d-0f49-4fc6-aa6a-dd2a117e1558 | https://static.higgsfield.ai/334f044d-0f49-4fc6-aa6a-dd2a117e1558.mp4 | https://static.higgsfield.ai/334f044d-0f49-4fc6-aa6a-dd2a117e1558.webp | https://d1xarpci4ikg0w.cloudfront.net/5fcbfbb0-e4a2-4680-a7b2-ec1dd769b5ca.webp (320×562) |
| 3 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/ffc32e71-57e2-455a-96c4-515117e9f626 | https://static.higgsfield.ai/ffc32e71-57e2-455a-96c4-515117e9f626.mp4 | https://static.higgsfield.ai/ffc32e71-57e2-455a-96c4-515117e9f626.webp | https://d1xarpci4ikg0w.cloudfront.net/2b0b1b8f-fda3-4ba3-9f2e-40470fc92ecc.webp (320×182) |
| 4 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b | https://static.higgsfield.ai/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b.mp4 | https://static.higgsfield.ai/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b.webp | https://d1xarpci4ikg0w.cloudfront.net/9ef29976-ac21-410b-9d5c-a1bd82844eb4.webp (320×242) |
| 5 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/4cb97887-e00d-42fb-a424-15277d5f12f9 | https://static.higgsfield.ai/4cb97887-e00d-42fb-a424-15277d5f12f9.mp4 | https://static.higgsfield.ai/4cb97887-e00d-42fb-a424-15277d5f12f9.webp | https://d1xarpci4ikg0w.cloudfront.net/c6aab69c-4ad5-4714-a457-da26c8d0ea14.webp (320×242) |
| 6 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70 | https://static.higgsfield.ai/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70.mp4 | https://static.higgsfield.ai/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70.webp | https://d1xarpci4ikg0w.cloudfront.net/38f5c020-ea56-4db0-af80-764264a6cb39.webp (320×210) |
| 7 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/45d39613-8e94-4364-a122-daf192ad39dc | https://static.higgsfield.ai/45d39613-8e94-4364-a122-daf192ad39dc.mp4 | https://static.higgsfield.ai/45d39613-8e94-4364-a122-daf192ad39dc.webp | https://d1xarpci4ikg0w.cloudfront.net/3b6465df-d4cc-49b9-a8cc-2189fa23ea25.webp (320×242) |
| 8 | https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/a9ea628d-e297-4e23-9a4b-27fa2a0c7634 | https://static.higgsfield.ai/a9ea628d-e297-4e23-9a4b-27fa2a0c7634.mp4 | https://static.higgsfield.ai/a9ea628d-e297-4e23-9a4b-27fa2a0c7634.webp | https://d1xarpci4ikg0w.cloudfront.net/7c511361-91ad-4825-af76-d97bcbdbd807.webp (320×210) |

Source pages: https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f, https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `a9ea628d-e297-4e23-9a4b-27fa2a0c7634`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a901ef27-593e-42b8-ba33-ae2aa95a95b7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e141a111-08e3-45b2-917d-9e7b63bec41b.mp4
  - page: https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653/a9ea628d-e297-4e23-9a4b-27fa2a0c7634

```text
In a low-angle shot, a regal woman towers above the viewer, her gilded golden foot extending toward the camera, shimmering in the warm sunlight. She moves with a slow, deliberate grace, embodying an otherworldly presence as her luxurious black silk gown billows dramatically in the breeze. The vast blue sky behind her, punctuated by soft, wispy clouds, amplifies the surreal atmosphere surrounding her. With one hand resting lightly on her chin, she gazes forward with an air of quiet confidence, juxtaposing the celestial and the earthly. The bold composition evokes themes of mythology and high fashion, merging the sacred with the avant-garde as the intricate textures of her gown catch the light.
```

- **Sample `45d39613-8e94-4364-a122-daf192ad39dc`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/01a65919-7ad9-40d1-ae05-29f7659ecd12.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d060ded4-5c37-48c6-beea-bda05cf9aff1.mp4
  - page: https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653/45d39613-8e94-4364-a122-daf192ad39dc

```text
A bold and unapologetic rapper sits above a glass floor, her legs spread wide in a dominant stance that exudes confidence and control. The scene is illuminated by sunlight, highlighting her intricate platform boots that rest against the glass, casting sharp reflections below. She rhythmically delivers her verses, eyes locked onto the lens, her lips moving in sync with the bass-heavy beat that vibrates throughout. One hand grips a microphone, while the other gestures expressively, adding emphasis to her powerful lyrics. The oversized blazer she wears flutters in the wind, creating movement that mirrors her poised yet dynamic presence. The atmosphere crackles with electric energy, showcasing a raw, stylish performance infused with high-fashion attitude and lyrical prowess.
```

- **Sample `d9ed9d4f-c2a4-4991-9197-b2cbc3984a70`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d13e0196-5902-473f-a250-a364aa70802b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c65893e2-0ea1-451d-a918-d3f7914971f9.mp4
  - page: https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/d9ed9d4f-c2a4-4991-9197-b2cbc3984a70

```text
A celestial woman looms above from a low-angle perspective, her ethereal presence commanding attention as she stands on a glowing golden platform. The vast cosmos stretches endlessly behind her, dense with distant stars and sleek futuristic spacecraft gliding through the void. Her flowing deep-blue dress drifts weightlessly, echoing the emptiness of space, while her serene yet powerful expression invites awe. Her elongated arms stretch into the abyss like a cosmic deity, shaping the universe around her as golden heels gleam with interstellar light. Agile fighter ships dart around her, trailing neon exhaust, creating a dynamic contrast against the tranquil backdrop. This scene harmonizes high-fashion surrealism with the grandeur of space opera, evoking a narrative where divinity seamlessly intertwines with exploration of the cosmos.
```

- **Sample `4cb97887-e00d-42fb-a424-15277d5f12f9`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7deb3c00-9b0b-4b14-a438-e890b4fea6c9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ee5d23bc-7d57-4751-9343-9a9bb8e83d13.mp4
  - page: https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/4cb97887-e00d-42fb-a424-15277d5f12f9

```text
A dynamic low-angle shot captures a futuristic superhero launching into the sky, her foot pushing off intensely, causing the frame to tremble with her immense force. Sunlight flares dramatically around her, illuminating her sleek armored suit adorned with glowing circuitry, as her flowing cape catches the wind. Streaks of energy emanate from her propulsion system, creating a sense of motion and urgency. The background blurs into trails, distorting with her rapid ascent while reflections of her departure ripple across the glass surface beneath. An electrifying atmosphere envelopes the scene, portraying her as an unstoppable force soaring into the heavens.
```

- **Sample `e100b8d9-c6aa-4f5b-b856-cbe5da13f50b`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/710436f1-ba02-4063-8c6d-951f95a67c5a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bdc0937e-d917-47ca-abdf-d019fedd6382.mp4
  - page: https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653/e100b8d9-c6aa-4f5b-b856-cbe5da13f50b

```text
The camera captures a low-angle dynamic shot of the dancer, emphasizing her power and fluidity as she executes an energetic kick mid-motion. Her sharp gaze locks onto the lens, exuding confidence and control, while the oversized sole of her shoe dominates the foreground, creating depth. Her loose plaid jacket flares outward, responding to the force of her movement, contrasting beautifully with her sleek, tailored pants that elongate her form. The clean, minimalistic white background isolates her figure, making every detail of her pose crisp and defined. The composition is bold and fashion-forward, blending athleticism with a high-fashion attitude, evoking a sense of dynamic elegance.
```

- **Sample `ffc32e71-57e2-455a-96c4-515117e9f626`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dcaa684e-f71f-4797-a98d-1a95ce02b0a2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0b4186b6-4784-42b8-8789-a57b552c5d67.mp4
  - page: https://higgsfield.ai/motion/4ef72175-227a-418b-923d-2831dcdf7d4f/ffc32e71-57e2-455a-96c4-515117e9f626

```text
A young man stands confidently, leaning forward with a smirk, his eyes piercing down at the camera as he raps. The stage is awash in vibrant colors, with dramatic spotlights cutting through the smoky night atmosphere, illuminating the urban skyline behind him. His outfit, a red plaid shirt over a white tee, complements the striking red and black sneakers he wears, showcasing his style. The energy is palpable, infused with a rhythm that echoes through the crowd, creating a sense of immediacy and excitement. The lighting highlights the intricate details of his jewelry, casting glimmers that reflect his bold persona.
```

- **Sample `334f044d-0f49-4fc6-aa6a-dd2a117e1558`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/444884cf-387c-4b4c-b67b-58008beeb5a5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/69d7c709-f13d-4bcd-a054-4b6b7f170a81.mp4
  - page: https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653/334f044d-0f49-4fc6-aa6a-dd2a117e1558

```text
A sleek, dark cat walks gracefully on a transparent glass surface, its powerful limbs outstretched and its expression fierce yet curious. The ambient light casts an ethereal glow, bathing the scene in hues of deep blue and violet, creating an otherworldly atmosphere. As it moves, droplets of water bead on the glass, shimmering with reflected colors, enhancing the sense of motion and fluidity. The contrasting play of light and shadows highlights the feline's features, exuding an aura of elegance and strength. This moment captures both the majestic beauty of the cat and the unique perspective of its transparent path.
```

- **Sample `e5257b46-e18d-4052-897b-9a65f3c764b9`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/54a986a3-9c8f-4331-9e14-6869b508fa47.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ecaba944-c122-468b-b1ba-1878b7459416.mp4
  - page: https://higgsfield.ai/motion/678f065d-cf5b-4d3d-8d49-9251c43e8653/e5257b46-e18d-4052-897b-9a65f3c764b9

```text
A girl steps confidently onto a transparent glass surface, her oversized white hoodie contrasting sharply with dark, loose-fit trousers. The camera is positioned low, showcasing her striking sneakers and the vast openness below her feet, instilling a sense of daring. Soft, ambient lighting casts gentle reflections, illuminating her serious expression while hints of cool blue and warm amber create an intriguing atmosphere. The glass amplifies the tension, representing both clarity and vulnerability, as she stands poised above the void. Each step resonates with purpose, her posture embodying strength and introspection in this surreal, minimalist space.
```
