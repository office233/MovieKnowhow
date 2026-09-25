---
name: ugc-product-profile
description: Step 1 of the ugc-ad pipeline. Analyze a product photo and/or product URL into a structured product profile (classification, dimensions, packaging, exact usage steps) and a clean product.png reference. Use standalone when you need a reusable product profile, or as the first step of a UGC ad. Brand-agnostic.
---

# ugc-product-profile

Turns raw product input into a structured profile + a clean reference image the rest of the UGC pipeline locks onto.

## Inputs
- `PRODUCT_IMAGE` (path) and/or `PRODUCT_URL` (https) — at least one required.
- `DEST` (path) — the project folder to write into.

## Steps

1. **Acquire the product image as a Higgsfield media_id.**
   - If `PRODUCT_URL` points at an image, OR the product page has a hero image URL: call `media_import_url(url=<image-url>)` → `media_id`.
   - If `PRODUCT_IMAGE` is a local file:
     - In an Apps-UI client (Claude desktop/web): call `media_upload_widget` so the user picks the file; use the returned `media_id`.
     - In Claude Code / CLI (filesystem access): call `media_upload(filename, content_type)` for a presigned `upload_url` + `media_id`, then `curl -X PUT -H "Content-Type: <type>" --data-binary @<file> "<upload_url>"`, then `media_confirm(media_id, type:"image")`. (Validated 2026-06-22.)
   - Save a copy as `DEST/product.png` (download the imported/source image with `curl -fsSL <url> -o "$DEST/product.png"` when a URL is available).

2. **Extract product facts.** From the URL page content (fetch it) and/or the image, determine:
   - classification (what kind of product it is),
   - physical dimensions / form factor,
   - packaging details (container, label, colors, logo placement),
   - **exact usage steps** (how a person physically uses it — the motion the actor will perform).

3. **Write `DEST/product-profile.md`** with this structure:

   ```markdown
   # Product Profile: <name>
   - Classification: ...
   - Dimensions / form factor: ...
   - Packaging: ...
   - Brand cues (colors, logo, label): ...
   - Exact usage steps:
     1. ...
     2. ...
   - product media_id: <media_id>
   ```

## Output
`DEST/product-profile.md` + `DEST/product.png` + the product `media_id`. Report the `media_id` back to the caller.

## Notes
- Do NOT invent facts. If the URL/image is ambiguous, state the assumption in the profile.
- This step does no paid video generation. `media_import_url` and a page fetch are the only external calls.
