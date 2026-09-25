# Genjutsu community presets (/higgsfield-genjutsu-presets)

Sources:
- https://higgsfield.ai/higgsfield-genjutsu-presets

Genjutsu itself is described in [../../features/tools/genjutsu.md](../../features/tools/genjutsu.md) (Motion Transfer and Object Swap on an existing 4-30 s video, up to 30 reference images). This page is the **community preset gallery**: 8,327 community presets in total; the first 20 are embedded. Each preset = a source video + the prompt the creator used + one or more result variants, so you can "recreate" it with your own references.

| Preset | Mode | Aspect | Source clip (s) | Variants | Description |
|---|---|---|---|---|---|
| Studio Rap Performance | motion-control | 16:9 | 24.0 | 3 | Two people perform rhythmic gestures and lip-sync at a hanging microphone within a vibrant studio setting. |
| Temple Staircase Chorus | motion-control | 16:9 | 26.6 | 3 | A central figure in a black suit leads a large group of dancers through synchronized choreography on a stone staircase at night. |
| Synchronized Crowd Bow | motion-control | 16:9 | 28.0 | 3 | A central character smokes and walks before a large group of people who perform a perfectly timed, deep bow in unison. |
| Studio Rap Duo | motion-control | 16:9 | 23.0 | 3 | Two characters stand side-by-side performing synchronized hand gestures and vocal movements in front of a studio microphone. |
| Pet Zoom Montage | motion-control | 9:16 | 12 | 3 | Animate your pet through a series of dynamic zoom-ins and quick cuts set within a cozy living room. |
| Urban Style Rotation | motion-control | 9:16 | 13.4 | 3 | A dynamic montage showcases a sequence of diverse streetwear outfits on an urban street with graffiti and industrial architecture. |
| Carpool Chorus | motion-control | 16:9 | 20.0 | 3 | Transform four people into a vibrant musical group singing and dancing together inside a moving vehicle. |
| Sedan Garage Drift | replace-objects | 9:16 | 10 | 3 | Replace a racing car with a standard white sedan as it performs high-speed drifts and spins in a nighttime parking garage. |
| Corporate Executive Recast | motion-control | 3:2 | 17.7 | 3 | Transform into a fast-talking executive by mapping your likeness onto a series of high-energy office and lifestyle scenes. |
| Convertible Car Singalong | motion-control | 16:9 | 18.4 | 3 | Two characters drive at night in an open-top car, performing an enthusiastic song with animated facial expressions and head movements. |
| Studio Vehicle Orbit | motion-control | 9:16 | 20 | 3 | A dynamic, continuous camera sequence pans across a luxury vehicle's exterior details and interior cabin before revealing a person standing alongside. |
| Pet Poses Montage | motion-control | 9:16 | 12.0 | 3 | Showcase your pet from multiple angles and distances with rhythmic cuts and a dramatic final close-up. |
| Shower Room Ensemble | motion-control | 16:9 | 29.0 | 3 | Transform a group of figures into a coordinated dance crew performing synchronized choreography inside a vibrant, pink-tiled shower room. |
| Mirror Pose Routine | motion-control | 9:16 | 7.6 | 3 | A subject stands before a white door and adjusts their hair while posing for a handheld mobile device recording. |
| Choral Leader Swap | motion-control | 9:16 | 30.0 | 3 | Place a central subject in front of an organized crowd while replacing the entire background ensemble with a custom character reference. |
| Formal Studio Motion | motion-control | 9:16 | 17.6 | 3 | Animate a professional portrait with subtle head tilts and facial expressions while maintaining a composed studio atmosphere. |
| Urban Suit Swapping | motion-control | 9:16 | 10.0 | 3 | Swap a subject’s face and attire to recreate a street-side video while following the original character’s precise movements and poses. |
| Noir Portrait Recast | motion-control | 9:16 | 14.9 | 3 | Transform a monochrome scene by swapping the main character with a new face while maintaining the cinematic lighting and smooth movements. |
| SUV Jump Trick | motion-control | 9:16 | 11.9 | 3 | Recast yourself as a spectator while a custom vehicle performs a dramatic jump in the background of a rural field. |
| Boutique Sidewalk Stride | motion-control | 9:16 | 8.1 | 3 | A stylish subject walks across an urban setting while carrying branded shopping bags that swing with realistic momentum. |

