# How do I use Seedance?

Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance
Published: Aug 1, 2026 (6 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article (model guide). Seedance = ByteDance multimodal video family (text + images + video + audio in, native sound out, multilingual lip sync).

| Variant | Best for | Resolution | Length |
|---|---|---|---|
| Seedance 2.5 | latest; longest clips, synced audio | up to 1080p (Pro/Plus and up) | 4-30 s |
| Seedance 2.5 Edit | edit existing clips incl. audio, region edits | 480-720p | matches source |
| Seedance 2.0 | max quality, full multimodal | 480p-4K | 4-15 s |
| Seedance 2.0 Fast | volume iteration | 480-720p | 4-15 s |
| Seedance 2.0 Mini | max speed, short-form | 480-720p | 4-15 s |
Older: Seedance 1.5 Pro, Pro, Pro Fast under All models. Seedance 2.5 accepts any ratio 9:16-21:9, up to 50 refs (30 images, 10 videos, 10 audio); Seedance 2.0 up to 9 images, 3 videos, 3 audio. Not on Starter/Basic.

**First-clip method**
1. Start image-to-video at 720p with a sharp, front-facing, well-lit reference and a short action + camera prompt (more predictable and cheaper than text-only).
2. Structured prompt order: subject + action -> setting + lighting -> camera move -> mood/style (optionally SFX line).
3. Watch the whole clip; failures usually show around 5-8 s (motion holding? camera move executed?).
4. Change one thing per iteration (prompt OR reference).
5. Re-run the identical prompt at 1080p/4K once composition works.
Settings bar: duration, aspect ratio (Auto infers from input), resolution up to 4K, bitrate. Sound toggle does not change cost.

**Camera vocabulary Seedance reads**: dolly in, truck left, arc shot, push in, pull back wide, handheld follow, crane up, orbital move.

**Reference tags**: `@character` (face geometry/skin/style within one clip), `@style` (lighting, palette, mood from an image/film still), `@motion` (camera behavior/motion from a video), `@audio` (sync visuals, lip sync, ambience). Across separate generations use a saved Element (click `@ Elements` or type `@`); for real people train Soul ID and make the Element from it.

**Fixes**: camera ignored -> specific camera terms; identity drifts mid-clip -> add visual anchors (hair color, clothing details, distinguishing features) and use an Element; jerky cut between clips -> generate the last frame of clip A and first frame of clip B, then use first-and-last-frame to generate the transition; burning credits -> prototype short at 720p.
In Canvas: connect the reference to the Seedance node AND describe its role at the start of the prompt. Canvas/MCP/CLI/Supercomputer always cost credits.

## Prompts (verbatim)

### CH-07
- Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-seedance (local: `help-center_ai-models_how-do-i-use-seedance.md`)
- Model: Seedance (2.0 / 2.5)
- Settings: Video; example of the recommended order subject/action -> setting/light -> camera -> mood + SFX

```text
A character walks through a crowded train station at rush hour, checking a phone, camera tracking close at shoulder height, warm overhead fluorescent light, tense and rushed. SFX: station ambient noise, announcements in the background.
```
