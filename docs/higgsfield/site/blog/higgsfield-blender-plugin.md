# Higgsfield for Blender: Features, Installation, and MCP Bridge Setup

- Source: https://higgsfield.ai/blog/higgsfield-blender-plugin
- Byline: Higgsfield · Aug 20, 2026 · 8 min · Last updated: 1w ago
- Prompts extracted: 0

## Notes

**Topic:** Higgsfield Blender plugin (Aug 20 2026). No prompts.
- Floating bar over the viewport with 7 tabs: **Scene Builder** (set described in text -> real editable geometry, layout and lights; can feed Video), **3D Model** (prompt/reference -> mesh at 3D cursor with quads, unwrapped UVs, linked PBR materials; Meshy 5), **Character Animation** (rigged, weighted character; describe a move -> keyframes on standard Blender bones), **Image** (native 4K; Nano Banana Pro/2, Seedream 5.0 Pro, GPT Image, Z Image ...), **Video** (Seedance 2.5 from the viewport with **Anti-Slop mode** against melted hands/jelly physics, ~1 min), **Camera** (move your phone to drive the scene camera -> natural handheld motion), **Asset** library.
- Flow: tab -> prompt/reference -> model + resolution + fps -> check cost on Generate button (variants counter multiplies) -> result lands in scene.
- Layered video workflow: Scene Builder blockout -> add animated character -> texture/set-dress via 3D Model or Image -> Video render.
- Uses: show 3 lighting options before committing a day; generate filler background props; overnight pitch visuals.
- Install: .zip from higgsfield.ai/plugins/blender, drag onto Blender (or Edit -> Preferences -> Add-ons -> Install; keep zipped). Blender 5.1+, Win/macOS, internet; GPU not needed for generation.
- **Blender Bridge** for agents: add `bridge.higgsfield.ai/mcp` as "Higgsfield Bridge" in your assistant's connectors, sign in, then ask e.g. "Build me a calibration bay blockout in Blender" (regular MCP only generates assets; the Bridge drives the open scene).

