# How To Make a Game Trailer with AI (Full Workflow + Prompts)

- Source: https://higgsfield.ai/blog/make-game-trailer-with-ai
- Byline: Higgsfield · Aug 10, 2026 · 13 min · Last updated: 3w ago
- Prompts extracted: 12

## Notes

**Topic:** a 1-minute cinematic game trailer ("LETA", a fictional near-future memory-editing detective game) with full prompts (Aug 10 2026).

**Numbers:** 3 designed characters -> 8 reference files (age variants + a parents card), 7 locations; 4 acts in **two 30 s generations**; total ~391.9 credits (~$20): 15 stills < 2 credits, each 30 s Seedance 2.5 720p pass = 195 credits.

**Pre-production:** concept + full shot-by-shot script (scenes, dialogue, sound cues, cuts) before generating; a text description of each character detailed enough for a stranger to picture them; one locked reference sheet per character (3 panels on plain grey: full-body front, etc.). **Rule: identity changes (e.g., age) get their own reference; outfit changes are just written into the scene prompt** — Leta wears a different outfit per scene with no extra assets. Small one-off settings (bedroom, dining table, doorway) are described in-prompt instead of generated.
**Trailer arc:** hook (unresolved), rise (world/characters, light tone), turn (tension/stakes), climax (ends unresolved) + title card.
**Locations:** photoreal 8K stills, mostly 3/4 angle, with an explicit LAYOUT for recurring sets (e.g., clinic console left, chair centre...) so wides and inserts agree.

**Reference mechanics:** prompts read references **by upload position** (`@image_1`, `@image_2`...) — upload order is part of the prompt, and each half uses its own order (Part 1: Kai, Leta mid-20s, Leta 29, Damen, Leta age 6, Damen 16; Part 2: Kai, Leta 29, Damen, Leta 16, Damen 16, parents). Keep order identical on retries and repeat key physical details in text as a backup. Locations were **not attached** — they were written out in words using the location images as the target.
**Seedance rule: no negative prompts** — "she doesn't smile" tends to produce a smile; describe the desired state instead.
**Look choice:** prompts ask for a "HIGH-END REAL-TIME GAME CINEMATIC" look (subsurface skin sheen, strand-clumped hair, computed bokeh, even grain) so it reads as a game, not a film; references stay photographic (they carry identity/layout only).
**Finishing:** review both passes; regenerate missed beats at prompt level (a retry costs the same 195 cr); join on the hard cut; match the clinic grade across the seam; confirm dialogue lines and SFX survived; title card is inside pass 2. Reuse the same locked assets in Marketing Studio for ad variants.

## Prompts (verbatim)

### P1. Who are the characters in LETA?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: character/consistency
- Context: What it does: generates Kai's reference sheet, the version of his face used in every clinic and memory shot.

~~~~text
Character sheet of one man, three panels side by side, plain grey studio backdrop, thin dark dividers. Left: full-body front, head to toe, standing straight. Center: full-body back, same pose. Right: close-up of face and shoulders, calm unreadable expression. Kai Weil, 30: fair skin with a cool under-slept pallor, dark brown almost black hair cut short and neatly, dark brown eyes, lean and narrow through the shoulders with visible tendon at the wrists and neck. His face carries almost no mimic lines, no crow's feet, no forehead lines, no nasolabial folds, a fully neutral trained mask, strangely smooth for his age. A thin pale horizontal scar, 15mm, at the left temple just inside the hairline. Outfit: a clean white clinical coat worn open over a dark charcoal-grey crew-neck base layer and slim dark charcoal trousers, no logos, a thin matte dark grey interface cuff on the right wrist. Lighting: neutral soft even wraparound, near-shadowless, 5600K, no color cast, readable skin texture, eye catchlights. LOCKS: one identical man in all three views, same identity, outfit, hair, proportions; the temple scar visible in the close-up panel; identical backdrop and light.
~~~~

### P2. Who are the characters in LETA?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: character/consistency
- Context: What it does: generates Damen's adult reference sheet, used in every present-day beat, with his suit and frown lines locked so they never drift between cuts.

~~~~text
Character sheet of one man, three panels side by side, plain grey studio backdrop, thin dark dividers. Left: full-body front, head to toe, standing straight. Center: full-body back, same pose. Right: close-up of face and shoulders, cold controlled expression. Damen Voss, 32: tall and solidly built through the chest with the beginnings of softness at the waist, ash-blond hair with clear grey at both temples combed back with visible product, fair skin with a faint flush and broken capillaries across the nose and cheeks, pale grey-blue cold eyes beneath a heavy brow. His face is carved by frowning, two deep permanent horizontal lines across the forehead and a third shorter one between the brows, present even at rest, plus pronounced nasolabial folds. Outfit: an expensive black wool suit, jacket open and unbuttoned, over a white dress shirt with the top two buttons undone and no tie, a heavy steel watch and a plain gold wedding band. Lighting: neutral soft even wraparound, near-shadowless, 5600K, no color cast, readable skin texture. LOCKS: one identical man in all three views, same identity, outfit, hair, proportions; identical backdrop and light.
~~~~

