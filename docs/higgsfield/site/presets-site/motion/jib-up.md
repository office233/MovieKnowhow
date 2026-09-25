# Jib Up — Higgsfield Motion preset

- **Category:** Camera · crane, jib & tilt
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** The camera lifts smoothly upward in a vertical motion, revealing more of the scene or emphasizing height. Great for epic intros or transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b | `c22b1586-837b-480f-a456-d4e8ba9c3a4b` | 65 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c22b1586-837b-480f-a456-d4e8ba9c3a4b |
| https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7 | `d6b43086-d5d1-415b-a239-016698b425d7` | -216 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d6b43086-d5d1-415b-a239-016698b425d7 |
| https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09 | `30a7fe68-0967-419a-b7cb-0d0bed480b09` | -255 | none | none published (empty `settings`); model Minimax Hailuo 2.3 | https://higgsfield.ai/ai/video?model=minimax-2.3&presetMotionId=30a7fe68-0967-419a-b7cb-0d0bed480b09 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Minimax Hailuo 2.3 — family `minimax`, Generate button opens `/ai/video?model=minimax-2.3&presetMotionId=<id>` (the page's samples block reports model `minimax_hailuo`). These pages publish no settings.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A street dancer finishes a move in an alley; the camera jibs up to show the graffiti-covered building towering above him.
```

Use it as: upload a start image that matches the scene, select motion preset **Jib Up**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · crane, jib & tilt):** [Crane Down](crane-down.md), [Crane Over The Head](crane-over-the-head.md), [Crane Up](crane-up.md), [Jib Down](jib-down.md), [Overhead](overhead.md), [Tilt Down](tilt-down.md), [Tilt up](tilt-up.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/395a2a6f-28e9-4319-8a58-e8af77048f69.webp (320×242)
- Card preview, variant `d6b43086`: https://d1xarpci4ikg0w.cloudfront.net/68cdb529-88e5-4feb-85c4-1cb2301b0061.webp

### Sample videos (8; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/fe709573-0f8c-446f-baaf-f83f06d39c60 | https://static.higgsfield.ai/fe709573-0f8c-446f-baaf-f83f06d39c60.mp4 | https://static.higgsfield.ai/fe709573-0f8c-446f-baaf-f83f06d39c60.webp | https://d1xarpci4ikg0w.cloudfront.net/cc204b6c-a187-4cc8-b442-c1d2f22bec3e.webp (320×242) |
| 2 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/ca5a4a86-60c6-4533-ae06-6a0ac37134c2 | https://static.higgsfield.ai/ca5a4a86-60c6-4533-ae06-6a0ac37134c2.mp4 | https://static.higgsfield.ai/ca5a4a86-60c6-4533-ae06-6a0ac37134c2.webp | https://d1xarpci4ikg0w.cloudfront.net/a7c6ab68-0179-476a-bb1b-f066393692a8.webp (320×424) |
| 3 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/562f8905-e376-4d78-b39a-eefa2a07ce6a | https://static.higgsfield.ai/562f8905-e376-4d78-b39a-eefa2a07ce6a.mp4 | https://static.higgsfield.ai/562f8905-e376-4d78-b39a-eefa2a07ce6a.webp | https://d1xarpci4ikg0w.cloudfront.net/4256769f-47fa-49f6-a902-5a1e39102770.webp (320×486) |
| 4 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/aa83f8d2-d11c-4e9a-9929-447bddd6f52d | https://static.higgsfield.ai/aa83f8d2-d11c-4e9a-9929-447bddd6f52d.mp4 | https://static.higgsfield.ai/aa83f8d2-d11c-4e9a-9929-447bddd6f52d.webp | https://d1xarpci4ikg0w.cloudfront.net/1f170ee1-44b3-4647-bcd1-96a0d13028b5.webp (320×182) |
| 5 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/a72e9bcd-8768-4257-ae43-1571c67df228 | https://static.higgsfield.ai/a72e9bcd-8768-4257-ae43-1571c67df228.mp4 | https://static.higgsfield.ai/a72e9bcd-8768-4257-ae43-1571c67df228.webp | https://d1xarpci4ikg0w.cloudfront.net/68514b6a-316b-4cf2-a299-0195d3e26047.webp (320×182) |
| 6 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/916906ec-2e41-4b1d-826b-3ec5b7b7a387 | https://static.higgsfield.ai/916906ec-2e41-4b1d-826b-3ec5b7b7a387.mp4 | https://static.higgsfield.ai/916906ec-2e41-4b1d-826b-3ec5b7b7a387.webp | https://d1xarpci4ikg0w.cloudfront.net/32ce602a-d839-4c24-acfc-6a9ce71534ec.webp (320×242) |
| 7 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/c7f7b437-d494-4138-9881-25026ea6d1bd | https://static.higgsfield.ai/c7f7b437-d494-4138-9881-25026ea6d1bd.mp4 | https://static.higgsfield.ai/c7f7b437-d494-4138-9881-25026ea6d1bd.webp | https://d1xarpci4ikg0w.cloudfront.net/31ee067e-43c8-4f4c-95cd-9260360ec987.webp (320×210) |
| 8 | https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/6202de41-9d14-42c1-88cf-bb83a53b147f | https://static.higgsfield.ai/6202de41-9d14-42c1-88cf-bb83a53b147f.mp4 | https://static.higgsfield.ai/6202de41-9d14-42c1-88cf-bb83a53b147f.webp | https://d1xarpci4ikg0w.cloudfront.net/84eaedb3-9252-4e34-8b7c-7c725f5fe8c4.webp (320×210) |

- Card preview, round-2 variant `30a7fe68` (Minimax Hailuo 2.3): https://cdn.higgsfield.ai/minimax_hailuo_motion/0006fd48-1ef2-47d0-bd57-9a543a0d53ba.mp4 · thumbnail https://cdn.higgsfield.ai/minimax_hailuo_motion/29c5b2b9-bc24-4927-ac8a-9ec838bc507f.webp (600×800)

### Sample videos, round-2 variant `30a7fe68` (Minimax Hailuo 2.3) (9)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/8453d478-5a30-4e12-b8dd-67fa9dbb9630 | https://cdn.higgsfield.ai/minimax_hailuo_sample/8453d478-5a30-4e12-b8dd-67fa9dbb9630.mp4 | 1080×1438 |
| 2 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/4b1c9d9f-ad71-404a-85ff-21676eebc0f8 | https://cdn.higgsfield.ai/minimax_hailuo_sample/4b1c9d9f-ad71-404a-85ff-21676eebc0f8.mp4 | 1080×1438 |
| 3 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/84079064-9aa8-4785-8365-8561ef15fa1a | https://cdn.higgsfield.ai/minimax_hailuo_sample/84079064-9aa8-4785-8365-8561ef15fa1a.mp4 | 1438×1080 |
| 4 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/e177f6ec-e836-44af-8a9e-27472cedd4eb | https://cdn.higgsfield.ai/minimax_hailuo_sample/e177f6ec-e836-44af-8a9e-27472cedd4eb.mp4 | 1438×1080 |
| 5 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/5bac6cfc-4e63-4f6d-926c-37632faaccca | https://cdn.higgsfield.ai/minimax_hailuo_sample/5bac6cfc-4e63-4f6d-926c-37632faaccca.mp4 | 1438×1080 |
| 6 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/02673307-7c8d-433d-9e51-61ca0814409e | https://cdn.higgsfield.ai/minimax_hailuo_sample/02673307-7c8d-433d-9e51-61ca0814409e.mp4 | 1080×1438 |
| 7 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/d9e98255-dee6-444c-8058-d6ee099bd875 | https://cdn.higgsfield.ai/minimax_hailuo_sample/d9e98255-dee6-444c-8058-d6ee099bd875.mp4 | 1080×1620 |
| 8 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/eb906cde-0ea9-40c1-8478-043fe4e72beb | https://cdn.higgsfield.ai/minimax_hailuo_sample/eb906cde-0ea9-40c1-8478-043fe4e72beb.mp4 | 1080×1438 |
| 9 | https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09/a2722c43-5f77-4eb4-a92b-ff53160d7f2a | https://cdn.higgsfield.ai/minimax_hailuo_sample/a2722c43-5f77-4eb4-a92b-ff53160d7f2a.mp4 | 1438×1080 |

Source pages: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b, https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7, https://higgsfield.ai/motion/30a7fe68-0967-419a-b7cb-0d0bed480b09. Crawled 2026-09.


## Real sample prompts (site)

8 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `6202de41-9d14-42c1-88cf-bb83a53b147f`** (priority 9) — Wan 2.5 motion preset, steps=44, frames=81, strength=1, guide_scale=3.5, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a56fa179-57b5-409e-9c6e-9a30dc63dd42.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/62f80686-0a91-4221-b611-414086ad30e4.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/6202de41-9d14-42c1-88cf-bb83a53b147f

```text
Two special forces soldiers dressed in black tactical gear move cautiously through a narrow, dimly lit corridor toward a rugged concrete staircase , their weapons aimed forward, simultaneously the camera making a fast upward glide, seamlessly phasing through the thick ceiling, revealing two gangsters in a sunbeam-lit room on upper floor. One gangster, heavily decorated in gold chains and a cap tilted backward, sits slouched on a battered, torn couch, examining a golden assault rifle in his hands, lost in thought. Meanwhile, the second gangster, wearing a black leather jacket, stands by a broken window, grinning as he talks casually, the sunlight outlining his figure against the ruined backdrop outside.
```

- **Sample `c7f7b437-d494-4138-9881-25026ea6d1bd`** (priority 8) — Wan 2.5 motion preset, steps=36, frames=81, strength=1, guide_scale=3, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/339cb488-22c4-46a0-89c3-94333736f19e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dde93b4b-98f8-4b36-9fbf-9e8d8a0911dd.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/c7f7b437-d494-4138-9881-25026ea6d1bd

```text
camera glides slowly upward as a woman in a vivid pink trench coat and black vinyl top stands inside an infinite mirror room, her hands pressed against the walls, eyes sharply looking up with anticipation—her reflection fractals endlessly into neon lines. As the camera rises, it passes through shimmering reflections and reveals, upside down, a man with fiery orange hair, sunglasses, and a silver futuristic vest, suspended as if defying gravity, staring back down with an emotionless expression in a kaleidoscope of green light.














