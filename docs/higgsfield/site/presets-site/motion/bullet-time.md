# Bullet Time — Higgsfield Motion preset

- **Category:** Camera · orbit & rotation
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Freezes or slows down the action while the camera moves around the subject. Creates a dramatic, cinematic effect often seen in action or sci-fi scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f | `855c5272-8f39-48b7-a362-e1337590387f` | 56 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=855c5272-8f39-48b7-a362-e1337590387f |
| https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946 | `9312c53a-f191-4aab-94fb-6b1dbdfdc946` | -243 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=9312c53a-f191-4aab-94fb-6b1dbdfdc946 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A martial artist leaps into a flying kick as water droplets hang frozen in the air; the camera sweeps around him in slow motion.
```

Use it as: upload a start image that matches the scene, select motion preset **Bullet Time**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Subject frozen or in slow motion while the camera sweeps around · **Best use:** Action climax, impact moments · **Models:** Kling 2.6, Sora 2† · **Phrase/template:** "Bullet Time around the leaping assassin" · "Camera: Bullet Time as she leaps from a loading dock onto a moving truck below." · image: "Bullet time effect. Time is frozen with snowflakes suspended in mid-air, while the camera smoothly rotates 180 degrees around [img 1]." · **Tips:** Motion-preset variants: Bullet Time Scene / White / Splash. CS 3.0 speed ramp "Bullet Time". Viral Hub: [bullet-time](viral/bullet-time.md).

## Related presets

- **Same category (Camera · orbit & rotation):** [360 Orbit](360-orbit.md), [3D Rotation](3d-rotation.md), [Arc Left](arc-left.md), [Arc Right](arc-right.md), [Glam](glam.md), [Lazy Susan](lazy-susan.md), [Robo Arm](robo-arm.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d13bbb8b-f78d-41b7-8147-a88e923c529f.webp (320×230)
- Card preview, variant `9312c53a`: https://d1xarpci4ikg0w.cloudfront.net/c55f67ca-c924-4112-b89b-c45c3616c34d.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/71b162dc-d783-4cba-9767-f5803379145d | https://static.higgsfield.ai/71b162dc-d783-4cba-9767-f5803379145d.mp4 | https://static.higgsfield.ai/71b162dc-d783-4cba-9767-f5803379145d.webp | https://d1xarpci4ikg0w.cloudfront.net/e2ebb025-d430-4dac-a763-a6f004fa3a50.webp (320×236) |
| 2 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f | https://static.higgsfield.ai/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f.mp4 | https://static.higgsfield.ai/3bbcc4c7-74bf-4ba4-87b4-414e541eda2f.webp | https://d1xarpci4ikg0w.cloudfront.net/3637a8ae-237a-4479-a248-dc364f3c74fc.webp (320×236) |
| 3 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592 | https://static.higgsfield.ai/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592.mp4 | https://static.higgsfield.ai/b9c9b741-4ca0-4c93-9d3e-fff37b9e6592.webp | https://d1xarpci4ikg0w.cloudfront.net/9b10d8c3-2107-464e-bf14-99945dd7a1bc.webp (320×180) |
| 4 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a | https://static.higgsfield.ai/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a.mp4 | https://static.higgsfield.ai/745e5e8f-3c98-44e1-8af4-b0279b7e3f5a.webp | https://d1xarpci4ikg0w.cloudfront.net/a359db86-c918-4943-a7a2-e1db49decf7c.webp (320×236) |
| 5 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/a56430c3-e0ae-4563-8bcb-4d4a52de0c64 | https://static.higgsfield.ai/a56430c3-e0ae-4563-8bcb-4d4a52de0c64.mp4 | https://static.higgsfield.ai/a56430c3-e0ae-4563-8bcb-4d4a52de0c64.webp | https://d1xarpci4ikg0w.cloudfront.net/574aa0a8-4142-420a-af3e-726f46c54fa2.webp (320×180) |
| 6 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/3501b7e4-9aa0-47a2-8861-22b6dba4785b | https://static.higgsfield.ai/3501b7e4-9aa0-47a2-8861-22b6dba4785b.mp4 | https://static.higgsfield.ai/3501b7e4-9aa0-47a2-8861-22b6dba4785b.webp | https://d1xarpci4ikg0w.cloudfront.net/ffed6d7e-9052-4bee-92c2-223c2122ad40.webp (320×182) |
| 7 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7 | https://static.higgsfield.ai/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7.mp4 | https://static.higgsfield.ai/8f321539-b91f-4a0a-a10b-5d7d8a2de6d7.webp | https://d1xarpci4ikg0w.cloudfront.net/ff6a1c5e-fda1-4512-b51c-0741d485b4b2.webp (320×182) |
| 8 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955 | https://static.higgsfield.ai/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955.mp4 | https://static.higgsfield.ai/c0a4dd0f-d7cc-42c2-a267-cf2bd8633955.webp | https://d1xarpci4ikg0w.cloudfront.net/ad440b3b-d0a5-44ea-96df-a5f4191c5b2e.webp (320×182) |
| 9 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c | https://static.higgsfield.ai/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c.mp4 | https://static.higgsfield.ai/cdc43aca-2323-4ccd-8da9-5eccbc7f7e9c.webp | https://d1xarpci4ikg0w.cloudfront.net/21c5d2e1-91b9-4fb2-b8f4-84b31eef31ac.webp (320×320) |
| 10 | https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f/78add2fc-e067-439d-9ff0-89e204889348 | https://static.higgsfield.ai/78add2fc-e067-439d-9ff0-89e204889348.mp4 | https://static.higgsfield.ai/78add2fc-e067-439d-9ff0-89e204889348.webp | https://d1xarpci4ikg0w.cloudfront.net/8d47195b-7263-4d25-9fc3-29cddf8bd6c7.webp (320×182) |

Source pages: https://higgsfield.ai/motion/855c5272-8f39-48b7-a362-e1337590387f, https://higgsfield.ai/motion/9312c53a-f191-4aab-94fb-6b1dbdfdc946. Crawled 2026-09.
