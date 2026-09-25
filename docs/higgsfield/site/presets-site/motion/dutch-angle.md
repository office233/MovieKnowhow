# Dutch Angle — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Tilts the camera to create a slanted horizon, adding tension, unease, or a stylized look. Perfect for thrillers, dream sequences, or edgy vibes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345 | `28a18555-b8ed-4cac-aad6-40ecaaad9345` | 63 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=28a18555-b8ed-4cac-aad6-40ecaaad9345 |
| https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f | `b593944e-ae3e-47ce-8c6d-ea8dd87fe01f` | -208 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=b593944e-ae3e-47ce-8c6d-ea8dd87fe01f |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A nervous man waits in a flickering motel room, tilted horizon, growing unease.
```

Use it as: upload a start image that matches the scene, select motion preset **Dutch Angle**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera tilted diagonally · **Best use:** Psychological tension, instability, dread · **Models:** Wan 2.5, Kling 2.6 · **Phrase/template:** "Dutch Angle as the conspirators whisper" · precise: "Frame tilted 25 degrees counterclockwise…" · **Tips:** Horror: "slow Dolly In… Camera: Dutch Angle as she realizes." Avoid in lifestyle and luxury.

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/68eef02a-e835-4cf2-b9c9-7fef8e93d6ac.webp (320×182)
- Card preview, variant `b593944e`: https://d1xarpci4ikg0w.cloudfront.net/7116678b-3446-44f2-ab94-ef1f3c12fa51.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/18b6ae6f-74b7-404b-8014-1350e5e41177 | https://static.higgsfield.ai/18b6ae6f-74b7-404b-8014-1350e5e41177.mp4 | https://static.higgsfield.ai/18b6ae6f-74b7-404b-8014-1350e5e41177.webp | https://d1xarpci4ikg0w.cloudfront.net/1ed87ab0-f156-432f-8bf3-caf181ee17ad.webp (320×404) |
| 2 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/c5db2fbe-a53d-4d16-a881-f24fdf2424c4 | https://static.higgsfield.ai/c5db2fbe-a53d-4d16-a881-f24fdf2424c4.mp4 | https://static.higgsfield.ai/c5db2fbe-a53d-4d16-a881-f24fdf2424c4.webp | https://d1xarpci4ikg0w.cloudfront.net/707ace65-fbc2-4f13-8a74-633982cb3a1b.webp (320×182) |
| 3 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/982ded99-6175-40c1-8866-524f90cfedc8 | https://static.higgsfield.ai/982ded99-6175-40c1-8866-524f90cfedc8.mp4 | https://static.higgsfield.ai/982ded99-6175-40c1-8866-524f90cfedc8.webp | https://d1xarpci4ikg0w.cloudfront.net/8c9b3abb-cbab-4b47-9e68-6acf61a1847e.webp (320×210) |
| 4 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/0f621c87-62a9-4be2-82a1-4a48896b479c | https://static.higgsfield.ai/0f621c87-62a9-4be2-82a1-4a48896b479c.mp4 | https://static.higgsfield.ai/0f621c87-62a9-4be2-82a1-4a48896b479c.webp | https://d1xarpci4ikg0w.cloudfront.net/568dcdd1-3643-48d7-bb48-f07ac9330f6b.webp (320×182) |
| 5 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/843cbf0d-516a-420c-a24a-8d8ba69ba6a4 | https://static.higgsfield.ai/843cbf0d-516a-420c-a24a-8d8ba69ba6a4.mp4 | https://static.higgsfield.ai/843cbf0d-516a-420c-a24a-8d8ba69ba6a4.webp | https://d1xarpci4ikg0w.cloudfront.net/bd2c612a-fc29-4297-ad78-6ebd33d0de46.webp (320×182) |
| 6 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/f76098eb-b080-40ca-ae1b-3863427cb0b4 | https://static.higgsfield.ai/f76098eb-b080-40ca-ae1b-3863427cb0b4.mp4 | https://static.higgsfield.ai/f76098eb-b080-40ca-ae1b-3863427cb0b4.webp | https://d1xarpci4ikg0w.cloudfront.net/fd4c14be-6483-4274-84f4-1c40afdccd76.webp (320×320) |
| 7 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/bbfb5bb0-fff7-437f-9a61-d3cef8486af5 | https://static.higgsfield.ai/bbfb5bb0-fff7-437f-9a61-d3cef8486af5.mp4 | https://static.higgsfield.ai/bbfb5bb0-fff7-437f-9a61-d3cef8486af5.webp | https://d1xarpci4ikg0w.cloudfront.net/d6de95f1-9c81-4c4f-aa70-d3a42cc4255f.webp (320×210) |
| 8 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/bdbc96d5-b281-4215-937e-4cd550a7a18a | https://static.higgsfield.ai/bdbc96d5-b281-4215-937e-4cd550a7a18a.mp4 | https://static.higgsfield.ai/bdbc96d5-b281-4215-937e-4cd550a7a18a.webp | https://d1xarpci4ikg0w.cloudfront.net/40643f80-3d29-48e6-a36a-3c5d85594521.webp (320×182) |
| 9 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/13681105-3c83-4b70-80ff-0259244cd140 | https://static.higgsfield.ai/13681105-3c83-4b70-80ff-0259244cd140.mp4 | https://static.higgsfield.ai/13681105-3c83-4b70-80ff-0259244cd140.webp | https://d1xarpci4ikg0w.cloudfront.net/9ab63e93-7801-4abd-b112-5fd8de9490ea.webp (320×182) |
| 10 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c | https://static.higgsfield.ai/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c.mp4 | https://static.higgsfield.ai/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c.webp | https://d1xarpci4ikg0w.cloudfront.net/3f0b0a0d-f223-4f41-a016-bcfd0dcb0bb8.webp (320×182) |
| 11 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/dc656da3-745c-4abf-8e59-cf008933159d | https://static.higgsfield.ai/dc656da3-745c-4abf-8e59-cf008933159d.mp4 | https://static.higgsfield.ai/dc656da3-745c-4abf-8e59-cf008933159d.webp | https://d1xarpci4ikg0w.cloudfront.net/8cf786d3-adf0-4d6b-990d-fd674056a9b6.webp (320×160) |
| 12 | https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/20f1bb72-790d-4980-a15a-0b68a0cc7603 | https://static.higgsfield.ai/20f1bb72-790d-4980-a15a-0b68a0cc7603.mp4 | https://static.higgsfield.ai/20f1bb72-790d-4980-a15a-0b68a0cc7603.webp | https://d1xarpci4ikg0w.cloudfront.net/6c0292bc-bde7-405c-8322-ab2744d2c146.webp (320×126) |

Source pages: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345, https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `20f1bb72-790d-4980-a15a-0b68a0cc7603`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1504×592
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2a1d4375-d00b-4d88-ad8d-c0c2031ba94e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ccecec1f-b0d0-49b1-b3b8-a50d518cabb4.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/20f1bb72-790d-4980-a15a-0b68a0cc7603

```text
A rugged elderly man with a weathered face and piercing, unyielding eyes sits in the dim glow of a rustic interior. His face is lined with deep wrinkles, each telling a silent story of hardship and experience. The warm, flickering light casts soft shadows across his sharp features, emphasizing the weight of his past. He wears a simple, worn-out vest over a faded shirt, blending seamlessly with the earthy, muted tones of the background. The camera frames him in an extreme close-up, straight-on angle, capturing the depth of his expression with cinematic precision. The atmosphere is intimate yet intense, evoking the aesthetic of a classic Western or neo-noir drama. The lighting is low-key and directional, reminiscent of old oil lamps, creating a chiaroscuro effect that enhances his enigmatic presence.

