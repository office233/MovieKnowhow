# Organize footage in Premiere Pro

- **Site page:** https://higgsfield.ai/mcp/project-sorter
- **Skill command:** `/Project-sorter` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Organize footage, synchronize sound, and prepare editable sequences in Adobe Premiere Pro.

Demo on page: See the project sorter workflow in Adobe Premiere Pro.

**Notes / technique:** Premiere Pro prep: bins by shoot day and media type, auto-sync to external audio where reliable, clearly named sequences, and flags for clips that need manual review. Original files are kept.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/Project-sorter
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/project-sorter-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-premiere
```

### Example conversation (from page data)

**User prompt**:

```text
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
```

*Agent reply (trimmed):* "I’ll sort the supplied media into clear bins, synchronize external sound where reliable sync information is available, and create named sequences. I’ll preserve existing …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Adobe Premiere Pro, skill: /Project-sorter:

```text
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
```

*Agent reply (trimmed):* "Review the organized bins and prepared sequences. Original media and existing edits stay intact, and any uncertain sync matches are marked for review."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/Project-sorter
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/project-sorter-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-premiere
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install Adobe Premiere Pro → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Create VFX composites in After Effects (`/Shot-Composer`), Remove unwanted objects in After Effects (`/Shot-Cleanup`), Convert images to vectors in Illustrator (`/Vectorize`), Clean up images in Photoshop (`/Image-fixer`)
