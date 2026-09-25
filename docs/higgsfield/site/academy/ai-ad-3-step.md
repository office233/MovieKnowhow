# The 3-Step Realistic AI Ad Workflow

- **URL:** https://higgsfield.ai/academy/courses/ai-ad-3-step
- **Taught by:** Higgsfield Creative (host in videos: Adil)
- **Level:** Intermediate · **Modules:** 16 · **Duration:** 36 min
- **Description:** Build a fully AI-generated commercial from scratch — lock every asset, turn a script into a connected shotlist with a Claude skill, then generate and stitch the final scenes.
- **Skills (as listed):**
  - Define a commercial story and build the product, cast, locations, and prop references it needs
  - Use a Claude skill to turn the script into a connected shot list
  - Generate and assemble the final commercial while protecting identity, wardrobe, and spatial continuity
- **Verbatim prompts in this file:** 20
- **Source pages processed:** 17 (course page + 16 lessons)

## Syllabus

1. The finished ad, and the 3-step system
2. The product sheet (GPT Image 2.0)
3. The hero character (Soul Cinema)
4. The boss & side characters (AICast)
5. Locking the first location: the kitchen
6. One face per character sheet
7. Locking the stadium, street & office
8. The outfit edit, kept photoreal
9. The props: sky dancer, sneakers, backpack
10. The shot list, and the Claude skill behind it
11. Scene 1 — the kitchen
12. Scene 2 — the stadium
13. Scene 3 — the street, and the layout map trick
14. Scene 4 — the office
15. Scene 5 — the boss's payoff
16. The full commercial, and the recap

---

## Lesson 1 — The finished ad, and the 3-step system

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-finished-ad-and-the-3-step-system

- The finished headphone commercial (kitchen -> stadium -> street -> office -> boss payoff) was made entirely on a laptop: no camera, no shoot.
- Core idea: a commercial is a **pipeline, not a prompt**. Three steps, in strict order:

| Step | What you build | Tool |
|---|---|---|
| 1. Assets | product sheet, hero, side cast, locations, props | Soul Cinema + GPT Image 2.0 |
| 2. Shot list | a Claude skill turns the script into structured, connected Seedance prompts | Claude |
| 3. Scenes | generate every shot and assemble | Seedance 2.0 inside Higgsfield |

- Rule: assets first, prompts second, generation last. Generating before assets are locked = faces/products drift shot to shot because the model has nothing fixed to hold onto.
- Most consistency problems are solved in step 1, before a single video is rendered.

## Lesson 2 — The product sheet (GPT Image 2.0)

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-product-sheet

- Stage 1 = asset creation: produce several options per character/location, test them in motion, lock the winners. **Get organized first** (folders/canvas) - you will produce a huge number of files.
- One product photo is not enough: from a single flat angle the video model must invent every unseen side and will hallucinate the product mid-scene.
- Fix: put the single photo into **GPT Image 2.0** (called the strongest model for editing an existing product photo) and ask for a sheet with front + 3/4 views.
- Payoff: with the multi-angle sheet as reference, Seedance can keep the headphones correct from any camera angle.

### Verbatim prompts (1)

_Target / settings for this lesson:_ GPT Image 2.0 (image edit, product photo attached as @image_1)

**Prompt #1 — video cue 0:43, generation prompt**

```text
Make a product sheet with front and 3/4 perspective views of the headphones from @image_1.
```

## Lesson 3 — The hero character (Soul Cinema)

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-hero-character

- The hero appears in every scene, so he needs one clean **character sheet** before anything else.
- Model: **Soul Cinema** (best for photoreal looks). Don't hand-write the prompt - describe the sheet to Claude in plain words and let it write the detailed prompt.
- Layout: two panels - face close-up (locks identity) + full body front & back (locks height/build/outfit).
- Always use a **plain grey background**: nothing competes with the character, more downstream generations are usable.
- Cost: Soul Cinema = **8 images for 1 credit** -> run several batches and scroll until a face really stands out.
- Keep **2 finalists**, not one: a face that looks great as a still can fail in motion. Park candidates side by side on the **Canvas** and promote the winner only after video tests.

### Verbatim prompts (1)

_Target / settings for this lesson:_ Claude (writes the Soul Cinema character-sheet prompt)

