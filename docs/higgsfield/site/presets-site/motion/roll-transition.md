# Roll Transition — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** The scene spins forward like a rolling wheel, smoothly transitioning from the start frame to the end frame. Clean, dynamic, and perfect for stylish edits or seamless scene changes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab | `8c4f184b-bccb-40ea-9c72-24793b8233ab` | -178 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8c4f184b-bccb-40ea-9c72-24793b8233ab |
| https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3 | `a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3` | -291 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The scene rolls forward like a wheel from a sunny beach (start frame) to a snowy mountain top (end frame).
```

Use it as: upload a start image that matches the scene, select motion preset **Roll Transition**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Frame rolls like a scroll · **Best for:** Artistic, playful

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7e5420cc-e526-4347-882a-54c13b1481e8.webp (320×210)
- Card preview, variant `a8e2bc3a`: https://d1xarpci4ikg0w.cloudfront.net/ab56cd44-c321-4846-ab59-df1218907609.webp

### Sample videos (7; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/ccb16971-5b18-47fa-98b1-c060773173e3 | https://static.higgsfield.ai/ccb16971-5b18-47fa-98b1-c060773173e3.mp4 | https://static.higgsfield.ai/ccb16971-5b18-47fa-98b1-c060773173e3.webp | https://d1xarpci4ikg0w.cloudfront.net/620de576-6e5a-4353-bf34-cc7c880c4886.webp (320×236) |
| 2 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3 | https://static.higgsfield.ai/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3.mp4 | https://static.higgsfield.ai/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3.webp | https://d1xarpci4ikg0w.cloudfront.net/9e64edba-c848-466d-b05d-dabf54fc5dad.webp (320×210) |
| 3 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/067df180-c287-4711-bea9-aa95d5db94ac | https://static.higgsfield.ai/067df180-c287-4711-bea9-aa95d5db94ac.mp4 | https://static.higgsfield.ai/067df180-c287-4711-bea9-aa95d5db94ac.webp | https://d1xarpci4ikg0w.cloudfront.net/d0ce2475-75bf-4940-afb7-1997ca272ebd.webp (320×320) |
| 4 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/1deac532-4ccc-4df1-8dbc-006da45d45e3 | https://static.higgsfield.ai/1deac532-4ccc-4df1-8dbc-006da45d45e3.mp4 | https://static.higgsfield.ai/1deac532-4ccc-4df1-8dbc-006da45d45e3.webp | https://d1xarpci4ikg0w.cloudfront.net/0c6b3c63-19c3-44f7-bffa-58bb7f5ab757.webp (320×210) |
| 5 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/fc69ae56-60c1-4533-ad55-7824a8ee4694 | https://static.higgsfield.ai/fc69ae56-60c1-4533-ad55-7824a8ee4694.mp4 | https://static.higgsfield.ai/fc69ae56-60c1-4533-ad55-7824a8ee4694.webp | https://d1xarpci4ikg0w.cloudfront.net/1a8e1e99-e723-4f87-b590-59478f4b3ea4.webp (320×432) |
| 6 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/30fe0b41-ccd5-4628-b1a8-8c2a942d7639 | https://static.higgsfield.ai/30fe0b41-ccd5-4628-b1a8-8c2a942d7639.mp4 | https://static.higgsfield.ai/30fe0b41-ccd5-4628-b1a8-8c2a942d7639.webp | https://d1xarpci4ikg0w.cloudfront.net/c9be52e1-8f6a-40c7-8dee-f5ca2c4e26fa.webp (320×486) |
| 7 | https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/6111b3af-fa30-4bf0-a592-c32d9b838a63 | https://static.higgsfield.ai/6111b3af-fa30-4bf0-a592-c32d9b838a63.mp4 | https://static.higgsfield.ai/6111b3af-fa30-4bf0-a592-c32d9b838a63.webp | https://d1xarpci4ikg0w.cloudfront.net/f0dadb39-6e6d-45aa-82f3-df673a5d0124.webp (320×210) |

Source pages: https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab, https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3. Crawled 2026-09.


## Real sample prompts (site)

7 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `6111b3af-fa30-4bf0-a592-c32d9b838a63`** (priority 22) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4ab91191-fb32-4385-8607-581b5397e5ca.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/39ea099f-772b-4e84-9b6c-259381620e8b.mp4
  - page: https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3/6111b3af-fa30-4bf0-a592-c32d9b838a63

```text
Aerial night shot of a glowing futuristic roundabout cityscape with vibrant red and blue lights, viewed from directly above. The camera slowly pulls back, revealing the intricate street layout and traffic patterns. Suddenly, a rapid rolling transition effect is triggered, and the scene seamlessly switches to a close-up shot of a stylish man in a leather jacket and diamond chains, standing under bright neon lights at an intersection. After the transition, the camera continues to pull back slowly, revealing the full ambiance of the street environment behind him.
```

- **Sample `30fe0b41-ccd5-4628-b1a8-8c2a942d7639`** (priority 21) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/02977a8a-b167-416d-baa9-ad8cde023925.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/26ab36ca-9ac1-4db5-9282-06cf6a360c3a.mp4
  - page: https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3/30fe0b41-ccd5-4628-b1a8-8c2a942d7639

```text
A dynamic roll transition sweeps the frame clockwise, seamlessly blending two high-energy fisheye shots of a young man skateboarding through a bustling city intersection. In the first frame, he carves through the street in oversized jeans and a black hoodie, the towering skyscrapers behind him dramatically distorted by the fisheye lens. As the camera rolls, the buildings and figure rotate with a smooth circular motion. The roll completes as the second frame locks into place — the same skater, mid-trick, now captured from a lower angle with sharper lighting and slightly different shoes, continuing his movement in a different part of the city. The distortion from the lens remains consistent, creating a surreal sense of continuity despite the change in scene. The whole moment is rendered in sharp, hyperreal urban street style, with exaggerated perspective and a seamless temporal shift.
```

- **Sample `fc69ae56-60c1-4533-ad55-7824a8ee4694`** (priority 20) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/1d9bb5dd-c541-476a-96f8-ecc753f2d972.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e5f667b3-6fa4-4103-aead-be0318afafd0.mp4
  - page: https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3/fc69ae56-60c1-4533-ad55-7824a8ee4694

```text
A confident woman in glossy black vinyl pants and a crop top extends her hand dramatically toward the camera, her fingers spread as if casting a spell. She smiles suddenly, blowing an exaggerated kiss. Instantly, a fast, disorienting rolling camera transition begins—spinning clockwise, the world blurs into motion.

