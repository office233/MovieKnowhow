# Overhead — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera is positioned above the subject, smoothly tracking their movement. Great for showing layout, movement, or creating a stylized, cinematic look.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706 | `b6395b91-a356-4bc6-9cda-fc2793b3d706` | 46 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b6395b91-a356-4bc6-9cda-fc2793b3d706 |
| https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9 | `cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9` | 80 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Top-down view of a cyclist weaving through a sunlit city intersection, the camera tracking her from directly above.
```

Use it as: upload a start image that matches the scene, select motion preset **Overhead**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Direct top-down bird's-eye view · **Best use:** Choreography, spatial relationships · **Models:** — · **Phrase/template:** "Overhead shot of the dancers forming patterns" · **Tips:** —

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Jib Up](jib-up.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/39ff405a-4967-421b-8c48-5f0c5a7236d7.webp (320×210)
- Card preview, variant `cdb0b964`: https://d1xarpci4ikg0w.cloudfront.net/03905d2b-0b84-48cd-9be3-f7ed5bb27b9d.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/16b91c58-0aed-48ad-87ec-ec4c61e99eae | https://static.higgsfield.ai/16b91c58-0aed-48ad-87ec-ec4c61e99eae.mp4 | https://static.higgsfield.ai/16b91c58-0aed-48ad-87ec-ec4c61e99eae.webp | https://d1xarpci4ikg0w.cloudfront.net/ee7efd26-7802-4183-9fe7-f7edf493e7a3.webp (320×424) |
| 2 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/68f36ba4-a74e-494c-8c4e-85a06a96e5e0 | https://static.higgsfield.ai/68f36ba4-a74e-494c-8c4e-85a06a96e5e0.mp4 | https://static.higgsfield.ai/68f36ba4-a74e-494c-8c4e-85a06a96e5e0.webp | https://d1xarpci4ikg0w.cloudfront.net/baccf46a-aca1-4a30-9aa1-db664abab2cb.webp (320×210) |
| 3 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/9df17da1-80ee-4406-a7a5-763eeea8fd22 | https://static.higgsfield.ai/9df17da1-80ee-4406-a7a5-763eeea8fd22.mp4 | https://static.higgsfield.ai/9df17da1-80ee-4406-a7a5-763eeea8fd22.webp | https://d1xarpci4ikg0w.cloudfront.net/795a1dcf-61f8-4a0d-a023-4e796987553b.webp (320×132) |
| 4 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/77cbebbb-0352-4760-a948-673366380d6d | https://static.higgsfield.ai/77cbebbb-0352-4760-a948-673366380d6d.mp4 | https://static.higgsfield.ai/77cbebbb-0352-4760-a948-673366380d6d.webp | https://d1xarpci4ikg0w.cloudfront.net/a34a1ce7-7951-43c4-abbc-6d0b15bf0dd5.webp (320×424) |
| 5 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/306087e0-5b55-42ac-96d7-0abce99c9ab6 | https://static.higgsfield.ai/306087e0-5b55-42ac-96d7-0abce99c9ab6.mp4 | https://static.higgsfield.ai/306087e0-5b55-42ac-96d7-0abce99c9ab6.webp | https://d1xarpci4ikg0w.cloudfront.net/a02e2aa8-28e5-4cea-a58d-c05b76ca5ad0.webp (320×486) |
| 6 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/fd339b39-fcff-43ad-b2a4-765881695647 | https://static.higgsfield.ai/fd339b39-fcff-43ad-b2a4-765881695647.mp4 | https://static.higgsfield.ai/fd339b39-fcff-43ad-b2a4-765881695647.webp | https://d1xarpci4ikg0w.cloudfront.net/1f938f65-7b09-42fb-ae38-ef6ae5ca6a60.webp (320×228) |
| 7 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/103440d1-4375-415c-ab84-43de47ac7e80 | https://static.higgsfield.ai/103440d1-4375-415c-ab84-43de47ac7e80.mp4 | https://static.higgsfield.ai/103440d1-4375-415c-ab84-43de47ac7e80.webp | https://d1xarpci4ikg0w.cloudfront.net/99f548e5-5bda-4ad4-9591-7a103b8dd4d2.webp (320×138) |
| 8 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/b5f9d488-c04c-415f-af77-6684e1a3cc75 | https://static.higgsfield.ai/b5f9d488-c04c-415f-af77-6684e1a3cc75.mp4 | https://static.higgsfield.ai/b5f9d488-c04c-415f-af77-6684e1a3cc75.webp | https://d1xarpci4ikg0w.cloudfront.net/32d88b92-8cc2-4aa7-b7ba-9610d402c46c.webp (320×320) |
| 9 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/5984b190-e5a7-4745-8875-c6a511661056 | https://static.higgsfield.ai/5984b190-e5a7-4745-8875-c6a511661056.mp4 | https://static.higgsfield.ai/5984b190-e5a7-4745-8875-c6a511661056.webp | https://d1xarpci4ikg0w.cloudfront.net/97d9d49c-02cb-4653-8a75-27f62019d0df.webp (320×320) |
| 10 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/bcca1594-30f1-4665-922a-add244c84074 | https://static.higgsfield.ai/bcca1594-30f1-4665-922a-add244c84074.mp4 | https://static.higgsfield.ai/bcca1594-30f1-4665-922a-add244c84074.webp | https://d1xarpci4ikg0w.cloudfront.net/c9e73c86-0a81-4697-b320-785bd31a08f9.webp (320×210) |
| 11 | https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/3a62bbe3-a529-4db6-937e-eca829843534 | https://static.higgsfield.ai/3a62bbe3-a529-4db6-937e-eca829843534.mp4 | https://static.higgsfield.ai/3a62bbe3-a529-4db6-937e-eca829843534.webp | https://d1xarpci4ikg0w.cloudfront.net/82e12730-9a54-4893-bac7-4aaa89397cab.webp (320×320) |

Source pages: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706, https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3a62bbe3-a529-4db6-937e-eca829843534`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/16fc775a-5f87-4d6a-8eae-cdf607c3dd00.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0219a4ac-2be2-4b10-a012-5da37b04b052.mp4
  - page: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/3a62bbe3-a529-4db6-937e-eca829843534

