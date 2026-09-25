# FPV Drone — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** Captures fast, fluid shots with a first-person view drone, flying through tight spaces and dynamic paths. Ideal for thrilling, immersive, and cinematic footage.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3 | `244dc358-abee-426c-8966-b735978421b3` | 55 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=244dc358-abee-426c-8966-b735978421b3 |
| https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7 | `5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7` | -280 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
FPV drone dives off a sea cliff, skims the waves, and threads between rock arches at high speed.
```

Use it as: upload a start image that matches the scene, select motion preset **FPV Drone**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fast, agile, drone-like weaving · **Best use:** Chases, aerial action, kinetic energy · **Models:** Kling 2.6, Sora 2† · **Phrase/template:** "FPV Drone chasing the motorcycle through the warehouse" · reliable: "FPV camera weaving through the environment at walking pace" · image: "Fast FPV drone shot flying through a snowy canyon and swooping past [img 1]…" · **Tips:** Path-drawing workflow (Seedance): draw a red line on the start image (template below)

## Related presets

- **Mixes that use this preset:** [FPV Drone + Timelapse Landscape](fpv-drone-plus-timelapse-landscape.md)
- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [General](general.md), [Handheld](handheld.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/6551f64a-98ac-4149-9aae-82403b2f5044.webp (320×180)
- Card preview, variant `5eb82f94`: https://d1xarpci4ikg0w.cloudfront.net/36c8a32a-df85-4788-9590-ccf7c3488e54.webp

### Sample videos (18; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/cb52c281-e42c-43b1-9a08-82119c91d658 | https://static.higgsfield.ai/cb52c281-e42c-43b1-9a08-82119c91d658.mp4 | https://static.higgsfield.ai/cb52c281-e42c-43b1-9a08-82119c91d658.webp | https://d1xarpci4ikg0w.cloudfront.net/129aa0ee-433f-4f6d-97fe-27f0533b9f8c.webp (320×182) |
| 2 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/63db790d-dcfd-4715-8247-92744567aead | https://static.higgsfield.ai/63db790d-dcfd-4715-8247-92744567aead.mp4 | https://static.higgsfield.ai/63db790d-dcfd-4715-8247-92744567aead.webp | https://d1xarpci4ikg0w.cloudfront.net/64d131c6-2c2a-4610-8b88-fda683d10780.webp (320×180) |
| 3 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/229f189a-b57e-44fd-907f-8a13307a996c | https://static.higgsfield.ai/229f189a-b57e-44fd-907f-8a13307a996c.mp4 | https://static.higgsfield.ai/229f189a-b57e-44fd-907f-8a13307a996c.webp | https://d1xarpci4ikg0w.cloudfront.net/2abc911d-253f-42bd-a305-11dfa12c3402.webp (320×424) |
| 4 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8dc30a96-560a-4fb8-b997-075b31d57ea3 | https://static.higgsfield.ai/8dc30a96-560a-4fb8-b997-075b31d57ea3.mp4 | https://static.higgsfield.ai/8dc30a96-560a-4fb8-b997-075b31d57ea3.webp | https://d1xarpci4ikg0w.cloudfront.net/3127d0eb-5184-4bb6-89d1-1cbe4c3519e9.webp (320×182) |
| 5 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/96904c29-a3ae-48f7-b51e-9d29eea0b227 | https://static.higgsfield.ai/96904c29-a3ae-48f7-b51e-9d29eea0b227.mp4 | https://static.higgsfield.ai/96904c29-a3ae-48f7-b51e-9d29eea0b227.webp | https://d1xarpci4ikg0w.cloudfront.net/028a27f3-a922-496d-967b-168f419fcf45.webp (320×182) |
| 6 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/301f3213-455c-43f6-bf16-08ba4577c1df | https://static.higgsfield.ai/301f3213-455c-43f6-bf16-08ba4577c1df.mp4 | https://static.higgsfield.ai/301f3213-455c-43f6-bf16-08ba4577c1df.webp | https://d1xarpci4ikg0w.cloudfront.net/ff76ae22-6195-4057-8bb2-db86f832748b.webp (320×242) |
| 7 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3 | https://static.higgsfield.ai/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3.mp4 | https://static.higgsfield.ai/8f0d5517-bc39-4bdc-adac-4fbcf4c60ed3.webp | https://d1xarpci4ikg0w.cloudfront.net/dc2af330-1154-4d25-abe3-b9f2108384b8.webp (320×180) |
| 8 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/b26bbd92-4e54-42ee-b3e5-b425d614fb59 | https://static.higgsfield.ai/b26bbd92-4e54-42ee-b3e5-b425d614fb59.mp4 | https://static.higgsfield.ai/b26bbd92-4e54-42ee-b3e5-b425d614fb59.webp | https://d1xarpci4ikg0w.cloudfront.net/9ef815db-ff47-479a-a128-0e647e56c3a6.webp (320×432) |
| 9 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/25c7d66f-1fdf-483f-823c-cd20958f4b56 | https://static.higgsfield.ai/25c7d66f-1fdf-483f-823c-cd20958f4b56.mp4 | https://static.higgsfield.ai/25c7d66f-1fdf-483f-823c-cd20958f4b56.webp | https://d1xarpci4ikg0w.cloudfront.net/c5c7088a-3806-4745-825e-3595c2905139.webp (320×192) |
| 10 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c | https://static.higgsfield.ai/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c.mp4 | https://static.higgsfield.ai/4dfe1661-92a6-4bdc-a26f-007c9f0feb4c.webp | https://d1xarpci4ikg0w.cloudfront.net/a0473f87-551f-4fa3-8879-d4790bf51970.webp (320×182) |
| 11 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/d33e119f-1e02-4b08-9ad1-f6df09a41802 | https://static.higgsfield.ai/d33e119f-1e02-4b08-9ad1-f6df09a41802.mp4 | https://static.higgsfield.ai/d33e119f-1e02-4b08-9ad1-f6df09a41802.webp | https://d1xarpci4ikg0w.cloudfront.net/54eace3f-40ba-4abb-85c5-a19a26ca2022.webp (320×242) |
| 12 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/4c21fae5-e0a8-43ee-80cc-f1e5a56df354 | https://static.higgsfield.ai/4c21fae5-e0a8-43ee-80cc-f1e5a56df354.mp4 | https://static.higgsfield.ai/4c21fae5-e0a8-43ee-80cc-f1e5a56df354.webp | https://d1xarpci4ikg0w.cloudfront.net/64eb745b-895e-44eb-9369-7a6dba3a7aab.webp (320×210) |
| 13 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/ac8ca389-0da1-49de-b515-20ca5624bf41 | https://static.higgsfield.ai/ac8ca389-0da1-49de-b515-20ca5624bf41.mp4 | https://static.higgsfield.ai/ac8ca389-0da1-49de-b515-20ca5624bf41.webp | https://d1xarpci4ikg0w.cloudfront.net/111776e9-f199-4225-863f-c0dc29175780.webp (320×210) |
| 14 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/e1560386-0c3d-47d7-a5c8-0d6fcd84d819 | https://static.higgsfield.ai/e1560386-0c3d-47d7-a5c8-0d6fcd84d819.mp4 | https://static.higgsfield.ai/e1560386-0c3d-47d7-a5c8-0d6fcd84d819.webp | https://d1xarpci4ikg0w.cloudfront.net/91a6f64b-e0fd-4e3b-8a88-d95ee40be822.webp (320×210) |
| 15 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/19dd5d9a-4041-406d-8751-09cd85b13d5c | https://static.higgsfield.ai/19dd5d9a-4041-406d-8751-09cd85b13d5c.mp4 | https://static.higgsfield.ai/19dd5d9a-4041-406d-8751-09cd85b13d5c.webp | https://d1xarpci4ikg0w.cloudfront.net/3c348d5a-3f6c-4282-aa5d-79a3898bf69b.webp (320×210) |
| 16 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/f829fd2b-3b91-4e19-b7c4-7a8170849470 | https://static.higgsfield.ai/f829fd2b-3b91-4e19-b7c4-7a8170849470.mp4 | https://static.higgsfield.ai/f829fd2b-3b91-4e19-b7c4-7a8170849470.webp | https://d1xarpci4ikg0w.cloudfront.net/efea4168-0d70-4c75-b5ef-a4067b0fa3c6.webp (320×210) |
| 17 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/33069ec3-aea8-491f-b378-4528ac329c9c | https://static.higgsfield.ai/33069ec3-aea8-491f-b378-4528ac329c9c.mp4 | https://static.higgsfield.ai/33069ec3-aea8-491f-b378-4528ac329c9c.webp | https://d1xarpci4ikg0w.cloudfront.net/31665250-8653-4f30-9476-32319b169d73.webp (320×210) |
| 18 | https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c | https://static.higgsfield.ai/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c.mp4 | https://static.higgsfield.ai/dc9a7f25-7c18-40a6-8514-6b0be0ba6b0c.webp | https://d1xarpci4ikg0w.cloudfront.net/1abadf71-1d4d-4d12-afe2-fc77e40054c2.webp (320×210) |

Source pages: https://higgsfield.ai/motion/244dc358-abee-426c-8966-b735978421b3, https://higgsfield.ai/motion/5eb82f94-2b98-4e4a-ab4b-ee6c872fb2c7. Crawled 2026-09.
