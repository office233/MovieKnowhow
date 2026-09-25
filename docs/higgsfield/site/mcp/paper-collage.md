# Paper Collage in After Effects

- **Site page:** https://higgsfield.ai/mcp/paper-collage
- **Skill command:** `/paper-collage` · **tags:** Motion Design
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Animate paper collages in After Effects with textured cutouts, layered depth, and editable motion.

Demo on page: See how textured cutouts become an editable paper-collage animation in After Effects.

**Notes / technique:** Hybrid pipeline: generate the collage assets with Higgsfield, then assemble in After Effects with layered parallax and stepped (limited-frame) motion. Output is 10 s with an editable rig and keyframes. The story has three beats: bridge, fall, and paper-plane escape.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/paper-collage
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.
```

### Example conversation (from page data)

**User prompt** (attachments: Paper Collage in After Effects (image)):

```text
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.
```

*Agent reply (trimmed):* "I’ll build the courier’s journey as a layered paper scene, using torn edges, stepped motion, and parallax to connect the bridge, fall, and paper-plane …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: duration: 10s, custom: Paper collage, custom: Editable layers; references: Paper Collage in After Effects (image):

```text
Create a 10-second paper-collage animation: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the collage assets with Higgsfield, then assemble the scene in After Effects with layered parallax and stepped motion. Preserve editable layers, rig, and keyframes.
```

*Agent reply (trimmed):* "Here is the paper-collage sequence. The three story beats share the same textured style, with editable scene layers and animation timing."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/paper-collage
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/paper-collage/20260914/THE_DETOUR_LA_v2_1080p-last.webp)
```

```text
@Higgsfield /use-after-effects
Help me create an editable paper-collage animation in Adobe After Effects. Check the connection to After Effects, then ask for my brief, reference assets, duration, and output format. Use my answers to build and preview the animation. Preserve any existing work in my open project.
```

## Setup on this page (Start in 4 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Motion Design in After Effects (`/use-after-effects`), Localization Motion in After Effects (`/localization-motion`), Whiteboard Animation in After Effects (`/whiteboard-animation`), Illustration Animation in After Effects (`/illustration-animation`), SaaS Animation in After Effects (`/saas-animation`), Presentation Animation in After Effects (`/presentation-animation`)