### P3. Who are the characters in LETA?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: character/consistency
- Context: What it does: generates Leta's base reference sheet in her everyday clothes, used in every memory scene outside the clinic.

~~~~text
Character sheet of one woman, three panels side by side, plain grey studio backdrop, thin dark dividers. Left: full-body front, head to toe, standing straight. Center: full-body back, same pose. Right: close-up of face and shoulders, soft melancholic expression. Leta Moren, 29: medium build, light chestnut hair falling loose past the shoulders in a soft wave with loose face-framing strands, golden-amber eyes with visible gold flecks, faint freckling across the nose bridge, a small dark mole below the outer corner of the left eye, soft natural makeup, small gold stud earrings, a slim gold band on her finger. Outfit: plain neutral everyday clothing, no logos, no pattern. Lighting: neutral soft even wraparound, near-shadowless, 5600K, no color cast, readable skin texture, eye catchlights. LOCKS: one identical woman in all three views, same identity, hair, proportions, freckling and mole in the same positions; identical backdrop and light.
~~~~

### P4. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The clinic (@clinic), laid out the same way in every shot so nothing drifts between the wide plan and the close inserts.

~~~~text
Photoreal, 8K, cinematic, bright cold clinical light, almost dental-office in feel. LAYOUT: left side of the room holds the extraction machine console. Center, against the back wall, a reclined chair for the patient. Right side, against the wall, a small waiting area with potted plants and two armchairs. Wide shot, all three zones visible in frame, hard white-blue light, polished pale floor. Empty of people. No text, no real-world brands.
~~~~

### P5. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The playground (@playground), generates for the earliest memories.

~~~~text
Photoreal, 8K, cinematic. A quiet neighborhood playground in late afternoon, shot from a 3/4 angle. A wooden sandbox, an empty swing set, warm low golden light, soft nostalgic film grain. Empty of people. No text, no real-world brands.
~~~~

### P6. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The beach (@beach), generates for the memory where Leta and her friends run toward the water at sunset.

~~~~text
Photoreal, 8K, cinematic. A wide beach at sunset, shot from the sand looking out, the waterline entering the frame from the middle of the left side rather than the right. The water reflects the low sun and reads gold rather than blue. Warm golden haze, no other landmarks. Empty of people. No text, no real-world brands.
~~~~

### P7. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The bar (@bar), generates for the warm night out with friends during Leta's younger years.

~~~~text
Photoreal, 8K, cinematic. A small dim bar interior at night, shot from a 3/4 angle. Warm amber light, a worn wooden counter, soft out-of-focus string lights in the background. Empty of people. No text, no real-world brands.
~~~~

### P8. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The school (@school), generates for the classroom where Leta and Damen first meet, used in both halves of the trailer.

~~~~text
Photoreal, 8K, cinematic. A high school classroom, shot toward the back row of single desks, bookshelves lining the left wall, tall windows on the far wall throwing strong rim backlight with visible volumetric light shafts. Warm classroom daylight, backlit haze, gentle bloom along the window edge. Empty of people. No text, no real-world brands.
~~~~

### P9. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The parents' office (@parents-office), generates for scenes where Leta breaks down.

~~~~text
Photoreal, 8K, cinematic. A parents' formal home study, shot from a 3/4 angle, dark wood furniture, heavy curtains, cold thin daylight, harder contrast with deep shadow gathering in the corners of the room, an oppressive stillness. Empty of people. No text, no real-world brands.
~~~~

### P10. What locations does the LETA trailer need?

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: The backyard (@backyard), the memory the whole trailer is built around.

~~~~text
Photoreal, 8K, cinematic. A family backyard at dusk, shot from a 3/4 angle, tall trees along the fence line with clear gaps between the trunks that a view can pass through, a shovel resting beside a mound of freshly turned earth near the treeline. Fading dusk light shifting from low warm to blue, soft volumetric haze between the trunks. Empty of people. No text, no real-world brands.
~~~~

### P11. Part 1: the setup (0:00 to 0:30)

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: What it does: generates the entire first half in one pass, the teaser flashes, the clinic reveal, the interface prompt, Kai's glance, the warm montage and the exchange with Damen. Because references attach by upload order, load them in exactly this sequence: 1 Kai, 2 Leta in her mid-twenties, 3 Leta at 29, 4 Damen, 5 Leta at six, 6 Damen at …

~~~~text
SCENE CONTEXT
 Opening half of a psychological sci-fi trailer, rendered as a HIGH-END REAL-TIME GAME CINEMATIC. A memory-extraction operator is about to delete a woman's memories while her husband waits and watches. Fragments of violence flash, the clinic is revealed, the "delete memory" choice appears, and a montage of warm years plays, raising the question of why anyone would erase this. Ends on quiet tension between the operator and the husband.

RENDERING STYLE — MANDATORY, APPLIES TO EVERY BEAT: this must read as a top-tier real-time rendered game cinematic in the register of a modern narrative console title — near-photoreal fidelity but unmistakably a rendered engine image rather than photographed footage. Every tell below must be present in every shot.

