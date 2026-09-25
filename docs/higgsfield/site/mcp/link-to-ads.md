# Ad Strategist

- **Site page:** https://higgsfield.ai/mcp/link-to-ads
- **Skill command:** `/marketing-research-to-ads` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Turn product and competitor research into static ads tailored to your market. Explore different angles grounded in what your product offers.

Demo on page: See how Ad Strategist turns product research into static ads for Guava Day sparkling soda.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-research-to-ads Research this product and its competitors, then create 5 static Meta ads with distinct angles.
```

### Example conversation (from page data)

**User prompt** (attachments: Sorbet soda product (image)):

```text
Research this product and its competitors, then create 5 static Meta ads with distinct angles.
```

*Agent reply (trimmed):* "I’ll review the product and competitor positioning, then turn the strongest supported benefits into five distinct creative angles. Each ad will have its own …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: 5 ad concepts, custom: Distinct angles; references: Sorbet soda product (image):

```text
Create five static Meta ad concepts for the supplied product. Give each a distinct customer angle, headline, visual composition, and call to action. Ground all product claims in the supplied evidence and avoid unsupported promises.
```

*Agent reply (trimmed):* "Here are five creative directions to test. Compare the angles using the same audience and offer so you can see which message resonates."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-research-to-ads Research this product and its competitors, then create 5 static Meta ads with distinct angles.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/sorbet-soda-link-to-ads.webp)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
