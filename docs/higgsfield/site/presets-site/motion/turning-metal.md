# Turning Metal — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject’s skin and body slowly transform into reflective, metallic surfaces—like silver, gold, or chrome. Feels powerful, surreal, and perfect for sci-fi or high-fashion edits.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e | `46e23a6b-1047-40f1-9cf5-33f5f55ddf2e` | -260 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=46e23a6b-1047-40f1-9cf5-33f5f55ddf2e |
| https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663 | `ad8bffe9-17a9-493d-944d-7fe47275c663` | 60 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ad8bffe9-17a9-493d-944d-7fe47275c663 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman in a black dress stands in a studio as her skin slowly turns to polished liquid chrome.
```

Use it as: upload a start image that matches the scene, select motion preset **Turning Metal**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or object transforms into metal · **Best for:** Sci-fi, industrial, transformation

## Related presets

- **Mixes that use this preset:** [Thunder God + Turning Metal](thunder-god-plus-turning-metal.md), [Turning Metal + Eyes In](turning-metal-plus-eyes-in.md), [Turning Metal + Melting](turning-metal-plus-melting.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/ec4542b5-e939-4f46-8a35-2308020d567b.webp (320×424)
- Card preview, variant `ad8bffe9`: https://d1xarpci4ikg0w.cloudfront.net/670ea7df-da96-4ca7-95eb-27392b2f7c62.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/510146d8-b43b-4dc0-8d0d-6a68520b7a38 | https://static.higgsfield.ai/510146d8-b43b-4dc0-8d0d-6a68520b7a38.mp4 | https://static.higgsfield.ai/510146d8-b43b-4dc0-8d0d-6a68520b7a38.webp | https://d1xarpci4ikg0w.cloudfront.net/36455a7a-04a2-4b19-a746-baaedf933c7e.webp (320×424) |
| 2 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/16ed5671-50b4-4a42-bc72-70fc70ee6501 | https://static.higgsfield.ai/16ed5671-50b4-4a42-bc72-70fc70ee6501.mp4 | https://static.higgsfield.ai/16ed5671-50b4-4a42-bc72-70fc70ee6501.webp | https://d1xarpci4ikg0w.cloudfront.net/295ff3e9-b9a7-4716-b97e-e17e6207845c.webp (320×424) |
| 3 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/f064b767-411c-4521-90b2-6672c795e46a | https://static.higgsfield.ai/f064b767-411c-4521-90b2-6672c795e46a.mp4 | https://static.higgsfield.ai/f064b767-411c-4521-90b2-6672c795e46a.webp | https://d1xarpci4ikg0w.cloudfront.net/cb491ba9-a3d0-42b3-812e-d72ec9da6705.webp (320×470) |
| 4 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/1201767e-cc1d-4322-91d7-d5f6a282d416 | https://static.higgsfield.ai/1201767e-cc1d-4322-91d7-d5f6a282d416.mp4 | https://static.higgsfield.ai/1201767e-cc1d-4322-91d7-d5f6a282d416.webp | https://d1xarpci4ikg0w.cloudfront.net/a77ade97-0e3a-4aa0-8e1f-9cc71a7142ef.webp (320×242) |
| 5 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/5fd49764-a781-44ba-837a-051438e4cde6 | https://static.higgsfield.ai/5fd49764-a781-44ba-837a-051438e4cde6.mp4 | https://static.higgsfield.ai/5fd49764-a781-44ba-837a-051438e4cde6.webp | https://d1xarpci4ikg0w.cloudfront.net/e76518dd-f8e0-4b17-a090-17a410d0231b.webp (320×424) |
| 6 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/3150830e-63c4-4d4c-addf-8b7e735cbb9e | https://static.higgsfield.ai/3150830e-63c4-4d4c-addf-8b7e735cbb9e.mp4 | https://static.higgsfield.ai/3150830e-63c4-4d4c-addf-8b7e735cbb9e.webp | https://d1xarpci4ikg0w.cloudfront.net/bf7b2891-a131-4798-926a-849b7a3ec92b.webp (320×424) |
| 7 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/734a37dc-6ba2-4559-9250-ddb59eb892c7 | https://static.higgsfield.ai/734a37dc-6ba2-4559-9250-ddb59eb892c7.mp4 | https://static.higgsfield.ai/734a37dc-6ba2-4559-9250-ddb59eb892c7.webp | https://d1xarpci4ikg0w.cloudfront.net/7c3836c0-7278-44e0-af12-8bff87e6ea19.webp (320×424) |
| 8 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/4e0157fd-664f-42cd-af35-5c271a0684cf | https://static.higgsfield.ai/4e0157fd-664f-42cd-af35-5c271a0684cf.mp4 | https://static.higgsfield.ai/4e0157fd-664f-42cd-af35-5c271a0684cf.webp | https://d1xarpci4ikg0w.cloudfront.net/fff9f512-e1d3-4246-92af-e093a0301487.webp (320×424) |
| 9 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/87700796-c254-4e62-9f83-e6fd413b2b7c | https://static.higgsfield.ai/87700796-c254-4e62-9f83-e6fd413b2b7c.mp4 | https://static.higgsfield.ai/87700796-c254-4e62-9f83-e6fd413b2b7c.webp | https://d1xarpci4ikg0w.cloudfront.net/b444e707-c74b-4fff-a2d1-e86855ac079b.webp (320×486) |
| 10 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/291b341a-4f49-4158-b615-1b89aad51052 | https://static.higgsfield.ai/291b341a-4f49-4158-b615-1b89aad51052.mp4 | https://static.higgsfield.ai/291b341a-4f49-4158-b615-1b89aad51052.webp | https://d1xarpci4ikg0w.cloudfront.net/d9d6079a-8697-4e0f-a4f1-45b95e87eae4.webp (320×486) |
| 11 | https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/ff2a0599-28cf-41d8-a572-63dbb0ba7d69 | https://static.higgsfield.ai/ff2a0599-28cf-41d8-a572-63dbb0ba7d69.mp4 | https://static.higgsfield.ai/ff2a0599-28cf-41d8-a572-63dbb0ba7d69.webp | https://d1xarpci4ikg0w.cloudfront.net/51d5733e-8d0c-4b91-8d30-ec090f3479e3.webp (320×182) |

Source pages: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e, https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `ff2a0599-28cf-41d8-a572-63dbb0ba7d69`** (priority 14) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/37e29018-ffe7-466b-bdd7-fea42083c57d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/11221a99-33da-4477-8e47-e3bcbe43b838.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/ff2a0599-28cf-41d8-a572-63dbb0ba7d69

```text
Static close-up shot with minimal handheld shake to emphasize raw intensity. A furious man in a jacket, his face contorted in a scream, eyes wide, mouth open, full of emotion and tension. A blurred, leafless forest in cold daylight, with sunbeams piercing through the background creating bokeh glows. As he screams, his skin begins to transform—starting from his neck and spreading across his face-into solid iron, shimmering with a metallic sheen, locking in his expression mid-roar. Extreme close-up with shallow depth of field, center-focused to highlight the transformation details of the skin and expression. Aggressive and urgent, with a sense of transformation overtaking humanity in an eerie forest stillness. Metallic body horror with a hyperrealistic finish, strong contrasts between flesh and metal, and naturalistic lighting emphasizing texture.
```

- **Sample `291b341a-4f49-4158-b615-1b89aad51052`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6.5, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5146168d-5740-4501-8483-bbafddee2593.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/82ffd187-f739-4807-b855-7eb6aa76b405.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/291b341a-4f49-4158-b615-1b89aad51052

```text
A cheerful young man with short twisted hair, wearing bold yellow-tinted sunglasses and a cream sweater with bright yellow and black horizontal stripes, standing confidently with hands in pockets and a wide smile. Set against a richly textured deep red carpet, providing a bold contrast to the brightness of his outfit and creating a warm, modern indoor ambiance. As he holds his pose and smile, his skin and clothing begin to shift in texture and sheen, gradually transforming into gleaming gold; his smile, pose, and expression freeze in place as his body solidifies into a smooth golden statue. Overhead medium shot, looking down at the subject from a slight tilt, maintaining depth and clarity as the transformation takes place. Light and surreal, with a sense of awe and stillness as liveliness is replaced by quiet, frozen elegance. High-polish gold finish with fine sculptural detail retained in clothing textures, facial features, and hair, all captured in shimmering metallic sheen.
```

- **Sample `87700796-c254-4e62-9f83-e6fd413b2b7c`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4fda6516-4f60-4317-8349-6ea1cccb0036.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a0201b20-3433-41fc-bb43-a44d710adbe4.mp4
  - page: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/87700796-c254-4e62-9f83-e6fd413b2b7c

```text
A young man with vibrant turquoise-blue hair styled in a wild, tousled fashion, wearing oversized amber goggles with an orange strap and a green graphic shirt, standing in profile with a toothpick in his mouth and a calm, focused expression. Set against a solid cyan-blue background, providing a smooth and vibrant studio environment that enhances the striking color contrast of hair, clothing, and accessories. While standing still, his skin begins to shift as small, dark iron-gray scales start forming on his neck and cheeks, gradually spreading to cover his entire body — including face, arms, hair, and clothing — until he is fully encased in reflective, interlocking metallic scales. Side-profile medium shot that slowly pans right, tracking the transformation across his form while maintaining consistent depth and clarity. Mysterious and cool, with a sense of tension building as natural skin gives way to hardened, armor-like plating under an otherwise still and quiet environment. Hyperrealistic styling with matte steel-gray overlapping scales that shimmer slightly with movement, preserving shape and contour of the original figure while creating a reptilian, futuristic texture.
```

- **Sample `4e0157fd-664f-42cd-af35-5c271a0684cf`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2a4222e4-1ac5-4b0a-939e-e885c0384ab3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/3fb8b39d-76aa-434b-bc13-3284e8599c53.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/4e0157fd-664f-42cd-af35-5c271a0684cf

```text
Static shot. A woman with radiant skin and intense gaze, dressed in a bejeweled white headpiece and matching gloves covered in reflective crystals, her red lips vibrant against her flawless complexion, with her hands gently framing her face. Set against rich, dark blue curtains that shimmer softly under light, providing a deep theatrical backdrop that highlights the brightness and detail of her costume. As she holds her pose, her skin and gloves begin to shift in sheen, slowly transforming into smooth silver metal, with the jewels on her attire merging into polished studs; her facial features remain frozen and precise as the entire figure becomes metallic. Extreme close-up, straight-on angle, tightly framed to emphasize facial features, symmetry, and texture as they shift from organic to metal. Still and reverent, with a sense of quiet majesty as beauty solidifies into an eternal metallic form. Hyperreal metallic styling with polished chrome surfaces, reflecting the soft lighting and preserving all ornamental details in sculpted, frozen brilliance.
```

- **Sample `734a37dc-6ba2-4559-9250-ddb59eb892c7`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4c43fa07-74d4-4d86-8b14-eff9c305502a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/051231ab-a6bf-4509-b4c6-3a2a1e8de08f.mp4
  - page: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/734a37dc-6ba2-4559-9250-ddb59eb892c7

```text
A lone figure stands on a jagged seaside rock under an overcast sky, draped in a dark medieval cloak, head bowed solemnly over a broadsword planted in the ground. The mood is quiet and monumental, silhouetted in black and white tones with the ocean stretching into the misty distance. Light reflects subtly off the wet rocks and the horizon is soft, casting a dreamlike melancholy.