SKIN: full micro-detail — pores, fine lines, moles and stubble all rendered — but with the characteristic engine subsurface look: smooth even translucency beneath the surface and a LIGHT UNIFORM SPECULAR SHEEN across the forehead, the bridge of the nose, the cheekbones and the chin, as though very faintly damp. Slightly waxy, slightly too clean, with no oil variation and no blotchiness. Detail evenly distributed across the whole face with no falloff.

EYES: glassy and high-specular, with a clean bright sclera, a crisp perfectly circular catchlight in each eye, a strong wet highlight on the cornea and a sharply defined limbal ring. Slightly too perfect, slightly synthetic. Individually rendered eyelashes.

HAIR: rendered in defined strand clumps and card-like groupings rather than fully individual chaotic strands, with a uniform anisotropic sheen running along the length and clean silhouette edges.

MATERIALS: physically based shading throughout, every surface with correct roughness and reflectance, visible screen-space reflections on glass, metal, polished floors and screens, and soft ambient occlusion darkening every crease, seam and contact point. All fabric reads as simulated cloth — clean folds, slightly stiff drape, uniform wrinkle logic.

IMAGE AND POST: everything critically sharp across the full frame with no lens softness, no field curvature and no corner falloff. Detail and contrast do NOT diminish with distance — backgrounds are as cleanly resolved as foregrounds. Where depth of field is used it is computed and clean with perfectly circular uniform bokeh. Motion blur is present and correct but clean and per-object rather than optical smear. Gentle uniform bloom on the brightest highlights. Subtle chromatic aberration applied evenly as a post effect. A fine even film grain overlay laid uniformly across the whole image. Slightly elevated contrast and clean highlight rolloff. All camera movement is smooth interpolated virtual-camera motion with no handheld shake and no operator instability.

FORBIDDEN: no illustration, no anime, no cel shading, no stylised or exaggerated proportions, no painterly look, no concept art, no cartoon, no low-poly, no visible polygon edges, no texture seams, no flat shading, no clay render, no grey-boxed or unfinished surfaces, no flat repeated crowd instances. Fidelity must be maximal and the image must look expensive — only the LOOK is rendered rather than photographic.

ASSET REGISTRY (reference handles = upload order; identity is 100% from each reference)
 @image_1 — KAI WEIL, 30. Operator. Fair skin with a cool under-slept pallor, dark brown almost black hair cut short and neatly, dark brown eyes, lean and narrow through the shoulders with visible tendon at the wrists and neck. HIS FACE CARRIES ALMOST NO MIMIC LINES — no crow's feet, no forehead lines, no nasolabial folds, no frown lines — a fully neutral trained mask, strangely smooth for his age. A thin pale horizontal scar, 15mm, at the left temple just inside the hairline. Wears a clean WHITE clinical coat, open, over a dark charcoal-grey crew-neck base layer and slim dark charcoal trousers. A thin matte dark grey interface cuff on the right wrist. Calm, controlled, unreadable. 100% matches the reference.
 @image_2 — LETA MOREN, youthful era. 24 to 25. LIGHT CHESTNUT hair pulled back with loose face-framing strands, GOLDEN-AMBER eyes with visible gold flecks, faint freckling across the nose bridge, glam makeup, gold hoops and a thin gold necklace. Luminous and confident. Same face and same eye colour as @image_3. Used only for the youthful social memories. 100% matches the reference.
 @image_3 — LETA MOREN, present. 29. The same LIGHT CHESTNUT hair, now falling loose past the shoulders in a soft wave, the same GOLDEN-AMBER eyes, the same freckling, soft natural makeup, small gold studs, a slim gold band on her finger. Softer, melancholic. In the clinic she wears a plain pale grey-blue hospital gown, not the clothing from the reference. 100% matches the reference for face and identity.
 @image_4 — DAMEN VOSS, 32. The husband and antagonist. Tall and solidly built through the chest with the beginnings of softness at the waist. ASH-BLOND HAIR WITH CLEAR GREY AT BOTH TEMPLES, combed back. Fair skin with a faint flush and broken capillaries across the nose and cheeks. Pale grey-blue cold eyes beneath a heavy brow. HIS FACE IS CARVED BY FROWNING — two deep permanent horizontal lines across the forehead and a third shorter one between the brows, present even at rest, plus pronounced nasolabial folds. Wears an EXPENSIVE BLACK WOOL SUIT, jacket open and unbuttoned, over a white dress shirt with the top two buttons undone and NO TIE. A heavy steel watch, a plain gold wedding band. Cold and controlled, with nervous slightly mechanical smiles. 100% matches the reference.
 @image_5 — LETA as a young child, about 6. Built from @image_3's features: light chestnut hair just past the shoulders, golden-amber eyes, faint freckling across the nose bridge, a small mole below the outer corner of the left eye in the same position. Playground only.
 @image_6 — DAMEN as a teenager, about 16. Built from @image_4's features but softer and boyish: ash-blond hair, pale grey-blue eyes, no grey and no frown lines yet, in a plain dark school jumper over a pale shirt. School desk only.