```

- **Sample `916906ec-2e41-4b1d-826b-3ec5b7b7a387`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/19781381-d0e7-4dab-962a-3b9566760181.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7068ab58-6f6b-4d76-ba18-9344aa5fc849.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/916906ec-2e41-4b1d-826b-3ec5b7b7a387

```text
A confident young man with red hair and a textured red sweater reclines casually in the backseat of a car, shot from a low, wide-angle perspective that exaggerates his posture and attitude. The camera performs a subtle roll movement (camera tilts slightly sideways) to intensify the cinematic mood, giving the shot a disoriented, stylish edge. Warm afternoon sunlight filters through the rear window, casting a soft glow on his face and sweater. Emphasize fashion editorial aesthetics, shallow depth of field, high contrast shadows, contemporary tone.
```

- **Sample `a72e9bcd-8768-4257-ae43-1571c67df228`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5e506ed3-66b7-4c8b-91fa-16b4bdec9e86.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f28c9ed1-8e91-4da1-aeff-52a822902c60.mp4
  - page: https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7/a72e9bcd-8768-4257-ae43-1571c67df228

```text
A lone figure walks across a dark rooftop, silhouetted against the soft glow of a vast nighttime city skyline. The scene begins low, at waist level, following behind him in a steady profile view. The neon signs of distant skyscrapers shimmer through the bluish haze, creating a calm yet cinematic mood. As the figure continues walking, the camera begins a graceful jib up motion—rising slowly and vertically. Gradually, more of the skyline comes into view. The man becomes smaller in frame as the city reveals its full scale: layers of high-rises, blinking red lights, and glowing windows stretching endlessly. The movement evokes a sense of introspection and solitude, as if the city breathes around him. The camera ends high above, the figure now a quiet silhouette against a majestic sea of lights below.
```

- **Sample `aa83f8d2-d11c-4e9a-9929-447bddd6f52d`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/58406096-f51e-4e7c-8ab6-9ab03ff89e33.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59bf233e-cff1-46ac-91fd-8e5be1d8556a.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/aa83f8d2-d11c-4e9a-9929-447bddd6f52d

```text
A solitary man in a long coat walks steadily through a large concrete tunnel, his silhouette framed against the circular light at the end. The scene begins with a low, grounded perspective, close to the dark rubble-strewn floor of the tunnel, behind his footsteps. As he continues forward, the camera begins a smooth jib up motion—rising slowly behind him. The arc of the tunnel curves dramatically overhead, emphasizing the isolation and purpose of his movement. As the camera ascends, the view expands: the full exit of the tunnel becomes visible, revealing a hazy, washed-out daylight scene beyond. The man’s figure grows slightly smaller but remains central in the frame, walking toward the light. The sound of his footsteps echoes, blending with a distant hum of wind. A cinematic, noir-like atmosphere with an air of mystery, determination, and revelation.
```

- **Sample `562f8905-e376-4d78-b39a-eefa2a07ce6a`** (priority 4) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/db3c2596-f698-479d-ac2a-7762d98bf776.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c1947629-c26e-4d5b-8c6e-5d10e310f570.mp4
  - page: https://higgsfield.ai/motion/d6b43086-d5d1-415b-a239-016698b425d7/562f8905-e376-4d78-b39a-eefa2a07ce6a

```text
The camera quickly rises upward in a vertical motion, moving straight up from the subject’s face. A shirtless man standing beneath a waterfall, water cascading over his head and shoulders, eyes half-closed with a calm and confident expression. A narrow rocky crevice with rushing water forming a natural waterfall, surrounded by mossy rock textures and subtle greenery at the top edge of the frame. Water continuously rushes downward, splashing over the subject’s head and body while droplets scatter around him. Vertical tracking shot that starts close on the subject’s face and smoothly lifts upward, revealing the source of the waterfall and natural surroundings. Tranquil and refreshing, with the soothing presence of cascading water and natural ambient sounds implied. Natural lighting with soft highlights and shadows created by sunlight filtering through trees, emphasizing the subject’s features and water texture.
```

- **Sample `ca5a4a86-60c6-4533-ae06-6a0ac37134c2`** (priority 2) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=7, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2d520e9b-bd19-49ca-b44a-dcfc9f47ee2f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ec1f4116-fece-472e-a575-da0a1f05e35a.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/ca5a4a86-60c6-4533-ae06-6a0ac37134c2

```text
The camera rapidly ascends in sync with the swirling upward motion of the smoke. A confident woman with long braids and bold eye makeup wears a vibrant fuchsia faux fur coat, holding a thick cigar close to her lips as she exhales smoke. An urban alleyway with graffiti-covered walls and warm ambient light from a nearby fixture, creating a moody, stylish backdrop. The smoke rises quickly in elegant, twisting trails, guiding the camera upward in a fluid motion. An upward tracking shot that starts from the subject’s chest and flows with the smoke past her face and into the air above her head. Bold and expressive, mixing urban grit with glamorous flair, emphasizing attitude and individuality. High-contrast color tones with emphasis on pinks and warm highlights, slightly cinematic with shallow depth of field and dramatic lighting.
```

- **Sample `fe709573-0f8c-446f-baaf-f83f06d39c60`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/40ec53a5-666c-4c26-95b2-9000359d1e43.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/bbf0213d-1761-4faa-ba1f-2242db7bbd2f.mp4
  - page: https://higgsfield.ai/motion/c22b1586-837b-480f-a456-d4e8ba9c3a4b/fe709573-0f8c-446f-baaf-f83f06d39c60

```text
A young man lying on a vintage-patterned couch in a warmly lit living room, absorbed in his phone. The sunlight filters softly through curtains in the background, casting a golden glow across the scene. A colorful drink with a straw is out of focus in the foreground, adding depth. Natural pose, soft cinematic lighting, shallow depth of field focusing on the face and phone, cozy and peaceful atmosphere, high detail.
```
