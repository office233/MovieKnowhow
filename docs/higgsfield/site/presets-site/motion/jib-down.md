# Jib Down — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera moves gently downward, focusing on the subject or revealing what's below. Perfect for dramatic entrances or scene reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb | `2057206c-09ef-40b2-9cc9-049e41a0b8bb` | -224 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2057206c-09ef-40b2-9cc9-049e41a0b8bb |
| https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43 | `cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43` | 59 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera jibs down from a chandelier to a bride adjusting her veil in front of a gilded mirror.
```

Use it as: upload a start image that matches the scene, select motion preset **Jib Down**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Up](jib-up.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ee646153-2f1f-431d-9e02-55bad908e640.webp (320×242)
- Card preview, variant `cd68bb84`: https://d1xarpci4ikg0w.cloudfront.net/48c57a56-d074-4752-b94c-5eb127fb3233.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/4c45cf51-55df-435b-bb6e-2f6ad9b29100 | https://static.higgsfield.ai/4c45cf51-55df-435b-bb6e-2f6ad9b29100.mp4 | https://static.higgsfield.ai/4c45cf51-55df-435b-bb6e-2f6ad9b29100.webp | https://d1xarpci4ikg0w.cloudfront.net/8ec64adb-4a0f-4d4b-8485-9701c80cbcca.webp (320×242) |
| 2 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/daf43acd-6672-4315-bd5f-2abfdf5325d4 | https://static.higgsfield.ai/daf43acd-6672-4315-bd5f-2abfdf5325d4.mp4 | https://static.higgsfield.ai/daf43acd-6672-4315-bd5f-2abfdf5325d4.webp | https://d1xarpci4ikg0w.cloudfront.net/a034da38-6736-480c-9d42-433aec132dfe.webp (320×210) |
| 3 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/391a4970-b196-46b9-a1d2-d851536e49be | https://static.higgsfield.ai/391a4970-b196-46b9-a1d2-d851536e49be.mp4 | https://static.higgsfield.ai/391a4970-b196-46b9-a1d2-d851536e49be.webp | https://d1xarpci4ikg0w.cloudfront.net/fc769ef1-4fe0-4bb7-8df3-5a1cbaea867e.webp (320×320) |
| 4 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/ded5df8a-765b-41cf-b05a-0b0cebf002e3 | https://static.higgsfield.ai/ded5df8a-765b-41cf-b05a-0b0cebf002e3.mp4 | https://static.higgsfield.ai/ded5df8a-765b-41cf-b05a-0b0cebf002e3.webp | https://d1xarpci4ikg0w.cloudfront.net/28136fcf-4806-4b32-8e23-3e3b0d748392.webp (320×210) |
| 5 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73 | https://static.higgsfield.ai/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73.mp4 | https://static.higgsfield.ai/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73.webp | https://d1xarpci4ikg0w.cloudfront.net/9db54506-e926-4cb9-9bba-4b2f0a4626fe.webp (320×486) |
| 6 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/a7b24c94-37d4-4d19-967d-2996c1f77c4a | https://static.higgsfield.ai/a7b24c94-37d4-4d19-967d-2996c1f77c4a.mp4 | https://static.higgsfield.ai/a7b24c94-37d4-4d19-967d-2996c1f77c4a.webp | https://d1xarpci4ikg0w.cloudfront.net/8027d159-34a0-4579-9c8d-e35ffcef5969.webp (320×486) |
| 7 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/e04ef8f6-311c-4be2-a2e5-7c738554f5d0 | https://static.higgsfield.ai/e04ef8f6-311c-4be2-a2e5-7c738554f5d0.mp4 | https://static.higgsfield.ai/e04ef8f6-311c-4be2-a2e5-7c738554f5d0.webp | https://d1xarpci4ikg0w.cloudfront.net/7e86ce00-c758-4aa5-a85d-22ba1786b30c.webp (320×182) |
| 8 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/6b861662-502f-4d4d-8827-815aebd95075 | https://static.higgsfield.ai/6b861662-502f-4d4d-8827-815aebd95075.mp4 | https://static.higgsfield.ai/6b861662-502f-4d4d-8827-815aebd95075.webp | https://d1xarpci4ikg0w.cloudfront.net/0223a89e-2c18-4664-aeaa-39f79050cb67.webp (320×424) |
| 9 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/b2d291d2-571e-4f99-a479-06d1c3b57ed6 | https://static.higgsfield.ai/b2d291d2-571e-4f99-a479-06d1c3b57ed6.mp4 | https://static.higgsfield.ai/b2d291d2-571e-4f99-a479-06d1c3b57ed6.webp | https://d1xarpci4ikg0w.cloudfront.net/6eb39d78-f2e2-4d19-82b2-2ff87690b7d2.webp (320×486) |
| 10 | https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/dd7d3559-ce34-400f-bd1c-1bbadb34986c | https://static.higgsfield.ai/dd7d3559-ce34-400f-bd1c-1bbadb34986c.mp4 | https://static.higgsfield.ai/dd7d3559-ce34-400f-bd1c-1bbadb34986c.webp | https://d1xarpci4ikg0w.cloudfront.net/a1eb0a81-35f5-4dd3-852c-b5b0fe566975.webp (320×182) |

Source pages: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb, https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `dd7d3559-ce34-400f-bd1c-1bbadb34986c`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/935c6105-0ec1-40ec-a863-e2f1c6577102.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cf51d2da-adef-4eda-a25a-2f034fd3b3a7.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/dd7d3559-ce34-400f-bd1c-1bbadb34986c

```text
The camera begins at a composed medium close-up of the woman, framed in the glowing orange hallway, her expression unreadable yet deliberate. Her eyes don’t blink, her posture is statuesque — calm, commanding. Slowly, the camera starts a smooth jib down motion, gliding downward past her neck, her arms relaxed at her sides, her black clothing absorbing the surrounding shadows. As the camera continues to descend, we discover the unexpected: a vivid pool of blood has formed at her feet. In its center, delicate red rose petals float silently, gently rippling in the viscous liquid. The contrast between violence and beauty is jarring — the red petals shimmer under the ambient light, as if dancing atop the aftermath of something irreversible. No sound is heard. Just stillness and color. The descent ends here, holding on the eerie poetry of the scene — a frozen crime or a final act of grace.
```

- **Sample `b2d291d2-571e-4f99-a479-06d1c3b57ed6`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=7, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/604b1ed1-252e-4a53-9580-548dd6661815.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d2366c0f-c5c2-460b-a890-36e274a3c6dc.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/b2d291d2-571e-4f99-a479-06d1c3b57ed6

```text
Rapid vertical descent closely tracking the falling feather’s delicate motion through the air. A single white feather with soft barbs and frayed edges, gently twisting midair. Sunlit forest backdrop with tall, shadowy tree trunks and softly blurred green foliage. The feather drifts downward in a slow, spiraling fall, swaying lightly from side to side. Tight follow shot maintaining close proximity to the feather’s path, simulating light floaty inertia, gently rotating without losing its motion. Dreamlike and serene, filled with gentle natural light and forest hush. Soft focus background, shallow depth of field, golden light accents highlighting feather texture.
```

- **Sample `6b861662-502f-4d4d-8827-815aebd95075`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=5.5, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/26bc2e62-0f69-4823-8dc3-2c1b6d9f7f19.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/75c370ee-c313-46cf-ac50-204cfd2c2b3b.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/6b861662-502f-4d4d-8827-815aebd95075

```text
Slowly tilts downward. A close-up of a hand delicately releasing a vibrant yellow tennis ball. Set on a soft green tennis court with faint white lines and a serene atmosphere. The tennis ball gently falls straight down, maintaining its orientation. Tight close-up. Centered composition. Shallow depth of field. Calm and focused, with soft ambient light and quiet tension before motion. Minimalist sports realism. Natural tones. Clean framing.
```

- **Sample `e04ef8f6-311c-4be2-a2e5-7c738554f5d0`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d7019cbf-4626-4f7f-b273-ea94a7fad66a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/30d5aa0a-5bf3-40ea-b309-3a8faa4aa1eb.mp4
  - page: https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43/e04ef8f6-311c-4be2-a2e5-7c738554f5d0

```text
The camera drops downward, staying aligned with the calmly descending yo-yo as it falls. A glossy, multicolored yo-yo suspended on a taut white string, vibrant and slightly translucent. An abandoned industrial warehouse bathed in soft beams of daylight streaming through dusty windows. The yo-yo falls calmly in a straight line, as it descends along the string. A dynamic tracking shot that tightly follows the yo-yo’s vertical fall, maintaining perfect center framing. Quiet and still, punctuated by the focused movement of the yo-yo in the serene, spacious environment. Industrial minimalism with soft lighting, contrasting the colorful, toy-like quality of the yo-yo.
```

- **Sample `a7b24c94-37d4-4d19-967d-2996c1f77c4a`** (priority 6) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ed56d69c-6179-46fe-8239-6925c2317959.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f284f006-452e-46fc-8c7d-ebd7b3aa28ae.mp4
  - page: https://higgsfield.ai/motion/cd68bb84-f0f5-4e2a-bfbf-b06e7949fc43/a7b24c94-37d4-4d19-967d-2996c1f77c4a

```text
The camera quickly tilts downward in sync with the descending motion of the ballerina’s extended leg. A poised ballerina in a white costume, her face focused and elegant, with one leg raised high in a graceful extension. A dimly lit stage with a dark background and a subtle spotlight highlighting the dancer’s presence. Her extended leg lowers with precision and control, emphasizing the strength and grace of her movement. A rapid tilt down that tracks the motion of the leg from high extension to its grounded finish, maintaining focus. Focused and elegant, capturing the discipline and finesse of classical ballet. Minimalistic and theatrical, with soft lighting, natural tones, and classical ballet attire.
```

- **Sample `2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/adffbc50-4bd5-4da9-b7ce-93afd72bae01.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f02b9880-8e91-4a0b-8361-a899205fd212.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/2fcfb8d4-aaa0-4e42-9a70-cbe9a55a3e73

