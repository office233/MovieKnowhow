# Higgsfield Supercomputer (agent), AI Assist/Chat, App Builder, Games

Sources: https://higgsfield.ai/supercomputer-intro, /ai-assist and /chat (identical app shell listing example tasks), /app-builder-intro, /games-intro

## Supercomputer
- A chat agent that runs Higgsfield for you: plans the job, picks models/presets ("auto"), shows the credit cost up front for approval, then renders. Plain-language briefs work ("Make a TikTok for my sneakers").
- **AI Employees** with bundled skills: Cartoon Animator (24 skills), Motion Designer (43), Podcast Producer (4), Product Photographer (24).
- **Skills**: installable workflows triggered by slash commands (`/montage`, `/cinematic`, your own brand pipeline); versioned, shareable. Marketplace examples: Ad Multiplier, Editorial Motion Graphics, Faceless Video, Cartoon Faceless Video, SaaS UGC video, Physical UGC video, Brandkit, Shorts Maker, Website Building.
- **Orchestrator** routes each step to the best-fit model (cheaper/faster). LLMs available: Claude Opus 4.7/4.6, Sonnet 4.6, GPT-5.5 Pro, Gemini 3.1 Pro (home page: "Agent powered by GPT-6 Astra").
- Memory across sessions, project files, **scheduled tasks** (daily ad variants, weekly competitor scans), 30+ connectors (Slack, Drive, Notion, Gmail, Figma...), import memory/skills from Claude, Claude Code, Codex, ChatGPT.
- Claimed jobs: research -> PDF/HTML brief or live site; 5-10 minute film (script, cast, scenes, music, edit); 100 UGC/ad variants per product.
- Supercomputer, MCP, CLI and Canvas **always spend credits** (Unlimited plans do not apply there).

## App Builder
- Full-stack app from a chat sentence (design, code, database, sign-in) and the app can call Higgsfield image/video/3D models itself (photobooth, anime filter, "see your future kid").
- End users sign in with their own Higgsfield account and spend their own credits.
- Builds spend your credits; up to 20 sites/day. Publish limits: 25 (Starter), 250 (Plus), 500 (Ultra), 1,000 per seat (Business). Custom domain + badge removal from Plus. Default domain name.higgsfield.app. Also available via MCP (Claude/Cursor).

## Games
- Describe a game -> Supercomputer builds code, assets, 3D, hosts it and returns a playable link; multiplayer (lobbies, state sync) toggle; genre templates. Also via Higgsfield MCP from your own agent ("use Opus 4.8" / "Fable 5 for best performance").

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Supercomputer / Higgsfield | https://higgsfield.ai/ai-assist | 18 |
| AI App Builder / Higgsfield Supercomputer | https://higgsfield.ai/app-builder-intro | 0 |
| Supercomputer / Higgsfield | https://higgsfield.ai/chat | 0 |
| AI Game Generator / Higgsfield Supercomputer | https://higgsfield.ai/games-intro | 0 |
| Higgsfield Supercomputer — Agentic AI Content Creation | https://higgsfield.ai/supercomputer-intro | 0 |

## Verbatim prompts (18)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P041 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Ad Multiplier Skill | Use-case: product ad

```text
Turn this green handbag ad into three campaign-ready variations. Refresh the talent, wardrobe, and upscale home setting while keeping the bag design, product-focused motion, framing, timing, and audio consistent
```

### P042 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Editorial Motion Graphics Skill | Use-case: other

```text
Create an editorial motion graphics faceless video about how the Mona Lisa became the world’s most famous painting
```

### P043 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Higgsfield Faceless Video Skill | Use-case: anime/animation

```text
Create a cinematic animated faceless video showing how one decisive chess move changes the entire game
```

### P044 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Cartoon Faceless Video Skill | Use-case: anime/animation

```text
Create a stickman cartoon faceless video showing Odysseus's journey to Troy and back home
```

### P045 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: SaaS UGC video Skill; input: website URL | Use-case: UGC

```text
Create a UGC ad video for this chips with this girl, showing its store page on screen
```

### P046 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Physical UGC video Skill | Use-case: UGC

```text
Create a UGC tutorial video with this girl showing how to use this water gun
```

### P047 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Brandkit Skill | Use-case: product ad

```text
Create a brand kit for Yololey banana milk
```

### P048 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Shorts Maker Skill | Use-case: other

```text
Create a short video explaining how warmer light bulbs can make a room look more expensive
```

### P049 - Example task

- Page: https://higgsfield.ai/ai-assist | Model: Supercomputer agent | Settings: skill: Website Building Skill | Use-case: product ad

```text
Build the LOOMERE website from the attached coral polo shirt. Use celadon sage, warm ivory, pine ink, Cabinet Grotesk, and Inter Tight with one red accent. Show a coral thread becoming the polo and four pastel variants, with six chapters, a preorder modal, a knot logo, and a fabric-facts marquee
```

### P050 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in retro 8-bit pixel-art style, chunky pixelated characters and props on a colorful grid background, crisp dithered shading and smooth pixel animation
```

### P051 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in claymation stop-motion style, handmade clay characters with soft fingerprint textures, tactile molded shapes and playful frame-by-frame movement
```

### P052 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in mixed-media collage style, layered paper cutouts, photo scraps, hand-drawn marks and textured backgrounds combined into lively animated scenes
```

### P053 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in clean 2D flat-illustration style, bold outlines, bright modern color palette and smooth vector characters with simple friendly motion
```

### P054 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in hand-drawn whiteboard doodle style, black marker sketches drawn live on a white board, simple line icons and playful animated annotations
```

### P055 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in low-poly 3D style, faceted geometric characters and environments with flat shaded triangles, clean soft lighting and minimal color gradients
```

### P056 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in polished 3D-rendered style, glossy rounded characters and objects with realistic materials, soft studio lighting and smooth cinematic camera moves
```

### P057 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in isometric flat-vector style, tidy 2.5D scenes and diagrams at a fixed isometric angle, crisp geometry, muted modern palette and orderly motion
```

### P058 - Explainer style preset

- Page: https://higgsfield.ai/ai-assist | Model: Higgsfield Explainer (via Supercomputer) | Settings: explainer style preset prompt | Use-case: anime/animation

```text
An explainer video in fluffy plush-toy style, soft felt and fuzzy fabric characters with stitched details and button eyes, cozy pastel scenes and cute bouncy movement
```
