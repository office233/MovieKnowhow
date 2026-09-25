# Ad Multiplier (skill landing page)

Source: https://higgsfield.ai/ad-multiplier ("Multiply your top performing ad in Claude"). Workflow notes already exist in [../../../workflows/ad-multiplier/SKILL.md](../../../workflows/ad-multiplier/SKILL.md).

## What it does
- Takes one proven video ad and decomposes it into **character, outfit, location and objects**, then regenerates variants with new ones while keeping the cut, motion, pacing and performance.
- **Original audio is kept on every variant** (voice, music, timing). Burned-in captions can be stripped so variants ship clean.
- "Make content for other regions" restyles the whole pack per market (demo: Berlin, Tokyo, Sao Paulo). **Translation is a separate, explicit step**: captions are removed, new ones generated in the target language and a synthetic voice-over is added - so the original-audio guarantee does not apply to translated variants.
- Runs in Claude through the Higgsfield MCP connector (`https://mcp.higgsfield.ai/mcp`, Customize -> Connectors, no API key) and in Supercomputer ("Mr. Higgs").
- Credits: each variant shows its cost by model and resolution; plan credits apply. Output usable commercially under the Terms of Use.

## How to use (steps)
1. Connect Higgsfield in Claude (Customize -> Connectors -> add URL -> sign in).
2. Tell Claude to multiply your top ad (it can scan your creatives and pick the best performer).
3. Specify per-variant swaps (character / outfit / location / objects) and how many variants (demo: x12, 9:16).
4. Optionally ask for regional restyles, then for translation as a second step.

## Prompts

3 new verbatim prompt(s) below.

### Demo user message

- Source: https://higgsfield.ai/ad-multiplier
- Model: Claude + Higgsfield MCP
- Settings: demo user message
- Use-case: product ad

```text
I want to multiply my top performing ad
```

### Demo tool call

- Source: https://higgsfield.ai/ad-multiplier
- Model: Ad Multiplier skill
- Settings: 9:16, original audio, x12 variants
- Use-case: product ad

```text
Ad Multiplier: multiply the top performing ad. Per variant, replace the character, outfit, and location; keep the edit, motion, and original audio; remove the burned-in captions
```

### Deeplink prompt

- Source: https://higgsfield.ai/ad-multiplier
- Model: Nano Banana 2 Pro via Higgsfield MCP
- Settings: deeplink prompt on the page
- Use-case: UGC

```text
Use the Higgsfield MCP with Nano Banana 2 Pro to create a realistic UGC-style product image with natural lighting and an authentic social media look
```
