# Production skills bundle

- **Site page:** https://higgsfield.ai/mcp/bundles/production-skills
- **Type:** MCP preset **bundle** (Production)
- **Use-case group:** other (bundle)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Turn creative ideas into finished visuals with 11 workflows for 3D, VFX, editing, and design.

**Notes / technique:** One prompt that routes to any of the 11 production workflows. The agent chooses the workflow from the brief and uses /use-blender, /use-premiere, /use-after-effects, /use-illustrator or /use-photoshop for app setup.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
@Higgsfield Help me turn my ideas into an editable production project. Choose a workflow from this bundle that fits my brief. Ask about my goals, reference assets, preferred tools, output format, and duration. Then guide me through the process, keeping scenes, layers, paths, timelines, and grades editable wherever possible.
Available workflows:
/Destruction-Studio — Blender
/Exploded-view — Blender
/Scene-Builder — Blender
/Cartoon-shaders — Blender
/Project-sorter — Adobe Premiere Pro
/Shot-Composer — Adobe After Effects
/Shot-Cleanup — Adobe After Effects
/Vectorize — Adobe Illustrator
/Image-fixer — Adobe Photoshop
/use-touchdesigner — TouchDesigner
/color-grading — DaVinci Resolve Studio
Ask me for the source assets and project files. Verify the required local tools before editing. Use /use-blender, /use-premiere, /use-after-effects, /use-illustrator, or /use-photoshop for the chosen application when setup is needed. Check available workflow instructions for TouchDesigner and DaVinci Resolve. Do not treat the bundle banner as source artwork.
```

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
@Higgsfield Help me turn my ideas into an editable production project. Choose a workflow from this bundle that fits my brief. Ask about my goals, reference assets, preferred tools, output format, and duration. Then guide me through the process, keeping scenes, layers, paths, timelines, and grades editable wherever possible.

Available workflows:
/Destruction-Studio — Blender
/Exploded-view — Blender
/Scene-Builder — Blender
/Cartoon-shaders — Blender
/Project-sorter — Adobe Premiere Pro
/Shot-Composer — Adobe After Effects
/Shot-Cleanup — Adobe After Effects
/Vectorize — Adobe Illustrator
/Image-fixer — Adobe Photoshop
/use-touchdesigner — TouchDesigner
/color-grading — DaVinci Resolve Studio

Ask me for the source assets and project files. Verify the required local tools before editing. Use /use-blender, /use-premiere, /use-after-effects, /use-illustrator, or /use-photoshop for the chosen application when setup is needed. Check available workflow instructions for TouchDesigner and DaVinci Resolve. Do not treat the bundle banner as source artwork.
```

## Workflows inside this bundle

| Preset | Command | Tags |
|---|---|---|
| Simulate destruction in Blender | `/Destruction-Studio` | Production |
| Animate object assembly in Blender | `/Exploded-view` | Production |
| Build 3D scenes in Blender | `/Scene-Builder` | Production |
| Create cartoon materials in Blender | `/Cartoon-shaders` | Production |
| Organize footage in Premiere Pro | `/Project-sorter` | Production |
| Create VFX composites in After Effects | `/Shot-Composer` | Production |
| Remove unwanted objects in After Effects | `/Shot-Cleanup` | Production |
| Convert images to vectors in Illustrator | `/Vectorize` | Production |
| Clean up images in Photoshop | `/Image-fixer` | Production |
| Create visual effects in TouchDesigner | `/use-touchdesigner` | Production |
| Color grade footage in DaVinci Resolve | `/color-grading` | Production |
