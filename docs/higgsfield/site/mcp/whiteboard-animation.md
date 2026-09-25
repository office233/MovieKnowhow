# Whiteboard Animation in After Effects

- **Site page:** https://higgsfield.ai/mcp/whiteboard-animation
- **Skill command:** `/whiteboard-animation` · **tags:** Motion Design
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Animate whiteboards in After Effects with moving cursors, sticky notes, and editable annotations.

Demo on page: See the workflow behind the Purr whiteboard animation in After Effects.

**Notes / technique:** Animate a collaboration whiteboard in AE with moving cursors, sticky-note reveals, hand-drawn annotations and arrows that guide attention.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/whiteboard-animation Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.
```

### Example conversation (from page data)

**User prompt** (attachments: Whiteboard Animation in After Effects (image)):

```text
Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.
```

*Agent reply (trimmed):* "I’ll guide attention across the board with collaboration cursors, note reveals, and hand-drawn connections, while preserving the original layout and text."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Whiteboard motion, custom: After Effects, custom: Editable shapes; references: Whiteboard Animation in After Effects (image):

```text
Animate the supplied whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Preserve the board layout and keep text, shapes, and keyframes editable.
```

*Agent reply (trimmed):* "Here is the animated whiteboard preview. The reveals and connecting arrows guide the viewer through the board without changing its structure."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/whiteboard-animation Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/whiteboard-animation/20260914/purr-last-frame.webp)
```

## Setup on this page (Start in 4 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Paper Collage in After Effects (`/paper-collage`), SaaS Animation in After Effects (`/saas-animation`), Presentation Animation in After Effects (`/presentation-animation`), Motion Design in After Effects (`/use-after-effects`), Illustration Animation in After Effects (`/illustration-animation`), Localization Motion in After Effects (`/localization-motion`)
