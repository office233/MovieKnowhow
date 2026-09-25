# Higgsfield MCP landing page

- **Site page:** https://higgsfield.ai/mcp
- **Page title:** Higgsfield MCP | AI Image & Video Generation for Any Agent
- **What it is:** Higgsfield exposes its image and video models and a library of "presets" (agent skills/prompts) to Claude, ChatGPT, Claude Code and other MCP-capable agents. Remote MCP URL: `https://mcp.higgsfield.ai/mcp`.
- **Tabs on page:** Claude · ChatGPT · Claude Code · CLI · Other
- **Preset filters:** All presets, For After Effects, Paid Ads, Motion Design, Production, Marketing, Faceless, UGC
- **Models advertised as available inside Claude:** Nano Banana Pro, Google Omni Flash, Seedance 2.5, Seedream 5.0 Lite, Seedance 2.0, Kling 3, GPT Image 2, Soul 2.0

## Bundles

| Bundle | Scope | Page |
|---|---|---|
| Production skills | 11 workflows for 3D, VFX, editing, design (Blender, Premiere, After Effects, Illustrator, Photoshop, TouchDesigner, DaVinci) | [bundle-production-skills.md](bundle-production-skills.md) |
| Paid Ads | research, static and video ads, campaign testing (8 workflows) | [bundle-paid-ads-bundle.md](bundle-paid-ads-bundle.md) |
| Motion design | editable After Effects animation (7 workflows) | [bundle-motion-bundle.md](bundle-motion-bundle.md) |

## Every preset card on the landing page (verbatim card prompts)

Production cards include extra lines (asset/preservation rules, a workflow preview URL, and an `@Higgsfield /use-<app>` routing line). These are kept verbatim.

### Ad Localizer

- Command `/marketing-localize-ads` · tags: Paid Ads · local file: [localizations.md](localizations.md)
- Translate and adapt your ads for new languages and markets. Keep your brand’s message consistent while making the copy feel natural.

```text
Localize these static ads into Spanish and German while preserving the offer and brand voice.
```

### Ad Recreator

- Command `/marketing-adapt-video` · tags: Paid Ads · local file: [ad-adaptation.md](ad-adaptation.md)
- Turn a reference video’s storytelling and sales structure into an original video ad for your product.

```text
Create an original ad for my product using this reference video’s persuasion structure.
```

### Ad Resizer

- Command `/marketing-resize-ads` · tags: Paid Ads · local file: [aspect-ratio-formatter.md](aspect-ratio-formatter.md)
- Adapt your static ads for different placements and aspect ratios. Adjust the layout to keep your product and message in focus.

```text
Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.
```

### Ad Strategist

- Command `/marketing-research-to-ads` · tags: Paid Ads · local file: [link-to-ads.md](link-to-ads.md)
- Turn product and competitor research into static ads tailored to your market. Explore different angles grounded in what your product offers.

```text
Research this product and its competitors, then create 5 static Meta ads with distinct angles.
```

### Campaign Analyst

- Command `/marketing-campaign-manager` · tags: Paid Ads · local file: [performance-marketing-operator.md](performance-marketing-operator.md)
- Analyze campaign results to find what needs improvement. Get practical recommendations and a clear plan for what to test next.

```text
Review 14 days of campaign data and recommend what to scale, pause, and test next.
```

### Customer Voice Ads

- Command `/marketing-feedback-to-ads` · tags: Paid Ads · local file: [voc-research-ad.md](voc-research-ad.md)
- Create static ads from real customer feedback. Build your message around the needs, concerns, and language of your audience.

```text
Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.
```

### Headline Multiplier

- Command `/marketing-headline-variants` · tags: Paid Ads · local file: [headlines-ab.md](headlines-ab.md)
- Turn one static ad into multiple headline variations. Keep the visuals consistent so you can test different messages.

```text
Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.
```

### Hook Multiplier

- Command `/marketing-hook-variants` · tags: Paid Ads · local file: [ad-hooks.md](ad-hooks.md)
- Give one video multiple opening hooks. Get complete edited versions ready to test different ways of grabbing attention.

```text
Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.
```

### Illustration Animation in After Effects

- Command `/illustration-animation` · tags: Motion Design · local file: [illustration-animation.md](illustration-animation.md)
- Bring illustrated characters to life in After Effects.

```text
Animate these illustrations in After Effects with drifting cards, circling koi, and rotating shapes. Preserve the colors and editable layers.
```

### Localization Motion in After Effects

- Command `/localization-motion` · tags: Motion Design · local file: [localization-motion.md](localization-motion.md)
- Adapt animated designs for multiple languages in After Effects.

