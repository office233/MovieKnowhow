# Build 3D scenes in Blender

- **Site page:** https://higgsfield.ai/mcp/scene-builder
- **Skill command:** `/Scene-Builder` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** cinematic film scene
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Build editable Blender scenes from characters, architecture, and props, with room to refine poses and camera angles.

Demo on page: See the scene builder workflow in Blender.

**Notes / technique:** Blender set-dressing from a brief plus an asset library of characters, architecture and props. The agent asks for setting, action and style, poses rigged characters, and proposes camera angles. Useful as previs or as 3D layouts to feed image-to-video.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Scene-Builder
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/cinematic/20260923/posters-v2/scene-builder-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Example conversation (from page data)

**User prompt**:

```text
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
```

*Agent reply (trimmed):* "I’ll establish the setting, action, and visual style, then arrange the available characters, architecture, and props. I’ll organize the scene and propose camera angles …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Blender, skill: /Scene-Builder:

```text
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
```

*Agent reply (trimmed):* "Review the scene layout and camera framing. Objects and character poses remain editable in Blender."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Scene-Builder
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/cinematic/20260923/posters-v2/scene-builder-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Blender → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Simulate destruction in Blender (`/Destruction-Studio`), Animate object assembly in Blender (`/Exploded-view`), Create cartoon materials in Blender (`/Cartoon-shaders`), Organize footage in Premiere Pro (`/Project-sorter`)
