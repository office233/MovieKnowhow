# SaaS Animation in After Effects

- **Site page:** https://higgsfield.ai/mcp/saas-animation
- **Skill command:** `/saas-animation` · **tags:** Motion Design
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Animate SaaS interfaces in After Effects with smooth transitions, clear typography, and editable layers.

Demo on page: See the workflow behind the Passo SaaS animation in After Effects.

**Notes / technique:** SaaS product video in AE from app screens: feature highlights, interface transitions, animated type, final logo reveal. The demo is 'Passo'.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/saas-animation Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.
```

### Example conversation (from page data)

**User prompt** (attachments: SaaS Animation in After Effects (image)):

```text
Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.
```

*Agent reply (trimmed):* "I’ll shape the animation around the product’s key features, using interface transitions and typography to guide attention before ending on the logo."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Product walkthrough, custom: After Effects, custom: Editable interface; references: SaaS Animation in After Effects (image):

```text
Create a SaaS product animation in After Effects using the supplied app screens and brand assets. Highlight key features with smooth interface transitions, animated typography, and a final logo reveal. Keep text, interface elements, and keyframes editable.
```

*Agent reply (trimmed):* "Here is the product animation preview. It moves through the feature highlights and ends with a logo reveal, with editable elements for future updates."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/saas-animation Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/saas-animation/passo-20260914/passo-last-frame.webp)
```

## Setup on this page (Start in 4 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Illustration Animation in After Effects (`/illustration-animation`), Motion Design in After Effects (`/use-after-effects`), Presentation Animation in After Effects (`/presentation-animation`), Paper Collage in After Effects (`/paper-collage`), Whiteboard Animation in After Effects (`/whiteboard-animation`), Localization Motion in After Effects (`/localization-motion`)
