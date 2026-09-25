# Higgsfield MCP presets: index

Higgsfield MCP "presets" are agent skills: slash-command prompts you run in Claude, ChatGPT, Claude Code or any remote-MCP agent after connecting `https://mcp.higgsfield.ai/mcp`. They cover paid ads, UGC, faceless explainers, After Effects motion design and desktop production tools (Blender, Premiere, After Effects, Illustrator, Photoshop, TouchDesigner, DaVinci Resolve). All verbatim prompts are in [PROMPTS.md](PROMPTS.md), and the landing overview is in [mcp-landing.md](mcp-landing.md).

## How to connect (common to every MCP preset page)

- **Claude (web):** copy the connector URL `https://mcp.higgsfield.ai/mcp` → Claude **Customize → Connectors → add custom connector** named "Higgsfield" → paste the URL → sign in → paste the preset prompt into a new chat and attach references.
- **Claude Desktop (production presets for Blender / Adobe / DaVinci / TouchDesigner):** run Claude Desktop **on the same computer** as the target app, enable Higgsfield, install the app, then use "Open in Claude" and supply the brief and source assets.
- **ChatGPT:** install the Higgsfield plugin (`chatgpt.com/plugins/higgsfield`), prepare the brief and references, then run the prompt. For After Effects workflows, ChatGPT Desktop plus AE on the same machine is required. There is also a Codex-app variant.
- **Claude Code:** paste the setup request (verbatim in [PROMPTS.md](PROMPTS.md#setup)). It installs the CLI `npm i -g @higgsfield/cli`, signs in with `higgsfield auth login`, and adds the companion skills with `npx skills add higgsfield-ai/skills`.
- **CLI / other agents:** Node.js + npm are required. Run the same three commands, or add a remote MCP server named Higgsfield with the URL in any agent that supports authenticated remote MCP.

## Pages

| Title | URL | Local file | Command | Use-case | #prompts |
|---|---|---|---|---|---|
| Higgsfield MCP (landing) | https://higgsfield.ai/mcp | [mcp-landing.md](mcp-landing.md) | — | hub | 38 |
| Physical UGC video | https://higgsfield.ai/mcp/physical-ugc-skill | [physical-ugc-skill.md](physical-ugc-skill.md) | `physical-ugc-skill` | UGC | 4 |
| Product review UGC | https://higgsfield.ai/mcp/ugc-flow | [ugc-flow.md](ugc-flow.md) | `ugc-flow` | UGC | 3 |
| Try-on UGC | https://higgsfield.ai/mcp/try-on-ugc-skill | [try-on-ugc-skill.md](try-on-ugc-skill.md) | `try-on-ugc-skill` | UGC | 3 |
| Unboxing UGC | https://higgsfield.ai/mcp/unboxing-ugc-skill | [unboxing-ugc-skill.md](unboxing-ugc-skill.md) | `unboxing-ugc-skill` | UGC | 2 |
| Editorial Motion Graphics | https://higgsfield.ai/mcp/vox-mixed-media | [vox-mixed-media.md](vox-mixed-media.md) | `vox-mixed-media` | anime/animation | 2 |
| Fairy Tale & Myth | https://higgsfield.ai/mcp/faceless-fairy-tale-myth | [faceless-fairy-tale-myth.md](faceless-fairy-tale-myth.md) | `faceless-fairy-tale-myth` | anime/animation | 2 |
| Hand Drawn | https://higgsfield.ai/mcp/faceless-hand-drawn | [faceless-hand-drawn.md](faceless-hand-drawn.md) | `faceless-hand-drawn` | anime/animation | 3 |
| Illustration Animation in After Effects | https://higgsfield.ai/mcp/illustration-animation | [illustration-animation.md](illustration-animation.md) | `illustration-animation` | anime/animation | 4 |
| Localization Motion in After Effects | https://higgsfield.ai/mcp/localization-motion | [localization-motion.md](localization-motion.md) | `localization-motion` | anime/animation | 4 |
| Mannequin | https://higgsfield.ai/mcp/faceless-mannequin | [faceless-mannequin.md](faceless-mannequin.md) | `faceless-mannequin` | anime/animation | 2 |
| Motion Design in After Effects | https://higgsfield.ai/mcp/use-after-effects | [use-after-effects.md](use-after-effects.md) | `use-after-effects` | anime/animation | 6 |
| Paper Collage in After Effects | https://higgsfield.ai/mcp/paper-collage | [paper-collage.md](paper-collage.md) | `paper-collage` | anime/animation | 5 |
| Paper Diorama | https://higgsfield.ai/mcp/faceless-paper-diorama | [faceless-paper-diorama.md](faceless-paper-diorama.md) | `faceless-paper-diorama` | anime/animation | 2 |
| Pastel Flat 2D | https://higgsfield.ai/mcp/faceless-pastel-flat-2d | [faceless-pastel-flat-2d.md](faceless-pastel-flat-2d.md) | `faceless-pastel-flat-2d` | anime/animation | 2 |
| Presentation Animation in After Effects | https://higgsfield.ai/mcp/presentation-animation | [presentation-animation.md](presentation-animation.md) | `presentation-animation` | anime/animation | 4 |
| SaaS Animation in After Effects | https://higgsfield.ai/mcp/saas-animation | [saas-animation.md](saas-animation.md) | `saas-animation` | anime/animation | 4 |
| Stickman cartoon | https://higgsfield.ai/mcp/stickman-explainer | [stickman-explainer.md](stickman-explainer.md) | `stickman-explainer` | anime/animation | 4 |
| Whiteboard Animation in After Effects | https://higgsfield.ai/mcp/whiteboard-animation | [whiteboard-animation.md](whiteboard-animation.md) | `whiteboard-animation` | anime/animation | 4 |
| Whiteboard Doodle | https://higgsfield.ai/mcp/faceless-whiteboard-doodle | [faceless-whiteboard-doodle.md](faceless-whiteboard-doodle.md) | `faceless-whiteboard-doodle` | anime/animation | 2 |
| Animate object assembly in Blender | https://higgsfield.ai/mcp/exploded-view | [exploded-view.md](exploded-view.md) | `Exploded-view` | cinematic film scene | 4 |
| Build 3D scenes in Blender | https://higgsfield.ai/mcp/scene-builder | [scene-builder.md](scene-builder.md) | `Scene-Builder` | cinematic film scene | 4 |
| Create VFX composites in After Effects | https://higgsfield.ai/mcp/shot-composer | [shot-composer.md](shot-composer.md) | `Shot-Composer` | cinematic film scene | 4 |
| Remove unwanted objects in After Effects | https://higgsfield.ai/mcp/shot-cleanup | [shot-cleanup.md](shot-cleanup.md) | `Shot-Cleanup` | cinematic film scene | 4 |
| Simulate destruction in Blender | https://higgsfield.ai/mcp/destruction-studio | [destruction-studio.md](destruction-studio.md) | `Destruction-Studio` | cinematic film scene | 4 |
| Motion design bundle | https://higgsfield.ai/mcp/bundles/motion-bundle | [bundle-motion-bundle.md](bundle-motion-bundle.md) | `bundle: Motion Design` | other (bundle) | 1 |
| Paid Ads bundle | https://higgsfield.ai/mcp/bundles/paid-ads-bundle | [bundle-paid-ads-bundle.md](bundle-paid-ads-bundle.md) | `bundle: Paid Ads` | other (bundle) | 1 |
| Production skills bundle | https://higgsfield.ai/mcp/bundles/production-skills | [bundle-production-skills.md](bundle-production-skills.md) | `bundle: Production` | other (bundle) | 2 |
| Clean up images in Photoshop | https://higgsfield.ai/mcp/image-fixer | [image-fixer.md](image-fixer.md) | `Image-fixer` | other (post-production / design tools) | 4 |
| Color grade footage in DaVinci Resolve | https://higgsfield.ai/mcp/color-grading | [color-grading.md](color-grading.md) | `color-grading` | other (post-production / design tools) | 4 |
| Convert images to vectors in Illustrator | https://higgsfield.ai/mcp/vectorize | [vectorize.md](vectorize.md) | `Vectorize` | other (post-production / design tools) | 4 |
| Create cartoon materials in Blender | https://higgsfield.ai/mcp/cartoon-shaders | [cartoon-shaders.md](cartoon-shaders.md) | `Cartoon-shaders` | other (post-production / design tools) | 4 |
| Create visual effects in TouchDesigner | https://higgsfield.ai/mcp/use-touchdesigner | [use-touchdesigner.md](use-touchdesigner.md) | `use-touchdesigner` | other (post-production / design tools) | 4 |
| Organize footage in Premiere Pro | https://higgsfield.ai/mcp/project-sorter | [project-sorter.md](project-sorter.md) | `Project-sorter` | other (post-production / design tools) | 4 |
| Ad Localizer | https://higgsfield.ai/mcp/localizations | [localizations.md](localizations.md) | `marketing-localize-ads` | product ad | 4 |
| Ad Recreator | https://higgsfield.ai/mcp/ad-adaptation | [ad-adaptation.md](ad-adaptation.md) | `marketing-adapt-video` | product ad | 4 |
| Ad Resizer | https://higgsfield.ai/mcp/aspect-ratio-formatter | [aspect-ratio-formatter.md](aspect-ratio-formatter.md) | `marketing-resize-ads` | product ad | 4 |
| Ad Strategist | https://higgsfield.ai/mcp/link-to-ads | [link-to-ads.md](link-to-ads.md) | `marketing-research-to-ads` | product ad | 4 |
| Campaign Analyst | https://higgsfield.ai/mcp/performance-marketing-operator | [performance-marketing-operator.md](performance-marketing-operator.md) | `marketing-campaign-manager` | product ad | 3 |
| Customer Voice Ads | https://higgsfield.ai/mcp/voc-research-ad | [voc-research-ad.md](voc-research-ad.md) | `marketing-feedback-to-ads` | product ad | 4 |
| Headline Multiplier | https://higgsfield.ai/mcp/headlines-ab | [headlines-ab.md](headlines-ab.md) | `marketing-headline-variants` | product ad | 4 |
| Hook Multiplier | https://higgsfield.ai/mcp/ad-hooks | [ad-hooks.md](ad-hooks.md) | `marketing-hook-variants` | product ad | 4 |

Prompt counts are verbatim prompt blocks per file (page example, example user and generation prompts, deep-link variants). PROMPTS.md de-duplicates across pages: 116 distinct prompts in total.

Coverage: 42/42 pages processed