GLOBAL LOCKS (hold across every beat)
 Identity is 100% from the referenced images; never redesign a face between cuts. Clinic beats always use the same cold clinical high-key grade so they read as one place. Memory beats use a warm nostalgic grade. Only the two scripted English lines are spoken; all other lips stay still; no narration, no offscreen extra voices. A slow steady heart-monitor beep runs under the clinic beats. NO TEXT anywhere except the one console UI specified below — no logos, no signage, no name badges, no ID cards, no lanyards, no wall labels, no equipment markings.

SHOT SEQUENCE — controlled multi-shot, real-time, hard cuts only unless stated.

0.0s–1.5s — TEASER FRAGMENTS
 Three sub-second flashes, each its own micro-cut: a mouth open mid-scream with no clear words; a plate shattering; a human silhouette in sharp violent motion. Heavily motion-blurred, dark, no clean read, disorienting. Rendered with clean per-object motion blur rather than optical smear.
 Lighting: near-black, harsh partial specular highlights only, deep ambient occlusion.
 Audio: torn shards of noise cutting hard to silence at 1.5s.

1.5s HARD CUT
 1.5s–6.5s — CLINIC WIDE (establishing, three zones)
 First frame already holds all three: @image_1 FG left third (x20%, y60%) angled to his console; @image_3 MG center (x50%, y50%) upright, square to camera, thin electrode pads on both temples, eyes open and completely blank with a clean circular catchlight in each; @image_4 FG right third (x80%, y62%) seated in the waiting chair in his black suit, eyes on @image_3. No empty frame.
 Lens lock: 84° diagonal field of view, wide-angle character, virtual camera at the far wall roughly 4 to 5 meters back so all three zones read across full width; rectilinear, no fisheye, deep even focus with no corner falloff.
 Camera: locked, eye-level, extremely slow imperceptible push-in on smooth interpolated motion.
 Action: near-static; @image_3 one slow blink around 4.0s; @image_1 minimal hands on console; @image_4 still.
 Lighting: bright cold clinical high-key, even blue-white ceiling wash at roughly 5600K, faces fully readable, no warm fill. Screen-space reflections of the ceiling panels and the three figures across the polished floor. Soft ambient occlusion under every chair leg, cable and equipment edge.
 Audio: clinic room tone, steady slow monitor beep.

6.5s HARD CUT
 6.5s–8.0s — INSERT: THE CHOICE
 Tight insert on the extraction console screen. A clean minimal game-style UI on a pale blue-white field reads exactly "Delete this memory?" with "Yes" and "No" below it as two thin rounded-outline buttons; a soft rectangular cursor highlight rests BETWEEN them, touching neither, indicating an undecided state. All three text strings rendered exactly as written, correctly spelled, cleanly kerned and perfectly sharp. Nothing else on the screen — no icons, no window chrome, no numerals, no patient data, no other text.
 Lens lock: 29° detail, camera close on the screen, screen critically sharp, room falling into clean computed bokeh behind.
 Lighting: screen self-lit and emissive, cool, casting a soft blue spill onto the console housing with visible fingerprint smudging on the glass and gentle bloom at the screen edges.
 Audio: one short interface beep, then quiet.

8.0s HARD CUT
 8.0s–9.5s — INSERT: KAI'S GLANCE
 Tight emotional close-up on @image_1's face. Without turning his head, his eyes flick to screen-right toward @image_4, then straight back down to the screen. Face controlled, but the glance carries suspicion.
 Lens lock: 18° classic telephoto, tight, background compressed and cleanly defocused.
 Lighting: cool emissive machine glow from the screen side, the other side falling to soft shadow with ambient occlusion in the eye sockets and under the jaw, both eyes catching a crisp circular highlight.
 Audio: clinic silence, faint beep.

9.5s HARD CUT
 9.5s–19.0s — WARM MEMORY MONTAGE (four quick shots)
 9.5s–11.5s: @image_5 (child Leta) alone in a playground sandbox, small in a warm open frame. Lens 47° natural. Warm golden afternoon light with soft volumetric haze, everything cleanly resolved to the far fence line.
 11.5s HARD CUT, 11.5s–13.5s: @image_6 (teen Damen) at a back-row school desk, turns to camera, smiles, looks away, then smirks and spins a pen in his fingers. Windows behind throw strong rim backlight with visible volumetric shafts. Lens 29° portrait toward camera. Warm classroom light, backlit haze, gentle bloom on the window edge.
 13.5s HARD CUT, 13.5s–16.0s: @image_2 (youthful Leta) laughing among friends in a bar. Lens 47°. Warm amber, the crowd behind her rendered as individually varied figures falling into clean circular bokeh, never flat repeated copies. Bloom on the practical lights.
 16.0s HARD CUT, 16.0s–19.0s: @image_2 on a beach at sunset, water gold; she enters from mid-left walking in, friends run toward the water in the background as dark blown-out silhouettes seen from behind. Lens 84° environmental. Golden backlight, glowing water with screen-space reflections and specular sun glitter, gentle bloom on the horizon.
 Audio across montage: warm overlapping laughter and chatter, cutting hard to full silence exactly on the last beach frame.

