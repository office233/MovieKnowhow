# NANO BANANA PRO: Expert Use Cases with Prompts

Source: https://higgsfield.ai/blog/Nano-Banana-Pro-Expert-Use-Cases  
Rus Syzdykov (Head of Prompt Engineering), Nov 21, 2025  
Prompts extracted: 12

Expert prompt bank for **Nano Banana Pro** (reasoning-first image model). Core lesson: **it rewards planning — give it a blueprint, constraints and structure, not flowery keywords.**
Techniques by category:
1. **Long structured prompts = "logical layout anchors"**: canvas regions (header, footer, sections) are treated as real semantic zones — posters, covers, dashboards, infographics, brand books, UI.
2. **JSON prompts with multiple input images**: e.g. 10 uploaded people -> 3D fighting-game character-select screen; rules array ("do not modify identity", "unique action pose"), visual_style, lighting, UI blocks. Model parses structured data into image components.
3. **Scene composition from a simple prompt** (film-crew backstage) — then a more specific version assigning roles with name tags.
4. **Math + logic constraints**: exact counts per row + semantic filter (20 people, 7/6/7 rows, each holding an object starting with 'S').
5. **Symbolic reasoning**: solves an integral on a whiteboard with correct intermediate steps.
6. **Technical infographics** (F-117 breakdown with callouts) and **extreme infographic poster** (multi-section, multiple font families, color palette).
7. **Character pipeline**: person from Image 1 -> 3D FPS game character on post-match MVP screen with stats HUD.
8. **Spatial logic**: architectural floor plan with exact room dimensions and adjacencies (13 m × 11 m).
9. **Enumeration stress test**: 50 named historical artifacts placed in a time-traveler's study.
10. **Material gradients**: seven steak cuts from Blue Rare to Well Done.
Film/ad relevance: layout anchoring for posters/key art and title cards; multi-image JSON for ensemble character sheets; exact counts/labels for product infographics; behind-the-scenes frames for previs/moodboards.
Note: the backstage example names real celebrities as crew roles — avoid real-person likeness in commercial work.

## Prompts (verbatim)

### P1. Full brand identity system for "Higgsfield AI" (layout anchors)
- Use-case: Product ad | Model: Nano Banana Pro | Settings: long structured layout prompt

```text
Create a full, multi-dimensional brand identity system for “Higgsfield AI,” an advanced AI platform for image, video, animation, and generative creativity. Base all visuals around the looping black S-curve logo on neon green (smooth, continuous thick curve). The identity must feel futuristic, high-tech, kinetic, expressive, human-friendly, and motion-driven. LOGO SYSTEM: Use the black looping S-curve as the core symbol of generative flow and AI motion paths. Wordmark: “Higgsfield AI” in bold geometric rounded sans serif, open spacing. Variants: icon + wordmark, stacked, icon-only, white version, neon-outline version. Rules: never warp the curve, maintain high contrast, minimum padding = 50% logo height. COLOR PALETTE: Core colors: Neon Higgs Green #D7FF28; Absolute Black #000000; Pure White #FFFFFF. Supporting: Aqua Quantum #49FFE9; Dark Graphite #1F1F1F; Signal Grey #444444; Electric Violet #A04CFF. Meaning: Neon=creativity, Black=precision, Aqua=AI signal, Violet=experimental mode. TYPOGRAPHY: Headlines in rounded geometric sans (TG Grotesk / Satoshi / Inter Rounded); body text in modern grotesk; UI text in technical mono for prompts/code. GRAPHIC LANGUAGE: All visuals derived from S-curve geometry: wave lines, curved dividers, latent-space fields, neon arcs, circular glyphs, repeating wave patterns, neon gradients, ribbon motion paths, particle flows. BRAND PERSONALITY: Creative, kinetic, intelligent, expressive, human-centered, playfully futuristic. Voice: confident, imaginative, direct. Sample lines: “Create in motion,” “Generative thinking visualized,” “AI that flows with you.” MOTION DESIGN: Logo animates as a fluid ribbon; particle formation; elastic curves. UI motion uses curved reveals, neon pulses, smooth transitions, camera-path sweeps. Add generative energy layers: particle trails, wave distortions, neon field glows. APPLICATIONS: Website hero with neon green background and faint flowing S-curve; app icon with curve centered on neon field; product screens with clean UI, neon micro-highlights, mono font prompts, curved separators. Social templates: high contrast, oversized curve textures. Merch: hoodies, stickers, laptop skins, water bottles using the loop motif. Posters: cinematic neon fields and curved-path shapes. MATERIALS & LIGHTING: Matte neon surfaces, subtle grain, polished black acrylic, soft neon edges, transparent stacked layers. Lighting with radial neon glow, soft volumetric gradients, highlights following curvature. BRAND MYTHOLOGY: The S-curve symbolizes the Higgs Field - an abstract creative fabric where ideas form and transform. Represents movement, energy pathways, expressive AI, and continuous generative flow.
```

