# Cinema Studio (Higgsfield) — craft notes

Fetched/researched: 2026-09-25. Method note: direct page fetches of higgsfield.ai were blocked by this
environment's egress proxy, so these notes are built from search-engine extracts of the official pages
listed below plus the official Higgsfield MCP model catalog (`models_explore`). Paraphrased; verify details
against the live pages before relying on exact numbers.

## What it is
Cinema Studio is Higgsfield's "director's panel" workspace. The idea: the **prompt carries the scene**
(who, what happens), while **UI settings carry the visual logic** (genre, camera body, lens, focal length,
aperture, color grade, lighting, speed ramp). Versions seen in official material: 2.0 (optics simulation),
3.0 (genre + speed ramp + audio), 3.5 (AI-assisted directing chat, Elements, team features), 4.0 (current).

## Project structure
- **Shot** = one prompt, one camera move, one clip. Shots group into **Scenes**; scenes chain into a **Story**.
- Start by defining the world with reference images (3.x: up to 9 character+location refs; 4.0: up to 50
  images per generation to lock face, product shape or style).
- Per-shot settings: camera, lens, focal length, aperture. Project-wide settings: genre, era, palette.

## Settings you can set (by version)
- **2.0**: camera sensor, lens glass (e.g. Cooke-style), focal length 8–50 mm, aperture for real depth of field/bokeh.
- **3.0 model (API `cinematic_studio_3_0`)**: resolution 480p/720p/1080p/4K (higher = more credits),
  genre auto/action/horror/comedy/noir/drama/epic, optional audio, start/end frame images,
  aspect ratios 21:9 … 9:16, duration 4–15 s.
- **v2 video model (`cinematic_studio_video_v2`)**: genre (action, horror, comedy, western, suspense,
  intimate, spectacle), std/pro mode, **speed ramp** (linear, slowmo, speedup, impact, custom),
  **multi-shot** with auto or custom shot list, prompt-adherence strength (cfg 0–1), 3–12 s.
- **4.0**: generations up to 30 s; Film Setup = genre (General, Action, Epic, Drama, Comedy, Horror, Noir) +
  era (60s–2020s) + tempo; **Tempo** controls how often the edit cuts ("Single Shot" = no cuts);
  30+ camera presets (e.g. POV, Robot Arm, Pan Left, Helicopter Shot); 50+ color palettes;
  6 lighting presets or custom (color, brightness, diffusion, angle); **AI Cast** (reusable actors);
  **Cinematic Locations**; team features (live multi-user generation, element sharing, canvas, project brief).

## Prompting rules (actionable)
1. Do **not** type camera body, lens names, focal lengths, apertures or genre words into the prompt —
   those are UI settings; duplicating them in text confuses the model.
2. Use cinematographer verbs for motion: dolly in, push, orbit/arc, crane, static, handheld, tracking.
   State start/end angle, how far the camera travels (e.g. degrees of orbit), camera height, and whether it
   is gimbal-smooth or handheld.
3. Camera moves are **hashtags**: type them or pick from the library; several can be stacked on one shot
   and they execute in order.
4. For image-to-video, stop describing appearance (the frame already has it) and describe **what happens**:
   action beats, camera move, timing, mood.
5. Pick genre + speed ramp deliberately — they drive pacing (e.g. "impact" ramp for fight hits).

## Sources
- https://higgsfield.ai/blog/cinema-studio-3.0 (Prompt Guide: 100+ camera/lighting/motion prompts)
- https://higgsfield.ai/blog/cinema-studio-guide (Cinema Studio 2.0)
- https://higgsfield.ai/blog/cinema-studio-3
- https://higgsfield.ai/blog/cinema-studio-3.5-full-tutorial
- https://higgsfield.ai/blog/cinema-studio-4-0
- https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-cinema-studio
- https://higgsfield.ai/cinematic-video-generator
- Higgsfield MCP `models_explore` (list, type=video), queried 2026-09-25
