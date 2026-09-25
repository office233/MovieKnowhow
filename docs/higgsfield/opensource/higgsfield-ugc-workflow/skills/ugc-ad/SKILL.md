---
name: ugc-ad
description: Orchestrates a complete creator-led UGC video ad end-to-end via seven sub-skills (product profile, planning brief, base character, storyboard sheet, multi-cut script, Seedance video, and an enhance pass — music bed + karaoke subtitles + cut transitions). Brand-agnostic — pass a product URL/photo + brand facts. Generates a fresh creator face per ad, native VO via Seedance 2.0, with human checkpoints and a cost gate before the paid call, then finishes with an optional (default-on) enhance pass. This is the primary UGC ad pipeline. Triggers: "make a UGC ad", "creator ad for X", "Seedance UGC", "build a UGC spot", "product testimonial video".
---

# ugc-ad

The spine for creator-led UGC ads. Reverse-engineered from the Higgsfield supercomputer flow. All image/video generation goes through the **Higgsfield MCP tools** (`generate_image`, `generate_video`, `media_import_url`, `job_status`, plus `get_cost` for the cost preflight). Each sub-skill below documents the exact call shape it makes; when unsure of a model's parameters, call `models_explore(action="get", model_id="<model>")` first. See `SETUP.md` in this repo for connecting the MCP and `GUIDE.md` for the plain-English walkthrough.

## Inputs
- Product: `PRODUCT_URL` and/or `PRODUCT_IMAGE` (a local `PRODUCT_IMAGE` must be uploaded via `media_upload_widget` first — remote MCP cannot read local chat attachments; a `PRODUCT_URL` is imported automatically).
- `BRAND_FACTS`: voice + positioning (read `brands/<brand>/brand/*` if a brand is named; otherwise take inline facts).
- `CREATOR_BRIEF`: the on-camera actor look.
- `SLUG`, optional `BRAND`, optional `DURATION` (≤15).

## Setup — project folder

Every ad lives in its own dated folder so all of its artifacts (profile, character,
storyboard, script, video, captions, music) stay together and traceable.

```bash
DATE=$(date +%Y-%m-%d)
# Default: a neutral ./out folder. If you keep a brand workspace with a
# brands/<brand>/ directory, the ad lands there instead.
if [ -n "$BRAND" ] && [ -d "brands/$BRAND" ]; then
  DEST="brands/$BRAND/distribution/ugc/$DATE-$SLUG"
else
  DEST="out/$DATE-$SLUG"
fi
mkdir -p "$DEST/inputs"
```

## Pipeline (sequential; each step writes into $DEST)

1. **Product profile** — invoke Skill `ugc-product-profile` with PRODUCT_IMAGE/PRODUCT_URL + DEST. Capture the product `media_id`.
2. **Planning brief** — invoke Skill `ugc-brief` with PROFILE (`$DEST/product-profile.md`), CREATOR_BRIEF, BRAND_FACTS, ANGLE, SLUG, DURATION, BRAND_ACCENT + DEST. Writes `brief.md` — the living plan (angle, 3-cut shot map, settings) with TBD job_ids. No generation.
   - **CHECKPOINT:** show `brief.md`; the user approves the plan (angle + shot map) before any generation spend. This is the cheapest point to redirect the whole ad.
   - From here on, **keep `brief.md` current**: each step below fills its TBD job_id and checks off its status box so the brief stays the single source of truth.
3. **Base character** — invoke Skill `ugc-base-character` with CREATOR_BRIEF + DEST. Capture the character `job_id`; write it into `brief.md`.
   - **CHECKPOINT:** show `character.png`; ask the user to approve or regenerate before spending further.
4. **Storyboard sheet** — invoke Skill `ugc-storyboard-sheet` with the product `media_id`, character `job_id`, profile, DEST. Capture the storyboard `job_id`; write it into `brief.md`.
   - **CHECKPOINT:** show `storyboard.png`; approve or regenerate.
5. **Multi-cut script** — invoke Skill `ugc-multicut-script` with profile + BRAND_FACTS + DEST. Link the final VO in `brief.md`.
   - **CHECKPOINT:** show `script.md`; approve or edit.
6. **Video** — invoke Skill `ugc-video` with storyboard `job_id`, character `job_id`, product `media_id`, the SEEDANCE_PROMPT, DEST, SLUG. Default `RESOLUTION=720p` (1080p is 2x credits with no visible gain for this format).
   - The cost gate lives inside ugc-video: it echoes credit cost and requires a yes. Relay that to the user.
   - **AUDIO CHECKPOINT (only a human can verify):** after the take downloads, open it and have the user confirm the VO pronunciation, especially brand names. If wrong, fix the phonetic spelling in script.md (see ugc-multicut-script VO Pronunciation Playbook) and re-roll at 720p. Do NOT finalize until the spoken brand name is correct.
7. **Enhance (default ON; skip with `--no-enhance` or "skip enhance")** — invoke Skill `ugc-enhance` with `MASTER=$DEST/<slug>.mp4`, DEST, SLUG, and `BRAND_ACCENT` (pull a hex from the product label / brand cues). Adds a ducked ElevenLabs music bed, word-level karaoke subtitles, and flash + zoom-punch cut transitions; outputs `$DEST/<slug>-enhanced.mp4`. Local render (no Seedance credits); the only paid call is the music gen.
   - **CHECKPOINT:** open the enhanced cut; the user confirms the audio mix (music under VO) and captions (timing + real brand spelling) before finalizing.

## Finish
8. **Virality read** — call `virality_predictor` on the FINAL cut (`$DEST/<slug>-enhanced.mp4` if enhanced, else `$DEST/<slug>.mp4`). If `hook_score < 50`, surface an advisory note (do not block).
9. **Distribution files** — write `$DEST/caption.md` and `$DEST/hashtags.md` (brand voice; NO em-dashes). Templates are fine if facts are thin, but create them — never skip. Check off the final status box in `brief.md`.
10. **Verify + report.** Confirm `$DEST` contains `brief.md`, the final master (`<slug>-enhanced.mp4` when enhanced, else `<slug>.mp4`), `caption.md`, `hashtags.md`. Report the folder path and the virality read.

## Rules
- Generate a FRESH character each ad (registered to cast.md by step 3, base character). Reuse only if the caller names a keeper.
- One ad per run. The supercomputer's "3 files" were variations; we make one (cost).
- Never let the paid video call fire without the cost echo + user yes.
- Default to 720p (1080p is 2x credits, no visible gain for this format).
- Spoken brand names / unusual words MUST be written phonetically in the VO (see ugc-multicut-script VO Pronunciation Playbook). Only a human can verify the audio.
- Enhance (music bed + karaoke subtitles + cut transitions) runs by DEFAULT as step 6; skip with `--no-enhance`. When it runs, the enhanced cut is the distributable master; the base master is always preserved.