### P2. 3D fighting-game character select screen (JSON)
- Use-case: Character / consistency | Model: Nano Banana Pro | Settings: JSON prompt + 10 uploaded images

```text
{"title": "3D Fighting Game Character Select Screen","description": "Generate a dark, gritty, high-intensity 3D character selection screen inspired by brutal, arena-style modern fighting games (without naming any titles).","characters": {"source": "uploaded images","count": 10,"rules": ["Make up a name for each characer","Do not describe their physical appearance","Do not modify their identity","Transform each into a realistic 3D fighter model","Each fighter must have a unique, powerful, combat-ready action pose"]},"visual_style": {"render_type": "hyper-realistic AAA 3D graphics with a gritty cinematic finish","lighting": ["harsh directional spotlights from above","fiery warm-orange side lights","cold shadowy blue backlights","thick atmospheric fog with volumetric beams","embers, dust, and floating particles"],"environment": {"arena": "dark stone-and-metal arena platform with cracks, glowing fissures, and heavy atmosphere","floor": "rugged metallic floor with worn textures and faint reflections","background": "massive ceremonial statues, arcane symbols, chains, smoke plumes","platforms": "each character stands on their own circular engraved platform with glowing runes or energy lines"},"color_palette": ["molten orange","blood-red accents (non-graphic)","cold steel blue","charcoal black","embers and fiery yellows"],"camera": {"angle": "low-angle heroic shot","perspective": "wide cinematic lens emphasizing power and scale","effects": ["subtle vignette","depth of field tuned for dramatic silhouettes","filmic contrast"]}},"ui_elements": {"title_text": "CHARACTER SELECT","character_name_plates": "Rugged metallic plaques or glowing stone-like labels under each character, empty for later name entry.","interface_style": "ancient-meets-modern combat UI with glowing edges, heavy metal textures, runic motifs and high-contrast menu frames"},"layout": {"arrangement": "10 characters displayed in a curved arc formation, each on their own platform","spacing": "wide spacing for clear silhouettes and dramatic pose readability","hierarchy": "central fighters slightly more forward, balanced left and right"},"tone_and_vibe": {"keywords": ["dark fantasy combat","ancient mystical energy","brutal atmosphere (non-graphic)","competitive intensity","epic warrior presence","arena showdown energy"]}}
```

### P3. Film crew backstage — simple version
- Use-case: Cinematic film scene | Model: Nano Banana Pro | Settings: simple prompt

```text
Behind-the-scenes wide shot showing a film crew setting up a cinematic portrait scene.
```

### P4. Film crew backstage — role-tagged version
- Use-case: Cinematic film scene | Model: Nano Banana Pro | Settings: role-tagged crew

```text
On a film set, a small crew is working together: a boom operator holding a boom mic (BOOM: Quentin Tarantino) , a camera operator with a shoulder rig (CAMERA: Brad Pitt) , a focus puller adjusting focus on a follow-focus wheel (FOCUS/ 1AC : Sydney Sweeney) , a DIT watching the image on a small monitor (MONITOR: Christopher Nolan) , and a gaffer adjusting a light stand (LIGHT: Stanley Kubrick) . Natural lighting, realistic cinematic look, shallow depth of field, behind-the-scenes atmosphere.
```

### P5. 20 people in 3 rows holding 'S' objects
- Use-case: Other | Model: Nano Banana Pro | Settings: counting + semantic constraint

```text
An image of an office where 20 different people are neatly arranged (7 in the front row, 6 in the middle row, 7 in the back row), each holding a unique object whose name starts with the letter 'S'.
```

### P6. Calculus solution on whiteboard
- Use-case: Other | Model: Nano Banana Pro | Settings: whiteboard, high resolution

```text
Solution for ∫4xcos(2−3x)dx with clear, correct intermediate steps on a whiteboard, in high resolution.
```

### P7. F-117 Nighthawk infographic breakdown
- Use-case: Product ad | Model: Nano Banana Pro | Settings: technical infographic

```text
High-resolution infographic breakdown illustration of a F-117 Nighthawk . Crisp, detailed technical diagram style similar to Formula 1 car schematics. White handwritten-style arrows and labels pointing to all key components. Clean engineering aesthetic, a bit like automotive blueprint annotations. Full object visible in dynamic perspective, sharp lighting, high clarity. Background clean and slightly blurred for emphasis on the subject. Add multiple callouts around the object with lines and text, e.g.: ‘Component Name’, ‘Function / Purpose’, ‘Material Type’, ‘Dimensions’, ‘Power / Capacity / Performance Stats’. Use consistent white annotation lines, diagram boxes, arrows, and outlines. Infographic title at the top in a clean modern font: ‘[F-117_Nighthawk] - Technical Breakdown. ’
```

