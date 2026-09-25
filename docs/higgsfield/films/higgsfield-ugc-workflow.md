# higgsfield-ugc-workflow (Joe Benscoter) — one product photo → creator-led 9:16 UGC ad in one Seedance pass

- Upstream: <https://github.com/joebenscoter86/higgsfield-ugc-workflow> (commit `6a9bea5`)
- Local copy: [`../opensource/higgsfield-ugc-workflow/`](../opensource/higgsfield-ugc-workflow/)
- License: MIT © 2026 Joe Benscoter
- Type: **UGC ad** (seven Claude skills driving the Higgsfield MCP + a HyperFrames post pass)

## What was made

A complete creator-led UGC ad with a generated creator, native VO + lip-sync + ambience, then a music bed and karaoke captions. "Reverse-engineered from a single autonomous run of Higgsfield's agent, then rebuilt as reusable skills with human checkpoints and a hard cost gate." Worked example: `examples/surfboards/` ("Joe B Surfboards", 10 s, 3 cuts) with `product.png`, `character.png`, `storyboard.png`, `script.md`, `brief.md`, `enhance/`.

## Pipeline, step by step (`skills/ugc-ad/SKILL.md`)

| # | Skill | Model / tool | Output | Checkpoint |
|---|---|---|---|---|
| 1 | `ugc-product-profile` | MCP `media_import_url` / `media_upload`+`media_confirm` | `product-profile.md` (classification, dimensions, packaging, **exact usage steps**) + product `media_id` | — |
| 2 | `ugc-brief` | none | `brief.md` — angle, **3-cut shot map**, settings, TBD job ids | **approve plan before any spend** |
| 3 | `ugc-base-character` | `soul_2`, 9:16, count 1 | `character.png` — **person only, no product** | approve / regenerate |
| 4 | `ugc-storyboard-sheet` | `nano_banana_pro` (may report as `nano_banana_2`), 16:9 | ONE sheet with three 9:16 panels: Hook (Tight) / Setup-Action (Macro) / Recommendation (Wide) | approve / regenerate |
| 5 | `ugc-multicut-script` | none (authoring) | `script.md` with `SEEDANCE_PROMPT` | approve / edit |
| 6 | `ugc-video` | `seedance_2_0`, 9:16, ≤15 s, 720p, `generate_audio: true` | `<slug>.mp4` | **cost gate** + human audio check |
| 7 | `ugc-enhance` | ElevenLabs music + HyperFrames + ffmpeg | `<slug>-enhanced.mp4` | human mix/caption check |

### Keyframe / reference strategy

- Base portrait: "PERSON ONLY. No product. (Hard rule — product in the base portrait causes compositing drift in the storyboard + video steps.)"
- The storyboard sheet is generated with product + character as references so "Same face + same product packaging in all three panels (that is the whole point — continuity lock)."
- Video call passes **three references** (verbatim):

```
[{ "value": "<STORYBOARD_JOB_ID>", "role": "image" },
 { "value": "<CHARACTER_JOB_ID>", "role": "image" },
 { "value": "<PRODUCT_MEDIA_ID>", "role": "image" }]
```

### Script format (`skills/ugc-multicut-script/SKILL.md`)

"Map three cuts onto the timeline (e.g. 0–4s Hook, 4–10s Setup/Action, 10–15s Recommendation)"; per cut: camera behavior ("handheld micro-shake for selfie hook vs locked-off for macro"), the exact usage step, the spoken line, sound cues. `SEEDANCE_PROMPT` must "OPEN with a one-line voice spec", introduce lines with `she says:` / `he says:`, and end with "No subtitles." Budget: "~2.5 words/sec. (~32 words across 15s validated comfortable.)"

### The shipped surfboard ad prompt (verbatim, `examples/surfboards/script.md`)