19.0s HARD CUT
 19.0s–21.0s — CLINIC CLOSE (Kai softens)
 Close-up on @image_1. The corner of his mouth lifts a fraction; his eyes warm for a beat. Because his face carries no habitual lines, this micro-expression reads as an unfamiliar movement on an unused face.
 Lens lock: 18° tight.
 Lighting: cold clinical, unchanged from earlier clinic beats.
 Audio: the abrupt silence left by the cut laughter, then the slow beep returns.

21.0s HARD CUT
 21.0s–30.0s — CLINIC MEDIUM (the exchange)
 Two-person medium. @image_4 crosses from the right waiting zone in his black suit and his hand lands on @image_1's shoulder from behind, the suit wool creasing with clean simulated cloth folds. @image_4 speaks: "How much longer." @image_1's face hardens instantly; he answers level, without turning far: "Wait in your chair." @image_4 holds the look a beat too long, then turns and walks back to the waiting chair. End on @image_1's hardened profile.
 Lens lock: 47° standard normal, camera 3 to 4 meters, both readable.
 Camera: locked, slight settle on smooth interpolated motion.
 Lighting: cold clinical high-key, both faces readable, no warm fill, ambient occlusion where his hand meets the coat shoulder.
 Audio: @image_4's line begins within 0.3s of this shot; clean close English dialogue over the silent room and the slow beep; lips still except on the two lines.

POSITIVE LOCKS
 Every beat is rendered in the high-end real-time game cinematic style defined above, with no exceptions. All clinic beats share one cold blue-white clinical grade and the same three-zone geometry; memory beats are warm and nostalgic; the teaser is near-black and fragmented. Faces come 100% from the references and never change between cuts. Kai holds screen-left in his white clinical coat, Damen holds screen-right in his black suit, in every clinic beat. Leta's light chestnut hair and golden-amber eyes are identical in @image_2, @image_3 and @image_5. Only the two quoted English lines are spoken; everyone else stays silent with still lips. Every transition is a hard cut except the specified slow push-ins. No gore, no blood, no visible violence beyond the abstract teaser flashes.
~~~~

### P12. Part 2: the reveal (0:30 to 1:00)

- Model / settings: Refs: Soul Cinema (inside Cinema Studio); video: Seedance 2.5 720p, two 30 s passes
- Use-case: cinematic film scene
- Context: What it does: generates the second half in one pass, first love, the fight, the family beats, the accusation, the backyard reveal and the standoff, ending on the title card. The upload order changes here: 1 Kai, 2 Leta at 29, 3 Damen, 4 Leta at sixteen, 5 Damen at sixteen, 6 Leta's parents.

~~~~text
SCENE CONTEXT
 Closing half of the trailer, rendered as a HIGH-END REAL-TIME GAME CINEMATIC. Warm first love cracks into a violent marriage; the operator starts to feel what he is erasing; buried family secrets surface across a cold table, a slammed door, and a scream at the parents. A memory of four people digging at dusk reveals the operator's own younger face reflected in the woman's terrified eyes. In the clinic he recoils and faces the husband as a single tear runs down her blank face, then the image dissolves to the title.

RENDERING STYLE — MANDATORY, APPLIES TO EVERY BEAT: this must read as a top-tier real-time rendered game cinematic in the register of a modern narrative console title — near-photoreal fidelity but unmistakably a rendered engine image rather than photographed footage. Every tell below must be present in every shot.

SKIN: full micro-detail — pores, fine lines, moles and stubble all rendered — but with the characteristic engine subsurface look: smooth even translucency beneath the surface and a LIGHT UNIFORM SPECULAR SHEEN across the forehead, the bridge of the nose, the cheekbones and the chin, as though very faintly damp. Slightly waxy, slightly too clean, with no oil variation and no blotchiness. Detail evenly distributed across the whole face with no falloff.

EYES: glassy and high-specular, with a clean bright sclera, a crisp perfectly circular catchlight in each eye, a strong wet highlight on the cornea and a sharply defined limbal ring. Slightly too perfect, slightly synthetic. Individually rendered eyelashes.

HAIR: rendered in defined strand clumps and card-like groupings rather than fully individual chaotic strands, with a uniform anisotropic sheen running along the length and clean silhouette edges.

MATERIALS: physically based shading throughout, every surface with correct roughness and reflectance, visible screen-space reflections on glass, metal, polished floors, water and screens, and soft ambient occlusion darkening every crease, seam and contact point. All fabric reads as simulated cloth — clean folds, slightly stiff drape, uniform wrinkle logic.

IMAGE AND POST: everything critically sharp across the full frame with no lens softness, no field curvature and no corner falloff. Detail and contrast do NOT diminish with distance — backgrounds are as cleanly resolved as foregrounds. Where depth of field is used it is computed and clean with perfectly circular uniform bokeh. Motion blur is present and correct but clean and per-object rather than optical smear. Gentle uniform bloom on the brightest highlights. Subtle chromatic aberration applied evenly as a post effect. A fine even film grain overlay laid uniformly across the whole image. Slightly elevated contrast and clean highlight rolloff. All camera movement is smooth interpolated virtual-camera motion with no digital jitter, except where handheld micro-motion is explicitly specified.