How the good presets are written (pattern to copy):
1. Declare the motion source first: "Use @Video as the primary motion reference" / "performs the exact same movements as the person in <<<video_1>>>".
2. Say what must be preserved verbatim: choreography, formations, timing, camera movement, framing.
3. Map each reference image to a role: `<<<image_1>>>` = new performer (identity), `<<<image_2>>>` = location or group-style reference.
4. Describe the new look (wardrobe, set, lighting, genre look) in one paragraph.
5. End with priorities and negatives: "Prioritize the original choreography above all other changes. No face morphing, identity drift, distorted bodies, extra limbs, floating feet".
Several community prompts are in Korean or Russian; Genjutsu accepts non-English prompts.

## Prompts

13 new verbatim prompt(s) below.

### Studio Rap Performance

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 24.0 s, 16:9; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
keep Everything the same in the video just replace the faces with the two people in the 2 images provided.
```

### Temple Staircase Chorus

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 26.6 s, 16:9; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
Use @Video as the primary motion reference. Preserve the original STORM II synchronized choreography, group formations, body movements, timing, rhythm, pacing and camera movement as faithfully as possible. Do not invent new choreography, walking or posing.

Replace the central performer with <<<image_1>>>. Keep his face, identity, body proportions and appearance consistent throughout. He wears a black Yakuza-inspired suit, black shirt and black sunglasses.

Use <<<image_2>>> as the location and group-style reference. Rebuild the scene on the Japanese temple staircase at night, with wet stone steps, warm lanterns, mist and cinematic reflections. The surrounding dancers wear matching white suits with black shirts and black ties while maintaining the original formations and synchronized movements.

Photorealistic cinematic music-video look. Preserve the original camera movement and framing. Prioritize the original synchronized dance choreography above all other changes. No face morphing, identity drift, distorted bodies, extra limbs, floating feet or random movements.
```

