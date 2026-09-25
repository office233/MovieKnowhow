# xAI Grok Imagine (video) and Grok Imagine 1.5

Sources: https://higgsfield.ai/grok-imagine, https://higgsfield.ai/grok-imagine-1.5

## Grok Imagine
- Speed is the selling point: standard-quality clips in ~5-20 s, complex renders within ~30 s.
- Video + audio generated simultaneously (spatial audio follows action); 24 fps; 6-15 s clips; up to 1080p; 16:9, 9:16, 1:1 and more.
- Zero-shot identity preservation from a single reference photo.
- Natural-language camera direction (focus shifts, lighting changes, dolly zoom, pans).
- Use cases: fast action/SFX, product-photo-to-ad with synced voiceover, previs/concept.
- Related: Grok Imagine Edit (restyle footage by text), Grok Imagine 2.0 (image gen/edit, API $0.04/image), Grok Imagine Video 1.5 API $0.08/s. Site: "Grok Video for top instruction following".

## Grok Imagine 1.5 (image-to-video preview)
- One start image + motion prompt; keeps detail and lighting of the source frame (continues rather than reinterprets).
- Settings: 480p or 720p; 2-15 s.
- Chain shots: stage each frame, animate, join into longer scenes with a consistent look.
- Prompt advice (FAQ): describe **what moves and how** - camera move, pacing, atmosphere, sound; be directional ("slow push-in", "pan left", "embers drifting"); name the subject's action explicitly; short prompts for quick natural motion, detailed prompts when you have a specific shot.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Grok Imagine 1.5: Turn Any Photo Into Video / Higgsfield | https://higgsfield.ai/grok-imagine-1.5 | 1 |
| Grok Imagine AI Video Generator / Fast AI Videos / Higgsfield | https://higgsfield.ai/grok-imagine | 0 |

## Verbatim prompts (1)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P037 - FAQ example of a detailed prompt

- Page: https://higgsfield.ai/grok-imagine-1.5 | Model: Grok Imagine 1.5 (image-to-video) | Settings: start frame + prompt; 480p/720p; 2-15 s | Use-case: cinematic film scene

```text
Slow cinematic push-in as embers drift across the scene and the fabric stirs in the wind.
```
