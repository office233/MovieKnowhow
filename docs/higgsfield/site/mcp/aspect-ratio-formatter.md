# Ad Resizer

- **Site page:** https://higgsfield.ai/mcp/aspect-ratio-formatter
- **Skill command:** `/marketing-resize-ads` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Adapt your static ads for different placements and aspect ratios. Adjust the layout to keep your product and message in focus.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-resize-ads Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.
```

### Example conversation (from page data)

**User prompt** (attachments: Perfume ad (image)):

```text
Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.
```

*Agent reply (trimmed):* "I’ll recompose the ad for each placement so the product, headline, and call to action stay clear. I’ll adjust the layout instead of simply …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: aspect-ratio: 1:1, aspect-ratio: 4:5, aspect-ratio: 9:16; references: Perfume ad (image):

```text
Adapt the supplied static ad into square 1:1, portrait 4:5, and vertical 9:16 layouts. Preserve the product, brand colors, offer, and copy hierarchy. Keep important elements away from the edges.
```

*Agent reply (trimmed):* "Here are the three placement variations. Check the final crops and safe areas in each platform’s preview before launching."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-resize-ads Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/perfume-ad-aspect-ratio.webp)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
