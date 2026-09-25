# Handheld — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** UGC
- **What it does (site description, verbatim):** Mimics natural, shaky camera movement for a raw and realistic feel. Great for intense scenes, vlogs, or making viewers feel like they're in the moment.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f | `15e8358d-335d-4e7a-8eaa-277325ab728f` | 66 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=15e8358d-335d-4e7a-8eaa-277325ab728f |
| https://higgsfield.ai/motion/36e6e450-52d9-484f-bfbe-f069e06a1530 | `36e6e450-52d9-484f-bfbe-f069e06a1530` | -258 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=36e6e450-52d9-484f-bfbe-f069e06a1530 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A young woman talks excitedly to camera while walking through a busy farmers market, natural handheld sway.
```

Use it as: upload a start image that matches the scene, select motion preset **Handheld**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Organic, shaky handheld feel · **Best use:** Documentary realism, intimacy, chaos · **Models:** Kling 2.6, Veo 3 · **Phrase/template:** "Handheld camera jostling with the crowd" · reliable: "handheld tracking following the subject, subtle shake, not chaotic" · precise: "Micro-vibrations: 0.5–1 mm frame jitter at 2 Hz frequency…" · **Tips:** Camera-emotion sync: rage = jittery handheld; calm = smooth breathing handheld

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Head Tracking](head-tracking.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/191af5d5-165e-42f0-a15b-c57a848b0cea.webp (320×180)
- Card preview, variant `36e6e450`: https://d1xarpci4ikg0w.cloudfront.net/734ec2f2-ec6a-41c5-9264-8f56f76fe745.webp

### Sample videos (10; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/5577043e-2b02-4be4-a39b-5edaefd37ed2 | https://static.higgsfield.ai/5577043e-2b02-4be4-a39b-5edaefd37ed2.mp4 | https://static.higgsfield.ai/5577043e-2b02-4be4-a39b-5edaefd37ed2.webp | https://d1xarpci4ikg0w.cloudfront.net/b9ca3843-d29a-47c6-9e90-c0090b5fd50f.webp (320×320) |
| 2 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/f07719b8-0a02-4604-a075-0b355d25bdbd | https://static.higgsfield.ai/f07719b8-0a02-4604-a075-0b355d25bdbd.mp4 | https://static.higgsfield.ai/f07719b8-0a02-4604-a075-0b355d25bdbd.webp | https://d1xarpci4ikg0w.cloudfront.net/7c1df233-c693-4011-b993-d900e55c0523.webp (320×180) |
| 3 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d | https://static.higgsfield.ai/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d.mp4 | https://static.higgsfield.ai/a3e86c0d-c8da-42d8-a262-e6049ee2ec4d.webp | https://d1xarpci4ikg0w.cloudfront.net/927e86e1-0072-45a9-b8f6-2e89832ff41f.webp (320×320) |
| 4 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/41a23f7d-6f61-4578-b97c-e35c83dd6cb1 | https://static.higgsfield.ai/41a23f7d-6f61-4578-b97c-e35c83dd6cb1.mp4 | https://static.higgsfield.ai/41a23f7d-6f61-4578-b97c-e35c83dd6cb1.webp | https://d1xarpci4ikg0w.cloudfront.net/7daa513a-d8d2-4562-8855-da6299cd5691.webp (320×180) |
| 5 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/4aff77c6-055a-4ff5-9894-d80b03b70191 | https://static.higgsfield.ai/4aff77c6-055a-4ff5-9894-d80b03b70191.mp4 | https://static.higgsfield.ai/4aff77c6-055a-4ff5-9894-d80b03b70191.webp | https://d1xarpci4ikg0w.cloudfront.net/fcfa3b79-8e08-483f-904e-a88bf5dbe57b.webp (320×562) |
| 6 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f | https://static.higgsfield.ai/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f.mp4 | https://static.higgsfield.ai/f4e1d2f1-4036-483e-a76b-8d8c4dd16a3f.webp | https://d1xarpci4ikg0w.cloudfront.net/ca50dbc2-fbf3-485f-b9bc-ee288bdea9f4.webp (320×486) |
| 7 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef | https://static.higgsfield.ai/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef.mp4 | https://static.higgsfield.ai/e7eaadb9-7f25-45a3-affe-f8dfc9c92bef.webp | https://d1xarpci4ikg0w.cloudfront.net/5469bbee-e141-4d70-a842-6a07ee2b9138.webp (320×210) |
| 8 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/bef3d230-d076-4cef-8649-0255cd1c7e12 | https://static.higgsfield.ai/bef3d230-d076-4cef-8649-0255cd1c7e12.mp4 | https://static.higgsfield.ai/bef3d230-d076-4cef-8649-0255cd1c7e12.webp | https://d1xarpci4ikg0w.cloudfront.net/9bd871eb-79c0-41cf-a50a-d6a6d874d9e5.webp (320×242) |
| 9 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/26ea4fba-245f-4821-9f21-dba38e052527 | https://static.higgsfield.ai/26ea4fba-245f-4821-9f21-dba38e052527.mp4 | https://static.higgsfield.ai/26ea4fba-245f-4821-9f21-dba38e052527.webp | https://d1xarpci4ikg0w.cloudfront.net/93a07a28-aa0d-4996-bcde-c6a915c57613.webp (320×210) |
| 10 | https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f/e6c0a05a-7d4e-4c87-b922-ab24673b29ce | https://static.higgsfield.ai/e6c0a05a-7d4e-4c87-b922-ab24673b29ce.mp4 | https://static.higgsfield.ai/e6c0a05a-7d4e-4c87-b922-ab24673b29ce.webp | https://d1xarpci4ikg0w.cloudfront.net/c0b1196d-4b9e-4de2-8c85-f331faa32421.webp (320×320) |

Source pages: https://higgsfield.ai/motion/15e8358d-335d-4e7a-8eaa-277325ab728f, https://higgsfield.ai/motion/36e6e450-52d9-484f-bfbe-f069e06a1530. Crawled 2026-09.