The camera holds a wide lateral profile shot, with the character in sharp silhouette against the glowing sky. Slowly, a glint begins on the sword hilt, spreading like molten silver over the figure’s hand, arms, then his face and cloak. The camera begins a slow dolly-in as the transformation progresses, catching shimmering metal glints on his frozen profile, until he becomes a full reflective statue locked in time.

Ensure the surrounding scene remains stable: the rocks, the ocean texture, and cloud coverage must not shift. His cloak should retain its flowing form as it solidifies, and the sword must reflect the environment in polished chrome. No parts of the statue should warp or fade—preserve the sharp silhouette to emphasize the solemn, statue-like stillness.
```

- **Sample `3150830e-63c4-4d4c-addf-8b7e735cbb9e`** (priority 9) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6828a8db-ea4c-4fcb-855d-78a9ee11cad0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1df806f8-7d33-4ee2-a926-8bfef8001d1e.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/3150830e-63c4-4d4c-addf-8b7e735cbb9e

```text
A bold woman leans into the camera in a low-lit parking garage, her expression fierce and defiant. She wears layered gold chains, a patterned sleeveless top, and angular sunglasses. With one hand, she pulls her lip down to reveal a full set of metallic grillz, which glint under the fluorescent lighting. The vibe is raw, confident, and street-luxurious.

