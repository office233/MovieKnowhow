# Car Grip — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Attaches the camera to a car, capturing dynamic driving shots with smooth motion. Perfect for action scenes or showing movement from the vehicle’s perspective.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16 | `b7334ffd-a260-42a5-8911-714bcc541b16` | 58 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b7334ffd-a260-42a5-8911-714bcc541b16 |
| https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0 | `d4c62a9d-df77-4222-af4e-5645b81844e0` | -181 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d4c62a9d-df77-4222-af4e-5645b81844e0 |
| https://higgsfield.ai/motion/7c174c3f-7d11-451c-b7da-03be50f7d010 | `7c174c3f-7d11-451c-b7da-03be50f7d010` | -333 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=7c174c3f-7d11-451c-b7da-03be50f7d010 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`). These pages publish no settings. Their community publications carry 4 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
Camera mounted on the side of a black muscle car racing through a rain-soaked neon tunnel.
```

Use it as: upload a start image that matches the scene, select motion preset **Car Grip**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera mounted on the vehicle, riding with it · **Best use:** Immersive vehicle sequences · **Models:** "Car Grip — fixed to the hood, shaking on every bump" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/fc624f2c-cb31-4f41-9eba-dd3609b9f4ca.webp (320×136)
- Card preview, variant `d4c62a9d`: https://d1xarpci4ikg0w.cloudfront.net/ac536efc-f3e6-48c4-af25-5cbce6ec0d9f.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/3bb33e88-b357-43b4-8451-2070b635e729 | https://static.higgsfield.ai/3bb33e88-b357-43b4-8451-2070b635e729.mp4 | https://static.higgsfield.ai/3bb33e88-b357-43b4-8451-2070b635e729.webp | https://d1xarpci4ikg0w.cloudfront.net/e26d15ab-e9e7-4e3a-b6ea-d371f90afe36.webp (320×132) |
| 2 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/d690c957-0124-4da1-9565-b2ff3e26bb96 | https://static.higgsfield.ai/d690c957-0124-4da1-9565-b2ff3e26bb96.mp4 | https://static.higgsfield.ai/d690c957-0124-4da1-9565-b2ff3e26bb96.webp | https://d1xarpci4ikg0w.cloudfront.net/a8052fa4-9772-457c-bdb1-01dff2667571.webp (320×242) |
| 3 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/36919198-e418-4c03-b559-1c7b3c0de514 | https://static.higgsfield.ai/36919198-e418-4c03-b559-1c7b3c0de514.mp4 | https://static.higgsfield.ai/36919198-e418-4c03-b559-1c7b3c0de514.webp | https://d1xarpci4ikg0w.cloudfront.net/b4e40fd0-9d34-4c0c-b9d0-a1da89d73603.webp (320×182) |
| 4 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a467b59f-1581-4762-b9da-2e85e50e6742 | https://static.higgsfield.ai/a467b59f-1581-4762-b9da-2e85e50e6742.mp4 | https://static.higgsfield.ai/a467b59f-1581-4762-b9da-2e85e50e6742.webp | https://d1xarpci4ikg0w.cloudfront.net/d84e0a77-7a88-4950-aee5-4e31216d477e.webp (320×320) |
| 5 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/de83f422-d009-43ab-a39e-efefd3a4c7b8 | https://static.higgsfield.ai/de83f422-d009-43ab-a39e-efefd3a4c7b8.mp4 | https://static.higgsfield.ai/de83f422-d009-43ab-a39e-efefd3a4c7b8.webp | https://d1xarpci4ikg0w.cloudfront.net/2ba67a7a-37cd-4c75-8b7f-412e59abd6c6.webp (320×132) |
| 6 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/3a87df55-b7a6-4e92-9953-f511a8b29fec | https://static.higgsfield.ai/3a87df55-b7a6-4e92-9953-f511a8b29fec.mp4 | https://static.higgsfield.ai/3a87df55-b7a6-4e92-9953-f511a8b29fec.webp | https://d1xarpci4ikg0w.cloudfront.net/59c980f6-a9bd-49da-85d2-1411f1a3d65a.webp (320×320) |
| 7 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/24d5487e-affb-40e2-b59b-ff180f59ccf4 | https://static.higgsfield.ai/24d5487e-affb-40e2-b59b-ff180f59ccf4.mp4 | https://static.higgsfield.ai/24d5487e-affb-40e2-b59b-ff180f59ccf4.webp | https://d1xarpci4ikg0w.cloudfront.net/4c00f903-81f9-49c4-8fc9-458000098761.webp (320×210) |
| 8 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/af8f4960-1825-46af-9efe-554aebea223e | https://static.higgsfield.ai/af8f4960-1825-46af-9efe-554aebea223e.mp4 | https://static.higgsfield.ai/af8f4960-1825-46af-9efe-554aebea223e.webp | https://d1xarpci4ikg0w.cloudfront.net/c2393b7d-8aa7-43c9-8a5d-d93a26a47c9e.webp (320×242) |
| 9 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/c979344c-7511-49ed-abc4-fdf7c3989ed5 | https://static.higgsfield.ai/c979344c-7511-49ed-abc4-fdf7c3989ed5.mp4 | https://static.higgsfield.ai/c979344c-7511-49ed-abc4-fdf7c3989ed5.webp | https://d1xarpci4ikg0w.cloudfront.net/715fb199-6df7-4a43-8e70-5abc0ac71ef5.webp (320×424) |
| 10 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/28465d2b-122e-4666-8fe6-f730bc43d0a2 | https://static.higgsfield.ai/28465d2b-122e-4666-8fe6-f730bc43d0a2.mp4 | https://static.higgsfield.ai/28465d2b-122e-4666-8fe6-f730bc43d0a2.webp | https://d1xarpci4ikg0w.cloudfront.net/49af2024-5764-4d71-b241-53baf61f18dd.webp (320×486) |
| 11 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5 | https://static.higgsfield.ai/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5.mp4 | https://static.higgsfield.ai/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5.webp | https://d1xarpci4ikg0w.cloudfront.net/8ae3d6ed-312f-4e2d-8fc9-02993a90c839.webp (320×182) |
| 12 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/c3ba19b8-b113-4fc2-8290-08c40beebf5e | https://static.higgsfield.ai/c3ba19b8-b113-4fc2-8290-08c40beebf5e.mp4 | https://static.higgsfield.ai/c3ba19b8-b113-4fc2-8290-08c40beebf5e.webp | https://d1xarpci4ikg0w.cloudfront.net/d3ca8eea-ea08-40e3-a210-a7805203a216.webp (320×242) |
| 13 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/d0678d84-a410-43a7-9be6-f78d1b7fd675 | https://static.higgsfield.ai/d0678d84-a410-43a7-9be6-f78d1b7fd675.mp4 | https://static.higgsfield.ai/d0678d84-a410-43a7-9be6-f78d1b7fd675.webp | https://d1xarpci4ikg0w.cloudfront.net/b451ade7-e0ec-42cf-b038-9721a979bab6.webp (320×562) |
| 14 | https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a291cb02-85f0-4ddf-b694-8dc37610a600 | https://static.higgsfield.ai/a291cb02-85f0-4ddf-b694-8dc37610a600.mp4 | https://static.higgsfield.ai/a291cb02-85f0-4ddf-b694-8dc37610a600.webp | https://d1xarpci4ikg0w.cloudfront.net/80f9131f-0b6c-45b7-a3df-1b113aea5460.webp (320×424) |

- Card preview, round-2 variant `7c174c3f` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/6b901f5d-400b-43be-ba23-47edecefec44.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/68c07b4f-8a7a-42a2-8a09-697c0173655b.webp (600×800)

### Sample videos, round-2 variant `7c174c3f` (Wan 2.5) (4 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/efe48261-e0bb-4d4e-aa87-0dee57929c4c_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/e46429a4-8c54-4ea8-b6f4-8a000042ab2b.jpg | wan2_5_video · 5 s · 1080p · 1536×2048 | The scene starts with a close-up shot of a spinning car tire taken from a fixed, slightly shaky camera mounted low on the car's frame near the wheel, using a wide-angle lens to capture dynamic speed motion. The environment is a bright, bustling race track with blurred grandstands and asphalt streaking past underneath, filled with roaring engine sounds and rushing wind noise emphasizing high velocity. The car accelerates rapidly down the straight, causing visible vibration that subtly shakes the camera. The tire spins fast, dirt and rubber particles trace fleeting behind it as the car speeds forward. Engine roars and tire screeches rise in volume, immersing in the thrill of rapid motion. The camera remains locked to the car, capturing the forward rush and the powerful energy of racing. |
| 2 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/01c77eeb-fe4a-4abf-9e0a-d1d1a7ac350f_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/a38e09dc-3bbb-48d3-937d-2191966c114d.jpg | wan2_5_video · 5 s · 1080p · 1536×2048 | The scene starts with a medium close-up shot from a fixed camera mounted on the side of a vintage car's front right, angled slightly forward to capture the road ahead. The environment is a calm urban street lined with colorful brick buildings and parked cars on both sides, under a softly overcast sky with muted sunlight. The street is quiet except for the gentle sounds of the car engine and distant city ambiance. The car drives steadily straight down the street, passing by the parked cars and buildings in a smooth, continuous motion. The camera remains fixed and locked to the car’s frame, providing an immersive forward-facing perspective of the car’s journey through the city street, emphasizing the linear motion and urban setting with a natural, warm visual tone. |
| 3 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/0f5b966a-7226-46d9-8ab8-ad4364add52e_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/d0c58136-210c-4edd-aee2-4999f0f27af4.jpg | wan2_5_video · 5 s · 1080p · 2048×1536 | The scene starts with a medium close-up shot from a fixed, static camera mounted inside a black car, focused on a man wearing a hood sitting inside the backseat at night. The city street outside is vividly lit with green and neon lights creating a dynamic urban nightscape with blurred vehicles and glowing signs rushing past. Inside the car, the man is handed a cigarette by an unseen passenger. He takes it, lights it, inhales deeply, and exhales smoke slowly while smiling and speaking softly about the cigarette. The car moves steadily through the city streets, the camera locked to the car's frame, capturing the changing neon-lit environment. Ambient city sounds mix with the quiet dialogue and the subtle crackle of cigarette smoke, creating an intimate yet vibrant urban night atmosphere. |
| 4 | https://cdn.higgsfield.ai/user_2zXu7DqFkwehcyw88RKxU8RZnH2/464fbfe5-1e3a-46b4-85dd-44dfa47101ad_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/39b445fd-8b40-4816-8d86-551386fe254b.jpg | wan2_5_video · 5 s · 1080p · 2048×1152 | The scene starts with a medium close-up shot from the passenger side inside the car, capturing the young woman wearing sunglasses driving at high speed. The camera is fixed and static, mounted inside the car, capturing her profile and hands on the steering wheel. The environment is a sunny, warm late afternoon with golden light casting shadows inside the car, while the sound of rushing wind and the hum of tires on the road fill the air. The woman drives attentively, her hair flowing wildly in the breeze coming through the open window, then she glances confidently ahead and adjusts her grip on the wheel. The visual tone is cinematic and vibrant, emphasizing motion and the feeling of freedom on the open road. |

Source pages: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16, https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0, https://higgsfield.ai/motion/7c174c3f-7d11-451c-b7da-03be50f7d010. Crawled 2026-09.


## Real sample prompts (site)

14 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `a291cb02-85f0-4ddf-b694-8dc37610a600`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/48485b3e-cb6b-47a3-8701-bfde7ee69806.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3fd04c21-f3b9-49ff-977a-1ec1ec792da6.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a291cb02-85f0-4ddf-b694-8dc37610a600

```text
A confident man leans out of the back window of a sleek white car cruising through a vibrant city at night. Neon signs and blurred lights reflect off the car’s surface as it speeds down the boulevard. The man aggressively raps into the camera, his hands moving with sharp, expressive gestures. He’s dressed in a bold mesh shirt, layered chains, and a luxury watch, exuding style and swagger. The energy is raw and intense, like a scene straight out of a high-budget hip-hop music video shot in downtown NYC or Tokyo.
```

- **Sample `d0678d84-a410-43a7-9be6-f78d1b7fd675`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/49884ae9-c975-451e-9494-ec0bc6b38399.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e63518af-9a6f-4a14-96ef-b209cc4c5160.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/d0678d84-a410-43a7-9be6-f78d1b7fd675

```text
A high-fashion man sits in the backseat of a classic yellow taxi in the heart of Tokyo, rapping with confident energy. Neon lights from the bustling city blur and reflect across the tinted window, casting vibrant streaks of blue, red, and pink over his face and leather jacket. He wears dark sunglasses, diamond jewelry, and a luxury watch, exuding charisma and urban swagger. His hand gestures are expressive, captured mid-motion as he performs, locked into the rhythm. The background buzzes with city life — glowing signs, passing cars, and the surreal beauty of a neon-drenched night. The shallow depth of field and cinematic framing give the image a stylish music video feel, blending Tokyo street culture with modern hip-hop elegance.
```

- **Sample `c3ba19b8-b113-4fc2-8290-08c40beebf5e`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b780f651-ed12-4456-b03a-8038cbccdd4c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f75ccc52-3a6f-4cf6-ba74-d9e2254a9ae8.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/c3ba19b8-b113-4fc2-8290-08c40beebf5e

```text
Green car drives very fast through tunnel.
```

- **Sample `cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/39ba4e74-edd6-4b7d-af0c-d21adbf4c3aa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5b3015bb-4c6a-479c-917c-f19b3afe01f7.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/cc7cc0de-90eb-4ca6-b896-49a4aca1a2d5