**Prompt #1 — video cue 0:11, Claude request**

```text
create a prompt for a character sheet of a young man with an expressive face — two panels, close-up and full body - front and back, on a grey background.
```

## Lesson 4 — The boss & side characters (AICast)

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-boss-and-side-characters

- Side characters don't need the full custom character-sheet process - they just need to look right and stay consistent.
- Use **AI Cast** (AICast): one line of description -> a full character sheet with several styling options. You can spin up an entire supporting cast this way.
- Casting rule: pick the option whose face "reads as trouble" instantly (antagonist); reject versions that look too friendly. The furious-looking boss was locked.

### Verbatim prompts (1)

_Target / settings for this lesson:_ AI Cast (Higgsfield) - one-line character brief

**Prompt #1 — video cue 0:20, generation prompt**

```text
An office boss in his 50s with a pot belly, wearing a suit.
```

## Lesson 5 — Locking the first location: the kitchen

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/locking-the-kitchen

- The location makes or breaks the ad: a plastic-looking set cannot be fixed later by prompting. Quality bar for every location: bright, clean, high-end commercial.
- **Generate locations at a 3/4 angle**, not head-on - the depth gives Seedance something to hold onto when the camera moves; it wins far more often than flat frontal shots.
- Two kitchens kept (one warmer, one brighter).
- **Test hero x location in motion**: 2 heroes x 2 kitchens = 4 test videos with the *identical* simple prompt (walks in, headphones on, dances a little) + character sheet + location + headphones attached.
- Change **one variable per test** (hero OR location, never both) so you can see what causes the difference.
- Result: in the darker kitchen faces disappear into shadow -> the brighter kitchen wins; the curly-haired hero dances better and owns the frame -> "Character A, Kitchen B" locked.
- Adapting a locked location: instead of re-rolling, do a **targeted GPT Image 2.0 edit** (empty the island, add gas stove, replace TV with a door, "keep everything else the same") so the set supports the scene's action (make coffee, then leave).

### Verbatim prompts (3)

_Target / settings for this lesson:_ Soul Cinema (location still) / Seedance 2.0 (motion test with hero sheet + kitchen + headphones attached) / GPT Image 2.0 (location edit)

**Prompt #1 — video cue 0:22, generation prompt**

```text
Modern apartment kitchen, 3/4 angle, bright clean daylight, high-end commercial look.
```

**Prompt #2 — video cue 1:01, generation prompt**

```text
the hero walks into the kitchen, headphones on, dance a little
```

**Prompt #3 — video cue 2:10, generation prompt**

```text
Clear everything off the kitchen island so the top is empty. On the left counter add a gas stove. On the right wall remove the TV and put a door there instead. Keep everything else the same.
```

## Lesson 6 — One face per character sheet

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/one-face-per-character-sheet

- Problem: a standard sheet (close-up + full-body front/back) shows the face **twice**. Seedance can't tell which face to lock onto, so identity drifts/blends between shots - even though the sheet looks fine as a still.
- Fix: in **GPT Image 2.0**, erase the face from the full-body panel; keep the close-up as the single face reference. The body panel still supplies height, build and outfit.
- Apply to every character with a multi-view sheet (the boss got the same edit). Skip it and every downstream shot inherits the drift.

### Verbatim prompts (1)

_Target / settings for this lesson:_ GPT Image 2.0 (edit on the character sheet)

**Prompt #1 — video cue 0:27, generation prompt**

```text
Erase the face from the full-body shot on the right panel.
```

## Lesson 7 — Locking the stadium, street & office

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/locking-the-rest-of-the-locations

- Same loop for every other location: generate -> keep favourites on the canvas -> test with the hero -> lock the winner.
- Stadium: don't hand-write a cinematic prompt - give Claude 3 facts (running track, 3/4 view, sunny day) and let it expand them into a full location prompt (green field, red track, clean light).
- Test two stadium options on video with a one-line action ("he runs along the track in headphones"). The winner was the brighter one because the scene is a *morning*.
- A location can win as a still and lose on video - light that reads fine in a photo can go flat in motion. Always run the hero through before locking.
- Street corner and office: identical process. Testing every location looks slow but saves many credits versus generating full scenes on the wrong assets.

