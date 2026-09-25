# Low Shutter — Higgsfield Motion preset

- **Category:** Camera · lens & optics
- **Use-case group:** music video
- **What it does (site description, verbatim):** Creates motion blur by lowering the shutter speed, giving your video a dreamy, streaky, or intense action look. Perfect for stylized or high-energy scenes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc | `f7949a2f-2bcd-459a-96c0-80eb222abcdc` | -190 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=f7949a2f-2bcd-459a-96c0-80eb222abcdc |
| https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567 | `fe85971a-92e3-4c85-ac20-b4ecebaf1567` | 51 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=fe85971a-92e3-4c85-ac20-b4ecebaf1567 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A dancer spins under colorful club lights, low shutter motion blur streaking her arms.
```

Use it as: upload a start image that matches the scene, select motion preset **Low Shutter**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Slow shutter, motion blur on fast movement · **Best use:** Speed, urgency, intoxication · **Models:** — · **Phrase/template:** "Low Shutter on the spinning dancer — silhouette blurs" · **Tips:** C1

## Related presets

- **Mixes that use this preset:** [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)
- **Same category (Camera · lens & optics):** [Datamosh](datamosh.md), [Dirty Lens](dirty-lens.md), [Fisheye](fisheye.md), [Focus Change](focus-change.md), [Lens Crack](lens-crack.md), [Lens Flare](lens-flare.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/d4f55fca-2d75-49c8-9638-464bd8498c4e.webp (320×182)
- Card preview, variant `fe85971a`: https://d1xarpci4ikg0w.cloudfront.net/67160c75-a225-4b78-8cf7-9491349e9edc.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/cbd39cd1-bd29-42b8-9f71-e1fb383f0363 | https://static.higgsfield.ai/cbd39cd1-bd29-42b8-9f71-e1fb383f0363.mp4 | https://static.higgsfield.ai/cbd39cd1-bd29-42b8-9f71-e1fb383f0363.webp | https://d1xarpci4ikg0w.cloudfront.net/3f79ea9e-ec17-454b-9def-242affc31f7b.webp (320×242) |
| 2 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/a5c78518-0446-4286-97ad-8ff66b100aa6 | https://static.higgsfield.ai/a5c78518-0446-4286-97ad-8ff66b100aa6.mp4 | https://static.higgsfield.ai/a5c78518-0446-4286-97ad-8ff66b100aa6.webp | https://d1xarpci4ikg0w.cloudfront.net/4aa68ed4-6f6c-4cde-8a71-871673a66a29.webp (320×182) |
| 3 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/649cab4d-c83c-4e52-a157-268d214ab24c | https://static.higgsfield.ai/649cab4d-c83c-4e52-a157-268d214ab24c.mp4 | https://static.higgsfield.ai/649cab4d-c83c-4e52-a157-268d214ab24c.webp | https://d1xarpci4ikg0w.cloudfront.net/b7117f08-f73a-4f3f-959c-f4fffd80ca92.webp (320×182) |
| 4 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/3b25bfd5-ebb5-4949-80ac-67585b2df670 | https://static.higgsfield.ai/3b25bfd5-ebb5-4949-80ac-67585b2df670.mp4 | https://static.higgsfield.ai/3b25bfd5-ebb5-4949-80ac-67585b2df670.webp | https://d1xarpci4ikg0w.cloudfront.net/07879e2e-483d-4ae6-98c5-90469e10e82e.webp (320×180) |
| 5 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b43e0091-f31f-433f-83f9-e6f9b0189a1f | https://static.higgsfield.ai/b43e0091-f31f-433f-83f9-e6f9b0189a1f.mp4 | https://static.higgsfield.ai/b43e0091-f31f-433f-83f9-e6f9b0189a1f.webp | https://d1xarpci4ikg0w.cloudfront.net/dffd5ffa-836c-4f84-b015-00184fd168c1.webp (320×182) |
| 6 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/ffbc9862-d7ce-481b-9a05-68481dc52aad | https://static.higgsfield.ai/ffbc9862-d7ce-481b-9a05-68481dc52aad.mp4 | https://static.higgsfield.ai/ffbc9862-d7ce-481b-9a05-68481dc52aad.webp | https://d1xarpci4ikg0w.cloudfront.net/5da20a6e-4cc0-4a8d-9c02-549087738411.webp (320×182) |
| 7 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/03dd0d11-1293-4675-a39b-b9e8358d0814 | https://static.higgsfield.ai/03dd0d11-1293-4675-a39b-b9e8358d0814.mp4 | https://static.higgsfield.ai/03dd0d11-1293-4675-a39b-b9e8358d0814.webp | https://d1xarpci4ikg0w.cloudfront.net/085f16c9-cad1-4c40-9a32-df38c5142301.webp (320×182) |
| 8 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/c415cd18-6682-4008-9dce-fe403c72cbae | https://static.higgsfield.ai/c415cd18-6682-4008-9dce-fe403c72cbae.mp4 | https://static.higgsfield.ai/c415cd18-6682-4008-9dce-fe403c72cbae.webp | https://d1xarpci4ikg0w.cloudfront.net/e71b04f0-e01a-471f-9583-0efe43eaa29a.webp (320×182) |
| 9 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/5901431f-1928-42b6-9fca-d8154a6c5fc3 | https://static.higgsfield.ai/5901431f-1928-42b6-9fca-d8154a6c5fc3.mp4 | https://static.higgsfield.ai/5901431f-1928-42b6-9fca-d8154a6c5fc3.webp | https://d1xarpci4ikg0w.cloudfront.net/af3987a8-8c09-4635-8ed2-879d5770c71c.webp (320×182) |
| 10 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b99bab3c-82b6-43f7-9b79-2c500a01482c | https://static.higgsfield.ai/b99bab3c-82b6-43f7-9b79-2c500a01482c.mp4 | https://static.higgsfield.ai/b99bab3c-82b6-43f7-9b79-2c500a01482c.webp | https://d1xarpci4ikg0w.cloudfront.net/0eeceb0f-643d-4702-91ed-7b80aae2595b.webp (320×210) |
| 11 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/8ebdfdc0-1663-49cd-924b-f8caa5fa0363 | https://static.higgsfield.ai/8ebdfdc0-1663-49cd-924b-f8caa5fa0363.mp4 | https://static.higgsfield.ai/8ebdfdc0-1663-49cd-924b-f8caa5fa0363.webp | https://d1xarpci4ikg0w.cloudfront.net/4fbec775-e0e9-4b68-a60b-b69b7e700eab.webp (320×242) |
| 12 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/7695742f-0f1c-46e0-9d1d-576c0cae947b | https://static.higgsfield.ai/7695742f-0f1c-46e0-9d1d-576c0cae947b.mp4 | https://static.higgsfield.ai/7695742f-0f1c-46e0-9d1d-576c0cae947b.webp | https://d1xarpci4ikg0w.cloudfront.net/98f8db3c-16f2-4c88-a042-5d5984da2dd7.webp (320×562) |
| 13 | https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/a851d212-6d99-47f2-a808-8beaa733750a | https://static.higgsfield.ai/a851d212-6d99-47f2-a808-8beaa733750a.mp4 | https://static.higgsfield.ai/a851d212-6d99-47f2-a808-8beaa733750a.webp | https://d1xarpci4ikg0w.cloudfront.net/92cf1177-3633-4821-b242-434b218aa24b.webp (320×242) |

Source pages: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc, https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567. Crawled 2026-09.


## Real sample prompts (site)

12 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `a851d212-6d99-47f2-a808-8beaa733750a`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/48dedb32-a175-48f5-bd09-94e759975654.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/87a22f28-7845-416f-9b4e-10b940e8aece.mp4
  - page: https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567/a851d212-6d99-47f2-a808-8beaa733750a

```text
A soldier in a dirty and torn military uniform, wearing a dented helmet, face covered in grime and blood, red wet eyes full of pain, holding his dead brother close to his chest. The dead brother lies limp in his arms, eyes closed, wearing the same uniform, blood on his shirt, expression peaceful but pale. The soldier looks upward slowly, his eyes shimmering with tears, face twisted in agony but silent, a subtle quiver in his lip.
```

- **Sample `7695742f-0f1c-46e0-9d1d-576c0cae947b`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cb6d5425-4fa6-4901-9fd8-18b1eccf4441.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/049a9e63-aae5-412e-bbbe-f32e995afbb0.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/7695742f-0f1c-46e0-9d1d-576c0cae947b

```text
Top panel: The man holds his head in a suffering expression, with a downcast gaze and a crucifix above him, emphasizing emotional turmoil.

