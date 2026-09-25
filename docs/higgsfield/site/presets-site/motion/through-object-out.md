# Through Object Out — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** Moves the camera outward through an object, revealing the scene behind it. Creates a smooth, creative transition and adds depth to your storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 3
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864 | `0b75acee-a00e-4009-a7a3-8fe394f13864` | 70 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0b75acee-a00e-4009-a7a3-8fe394f13864 |
| https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852 | `3e217f3c-5133-4e83-ab6c-afb35d1c5852` | 47 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=3e217f3c-5133-4e83-ab6c-afb35d1c5852 |
| https://higgsfield.ai/motion/510d88f9-d640-494c-b891-7446ca5cab40 | `510d88f9-d640-494c-b891-7446ca5cab40` | -330 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=510d88f9-d640-494c-b891-7446ca5cab40 |

Round 2 (non-sitemap pages): 1 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`). These pages publish no settings. Their community publications carry 2 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera pulls back out through a café window, revealing the rainy street outside.
```

Use it as: upload a start image that matches the scene, select motion preset **Through Object Out**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera exits through a narrow space, revealing the exterior · **Best use:** Confined-to-open transition · **Models:** "Through Object Out — pulls back through the cabin window into the blizzard" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/be43abb1-d8a9-45c2-853c-85409912e288.webp (320×242)
- Card preview, variant `3e217f3c`: https://d1xarpci4ikg0w.cloudfront.net/84dea938-1f04-4783-9716-69c41f85cb83.webp

