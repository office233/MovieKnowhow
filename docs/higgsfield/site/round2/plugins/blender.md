# Higgsfield add-on for Blender

Source: https://higgsfield.ai/plugins/blender

## Notes

- Blender **5.1+**. Install: drag the signed `.zip` (keep it zipped) onto any Blender window, or Edit -> Preferences -> Add-ons -> Install. No GPU needed (cloud inference); internet + sign-in required; generated data stays in the .blend.
- UI: a **floating prompt bar over the 3D viewport** with seven tabs - **Scene Builder, 3D Model, Character animation, Image, Video, Camera, Asset**. Pick tab + model, set resolution/fps; **the credit cost is printed on the Generate button** (multiplied by the variants counter).
- Models named: Nano Banana 2, GPT Image, Seedream 5.0 Pro, Z Image (images); **Seedance 2.5** (video); **Meshy 5** (3D); plus upscalers.
- Scene Builder returns **real editable scene data** (objects, layout, lights) - block out a set, edit it, then feed it to the Video tab for the final shot. 3D Model: prompt or photo -> mesh at the 3D cursor, clean topology, materials. Character animation: fitted, weighted rig + keyframes as standard Blender bones/actions. Images land as a plane or wire into a material; results library filtered by 3D / Images / Video.
- **Higgsfield Bridge** (`https://bridge.higgsfield.ai/mcp`) connects an agent (e.g. Claude) to the add-on so it can build inside your open scene: "Build me a calibration bay blockout in Blender".
- Related skills: [../../mcp/scene-builder.md](../../mcp/scene-builder.md), [../../mcp/destruction-studio.md](../../mcp/destruction-studio.md), [../../mcp/exploded-view.md](../../mcp/exploded-view.md), [../../mcp/cartoon-shaders.md](../../mcp/cartoon-shaders.md). Blog note: [../../blog/higgsfield-blender-plugin.md](../../blog/higgsfield-blender-plugin.md).

## Prompts

1 new verbatim prompt(s) below; 1 more are already captured elsewhere in this knowledge base and are linked, not repeated.

### Viewport image composer demo

- Source: https://higgsfield.ai/plugins/blender
- Model: Image tab (model selectable)
- Settings: image composer demo inside the viewport
- Use-case: cinematic film scene

```text
Night rooftop with neon signs and rain
```

### Already captured elsewhere (linked, not repeated)

- Bridge example: "Build me a calibration bay blockout in Blender..." -> [site/blog/higgsfield-blender-plugin.md](../../blog/higgsfield-blender-plugin.md)
