# Lens Flare — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Light hits the lens, creating bright streaks or spots. Adds a dreamy, cinematic, or dramatic feel to your shots
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56 | `53384cbd-e077-4668-b3fe-1ff771564f56` | 75 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=53384cbd-e077-4668-b3fe-1ff771564f56 |
| https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2 | `97687e52-2cfc-4073-ae62-a00c057c2aa2` | -201 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=97687e52-2cfc-4073-ae62-a00c057c2aa2 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A cowboy rides toward the setting sun as warm light streaks across the lens.
```

Use it as: upload a start image that matches the scene, select motion preset **Lens Flare**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Low Shutter](low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7a18bfbe-9c71-4a25-bded-94da5d5c6424.webp (320×182)
- Card preview, variant `97687e52`: https://d1xarpci4ikg0w.cloudfront.net/db3b6420-2a09-40c4-9645-d6c47c2f7cf9.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/0bd77955-1e34-4061-96ed-2ea93d96c55a | https://static.higgsfield.ai/0bd77955-1e34-4061-96ed-2ea93d96c55a.mp4 | https://static.higgsfield.ai/0bd77955-1e34-4061-96ed-2ea93d96c55a.webp | https://d1xarpci4ikg0w.cloudfront.net/6a8efbda-5a8e-44ea-bc51-de3c61df2e6d.webp (320×132) |
| 2 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/12c7d638-536f-4ee6-bca9-400de3aa2138 | https://static.higgsfield.ai/12c7d638-536f-4ee6-bca9-400de3aa2138.mp4 | https://static.higgsfield.ai/12c7d638-536f-4ee6-bca9-400de3aa2138.webp | https://d1xarpci4ikg0w.cloudfront.net/3b8f9fe5-2152-47bc-8b16-319202718e3a.webp (320×182) |
| 3 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/f28b905a-f60d-4577-aea2-e0f0ec9fc567 | https://static.higgsfield.ai/f28b905a-f60d-4577-aea2-e0f0ec9fc567.mp4 | https://static.higgsfield.ai/f28b905a-f60d-4577-aea2-e0f0ec9fc567.webp | https://d1xarpci4ikg0w.cloudfront.net/eb9f19b0-6c03-41f9-8b15-eb140fce4d00.webp (320×182) |
| 4 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7 | https://static.higgsfield.ai/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7.mp4 | https://static.higgsfield.ai/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7.webp | https://d1xarpci4ikg0w.cloudfront.net/4a47d77d-e3ed-4f00-8328-17d590b1697e.webp (320×182) |
| 5 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/bd9c5014-6732-4014-b604-761e5f5ce7c3 | https://static.higgsfield.ai/bd9c5014-6732-4014-b604-761e5f5ce7c3.mp4 | https://static.higgsfield.ai/bd9c5014-6732-4014-b604-761e5f5ce7c3.webp | https://d1xarpci4ikg0w.cloudfront.net/66bb2793-890c-41d4-b392-199f13e44bf1.webp (320×182) |
| 6 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/cc5f85cf-af2e-41ec-816b-cae2cb56648d | https://static.higgsfield.ai/cc5f85cf-af2e-41ec-816b-cae2cb56648d.mp4 | https://static.higgsfield.ai/cc5f85cf-af2e-41ec-816b-cae2cb56648d.webp | https://d1xarpci4ikg0w.cloudfront.net/21aec9eb-b354-4415-b090-b3ebadbd0677.webp (320×182) |
| 7 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/8ba28a22-94e2-449b-a4eb-3d9245a365ab | https://static.higgsfield.ai/8ba28a22-94e2-449b-a4eb-3d9245a365ab.mp4 | https://static.higgsfield.ai/8ba28a22-94e2-449b-a4eb-3d9245a365ab.webp | https://d1xarpci4ikg0w.cloudfront.net/10212698-7d87-4c74-b784-9b754e72aca8.webp (320×182) |
| 8 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/6f990c17-9ad2-416e-af07-84699b58e565 | https://static.higgsfield.ai/6f990c17-9ad2-416e-af07-84699b58e565.mp4 | https://static.higgsfield.ai/6f990c17-9ad2-416e-af07-84699b58e565.webp | https://d1xarpci4ikg0w.cloudfront.net/e908faef-9680-4d47-90d1-16b1fc4e7924.webp (320×424) |
| 9 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/ee614a2f-cf79-4e40-b6b6-86c54500e825 | https://static.higgsfield.ai/ee614a2f-cf79-4e40-b6b6-86c54500e825.mp4 | https://static.higgsfield.ai/ee614a2f-cf79-4e40-b6b6-86c54500e825.webp | https://d1xarpci4ikg0w.cloudfront.net/3b343391-e3b7-4b75-9811-832d74221b9c.webp (320×424) |
| 10 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/818a5434-629f-4bd1-9735-8ee7f52b6dba | https://static.higgsfield.ai/818a5434-629f-4bd1-9735-8ee7f52b6dba.mp4 | https://static.higgsfield.ai/818a5434-629f-4bd1-9735-8ee7f52b6dba.webp | https://d1xarpci4ikg0w.cloudfront.net/032aab0f-6500-4538-a640-0b7399883d67.webp (320×182) |
| 11 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/1edf95f9-84c0-4489-96d6-9011cf5adb5d | https://static.higgsfield.ai/1edf95f9-84c0-4489-96d6-9011cf5adb5d.mp4 | https://static.higgsfield.ai/1edf95f9-84c0-4489-96d6-9011cf5adb5d.webp | https://d1xarpci4ikg0w.cloudfront.net/c624ca91-4f76-44fd-8bd0-32ce2458a2cc.webp (320×424) |
| 12 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/ce462957-b4ff-4099-bfef-316b5e3c35aa | https://static.higgsfield.ai/ce462957-b4ff-4099-bfef-316b5e3c35aa.mp4 | https://static.higgsfield.ai/ce462957-b4ff-4099-bfef-316b5e3c35aa.webp | https://d1xarpci4ikg0w.cloudfront.net/abefd6b8-6482-4574-bf63-f229c878bbc1.webp (320×486) |
| 13 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/b838217f-e918-4f39-b5de-48006b371a27 | https://static.higgsfield.ai/b838217f-e918-4f39-b5de-48006b371a27.mp4 | https://static.higgsfield.ai/b838217f-e918-4f39-b5de-48006b371a27.webp | https://d1xarpci4ikg0w.cloudfront.net/cb0d8cb7-5ca5-4bbb-8685-134665d850ef.webp (320×132) |
| 14 | https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/0d1bf8f4-014f-449e-aed0-e290f40d5ca0 | https://static.higgsfield.ai/0d1bf8f4-014f-449e-aed0-e290f40d5ca0.mp4 | https://static.higgsfield.ai/0d1bf8f4-014f-449e-aed0-e290f40d5ca0.webp | https://d1xarpci4ikg0w.cloudfront.net/5421db06-938c-408b-8956-cb51f1c3e880.webp (320×182) |

Source pages: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56, https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2. Crawled 2026-09.


## Real sample prompts (site)

14 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `0d1bf8f4-014f-449e-aed0-e290f40d5ca0`** (priority 18) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b78a25ce-c2ce-40e6-ba5b-90ff5d8d5e70.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0122fda9-d3dd-47d8-bc2c-d84b4b3ac7e2.mp4
  - page: https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2/0d1bf8f4-014f-449e-aed0-e290f40d5ca0

```text
A young man in a white, slightly rumpled shirt and a black tie pours steaming coffee into a delicate white cup. The kitchen, filled with warm midday light, features a retro aesthetic with wooden cabinets and checkered tiles, creating a nostalgic atmosphere. Soft beams of sunlight pierce through the window, illuminating the swirling steam around him, enhancing the serene yet contemplative mood. As he focuses intently on the delicate act of pouring, the gentle sound of coffee splashing resonates in the quiet space. The lingering haze adds a touch of mystery, inviting viewers to ponder his thoughts and the story behind this moment.
```

- **Sample `b838217f-e918-4f39-b5de-48006b371a27`** (priority 15) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/20772387-803b-47ad-9041-785ea8bd6815.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/955f055c-dea8-4320-a907-f88201a0df08.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/b838217f-e918-4f39-b5de-48006b371a27

```text
A rugged, bearded man with closed eyes stands in a quiet forest, his face bathed in golden evening light filtering softly through the tall trees behind him. His expression is serene, as if immersed in deep thought or peaceful surrender. Extreme close-up profile shot, camera slowly drifting in with shallow focus, capturing the gentle movement of sunlight across his features. Natural bokeh creates a warm, glowing ambiance. Tranquil and introspective atmosphere, evoking themes of solitude, healing, and connection to nature. Naturalistic cinematic style, with earthy tones, subtle motion blur from breeze in the trees, and a gentle film grain overlay.
```

- **Sample `ce462957-b4ff-4099-bfef-316b5e3c35aa`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=49, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d776ba62-ead0-4538-8d80-a93b51b2e24c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/328c5457-4d47-42de-8b21-6a90f4c7449f.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/ce462957-b4ff-4099-bfef-316b5e3c35aa

```text
A young man stands confidently in a quiet forest, clad in a striking red-and-black puffer jacket over a crisp white shirt and black slacks, complemented by yellow-tinted sunglasses. The bare trees stretch upward, forming a stark pattern against the overcast sky, while the cool atmosphere remains still and tranquil. Bathed in soft light, the contrast of his bold attire creates a striking visual narrative. The low-angled camera captures him in a statuesque pose, eyes locked onto the lens with an unwavering intensity. Subtle sunbeams cascade into the frame from the top left, casting delicate flares that grace his jacket and features, imbuing warmth without shifting his stoic demeanor. The tall, thin trees maintain their vertical integrity in the background, with only the animated sunlight lending dynamism to the otherwise serene scene.
```

- **Sample `1edf95f9-84c0-4489-96d6-9011cf5adb5d`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f31ecc3a-d372-4baf-b248-3fcd5342a2e3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/535901b5-1336-4088-ad1b-ac423c992ab7.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/1edf95f9-84c0-4489-96d6-9011cf5adb5d

```text
A young man in a bright red sweater crouches low on vibrant green grass, gazing towards the sun with a thoughtful yet intense expression. The sunlit park around him reveals a deep blue sky dotted with distant trees, while a uniquely shaped tree casts a soft shadow behind him. The camera is positioned low and slightly tilted upward, centering on him and capturing the vivid contrast between the green grass, blue sky, and his red sweater. Sunlight flares diagonally across the lens, illuminating the edges of his clothing and face, adding warmth and realism. He remains completely still, absorbing the tranquility of the moment, as the background trees and shadows maintain their fixed positions, enhancing the sense of peace and reflection.
```

- **Sample `818a5434-629f-4bd1-9735-8ee7f52b6dba`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a46f92c9-07a9-42a5-81ce-4ec56da913ee.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/59a3968d-57a4-43aa-9b06-c1f16ce2495c.mp4
  - page: https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2/818a5434-629f-4bd1-9735-8ee7f52b6dba

```text
A solitary figure stands in a dark, atmospheric space, illuminated by a blinding white-blue light behind him. His silhouette is sharply defined against the cool teal and midnight tones that surround him, while deep shadows obscure his facial features. As the camera slowly shifts to the right and tilts up, gentle lens flares arc across the frame, creating a dynamic feel. The subtle movement reveals a soft edge of the man's cheekbone, enhancing the tension without fully illuminating his face. The volumetric light beams cutting through the darkness maintain an ethereal ambiance, while the silhouette remains perfectly centered and unbroken throughout. This minimalist animation suggests shape and depth, preserving the air of mystery and intrigue.
```

- **Sample `ee614a2f-cf79-4e40-b6b6-86c54500e825`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b33d2c4a-08c0-4d40-80c3-1707598dffef.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2a510309-12ab-49b1-88be-9cdaae42bfdc.mp4
  - page: https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2/ee614a2f-cf79-4e40-b6b6-86c54500e825

```text
A young man stands confidently in a vast field, his posture strong and relaxed, with an expression that combines serenity and defiance. The sun casts a warm glow, slightly flaring the lens and creating an ethereal atmosphere. The golden wheat sways gently around him, its texture rich and vibrant, complementing his sleek black attire. Behind him, distant mountains outline the horizon, adding depth to the scene. The interplay of light and shadow accentuates his features, revealing a moment of stillness amidst the natural splendor. This composition becomes a visual narrative of strength and tranquility.
```

- **Sample `6f990c17-9ad2-416e-af07-84699b58e565`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/dc641e06-2666-427c-b254-a5109851f05c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/564c2517-e9ab-48c5-a912-42b21dd32f28.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/6f990c17-9ad2-416e-af07-84699b58e565

```text
A young woman stands motionless in a dim, cinematic space filled with soft blue shadows. A warm spotlight highlights her face and bare shoulder, creating a strong contrast between light and darkness. Her expression is focused and calm, with intense eyes looking directly into the camera. The background remains in deep blue haze, interrupted only by subtle beams of light seeping through unseen windows off-frame.