### Synchronized Crowd Bow

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 28.0 s, 16:9; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
Use the uploaded reference video as the exact motion, choreography, timing, composition, and camera reference.
MAIN CHARACTER:
Replace ONLY the single central main character with the person shown in Character Reference 1.
The central main character must exactly match Character Reference 1 throughout the entire video.
Preserve the exact facial identity, facial features, hairstyle, skin tone, body proportions, clothing, and overall appearance of Character Reference 1.
The central character must remain clearly distinguishable from all surrounding characters at all times.
SURROUNDING CHARACTERS:
Replace ALL surrounding background people with the characters shown in Character Reference 2.
Every surrounding person must consistently match Character Reference 2 in clothing, headwear, mask, colors, body proportions, and overall appearance.
Do NOT apply Character Reference 2 to the central main character.
Do NOT apply Character Reference 1 to any surrounding character.
ACTION AND CHOREOGRAPHY:
Reproduce the exact actions, body movements, choreography, poses, timing, rhythm, and synchronization from the original reference video.
The surrounding crowd must perform the same synchronized group movements and synchronized deep bowing actions shown in the reference video.
The central main character must perform only the movements of the original central character.
Do not invent new gestures, movements, interactions, or choreography.
IDENTITY LOCK:
Keep the identity of the central character completely consistent from the first frame to the final frame.
Do not change, morph, merge, distort, duplicate, or swap the central character's face.
Do not replace the central character with any background character.
Keep all background characters visually consistent throughout the entire sequence.
CROWD CONSISTENCY:
Preserve the original number, placement, spacing, formation, depth, and relative positions of the surrounding people.
Do not add or remove people.
Do not randomly move people between positions.
Do not merge bodies or duplicate characters.
MOTION LOCK:
Strictly preserve the original video's motion.
Preserve the exact body movements, movement direction, choreography, synchronization, pacing, rhythm, and action timing.
CAMERA AND FRAMING:
Keep the original camera angle, camera movement, camera position, focal length, perspective, depth of field, framing, composition, shot scale, and shot duration unchanged.
Follow every original camera movement exactly.
Do not introduce any new camera movement.
Do not re-frame, crop, zoom, rotate, tilt, or alter the original composition unless that exact movement exists in the reference video.
SCENE:
Preserve the original spatial arrangement, crowd formation, foreground-background relationship, and scene geometry.
Maintain natural lighting, realistic shadows, realistic human anatomy, and photorealistic textures.
TEMPORAL CONSISTENCY:
Maintain strong frame-to-frame consistency.
No flickering.
No face changes.
No clothing changes.
No disappearing characters.
No duplicated people.
No warped hands or limbs.
No sudden changes in body proportions.
FINAL REQUIREMENT:
The final video must follow the reference video's original motion, choreography, timing, crowd formation, camera work, and editing as closely as possible, while changing only the visual identities specified by Character Reference 1 and Character Reference 2.
```

### Studio Rap Duo

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 23.0 s, 16:9; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
The character from <<<image_1>>> <<<image_2>>> performs the exact same movements as the persons in <<<video_1>>>, matching every motion, timing and rhythm smooth grounded movement, consistent lighting, camera and framing follow <<<video_1>>>, no identity drift, no extra people, the left person should be replaced with <<<image_1>>>  and right person with <<<image_2>>>
```

### Urban Style Rotation

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 13.4 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: character/consistency

```text
배경은 베를린 패션 거리 느낌으로 힙한곳으로 찾아서 변경옷은 내가 보낸 사진 옷을 모두 사용해서 
사람이 한번 한착장씩만 나오면 좋겠러 무빙자연스럽게
처음에 사람이 3-4명이 나오잖아 그거 너무 별로야 
처음부터 한착장 한사람 한 스타일만 보여주고 화면이 변하면서 다른착장을 보여주는걸로 변경해 
그리고 카메라 각도를 아래에서 위로 찍은 얼굴 나오는 부분은 썬글리스 낀 얼굴로 교체해서 다시 만들어줘
```

### Corporate Executive Recast

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 17.7 s, 3:2; image refs referenced as <<<image_N>>> / @Video
- Use-case: character/consistency

```text
plain, unbranded clothing with no logos, text, or watermarks.
```

### Convertible Car Singalong

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 18.4 s, 16:9; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
The character from <<<image_1>>> <<<image_2>>> performs the exact same movements as the person in <<<video_1>>>, matching every motion, timing and rhythm smooth grounded movement, consistent lighting, camera and framing follow <<<video_1>>>, no identity drift, no extra people.
```

### Studio Vehicle Orbit

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 20 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
REFS: <<<image_1>>> base scene (car, woman, studio, everything) · <<<image_2>>> car seen from all angles · <<<image_3>>> car close-up · <<<image_4>>> car interior · <<<image_5>>> the woman · <<<video_1>>> the camera movement to copy.

Copy the exact camera movement of <<<video_1>>> and apply it to our scene from the images — the green car, the woman leaning on it, the studio. Render it photoreal. No cuts, just one single continuous camera movement from start to finish.
```

