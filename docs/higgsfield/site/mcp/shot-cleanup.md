# Remove unwanted objects in After Effects

- **Site page:** https://higgsfield.ai/mcp/shot-cleanup
- **Skill command:** `/Shot-Cleanup` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** cinematic film scene
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Clean up unwanted elements in After Effects while preserving the shot’s movement, texture, and editable layers.

Demo on page: See the shot cleanup workflow in Adobe After Effects.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Shot-Cleanup
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/shot-cleanup-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

### Example conversation (from page data)

**User prompt**:

```text
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
```

*Agent reply (trimmed):* "I’ll track the unwanted elements and build cleanup layers or masks that follow the shot. I’ll match the surrounding texture and lighting, then check …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Adobe After Effects, skill: /Shot-Cleanup:

```text
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
```

*Agent reply (trimmed):* "Review the cleaned shot in motion. The original footage and editable masks, tracking, and cleanup layers remain in the After Effects project."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Shot-Cleanup
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/shot-cleanup-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Adobe After Effects → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