### Sample videos (14; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/5d53bd8d-1781-428c-9701-3d2045eaf535 | https://static.higgsfield.ai/5d53bd8d-1781-428c-9701-3d2045eaf535.mp4 | https://static.higgsfield.ai/5d53bd8d-1781-428c-9701-3d2045eaf535.webp | https://d1xarpci4ikg0w.cloudfront.net/0bbe6dcd-60c1-4d47-ad60-a62237dc0ade.webp (320×180) |
| 2 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/3d267687-33f2-4dce-b425-a6395574a906 | https://static.higgsfield.ai/3d267687-33f2-4dce-b425-a6395574a906.mp4 | https://static.higgsfield.ai/3d267687-33f2-4dce-b425-a6395574a906.webp | https://d1xarpci4ikg0w.cloudfront.net/24d30afa-218a-4aa5-af9d-d30f55c87685.webp (320×180) |
| 3 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/985a90bb-bb22-4d5b-8179-ec46d0cf4fc4 | https://static.higgsfield.ai/985a90bb-bb22-4d5b-8179-ec46d0cf4fc4.mp4 | https://static.higgsfield.ai/985a90bb-bb22-4d5b-8179-ec46d0cf4fc4.webp | https://d1xarpci4ikg0w.cloudfront.net/320f2dd8-3398-48cd-a629-0aa5dbf631db.webp (320×180) |
| 4 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/a808540b-6c0a-4275-9dc5-01666e88747f | https://static.higgsfield.ai/a808540b-6c0a-4275-9dc5-01666e88747f.mp4 | https://static.higgsfield.ai/a808540b-6c0a-4275-9dc5-01666e88747f.webp | https://d1xarpci4ikg0w.cloudfront.net/89a64f51-9dae-4046-93a3-d1fe1b7c506d.webp (320×568) |
| 5 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/21e70437-c810-4d55-97a6-6f90c0e6ea57 | https://static.higgsfield.ai/21e70437-c810-4d55-97a6-6f90c0e6ea57.mp4 | https://static.higgsfield.ai/21e70437-c810-4d55-97a6-6f90c0e6ea57.webp | https://d1xarpci4ikg0w.cloudfront.net/db38a759-3c8e-4fc4-a56e-d2f25434a99a.webp (320×180) |
| 6 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/f56a0302-fb9f-45df-bc77-bb1c165cbe0a | https://static.higgsfield.ai/f56a0302-fb9f-45df-bc77-bb1c165cbe0a.mp4 | https://static.higgsfield.ai/f56a0302-fb9f-45df-bc77-bb1c165cbe0a.webp | https://d1xarpci4ikg0w.cloudfront.net/77a793eb-8c18-4b7c-a0e7-32b92bc80772.webp (320×236) |
| 7 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/e474b33c-2e66-46af-a64d-403e768c75c0 | https://static.higgsfield.ai/e474b33c-2e66-46af-a64d-403e768c75c0.mp4 | https://static.higgsfield.ai/e474b33c-2e66-46af-a64d-403e768c75c0.webp | https://d1xarpci4ikg0w.cloudfront.net/edbd1c21-35ca-46b4-8cd8-bed3d56f34de.webp (320×432) |
| 8 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/7ba89145-d4d1-4cfa-a7f6-9ae48b40e3ce | https://static.higgsfield.ai/7ba89145-d4d1-4cfa-a7f6-9ae48b40e3ce.mp4 | https://static.higgsfield.ai/7ba89145-d4d1-4cfa-a7f6-9ae48b40e3ce.webp | https://d1xarpci4ikg0w.cloudfront.net/6e390ea1-cd40-4666-87cc-4d87c31e9416.webp (320×568) |
| 9 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/ec72a370-abd7-4cfa-86fb-55e3dc740af8 | https://static.higgsfield.ai/ec72a370-abd7-4cfa-86fb-55e3dc740af8.mp4 | https://static.higgsfield.ai/ec72a370-abd7-4cfa-86fb-55e3dc740af8.webp | https://d1xarpci4ikg0w.cloudfront.net/0dc6625a-9376-4c55-abbc-9ac03487439a.webp (320×182) |
| 10 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/2d3d73bb-3eaa-4071-a550-351a6e2b2fb2 | https://static.higgsfield.ai/2d3d73bb-3eaa-4071-a550-351a6e2b2fb2.mp4 | https://static.higgsfield.ai/2d3d73bb-3eaa-4071-a550-351a6e2b2fb2.webp | https://d1xarpci4ikg0w.cloudfront.net/23b259bf-3792-40d1-afc1-29a8e87250d6.webp (320×242) |
| 11 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/40aad502-688d-4c2f-ac52-15b5b96905c9 | https://static.higgsfield.ai/40aad502-688d-4c2f-ac52-15b5b96905c9.mp4 | https://static.higgsfield.ai/40aad502-688d-4c2f-ac52-15b5b96905c9.webp | https://d1xarpci4ikg0w.cloudfront.net/05d41d07-b79a-4b5d-986e-3276f9c99f9b.webp (320×242) |
| 12 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/0b0862b0-6e28-47be-9f7f-0681c2cdade9 | https://static.higgsfield.ai/0b0862b0-6e28-47be-9f7f-0681c2cdade9.mp4 | https://static.higgsfield.ai/0b0862b0-6e28-47be-9f7f-0681c2cdade9.webp | https://d1xarpci4ikg0w.cloudfront.net/1e9d5373-ff66-4a46-9180-31ddcef17138.webp (320×182) |
| 13 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/0113adcc-cea1-4275-872c-3733d9a2b434 | https://static.higgsfield.ai/0113adcc-cea1-4275-872c-3733d9a2b434.mp4 | https://static.higgsfield.ai/0113adcc-cea1-4275-872c-3733d9a2b434.webp | https://d1xarpci4ikg0w.cloudfront.net/62f6c675-b36c-487f-86fc-b9afcd596c14.webp (320×210) |
| 14 | https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/22aa78ad-1f31-4b1c-8d06-f213d769ee0d | https://static.higgsfield.ai/22aa78ad-1f31-4b1c-8d06-f213d769ee0d.mp4 | https://static.higgsfield.ai/22aa78ad-1f31-4b1c-8d06-f213d769ee0d.webp | https://d1xarpci4ikg0w.cloudfront.net/46ff1a61-f421-44eb-80bc-3e2da291021e.webp (320×182) |

- Card preview, round-2 variant `510d88f9` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/bd21a466-5129-4f94-8695-5da82fa82ab2.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/120ddde0-b23b-406d-b06b-c52b3b142208.webp (600×800)

