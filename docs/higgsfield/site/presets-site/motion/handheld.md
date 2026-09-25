# Handheld — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** Mimics natural, shaky camera movement for a raw and realistic feel. Great for intense scenes, vlogs, or making viewers feel like they're in the moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f | `15e8358d-335d-4e7a-8eaa-277325ab728f` | 66 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=15e8358d-335d-4e7a-8eaa-277325ab728f |
| https://higgsfield.ai/motion/36e6e450-52d9-484f-bfbe-f069e06a1530 | `36e6e450-52d9-484f-bfbe-f069e06a1530` | -258 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=36e6e450-52d9-484f-bfbe-f069e06a1530 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A young woman talks excitedly to camera while walking through a busy farmers market, natural handheld sway.
```

Use it as: upload a start image that matches the scene, select motion preset **Handheld**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Organic, shaky handheld feel · **Best use:** Documentary realism, intimacy, chaos · **Models:** Kling 2.6, Veo 3 · **Phrase/template:** "Handheld camera jostling with the crowd" · reliable: "handheld tracking following the subject, subtle shake, not chaotic" · precise: "Micro-vibrations: 0.5–1 mm frame jitter at 2 Hz frequency…" · **Tips:** Camera-emotion sync: rage = jittery handheld; calm = smooth breathing handheld

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/191af5d5-165e-42f0-a15b-c57a848b0cea.webp (320×180)
- Card preview, variant `36e6e450`: https://d1xarpci4ikg0w.cloudfront.net/734ec2f2-ec6a-41c5-9264-8f56f76fe745.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/5577043e-2b02-4be4-a39b-5edaefd37ed2 | https://static.higgsfield.ai/5577043e-2b02-4be4-a39b-5edaefd37ed2.mp4 | https://static.higgsfield.ai/5577043e-2b02-4be4-a39b-5edaefd37ed2.webp | https://d1xarpci4ikg0w.cloudfront.net/b9ca3843-d29a-47c6-9e90-c0090b5fd50f.webp (320×320) |
| 2 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/f07719b8-0a02-4604-a075-0b355d25bdbd | https://static.higgsfield.ai/f07719b8-0a02-4604-a075-0b355d25bdbd.mp4 | https://static.higgsfield.ai/f07719b8-0a02-4604-a075-0b355d25bdbd.webp | https://d1xarpci4ikg0w.cloudfront.net/7c1df233-c693-4011-b993-d900e55c0523.webp (320×180) |
| 3 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d | https://static.higgsfield.ai/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d.mp4 | https://static.higgsfield.ai/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d.webp | https://d1xarpci4ikg0w.cloudfront.net/927e86e1-0072-45a9-b8f6-2e89832ff41f.webp (320×320) |
| 4 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/41a23f7d-6f61-4578-b97c-e35c83dd6cb1 | https://static.higgsfield.ai/41a23f7d-6f61-4578-b97c-e35c83dd6cb1.mp4 | https://static.higgsfield.ai/41a23f7d-6f61-4578-b97c-e35c83dd6cb1.webp | https://d1xarpci4ikg0w.cloudfront.net/7daa513a-d8d2-4562-8855-da6299cd5691.webp (320×180) |
| 5 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/4aff77c6-055a-4ff5-9894-d80b03b70191 | https://static.higgsfield.ai/4aff77c6-055a-4ff5-9894-d80b03b70191.mp4 | https://static.higgsfield.ai/4aff77c6-055a-4ff5-9894-d80b03b70191.webp | https://d1xarpci4ikg0w.cloudfront.net/fcfa3b79-8e08-483f-904e-a88bf5dbe57b.webp (320×562) |
| 6 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f | https://static.higgsfield.ai/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f.mp4 | https://static.higgsfield.ai/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f.webp | https://d1xarpci4ikg0w.cloudfront.net/ca50dbc2-fbf3-485f-b9bc-ee288bdea9f4.webp (320×486) |
| 7 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef | https://static.higgsfield.ai/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef.mp4 | https://static.higgsfield.ai/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef.webp | https://d1xarpci4ikg0w.cloudfront.net/5469bbee-e141-4d70-a842-6a07ee2b9138.webp (320×210) |
| 8 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/bef3d230-d076-4cef-8649-0255cd1c7e12 | https://static.higgsfield.ai/bef3d230-d076-4cef-8649-0255cd1c7e12.mp4 | https://static.higgsfield.ai/bef3d230-d076-4cef-8649-0255cd1c7e12.webp | https://d1xarpci4ikg0w.cloudfront.net/9bd871eb-79c0-41cf-a50a-d6a6d874d9e5.webp (320×242) |
| 9 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/26ea4fba-245f-4821-9f21-dba38e052527 | https://static.higgsfield.ai/26ea4fba-245f-4821-9f21-dba38e052527.mp4 | https://static.higgsfield.ai/26ea4fba-245f-4821-9f21-dba38e052527.webp | https://d1xarpci4ikg0w.cloudfront.net/93a07a28-aa0d-4996-bcde-c6a915c57613.webp (320×210) |
| 10 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e6c0a05a-7d4e-4c87-b922-ab24673b29ce | https://static.higgsfield.ai/e6c0a05a-7d4e-4c87-b922-ab24673b29ce.mp4 | https://static.higgsfield.ai/e6c0a05a-7d4e-4c87-b922-ab24673b29ce.webp | https://d1xarpci4ikg0w.cloudfront.net/c0b1196d-4b9e-4de2-8c85-f331faa32421.webp (320×320) |

Source pages: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f, https://higgsfield.ai/motion/36e6e450-52d9-484f-bfbe-f069e06a1530. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `e6c0a05a-7d4e-4c87-b922-ab24673b29ce`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/37c1c2eb-97ac-44b8-8811-ae434ca0b843.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bd13ca90-45a5-4df6-9363-986651d6b3b9.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e6c0a05a-7d4e-4c87-b922-ab24673b29ce

```text
A person with a television for a head runs frantically to the left, clad in loose-fitting beige clothing that flutters with each determined stride. The street is lined with weathered buildings, their blue shutters casting a stark backdrop against the vibrant yellow curb. Urban chaos unfolds around them, amplifying the figure’s urgency as they navigate the asphalt, their boots striking against the ground with resolve. The harsh midday light glints off the metal surfaces of the television, creating a surreal gleam. As the camera tracks their movement, the air thickens with an anxious energy, a contrast to the static nature of the screens above. There’s a palpable tension in the atmosphere, inviting viewers to question the reason behind this frantic escape.
```

- **Sample `26ea4fba-245f-4821-9f21-dba38e052527`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/59125597-1228-4eff-aced-9fb6f46f0f25.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/83dee7c2-7b75-4bf9-bb9c-d1600c8311ec.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/26ea4fba-245f-4821-9f21-dba38e052527

```text
The man walks purposefully along the winding path, his back turned to the viewer, dressed in a dark jacket that contrasts with the bright, sunlit scenery ahead. The tranquil suburban house, with its green shutters and vibrant red door, stands ominously amidst the chaos, as flames begin to engulf the roof and the surrounding trees crackle with fire. Soft sunlight filters through the leaves, casting a warm, almost surreal glow over the scene, yet the looming threat of destruction hangs heavy in the air. Each step he takes seems to resonate with a mix of determination and resignation, as the tension builds between his calm demeanor and the imminent danger. The ground beneath him is dotted with wildflowers, a stark reminder of what may soon be lost.
```

- **Sample `bef3d230-d076-4cef-8649-0255cd1c7e12`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ca90cd54-1b77-4994-b821-0cd62bb41a6a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4df2ce08-5a0c-4f3b-9103-5f1d81f592a2.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/bef3d230-d076-4cef-8649-0255cd1c7e12

```text
A man dressed in a long black coat walks slowly toward a striking yellow boat docked in the calm waters, his posture relaxed yet purposeful. The setting features a deserted beach under a dim, overcast sky, with a slight breeze ruffling the surface of the water and the edges of his coat. Light plays off the wet sand, creating a muted sheen that contrasts with the vibrant yellow of the boat. As the man approaches, his silhouette becomes more defined, revealing a sense of anticipation and quiet contemplation. The gentle sound of lapping waves adds to the scene, enhancing the emotional weight of his solitary journey.
```

- **Sample `e7eaadb9-7f25-45a3-affe-f8dfc9c92bef`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e92bae15-86a3-45ea-a581-71f77b949e20.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c4d58441-6315-43a1-93c3-f326b71ed813.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef

```text
A man stands defiantly in a leather jacket, gripping a wooden bat tightly, his brow furrowed and mouth animated in a heated argument with a policeman, who leans confidently with the bat resting on his shoulder. They are in a gritty urban street defined by muted gray asphalt that starkly contrasts their intense emotions. Behind them, a group in leather jackets looms, their silent anticipation amplifying the tension in the thick air. The early evening light casts long shadows, revealing the weathered textures of the buildings that surround them. The atmosphere buzzes with unresolved conflict, emotions swirling visibly, creating a vivid tableau of confrontation and underlying power dynamics in a raw urban setting.
```

- **Sample `f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bf2025cb-3eef-45b3-9bbb-ca572357cd10.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/18d95318-5f9c-4407-8312-eda1662aefb2.mp4
  - page: https://higgsfield.ai/motion/36e6e450-52d9-484f-bfbe-f069e06a1530/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f

