# Product review UGC

- **Site page:** https://higgsfield.ai/mcp/ugc-flow
- **Skill command:** `/ugc-flow` · **tags:** UGC
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** UGC
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create a creator-style product review from your product brief and reference images. Develop the concept and script, then show the product in use with a clear message for your audience.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.
```

### Example conversation (from page data)

**User prompt** (attachments: Creator avatar (image), Purple gradient tumbler (image)):

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.
```

*Agent reply (trimmed):* "I’ll build a creator-style review around the tumbler, starting with a clear hook, followed by a product demonstration and a short closing line. I’ll …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Product review, aspect-ratio: 9:16, custom: Creator + product; references: Creator avatar (image), Purple gradient tumbler (image):

```text
Create a vertical 9:16 product-review video using the supplied creator and purple gradient tumbler references. Develop a concise concept and script, then show the creator introducing the tumbler and demonstrating it in use. Preserve the creator’s appearance and the product’s recognizable shape and colors. Use natural delivery, clear product close-ups, and a brief closing line. Do not invent product specifications or performance claims.
```

*Agent reply (trimmed):* "Here is the product-review preview, with the referenced creator and tumbler in a vertical format."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.

Reference media:
- [Reference 1](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/804cd979-090a-47d0-aa18-1a052f130a73.webp)
- [Reference 2](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/1df6d4ab-c9e0-440a-a039-e7faeff060c3.webp)
```

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Physical UGC video (`/physical-ugc-skill`), Try-on UGC (`/try-on-ugc-skill`), Unboxing UGC (`/unboxing-ugc-skill`)
