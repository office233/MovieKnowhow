# Campaign Analyst

- **Site page:** https://higgsfield.ai/mcp/performance-marketing-operator
- **Skill command:** `/marketing-campaign-manager` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Analyze campaign results to find what needs improvement. Get practical recommendations and a clear plan for what to test next.

**Notes / technique:** Analyse 14 days of campaign data and sort the recommendations into Scale / Pause / Test next. Separate strong signals from low-volume noise, flag missing data, and label hypotheses separately from observed results.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-campaign-manager Review 14 days of campaign data and recommend what to scale, pause, and test next.
```

### Example conversation (from page data)

**User prompt**:

```text
Review 14 days of campaign data and recommend what to scale, pause, and test next.
```

*Agent reply (trimmed):* "I’ll compare spend, conversions, acquisition cost, and creative trends across the 14-day window. I’ll separate strong signals from low-volume results before recommending changes."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: 14-day review, custom: Scale · Pause · Test:

```text
Review the supplied 14 days of campaign data. Group recommendations into scale, pause, and test next. Explain each decision using the actual metrics, flag missing data, and distinguish observed results from hypotheses.
```

*Agent reply (trimmed):* "The review is organized into scaling opportunities, candidates to pause, and the next creative tests. Use the supporting metrics and confidence notes to prioritize …"

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Hook Multiplier (`/marketing-hook-variants`), Headline Multiplier (`/marketing-headline-variants`), Ad Strategist (`/marketing-research-to-ads`)
