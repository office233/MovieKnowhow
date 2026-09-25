# How To Create a Talking AI Avatar in Claude with Higgsfield MCP (Full Workflow + Prompts)

- Source: https://higgsfield.ai/blog/talking-ai-avatar-inside-claude
- Byline: Higgsfield · Aug 12, 2026 · 9 min · Last updated: 3w ago
- Prompts extracted: 12

## Notes

**Topic:** building a reusable talking AI avatar entirely in a Claude chat via Higgsfield MCP (Aug 12 2026).

**Four layers:** character (Soul 2.0 — fictional person + varied reference set) -> identity (**Soul ID**, trained once; then called by name, no reference re-attached) -> voice (**Seed Audio** preset or your clone, reusable) -> talking clip (**Seedance 2.5**: start frame + audio file + prompt -> lip-synced video). (AI Influencer is the one-flow alternative.)

**7 steps:**
1. Create the character: one base face, then the same person in varied poses/angles/framings incl. a full-height shot and different expressions.
2. Ask Claude to train Soul ID — it opens the upload window in chat; **20-80 photos**; ~10 min; status in chat.
3. Start frame per scene (Soul 2.0 2K): sets scene, outfit, framing; the video keeps all but the performance static. **Generate with "lips gently closed"** — speech animates more cleanly from a neutral mouth.
4. Voice: ask Claude for voice options (20 presets with previews; used "Delia"), or clone from 10 s-3 min of audio (only your own/permitted voice).
5. Speech: Seed Audio priced by length (~10 s ≈ 1 cr, ~20 s ≈ 2.3, ~26 s ≈ 3.8); cost shown first; audio lands in uploads.
6. Render: start frame + audio + a **performance prompt written against the script beat by beat** (name the exact lines where a gesture lands) -> Seedance 2.5 syncs lips. Validate one clip before making a series.
7. Reuse: each new clip needs only script + start frame + performance prompt (kitchen, thrift rack, balcony examples below). Keep framing consistent if clips share a feed.

**Costs:** Soul 2.0 images 0.125 cr each; Soul ID 25 cr once; speech 1.3-2.3 cr per script; Seedance 2.5 14 s 720p ≈ 91 cr per clip; 4-clip series ≈ 400 cr. MCP always uses credits (no unlimited) — start sessions with "Before generating anything, tell me the credit cost and wait for my confirmation." Claude shows confirmations; files live in Higgsfield Assets (tagged MCP). Translation/dubbing also available via MCP.

## Prompts (verbatim)

### P1. Step 3: Generate the start frame

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: Each talking clip is built on one still: the start frame. It sets the scene, the outfit and the framing, and the video model keeps everything in it static except the performance. The first clip in this series is a bookshelf monologue, so the start frame puts the character in an armchair with a book:

~~~~text
Horizontal 16:9 talking-head portrait, chest-up framing, subject centered. Young woman in her mid-20s with long voluminous light-brown curls, fair freckled skin, light blue-grey eyes, strong straight eyebrows, seated in a worn fabric armchair, looking directly into the camera, calm soft expression, lips gently closed. Wearing a cream button-up shirt with a chunky pearl necklace, no jacket, a closed hardcover book resting on the armrest, hands relaxed. A filled wooden bookshelf behind her, soft even window daylight. Authentic phone-camera photo: true-to-life pore-level skin with natural texture and fine vellus hair, no beauty-filter smoothing, no retouching, faint true sensor noise, deep focus. Single frame, one person only, no text, no watermark.
~~~~

### P2. Step 5: Generate the avatar's speech

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: Seed Audio prices speech by script length, and Claude shows the estimated cost before anything is generated: a script around 10 seconds runs about 1 credit, around 20 seconds about 2.3, around 26 seconds about 3.8. The first clip's script, written for roughly 14 seconds of speech:

~~~~text
I finished four books this month and remember maybe ten pages total. And that's fine. Reading isn't a memory test — it's just a nicer place to put your attention than a feed.
~~~~

### P3. Step 6: Render the talking clip

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: Three elements go into the generation: the start frame, the audio file, and a video prompt. The prompt is where the clip stops being generic: it is written against the script, beat by beat, so the performance lands on specific lines rather than looping stock gestures. Seedance 2.5 renders the clip with lip movement synced to the track:

~~~~text
Static locked-off horizontal talking-head video, camera fixed on a tripod, framing identical to the start frame from first to last frame. The exact woman from the start frame — mid-20s, long light-brown curls, cream shirt, pearl necklace, seated in an armchair with a bookshelf behind her, closed book on the armrest — speaks directly into the lens for the entire clip, lips in precise sync with the spoken words. Performance: on the confession about forgetting pages a self-deprecating half-smile with a light eye-roll upward and back to the lens; on "and that's fine" a calm reassuring micro head-shake, shoulders relaxing; on the closing thought she leans in a few centimeters, voice-matched softening of the eyes, thoughtful warm expression. Hands stay resting, only fingers shifting slightly on the armrest. Natural blinks, gentle breathing. In the final second she settles into a quiet content smile. Background completely static, soft window daylight, authentic phone-video look, true-to-life skin texture, faint sensor noise, deep focus.
~~~~

### P4. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A kitchen clip about a phone-free evening.

~~~~text
New rule at my place: the phone sleeps in the kitchen. First week was rough, not gonna lie. Now my evenings are about forty percent longer. Turns out boredom was the feature, not the bug.
~~~~

### P5. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A kitchen clip about a phone-free evening.

