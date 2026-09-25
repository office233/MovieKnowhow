# Simulate destruction in Blender

- **Site page:** https://higgsfield.ai/mcp/destruction-studio
- **Skill command:** `/Destruction-Studio` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** cinematic film scene
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create cinematic destruction in Blender with fractured structures, simulated debris, dust, and editable scenes.

Demo on page: See the destruction studio workflow in Blender.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Destruction-Studio
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/destruction-studio-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Example conversation (from page data)

**User prompt**:

```text
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
```

*Agent reply (trimmed):* "I’ll define the break points and destruction trigger, then build the fracture setup, debris simulation, and dust. I’ll stage the camera so the action …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Blender, skill: /Destruction-Studio:

```text
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
```

*Agent reply (trimmed):* "Review the destruction preview and timing. The Blender project keeps the scene, fracture setup, camera, and simulation controls editable."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Destruction-Studio
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/destruction-studio-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Blender → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Animate object assembly in Blender (`/Exploded-view`), Build 3D scenes in Blender (`/Scene-Builder`), Create cartoon materials in Blender (`/Cartoon-shaders`), Organize footage in Premiere Pro (`/Project-sorter`)
