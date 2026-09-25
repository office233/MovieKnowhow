---
name: ugc-enhance
description: Step 6 (optional, default ON) of the ugc-ad pipeline. Post-produces a finished UGC ad into a leveled-up cut — adds a ducked ElevenLabs music bed, word-level karaoke subtitles synced to the native VO, and flash + zoom-punch transitions on the hard cuts — via a HyperFrames composition. Use standalone to enhance any talking-head/UGC mp4, or as the final step of a UGC ad. Brand-agnostic. Validated 2026-06-22.
---

# ugc-enhance

Turns the bare Seedance master into a music-bedded, subtitled, cut-punched social cut. Local render (no Seedance credits); the only paid call is the ElevenLabs music gen.

## Inputs
- `MASTER` — path to the finished base ad mp4 (the native-VO Seedance output).
- `DEST` — the project folder (writes `<DEST>/enhance/` working dir + `<DEST>/<slug>-enhanced.mp4`).
- `SLUG`.
- optional `BRAND_ACCENT` (hex; default `#2BA8E0` — pull from the product label / brand cues).
- optional `MUSIC` — path to a provided track (skip generation); else ElevenLabs generates one.
- optional `MUSIC_PROMPT`, `MUSIC_VOL` (default `0.16`).

## Steps

1. **Working dir.** `mkdir -p "$DEST/enhance"`; copy `MASTER` -> `$DEST/enhance/video.mp4`. Get duration: `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 video.mp4`.

2. **Music bed.** If `MUSIC` given, copy it to `$DEST/enhance/music.mp3`. Else generate with ElevenLabs (key in `.env.local` as `ELEVENLABS_API_KEY`; read it without echoing):
   ```bash
   KEY=$(grep -E '^ELEVENLABS_API_KEY=' .env.local | cut -d= -f2- | tr -d '"'\''')
   curl -s -X POST "https://api.elevenlabs.io/v1/music" \
     -H "xi-api-key: $KEY" -H "Content-Type: application/json" \
     -d '{"prompt":"<vibe matched to the ad: e.g. clean optimistic corporate tech, light electronic, no vocals, trustworthy product-ad bed>","music_length_ms":<round(duration*1000)+1000>}' \
     -o "$DEST/enhance/music.mp3"
   ```
   Verify it is real audio (`file music.mp3` -> MPEG/ID3, not a JSON error). No vocals (they fight the VO).

3. **Transcribe the VO** for caption timing (English talking-head): in `$DEST/enhance/`, `npx hyperframes transcribe video.mp4 --model small.en`. Read `transcript.json`; run the transcript quality check (strip music/garble tokens). Word-level timing is required for karaoke.

4. **Detect hard cuts:**
   ```bash
   ffmpeg -i "$DEST/enhance/video.mp4" -filter:v "select='gt(scene,0.3)',showinfo" -f null - 2>&1 | grep -oE "pts_time:[0-9.]+"
   ```
   These timestamps become `window.__CUTS` (flash + zoom-punch land here).

5. **Author `captions-data.js`** in `$DEST/enhance/` from the transcript. Read [assets/captions-data.example.js](assets/captions-data.example.js) for the exact shape and the grouping/accent/brand rules. Key rules:
   - Group by sentence end, a >0.4s pause, or max ~5 words; one strong one-word sentence can stand alone.
   - `accent: true` on brand names, figures, and key claim words; `num: true` on figures.
   - **Brand display rule:** the VO is phonetically respelled (e.g. "Noo Standard Labz") but the caption MUST show the real brand spelling (e.g. "Nustandard Labs"). Map spoken words to correct display text, keeping the spoken timing.
   - Set `window.__ACCENT` to `BRAND_ACCENT` and `window.__CUTS` to the detected cuts.

6. **Assemble the composition.** Copy [assets/index.html.template](assets/index.html.template) -> `$DEST/enhance/index.html` and [assets/DESIGN.md](assets/DESIGN.md) -> `$DEST/enhance/DESIGN.md`. Replace `{{DURATION}}` (every occurrence) with the video duration and `{{MUSIC_VOL}}` with `MUSIC_VOL`.

7. **Render.** In `$DEST/enhance/`:
   ```bash
   npx hyperframes validate --no-contrast
   npx hyperframes render . -o "../<slug>-enhanced.mp4" --quality high
   ```
   (Contrast audit is skipped — captions ride over live video frames.)

8. **CHECKPOINT (human).** Open `$DEST/<slug>-enhanced.mp4`. Only a human can verify the audio mix (music ducked under VO) and the captions (timing + the brand spelling on screen). Adjust `MUSIC_VOL`, accent, grouping, or transitions and re-render (free) until right.

## Output
`$DEST/<slug>-enhanced.mp4` (the leveled-up cut) + the re-renderable `$DEST/enhance/` recipe (index.html, DESIGN.md, captions-data.js, music.mp3, transcript.json).

## Constraints
- Music is a bed: ducked under the native VO (`MUSIC_VOL` ~0.16), never vocals.
- Captions ride the lower third; never cover the creator's face. One group visible at a time; every group hard-killed at its end.
- Brand name on screen uses the REAL spelling, not the phonetic VO spelling.
- No em-dashes / en-dashes in any on-screen text.
- Local render only — no Seedance credits. The base master is left untouched (enhanced cut is a separate file).
