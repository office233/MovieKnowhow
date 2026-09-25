# Alibaba Wan on Higgsfield (Wan 2.2 Animate, 2.5, 2.6, community)

Sources: https://higgsfield.ai/wan-2.6, /wan-ai-video (Wan 2.5), /wan-animate-ai-video (Wan 2.2 Animate), /wan-video (Wan 2.5 community, 12 publications with prompts + camera presets).

## Wan 2.6
- Up to 15 s in a single pass with native audio + phoneme-level lip-sync (talking heads without dubbing).
- Multi-shot narratives: describe the whole scene, the model handles camera transitions.
- Video reference / style transfer: keep a performance, change the world ("reshoots").
- Strong image-to-video identity retention (no face morphing / outfit changes); product realism with fluid dynamics and gravity.

## Wan 2.5
- Text- or image-to-video with synced voice/lip-sync/music/SFX; 480p/720p/1080p; up to 10 s per clip (stitch for longer). 2 free generations for new users (at time of page).
- Tip: add an image reference - it makes motion and framing more coherent.
- Camera presets usable with Wan 2.5 (from community data / Camera Controls hub): Through Object In/Out, Car Grip, Handheld, Dolly In, Eyes In, etc. (13 camera-control presets are `wan2_5_video`).

## Wan 2.2 Animate (motion transfer)
Upload a character image (photo, cartoon, mascot, comic hero) + a motion template video -> it transfers gestures and expressions onto the character.

## Wan 2.7 / 3.0 (from other pages)
- Wan 2.7: native audio, consistent characters, "9-grid I2V with auto..." (long-video FAQ), "precise framing and wide-angle scenes"; API $0.10/s (launch $0.05/s).
- Wan 3.0: up to 30 s, native audio, API $0.05/s (launch $0.025/s). Wan 3.0 Prime: up to 30 s, $0.068/s (launch $0.0476/s).

## Patterns in the Wan 2.5 community prompts
- They start "The scene starts with a medium shot of..." then describe environment **and ambient sounds**, then the action, and repeat "moves at normal speed" to prevent slow-mo drift.
- Camera preset is chosen in the UI and echoed in text ("The camera moves fast straight forward through a circular aperture..." for Through Object In; "fixed camera mounted low on the car's frame near the wheel" for Car Grip).
- 5 s or 10 s, 1080p, often with one reference image.

## Pages covered by this note

| Page title | URL | # verbatim prompts |
|---|---|---|
| Wan 2.6 AI Video Generator / Native Audio & 15s Storytelling | https://higgsfield.ai/wan-2.6 | 0 |
| Wan AI Video — Generate Videos with Wan Model / Higgsfield | https://higgsfield.ai/wan-ai-video | 0 |
| Wan 2.2 Animate — AI Video Animation Tool / Higgsfield | https://higgsfield.ai/wan-animate-ai-video | 0 |
| Higgsfield Wan 2.5 Community: explore AI video generation from creators worldwide | https://higgsfield.ai/wan-video | 12 |

## Verbatim prompts (12)

All prompts are also in [../PROMPTS.md](../PROMPTS.md) grouped by use-case.

### P203 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Through Object In; duration s 10; resolution 1080p | Use-case: cinematic film scene

```text
A sharply dressed young man in a black suit and white shirt sits thoughtfully on a vintage, worn leather armchair with visible tears on the cushion, his right hand resting near his chin and left hand relaxed on his lap, his expression serious and composed as he looks forward. The background reveals a warm terracotta-hued wall illuminated by a shaft of sunlight forming a clear geometric pattern. The camera moves fast straight forward through a circular aperture in the foreground, the edges of the aperture leaving the frame quickly as the scene opens into a spacious, quietly lit room with wooden furniture subtly blurred in the background, adding depth and texture. The young man remains still at normal speed, bathed in soft natural light highlighting his features and the texture of his clothes and chair, creating a cinematic atmosphere of quiet intensity.
```

### P204 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Handheld; duration s 10; resolution 1080p | Use-case: cinematic film scene