```text
The car is driving off-road and shaking in different directions, the camera is fixed near the bullets. two soldiers in red berets are looking around and talking to each other
```

- **Sample `28465d2b-122e-4666-8fe6-f730bc43d0a2`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ba1ac94b-c553-4a11-abac-e64ab091b7c2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7967d7be-ec6a-4703-822f-b840a990a0f2.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/28465d2b-122e-4666-8fe6-f730bc43d0a2

```text
A young woman drives a vintage convertible through the glowing streets of Las Vegas at night. Her hair flows freely in the wind, illuminated by the vivid neon lights reflecting off the car’s polished red interior. The camera captures the scene from behind and slightly above, showing her confident grip on the steering wheel as the city’s chaotic beauty blurs around her. The energy of Las Vegas pulses in every direction—casino signs, streetlamps, and late-night crowds—creating a dreamy, cinematic moment of freedom and motion.

Style: 90s retro cinematic, neon glow
Mood: Liberated, electric, stylish
Motion: Subtle camera sway with hair moving naturally in the wind
Lighting: Neon reflections, warm red interiors, night city palette
Angle: Rear over-the-shoulder tracking shot
Scene: Center of Las Vegas, cruising through nightlife
```

- **Sample `c979344c-7511-49ed-abc4-fdf7c3989ed5`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/51134688-0561-406b-b960-dcdf02a9f1f1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cb607e84-4457-4430-aca9-dfbc237e09b9.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/c979344c-7511-49ed-abc4-fdf7c3989ed5

