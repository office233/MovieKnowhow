# Higgsfield Skills (for any agent)

Source: https://higgsfield.ai/skills ("Higgsfield Skills for any AI - create images and videos directly from your prompts in any AI tool"). Related MCP landing (same catalogue): https://higgsfield.ai/gpt-astra -> canonical https://higgsfield.ai/mcp, already documented in [../../mcp/INDEX.md](../../mcp/INDEX.md).

## What a "skill" is here

A skill is a packaged workflow (prompt + tool logic) that an agent runs against Higgsfield. The same skills are exposed three ways:
- **CLI skills** for Claude Code, Codex, OpenClaw, Hermes: `npx skills add higgsfield-ai/skills` pulls **three** skills - `generate`, `soul` and `product-photoshoot` - then `higgsfield auth login`, then call e.g. `/higgsfield:generate`. The page recommends the CLI route (GitHub) for coding agents.
- **MCP connector** (Claude web/desktop/Cowork, ChatGPT plugin, any MCP client): add `https://mcp.higgsfield.ai/mcp`; no API key; the agent picks the model or you name one.
- **Supercomputer** (Higgsfield's own agent, "Mr. Higgs"): the same skills appear as cards; see [../supercomputer/supercomputer-skills.md](../supercomputer/supercomputer-skills.md).

## Page facts
- "Explore 35 skills" with tabs: Featured, Marketing (launch ads and campaigns), UGC factory (creator-led product videos), Faceless content factory (viral faceless videos), Utility (edit, repurpose, optimise), Motion & Design, Website building.
- Models advertised inside Claude: Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0. FAQ says 30+ models, images up to 4K, videos up to 15 s per clip, generation is asynchronous (agent polls), past generations can be reused as inputs, same credits as the web app.
- Supported agents: Claude (web, Cowork, Claude Code), OpenClaw, Hermes Agent, NemoClaw, any MCP client.
- Demo metrics shown on the UGC demo card: 424k views (+134%), 104k (+95%) - marketing illustration, not data.

## Every skill listed (featured cards on /skills + the full MCP catalogue in the page data)

Featured on /skills: Ad Multiplier, Editorial Motion Graphics (use case), SaaS UGC, Website Building, Stickman cartoon, Product review UGC, Faceless Content. The full catalogue of 38 agent skills embedded in the MCP/skills page data:

| Skill | Command / label | Category | What it does (page wording, trimmed) | Local detail file |
|---|---|---|---|---|
| Ad Localizer | `marketing-localize-ads` | Paid Ads | Translate and adapt your ads for new languages and markets. Keep your brand’s message consistent while making the copy feel natural. | [localizations](../../mcp/localizations.md) |
| Ad Recreator | `marketing-adapt-video` | Paid Ads | Turn a reference video’s storytelling and sales structure into an original video ad for your product. | [ad-adaptation](../../mcp/ad-adaptation.md) |
| Ad Resizer | `marketing-resize-ads` | Paid Ads | Adapt your static ads for different placements and aspect ratios. Adjust the layout to keep your product and message in focus. | [aspect-ratio-formatter](../../mcp/aspect-ratio-formatter.md) |
| Ad Strategist | `marketing-research-to-ads` | Paid Ads | Turn product and competitor research into static ads tailored to your market. Explore different angles grounded in what your product offers. | [link-to-ads](../../mcp/link-to-ads.md) |
| Campaign Analyst | `marketing-campaign-manager` | Paid Ads | Analyze campaign results to find what needs improvement. Get practical recommendations and a clear plan for what to test next. | [performance-marketing-operator](../../mcp/performance-marketing-operator.md) |
| Customer Voice Ads | `marketing-feedback-to-ads` | Paid Ads | Create static ads from real customer feedback. Build your message around the needs, concerns, and language of your audience. | [voc-research-ad](../../mcp/voc-research-ad.md) |
| Headline Multiplier | `marketing-headline-variants` | Paid Ads | Turn one static ad into multiple headline variations. Keep the visuals consistent so you can test different messages. | [headlines-ab](../../mcp/headlines-ab.md) |
| Hook Multiplier | `marketing-hook-variants` | Paid Ads | Give one video multiple opening hooks. Get complete edited versions ready to test different ways of grabbing attention. | [ad-hooks](../../mcp/ad-hooks.md) |
| Illustration Animation in After Effects | `illustration-animation` | Motion Design | Bring illustrated characters to life in After Effects. | [illustration-animation](../../mcp/illustration-animation.md) |
| Localization Motion in After Effects | `localization-motion` | Motion Design | Adapt animated designs for multiple languages in After Effects. | [localization-motion](../../mcp/localization-motion.md) |
| Motion Design in After Effects | `use-after-effects` | Motion Design | Create and refine editable motion design in After Effects. | [use-after-effects](../../mcp/use-after-effects.md) |
| Paper Collage in After Effects | `paper-collage` | Motion Design | Turn paper cutouts into editable motion in After Effects. | [paper-collage](../../mcp/paper-collage.md) |
| Presentation Animation in After Effects | `presentation-animation` | Motion Design | Turn presentation slides into editable motion in After Effects. | [presentation-animation](../../mcp/presentation-animation.md) |
| SaaS Animation in After Effects | `saas-animation` | Motion Design | Bring SaaS interfaces and product stories to life in After Effects. | [saas-animation](../../mcp/saas-animation.md) |
| Simulate destruction in Blender | `Destruction-Studio` | Production | Create cinematic destruction in Blender with fractured structures, simulated debris, dust, and editable scenes. | [destruction-studio](../../mcp/destruction-studio.md) |
| Whiteboard Animation in After Effects | `whiteboard-animation` | Motion Design | Turn whiteboard ideas into editable animation in After Effects. | [whiteboard-animation](../../mcp/whiteboard-animation.md) |
| Animate object assembly in Blender | `Exploded-view` | Production | Animate objects assembling in Blender with coordinated parts, clear camera staging, and an editable final scene. | [exploded-view](../../mcp/exploded-view.md) |
| Build 3D scenes in Blender | `Scene-Builder` | Production | Build editable Blender scenes from characters, architecture, and props, with room to refine poses and camera angles. | [scene-builder](../../mcp/scene-builder.md) |
| Editorial Motion Graphics | `vox-mixed-media` | Marketing, Faceless | Explain a story using editorial motion graphics and mixed visual media. | [vox-mixed-media](../../mcp/vox-mixed-media.md) |
| Create cartoon materials in Blender | `Cartoon-shaders` | Production | Create stylized Blender materials with toon shading, expressive outlines, and adjustable textures. | [cartoon-shaders](../../mcp/cartoon-shaders.md) |
| Organize footage in Premiere Pro | `Project-sorter` | Production | Organize footage, synchronize sound, and prepare editable sequences in Adobe Premiere Pro. | [project-sorter](../../mcp/project-sorter.md) |
| Create VFX composites in After Effects | `Shot-Composer` | Production | Combine footage and visual layers into editable VFX shots in After Effects, with matched lighting, depth, and grain. | [shot-composer](../../mcp/shot-composer.md) |
| Stickman cartoon | `stickman-explainer` | Marketing, Faceless | Turn a story or concept into an animated explainer with simple stickman characters. | [stickman-explainer](../../mcp/stickman-explainer.md) |
| Product review UGC | `ugc-flow` | UGC | Create a creator-style product review from your product brief and reference images. | [ugc-flow](../../mcp/ugc-flow.md) |
| Remove unwanted objects in After Effects | `Shot-Cleanup` | Production | Clean up unwanted elements in After Effects while preserving the shot’s movement, texture, and editable layers. | [shot-cleanup](../../mcp/shot-cleanup.md) |
| Convert images to vectors in Illustrator | `Vectorize` | Production | Turn raster illustrations into editable Illustrator artwork with organized paths, groups, and layers. | [vectorize](../../mcp/vectorize.md) |
| Clean up images in Photoshop | `Image-fixer` | Production | Refine generated locations in Photoshop by fixing textures, removing unwanted objects, and preserving editable masks. | [image-fixer](../../mcp/image-fixer.md) |
| Physical UGC video | `physical-ugc-skill` | Marketing, UGC | Create a creator-style tutorial that demonstrates how a physical product works. | [physical-ugc-skill](../../mcp/physical-ugc-skill.md) |
| Create visual effects in TouchDesigner | `use-touchdesigner` | Production | Build visual effects for images and video in TouchDesigner, then preview, refine, and export the result. | [use-touchdesigner](../../mcp/use-touchdesigner.md) |
| Color grade footage in DaVinci Resolve | `color-grading` | Production | Grade footage in DaVinci Resolve Studio with balanced shots, natural skin tones, and an editable node structure. | [color-grading](../../mcp/color-grading.md) |
| Unboxing UGC | `unboxing-ugc-skill` | UGC | Create a creator-style unboxing video with a product reveal and close-up details. | [unboxing-ugc-skill](../../mcp/unboxing-ugc-skill.md) |
| Try-on UGC | `try-on-ugc-skill` | UGC | Create a creator-style try-on video that shows how a product looks and fits. | [try-on-ugc-skill](../../mcp/try-on-ugc-skill.md) |
| Fairy Tale & Myth | `faceless-fairy-tale-myth` | Faceless | Explain a subject through imaginative scenes inspired by fairy tales and mythology. | [faceless-fairy-tale-myth](../../mcp/faceless-fairy-tale-myth.md) |
| Paper Diorama | `faceless-paper-diorama` | Faceless | Tell a story through layered paper-like scenes and cutout characters. | [faceless-paper-diorama](../../mcp/faceless-paper-diorama.md) |
| Pastel Flat 2D | `faceless-pastel-flat-2d` | Faceless | Create a faceless explainer with soft pastel colors and simple flat illustrations. | [faceless-pastel-flat-2d](../../mcp/faceless-pastel-flat-2d.md) |
| Hand Drawn | `faceless-hand-drawn` | Faceless | Explain an idea through hand-drawn illustrations and animated scenes. | [faceless-hand-drawn](../../mcp/faceless-hand-drawn.md) |
| Mannequin | `faceless-mannequin` | Faceless | Tell a story with stylized mannequin figures instead of an on-camera presenter. | [faceless-mannequin](../../mcp/faceless-mannequin.md) |
| Whiteboard Doodle | `faceless-whiteboard-doodle` | Faceless | Explain a topic with whiteboard-style sketches, symbols, and simple drawings. | [faceless-whiteboard-doodle](../../mcp/faceless-whiteboard-doodle.md) |

Additional skills that appear only in Supercomputer (no MCP detail page): Ad Multiplier, Brandkit, Shorts Maker, Website Building, SaaS UGC video, Higgsfield Faceless Video, Cartoon Faceless Video, Product UGC, YouTube Covers, Personal Clipper, plus "use case" templates (TV Commercials, Short-form Drama, Motion Design, Animated Infographics, Cinematic Videos, UGC Videos, Localization). Ad Multiplier has its own landing page: [ad-multiplier.md](ad-multiplier.md).

## Bundles
- **Paid Ads bundle** (`paid-ads-bundle`): Research your market, create static and video ads, and plan your next campaign test. Skills: performance-marketing-operator, link-to-ads, voc-research-ad, headlines-ab, aspect-ratio-formatter, localizations, ad-adaptation, ad-hooks.
- **Motion design bundle** (`motion-bundle`): Bring your ideas to life with editable animation workflows. Skills: use-after-effects, illustration-animation, paper-collage, localization-motion, saas-animation, presentation-animation, whiteboard-animation.
- **Production skills bundle** (`production-skills`): Turn creative ideas into finished visuals with 11 workflows for 3D, VFX, editing, and design. Skills: destruction-studio, exploded-view, scene-builder, cartoon-shaders, project-sorter, shot-composer, shot-cleanup, vectorize, image-fixer, use-touchdesigner, color-grading.
(Paid Ads bundle page: [paid-ads-bundle.md](paid-ads-bundle.md).)

## Prompts

2 new verbatim prompt(s) below; 6 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Faceless Content Skill

- Source: https://higgsfield.ai/skills
- Model: Higgsfield skill via MCP/CLI (agent picks model)
- Settings: card label: Faceless Content Skill
- Use-case: anime/animation

```text
Create a faceless video about a surprising historical fact with a strong hook, stylized visuals, voiceover, and subtitles
```

### Demo tool call the agent sends to Higgsfield (UGC flow)

- Source: https://higgsfield.ai/skills
- Model: Seedance 2 (shown in the demo tool call)
- Settings: 9:16, 15 s, audio on; inputs: creator image + product image
- Use-case: UGC

```text
Generate a 15-second 9:16 UGC video using the attached creator and tumbler. Open with a relatable problem, demonstrate the cold-all-day benefit, use casual piece-to-camera delivery, and finish with a concise call to action
```

### Already captured elsewhere (linked, not repeated)

- Ad Multiplier Skill: "Turn this green handbag ad into three campaign-ready variations. Refresh the talent, wardrobe, and..." -> [site/features/tools/supercomputer.md](../../features/tools/supercomputer.md)
- Editorial Motion Graphics Use case: "Create an editorial motion graphics faceless video about how the Mona Lisa became the..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- SaaS UGC Skill: "Create a UGC ad video for this chips with this girl, showing its store..." -> [site/features/tools/supercomputer.md](../../features/tools/supercomputer.md)
- Website Building Skill: "Build the LOOMERE website from the attached coral polo shirt. Use celadon sage, warm..." -> [site/features/tools/supercomputer.md](../../features/tools/supercomputer.md)
- Stickman cartoon Skill: "Create a stickman cartoon faceless video showing Odysseus's journey to Troy and back home..." -> [site/mcp/mcp-landing.md](../../mcp/mcp-landing.md)
- Product review UGC Skill: "Create a complete UGC flow for this tumbler using the attached creator, from concept..." -> [site/mcp/ugc-flow.md](../../mcp/ugc-flow.md)