```text
The scene starts with a medium shot of a woman standing in an urban alley at night, illuminated by warm orange street lighting, holding a cigarette near her lips while simultaneously glancing down and interacting with her smartphone in her other hand. The gritty environment surrounds her with graffiti-covered walls and large industrial pipes, emitting faint ambient city sounds and distant traffic. She inhales from the cigarette and exhales smoke slowly, then looks thoughtfully at her phone. The handheld camera gently tracks forward, with a soft, fluid trembling effect that mimics subtle hand movement, capturing the raw and intimate mood of the moment in a cinematic and atmospheric style.
```

### P205 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Handheld; duration s 10; resolution 1080p | Use-case: cinematic film scene

```text
The scene starts with a medium shot of a man and woman walking side by side along a bridge at sunset, captured through a handheld camera with a slightly soft lens to create a gentle depth of field. The background shows warm pink and orange tones reflecting softly on their faces, complemented by street lamps casting a mild glow. They casually walk together, the man in a white shirt with a mustard-yellow tie carrying a brown jacket over his arm, while the woman wears a coral-pink sleeveless dress and holds a small beige clutch. A gentle breeze moves her hair slightly as they exchange natural smiles and gestures, engaging in intimate conversation. The camera moves steadily alongside them with subtle handheld trembles, slightly swaying and adjusting focus between their expressive close-ups and broader framing, capturing the rhythm of their interaction. The overall visual tone is cinematic and intimate, with realistic lighting, soft motion blur, and a smooth, immersive handheld tracking shot emphasizing the natural mood and warmth of the moment.
```

### P206 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Through Object In; duration s 10; resolution 1080p | Use-case: cinematic film scene

```text
The camera moves fast straight forward, flying through a smooth keyhole-shaped opening, leaving the edges of the door frame behind as it reveals a clear view of a man in a sleek black suit with white cuffs, seated on and leaning against a vintage brown leather chair inside a cozy room with a deep red wall and soft curtain light filtering in. The man rests his chin thoughtfully on his hand, his dark hair slicked back and his expression concentrated and serene as he remains still at normal speed. Brightly colored butterflies flutter gently near the chair, adding delicate, natural movement to the warm, intimate interior scene lit by soft, warm light casting subtle shadows. The camera continues past the keyhole, fully unveiling the scene beyond the narrow doorway.
```

### P207 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Through Object Out; duration s 5; resolution 1080p; reference images 1 | Use-case: product ad

```text
A group of four diverse young people posing in an industrial warehouse bathed in warm, late afternoon sunlight. A tall young man stands confidently on a rusted metal platform railing, wearing a white T-shirt, black cap, and white sneakers, holding a vibrant green, yellow, and black jacket draped over the railing. Nearby, a young woman with voluminous curly hair sits on the metal stairs, dressed in a denim jacket, white socks, and black shoes, calm and self-assured. Below them, a crouching tattooed young man in a black sleeveless shirt, black shorts, white sneakers, and a bright orange beanie stares intently toward the camera, while beside him, a young woman with shoulder-length black hair wears black overalls over a white T-shirt and black boots, hands in pockets, looking contemplative. The dimly lit background shows corrugated metal walls and scattered industrial elements. The camera fast dollies out backward through emerging new narrow, rust-colored metal gaps appearing close to its sides, revealing more of the gritty warehouse space and emphasizing strong structural lines. All figures move at normal speed.
```

### P208 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Car Grip; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
The scene starts with a close-up shot of a spinning car tire taken from a fixed, slightly shaky camera mounted low on the car's frame near the wheel, using a wide-angle lens to capture dynamic speed motion. The environment is a bright, bustling race track with blurred grandstands and asphalt streaking past underneath, filled with roaring engine sounds and rushing wind noise emphasizing high velocity. The car accelerates rapidly down the straight, causing visible vibration that subtly shakes the camera. The tire spins fast, dirt and rubber particles trace fleeting behind it as the car speeds forward. Engine roars and tire screeches rise in volume, immersing in the thrill of rapid motion. The camera remains locked to the car, capturing the forward rush and the powerful energy of racing.
```

### P209 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Car Grip; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
The scene starts with a medium close-up shot from a fixed camera mounted on the side of a vintage car's front right, angled slightly forward to capture the road ahead. The environment is a calm urban street lined with colorful brick buildings and parked cars on both sides, under a softly overcast sky with muted sunlight. The street is quiet except for the gentle sounds of the car engine and distant city ambiance. The car drives steadily straight down the street, passing by the parked cars and buildings in a smooth, continuous motion. The camera remains fixed and locked to the car’s frame, providing an immersive forward-facing perspective of the car’s journey through the city street, emphasizing the linear motion and urban setting with a natural, warm visual tone.
```