### Sample videos, round-2 variant `510d88f9` (Wan 2.5) (2 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/c118dae0-628c-4a7f-81b7-94518336f2e9_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/1fbec993-8bba-4c89-939c-ed707b94dbc7.jpg | wan2_5_video · 5 s · 1080p · 1536×2048 | A group of four diverse young people posing in an industrial warehouse bathed in warm, late afternoon sunlight. A tall young man stands confidently on a rusted metal platform railing, wearing a white T-shirt, black cap, and white sneakers, holding a vibrant green, yellow, and black jacket draped over the railing. Nearby, a young woman with voluminous curly hair sits on the metal stairs, dressed in a denim jacket, white socks, and black shoes, calm and self-assured. Below them, a crouching tattooed young man in a black sleeveless shirt, black shorts, white sneakers, and a bright orange beanie stares intently toward the camera, while beside him, a young woman with shoulder-length black hair wears black overalls over a white T-shirt and black boots, hands in pockets, looking contemplative. The dimly lit background shows corrugated metal walls and scattered industrial elements. The camera fast dollies out backward through emerging new narrow, rust-colored metal gaps appearing close to its sides, revealing more of the gritty warehouse space and emphasizing strong structural lines. All figures move at normal speed. |
| 2 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/492909ff-b3e5-4be8-9e1b-e746a949215a_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/b6601723-eb3a-448b-9ec2-bbc3f24c3d38.jpg | wan2_5_video · 5 s · 1080p · 1536×1152 | A stylish young man sits on a white tiled laundromat floor, legs spread casually, wearing black trousers, a patterned white shirt, a black and white scarf wrapped around his head, dark sunglasses, and shiny black dress shoes. He holds a yellow lollipop to his lips with one hand while the other lightly rests on the floor, his relaxed posture conveying calm confidence as he moves at normal speed. Behind him, three large industrial silver washing machines line the wall, their circular doors reflecting soft, cool ambient lighting that emphasizes the metallic surfaces and textured dials. A crumpled black leather jacket lies beside him on the floor, from which a small narrow gap near the jacket's edge appears from the left side of the frame, revealing new space close to the camera. The camera quickly dollies out backward through this little open gap, revealing more of the shiny laundromat machines and tiled floor, as ambient light creates subtle reflections and shadows enhancing the industrial setting's cool, modern aesthetic. |

Source pages: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864, https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852, https://higgsfield.ai/motion/510d88f9-d640-494c-b891-7446ca5cab40. Crawled 2026-09.


## Real sample prompts (site)

14 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `22aa78ad-1f31-4b1c-8d06-f213d769ee0d`** (priority 13) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/64d8b12c-9ce6-4f7b-8735-f78ca199c2e5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/77697e32-a895-4a2f-a1ef-0059e36fe42d.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/22aa78ad-1f31-4b1c-8d06-f213d769ee0d

```text
Inside a space station corridor bathed in intense red emergency lighting, two astronauts in white suits cautiously move toward a window, one holding a flashlight that cuts through the red glow. The camera begins a slow zoom-out toward the window, passing between the astronauts, catching subtle light flares and reflections on their visors. It glides through the small portal and seamlessly transitions into the cold blackness of space, revealing the massive space station from outside—floating in orbit, surrounded by stars. The station’s silhouette glows against the starfield, with one side lit by distant sunlight and the other lost in shadow. The atmosphere is mysterious and epic. Styling combines retro-futuristic sci-fi with cinematic realism, featuring lens flares, space dust, and deep contrast.
```

- **Sample `0113adcc-cea1-4275-872c-3733d9a2b434`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/05962b3e-c9d9-43f4-bcda-963d4ecb6878.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a7170715-6917-46a0-9da9-85b7ac6ff88a.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/0113adcc-cea1-4275-872c-3733d9a2b434

```text
A reflective black sphere resting on a sleek metallic table in a dimly lit, futuristic room with metallic walls. The room is bathed in cold, atmospheric lighting with flickers of red accents across the surfaces. The camera begins by focusing on the sphere’s surface, then starts moving backward, seamlessly transitioning through the dark reflective surface.

As the camera emerges from the other side, the scene reveals a surreal mechanical structure — an intricate web of black, liquid-like tendrils suspended in the air, pulsating with faint metallic ripples. The tendrils coil and stretch in slow, rhythmic patterns as glowing red orbs hover within the web. The entire structure appears suspended in zero gravity, with liquid droplets floating gently between the strands, maintaining a sleek, cyberpunk-inspired aesthetic. The camera continues its slow retreat, revealing that this surreal structure is encased within a massive glass chamber, pulsating like a living organism in the sterile, industrial space.
```

- **Sample `0b0862b0-6e28-47be-9f7f-0681c2cdade9`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a935f1b5-2cff-45f1-a6b1-b19e6af6437f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f82a05d6-388a-4871-a97f-ec3d8e7789c4.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/0b0862b0-6e28-47be-9f7f-0681c2cdade9

```text
A quiet child sits alone on a vintage bus, their face gently illuminated by golden afternoon light as they gaze out the window in contemplation. The camera begins a slow, steady zoom-out, gliding carefully between the narrow space of seat handles and bus windows, capturing light flares, soft fabric textures, and muted reflections. It continues moving backwards past rows of empty seats, through the aisle, then seamlessly exits the rear window, revealing the entire bus traveling slowly down a sunlit rural road surrounded by trees and dust in the warm air. The atmosphere is nostalgic and meditative. Styling is cinematic realism with shallow depth of field, soft lens bokeh, and a natural golden-hour color palette.
```

