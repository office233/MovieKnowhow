# Snorricam — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** music video
- **What it does (site description, verbatim):** The movement captures the rhythm of the actor’s steps, creating a disorienting, visceral effect that emphasizes tension or distress’
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0 | `505dec12-80c5-43bf-99b1-134e3f3e53a0` | 82 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=505dec12-80c5-43bf-99b1-134e3f3e53a0 |
| https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f | `893cb65f-c528-40aa-83d8-c5aeb2bfe59f` | -250 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=893cb65f-c528-40aa-83d8-c5aeb2bfe59f |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A panicked man stumbles through a crowded nightclub; the camera is locked to his body as the room lurches around him.
```

Use it as: upload a start image that matches the scene, select motion preset **Snorricam**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Camera mounted on the actor; the background sways · **Best use:** Stress, drunkenness, heightened emotion · **Models:** — · **Phrase/template:** "Snorricam locked on her face as the room spins" · **Tips:** —

## Related presets

- **Mixes that use this preset:** [Snorricam + Low Shutter](snorricam-plus-low-shutter.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/586e78d3-f889-4a43-bfd3-c3d437eb45b7.webp (320×180)
- Card preview, variant `893cb65f`: https://d1xarpci4ikg0w.cloudfront.net/c5634f64-fc8c-4cfe-ba93-c9bff1ea37dc.webp

### Sample videos (18; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/e7da29e1-8ebc-461e-b934-85cd5df6ee93 | https://static.higgsfield.ai/e7da29e1-8ebc-461e-b934-85cd5df6ee93.mp4 | https://static.higgsfield.ai/e7da29e1-8ebc-461e-b934-85cd5df6ee93.webp | https://d1xarpci4ikg0w.cloudfront.net/8f44e8d0-883a-4ce5-8ec5-8728de084dd7.webp (320×182) |
| 2 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/98f28410-8a62-47de-8fee-294a943e328b | https://static.higgsfield.ai/98f28410-8a62-47de-8fee-294a943e328b.mp4 | https://static.higgsfield.ai/98f28410-8a62-47de-8fee-294a943e328b.webp | https://d1xarpci4ikg0w.cloudfront.net/d6ab5834-e566-4736-9b46-b1e1b2c0be5a.webp (320×132) |
| 3 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/a7b17ff2-94eb-4402-97a7-4531a8aae806 | https://static.higgsfield.ai/a7b17ff2-94eb-4402-97a7-4531a8aae806.mp4 | https://static.higgsfield.ai/a7b17ff2-94eb-4402-97a7-4531a8aae806.webp | https://d1xarpci4ikg0w.cloudfront.net/a7df2ee7-4ea0-431c-8b42-2deee41740a5.webp (320×152) |
| 4 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/e6d35ba0-7c3b-4eb0-8bfd-83f3ba221d58 | https://static.higgsfield.ai/e6d35ba0-7c3b-4eb0-8bfd-83f3ba221d58.mp4 | https://static.higgsfield.ai/e6d35ba0-7c3b-4eb0-8bfd-83f3ba221d58.webp | https://d1xarpci4ikg0w.cloudfront.net/889ac8ce-5679-4e68-b0dd-98ee220f67e3.webp (320×200) |
| 5 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/8c48b4ec-6de3-4561-a085-6deab1c42bbf | https://static.higgsfield.ai/8c48b4ec-6de3-4561-a085-6deab1c42bbf.mp4 | https://static.higgsfield.ai/8c48b4ec-6de3-4561-a085-6deab1c42bbf.webp | https://d1xarpci4ikg0w.cloudfront.net/5ab90031-d706-4974-aefe-487cfad03793.webp (320×132) |
| 6 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/2c5a1481-abad-418b-ac5e-1e5b7e0c2b80 | https://static.higgsfield.ai/2c5a1481-abad-418b-ac5e-1e5b7e0c2b80.mp4 | https://static.higgsfield.ai/2c5a1481-abad-418b-ac5e-1e5b7e0c2b80.webp | https://d1xarpci4ikg0w.cloudfront.net/7b817592-73ec-4baa-825b-b1faa0807de9.webp (320×180) |
| 7 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/bd6f7ad0-8228-4f65-aa49-4d36d6607457 | https://static.higgsfield.ai/bd6f7ad0-8228-4f65-aa49-4d36d6607457.mp4 | https://static.higgsfield.ai/bd6f7ad0-8228-4f65-aa49-4d36d6607457.webp | https://d1xarpci4ikg0w.cloudfront.net/5fc9004d-bc37-4a2c-ac1d-6eed0a09c83f.webp (320×180) |
| 8 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/296b0830-bfd2-43c9-af95-c0f5634c6db8 | https://static.higgsfield.ai/296b0830-bfd2-43c9-af95-c0f5634c6db8.mp4 | https://static.higgsfield.ai/296b0830-bfd2-43c9-af95-c0f5634c6db8.webp | https://d1xarpci4ikg0w.cloudfront.net/4ac69506-46ea-4a4b-aee0-299019402eb5.webp (320×180) |
| 9 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/6e185c69-ced2-4b91-b8f2-9ceab8d1a34a | https://static.higgsfield.ai/6e185c69-ced2-4b91-b8f2-9ceab8d1a34a.mp4 | https://static.higgsfield.ai/6e185c69-ced2-4b91-b8f2-9ceab8d1a34a.webp | https://d1xarpci4ikg0w.cloudfront.net/f64f8ca2-3c73-42c7-867d-0281221dcb2d.webp (320×210) |
| 10 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/fa27ef84-1e04-4072-8cf2-000169fc004d | https://static.higgsfield.ai/fa27ef84-1e04-4072-8cf2-000169fc004d.mp4 | https://static.higgsfield.ai/fa27ef84-1e04-4072-8cf2-000169fc004d.webp | https://d1xarpci4ikg0w.cloudfront.net/12312017-7975-41e0-80eb-800e3630e0bf.webp (320×210) |
| 11 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/aa5f1f23-e300-4ded-b2fb-25c6c731cba5 | https://static.higgsfield.ai/aa5f1f23-e300-4ded-b2fb-25c6c731cba5.mp4 | https://static.higgsfield.ai/aa5f1f23-e300-4ded-b2fb-25c6c731cba5.webp | https://d1xarpci4ikg0w.cloudfront.net/8d75d9be-0343-450e-ac63-04ff7672f5cc.webp (320×182) |
| 12 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/98dc42c7-5be1-4852-bd61-1aadb6fb3ae9 | https://static.higgsfield.ai/98dc42c7-5be1-4852-bd61-1aadb6fb3ae9.mp4 | https://static.higgsfield.ai/98dc42c7-5be1-4852-bd61-1aadb6fb3ae9.webp | https://d1xarpci4ikg0w.cloudfront.net/5a18cd78-a2b7-4e2e-a53d-0695493796c4.webp (320×210) |
| 13 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/1ee08a97-d064-49b9-a067-ae2dca26080b | https://static.higgsfield.ai/1ee08a97-d064-49b9-a067-ae2dca26080b.mp4 | https://static.higgsfield.ai/1ee08a97-d064-49b9-a067-ae2dca26080b.webp | https://d1xarpci4ikg0w.cloudfront.net/3aae5042-30f2-4115-97d1-87d661e34013.webp (320×210) |
| 14 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/2efca3f8-6819-4595-86ca-9537fd9fda92 | https://static.higgsfield.ai/2efca3f8-6819-4595-86ca-9537fd9fda92.mp4 | https://static.higgsfield.ai/2efca3f8-6819-4595-86ca-9537fd9fda92.webp | https://d1xarpci4ikg0w.cloudfront.net/f0a9fb35-d0d3-4a0a-b372-ed79c6e2479d.webp (320×182) |
| 15 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/125519b3-7a37-4ca2-8cbf-8b19eb28942b | https://static.higgsfield.ai/125519b3-7a37-4ca2-8cbf-8b19eb28942b.mp4 | https://static.higgsfield.ai/125519b3-7a37-4ca2-8cbf-8b19eb28942b.webp | https://d1xarpci4ikg0w.cloudfront.net/82abefb1-7d45-42fa-bd85-9df583bffce5.webp (320×242) |
| 16 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/347ac770-d7c8-4a97-b7a8-046c2db1220e | https://static.higgsfield.ai/347ac770-d7c8-4a97-b7a8-046c2db1220e.mp4 | https://static.higgsfield.ai/347ac770-d7c8-4a97-b7a8-046c2db1220e.webp | https://d1xarpci4ikg0w.cloudfront.net/928ef8d6-0b54-4b33-b534-25c95352ec0b.webp (320×182) |
| 17 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/c1767b7c-ef81-441a-a099-8641cfe14b90 | https://static.higgsfield.ai/c1767b7c-ef81-441a-a099-8641cfe14b90.mp4 | https://static.higgsfield.ai/c1767b7c-ef81-441a-a099-8641cfe14b90.webp | https://d1xarpci4ikg0w.cloudfront.net/e8bc1564-91d4-42d7-8507-451a830fd1f3.webp (320×182) |
| 18 | https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0/7f38146e-42c3-44f9-a057-04f73164eebc | https://static.higgsfield.ai/7f38146e-42c3-44f9-a057-04f73164eebc.mp4 | https://static.higgsfield.ai/7f38146e-42c3-44f9-a057-04f73164eebc.webp | https://d1xarpci4ikg0w.cloudfront.net/0649efc7-306e-4dfe-9f92-68e1f3f800aa.webp (320×182) |

Source pages: https://higgsfield.ai/motion/505dec12-80c5-43bf-99b1-134e3f3e53a0, https://higgsfield.ai/motion/893cb65f-c528-40aa-83d8-c5aeb2bfe59f. Crawled 2026-09.
