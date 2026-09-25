# Unboxing UGC

- **Site page:** https://higgsfield.ai/mcp/unboxing-ugc-skill
- **Skill command:** `/unboxing-ugc-skill` · **tags:** UGC
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** UGC
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create a creator-style unboxing video with a product reveal and close-up details. Share product and packaging references, along with the features the presenter should highlight.

**Notes / technique:** Unboxing UGC: package opening → reveal → detail close-ups → natural reactions → simple CTA, in 9:16. Keep product details consistent with the brief.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create an unboxing UGC video for a lifestyle product with a clear reveal, close-up details, natural creator reactions, and a simple call to action.
```

### Example conversation (from page data)

**User prompt**:

```text
Create an unboxing UGC video for a lifestyle product with a clear reveal, close-up details, natural creator reactions, and a simple call to action.
```

*Agent reply (trimmed):* "I’ll structure the video around the reveal, with close-up product details and natural reactions, then finish with a simple call to action."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Unboxing, custom: Product details, aspect-ratio: 9:16:

```text
Create a lifestyle-product unboxing UGC video with a clear package opening and product reveal. Include close-up details, natural creator reactions, and a concise call to action. Keep product details consistent with the supplied brief.
```

*Agent reply (trimmed):* "Here is the unboxing preview. The reveal leads into detail shots and a simple closing call to action."

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Product review UGC (`/ugc-flow`), Physical UGC video (`/physical-ugc-skill`)
