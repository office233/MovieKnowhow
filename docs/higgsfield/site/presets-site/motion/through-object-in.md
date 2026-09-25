# Through Object In — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** Moves the camera inward through an object to focus on the subject behind it. Perfect for creative reveals and smooth, immersive transitions.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 4
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb | `2b353671-da2e-4c9e-841d-b7af200ceadb` | 45 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=2b353671-da2e-4c9e-841d-b7af200ceadb |
| https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520 | `ae7a6c18-0db0-4c17-817b-fe73b10da520` | 87 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=ae7a6c18-0db0-4c17-817b-fe73b10da520 |
| https://higgsfield.ai/motion/7fd00618-aa73-4fae-adb7-98ed16773eaa | `7fd00618-aa73-4fae-adb7-98ed16773eaa` | -334 | none | none published (empty `settings`); model Wan 2.5 | https://higgsfield.ai/ai/video?model=wan2_5_video&presetMotionId=7fd00618-aa73-4fae-adb7-98ed16773eaa |
| https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd | `1e970d8b-74a3-4af7-a84c-6ae33830c1fd` | -250 | none | none published (empty `settings`); model Minimax Hailuo 2.3 | https://higgsfield.ai/ai/video?model=minimax-2.3&presetMotionId=1e970d8b-74a3-4af7-a84c-6ae33830c1fd |

