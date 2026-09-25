---
name: ugc-video
description: Step 5 of the ugc-ad pipeline. Generate ONE complete UGC ad with Seedance 2.0 from three references (storyboard sheet + base character + product) and the multi-cut script, with native audio (VO + lip-sync + ambient). ALWAYS runs a get_cost preflight and requires explicit user confirmation before the paid call. Brand-agnostic.
---

# ugc-video

The single paid generation. Turns the three references + script into a finished ad.

## Inputs
- `STORYBOARD_JOB_ID`, `CHARACTER_JOB_ID`, `PRODUCT_MEDIA_ID`
- `SEEDANCE_PROMPT` (the block from script.md)
- `DEST`, `SLUG`, optional `MODEL` (default `seedance_2_0`), optional `DURATION` (default 15), optional `RESOLUTION` (default `720p` — see Resolution note)

## Steps

1. **Confirm reference roles.** Call `models_explore(action="get", model_id="seedance_2_0")`. Seedance accepts `medias` roles `image`, `start_image`, `end_image`, `video`, `audio`. Pass the three references as:
   `[{ "value": "<STORYBOARD_JOB_ID>", "role": "image" },
     { "value": "<CHARACTER_JOB_ID>", "role": "image" },
     { "value": "<PRODUCT_MEDIA_ID>", "role": "image" }]`

2. **COST GATE (mandatory).** Call `generate_video` with `get_cost: true` and the full params (model, prompt, duration, aspect_ratio, medias, generate_audio). Echo the returned credit cost to the user:
   > "This Seedance generation will cost ~<N> credits. Generate? (yes/no)"
   Do NOT proceed without an explicit "yes". If the user declines, stop and report.

3. **Generate** (only after confirmation). Call `generate_video`:
   - `model: <MODEL>` (default `seedance_2_0`)
   - `prompt: <SEEDANCE_PROMPT>`
   - `duration: <DURATION>` (≤15)
   - `aspect_ratio: "9:16"`
   - `resolution: <RESOLUTION>` (default `720p`)
   - `generate_audio: true`
   - `medias`: the three references above
   - Poll `job_status` with `raw_data:true` (keeps the prompt echo small). Real render time is ~3-8 min and is dominated by AUDIO synthesis, so 720p is NOT faster than 1080p — choose resolution on cost/quality, never speed. Capture `job_id` + URL.

4. **Download:** `curl -fsSL <url> -o "$DEST/$SLUG.mp4"`.

## Output
`DEST/<SLUG>.mp4` + video `job_id`.

## Model router (alternates — only on request)
- `kling3_0` — when you need manual camera-path control or voice mapped from a reference video.
- `cinematic_studio_video_v2` — when the concept needs heavy stylistic / premium-commercial themes rather than phone-selfie realism.

When switching MODEL away from `seedance_2_0`, re-confirm audio and media-role parameters via `models_explore` — `generate_audio:true` and the `image` reference roles are Seedance-specific and other models (e.g. `kling3_0`) handle audio and roles differently.

## Constraints
- NEVER call generate_video (without get_cost) before echoing cost + getting a yes.
- 9:16, native audio on, ≤15s.

## Resolution (validated 2026-06-22)
- **Default to 720p.** For this phone-selfie UGC format, 1080p (~135 credits) looks no different from 720p (~67 credits) and renders no faster (audio-bound). Ship 720p unless the caller explicitly needs 1080p (large-screen / paid placement).
- Audio is resolution-independent, so there is NO "720p draft then 1080p final" two-step — render 720p once and keep it.
- After download, the human must verify the VO (pronunciation, especially brand names). If wrong, fix the phonetic spelling in script.md and re-roll at 720p (cheap).
