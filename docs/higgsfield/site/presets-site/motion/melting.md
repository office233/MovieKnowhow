# Melting — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject visibly softens and melts under intense heat—skin, clothes, or objects start to drip and distort. Evokes extreme temperature, tension, or surreal discomfort.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4 | `d8c13031-7117-4a3d-9a30-6a00d0d408b4` | 45 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=d8c13031-7117-4a3d-9a30-6a00d0d408b4 |
| https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad | `ed15397e-0a3d-49e3-add4-b9529698a8ad` | -240 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ed15397e-0a3d-49e3-add4-b9529698a8ad |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man in a desert sun begins to melt, his face and suit dripping and distorting in the heat.
```

Use it as: upload a start image that matches the scene, select motion preset **Melting**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Mixes that use this preset:** [Turning Metal + Melting](turning-metal-plus-melting.md)
- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Freezing](freezing.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/46766895-aa51-4514-809f-f679710fb067.webp (320×182)
- Card preview, variant `ed15397e`: https://d1xarpci4ikg0w.cloudfront.net/7898c6af-e55b-4393-86da-6f580ad39bb7.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/559549dd-2884-4472-8839-070e8d09ca42 | https://static.higgsfield.ai/559549dd-2884-4472-8839-070e8d09ca42.mp4 | https://static.higgsfield.ai/559549dd-2884-4472-8839-070e8d09ca42.webp | https://d1xarpci4ikg0w.cloudfront.net/35cd7fa9-d2d8-4f23-9b50-27736d22a6a7.webp (320×210) |
| 2 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/90c61ccf-959b-4fb0-87df-c531cb8a47a2 | https://static.higgsfield.ai/90c61ccf-959b-4fb0-87df-c531cb8a47a2.mp4 | https://static.higgsfield.ai/90c61ccf-959b-4fb0-87df-c531cb8a47a2.webp | https://d1xarpci4ikg0w.cloudfront.net/20212088-878c-464a-b4d7-4d9bb66b2d67.webp (320×210) |
| 3 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/ab08836c-d8dd-4cb5-9347-8edad78d3fb1 | https://static.higgsfield.ai/ab08836c-d8dd-4cb5-9347-8edad78d3fb1.mp4 | https://static.higgsfield.ai/ab08836c-d8dd-4cb5-9347-8edad78d3fb1.webp | https://d1xarpci4ikg0w.cloudfront.net/744e8829-b84e-4a62-8f39-065a461001ac.webp (320×562) |
| 4 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/748f870f-54c2-4606-bf4d-d374c37ccad6 | https://static.higgsfield.ai/748f870f-54c2-4606-bf4d-d374c37ccad6.mp4 | https://static.higgsfield.ai/748f870f-54c2-4606-bf4d-d374c37ccad6.webp | https://d1xarpci4ikg0w.cloudfront.net/7fb3f02f-8297-46ae-aeac-d4cb2b98aba4.webp (320×182) |
| 5 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/487e2e42-4024-4daf-93b5-faed43cb9a7d | https://static.higgsfield.ai/487e2e42-4024-4daf-93b5-faed43cb9a7d.mp4 | https://static.higgsfield.ai/487e2e42-4024-4daf-93b5-faed43cb9a7d.webp | https://d1xarpci4ikg0w.cloudfront.net/96fb03ea-8c9b-422b-928c-28d00d472570.webp (320×486) |
| 6 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/e619be72-eda0-4bda-963a-d3bf8fe9893c | https://static.higgsfield.ai/e619be72-eda0-4bda-963a-d3bf8fe9893c.mp4 | https://static.higgsfield.ai/e619be72-eda0-4bda-963a-d3bf8fe9893c.webp | https://d1xarpci4ikg0w.cloudfront.net/b5f0d6b7-8896-468c-8444-983e5c215da3.webp (320×210) |
| 7 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/ae58ba32-db21-4080-afb8-d4d706f4937d | https://static.higgsfield.ai/ae58ba32-db21-4080-afb8-d4d706f4937d.mp4 | https://static.higgsfield.ai/ae58ba32-db21-4080-afb8-d4d706f4937d.webp | https://d1xarpci4ikg0w.cloudfront.net/dc1e5f37-a338-4f45-86b6-9b6f2167cd2d.webp (320×424) |
| 8 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/73013cc9-d010-440a-83b3-7336be9e0d99 | https://static.higgsfield.ai/73013cc9-d010-440a-83b3-7336be9e0d99.mp4 | https://static.higgsfield.ai/73013cc9-d010-440a-83b3-7336be9e0d99.webp | https://d1xarpci4ikg0w.cloudfront.net/97f00adc-8066-4214-b9f3-2e7a110c0e68.webp (320×242) |
| 9 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/8041b897-6b1c-4b15-9954-dc7ade3b5170 | https://static.higgsfield.ai/8041b897-6b1c-4b15-9954-dc7ade3b5170.mp4 | https://static.higgsfield.ai/8041b897-6b1c-4b15-9954-dc7ade3b5170.webp | https://d1xarpci4ikg0w.cloudfront.net/640ae750-97ac-4913-8790-a5bae8f63155.webp (320×424) |
| 10 | https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/e5b89ae7-68e5-4858-a66d-27f15f4fddf7 | https://static.higgsfield.ai/e5b89ae7-68e5-4858-a66d-27f15f4fddf7.mp4 | https://static.higgsfield.ai/e5b89ae7-68e5-4858-a66d-27f15f4fddf7.webp | https://d1xarpci4ikg0w.cloudfront.net/67d30698-0a91-4991-9bb5-6adc49c3c65f.webp (320×424) |

Source pages: https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4, https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad. Crawled 2026-09.


## Real sample prompts (site)

10 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `e5b89ae7-68e5-4858-a66d-27f15f4fddf7`** (priority 10) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3ce6214f-a9c2-4656-8435-39ef1fb3941d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8a4332b2-9130-4742-b2cb-546afa34ea95.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/e5b89ae7-68e5-4858-a66d-27f15f4fddf7

```text
A close-up shot captures a woman's lips just about to touch the rim of a glass filled with water and ice. Her nails are painted a vibrant red, and the scene is bathed in golden, moody lighting, giving it a luxurious, cinematic warmth. Condensation on the glass, reflections on her lips, and the translucency of the ice are all crisply rendered, emphasizing realism and sensual detail.

