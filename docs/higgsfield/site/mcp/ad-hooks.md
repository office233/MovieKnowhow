# Hook Multiplier

- **Site page:** https://higgsfield.ai/mcp/ad-hooks
- **Skill command:** `/marketing-hook-variants` · **tags:** Paid Ads
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** product ad
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Give one video multiple opening hooks. Get complete edited versions ready to test different ways of grabbing attention.

**Notes / technique:** Keep the body of the ad fixed and vary only the first seconds, so the test isolates the hook. The example makes three hook types: a surprising moment, a curiosity reveal, and a direct question. It keeps the original footage, pacing, audio and CTA, and the output is 9:16 with the original audio. Test the variants on the same audience and placement. Pair with the Virality Predictor app to pre-screen them.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/marketing-hook-variants Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.
```

### Example conversation (from page data)

**User prompt** (attachments: Original dog ad (video)):

```text
Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.
```

*Agent reply (trimmed):* "I’ll create three different openings: a surprising moment, a curiosity-driven reveal, and a direct question. I’ll keep the rest of the video unchanged so …"

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: 3 hook variants, aspect-ratio: 9:16, audio: Original audio; references: Original dog ad (video):

```text
Create three complete edits of the reference video. Give each version a distinct opening hook, then continue with the original video. Preserve the remaining footage, pacing, audio, and call to action.
```

*Agent reply (trimmed):* "Here are three opening-hook variations. Compare how each one introduces the same ad, then test them with the same audience and placement."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/marketing-hook-variants Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/dog-ad-hook-original.mp4)
```

## Setup on this page (Start in 3 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.

## Recommended presets (cross-links)

Ad Recreator (`/marketing-adapt-video`), Campaign Analyst (`/marketing-campaign-manager`), Headline Multiplier (`/marketing-headline-variants`)