```text
A dramatic cinematic shot. A man with tears in his eyes stares intensely into the camera, his face filled with fear and disbelief. The camera performs a slow downward jib movement, revealing his trembling hands resting in his lap. As the camera moves down, it reveals a black handgun held tightly in his hands. Warm, low-key lighting creates a tense and emotional atmosphere. Shot on a 35mm lens with shallow depth of field.
```

- **Sample `ded5df8a-765b-41cf-b05a-0b0cebf002e3`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1f4211f4-9102-470c-954f-d26bbc01e73d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/874d06b3-b30d-486e-84b4-3a735ad9c918.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/ded5df8a-765b-41cf-b05a-0b0cebf002e3

```text
“A dynamic, cinematic close-up of a man with gold grills and clear glasses holding a piece of crispy fried chicken. The camera performs a smooth jib down movement from eye level to chest level. As the camera descends, the man confidently dips the chicken into a rich dipping sauce just below frame, keeping eye contact with the lens. The lighting is vibrant and colorful, resembling a convenience store interior with warm and cool tones. Shallow depth of field, shot with an anamorphic lens for a stylized cinematic look.”
```

- **Sample `391a4970-b196-46b9-a1d2-d851536e49be`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c841a851-1359-4228-8a9e-90d9ba76e209.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3c25a04d-4984-47b3-9e98-f01b3f689bd1.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/391a4970-b196-46b9-a1d2-d851536e49be