As the spin resolves, we crash into the next scene: a bold female DJ bathed in electric blue lighting, hunched over her DJ controller. She's grinning wide, hair flying with the bass, hands moving with infectious energy. The lights pulse as her body sways to the beat, fully immersed in the sound.
```

- **Sample `1deac532-4ccc-4df1-8dbc-006da45d45e3`** (priority 19) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/30b16a8c-e3ba-47ca-be24-41739ec9850e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/42640cde-09dc-4353-8487-2c61476b34fe.mp4
  - page: https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/1deac532-4ccc-4df1-8dbc-006da45d45e3

```text
The camera slowly dollies backward from a neon-lit futuristic cityscape at night, thick fog rolling through the buildings glowing in pink, blue, and violet hues. Suddenly, a fast rolling transition effect sweeps across the screen, seamlessly changing the scene to a sleek, green Lamborghini in a neon-lit parking garage. The camera continues its backward dolly, while the car starts to move forward slowly through the fog, under dramatic pink lighting.

```

- **Sample `067df180-c287-4711-bea9-aa95d5db94ac`** (priority 16) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 960×960
  - input image: https://d1xarpci4ikg0w.cloudfront.net/910e9c2f-5603-46b4-956f-6e7f54529100.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/13dd1114-741b-4caa-909e-6f76dd038c47.mp4
  - page: https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3/067df180-c287-4711-bea9-aa95d5db94ac

```text
A cinematic roll rotation of the camera reveals a dramatic transformation: at first, a sleek black panther lies majestically inside a glowing red circular alcove. As the roll continues seamlessly, the panther is gradually and imperceptibly replaced by a glamorous woman in a black evening dress, reclined in the exact same position within the red alcove. The transformation is smooth and surreal, with no visible cuts or glitches, only the elegant continuity of form. The red background remains constant, enhancing the illusion. Rendered in ultra-high-definition photorealism with dramatic lighting, deep shadows, and a polished editorial aesthetic.
```

- **Sample `d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3`** (priority 13) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/bd61c10e-abec-48e5-914f-f770b8b7591e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f4c1d619-f72c-4149-afaa-2d66dba67859.mp4
  - page: https://higgsfield.ai/motion/a8e2bc3a-e78e-42aa-a0e6-79bc01141ed3/d04e70ef-281c-4d5a-bb21-ebdf5a4c4ee3

```text
A cinematic aerial shot of a fog-covered futuristic city skyline at dawn, camera slowly pulling back, the scene bathed in cold bluish tones. Suddenly, the camera performs a fast rolling transition — spinning in place — and cuts sharply to a sleek golden sports car racing through a neon-lit tunnel. The camera continues to pull back smoothly while the car drives forward in slow motion, lights reflecting on the wet ground, creating a surreal and stylish atmosphere.
```

- **Sample `ccb16971-5b18-47fa-98b1-c060773173e3`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/3c2139c8-5932-42f6-8a7e-7e9aef0ee83c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0ef89c44-3acc-4c01-889f-18d97e693d4f.mp4
  - page: https://higgsfield.ai/motion/8c4f184b-bccb-40ea-9c72-24793b8233ab/ccb16971-5b18-47fa-98b1-c060773173e3

```text
The red-lit woman exhales a powerful burst of smoke from her mouth, the thick cloud violently swirling and expanding outward. As the smoke erupts, the camera begins a rolling spin, caught in the motion of the smoke itself — disoriented but fluid. The entire frame becomes consumed in the rotating fog.
Then suddenly, as the swirl reaches its peak, we transition mid-spin to the next scene — now locked onto the girl in the colorful outfit, already crouched with intensity. The smoke from the previous frame seamlessly continues, now billowing from her pink boots. Her eyes meet the camera as if she caused it all. The motion and energy carry perfectly through the cut, giving the illusion that her power triggered the shift. It feels like one giant breath became an explosion — and she’s standing at the heart of it.
```
