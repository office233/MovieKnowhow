# Whiteboard Doodle

- **Site page:** https://higgsfield.ai/mcp/faceless-whiteboard-doodle
- **Skill command:** `/faceless-whiteboard-doodle` · **tags:** Faceless
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Explain a topic with whiteboard-style sketches, symbols, and simple drawings. Provide your key points or script to build a faceless video that develops the idea step by step.

**Notes / technique:** Whiteboard doodle explainer that builds the idea step by step with sketches and symbols. The example topic is why we yawn.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a faceless video in a whiteboard doodle style about why we yawn.
```

### Example conversation (from page data)

**User prompt**:

```text
Create a faceless video in a whiteboard doodle style about why we yawn.
```

*Agent reply (trimmed):* "I’ll turn the topic into a concise illustrated explainer, using simple doodles and narration. I’ll distinguish established observations from theories about why yawning happens."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Whiteboard doodle, custom: Faceless explainer, aspect-ratio: 16:9:

```text
Create a faceless whiteboard-doodle explainer about why we yawn. Use clean drawings, a clear scene sequence, and accessible narration. Explain that yawning’s exact function is still debated, and avoid presenting a single theory as settled fact.
```

*Agent reply (trimmed):* "Here is the doodle explainer. The visual sequence keeps the topic approachable while making the scientific uncertainty clear."

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