Round 2 (non-sitemap pages): 2 more variant(s) of this name run on a different model: Wan 2.5 — family `wan2_5_video`, Generate button opens `/ai/video?model=wan2_5_video&presetMotionId=<id>` (the page's samples block reports model `wan2_5_video`); Minimax Hailuo 2.3 — family `minimax`, Generate button opens `/ai/video?model=minimax-2.3&presetMotionId=<id>` (the page's samples block reports model `minimax_hailuo`). These pages publish no settings. Their community publications carry 3 user prompt(s), listed verbatim under Preview media.

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
The camera pushes through the leaves of a hedge to reveal a couple dancing in a secret garden.
```

Use it as: upload a start image that matches the scene, select motion preset **Through Object In**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera passes through a narrow object into a new space · **Best use:** Reveal secrets, creative transition · **Models:** "Camera glides Through Object In — through the keyhole into the dusty study" · **Phrase/template:** C1

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/5f8bba0a-5214-4f15-a430-56d28406ac92.webp (320×254)
- Card preview, variant `ae7a6c18`: https://d1xarpci4ikg0w.cloudfront.net/e064ec58-6932-486e-9899-c7a7a3057b87.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/8991674c-b083-41b0-b08f-1cea15afe394 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.mp4 | https://static.higgsfield.ai/8991674c-b083-41b0-b08f-1cea15afe394.webp | https://d1xarpci4ikg0w.cloudfront.net/0bd42f35-ac27-4d5e-81a9-814a271ddf85.webp (320×180) |
| 2 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/9de79919-6afe-4f2c-851f-194f1df3714b | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.mp4 | https://static.higgsfield.ai/9de79919-6afe-4f2c-851f-194f1df3714b.webp | https://d1xarpci4ikg0w.cloudfront.net/ef9bf805-e414-4858-8f81-87185eed0139.webp (320×132) |
| 3 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/6cadca24-7d44-49d4-a0dd-429926708a75 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.mp4 | https://static.higgsfield.ai/6cadca24-7d44-49d4-a0dd-429926708a75.webp | https://d1xarpci4ikg0w.cloudfront.net/275a4cb9-b7b2-4f34-a2db-d8eb9dc963ac.webp (320×174) |
| 4 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ded68630-a55f-4bde-a7d1-5a5190cc15e2 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.mp4 | https://static.higgsfield.ai/ded68630-a55f-4bde-a7d1-5a5190cc15e2.webp | https://d1xarpci4ikg0w.cloudfront.net/e5edd7fb-855a-4d95-a5fd-bef1714a74d3.webp (320×242) |
| 5 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/1de648d1-dc77-4460-a258-345e60c3b6f8 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.mp4 | https://static.higgsfield.ai/1de648d1-dc77-4460-a258-345e60c3b6f8.webp | https://d1xarpci4ikg0w.cloudfront.net/d422f549-1cc5-4096-a03e-2712567c3483.webp (320×182) |
| 6 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/432d5b5c-f065-4d59-bb2f-fce673b55aeb | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.mp4 | https://static.higgsfield.ai/432d5b5c-f065-4d59-bb2f-fce673b55aeb.webp | https://d1xarpci4ikg0w.cloudfront.net/b0aad333-dda2-45fb-bd9e-1845ad54de03.webp (320×182) |
| 7 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/5d282128-6f18-41a6-b5da-c52b3c2075de | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.mp4 | https://static.higgsfield.ai/5d282128-6f18-41a6-b5da-c52b3c2075de.webp | https://d1xarpci4ikg0w.cloudfront.net/a42d996d-0aac-40e3-be47-325636ab11c8.webp (320×242) |
| 8 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/97d567a2-c100-48cd-87e3-eb53f1841446 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.mp4 | https://static.higgsfield.ai/97d567a2-c100-48cd-87e3-eb53f1841446.webp | https://d1xarpci4ikg0w.cloudfront.net/9bf3f60e-ea53-4b0c-afe6-a71666a9aec0.webp (320×182) |
| 9 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ccb5d386-16a7-407f-9465-1d478d24cdce | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.mp4 | https://static.higgsfield.ai/ccb5d386-16a7-407f-9465-1d478d24cdce.webp | https://d1xarpci4ikg0w.cloudfront.net/75008bcf-7f93-4120-b68d-52b685af60d4.webp (320×218) |
| 10 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ab74806f-d19a-4ff0-8833-8b98eb00b4c9 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.mp4 | https://static.higgsfield.ai/ab74806f-d19a-4ff0-8833-8b98eb00b4c9.webp | https://d1xarpci4ikg0w.cloudfront.net/9f78f945-6594-404e-8d96-cbd8c071cf38.webp (320×210) |
| 11 | https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/3095e3b6-b619-465f-87e8-e0fa02bc09d9 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.mp4 | https://static.higgsfield.ai/3095e3b6-b619-465f-87e8-e0fa02bc09d9.webp | https://d1xarpci4ikg0w.cloudfront.net/91df6ee7-a0e2-43cf-90a0-4c42f0868b07.webp (320×210) |

- Card preview, round-2 variant `7fd00618` (Wan 2.5): https://cdn.higgsfield.ai/wan2_5_motion/987bb527-6afd-4c09-9215-89914c536cff.mp4 · thumbnail https://cdn.higgsfield.ai/wan2_5_motion/f5f35522-c1b5-4009-b1df-858ac72346af.webp (600×800)
- Card preview, round-2 variant `1e970d8b` (Minimax Hailuo 2.3): https://cdn.higgsfield.ai/minimax_hailuo_motion/0012373b-47f7-4dc1-9349-1be0badc79f8.mp4 · thumbnail https://cdn.higgsfield.ai/minimax_hailuo_motion/238534d8-050b-44f5-96be-08f6fc2a2826.webp (600×800)

### Sample videos, round-2 variant `7fd00618` (Wan 2.5) (3 listed; the page loads more on scroll)

Community publications shown on the page (user generations with this preset; prompt copied verbatim, empty = none typed):

| # | Output MP4 | Input image | Model · duration · resolution | Prompt (verbatim) |
|---|---|---|---|---|
| 1 | https://cdn.higgsfield.ai/user_309aC2afXq3AoRo5kggIaZqZuMv/88ba6a4f-a400-4d13-8750-e85a3892b8dc_min.mp4 | https://d8j0ntlcm91z4.cloudfront.net/user_309aC2afXq3AoRo5kggIaZqZuMv/78754b57-048b-4a59-9365-9a1a9806f969.png | wan2_5_video · 10 s · 1080p · 5120×2880 | A sharply dressed young man in a black suit and white shirt sits thoughtfully on a vintage, worn leather armchair with visible tears on the cushion, his right hand resting near his chin and left hand relaxed on his lap, his expression serious and composed as he looks forward. The background reveals a warm terracotta-hued wall illuminated by a shaft of sunlight forming a clear geometric pattern. The camera moves fast straight forward through a circular aperture in the foreground, the edges of the aperture leaving the frame quickly as the scene opens into a spacious, quietly lit room with wooden furniture subtly blurred in the background, adding depth and texture. The young man remains still at normal speed, bathed in soft natural light highlighting his features and the texture of his clothes and chair, creating a cinematic atmosphere of quiet intensity. |
| 2 | https://cdn.higgsfield.ai/user_309aC2afXq3AoRo5kggIaZqZuMv/fb9c339b-d876-4413-a8c1-a0dec7da4513_min.mp4 | https://d8j0ntlcm91z4.cloudfront.net/user_309aC2afXq3AoRo5kggIaZqZuMv/eda93ddf-98d7-4ede-b6af-396caa771f69.png | wan2_5_video · 10 s · 1080p · 2048×1152 | The camera moves fast straight forward, flying through a smooth keyhole-shaped opening, leaving the edges of the door frame behind as it reveals a clear view of a man in a sleek black suit with white cuffs, seated on and leaning against a vintage brown leather chair inside a cozy room with a deep red wall and soft curtain light filtering in. The man rests his chin thoughtfully on his hand, his dark hair slicked back and his expression concentrated and serene as he remains still at normal speed. Brightly colored butterflies flutter gently near the chair, adding delicate, natural movement to the warm, intimate interior scene lit by soft, warm light casting subtle shadows. The camera continues past the keyhole, fully unveiling the scene beyond the narrow doorway. |
| 3 | https://cdn.higgsfield.ai/user_2woJMxSXFH2QGGlMdyBq7q6ld4K/f87bd88f-588f-4f6d-a37d-085132fc8fa4_min.mp4 | https://d2ol7oe51mr4n9.cloudfront.net/anon_user_id/c14940ff-c82b-4619-8b45-7e121bb1636c.jpg | wan2_5_video · 5 s · 1080p · 2048×1536 | A young woman with long black hair and expressive glasses stands confidently within a large circular frame, wearing a white cropped tank top, dark blue cargo jeans, and colorful sneakers, adorned with chunky jewelry including a necklace, bracelet, and earrings, she moves her hands at normal speed adjusting her pants' belt. The camera moves fast straight forward through the circular frame, passing it to reveal a softly gradient pastel background with hues of pink, purple, and blue, the circular frame leaving the frame as the camera advances, capturing a clear view of the fashionably styled subject standing still at normal speed in a bright, modern studio setting illuminated by smooth, diffused lighting enhancing the colors and textures. |

### Sample videos, round-2 variant `1e970d8b` (Minimax Hailuo 2.3) (10)

| # | Sample page | MP4 | Size |
|---|---|---|---|
| 1 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/19604c66-80aa-48ff-8773-5016e09ad48b | https://cdn.higgsfield.ai/minimax_hailuo_sample/19604c66-80aa-48ff-8773-5016e09ad48b.mp4 | 1080×1080 |
| 2 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/c6ffc9e0-135c-43ae-ae7e-5a7c44d7b7e2 | https://cdn.higgsfield.ai/minimax_hailuo_sample/c6ffc9e0-135c-43ae-ae7e-5a7c44d7b7e2.mp4 | 1080×1438 |
| 3 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/c75b35e4-a665-4a5d-a0dc-0207b120d108 | https://cdn.higgsfield.ai/minimax_hailuo_sample/c75b35e4-a665-4a5d-a0dc-0207b120d108.mp4 | 1080×1620 |
| 4 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/625a9384-2342-4263-8179-cc943bcc55b4 | https://cdn.higgsfield.ai/minimax_hailuo_sample/625a9384-2342-4263-8179-cc943bcc55b4.mp4 | 1080×1438 |
| 5 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/99e92b46-461d-4bfd-988b-77d5f56924e9 | https://cdn.higgsfield.ai/minimax_hailuo_sample/99e92b46-461d-4bfd-988b-77d5f56924e9.mp4 | 1620×1080 |
| 6 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/1edce2a3-f4eb-4d99-859b-3effffc1565a | https://cdn.higgsfield.ai/minimax_hailuo_sample/1edce2a3-f4eb-4d99-859b-3effffc1565a.mp4 | 1152×768 |
| 7 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/335b95a3-0697-4ba2-847a-7691a70918f4 | https://cdn.higgsfield.ai/minimax_hailuo_sample/335b95a3-0697-4ba2-847a-7691a70918f4.mp4 | 768×1152 |
| 8 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/aa5caeb3-3112-4b95-9366-0ea10dc89212 | https://cdn.higgsfield.ai/minimax_hailuo_sample/aa5caeb3-3112-4b95-9366-0ea10dc89212.mp4 | 1080×1620 |
| 9 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/430b1b72-6a5e-453a-9f78-b3b67a2afbc6 | https://cdn.higgsfield.ai/minimax_hailuo_sample/430b1b72-6a5e-453a-9f78-b3b67a2afbc6.mp4 | 1080×1620 |
| 10 | https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd/8983265d-e738-4ef2-8f23-74eac030adba | https://cdn.higgsfield.ai/minimax_hailuo_sample/8983265d-e738-4ef2-8f23-74eac030adba.mp4 | 1080×1438 |

Source pages: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb, https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520, https://higgsfield.ai/motion/7fd00618-aa73-4fae-adb7-98ed16773eaa, https://higgsfield.ai/motion/1e970d8b-74a3-4af7-a84c-6ae33830c1fd. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `3095e3b6-b619-465f-87e8-e0fa02bc09d9`** (priority 10) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f8051883-b8b0-4559-a7e6-0543a97a0dfc.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c2f3ece1-720f-4a53-9c2a-ed08c6e2bc6f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/3095e3b6-b619-465f-87e8-e0fa02bc09d9

```text
The camera follows tightly behind a white ice cream van decorated with colorful cartoon images of ice cream cones and popsicles, riding straight down a city street. Motion blur intensifies the sense of rapid movement, the van swerving slightly as it races forward. Suddenly, in one seamless, sharp move, the camera accelerates and flies forward fast, phasing straight through the van’s closed doors. Instantly, the inside of the van is revealed: a dark, neon-lit interior filled with several serious-looking special forces soldiers, clad in tactical armor with bright graffiti-style emblems on their gear, sitting sternly in two rows facing each other, gripping weapons, their expressions tense and focused under the pulsating colored lights.

