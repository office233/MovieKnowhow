# Mannequin

- **Site page:** https://higgsfield.ai/mcp/faceless-mannequin
- **Skill command:** `/faceless-mannequin` · **tags:** Faceless
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Tell a story with stylized mannequin figures instead of an on-camera presenter. Provide the topic and key moments to shape a faceless video around simple characters and visual scenes.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a faceless video in a mannequin style about the first film in history and how early motion pictures worked.
```

### Example conversation (from page data)

**User prompt**:

```text
Create a faceless video in a mannequin style about the first film in history and how early motion pictures worked.
```

*Agent reply (trimmed):* "I’ll use stylized mannequin characters and clear visual scenes to tell the story of early cinema and explain how a sequence of still images …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: aspect-ratio: 16:9, custom: Mannequin style:

```text
Create a landscape faceless explainer about the beginnings of film and how early motion pictures worked. Use stylized mannequin figures, period-inspired sets, and simple camera and projector visuals. Keep the characters visually consistent and the sequence easy to follow. Use clear scene transitions and readable labels. Verify historical details and clarify what is meant by the first film.
```

*Agent reply (trimmed):* "Here is the mannequin-style example. Use it as a starting point for your own story, then adjust the topic, scene sequence, and visual references."

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Hand Drawn (`/faceless-hand-drawn`), Paper Diorama (`/faceless-paper-diorama`), Pastel Flat 2D (`/faceless-pastel-flat-2d`)
