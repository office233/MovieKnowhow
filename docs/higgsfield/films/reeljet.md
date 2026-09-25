# reeljet (Xabier Ariznabarreta) — real screen recordings + Higgsfield b-roll + ffmpeg → 16:9 and 9:16 promo ads

- Upstream: <https://github.com/Xabilimon1/reeljet> (commit `02a571c`)
- Local copy: [`../opensource/reeljet/`](../opensource/reeljet/)
- License: MIT © 2026 Xabier Ariznabarreta
- Type: **ad / promo tool** (Claude Code skill + tested Python/ffmpeg core)

## What it makes

"Turn your app / web / SaaS screen recordings into scroll-stopping short promo videos" — `master_16x9.mp4` + smart-reframed `master_9x16.mp4` with kinetic captions coloured from the product palette and music from a local library normalised to −14 LUFS. "Your real UI footage + AI-generated motion, never faked."

## Pipeline (SKILL.md, 5 phases)

**Phase 0 — Intake + brand.** Campaign dir `~/reeljet/ads/<App>/<YYYY-MM-DD>-<campaign>/`; `extract_palette.py` (Pillow) → `palette.json`; `extract_frames.py` scene-detects key frames (`select='gt(scene,0.4)'`).

**Phase 1 — Creative plan (APPROVAL GATE).** Write `plan.json` + `plan.md`; pick music `pick_music.py --mood ... --bpm ... --keywords ...`; "Set shot durations to whole beats (60/bpm)"; estimate Higgsfield credits; "**STOP. Present plan.md + cost. Do not generate until the user approves.**"

Creative direction (`references/creative-direction.md`, verbatim arc):

```
1. Hook (0–2s) — striking outcome + claim caption.
2. Tension (2–8s) — the problem / the old painful way.
3. Reveal (8–20s) — the product doing the thing (real UI clips, animated).
4. Proof (20–26s) — a metric, a second feature, social proof caption.
5. CTA end-card (26–30s) — logo + one action ("Try <name> free").
```

Per-shot fields: `id, source (real_clip|higgsfield_broll|animated_screenshot), asset, duration, caption, transition (cut|crossfade|whip|none), motion_preset, music_beat, aspect_notes`. Captions "Short (≤6 words), present tense, benefit-led." "Never open on a logo or a slow fade."

**Phase 2 — Generation (Higgsfield MCP).** Mapping (`references/higgsfield-tools.md`):
- `real_clip` → no Higgsfield (normalise + concat).
- `animated_screenshot` → `upload_image`(screenshot) → `generate_video`(`model_id`, `image_url`, `prompt`, motion preset) → `subscribe` → download.
- `higgsfield_broll` → text-to-video, or image-to-video from a key frame.
Loop: `preflight_check` → `get_balance` → submit shots with `status != "done"` → download → set `output_path/status/cost` → `get_balance` again. Idempotent: "never resubmit a shot already `done`". Models listed: official API (Soul, Reve, Seedream v4, FLUX.1 Kontext Max, DOP, Seedance v1 Pro, Kling v2.1 Pro) and cloud backend (Kling 3.0, Seedance 2.0, Wan 2.6, Veo 3/3.1, Sora 2, Nano Banana, Soul v2). (Tool names come from a community MCP README; the skill says to trust the live MCP.)

**Phase 3 — Assembly (ffmpeg).** `python3 scripts/assemble.py --campaign-dir <camp>`. Master command builder (verbatim, `scripts/lib/ffmpeg_cmd.py`):

```python
parts = [
    f"[0:v]scale={width}:{height}:force_original_aspect_ratio=decrease,"
    f"pad={width}:{height}:(ow-iw)/2:(oh-ih)/2,setsar=1[base]"
]
cur = "base"
for i, ov in enumerate(overlays, start=1):
    nxt = f"v{i}"
    parts.append(
        f"[{cur}][{i}:v]overlay=0:0:"
        f"enable='between(t,{ov['start']},{ov['end']})'[{nxt}]")
    cur = nxt
...
cmd += ["-c:a", "aac", "-b:a", "192k",
        "-af", "loudnorm=I=-14:TP=-1.5:LRA=11",
        "-map", f"{music_idx}:a", "-shortest"]
```

Captions are Pillow-rendered full-frame transparent PNGs composited with `overlay` (no libass needed). Vertical reframe = blurred background:

```python
fc = (
    f"[0:v]scale={w}:{h}:force_original_aspect_ratio=increase,"
    f"crop={w}:{h},boxblur=20:5[bg];"
    f"[0:v]scale={w}:-2[fg];"
    f"[bg][fg]overlay=(W-w)/2:(H-h)/2[v]"
)
```

End-card: 1080-wide logo-on-brand-colour still appended as a 3 s clip. Normalise clips to 1920×1080@30 (`-r 30 -c:v libx264 -pix_fmt yuv420p`).

**Phase 4 — QA.** "hook readable in 2s; captions in mobile safe margins; audio -14 LUFS; duration within platform limits; H.264/AAC". Redo one shot by resetting its `status` to pending.

## Audio

Local royalty-free library named `<mood>_<bpm>bpm_<genre>.mp3`; "Higgsfield does not produce a dedicated track; embedded clip audio is muted or mixed low."

## Costs

Estimated per run from the live MCP (sum of per-clip costs); no numbers stated.

## Lessons

- Real product footage is the substance; generated clips only add motion/b-roll/transitions.
- `plan.json` is the single source of truth; idempotent generation prevents paying twice.
- Cut on a beat grid derived from the music BPM.