```

- **Sample `ab74806f-d19a-4ff0-8833-8b98eb00b4c9`** (priority 9) — Wan 2.5 motion preset, steps=33, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c08ef5df-1cbc-4802-8ee9-56bf97c9baef.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c7ea1b64-f4f6-4f74-91a4-07cabe30633f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/ab74806f-d19a-4ff0-8833-8b98eb00b4c9

```text
The camera swiftly moves forward, spiraling smoothly through a glossy, surreal blue tunnel reflecting distorted shapes and vibrant colors. As it moves deeper, reflections grow sharper, revealing a glamorous woman elegantly posed in a vibrant yellow latex bodysuit, lounging gracefully while holding a transparent handbag filled with colorful spheres. The camera exits the tunnel in a fluid motion, seamlessly transitioning into a crystal-clear close-up, capturing the bold details of the woman’s striking makeup and intense expression under vivid, editorial lighting.
```

- **Sample `ccb5d386-16a7-407f-9465-1d478d24cdce`** (priority 8) — Wan 2.5 motion preset, steps=50, frames=81, strength=1, guide_scale=5.5, output video 1152×784
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cc53c6b3-0ef9-4915-90d2-ec32c54b4fed.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/fb6563dd-6f4e-46c4-8ffa-31ca696ee43a.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/ccb5d386-16a7-407f-9465-1d478d24cdce

```text
Camera swiftly executes a dynamic “through object in” movement, starting from an artistic scene featuring a young man lounging stylishly on vivid red stairs, dressed casually with sunglasses, boots, and a relaxed pose. Accelerating forward, the camera moves sharply through the staircase structure, seamlessly transitioning into an electrifying, surreal fashion editorial scene. Revealed are three bold, fashionably styled individuals surrounded by vivid, colorful props and eccentric decor, their striking makeup and eclectic attire amplifying a dynamic atmosphere rich in avant-garde creativity and dramatic contrasts.
```

- **Sample `97d567a2-c100-48cd-87e3-eb53f1841446`** (priority 7) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/b0b55a07-047d-4832-93ac-878d7020e458.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/5c04d012-960c-4b76-9876-82d1e1a6d89a.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/97d567a2-c100-48cd-87e3-eb53f1841446

```text
An old wood-framed CRT television displays a grainy music video of a rapper in a black hoodie and gold chains performing under colorful stage lights. The camera pushes forward toward the screen, then seamlessly passes through the glass, transitioning into a vivid 1990s-style rap video world. Inside, multiple men in oversized streetwear, bucket hats, and chains flex and rap in sync, surrounded by boomboxes, and graffiti-covered walls. The camera flows with dynamic handheld close-ups. The atmosphere is raw and hyped, soaked in analog warmth. Styling is pure 90s hip-hop VHS aesthetic with scanlines, light film grain, and colorful lens flares.
```

- **Sample `5d282128-6f18-41a6-b5da-c52b3c2075de`** (priority 6) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/513538da-26ad-46dd-bb30-296910a20877.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/56b7c1da-d205-46c6-a175-7ec5aa63801f.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/5d282128-6f18-41a6-b5da-c52b3c2075de

```text
A glamorous woman in a 1950s-style polka dot dress stands behind a tall windowpane, performing in front of a retro microphone on a dimly lit soundstage. Two warm spotlights glow behind her, casting soft shadows. The camera moves through the glass, the lens refocuses on her glowing face—she smiles confidently and delivers a playful wink directly into the camera. The motion is smooth and deliberate, with soft rack focus and subtle lens distortion. The atmosphere is nostalgic and intimate, evoking golden-era jazz club vibes. Styling reflects mid-century elegance with tungsten lighting, sepia undertones, and classic Hollywood softness.
```

- **Sample `432d5b5c-f065-4d59-bb2f-fce673b55aeb`** (priority 5) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d04a4092-7831-4b48-9580-7212f7873cee.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6d51a6ab-0fdb-4e39-83a4-36489df82931.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/432d5b5c-f065-4d59-bb2f-fce673b55aeb

```text
A man in a white and orange long-sleeve shirt, jeans, and thick gold chains stands behind rusty prison bars, bathed in moody, directional overhead light. The camera slowly pushes forward through the metal bars, narrowing focus as it gets closer, until it stops in a tight close-up of the man’s face as puts his fingers to his temple. One continuous take with shallow depth of field and slight handheld shake for realism. The atmosphere is gritty, introspective, and raw. Styling is cinematic urban realism with dark shadows, warm tungsten tones, and a focus on emotional performance.
```

- **Sample `1de648d1-dc77-4460-a258-345e60c3b6f8`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/968dbc83-18da-4223-b719-3dbb80719805.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8eac1630-465e-4689-bd43-0abba61ad6bf.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/1de648d1-dc77-4460-a258-345e60c3b6f8

```text
camera passes through the holographic screen as a the music producer makes beats, smoke in the room
```

- **Sample `ded68630-a55f-4bde-a7d1-5a5190cc15e2`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×832
  - input image: https://d1xarpci4ikg0w.cloudfront.net/853fee76-7db1-4d11-be06-a2d432eb4ba6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/871db247-e812-47dd-b0ae-76236efc9c2a.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/ded68630-a55f-4bde-a7d1-5a5190cc15e2

```text
A well-dressed man in a sharp blue suit stands behind layers of reflective glass or acrylic panels, each fragment mirroring his movement. The camera slowly pushes through the layered reflections, capturing refracted duplicates of his face and hands, until it emerges into a clear view. The man gently touches the vintage microphone in front of him, pausing with serene focus as the lens centers on his face in a crisp medium close-up. Light sparkles off the surrounding surfaces, adding subtle shimmer to the frame. The atmosphere is intimate and poised, with soft cool lighting and echo-like visual symmetry. Styling evokes refined contemporary performance aesthetics with modern stage minimalism and light optical distortion.
```

- **Sample `6cadca24-7d44-49d4-a0dd-429926708a75`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1296×704
  - input image: https://d1xarpci4ikg0w.cloudfront.net/53695dad-c505-47ad-bc5c-b379e0af447f.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ef17ee63-2570-46c4-b833-5150ff3c04d0.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/6cadca24-7d44-49d4-a0dd-429926708a75

```text
The camera passes through a tiny, distorted peephole, revealing a man standing just beyond the door. His wide grin stretches beneath large, round glasses, his neatly pressed suit catching the glow of the afternoon sun. The fisheye distortion melts away, revealing the scene beyond the door in full clarity. The man’s smile is frozen in place—too wide, too perfect—as he stands motionless on the street. The warm sunlight flickers against the sidewalk, a soft breeze rustling the trees.

