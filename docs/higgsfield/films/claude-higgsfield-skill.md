# claude-higgsfield-skill (AIcentury) — character sheets, storyboards, production stills and timed video prompts in bulk

- Upstream: <https://github.com/AIcentury/claude-higgsfield-skill> (commit `0e0fc61`)
- Local copy: [`../opensource/claude-higgsfield-skill/`](../opensource/claude-higgsfield-skill/) — the skill is packed in `Higgsfield.skill` (a zip: `higgsfield/SKILL.md`, `references/*.md`, `scripts/bulk_builder.py`, `scripts/project_export.py`). Unzip to read.
- License: MIT © 2026 AIcentury
- Type: **clip/storyboard prompt tool** with Higgsfield MCP generation

## What it does

"Turn a single character idea, a reference image, or a rough story into clean, copy-ready prompts for character sheets, storyboards, production stills, AI video, and YouTube thumbnails — then generate the matching images and videos directly through Higgsfield." Bulk modes (1 / 10 / 50 / 100 items), zipped project export with manifest.

## Pipeline

1. **Character sheet** (`references/character-sheet.md`): full-body turnaround (front, 3/4 front, side, back, 3/4 back), head studies, hero portrait, costume breakdown, props, material close-ups, height reference, "Strict identity-consistency rule".
2. **Storyboard** (`references/storyboard.md`) — "8 shots = 12 seconds · 10 shots = 15 seconds · 12 shots = 15–20 seconds". Beat structures (verbatim):
   - "**8-shot / 12s:** 1) Opener / establishing · 2) First action impact · 3) Process or escalation · 4) Texture or detail close-up · 5) Main transformation or reveal · 6) Peak motion or conflict · 7) Final build / emotional setup · 8) Hero ending / payoff."
   - "**10-shot / 15s:** 1) Establish world · 2) Introduce character · 3) Trigger action · 4) First escalation · 5) Detail close-up · 6) Motion peak · 7) Transformation or twist · 8) Emotional reaction · 9) Hero reveal · 10) Final payoff."
   - Storyboard layouts: clean infographic / professional production / previs / cinematic commercial / anime production board. "each panel must look visually different".
3. **Matching video prompt** (`references/video-prompt.md`) — the storyboard image is uploaded as the sequence reference: "**Do not reinterpret the storyboard as one single scene** — each panel is one separate cinematic shot beat." Character image = identity reference.
4. Generate via the Higgsfield MCP (Nano Banana / Seedream for stills, Seedance / Kling for video) after a cost preflight (`get_cost: true`) and a yes.

## Hard video rules (verbatim)

> "- Always include `No background music.`
> - **Character cap: under 2000 characters, target 1800–1950.** Never exceed 2000.
> - **Never** put aspect-ratio language in a video prompt [...] (Aspect ratio belongs only in storyboard/image prompts, or as an MCP `aspect_ratio` parameter.)
> - **Without dialogue** → include `No dialogue, no subtitles, no text on screen. No background music.`
> - **With dialogue** → include `No subtitles, no text on screen. No background music.`"

Shot timing tables (verbatim):

```
12 seconds / 8 shots
[00:00–00:01.5] [00:01.5–00:03.0] [00:03.0–00:04.5] [00:04.5–00:06.0]
[00:06.0–00:07.5] [00:07.5–00:09.0] [00:09.0–00:10.5] [00:10.5–00:12.0]

15 seconds / 8 shots
[00:00–00:01.8] [00:01.8–00:03.4] [00:03.4–00:05.2] [00:05.2–00:07.0]
[00:07.0–00:08.8] [00:08.8–00:10.6] [00:10.6–00:12.8] [00:12.8–00:15.0]

15 seconds / 10 shots → 1.5 seconds per shot
20 seconds / 10 shots → 2 seconds per shot
```

No-dialogue video template (excerpt, verbatim):

```text
Create a [duration] cinematic video.

Reference:
Use the uploaded storyboard/image as the exact visual and timing reference if provided.

Rules:
- Follow the shot order exactly if a storyboard is provided
- Each panel is one separate cinematic shot beat if a storyboard is provided
- Maintain character, outfit, environment, lighting, and prop continuity
- No dialogue
- No subtitles
- No text on screen
- No background music
- Natural sound design only
- Do not mention aspect ratio

Shot Sequence:
[00:00–00:01.5]
SHOT 1 - [title]
[action, camera, emotion, movement]
```

Negative line (always): "No background music, no subtitles, no text on screen, no watermark, no logo, no UI, no aspect ratio, no extra story events, no extra characters unless requested, no identity drift, no style drift, no costume drift, no environment drift."

## Consistency

Storyboard sheet = the continuity device: one image holds all 8–12 panels of one character/environment, then the video model follows the panels as beats. Character image uploaded as Reference Image 1 for every panel.

## Costs

"Never guess or hardcode prices" — cost comes from `get_cost: true`, multiplied by item count for batches, summed across stages, shown before a yes.

## Lessons

- Pack a whole 12–20 s multi-shot sequence into one generation using a storyboard sheet + timecoded SHOT list.
- Very short shots (1.5–2 s) are normal inside one Seedance/Kling generation; keep the prompt under 2,000 characters.
