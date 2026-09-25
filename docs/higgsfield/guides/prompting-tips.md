# Prompting tips for cinematic video on Higgsfield

Researched: 2026-09-25 (search extracts of official help center/blog; direct fetch blocked).

## Prompt layers (help center)
Subject → details (look, wardrobe, expression) → environment → style. For video add **camera** and **mood**.
Fuller video prompts cover: cinematography (framing, movement), lighting & color, action beat by beat,
audio (score, ambience, dialogue with timing), and a shot list with durations.

## Rules of thumb
- Write like a director in 1–2 sentences: subject, action, setting, lighting, camera. Add mood/style
  (cinematic, documentary, dreamlike) only if it matters.
- Avoid empty adjectives ("beautiful", "amazing") — they give the model nothing to execute.
- Image-to-video: the image already defines look; the prompt should describe **motion and timing only**.
- In Cinema Studio, leave camera/lens/genre to the UI — don't restate them in text.
- Dialogue: quote the exact line and add tone, language, pacing, emotion (Veo 3.1, Kling, Seedance native audio).

## Multi-shot structure (Seedance 2.0/2.5, Kling 3.0)
- Put **shot count, total duration and aspect ratio at the top** of the prompt.
- Number each shot and describe its exact action + camera move.
- Give an escalation arc, e.g. calm → threat → transformation → aftermath.
- Kling 3.0 multi-shot: up to 5 shots within the 15 s limit (Auto mode splits for you; Custom mode sets
  per-shot prompt + duration). More shots = fewer seconds each.
- Chain shots with last-frame → next start-frame; use start+end frames to make transitions predictable.
- Proven viral Seedance formats named by Higgsfield: Transformations, Orbs, POVs, Fights, Animation.
  Example pattern: a single continuous 15 s take that crests a rooftop, orbits two fighters, ramps into
  slow motion for one dodge, then follows them off the train.

## Save credits while iterating
- Draft at low resolution (480p/720p) — motion, pacing and camera read fine there; upscale/re-render the approved take.
- Use cheaper/faster models for tests (Veo 3.1 Lite, Kling 3.0 Turbo, Seedance 2.0 Mini/fast), premium for finals.
- Train Soul ID for recurring characters to avoid regenerations caused by face drift.

## Sources
- https://higgsfield.ai/creator-hub/help-center/getting-started/how-do-i-write-a-good-prompt
- https://higgsfield.ai/blog/ai-video-prompt-mistakes
- https://higgsfield.ai/blog/seedance-prompting-guide
- https://higgsfield.ai/blog/seedance-2-5-prompting-guide
- https://higgsfield.ai/blog/Kling-3.0-is-on-Higgsfield-User-Guide-AI-Video-Generation
- https://higgsfield.ai/blog/How-to-Use-Google-Veo-3.1-Complete-Guide-for-the-New-Model
- https://higgsfield.ai/blog/ai-video-credits-explained