Suddenly, the transformation begins at her grillz. The gold starts to ripple and expand outward, triggering a sharp chromatic shift. Her teeth and lips quickly fuse into a deep, lustrous violet metal that spreads rapidly across her jaw, face, and neck. The effect is like liquid titanium—smooth, reflective, and alien in texture. Her sunglasses and hair remain untouched as the transformation halts at her shoulders, leaving her upper body coated in a seamless layer of dark purple alloy.

The transition must be sharp, fast, and clean—no particle flickering or environmental disruption. The lighting should remain consistent, with metallic surfaces catching the cool white reflections of the garage. Her clothes and accessories must stay fully intact, contrasting against the high-gloss surreal transformation of her skin and expression.
```

- **Sample `5fd49764-a781-44ba-837a-051438e4cde6`** (priority 8) — Wan 2.5 motion preset, steps=33, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/823a5c56-c282-4f38-aaca-2faa288e10f6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/247f5340-7611-43d7-875c-6dba19716468.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/5fd49764-a781-44ba-837a-051438e4cde6

```text
A young man in a colorful retro tracksuit, yellow-tinted sunglasses, and a cap poses confidently against a brick wall.
His hand, adorned with chunky silver skull rings, rests near his neck.
In a sudden supernatural transformation, his entire body begins to shift into a reflective, glossy green metal.
Starting from his fingers and spreading rapidly upward, his skin turns to chrome-like emerald steel—shiny, smooth, and slightly glowing.
Facial features begin to harden and metallicize, while the texture of his clothes remains detailed but slightly reflective.
Camera language: mid close-up, straight-on perspective with a shallow depth of field, focus on the transition.
Motion: frozen mid-transformation, one side still human, the other fully transformed.
Atmosphere: futuristic and mysterious, hint of tension.
Styling: cyber-organic fusion, metallic green hues with subtle reflections of the environment, realistic lighting on polished surfaces.
```

- **Sample `1201767e-cc1d-4322-91d7-d5f6a282d416`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b97504ad-3056-4df6-bd21-fe9fb2ccf17f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b9405a9e-faaf-4438-8175-6335360f7b21.mp4
  - page: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/1201767e-cc1d-4322-91d7-d5f6a282d416

```text
In a bold red studio setting, a stylish young woman and man strike a playful pose. The woman stands confidently on the left in a metallic silver tank top and oversized black denim shorts featuring a cartoon patch on the back pocket. She reaches across with her right arm to press her finger against the man’s cheek, who sits on a stool to the right wearing a black RHUDE vest, white shirt, and blue denim shorts. Both wear black loafers with white argyle socks.

