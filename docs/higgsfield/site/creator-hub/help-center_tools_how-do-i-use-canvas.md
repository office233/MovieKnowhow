# How do I use Canvas for multi-node generation?

Source: https://higgsfield.ai/creator-hub/help-center/tools/how-do-i-use-canvas
Published: Aug 1, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article (tool guide). Canvas = node-based infinite board chaining every Higgsfield model (prompt -> image -> video -> edit). Building is free; credits only when a node generates. Always credits (Unlimited does not apply in Canvas).

**Steps**: Canvas -> New canvas -> Text Prompt node -> connect to a generation node and choose model -> drag outputs into next node inputs -> add reference nodes (uploads, audio, Assets) -> Generate per node or in sequence -> Save as template.
**Reference rules (important)**
- Seedance nodes: connected reference images work, but you must state each reference's role (main character, location, product...) at the **start of the prompt**; a visual connection alone is ignored.
- Kling nodes: a directly connected image is treated as the **start frame**, not a character reference. For Kling character refs create an Element first and call it with `@element-name` in the prompt.
- Audio nodes attach to video nodes for voice reference, voiceover, audio sync.
**Also**: run models in parallel for side-by-side comparison; real-time multi-user collaboration (Share in canvas settings); autosave (hard refresh restores); FigJam plugin has Canvas Nodes.
Canvas vs others: chaining/comparison/templates/team = Canvas; whole project from a brief = Supercomputer; from Claude = MCP; cinematic multi-shot with camera control = Cinema Studio.