### Choral Leader Swap

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 30.0 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
1. CENTER CHARACTER: Replace ONLY the single main character standing in the exact center of the group with the character from <<<image_1>>>. The center position, body placement, scale, pose, movement, and screen position must remain consistent with the original video. 2. SURROUNDING CHARACTERS: Replace EVERY OTHER PERSON surrounding the center character with the character from <<<image_2>>>. This includes ALL visible people around the center character: front row, left and right sides, middle rows, and background. Do NOT leave any of the original surrounding people unchanged. Every surrounding person becomes the same <<<image_2>>> character, repeated as identical copies. 3. IDENTITY LOCK: Keep each replacement character's face, hairstyle, skin tone, body proportions, outfit, and color palette exactly as shown in the reference images, in every single frame. No morphing, no identity drift, no blending between image_1 and image_2. 4. MOTION AND TIMING: Preserve the original choreography frame by frame. Each replaced character follows the exact same body movement, limb motion, head turn, facing direction, walking speed, and timing as the original person they replace. Do not add, remove, or re-time any motion. 5. CAMERA AND FRAMING: Keep the original camera angle, camera movement, focal length, depth of field, and shot duration unchanged. Do not re-frame, crop, zoom, or stabilize. 6. ENVIRONMENT: Keep the background, set, props, floor, and all non-human elements 100% identical to the original video. Only the people are replaced. 7. LIGHTING INTEGRATION: Match the original lighting direction, intensity, color temperature, shadows, and reflections onto the new characters. Contact shadows and ground contact must stay physically correct, so the characters look natively filmed in the scene, not pasted on. En vez de estar fumando haz que esté tomando una bebida Monster
```

### Formal Studio Motion

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 17.6 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: character/consistency

```text
Кадр на женщину с фото.Без изменений все движения позы мимику,направление взгляда, кадровые свет атмосферу музыка и звук
```

### Urban Suit Swapping

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 10.0 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
“Create the exact same image — take the image I’ve shown you and modify it: add black glasses to it make a exact same dress what I give to you in image

 Replace  the character 

The source video should remain visually unchanged apart from the character replacement. Preserve the original scene, location, background, camera framing, lens perspective, camera movement, lighting, choreography, timing, props, atmosphere,

Make the person from my reference perform the exact actions of the original character. Follow the original character’s body movements, poses, gestures, head direction, facial expressions, and timing as closely as possible.

Maintain the person’s identity throughout the entire sequence. Keep the same facial structure, recognizable features, hairstyle, skin tone, physique, and overall appearance consistent from beginning to end.

The replacement must naturally follow the original character’s head position and body movement from every camera angle. Ensure the face is properly aligned with the movement and perspective of each shot.

Do not modify the female character, environment, background, props, camera behavior, lighting, choreography, or any other part of the source footage.

The final video should look like the original scene was filmed with the reference person playing the male character, with a seamless and photorealistic result.
```

### SUV Jump Trick

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 11.9 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
Change the character from <<<video_1>>> using the identity and appearance from <<<image_1>>>, making sure the character wears black sunglasses matching the style of the main character in the video while keeping all other facial and visual features from <<<image_1>>> completely intact, and change the pickup truck using <<<image_2>>>
```

### Boutique Sidewalk Stride

- Source: https://higgsfield.ai/higgsfield-genjutsu-presets
- Model: Genjutsu (Motion Transfer)
- Settings: mode motion-control; source clip 8.1 s, 9:16; image refs referenced as <<<image_N>>> / @Video
- Use-case: music video

```text
Create an 8-second vertical fashion street-style video for PERSONE using the reference image as the subject/product look and the reference video as the driving motion. Preserve the burgundy PERSONE shopping bags as the hero element: same deep burgundy color, horizontal proportions, off-white fabric handles, and the thin elongated PERSONE logo style visible in the reference image. The woman walks briskly across frame with natural body mechanics while the bags swing realistically with momentum and paper physics. Match the reference video's candid lateral tracking, imperfect handheld framing, fast movement, natural daylight, slight motion blur, and spontaneous editorial street-style feel. Keep the outfit, scene mood, and product appearance consistent with the reference image. Do not deform the bags, do not alter or scramble the PERSONE wordmark, do not add extra text, extra bags, objects, or artificial camera effects. Realistic UGC-fashion aesthetic, natural social-media look, clean and premium, 9:16.
```