- **Sample `40aad502-688d-4c2f-ac52-15b5b96905c9`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/47bed30d-8e28-4adf-90df-9f9e5deb840a.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ec994ddc-a815-4909-b968-3451218dd665.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/40aad502-688d-4c2f-ac52-15b5b96905c9

```text
A flamboyant man with curly blonde hair, electric blue eyeshadow, and a glittery striped outfit pushes through a curtain made of hanging crystal disco beads on a vibrant nightclub stage. As he parts the curtain, the camera glides back between the swinging spheres, capturing bursts of rainbow light refraction and colorful lens flares. The atmosphere is euphoric, saturated with deep purples, pinks, and retro lighting. Styling is pure vintage disco fever with soft film grain, anamorphic glow, and mirrorball sparkles across the frame.
```

- **Sample `2d3d73bb-3eaa-4071-a550-351a6e2b2fb2`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/12e95ada-0640-4a2e-a36a-940305d661ea.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/523d45fd-388e-46c0-a9c8-cc40d47a958a.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/2d3d73bb-3eaa-4071-a550-351a6e2b2fb2

```text
A sparkling performer in a glittery jumpsuit sings under a shimmering curtain of sequins, surrounded by neon shapes and star-like stage lights, her bold makeup and vibrant expression glowing with retro glam. As the camera begins to zoom out slowly, the glitter fades into scanlines and CRT distortion. The frame continues pulling back to reveal that this dazzling performance is playing on a small vintage television screen. The TV sits in the center of a cozy 1970s living room, filled with shag carpet, wood panel walls, lava lamps, and warm yellow lighting. Dust dances in the sunlight from a window. The atmosphere is nostalgic, dreamy, and cinematic. Styling merges disco glam with analog realism, featuring VHS-like overlays, soft film grain, and warm retro color tones.
```

- **Sample `ec72a370-abd7-4cfa-86fb-55e3dc740af8`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/837ac42a-b05f-4f9b-8a94-69b4f80bbba9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/71905d86-2b33-4641-87f1-e1cf4bb48e2c.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/ec72a370-abd7-4cfa-86fb-55e3dc740af8

```text
inside a futuristic space station module, two astronauts in white suits with red and blue details float in zero gravity, illuminated by soft blue ambient lights and warm sunlight leaking through a window. The camera begins a slow zoom-out through the hatch behind them, passing through layers of the pressurized corridor. As it exits the station, the vastness of space unfolds—revealing the entire space station floating above Earth, with the glowing sun cresting behind it, casting intense golden lens flares across the frame. The camera continues to pull back into a wide shot, showing the station’s silhouette against the stars. The atmosphere is majestic, isolated, and awe-inspiring. Styling is ultra-realistic cinematic sci-fi with high dynamic range, volumetric light shafts, and subtle filmic grain.
```

- **Sample `7ba89145-d4d1-4cfa-a7f6-9ae48b40e3ce`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6d0da415-9cee-416a-8498-49eb7b05075d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d29e9848-965c-42aa-a5db-fa428db2cf46.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/7ba89145-d4d1-4cfa-a7f6-9ae48b40e3ce

```text
The camera starts to move backward, weaving between the floating orange slices. As it glides past one translucent slice, the camera suddenly pushes through its pulpy texture. The slice ripples like liquid glass as the scene distorts.

Emerging on the other side, the camera reveals a surreal new space — a glowing pink forest filled with translucent, bubble-like fruits hanging from tree branches. The trees have smooth, candy-like trunks that stretch upward, their bark pulsating faintly with warm light. The air is thick with soft, floating particles that resemble tiny glowing embers.
```

- **Sample `e474b33c-2e66-46af-a64d-403e768c75c0`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2940c4ea-1568-4dc7-9f28-a3e382283802.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fe13259a-c8f3-4010-a1a6-5aa1efd26ef8.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/e474b33c-2e66-46af-a64d-403e768c75c0

```text
The camera moves backward, drifting through a narrow gap between the corridor walls. The walls seem to tighten as the camera glides back until it pushes through a narrow vent grate, the view briefly flickering with distorted slits of light.

Emerging on the other side, the camera reveals a dimly lit mechanical room — tangled wires, flickering control panels, and the faint hum of machinery fill the space. The atmosphere is stark and cold, the figure from before now gone. 
```

- **Sample `f56a0302-fb9f-45df-bc77-bb1c165cbe0a`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/7c47fbb2-f803-476c-8ae6-a3d8ea79914e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/28a97748-6442-4e3f-bf65-80a39d0f0107.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/f56a0302-fb9f-45df-bc77-bb1c165cbe0a