As the moment hangs, the transparent glass begins to warp and shimmer—its structure softening from the top down. It starts to melt into gleaming, molten gold, the surface rippling and deforming naturally under imagined heat. As the form collapses, the water inside shifts, spilling outward and downward in a smooth, physical flow. Droplets splash and cascade with realistic weight, trailing off the frame, while golden rivulets slide between her fingers.

The glass-to-liquid-gold transition must be seamless and physically plausible—no visual glitches or sudden changes in material density. Maintain full consistency of hand placement, lighting on skin, and liquid motion. The gold should behave with natural viscosity and reflective sheen, while the falling water obeys gravity and glass geometry as it gives way beneath it.
```

- **Sample `8041b897-6b1c-4b15-9954-dc7ade3b5170`** (priority 9) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8b816c65-a337-4df7-9965-38b642938a61.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fda2fab4-baa5-4779-94c2-271226525ef9.mp4
  - page: https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/8041b897-6b1c-4b15-9954-dc7ade3b5170

```text
A stylized retro-futuristic handheld camera labeled "Higgscam" floats in the center of a vibrant gradient background, glowing with red and orange tones. Its sleek, metallic body reflects the warm ambient light, while the sharp detailing on buttons, lens, and grip gives it a polished, graphic novel-like finish. The scene feels bold, pop-art inspired, and kinetic in energy.

Suddenly, the camera begins to deform and melt—but not into metal. From the top vents and handle, thick neon-green liquid begins to ooze. It trickles down the lens body and handle, dripping in slow, glossy streams. The green goo glows slightly against the red backdrop, creating striking contrast. As the fluid pools and spreads downward, the camera’s body subtly warps and collapses under the melting process, without losing its iconic silhouette too fast.