```text
A group of men rides through the city at night in a sleek car, lit by neon reflections and streetlights. The stylish driver, wearing dark sunglasses, keeps his cool as he grips the wheel, cruising with confidence. In the back seat, the man on the right stares directly at the camera, breaking the fourth wall with an intense gaze. All of them subtly nod their heads in sync to the beat of a heavy hip-hop track, creating a hypnotic, rhythmic motion. Each passenger is dressed in a unique outfit—from regal robes to fur-lined hoods—adding surreal contrast and character to the cinematic vibe.
Style: Hip-hop music video, modern street fashion meets fantasy
Camera angle: Side view, medium close-up through the passenger window
Mood: Confident, stylish, surreal
Lighting: Flash-lit interior, glowing city blur outside
Atmosphere: Nighttime cruise, synchronized energy, cool under pressure
```

- **Sample `af8f4960-1825-46af-9efe-554aebea223e`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6f24a596-eaca-4e84-bc8a-8de972a43e5b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/15758980-760f-4e4b-a620-88a6fa6ec380.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/af8f4960-1825-46af-9efe-554aebea223e

```text
a car is driving through the city, there are two men in the back seat, the man by the window is smoking cigarettes, the man on the right is drinking soda from a can
```

- **Sample `24d5487e-affb-40e2-b59b-ff180f59ccf4`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/89471e70-1990-4765-8638-b011075e55db.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/881802fe-2c32-4420-b912-02dc504bf7a3.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/24d5487e-affb-40e2-b59b-ff180f59ccf4

