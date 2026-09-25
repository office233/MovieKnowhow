# Whip Pan — Higgsfield Motion preset

- **Category:** Camera · rig, POV & handheld
- **Use-case group:** transitions
- **What it does (site description, verbatim):** A fast camera pan that blurs the scene, used to transition between shots or add energy and speed. Great for action, comedy, or sudden scene changes.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: for film work, free-prompt the move by name on a `Camera:` line (Kling 2.6/3.0, Seedance 2.0) or use Cinema Studio camera dropdowns; see ../../../presets/camera-motion.md.

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2 | `7a144766-cdd2-4b73-8a27-67b35f2d4ba2` | -180 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=7a144766-cdd2-4b73-8a27-67b35f2d4ba2 |
| https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b | `a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b` | 88 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
In a busy diner the camera whip-pans from a waitress to a man bursting through the front door.
```

Use it as: upload a start image that matches the scene, select motion preset **Whip Pan**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- camera-motion.md (Table A): **Does:** Fast lateral blur pan · **Best use:** Dynamic transitions, following rapid action · **Models:** Higgsfield DoP · **Phrase/template:** "Whip Pan from the thief to the officer" · DoP template: "Whip pan from left to right. A skater lands a trick on wet pavement at night. Neon signs streak in the motion blur. Cut on the landing impact." · precise: "Whip pan from subject A to subject B in 0.5 seconds. Speed: 90 degrees per second. Motion blur acceptable…" · **Tips:** A music-video primary move. Forbidden in luxury. See recipe [whip-pan](recipes/whip-pan.md).

## Related presets

- **Same category (Camera · rig, POV & handheld):** [Action Run](action-run.md), [Buckle Up](buckle-up.md), [Car Chasing](car-chasing.md), [Car Grip](car-grip.md), [Downhill POV](downhill-pov.md), [Dutch Angle](dutch-angle.md), [Flying](flying.md), [FPV Drone](fpv-drone.md), [General](general.md), [Handheld](handheld.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/7c1aa41a-939c-483e-b4fb-eeab96a3fc0e.webp (320×486)
- Card preview, variant `a3f2c5eb`: https://d1xarpci4ikg0w.cloudfront.net/1357ff6a-399b-4b58-ac10-1329a7436b7b.webp

### Sample videos (22; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/7be9daf4-081a-4525-ae97-e95ba74de5c2 | https://static.higgsfield.ai/7be9daf4-081a-4525-ae97-e95ba74de5c2.mp4 | https://static.higgsfield.ai/7be9daf4-081a-4525-ae97-e95ba74de5c2.webp | https://d1xarpci4ikg0w.cloudfront.net/31fcf84d-acd9-45b9-969d-bc7ab237299b.webp (320×180) |
| 2 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/dd0fa133-e8af-4d0c-a595-2e08ed231e51 | https://static.higgsfield.ai/dd0fa133-e8af-4d0c-a595-2e08ed231e51.mp4 | https://static.higgsfield.ai/dd0fa133-e8af-4d0c-a595-2e08ed231e51.webp | https://d1xarpci4ikg0w.cloudfront.net/eb8d80ef-1927-4d69-ad57-8393aa434047.webp (320×180) |
| 3 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f21cefcc-2ae2-4137-9139-25a80ccd82c6 | https://static.higgsfield.ai/f21cefcc-2ae2-4137-9139-25a80ccd82c6.mp4 | https://static.higgsfield.ai/f21cefcc-2ae2-4137-9139-25a80ccd82c6.webp | https://d1xarpci4ikg0w.cloudfront.net/34e0aa08-5229-4e1d-84de-867523506ab0.webp (320×180) |
| 4 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e0f82eda-addb-4554-93f3-609e644421c8 | https://static.higgsfield.ai/e0f82eda-addb-4554-93f3-609e644421c8.mp4 | https://static.higgsfield.ai/e0f82eda-addb-4554-93f3-609e644421c8.webp | https://d1xarpci4ikg0w.cloudfront.net/81c33a77-6d6f-42b7-ab54-c4784e824148.webp (320×180) |
| 5 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91 | https://static.higgsfield.ai/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91.mp4 | https://static.higgsfield.ai/f51f5b9f-cfdb-4e02-a5c3-cae76d211c91.webp | https://d1xarpci4ikg0w.cloudfront.net/cfa3a1fb-5fa3-46d9-b306-73a21df3dde4.webp (320×568) |
| 6 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4f1ee1eb-7204-4b14-92aa-59ef93154418 | https://static.higgsfield.ai/4f1ee1eb-7204-4b14-92aa-59ef93154418.mp4 | https://static.higgsfield.ai/4f1ee1eb-7204-4b14-92aa-59ef93154418.webp | https://d1xarpci4ikg0w.cloudfront.net/b0ede872-b91e-43b4-a5e0-dd2fa346d094.webp (320×180) |
| 7 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/3449c97f-433a-49fd-8bbc-501938d79dc3 | https://static.higgsfield.ai/3449c97f-433a-49fd-8bbc-501938d79dc3.mp4 | https://static.higgsfield.ai/3449c97f-433a-49fd-8bbc-501938d79dc3.webp | https://d1xarpci4ikg0w.cloudfront.net/d582746e-4aae-4dab-9082-3c828dc645d4.webp (320×180) |
| 8 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f162d642-dd7f-4333-8870-5ccc5c7b3faf | https://static.higgsfield.ai/f162d642-dd7f-4333-8870-5ccc5c7b3faf.mp4 | https://static.higgsfield.ai/f162d642-dd7f-4333-8870-5ccc5c7b3faf.webp | https://d1xarpci4ikg0w.cloudfront.net/e0428d0f-1b0e-4581-a821-aa96b1ee63fa.webp (320×568) |
| 9 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/ce175da9-523f-460c-add2-084ca8a65511 | https://static.higgsfield.ai/ce175da9-523f-460c-add2-084ca8a65511.mp4 | https://static.higgsfield.ai/ce175da9-523f-460c-add2-084ca8a65511.webp | https://d1xarpci4ikg0w.cloudfront.net/4e0b6965-be3e-4076-8db7-10adcee38ea2.webp (320×182) |
| 10 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/0f880e3e-340c-4ea1-b9ba-381738f9f0b3 | https://static.higgsfield.ai/0f880e3e-340c-4ea1-b9ba-381738f9f0b3.mp4 | https://static.higgsfield.ai/0f880e3e-340c-4ea1-b9ba-381738f9f0b3.webp | https://d1xarpci4ikg0w.cloudfront.net/3a5b7221-d4a9-42aa-b6cf-e4e900f9674d.webp (320×486) |
| 11 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/2fc7a157-a111-43de-afc0-17dce56492fe | https://static.higgsfield.ai/2fc7a157-a111-43de-afc0-17dce56492fe.mp4 | https://static.higgsfield.ai/2fc7a157-a111-43de-afc0-17dce56492fe.webp | https://d1xarpci4ikg0w.cloudfront.net/e2a0fc45-2cda-4441-b864-0d261bbd0687.webp (320×424) |
| 12 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e7ac3b58-1b72-435a-a50e-95a31b9efea3 | https://static.higgsfield.ai/e7ac3b58-1b72-435a-a50e-95a31b9efea3.mp4 | https://static.higgsfield.ai/e7ac3b58-1b72-435a-a50e-95a31b9efea3.webp | https://d1xarpci4ikg0w.cloudfront.net/58138fff-1170-47f7-ae39-ced28ef65daf.webp (320×210) |
| 13 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4c472940-18de-4506-a485-ab430947db04 | https://static.higgsfield.ai/4c472940-18de-4506-a485-ab430947db04.mp4 | https://static.higgsfield.ai/4c472940-18de-4506-a485-ab430947db04.webp | https://d1xarpci4ikg0w.cloudfront.net/f55394cd-ee15-41a3-8d26-57e083dca1f0.webp (320×242) |
| 14 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/4472784c-b377-4f38-9754-2cb087d9ebad | https://static.higgsfield.ai/4472784c-b377-4f38-9754-2cb087d9ebad.mp4 | https://static.higgsfield.ai/4472784c-b377-4f38-9754-2cb087d9ebad.webp | https://d1xarpci4ikg0w.cloudfront.net/de035f30-8f77-4d7b-bc79-49feac46d1c4.webp (320×182) |
| 15 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/e2edb98b-f113-4fd1-8286-204c819fe693 | https://static.higgsfield.ai/e2edb98b-f113-4fd1-8286-204c819fe693.mp4 | https://static.higgsfield.ai/e2edb98b-f113-4fd1-8286-204c819fe693.webp | https://d1xarpci4ikg0w.cloudfront.net/e7da16b8-7800-44c3-86c6-c6129b6df600.webp (320×562) |
| 16 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/25a76c00-2329-48f8-b020-51f9233fb463 | https://static.higgsfield.ai/25a76c00-2329-48f8-b020-51f9233fb463.mp4 | https://static.higgsfield.ai/25a76c00-2329-48f8-b020-51f9233fb463.webp | https://d1xarpci4ikg0w.cloudfront.net/957177ea-cbc4-4356-9ef7-8d4bb0020ad2.webp (320×210) |
| 17 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/d400f0c6-b4a4-4988-b443-02ce1990cbf6 | https://static.higgsfield.ai/d400f0c6-b4a4-4988-b443-02ce1990cbf6.mp4 | https://static.higgsfield.ai/d400f0c6-b4a4-4988-b443-02ce1990cbf6.webp | https://d1xarpci4ikg0w.cloudfront.net/0e5ebda5-ae62-4194-803c-687f914374bb.webp (320×210) |
| 18 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/5badde5d-e0ea-4000-8b15-c2068279aa1e | https://static.higgsfield.ai/5badde5d-e0ea-4000-8b15-c2068279aa1e.mp4 | https://static.higgsfield.ai/5badde5d-e0ea-4000-8b15-c2068279aa1e.webp | https://d1xarpci4ikg0w.cloudfront.net/c1c655a5-911c-43e7-aed3-d9455eaa74c4.webp (320×210) |
| 19 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/c4e5a73a-c57a-436e-ba86-b4125d4584dd | https://static.higgsfield.ai/c4e5a73a-c57a-436e-ba86-b4125d4584dd.mp4 | https://static.higgsfield.ai/c4e5a73a-c57a-436e-ba86-b4125d4584dd.webp | https://d1xarpci4ikg0w.cloudfront.net/842a6ed9-a386-4e99-8dd9-58b726d71d5b.webp (320×210) |
| 20 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f6e72cc2-2c86-4190-bd26-fa523b093a60 | https://static.higgsfield.ai/f6e72cc2-2c86-4190-bd26-fa523b093a60.mp4 | https://static.higgsfield.ai/f6e72cc2-2c86-4190-bd26-fa523b093a60.webp | https://d1xarpci4ikg0w.cloudfront.net/c9c3ea3b-e94b-4da7-b083-d051764d7e2e.webp (320×210) |
| 21 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/27ad2e40-94e2-42db-8e03-38af24ad02a0 | https://static.higgsfield.ai/27ad2e40-94e2-42db-8e03-38af24ad02a0.mp4 | https://static.higgsfield.ai/27ad2e40-94e2-42db-8e03-38af24ad02a0.webp | https://d1xarpci4ikg0w.cloudfront.net/c4cfcbe2-74fc-469e-b093-402328c2bb92.webp (320×210) |
| 22 | https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2/f6305eed-a515-4bf7-b306-786ad0d2ab9b | https://static.higgsfield.ai/f6305eed-a515-4bf7-b306-786ad0d2ab9b.mp4 | https://static.higgsfield.ai/f6305eed-a515-4bf7-b306-786ad0d2ab9b.webp | https://d1xarpci4ikg0w.cloudfront.net/c6399b77-4387-466e-872a-b6fb095738ba.webp (320×210) |

Source pages: https://higgsfield.ai/motion/7a144766-cdd2-4b73-8a27-67b35f2d4ba2, https://higgsfield.ai/motion/a3f2c5eb-2fe1-493c-a4b0-b40c46a3a48b. Crawled 2026-09.
