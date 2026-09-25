# Meet Cinema Studio 4.0: New Generation of AI Filmmaking

- Source: https://higgsfield.ai/blog/cinema-studio-4-0
- Byline: Higgsfield · Aug 12, 2026 · 12 min · Last updated: 3d ago
- Prompts extracted: 2

## Notes

**Launch guide (Aug 12 2026).** 3.5 -> 4.0 changes:
| Setting | 3.5 | 4.0 |
|---|---|---|
| Clip length | 15 s | **30 s** |
| References | 9 | **50** images |
| Tempo | - | Auto, Chaotic, Dynamic, Calm, Single Shot |
| Camera moves | 9 presets | 30+ (POV, Robot Arm, Pan Left, Helicopter, tracking, pedestal down...) |
| Camera type | 3 | Modern, DV Camcorder, 35mm Film, 8mm Film |
| Lens | 5 filters | optically modelled at generation: Clean Sharp, Anamorphic, Vintage Anamorphic, Warm Vintage, Halation Vintage (+Auto) |
| Extend | - | Forward/Backward Extend (upload a video for continuation or lead-in) |
| Colour palette | 8 | 50+ templates (Film Colors, Black Gloss, Candy Pink, Lime Jam, Nostalgic Blue...) |
| Emotion | - | Emotion Wheel: Hope, Anger, Joy, Trust, Fear, Surprise, Sadness, Disgust |
| Era | - | Auto, 60s, 80s, 90s, 2000s, 2020s (grain, grade and lens adjust) |
Max resolution 1080p.

**Genre behaviours:** Action ties camera to the moving subject; Epic = wide, environment as subject; Drama = closer, longer holds, light on faces; Comedy = open framing, room to react; Horror = off-angle, withheld light; Noir = hard shadow/high contrast. Without a genre, output lands in a flat middle ground.
**Tempo:** Chaotic = action/disorientation; Dynamic = commercials/music videos; Calm = drama/doc; Single Shot = one continuous take (hardest, best for product reveals, no re-establishing of identity after cuts).
**Lighting:** presets (Silhouette, Practicals, Window, Overhead Fall, Contre-jour, Soft Cross) or manual colour/brightness/diffuse/angle.
**Lens picks:** Vintage Anamorphic = prestige cinema; Clean Sharp = commercial/tech; Warm Vintage = beauty/intimate; Halation Vintage = red halos on highlights.

**Step-by-step direction:**
1. Genre first (widest downstream effect).
2. Camera -> lens -> aperture -> colour. Example drama config: 35mm Film, Vintage Anamorphic, f/4, Nostalgic Blue.
3. Feed refs (up to 50: product shots, spokesperson face, style ref, location).
4. Tempo.
5. Emotion: write `@character_name Joy` in the prompt — otherwise characters default to a neutral unreadable face; emotion tags also help hold an expression across a 30 s clip.
6. Prompt only the scene (technical look is already set).
7. Finish with in-app Color Grading (temperature, contrast, saturation, sharpness, grain, highlights, exposure).

**Era demo:** the same dance-movie rejection scene rendered as 2010s vs 1980s (both prompts below) — only the era/film-stock language differs.
**Team features:** AI Cast, Cinematic Locations, Soul Cinema models, multi-model (Seedance 2.5 available inside), live multi-user generation, element sharing, Canvas, Project Brief, subfolders, Personal Assistant (script -> shots with camera params).
**Why these features:** 30 s exposes drifting faces and unstable light that 15 s hides — hence stronger lens modelling, palettes and emotion locking.

## Prompts (verbatim)

### P1. Step-by-Step: How to Direct a Scene in Cinema Studio 4.0

- Model / settings: Cinema Studio 4.0 (up to 30 s, up to 1080p)
- Use-case: music video
- Context: The two examples below show the same scene run through Era selector twice, once set to the 2010s and once to the 1980s. Same characters, same choreography, same rejection beat by beat, different decade.

