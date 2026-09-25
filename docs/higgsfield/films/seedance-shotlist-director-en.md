# seedance-shotlist-director-en (afloy011-spec) — script → HTML production board of 15-second Seedance prompts

- Upstream: <https://github.com/afloy011-spec/seedance-shotlist-director-en> (commit `74e6f5e`); Russian original: <https://github.com/afloy011-spec/seedance-shotlist-director>
- Local copy: [`../opensource/seedance-shotlist-director-en/`](../opensource/seedance-shotlist-director-en/)
- License: MIT © 2026 afloy011-spec
- Type: **film/ad pre-production tool** (Claude skill). Origin: "The first commit of the original repository is the original skill from the Higgsfield AI tutorial (<https://www.youtube.com/watch?v=3rDs6FhFoUQ>), verbatim. Everything after is an extension".

## What it produces

"one self-contained HTML file with copy-ready prompts and production tracking" — `shotlist_{slug}.html`: creative brief, continuity ledger, **Asset Checklist with a generation prompt per asset**, Style Prefix, risk badges, per-prompt generation length, director notes, take log (localStorage), Repair Guide, and a **Project Bible JSON** so a new session can resume. Validated by `node scripts/validate.mjs shotlist.html` (~50 checks). Examples: `examples/shotlist_original.html` (the Higgsfield tutorial skill: "validator: 17 FAIL") vs `shotlist_improved.html` (0 FAIL).

## Workflow (SKILL.md § Workflow)

1. Read the script as a director; write a 6-line **creative brief** (core idea, audience feeling, emotional arc, one camera rule, avoid-list, deliverable).
2. **Extract assets, assign @names**, build a continuity table; "Read `references/asset-prompts.md` and write a generation prompt for every asset."
3. Block out scenes; design per-scene lighting and match-cuts between scenes.
4. Decide prompts per scene (each ≤15 s; "A 40-second confession = 3 prompts (e.g., 5a, 5b, 5c)").
5. Write each prompt in the strict structure; assign risk badge, generation length, final-cut target.
6. Generate the HTML; 7. save; 8. validate; 9. present — "**build the checklist assets first, generate high-risk prompts first.**"

## Prompt structure ("this is the law")

```
[STYLE CORE — verbatim]
Lighting: [this scene's lighting plan]

Characters:
[Character anchors with @references — short, specific, vivid. Only the characters in this prompt. Carry forward their state from previous scenes — wet hair from the rain in scene 3 (@anna_wet), blood on the knuckles from the fight in scene 5, the same scar, same wardrobe unless they changed clothes on screen.]

Scene:
[1–2 sentences. What's happening, where (@location), when. Geo-spatial — where each character is positioned relative to the location and to each other. ...]

CUT 1 — [shot size, FOV in degrees, movement]:
[What happens in this shot. Acting beat, gesture, eye-line, breath, micro-pause. ...]

CUT 2 — [shot size, FOV in degrees, movement]:
[Next beat. ...]

ENDS ON: [the exact final frame — body position, eye-line, motion state. This is the handoff ...]

SFX: [the scene's diegetic sound arc, start → finish]
```

**Style CORE** (identical in every prompt):

```
Style: 8K IMAX. Photorealistic — no 3D render, no game engine.
Color: 60:30:10 — dominant / secondary / accent.
Camera: Physical cine lens. 180° shutter motion blur.
Skin: Pore-level realism — vellus hair, asymmetric moles, capillary flush, pore-shadow matching on-set light.
Acting: Hollywood — micro-pauses before reactions, precise eye-line, living eyes with catch-lights, chest rise from breathing. Characters never standing, always reacting.
Physics: Gravity and inertia respected — mass has real weight, correct contact shadows. No floating props.
Composition: Rule of thirds + golden ratio. Every person moving from frame one.
Continuity: Characters, props, environment identical across every cut. No identity drift.
Technical: 24fps smooth motion. 8K detail. No jitter.
Audio: Diegetic dialogue and environmental SFX only. No music. No subtitles.
```

Per-scene lighting line example: `Lighting: Natural light only — soft, even morning daylight, gentle atmospheric haze. Key from sky and garden doors only. No contre-jour, no rim backlight. No artificial lighting.` — "Never copy one lighting line across scenes with different times of day". Anchor white balance in Kelvin (3200K / 4000K / 5600K / 8500K).

## Worked prompt (references/worked-examples.md) — verbatim

Script: *"Anna comes home soaking wet from the rain. Marco is sitting on the couch, looks up from his book, doesn't say anything. She walks past him to the bedroom."* Assets `@anna_wet`, `@marco`, `@apartment`; risk safe; "~8s of these 15 will survive".