```text
a man is riding in the back seat of a car, rapping and looking around, movement and emotion, enhancing the dynamic tension of the scene. grainy texture add to the visceral, documentary-like feel, making the image feel both cinematic and deeply personal
```

- **Sample `3a87df55-b7a6-4e92-9953-f511a8b29fec`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/256ea029-9806-49fb-a4ca-e47cbbb7a150.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b0f2d997-7037-4292-8d0b-91c11176e5ef.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/3a87df55-b7a6-4e92-9953-f511a8b29fec

```text
A black-and-white close-up shot of the front headlight of a vintage car, covered in raindrops, parked in an industrial setting. The wet pavement reflects the overcast sky, adding depth and texture to the image. The car’s sleek chrome details contrast with the rough surroundings, evoking a nostalgic, cinematic mood. The shallow depth of field emphasizes the headlight, while the blurred background of warehouses and parked cars adds a sense of timelessness and quiet solitude.
```

- **Sample `de83f422-d009-43ab-a39e-efefd3a4c7b8`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2c0298d0-cdc4-47ad-86d5-e49dc3b749ca.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/878dbebf-f07f-4f3a-8b16-e05b1b71c22d.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/de83f422-d009-43ab-a39e-efefd3a4c7b8

```text
A red vintage car cruises along a rural road at sunset, its rear window framing two individuals engaged in quiet conversation. The warm hues of the setting sun reflect on the car’s glossy surface, blending with the soft pastels of the sky. The surrounding landscape, lined with tall trees and open fields, stretches into the horizon, evoking a nostalgic and cinematic atmosphere. The subtle movement of the vehicle and the tranquil ambiance of the countryside suggest a journey filled with contemplation and an unspoken bond between the passengers.
```