### Verbatim prompts (2)

_Target / settings for this lesson:_ Claude (location prompt) -> Soul Cinema; Seedance 2.0 motion test

**Prompt #1 — video cue 0:15, Claude request**

```text
Give me a prompt for location. Running track. 3/4 view. Sunny day.
```

**Prompt #2 — video cue 0:52, generation prompt**

```text
he runs along the track in headphones
```

## Lesson 8 — The outfit edit, kept photoreal

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-outfit-edit

- The tests used a plain black outfit; once hero and kitchen are locked, dress him for real.
- Drop the locked character sheet into Claude and ask for **10 casual outfit ideas written as ready-to-run prompts**; run all 10 in GPT Image 2.0. About half are wearable - the aim is volume so two good ones surface.
- **Combine winners**: take the top from look 2 (recoloured pink) + jeans from look 1 in a single new prompt, rerun in GPT Image 2.0.
- Quality trap: every edit pass softens the image (GPT Image edit of a Soul Cinema render = plastic "AI slop" skin).
- Fix with **layer masking** in any photo editor: original sharp Soul Cinema image on top, edited version below, mask out only the outfit so the new clothes show through. Face, skin, background stay the original render.

### Verbatim prompts (2)

_Target / settings for this lesson:_ Claude (outfit prompt writing) -> GPT Image 2.0

**Prompt #1 — video cue 0:16, Claude request**

```text
Give me 10 casual outfit ideas for this character. Write each as a prompt.
```

**Prompt #2 — video cue 0:47, Claude request**

```text
Take the shirt from the second look, make it pink, and keep the jeans from the first. Combine them into one prompt.
```

## Lesson 9 — The props: sky dancer, sneakers, backpack

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-props

- Last assets: skydancer (inflatable tube man), sneakers, backpack - each appears in several scenes, so each gets one clean reference sheet in GPT Image 2.0.
- Props **skip the multi-candidate + motion test** used for characters: an object doesn't perform, one clean sheet is enough.
- Build the sheet around how the prop will be seen: e.g. backpack = 3/4 + straight-on, lightly worn, enough to carry canvas texture, patches and drawstrings. Enough angles for the camera, no more.
- After this: hero, boss, 4 locations, 3 props + product = full locked asset set.

## Lesson 10 — The shot list, and the Claude skill behind it

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-shot-list-and-the-skill

- Credit sink to avoid: open Seedance, write a prompt from scratch, dislike, tweak, rerun x20. Instead **never hand-write video prompts**.
- Use a Claude **skill** (a file loaded into Claude that teaches it one job your way): `higgsfield-seedance-shotlist-director.skill` - writes shot lists with Seedance 2.0-tailored prompts, packed with what holds/breaks consistency.
  - Download (lesson resource): https://d2245ubjcvacnx.cloudfront.net/assets/ai-ad-3-step__the-shot-list-and-the-skill__higgsfield-seedance-shotlist-director.d03c62c4.skill