As the video begins, a sleek transformation sequence occurs: both characters’ skin, hair, and faces gradually morph into a smooth, reflective silver metallic structure, preserving their facial features, expressions, and body poses in perfect detail. Despite the transformation, their clothing retains its original colors and designs, but the fabrics themselves shift into a shiny metallic texture — the silver tank becomes glossier, the denim shorts and vest gain a chrome-like surface while staying color-accurate.

The camera slowly pushes in, capturing the dramatic, stylish transformation. Lighting emphasizes the gleam of the metallic textures, with shadows adding depth to the chrome effect. The pose and expressions are frozen mid-transformation, giving a fashion-forward, futuristic editorial vibe.

Style: Chrome transformation editorial
Mood: Bold, stylish, futuristic
Camera Angle: Wide full-body shot, slow zoom-in
Visual Effects: Skin-to-metal morph, clothing-to-metallic-texture transition with color retention
Color Palette: Silver, black, red, denim blue, white
Reference: Balenciaga x Marvel x streetwear editorial
```

- **Sample `f064b767-411c-4521-90b2-6672c795e46a`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 784×1152
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2cee5ef5-6f2f-43c5-a1be-f4718365d8b3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/003785f3-1f21-44c2-9093-dedb86fa4bb9.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/f064b767-411c-4521-90b2-6672c795e46a

```text
A hyper-realistic portrait of a man wearing a sharp brown overcoat with office-style accessories. The clothing is mid-transformation into a jacket-colored metallic texture—glossy, reflective brown metal with smooth, curved plating that mimics the fabric's original folds and shape. The paper, binder clips, and tie also begin to morph into metallic versions, keeping their positions and forms but rendered in matching polished brown metal. The man's face remains entirely unchanged—natural skin tone, expression, and features fully preserved. His reflective sunglasses and the heavy chain hanging from his face retain their original materials. The background is clean white with studio-style lighting that highlights the new metallic surface textures of the transformed jacket. The mood is surreal yet fashionable, blending high fashion with futuristic tech.
```

- **Sample `16ed5671-50b4-4a42-bc72-70fc70ee6501`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/81ee9595-6561-448a-8020-309242776f1e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f2a93531-b145-45b6-9f9c-f78dafb140db.mp4
  - page: https://higgsfield.ai/motion/ad8bffe9-17a9-493d-944d-7fe47275c663/16ed5671-50b4-4a42-bc72-70fc70ee6501

```text
A high fashion Asian female model staring directly into the camera with a confident, subtle smile. Her sleek hair is perfectly parted down the center. The entire transformation process begins as her red snakeskin-textured dress gradually turns into a reflective, metallic armor with the same red pattern and glossy finish. Her face, hands, and hair follow the transformation, becoming a sleek, smooth metallic surface that mirrors the texture and color of her original clothing. The lighting remains soft and studio-style, highlighting the shine and reflective qualities of the metal transformation. The overall aesthetic is futuristic high fashion, with a balance of beauty and sci-fi elegance.