- **Sample `a467b59f-1581-4762-b9da-2e85e50e6742`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/703760ee-736d-42ea-93ec-6b0be0c1ba64.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2d4b1c70-51af-4fb0-892b-0fe01446242b.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/a467b59f-1581-4762-b9da-2e85e50e6742

```text
A man and a woman drive down a quiet, dimly lit road at night, their silhouettes softly illuminated by the warm glow of distant streetlights. The man’s hands grip the steering wheel as the woman, with blonde hair tied in a ponytail, gazes ahead, the faint reflections of passing lights flickering on the car’s interior. The atmosphere is one of quiet intimacy and contemplation, with the vast, dark road stretching endlessly before them, evoking a sense of mystery, nostalgia, and an unknown destination ahead.
```

- **Sample `36919198-e418-4c03-b559-1c7b3c0de514`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a0395f8c-1abb-4863-ad9a-930a99dd90f4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c1899c8c-e004-4806-bcd5-464a3c40788e.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/36919198-e418-4c03-b559-1c7b3c0de514

```text
A black-and-white shot of a man energetically gripping the wheel of an old, rugged car, his mouth open mid-shout, conveying urgency and excitement. He wears a baseball cap and hoodie, adding to his raw, streetwise aesthetic. The cracked window and worn-down interior emphasize a gritty, real-world setting. In the background, slightly out of focus, passengers fill the back seat, their blurred figures hinting at movement and emotion, enhancing the dynamic tension of the scene. The high-contrast lighting and grainy texture add to the visceral, documentary-like feel, making the image feel both cinematic and deeply persona
```

- **Sample `d690c957-0124-4da1-9565-b2ff3e26bb96`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f6282c81-63fe-4795-b9fc-5652e1910fba.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a5b856cd-c48b-437e-8193-972d0625284e.mp4
  - page: https://higgsfield.ai/motion/b7334ffd-a260-42a5-8911-714bcc541b16/d690c957-0124-4da1-9565-b2ff3e26bb96

```text
A sleek neon-green sports car begins to exit a dimly lit garage, the large industrial door slowly lifting open. Overhead fluorescent lights cast sharp, clean reflections along the glossy hood as the car rolls forward. A stylish woman in oversized sunglasses and a white jacket sits confidently behind the wheel, her expression calm and composed. As the car passes the garage threshold, the environment dramatically shifts—now she’s in the vibrant heart of a bustling metropolis at night. Skyscrapers, glowing billboards, and neon signs reflect on the car’s surface, blending the transition from the quiet garage to the electric city.

Style: Cinematic, neon lighting, futuristic to urban transition
Mood: Cool, powerful, fashion-forward, seamless transformation
Camera angle: Low front-facing, centered
Details: Smooth transition in environment, strong contrast between dim garage and vivid city lights, reflections dancing across the windshield and hood, cyberpunk edge
```

- **Sample `3bb33e88-b357-43b4-8451-2070b635e729`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1fdf8920-2eb8-4c8c-9681-70d2b759037c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dd5597b0-c5ae-4592-873c-fa4926d6807d.mp4
  - page: https://higgsfield.ai/motion/d4c62a9d-df77-4222-af4e-5645b81844e0/3bb33e88-b357-43b4-8451-2070b635e729

```text
A young woman with a pensive expression gazes out of the car window at night, her face softly illuminated by passing neon lights. Reflected in the glass, her distant eyes mirror the blur of the cityscape, where glowing signs and streaks of red and blue create a dreamy, melancholic atmosphere. The car moves steadily through the quiet streets, the soft hum of the engine blending with the distant sounds of nightlife, capturing a fleeting moment of introspection and solitude.
```