```text
“A cinematic scene featuring a young girl with golden braids sitting in a warmly lit, colorful room. The camera starts focused on her calm, confident face, then slowly moves downward (smooth jib down) to reveal her gently holding a white rabbit in her hands. Shallow depth of field, soft natural light pouring through the windows, warm tones and a cozy interior background. The atmosphere is intimate and dreamy.”

```

- **Sample `daf43acd-6672-4315-bd5f-2abfdf5325d4`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/05a6f242-19fb-45b3-8564-971d493d823b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b570c536-acb5-4f09-b9a8-1930da01b612.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/daf43acd-6672-4315-bd5f-2abfdf5325d4

```text
“A cinematic scene inside a dimly lit recording studio. A young man stands in front of a studio microphone with his head lowered in focus. The camera performs a smooth downward jib movement. As the camera descends, he slowly lowers a pair of studio headphones and places them gently on the table in front of him. Soft warm lighting from a nearby lamp creates a moody, introspective atmosphere. 35mm cinematic lens look, shallow depth of field.”
```

- **Sample `4c45cf51-55df-435b-bb6e-2f6ad9b29100`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0b721b0f-03e1-4e7f-9b4a-d209d3f6d247.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/89a32d2b-e1ec-4671-b7e5-302a0887ce98.mp4
  - page: https://higgsfield.ai/motion/2057206c-09ef-40b2-9cc9-049e41a0b8bb/4c45cf51-55df-435b-bb6e-2f6ad9b29100

```text
The camera jibs down quickly, revealing a man clad entirely in black, suggesting an air of mystery and intensity. His expression is stern, framed by dark braids and a tall, furry hat, reflecting a commanding presence. The environment around him is illuminated by stark, fluorescent lighting that casts angular shadows and highlights the rich textures of his outfit. As the camera halts, it centers on his striking dark red boots, contrasting sharply with the black ensemble, evoking intrigue and tension. The space feels both confined and expansive, creating a sense of isolation within this striking visual narrative.
```