```
The voiceover is a calm, stoked, easygoing late-20s male narrator speaking clear, casual American English with a relaxed California surfer cadence. No subtitles, no on-screen captions. A continuous 10 second handheld UGC video at a sunny California beach in soft golden light, photorealistic phone-camera look. The same young male surfer throughout: sun-bleached curly hair, golden tan, freckles, wearing a faded tee under an open short-sleeve linen shirt, holding a cream-paneled wood-rail longboard surfboard. CUT 1 (0 to 3s), tight selfie framing with subtle handheld shake, he holds the longboard upright beside him and looks right into the camera, stoked and genuine, and he says: "Okay, this longboard changed how I surf." CUT 2 (3 to 6.5s), locked-off macro close-up of his hand running down the glossy wood-grain rail of the board, fingers tracing the timber stripes and high-gloss resin, water droplets catching light, and he says: "Hand shaped, real wood rails, pure glide." CUT 3 (6.5 to 10s), wide handheld waist-up shot, he stands on the sand with the longboard planted nose-up beside him, one hand resting on the rail, presenting it to camera with a confident grin, ocean horizon behind, and he says: "One board does it all. Joe Bee Surfboards." Ambient beach sound throughout: gentle wind, distant waves, soft natural room tone. No subtitles.
```

Shot list for that ad (`script.md`): Cut 1 Hook 0–3 s Tight handheld; Cut 2 Setup/Action 3–6.5 s Macro locked-off; Cut 3 Recommendation 6.5–10 s Wide handheld.

### Voice / pronunciation playbook (validated 2026-06-22)

- "Seedance synthesizes the VO from the literal text in the prompt, so spelling drives pronunciation."
- `nustandardlabs` → read "N-U-standard-labs"; `New Standard Labs` → "newstandard labbers"; fix: **`Noo Standard Labz`** ("z" stops schwa insertion). `vial` → **`vile`**. "Joe B" → "Joe Bee".
- "**Append `No subtitles.`** or the model burns auto-captions into the video."
- "Only a human can verify the audio. Render 720p first (cheap; audio is resolution-independent)".
- Captions keep the **real** brand spelling; only the spoken quote is respelled.

### Post / assembly (`skills/ugc-enhance/SKILL.md`)

1. `ffprobe` duration. 2. Music: ElevenLabs `POST https://api.elevenlabs.io/v1/music` with `music_length_ms = duration*1000+1000`, "No vocals (they fight the VO)". 3. `npx hyperframes transcribe video.mp4 --model small.en` (word-level timing). 4. Detect hard cuts:

```bash
ffmpeg -i "$DEST/enhance/video.mp4" -filter:v "select='gt(scene,0.3)',showinfo" -f null - 2>&1 | grep -oE "pts_time:[0-9.]+"
```

5. Author `captions-data.js` (groups ≤~5 words, accent on brand/figures). 6. Fill `index.html.template` (`{{DURATION}}`, `{{MUSIC_VOL}}`). 7. `npx hyperframes render . -o "../<slug>-enhanced.mp4" --quality high`. Music bed ducked at `MUSIC_VOL` ~0.16; flash + zoom-punch on detected cuts; captions in the lower third, never over the face.

## Costs / timings

- "The only paid step is the final video, roughly **67 credits** at the recommended 720p quality."
- "1080p (~135 credits) looks no different from 720p (~67 credits) and renders no faster (audio-bound)."
- Render "~3-8 min and is dominated by AUDIO synthesis"; whole first run incl. approvals "typically 15 to 30 minutes" (GUIDE.md).
- Enhance: free local render + a small ElevenLabs music charge.
- Cost gate: `generate_video` with `get_cost: true` → "This Seedance generation will cost ~<N> credits. Generate? (yes/no)".

## Alternates (only on request)

`kling3_0` for manual camera path / voice from a reference video; `cinematic_studio_video_v2` for stylized premium-commercial looks — re-check audio and media roles via `models_explore` because `generate_audio` and `image` roles are Seedance-specific.

## Lessons

- Stack cheap approved steps (profile → brief → face → storyboard → script) before the single expensive generation.
- One continuous Seedance take with three time-sliced cuts replaces three separate generations + edit.
- Brand names must be phonetically respelled in the VO; always human-check audio.