### P210 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Through Object Out; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
A stylish young man sits on a white tiled laundromat floor, legs spread casually, wearing black trousers, a patterned white shirt, a black and white scarf wrapped around his head, dark sunglasses, and shiny black dress shoes. He holds a yellow lollipop to his lips with one hand while the other lightly rests on the floor, his relaxed posture conveying calm confidence as he moves at normal speed. Behind him, three large industrial silver washing machines line the wall, their circular doors reflecting soft, cool ambient lighting that emphasizes the metallic surfaces and textured dials. A crumpled black leather jacket lies beside him on the floor, from which a small narrow gap near the jacket's edge appears from the left side of the frame, revealing new space close to the camera. The camera quickly dollies out backward through this little open gap, revealing more of the shiny laundromat machines and tiled floor, as ambient light creates subtle reflections and shadows enhancing the industrial setting's cool, modern aesthetic.
```

### P211 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Through Object In; duration s 5; resolution 1080p; reference images 1 | Use-case: product ad

```text
A young woman with long black hair and expressive glasses stands confidently within a large circular frame, wearing a white cropped tank top, dark blue cargo jeans, and colorful sneakers, adorned with chunky jewelry including a necklace, bracelet, and earrings, she moves her hands at normal speed adjusting her pants' belt. The camera moves fast straight forward through the circular frame, passing it to reveal a softly gradient pastel background with hues of pink, purple, and blue, the circular frame leaving the frame as the camera advances, capturing a clear view of the fashionably styled subject standing still at normal speed in a bright, modern studio setting illuminated by smooth, diffused lighting enhancing the colors and textures.
```

### P212 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Car Grip; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
The scene starts with a medium close-up shot from a fixed, static camera mounted inside a black car, focused on a man wearing a hood sitting inside the backseat at night. The city street outside is vividly lit with green and neon lights creating a dynamic urban nightscape with blurred vehicles and glowing signs rushing past. Inside the car, the man is handed a cigarette by an unseen passenger. He takes it, lights it, inhales deeply, and exhales smoke slowly while smiling and speaking softly about the cigarette. The car moves steadily through the city streets, the camera locked to the car's frame, capturing the changing neon-lit environment. Ambient city sounds mix with the quiet dialogue and the subtle crackle of cigarette smoke, creating an intimate yet vibrant urban night atmosphere.
```

### P213 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Dolly In; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
The scene starts with a medium shot from the side, capturing two stylishly dressed people in the foreground engaged in quiet conversation, their faces partially in profile, wearing dark suits and sunglasses under soft lighting. The background features a smooth blue backdrop. The camera performs a slow, steady dolly-in, smoothly advancing straight ahead toward the two individuals standing behind them. These two people, dressed in fashionable business attire, casually hold red lollipops and exchange subtle, playful glances as if quietly interacting. Soft ambient sounds and distant conversation murmurs fill the space, emphasizing the stylish, modern, and slightly mysterious atmosphere of the scene.
```

### P214 - Wan 2.5 community publication

- Page: https://higgsfield.ai/wan-video | Model: Wan 2.5 (wan2_5_video) | Settings: camera preset Dolly In; duration s 5; resolution 1080p; reference images 1 | Use-case: cinematic film scene

```text
The scene starts with a medium-wide shot from a straight-on angle using a professional camera with a standard lens, showing a group of six young people sitting and standing confidently on and around a bright turquoise sports car inside an industrial garage with textured concrete walls and a semi-transparent roof letting in natural light. The group all looks directly into the camera with confident expressions. The camera smoothly performs a slow dolly in, gradually moving closer to the central figure seated on top of the car, highlighting their intense gaze. The shot captures the detailed urban grunge atmosphere with ambient industrial sounds and muted city noises. The overall visual tone is modern, stylish, and edgy, emphasizing coolness and group unity.
```