The green liquid must behave with high physical realism—thick, glossy, and naturally viscous. Its flow should follow the camera’s surface contours and respond to gravity cleanly, without floating or clipping. No elements of the scene (text, lens detail, buttons) should distort prematurely. Let the surrealism live in the color and flow, while keeping structural logic tight.
```

- **Sample `73013cc9-d010-440a-83b3-7336be9e0d99`** (priority 8) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f2cb93cb-9724-4a15-9fd8-7e40e3035588.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6803d444-c12e-4944-90c1-36ebba0c8e90.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/73013cc9-d010-440a-83b3-7336be9e0d99

```text
A futuristic woman with vibrant pink hair and angular black sunglasses is framed in an extreme close-up, her head tilted upward against a smooth cyan background. Her skin is flawless and radiant, her expression calm, almost statuesque. The bold contrast between her hair, skin, and glasses sets a high-fashion, sci-fi tone—cool, controlled, and precise.

Suddenly, from the top of her head and forehead, the surface of her skin begins to bubble and deform. A thick, toxic neon-green liquid starts oozing downward, eating away at the structure of her forehead and temples. The melt flows with a glossy, heavy viscosity, dripping along her eyebrows and cheekbones in irregular, glowing rivulets. As it reaches her nose and lips, parts of her face dissolve in the stream, revealing nothing beneath—only more fluorescent ooze consuming her expression as it moves.

The rest of her face, sunglasses, and background must remain perfectly stable as long as they’re untouched. The green liquid must glow subtly, contrasting against her skin and hair with high realism. Its consistency should be slick, dense, and organic—behaving like something radioactive or alien. No cartoon effects or sudden pops—just slow, destructive, high-detail liquefaction flowing downward with gravity and precision.
```

- **Sample `ae58ba32-db21-4080-afb8-d4d706f4937d`** (priority 7) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0ceba650-bcc9-495e-b453-6a5687e5519a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7e338ed9-e5da-4928-b4aa-a5a84c63848f.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/ae58ba32-db21-4080-afb8-d4d706f4937d

```text
A stylish woman stands against a solid blue backdrop, dressed in a blue NFL jersey with bold white and red accents, accessorized with thick black glasses, layered gold chains, and visible tattoos. She holds a vintage camcorder upright in one hand near her face, while the other adjusts her glasses. Her expression is composed, but begins to shift into visible shock and disbelief as she looks directly at the object in her hand.

The melting effect is strictly confined to the camcorder only. Starting from the top of the device, the surface begins to liquefy into thick, glossy crimson red fluid. The lens warps slightly and collapses inward as the body of the camera softens and drips in long, heavy strands. The liquid flows downward, dripping off the edges and pooling at the base of the device. The woman remains completely unaffected — her skin, nails, clothing, hair, and jewelry must stay untouched, stable, and perfectly intact throughout.

