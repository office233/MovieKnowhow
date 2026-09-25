# Dolly Out — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Pulls the camera smoothly away from the subject, revealing more of the scene. Great for emotional distance, dramatic exits, or cinematic reveals.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543 | `96e95a3c-ad0e-49ee-84e3-a39e0f13b543` | 50 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=96e95a3c-ad0e-49ee-84e3-a39e0f13b543 |
| https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17 | `c1a8c847-4ea8-4d31-9cec-ef62897a2d17` | -214 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=c1a8c847-4ea8-4d31-9cec-ef62897a2d17 |
| https://higgsfield.ai/motion/a787450c-b2d8-4321-967a-8c302da05949 | `a787450c-b2d8-4321-967a-8c302da05949` | -335 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=a787450c-b2d8-4321-967a-8c302da05949 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`). These pages publish no settings. Their community publications carry 2 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A lone soldier stands in the middle of an empty, smoke-filled city square; the camera dollies out to reveal the ruined buildings around him.
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Smooth linear move away from the subject · **Best use:** Isolation, departure, widening context · **Models:** Kling · **Phrase/template:** "Camera Dolly Out revealing the empty square" · "Camera: Dolly Out — retreating as she advances, never quite letting her fill the frame." · **Tips:** Fashion runway (retreat as the model advances). Horror: "Dolly Out slowly as the figure keeps approaching — never quite reaching us."

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Right](dolly-right.md), [Dolly Zoom In](dolly-zoom-in.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/bb84a42b-c21a-4aba-82f0-455251d1457b.webp (320×242)
- Card preview, variant `c1a8c847`: https://d1xarpci4ikg0w.cloudfront.net/ce75e22b-1680-4cd4-a3de-a1696672b6c1.webp

### Sample videos (9; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/b9df4a77-c6c0-45d0-9e34-bf075c4cd733 | https://static.higgsfield.ai/b9df4a77-c6c0-45d0-9e34-bf075c4cd733.mp4 | https://static.higgsfield.ai/b9df4a77-c6c0-45d0-9e34-bf075c4cd733.webp | https://d1xarpci4ikg0w.cloudfront.net/3ab79fdd-8c95-4cb7-9bd5-794cf1ae43ac.webp (320×242) |
| 2 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/3c4c9e92-873c-4d78-831b-c94642a6e94b | https://static.higgsfield.ai/3c4c9e92-873c-4d78-831b-c94642a6e94b.mp4 | https://static.higgsfield.ai/3c4c9e92-873c-4d78-831b-c94642a6e94b.webp | https://d1xarpci4ikg0w.cloudfront.net/ea912610-3539-4e84-9c25-3607f02f5786.webp (320×242) |
| 3 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/279ca788-fa56-410a-bd27-9d1567c73b95 | https://static.higgsfield.ai/279ca788-fa56-410a-bd27-9d1567c73b95.mp4 | https://static.higgsfield.ai/279ca788-fa56-410a-bd27-9d1567c73b95.webp | https://d1xarpci4ikg0w.cloudfront.net/214d176b-b3b7-4186-8672-ee2155ce21ad.webp (320×486) |
| 4 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/21546381-0368-4424-8647-2c938f7fa7c3 | https://static.higgsfield.ai/21546381-0368-4424-8647-2c938f7fa7c3.mp4 | https://static.higgsfield.ai/21546381-0368-4424-8647-2c938f7fa7c3.webp | https://d1xarpci4ikg0w.cloudfront.net/5f857cb5-9d12-46b9-b81e-bce33259620f.webp (320×562) |
| 5 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/2955748c-1206-403e-8dad-306487359c5f | https://static.higgsfield.ai/2955748c-1206-403e-8dad-306487359c5f.mp4 | https://static.higgsfield.ai/2955748c-1206-403e-8dad-306487359c5f.webp | https://d1xarpci4ikg0w.cloudfront.net/aba504bb-94ed-4bca-a9ad-3d47043cc65b.webp (320×210) |
| 6 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/8e6280a8-d398-4260-a16e-30ab3be074b6 | https://static.higgsfield.ai/8e6280a8-d398-4260-a16e-30ab3be074b6.mp4 | https://static.higgsfield.ai/8e6280a8-d398-4260-a16e-30ab3be074b6.webp | https://d1xarpci4ikg0w.cloudfront.net/25e2e5b5-a1e6-49d2-b835-0282f0181ff5.webp (320×210) |
| 7 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/c826f62e-3223-4448-8360-b04fd0a3a78b | https://static.higgsfield.ai/c826f62e-3223-4448-8360-b04fd0a3a78b.mp4 | https://static.higgsfield.ai/c826f62e-3223-4448-8360-b04fd0a3a78b.webp | https://d1xarpci4ikg0w.cloudfront.net/6d7533f9-e107-4f01-bedc-ca869271cbf1.webp (320×210) |
| 8 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/e9e19d6c-463b-42dd-aa33-e72712e42e95 | https://static.higgsfield.ai/e9e19d6c-463b-42dd-aa33-e72712e42e95.mp4 | https://static.higgsfield.ai/e9e19d6c-463b-42dd-aa33-e72712e42e95.webp | https://d1xarpci4ikg0w.cloudfront.net/e2fd0895-fb35-4766-81a7-8faf04dfba5d.webp (320×210) |
| 9 | https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/5027149a-a009-4d30-bf72-cb46e7006af7 | https://static.higgsfield.ai/5027149a-a009-4d30-bf72-cb46e7006af7.mp4 | https://static.higgsfield.ai/5027149a-a009-4d30-bf72-cb46e7006af7.webp | https://d1xarpci4ikg0w.cloudfront.net/205838b7-f812-4d95-b5ce-8f9c635309ea.webp (320×182) |

- Card preview, round-2 variant `a787450c` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/53c993e7-645f-49f8-aa71-086514547065.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/90eaee2a-9a69-4704-8789-2a553ec8a2b3.webp (600×800)

### Sample videos, round-2 variant `a787450c` (Wan 2.5) (2 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/28384c7b-9fff-4dc3-b19d-9677bb2e1ac0_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/8a016110-2ec6-4338-8e1b-e042325e563c.jpg | wan2_5_video · 5 s · 1080p · 1536×1152 | The scene starts with a medium shot at a slight angle, captured by a steady camera using a DSLR with a 50mm lens, focusing on a group of four friends standing on a rooftop during sunset. The environment features a sprawling city skyline under a warm, orange-hued sunset sky, creating a lively and free atmosphere filled with the soft sounds of distant city life and gentle evening breeze. The friends are talking and laughing animatedly, with the girl holding the bottle taking a sip from her drink while the others engage in warm conversations. The camera smoothly moves backward in a precise, shake-free, and uniform motion, gradually revealing more of the panoramic city view and the beautiful sunset sky. The overall visual tone is warm, vibrant, and inviting, enhancing the feeling of warmth and friendship. |
| 2 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/719b296e-4a3a-4ab9-aaa0-d7cb730bf4e0_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/5f635b16-69fa-46ad-a366-423e9e2d645b.jpg | wan2_5_video · 5 s · 1080p · 1536×2048 | The scene starts with a medium shot of a woman standing inside a moving subway train, framed from slightly below eye level, captured with a high-quality digital cinema camera and a 50mm lens. She wears a glossy, vibrant red jacket and skirt, gripping polished metal poles on either side, her intense gaze directly facing the camera. The environment is a modern subway car illuminated by cool blue fluorescent lights that flicker subtly, creating a moody atmosphere. The sound of the train gently rolling on the tracks complements the faint flickering of the overhead lights. The woman slightly sways as the train moves, her expression serious and captivating. The camera smoothly and steadily performs a precise dolly out, gradually expanding the frame backward without any shakiness, revealing more of the subway interior while maintaining focus on her. The visual tone contrasts the cool blues of the train with the striking red of her outfit for a dramatic, stylish, and cinematic effect. |

Source pages: https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543, https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17, https://higgsfield.ai/motion/a787450c-b2d8-4321-967a-8c302da05949. Crawled 2026-09.


## Real sample prompts (site)

9 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `5027149a-a009-4d30-bf72-cb46e7006af7`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cbda387a-e7f1-4a18-887b-8d60e1419269.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d84b2889-b65e-4fd4-ad10-94d9b9a3c370.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/5027149a-a009-4d30-bf72-cb46e7006af7

```text
The woman throws her head back, laughing uncontrollably, one hand lifting toward her face in delight. The man, seated beside her, leans in with theatrical flair, rapidly fanning her with a delicate lace fan. His movements are exaggerated and playful, teasingly close, as if performing for an audience. She swats gently at the air between them, trying to catch her breath, but her laughter only grows. He grins, undeterred, and fans even faster, tilting his head in mock seriousness.
```

- **Sample `e9e19d6c-463b-42dd-aa33-e72712e42e95`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c439f03f-3a3f-4188-b340-885833177e0c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4e45340b-b03d-4b61-82a1-3e4610e9be63.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/e9e19d6c-463b-42dd-aa33-e72712e42e95

```text
Dynamic motion. Man stands and look down, on the snow covered in blood white and black cow lying, bloodstains around
```

- **Sample `c826f62e-3223-4448-8360-b04fd0a3a78b`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/05e77b10-281a-4db5-86d7-1a128ba78e03.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c96a91a6-1812-4ad6-ba35-96251072be8b.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/c826f62e-3223-4448-8360-b04fd0a3a78b

```text
A young man in an orange shirt sits curled up in the middle of a vast red poppy field, head resting on his knees. The camera begins close, capturing his quiet stillness and gentle breathing. Slowly, the dolly pulls backward, revealing the endless sea of scarlet flowers stretching to the horizon. The emotional weight grows as his small figure becomes enveloped in the overwhelming beauty and loneliness of the landscape. A distant breeze ripples through the flowers like a silent wave.
```

- **Sample `8e6280a8-d398-4260-a16e-30ab3be074b6`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3f1d35f8-1832-4e6f-839d-a388aeb16580.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f01120f3-0e71-4cba-82b7-b48af78cdce4.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/8e6280a8-d398-4260-a16e-30ab3be074b6

```text
The girl in a dark green coat slowly slides down the yellow-tiled subway wall, her back pressing against the glossy surface as if the weight of the world is pulling her down. Beside her, a metallic sphere hovers with perfect stillness, mirroring the flickering overhead lights. The camera begins tight on her dazed expression and the glinting orb, then gradually dollies out, expanding the corridor around her — cold, geometric, and endless. Her descent is slow and quiet, emphasized by the emptiness swallowing the frame.
```

- **Sample `2955748c-1206-403e-8dad-306487359c5f`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e4fbb7be-07b8-4fcd-8297-fbb31a568adc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0d8830cd-a095-4fa8-bd4a-07f3c2d65426.mp4
  - page: https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/2955748c-1206-403e-8dad-306487359c5f

```text
Two women on a silver scooter, motionless in an alley lit with neon reflections. The red-haired rider leans forward with fierce intensity, her hands gripping the handlebars. Behind her, a woman with an afro and oversized sunglasses sits with relaxed confidence. The camera starts tight, framing their vivid patterned outfits and unshakable expressions. It slowly dollies out, revealing the urban walls, flickering signs, and the quiet night around them—frozen in suspense, as if a chase is about to begin.

Color-drenched, with saturated reds and greens pulsing in moody shadows.
```

- **Sample `21546381-0368-4424-8647-2c938f7fa7c3`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2212323d-6e31-49a9-8800-e4aa92b4e7ea.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/185359af-8cdd-4f93-a8aa-ea4f85f4bf2d.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/21546381-0368-4424-8647-2c938f7fa7c3

```text
In a dimly lit vintage hotel room, a woman with straight dark bangs stands powerfully in a black bodysuit, her gaze locked on the lens. Kneeling beside her, a platinum blonde with theatrical eye makeup clasps her thigh, expression unreadable. The camera begins tightly framed—intimate and statuesque—then slowly dollies out, revealing velvet chairs, antique lamps, and patterned carpet. The mood is noir and surreal, like a still moment before a performance neither of them signed up for.
```

- **Sample `279ca788-fa56-410a-bd27-9d1567c73b95`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0f1b9bd1-f34a-4af9-93dd-f7ced99c6c75.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/10def72d-e1e4-43e6-99e1-b994c74f8435.mp4
  - page: https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/279ca788-fa56-410a-bd27-9d1567c73b95

```text
The camera opens in a full shot, tightly framing her posture and worn texture of the chair’s arms. The soft grit of her skin contrasts the rough fabric, while the distant scraping of metal on concrete echoes like the memory of a storm.

As the camera performs a dolly out, the sense of space warps. The canvases tilt into view — abstract, violent, gestural — surrounding her like silent witnesses. Brushes lie fallen on cracked tile, glistening with drying black paint. Light pours from above, harsh and unfiltered, catching the sheen of skin and metal.
```

- **Sample `3c4c9e92-873c-4d78-831b-c94642a6e94b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2545d559-4edd-44f2-b3a6-15b5f49dde46.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/946ae09d-96f5-428c-a3c8-0b5d4b04409e.mp4
  - page: https://higgsfield.ai/motion/96e95a3c-ad0e-49ee-84e3-a39e0f13b543/3c4c9e92-873c-4d78-831b-c94642a6e94b

```text
A young man in a sharp emerald-green suit sits wide-legged on a metallic bench, eating a melting vanilla ice cream cone. Behind him, a wall of retro CRT monitors flickers—each screen looping surreal clips: a horse galloping, a family dispute, flames dancing silently. The camera starts in a tight close-up on his impassive face, slowly dolly out to reveal the sterile fluorescent-lit room, then further to show the entire scene is a staged installation in a gallery.
```

- **Sample `b9df4a77-c6c0-45d0-9e34-bf075c4cd733`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7d6dfd3b-8579-4fe8-83e5-9bb929548b6f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/aa883ece-4065-46c5-96a3-b89b249f66c4.mp4
  - page: https://higgsfield.ai/motion/c1a8c847-4ea8-4d31-9cec-ef62897a2d17/b9df4a77-c6c0-45d0-9e34-bf075c4cd733

```text
A man in a vivid emerald green velvet suit sits elegantly in a vintage chair, expression calm but calculated. Surrounding him are surreal, oversized flowers with hyper-realistic human eyes at their centers, all staring directly at him. The camera begins with a medium close-up on his detached gaze, then performs a dolly out—warping the space as the floral “eyes” multiply in the background. As the shot pulls back further, it’s revealed he’s inside a lavish sunlit parlor, curtains glowing behind him like a surreal greenhouse.
```
