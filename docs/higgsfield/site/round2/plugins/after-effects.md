# Higgsfield plugins for After Effects

Source: https://higgsfield.ai/plugins/after-effects

## Notes

- Page is shared with Premiere Pro (same title/meta); the AE version adds the **MCP Bridge** walkthrough and a gallery of agent examples ("Recreate in ChatGPT").
- Requirements: Premiere Pro 2025 (25.0)+ or After Effects 2025 (25.0)+; macOS universal binary (Apple Silicon + Intel) or Windows 10/11 64-bit. Internet and a signed-in Higgsfield account are required; inference runs in the cloud and results land back on the timeline.
- Install: macOS `.dmg` -> drag Higgsfield.app to Applications -> launch the installer (auto-detects Adobe apps); Windows `.msi`. Then **Window -> Extensions -> Higgsfield**. One installer ships all plugins for both apps.
- Troubleshooting from the FAQ: quit Premiere/AE completely and re-run the installer; on Windows run as administrator; on macOS allow it under Privacy & Security ("Open Anyway"); check the Extensions menu for a hidden panel; restart Adobe if it was open during install.
- Tools in the panel: **Generate AI Video**, **Generate AI Image** (results drop onto the timeline), **Reframe** (one click to 9:16, 16:9, 4:3, 3:4, 21:9 or 1:1 with subject tracking), **Remove Background** (alpha key without green screen), **Draw to edit** (sketch on the frame to inpaint/remove/replace), **Upscale** (to 4K or 8K), **Edit Video** (prompt-based editing). The FAQ calls these "five plugins" (Reframe, Remove BG, Upscale, Draw to edit, Edit Video) plus the two generators.
- "Fresh engines" block: Supercomputer inside the plugins, Gemini Omni Flash, **Seed Audio 1.0** (voices, dialogue, ambience from a prompt), and the **MCP Bridge** (`https://bridge.higgsfield.ai/mcp`) that lets Claude/ChatGPT drive the host app.
- Same credits as the web app; commercial use allowed on paid plans.

## MCP Bridge: let an agent drive After Effects
1. Add an MCP connector named **Higgsfield Bridge** with URL `bridge.higgsfield.ai/mcp` (ChatGPT: also `chatgpt.com/plugins/higgsfield`).
2. Settings -> Connectors -> custom connector -> paste the URL.
3. Describe the job, e.g. the page's example: "Build a logo reveal with a bounce ease and a light streak in After Effects".
The bridge differs from the normal MCP endpoint: the regular endpoint only generates assets; the bridge talks to the plugin running inside your app, so the agent can build layers, keyframes and comps. Related skills: [../../mcp/use-after-effects.md](../../mcp/use-after-effects.md), [../../mcp/shot-composer.md](../../mcp/shot-composer.md), [../../mcp/shot-cleanup.md](../../mcp/shot-cleanup.md). Existing blog note: [../../blog/higgsfield-after-effects.md](../../blog/higgsfield-after-effects.md).

The nine example cards open ChatGPT with a full multi-step brief (3D build -> Higgsfield generation -> edit -> deliverables). They are reproduced below; the `[@Higgsfield](plugin://...)` token is ChatGPT's mention of the Higgsfield plugin.

## Prompts

10 new verbatim prompt(s) below.

### Turn a 3D fight scene into an anime short

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: anime/animation

```text
Build a short 3D fight animation featuring a nimble swordsman with a glowing blue blade and a towering armored knight on a floating stone platform. Choreograph a clash, a dodge, and a jumping counterattack. Keep the animation and cameras editable, check the motion, and render a preview.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) through MCP to create an original anime-style reference image for the characters and environment. Generate anime footage using the 3D preview as a motion guide and the reference image for visual style. Preserve the choreography, camera framing, and character appearance across shots.
Import the generated footage into a video editor. Assemble the shots into a cohesive short, trim awkward transitions, and add synchronized sword clashes, movement sounds, and atmospheric audio. Review the full sequence and export the finished video.
Deliver the editable 3D animation and video editing projects, all media used, and the final anime short.
```

### Color grade footage

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: cinematic film scene

```text
Color grade my footage. Use footage I provide, or ask me to upload it. Create a new project if needed and use the appropriate color settings for the footage. Give it a cinematic look with richer contrast, deeper shadows, controlled highlights, and natural skin tones.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to generate a visual reference for the look, then apply the grade in the editing project. Add subtly cool shadows and vibrant color accents while preserving detail. Keep the look consistent across all shots and organize the adjustments into editable nodes.
```

### Match a cinematic look

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: cinematic film scene

```text
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to create a cinematic reference image with golden highlights, warm amber midtones, deep charcoal shadows, and subtle cool accents.
Color grade my footage to match that reference. Use footage I provide, or ask me to upload it. Create a new project if needed. Adjust exposure, contrast, white balance, and saturation while preserving natural skin tones and detail in the shadows and highlights.
Check the grade throughout the entire clip and keep all adjustments in editable nodes. Deliver the graded video, the editable project, and a side-by-side comparison with the reference.
```

