# What are Higgsfield Apps, and how do I create my own?

Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps
Published: Aug 1, 2026 (4 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article (tool guide). Higgsfield Apps = generative web apps built by the Supercomputer agent from one sentence (e.g. selfie -> 90s yearbook photo); models wired in, no API keys.
- Steps: describe app in Supercomputer -> choose template -> answer follow-ups (publish to community feed or not) -> iterate in chat ("make it dark", "add a gallery") -> Publish (auto cover, icon, description).
- Templates: **App detail** (single-tool two-column landing + how-it-works), **Preset** (pick-a-style grid + creation rail + History), **Studio** (projects sidebar, floating prompt dock, generations feed).
- Economics: you pay credits to build; app users sign in with their Higgsfield accounts and pay their own generations.
- Live on its own higgsfield subdomain (renamable); Explore feed listing allows remixing (keep unlisted to prevent). Real React app with DB and file storage; git access, read-only DB inspection, env-var secrets. Also buildable via MCP.

## Prompts (verbatim)

### CH-31
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: One-sentence app brief

```text
an app that turns a selfie into a 90s yearbook photo.
```

### CH-32
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: Follow-up edit in the same chat

```text
make it dark
```

### CH-33
- Source: https://higgsfield.ai/creator-hub/help-center/tools/what-are-higgsfield-apps (local: `help-center_tools_what-are-higgsfield-apps.md`)
- Model: Supercomputer Apps builder
- Settings: Follow-up edit in the same chat

```text
add a gallery
```