```text
Localize this motion design in After Effects for Japanese, German, and Spanish. Adapt the text and typography for each language, preserve the original layout and animation timing, and keep all text layers editable.
```

### Motion Design in After Effects

- Command `/use-after-effects` · tags: Motion Design · local file: [use-after-effects.md](use-after-effects.md)
- Create and refine editable motion design in After Effects.

```text
Create a motion design sequence in After Effects using my brief and visual assets. Animate the key elements with clear timing, smooth transitions, and expressive typography. Keep the layers, keyframes, and controls editable.
```

### Paper Collage in After Effects

- Command `/paper-collage` · tags: Motion Design · local file: [paper-collage.md](paper-collage.md)
- Turn paper cutouts into editable motion in After Effects.

```text
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.
```

### Presentation Animation in After Effects

- Command `/presentation-animation` · tags: Motion Design · local file: [presentation-animation.md](presentation-animation.md)
- Turn presentation slides into editable motion in After Effects.

```text
Animate my presentation in After Effects using the supplied slides and brand assets. Add clear text reveals, smooth slide transitions, and image motion timed to the music. Preserve the visual hierarchy and keep text, graphic layers, and keyframes editable.
```

### SaaS Animation in After Effects

- Command `/saas-animation` · tags: Motion Design · local file: [saas-animation.md](saas-animation.md)
- Bring SaaS interfaces and product stories to life in After Effects.

```text
Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.
```

### Simulate destruction in Blender

- Command `/Destruction-Studio` · tags: Production · local file: [destruction-studio.md](destruction-studio.md)
- Create cinematic destruction in Blender with fractured structures, simulated debris, dust, and editable scenes.

```text
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/destruction-studio-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Whiteboard Animation in After Effects

- Command `/whiteboard-animation` · tags: Motion Design · local file: [whiteboard-animation.md](whiteboard-animation.md)
- Turn whiteboard ideas into editable animation in After Effects.

```text
Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.
```

### Animate object assembly in Blender

- Command `/Exploded-view` · tags: Production · local file: [exploded-view.md](exploded-view.md)
- Animate objects assembling in Blender with coordinated parts, clear camera staging, and an editable final scene.

```text
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/exploded-view-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Build 3D scenes in Blender

- Command `/Scene-Builder` · tags: Production · local file: [scene-builder.md](scene-builder.md)
- Build editable Blender scenes from characters, architecture, and props, with room to refine poses and camera angles.

```text
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/cinematic/20260923/posters-v2/scene-builder-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Editorial Motion Graphics

- Command `/vox-mixed-media` · tags: Marketing Faceless · local file: [vox-mixed-media.md](vox-mixed-media.md)
- Explain a story using editorial motion graphics and mixed visual media.

```text
Create an editorial motion graphics faceless video about how the Mona Lisa became the world’s most famous painting.
```

### Create cartoon materials in Blender

- Command `/Cartoon-shaders` · tags: Production · local file: [cartoon-shaders.md](cartoon-shaders.md)
- Create stylized Blender materials with toon shading, expressive outlines, and adjustable textures.

```text
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/cartoon-shaders-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

### Organize footage in Premiere Pro

- Command `/Project-sorter` · tags: Production · local file: [project-sorter.md](project-sorter.md)
- Organize footage, synchronize sound, and prepare editable sequences in Adobe Premiere Pro.

```text
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/project-sorter-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-premiere
```

### Create VFX composites in After Effects

- Command `/Shot-Composer` · tags: Production · local file: [shot-composer.md](shot-composer.md)
- Combine footage and visual layers into editable VFX shots in After Effects, with matched lighting, depth, and grain.

```text
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/shot-composer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

### Stickman cartoon

- Command `/stickman-explainer` · tags: Marketing Faceless · local file: [stickman-explainer.md](stickman-explainer.md)
- Turn a story or concept into an animated explainer with simple stickman characters.

```text
Create a stickman cartoon faceless video showing Odysseus's journey to Troy and back home
```

### Product review UGC

- Command `/ugc-flow` · tags: UGC · local file: [ugc-flow.md](ugc-flow.md)
- Create a creator-style product review from your product brief and reference images.

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.
```

### Remove unwanted objects in After Effects

- Command `/Shot-Cleanup` · tags: Production · local file: [shot-cleanup.md](shot-cleanup.md)
- Clean up unwanted elements in After Effects while preserving the shot’s movement, texture, and editable layers.

