# Create visual effects in TouchDesigner

- **Site page:** https://higgsfield.ai/mcp/use-touchdesigner
- **Skill command:** `/use-touchdesigner` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Build visual effects for images and video in TouchDesigner, then preview, refine, and export the result.

Demo on page: See the touchdesigner effects workflow in TouchDesigner.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/use-touchdesigner
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/use-touchdesigner-poster.webp
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /use-touchdesigner
```

### Example conversation (from page data)

**User prompt**:

```text
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
```

*Agent reply (trimmed):* "I’ll use your source media and style reference to build an editable effects network. I’ll expose the main controls and preview the result at …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: TouchDesigner, skill: /use-touchdesigner:

```text
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
```

*Agent reply (trimmed):* "Review the effect preview. The TouchDesigner network keeps the source input and effect controls available for further adjustment."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/use-touchdesigner
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/use-touchdesigner-poster.webp

Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /use-touchdesigner
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install TouchDesigner → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Color grade footage in DaVinci Resolve (`/color-grading`), Simulate destruction in Blender (`/Destruction-Studio`), Animate object assembly in Blender (`/Exploded-view`), Build 3D scenes in Blender (`/Scene-Builder`)
