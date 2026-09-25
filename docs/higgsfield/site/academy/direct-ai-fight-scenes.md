# Direct AI fight scenes through controlled iteration

- **URL:** https://higgsfield.ai/academy/courses/direct-ai-fight-scenes
- **Taught by:** Higgsfield Creative
- **Level:** Intermediate · **Modules:** 5 · **Duration:** 16 min
- **Description (paraphrased):** build reusable action assets, diagnose failed generations, and direct scale, transformations, impacts and cinematic coverage without losing geography or physics.
- **Skills:**
  - Prepare reusable action assets, then structure prompts with named elements (`@tags`), spatial measurements, timed movement and positive constraints.
  - Tell a broken instruction apart from a bad generation; revise only the failing variable.
  - Stage scale, transformations, impacts and coverage while keeping geography and physics.
- **Tooling seen in the course:** short directing requests are handed to Claude (or a Higgsfield prompt skill) which expands them into full Cinema Studio generation prompts. The expanded prompts are NOT public; only the short "source briefs" below are verbatim. Characters referenced as `@roko`, `@roko_warrior`, `@monster`, `@samurais` (saved elements/references).

---

## Lesson 1 — Blueprint the fight before motion
URL: https://higgsfield.ai/academy/courses/direct-ai-fight-scenes/blueprint-the-fight

- Watch the finished sequence and track only three things: who owns the frame, where the threat comes from, which way the next shot must face. Treat the film as a continuity problem first, a generation problem second.
- Before any motion, lock references: exhausted hero (Roko) plus a scene-specific sheet showing pain/fatigue (the body state must persist), a ~4 m monster with skull face and crystal arm-blade, one reusable samurai-army reference, and the snowy location.
- Give every reference **one testable continuity job**:

| Reference | What it must hold |
|---|---|
| Exhausted hero | Face, costume, body state, fatigue |
| Monster | Scale, skull head, arm-blade construction |
| Enemy army | Established samurai look (variation added later only if needed) |
| Crimson-tree view | Front-facing landmark + threat direction |
| Empty reverse view | What the camera sees when turning back across the field |
| Fog wall | A bounded depth field instead of an infinite background |

- Key trick: make **two location views** — the landmark side and a deliberately empty reverse side — so pullbacks, arcs and over-shoulder shots have reference for the unseen half of the set.
- Preflight test: "If the camera turned 180 degrees now, which approved reference describes the frame?" If none, geography is not locked.
- Don't pre-solve failures you haven't seen (e.g. crowd variety is added only after a batch shows clones).

## Lesson 2 — Diagnose and repair a complex shot
URL: https://higgsfield.ai/academy/courses/direct-ai-fight-scenes/diagnose-and-repair-a-shot

Source brief (verbatim, 15 s one-take FPV drone):
```
Scene 66, sequence 1 — the opening shot. One continuous FPV drone take, 15 seconds, no cuts. @monster's war cry at the tree, pull straight back as the @samurais army bursts out of the snow, pass @roko on the way, and end deep in the field with the whole army revealed. Both characters keep their feet planted.
```
- Look at the first batch of 4 results as evidence: a failure that repeats across the batch points to the brief/references; a one-off defect after the movement works means just reroll.
- Separate **locks** (named character refs, environment: snow/fog/ground/light, explicit camera: FPV drone straight backward) from **variables**. If locks hold, don't rewrite them.
- Failures and minimal fixes:

| Observed failure | Diagnosis | Controlled change |
|---|---|---|
| Warriors emerge as motion smear | Action lacks visual progression | Clarify the emergence only |
| Army = identical clones | Generic crowd, no silhouette classes | Add separate "heavy brute" and "light scout" warrior references |
| Pullback flat, subjects become dots in fog | One height, one framing idea | Start on extreme monster close-up, end in a raised heroic wide |

- Second round: monster's arm wrong (hand holding a sword instead of bone blade growing from elbow). Repeating negative bans ("no hand", "no handle") failed. Fix = positive, visible instruction: **raise the arm so its construction faces the camera**. That take made the film.
- Rule: name the failure's level — asset, action, camera, or roll — and change only that level. Never reward a bad result with a total rewrite.

## Lesson 3 — Direct scale and transformation with measurements
URL: https://higgsfield.ai/academy/courses/direct-ai-fight-scenes/direct-scale-and-transformation