```text
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/shot-cleanup-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

### Convert images to vectors in Illustrator

- Command `/Vectorize` · tags: Production · local file: [vectorize.md](vectorize.md)
- Turn raster illustrations into editable Illustrator artwork with organized paths, groups, and layers.

```text
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/vectorize-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-illustrator
```

### Clean up images in Photoshop

- Command `/Image-fixer` · tags: Production · local file: [image-fixer.md](image-fixer.md)
- Refine generated locations in Photoshop by fixing textures, removing unwanted objects, and preserving editable masks.

```text
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/image-fixer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-photoshop
```

### Physical UGC video

- Command `/physical-ugc-skill` · tags: Marketing UGC · local file: [physical-ugc-skill.md](physical-ugc-skill.md)
- Create a creator-style tutorial that demonstrates how a physical product works.

```text
Create a UGC tutorial video with this girl showing how to use this water gun
```

### Create visual effects in TouchDesigner

- Command `/use-touchdesigner` · tags: Production · local file: [use-touchdesigner.md](use-touchdesigner.md)
- Build visual effects for images and video in TouchDesigner, then preview, refine, and export the result.

```text
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/use-touchdesigner-poster.webp
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /use-touchdesigner
```

### Color grade footage in DaVinci Resolve

- Command `/color-grading` · tags: Production · local file: [color-grading.md](color-grading.md)
- Grade footage in DaVinci Resolve Studio with balanced shots, natural skin tones, and an editable node structure.

```text
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
Ask me for the source assets and project files before editing. Preserve existing work.
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /color-grading
```

### Unboxing UGC

- Command `/unboxing-ugc-skill` · tags: UGC · local file: [unboxing-ugc-skill.md](unboxing-ugc-skill.md)
- Create a creator-style unboxing video with a product reveal and close-up details.

```text
Create an unboxing UGC video for a lifestyle product with a clear reveal, close-up details, natural creator reactions, and a simple call to action.
```

### Try-on UGC

- Command `/try-on-ugc-skill` · tags: UGC · local file: [try-on-ugc-skill.md](try-on-ugc-skill.md)
- Create a creator-style try-on video that shows how a product looks and fits.

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.
```

### Paper Diorama

- Command `/faceless-paper-diorama` · tags: Faceless · local file: [faceless-paper-diorama.md](faceless-paper-diorama.md)
- Tell a story through layered paper-like scenes and cutout characters.

```text
Create a faceless video in a paper diorama style about Magellan and the first voyage to circumnavigate the globe.
```

### Pastel Flat 2D

- Command `/faceless-pastel-flat-2d` · tags: Faceless · local file: [faceless-pastel-flat-2d.md](faceless-pastel-flat-2d.md)
- Create a faceless explainer with soft pastel colors and simple flat illustrations.

```text
Create a faceless video in a pastel flat 2D style about how a stone tower lighthouse guides ships at night.
```

### Hand Drawn

- Command `/faceless-hand-drawn` · tags: Faceless · local file: [faceless-hand-drawn.md](faceless-hand-drawn.md)
- Explain an idea through hand-drawn illustrations and animated scenes.

```text
Create a faceless video in a hand drawn style about how a printing machine turns an idea into pages of a book.
```

### Mannequin

- Command `/faceless-mannequin` · tags: Faceless · local file: [faceless-mannequin.md](faceless-mannequin.md)
- Tell a story with stylized mannequin figures instead of an on-camera presenter.

```text
Create a faceless video in a mannequin style about the first film in history and how early motion pictures worked.
```

### Whiteboard Doodle

- Command `/faceless-whiteboard-doodle` · tags: Faceless · local file: [faceless-whiteboard-doodle.md](faceless-whiteboard-doodle.md)
- Explain a topic with whiteboard-style sketches, symbols, and simple drawings.

```text
Create a faceless video in a whiteboard doodle style about why we yawn.
```

## Setup, verbatim (from page data)

Claude Code setup prompt:

```text
Set up Higgsfield so I can generate images and videos. Install the CLI with npm i -g @higgsfield/cli, run higgsfield auth login and let me complete sign-in, then install the companion skills with npx skills add higgsfield-ai/skills. Tell me when it is ready.
```

CLI commands: `npm i -g @higgsfield/cli` → `higgsfield auth login` → `npx skills add higgsfield-ai/skills` (Node.js and npm required; the skills are installed into your coding agent, and preset prompts are natural language, not shell commands).

Other agents: use an agent that supports **remote MCP servers with authentication**, add a remote server named "Higgsfield" with `https://mcp.higgsfield.ai/mcp`, sign in, then paste a preset prompt and attach the reference files.
