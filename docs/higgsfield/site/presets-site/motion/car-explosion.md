# Car Explosion — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A car bursts into flames and debris, creating a powerful, high-impact shot full of action and intensity
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5 | `41574f0a-2e5d-4b8c-8b9d-b3fef81151a5` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=41574f0a-2e5d-4b8c-8b9d-b3fef81151a5 |
| https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac | `e0394620-9694-441b-b3f8-a4230abcd9ac` | -229 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e0394620-9694-441b-b3f8-a4230abcd9ac |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A parked sedan in an empty lot explodes into a fireball, flipping into the air.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (VFX · elemental & destruction):** [Building Explosion](building-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5c36fe71-31b0-4b23-9d82-14ee1cb358b6.webp (320×210)
- Card preview, variant `e0394620`: https://d1xarpci4ikg0w.cloudfront.net/e4a140a9-e9ae-44f6-a101-0ef53598cf95.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59 | https://static.higgsfield.ai/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59.mp4 | https://static.higgsfield.ai/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59.webp | https://d1xarpci4ikg0w.cloudfront.net/34efe8da-253a-4aed-a27e-5c48fad2fa24.webp (320×242) |
| 2 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/2014a532-f9b9-4aad-aad4-50bcfbe7210b | https://static.higgsfield.ai/2014a532-f9b9-4aad-aad4-50bcfbe7210b.mp4 | https://static.higgsfield.ai/2014a532-f9b9-4aad-aad4-50bcfbe7210b.webp | https://d1xarpci4ikg0w.cloudfront.net/ca81fb4b-f0c6-4cc0-88a0-c62d42e6af17.webp (320×210) |
| 3 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/e38365a4-0e97-4d8d-9ade-4cba0d059abe | https://static.higgsfield.ai/e38365a4-0e97-4d8d-9ade-4cba0d059abe.mp4 | https://static.higgsfield.ai/e38365a4-0e97-4d8d-9ade-4cba0d059abe.webp | https://d1xarpci4ikg0w.cloudfront.net/53a0ff5c-01a3-4d6e-ad52-8e2da1484f1a.webp (320×210) |
| 4 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab | https://static.higgsfield.ai/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab.mp4 | https://static.higgsfield.ai/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab.webp | https://d1xarpci4ikg0w.cloudfront.net/f5a5b5ce-f2ef-49c5-b3ee-dee8c5869402.webp (320×182) |
| 5 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/babe06c5-d183-4763-b431-eb8fd8d35ffd | https://static.higgsfield.ai/babe06c5-d183-4763-b431-eb8fd8d35ffd.mp4 | https://static.higgsfield.ai/babe06c5-d183-4763-b431-eb8fd8d35ffd.webp | https://d1xarpci4ikg0w.cloudfront.net/428bf0da-0753-4415-823e-64cecdf68554.webp (320×210) |
| 6 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/d339e830-1e5d-4e00-bcd7-832217ac6fb8 | https://static.higgsfield.ai/d339e830-1e5d-4e00-bcd7-832217ac6fb8.mp4 | https://static.higgsfield.ai/d339e830-1e5d-4e00-bcd7-832217ac6fb8.webp | https://d1xarpci4ikg0w.cloudfront.net/0605b85b-ede7-4c60-aefc-aa551f687109.webp (320×210) |
| 7 | https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc | https://static.higgsfield.ai/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc.mp4 | https://static.higgsfield.ai/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc.webp | https://d1xarpci4ikg0w.cloudfront.net/9a2c9ccb-5631-40f6-b4f1-242f2dd276f3.webp (320×182) |

Source pages: https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5, https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `6ba7ed9c-d797-4b9a-a621-d5b1c45593cc`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/979e3388-080a-47e2-b288-b2f963e5eac0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6a4db3b4-9684-4051-a1e8-19cfe2f5bd55.mp4
  - page: https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac/6ba7ed9c-d797-4b9a-a621-d5b1c45593cc

```text
In a dimly lit parking garage, tension fills the air as armed figures take cover behind vehicles, their faces tense with urgency. Gunfire erupts, creating flashes of light against the hazy backdrop, illuminating the chaos and fear. A vintage car, seemingly caught in the crossfire, sits ominously at the center of the scene. The sound of bullets ricocheting emphasizes the moment, building suspense. Suddenly, the car explodes in a fiery eruption, sending debris flying and illuminating the faces of the combatants with a harsh glow. Smoke fills the air, blending with the sounds of conflict, as both sides recoil from the shock of the blast.
```

- **Sample `d339e830-1e5d-4e00-bcd7-832217ac6fb8`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d45b1783-d672-4b6d-9f9c-f9e8ac8bf548.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bba0e636-ff89-4bbf-9149-6c830e64de65.mp4
  - page: https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac/d339e830-1e5d-4e00-bcd7-832217ac6fb8

```text
Military column slowly advances through a devastated urban landscape. The ground is coated with frost and ash, littered with rubble from shattered buildings on both sides. Soldiers in heavy coats march forward with determination, their steps crunching against the frozen debris. An armored vehicle rolls forward on the left side of the frame, its thick tires grinding over broken stone and twisted metal. Suddenly, the armored vehicle erupts in a violent explosion, flames bursting outward with a deafening roar. The blast wave tears through the air, hurling soldiers backward, their bodies thrown into the rubble with crushing force. Dust and smoke billow upward, obscuring the chaotic aftermath as shattered debris rains down.

```

- **Sample `babe06c5-d183-4763-b431-eb8fd8d35ffd`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2935349f-f620-4ca0-9d38-060c06d13e13.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d538d84e-2aca-4bcd-ad40-cb57addf7613.mp4
  - page: https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac/babe06c5-d183-4763-b431-eb8fd8d35ffd

```text
A classic muscle car, its rear lights glowing faintly, tears down a dusty, winding mountain road at high speed. Dust kicks up behind the vehicle, swirling in golden beams of late afternoon sunlight. The road curves sharply around the rocky hillside, with the car maintaining a relentless, determined pace. Then, an enormous explosion erupts from the car, metal and glass shattering outward in all directions. The flames consume the vehicle entirely, leaving only burning wreckage scattered across the twisted, rugged path.

```

- **Sample `a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9982be06-bad4-42e5-b727-ee250419c1bf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1eb0cdd4-cc56-473e-80ed-bb85ae1f44e0.mp4
  - page: https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac/a5b98c99-81c3-42f6-bc3c-890b7f8ea1ab

```text
man talking with anger , while car explodes in background
```

- **Sample `e38365a4-0e97-4d8d-9ade-4cba0d059abe`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a8d983d9-4b0a-4a14-85b6-7967b8fcbb01.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/be00b841-ba41-4481-91ce-e2c33dc568ea.mp4
  - page: https://higgsfield.ai/motion/e0394620-9694-441b-b3f8-a4230abcd9ac/e38365a4-0e97-4d8d-9ade-4cba0d059abe

```text
People stroll and converse casually in the warm evening glow, their elegant attire shimmering under the soft, golden light. The grand estate in the background exudes opulence, with manicured gardens and intricate stone pillars. The limousine, sleek and polished, sits parked along the candle-lit driveway, its doors open as guests move gracefully between conversations. Suddenly, the limousine explodes with a thunderous roar, shattering the serene atmosphere. Flames burst outward as the shockwave ripples through the crowd. People are thrown backward by the violent impact, their bodies collapsing onto the grass and pavement as screams pierce the air. Debris scatters across the pristine lawn, leaving the once-celebratory gathering drenched in chaos and panic.
```

- **Sample `2014a532-f9b9-4aad-aad4-50bcfbe7210b`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/40d78097-227f-47b1-b3ed-83fbaa31c827.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e64e5db7-d6f6-4ffa-8230-386effaf3789.mp4
  - page: https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/2014a532-f9b9-4aad-aad4-50bcfbe7210b

```text
A military convoy of heavily armored vehicles riding through the barren desert landscape toward a viewer, the golden light of the low sun casting long, sharp shadows over the dusty ground. The sand, whipped up by the convoy’s passage, forms swirling clouds that cling to the air, reducing visibility. The roar of engines dominates the scene, echoing against distant hills. then, after a few seconds the leading vehicle detonates in a fierce explosion, fire and metal erupting into the air. The convoy comes to an abrupt halt, engines straining against sudden orders to stop. Dust mingles with smoke, the harsh sunlight piercing through the chaos. 


```

- **Sample `3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/66ded5a5-1adc-4d73-a306-d96122e53054.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/28afba59-834e-4d67-9873-566d8da281f0.mp4
  - page: https://higgsfield.ai/motion/41574f0a-2e5d-4b8c-8b9d-b3fef81151a5/3fdc7390-4fcb-4f94-b4c0-1bc7acaadd59

```text
car explosion on background
```