### P8. "Complete Guide to Human Productivity Systems" poster
- Use-case: Other | Model: Nano Banana Pro | Settings: multi-section poster

```text
Top header: Massive bold condensed title “THE COMPLETE GUIDE TO HUMAN PRODUCTIVITY SYSTEMS - 2025 EDITION” with a light serif subtitle describing it as a breakdown of principles, workflows, behavioral triggers, and optimization cycles. Section 1 - The Core Framework: Include a left-column geometric-sans title “THE 4-PILLAR MODEL” and right-column pillars: Clarity (define priorities, workflows, boundaries), Execution (reduce friction, focus intervals, micro-sprints), Review (end-of-day reflection, adjust plan), Growth (skill development and system adaptation). Add minimalist line icons (target, checklist, clock, graph). Section 2 - Time Management Typography Grid: A dense mixed-font mosaic featuring phrases like “Deep Work (90 minutes)” (ultra bold), “Micro Break (7 minutes)” (thin serif), “Task Clustering” (italic condensed), “Context Switching Cost ↑” (monospace), “Weekly Reset Ritual” (handwritten), “Energy Curve Mapping” (wide rounded), “Cognitive Load ↓ When Tasks Grouped” (serif small caps), “Attention Budget = Finite Resource” (tall narrow), “Protect Your Peak Hours” (heavy display). Add subtle geometric shapes behind text (circles, hexagons, arrows). Section 3 – The Behavioral Engine: Elegant serif headline “Behavioral Loops That Drive Consistency.” Include four mini-cards each with a different font weight + accent color: (1) Trigger → Action → Reward loop (“Habits form by closing loops intentionally”). (2) Identity-based motivation (“You act like the type of person you believe you are”). (3) Environment shaping (“Design surroundings for automatic productive behavior”). (4) Momentum bias (“Small wins accumulate into higher output”). Section 4 – Workflow Systems Comparison Table: Wide table comparing GTD / PARA / Agile Personal / Time-Blocking / Atomic Habits with rows for Purpose, Strengths, Weaknesses, and Ideal For. Use bold sans headers with small serif descriptive text. Section 5 – The Productivity Stack (Vertical Ladder): Rungs labeled in different font styles: Mindset Layer (handwritten brush), External Systems (geometric sans), Internal Rules (black serif), Execution Layer (bold condensed), Feedback Loop (monospaced). Include arrows and dotted connectors. Section 6 – Color-Coded Mini Panels: • Focus Killers (bright orange): notifications, multitasking, bad sleep, energy dips. • Performance Boosters (electric blue): hydration, daily sorting, 25/5 cycles, two-hour deep blocks. • Motivation Myths (emerald green): “You need motivation to start,” “More hours = more output.” • Brutal Truths (black panel, white text): “Discipline beats inspiration,” “Systems > willpower,” “You can’t optimize chaos.” Section 7 – Large Central Illustration: A semi-3D flat-design human brain with labelled regions in different fonts: Executive Control, Memory Routing, Attention Priority Gate, Reward Center, Habituation Pathways, Emotional Bias Filters. Bottom section: Dense block of small-serif footnotes forming a full-width text wall.
```

### P9. Man from Image 1 as FPS game character on MVP screen
- Use-case: Character / consistency | Model: Nano Banana Pro | Settings: reference Image 1

```text
Generate the man from Image 1 as a 3D video game character with a weapon inspired by modern FPS games, on a screen after the match with an MVP badge over him. Stats: Accuracy, Kills, K/D ratio, Assists, Revives. He is wearing tactical gear standing in a confident pose.
```

### P10. One-floor house plan with exact room dimensions
- Use-case: Other | Model: Nano Banana Pro | Settings: architectural plan

```text
One-Floor House Architectural Plan (with room dimensions & layout) Overall Structure Shape: rectangular,modern design Approximate total area: 13m×11m=143m² Entrance located on the south side,leading into the hallway  Floor Plan Layout (with exact sizes and locations) 1. Entrance Hallway Size:3m×2.5m Location: South side, center connects to living room and corridor 2. Living Room+Kitchen (Open Plan) Size: 7m×5m Location: South-west corner Features: large windows facing west,sliding door to backyard on the north wall Kitchen zone occupies the east part of the room 3. Master Bedroom Size: 4.5m×4m Location: North-west corner Contains a window facing north and west 4. Bedroom2 Size: 4m×3.5m Location: North-east corner Window facing east 5. Bedroom3/Office Size: 3.5m×3.5m Location: Center-east Window facing east 6. Bathroom Size: 3m×2.5m Location:Center-north Between Master Bedroom and Bedroom2 7. Guest Bathroom/WC Size: 2m×1.8m Location: South-east corner Accessible from hallway 8. Laundry&Utility Room Size: 3m×2m Location: Center-south,next to hallway Small door to the backyard on the east 9. Storage/Closet Room Size: 2m×1.5m Location: Between Bedroom3 and the hall corridor Adjacent to guest bathroom.
```