```text
Create an overhead animated scene featuring this man lying motionless on a cold marble floor, his face streaked with blood and a glass of dark red liquid still clutched in his hand. Keep his body completely still, centered in the frame. Gradually animate the blood pool spreading outward in slow, deliberate tendrils, creeping through the marble’s veins. The crystal glass should occasionally shift slightly as if teetering on the edge of stability, with faint reflections flickering across the glass surface. Introduce soft, sterile lighting that contrasts the bright marble with the deep red of the blood, reinforcing a stark, unsettling atmosphere. The slow pacing should evoke themes of tension, mystery, and grim aftermath.
```

- **Sample `bcca1594-30f1-4665-922a-add244c84074`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0386ca30-d5a5-4110-be8e-c045fab5e185.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5d139de8-089e-4a36-8aad-cd67a135a77c.mp4
  - page: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/bcca1594-30f1-4665-922a-add244c84074

```text
Create an overhead animated scene featuring this man lying motionless on a bold black-and-yellow checkered floor, his body relaxed and adorned with streaks of gold paint across his chest. Keep his body completely static, with his sunglasses, jewelry, and confident pose maintained. Gradually animate the shattered glass pieces and scattered black petals shifting slightly as if disturbed by a faint, unseen breeze. Introduce soft pulses of golden light reflecting off the floor tiles, creating a hypnotic rhythm that moves in sync with the subtle motion of objects. Maintain a moody, atmospheric tone with warm, low lighting that highlights the contrast between the golden accents and the deep shadows, evoking themes of power, decadence, and aftermath.
```

- **Sample `5984b190-e5a7-4745-8875-c6a511661056`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a9486e16-202a-4919-8371-0a04e547b730.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ad271e3a-71cb-435c-83cb-d56f92c4a355.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/5984b190-e5a7-4745-8875-c6a511661056

```text
A vertically tracking overhead shot of a man in a striking orange suit lying on a stretcher, being pushed down a narrow, dimly lit corridor. His face stays in sharp focus — bruised, sweaty, dazed but proud — while his slightly open shirt reveals glimpses of chest tattoos.Soft shadows dance across the textured brick walls and his features as warm, flickering lights overhead create rhythmic, dramatic highlights. Lighting should gradually shift along the corridor, giving a sense of time and space passing, with seamless loop capability.
```

- **Sample `b5f9d488-c04c-415f-af77-6684e1a3cc75`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/674b4cbb-8d19-40f6-bd8e-1d8ee89ea056.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/09158975-4536-4c36-bfad-78373860a036.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/b5f9d488-c04c-415f-af77-6684e1a3cc75

```text
A vertically tracking overhead shot of a man lying on a stretcher, being quickly pushed down a narrow, dimly lit corridor. His face stays in sharp focus — bruised, sweaty, dazed but proud — while his slightly open shirt reveals glimpses of chest tattoos.Soft shadows dance across the textured brick walls and his features as warm, flickering lights overhead create rhythmic, dramatic highlights.
```

- **Sample `103440d1-4375-415c-ab84-43de47ac7e80`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 2912×1248
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8bd197bb-96d3-4178-837f-fd196f2115ce.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8017072d-9776-4c85-b973-36dfc66c2c38.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/103440d1-4375-415c-ab84-43de47ac7e80

```text
Animate an overhead moving shot of a woman lying motionless amidst a vibrant bed of red roses. Her body remains static, centered in the frame, as the lush background of roses gradually moves upward, giving the impression of a smooth, continuous downward camera motion. Include delicate, drifting petals for depth and enhance the dreamlike aesthetic with rich, vivid colors and soft, diffuse lighting. The slow, graceful motion should evoke a sense of romance, serenity, and poetic beauty
```