```text
The camera moves backward, drifting between the folds of a rich red velvet curtain. As the fabric fills the frame, light flickers across the textured surface before the camera suddenly pushes through a fold in the curtain.

Emerging on the other side, the camera reveals a dim backstage area — shadowy figures in costumes move between racks of props and stage equipment. A faint orange glow spills from the stage entrance as muffled dialogue echoes from the performance still unfolding beyond the curtain. The shot lingers briefly before fading to black.
```

- **Sample `21e70437-c810-4d55-97a6-6f90c0e6ea57`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/773627c4-12fa-4dd2-9f50-d2f538aaa10c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/de9b9f16-7ee1-4cd4-a9cd-a0d968ae7edf.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/21e70437-c810-4d55-97a6-6f90c0e6ea57

```text
The camera begins to move slowly, drifting toward the train window. As it presses closer to the glass, their faces distort in reflection, blending with the dark void outside. The camera seamlessly transitions through the window, revealing the train’s exterior.

The camera continues zooming out, revealing the train’s metal body racing through a shadowy European landscape. Bare trees, fog-shrouded fields, and distant village lights flicker past. The rhythmic clanking of the train’s wheels echoes in the cold night air, while faint silhouettes of hills loom in the distance.
```

- **Sample `a808540b-6c0a-4275-9dc5-01666e88747f`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1280
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2b930edc-5fed-4ef7-a757-d04d8b1441d8.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ccc44050-bf20-42ec-9ded-3df4f49c1abf.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/a808540b-6c0a-4275-9dc5-01666e88747f

```text
The scene opens inside the dark, textured hollow of a tree trunk. The camera pushes outward through the narrow opening, revealing the faint flicker of movement. A squirrel is perched just at the edge of the hollow, clutching a small pile of cedar cones with its tiny paws. It pauses, alert, twitching its nose as if sensing something.
```

- **Sample `985a90bb-bb22-4d5b-8179-ec46d0cf4fc4`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/a3b378f0-f17b-4d6d-8525-1119dd08c9d6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b7988f40-9a42-4bfc-8f23-42a3621e7d6b.mp4
  - page: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864/985a90bb-bb22-4d5b-8179-ec46d0cf4fc4

```text
The camera steadily zooms out toward the window. As it passes through the glass, the view shifts seamlessly to the outside — the hull of the ship stretching out with intricate metallic plating and illuminated navigation lights. The camera continues to pull back, revealing a vast array of cables extending from a towering space station structure.

Further zooming out, the station is seen orbiting a massive, glowing turquoise planet below. Wisps of clouds stretch across the surface, while the faint curve of the planet’s horizon fades into the blackness of space. The station’s cables extend like threads, linking to unseen satellites or energy relays far beyond.
```

- **Sample `3d267687-33f2-4dce-b425-a6395574a906`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/41c6fb61-7ef2-4d6e-b419-7610d0d51cbb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/58d12c0f-8651-4c69-95ed-ae3d8985078a.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/3d267687-33f2-4dce-b425-a6395574a906

```text
A mysterious figure stands alone in a dimly lit desert, silhouetted against a massive glowing orb. His face is barely visible except for glowing spiral glasses. The camera begins to pull back, slowly revealing more of the sandy landscape.

The camera continues to zoom out, moving steadily away. The glowing orb shrinks, revealing it to be inside a small transparent cube. The surrounding area becomes brighter, revealing a gleaming laboratory filled with high-tech equipment.

The camera keeps zooming out, and a pair of giant hands appear in the frame, carefully holding the small box. The hands belong to a towering scientist in a pristine white lab coat, peering down at the glowing box with an intense, calculating gaze. Strange symbols flicker on screens behind him as the glowing orb pulses rhythmically within the tiny box.
```

- **Sample `5d53bd8d-1781-428c-9701-3d2045eaf535`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eeefeafa-57db-4bd3-92b5-8d37e509a3be.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/14da1cc3-df3f-4f8b-9b8a-bb95344e3c35.mp4
  - page: https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852/5d53bd8d-1781-428c-9701-3d2045eaf535

```text
A peaceful beach scene unfolds — two women and a young child sit on beach chairs, facing the ocean under colorful umbrellas. The sun shines brightly, casting a warm glow on their hair. The camera begins to zoom out slowly, the image revealing itself as an old, slightly faded photograph with curled edges.

The camera continues to pull back, revealing wrinkled fingers holding the photograph. The hands tremble slightly, aged and delicate. 
```
