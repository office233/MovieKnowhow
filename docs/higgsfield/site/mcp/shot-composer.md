# Create VFX composites in After Effects

- **Site page:** https://higgsfield.ai/mcp/shot-composer
- **Skill command:** `/Shot-Composer` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** cinematic film scene
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Combine footage and visual layers into editable VFX shots in After Effects, with matched lighting, depth, and grain.

Demo on page: See the shot composer workflow in Adobe After Effects.

**Notes / technique:** After Effects VFX compositing: keying, tracking and cleanup, then matching lighting, atmosphere, depth of field, motion blur and grain. Only missing layers are generated. Delivers a preview and an editable AE project.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Shot-Composer
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/shot-composer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

### Example conversation (from page data)

**User prompt**:

```text
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
```

*Agent reply (trimmed):* "I’ll inspect the footage and target look, then plan the tracking, keying, and visual layers. I’ll match lighting, depth, motion blur, and grain while …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Adobe After Effects, skill: /Shot-Composer:

```text
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
```

*Agent reply (trimmed):* "Review the composite in motion. The After Effects project keeps the tracking, masks, effects, and visual layers editable."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Shot-Composer
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/shot-composer-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Adobe After Effects → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Remove unwanted objects in After Effects (`/Shot-Cleanup`), Convert images to vectors in Illustrator (`/Vectorize`), Clean up images in Photoshop (`/Image-fixer`), Create visual effects in TouchDesigner (`/use-touchdesigner`)
