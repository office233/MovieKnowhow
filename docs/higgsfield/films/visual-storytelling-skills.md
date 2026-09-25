# visual-storytelling-skills (leynos / df12 productions) — prose → continuity bible → storyboard frames → Higgsfield MCP clips → OpenShot project

- Upstream: <https://github.com/leynos/visual-storytelling-skills> (commit `b615d40`)
- Local copy: [`../opensource/visual-storytelling-skills/`](../opensource/visual-storytelling-skills/)
- License: ISC © 2026 Payton McIntosh (verbatim quotes below are from ISC-licensed files).
- Type: **film production pipeline / tool** (Claude skills + a Python `media-project` CLI)

## What it does

"Every story contains a film. These skills find it." A chain of agent skills that walks "a narrative from raw prose through continuity extraction, reference-image generation, shot direction, and model-routed video-prompt assembly, with a TTS phoneticizer for good measure" (README.md). No finished film is shipped in the repo; it is the most **engineering-rigorous** Higgsfield film pipeline in the set (manifests, logs, resumable jobs, schema checks).

## Pipeline, step by step

```
Script/prose → scene-inventory-extractor-v2 → shot-specifier → video-generator (Higgsfield MCP)
            → media-project (OpenShot .osp)          phoneticize → Eleven v3 narration
            nanobanana (Gemini 3 Pro Image) is called for every still
```

### 1. `scene-inventory-extractor-v2` (13 phases)

| Phase | Output |
|---|---|
| 1 Source Analysis | Annotated reading notes |
| 2 Creative Pillars | Visual aesthetic + storytelling style + **cinematography specification** + **prompt keyword library** |
| 3 Narrative Spine | Structure, themes, turnpoints |
| 4 Character Bible | Character entries with reference-image specs |
| 5 Locations Bible | "multi-angle, multi-condition scouting specs" |
| 6 Props Bible | Physical descriptions + ref-image specs |
| 7 Scene Inventory | Per-scene breakdowns |
| 8 Continuity Inventory | Character/location/prop state across scenes |
| 9 Shot Lists | Cinematography fields + duration budgets |
| 10 Thematic Image Plan | Key narrative-beat images |
| 11 Reference Image Generation | All refs + **video role manifest** |
| 12 Shot-Frame Generation | Start, end, key frames |
| 13 Consistency Verification + Handoff | Vision-based QA (BLOCK/WARN) |

"Its final consistency pass must be acted on before handoff: fix BLOCK findings, resolve fixable WARN findings, and turn any remaining WARN findings into explicit shot-specifier constraints."

### 2. `shot-specifier` (8 phases)

Input audit → Shot decomposition → Frame role assignment → Shot direction (actor / camera / lighting / effects / audio) → **Storyboard generation (nanobanana)** → Storyboard consistency check → **Video prompt assembly with model routing** → Asset pipeline (naming, manifest).

**Duration budget rules** (`skills/shot-specifier/SKILL.md`):

> "- Clips must be 4, 6, or 8 seconds.
> - One clip = one action in one location. If the action requires more than 8 seconds, split it.
> - Multi-beat scenes need multiple clips. A scene with setup + action + reaction is three clips minimum.
> - Establishing shots: 6–8 seconds. Insert/detail shots: 4 seconds. Dialogue beats: 6 seconds. Complex action: 8 seconds."

**Keyframe strategy — start frame:** character shots use nanobanana `character_consistency` with `referenceImagePaths` = "the character identity ref first, followed by the matching location ref, significant prop refs, visible recurring visual element refs, and style anchor"; prompt ends with `"no text, no watermarks, no logos, no labels, no annotations"`.
**End frame:** if same subject changes state → `edit_image` from the start frame ("Describe only what changes"); if composition changes → `generate_image` with the start frame as a reference.

**Per-shot prompt file template** (verbatim excerpt):

```markdown
## Metadata
- **Shot ID:** S{XX}_SH{XXX}
- **Duration:** {4 / 6 / 8} seconds
- **Clip boundary (next):** {continuous / scene_cut}
- **Recommended model:** {model ID — see references/model-routing.md}
- **Generation strategy:** {image_to_video / start_end_image / multi_shot / motion_control}
- **Aspect ratio:** {16:9 / 9:16 / 1:1 / 21:9}
- **Model overrides:** {key=value list for live MCP defaults; include audio,
  quality/mode, cfg/guidance, genre, or "none"}
- **Count:** {1 by default; 2 only for review-gated hero/uncertain shots when
  video-generator confirms the live schema supports it}
- **Audio generation:** ambient={on/off}; sfx={on/off}; dialogue={on/off};
  music=off; narration=off; source={generated/none/supplied}

## Prompt

[STYLE] {Global style phrase from keyword library}
[FILMSTOCK] {Filmstock phrase from keyword library}
[SCENE] {Location vocabulary + lighting condition vocabulary + global negative constraints}
[FRAMING] {Frame size, lens, camera mount, motion path}
[PACING] {slow / moderate / fast — with clip-specific meaning}
[ACTION] {transition_description — 2–4 sentences; subject appearance, movement trajectory,
         state changes, existence statements}
[SUBJECT] {Subject key visual features for consistency}
[AUDIO] {Audio direction from Phase 4.5}
[DURATION] {4 / 6 / 8 seconds}
```

