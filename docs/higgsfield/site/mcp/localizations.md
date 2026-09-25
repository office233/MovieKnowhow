# Ad Localizer

- **Site page:** https://higgsfield.ai/mcp/localizations
- **Skill command:** `/marketing-localize-ads` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Translate and adapt your ads for new languages and markets. Keep your brand’s message consistent while making the copy feel natural.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-localize-ads Localize these static ads into Spanish and German while preserving the offer and brand voice.
```

### Example conversation (from page data)

**User prompt** (attachments: Sorbet ad (image)):

```text
Localize these static ads into Spanish and German while preserving the offer and brand voice.
```

*Agent reply (trimmed):* "I’ll adapt the copy for Spanish and German, keeping the offer, product details, and brand voice consistent. I’ll also adjust line breaks so each …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Spanish + German, custom: Static ads; references: Sorbet ad (image):

```text
Create Spanish and German versions of the supplied static ad. Use natural, market-appropriate wording, preserve the offer and brand identity, and keep all translated text legible within the existing layout.
```

*Agent reply (trimmed):* "Here are the localized variations. Review the language and offer details for each market before publishing."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-localize-ads Localize these static ads into Spanish and German while preserving the offer and brand voice.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/sorbet-ad-localization.webp)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Customer Voice Ads (`/marketing-feedback-to-ads`), Ad Strategist (`/marketing-research-to-ads`), Ad Resizer (`/marketing-resize-ads`)