FORBIDDEN: no illustration, no anime, no cel shading, no stylised or exaggerated proportions, no painterly look, no concept art, no cartoon, no low-poly, no visible polygon edges, no texture seams, no flat shading, no clay render, no grey-boxed or unfinished surfaces, no flat repeated crowd instances. Fidelity must be maximal and the image must look expensive — only the LOOK is rendered rather than photographic.

ASSET REGISTRY (reference handles = upload order; identity is 100% from each reference)
 @image_1 — KAI WEIL, 30. Operator. Fair skin with a cool under-slept pallor, dark brown almost black hair cut short and neatly, dark brown eyes, lean and narrow through the shoulders with visible tendon at the wrists and neck. HIS FACE CARRIES ALMOST NO MIMIC LINES — no crow's feet, no forehead lines, no nasolabial folds, no frown lines — a fully neutral trained mask, strangely smooth for his age. A thin pale horizontal scar, 15mm, at the left temple just inside the hairline. Wears a clean WHITE clinical coat, open, over a dark charcoal-grey crew-neck base layer and slim dark charcoal trousers. A thin matte dark grey interface cuff on the right wrist. 100% matches the reference. He ALSO appears younger inside the backyard memory — the same face made visibly younger, with the temple scar absent.
 @image_2 — LETA MOREN, present. 29. LIGHT CHESTNUT hair falling loose past the shoulders in a soft wave with loose face-framing strands, GOLDEN-AMBER eyes with visible gold flecks, faint freckling across the nose bridge, a small dark mole below the outer corner of the left eye, soft natural makeup, small gold studs, a slim gold band on her finger. Softer, melancholic. HER FACE, HAIR COLOUR, EYE COLOUR, FRECKLING, MOLE AND JEWELLERY ARE 100% FROM THE REFERENCE AND NEVER CHANGE. HER CLOTHING IS DIFFERENT IN EVERY SCENE AND IS SPECIFIED PER BEAT BELOW — the clothing in the reference image is NOT used anywhere in this film.
 @image_3 — DAMEN VOSS, 32. The husband and antagonist. Tall and solidly built through the chest with the beginnings of softness at the waist. ASH-BLOND HAIR WITH CLEAR GREY AT BOTH TEMPLES, combed back with visible product. Fair skin with a faint flush and broken capillaries across the nose and cheeks. PALE GREY-BLUE cold eyes beneath a heavy brow. HIS FACE IS CARVED BY FROWNING — two deep permanent horizontal lines across the forehead and a third shorter one between the brows, present even at rest, plus pronounced nasolabial folds. Wears an EXPENSIVE BLACK WOOL SUIT, jacket open and unbuttoned, over a white dress shirt with the top two buttons undone and NO TIE. A heavy steel watch, a plain gold wedding band. Cold and controlled, with nervous slightly mechanical smiles. 100% matches the reference, and his suit stays the same in every adult beat.
 @image_4 — LETA as a teenager, about 16. Built from @image_2's features: light chestnut hair, golden-amber eyes, the same freckling and the same mole below the left eye, softer and younger. Wears a plain pale blue school shirt with the sleeves pushed up and a plain dark skirt. First-love classroom only.
 @image_5 — DAMEN as a teenager, about 16. Built from @image_3's features but softer and boyish: ash-blond hair, pale grey-blue eyes, no grey and no frown lines yet, in a plain dark school jumper over a pale shirt. First-love classroom only.
 @image_6 — LETA'S TWO PARENTS, an older couple roughly 55 to 65, plainly and expensively dressed in muted neutral tones. The mother carries a clear echo of @image_2's features. Table and study only.

LETA'S WARDROBE — DIFFERENT IN EVERY SCENE, MANDATORY: her face and hair never change, but she is dressed differently in every beat and the costume must be unmistakably distinct each time. Under no circumstances does she wear the same outfit in two different locations.

CLINIC — a plain pale grey-blue hospital gown in soft matte cotton, loose at the shoulders, plain round neckline, no fastenings visible, no pattern, no markings. Two thin flat circular electrode pads in matte dark grey polymer against both temples with slim pale grey cables running back out of frame, her hair tucked so both pads are clearly visible. All jewellery removed except the slim gold band. Barefoot or in plain pale slippers.

THE FIGHT, bedroom at night — a fine ivory silk camisole with narrow straps and loose matching ivory silk trousers, the fabric catching the cold lamp light with a soft sheen. Hair loose and slightly disordered. She is undressed for bed and physically unguarded, which is the point.

THE TABLE, formal family dinner — a structured DEEP FOREST-GREEN long-sleeved dress in matte crepe, high closed neckline, buttoned or fastened all the way to the throat, fitted and formal. Hair pulled back neatly. She is fully covered and immaculate, and it reads as armour.