Ensure the red liquid behaves with realistic weight, heat-induced viscosity, and lighting reflection. No splashes or flow should interact with the woman’s hand, face, or jersey. The environment, pose, and expression must remain locked and clean — only the camcorder is altered, with zero collateral deformation.
```

- **Sample `e619be72-eda0-4bda-963a-d3bf8fe9893c`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4d9772b7-8983-452f-9ec9-f968aab48b39.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6f0e738a-1312-4cfa-b67b-484fb9cac8b6.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/e619be72-eda0-4bda-963a-d3bf8fe9893c

```text
In a warmly lit studio filled with earthy tones, a young woman sits cross-legged on a tall stool, exuding confidence in a burgundy ribbed outfit, plaid cap, and stylish loafers. Her casual smile and the playful gesture of mimicking a phone call convey a vibrant, carefree mood, illuminated by soft, amber light that envelops her figure in a comforting glow. However, a sudden transformation begins as her fingertips rupture, exposing raw tissue; the joyful atmosphere shifts to one of horror. Muscles soften and slide down her wrists in twisted strips, rings fall away, and her skin bubbles and collapses, revealing sinewy structure beneath. As her body deteriorates, clothing becomes drenched and loses form, the remnants of her identity slipping away, leaving only a haunting skeletal figure that slumps forward in the shadows.
```

- **Sample `487e2e42-4024-4daf-93b5-faed43cb9a7d`** (priority 5) — Wan 2.5 motion preset, steps=45, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2827d873-b754-46e1-906f-ed4b137922e9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fcb6b37b-5a29-4aeb-bc7e-19c17013fe65.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/487e2e42-4024-4daf-93b5-faed43cb9a7d

```text
Under flat studio lighting against a seamless grey backdrop, the young man stands formally — immaculately dressed in a patterned sweater, crisp white shirt and red tie, high socks, and polished loafers, cradling a small terrier in his arms. His expression is neutral and calm, yet within moments, a surreal transformation begins. The melting starts subtly — a sheen of sweat-like gloss spreads across his forehead and hands. Then the sweater begins to droop at the shoulders, fibers slackening as if drenched in invisible heat. His fingers lose structure, elongating unnaturally, skin sagging like soft wax. The dog remains untouched, alert and still in his arms, even as the young man’s features begin to dissolve at a steady, medium pace. His nose and cheeks soften, sliding slowly down his face, eyelids folding over as tissue and muscle detach from bone. The tie loosens as the neck beneath it deforms, exposing the top of the spinal column. The flesh around the jaw collapses next, baring teeth that remain embedded in a disintegrating mandible.

The torso and limbs follow: arms melting in thick drips of flesh and fabric, sleeves falling into puddles around the elbows, then the knees soften and buckle as the shins and calves slump into shapeless mass. His shoes stay firmly planted as his body liquefies above them, exposing long white bones emerging from the slush of skin, clothing, and tissue. Throughout, the dog gently hops down unharmed, walking out of frame. By the end, the young man is reduced to a skeleton still partially slick with muscle and sinew, surrounded by remnants of cotton, wool, leather — all fused into the puddle beneath him. The final image holds just a moment: bones, socks, shoes, and a lingering sense of stillness, as if gravity itself has erased him.
```

- **Sample `748f870f-54c2-4606-bf4d-d374c37ccad6`** (priority 4) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f303b4c5-0762-4296-aacf-7fa1409bce9e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/767095af-f14e-4dcd-9acc-e627e9fd70d9.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/748f870f-54c2-4606-bf4d-d374c37ccad6

```text
A close-up of an astronaut, calmly staring through the visor of their helmet. The reflection of stars and modules glimmers softly across the surface. Suddenly, the edges of the suit around the neck and shoulders begin to distort — synthetic fabric and protective plating start to sag and bubble. Thin streams of smoke rise from the chest plate and shoulder seals as sections melt away in irregular, organic patterns. The once-precise stitching warps, and insulation begins to ooze like wax under heat. The helmet visor fogs slightly from inside, as if the internal systems are overheating. Despite the destruction, the astronaut's expression remains eerily calm. The texture of the suit blisters and shrinks, slowly pulling back from the body, revealing faint glimmers of inner framework or tubing beneath. No sound. Only the visual of slow, inevitable breakdown. Atmosphere: zero-gravity calmness meets visual chaos.
Lighting: soft and diffused, with subtle flickers of red/orange reflections.
```

- **Sample `ab08836c-d8dd-4cb5-9347-8edad78d3fb1`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1f9a4ed6-af26-48c1-b413-1d4d8c86ba4c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f07a62dd-4189-4047-b068-ec179d8bdbe1.mp4
  - page: https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/ab08836c-d8dd-4cb5-9347-8edad78d3fb1

```text
A red combat robot stands still in a golden wheat field under a calm sky. Suddenly, the armor on its shoulder begins to blister and sag — metal warping and melting under invisible heat. From the cracks and seams, thick white smoke hisses out, coiling upward in ghostly tendrils. Its chest plates begin to buckle inward, rivulets of glowing liquid metal sliding down like tears. Smoke escapes with increasing intensity from joints, bolts, and damaged armor segments, as if its internal systems are overheating or combusting. As the robot's forearm starts to droop and deform, glowing orange steel peels away, revealing the dark smoking skeleton beneath. Its helmet warps — one side sliding down grotesquely while small exhaust-like jets shoot out puffs of dense gray smoke from behind the neck and spine. By the end, the robot remains standing, partially melted — chest and shoulder plates deformed, several areas glowing faintly with residual heat, smoke still rising lazily into the quiet air. Lighting: late afternoon, natural sunlight.
Atmosphere: cinematic, tragic, industrial decay.
Style: high-fidelity science fiction realism.


