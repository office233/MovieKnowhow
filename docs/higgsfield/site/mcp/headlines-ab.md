# Headline Multiplier

- **Site page:** https://higgsfield.ai/mcp/headlines-ab
- **Skill command:** `/marketing-headline-variants` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Turn one static ad into multiple headline variations. Keep the visuals consistent so you can test different messages.

**Notes / technique:** Headline-only A/B: 10 variants that change only the headline, exploring benefit-, curiosity- and problem-led angles. Keep every other design element identical and add no unsupported claims. Test under comparable conditions.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-headline-variants Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.
```

### Example conversation (from page data)

**User prompt** (attachments: Snack ad (image)):

```text
Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.
```

*Agent reply (trimmed):* "I’ll create ten headline angles while keeping the image, layout, branding, and offer unchanged. That makes the variations easier to compare in a focused …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: 10 headlines, custom: Headline-only changes; references: Snack ad (image):

```text
Create ten versions of the supplied ad, changing only the headline. Explore different benefit, curiosity, and problem-led angles without adding unsupported claims. Preserve every other design element.
```

*Agent reply (trimmed):* "Here are ten headline variations with the rest of the creative preserved. Test them under comparable conditions to isolate the effect of the headline."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-headline-variants Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/snack-ad-headline.webp)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Ad Strategist (`/marketing-research-to-ads`), Customer Voice Ads (`/marketing-feedback-to-ads`), Campaign Analyst (`/marketing-campaign-manager`)
