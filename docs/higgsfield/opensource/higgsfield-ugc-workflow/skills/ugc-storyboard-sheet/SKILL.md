---
name: ugc-storyboard-sheet
description: Step 3 of the ugc-ad pipeline. Generate ONE 16:9 storyboard sheet holding three side-by-side 9:16 panels (Hook / Setup-Action / Recommendation) at framings Tight / Macro / Wide, using the product and character images as references to lock identity. This sheet is the visual narrative map the video model follows. Brand-agnostic.
---

# ugc-storyboard-sheet

Produces the three-panel storyboard that dictates the ad's scene sequence and locks visual identity.

## Inputs
- `PRODUCT_MEDIA_ID` (from ugc-product-profile)
- `CHARACTER_JOB_ID` (from ugc-base-character)
- `PROFILE` (path to product-profile.md, for the usage steps)
- `DEST` (path)

## Steps

1. **Confirm the image model + reference roles.** Default `nano_banana_pro` (handles multiple reference images + clean layout/text; 16:9 supported, no max on image references). Call `models_explore(action="get", model_id="nano_banana_pro")` to confirm. NOTE (validated 2026-06-22): requesting `nano_banana_pro` may report back as model `nano_banana_2` in the job response — this is a server-side alias; references still bind and the 3-panel sheet renders correctly. Not an error.

2. **Generate the sheet.** Call `generate_image`:
   - `model: "nano_banana_pro"`
   - `aspect_ratio: "16:9"`, `count: 1`
   - `medias`: pass the product and character as references, e.g.
     `[{ "value": "<PRODUCT_MEDIA_ID>", "role": "image" }, { "value": "<CHARACTER_JOB_ID>", "role": "image" }]`
     (use the exact role names returned by models_explore).
   - `prompt`: one horizontal sheet, three equal vertical 9:16 panels side by side, same creator and same product in every panel:
     - **Panel 1 — Hook (Tight):** tight selfie-framing of the creator reacting/speaking to camera.
     - **Panel 2 — Setup/Action (Macro):** macro on the creator's hands performing the product's exact usage step (pull from PROFILE).
     - **Panel 3 — Recommendation (Wide):** waist-up wide of the creator holding/presenting the product to camera.
   - Poll `job_status`; capture `job_id` + URL.

3. **Download:** `curl -fsSL <url> -o "$DEST/storyboard.png"`.

## Output
`DEST/storyboard.png` + its `job_id` (report it — the video step uses it as the scene-sequence reference).

## Constraints
- Same face + same product packaging in all three panels (that is the whole point — continuity lock).
- Three distinct framings (Tight / Macro / Wide) for dynamic progression.
- 16:9 canvas, three 9:16 panels. Verify the output actually shows three panels before reporting success.
