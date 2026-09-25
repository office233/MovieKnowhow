# Convert images to vectors in Illustrator

- **Site page:** https://higgsfield.ai/mcp/vectorize
- **Skill command:** `/Vectorize` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Turn raster illustrations into editable Illustrator artwork with organized paths, groups, and layers.

Demo on page: See the vectorize workflow in Adobe Illustrator.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Vectorize
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/vectorize-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-illustrator
```

### Example conversation (from page data)

**User prompt**:

```text
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
```

*Agent reply (trimmed):* "I’ll trace the important shapes and preserve the composition and palette. I’ll simplify unnecessary points, remove stray paths, and organize the artwork into meaningful …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Adobe Illustrator, skill: /Vectorize:

```text
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
```

*Agent reply (trimmed):* "Review the vector artwork against the source. Paths, colors, groups, and layers remain editable in Illustrator."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Vectorize
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/vectorize-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-illustrator
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Adobe Illustrator → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Clean up images in Photoshop (`/Image-fixer`), Create visual effects in TouchDesigner (`/use-touchdesigner`), Color grade footage in DaVinci Resolve (`/color-grading`), Simulate destruction in Blender (`/Destruction-Studio`)
