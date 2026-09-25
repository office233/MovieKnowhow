# Crash Zoom In + Tentacles — Higgsfield Motion preset

- **Category:** Mix (2 stacked motions)
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** Snaps into the subject’s face with a fast zoom as eerie tentacles emerge from their eyes. A shocking, surreal mix of horror and intensity.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Mix preset: model guidance follows its component presets (see their files).

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971 | `52862ad0-ca56-4a11-bb1d-cb0ca74f7971` | -162 | isMix | mix of: Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 0.9), Tentacles (motion id `8fccea16-08b5-432c-8123-8456523e2d60`, strength 0.85) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38%2C8fccea16-08b5-432c-8123-8456523e2d60&presetMotionStrengths=0.9%2C0.85 |
| https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069 | `6b658ac3-48a7-49a7-85cc-97af9ff50069` | 100 | isMix | mix of: Crash Zoom In (motion id `a2dddb76-03fa-429e-9905-577bffdf9d38`, strength 0.9), Tentacles (motion id `8fccea16-08b5-432c-8123-8456523e2d60`, strength 0.85) | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a2dddb76-03fa-429e-9905-577bffdf9d38%2C8fccea16-08b5-432c-8123-8456523e2d60&presetMotionStrengths=0.9%2C0.85 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A woman turns toward the camera; fast zoom into her face as tentacles emerge from her eyes.
```

Use it as: upload a start image that matches the scene, select motion preset **Crash Zoom In + Tentacles**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Related presets

- **Component presets of this mix:** [Crash Zoom In](crash-zoom-in.md) (strength 0.9), [Tentacles](tentacles.md) (strength 0.85)
- **Same category (Mix (2 stacked motions)):** [Action Run + Set on Fire](action-run-plus-set-on-fire.md), [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md), [Crane Over The Head + Crash Zoom In](crane-over-the-head-plus-crash-zoom-in.md), [Crash Zoom In + Face Punch](crash-zoom-in-plus-face-punch.md), [Flying + Set on Fire](flying-plus-set-on-fire.md), [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md), [Lazy Susan + Super Dolly Out](lazy-susan-plus-super-dolly-out.md), [Levitation + Invisible](levitation-plus-invisible.md), [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/e3dc3811-d8c7-459b-94dc-da5102517b87.webp (320×242)
- Card preview, variant `6b658ac3`: https://d1xarpci4ikg0w.cloudfront.net/b0308903-c377-42d9-9690-4927e2b64592.webp
- Component preview — Crash Zoom In: https://d1xarpci4ikg0w.cloudfront.net/46693dce-b7fa-4d68-8df1-a1d27e32aa06.webp
- Component preview — Tentacles: https://d1xarpci4ikg0w.cloudfront.net/edf4f63f-06ca-46d5-bc1c-4f0bcfd50be7.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/a12fef43-ae3f-495a-b6f0-01622a1b6a02 | https://static.higgsfield.ai/a12fef43-ae3f-495a-b6f0-01622a1b6a02.mp4 | https://static.higgsfield.ai/a12fef43-ae3f-495a-b6f0-01622a1b6a02.webp | https://d1xarpci4ikg0w.cloudfront.net/c05d703b-3e6a-41a7-8d1d-0c27297003bf.webp (320×424) |
| 2 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26 | https://static.higgsfield.ai/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26.mp4 | https://static.higgsfield.ai/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26.webp | https://d1xarpci4ikg0w.cloudfront.net/1d38bce5-2b12-461b-8ad2-96ef7bc40085.webp (320×242) |
| 3 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7085fc3d-f400-4bfa-b0da-01aa159e2834 | https://static.higgsfield.ai/7085fc3d-f400-4bfa-b0da-01aa159e2834.mp4 | https://static.higgsfield.ai/7085fc3d-f400-4bfa-b0da-01aa159e2834.webp | https://d1xarpci4ikg0w.cloudfront.net/e57712c9-18b1-4494-a730-093dc4136492.webp (320×424) |
| 4 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/afc3fe45-7ed3-400e-affb-5110688922a4 | https://static.higgsfield.ai/afc3fe45-7ed3-400e-affb-5110688922a4.mp4 | https://static.higgsfield.ai/afc3fe45-7ed3-400e-affb-5110688922a4.webp | https://d1xarpci4ikg0w.cloudfront.net/a083bd46-6c7c-4da4-aae2-93eceff4e0cc.webp (320×210) |
| 5 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/8c4b9216-115a-4dd7-898a-f4d567c9abed | https://static.higgsfield.ai/8c4b9216-115a-4dd7-898a-f4d567c9abed.mp4 | https://static.higgsfield.ai/8c4b9216-115a-4dd7-898a-f4d567c9abed.webp | https://d1xarpci4ikg0w.cloudfront.net/2036664d-ca50-4249-aaa8-ce651b4b2eca.webp (320×242) |
| 6 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32 | https://static.higgsfield.ai/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32.mp4 | https://static.higgsfield.ai/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32.webp | https://d1xarpci4ikg0w.cloudfront.net/e752af2c-aa37-4648-9ee8-e0e903dff6e4.webp (320×242) |
| 7 | https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/1eed2a41-f138-407d-abd3-b4faaaaa65d2 | https://static.higgsfield.ai/1eed2a41-f138-407d-abd3-b4faaaaa65d2.mp4 | https://static.higgsfield.ai/1eed2a41-f138-407d-abd3-b4faaaaa65d2.webp | https://d1xarpci4ikg0w.cloudfront.net/97a62073-f516-4f14-86ec-9acea0ee6acc.webp (320×424) |

Source pages: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971, https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `a12fef43-ae3f-495a-b6f0-01622a1b6a02`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/08e5be90-430f-4a35-9f7b-9613de606b46.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c31e455b-6946-4403-b78b-ba5640f232b0.mp4
  - page: https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069/a12fef43-ae3f-495a-b6f0-01622a1b6a02

```text
The camera crash zooms in on her face, where her expression reveals a blend of sadness and alienation, accented by tentacles swirling from her eyes. Inside the dimly lit bathroom stall, the stark tiles glisten under fluorescent light, creating a surreal atmosphere that heightens the tension. The surrounding space is filled with discarded petals and a bouquet of daisies, contrasting the sterile environment with a hint of fragility. Her iridescent dress reflects flickers of light, embodying her inner chaos as she curls into herself, a stark figure against the stark backdrop. This poignant moment blends fantasy with a haunting reality, capturing the essence of her emotional labyrinth.
```

- **Sample `1eed2a41-f138-407d-abd3-b4faaaaa65d2`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/163aad2d-2382-44b6-8234-39f6c517e645.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/382de049-2437-4869-8ada-22a3607e84d3.mp4
  - page: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/1eed2a41-f138-407d-abd3-b4faaaaa65d2

```text
The camera zooms in on the head of the central figure, who sits confidently in a sleek barber chair, his expression a mix of calm and defiance. The vibrant red of the surrounding walls and the matching attire of the stylists create a striking, immersive atmosphere. Each stylist, armed with gleaming scissors and combs, looms around him, their intent focused and poised. The stark contrasts in lighting highlight the glint of metal tools, casting sharp shadows that deepen the tension of the moment. The scene pulsates with an electric energy, capturing the interplay of power and vulnerability in this intimate setting.
```

- **Sample `7085fc3d-f400-4bfa-b0da-01aa159e2834`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3e299ee2-0be1-48df-9310-6d376fac94b0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6bfda7fc-44bd-4d81-b2cd-f44c4187b0bf.mp4
  - page: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7085fc3d-f400-4bfa-b0da-01aa159e2834

```text
The camera performs a crash zoom in on a young woman wearing a shimmering, metallic red cloak, her expression solemn yet intense. Set against a dimly lit urban street, the harsh glow of a nearby streetlamp casts an otherworldly light, highlighting her striking features and the glossy fabric of her outfit. As the camera closes in, surreal tentacles emerge from her eyes, twisting and undulating, creating a stark contrast against the darkness of the night. The atmosphere thickens with a sense of impending dread, the surrounding cars and chain-link fence bathed in soft shadows, underscoring the bizarre reality unfolding. Each movement of the tentacles adds an unsettling dynamism to the scene, while the warm hues clash with the chilling subject, evoking both wonder and horror.
```

- **Sample `7ca6d4f7-8b88-487f-9cf3-a1edc49eac32`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/273aa60b-7a41-4071-9d57-452db01802b9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/cde41e48-3854-4102-bd63-890b74fa78e7.mp4
  - page: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/7ca6d4f7-8b88-487f-9cf3-a1edc49eac32

```text
A woman sits confidently in a metallic, reflective space, her bright red bodysuit clinging to her form, creating an electric visual contrast against the chrome surroundings. The lighting shifts dramatically, casting eerie shadows in hues of crimson and gold, while steam wafts around her, adding a surreal layer to the atmosphere. As the camera crash zooms in, tendrils begin to expand from her eyes, emanating a sense of both power and menace. The juxtaposition of her calm demeanor with the chaotic emergence of the tentacles creates a narrative tension that pulses through the scene. Reflections shimmer on the floor, enhancing the otherworldly essence of the moment, while the warm and cool lights play across her features, revealing glimpses of her inner turmoil.
```

- **Sample `22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/0bb04e75-b02c-4738-926e-98a62f042efe.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/337040da-ace9-47e9-9d26-aa2817928a04.mp4
  - page: https://higgsfield.ai/motion/52862ad0-ca56-4a11-bb1d-cb0ca74f7971/22e379f2-4c2c-4d60-a2b6-f6c64fa6ca26