```

- **Sample `dc656da3-745c-4abf-8e59-cf008933159d`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1344×672
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dcca7822-bbff-4b49-9457-c22b3337bea8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7caf64c7-8bc9-4e53-b69f-4bccad4694dd.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/dc656da3-745c-4abf-8e59-cf008933159d

```text
An older man with slightly disheveled graying hair, wearing round glasses and a dark blazer over a plaid shirt, stands in a dimly lit, vintage-style hallway. His face is partially illuminated by warm, yellowish light from an ornate wall lamp, casting deep shadows on the intricately patterned wallpaper and wooden paneling. He holds a phone to his ear, his tense expression conveying concern or urgency, as if engaged in a crucial conversation. The camera captures a medium close-up shot, slightly tilted angle, enhancing the dramatic tension. The background features a set of stairs leading into darkness, suggesting an eerie or suspenseful atmosphere, reminiscent of a mystery or noir thriller. The lighting, composition, and setting evoke a cinematic, moody aesthetic.

```

- **Sample `18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bba047f3-0556-4ccd-92fb-473bd90d940c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fafbc307-1d3f-48e0-b027-fb2c418dbe22.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/18041e40-ed00-4dbb-a3b0-e5ef29d0fb9c

```text
A young man sits slouched on a vibrant yellow sofa, wearing an oversized cream shirt, his expression contemplative and distant. The room is dimly lit, with shafts of warm light cutting through the heavy drapes of red and white fabric, casting long shadows that accentuate the mood of solitude. Surrounding him, decorative pillows create a contrast of color, yet enhance the feeling of being enveloped by silence. As he gazes down, the low angle of the camera captures a sense of vulnerability, while the slight tilt adds a layer of unease. The atmosphere is thick with unspoken thoughts, as the textures of the soft fabric and the glow of sunlight create a poignant interplay between comfort and isolation.
```

