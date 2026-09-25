# Dolly Zoom In — Higgsfield Motion preset

- **Category:** Camera · dolly & push
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Moves the camera forward while zooming out, warping perspective and creating a dramatic, unsettling effect. Great for shock, realization, or tension.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3 | `114245a3-93fb-434a-9299-44ca9e4656a3` | -268 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=114245a3-93fb-434a-9299-44ca9e4656a3 |
| https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44 | `7d1c4551-e7cb-4728-b473-6b0b85f82b44` | 53 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=7d1c4551-e7cb-4728-b473-6b0b85f82b44 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man at the end of a long hallway freezes in realization; he stays the same size as the corridor behind him stretches away (vertigo effect).
```

Use it as: upload a start image that matches the scene, select motion preset **Dolly Zoom In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Dolly forward while zooming out (Hitchcock / vertigo) · **Best use:** Vertigo, shock, realization · **Models:** — · **Phrase/template:** "Dolly Zoom In — subject stays size as background rushes away" · image: "Dolly zoom effect on [img 1]. The background mountains appear to warp and grow larger while she stays the same size. Vertigo effect." · **Tips:** One move only; do not stack with a pan

## Related presets

- **Same category (Camera · dolly & push):** [Dolly In](dolly-in.md), [Dolly Left](dolly-left.md), [Dolly Out](dolly-out.md), [Dolly Right](dolly-right.md), [Dolly Zoom Out](dolly-zoom-out.md), [Double Dolly](double-dolly.md), [Super Dolly In](super-dolly-in.md), [Super Dolly Out](super-dolly-out.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/6b58a12d-5c62-42f6-9fa0-145e6f44aacc.webp (320×182)
- Card preview, variant `7d1c4551`: https://d1xarpci4ikg0w.cloudfront.net/3e5856da-c50a-4465-bb0d-abe2e2405bb2.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/2b7775e5-d852-444b-a603-6c834b0a9019 | https://static.higgsfield.ai/2b7775e5-d852-444b-a603-6c834b0a9019.mp4 | https://static.higgsfield.ai/2b7775e5-d852-444b-a603-6c834b0a9019.webp | https://d1xarpci4ikg0w.cloudfront.net/b98ca7b7-c429-494d-905b-0240f427f839.webp (320×180) |
| 2 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/9c61bd98-899c-4e4c-962b-8ef1addcb050 | https://static.higgsfield.ai/9c61bd98-899c-4e4c-962b-8ef1addcb050.mp4 | https://static.higgsfield.ai/9c61bd98-899c-4e4c-962b-8ef1addcb050.webp | https://d1xarpci4ikg0w.cloudfront.net/3df7bd17-e3f0-43b4-b29b-56615e9bf40f.webp (320×180) |
| 3 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/917bfa32-06fc-4ed8-9237-50ea2c7708da | https://static.higgsfield.ai/917bfa32-06fc-4ed8-9237-50ea2c7708da.mp4 | https://static.higgsfield.ai/917bfa32-06fc-4ed8-9237-50ea2c7708da.webp | https://d1xarpci4ikg0w.cloudfront.net/9b00373a-5d41-4654-88d5-d3fadae9cf56.webp (320×486) |
| 4 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/a2aef105-c845-432f-b5f0-5d11160dd825 | https://static.higgsfield.ai/a2aef105-c845-432f-b5f0-5d11160dd825.mp4 | https://static.higgsfield.ai/a2aef105-c845-432f-b5f0-5d11160dd825.webp | https://d1xarpci4ikg0w.cloudfront.net/80c45b33-01ad-448f-a331-182e0d1511f8.webp (320×424) |
| 5 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/fbe6172b-8261-4b2c-bc7e-2482de64ed4b | https://static.higgsfield.ai/fbe6172b-8261-4b2c-bc7e-2482de64ed4b.mp4 | https://static.higgsfield.ai/fbe6172b-8261-4b2c-bc7e-2482de64ed4b.webp | https://d1xarpci4ikg0w.cloudfront.net/c8ad89db-8d82-4ed6-be01-e16aaf55b125.webp (320×486) |
| 6 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/a8c7cde8-87eb-479d-8d90-30663cfbeb77 | https://static.higgsfield.ai/a8c7cde8-87eb-479d-8d90-30663cfbeb77.mp4 | https://static.higgsfield.ai/a8c7cde8-87eb-479d-8d90-30663cfbeb77.webp | https://d1xarpci4ikg0w.cloudfront.net/69f0e74e-577e-497b-af96-37ea4480f4fc.webp (320×182) |
| 7 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/845f35f6-b239-4b8d-a469-1824f707d79c | https://static.higgsfield.ai/845f35f6-b239-4b8d-a469-1824f707d79c.mp4 | https://static.higgsfield.ai/845f35f6-b239-4b8d-a469-1824f707d79c.webp | https://d1xarpci4ikg0w.cloudfront.net/495d54fb-3418-493b-bba3-3de07a74ef98.webp (320×486) |
| 8 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/df854b86-96d2-4b80-b3df-30da7006ed1b | https://static.higgsfield.ai/df854b86-96d2-4b80-b3df-30da7006ed1b.mp4 | https://static.higgsfield.ai/df854b86-96d2-4b80-b3df-30da7006ed1b.webp | https://d1xarpci4ikg0w.cloudfront.net/d965539e-46c5-4daf-a967-55b1ffda2a99.webp (320×242) |
| 9 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/4aa40025-09b4-4534-8eb3-2cc93ce19c96 | https://static.higgsfield.ai/4aa40025-09b4-4534-8eb3-2cc93ce19c96.mp4 | https://static.higgsfield.ai/4aa40025-09b4-4534-8eb3-2cc93ce19c96.webp | https://d1xarpci4ikg0w.cloudfront.net/bfe0218f-4aae-4ac1-9758-e34a585caf5d.webp (320×210) |
| 10 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/10b2c55e-a7cb-4916-9f18-2179d8416e39 | https://static.higgsfield.ai/10b2c55e-a7cb-4916-9f18-2179d8416e39.mp4 | https://static.higgsfield.ai/10b2c55e-a7cb-4916-9f18-2179d8416e39.webp | https://d1xarpci4ikg0w.cloudfront.net/6b5c8643-fa31-4f03-9dd6-e666f1f521c1.webp (320×210) |
| 11 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/af7663b1-0957-43f7-a61b-78a8bf8c8119 | https://static.higgsfield.ai/af7663b1-0957-43f7-a61b-78a8bf8c8119.mp4 | https://static.higgsfield.ai/af7663b1-0957-43f7-a61b-78a8bf8c8119.webp | https://d1xarpci4ikg0w.cloudfront.net/9cf5da74-0a3e-4f2b-9fdc-d7a943c6bc5c.webp (320×424) |
| 12 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/7532bde7-adf8-4cee-8ceb-a790d2e85281 | https://static.higgsfield.ai/7532bde7-adf8-4cee-8ceb-a790d2e85281.mp4 | https://static.higgsfield.ai/7532bde7-adf8-4cee-8ceb-a790d2e85281.webp | https://d1xarpci4ikg0w.cloudfront.net/2c928b3e-2043-47de-ba10-e800582a213c.webp (320×210) |
| 13 | https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/08c37c84-d2af-4998-bddb-96621a45ff69 | https://static.higgsfield.ai/08c37c84-d2af-4998-bddb-96621a45ff69.mp4 | https://static.higgsfield.ai/08c37c84-d2af-4998-bddb-96621a45ff69.webp | https://d1xarpci4ikg0w.cloudfront.net/f56cd2c5-17be-49d4-8448-1ec7dca3d8b2.webp (320×242) |

Source pages: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3, https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44. Crawled 2026-09.


## Real sample prompts (site)

13 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `08c37c84-d2af-4998-bddb-96621a45ff69`** (priority 12) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ca6b5355-7e4b-46be-8407-020b2e93bc7f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0cde2643-8d94-4358-a671-f556eab4791a.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/08c37c84-d2af-4998-bddb-96621a45ff69

```text
The camera starts in a tight medium shot, framing both players in the foreground. As the shot progresses, the camera pushes in slowly — a controlled dolly movement — focusing on their faces as expressions of joy, frustration, and competitive energy shift with each button press. The clutter on the table sharpens in detail, snack bags crinkling and a red glass glowing as the sunlight catches it. The background remains soft and warm, with the cat painting subtly watching over the scene.

