# MCP presets: all verbatim prompts

Source: higgsfield.ai/mcp and /mcp/* pages (crawled 2026-09-25). Labels: **page example prompt** = the copy-button text; **user prompt** = the example chat message; **generation prompt** = what the agent actually sent to Higgsfield in the page demo (the most useful kind, because it shows how a brief becomes a model prompt); **deep-link variant** = the text behind "Try in Claude" or ChatGPT buttons (the trailing "connect Higgsfield" line is removed).

No model, duration or aspect ratio is fixed unless it appears in tags. The agent picks the model. Add `9:16` for UGC and `16:9` for faceless explainers, as the demos do.

**Total distinct verbatim prompts: 116** (including 1 setup prompt).

<a id="setup"></a>
## Setup prompt (Claude Code)

```text
Set up Higgsfield so I can generate images and videos. Install the CLI with npm i -g @higgsfield/cli, run higgsfield auth login and let me complete sign-in, then install the companion skills with npx skills add higgsfield-ai/skills. Tell me when it is ready.
```

## Cinematic film scene / 3D / VFX (Blender, After Effects compositing)

**Simulate destruction in Blender**: page example prompt · https://higgsfield.ai/mcp/destruction-studio

```text
/Destruction-Studio
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/destruction-studio-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Simulate destruction in Blender**: user prompt · https://higgsfield.ai/mcp/destruction-studio

```text
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.
```

**Simulate destruction in Blender**: deep-link variant · https://higgsfield.ai/mcp/destruction-studio

```text
/Destruction-Studio
Create a cinematic destruction sequence in Blender using my scene or reference assets. Ask what should break, what triggers the destruction, and the shot duration. Set up fractures, breakable connections, debris physics, dust, and a camera that clearly shows the action. Preview the simulation and save an editable Blender project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/destruction-studio-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Animate object assembly in Blender**: page example prompt · https://higgsfield.ai/mcp/exploded-view

```text
/Exploded-view
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/exploded-view-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Animate object assembly in Blender**: user prompt · https://higgsfield.ai/mcp/exploded-view

```text
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.
```

**Animate object assembly in Blender**: deep-link variant · https://higgsfield.ai/mcp/exploded-view

```text
/Exploded-view
Create an exploded-view and assembly animation from my Blender scene. Inspect the parts, move them apart to reveal how they fit, then animate them assembling in a clear sequence. Keep important connections visible to the camera and preserve the final geometry, materials, lighting, and object positions. Save the editable scene and a preview.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/exploded-view-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Build 3D scenes in Blender**: page example prompt · https://higgsfield.ai/mcp/scene-builder

```text
/Scene-Builder
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/cinematic/20260923/posters-v2/scene-builder-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Build 3D scenes in Blender**: user prompt · https://higgsfield.ai/mcp/scene-builder

```text
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.
```

**Build 3D scenes in Blender**: deep-link variant · https://higgsfield.ai/mcp/scene-builder

```text
/Scene-Builder
Build a Blender scene from my brief and reference images using available character, architecture, and prop assets. Ask for the setting, main action, and visual style. Arrange the layout, pose rigged characters, and propose clear camera angles. Keep objects organized and editable, and save the Blender scene.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/cinematic/20260923/posters-v2/scene-builder-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Remove unwanted objects in After Effects**: page example prompt · https://higgsfield.ai/mcp/shot-cleanup

```text
/Shot-Cleanup
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/shot-cleanup-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

**Remove unwanted objects in After Effects**: user prompt · https://higgsfield.ai/mcp/shot-cleanup

```text
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.
```

**Remove unwanted objects in After Effects**: deep-link variant · https://higgsfield.ai/mcp/shot-cleanup

```text
/Shot-Cleanup
Clean up the unwanted elements I identify in this shot using After Effects. Inspect their motion, create tracked masks or cleanup layers as needed, and preserve the surrounding texture, lighting, and camera movement. Review the full shot for visible patches or flicker and save an editable AE project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/shot-cleanup-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

**Create VFX composites in After Effects**: page example prompt · https://higgsfield.ai/mcp/shot-composer

```text
/Shot-Composer
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/shot-composer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

**Create VFX composites in After Effects**: user prompt · https://higgsfield.ai/mcp/shot-composer

```text
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.
```

**Create VFX composites in After Effects**: deep-link variant · https://higgsfield.ai/mcp/shot-composer

```text
/Shot-Composer
Composite my footage and supplied layers into a cohesive VFX shot in After Effects. Ask for the target look and identify the keying, tracking, and cleanup needed. Match lighting, atmosphere, depth of field, motion blur, and grain. Generate missing visual layers only when needed, then deliver a preview and an editable AE project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/shot-composer-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-after-effects
```

## product ad

**Ad Recreator**: page example prompt · https://higgsfield.ai/mcp/ad-adaptation

```text
/marketing-adapt-video Create an original ad for my product using this reference video’s persuasion structure.
```

**Ad Recreator**: generation prompt [custom: Reference-led concept, custom: Original creative] · https://higgsfield.ai/mcp/ad-adaptation

```text
Create an original product ad inspired by the reference video’s persuasion structure. Build a distinct hook, demonstration, and call to action. Use the supplied product details and avoid copying the reference’s exact wording or branding.
```

**Ad Recreator**: deep-link variant · https://higgsfield.ai/mcp/ad-adaptation

```text
/marketing-adapt-video Create an original ad for my product using this reference video’s persuasion structure.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/gulpo-by-astra-input.mp4)
```

**Hook Multiplier**: page example prompt · https://higgsfield.ai/mcp/ad-hooks

```text
/marketing-hook-variants Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.
```

**Hook Multiplier**: generation prompt [custom: 3 hook variants, aspect-ratio: 9:16, audio: Original audio] · https://higgsfield.ai/mcp/ad-hooks

```text
Create three complete edits of the reference video. Give each version a distinct opening hook, then continue with the original video. Preserve the remaining footage, pacing, audio, and call to action.
```

**Hook Multiplier**: deep-link variant · https://higgsfield.ai/mcp/ad-hooks

```text
/marketing-hook-variants Create 3 complete versions of this video with new opening hooks. Keep the rest unchanged.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/dog-ad-hook-original.mp4)
```

**Ad Resizer**: page example prompt · https://higgsfield.ai/mcp/aspect-ratio-formatter

```text
/marketing-resize-ads Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.
```

**Ad Resizer**: generation prompt [aspect-ratio: 1:1, aspect-ratio: 4:5, aspect-ratio: 9:16] · https://higgsfield.ai/mcp/aspect-ratio-formatter

```text
Adapt the supplied static ad into square 1:1, portrait 4:5, and vertical 9:16 layouts. Preserve the product, brand colors, offer, and copy hierarchy. Keep important elements away from the edges.
```

**Ad Resizer**: deep-link variant · https://higgsfield.ai/mcp/aspect-ratio-formatter

```text
/marketing-resize-ads Adapt this static ad for 1:1, 4:5, and 9:16 placements, keeping the copy and branding clear.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/perfume-ad-aspect-ratio.webp)
```

**Headline Multiplier**: page example prompt · https://higgsfield.ai/mcp/headlines-ab

```text
/marketing-headline-variants Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.
```

**Headline Multiplier**: generation prompt [custom: 10 headlines, custom: Headline-only changes] · https://higgsfield.ai/mcp/headlines-ab

```text
Create ten versions of the supplied ad, changing only the headline. Explore different benefit, curiosity, and problem-led angles without adding unsupported claims. Preserve every other design element.
```

**Headline Multiplier**: deep-link variant · https://higgsfield.ai/mcp/headlines-ab

```text
/marketing-headline-variants Create 10 versions of this ad, changing only the headline. Keep everything else unchanged.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/snack-ad-headline.webp)
```

**Ad Strategist**: page example prompt · https://higgsfield.ai/mcp/link-to-ads

```text
/marketing-research-to-ads Research this product and its competitors, then create 5 static Meta ads with distinct angles.
```

**Ad Strategist**: generation prompt [custom: 5 ad concepts, custom: Distinct angles] · https://higgsfield.ai/mcp/link-to-ads

```text
Create five static Meta ad concepts for the supplied product. Give each a distinct customer angle, headline, visual composition, and call to action. Ground all product claims in the supplied evidence and avoid unsupported promises.
```

**Ad Strategist**: deep-link variant · https://higgsfield.ai/mcp/link-to-ads

```text
/marketing-research-to-ads Research this product and its competitors, then create 5 static Meta ads with distinct angles.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/sorbet-soda-link-to-ads.webp)
```

**Ad Localizer**: page example prompt · https://higgsfield.ai/mcp/localizations

```text
/marketing-localize-ads Localize these static ads into Spanish and German while preserving the offer and brand voice.
```

**Ad Localizer**: generation prompt [custom: Spanish + German, custom: Static ads] · https://higgsfield.ai/mcp/localizations

```text
Create Spanish and German versions of the supplied static ad. Use natural, market-appropriate wording, preserve the offer and brand identity, and keep all translated text legible within the existing layout.
```

**Ad Localizer**: deep-link variant · https://higgsfield.ai/mcp/localizations

```text
/marketing-localize-ads Localize these static ads into Spanish and German while preserving the offer and brand voice.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/sorbet-ad-localization.webp)
```

**Campaign Analyst**: page example prompt · https://higgsfield.ai/mcp/performance-marketing-operator

```text
/marketing-campaign-manager Review 14 days of campaign data and recommend what to scale, pause, and test next.
```

**Campaign Analyst**: generation prompt [custom: 14-day review, custom: Scale · Pause · Test] · https://higgsfield.ai/mcp/performance-marketing-operator

```text
Review the supplied 14 days of campaign data. Group recommendations into scale, pause, and test next. Explain each decision using the actual metrics, flag missing data, and distinguish observed results from hypotheses.
```

**Customer Voice Ads**: page example prompt · https://higgsfield.ai/mcp/voc-research-ad

```text
/marketing-feedback-to-ads Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.
```

**Customer Voice Ads**: generation prompt [custom: 5 ad concepts, custom: Customer insights] · https://higgsfield.ai/mcp/voc-research-ad

```text
Create five static Meta ad concepts from the supplied customer reviews and product evidence. Use distinct customer needs and objections for each angle. Preserve the meaning of customer feedback and do not invent testimonials or unsupported claims.
```

**Customer Voice Ads**: deep-link variant · https://higgsfield.ai/mcp/voc-research-ad

```text
/marketing-feedback-to-ads Turn my customer reviews and product evidence into 5 static Meta ads with distinct angles.

Reference media:
- [Reference 1](https://static.higgsfield.ai/gpt-astra/pool-day-voice-of-customer.webp)
```

## UGC

**Physical UGC video**: page example prompt · https://higgsfield.ai/mcp/physical-ugc-skill

```text
Create a UGC tutorial video with this girl showing how to use this water gun
```

**Physical UGC video**: user prompt [attachments: Creator reference (image), Product reference (image)] · https://higgsfield.ai/mcp/physical-ugc-skill

```text
Create a UGC tutorial video with this creator showing how to use this water gun.
```

**Physical UGC video**: generation prompt [custom: Product tutorial, custom: Creator + product, aspect-ratio: 9:16] · https://higgsfield.ai/mcp/physical-ugc-skill

```text
Create a creator-led tutorial for the referenced water gun. Preserve the creator’s appearance and the product’s recognizable details. Show a clear introduction, hands-on demonstration, and concise closing reaction with natural pacing.
```

**Physical UGC video**: deep-link variant · https://higgsfield.ai/mcp/physical-ugc-skill

```text
Create a UGC tutorial video with this girl showing how to use this water gun

Reference media:
- [Reference 1](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/6bc3f65e-f6f0-495c-923c-f5c65977b97f.png)
- [Reference 2](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/25ed16cd-6a26-4006-8973-7732a4331a07.png)
```

**Try-on UGC**: page example prompt · https://higgsfield.ai/mcp/try-on-ugc-skill

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.
```

**Try-on UGC**: generation prompt [custom: Try-on video, custom: Creator + outfit, aspect-ratio: 9:16] · https://higgsfield.ai/mcp/try-on-ugc-skill

```text
Create a try-on UGC video using the supplied creator and outfit references. Show the before-and-after transformation, fit details, styling moments, and a confident creator reaction. Preserve the outfit’s color, shape, and recognizable details.
```

**Try-on UGC**: deep-link variant · https://higgsfield.ai/mcp/try-on-ugc-skill

```text
Create a try-on UGC video showing the product before and after, fit details, styling moments, and a confident creator reaction.

Reference media:
- [Reference 1](https://static.higgsfield.ai/mcp-landing/skills/try-on-ugc-creator.webp)
- [Reference 2](https://static.higgsfield.ai/mcp-landing/skills/try-on-ugc-outfit.webp)
```

**Product review UGC**: page example prompt · https://higgsfield.ai/mcp/ugc-flow

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.
```

**Product review UGC**: generation prompt [custom: Product review, aspect-ratio: 9:16, custom: Creator + product] · https://higgsfield.ai/mcp/ugc-flow

```text
Create a vertical 9:16 product-review video using the supplied creator and purple gradient tumbler references. Develop a concise concept and script, then show the creator introducing the tumbler and demonstrating it in use. Preserve the creator’s appearance and the product’s recognizable shape and colors. Use natural delivery, clear product close-ups, and a brief closing line. Do not invent product specifications or performance claims.
```

**Product review UGC**: deep-link variant · https://higgsfield.ai/mcp/ugc-flow

```text
Create a complete UGC flow for this tumbler using the attached creator, from concept and script to a finished 9:16 video.

Reference media:
- [Reference 1](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/804cd979-090a-47d0-aa18-1a052f130a73.webp)
- [Reference 2](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/1df6d4ab-c9e0-440a-a039-e7faeff060c3.webp)
```

**Unboxing UGC**: page example prompt · https://higgsfield.ai/mcp/unboxing-ugc-skill

```text
Create an unboxing UGC video for a lifestyle product with a clear reveal, close-up details, natural creator reactions, and a simple call to action.
```

**Unboxing UGC**: generation prompt [custom: Unboxing, custom: Product details, aspect-ratio: 9:16] · https://higgsfield.ai/mcp/unboxing-ugc-skill

```text
Create a lifestyle-product unboxing UGC video with a clear package opening and product reveal. Include close-up details, natural creator reactions, and a concise call to action. Keep product details consistent with the supplied brief.
```

## Anime / animation (After Effects motion design + faceless explainer styles)

**Fairy Tale & Myth**: page example prompt · https://higgsfield.ai/mcp/faceless-fairy-tale-myth

```text
Create a faceless video in a fairy tale and myth style about how airplanes fly.
```

**Fairy Tale & Myth**: generation prompt [custom: Fairy tale & myth, custom: Faceless explainer] · https://higgsfield.ai/mcp/faceless-fairy-tale-myth

```text
Create a faceless explainer about how airplanes fly in a fairy-tale and myth-inspired visual style. Use a coherent story, expressive illustrated scenes, and accessible narration to explain lift, thrust, drag, and weight.
```

**Hand Drawn**: page example prompt · https://higgsfield.ai/mcp/faceless-hand-drawn

```text
Create a faceless video in a hand drawn style about how a printing machine turns an idea into pages of a book.
```

**Hand Drawn**: user prompt · https://higgsfield.ai/mcp/faceless-hand-drawn

```text
Create a faceless video in a hand-drawn style about how a printing machine turns an idea into pages of a book.
```

**Hand Drawn**: generation prompt [aspect-ratio: 16:9, custom: Hand-drawn illustration] · https://higgsfield.ai/mcp/faceless-hand-drawn

```text
Create a landscape faceless explainer showing how an idea becomes printed book pages. Begin with a rough concept and page layout, then show paper moving through a printing machine and the finished pages emerging. Use hand-drawn illustrations, visible sketch textures, and a consistent storybook palette. Make each stage easy to follow with clear scene transitions, simple visual details, and readable labels.
```

**Mannequin**: page example prompt · https://higgsfield.ai/mcp/faceless-mannequin

```text
Create a faceless video in a mannequin style about the first film in history and how early motion pictures worked.
```

**Mannequin**: generation prompt [aspect-ratio: 16:9, custom: Mannequin style] · https://higgsfield.ai/mcp/faceless-mannequin

```text
Create a landscape faceless explainer about the beginnings of film and how early motion pictures worked. Use stylized mannequin figures, period-inspired sets, and simple camera and projector visuals. Keep the characters visually consistent and the sequence easy to follow. Use clear scene transitions and readable labels. Verify historical details and clarify what is meant by the first film.
```

**Paper Diorama**: page example prompt · https://higgsfield.ai/mcp/faceless-paper-diorama

```text
Create a faceless video in a paper diorama style about Magellan and the first voyage to circumnavigate the globe.
```

**Paper Diorama**: generation prompt [aspect-ratio: 16:9, custom: Paper diorama] · https://higgsfield.ai/mcp/faceless-paper-diorama

```text
Create a landscape faceless explainer about Magellan and the first voyage to circumnavigate the globe. Use layered paper dioramas, cutout ships and characters, textured maps, and paper coastlines. Organize the voyage into clear scenes with readable route markers and purposeful transitions. Keep the handmade visual style consistent, using gentle camera movement and shadows to reveal depth. Verify the historical sequence and distinguish who began the expedition from who completed it.
```

**Pastel Flat 2D**: page example prompt · https://higgsfield.ai/mcp/faceless-pastel-flat-2d

```text
Create a faceless video in a pastel flat 2D style about how a stone tower lighthouse guides ships at night.
```

**Pastel Flat 2D**: generation prompt [aspect-ratio: 16:9, custom: Pastel flat 2D] · https://higgsfield.ai/mcp/faceless-pastel-flat-2d

```text
Create a landscape faceless explainer showing how a stone tower lighthouse helps ships navigate at night. Use soft pastel colors, simple flat 2D illustrations, and consistent shapes for the lighthouse, coastline, and ship. Show the lighthouse beam across the water and explain its role as a coastal navigation aid through clear visual steps. Keep the animation gentle, the scene transitions smooth, and any labels easy to read.
```

**Whiteboard Doodle**: page example prompt · https://higgsfield.ai/mcp/faceless-whiteboard-doodle

```text
Create a faceless video in a whiteboard doodle style about why we yawn.
```

**Whiteboard Doodle**: generation prompt [custom: Whiteboard doodle, custom: Faceless explainer, aspect-ratio: 16:9] · https://higgsfield.ai/mcp/faceless-whiteboard-doodle

```text
Create a faceless whiteboard-doodle explainer about why we yawn. Use clean drawings, a clear scene sequence, and accessible narration. Explain that yawning’s exact function is still debated, and avoid presenting a single theory as settled fact.
```

**Illustration Animation in After Effects**: page example prompt · https://higgsfield.ai/mcp/illustration-animation

```text
/illustration-animation Animate these illustrations in After Effects with drifting cards, circling koi, and rotating shapes. Preserve the colors and editable layers.
```

**Illustration Animation in After Effects**: user prompt · https://higgsfield.ai/mcp/illustration-animation

```text
Animate these characters in After Effects with gentle motion, blinks, and editable layers.
```

**Illustration Animation in After Effects**: generation prompt [custom: After Effects, custom: Editable layers] · https://higgsfield.ai/mcp/illustration-animation

```text
Animate the supplied illustrated characters in After Effects with subtle gestures, gentle movement, and natural blinks. Preserve the artwork and color palette. Keep the character layers and animation keyframes editable.
```

**Illustration Animation in After Effects**: deep-link variant · https://higgsfield.ai/mcp/illustration-animation

```text
/illustration-animation Animate these illustrations in After Effects with drifting cards, circling koi, and rotating shapes. Preserve the colors and editable layers.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/illustation-animation/last-frames-20260914/shape_animation-last-frame.webp)
```

**Localization Motion in After Effects**: page example prompt · https://higgsfield.ai/mcp/localization-motion

```text
/localization-motion Localize this motion design in After Effects for Japanese, German, and Spanish. Adapt the text and typography for each language, preserve the original layout and animation timing, and keep all text layers editable.
```

**Localization Motion in After Effects**: generation prompt [custom: Japanese · German · Spanish, custom: Editable text] · https://higgsfield.ai/mcp/localization-motion

```text
Localize the supplied After Effects motion design into Japanese, German, and Spanish. Preserve its visual hierarchy and timing, adapt the typography to each language, and keep all text layers editable.
```

**Localization Motion in After Effects**: deep-link variant · https://higgsfield.ai/mcp/localization-motion

```text
/localization-motion Localize this motion design in After Effects for Japanese, German, and Spanish. Adapt the text and typography for each language, preserve the original layout and animation timing, and keep all text layers editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/localiztion-motion/20260914/localiztion-motion-last.webp)
```

**Paper Collage in After Effects**: page example prompt · https://higgsfield.ai/mcp/paper-collage

```text
/paper-collage
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.
```

**Paper Collage in After Effects**: generation prompt [duration: 10s, custom: Paper collage, custom: Editable layers] · https://higgsfield.ai/mcp/paper-collage

```text
Create a 10-second paper-collage animation: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the collage assets with Higgsfield, then assemble the scene in After Effects with layered parallax and stepped motion. Preserve editable layers, rig, and keyframes.
```

**Paper Collage in After Effects**: deep-link variant · https://higgsfield.ai/mcp/paper-collage

```text
/paper-collage
Create a 10-second paper-collage animation in After Effects: a courier crosses a postage-stamp bridge, falls through torn paper, and escapes on a paper plane above retro Los Angeles. Generate the assets with Higgsfield, then add layered parallax and stepped motion. Keep the layers, rig, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/paper-collage/20260914/THE_DETOUR_LA_v2_1080p-last.webp)
```

**Paper Collage in After Effects**: deep-link variant · https://higgsfield.ai/mcp/paper-collage

```text
@Higgsfield /use-after-effects
Help me create an editable paper-collage animation in Adobe After Effects. Check the connection to After Effects, then ask for my brief, reference assets, duration, and output format. Use my answers to build and preview the animation. Preserve any existing work in my open project.
```

**Presentation Animation in After Effects**: page example prompt · https://higgsfield.ai/mcp/presentation-animation

```text
/presentation-animation Animate my presentation in After Effects using the supplied slides and brand assets. Add clear text reveals, smooth slide transitions, and image motion timed to the music. Preserve the visual hierarchy and keep text, graphic layers, and keyframes editable.
```

**Presentation Animation in After Effects**: generation prompt [custom: After Effects, custom: Presentation motion, custom: Editable layers] · https://higgsfield.ai/mcp/presentation-animation

```text
Animate the supplied presentation in After Effects. Use clear text reveals, smooth slide transitions, and image motion timed to the supplied music. Preserve the brand assets and visual hierarchy, and keep text, graphic layers, and keyframes editable.
```

**Presentation Animation in After Effects**: deep-link variant · https://higgsfield.ai/mcp/presentation-animation

```text
/presentation-animation Animate my presentation in After Effects using the supplied slides and brand assets. Add clear text reveals, smooth slide transitions, and image motion timed to the music. Preserve the visual hierarchy and keep text, graphic layers, and keyframes editable.

Reference media:
- [Reference 1](https://d2ol7oe51mr4n9.cloudfront.net/content_user_id/36d49a80-6052-4217-b7be-516bb7f073d6.mp4)
```

**SaaS Animation in After Effects**: page example prompt · https://higgsfield.ai/mcp/saas-animation

```text
/saas-animation Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.
```

**SaaS Animation in After Effects**: generation prompt [custom: Product walkthrough, custom: After Effects, custom: Editable interface] · https://higgsfield.ai/mcp/saas-animation

```text
Create a SaaS product animation in After Effects using the supplied app screens and brand assets. Highlight key features with smooth interface transitions, animated typography, and a final logo reveal. Keep text, interface elements, and keyframes editable.
```

**SaaS Animation in After Effects**: deep-link variant · https://higgsfield.ai/mcp/saas-animation

```text
/saas-animation Create a SaaS product animation in After Effects using my app screens and brand assets. Highlight the key features with smooth interface transitions, animated typography, and a final logo reveal. Keep the text, interface elements, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/saas-animation/passo-20260914/passo-last-frame.webp)
```

**Stickman cartoon**: page example prompt · https://higgsfield.ai/mcp/stickman-explainer

```text
Create a stickman cartoon faceless video showing Odysseus's journey to Troy and back home
```

**Stickman cartoon**: user prompt · https://higgsfield.ai/mcp/stickman-explainer

```text
Create a stickman cartoon faceless video showing Odysseus's journey to Troy and back home.
```

**Stickman cartoon**: generation prompt [aspect-ratio: 16:9, custom: Stickman cartoon] · https://higgsfield.ai/mcp/stickman-explainer

```text
Create a landscape faceless cartoon retelling the myth of Odysseus’s journey to Troy and back home. Use simple, expressive stickman characters and clear visual storytelling. Organize the journey into a readable sequence of departure, conflict, obstacles at sea, and homecoming. Keep character designs consistent, use recognizable settings and props, and make any captions easy to read. Present the story as a mythological retelling.
```

**Stickman cartoon**: deep-link variant · https://higgsfield.ai/mcp/stickman-explainer

```text
Create a stickman cartoon faceless video showing Odysseus
```

**Motion Design in After Effects**: page example prompt · https://higgsfield.ai/mcp/use-after-effects

```text
/use-after-effects Create a motion design sequence in After Effects using my brief and visual assets. Animate the key elements with clear timing, smooth transitions, and expressive typography. Keep the layers, keyframes, and controls editable.
```

**Motion Design in After Effects**: user prompt [attachments: Motion Design in After Effects (image)] · https://higgsfield.ai/mcp/use-after-effects

```text
Animate these illustrated characters in After Effects with expressive gestures, blinking eyes, and flowing hair. Preserve the artwork, colors, and textures, and keep the character layers and keyframes editable.
```

**Motion Design in After Effects**: generation prompt [custom: After Effects, custom: Character animation, custom: Editable keyframes] · https://higgsfield.ai/mcp/use-after-effects

```text
Animate the supplied illustrated characters in After Effects with expressive gestures, blinking eyes, and flowing hair. Preserve the artwork, colors, and textures. Keep character layers and keyframes editable.
```

**Motion Design in After Effects**: deep-link variant · https://higgsfield.ai/mcp/use-after-effects

```text
/use-after-effects Create a motion design sequence in After Effects using my brief and visual assets. Animate the key elements with clear timing, smooth transitions, and expressive typography. Keep the layers, keyframes, and controls editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/use-after-effects/updated-20260914/ae-motion-last-frame.webp)
```

**Editorial Motion Graphics**: page example prompt · https://higgsfield.ai/mcp/vox-mixed-media

```text
Create an editorial motion graphics faceless video about how the Mona Lisa became the world’s most famous painting.
```

**Editorial Motion Graphics**: generation prompt [aspect-ratio: 16:9, custom: Editorial motion graphics] · https://higgsfield.ai/mcp/vox-mixed-media

```text
Create a landscape editorial motion graphics video about how the Mona Lisa became the world’s most famous painting. Build a clear narrative with mixed-media compositions, animated headlines, image cutouts, and purposeful transitions. Keep the painting recognizable and on-screen text easy to read. Verify historical claims before including them.
```

**Whiteboard Animation in After Effects**: page example prompt · https://higgsfield.ai/mcp/whiteboard-animation

```text
/whiteboard-animation Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.
```

**Whiteboard Animation in After Effects**: generation prompt [custom: Whiteboard motion, custom: After Effects, custom: Editable shapes] · https://higgsfield.ai/mcp/whiteboard-animation

```text
Animate the supplied whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Preserve the board layout and keep text, shapes, and keyframes editable.
```

**Whiteboard Animation in After Effects**: deep-link variant · https://higgsfield.ai/mcp/whiteboard-animation

```text
/whiteboard-animation Animate this whiteboard in After Effects with moving collaboration cursors, sticky-note reveals, hand-drawn annotations, and connecting arrows. Guide attention through the board while preserving its layout and keeping text, shapes, and keyframes editable.

Reference media:
- [Reference 1](https://static.higgsfield.ai/skills/whiteboard-animation/20260914/purr-last-frame.webp)
```

## Other: post-production and design tools (Resolve, Premiere, Photoshop, Illustrator, TouchDesigner, Blender shaders)

**Create cartoon materials in Blender**: page example prompt · https://higgsfield.ai/mcp/cartoon-shaders

```text
/Cartoon-shaders
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/cartoon-shaders-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Create cartoon materials in Blender**: user prompt · https://higgsfield.ai/mcp/cartoon-shaders

```text
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.
```

**Create cartoon materials in Blender**: deep-link variant · https://higgsfield.ai/mcp/cartoon-shaders

```text
/Cartoon-shaders
Create a reusable cartoon-shader setup for my Blender scene using my style reference. Add adjustable toon shadows, color transitions, texture, and outlines where appropriate. Expose clear material controls, preserve the original object colors, and verify the result in a render. Keep the materials editable and reusable.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/cartoon-shaders-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-blender
```

**Color grade footage in DaVinci Resolve**: page example prompt · https://higgsfield.ai/mcp/color-grading

```text
/color-grading
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
Ask me for the source assets and project files before editing. Preserve existing work.
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /color-grading
```

**Color grade footage in DaVinci Resolve**: user prompt · https://higgsfield.ai/mcp/color-grading

```text
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.
```

**Color grade footage in DaVinci Resolve**: deep-link variant · https://higgsfield.ai/mcp/color-grading

```text
/color-grading
Color-grade my footage in DaVinci Resolve Studio using my visual references. Balance exposure and white balance, refine contrast and saturation, preserve natural skin tones, and match shots across the sequence. Build a clearly organized node structure and keep the original grade in a separate version. Review the result before export.

Ask me for the source assets and project files before editing. Preserve existing work.

Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /color-grading
```

**Clean up images in Photoshop**: page example prompt · https://higgsfield.ai/mcp/image-fixer

```text
/Image-fixer
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/image-fixer-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-photoshop
```

**Clean up images in Photoshop**: user prompt · https://higgsfield.ai/mcp/image-fixer

```text
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.
```

**Clean up images in Photoshop**: deep-link variant · https://higgsfield.ai/mcp/image-fixer

```text
/Image-fixer
Refine this generated location image in Adobe Photoshop. Ask me which objects to remove, which textures to repair, and what lighting I want. Clean up inconsistent details and surfaces, blend only the necessary generated changes through editable masks, and preserve the composition. Keep the retouching layered and save a PSD.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/image-fixer-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-photoshop
```

**Organize footage in Premiere Pro**: page example prompt · https://higgsfield.ai/mcp/project-sorter

```text
/Project-sorter
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/project-sorter-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-premiere
```

**Organize footage in Premiere Pro**: user prompt · https://higgsfield.ai/mcp/project-sorter

```text
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.
```

**Organize footage in Premiere Pro**: deep-link variant · https://higgsfield.ai/mcp/project-sorter

```text
/Project-sorter
Prepare my Adobe Premiere Pro project for editing. Organize the supplied media into bins by shooting day and media type, synchronize video with external audio where reliable sync information is available, and create clearly named sequences. Preserve the original files and existing edits, and flag clips that need manual review.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/composer-sorter-v2/project-sorter-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-premiere
```

**Create visual effects in TouchDesigner**: page example prompt · https://higgsfield.ai/mcp/use-touchdesigner

```text
/use-touchdesigner
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/use-touchdesigner-poster.webp
Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /use-touchdesigner
```

**Create visual effects in TouchDesigner**: user prompt · https://higgsfield.ai/mcp/use-touchdesigner

```text
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.
```

**Create visual effects in TouchDesigner**: deep-link variant · https://higgsfield.ai/mcp/use-touchdesigner

```text
/use-touchdesigner
Create a visual effect in TouchDesigner for my image or video. Ask for a style reference, output format, and duration. Build an editable network with clear controls for the main effect, preview it with my source media, and refine the look before export. Preserve the original input and save the TouchDesigner project.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/use-touchdesigner-poster.webp

Check that the required local tools and workflow instructions are available before editing.
@Higgsfield /use-touchdesigner
```

**Convert images to vectors in Illustrator**: page example prompt · https://higgsfield.ai/mcp/vectorize

```text
/Vectorize
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
Ask me for the source assets and project files before editing. Preserve existing work.
Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/vectorize-poster.webp
Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-illustrator
```

**Convert images to vectors in Illustrator**: user prompt · https://higgsfield.ai/mcp/vectorize

```text
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.
```

**Convert images to vectors in Illustrator**: deep-link variant · https://higgsfield.ai/mcp/vectorize

```text
/Vectorize
Convert my raster illustration into editable vector artwork in Adobe Illustrator. Preserve the composition, colors, and important shapes. Organize paths into meaningful groups, subgroups, and layers, clean up stray elements, and save an editable AI file. Ask which details must remain most faithful before simplifying the artwork.

Ask me for the source assets and project files before editing. Preserve existing work.

Workflow preview (for context, not source artwork): https://static.higgsfield.ai/skills/production/20260924/vectorize-poster.webp

Use the installed integration and its matching workflow instructions. Verify the live connection before editing.
@Higgsfield /use-illustrator
```

## Other: bundle router prompts

**Motion design bundle**: page example prompt · https://higgsfield.ai/mcp/bundles/motion-bundle

```text
/use-after-effects Help me turn my ideas into an editable animation. Choose a workflow from this bundle that fits my brief. Ask about my goals, reference assets, preferred tools, output format, and duration. Then guide me through the process, keeping layers, text, and keyframes editable wherever possible.
```

**Paid Ads bundle**: page example prompt · https://higgsfield.ai/mcp/bundles/paid-ads-bundle

```text
/marketing Help me plan, create, or improve my ads. Choose a workflow based on my product, audience, goals, and assets.
```

**Production skills bundle**: page example prompt · https://higgsfield.ai/mcp/bundles/production-skills

```text
@Higgsfield Help me turn my ideas into an editable production project. Choose a workflow from this bundle that fits my brief. Ask about my goals, reference assets, preferred tools, output format, and duration. Then guide me through the process, keeping scenes, layers, paths, timelines, and grades editable wherever possible.
Available workflows:
/Destruction-Studio — Blender
/Exploded-view — Blender
/Scene-Builder — Blender
/Cartoon-shaders — Blender
/Project-sorter — Adobe Premiere Pro
/Shot-Composer — Adobe After Effects
/Shot-Cleanup — Adobe After Effects
/Vectorize — Adobe Illustrator
/Image-fixer — Adobe Photoshop
/use-touchdesigner — TouchDesigner
/color-grading — DaVinci Resolve Studio
Ask me for the source assets and project files. Verify the required local tools before editing. Use /use-blender, /use-premiere, /use-after-effects, /use-illustrator, or /use-photoshop for the chosen application when setup is needed. Check available workflow instructions for TouchDesigner and DaVinci Resolve. Do not treat the bundle banner as source artwork.
```

**Production skills bundle**: deep-link variant · https://higgsfield.ai/mcp/bundles/production-skills

```text
@Higgsfield Help me turn my ideas into an editable production project. Choose a workflow from this bundle that fits my brief. Ask about my goals, reference assets, preferred tools, output format, and duration. Then guide me through the process, keeping scenes, layers, paths, timelines, and grades editable wherever possible.

Available workflows:
/Destruction-Studio — Blender
/Exploded-view — Blender
/Scene-Builder — Blender
/Cartoon-shaders — Blender
/Project-sorter — Adobe Premiere Pro
/Shot-Composer — Adobe After Effects
/Shot-Cleanup — Adobe After Effects
/Vectorize — Adobe Illustrator
/Image-fixer — Adobe Photoshop
/use-touchdesigner — TouchDesigner
/color-grading — DaVinci Resolve Studio

Ask me for the source assets and project files. Verify the required local tools before editing. Use /use-blender, /use-premiere, /use-after-effects, /use-illustrator, or /use-photoshop for the chosen application when setup is needed. Check available workflow instructions for TouchDesigner and DaVinci Resolve. Do not treat the bundle banner as source artwork.
```

