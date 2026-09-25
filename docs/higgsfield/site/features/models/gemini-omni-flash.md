# Google Gemini Omni Flash (1.1, 4K)

Source: https://higgsfield.ai/gemini-omni-flash

- Google DeepMind video generation + editing model with Gemini reasoning/world knowledge.
- Inputs: image (PNG/JPG/WebP <=20 MB), video (MP4/MOV/WebM <=60 s), audio (MP3/WAV <=30 s), text, sketches. Output MP4 H.264 in 16:9, 9:16, 1:1, 4:5.
- FAQ spec: native 720p 24 fps, default 8 s per generation, extendable to 60 s via continuation; 1080p upscale as post step. Page headline says "1.1 4K" with a 4K master - treat 4K as the newer 1.1 capability.
- **Extend**: 1.1 reads up to 10 s of prior context and continues motion/light/story in 10 s steps.
- **Start + end frame**: pin opening and closing frames; it builds pushes, zoom transitions, seamless loops between.
- **Recut without reshooting**: load up to 30 s of real footage and direct changes in plain language (swap subject, shift mood, retime action).
- Combine clips/stills/references into one story; transfer motion from one clip and look from another; swap a character via reference image (keeps motion + dialogue); turn sketches into footage.
- Unlimited multi-turn editing in a session with scene consistency; branch/restore previous turns.
- Multilingual speech (11 languages) with lip-sync re-rendered to the new language's phonemes.
- Every output carries SynthID watermark + C2PA content credentials.
- Prompting style shown: terse imperative edit instructions on an input video ("Make the bicycle completely invisible").

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Gemini Omni Flash - AI Video Generation / Higgsfield | https://higgsfield.ai/gemini-omni-flash | 4 |

## Verbatim prompts (4)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P033 - Remix Reality example

- Page: https://higgsfield.ai/gemini-omni-flash | Model: Gemini Omni Flash 1.1 | Settings: video-to-video edit instruction on an input video | Use-case: other

```text
Move her onto a vast blooming flower field
```

### P034 - Remix Reality example

- Page: https://higgsfield.ai/gemini-omni-flash | Model: Gemini Omni Flash 1.1 | Settings: video-to-video edit instruction on an input video | Use-case: other

```text
Cinematic close-up of her face
```

### P035 - Remix Reality example

- Page: https://higgsfield.ai/gemini-omni-flash | Model: Gemini Omni Flash 1.1 | Settings: video-to-video edit instruction on an input video | Use-case: other

```text
Make the bicycle completely invisible
```

### P036 - Transform your world example

- Page: https://higgsfield.ai/gemini-omni-flash | Model: Gemini Omni Flash 1.1 | Settings: inputs: image + video + audio; restyle | Use-case: anime/animation

```text
Transform the entire scene into a stylized 2D cartoon animation aesthetic - hand-drawn illustration style with bold clean black outlines, cel-shaded coloring with flat shaded colors and soft gradients, painterly textures on the buildings, street, and sky, slightly exaggerated character proportions emphasizing his cool youthful vibe, vibrant saturated color palette reminiscent of modern animated feature films
```