```text
A man stands with a bare torso, arms outstretched, walking resolutely toward a line of police officers clad in riot gear, shields raised, creating a palpable tension in the air. The dimly lit street is shrouded in swirling smoke, illuminated by the harsh blue lights of police vehicles parked behind the officers, casting long shadows that emphasize the scene's intensity. The atmosphere hangs heavy with anticipation, the stillness punctuated only by hushed whispers and distant murmurs. The alarmingly clear division between the defiant man and the armored police speaks to a deeper conflict, as emotions surge in this moment of confrontation. The ground beneath him is scattered with debris, representing chaos, and a subtle color palette of blue and gray underscores the gravity of the situation.
```

- **Sample `4aff77c6-055a-4ff5-9894-d80b03b70191`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/688fd068-eb8b-452e-a71a-b46d17cc6cec.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e5925e41-1079-4539-85f8-efeb87c4ff17.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/4aff77c6-055a-4ff5-9894-d80b03b70191

```text
A woman in a leather jacket stands confidently on a city street, her posture relaxed yet empowered, as she gazes upward. The scene is set at night, with sleek skyscrapers towering in the background, their glass facades reflecting the neon lights that flicker in vibrant colors. Rain-soaked pavement glistens under the urban glow, enhancing the moody atmosphere around her. As she wanders through this bustling metropolis, a soft breeze ruffles her hair, adding to the sense of motion and freedom. The camera follows her with a handheld perspective, capturing a fleeting moment of connection between her and the dynamic city life, filled with unspoken stories and hidden depths.
```