The atmosphere is playful and inviting, evoking themes of friendship, competition, and comfort. The visual style embraces warm, saturated tones, with golden light enhancing the cozy yet dynamic vibe of the moment. The steady camera movement amplifies their focus, drawing the viewer into the energy of their game.
```

- **Sample `7532bde7-adf8-4cee-8ceb-a790d2e85281`** (priority 11) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/24d866c6-3c7d-459b-a28c-8ab81e2fd5ba.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5fd1e26d-1bcf-4b2d-a3c2-e12414df40bd.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/7532bde7-adf8-4cee-8ceb-a790d2e85281

```text
The camera begins wide, showcasing the entire car and its occupants framed against the backdrop of warm, golden lighting. As the dolly zoom-in begins, the background expands outward, creating a sense of spacious depth, while the subjects remain sharp and commanding in the frame. The focal point narrows to the woman in the foreground — her poised stare magnetic, her detailed patchwork dress glowing in the light. The car’s chrome accents and vintage details reflect subtle flickers of warm tones as the visual compression heightens the power of their collective presence.

The scene exudes a sense of unity, elegance, and quiet defiance — as though the group is poised at the threshold of something significant. The dolly zoom intensifies this feeling, warping perception while the group’s unwavering confidence dominates the frame. 
```

- **Sample `af7663b1-0957-43f7-a61b-78a8bf8c8119`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ca80e3b2-0635-4572-b854-86231d83ae0b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1c1c8083-2b86-4f99-9604-a38ca4a2798b.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/af7663b1-0957-43f7-a61b-78a8bf8c8119

```text
The camera starts wide, capturing the full expanse of the room — the tiles, the towel, and the unsettling contrast of color and tone. As the camera begins its slow dolly-in, the woman’s stitched spine becomes the grim focal point, each knot of thread sharp and defined. 