Middle panel: He lights a cigarette, showing a faint smile or sense of relief—an expression of momentary happiness or escape.

Bottom panel: He smokes with a visibly sad or contemplative look, eyes slightly down, lips pressed—highlighting a shift back into melancholy.
```

- **Sample `8ebdfdc0-1663-49cd-924b-f8caa5fa0363`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/01cde278-5fd4-4970-bc10-e34e46e7fa32.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b2d84db3-db6e-4c75-b14d-e7e6cdd18858.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/8ebdfdc0-1663-49cd-924b-f8caa5fa0363

```text
a fierce vampire in blood-splattered crimson armor, snarling with glowing yellow eyes and elongated fangs, surrounded tightly by armored medieval soldiers fighting to each other in intense combat scene with swords and spears; he stands defiant, head whipping from side to side in furious motion, breath visible in the cold air, battlefield smoke swirling around them, ready to strike with unrelenting rage
```

- **Sample `b99bab3c-82b6-43f7-9b79-2c500a01482c`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c0b89046-5b5a-4c88-b6b8-ede1523415a3.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/456e670c-a476-428d-817b-eedb0e27c488.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b99bab3c-82b6-43f7-9b79-2c500a01482c

```text
In a chaotic, partially destroyed office building filled with debris and broken metal structures, a disheveled man in a dirt-stained suit walks directly toward the viewer. His eyes are wide with fear, mouth slightly open, and his head jerks left and right as he scans the surroundings in panic. Dust hangs in the air as flickering overhead lights spark behind him. The camera stays locked in a steady tracking shot as he approaches, conveying a sense of urgency and disorientation. His breath is heavy, and the tension in his body shows he’s clearly fleeing something unseen, adding suspense as he moves closer.
```

- **Sample `c415cd18-6682-4008-9dce-fe403c72cbae`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/45dd1c7c-29d3-4a8d-af67-172ff9341ef2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b56bc86b-97a6-4c23-bb54-03798f289a19.mp4
  - page: https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567/c415cd18-6682-4008-9dce-fe403c72cbae

```text
A young man kneels on the rain-slick pavement, trembling and soaked, as torrential rain cascades around him, streaking neon police sirens into a blur of red and blue. His head thrashes violently from side to side, and his open mouth emits a desperate scream, raw emotion spilling into the storm. Water splashes around him, droplets frozen midair, distorting the reality of his agony. In his arms lies a lifeless figure, her wet hair cascading like a halo of tragedy. Behind him, blurred police officers stand as distant figures of authority, contrasting sharply with his intimate breakdown. The entire scene pulses with frenetic energy, the low shutter capturing his sorrow in rippling motion trails against the relentless rain.
```

- **Sample `03dd0d11-1293-4675-a39b-b9e8358d0814`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8beb5075-55e3-4cca-bc25-b88391ee2441.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9cfcfcf4-0a02-42db-a81a-95d4ca8d02bd.mp4
  - page: https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567/03dd0d11-1293-4675-a39b-b9e8358d0814

```text
The camera mimics the protagonist's eyes, revealing a luxurious car interior, where legs are kicked up and neon city lights streak past the windows. The atmosphere buzzes with chaos as cash flutters slowly through the air, illuminated by pulsating blue and magenta LED strips. Laughter erupts from the driver and passenger, their exaggerated movements reflecting in the distorted panoramic roof. This surreal moment feels weightless, blending reality with a dreamlike quality as the car speeds forward. Outside, the world morphs into a hypnotic blur of color and motion, enhancing the sense of euphoria. A fisheye effect draws the viewer deeper into this electric joyride, emphasizing the high-energy and futuristic vibe of the scene.
```

- **Sample `ffbc9862-d7ce-481b-9a05-68481dc52aad`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f243bb90-b014-4ff7-9f1a-bfce72c94979.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/904790b1-0ccf-44c0-ba13-4c8da3897f8a.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/ffbc9862-d7ce-481b-9a05-68481dc52aad

```text
A woman dressed in a shimmering glittering dress dances gracefully through a vibrant, neon-lit party. The camera stays locked onto her sultry expression as she sways to the rhythm, half-lidded eyes and slightly parted lips revealing her immersion in the moment. The ambient lighting bathes her in a warm glow, catching the sparkling details of her attire while blurred figures of elegantly dressed guests swirl around her, dissolving into streaks of gold and blue. Her hair flickers with motion blur, adding to the kinetic energy of the dance floor where laughter and music merge into an electrifying ambiance. The scene unfolds in slow-motion, luxurious and euphoric, each precious second revealing a dreamlike escape into celebration.
```

- **Sample `b43e0091-f31f-433f-83f9-e6f9b0189a1f`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5eda8882-69a0-4dac-bd12-1ce56a23bc05.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7d12b4c2-3c63-43cb-ae4c-5512a1cc9d63.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/b43e0091-f31f-433f-83f9-e6f9b0189a1f

```text
A soldier sprints through the chaotic battlefield, his ragged breath echoing the fear and adrenaline in his wide eyes. Explosions erupt behind him, sending shockwaves of debris and embers that blur the frame in frantic motion. His torn shirt clings to sweat-drenched skin, and dirt and soot mar his face, telling a story of desperation. The ground shakes under the relentless bombardment, each stride kicking up dust and shattered rubble around him. The scene conveys an intense atmosphere, encapsulating the visceral fight-or-flight response in the heart of war. Lighting flashes dramatically, illuminating his terror as he races against impossible odds.
```

- **Sample `3b25bfd5-ebb5-4949-80ac-67585b2df670`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1920×1080
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f7263f2d-e9c6-44f6-b797-bd9feef43f89.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/7dbce374-1573-4054-b527-babc6a26cb6c.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/3b25bfd5-ebb5-4949-80ac-67585b2df670

```text
The terrified driver grips the steering wheel tightly, his knuckles white and face contorted in panic, as he struggles against the chaos outside. Neon lights from the cityscape streak past the cracked windshield, casting distorted reflections of his frantic expression. Muzzle flashes illuminate the darkness, slicing through the air like electric veins, heightening the tension as danger unfolds around him. Suddenly, he collides violently with a steel pole, the force pushing him forward in slow motion, while glass shatters like cascading diamonds, each piece capturing the vibrant glow before vanishing into shadow. The airbag explodes in a ghostly blur, adding to the sense of surreal time distortion. As the background warps with speed—twisting headlights and frozen figures caught in mid-action—the scene becomes a raw, visceral tableau of high-stakes devastation, reality unraveling just before impact.
```

- **Sample `649cab4d-c83c-4e52-a157-268d214ab24c`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a7a5d381-4abd-4efa-b87e-7a14b3bea5be.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f3e05912-2047-44b4-ac2c-c0e340aca15d.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/649cab4d-c83c-4e52-a157-268d214ab24c

```text
A dancer ascends gracefully, her face locked in focus as the crystalline gown fans out like an exploding star, refracting light into mesmerizing streaks through a low shutter speed shot. Surrounding her are mirrored surfaces reflecting other dancers, creating a kaleidoscopic illusion where she feels simultaneously present and absent. Ethereal motion trails blend light and fabric into a surreal dance, accentuated by the dreamlike distortion of the background. The atmosphere pulses with elegance and surrealism, transcending traditional ballet into a high-fashion spectacle, where her steady gaze balances vulnerability and power. Each movement releases a hypnotic fusion of energy, inviting viewers to lose themselves in this captivating performance.
```

- **Sample `a5c78518-0446-4286-97ad-8ff66b100aa6`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/9a99ec3a-c909-4651-8027-aa4e19e33413.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/83c50ab7-2df9-4cbc-8820-1edfbf969371.mp4
  - page: https://higgsfield.ai/motion/f7949a2f-2bcd-459a-96c0-80eb222abcdc/a5c78518-0446-4286-97ad-8ff66b100aa6

```text
The camera locks onto a woman’s glowing, cybernetic eyes as she moves with electrifying intensity across the neon-drenched dance floor. Her holographic outfit refracts the pulsing strobe lights, glitching between colors with every rapid motion. She spins, whipping her neon braids in a hypnotic blur, the strands catching laser beams and tracing vibrant arcs through the air. The bass reverberates through the space, synchronized with the frantic pace of her movements—head snapping side to side, eyes flashing like charged circuits scanning the crowd. Digital projections distort across the walls, warping with the momentum, while fog swirls chaotically at her feet, displaced by each kinetic shift. The atmosphere is electrified—pure cyberpunk euphoria, where speed, rhythm, and neon-fueled energy blur into a visual overload of futuristic ecstasy.
```

- **Sample `cbd39cd1-bd29-42b8-9f71-e1fb383f0363`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e6a650b4-38a1-4a43-9b44-76b46eab3d73.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9a57a780-60ca-4ad1-bca4-ed20d062daae.mp4
  - page: https://higgsfield.ai/motion/fe85971a-92e3-4c85-ac20-b4ecebaf1567/cbd39cd1-bd29-42b8-9f71-e1fb383f0363

```text
A man stands defiantly in the center of a crumbling urban battlefield, gripping a pistol with fierce determination. Harsh muzzle flash illuminates his face, revealing a moment of rage and desperation as distorted shadows dance across his features. Thick smoke billows in the air, swirling around burning cars that flicker and stretch their flames in haunting slow-motion. Shattered glass and debris hang suspended, capturing the chaotic essence of violence and despair amidst the Soviet-era buildings that loom in the background. The camera focuses sharply on his expression, tracking micro-expressions as he pulls the trigger, expelling another bullet into the war-torn streets. The entire scene pulses with raw intensity, beautiful yet brutal, portraying the depths of destruction.
```