- **Sample `41a23f7d-6f61-4578-b97c-e35c83dd6cb1`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7ed134d9-a08d-44df-b71f-bc24728224e1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/eab71074-cc2a-4bf5-9445-b798067d3c6c.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/41a23f7d-6f61-4578-b97c-e35c83dd6cb1

```text
A woman strides confidently through a sun-drenched city street, wearing a striking red dress that flows with her every step. She dons sleek sunglasses that reflect the bright midday light, her features illuminated by the warm glow radiating off the historic façades around her. The camera, held in a handheld style, follows closely, capturing the rhythm of her movements against the backdrop of bustling pedestrians and familiar urban sounds. The scene reveals a juxtaposition of her poised demeanor amidst the lively chaos of city life, evoking a sense of independence and purpose. The golden light casts soft shadows, highlighting the architectural details and the subtle textures of the surroundings, enhancing the emotional depth of this vibrant urban tableau.
```

- **Sample `a3e86c0d-c8da-42d8-a262-e6049ee2ec4d`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/07e84758-7497-402b-b6fb-4afd14bc21db.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/23a8757f-0c74-42aa-ac5e-a2c80dbdc242.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d

```text
In a pulsating club filled with colorful lights, a woman dances gracefully, her wavy, blonde hair catching glimmers of pink and green hues. She wears a sleek black dress that hugs her figure, exuding confidence yet hinting at a deeper introspection. The atmosphere is electric, with shadows and bursts of light creating a mesmerizing backdrop to her movements. As her expression shifts from contemplative to elated, the camera captures her every sway, the handheld perspective drawing the viewer into her world. The lighting dances around her, each color reflecting her emotions and enhancing the vibrant energy of the night.
```

- **Sample `f07719b8-0a02-4604-a075-0b355d25bdbd`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/633c2996-8e5f-4d42-969a-ac71fb86f3d5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/77feadde-ec42-4d1b-b1f4-eb0e588064ba.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/f07719b8-0a02-4604-a075-0b355d25bdbd

```text
A woman exudes confidence as she walks along the railing of a bridge. Clad in a chic black leather jacket and bold, rust-colored pants, her short bob swings softly in the night breeze. The urban landscape behind her is alive with shimmering city lights, contrasting against the deep blue of the twilight sky. The vibrant reflections on the water create a mesmerizing backdrop, as the atmosphere radiates a blend of intensity and allure. 
```

- **Sample `5577043e-2b02-4be4-a39b-5edaefd37ed2`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/167ce242-727f-4d9e-b214-b224291126c8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4f4678c3-09aa-44cc-b02f-a6f9db693db0.mp4
  - page: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/5577043e-2b02-4be4-a39b-5edaefd37ed2

```text
A young man sits confidently behind a vibrant drum set, his face a mix of concentration and passion as he plays intensely. The scene unfolds in a dimly lit concert venue, punctuated by colorful stage lights casting dynamic hues across the room. His powerful strokes resonate with the music, sweat glistening on his skin, conveying a fervent connection to the rhythm. The camera sways slightly in a handheld style, capturing every nuance of his performance, from the rapid movement of his sticks to the focused fire in his eyes. Each beat reverberates through the atmosphere, pulling the audience into the electric energy of the moment.
```
