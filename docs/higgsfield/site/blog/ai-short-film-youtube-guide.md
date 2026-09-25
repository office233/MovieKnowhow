# AI Short Film – Full Prompt Library (YouTube video)

Source: https://higgsfield.ai/blog/ai-short-film-youtube-guide  
Higgsfield, Mar 12, 2026  
Prompts extracted: 25

Complete prompt library for a cop-comedy short film ("birthday surprise" twist) made entirely on Higgsfield. Structure worth copying:

**Pre-production (assets first)**
1. Characters: train **Soul ID** from your photos, then generate each character close-up in **Soul Cinema** with a minimal prompt ("A close up of an American policeman"). Characters: Adil (hero cop), Dave (partner), Selena (wife).
2. Lock each character with a **character reference sheet** in **Nano Banana Pro** (upload the image + turnaround prompt: 4 full-body views + 3 close-ups, neutral background, A-pose).
3. Locations: generate the key location once in Soul Cinema (locker room, patrol-car interior, dark hallway), then a **location reference sheet** in Nano Banana Pro (front, left/right angles, reverse wide + 3 detail close-ups).
4. For found-footage realism, write the *camera defects* into the prompt: DVR/dashcam aesthetic, cheap wide-angle distortion, compression artifacts, low dynamic range, blown highlights, raw ungraded footage.

**Production in Cinema Studio**
- Reference saved elements by tag in prompts: `@Adil-Cop`, `@Dave-Cop`/`@Dave`, `@Locker-Room`, `@Selena`.
- Each shot has a duration and camera style (e.g. 7 s handheld, 5 s static, static dashcam look).
- **Dialogue goes inside the prompt in quotes** with speaker tags; multi-line banter can be one shot.
- Creative POV shots ("POV shot from the bottle inside the locker") add variety.
- B-roll (dashcam driving, radio close-up, side-window street) generated in Soul Cinema as stills/plates for mood and place.
- Tonal pivot delivered through a radio dispatch line; scene close with a "sudden shake" dynamic shot.
- Twist: dark house entry -> lights on -> surprise party -> payoff line.

## Prompts (verbatim)

### P1. Character #1 Adil (hero cop)
- Use-case: Character / consistency | Model: Soul Cinema (+ Soul ID) | Settings: character still

```text
A close up of an American policeman
```

### P2. Character #3 Selena (wife) — Dave uses the same prompt as Adil
- Use-case: Character / consistency | Model: Soul Cinema | Settings: character still

```text
A close up of a woman in her mid-twenties
```

### P3. Character reference sheet (turnaround)
- Use-case: Character / consistency | Model: Nano Banana Pro | Settings: upload reference image

```text
Create a professional character reference sheet based strictly on the uploaded reference image. Use a clean, neutral plain background and present the sheet as a technical model turnaround while matching the exact realistic visual style of the reference. Arrange the composition into two horizontal rows. Top row: four full-body standing views – front, left profile, right profile, back. Bottom row: three close-up portraits – front, left profile, right profile. Maintain perfect identity consistency across every panel. Keep the subject in a relaxed A-pose with consistent scale and alignment, accurate anatomy, and clear silhouette. Lighting should be consistent across all panels. Output a crisp, ultra-realistic, print-ready reference sheet.
```

### P4. Location: locker room
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: location still

```text
A wide shot of a locker room with blue lockers
```

### P5. Location reference sheet
- Use-case: Cinematic film scene | Model: Nano Banana Pro | Settings: upload reference image

```text
Create a professional location reference sheet based strictly on the uploaded reference image. Match the exact realistic visual style, lighting quality, color treatment, and texture of the reference. Arrange into two horizontal rows. Top row: straight-on frontal view, left angled perspective, right angled perspective, reverse wide view. Bottom row: three detailed close-ups of key environmental elements. Maintain architectural consistency, accurate proportions, and consistent lighting across all panels. Output a crisp, ultra-realistic, print-ready location sheet.
```

### P6. Location: police cruiser interior (dashcam aesthetic)
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: location still, DVR look

```text
Police cruiser interior, static wide shot from the dashboard facing the passenger seats, empty front seats with gray fabric upholstery, metal police partition cage behind the seats, a shotgun mounted vertically in the center of the partition, bright midday sunlight blasting through the windshield creating harsh overexposed highlights and lens artifacts, suburban houses visible through the windows, slightly washed-out colors, flat digital sensor look, DVR/security camera aesthetic, cheap wide-angle lens distortion, mild compression artifacts, low dynamic range, subtle digital noise, slightly blown highlights, surveillance style framing, raw ungraded footage.
```

### P7. Location: dark hallway with light leaking around door
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: location still

```text
A dark interior hallway with a single closed door at the end of the corridor. The room is almost completely dark. From the edges of the doorframe a thin, intense strip of light leaks out along the entire perimeter of the door, forming a sharp rectangular outline against the surrounding darkness. Dust particles drift slowly in the air. The light feels unnatural and powerful, as if something extremely bright exists beyond the door. The composition centers the door in frame.
```

### P8. Scene 1 Shot 1 — Adil enters locker room
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: 7 s, handheld

```text
A policeman in uniform @Adil-Cop enters the locker room with blue lockers @Locker-Room. The policeman stops in front of one of the lockers with his back to the camera.
```

### P9. Scene 1 Shot 2 — POV from bottle inside locker
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: 5 s, static

