# How do I connect Higgsfield to Claude, ChatGPT, or another AI agent?

Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent
Published: Aug 1, 2026 (7 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article. Connect Higgsfield to agents (paid subscription required, no API key).
- **Claude (web/Desktop)**: Settings -> Connectors -> Add custom connector -> name Higgsfield, URL `https://mcp.higgsfield.ai/mcp` -> Connect -> authorize.
- **ChatGPT**: Higgsfield Plugin from Plugins Directory (or higgsfield.ai/mcp -> Add Higgsfield plugin). No audio, no Website Building skill.
- **Cursor**: Customize -> Marketplace -> Higgsfield -> Add.
- **Claude Code / OpenClaw / Hermes**: send the setup message (see prompts) so the agent installs the CLI, authenticates and installs skills.
- Verify: ask "What is my Higgsfield credit balance?" or "List my recent Higgsfield generations"; if no tool call, reconnect/toggle connector.

**MCP capabilities**: image/video generation on all models, upscaling, background removal, expand image / reframe video, Kling 3.0 Motion Control, Soul characters & Elements, audio (voiceover, cloning, voice change, dubbing), Personal Clipper (YouTube -> short clips), balance/listing. No Unlimited, no free gens.
**Skill categories** (higgsfield.ai/skills): Marketing, UGC Factory (Product Review UGC, SaaS UGC), Faceless Content Factory (Stickman Cartoon, Editorial Motion Graphics), Utility, Motion & Design, Website Building.
**References through MCP**: agent cannot read chat attachments; it opens a Higgsfield upload window (local file), imports a pasted direct image URL, or references past generations/Elements/Soul characters by name. Motion Control needs two uploads (character image + motion video), say which is which.
**Cost control**: no native cap; instruct the agent to state cost and wait for confirmation, and set a max credits per session. Results appear in Assets (tagged MCP) within ~60 s.
**Errors**: "Authorization with the MCP server failed" -> disconnect/reconnect; "MCP HTTP exchange failed" -> retry/reconnect.

## Prompts (verbatim)

### CH-15
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Seedance via Higgsfield MCP (Claude)
- Settings: Video; model named explicitly in the agent request

```text
Generate a video using Seedance of a person walking through a forest at sunrise, realistic motion, camera tracking close.
```

### CH-16
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Soul (trained Soul character) via MCP
- Settings: Image

```text
Generate an image using my Soul character [name] in an editorial fashion setting, studio lighting, neutral background.
```

### CH-17
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Element reference via MCP
- Settings: Image; several Elements can be used in one prompt

```text
Generate an image with my element [name] in a rooftop cafe at golden hour.
```

### CH-18
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Any video model via MCP (uploaded reference)
- Settings: Video; after uploading through the Higgsfield upload window

```text
Use the uploaded image as the character reference and generate a video of them walking through Times Square at night.
```

### CH-19
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Any model via MCP
- Settings: Reference a past generation as start frame

```text
use the portrait I generated earlier as the start frame
```

### CH-20
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Kling 3.0 Motion Control via MCP
- Settings: Two uploads: character image + motion reference video

```text
The image is the character, the video is the motion reference.
```

### CH-21
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Higgsfield Audio via MCP
- Settings: Voiceover

```text
Generate a voiceover for this text in a warm professional tone: [text].
```

### CH-22
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Style reference import from web URL

```text
Import this image and use it as the style reference: [link].
```

### CH-23
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Local file upload

```text
I have a photo on my computer I want to use as the character reference.
```

### CH-24
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: If the agent asks for a chat attachment

```text
Open the Higgsfield upload window for my file.
```

### CH-25
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Balance check

```text
What is my current Higgsfield credit balance?
```

### CH-26
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Spend approval, say at session start

```text
Before generating anything, tell me the credit cost and wait for my confirmation.
```

### CH-27
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: MCP agent instruction
- Settings: Soft credit cap (prompt-level, not enforced)

```text
Do not spend more than X credits. Always ask for approval before generating.
```

### CH-28
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent (local: `help-center_integrations_how-do-i-connect-higgsfield-to-ai-agent.md`)
- Model: Claude Code / OpenClaw / Hermes (CLI setup)
- Settings: Paste into the coding agent

```text
Set up Higgsfield for me so I can generate images and videos from here. 1. Install the CLI: run npm i -g @higgsfield/cli . 2. Authenticate: run higgsfield auth login and complete the sign-in in the browser it opens. 3. Install the companion skills: run npx skills add higgsfield-ai/skills . Once that's done, let me know when it's ready.
```