The camera holds steady, framed at a three-quarter angle from her right side. As light subtly shifts across the lens, fine lens flares bloom and stretch, drifting horizontally and then dispersing gently. These reflections create a dynamic shimmer without disrupting the woman's fixed position or gaze.

To preserve visual consistency, her pose and lighting on the skin must remain unchanged. Background gradients should stay smooth and the light beams in the upper left should not flicker or shift. Lens flares must be the only animated element—floating across the image softly and naturally.
```

- **Sample `8ba28a22-94e2-449b-a4eb-3d9245a365ab`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/02504f2c-b7e1-416a-b39e-1398781cf05c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c2a0c150-3b08-4c8c-9359-340cadecce8c.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/8ba28a22-94e2-449b-a4eb-3d9245a365ab

```text
A father sits close to his young son in a sun-drenched yard, laughter dancing in the air as they share a playful moment. The soft, golden light of sunset filters through the leaves of nearby trees, enveloping them in a warm glow. The father, with a gentle smile, reaches out, playfully offering a piece of food to his son, who leans closer, eyes wide with delight. The atmosphere is rich with the harmonies of nature; the laughter of a child and the serene rustle of leaves fill the space with joy. Everything around them fades into a blur, enhancing the intimacy of their connection, where every smile and gesture reveals a world of love and simplicity.
```

- **Sample `cc5f85cf-af2e-41ec-816b-cae2cb56648d`** (priority 6) — Wan 2.5 motion preset, steps=15, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f9a62dd0-a924-4e95-ae9b-892b5d4d848a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/759b3903-582f-4561-9cef-936861420a8d.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/cc5f85cf-af2e-41ec-816b-cae2cb56648d

```text
A young man stands in close-up, his expression serious yet contemplative, lips slightly parted as if on the verge of speaking. The setting is bathed in the warm glow of the golden hour, creating a contrasting backdrop of soft greens and glowing orbs of light. His gaze pierces through the lens, revealing a sense of vulnerability and introspection. The gentle play of light accentuates the contours of his face, while the blurred background evokes a dreamlike quality, suggesting a moment of deep reflection. As the scene unfolds, a subtle breeze stirs, heightening the emotional tension of this serene yet charged moment.
```

- **Sample `bd9c5014-6732-4014-b604-761e5f5ce7c3`** (priority 5) — Wan 2.5 motion preset, steps=15, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e34915d9-3b82-4bdd-b83d-f97090537ff8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a2429730-78b9-4dfd-96e5-3782d845f2d7.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/bd9c5014-6732-4014-b604-761e5f5ce7c3

```text
In a sunlit urban alley, two figures share a tender moment, their faces illuminated by a warm golden glow. The girl, wearing a fuzzy red sweater, beams with joy, her eyes sparkling as she engages closely with her boyfriend. The atmosphere is vibrant and intimate, filled with a sense of care and connection. Soft light dances around them, enhancing the warmth of their smiles and the gentle touch between them. The background blurs subtly, drawing focus to their expressions rich with laughter and love, creating a profound emotional resonance that underscores the heartwarming scene.
```

- **Sample `04b27300-2b8a-44fe-a4ed-dd29b01c5fd7`** (priority 3) — Wan 2.5 motion preset, steps=15, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4b384d3d-6862-43eb-8148-5f9f46aa96f9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/583d990d-e134-44ed-bfea-bc362cfb0df4.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/04b27300-2b8a-44fe-a4ed-dd29b01c5fd7

```text
The scene centers on a young woman and an older man seated in a classic car, their expressions conveying a profound yet unspoken connection. The late afternoon sun filters through the windshield, casting a warm, golden light that dances across their faces, highlighting the tension in the air. The young woman gazes thoughtfully ahead, her serene demeanor softened by the glow, while the older man sits beside her, a cigarette hanging from his lips, exuding a contemplative, rugged charm. Outside, shadows of tall grass sway lightly in the breeze, punctuating the vehicle's stillness. As the camera performs a slow, intimate push-in, the reflective quality of the glass distorts their surroundings, blurring the lines between their inner worlds and the outside reality.
```

- **Sample `f28b905a-f60d-4577-aea2-e0f0ec9fc567`** (priority 2) — Wan 2.5 motion preset, steps=15, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/45265f0f-f24f-44ec-9970-c06ea7d4cb7f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b267549d-3283-4297-b8db-7a6d5d49e48c.mp4
  - page: https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2/f28b905a-f60d-4577-aea2-e0f0ec9fc567

```text
Two women sit closely on a plush couch, engaged in a moment of deep connection, their faces illuminated by soft, golden light filtering through sheer curtains. Each holds a small mirror, their expressions a mix of curiosity and warmth as they share a private moment, the atmosphere tinged with intimacy. The background is softly blurred, highlighting their focused interaction, while hints of cozy decor enhance the inviting space. Emotional tension lingers in the air, underscored by the gentle play of light and shadow that dances across their features, echoing their bond. The scene feels personal and tender, drawing viewers into their shared world.
```

- **Sample `12c7d638-536f-4ee6-bca9-400de3aa2138`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cae5e494-8d9a-4fd4-93fb-34570da115e3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6f28621f-54b3-4ef6-b595-e6f51e40e309.mp4
  - page: https://higgsfield.ai/motion/97687e52-2cfc-4073-ae62-a00c057c2aa2/12c7d638-536f-4ee6-bca9-400de3aa2138

```text
Three individuals lean in closely, exuding a confident and rebellious energy. They stand in a narrow alley, where soft light filters through the overhead space, lighting up the vibrant colors of their clothing and the striking orange of the central figure's hair. Their fierce expressions blend intensity and vulnerability, revealing a strong bond among them. The warm light accentuates the unique textures of their skin and visible tattoos, contrasting beautifully with the muted backdrop. This moment challenges societal norms, celebrating both individuality and connection.
```

- **Sample `0bd77955-1e34-4061-96ed-2ea93d96c55a`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/89b25351-db67-480e-9ac9-a1d2c9a7b8e9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/145cc1da-903a-47b6-b2da-2623807e2126.mp4
  - page: https://higgsfield.ai/motion/53384cbd-e077-4668-b3fe-1ff771564f56/0bd77955-1e34-4061-96ed-2ea93d96c55a

```text
A breathtaking view of a distant planet’s horizon from space, as the sun slowly rises behind the curvature, casting a soft glow over the icy mountains and cloud formations below. The planet's surface is rugged and shadowed, gradually illuminated by the creeping dawn light. Ultra-wide orbital tracking shot, slowly rotating around the planet’s edge to reveal more terrain as sunlight expands. Majestic and otherworldly atmosphere, evoking discovery and the passage of time. Epic sci-fi cinematic style, with high-definition textures, deep shadows, and subtle nebulae flickering in the star-studded void.
```
