# Create cartoon materials in Blender

- **Site page:** https://higgsfield.ai/mcp/cartoon-shaders
- **Skill command:** `/Cartoon-shaders` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create stylized Blender materials with toon shading, expressive outlines, and adjustable textures.

Demo on page: See the cartoon shaders workflow in Blender.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Cartoon-shaders
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/cartoon-shaders-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Example conversation (from page data)

**User prompt**:

```text
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
```

*Agent reply (trimmed):* "I’ll inspect the scene materials and choose a consistent cartoon look. I’ll build adjustable shading and outlines, then check the result under the scene …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Blender, skill: /Cartoon-shaders:

```text
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
```

*Agent reply (trimmed):* "Review the stylized scene. The Blender materials and shading controls remain editable so you can refine the look."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Cartoon-shaders
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/cartoon-shaders-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Blender → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Simulate destruction in Blender (`/Destruction-Studio`), Animate object assembly in Blender (`/Exploded-view`), Build 3D scenes in Blender (`/Scene-Builder`), Organize footage in Premiere Pro (`/Project-sorter`)
