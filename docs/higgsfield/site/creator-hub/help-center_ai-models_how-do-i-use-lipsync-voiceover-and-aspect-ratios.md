# How do I use lipsync, voiceover, and aspect ratios?

Source: https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-use-lipsync-voiceover-and-aspect-ratios
Published: Aug 1, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article. Where audio, lip sync and aspect ratio live.

**Audio (higgsfield.ai -> Audio)**: Text to Speech; Voice Change (swap the voice in a clip); Translate (re-voice into 18 languages). Built-in Voice Presets or Create custom voice -> Add Voice (record or upload MP3/WAV sample, cloned into a reusable voice; only your own or consented voice). Pick the audio model (includes Qwen), adjust emotion sliders.

**Lip sync (Video -> Lipsync Studio, "Create Talking Clips")**: upload character image or video, type the line in Audio text (or generate audio), pick model and scene template (General, Selfie, Podcast, Car Talking, ...).
| Model | Input | Note |
|---|---|---|
| Google Veo 3.1 | image->video | cinematic talking video |
| Kling 2.6 Lipsync | image->video | up to 1080p with audio |
| Wan 2.5 Speak | image->video | 480-1080p |
| Kling Avatars 2.0 | image->video | talking avatars, longer clips |
| Higgsfield Speak 2.0 | image->video | priority-queue speed |
| Infinite Talk | image->video | long-form talking |
| Kling Lipsync | video->video | lip sync on existing footage |
| Sync Lipsync 3 | video->video | precise, up to 4K |

**Native audio co-generation** (audio made in the same pass, physically aligned): Seedance 2.5, Seedance 2.0 (voice, lip sync, ambience), Kling 3.0, Flux 3, MiniMax Hailuo 3.0, Wan 2.5; all Cinema Studio versions. Prefer native audio when you want perfect alignment; Lipsync Studio adds a mouth after the fact.

**Aspect ratios**: 9:16 (TikTok/Reels/Shorts), 16:9 (YouTube/film), 1:1 (IG feed), 4:3, 3:4 (Pinterest), 21:9 (cinematic ultrawide); some models offer Auto (inferred from input). Change after the fact: Edit -> Reframe (video); Expand (outpaint) for images.

MCP (Claude) supports voiceover, voice change, dubbing; ChatGPT plugin has no audio.
