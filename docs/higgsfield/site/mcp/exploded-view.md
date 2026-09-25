# Animate object assembly in Blender

- **Site page:** https://higgsfield.ai/mcp/exploded-view
- **Skill command:** `/Exploded-view` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** cinematic film scene
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Animate objects assembling in Blender with coordinated parts, clear camera staging, and an editable final scene.

Demo on page: See the exploded view workflow in Blender.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Exploded-view
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/exploded-view-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Example conversation (from page data)

**User prompt**:

```text
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
```

*Agent reply (trimmed):* "I’ll inspect the parts and their connection points, then stage an exploded view that stays readable from the camera. I’ll stagger the assembly and …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Blender, skill: /Exploded-view:

```text
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
```

*Agent reply (trimmed):* "Review the assembly preview. The Blender scene keeps the parts, materials, camera, and animation editable."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Exploded-view
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/exploded-view-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Blender → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Simulate destruction in Blender (`/Destruction-Studio`), Build 3D scenes in Blender (`/Scene-Builder`), Create cartoon materials in Blender (`/Cartoon-shaders`), Organize footage in Premiere Pro (`/Project-sorter`)
