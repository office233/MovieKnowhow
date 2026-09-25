# Ad Recreator

- **Site page:** https://higgsfield.ai/mcp/ad-adaptation
- **Skill command:** `/marketing-adapt-video` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Turn a reference video’s storytelling and sales structure into an original video ad for your product.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-adapt-video Create an original ad for my product using this reference video’s persuasion structure.
```

### Example conversation (from page data)

**User prompt** (attachments: Gulpo reference video (video)):

```text
Create an original ad for my product using this reference video’s persuasion structure.
```

*Agent reply (trimmed):* "I’ll break down the reference into its hook, product demonstration, proof, and call to action, then use that structure to create an original concept …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Reference-led concept, custom: Original creative; references: Gulpo reference video (video):

```text
Create an original product ad inspired by the reference video’s persuasion structure. Build a distinct hook, demonstration, and call to action. Use the supplied product details and avoid copying the reference’s exact wording or branding.
```

*Agent reply (trimmed):* "Here is the new ad concept, organized around a clear hook, product demonstration, and call to action. You can refine the opening or offer …"

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-adapt-video Create an original ad for my product using this reference video’s persuasion structure.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/gulpo-by-astra-input.mp4)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Hook Multiplier (`/marketing-hook-variants`), Ad Strategist (`/marketing-research-to-ads`), Campaign Analyst (`/marketing-campaign-manager`)