### P11. Time-traveler's study with 50 historical artifacts
- Use-case: Cinematic film scene | Model: Nano Banana Pro | Settings: ultra-realistic set dressing

```text
Create an ultra-realistic, richly textured image of an eccentric time-traveler’s private study, filled with 50 real historical artifacts, displayed in perfect clarity. The room is dimly lit with warm tungsten lamps, soft shadows, dust floating in the air, wooden furniture, brass mechanisms, and worn leather textures. A large panoramic desk occupies the center, surrounded by shelves, crates, cabinets, glass domes, and wall mounts. Every item below must be clearly visible, physically placed, never floating, arranged naturally on shelves, the desk, the floor, or inside cases.
ANCIENT WORLD (1–12)
1. Rosetta Stone replica – with readable hieroglyphs and Greek text
2. Roman gladius sword – iron blade, bronze hilt
3. Athenian owl coin (Tetradrachm) – silver, worn edges
4. Egyptian Ankh amulet – carved stone
5. Terracotta Warrior miniature – Qin Dynasty replica
6. Babylonian cuneiform tablet
7. Greek Corinthian helmet – aged bronze patina
8. Scroll of the Epic of Gilgamesh – rolled parchment
9. Persian Darius I gold daric coin
10. Ancient Indus Valley seal – steatite block
11. Mayan obsidian blade
12. Celtic torc necklace – twisted gold
MEDIEVAL & RENAISSANCE (13–24)
13. Viking drinking horn – carved rim
14. Runestone fragment – Scandinavian rune carvings
15. Medieval illuminated manuscript page – gold leaf accents
16. Knights Templar cross pendant
17. Samurai katana (Muromachi period style)
18. Mongol recurve bow – wooden
19. Gothic church stained glass fragment
20. Leonardo da Vinci sketch sheet (from Vitruvian Man)
21. Renaissance astrolabe – brass with engraved numerals
22. Ottoman ceramic İznik tile – blue floral pattern
23. Medieval hourglass – sand half-fallen
24. Ancient Norse longship wooden model
AGE OF DISCOVERY / EARLY MODERN (25–34)
25. Isaac Newton’s “Principia Mathematica” – open page, readable Latin
26. Galileo-style brass telescope
27. Columbus-era navigation compass
28. Old world map by Gerardus Mercator
29. 18th-century quill & ink bottle
30. French Revolution tricorne hat
31. Benjamin Franklin’s lightning rod prototype (miniature)
32. Old pocket watch (1810s)
33. Napoleonic officer epaulettes
34. Worn violin (Stradivarius-style) displayed under glass
19TH–20TH CENTURY (35–46)
35. Steam engine miniature (Watt design)
36. Telegraph key – brass, functional design
37. Thomas Edison-style light bulb – glowing filament
38. Vintage Kodak Brownie camera
39. WWI military medal
40. Old globe (1910) – faded continents
41. NASA Apollo mission patch (Apollo 11)
42. USSR “Sputnik 1” model
43. First edition “Sherlock Holmes” book – readable spine
44. Victorian brass monocle
45. 1920s Art Deco cigarette case (empty)
46. Early IBM punch card stack
MODERN ODDITIES & CULTURAL ICONS (47–50)
47. Sony Walkman TPS-L2 – blue, iconic design
48. Game Boy (1989) – grey, with Tetris title visible
49. Film reel canister labeled “Citizen Kane (1941)”
50. Signed vinyl record of “The Beatles – Abbey Road”
ENVIRONMENT: THE TIME-TRAVELER’S ROOM
The room itself is a character:
• A massive oak desk with scratches, ink stains, engraved initials
• Brass desk lamp with warm light illuminating artifacts
• Dark wooden bookshelves stacked with atlases and notebooks
• Polished concrete floor with scattered papers
• A vintage leather chair, cracked and worn
• Glass domes protecting fragile relics
• Blueprints, diagrams, star charts pinned to walls
• A chalkboard with equations, timelines, wormhole sketches
• A mechanical clockwork contraption, partly disassembled
• Steam pipes and pressure gauges along one wall
• A small window showing stormy weather outside
Everything must look tactile: wood grain, metal oxidation, parchment fibers, scratches, dust motes in the light.
```

### P12. Seven steak cuts doneness gradient
- Use-case: Product ad | Model: Nano Banana Pro | Settings: food photography

```text
A high-resolution food photograph shows seven cuts of steak, sliced and arranged in a row on a wooden board, displaying the full gradient of doneness from Blue Rare to Well Done, set in a modern kitchen.
```