~~~~text
Horizontal 16:9 talking-head portrait, chest-up framing, subject centered. Young woman in her mid-20s with long voluminous light-brown curls, fair freckled skin, light blue-grey eyes, strong straight eyebrows, standing at a kitchen counter in the evening, looking directly into the camera, cozy calm expression with a hint of a smile, lips gently closed. Wearing a plain grey knit sweater, a ceramic mug on the counter beside her, no phone anywhere. Warm dim tungsten pendant light from above, quiet muted kitchen behind her. Authentic phone-camera photo: true-to-life pore-level skin with natural texture and fine vellus hair, no beauty-filter smoothing, no retouching, faint true sensor noise, deep focus. Single frame, one person only, no text, no watermark.
~~~~

### P6. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A kitchen clip about a phone-free evening.

~~~~text
Static locked-off horizontal talking-head video, camera fixed on a tripod, framing identical to the start frame from first to last frame. The exact woman from the start frame — mid-20s, long light-brown curls, grey knit sweater, evening kitchen with warm pendant light and a ceramic mug on the counter — speaks directly into the lens for the entire clip, lips in precise sync with the spoken words. Performance: on the "new rule" opening a slight conspiratorial lean toward the camera, eyebrows raised; on "rough, not gonna lie" an honest short laugh-exhale with eyes briefly closing; on the closing line a satisfied slow nod and a relaxed settled smile, one hand briefly wrapping the mug on the counter and releasing it. Natural blinks, gentle breathing, cozy unhurried energy throughout. In the final second she settles into a calm closed-mouth smile. Background completely static, warm dim tungsten light, authentic phone-video look, true-to-life skin texture, faint sensor noise, deep focus.
~~~~

### P7. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A thrift-find clip by the clothing rack.

~~~~text
This jacket? Twelve dollars, flea market, smelled like someone's garage. Three years later it's the most complimented thing I own. Moral of the story: the best pieces are the ones nobody else wanted.
~~~~

### P8. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A thrift-find clip by the clothing rack.

~~~~text
Horizontal 16:9 talking-head portrait, chest-up framing, subject centered with the room visible on both sides. Young woman in her mid-20s with long voluminous light-brown curls, fair freckled skin, light blue-grey eyes, strong straight eyebrows, looking directly into the camera, relaxed friendly expression, lips gently closed. Wearing a distressed brown leather biker jacket over a cream button-up shirt with a chunky pearl necklace. Behind her a home clothing rack with a few muted vintage pieces on wooden hangers, soft even window daylight from the left. Authentic phone-camera photo: true-to-life pore-level skin with natural texture and fine vellus hair, no beauty-filter smoothing, no retouching, faint true sensor noise, deep focus. Single frame, one person only, no text, no watermark.
~~~~

### P9. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A thrift-find clip by the clothing rack.

~~~~text
Static locked-off horizontal talking-head video, camera fixed on a tripod, framing identical to the start frame from first to last frame. The exact woman from the start frame — mid-20s, long light-brown curls, distressed brown leather biker jacket, cream shirt, pearl necklace, home clothing rack behind her — speaks directly into the lens for the entire clip, lips in precise sync with the spoken words. Performance: on the opening line she glances down at her jacket lapel and gives it a light one-hand tug, playful proud look; mid-clip a quick amused nose-wrinkle grimace at the memory of the smell, eyebrows up; on the closing moral a warm easy smile with a small one-shoulder shrug, hand already out of frame. Natural blinks, gentle breathing motion, small head tilts on emphasis. In the final second she settles into a soft closed-mouth smile. Background completely static, soft even daylight, authentic phone-video look, true-to-life skin texture, faint sensor noise, deep focus.
~~~~

### P10. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A balcony clip in defense of cloudy days.

~~~~text
Everyone's chasing golden hour. Give me a grey, overcast Tuesday instead — soft light, empty streets, coffee that stays warm in your hands. Cloudy cities are criminally underrated, and I will die on this hill.
~~~~

### P11. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A balcony clip in defense of cloudy days.

~~~~text
Horizontal 16:9 talking-head portrait, chest-up framing, subject centered with the city visible on both sides. Young woman in her mid-20s with long voluminous light-brown curls, fair freckled skin, light blue-grey eyes, strong straight eyebrows, standing on an apartment balcony, looking directly into the camera, calm confident expression, lips gently closed, a few curls lifted by light wind. Wearing a distressed brown leather biker jacket over a cream button-up shirt with a chunky pearl necklace. Flat grey overcast sky, muted city rooftops behind her, even shadowless daylight. Authentic phone-camera photo: true-to-life pore-level skin with natural texture and fine vellus hair, no beauty-filter smoothing, no retouching, faint true sensor noise, deep focus. Single frame, one person only, no text, no watermark.
~~~~

### P12. Step 7: Reuse the same avatar across multiple videos

- Model / settings: Claude + Higgsfield MCP: Soul 2.0 (character + 2K start frames), Soul ID, Seed Audio (voice "Delia"), Seedance 2.5 (14 s 720p talking clip, 16:9)
- Use-case: UGC
- Context: A balcony clip in defense of cloudy days.

~~~~text
Static locked-off horizontal talking-head video, camera fixed on a tripod, framing identical to the start frame from first to last frame. The exact woman from the start frame — mid-20s, long light-brown curls, brown leather biker jacket, cream shirt, pearl necklace, balcony with flat grey sky and muted rooftops behind her — speaks directly into the lens for the entire clip, lips in precise sync with the spoken words. Performance: on the golden-hour line a light dismissive flick of one hand rising briefly into frame and dropping out; mid-clip her gaze drifts contentedly a touch off-lens toward the sky while listing the small pleasures, then returns to the lens; on the closing declaration a mock-serious firm slow nod that breaks into a small grin. A few curls move in light wind, everything else static. Natural blinks, gentle breathing, small head tilts on emphasis. In the final second she settles into a soft closed-mouth smile. Even shadowless daylight, authentic phone-video look, true-to-life skin texture, faint sensor noise, deep focus.
~~~~

