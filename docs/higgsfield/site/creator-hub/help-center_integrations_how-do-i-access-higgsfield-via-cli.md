# How do I access Higgsfield via CLI?

Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-access-higgsfield-via-cli
Published: Aug 1, 2026 (3 min read)
Section: creator-hub (Higgsfield Creator Hub)

Type: help article. CLI + Skills = Higgsfield for coding agents (Claude Code, Cursor, Codex). Lower token overhead than MCP, structured skill outputs. Same account/credits, no API key; Unlimited/free gens do not apply. Falls under Developer Terms.

**Setup**: `npx skills add higgsfield-ai/skills` (installs skills generate, soul, product-photoshoot) -> `higgsfield auth login` -> call `/higgsfield:generate` or ask "Generate an image with Higgsfield". (Agent setup message with `npm i -g @higgsfield/cli` is in the connect-agent article.) Re-run the npx command to update (older versions failed to pass reference images).

**Skills**: generate (any model: Soul, Nano Banana Pro, Seedance, Kling, Veo; up to 4K; auto model selection), soul (train Soul character: upload, train, name), product-photoshoot (product link/images -> product shots and video ads; physical products and apps).
Image presets: product_shot, lifestyle_scene, closeup_product_with_person, pinterest_pin (2:3), hero_banner, social_carousel (3-10 slides), ad_creative_pack, virtual_model_tryout, conceptual_product (surreal/CGI/levitating), restyle.
Video presets: UGC, Tutorial, Unboxing, Hyper Motion, Product Review, TV Spot, Wild Card, UGC Virtual Try On, Pro Virtual Try On.
CLI Skills are distinct from Supercomputer "/" skills. Outputs land in Assets.

## Prompts (verbatim)

### CH-29
- Source: https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-access-higgsfield-via-cli (local: `help-center_integrations_how-do-i-access-higgsfield-via-cli.md`)
- Model: CLI + Skills (generate skill)
- Settings: Coding agent; or call /higgsfield:generate

```text
Generate an image with Higgsfield.
```
