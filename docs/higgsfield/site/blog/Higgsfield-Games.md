# Build Multiplayer Games With AI

Source: https://higgsfield.ai/blog/Higgsfield-Games  
Mariam Barova, Jun 19, 2026  
Prompts extracted: 2

Build playable, hosted multiplayer browser games with **Claude (Fable 5) + Higgsfield MCP**: Claude writes/directs the code; Higgsfield generates characters, textures, 2D/3D art and sound, hosts live multiplayer, and lists games on a public marketplace.

Setup (~30 s):
1. Claude -> Settings -> Connectors -> Add custom connector, name "Higgsfield", URL `https://mcp.higgsfield.ai/mcp`, connect.
2. Add the **Game Studio skill** (game-studio.md, downloadable on the page) to the chat. The skill first *interviews you* like a studio, writes a design document (mechanics, art direction, levels, sound), then builds and deploys, ending with a shareable live link.

Games built (3 games, **$68 total** in credits incl. failed generations; zero hand-written code):
- Pirates (first-person galleon, cannons, boarding sword fight). Same sentence without MCP = working game with gray boxes; with MCP = real textures/ocean/characters. Friends join via link — hosting and sync handled by Higgsfield.
- Blockfield (two-team block-world build/destroy shooter; sniper/bazooka with smoke trails).
- NeonSlice (webcam hand-tracking fruit slicer, fingertip = blade, two hands).

Deploy vs publish: deployed = private link; **published** to marketplace = strangers discover/play/remix. Result overnight without promotion: Blockfield ~4,000 plays, up to 22 players per arena, 121 remixes. Monetization funnel: free marketplace to validate -> take the proven game (you own the code) to big distribution platforms.
Note: on the page the copy-prompt blocks are misaligned (the pirate prompt repeats under Blockfield, the block-world prompt appears under NeonSlice); the two distinct prompts are below.

## Prompts (verbatim)

### P1. Game 1 — Pirates first-person game
- Use-case: Other | Model: Claude Fable 5 + Higgsfield MCP + Game Studio skill | Settings: one-sentence game prompt

```text
Build a first-person pirate game where I sail a galleon, fire cannons at enemy ships, and board them for a sword fight on deck.
```

### P2. Game 2 — Blockfield block-world shooter
- Use-case: Other | Model: Claude Fable 5 + Higgsfield MCP + Game Studio skill | Settings: one-sentence game prompt

```text
Build a block-world shooter with two teams against each other, where I can place and destroy blocks and fight the opposite team
```

