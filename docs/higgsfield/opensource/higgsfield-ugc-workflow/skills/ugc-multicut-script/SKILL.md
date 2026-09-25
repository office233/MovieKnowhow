---
name: ugc-multicut-script
description: Step 4 of the ugc-ad pipeline. Write a motion-dense multi-cut video script — 0–15s split into three time-sliced cuts matching the storyboard (Hook / Setup-Action / Recommendation), with camera behavior, physical interaction beats, and a spoken monologue with sound cues. This becomes the Seedance prompt. No generation; authoring only. Brand-agnostic.
---

# ugc-multicut-script

Writes the directorial prompt that drives the single Seedance generation.

## Inputs
- `PROFILE` (product-profile.md), `BRAND_FACTS` (voice/positioning), `DEST`, optional `DURATION` (default 15, max 15).

## Steps

1. **Map three cuts onto the timeline** (e.g. 0–4s Hook, 4–10s Setup/Action, 10–15s Recommendation), each matching its storyboard panel.

2. **For each cut, specify:**
   - camera behavior (handheld micro-shake for selfie hook vs locked-off for macro),
   - the physical interaction (the exact usage step from PROFILE — sanitizing, pouring, applying, gesturing),
   - the spoken monologue line (natural creator voice, brand facts woven in, NO em-dashes; write brand names / unusual words PHONETICALLY — see the VO Pronunciation Playbook below),
   - sound cues (ambient room tone, product sfx).

3. **Write `DEST/script.md`:**

   ```markdown
   # UGC Script — <slug> (<DURATION>s, 3 cuts)

   ## Cut 1 — Hook (0–Xs, Tight, handheld micro-shake)
   - Action: ...
   - VO: "..."
   - SFX: ...

   ## Cut 2 — Setup/Action (X–Ys, Macro, locked-off)
   - Action: <exact usage step>
   - VO: "..."
   - SFX: ...

   ## Cut 3 — Recommendation (Y–<DURATION>s, Wide, handheld)
   - Action: ...
   - VO: "..."
   - SFX: ...

   ## SEEDANCE_PROMPT
   <one dense paragraph concatenating the three cuts as a continuous motion+dialogue description — this exact block is what the video step passes to seedance_2_0. OPEN with a one-line voice spec (e.g. "The voiceover is a calm, credible late-20s female narrator speaking clear American English. No subtitles, no on-screen captions."). Introduce each spoken line with `she says:` / `he says:` and put the line in quotes. End the block with "No subtitles.">
   ```

## Output
`DEST/script.md` containing a `SEEDANCE_PROMPT` block.

## Constraints
- Total runtime ≤ 15s (Seedance hard cap).
- Monologue must be speakable in the allotted seconds (~2.5 words/sec). (~32 words across 15s validated comfortable.)
- No em-dashes / en-dashes anywhere in the VO lines.

## VO Pronunciation Playbook (validated 2026-06-22, Seedance 2.0 native audio)

Seedance synthesizes the VO from the literal text in the prompt, so spelling drives pronunciation. Two failure modes seen live:
- **Letter-by-letter spell-out:** a non-word brand like `nustandardlabs` is read "N-U-standard-labs".
- **Mangling:** the naive fix `New Standard Labs` came out "newstandard labbers" (words fused + a schwa turned "Labs" into "labbers").

Rules that fixed it:
1. **Respell phonetically with clear word boundaries.** `nustandardlabs` -> `Noo Standard Labz`. Use "z" for voiced plural endings ("Labz" not "Labs") to stop schwa insertion. Test it by reading your spelling aloud as a stranger would.
2. **Explicit dialogue form:** `she says: "..."` (not `saying, "..."`) — uses your exact words.
3. **Append `No subtitles.`** or the model burns auto-captions into the video.
4. **Specify the voice once** at the top of SEEDANCE_PROMPT: tone + age + gender + language.
5. **Only a human can verify the audio.** Render 720p first (cheap; audio is resolution-independent), confirm pronunciation, keep that take. Never pay for 1080p just to check audio.

Keep the WRITTEN brand spelling correct everywhere else (profile, caption, on-screen label) — ONLY the spoken VO quote gets the phonetic respelling.

### Known-fix lexicon (drop these spellings straight into the spoken VO quote)
| Word | Mispronounced as | Use this spelling | Why |
|---|---|---|---|
| `nustandardlabs` | "N-U-standard-labs" / "newstandard labbers" | `Noo Standard Labz` | word boundaries + voiced "z" ending |
| `vial` | "vawl" / "vile-uhl" | **`vile`** (validated 2026-06-22) | one-syllable `/vaɪl/`; the engine knows the word and says it clean, and in context (vials on screen) the ear reads "vial". Two-syllable respellings (`vye-uhl`, `VY-ull`) collapse to "vawl". |

When a word with an `aɪ.əl` glide (vial / trial / dial / phial) misfires, anchor it to a real one-syllable word the TTS already knows rather than hyphenating syllables.
