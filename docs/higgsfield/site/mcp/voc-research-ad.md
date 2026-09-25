# Customer Voice Ads

- **Site page:** https://higgsfield.ai/mcp/voc-research-ad
- **Skill command:** `/marketing-feedback-to-ads` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create static ads from real customer feedback. Build your message around the needs, concerns, and language of your audience.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-feedback-to-ads Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.
```

### Example conversation (from page data)

**User prompt** (attachments: Pool Day product (image)):

```text
Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.
```

*Agent reply (trimmed):* "I’ll look for recurring customer needs, objections, and phrases in the reviews, then pair them with supported product benefits to create five different ad …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: 5 ad concepts, custom: Customer insights; references: Pool Day product (image):

```text
Create five static Meta ad concepts from the supplied customer reviews and product evidence. Use distinct customer needs and objections for each angle. Preserve the meaning of customer feedback and do not invent testimonials or unsupported claims.
```

*Agent reply (trimmed):* "Here are five customer-led ad directions. Each focuses on a different motivation or objection, with copy grounded in the source material."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-feedback-to-ads Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/pool-day-voice-of-customer.webp)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