### Recreate the Oval Office in 3D

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: cinematic film scene

```text
Build a detailed 3D recreation of the Oval Office, with cream walls, gold curtains, a wooden presidential desk, and a fireplace seating area with yellow armchairs, table lamps, and framed portraits. Apply realistic materials and warm afternoon lighting. Set up a cinematic camera facing the fireplace and render the scene with a path-tracing renderer.
Inspect the render and fix any visible modeling, material, or lighting issues. Keep all objects and materials editable.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) through MCP to generate a short cinematic video from the finished render, with a slow camera push toward the fireplace. Preserve the room’s layout, furniture, and lighting throughout the shot. Deliver the editable 3D project, the final render, and the generated video.
```

### Turn a character concept into a cartoon

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: anime/animation

```text
Design an original character using [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote). Build a textured 3D model based on the concept and import it into a 3D editor.
Retopologize the mesh, create a clean UV layout, and build an animation rig. Test the character’s poses and deformations, then evaluate its topology, textures, and rig for production use. Revisit earlier steps to fix any issues and document remaining limitations.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to create a short cartoon featuring the finished character, keeping its appearance consistent across shots.
Deliver the editable 3D project, a production-readiness assessment, and the final cartoon.
```

### Paint The Creation of Adam

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: other

```text
Recreate Michelangelo’s The Creation of Adam as a detailed digital painting in a painting app. Start with a blank canvas and establish the composition, figures, and iconic reaching hands before refining the anatomy, faces, and drapery.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to generate supporting color studies and fresco texture references. Paint directly in the app using brushes, selections, and separate layers for the sketch, base colors, shading, and details.
Match the original’s muted palette, soft lighting, and aged fresco texture. Refine the painting from broad shapes to fine brushwork.
```

### Recreate a launch video

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: product ad

```text
Recreate the Higgsfield launch video (https://x.com/higgsfield/status/2096367800633921699) in a motion graphics editor. If the reference video is unavailable, ask me to upload it. Study it scene by scene, then rebuild it from scratch, matching the typography, layouts, colors, timing, easing, and transitions.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to generate the necessary still images and graphic assets. Create all motion directly in the editor, with editable layers and separate compositions for each scene.
Combine the scenes into one master composition. Compare the result against the original and refine any differences, including small visual details.
Deliver the rendered video and an editable motion graphics project.
```

### Model a camera in 1,025 parts

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: product ad

```text
Create a detailed cinema camera in a 3D editor with 1,025 individually modeled objects. Include the housing, film reels, internal mechanisms, screws, lens rings, individual iris blades, and glass lens elements.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) to generate visual references and material textures. Give the components realistic metal, glass, and plastic finishes.
Animate an exploded view: smoothly separate the components to reveal the internal construction, pause, then reassemble the camera. Keep the movement organized and readable against a neutral studio background.
Deliver the rendered animation and an editable 3D project with clearly named objects.
```

### Exploded Engine Showcase

- Source: https://higgsfield.ai/plugins/after-effects
- Model: ChatGPT/Claude agent + Higgsfield plugin via MCP bridge (3D editor, motion editor, video editor)
- Settings: "Recreate in ChatGPT" card
- Use-case: product ad

```text
Build a detailed, interactive 3D recreation of a classic sports-car engine assembly based on the attached reference. Create a fully exploded view with the engine block, cylinder heads, pistons, crankshaft, camshafts, intake and exhaust components, belts, hoses, fasteners, brackets, and surrounding mechanical parts separated along their assembly axes.
Use realistic brushed aluminum, polished steel, cast iron, brass, rubber, painted metal, and subtle oil-worn surfaces. Keep the original automotive proportions and make every part individually selectable, movable, and editable. Arrange the exploded components in a clean cinematic composition against a dark blue-black studio background.
Set up a cinematic camera with a slow three-quarter orbit around the assembly. Use soft rim lights, controlled reflections, subtle volumetric haze, and warm highlights on metallic edges. Render the scene with a path-tracing renderer.
Inspect the render and fix any visible modeling, material, scale, spacing, or lighting issues. Keep all objects, animations, cameras, and materials editable.
Use [@Higgsfield](plugin://app-6a3293e129088191abf0875820e839da@openai-curated-remote) through MCP to generate a short cinematic video from the finished render. Start with the complete exploded view, slowly orbit around the parts, then gently move toward the engine core while keeping the assembly layout, materials, and lighting consistent throughout the shot. Deliver the editable 3D project, the final render, and the generated video.

Reference video: https://static.higgsfield.ai/gpt-astra/use-cases/exploded-engine-showcase-20260907/exploded-engine-showcase.mp4
```

### Bridge example

- Source: https://higgsfield.ai/plugins/after-effects
- Model: Agent + Higgsfield Bridge
- Settings: bridge example request
- Use-case: anime/animation

```text
Build a logo reveal with a bounce ease and a light streak in After Effects
```
