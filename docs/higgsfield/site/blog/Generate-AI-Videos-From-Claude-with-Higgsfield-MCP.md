# How To Generate AI Videos Straight From Claude with Higgsfield's MCP

Source: https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP  
Higgsfield, May 8, 2026  
Prompts extracted: 4

**Higgsfield MCP** server: `https://mcp.higgsfield.ai` (also works for Claude web/desktop/mobile/Claude Code, Cowork, OpenClaw, Hermes Agent, NemoClaw). 30+ video/image models (Veo 3.1, Sora 2, Kling 3.0, Seedance 2.0, Wan 2.6, MiniMax Hailuo, Soul, Soul Cinema, Cinema Studio; images Soul 2.0, Nano Banana Pro, Flux 2.0, Seedream 4.5…), up to 4K, clips up to 15 s, any aspect ratio, no API keys.
Setup (~1 min): Claude Settings -> Connectors -> Add custom connector "Higgsfield" + URL -> Connect -> sign in (new accounts get free credits) -> optionally set read/write permissions to **Always Allow** for uninterrupted runs. Managed org plans may need admin allowlisting.
Capabilities via chat: any input (text, image, sketch, pose ref, audio, footage); multi-image refs for identity; first/last-frame interpolation; video-to-video restyle; **Soul Character** trained once and reused; voice cloning + multilingual lip sync; face swap, de-aging, crowd shots; camera moves/lens/DoF/fps from plain language; motion brushes, physics, slow-mo time remapping; post (background swap, extend, relight/weather, inpaint, auto-cut, reframe, upscale, restore, stabilize); audio (VO, music, SFX, dubbing) synced; batch/parallel runs with presets (UGC, TV spot, Wild Card) + brand kits.
Three usage modes: single asset; **multi-model showdown** (same brief on several models, pick winner); full production (train character -> multi-shot scenes, Claude keeps project state across sessions). Outputs land in your Higgsfield workspace. Credits billed normally (Unlimited doesn't apply to MCP).

## Prompts (verbatim)

### P1. First prompt: neon Tokyo alley (model specified)
- Use-case: Cinematic film scene | Model: Seedance 2.0 via Claude + Higgsfield MCP | Settings: 5 s wide shot

```text
Generate a cinematic 5-second wide shot of a neon-lit Tokyo alley at night, rain on the pavement, one figure walking away from camera. Use Seedance 2.0.
```

### P2. Single-asset render
- Use-case: Cinematic film scene | Model: Claude picks model via Higgsfield MCP | Settings: 5 s wide shot

```text
Generate a cinematic 5-second wide shot of a neon-lit Tokyo alley at night.
```

### P3. Multi-model showdown
- Use-case: Other | Model: Veo, Kling, Seedance via MCP | Settings: parallel multi-model

```text
Run this scene on Veo, Kling, and Seedance and show me the best result.
```

### P4. Train character then 6-shot UGC product reel
- Use-case: UGC | Model: Claude + Higgsfield MCP (Soul Character + UGC preset) | Settings: 6 shots, TikTok vertical

```text
Train a character from these photos, then generate a 6-shot product reel for TikTok using the UGC preset.
```

