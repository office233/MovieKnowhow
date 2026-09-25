# cli (higgsfield-ai/cli) — the official Higgsfield command-line tool

- Upstream: <https://github.com/higgsfield-ai/cli> (commit `dc7e2d2`) · npm `@higgsfield/cli` · brew `higgsfield-ai/tap/higgsfield`
- Local copy: [`../opensource/cli/`](../opensource/cli/) (`README.md`, `MODELS.md`, `install.sh`; binary not included)
- License: MIT © 2026 Higgsfield AI
- Type: **tool** (official)

"Generate images, videos, 3D assets, audio, and finished-video analysis from the terminal using 40+ Higgsfield AI models [...] Train face-faithful Soul characters and produce branded marketing assets without leaving your shell."

Everything film-relevant — install, auth, every command group, per-model flags/enums for Seedance 2.0/2.5, Kling, Veo, Cinema Studio 3.0/3.5, Marketing Studio, Soul, audio models, the Video-Explainer block pipeline, workflows (reframe, dubbing, voice-change, draw-to-video), cost estimation and all credit numbers — is documented in **[cli-and-api.md](cli-and-api.md)**.

How it is used to make content in the other projects:
- [UGC-dashboard.md](UGC-dashboard.md) — spawns `higgsfield generate create marketing_studio_video ... --wait --json` from a Next.js server.
- [higgsfield-ai-prompt-skill.md](higgsfield-ai-prompt-skill.md) — two-step preflight `higgsfield model get <id>` → `higgsfield generate cost <id> ...` before every paid video.

The CLI's own multi-clip "film" recipe is the **Video Explainer**: narration blocks with `seed_audio` → matching 10 s `gemini_omni` clips → `explainer_video` assembler pairing each clip with its audio (optional subtitles). It is the only official, end-to-end assembly path in the CLI; everything else ends at a clip URL and is assembled in an NLE, ffmpeg or Remotion.