THE DOOR, ordinary daytime at home — a soft PALE CREAM chunky-knit jumper, slightly oversized, over plain mid-blue jeans, sleeves pushed back. Hair loose. Domestic, off guard, caught unprepared.

THE ACCUSATION, parents' study — a long CHARCOAL-GREY wool overcoat worn OPEN and still on indoors over a plain black fine-knit top and dark trousers, a dark scarf loose around her neck. She has come in from outside and has not taken her coat off, because she came to demand an answer. Hair windblown.

THE BACKYARD, dusk — THE SAME CHARCOAL-GREY OVERCOAT, black knit and dark trousers as the study beat, but now dishevelled and marked: the coat hem and one sleeve smeared with earth, a scuff of soil at one knee, the scarf pulled loose and hanging, hair pulled out of place. This deliberate continuity links the two memories into one evening and must be preserved exactly.

GLOBAL LOCKS (hold across every beat)
 Identity is 100% from the references, the same faces as Part 1, never redesigned. Clinic beats reuse the exact cold clinical high-key grade from Part 1 so both halves read as one film. Memory beats carry their own scene-appropriate light: warm for young love, cold moonlight for the fight, cold institutional for the table, fading dusk for the backyard. Only the scripted English scream line is spoken; all other lips stay still; no narration, no offscreen extra voices. The slow monitor beep runs under clinic beats. NO TEXT anywhere except the final title card — no logos, no signage, no name badges, no ID cards, no lanyards, no wall labels, no equipment markings, no prints or graphics on any garment.

SHOT SEQUENCE — controlled multi-shot, real-time, hard cuts only unless stated.

0.0s–1.5s — MEMORY: FIRST LOOK
 @image_4 in her pale blue school shirt and @image_5 in his dark school jumper, in the same classroom, younger, exchanging a shy glance of first love.
 Lens lock: 29° portrait.
 Lighting: warm, soft, nostalgic, with gentle bloom on a bright window edge and soft ambient occlusion under the desks.
 Audio: warm room tone building.

1.5s HARD CUT
 1.5s–4.0s — MEMORY: THE FIGHT
 A married bedroom at night. A bedside lamp is knocked askew, throwing hard cold light. @image_2 IN THE IVORY SILK CAMISOLE AND LOOSE SILK TROUSERS, hair loose and disordered, and @image_3 in his black suit are mid-argument, bodies tense and close. Something shatters just offscreen.
 Lens lock: 84° close environmental, unsettled handheld micro-motion (operator breath and weight shift, no digital jitter).
 Lighting: cold hard moonlight, low-key, deep blue shadows with strong ambient occlusion, the askew lamp emissive and casting a hard dynamic real-time shadow, the silk catching a cold specular sheen.
 Audio: the warm bed of the prior beat drops away as raised voices rise, one object smashes offscreen, then hard cut to full silence.

4.0s HARD CUT
 4.0s–6.0s — CLINIC: KAI FEELS IT
 @image_1 frowns, real emotion breaking through for the first time — and because his face carries no habitual lines, this reads as an unfamiliar movement on an unused face. In the right waiting zone, @image_3 in his black suit tenses and starts to rise from the chair.
 Lens lock: 47° medium.
 Lighting: cold clinical high-key at roughly 5600K, faces fully readable, no warm fill, screen-space reflections across the polished floor.
 Audio: silence, then the beep, faintly uneven.

6.0s HARD CUT
 6.0s–8.0s — MEMORY: THE TABLE
 A long family dining table. @image_2 IN THE DEEP FOREST-GREEN HIGH-NECKED DRESS, hair pulled back neatly, sits with @image_6, her parents; all three silent, seated far apart, cold distance between them.
 Lens lock: 84° wide down the length of the table.
 Lighting: cold, even, flat and institutional, with soft ambient occlusion at every chair and place setting and the table surface carrying clean screen-space reflections. The green crepe reads matte against the cold light.
 Audio: heavy formal silence, faint room tone.

8.0s HARD CUT
 8.0s–10.5s — MEMORY: THE DOOR
 @image_3 stands in a doorway, smiling at someone offscreen; he notices @image_2 — IN THE PALE CREAM OVERSIZED KNIT AND MID-BLUE JEANS, hair loose — his face changes, he steps to the door and slams it hard directly into the lens so the door fills the frame.
 Lens lock: 47° widening toward 84° as the door looms into camera.
 Lighting: neutral daytime interior falling dark as the door closes, the light pinching out along the closing edge.
 Audio: the slam is loud and hard, and it bleeds across the next cut.

10.5s HARD CUT (slam carries over)
 10.5s–12.0s — CLINIC INSERT: THE HAND
 Tight insert on @image_2's hand resting on the chair, the pale grey-blue gown sleeve at the edge of frame and the slim gold band catching a crisp specular; her fingers twitch once.
 Lens lock: 29° detail, background falling into clean computed bokeh.
 Lighting: cold clinical.
 Audio: the carried slam lands here; the monitor beep stutters for a fraction of a second.