```text
POV shot from the bottle inside the locker. A policeman opens the locker, reaches for the bottle and then stops.
```

### P10. Scene 1 — locker POV with Dave's line
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: handheld; dialogue

```text
POV shot inside the locker. A policeman @Adil-Cop opens the locker and reaches for a bottle. He stops as he touches it — and we hear @Dave-Cop saying loudly: "Happy birthday, my little princess!"
```

### P11. Scene 1 — locker shut reveals Dave
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: handheld; dialogue

```text
Profile close up of @Adil-Cop who shuts the locker door quickly. As the door closes, the camera captures @Dave-Cop standing right in front of it. Dave continues teasing: "You want a cupcake or a parade maybe?"
```

### P12. Scene 1 — Adil's dry reply (wide)
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: handheld; dialogue

```text
Wide shot of @Dave-Cop and @Adil-Cop. Adil replies dryly: "It's just a regular day, man. Nothing special."
```

### P13. Scene 1 — full banter shot
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: single shot, handheld; multi-line dialogue

```text
@Dave-Cop teasing: "Yeah? Don't sound too excited. We can call dispatch, have 'em sing for you." @Adil-Cop: "Please don't. I'm trying to keep a low profile today." @Dave: "Too late. Princess turns a year older. That's paperwork." @Adil: "Great. Add it to the report. Subject survived another year."
```

### P14. Scene 2 Shot 1 — patrol car start
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: static, dashcam look; dialogue

```text
Interior police cruiser, daytime, DVR dashcam look, soft overexposed sunlight. @Adil-Cop leans in, pulls the door shut, starts the engine. @Dave looks forward and says sarcastically: "You know where I celebrate my birthday every year?" Adil, eyes on the road: "No. Why should I?"
```

### P15. Scene 2 Shot 2 — noodles
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: static, dashcam look; dialogue

```text
Interior police cruiser, daytime, DVR dashcam look. @Dave looks forward: "Best noodles you ever had. You know what they call 'em?" Adil, dryly: "Noodles??"
```

### P16. Scene 2 Shot 3 — lagman exchange
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: handheld dialogue

```text
Dave: "Little Kazakh spot on 5th. Plastic tables. Soup so hot it files a complaint." Adil: "Sounds nice!" Dave: "Best noodles you ever had. You know what they call 'em?" Adil: "Noodles?" Dave (side-eye): "Nah, man. They got a name. Fancy. Cultural." Adil: "Lagman." Dave: "Lag-whaat?"
```

### P17. B-roll 1 — dashcam driving LA suburb
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: B-roll plate

```text
Dash-mounted police cruiser DVR perspective, hood of the patrol car visible at the bottom. Driving forward along a narrow residential street in LA – small houses, palm trees, wooden fences, telephone poles, dry vegetation, hot California midday sunlight. Police dashcam aesthetic: cheap digital sensor, mild motion blur, washed-out colors, low dynamic range, compression artifacts, no text overlays.
```

### P18. B-roll 2 — radio mic extreme close-up
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: B-roll detail

```text
Extreme close-up of a handheld radio mic clipped to a dark police uniform. Coiled cord descends into shadow. Interior of a patrol car, early morning. Backlight from the windshield creates warm rim highlights. Very shallow depth of field. Fine film grain. Teal shadows, warm highlights. Quiet, tense, documentary feel.
```

### P19. B-roll 3 — side window street
- Use-case: Cinematic film scene | Model: Soul Cinema | Settings: B-roll

```text
Quiet suburban street in an LA-style neighborhood, viewed from the side window of a moving car. Single-story houses, wooden fences, dry grass, trash bins, telephone poles. Harsh midday California sun, washed highlights, dusty atmosphere. Slight motion blur on foreground. Dashboard camera lens with subtle 70s film grain, faded colors, documentary police-procedural realism.
```

### P20. Radio interruption (tonal shift)
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: close-up; dispatch audio

```text
Close-up of a police radio clipped to an officer's vest inside a moving patrol car. The radio crackles and dispatch comes through: "Unit 12, we got a 17 in progress. Possible homicide. Seventeen thirty eight on scene."
```

### P21. Scene close A — hard turn
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: dynamic shot, sudden shake; dialogue

```text
@Adil-Cop turns the wheel hard, making a sharp turn. Dynamic shot, sudden shake. @Dave holds the radio and says: "Seventeen thirty eight, roger that."
```

### P22. Scene close B — car speeds and stops
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: dashcam, camera shake

```text
Dashcam perspective, hood of the patrol car visible. The car accelerates at high speed down a narrow street and stops diagonally in front of a house. Slight camera shake while driving.
```

### P23. Scene 3 Shot 1 — enters dark house with shotgun
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: —

```text
@Adil-Cop enters the door slowly like on a mission, police shotgun raised. Lights inside the house are off.
```

### P24. Scene 3 Shot 2 — lights on, surprise party
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: —

```text
Lights switch on quickly. Camera captures a surprise party in the house. Close up of @Selena holding a cake with candles.
```

### P25. Scene 3 Shot 3 — "Surprise, honey!"
- Use-case: Cinematic film scene | Model: Cinema Studio | Settings: close-up; dialogue

```text
Close up of @Selena with a cake and candles saying: "Surprise, honey!" People in the background congratulating and celebrating.
```