~~~~text
15-second multi-shot cinematic scene in the style of a 2010 dance movie. Shot on a digital cinema camera: crisp clean image, deep blacks, glossy teal-and-orange color grade, smooth steadicam movement, 120fps slow-motion accents, rhythmic cuts landing on the beat, streaky lens flares from lasers. Location: a 2010s nightclub, pulsing LED video walls, sweeping laser beams, strobes, thick haze from a fog machine, an illuminated bar glowing in the background, a DJ on a raised booth behind CDJs and a laptop.
 CHARACTERS (match the faces and hairstyles of the attached reference images exactly, but dress them in 2010s club fashion; keep them consistent across all shots): GOLD GIRL: young woman, voluminous brunette blowout, large gold hoop earrings; wearing a gold sequin bodycon mini dress and black strappy heels. PINK GIRL: young woman, short brunette bob with bangs; wearing a hot-pink bandage mini dress, a chunky silver statement necklace and metallic heels. THE GUY: young man with a large afro, thin mustache and soul patch; wearing a slim-fit light-blue blazer over a deep V-neck white tee, dark skinny jeans, crisp white sneakers and dark wayfarer-style sunglasses indoors. A packed crowd of 2010s-dressed extras surrounds the floor, hands in the air, a few filming on early smartphones and compact digital cameras, all bouncing to the beat.
 BEAT 1, THE CLUB (0-3s): Steadicam glides through the hazy crowd, laser beams cutting overhead, LED wall pulsing; the crowd parts to reveal GOLD GIRL and PINK GIRL dancing side by side in perfect sync at the center of the floor, owning it. Extras cheer and mirror their moves.
 BEAT 2, THE ENTRANCE (3-6s): Cut to THE GUY sliding through the crowd; he lowers his sunglasses down his nose, a brief 120fps slow-motion hero moment with a laser flare across the lens, then a speed-ramp back to real time as he struts toward GOLD GIRL doing an exaggerated shuffle step.
 BEAT 3, FIRST ATTEMPT (6-9s): Quick cuts on the beat. He orbits GOLD GIRL, mirroring her moves, leaning in with a smug grin and offering his hand mid-move. Snap to her deadpan face: she raises a flat palm in a "stop right there" gesture, spins away without missing a step. Crowd goes "oooh".
 BEAT 4, SECOND ATTEMPT (9-12s): Undeterred, he shuffle-glides across the floor to PINK GIRL, drops a flashy pose and wiggles his eyebrows over his sunglasses. She looks him up and down, flips her hair dismissively and struts off to join GOLD GIRL. A DJ air horn blares from the booth.
 BEAT 5, DOUBLE REJECTION (12-15s): Wide shot: the girls fist-bump and keep dancing back to back, untouchable. THE GUY shrugs an exaggerated "well, I tried" shrug straight to camera as confetti cannons pop in slow motion around him, glittering in the lasers. The crowd bursts out laughing and keeps jumping; camera cranes up over the flashing LED wall.
 AUDIO: An original, fictional electro-house club banger (not any existing song), four-on-the-floor kick at 128 BPM, side-chained pumping synths, rising build into a big drop at the entrance of THE GUY, chopped wordless vocal hooks, glossy 2010 radio-dance mix. Crowd cheers and claps on the beat. Beat 3: crowd gasps "oooh!". Beat 4: a loud DJ air horn as PINK GIRL rejects him. Beat 5: the drop hits full force under crowd laughter and cheers as the confetti flies. No spoken dialogue.
~~~~

### P2. Step-by-Step: How to Direct a Scene in Cinema Studio 4.0

- Model / settings: Cinema Studio 4.0 (up to 30 s, up to 1080p)
- Use-case: music video
- Context: The two examples below show the same scene run through Era selector twice, once set to the 2010s and once to the 1980s. Same characters, same choreography, same rejection beat by beat, different decade.

~~~~text
15-second multi-shot cinematic scene, 1980s dance-movie style. Shot on 35mm film: heavy visible film grain, halation blooming around practical lights, subtle gate weave, warm faded highlights, slight chromatic softness, the texture of an early-80s theatrical print. Location: a retro discotheque with a glowing red, white and blue checkerboard illuminated dance floor, chrome railings, red tufted leather booths, mirror balls and tinsel garlands overhead, starburst lens flares from the rig lights.
 CHARACTERS (match the attached reference images exactly, keep faces, hair and outfits consistent across all shots): GOLD GIRL: young woman, voluminous brunette 70s blowout, gold sequin sleeveless top over a mustard long-sleeve, orange high-waisted flared pants, gold platform shoes, large gold hoop earrings. PINK GIRL: young woman, short brunette bob with bangs, hot-pink satin top trimmed with pink marabou feathers, silver sequin mini skirt, long pink gloves with feather cuffs, leopard-print boots. THE GUY: young man with a large afro, thin mustache and soul patch, amber-tinted aviator glasses, light-blue suit jacket over a cream wide-collar shirt, black flared trousers, gold hoop earring. A background crowd of era-dressed extras rings the dance floor behind the chrome railings, watching, clapping on the beat and mirroring the moves.
 BEAT 1, THE FLOOR (0-3s): Crane shot sweeps down from the mirror balls toward the glowing floor, then a fast crash zoom onto GOLD GIRL and PINK GIRL dancing side by side in perfect sync at the center, hips and shoulders hitting every beat. The crowd behind the rails claps along.
 BEAT 2, THE ENTRANCE (3-6s): Whip pan to THE GUY sliding into frame on his knees across the lit tiles, popping up into a confident funky strut. Low-angle dolly follows him as he points finger-guns at the girls. Extras hoot and cheer.
 BEAT 3, FIRST ATTEMPT (6-9s): Quick cuts on the beat. He spins around GOLD GIRL, mirroring her moves, leaning in with a smug grin and offering his hand mid-move. Snap zoom to her face: she raises an eyebrow, spins out of his reach and turns her back on him without missing a step. Crowd goes "oooh".
 BEAT 4, SECOND ATTEMPT (9-12s): Undeterred, he moonwalk-glides over to PINK GIRL, drops a flashy pose, lowers his aviators and winks. Snap zoom to her deadpan face; she flips her feather-trimmed glove in a dismissive "talk to the hand" gesture and dances away to join GOLD GIRL.
 BEAT 5, DOUBLE REJECTION (12-15s): Wide shot: both girls stand side by side, arms crossed, shaking their heads in comic unison while still bouncing to the beat. THE GUY shrugs an exaggerated "well, I tried" shrug to the camera. The surrounding crowd bursts out laughing and keeps dancing. Freeze-frame on his sheepish grin, film grain heavy, image flickers like a projected print, classic 80s comedy ending.
 AUDIO: An original, fictional upbeat funk-disco instrumental (not any existing song), punchy slap bass, four-on-the-floor drums, bright brass stabs, wah-wah guitar, around 118 BPM, mixed like a vintage vinyl record with warm tape saturation. Crowd claps land on the beat. Beat 3: crowd gasps "oooh!". Beat 4: a short vinyl record-scratch as PINK GIRL rejects him. Beat 5: warm crowd laughter and cheers; the music hits a triumphant brass sting on the freeze-frame. No spoken dialogue.
~~~~