- **Sample `fd339b39-fcff-43ad-b2a4-765881695647`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1120×800
  - input image: https://d1xarpci4ikg0w.cloudfront.net/04d805c4-a4a3-469c-9a96-b4581eddae8e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/66a7b164-7732-42d6-987e-ba03145c95d7.mp4
  - page: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/fd339b39-fcff-43ad-b2a4-765881695647

```text
Animate a slow, overhead moving shot of a woman lying still in bed, maintaining her static position at the center of the frame. The background, bedding, and pillow move gradually downward, giving the impression that the camera is smoothly rising away from her. Use subtle, smooth camera movements to enhance the sense of introspection and calmness. Retain the moody, black-and-white aesthetic to highlight emotional depth.
```

- **Sample `306087e0-5b55-42ac-96d7-0abce99c9ab6`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5d50013c-de1d-482e-b669-a6d5860ae7aa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/074eb15d-ea84-408c-b8bd-f953d9f6bb9a.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/306087e0-5b55-42ac-96d7-0abce99c9ab6

```text
Create a surreal cinematic animation using an overhead camera technique. Keep the young man lying perfectly static in relation to the camera, maintaining his intense, bewildered expression. Meanwhile, the soft blue fabric background gently moves upward, giving an impression of the subject falling or sinking downward. The multiple hands with colorful manicures and jewelry continue their gentle, smooth movements, softly touching and caressing his face. Maintain warm neon lighting, vibrant colors, and dramatic styling to emphasize the surreal and slightly unsettling atmosphere.
```

- **Sample `77cbebbb-0352-4760-a948-673366380d6d`** (priority 3) — Wan 2.5 motion preset, steps=23, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8b967a83-cfc6-44b6-8548-0e5e2f1415da.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/85dc68f7-b605-44db-86db-c613be1beff2.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/77cbebbb-0352-4760-a948-673366380d6d

```text
Animate this overhead portrait by smoothly pulling the camera upward, gradually zooming out to reveal more of the serene water environment. Let the gentle ripples of the water softly expand outward from the subject's head, enhancing the relaxing, tranquil atmosphere. The subject remains static and relaxed, with subtle reflections and gentle water movements enhancing realism. Maintain the image's warm lighting and calm tones throughout.
```

- **Sample `9df17da1-80ee-4406-a7a5-763eeea8fd22`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/58c1263e-20ca-4cfc-833c-36ad0ed76821.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8a3be25f-1cc5-4ce1-be69-8ac7a3f2a49c.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/9df17da1-80ee-4406-a7a5-763eeea8fd22

```text
Create a dynamic cinematic animation with an overhead camera shot of the superhero character floating steadily and confidently. The character remains completely static relative to the camera, arms slightly spread in a powerful, heroic pose. The desert landscape background moves downward rapidly, generating a strong sensation of upward flight. Enhance the scene with subtle atmospheric effects like dust or wind streams. Maintain cinematic lighting, dramatic shadows, and sharp visual clarity.
```

- **Sample `68f36ba4-a74e-494c-8c4e-85a06a96e5e0`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0c595550-97b6-443d-9d4b-ff89c1fc0b49.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/21cfc78c-bd69-40c1-9add-a8f4d4cfd9b6.mp4
  - page: https://higgsfield.ai/motion/b6395b91-a356-4bc6-9cda-fc2793b3d706/68f36ba4-a74e-494c-8c4e-85a06a96e5e0

```text
Dynamic motion. Create an overhead animated scene featuring this woman lying motionless in dark water, surrounded by scattered black petals. Keep her body completely still, centered in the frame, her white gown contrasting starkly against the shadowy liquid. Gradually animate the black petals drifting slowly in various directions, creating a hypnotic, dreamlike effect. Introduce faint ripples in the water, barely disturbing the serene yet haunting atmosphere. Soft, cold lighting should emphasize the sharp contrast between her pale skin, white gown, and the deep, inky surroundings. Maintain a surreal, ethereal mood, evoking themes of mystery, elegance, and quiet intensity.
```

- **Sample `16b91c58-0aed-48ad-87ec-ec4c61e99eae`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e2819af2-87d3-45d8-9dc5-825d857dff98.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/656d74d0-5745-4e3f-9ab6-81e344f209b6.mp4
  - page: https://higgsfield.ai/motion/cdb0b964-5bd6-4a26-8ae6-7fe605a28dc9/16b91c58-0aed-48ad-87ec-ec4c61e99eae

```text
Dynamic motion. Create an overhead animated scene featuring this injured young man lying on a hospital bed, centered in the frame with his face partially turned upward, eyes wide and dazed. Maintain his static position, with the oxygen mask and blood trail across his face remaining untouched. Gradually animate the blue surgical sheets, medical equipment, and ceiling lights moving slowly upward, simulating a downward camera movement. Introduce subtle flickering in the overhead fluorescent lights to enhance tension. Maintain a cold, sterile atmosphere with dim blue lighting, emphasizing the stark contrast between the blood on his face and the clinical environment. The slow movement should evoke a sense of vulnerability, anxiety, and quiet despair.
```
