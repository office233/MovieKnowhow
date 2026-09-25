# Disintegration — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** A visual effect where the subject breaks apart into particles or dust, creating a surreal, emotional, or epic moment
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d | `4e981984-1cdc-4b96-a2b1-1a7c1ecb822d` | -272 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=4e981984-1cdc-4b96-a2b1-1a7c1ecb822d |
| https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5 | `eacdca06-1fe2-4402-b8d6-4dc32f2889c5` | 71 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=eacdca06-1fe2-4402-b8d6-4dc32f2889c5 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A warrior on a battlefield looks at his hands as he breaks apart into drifting ash.
```

Use it as: upload a start image that matches the scene, select motion preset **Disintegration**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject breaks apart into particles · **Best for:** Dramatic death, magic, sci-fi

## Related presets

- **Mixes that use this preset:** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c158b9ea-fcd5-46b2-95ea-4bff129c9313.webp (320×416)
- Card preview, variant `eacdca06`: https://d1xarpci4ikg0w.cloudfront.net/e7888a40-116e-4891-a782-700729f3c03c.webp

### Sample videos (12; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/42ec6c22-5281-479d-b136-f000c590badb | https://static.higgsfield.ai/42ec6c22-5281-479d-b136-f000c590badb.mp4 | https://static.higgsfield.ai/42ec6c22-5281-479d-b136-f000c590badb.webp | https://d1xarpci4ikg0w.cloudfront.net/5f28a6b2-76e2-49f0-98d5-4be00bb90e46.webp (320×182) |
| 2 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1 | https://static.higgsfield.ai/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1.mp4 | https://static.higgsfield.ai/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1.webp | https://d1xarpci4ikg0w.cloudfront.net/189dfb9a-e32f-426b-bd72-3b7315b408fc.webp (320×182) |
| 3 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/73904582-12e2-4391-80c6-94633656d7b4 | https://static.higgsfield.ai/73904582-12e2-4391-80c6-94633656d7b4.mp4 | https://static.higgsfield.ai/73904582-12e2-4391-80c6-94633656d7b4.webp | https://d1xarpci4ikg0w.cloudfront.net/f44b6508-abcf-4165-90c4-5921be9dcf26.webp (320×486) |
| 4 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/126203dd-fae7-4af5-a437-b164abcfd8fd | https://static.higgsfield.ai/126203dd-fae7-4af5-a437-b164abcfd8fd.mp4 | https://static.higgsfield.ai/126203dd-fae7-4af5-a437-b164abcfd8fd.webp | https://d1xarpci4ikg0w.cloudfront.net/2d1a9fac-0e3c-47d0-88ec-f9a61807279b.webp (320×486) |
| 5 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8 | https://static.higgsfield.ai/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8.mp4 | https://static.higgsfield.ai/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8.webp | https://d1xarpci4ikg0w.cloudfront.net/a4ea5c0b-b9e0-4316-befb-dccf9574eacc.webp (320×486) |
| 6 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/071072ed-f2af-4a69-a12d-7bb9d3cda013 | https://static.higgsfield.ai/071072ed-f2af-4a69-a12d-7bb9d3cda013.mp4 | https://static.higgsfield.ai/071072ed-f2af-4a69-a12d-7bb9d3cda013.webp | https://d1xarpci4ikg0w.cloudfront.net/2e0cead8-280e-4646-a514-5707922e721d.webp (320×424) |
| 7 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/ec4b4379-6f45-4357-bfa7-38fa4f739443 | https://static.higgsfield.ai/ec4b4379-6f45-4357-bfa7-38fa4f739443.mp4 | https://static.higgsfield.ai/ec4b4379-6f45-4357-bfa7-38fa4f739443.webp | https://d1xarpci4ikg0w.cloudfront.net/902059c2-775a-4fd8-98ac-a6fea582e0e1.webp (320×486) |
| 8 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28 | https://static.higgsfield.ai/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28.mp4 | https://static.higgsfield.ai/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28.webp | https://d1xarpci4ikg0w.cloudfront.net/156e5f25-54ae-419c-b07e-73cce5be434a.webp (320×486) |
| 9 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/3d01a273-ff69-4304-99b7-8780b044bb3c | https://static.higgsfield.ai/3d01a273-ff69-4304-99b7-8780b044bb3c.mp4 | https://static.higgsfield.ai/3d01a273-ff69-4304-99b7-8780b044bb3c.webp | https://d1xarpci4ikg0w.cloudfront.net/adef3993-9816-426b-85dd-93b58db1d743.webp (320×210) |
| 10 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/9b32116d-86dc-468a-8445-d1891c47a193 | https://static.higgsfield.ai/9b32116d-86dc-468a-8445-d1891c47a193.mp4 | https://static.higgsfield.ai/9b32116d-86dc-468a-8445-d1891c47a193.webp | https://d1xarpci4ikg0w.cloudfront.net/e427516f-d719-4806-aec9-28ef906602d3.webp (320×210) |
| 11 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/cb4c1f75-ac88-4f85-8a96-9c330e976fe8 | https://static.higgsfield.ai/cb4c1f75-ac88-4f85-8a96-9c330e976fe8.mp4 | https://static.higgsfield.ai/cb4c1f75-ac88-4f85-8a96-9c330e976fe8.webp | https://d1xarpci4ikg0w.cloudfront.net/612f2737-d872-4bee-94c6-4673b5d434b1.webp (320×210) |
| 12 | https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/d8749e9b-4f25-4e32-a395-bd52bc6f79da | https://static.higgsfield.ai/d8749e9b-4f25-4e32-a395-bd52bc6f79da.mp4 | https://static.higgsfield.ai/d8749e9b-4f25-4e32-a395-bd52bc6f79da.webp | https://d1xarpci4ikg0w.cloudfront.net/a912632d-4207-4dce-aa68-c9d73d3f3e9f.webp (320×182) |

Source pages: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d, https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `d8749e9b-4f25-4e32-a395-bd52bc6f79da`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eb0a2e19-bf80-4d7e-8de6-eacb87a1c1bf.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9cac047f-5864-47fd-8adc-b967adf15a7f.mp4
  - page: https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5/d8749e9b-4f25-4e32-a395-bd52bc6f79da

```text
In a warmly lit attic billiards room, a young man sits relaxed on the edge of a pool table. He’s dressed in a striped green and black rugby shirt, dark trousers, a navy cap, and accessories including rings and a silver watch. He holds a cue stick upright in his right hand, while his head tilts slightly downward. Overhead, green-shaded lights cast a soft glow across the polished wood and green felt.

