# Physical UGC video

- **Site page:** https://higgsfield.ai/mcp/physical-ugc-skill
- **Skill command:** `/physical-ugc-skill` · **tags:** Marketing UGC
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** UGC
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create a creator-style tutorial that demonstrates how a physical product works. Share product and presenter references, along with the features or steps the video should explain.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
Create a UGC tutorial video with this girl showing how to use this water gun
```

### Example conversation (from page data)

**User prompt** (attachments: Creator reference (image), Product reference (image)):

```text
Create a UGC tutorial video with this creator showing how to use this water gun.
```

*Agent reply (trimmed):* "I’ll use the creator and product references to build a clear, natural demonstration, moving from a quick introduction to close-up usage shots."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: Product tutorial, custom: Creator + product, aspect-ratio: 9:16; references: Creator reference (image), Product reference (image):

```text
Create a creator-led tutorial for the referenced water gun. Preserve the creator’s appearance and the product’s recognizable details. Show a clear introduction, hands-on demonstration, and concise closing reaction with natural pacing.
```

*Agent reply (trimmed):* "Here is the tutorial preview. The sequence introduces the product, shows it in use, and closes with a natural creator reaction."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
Create a UGC tutorial video with this girl showing how to use this water gun

Reference media:
- [Reference 1](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/6bc3f65e-f6f0-495c-923c-f5c65977b97f.png)
- [Reference 2](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/25ed16cd-6a26-4006-8973-7732a4331a07.png)
```

## Setup on this page (Start in 3 steps)

Copy the Higgsfield connector URL → Connect Higgsfield in Claude → Run your first prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
