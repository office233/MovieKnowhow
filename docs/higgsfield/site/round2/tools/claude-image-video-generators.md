# Claude AI Image / Video Generator (Higgsfield MCP landings)

Sources:
- https://higgsfield.ai/claude-ai-image-generator
- https://higgsfield.ai/claude-ai-video-generator

Both are SEO landings for using Higgsfield through Claude's MCP connector; MCP setup and skills are covered in [../../mcp/INDEX.md](../../mcp/INDEX.md).

Setup (both pages): Claude -> Settings -> Connectors -> Add custom connector "Higgsfield" -> URL `https://mcp.higgsfield.ai/mcp` -> Add -> Connect -> sign in. In Claude Code use the CLI instead.

Image page facts: 15+ image models (Nano Banana Pro, Soul, Seedream, FLUX, GPT Image, Kling O1, Wan); up to native 4K (4096x4096); ratios 1:1, 9:16, 16:9, 4:5, 3:4; Nano Banana Pro 4K in under 10 s; watermark-free on paid plans; brand colours can be locked to exact Hex/RGB; Soul ID for consistent characters; batch presets "UGC", "Editorial", "Product Hero".
Video page facts: 30+ video models (Veo, Kling, Seedance, Soul, Minimax Hailuo, Cinema Studio); up to 4K, up to 15 s per clip; 16:9, 9:16, 1:1, 4:5; batch presets "UGC", "TV spot", "Wild Card"; renders are async so you can keep briefing.
Three ways of working, from simplest to biggest: one render (Claude picks model and parameters) -> **model showdown** (same brief to several models in parallel, pick the winner) -> **full production** (train a character, generate scenes, keep cast and brand kit in history for reuse weeks later).
Commercial use allowed; check model terms when the brief uses brands, copyrighted material or real likenesses.

## Prompts

4 new verbatim prompt(s) below; 2 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Single render

- Source: https://higgsfield.ai/claude-ai-image-generator
- Model: Claude + Higgsfield MCP
- Settings: agent picks model
- Use-case: cinematic film scene

```text
Generate a cinematic portrait of a woman in a neon-lit Tokyo alley at night, shot on 35mm.
```

### Model comparison

- Source: https://higgsfield.ai/claude-ai-image-generator
- Model: Claude + Higgsfield MCP
- Settings: parallel run on 3 models
- Use-case: product ad

```text
Run this product shot on Nano Banana Pro, Soul, and Seedream and show me the best one.
```

### Full production

- Source: https://higgsfield.ai/claude-ai-image-generator
- Model: Claude + Higgsfield MCP
- Settings: Soul ID training + 6 images
- Use-case: character/consistency

```text
Train a character from these photos, then generate a 6-shot lookbook for our spring drop.
```

### Model comparison

- Source: https://higgsfield.ai/claude-ai-video-generator
- Model: Claude + Higgsfield MCP
- Settings: parallel run on 3 models
- Use-case: cinematic film scene

```text
Run this scene on Veo, Kling, and Seedance and show me the best one.
```

### Already captured elsewhere (linked, not repeated)

- Single render: "Generate a cinematic 5-second wide shot of a neon-lit Tokyo alley at night...." -> [site/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP.md](../../blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP.md)
- Full production: "Train a character from these photos, then generate a 6-shot product reel for TikTok...." -> [site/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP.md](../../blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP.md)
