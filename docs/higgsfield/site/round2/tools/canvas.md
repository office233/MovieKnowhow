# Higgsfield Canvas (node-based workflow board)

Sources:
- https://higgsfield.ai/canvas-intro
- https://higgsfield.ai/canvas

/canvas is the logged-out app shell (tabs All Canvases / Templates / Quick Start); /canvas-intro is the landing page. Community skill notes on Canvas exist in [../../../opensource/higgsfield-ai-prompt-skill/skills/higgsfield-canvas/SKILL.md](../../../opensource/higgsfield-ai-prompt-skill/skills/higgsfield-canvas/SKILL.md).

## What it is
- An infinite board of **nodes**: a text/prompt node feeds an image node, which feeds a video node; styles branch into variations. The whole campaign or scene becomes one pipeline instead of a folder of separate generations.
- Every Higgsfield model runs inside the graph (Soul 2.0, Seedance 2.0, Kling 3.0, Wan 2.7, Veo 3.1, Nano Banana Pro, GPT Image 2.0) and outputs can be routed between models (e.g. character in Soul -> animate in Kling -> upscale node).
- **Live collaboration** like Figma: share a link, several people add nodes and generate at once; versions auto-save; comments attach to nodes.
- **Templates**: save any canvas and reuse it (ad variants, character sheets, storyboards) - duplicate, swap inputs, rerun.
- **Credits**: building the graph and editing prompts is free; you pay only when a node generates, at the same rate as the model elsewhere. (Supercomputer, MCP, CLI and Canvas always spend credits - Unlimited plans do not apply there, per the Supercomputer notes.)
- Soul ID characters, uploaded products, brand references and past generations can be dropped in as nodes.

## Workflow recipes shown on the page (node chains)
| Recipe | Nodes |
|---|---|
| VFX - scene & environment control | your footage -> Replace Background |
| Photography - product & style fusion | Product image + Reference image -> Video Generation |
| Campaigns - model meets product | face node + product node -> campaign video in one node |
| Architecture - day to night | Start frame + End frame -> Video Timelapse |
| Style - from set to anywhere | two frames -> one seamless video |
| Animation - logo comes alive | Logo + Style Reference -> Video Animation |
| Branding - full brand system | Logo + Color Palette + prompt -> animated icon set |
| Ideas - sketch to material | Sketch -> Leather / Glass variants |

The page's demo chat line: "Let's create an engaging video for our brand, @Mito please upload product image" (collaborators Gloria and Mito tagged in the canvas chat).

## Prompts

2 new verbatim prompt(s) below.

### Hero text-node prompt (Y2K gamer girl + handheld console)

- Source: https://higgsfield.ai/canvas-intro
- Model: Canvas text node -> Image generation node
- Settings: 16:9, single still, photoreal editorial product campaign; camera spec inside prompt (Sony A7R IV, 50mm, f/2.0, ISO 200)
- Use-case: product ad

```text
A young woman in her early twenties — warm light-brown skin, short curly dark brown hair escaping in loose ringlets from a chunky hot-pink crocheted beanie scattered with embroidered chartreuse stars, long pale-pink crochet ties hanging past her collarbones, strong full brows, thick mascara-heavy lashes, blown-out pink-blush eyeshadow toward the temples, glossy nude-mauve parted lips, freckles and small beauty marks across the cheeks, dewy skin — perches on the edge of a low pink-duvet bed in the right third of the frame, three-quartered to camera. Slim rimless rectangular sunglasses with a pink-to-violet gradient sit slid halfway down her nose, a chunky polished silver Cuban-link choker tight at her throat with small silver hoops in her ears, a fitted black ribbed-wool cropped long-sleeve sweater above a flat midriff, dark indigo low-rise wide-leg distressed denim cinched with a studded black leather belt, chunky black lace-up platform combat boots, multiple bulky silver rings and long glossy almond-white nails — Y2K mall-goth softened into soft-girl, casually in on the joke. Cradled in both hands at chest height is a compact clamshell handheld console open at one-ten degrees: pearlescent baby-pink iridescent shell with a violet wash on the underside, a recessed 4:3 LCD glowing bright with a 16-bit platformer — blue sky and puffy clouds, green pixel mountains, a pink-haired chibi character beside a pink mushroom, three rotating gold coins, brick and "?" blocks, three pink hearts at top-left, yellow star "x12" and ice-blue gem "x03" at top-right — beneath it a silver power button, a soft-grey D-pad, a mint-pastel A and magenta B button at a slight diagonal, a central speaker grid, two pearl-grey START and SELECT pills, and a long beaded wrist strap of lavender and white pearls, frosted star beads, ice-blue gem beads and pink-lavender flower beads swaying loose from the right hinge. Her left thumb rests on the D-pad, her right thumb hovers just above the magenta B; her head is tipped slightly down toward the screen but her eyes lift directly into the lens over the top edge of the sunglasses, pupils locked, brows just raised, a soft confident half-smile parting her lips with the tip of her tongue just visible. Behind her, a floor-to-ceiling corner window dissolves into cool-blue and white bokeh of a sunlit panoramic high-rise skyline under pale clear sky; a long built-in white desk crowded with skincare and a pink-keyed mechanical keyboard fades softly on the far left; a magenta heart-shaped "Sweet Dreamy" pillow and a black-and-white checkered cushion rest beside her hip; a cream shag rug printed with a graphic black game controller stretches beneath her boots — bright airy penthouse bedroom, warm beige walls, herringbone wood floor flooded with daylight. Strong soft directional sun pours from the camera-right window as key, cool ambient bounce from the camera-left window fills the shadow side, the LCD throws a small cool kicker up onto her chin and the silver choker; the iridescent pink shell catches cool blue on one side and warm cream on the other. Sony A7R IV, 50mm prime, f/2.0, ISO 200, shallow depth of field, subtle film grain, faint halation on the brightest highlights, no oversharpening. Tone: i-D meets Vogue Japan meets Crunchyroll-collab campaign — playful, glossy, kawaii-cool, slightly tongue-in-cheek. Photoreal, single still frame, editorial product campaign photograph. 16:9. NON-IP. No motion, no dialogue.
```

### Branding recipe prompt (icon set)

- Source: https://higgsfield.ai/canvas-intro
- Model: Canvas prompt node (+ Color Palette node)
- Settings: branding recipe: Logo + Color Palette -> icon set
- Use-case: product ad
- Note: the prompt is cut off on the site itself after "like"

```text
A grid of 16 minimalist 3D app icons arranged in a perfect 4x4 layout on a clean dark background #0A0A0F. All icons share the exact same visual style — they are part of a unified icon set / design system. ICON STYLE: Each icon is a translucent glassy 3D object with soft glowing neon outlines, rendered in glassmorphism / liquid glass aesthetic. The icons have smooth rounded forms with semi-transparent glass material, internal soft glow, and bright luminous edge lighting. Each icon appears to softly emit cool light from within, like
```