Behind him, the street is alive—cars passing, people walking, a dog barking in the distance. The normalcy of the world around him contrasts sharply with his unnerving stillness. His eyes, now fully in focus, seem locked onto the door, locked onto us, as if he knows someone is watching.

The camera lingers, the weight of an unspoken moment settling in the air
```

- **Sample `9de79919-6afe-4f2c-851f-194f1df3714b`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1472×608
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e188ed6e-88c9-499b-a412-972d07c9006c.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/0f1276d6-bfae-4004-ba2e-764f5fe2d22e.mp4
  - page: https://higgsfield.ai/motion/ae7a6c18-0db0-4c17-817b-fe73b10da520/9de79919-6afe-4f2c-851f-194f1df3714b

```text
A sterile, dimly lit hospital corridor, the hum of fluorescent lights casting a cold glow. The camera passes through the window. The distortion of the glass fades, bringing clarity to the scene inside. Beyond the glass, a lone figure walks away, his posture heavy, his pace slow.

The soft shuffle of footsteps echoes in the empty hall. The man, dressed in a muted jacket, keeps his head slightly down, his shoulders subtly slumped. The surrounding walls, painted in washed-out tones, feel oppressive, the sterile air thick with unspoken weight.

As the camera closes in, the focus sharpens on him—his breathing is slow, controlled, yet each step feels like an effort. His fingers twitch slightly at his side, as if suppressing something. The exit door looms ahead, bathed in dim light, a silent threshold between past and future. The scene lingers for a moment before he disappears around the corner, leaving behind an air of finality.
```

- **Sample `8991674c-b083-41b0-b08f-1cea15afe394`** (priority 0) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1280×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/385380b9-5795-4118-a192-4520f37b36b6.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/6f5fd33c-5d77-415c-948c-9c94fa58f81b.mp4
  - page: https://higgsfield.ai/motion/2b353671-da2e-4c9e-841d-b7af200ceadb/8991674c-b083-41b0-b08f-1cea15afe394

```text
A cinematic black-and-white composition, where the camera passes through a sharp diamond-shaped window, framing a man in a crisp black suit and dark sunglasses. He sits cross-legged in front of a large window, his posture relaxed yet deliberate. Wisps of smoke curl from the cigarette between his fingers, diffusing in the bright backlight, casting an aura of mystery.

the camera locks onto his face, the details become intimate: the shadowed hollows of his cheeks, the faint smirk forming at the corner of his lips. The reflections in his dark lenses distort the world outside, but something flickers within them—a presence unseen, a secret untold. The smoke rises between them like a barrier, a final layer between the man and the observer, before the frame lingers in a moment of profound stillness
```
