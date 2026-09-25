# Try-on UGC

- **Site page:** https://higgsfield.ai/mcp/try-on-ugc-skill
- **Skill command:** `/try-on-ugc-skill` · **tags:** UGC
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** UGC
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create a creator-style try-on video that shows how a product looks and fits. Provide product and presenter references, plus the styling details and features you want to highlight.

**Notes / technique:** Fashion try-on UGC: creator + outfit references → before/after, fit close-ups, styling moments, confident reaction, in 9:16. Keep the outfit's color, shape and details.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.
```

### Example conversation (from page data)

**User prompt** (attachments: Creator reference (image), Outfit reference (image)):

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.
```

*Agent reply (trimmed):* "I’ll build a natural try-on sequence with a clear before-and-after, close-ups of the fit, and styling moments that keep the creator and outfit consistent."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Try-on video, custom: Creator + outfit, aspect-ratio: 9:16; references: Creator reference (image), Outfit reference (image):

```text
Create a try-on UGC video using the supplied creator and outfit references. Show the before-and-after transformation, fit details, styling moments, and a confident creator reaction. Preserve the outfit’s color, shape, and recognizable details.
```

*Agent reply (trimmed):* "Here is the try-on preview. The sequence shows the overall look and closer fit details so viewers can understand how the outfit wears."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.

Reference media:
- [Reference 1](https://static.higgsfield.ai/mcp-landing/skills/try-on-ugc-creator.webp)
- [Reference 2](https://static.higgsfield.ai/mcp-landing/skills/try-on-ugc-outfit.webp)
```

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Unboxing UGC (`/unboxing-ugc-skill`), Product review UGC (`/ugc-flow`)
