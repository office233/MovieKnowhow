# Paper Diorama

- **Site page:** https://higgsfield.ai/mcp/faceless-paper-diorama
- **Skill command:** `/faceless-paper-diorama` · **tags:** Faceless
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Tell a story through layered paper-like scenes and cutout characters. Share your topic and key events to create a faceless video with depth and a handmade visual style.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a faceless video in a paper diorama style about Magellan and the first voyage to circumnavigate the globe.
```

### Example conversation (from page data)

**User prompt**:

```text
Create a faceless video in a paper diorama style about Magellan and the first voyage to circumnavigate the globe.
```

*Agent reply (trimmed):* "I’ll tell the voyage through layered paper scenes, with cutout ships, maps, and coastlines. A clear sequence of key events will guide the story, …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: aspect-ratio: 16:9, custom: Paper diorama:

```text
Create a landscape faceless explainer about Magellan and the first voyage to circumnavigate the globe. Use layered paper dioramas, cutout ships and characters, textured maps, and paper coastlines. Organize the voyage into clear scenes with readable route markers and purposeful transitions. Keep the handmade visual style consistent, using gentle camera movement and shadows to reveal depth. Verify the historical sequence and distinguish who began the expedition from who completed it.
```

*Agent reply (trimmed):* "Here is the paper diorama example. Use it as a starting point for your own story, then adjust the key events, scene sequence, and …"

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
