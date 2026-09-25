# Car Chasing — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Follows fast-moving cars with dynamic camera angles to create thrilling, high-speed chase scenes. Ideal for action-packed sequences and cinematic intensity.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae | `2f2a541b-6ce5-4115-92fb-4d6473d8e3ae` | 62 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2f2a541b-6ce5-4115-92fb-4d6473d8e3ae |
| https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf | `a76f2e99-0a41-4fdf-934d-9c95b0ee85bf` | -230 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a76f2e99-0a41-4fdf-934d-9c95b0ee85bf |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Two sports cars race through downtown streets at night, weaving through traffic, sparks flying on the corners.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Chasing**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Low, ground-level follow of speeding vehicles · **Best use:** High-speed pursuits · **Models:** "Car Chasing — camera hugs the side of the black car through the streets" · **Phrase/template:** C1

## Related presets

- **Mixes that use this preset:** [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/642dce9f-5f66-4db5-8bc4-68323e4ef605.webp (320×486)
- Card preview, variant `a76f2e99`: https://d1xarpci4ikg0w.cloudfront.net/00052de6-aed3-4beb-99a2-0ba966a6a1ce.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158 | https://static.higgsfield.ai/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158.mp4 | https://static.higgsfield.ai/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158.webp | https://d1xarpci4ikg0w.cloudfront.net/15433452-b843-4546-bf08-d4ba5205b6e5.webp (320×486) |
| 2 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/5fdba71e-81a8-483c-807a-02e7c672e103 | https://static.higgsfield.ai/5fdba71e-81a8-483c-807a-02e7c672e103.mp4 | https://static.higgsfield.ai/5fdba71e-81a8-483c-807a-02e7c672e103.webp | https://d1xarpci4ikg0w.cloudfront.net/3ce47e37-d3ed-4f3a-9f3a-73d5a426fcb5.webp (320×182) |
| 3 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a7a375dd-8040-4b65-8575-ecec9fca6120 | https://static.higgsfield.ai/a7a375dd-8040-4b65-8575-ecec9fca6120.mp4 | https://static.higgsfield.ai/a7a375dd-8040-4b65-8575-ecec9fca6120.webp | https://d1xarpci4ikg0w.cloudfront.net/4eb2c8ad-cebf-4c7c-a306-81eb4a946a76.webp (320×182) |
| 4 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/2c907ba5-9426-4e36-9007-3226f859f391 | https://static.higgsfield.ai/2c907ba5-9426-4e36-9007-3226f859f391.mp4 | https://static.higgsfield.ai/2c907ba5-9426-4e36-9007-3226f859f391.webp | https://d1xarpci4ikg0w.cloudfront.net/2088234e-f742-4e2d-b3ad-ec3294ddd166.webp (320×182) |
| 5 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/0338f787-0b28-4d03-9a4f-c5504a2939c7 | https://static.higgsfield.ai/0338f787-0b28-4d03-9a4f-c5504a2939c7.mp4 | https://static.higgsfield.ai/0338f787-0b28-4d03-9a4f-c5504a2939c7.webp | https://d1xarpci4ikg0w.cloudfront.net/4ce11cd1-5964-449b-b251-8993960f3083.webp (320×182) |
| 6 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0 | https://static.higgsfield.ai/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0.mp4 | https://static.higgsfield.ai/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0.webp | https://d1xarpci4ikg0w.cloudfront.net/96355753-f4fd-4346-a1a4-d46fc2704b53.webp (320×182) |
| 7 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/01cb21b2-c935-4ead-be0b-b5d6b0714dbb | https://static.higgsfield.ai/01cb21b2-c935-4ead-be0b-b5d6b0714dbb.mp4 | https://static.higgsfield.ai/01cb21b2-c935-4ead-be0b-b5d6b0714dbb.webp | https://d1xarpci4ikg0w.cloudfront.net/b9422548-2407-4467-a74e-f7ee1c0bda93.webp (320×320) |
| 8 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/0b93fedd-e622-4f24-acbe-4f402fa2bd31 | https://static.higgsfield.ai/0b93fedd-e622-4f24-acbe-4f402fa2bd31.mp4 | https://static.higgsfield.ai/0b93fedd-e622-4f24-acbe-4f402fa2bd31.webp | https://d1xarpci4ikg0w.cloudfront.net/22ae73ef-3f9f-4f99-8c9b-fcc4b9ccb13c.webp (320×182) |
| 9 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/4fe8aecd-ba72-49db-bc8c-de24334f5ca5 | https://static.higgsfield.ai/4fe8aecd-ba72-49db-bc8c-de24334f5ca5.mp4 | https://static.higgsfield.ai/4fe8aecd-ba72-49db-bc8c-de24334f5ca5.webp | https://d1xarpci4ikg0w.cloudfront.net/40060f88-5b0b-4d79-994d-9856a2ecf372.webp (320×182) |
| 10 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/948a9398-ec6f-41ba-841c-2e7349d08c96 | https://static.higgsfield.ai/948a9398-ec6f-41ba-841c-2e7349d08c96.mp4 | https://static.higgsfield.ai/948a9398-ec6f-41ba-841c-2e7349d08c96.webp | https://d1xarpci4ikg0w.cloudfront.net/1c362187-99c9-4b8f-9908-9662fe8d566b.webp (320×182) |
| 11 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ac3d647f-6530-4343-b6f4-8492fb8bf9d9 | https://static.higgsfield.ai/ac3d647f-6530-4343-b6f4-8492fb8bf9d9.mp4 | https://static.higgsfield.ai/ac3d647f-6530-4343-b6f4-8492fb8bf9d9.webp | https://d1xarpci4ikg0w.cloudfront.net/a4e607b5-e7f3-456b-b507-6aecba24f6fd.webp (320×562) |
| 12 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/34883e35-9921-4503-a4fe-680cf0dfc1c2 | https://static.higgsfield.ai/34883e35-9921-4503-a4fe-680cf0dfc1c2.mp4 | https://static.higgsfield.ai/34883e35-9921-4503-a4fe-680cf0dfc1c2.webp | https://d1xarpci4ikg0w.cloudfront.net/416d96d7-a747-41b4-a0f4-2e350622bf69.webp (320×182) |
| 13 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/3f02ca5e-6296-49a2-87ec-e46d148c25e6 | https://static.higgsfield.ai/3f02ca5e-6296-49a2-87ec-e46d148c25e6.mp4 | https://static.higgsfield.ai/3f02ca5e-6296-49a2-87ec-e46d148c25e6.webp | https://d1xarpci4ikg0w.cloudfront.net/d8199c4f-61dd-4ed2-a72c-6e68231c5e02.webp (320×562) |
| 14 | https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b | https://static.higgsfield.ai/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b.mp4 | https://static.higgsfield.ai/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b.webp | https://d1xarpci4ikg0w.cloudfront.net/d99c9c06-69a8-478c-9d39-9821973753bc.webp (320×182) |

Source pages: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae, https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf. Crawled 2026-09.


## Real sample prompts (site)

14 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2e6b1787-7046-433b-9a91-689dc1153e42.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1348911e-8498-4b45-b65a-f9c64aca9dcb.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ca38cfeb-76b9-4f8e-98a9-3ca09b365f8b

```text
The scene begins tight on the man’s face—rain streaking down the windshield, neon reflections flickering across his eyes, muscles tense on the wheel. Sirens howl behind him, red and blue light pulsing against the soaked pavement.

Suddenly, the camera zooms out fast, revealing the police car right on his tail, tires skidding in the wet. The police car rushes ahead of the red car.
```

- **Sample `3f02ca5e-6296-49a2-87ec-e46d148c25e6`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/02282ae2-cb06-4b96-aac0-4417e2d76138.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0bc9ec2c-99e1-4e48-a393-eab4a82e74ce.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/3f02ca5e-6296-49a2-87ec-e46d148c25e6

```text
Two sport bikers, fully geared in sleek black outfits and dark helmets, race fiercely on an illuminated urban highway at night. The rider on the left initially falls slightly behind, then quickly accelerates, skillfully maneuvering behind the competitor on the right. With impressive control, he swings around from the opposite side, lifting the front wheel of his motorcycle off the ground in an exhilarating wheelie as he overtakes his opponent. The atmosphere is charged with adrenaline, vividly styled through dynamic motion blur, dramatic city lighting, and cinematic realism.
```

- **Sample `34883e35-9921-4503-a4fe-680cf0dfc1c2`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4e36527b-94b4-4a2d-802f-8bd82a737994.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a2f0e08a-ce33-41c6-b38c-76d72df7ac50.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/34883e35-9921-4503-a4fe-680cf0dfc1c2

```text
an intense cinematic car chase scene. Yellow BMW races though the street at night in high speed, behind it a sleek silver mercedes GTR appears and overtakes it, camera captures the intense motion and splashes of water coming from the cars' wheels. ohwx tchnq
```

- **Sample `ac3d647f-6530-4343-b6f4-8492fb8bf9d9`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ad3025ff-76ed-4090-8512-db64eceed5f6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3eefe9c6-c80e-4744-940b-9c0defbb1aaa.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/ac3d647f-6530-4343-b6f4-8492fb8bf9d9

```text
an intense high speed car chase scene.  The green soviet car tries to escape the police car. ohwx tchnq
```

- **Sample `948a9398-ec6f-41ba-841c-2e7349d08c96`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f67fe2ab-cb89-4ea7-bedf-c205de23ef6a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5bac99d5-5c9f-45d6-bee7-481cc273cf0e.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/948a9398-ec6f-41ba-841c-2e7349d08c96

```text
A tense front-view action shot: a classic silver Porsche 911 barrels down a suburban street. Behind it, two police cars surge forward, red-and-blue lights flashing, sirens wailing, and tires screeching as they close in.

Dust kicks up from the road as the driver, focused and unflinching, punches the gas.

ohwx tchnq
```

- **Sample `4fe8aecd-ba72-49db-bc8c-de24334f5ca5`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3f69e3f9-cd7a-4727-80d1-ee4d44045574.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fefbc2c1-d0ce-4ec7-a117-76b224f4a1ce.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/4fe8aecd-ba72-49db-bc8c-de24334f5ca5

```text
A vibrant magenta Cadillac Eldorado lowrider with gold accents cruises confidently down a palm-lined boulevard at sunset, its hydraulics bouncing softly as it accelerates. Just ahead, a sleek black Chevrolet Impala glides in the same direction, but the Cadillac surges forward, beginning to overtake it with smooth dominance. Tracking shot from a low front-left angle, slowly dollying forward to capture the Cadillac as it pulls alongside and begins to pass the Impala. Neon signs and retro diners blur behind in glowing motion trails. The atmosphere is euphoric and bold, bathed in warm sunset tones of violet, pink, and orange. Styling evokes retro West Coast street cruising with glossy chrome reflections, motion blur, and soft bokeh from streetlights.

```

- **Sample `0b93fedd-e622-4f24-acbe-4f402fa2bd31`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/96c7ee27-b8d2-4c19-b64a-ed8195cbf386.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c9c056d1-e372-448b-9802-36307294887a.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/0b93fedd-e622-4f24-acbe-4f402fa2bd31

```text
A tense street chase scene, caught in a narrow European alley. A yellow taxi blurs past the camera, rushing after a sleek black SUV. 
```

- **Sample `01cb21b2-c935-4ead-be0b-b5d6b0714dbb`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d2ce4457-f556-46ae-9dd0-6a5e94cac8d7.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/255d129a-d304-4c56-8cbe-7ee6f1cb258e.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/01cb21b2-c935-4ead-be0b-b5d6b0714dbb

```text
A silver Nissan GT-R R34 with blue racing stripes roars down a neon-lit city street at night, engine growling with intensity. The car surges forward, coming aggressively close to the camera, its headlights flaring and grille filling the frame in a split-second burst of speed. It then pulls back smoothly, revealing the full silhouette of the car as it maintains its momentum. Behind it, another high-performance vehicle emerges into view, locked in a relentless pursuit. The scene is electric and fast-paced, pulsing with cinematic energy, sharp reflections, motion blur, and the adrenaline of an urban street chase.
```

- **Sample `3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/acf9bb30-8d1b-438e-93a6-bacc606e84c3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bb99e70d-7103-46dd-ad99-662872445226.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/3bf630f3-eb02-4bf3-9fc9-78cbdf5e70c0

```text
lowrider car rides forward, another red lowrider appears from the back 
```

- **Sample `0338f787-0b28-4d03-9a4f-c5504a2939c7`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/79a29ff4-801f-486d-80a0-fdf25644002a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0a9d9fee-88c8-41ff-9737-1f15d96d6fd9.mp4
  - page: https://higgsfield.ai/motion/a76f2e99-0a41-4fdf-934d-9c95b0ee85bf/0338f787-0b28-4d03-9a4f-c5504a2939c7

```text
Two muscular men wearing flashy chains and stylish streetwear ride jet skis aggressively across the open water during sunset, with a glowing city skyline in the background. One leaps over a wave, the other turns sharply, creating high splashes. The camera follows in a smooth tracking motion, intercut with crash zooms and slow-motion water sprays synced to heavy bass beats. The atmosphere is vibrant and energetic. Styling is glossy music video aesthetic with cinematic color grading, motion blur, and rhythmic camera cuts.
```

- **Sample `2c907ba5-9426-4e36-9007-3226f859f391`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/df51d1db-0aae-4638-88e6-540fd626d3d0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/64e20420-9795-4d91-a919-808ce54d8310.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/2c907ba5-9426-4e36-9007-3226f859f391

```text
high stakes formula 1 scene, the cars compete with each other for the first place, overtaking each other in high speed. Dynamic motion, fast motion, camera shaking
```

- **Sample `a7a375dd-8040-4b65-8575-ecec9fca6120`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/db187b11-4560-4732-b7b8-ecf7510232c9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/544abdf2-825a-4897-b86c-27dae9414a79.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a7a375dd-8040-4b65-8575-ecec9fca6120

```text
the car drives forward with a girl's half body out of the window, as the car turns left, another car drifts in the back from left to right
```

- **Sample `5fdba71e-81a8-483c-807a-02e7c672e103`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1e62f048-0366-474b-aa25-24fcd60765f1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/914d2dde-e2a5-4848-ba5c-4c091924bc15.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/5fdba71e-81a8-483c-807a-02e7c672e103

```text
akira inspired anime scene of two bikers racing against each other, the bike on the right overtakes the red haired biker and turns his head at her. Fast motion, dynamic motion, fast speed.
```

- **Sample `a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/20b67202-88ee-4bd6-b079-5c6da7fb0ed5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/92e1012f-f221-41b1-9404-456c274d6368.mp4
  - page: https://higgsfield.ai/motion/2f2a541b-6ce5-4115-92fb-4d6473d8e3ae/a6c2ef1b-8490-40a4-ae6c-3e3f6d22e158

```text
high speed car chase scene in black and white style, the car in the back tries to overtake the car in the front. The helicopter flies high above. fast motion, dynamic motion, sense of speed.
```