12.0s HARD CUT
 12.0s–15.5s — MEMORY: THE ACCUSATION
 A parents' study. @image_2 IN THE CHARCOAL OVERCOAT WORN OPEN OVER A BLACK KNIT, dark scarf loose, hair windblown, still in her outdoor coat indoors, screams at @image_6: "You knew. You both knew." Then drops to her knees, breaking into tears, the heavy coat folding around her as she sinks.
 Lens lock: 47° medium, following her down as she sinks on smooth interpolated motion.
 Lighting: tense, harder contrast, cool, with deep ambient occlusion in the room's corners.
 Audio: rising tension into the scream, line begins within 0.3s of this shot, then raw crying.

15.5s HARD CUT
 15.5s–20.0s — MEMORY: THE BACKYARD (the reveal)
 Dusk. @image_2 IN THE SAME CHARCOAL OVERCOAT, BLACK KNIT AND DARK TROUSERS AS THE PREVIOUS BEAT BUT NOW DISHEVELLED AND EARTH-MARKED — the coat hem and one sleeve smeared with soil, a scuff of earth at one knee, the scarf hanging loose, hair pulled out of place — hides behind a tree trunk in a family backyard, peeking out; through the gaps between trees, four people are digging a hole with a mound of fresh earth beside it. She is horrified. Someone grabs her from behind and clamps a hand over her mouth so she cannot scream.
 From around 18.5s, a slow deliberate push into a macro close-up of her wide terrified eye: in the wet reflection on the eye, @image_1's face, visibly younger than present day, surfaces clearly for a held fraction of a second before the beat ends. Give this reflection real screen time and a clean bright specular so the face reads unmistakably; do not rely on a single frame.
 Lens lock: opens at 18° telephoto through the trees with blurred tree trunks occluding the lower foreground; ends on extreme macro on the eye.
 Lighting: fading dusk, low warm-to-blue, tree-filtered with soft volumetric haze between the trunks; the four diggers read as dark silhouettes with no facial detail; on the macro, a clean circular catchlight in the eye carries the reflected younger face with correct specular reflection on the wet cornea.
 Audio: her heavy breathing, distant shovel strikes and shifting soil, breathing cut off hard as the hand covers her mouth.

20.0s HARD CUT
 20.0s–26.0s — CLINIC: THE STANDOFF (climax)
 @image_1 recoils hard back from the console, shaken, steps back and turns, and @image_3 in his black suit is standing right there, close, face angry and tense with the frown lines deepened, the look of a man about to be exposed. They face each other, no dialogue. Between and behind them, in the chair in deep mid-ground, @image_2 IN THE PALE GREY-BLUE HOSPITAL GOWN WITH THE TEMPLE ELECTRODES sits with open blank eyes as a single tear runs down her cheek.
 Lens lock: 47° two-shot, camera holding both men with @image_2 readable between them in the background, everything cleanly resolved to the back wall.
 Camera: locked, a slow tightening push on smooth interpolated motion.
 Lighting: cold clinical high-key, all faces readable, a clean bright specular on the running tear, ambient occlusion where the two men's shapes overlap.
 Audio: the same slow monitor beep, otherwise silence.

26.0s–30.0s — DISSOLVE TO TITLE
 The slow push continues onto @image_2's tear; the tear becomes a small ripple of water and the whole image dissolves into that ripple, the one soft transition in the piece. The water carries clean screen-space reflections and gentle caustic light. The title resolves out of the water, reading exactly:

LETA

in a thin light sans-serif in pale cool grey, correctly spelled, cleanly kerned and perfectly sharp, centred on a clean dark field. Then a single clean call-to-action card follows on the same dark field. NO other text, no numerals, no dates, no credits, no logos.
 Lighting: water reflection, minimal, resolving to a clean title field with a faint even bloom.
 Audio: silence gives way to a single low sustained tone that fades to full silence.

POSITIVE LOCKS
 Every beat is rendered in the high-end real-time game cinematic style defined above, with no exceptions. The same faces as Part 1, 100% from the references, never redesigned; @image_1's backyard reflection is the same face made visibly younger. LETA'S FACE, HAIR AND EYES ARE IDENTICAL IN EVERY BEAT WHILE HER CLOTHING IS DIFFERENT IN EVERY SCENE EXACTLY AS SPECIFIED — hospital gown in the clinic, ivory silk in the fight, forest-green high-necked dress at the table, pale cream knit and jeans at the door, charcoal overcoat in the study and the same coat earth-marked in the backyard. She never wears the same outfit in two different locations. Damen's black suit, ash-blond hair with grey temples and permanent frown lines are consistent in every adult beat; his teenage version has neither the grey nor the lines. All clinic beats match Part 1's cold clinical grade and geometry; each memory keeps its own scene-appropriate light. Kai holds screen-left in his white clinical coat, Damen holds screen-right in his black suit, in every clinic beat. Only the English scream line is spoken; all other lips stay still. Every transition is a hard cut except the final dissolve into the tear-ripple and the two specified slow push-ins. No gore, no blood, no bodies, no visible violence beyond the offscreen smash and the covered mouth.
~~~~