Style: Hyperrealistic fashion editorial
Mood: Bold, powerful, futuristic
Camera Angle: Close-up portrait, centered
Color: Deep red, metallic crimson, glossy chrome accents
Reference: Vogue Korea editorial, Balenciaga metallic runway looks
```

- **Sample `510146d8-b43b-4dc0-8d0d-6a68520b7a38`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d216c674-698d-4df2-8a6e-4dbc9705412e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b4c47412-21d5-4e8b-8e02-fecdaedcebf7.mp4
  - page: https://higgsfield.ai/motion/46e23a6b-1047-40f1-9cf5-33f5f55ddf2e/510146d8-b43b-4dc0-8d0d-6a68520b7a38

```text
A stylish Black male model stands against a clean white background, wearing a shiny golden suit, white shirt, and golden tie. His silver futuristic sunglasses are attached to a metallic chain on one side. As the video begins, his entire clothing transforms into a highly reflective gold metallic armor, perfectly preserving the tailored structure and fabric folds of the original suit. At the same moment, his head begins to shift into a smooth silver metallic surface, resembling polished chrome, maintaining his facial features with a sleek robotic style.

He raises his right hand, reaching for his sunglasses with a cool, deliberate motion. As he removes them, his eyes are revealed to be glowing, silver, metallic orbs, emitting a soft futuristic glint. The lighting remains consistent—studio-bright and fashion-forward—highlighting the glossy surfaces and dramatic transformation.

Scene remains centered, cinematic pacing, no background change.

Style: Futuristic high fashion transformation
Mood: Cool, controlled, powerful
Camera Angle: Medium close-up, straight-on
Animation Details: Smooth, slow-motion transformation effect, high-quality metal textures
Color Palette: Gold, silver, white, chrome reflections
Reference: Balenciaga meets Terminator x AI fashion film
```