The atmosphere is clinical yet deeply unsettling, evoking themes of vulnerability, dominance, and an ambiguous sense of ritual or power. The visual style is stark and precise, with the contrast between the sterile tiles and the rich blue robe amplifying the tension — a confrontation between cold detachment and calculated control.
```

- **Sample `10b2c55e-a7cb-4916-9f18-2179d8416e39`** (priority 9) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/15b7a075-4bcc-41a4-b9a2-1ff679fde36b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f0dc2661-74b3-4846-9bdf-11dc80844986.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/10b2c55e-a7cb-4916-9f18-2179d8416e39

```text
The camera starts wide, framing the entire scene — laughter, movement, and energy filling the dimly lit room. As the dolly zoom-in begins, the chaotic background recedes into a distorted blur, while the two women sharply pull into focus. The shimmering reflections on the bottles intensify, and their playful yet commanding expressions lock the viewer in. The atmosphere is lively yet intimate, as if the viewer is drawn directly into their world — a fleeting, intoxicating moment of indulgence and charm.
```

- **Sample `4aa40025-09b4-4534-8eb3-2cc93ce19c96`** (priority 8) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5128aa01-2849-4160-9600-6864af87da16.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b228ee6f-486a-40b3-9fef-9773e2b5fa26.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/4aa40025-09b4-4534-8eb3-2cc93ce19c96

```text
The camera begins wide, showcasing the luxurious yet confined space. As the dolly zoom-in commences, the crimson curtains blur and warp outward, creating a tunnel effect that isolates the woman in sharp focus. The blue floral details on her gown shimmer with intensified clarity as her gaze locks onto the camera — confident, powerful, and enigmatic. The narrowing of the visual space emphasizes her command over the frame, heightening the feeling of intimacy and allure.
```

- **Sample `df854b86-96d2-4b80-b3df-30da7006ed1b`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/88fecd91-08f9-415d-80de-5ffd7c925a22.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e9398bba-e034-413f-89b6-43f633cea856.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/df854b86-96d2-4b80-b3df-30da7006ed1b

```text
The camera starts with a tight shot of their fingers pressing into the scalp, nails catching the light. As the dolly zoom-in begins, the background — a blurred, golden field — pulls away dramatically, creating an unsettling sense of tension. The intricate details of the tattoo become more pronounced, its sharp lines and textured shading seeming to pulse with energy. The metallic glint of the rings and nails intensifies, adding an aura of power and control. The moment feels suspended — a mix of focus, defiance, and enigmatic strength.
```

- **Sample `845f35f6-b239-4b8d-a469-1824f707d79c`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/46953660-237a-46f7-9382-7c02f8a02d83.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b7073d00-27f7-4ac7-91b1-a069cd2b0154.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/845f35f6-b239-4b8d-a469-1824f707d79c

```text
The camera starts wide, capturing the chaotic yet controlled energy of the group. As the dolly zoom-in begins, the background warps and stretches while the man’s face looms larger, his sharp expression filling the frame. The smoke thickens, blurring the figures in the back, making them appear like distant shadows. The gold details of his teeth and jewelry shine intensely, creating a striking contrast against the grimy street atmosphere. The tension crackles — raw, bold, and unrelenting. 
```

- **Sample `a8c7cde8-87eb-479d-8d90-30663cfbeb77`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c07ca268-9fd4-49c0-b603-effa16ab9c8b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/9d5e2129-bab8-4ffb-8fa3-bee12d0383a9.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/a8c7cde8-87eb-479d-8d90-30663cfbeb77

```text
The camera starts close, focusing on the rich details of his outfit — the shimmering diamonds, the texture of the fur, and the bold leopard print. As the dolly zoom-in begins, the background expands and the warm golden hue deepens, pulling the viewer into his world. The man’s face dominates the frame, exuding an aura of grandeur and self-assured power. His outstretched arms create a feeling of presence, as though he’s welcoming the world to witness his moment.