- **Sample `13681105-3c83-4b70-80ff-0259244cd140`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4ae49df8-30a7-4ff5-8f61-22d6cbf1e7e4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3bbc50f6-9a6d-4d79-af8d-0c7621e881eb.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/13681105-3c83-4b70-80ff-0259244cd140

```text
A man walks purposefully toward the viewer, his serious expression revealing deep determination as he approaches. The setting is a dimly-lit church, with tall, shadowy columns creating a somber atmosphere. Light filters through stained glass windows, casting colorful reflections onto the stone floor, contrasting against the darkness surrounding him. As he comes closer, his features become sharply defined, emphasizing the intensity in his eyes. A palpable tension fills the air, inviting curiosity about his purpose. The camera captures this moment with a low angle, accentuating his strength and resolve against the solemn backdrop.
```

- **Sample `bdbc96d5-b281-4215-937e-4cd550a7a18a`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/01991a9c-b220-4fcf-8696-29ebfaa0258d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/39e60bf0-899b-4172-8a10-8f954564fe80.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/bdbc96d5-b281-4215-937e-4cd550a7a18a

```text
A scene is captured with a noticeable tilt, where the camera is deliberately rotated along its z-axis, creating a slanted horizon showing two middle-aged men dressed in full-body animal costumes, one in a fuzzy brown bear suit and the other in a bright pink pig onesie, both pointing pistols directly at the viewer with intense, dead-serious expressions; while maintaining eye contact with the viewer, their mouths move in sync as they speak to each other with calm yet threatening undertones, their outlandish appearance creating a bizarre contrast with the danger in their stance
```

- **Sample `bbfb5bb0-fff7-437f-9a61-d3cef8486af5`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/fc7b3e6d-1e0c-480a-9a80-c70db92abdc5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7d5790b2-3d66-4526-807b-c5658b5b3a29.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/bbfb5bb0-fff7-437f-9a61-d3cef8486af5

```text
A scene is captured with a noticeable tilt, where the camera is deliberately rotated along its z-axis, creating a slanted horizon creating a close tracking shot of an android woman with short neon-blue hair and glowing cyan eyes walks forward through a rainy, neon-lit cyberpunk city street; her blood-smeared chrome jawline contrasts with her youthful synthetic skin,  she raises a sleek, glowing cyber pistol directly at the viewer, locking eyes with unblinking intensity 
```

- **Sample `f76098eb-b080-40ca-ae1b-3863427cb0b4`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/65b43a2a-9f87-486a-8c45-31e8d0dbc84e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4a1d78a0-7dd3-4814-b730-e77d2435eadc.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/f76098eb-b080-40ca-ae1b-3863427cb0b4

```text
Two sharply dressed men sit in a vintage car, their serious expressions revealing an intense conversation. The dim interior glows with soft, filtered light, casting deep shadows and creating an atmosphere thick with tension. One man gestures passionately, his finger pointed as he leans closer, while the other remains stoically focused, tension etched across his brow. The muted colors of their suits contrast with the stark black and white setting, emphasizing their urgency. Outside the car, the world is blurred, reinforcing their isolation as they delve into a conversation that feels pivotal, almost conspiratorial. Each small movement within the enclosed space speaks volumes, heightening the emotional weight of their exchange.
```

