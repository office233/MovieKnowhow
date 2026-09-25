# Hand Drawn

- **Site page:** https://higgsfield.ai/mcp/faceless-hand-drawn
- **Skill command:** `/faceless-hand-drawn` · **tags:** Faceless
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Explain an idea through hand-drawn illustrations and animated scenes. Provide a topic or short script to create a faceless video with a sketched, storybook-like look.

**Notes / technique:** Hand-drawn storybook explainer in 16:9 with visible sketch textures and a consistent palette. Show each stage of the process as a clear scene with labels.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a faceless video in a hand drawn style about how a printing machine turns an idea into pages of a book.
```

### Example conversation (from page data)

**User prompt**:

```text
Create a faceless video in a hand-drawn style about how a printing machine turns an idea into pages of a book.
```

*Agent reply (trimmed):* "I’ll follow the idea from a rough sketch to a page layout, then show the printing process and the finished pages. Hand-drawn illustrations and …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: aspect-ratio: 16:9, custom: Hand-drawn illustration:

```text
Create a landscape faceless explainer showing how an idea becomes printed book pages. Begin with a rough concept and page layout, then show paper moving through a printing machine and the finished pages emerging. Use hand-drawn illustrations, visible sketch textures, and a consistent storybook palette. Make each stage easy to follow with clear scene transitions, simple visual details, and readable labels.
```

*Agent reply (trimmed):* "Here is the hand-drawn example. Use it as a starting point for your own explainer, then adapt the topic, scene sequence, and illustration style."

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Paper Diorama (`/faceless-paper-diorama`), Pastel Flat 2D (`/faceless-pastel-flat-2d`), Whiteboard Doodle (`/faceless-whiteboard-doodle`)