```text
A striking crash zoom reveals her face, framed by the reflective surface of the aquarium. She sits in an eerie underwater glow, her bright orange suit contrasting against the pastel colors of the room. As her expression darkens, tentacles emerge from her eyes, writhing with a life of their own, creating an unsettling visual. The goldfish dart around her, their movements frantic against the crystalline gravel, heightening the atmosphere of tension and surrealism. Soft reflections of her figure shimmer on the tank's surface while the flicker of an old television in the background casts an ominous light, deepening the sense of confinement and revelation.
```

- **Sample `8c4b9216-115a-4dd7-898a-f4d567c9abed`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/120d0845-e3db-4699-9b3d-f0bf4d3ebe64.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2b09e517-c5e2-4b8e-8e02-60a72c71e0b2.mp4
  - page: https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069/8c4b9216-115a-4dd7-898a-f4d567c9abed

```text
The camera slowly zooms in on an elegant woman in a vibrant green fur coat, her posture relaxed yet ominous, as she leans against the black sleek car. The modern, upscale interior of the mall is dimly lit, with soft pools of light reflecting off the polished marble floors, creating an atmosphere charged with anticipation. As the zoom tightens, surreal tentacles begin to extend from her eyes, a stark contrast to her composed expression. The juxtaposition of her luxurious appearance and the grotesque emergence of the tentacles evokes a sense of unease, illuminating the hidden depths of her character. This visual play of color and shadow enhances the narrative tension, inviting viewers to explore the unsettling beauty within.
```

- **Sample `afc3fe45-7ed3-400e-affb-5110688922a4`** (priority 0) — Wan 2.5 motion preset, steps=20, frames=81, strength=, guide_scale=, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/826b2898-bc68-4aef-ba80-20a0a6f9ec60.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4e4fb3d7-8dfa-478b-a418-e232b0631703.mp4
  - page: https://higgsfield.ai/motion/6b658ac3-48a7-49a7-85cc-97af9ff50069/afc3fe45-7ed3-400e-affb-5110688922a4

```text
A woman draped in a sleek black outfit, with long gloves and a translucent veil, lies in a stark, orange chair in a deserted waiting room. The camera crashes into a dramatic zoom, revealing tentacle-like extensions emerging from her eyes, creating a visceral shock. The fluorescent lights above cast a cold, sterile glow, amplifying the sense of isolation. The starkness of the empty, uniform rows of orange chairs surrounds her, enhancing the tension and surreal atmosphere. Her expression is a mix of calm and eerie detachment, reflecting an inner turmoil hidden beneath her poised exterior. This bizarre moment captures an unsettling blend of beauty and horror, inviting the viewer to ponder the narrative beneath the surface.
```
