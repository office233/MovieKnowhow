# Through Object Out — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** Moves the camera outward through an object, revealing the scene behind it. Creates a smooth, creative transition and adds depth to your storytelling.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864 | `0b75acee-a00e-4009-a7a3-8fe394f13864` | 70 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0b75acee-a00e-4009-a7a3-8fe394f13864 |
| https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852 | `3e217f3c-5133-4e83-ab6c-afb35d1c5852` | 47 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=3e217f3c-5133-4e83-ab6c-afb35d1c5852 |

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

Source pages: https://higgsfield.ai/motion/0b75acee-a00e-4009-a7a3-8fe394f13864, https://higgsfield.ai/motion/3e217f3c-5133-4e83-ab6c-afb35d1c5852. Crawled 2026-09.
