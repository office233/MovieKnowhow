# Color grade footage in DaVinci Resolve

- **Site page:** https://higgsfield.ai/mcp/color-grading
- **Skill command:** `/color-grading` · **tags:** Production
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** other (post-production / design tools)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Grade footage in DaVinci Resolve Studio with balanced shots, natural skin tones, and an editable node structure.

Demo on page: See the color-grading workflow in DaVinci Resolve Studio.

**Notes / technique:** DaVinci Resolve Studio grade: balance exposure and white balance, then contrast and saturation, protect skin tones, and match shots across the sequence. Uses an organized node tree and keeps the original grade as a separate version.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/color-grading
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
Ask me for the source assets and project files before editing. Preserve existing work.
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /color-grading
```

### Example conversation (from page data)

**User prompt**:

```text
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
```

*Agent reply (trimmed):* "I’ll balance exposure and white balance, then match contrast, saturation, and skin tones across the sequence. I’ll organize the grade into clear nodes and …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: DaVinci Resolve Studio, skill: /color-grading:

```text
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
```

*Agent reply (trimmed):* "Review the graded sequence for shot-to-shot consistency. The node structure and original grade remain available in DaVinci Resolve Studio."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/color-grading
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.

Ask me for the source assets and project files before editing. Preserve existing work.

Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /color-grading
```

## Setup on this page (Start in 4 steps)

Open Claude Desktop → Connect Higgsfield → Install DaVinci Resolve Studio → Start your first workflow

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Simulate destruction in Blender (`/Destruction-Studio`), Animate object assembly in Blender (`/Exploded-view`), Build 3D scenes in Blender (`/Scene-Builder`), Create cartoon materials in Blender (`/Cartoon-shaders`)