The camera remains fixed, centered on the man’s seated form. Suddenly, black and tan particles begin to rise and scatter from his torso and arms. His body disintegrates steadily from the center outward, with his fingers and head being the last to fade. As his grip loosens, the cue stick tips forward and falls naturally, striking the table and rolling slightly.

Ensure the cue’s fall is fluid and believable in motion, matching gravity and timing. Background elements—lighting, windows, table, and shadows—must remain perfectly still. The disintegration must feel consistent, with the particles varying in size and direction while preserving the natural posture and interaction with the cue until the hand disappears.
```

- **Sample `cb4c1f75-ac88-4f85-8a96-9c330e976fe8`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/99a28948-e162-4cfa-afd2-42325d6510a9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e266045f-2648-432b-a937-9b44af74f4e4.mp4
  - page: https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5/cb4c1f75-ac88-4f85-8a96-9c330e976fe8

```text
A young man stands inside a dimly lit phone booth on a rainy night, holding the receiver to his ear with a pensive expression. He wears a black leather jacket over a red turtleneck, and warm neon reflections flicker across the wet glass panels. Graffiti lines the booth’s walls, and the blurred city lights glow softly in the background, adding to the moody, cinematic atmosphere.

The camera remains fixed in a medium close-up, capturing the subject from the chest up through the glass. Slowly, the man begins to dissolve into dark, smoky particles, starting from his shoulders and face. The disintegration spreads outward, breaking down his entire form until nothing remains. As his hand vanishes, the phone receiver slips from his grip, swinging slightly before dropping and bouncing gently against the booth wall.

The rain on the glass, graffiti, reflections, and city lights must remain perfectly static. The phone cord should react naturally to the receiver's fall, and the particles should fade in the same lighting and perspective without clipping or distortion. His expression and pose must remain frozen during the effect to preserve realism.
```

- **Sample `9b32116d-86dc-468a-8445-d1891c47a193`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/70b99289-f328-40d8-8678-be710964821e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6e3921e8-8ce7-4bb9-a04b-7a56d5572c49.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/9b32116d-86dc-468a-8445-d1891c47a193

```text
A man stands against a vivid turquoise brick wall, squinting in the golden sunlight while holding an iced coffee in one hand. He wears a sleek black leather jacket with white stripes and relaxed black pants. His pose is casual but caught mid-expression from the brightness, casting a long shadow behind him on the wall. The setting is calm and saturated with late afternoon tones.

