---
name: ugc-brief
description: Step 2 of the ugc-ad pipeline. Consolidate the product profile, creator brief, angle, intended 3-cut shot map, and production settings into a single living brief.md BEFORE any character/storyboard/video is generated, so the whole ad is planned and approvable up front. Later pipeline steps fill in its generated job_ids and check off its status. Use as step 2 of a UGC ad, or standalone whenever you want one consolidated plan doc for a creator-led ad before spending on generation. Brand-agnostic.
---

# ugc-brief

The plan the rest of the pipeline executes against. It comes early — right after the product profile, before any face or storyboard exists — so the ad is thought-through and signed off before a single credit is spent. It is a **living document**: created with placeholders, then updated by each downstream step as the real artifacts come in.

Why early: a brief written after everything is generated is just a summary. Written first, it forces the angle, the shot map, and the production settings to be decided deliberately instead of emerging by accident — and it gives the user one thing to approve that frames every later choice.

## Inputs
- `DEST` (path) — the project folder (already holds `product-profile.md` from step 1).
- `PROFILE` (path) — `DEST/product-profile.md`, for the product facts + usage motions.
- `CREATOR_BRIEF` (text) — the on-camera actor look (no character generated yet; this is the intent).
- `BRAND_FACTS` (text) — voice + positioning. Read `brands/<brand>/brand/*` if a brand is named; else inline.
- `ANGLE` (text) — the creative hook (e.g. performance/quality, beginner-friendly, craftsmanship).
- `SLUG`, optional `BRAND`, optional `DURATION` (≤15, default 15), optional `BRAND_ACCENT` (hex).

## Steps

1. **Read the product profile.** Pull the product name, classification, hero look, branding rule (is the logo shown?), `product media_id`, and the exact usage steps (these become the on-camera motions in the shot map).

2. **Decide the 3-cut shot map** from the angle + usage steps. The pipeline's spine is always three time-sliced cuts; default framings:
   - **Cut 1 — Hook (Tight):** creator reacts/speaks to camera; topic framed in the first 2-3s (cold-creative rule).
   - **Cut 2 — Setup/Action (Macro):** the key usage motion from the profile (the tactile/quality beat).
   - **Cut 3 — Recommendation (Wide):** creator presents the product to camera; brand named.
   Adapt the beats to the product, but keep three distinct framings (Tight / Macro / Wide) for dynamic progression.

3. **Write `DEST/brief.md`** using the template below. Use `TBD` for anything not generated yet (character/storyboard/cut job_ids) — downstream steps fill these in. Convert any relative dates to absolute. No em-dashes / en-dashes anywhere.

   ```markdown
   # Production Brief — <Brand> (<format>)

   > Living plan for <slug>. Created at step 2 (before generation); later steps fill in
   > the TBD job_ids and check off the status list.

   - **Project slug:** `YYYY-MM-DD-<slug>`
   - **Folder:** `<DEST>/`
   - **Format:** Vertical 9:16 UGC video ad, <DURATION>s
   - **Purpose:** <one line — campaign goal or demo/tutorial>

   ## The product
   - **What:** <name + classification>
   - **Hero look:** <finish/colors>
   - **Branding rule:** <logo shown legibly? or VO/captions only?>
   - **product media_id:** `<from product-profile.md>`
   - Full facts + usage motions: [product-profile.md](product-profile.md)

   ## The creator (on camera)
   - **Look:** <CREATOR_BRIEF summary>
   - **character job_id:** TBD (filled by ugc-base-character)
   - Registered in [cast.md](cast.md)

   ## The angle
   - <ANGLE — one or two lines, including the hook framing>

   ## Shot map (3 time-sliced cuts -> one continuous take)
   1. **Hook (Tight, ~0-Xs):** <action> | VO intent: <...>
   2. **Setup/Action (Macro, ~X-Ys):** <usage motion> | VO intent: <...>
   3. **Recommendation (Wide, ~Y-<DURATION>s):** <present + brand> | VO intent: <...>
   - Visual map: storyboard.png (TBD job_id, filled by ugc-storyboard-sheet)
   - Final VO: script.md (TBD, filled by ugc-multicut-script)

   ## Production settings
   - **Video model:** Seedance 2.0 (native VO + lip-sync + ambient), via ugc-video
   - **Resolution:** 720p (1080p is 2x credits, no visible gain for this format)
   - **Cost gate:** explicit user yes required before the paid video call
   - **Audio check:** human confirms VO pronunciation of the brand name before finalizing
   - **Enhance (default ON):** ducked music bed + karaoke subtitles + cut transitions -> `<slug>-enhanced.mp4`
   - **Brand accent (captions):** <BRAND_ACCENT or a hex pulled from the product cues>

   ## Distribution
   - **Master:** `<slug>-enhanced.mp4` (enhanced cut distributable; base preserved)
   - **Caption + hashtags:** caption.md, hashtags.md (brand voice, no em-dashes)
   - **Channels:** Instagram / TikTok / Facebook from one folder

   ## Status
   - [x] Product profile
   - [x] Brief
   - [ ] Base character
   - [ ] Storyboard sheet
   - [ ] Multi-cut script
   - [ ] Video (cost-gated)
   - [ ] Enhance
   - [ ] Virality read + caption/hashtags
   ```

## Output
`DEST/brief.md` — the living plan. Report the path. This step does NO generation; it is a planning + writing step only (no credits spent).

## Notes
- The brief is a PLAN, not a summary — keep it decision-dense (angle, shot map, settings), not a transcript of the profile.
- Downstream steps own their TBDs: ugc-base-character fills `character job_id` + checks Base character; ugc-storyboard-sheet fills the storyboard `job_id`; ugc-multicut-script links the final VO; ugc-video/ugc-enhance check their boxes. If you run those steps, update brief.md as you go so it stays the single source of truth.
- Do NOT invent product facts — pull them from `product-profile.md`. If the angle is unspecified, propose the highest-leverage one for the product and note it as the assumption.