"Every `[STYLE]`, `[FILMSTOCK]`, and `[SCENE]` field copies from the project's prompt keyword library. No ad hoc vocabulary."

### 3. `video-generator` (Higgsfield MCP execution)

Model routing (`skills/video-generator/SKILL.md`):

| Need | Preferred model | Use it for |
|------|-----------------|------------|
| Character identity, multiple references, hero props, recurring visual elements | Seedance 2.0 | Dialogue-adjacent shots, character-centric action, prop details, continuity-sensitive scenes |
| Smooth camera motion with fewer identity constraints | Kling 3.0 | Drone POV, landscape movement, machine-vision travel, forward pushes |
| Cinematic image-to-video when DoP/camera treatment is the main point | Higgsfield DoP or Cinema route when exposed | Polished camera moves from strong start images |
| Provider-specific style or production requirement | Veo route when exposed and approved in the manifest | Only when the manifest names it |

Logical job shape (verbatim):

```text
generate_video(
  model={exact_higgsfield_model_id},
  prompt={generation_prompt},
  aspect_ratio={aspect_ratio},
  duration={duration_seconds},
  resolution={resolution_parameter},
  audio={audio_generation_preferences},
  count={count},
  model_overrides={validated_override_map},
  media=[
    {value: start_media_handle, role: "start_image"},
    {value: end_media_handle, role: "end_image"},
    {value: reference_media_handle, role: "image"}
  ]
)
```

**Prompt flattening** (`references/prompt-flattening.md`): strip `[TAG]` labels, reorder per model ("Seedance 2.0: action/reference intent first; style and filmstock late. Kling 3.0: shot/camera structure first; action physics next; style last."), then append:

```
The start image is the first frame.
The end image is the final frame.
Preserve all supplied reference-image identities and layouts throughout.
No narration.
```

**Key-frame decomposition** (`references/key-frame-decomposition.md`): Higgsfield accepts only `start_image` / `end_image`, "not mid-clip key-frame anchors". Strategies `single_clip` / `split_at_keyframe` / `merge_keyframe_motion`. Worked case: a 6 s shot with a key at 2 s cannot be split for Seedance (4 s minimum → 8 s total) so it is merged into prompt text ("Around the middle of the clip, a red warning pulse rises from the console and sweeps across the wall and her cheek, matching the advisory key-frame state.").

Other operating rules: inspect the live MCP schema first and log it; submit long Seedance jobs early and fill concurrency with Kling; log every job immediately; resume without re-billing; write `generated/assembly_order.md`.

### 4. `media-project` — assembly into OpenShot

`media-project package-openshot` (installed with `uv tool install`, requires `ffprobe`) turns `generated/assembly_order.md` (`Order | Shot ID | Sub-clip | Selected clip | Boundary after | Notes`) + `generated/generation_log.md` into a playable `.osp` project with full FFmpeg reader metadata.

### 5. `phoneticize` — narration

Detect pronunciation hazards, respell phonetically, "render preview samples via the Higgsfield MCP TTS tool with Eleven v3", iterate, emit a phoneticized script. "**Preview the fragment, not the word.**" "**Respelling is the primary output, not SSML.**"

## Seedance 2.0 planning defaults (`skills/seedance-2-deep-dive/SKILL.md`)

| Decision | Default | Reason |
|----------|---------|--------|
| Duration | 6-8 s first pass; 4-6 s for identity-critical inserts; keep most clips under 10 s | Drift rises with duration; split long ideas into crisp segments |
| Upper limit | 15 s only for deliberate hero tests or structured multi-shot prompts | Last seconds are more likely to soften, mutate, or lose continuity |
| Quality | Draft in fast/medium; final in high only after the shot is coherent | Higher quality sharpens both good detail and bad wobble |
| Resolution | Use the manifest's resolution hint for finals when exposed; verify actual pixels after download | S01 current MCP evidence emitted `1344x768` despite a `1080p` Seedance hint |

Observation worth keeping: "the current Higgsfield MCP accepted a Seedance `resolution=1080p` input while still downloading `1344x768` video, and auto-enabled generated audio without exposing a `generate_audio` input key."

## Costs (planning scenarios, `skills/shot-specifier/references/model-routing.md`)

- "**Draft in fast, keepers in standard.** Fast roughly halves cost and latency".
- "Seedance 2.0 API floor: approx. $0.39–$0.86 per video (ModelArk pricing, duration-dependent)."
- "Kling standard no-audio API floor: approx. $0.084 per second; ~$0.21 for 5 s, ~$0.42 for 10 s."
- "A 60-shot Seedance-heavy plan at public API floor lands ~$23–$52 before retries; a 60-shot Kling-standard plan lands ~$13–$25 [...] realistic floors become roughly $35–$104 (Seedance-heavy) and $19–$63 (Kling-heavy)."
- "On Higgsfield's plan pages, Kling 3.0 equates to roughly 8.7 credits per video".

## Lessons

- Continuity is extracted **before** any prompt: state tracking per character/location/prop, then enforced as prompt constraints or baked into start/end frames.
- A shot is "not complete until a local video file exists or a blocker is recorded"; never drop a required reference silently — stop instead.
- Keep narration out of video generation (`narration=off`) and produce it separately (TTS), so the edit controls timing.