The combination of rich textures, bold fashion, and the mesmerizing dolly zoom effect amplifies the visual impact — a portrait of confidence, charisma, and command. 
```

- **Sample `fbe6172b-8261-4b2c-bc7e-2482de64ed4b`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eaedd546-8e19-4010-b4c1-9ecea237fae1.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/d2b03fa3-6b19-42f1-9a7e-22ef5c7b9bcf.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/fbe6172b-8261-4b2c-bc7e-2482de64ed4b

```text
The camera begins low, creeping forward in a slow dolly zoom-in. The background, cold and clinical, expands as the figures seem to loom closer, their presence growing more imposing. The glossy helmets reflect fragmented distortions of the room’s pale fluorescent lights, warping the environment into something fractured and hostile.

The tension builds — each creak of leather, each glint of metal heightened by the visual compression. The figure in the foreground tilts their head slightly, as if detecting movement — their gaze, hidden behind the opaque visor, seems to pierce directly through the camera. The shot feels claustrophobic, a slow march toward inevitable confrontation.
```

- **Sample `a2aef105-c845-432f-b5f0-5d11160dd825`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 832×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/eeee61d6-a721-49a5-842e-0f858c208a90.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/adc6ea32-923f-489b-bf3b-b033ea29f925.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/a2aef105-c845-432f-b5f0-5d11160dd825

```text
The camera begins wide, framing her in a softly lit lounge with dark blue walls. Above her, a wooden shelf holds small candles and a painting of red flowers. The warm glow from a distant light source casts a golden hue on her face, contrasting with the cooler tones of the room.