The camera holds a low, slightly tilted angle, making him appear dominant in frame. Without warning, his body begins to break apart into matte black particles, starting from his shoulders and face. As his hand dissolves, the coffee cup slips and falls downward, exiting the frame. His form continues to vanish, particle by particle, until there’s nothing left but floating dust fading into the sunlight.

The turquoise wall, shadow, and lighting must remain completely unchanged throughout the effect. The black particles should drift slowly, not glowing or reflecting, and the coffee cup should fall with a realistic bounce or tilt. Ensure the disintegration looks smooth and consistent in scale and direction with no distortion of the background.
```

- **Sample `3d01a273-ff69-4304-99b7-8780b044bb3c`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/33257e90-a0a7-40fe-97d0-40dfb5b923aa.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/399395ef-7cea-40d6-8586-d017c25169dc.mp4
  - page: https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5/3d01a273-ff69-4304-99b7-8780b044bb3c

```text
A man stands motionless against a vivid green wall, wearing a striking golden fur coat and black trousers. He is perfectly lit by a band of direct sunlight, casting a sharp shadow behind him. The street around him is in motion—blurred figures of people walking past in the foreground create a busy, cinematic contrast to his still presence. The scene is urban, vibrant, and full of visual tension.

The camera remains fixed in a front-facing, symmetrical composition. As the world rushes past, the man begins to break apart into multicolored particles—warm golds, reds, browns, and greens—starting from his chest and shoulders. The disintegration flows upward and outward, flickering in the light as he fades into the air. The particle effect finishes cleanly, leaving only the passing crowd in motion blur as if he was never there.

Ensure the people in the foreground stay blurred and in continuous side motion, without interruption. The green wall, lighting, and his shadow must remain completely stable. Particles should reflect the hues of his outfit and surroundings, dispersing with variation in size and direction, adding richness without breaking the shot’s consistency.
```

- **Sample `3aa8ebd8-3c62-4ac7-bbeb-550411a86e28`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f9d6e215-f94e-40e0-9ff2-4a3ac8296199.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1d2a8794-1652-44e0-b836-81dc5c9d404e.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/3aa8ebd8-3c62-4ac7-bbeb-550411a86e28

```text
A young woman stands at the forefront, her expression a mix of determination and sorrow as she begins to dissolve into shimmering particles, vanishing into the air. In a gritty urban alley, the late afternoon light casts long shadows from the towering buildings, creating a contrast between hope and despair. Behind her, a young man, clad in dark clothing, sprints forward, desperation evident in his eyes as he reaches out in an attempt to grasp her fading form. The street, lined with muted colors, mirrors the gravity of the moment, while a soft, eerie glow envelops the girl, heightening the magical, tragic aura. Each fragment of her dissolving essence flickers like starlight, leaving an atmosphere heavy with loss and longing.
```

- **Sample `ec4b4379-6f45-4357-bfa7-38fa4f739443`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bd069e96-95d8-400e-85f9-8c75f41e9860.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/29218f42-10e5-4234-a5c4-0c41163bc22c.mp4
  - page: https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5/ec4b4379-6f45-4357-bfa7-38fa4f739443

```text
A person stands quietly in a dimly lit room, his posture rigid yet slightly tense, wearing an oversized sweater adorned with a bold pattern. The background features an intricately painted backdrop, casting an eerie, nostalgic shadow over the space. As the air around him thickens, particles begin to swirl around his form, dimming the ambient light and heightening the atmosphere of suspense. Bit by bit, his figure breaks apart, dissolving into shimmering dust that scatters in the air, creating a sense of ethereal loss. With each vanishing fragment, the room grows emptier, until finally, he completely disappears, leaving behind a stark, vacant backdrop that resonates with silence.
```

- **Sample `071072ed-f2af-4a69-a12d-7bb9d3cda013`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8e5c8297-e46d-4328-932a-c2d164419497.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fe197920-9149-4ad4-ad32-72725de071f4.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/071072ed-f2af-4a69-a12d-7bb9d3cda013

```text
A lone figure dressed in black stands with a stoic posture, their profile framed against a stark white backdrop. The metallic helmet glints under a soft, diffused light, creating a surreal atmosphere. Suddenly, particles begin to rip away from the figure, swirling gently as they vanish into the air, leaving an echo of presence behind. The scene shifts from solid identity to ephemeral existence, creating a tension between reality and the sublime. As the last remnants dissolve, a haunting stillness envelops the space, emphasizing the fleeting nature of presence and self.
```

- **Sample `0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4e5fa439-b749-4634-b43e-c1e97ae74283.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/02f7386b-9db3-45fa-8073-4560fd10f052.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/0ebf2ef3-8ee6-49a0-ac5a-895ad2d985e8