```
Style: 8K IMAX. Photorealistic — no 3D render, no game engine.
[...full style CORE verbatim...]
Lighting: Natural light only — rain-blue evening spill through the window stage-right, 8500K blue-hour white balance held for the whole scene, contre-jour on the doorway, camera on the shadow side, 20% atmospheric haze. Key from window and street light only. No artificial lighting.

Characters:
ANNA (@anna_wet) — late 20s, dark hair plastered to her forehead from the rain, soaked navy coat dripping onto the hardwood, mascara slightly smudged under her right eye, lips slightly parted from cold.
MARCO (@marco) — early 30s, faded grey t-shirt, three-day stubble, paperback book open in his left hand, reading glasses low on his nose.

Scene:
A small Brooklyn apartment (@apartment), evening. Living room opens directly into a narrow hallway leading to the bedroom. Rain audible against the window stage-right. Marco sits on the left end of a worn leather couch, facing camera-right. The front door is camera-left. Anna enters from the front door, water streaming off her coat. The space between them is roughly twelve feet, and it stays twelve feet.

CUT 1 — WS static, 63° FOV, eye-level, locked off, no drift mid-segment:
The front door swings open. Anna stands silhouetted in the doorway against the rain-blue street light, contre-jour, water visibly dripping from her coat hem. She doesn't look at Marco. She closes the door slowly with her back, eyes on the floor. Beat. Marco looks up from his book — a small head-tilt, no other movement.

CUT 2 — MS two-shot, 47° FOV, slow push-in from couch height:
Anna walks across the frame, left to right, toward the hallway. Her steps leave wet prints on the hardwood. As she passes the couch, she does not turn her head. Marco's eyes track her — only his eyes, his head stays still. The book stays open on his lap.

CUT 3 — CU on Marco, 18° FOV, static, contre-jour from window behind him:
Marco watches her go. A single slow blink. His jaw shifts once. He looks back down at the book but doesn't read — his eyes stay on the same spot. Off-screen, the bedroom door clicks shut.

ENDS ON: Marco alone in frame, close-up, eyes locked on one unread line of the book, jaw set — the couch and rain-lit window behind him. (Scene 2 picks up this exact STATE from a new angle — or match-cuts from the bedroom door — never on the identical close-up framing.)

SFX: rain against glass from frame one → the door's hinge, her wet footfalls on hardwood → the distant click of the bedroom door, then just the rain.
```

(Note: this example uses age tokens; the higgsfield-ai-prompt-skill engine rules recommend role/build instead because the filter tightens on age words.)

## Consistency and handoff tricks

- **The handoff rule:** "Every prompt ends with an explicit `ENDS ON:` line [...] The next prompt's CUT 1 continues from exactly that STATE [...] but from a **different shot size or angle**. Two adjacent clips framed identically (MCU ends, MCU opens, same axis) jump-cut on the edit; change the shot size by at least one step (MCU → CU, or → WS) or swing the angle ~30°".
- **Keeper-frame handoff:** register a keeper's actual last frame as `@s{N}_end` and put a first-frame lock block above the Style CORE of the next prompt.
- State variants are separate assets (`@hero_wet`, `@hero_suit`).
- FOV in degrees from an approved table (63° observational wide, 47° neutral, 18° close portrait…); millimetres trigger a validator warning.

## Asset prompts (references/asset-prompts.md) — verbatim templates

Character split-frame sheet:

```
Split-frame character sheet, plain solid grey background.
LEFT panel: facial close-up of [age, look, hair, face shape, eyes, one small distinguishing mark];
entire head fully inside the frame including all the hair, nothing cropped;
85mm portrait lens, shallow depth of field, soft cinematic key light.
RIGHT panel: full-body front and back views side by side of the same person,
[build, height], wearing [full wardrobe, item by item];
35mm lens, even full-length lighting. Photorealistic, no branding.
```

Anti-drift: "Erase the face from the full-body panel" — "duplicate faces in one reference cause identity drift in video." Higgsfield AI Cast card: "**50–75 words maximum**" in the form `Soul: [age]yo [build] [ethnicity/look] [gender], [height if it matters]. [3–5 facial anchors ...]`. Product sheet: "Product prop sheet / orthographic turnaround [...] STRICTLY no brand names, logos, wordmarks, or text." Location: "[Time of day] [interior/exterior], 3/4 angle with depth [...] Photorealistic, cinematic, no people, no readable signage." — "**3/4 angle with depth** is mandatory — a flat frontal reference kills camera movement." One location, one lighting state (`@kitchen_morning`, `@kitchen_night`).

Source method cited: Higgsfield Cinema Studio workflow (higgsfield.ai/blog/cinematic_headphones) — assets first, locked as Elements with @names.

## Budget / generation length

- "15s is the maximum container, not a quota" — generation length = end timecode of the last CUT, rounded up to the tool's menu (4/6/8/10/12/15 s); label `gen {G}s`.
- Summary line example: "Target ad: ~30s final · 6 prompts · 62s to generate".
- Risk badges: **safe** 1–2 attempts; **tricky** 2–5; **high-risk** (crowds, choreography, text, water/particles, fast camera + fast subject) 5–10+ attempts, with a Plan B.
- Take log per prompt: `result → the ONE change → keeper?`.

## Extras

9:16 / 1:1 variants (key action in the central ~40% of frame width); music sync — "given a BPM, cuts land on bars (240/BPM s)".