The dolly zoom-in begins — as her face slowly fills the frame, the background warps and stretches subtly. The red flowers in the painting blur outward like bleeding petals, the candles appear to flicker in slow motion. Her gaze sharpens, her lips part just slightly, as if on the verge of speaking — or revealing something she’s kept hidden. The tension lingers in her stillness, a quiet storm gathering behind her eyes.
```

- **Sample `917bfa32-06fc-4ed8-9237-50ea2c7708da`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/618ae113-9cb8-4433-adb9-ebb5df325155.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f0849a1c-b751-461d-9ef4-fc0d81954e89.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/917bfa32-06fc-4ed8-9237-50ea2c7708da

```text
The camera begins with a wide shot, capturing the entire park scene — empty benches, scattered leaves, and distant figures walking along sunlit pathways. As the dolly zoom-in initiates, the background stretches and distorts, pulling her forward in the frame. Her stillness contrasts with the shifting world behind her — benches seem to recede, trees stretch skyward, and sunlight flickers with an unnatural sharpness.

The camera closes in until her face dominates the screen — her lips pressed tight, her expression frozen between defiance and fragility. The leather bag’s texture sharpens, its creases resembling scars. The air feels heavy with something unsaid, lingering just beyond the frame. 
```

- **Sample `9c61bd98-899c-4e4c-962b-8ef1addcb050`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/766a3765-d6bc-4777-a2e9-c50e58dc1fe5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/a04b25f0-a6a2-43ee-a272-74b42f2e8334.mp4
  - page: https://higgsfield.ai/motion/114245a3-93fb-434a-9299-44ca9e4656a3/9c61bd98-899c-4e4c-962b-8ef1addcb050

```text
A blonde woman in a sleek black sleeveless top and dark sunglasses sits at an outdoor café table, gripping a half-eaten pastry in her gloved hand. A silver necklace glints softly around her neck. Her expression is calm yet distant — her lips pressed tightly, her gaze hidden behind her dark lenses. The city street behind her bustles with movement — a vintage blue car idles nearby, pedestrians pass, and soft, warm lights flicker from inside a café window.

The camera starts wide, capturing her within the layered cityscape — cars, shops, and strangers weaving through the frame. As the dolly zoom-in begins, her figure swells in the frame while the street behind her stretches away — distant figures blurring and drifting backward. The café lights seem to flicker colder, and the warmth of the scene fades as her presence grows heavier. Her face, once poised, now feels more calculated — a silent tension building beneath her still expression.

The atmosphere is composed yet quietly foreboding, evoking themes of control, secrecy, and unease. The visual style is naturalistic, with warm tones in the background contrasting against her stark black attire. The dolly zoom amplifies her presence, transforming the casual street-side scene into something unsettling — as though she’s waiting for something, or someone, to make the first move.
```

- **Sample `2b7775e5-d852-444b-a603-6c834b0a9019`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f1ff95f4-1fc0-4a68-bd79-3d23ac566b3d.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b5c7f650-883f-432b-a76c-4a8224c3631e.mp4
  - page: https://higgsfield.ai/motion/7d1c4551-e7cb-4728-b473-6b0b85f82b44/2b7775e5-d852-444b-a603-6c834b0a9019

```text
A young woman in a striking red dress stands alone in a vast field of rolling green hills beneath a deep twilight sky. The moon hangs directly above her, glowing with an ethereal brightness that casts a faint silver sheen across the landscape. Her face is calm yet contemplative, her gaze distant as she stands motionless against the expansive scenery. Wisps of clouds drift slowly across the sky, their shapes curling like brushstrokes in the fading light.

The camera begins with a wide shot, low angle, capturing her as a small figure within the open landscape. As the dolly zoom-in commences, her presence steadily expands in the frame while the surrounding hills appear to stretch and recede, creating an unsettling yet hypnotic distortion of space. The crimson of her dress contrasts sharply with the cool tones of the night sky and the rich green grass, drawing the viewer’s focus irresistibly toward her.

The atmosphere is surreal and meditative, evoking themes of solitude, introspection, and cosmic insignificance. The visual style is crisp and dreamlike, with deep shadows and saturated colors enhancing the sense of quiet tension as the dolly zoom steadily pulls the viewer closer. 
```
