# Incline — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject moves or stands on a steep angle, as if the entire world is tilted. Creates tension, imbalance, or a surreal, gravity-defying visual effect.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302 | `342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302` | 68 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302 |
| https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92 | `b120f292-74e3-4878-817b-626e203f8a92` | -245 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b120f292-74e3-4878-817b-626e203f8a92 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man in a suit leans impossibly forward on a tilted city street as if gravity has shifted.
```

Use it as: upload a start image that matches the scene, select motion preset **Incline**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5f1e0105-f48a-404a-a411-35b8d0fd7286.webp (320×180)
- Card preview, variant `b120f292`: https://d1xarpci4ikg0w.cloudfront.net/2d2bd9c2-500d-4b04-b3e0-58ba71ea1cde.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/7f91c398-1795-4048-bd05-7b02be07fa9f | https://static.higgsfield.ai/7f91c398-1795-4048-bd05-7b02be07fa9f.mp4 | https://static.higgsfield.ai/7f91c398-1795-4048-bd05-7b02be07fa9f.webp | https://d1xarpci4ikg0w.cloudfront.net/59ccfc35-2fb6-438c-ab19-43b4c957ed4b.webp (320×486) |
| 2 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/d2f74135-a15b-4dba-a017-f90f921ae0db | https://static.higgsfield.ai/d2f74135-a15b-4dba-a017-f90f921ae0db.mp4 | https://static.higgsfield.ai/d2f74135-a15b-4dba-a017-f90f921ae0db.webp | https://d1xarpci4ikg0w.cloudfront.net/48bca49a-4506-4198-90f4-0f9b02ef441f.webp (320×236) |
| 3 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/425ba331-27c8-4a87-939a-4074cb2aa9a5 | https://static.higgsfield.ai/425ba331-27c8-4a87-939a-4074cb2aa9a5.mp4 | https://static.higgsfield.ai/425ba331-27c8-4a87-939a-4074cb2aa9a5.webp | https://d1xarpci4ikg0w.cloudfront.net/ad8c0d3b-4905-434c-a4e6-4769a81227b2.webp (320×236) |
| 4 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/653792b1-7ec4-4600-815d-8a9aea4d873b | https://static.higgsfield.ai/653792b1-7ec4-4600-815d-8a9aea4d873b.mp4 | https://static.higgsfield.ai/653792b1-7ec4-4600-815d-8a9aea4d873b.webp | https://d1xarpci4ikg0w.cloudfront.net/a23eedcf-5cee-43f0-914e-dc65bc65ebc2.webp (320×180) |
| 5 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/389a7a31-a65d-4d06-b16c-d445b5fcb961 | https://static.higgsfield.ai/389a7a31-a65d-4d06-b16c-d445b5fcb961.mp4 | https://static.higgsfield.ai/389a7a31-a65d-4d06-b16c-d445b5fcb961.webp | https://d1xarpci4ikg0w.cloudfront.net/65146fed-fba0-4b56-b078-95c638a5f9c9.webp (320×236) |
| 6 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/e09be5e8-33ad-41fb-9692-de0c1620d0d2 | https://static.higgsfield.ai/e09be5e8-33ad-41fb-9692-de0c1620d0d2.mp4 | https://static.higgsfield.ai/e09be5e8-33ad-41fb-9692-de0c1620d0d2.webp | https://d1xarpci4ikg0w.cloudfront.net/56237772-4f0d-4dd7-bda1-f289138c47bd.webp (320×180) |
| 7 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/234b69dd-fcfa-4964-99ea-aa6221db2d61 | https://static.higgsfield.ai/234b69dd-fcfa-4964-99ea-aa6221db2d61.mp4 | https://static.higgsfield.ai/234b69dd-fcfa-4964-99ea-aa6221db2d61.webp | https://d1xarpci4ikg0w.cloudfront.net/d090e6a1-326a-4e56-9797-151fcf3502c5.webp (320×236) |
| 8 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/0bcbc317-25e3-4d01-9612-b292d8c2602e | https://static.higgsfield.ai/0bcbc317-25e3-4d01-9612-b292d8c2602e.mp4 | https://static.higgsfield.ai/0bcbc317-25e3-4d01-9612-b292d8c2602e.webp | https://d1xarpci4ikg0w.cloudfront.net/8575caa5-5874-4801-bab5-f564bc2cdf8e.webp (320×236) |
| 9 | https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/3ae3e219-34ed-4c25-8ecc-c13699dbf04e | https://static.higgsfield.ai/3ae3e219-34ed-4c25-8ecc-c13699dbf04e.mp4 | https://static.higgsfield.ai/3ae3e219-34ed-4c25-8ecc-c13699dbf04e.webp | https://d1xarpci4ikg0w.cloudfront.net/741bfca3-f584-42c7-bfc2-78b396fea901.webp (320×236) |

Source pages: https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302, https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3ae3e219-34ed-4c25-8ecc-c13699dbf04e`** (priority 16) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/619484c2-1fb3-490c-b647-7f9c71466376.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/df17b478-8ad1-498c-9acb-c506e930b6b3.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/3ae3e219-34ed-4c25-8ecc-c13699dbf04e