- In a fresh chat give it **three inputs every time**:
  1. The script (whole ad, one clear idea per scene).
  2. Every locked asset as an **uploaded image** from the canvas (not a verbal description - the #1 mistake; generic input = generic prompt).
  3. A **name per asset** (`@hero`, `@headphones`, `@kitchen`...). Use exactly the same names for the Elements you create in Higgsfield, so references auto-attach when generating.
- Output = one **connected shot list**: a **style prefix** block (light, camera, colour, look) glued to every prompt - change it once in chat and every prompt updates - plus named prompts `1a, 1b, 2a...` you can edit individually ("edit prompt 1a...") without touching the rest.

### Verbatim prompts (1)

**Skill #1 — video cue 0:53, generation prompt**

```text

```

## Lesson 11 — Scene 1 — the kitchen

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/scene-1-the-kitchen

- Expect the first pass to fail. Loop: run -> name exactly what's wrong -> tell Claude the fix -> rerun.
- Prompt 1A ran with hero, headphones, kitchen attached as Elements (same names as in the shot list). First result had 3 problems: wrong light for a morning ad, static camera, coffee beat crammed into the tail.
- Sort fixes by scope:
  - **Global** (every scene): change the **style prefix** once - drop contre-jour/shadow-side framing, use soft even daylight from camera side.
  - **Local** (this shot): rewrite only 1A - camera opens behind him and eases to profile; coffee becomes a quick 3-stage jump-cut tease.
- Keepers were cut from several runs (walk-in from one take, headphones-on from another).
- Props drifting in close-ups (moka pot, mug) -> lock them: Claude writes an image prompt per prop, GPT Image 2.0 renders, save as Elements `@moka_cream`, `@mug_cream`.
- New prompt 1B = fast-cut coffee montage (top-down on the moka, worm's-eye from burner level as flame catches, tight pour & sip). Final cut splices 4 generations (spoon / flame / pour / sip) - "plays like a car ad for coffee".
- **Choreograph, don't summarise**: "he dances" means nothing to Seedance. Exit (now 1C) spelled out: pack sneakers, zip bag, 2 head nods, shoulder roll each side, knee dip, finger snap, quarter-spin at the door, tap on the ear cup. Edit pulls zip/dance/tap from 3 takes, cutting on action.
- Tally: 3 prompts, 9 generations, keeper moments from nine 15-second clips.

### Verbatim prompts (5)

_Target / settings for this lesson:_ Claude chat edits to the shot list (skill) -> Seedance 2.0 (15 s generations); prop stills via GPT Image 2.0

**Prompt #1 — video cue 1:12, Claude request**

```text
change the style prefix for the whole shotlist — kill the contre-jour and shadow-side framing, go soft even daylight lit from the camera side, bright and clean. apply to every prompt.
```

**Prompt #2 — video cue 1:36, Claude request**

```text
edit prompt 1a — open behind him and ease around to profile as he walks to the stove, no static wide. and cut the coffee down to a quick 3-stage jump-cut tease — set the moka, it gurgles, he pours and sips.
```

**Prompt #3 — video cue 2:53, Claude request**

```text
create the prompts for a moka pot and a mug that match the kitchen.
```

**Prompt #4 — video cue 3:00, generation prompt**

```text
The mug — ceramic, with a reddish-orange pinstripe around the rim. Clean studio light, neutral background, centered, product photography.
```

**Prompt #5 — video cue 3:02, generation prompt**

```text
The moka pot — eight-sided, high-gloss black base, matte cream top chamber, black handle and knob, brass safety valve on the lower half. Studio product shot, soft directional light, neutral background, sharp focus.
```

## Lesson 12 — Scene 2 — the stadium

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/scene-2-the-stadium

- Wardrobe change per location: casual look (pink shirt, white tee, jeans) is wrong for a running track.
- Casual sheet + sneaker reference -> Claude: "edit this character into a blue athletic outfit wearing these sneakers" -> prompt + both refs into GPT Image 2 -> pick and lock the **dry** athletic hero.
- Mid-scene state change (dry -> drenched in sweat): don't ask the model to add sweat via words on top of the dry sheet (it improvises, face drips). **Build a second sheet** (same outfit, soaked, sweat stains) and tell Claude exactly which cut uses which. "Images are cheap; video generations aren't."
- **Per-scene lighting override**: the global soft daylight prefix is wrong for midday stadium -> override for this scene only: hard high sun behind camera, deep blue sky, hard shadows, saturated colour.
- Fix the cut, not only the shot: drop the warm-up stretching (dynamic from frame 1) and **match the opening hand-tap to the tap that ended the kitchen scene** (same hand/motion) so the transition reads as one action.
- Coverage version: broadcast wides from the stands, tight tracking on legs, worm's-eye from track level as he runs over the lens.
- Product hero shot: a **snorricam-style body rig** - camera bolted to his side at the right ear cup, headphones dead centre and stable while the track blurs behind. Normally a rig + operator + thousands of dollars; here one prompt.
- Tally: 3 prompts, 6 videos; scene cut from pieces of all of them.

## Lesson 13 — Scene 3 — the street, and the layout map trick

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/scene-3-the-street-and-the-map-trick

- Hardest scene: most dancing, plus a street corner, backpack, walking direction and a giant skydancer that must stay put.
- Plain prompt failed 3 ways: light drifted to sunset, hero walked a different direction each take, skydancer changed size/position every take.
- **Layout map trick** (the biggest trick of the course): text can't pin space, a picture can. In GPT Image 2.0 make a **schematic**: mark the fire hydrant, lock the skydancer to its right at 2x a person's height, on the same line. Give the map to Claude to rewrite the street prompt around it (bright midday, overhead sun, short hard shadows, hero left->right, road on his left, brick building on his right, camera following, pedestrians/traffic).
- Brute-forcing ~20 generations for a few usable seconds burns credits and still leaves geometry loose; the map gets Seedance right take after take.
- Anchor the hero physically (pinned under a tree on the left) and describe the walk cut by cut; lock the backpack on both shoulders in every cut.
- Name the dance moves per cut (slow head-bob, sharp footwork, locking pose, full hip-hop break when he spots the skydancer). **Add the actual music track as an input to Seedance** so moves lock to the beat. Final cut: camera low so the skydancer towers over his shoulder.
- Three passes on one prompt; skydancer holds size and position in every cut.

### Verbatim prompts (2)

_Target / settings for this lesson:_ GPT Image 2.0 (schematic) / Claude (prompt rewrite) -> Seedance 2.0 with schematic + music track as inputs

**Prompt #1 — video cue 1:06, Claude request**

```text
Make a schematic. Mark the fire hydrant and lock the sky dancer to its right — two times a persons height, on the same line.
```

**Prompt #2 — video cue 1:27, Claude request**

```text
Rewrite the street prompt on the schematic. Lighting is bright midday, overhead sun, short hard shadows underfoot, no sunset. Hero moves left to right dancing, road on his left and the brick building on the right. Camera following. Pedestrians and traffic throughout.
```

## Lesson 14 — Scene 4 — the office

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/scene-4-the-office

- Climax: hero strolls in unbothered, boss is mid-tirade. First render already nailed the acting (boss annoyed but not cartoonish); missing: a real entrance through the door with the camera following.
- Same rule as the kitchen: asking for "a dance" gets random flailing - **choreograph beat by beat**.
- One-pass edit did two things: (1) open on a tap matching the last cut of Scene 3 exactly (same pose) for a clean **match-cut**; (2) hero enters through the door, camera follows, dancing a named sequence: two head nods, shoulder roll, dipping step, knee lift, finger stab, land on a smirk.
- Result: match-cut + choreography land together, boss framed behind him all the way in.

## Lesson 15 — Scene 5 — the boss's payoff

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/scene-5-the-boss-dance

- Pack shot = pure contrast gag: the screaming boss from Scene 4 now dances on the street next to the skydancer with the headphones on.
- Short brief only: wide, eye-level, boss headphones on, suit rumpled, loose full-body wave dance beside the skydancer, passerby smiling.
- **Reuse the Scene 3 schematic unchanged** as spatial anchor (hydrant/skydancer geometry) + one text instruction placing the boss to the skydancer's right. Pasting it auto-attaches; no new location prompt, no drift.
- Deliberately *not* over-choreographed here - nothing left to solve; the image of a heavyset man in a rumpled suit doing a loose wave sells itself. A couple of batches was enough.
- Best gags = smallest distance between two states (screaming boss -> dancing boss 30 s later).

### Verbatim prompts (1)

_Target / settings for this lesson:_ Claude request to the shot-list skill -> Seedance 2.0 (scene-3 schematic attached)

**Prompt #1 — video cue 0:18, Claude request**

```text
For scene 5 - make wide, eye-level shot. The boss—headphones on, suit rumpled—doing a loose full-body wave dance right next to the skydancer. Passersby smiling. Lock him to the right of skydancer using the scene-3 schematic.
```

## Lesson 16 — The full commercial, and the recap

URL: https://higgsfield.ai/academy/courses/ai-ad-3-step/the-full-commercial-and-recap

- All scenes cut into one spot. Recap of the 3 steps:
  1. **Assets** - product, hero, locations built, tested in motion, winners locked.
  2. **Shot list** - one connected prompt system; one edit to the style prefix updates every scene.
  3. **Scenes** - layout map to hold locations, post-run wardrobe swap via a second sheet, choreography written move by move.
- "Iteration is the skill": the final ad is the best few seconds out of ~100 tries. Nobody's first render is final.
- Nothing is headphone-specific - swap in any product; what changes results is how well you describe things.
