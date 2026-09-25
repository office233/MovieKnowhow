---
name: ugc-base-character
description: Step 2 of the ugc-ad pipeline. Generate one consistent, photorealistic base portrait of a UGC creator/actor — person only, neutral professional environment, NO product. Registers the face to cast.md so a winner can be reused. Use standalone to mint a reusable creator face, or as step 2 of a UGC ad. Brand-agnostic.
---

# ugc-base-character

Generates the master portrait that locks the actor's identity across every cut of the ad.

## Inputs
- `CREATOR_BRIEF` (text) — age range, gender presentation, ethnicity if specified, hair, attire, vibe.
- `DEST` (path).

## Steps

1. **Confirm the image model + reference roles.** Default `soul_2` (best for photoreal UGC/portrait). Call `models_explore(action="get", model_id="soul_2")` if unsure of `aspect_ratio` / params.

2. **Generate the portrait.** Call `generate_image`:
   - `model: "soul_2"`
   - `prompt`: describe ONLY the person — physical features, attire, expression, and a neutral professional environment (soft studio or clean indoor light). **Do not mention the product, props, or any branding.**
   - `aspect_ratio: "9:16"`, `count: 1`
   - Poll `job_status` until terminal; capture `job_id` and the result URL.

3. **Download** the result: `curl -fsSL <url> -o "$DEST/character.png"`.

4. **Register to cast.** Append to `DEST/cast.md` (create if missing):

   ```markdown
   ## <slug> — generated <date>
   - source: ugc-base-character
   - job_id: <job_id>
   - brief: <one-line CREATOR_BRIEF summary>
   - status: candidate   # promote to "keeper" after a winning ad
   ```

   If a `brands/<brand>/cast.md` exists for the target brand, also append the same entry there.

## Output
`DEST/character.png` + the character `job_id` (report it — downstream steps pass it as a media reference). 

## Constraints
- PERSON ONLY. No product. (Hard rule — product in the base portrait causes compositing drift in the storyboard + video steps.)
- One face per run. Identity variety comes from generating fresh per ad, not from multiple faces in one image.