```text
A hand, adorned with a delicate bracelet, is poised in the foreground, exhibiting shock and a lingering sense of loss. The background is a soft, neutral shade that contrasts with the vibrant purse that has just disintegrated into countless tiny particles, vanishing into the air. The atmosphere is charged with intensity, revealing a moment frozen in time, as if the hand feels the abrupt absence of the familiar weight. Light subtly highlights the contours of the hand, emphasizing its isolation within the scene, while the scattered remnants shimmer slightly, hinting at the shattered remnants of what once was. The emotional weight of the moment draws the viewer into a reflective state, contemplating the transient nature of possession.
```

- **Sample `126203dd-fae7-4af5-a437-b164abcfd8fd`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ac240594-6848-45b9-a992-e289adf6b707.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b1b9640b-b8be-46c7-bcf7-d33f5da56550.mp4
  - page: https://higgsfield.ai/motion/eacdca06-1fe2-4402-b8d6-4dc32f2889c5/126203dd-fae7-4af5-a437-b164abcfd8fd

```text
A young man on the left disintegrates into shimmering particles, his face a blend of vulnerability and confusion. In stark contrast, the young man on the right passionately delivers his rap, his expression intense and focused. The dimly lit interior of a car surrounds them, with soft glimmers from outside illuminating their faces. Tension hangs in the air as the dynamic between them unfolds; one is falling apart, while the other rises in creative fervor. Shadows play across the leather upholstery, enhancing the emotional gravity of the scene. The texture of their clothing reflects their personal styles, while the moving light outside creates a surreal atmosphere, amplifying the surrealness of the moment.
```

- **Sample `73904582-12e2-4391-80c6-94633656d7b4`** (priority 3) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f598d1c8-8e9d-48fa-a82b-d150e0d3ca51.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/15dc15b7-aba9-45d5-ad3e-67d3a4217782.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/73904582-12e2-4391-80c6-94633656d7b4

```text
A lone knight stands resolutely in a sunlit field, clad in gleaming silver armor, his posture stoic yet tense. As he clutches the hilt of his sword, it begins to break apart into shimmering particles, slowly vanishing into the crisp air, leaving him grasping at nothing. The battlefield behind him is strewn with remnants of conflict, banners rustling in the gentle breeze, while distant flames flicker ominously. The contrast between the knight’s formidable presence and the ethereal disintegration of his weapon captures the audience's attention with a haunting emotional depth. The atmosphere is charged with a sense of impending loss, as the knight’s brow furrows in determination, unwilling to let go, even as hope slips away.
```

- **Sample `f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1`** (priority 2) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e344ea42-9e33-4481-ba45-fefdc8b2c418.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e6aca950-7818-41c9-b89b-1708e88827db.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/f9c1ec74-5dd8-456b-80e2-dc2f5eac02a1

```text
A stylish young man sits confidently against a shimmering silver backdrop, rocking vibrant red cargo pants, tan boots, sunglasses, and a bandana. He flashes a playful expression, tongue out, and throws up hand signs with bold attitude. Suddenly, his boots begin to disintegrate into glowing particles, pixel by pixel, starting from the sole and rising upward.

As the particles vanish into thin air, his bare feet are revealed, planted casually on the metallic surface. The transformation is smooth and surreal — like a digital glitch or a magic effect — but he stays totally unbothered, still smirking, owning the moment like it was meant to happen.

The camera pushes in slightly on his face, capturing the confidence and humor. Flashy hip-hop beats pulse in the background as the silver backdrop ripples like liquid. Final shot: he lifts one bare foot playfully toward the camera and winks.
```

- **Sample `42ec6c22-5281-479d-b136-f000c590badb`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a8269767-2801-404d-b209-3ebacec65259.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6d428d2b-6540-4217-a57f-f6ac6c2d632f.mp4
  - page: https://higgsfield.ai/motion/4e981984-1cdc-4b96-a2b1-1a7c1ecb822d/42ec6c22-5281-479d-b136-f000c590badb

```text
Deadpool turns to dust and disappears
```
