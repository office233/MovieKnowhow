# Higgsfield plugins for Premiere Pro

Source: https://higgsfield.ai/plugins/premiere-pro

## Notes

- Requirements: Premiere Pro 2025 (25.0)+ or After Effects 2025 (25.0)+; macOS universal binary (Apple Silicon + Intel) or Windows 10/11 64-bit. Internet and a signed-in Higgsfield account are required; inference runs in the cloud and results land back on the timeline.
- Install: macOS `.dmg` -> drag Higgsfield.app to Applications -> launch the installer (auto-detects Adobe apps); Windows `.msi`. Then **Window -> Extensions -> Higgsfield**. One installer ships all plugins for both apps.
- Troubleshooting from the FAQ: quit Premiere/AE completely and re-run the installer; on Windows run as administrator; on macOS allow it under Privacy & Security ("Open Anyway"); check the Extensions menu for a hidden panel; restart Adobe if it was open during install.
- Tools in the panel: **Generate AI Video**, **Generate AI Image** (results drop onto the timeline), **Reframe** (one click to 9:16, 16:9, 4:3, 3:4, 21:9 or 1:1 with subject tracking), **Remove Background** (alpha key without green screen), **Draw to edit** (sketch on the frame to inpaint/remove/replace), **Upscale** (to 4K or 8K), **Edit Video** (prompt-based editing). The FAQ calls these "five plugins" (Reframe, Remove BG, Upscale, Draw to edit, Edit Video) plus the two generators.
- "Fresh engines" block: Supercomputer inside the plugins, Gemini Omni Flash, **Seed Audio 1.0** (voices, dialogue, ambience from a prompt), and the **MCP Bridge** (`https://bridge.higgsfield.ai/mcp`) that lets Claude/ChatGPT drive the host app.
- Same credits as the web app; commercial use allowed on paid plans.
- Includes a **Cinema Studio 3.5 panel inside Premiere** (demo card below): pick genre, style, camera body, camera move, location and a character element, then generate a shot straight into the project.
- Note: the Premiere page's install steps still say "detects After Effects" and "Launch After Effects" - it is the shared Adobe installer. See also [after-effects.md](after-effects.md).

## Prompts

0 new verbatim prompt(s) below; 1 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Already captured elsewhere (linked, not repeated)

- Cinema Studio panel demo: "A cinematic action scene of a young woman riding a black motorcycle fast speed..." -> [site/features/tools/teams-enterprise.md](../../features/tools/teams-enterprise.md)