- **Sample `843cbf0d-516a-420c-a24a-8d8ba69ba6a4`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d314aa54-e4f4-40a3-af6a-646af5da43bd.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2f3b65e0-4066-4b67-97b7-937ef8cf0081.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/843cbf0d-516a-420c-a24a-8d8ba69ba6a4

```text
A man in a sleek black suit strides purposefully down a narrow corridor, his grip firm on a gun at his side. The lighting is stark, casting a harsh glow that accentuates the sterile walls around him, evoking an atmosphere of tension and anticipation. Each step echoes in the elongated space, the dutch angle creating a sense of disorientation that mirrors his intense focus. Shadows flicker along the walls, hinting at unseen threats lurking in the corners. The air is thick with suspense, underscored by the silent promise of confrontation.
```

- **Sample `0f621c87-62a9-4be2-82a1-4a48896b479c`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1b5303d9-22be-4bd6-8050-ffda7c30d12e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/025d06c4-76f9-4dff-bf4d-f03520be4f90.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/0f621c87-62a9-4be2-82a1-4a48896b479c

```text
A man stands with an unsettling grin, his body tense as he clutches a knife, laughter spilling from his lips in a maniacal echo. The camera rolls to a dutch angle, lending a disorienting effect that amplifies the underlying tension. Harsh lighting casts deep shadows across his exaggerated features, highlighting the wild glint in his eyes and the pale contours of his face. The muted gray background surrounds him, enhancing the starkness of the moment. His disheveled hair contrasts sharply with his polished black attire, weaving an unsettling narrative of chaos. An air thick with chilling intensity surrounds him, as if his laughter alone could spark chaos in the darkness.
```

- **Sample `982ded99-6175-40c1-8866-524f90cfedc8`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/89dfc482-dc33-4893-9600-b9f58c46b3b6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/837a2b98-ad3c-4c89-a756-897f099e27d4.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/982ded99-6175-40c1-8866-524f90cfedc8

```text
a woman contemplates deeply. Soft light from the expansive blue sky gently illuminates her features, creating a subtle glow that highlights the contours of her face against the surrounding darkness. 
```

- **Sample `c5db2fbe-a53d-4d16-a881-f24fdf2424c4`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/66ee43f8-0970-46ce-b4c4-c0f75d483c44.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/13570c53-3f6e-46ce-8b69-b966affeb1b2.mp4
  - page: https://higgsfield.ai/motion/28a18555-b8ed-4cac-aad6-40ecaaad9345/c5db2fbe-a53d-4d16-a881-f24fdf2424c4

```text
A man stands in a shadowy room, clothed in a tailored black suit, his face marked by concern and doubt as he gazes intently at a knife clutched tightly in his hand. The dim light casts dramatic shadows, accentuating the contours of his troubled expression while a soft, unsettling glow envelops him from behind. The air is thick with tension, every bead of sweat on his forehead reflecting a mixture of fear and contemplation. As he raises the blade closer, its metallic surface glints ominously, symbolizing the weight of his internal struggle. The atmosphere crackles with uncertainty, each flicker of light revealing deeper layers of his conflicted thoughts.
```

- **Sample `18b6ae6f-74b7-404b-8014-1350e5e41177`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 848×1072
  - input image: https://d1xarpci4ikg0w.cloudfront.net/95caf152-c6a7-43b7-afff-c2a45a5b56f9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/264901c2-1881-4766-be5d-4ad30e6b7efc.mp4
  - page: https://higgsfield.ai/motion/b593944e-ae3e-47ce-8c6d-ea8dd87fe01f/18b6ae6f-74b7-404b-8014-1350e5e41177

```text
Cinematic animation featuring a dramatic Dutch angle camera movement that starts tightly framed on a young Asian man standing calmly and thoughtfully at an urban railway station. The camera rapidly zooms out, revealing the expansive structure of the station, the geometric patterns of the metal beams overhead, and the vast, empty railway tracks stretching into the distance. Soft natural lighting enhances the moody atmosphere, with subtle winter elements like patches of snow contributing to a sense of solitude and quiet anticipation.
```
