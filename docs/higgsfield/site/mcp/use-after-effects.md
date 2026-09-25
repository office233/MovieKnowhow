# Motion Design in After Effects

- **Site page:** https://higgsfield.ai/mcp/use-after-effects
- **Skill command:** `/use-after-effects` · **tags:** Motion Design
- **Type:** MCP preset (a prompt/skill run inside Claude, ChatGPT or another agent with the Higgsfield MCP connector)
- **Use-case group:** anime/animation
- **Model:** not fixed by the page. The agent picks from Higgsfield models exposed through MCP (landing page lists Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0).

## What it does

Create and refine motion design in After Effects with animated typography, expressive motion, and editable layers.

Demo on page: Follow a brief from the first prompt to an editable After Effects composition, with a look at the layers, motion preview, and saved project.

## Verbatim prompts

### Example prompt shown on the page (copy button)

```text
/use-after-effects Create a motion design sequence in After Effects using my brief and visual assets. Animate the key elements with clear timing, smooth transitions, and expressive typography. Keep the layers, keyframes, and controls editable.
```

### Example conversation (from page data)

**User prompt** (attachments: Motion Design in After Effects (image)):

```text
Animate these illustrated characters in After Effects with expressive gestures, blinking eyes, and flowing hair. Preserve the artwork, colors, and textures, and keep the character layers and keyframes editable.
```

*Agent reply (trimmed):* "I’ll animate the gestures, eyes, and hair as separate elements, keeping the movement expressive without changing the artwork’s character."

**Higgsfield generation prompt** (the prompt the agent sends to Higgsfield), tags: custom: After Effects, custom: Character animation, custom: Editable keyframes; references: Motion Design in After Effects (image):

```text
Animate the supplied illustrated characters in After Effects with expressive gestures, blinking eyes, and flowing hair. Preserve the artwork, colors, and textures. Keep character layers and keyframes editable.
```

*Agent reply (trimmed):* "Here is the motion preview. Gestures, blinks, and hair movement work together while the editable layers let you refine timing and expression."

### Deep-link prompt variants ("Try in Claude" / ChatGPT buttons)

Each Claude link also ends with a line asking the user to connect Higgsfield via `https://mcp.higgsfield.ai/mcp` if it is missing (omitted below).

```text
/use-after-effects Create a motion design sequence in After Effects using my brief and visual assets. Animate the key elements with clear timing, smooth transitions, and expressive typography. Keep the layers, keyframes, and controls editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/use-after-effects/updated-20260914/ae-motion-last-frame.webp)
```

```text
/localization-motion Localize this motion design in After Effects for Japanese, German, and Spanish. Adapt the text and typography for each language, preserve the original layout and animation timing, and keep all text layers editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/localiztion-motion/20260914/localiztion-motion-last.webp)
```

```text
@Higgsfield /use-after-effects
Help me create an editable paper-collage animation in Adobe After Effects. Check the connection to After Effects, then ask for my brief, reference assets, duration, and output format. Use my answers to build and preview the animation. Preserve any existing work in my open project.
```

## Setup on this page (Start in 4 steps)

Copy the connector URL → Connect Higgsfield in Claude → Start with your prompt

See [INDEX.md](INDEX.md#how-to-connect-common-to-every-mcp-preset-page) for the full connection options.