```text
As the curb tilts, the man lounging near the car remains unbothered. The blue headlight on the vehicle flickers and bursts, a hubcap rolls away from the scene, and a traffic cone behind him tips into the street. He keeps the same laid-back pose, staring ahead.
```

- **Sample `0bcbc317-25e3-4d01-9612-b292d8c2602e`** (priority 15) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8eda69bc-79d1-411a-bd45-8dc48787047b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ff526698-4699-4774-a837-68eca9641c97.mp4
  - page: https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/0bcbc317-25e3-4d01-9612-b292d8c2602e

```text
As the narrow alley tilts sharply, the man sitting in a clear plastic jacket with yellow stripes leans backward instinctively, but keeps his balance. The analog camera between his legs slides slightly toward the curb. Trash bins in the distance topple, a street cone rolls across the background, and the brick walls around him skew with the shifting gravity. He stays still, cool behind his sunglasses, grounded in the middle of chaos.
```

- **Sample `234b69dd-fcfa-4964-99ea-aa6221db2d61`** (priority 14) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/35f40bd6-c010-4082-8368-47b11f8bd232.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a7a9a7ed-580a-40b6-86d1-1a3a926adb2f.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/234b69dd-fcfa-4964-99ea-aa6221db2d61

```text
The greenhouse structure tilts under storm pressure. The woman in a yellow mesh top and fur skirt bends naturally into the shift. Raindrops on the glass streak sideways, a metal watering can falls in the corner, and hanging cords sway violently. She doesn’t flinch.
```

- **Sample `e09be5e8-33ad-41fb-9692-de0c1620d0d2`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bdefb0c4-e269-422f-8df9-bacac8077510.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5e5edc41-6d32-4b6c-8bbd-228ed10cef12.mp4
  - page: https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/e09be5e8-33ad-41fb-9692-de0c1620d0d2

```text
The alley outside the neon-lit diner begins to tilt. The man in the silver jacket leans diagonally as neon tubes flicker, a drink can topples from the ledge, and the flickering red curtains behind him slide. He stays casually posed, almost floating between gravity and cool.
```

- **Sample `389a7a31-a65d-4d06-b16c-d445b5fcb961`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/51315100-dabd-4b91-a238-0f9efba1a40a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/292d8814-3a41-40c7-ad70-8310c5b0e165.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/389a7a31-a65d-4d06-b16c-d445b5fcb961

```text
The parking structure leans sharply to the side. The man in a deep velvet hoodie laughs, arm raised mid-gesture, while a car door swings open behind him, and a paper coffee cup rolls under a tire. The world slips, but he’s locked in joy.
```

- **Sample `653792b1-7ec4-4600-815d-8a9aea4d873b`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a6c140bf-bfc7-4119-ab0c-060a0e302b6e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/35dcd1a2-b400-4dca-a4b8-25f40ce0d86d.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/653792b1-7ec4-4600-815d-8a9aea4d873b

```text
She leans slightly backward in a fluorescent-lit corridor. As the incline increases, light panels flicker, ceiling tiles loosen, and an overturned bucket of paint begins to leak sideways on the floor. Her red velvet gloves stay locked on her chest.
```

- **Sample `425ba331-27c8-4a87-939a-4074cb2aa9a5`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4c91c343-d273-4d2e-8507-d0a41f71cc0e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/127a1e61-341e-4651-b392-cc283194832e.mp4
  - page: https://higgsfield.ai/motion/342d9ac9-ecd1-4c7b-a3a2-ac6e3423d302/425ba331-27c8-4a87-939a-4074cb2aa9a5

```text
A man in a shiny yellow jacket and oversized helmet tilts forward as the arcade begins to incline. Vintage game machines along both walls crash to the side, stools roll across the floor, and a spilled can of soda slides toward the back. He alone stays grounded, hands still on his helmet, unshaken.
```

- **Sample `d2f74135-a15b-4dba-a017-f90f921ae0db`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/78014bb8-0135-4faa-8882-ab3e3245e9db.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/39528e2d-33eb-4e79-b62e-96ddf64a36dc.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/d2f74135-a15b-4dba-a017-f90f921ae0db

```text
As the camera tilts, the man in the red shiny rain jacket leans forward with his arms open. Behind him, grocery shelves seen through the store window collapse, bottles spill, and a bench outside topples onto the sidewalk. A background figure slips and falls, but the man stands like a statue in the distorted chaos.
```

- **Sample `7f91c398-1795-4048-bd05-7b02be07fa9f`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c168c9b2-6f24-4e05-a0a2-b7b1280d29d2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9d7b9563-842a-4089-adfa-6567305211ff.mp4
  - page: https://higgsfield.ai/motion/b120f292-74e3-4878-817b-626e203f8a92/7f91c398-1795-4048-bd05-7b02be07fa9f

```text
As the scene begins to tilt sharply, the entire room around the protagonist shifts dramatically. The vibrant orange couch and the side table begin to slide downward, moving with the incline, eventually sliding off their original position. The framed pictures on the wall shift, pulled toward the tilt.

The lampshade topples off its stand, rolling away with the tilt. The couch, side table, and lamp all move down the tilted surface, creating a dynamic shift in the room.

Despite the chaos, the protagonist remains perfectly upright, his posture unaltered. He stands firmly, anchored in place, while the environment around him shifts and slides, maintaining his position amid the dramatic movement.
```
