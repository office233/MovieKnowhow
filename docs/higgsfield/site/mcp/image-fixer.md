# Clean up images in Photoshop

- **Site page:** https://higgsfield.ai/mcp/image-fixer
- **Skill command:** `/Image-fixer` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Refine generated locations in Photoshop by fixing textures, removing unwanted objects, and preserving editable masks.

Demo on page: See the image fixer workflow in Adobe Photoshop.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Image-fixer
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/image-fixer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-photoshop
```

### Example conversation (from page data)

**User prompt**:

```text
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
```

*Agent reply (trimmed):* "I’ll identify the unwanted objects and inconsistent textures, then retouch only those areas with separate layers and masks. I’ll preserve the composition and match …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Adobe Photoshop, skill: /Image-fixer:

```text
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
```

*Agent reply (trimmed):* "Review the cleanup at full size. The Photoshop document keeps the original image, retouching layers, and masks available for further edits."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Image-fixer
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/image-fixer-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-photoshop
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Adobe Photoshop → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Create visual effects in TouchDesigner (`/use-touchdesigner`), Color grade footage in DaVinci Resolve (`/color-grading`), Simulate destruction in Blender (`/Destruction-Studio`), Animate object assembly in Blender (`/Exploded-view`)