Army-scale brief (verbatim, 15 s one take):
```
Next sequence—the same rising, but at full scale. One continuous take, 15 seconds. Open close on one samurai climbing out of the snow, track sideways through the ranks as hundreds more rise, then drop low and push through their legs into the center of the formation—which stays empty, Roko is not in this shot. End with the whole army dropping into a fighting stance at once, eyes igniting red—and hold the freeze.
```
Transformation brief (verbatim):
```
Okay next shot — the transformation. I want one arcing move around Roko, no cuts. Start about 8 meters out and 3 meters up, then swing a half circle around him while coming in closer — end up at like 4 meters and 2 meters high. And somewhere mid-arc the crystal armor just snaps over his whole body — super fast, under half a second — and he becomes the @roko_warrior (crystal knight). It should feel like a weapon deploying, not some magic transformation sequence. End the shot looking past his shoulder at the Monster, and the Monster says "Korose."
```
- Replace intensity words ("huge", "dramatic") with observable space and time.
- **Scale by depth layers**, not headcount: one sharp foreground warrior, a dense middle formation, silhouettes dissolving into fog. Only a few figures need to resolve.
- Stage movement in locatable/timable beats (climb out → sideways track → drop low through legs → empty center → synchronized stance + freeze).
- Measurable shot template: **Start** (position/distance/height) → **Path** (arc, track, push) → **State change** (what changes, how fast) → **Duration** → **End frame** (composition, held beat).
- Transformation = timed state change inside a measured arc (8 m/3 m high → half circle → 4 m/2 m high, armor snaps in <0.5 s mid-arc). Describe behavior ("like a weapon deploying": fast, mechanical, decisive) instead of "epic".
- If you can't sketch start point, path, timed change and end frame, the shot isn't measurable enough to diagnose.

## Lesson 4 — Preserve physics through the impact cut
URL: https://higgsfield.ai/academy/courses/direct-ai-fight-scenes/preserve-physics-through-the-cut

Source brief (verbatim):
```
Write a prompt for next sequence. First contact. Two shots, one frame-perfect match cut: side-profile duel as the lead charger closes—freeze just before the weapons touch—then cut to a slow-motion 180-degree orbit around that frozen moment, and ramp back to real time as the odachi shatters on the crystal blade. Keep a staggered line of chargers behind the lead, with exact gaps.
```
- Treat the frozen near-contact pose as its own continuity asset.
- Three locks: **Pose** (last frame of shot 1 = first frame of shot 2, same bodies & weapon angles), **Time** (orbit holds the instant; speed returns at the shatter), **Material** (vertical steel attack meets diagonal crystal parry; steel breaks).
- First roll had the right movement but imperfect finish → movement works, so keep the brief and reroll; a later roll resolved cleanly.
- Inspect in lock order: end/start pose → blade gap during orbit → the instant time accelerates and which material breaks. Only relationships that fail need prompt revision; mere polish problems = reroll.
- "Almost right" is not a diagnosis: classify as pose continuity, temporal continuity, material behavior, or image quality.

## Lesson 5 — Replace game-like coverage with cinematic direction
URL: https://higgsfield.ai/academy/courses/direct-ai-fight-scenes/replace-gameplay-with-cinematic-coverage

Source brief (verbatim):
```
Re-write the fight. @roko alone in the blizzard, samurai coming from all sides, he's cutting them down — parries, counters, black-sand dissolves. Brutal, heavy, real weight in every hit. Remove every 'NO CGI / NOT a game' line and split it into 4 shots: orbit around him mid-fight — low angle, sword slams the ground, shockwave throws them back — close-up, he catches a katana mid-air and counters — wide, one sweep takes out five at once.
```
- First full-fight generation looked like a video game: one floating camera trailing behind the hero. Repeated "NO CGI / NOT a game" bans kept naming the unwanted look without supplying a replacement.
- Fix: delete the bans, describe what should be visible (blizzard, attacks from all sides, parries, counters, black-sand dissolves, heavy impacts) and split into 4 setups each with a job:

| Setup | Action | Information added |
|---|---|---|
| 50 mm orbit | Fights attackers from all sides | Geography, encirclement |
| 24 mm low angle | Sword hits ground, shockwave throws enemies | Mass and scale |
| 85 mm close-up | Catches a katana mid-air and counters | Precision, reaction |
| 35 mm wide | One sweep takes out five | Reach, consequence |

- Convert rejections into positive questions: "Not a game" → where is the camera and why does this shot exist? "No cheap effects" → what texture, light, debris, contact is visible? "Not weightless" → what bends, stops, recoils, travels after the hit?
- Test: read only the camera plan (mute action nouns). If every setup shows the same info, you've just split one game-cam into cosmetic cuts.