```

- **Sample `90c61ccf-959b-4fb0-87df-c531cb8a47a2`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8fb56b96-2a4b-4b7b-83a9-48820190e4fc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/33ee1ed4-d4f1-42d0-ae6f-00ed8de43a7d.mp4
  - page: https://higgsfield.ai/motion/d8c13031-7117-4a3d-9a30-6a00d0d408b4/90c61ccf-959b-4fb0-87df-c531cb8a47a2

```text
The frame opens on a quiet, abandoned desert basketball court bathed in the golden hue of late afternoon. A chrome basketball rests in the center of the court — gleaming, still, flawless. In the background, the hoop stands rigid under the sweltering sky, its backboard and rim casting a long shadow across the concrete. Then, as if the sun has turned against them, the metal surface of the basketball begins to ripple. The clean grooves distort. It slumps slightly, and a soft metallic hiss fills the silence. Thin streams of molten silver start to drip slowly down its curved surface, pooling on the court below. The ball continues to deform — not collapsing, but warping unnaturally, melting into itself like hot wax. Simultaneously, the hoop begins to decay. The backboard — once sharp-edged and square — starts to sag, its corners bending downward. The rim softens, loses its perfect circle, and droops like a wilted flower. The net, if present, disintegrates into strands of liquefied material, dripping into the void.
Only the court and desert remain unchanged — the paint lines, the sand, the horizon. Everything else in frame stays still, except for these two melting relics of play and structure. Lighting remains warm, natural, and dreamlike. Atmosphere: surreal heat-induced decay. Styling: minimalist sci-fi surrealism — where even metal succumbs to time and temperature.
```

- **Sample `559549dd-2884-4472-8839-070e8d09ca42`** (priority 1) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1759ef03-c5c0-41b8-b8a3-0ca8a4a29a3e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/46f13193-e634-4871-97b8-1c0af1161f41.mp4
  - page: https://higgsfield.ai/motion/ed15397e-0a3d-49e3-add4-b9529698a8ad/559549dd-2884-4472-8839-070e8d09ca42

```text
A dramatic close-up shows a woman standing still, framed against the roaring blaze of a house burning behind her. The fire crackles violently, flames bursting through windows, casting flickering orange light across her face. Her skin glistens with sweat, a single tear trailing down her cheek. She looks directly into the camera — calm, unmoving — as if unaware of the inferno erupting behind her. Then, subtly at first, her skin begins to shift. Her cheek slightly softens, then starts to slump. The heat seems to press against her from behind, and slowly, her features begin to distort as if melting under extreme temperature. Her lips droop, and the area around her jaw begins to warp and sag. Liquid sheen forms on her skin like wax, dripping slowly downward. At the climax, a small section of her left cheek gives way — not completely, but just enough to reveal the faint contour of underlying bone. It’s not fully exposed, just barely visible beneath a thin, semi-translucent layer of skin and tissue, glinting briefly in the firelight. The effect is unsettling — not graphic, but suggestive, as if the flesh is wearing thin.
All the while, the flames behind her rage higher, swallowing the structure and throwing embers into the night sky. Her face remains partially intact — but irrevocably altered. Lighting is natural from the fire — intense, chaotic, and red-orange. The atmosphere is tense and surreal, a blend of subtle body-horror and poetic devastation. Styling embraces controlled melting — where beauty deforms but doesn’t completely collapse, and the bones beneath are only hinted at.
```
