# add-music-to-video (Sonilo cookbook, cindyxu1030) — Higgsfield clips → stitched, graded trailer with a soundtrack matched to the cut

- Upstream: <https://github.com/cindyxu1030/add-music-to-video> (commit `2d53749`)
- Local copy: [`../opensource/add-music-to-video/`](../opensource/add-music-to-video/) (≈63 MB incl. demo MP4s in `assets/`)
- License: MIT © 2026 Sonilo
- Type: **post-production / audio tool + worked trailer** (vendor cookbook for Sonilo `video_to_music` / `video_to_sfx`)

## What was made

"a 15-second trailer assembled from AI-generated clips (stitched → graded → music by Sonilo)" — `assets/demo-trailer.mp4` ("Monolith trailer"). Per `examples/higgsfield.md`: "clips generated on Higgsfield (Seedance 2.0 + Kling 3.0 Turbo)". Other demos (`DEMOS.md`): Midnight Aviator Journey (21 s), NaukNauk (14 s), Grid Runner, Thriller, Sriracha, Cinematic v1 (20 s); SFX demos `sfx-vertical.mp4`, `sfx-landscape.mp4`. Packaged skill: <https://github.com/cindyxu1030/higgsfield-trailer-finishing>.

## Generation settings that worked (verbatim, `examples/higgsfield.md`)

> "- **Silent clips.** Set `generate_audio: false` (Seedance) or the equivalent on every clip. The soundtrack is one layer added over the whole assembled cut at the end; per-clip model audio fights it.
> - **Model per beat:**
>   - Camera moves with a defined start and landing (rise, reveal, pull-back) → **Seedance 2.0** with a start image, an end image, and a reference frame to hold identity across the move. Minimum 4s.
>   - Single-frame animation or a short beat (about 3s) → **Kling 3.0 Turbo** with one start image.
> - **Don't bake transitions into clips.** Ask the model for the action only; add cross-dissolves and the fade-to-black in the edit
> - Reference settings from the demo: 4s per clip, 720p, 16:9."

## Pipeline (PIPELINE.md / RECIPES.md)

```
generated / stitched clips (any model)
   └─ 1. STITCH ── assemble the clips into one cut
        └─ 2. GRADE ── (optional) a cinematic color pass
             └─ 3. ADD AUDIO ── Sonilo: music matched to the cut + optional sound effects
                  └─ 4. MUX ── lay the audio over the master
```

**1. Stitch** (verbatim):

```bash
for f in clip1.mp4 clip2.mp4 clip3.mp4; do
  ffmpeg -y -i "$f" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30" \
    -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -an "norm_$f"
done
printf "file 'norm_clip1.mp4'\nfile 'norm_clip2.mp4'\nfile 'norm_clip3.mp4'\n" > list.txt
ffmpeg -y -f concat -safe 0 -i list.txt -c copy stitched.mp4
```

Cross-dissolve: `[0:v][1:v]xfade=transition=fade:duration=0.5:offset=<a_dur-0.5>,format=yuv420p`; fade to black: `fade=t=out:st=<dur-0.6>:d=0.6`.

**2. Grade** (test on stills first):

```bash
GRADE="eq=contrast=1.12:saturation=1.14:gamma=0.97,curves=r='0/0 0.5/0.53 1/1':b='0/0.06 0.5/0.47 1/0.88',vignette=PI/4.5,unsharp=5:5:0.5:5:5:0.0,noise=alls=5:allf=t"
ffmpeg -y -ss 2 -i stitched.mp4 -frames:v 1 test.png
ffmpeg -y -i test.png -vf "$GRADE" test_graded.png     # look at it, tune, repeat
ffmpeg -y -i stitched.mp4 -vf "$GRADE" -c:v libx264 -crf 16 -preset slow -pix_fmt yuv420p -tune film -an graded.mp4
```

**3. Music from the finished cut** — proxy first (`scale=1280:720`, crf 30), then:

```
video_to_music({
  video_path: "path/to/final_cut.mp4",
  prompt: "epic apocalyptic, dread building to a huge swell"   // optional single style hint
})
// → an .m4a soundtrack matched to the video length
```

Optional `video_to_sfx` (impacts, ambience, transitions timed to picture; ≤3 min video; music ≤6 min). For dialogue: `preserve_speech: true`, or the `audio_ducking` endpoint on an existing track.

**4. Mux** (verbatim):

```bash
ffmpeg -i master.mp4 -i soundtrack.m4a \
  -filter_complex "[1:a]afade=t=out:st=<dur-0.5>:d=0.5[a]" \
  -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 320k -shortest final.mp4
```

Also: recipes for MoviePy, Remotion (render → music → feed back as `<Audio>`), auto-editor, ComfyUI node, ffmpeg-only curl.

## Relation to Higgsfield's own audio

"Higgsfield's own model catalog includes `sonilo_music` (music from a text prompt at a fixed duration). That's a different tool for a different job — use it for fixed-length beds; use `video_to_music` when the music should match an assembled cut."

## Costs

Sonilo API billed per second of generated audio (rates on sonilo.com; not stated). Clip costs not stated.

## Lessons

- Generate clips **silent** and without transitions; add one soundtrack over the finished, graded cut so swells and hits land on the edit.
- Seedance 2.0 for start→end camera moves (≥4 s), Kling 3.0 Turbo for ~3 s single-image beats.
- Normalise resolution/fps/SAR before concat — "Mismatched frame rate or aspect is the most common assembly failure."
