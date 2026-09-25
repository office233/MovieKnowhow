# Paid Ads bundle

- **Site page:** https://higgsfield.ai/mcp/bundles/paid-ads-bundle
- **Type:** MCP preset **bundle** (Paid Ads)
- **Use-case group:** other (bundle)
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Research your market, create static and video ads, and plan your next campaign test.

**Notes / technique:** The `/marketing` router picks one of the 8 Paid Ads workflows based on product, audience, goals and assets.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing Help me plan, create, or improve my ads. Choose a workflow based on my product, audience, goals, and assets.
```

## Workflows inside this bundle

| Preset | Command | Tags |
|---|---|---|
| Campaign Analyst | `/marketing-campaign-manager` | Paid Ads |
| Ad Strategist | `/marketing-research-to-ads` | Paid Ads |
| Customer Voice Ads | `/marketing-feedback-to-ads` | Paid Ads |
| Headline Multiplier | `/marketing-headline-variants` | Paid Ads |
| Ad Resizer | `/marketing-resize-ads` | Paid Ads |
| Ad Localizer | `/marketing-localize-ads` | Paid Ads |
| Ad Recreator | `/marketing-adapt-video` | Paid Ads |
| Hook Multiplier | `/marketing-hook-variants` | Paid Ads |
