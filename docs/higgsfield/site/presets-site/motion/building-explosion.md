# Building Explosion — Higgsfield Motion preset

- **Category:** VFX · elemental & destruction
- **Use-case group:** cinematic film scene
- **What it does (site description, verbatim):** A building erupts in a massive blast, sending debris flying. Creates a powerful moment perfect for action scenes
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: elemental → Wan 2.5; explosion/destruction → Seedance 2.0 (or Sora 2, UI-only); grounded looks → Kling 3.0/2.6 + "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045 | `0d53b135-337d-4918-aaf4-2af7ecf4f045` | 120 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=0d53b135-337d-4918-aaf4-2af7ecf4f045 |
| https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17 | `e974bca9-c9eb-4cc8-9318-5676cc110f17` | -276 | isTopChoice | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=e974bca9-c9eb-4cc8-9318-5676cc110f17 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A glass skyscraper erupts in a massive blast, debris raining over the street.
```

Use it as: upload a start image that matches the scene, select motion preset **Building Explosion**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Entire building explodes · **Best for:** Disaster, action blockbuster

## Related presets

- **Mixes that use this preset:** [Building Explosion + Disintegration](building-explosion-plus-disintegration.md), [Car Chasing + Building Explosion](car-chasing-plus-building-explosion.md)
- **Same category (VFX · elemental & destruction):** [Car Explosion](car-explosion.md), [Fire Breathe](fire-breathe.md), [Flood](flood.md), [Head Explosion](head-explosion.md), [Powder Explosion](powder-explosion.md), [Sand Storm](sand-storm.md), [Set on Fire](set-on-fire.md), [Thunder God](thunder-god.md), [Wind to Face](wind-to-face.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/c31ec0d6-70c3-4955-b76a-78dff8798ca3.webp (320×182)
- Card preview, variant `e974bca9`: https://d1xarpci4ikg0w.cloudfront.net/961d20d4-0d21-4954-85f1-9ee85b72037d.webp

### Sample videos (13; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/7339b262-6273-44e9-bd57-35e2d4de2803 | https://static.higgsfield.ai/7339b262-6273-44e9-bd57-35e2d4de2803.mp4 | https://static.higgsfield.ai/7339b262-6273-44e9-bd57-35e2d4de2803.webp | https://d1xarpci4ikg0w.cloudfront.net/46473e86-0e9f-4335-a1cc-88e429f8ccff.webp (320×182) |
| 2 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e | https://static.higgsfield.ai/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e.mp4 | https://static.higgsfield.ai/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e.webp | https://d1xarpci4ikg0w.cloudfront.net/c860e644-c9c7-40fd-8eaa-615d3f1e91ed.webp (320×182) |
| 3 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/6d7152cd-c350-4370-8b2a-99c91543edab | https://static.higgsfield.ai/6d7152cd-c350-4370-8b2a-99c91543edab.mp4 | https://static.higgsfield.ai/6d7152cd-c350-4370-8b2a-99c91543edab.webp | https://d1xarpci4ikg0w.cloudfront.net/d4d5bd99-85a1-4070-8035-5a43ad36a139.webp (320×210) |
| 4 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/2959ee8c-5a0f-4192-8647-226f3e2027dc | https://static.higgsfield.ai/2959ee8c-5a0f-4192-8647-226f3e2027dc.mp4 | https://static.higgsfield.ai/2959ee8c-5a0f-4192-8647-226f3e2027dc.webp | https://d1xarpci4ikg0w.cloudfront.net/8e5aa27e-6b66-4ade-a5ae-301f5d8e05bb.webp (320×210) |
| 5 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/0a63e644-4883-408b-b086-79c89260267e | https://static.higgsfield.ai/0a63e644-4883-408b-b086-79c89260267e.mp4 | https://static.higgsfield.ai/0a63e644-4883-408b-b086-79c89260267e.webp | https://d1xarpci4ikg0w.cloudfront.net/f9b921dc-1962-486e-af00-e0213617d47d.webp (320×486) |
| 6 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/61d87cb4-8bb4-4253-9270-6617917af578 | https://static.higgsfield.ai/61d87cb4-8bb4-4253-9270-6617917af578.mp4 | https://static.higgsfield.ai/61d87cb4-8bb4-4253-9270-6617917af578.webp | https://d1xarpci4ikg0w.cloudfront.net/8c90afd5-cf7e-4f6b-aaff-2b7a8d4562c6.webp (320×182) |
| 7 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/b65e6f38-da70-4d9d-b9eb-3587d91c99ba | https://static.higgsfield.ai/b65e6f38-da70-4d9d-b9eb-3587d91c99ba.mp4 | https://static.higgsfield.ai/b65e6f38-da70-4d9d-b9eb-3587d91c99ba.webp | https://d1xarpci4ikg0w.cloudfront.net/8f6f78cf-2d4b-4330-8b08-355da69f1d71.webp (320×182) |
| 8 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/50096124-60ce-4696-89c3-c6ca5f7a92e6 | https://static.higgsfield.ai/50096124-60ce-4696-89c3-c6ca5f7a92e6.mp4 | https://static.higgsfield.ai/50096124-60ce-4696-89c3-c6ca5f7a92e6.webp | https://d1xarpci4ikg0w.cloudfront.net/93cabd5e-c47c-4f78-8964-e435be43bccb.webp (320×562) |
| 9 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/4ad230f9-31ca-4133-880a-ccc9d1fd5622 | https://static.higgsfield.ai/4ad230f9-31ca-4133-880a-ccc9d1fd5622.mp4 | https://static.higgsfield.ai/4ad230f9-31ca-4133-880a-ccc9d1fd5622.webp | https://d1xarpci4ikg0w.cloudfront.net/519e5130-4dd2-4f7b-bff3-4481cb626651.webp (320×182) |
| 10 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/b5475716-7ffa-4e91-b7e5-60ff8613d019 | https://static.higgsfield.ai/b5475716-7ffa-4e91-b7e5-60ff8613d019.mp4 | https://static.higgsfield.ai/b5475716-7ffa-4e91-b7e5-60ff8613d019.webp | https://d1xarpci4ikg0w.cloudfront.net/a0545e6c-e701-4d7b-9dcf-3026ab1defa9.webp (320×562) |
| 11 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65 | https://static.higgsfield.ai/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65.mp4 | https://static.higgsfield.ai/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65.webp | https://d1xarpci4ikg0w.cloudfront.net/787f4d7f-4452-4ca6-843e-d27dc5bc4e56.webp (320×182) |
| 12 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/2ba6022e-6254-4787-bbd7-36278ec2de3c | https://static.higgsfield.ai/2ba6022e-6254-4787-bbd7-36278ec2de3c.mp4 | https://static.higgsfield.ai/2ba6022e-6254-4787-bbd7-36278ec2de3c.webp | https://d1xarpci4ikg0w.cloudfront.net/6256ac42-2039-48dc-90b1-e4eb56987a30.webp (320×182) |
| 13 | https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/793c473d-d1c8-42b4-ad07-98c24619ac0f | https://static.higgsfield.ai/793c473d-d1c8-42b4-ad07-98c24619ac0f.mp4 | https://static.higgsfield.ai/793c473d-d1c8-42b4-ad07-98c24619ac0f.webp | https://d1xarpci4ikg0w.cloudfront.net/d6006514-c464-4a43-bf86-de3cfb0d47a5.webp (320×182) |

Source pages: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045, https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17. Crawled 2026-09.


## Real sample prompts (site)

13 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `793c473d-d1c8-42b4-ad07-98c24619ac0f`** (priority 13) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2ffe78f8-bfbd-4c3c-ba95-547118390b31.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/823a3d37-6e81-4947-b7e4-1c5183f9bf0a.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/793c473d-d1c8-42b4-ad07-98c24619ac0f

```text
Two shadowy figures, a man and a woman, stand side by side, their silhouettes framed by expansive glass windows overlooking a vast cityscape bathed in a deep blue twilight. Inside the dimly lit room, sleek modern furniture evokes a sense of calm, contrasting starkly with the ominous skyline that hints at chaos outside. The atmosphere is thick with anticipation, their stillness betraying an underlying tension as flickering lights punctuate the horizon. As they gaze out, a palpable energy builds, foreshadowing the impending explosion that will shatter this serene moment. The cool, subdued colors emphasize their solemn expressions, drawing viewers into a narrative charged with emotion and impending action.
```

- **Sample `2ba6022e-6254-4787-bbd7-36278ec2de3c`** (priority 12) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ee51b850-fbc1-4373-a6fd-6c29efa7ecc4.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/38e92cfb-6739-4ddf-9685-772bc4a362c9.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/2ba6022e-6254-4787-bbd7-36278ec2de3c

```text
On a sleek modern balcony at dusk, two aliens recline in sleek loungers, exuding a calm that sharply contrasts the turmoil outside. The golden rays of sunset illuminate the sharp angles of the surrounding skyscrapers, casting long shadows that suggest both depth and foreboding. Suddenly, a thunderous explosion erupts from a nearby building, sending shards of glass flying and creating a violent burst of orange and smoke against the cobalt sky. Panic grips the aliens; their expressions shift from relaxation to bewildered fear as they scramble to react, their silhouettes stark against the chaos behind them. The camera captures their frantic movements, weaving through the tension of the moment, revealing the immense height above the city and the perilous drop below.
```

- **Sample `608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65`** (priority 11) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/8ca177bd-6671-4d3b-9d0d-6251abbe7fa9.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c2b8df8c-6efe-4db4-b010-985992254463.mp4
  - page: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/608431d2-a7cf-4a7d-bf49-9c9c4f5a5e65

```text
A monk in a flowing orange robe sits calmly in a serene lotus position, eyes gently closed, exuding an aura of tranquility. The room around him erupts in a spectacle of chaos, with flames and debris suspended in the air, creating a stark contrast against his poised demeanor. Soft rays of golden light filter through the ancient wooden beams of the temple, highlighting the swirling dust and smoke. Each flicker of the flames reflects on his serene face, revealing a profound inner strength amidst the tumult. The intricate details of the temple create a rich backdrop, accentuating the emotional gravity of this moment, as the air vibrates with intense energy.
```

- **Sample `b5475716-7ffa-4e91-b7e5-60ff8613d019`** (priority 10) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/99859624-4a5a-4fcc-8dbb-48f8b8445177.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4228087e-cb97-4e55-a9d7-c118627d6873.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/b5475716-7ffa-4e91-b7e5-60ff8613d019

```text
People explode into chaos as the grand building erupts in flames, sending shards of stone and dust into the gray sky. The once orderly crowd now flees in a frenzied panic, faces twisted in fear and desperation as they scatter in all directions. The vibrant marketplace, filled with colorful stalls and wooden artifacts, transforms into a scene of chaos and confusion, shadows flickering against the blazing backdrop. The atmosphere is thick with smoke, punctuated by the sharp sounds of collapsing masonry and horrified cries. A sense of urgency permeates the air as onlookers frantically seek safety, their movements chaotic and disorganized. In this moment, the historic beauty of the square contrasts starkly with the unfolding disaster, heightening the emotional weight of the scene.
```

- **Sample `4ad230f9-31ca-4133-880a-ccc9d1fd5622`** (priority 9) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cf1f2311-4729-49b5-8267-42ca6e9b6c59.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/4809f078-e846-4598-a22a-89f0b8d98cf0.mp4
  - page: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/4ad230f9-31ca-4133-880a-ccc9d1fd5622

```text
In a moment of imminent chaos, two figures stand close together, their expressions a mixture of shock and determination. The towering glass building around them reflects the harsh light of day, its towering height becoming a symbol of impending disaster. Suddenly, a rumble reverberates through the air, and the ground shakes beneath their feet as the building explodes in a fiery eruption. Panic ensues as people scramble in all directions, their faces filled with terror and urgency. Flashes of orange and red light pierce the atmosphere, casting dramatic shadows that dance across the stillness of their moment. The air thickens with smoke and debris, a chaotic tableau of fear and survival unfolding.
```

- **Sample `50096124-60ce-4696-89c3-c6ca5f7a92e6`** (priority 8) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/5d863c29-7646-48f7-913a-9995d15b6442.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/2a4f9a6d-530a-4a9a-bd77-29103805198a.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/50096124-60ce-4696-89c3-c6ca5f7a92e6

```text
A young woman with long hair and striking makeup holds her phone up for a selfie, exuding confidence and playfulness. Suddenly, an explosion erupts from a nearby building, casting a fiery glow through the glass window, illuminating her face with shock and fear. The camera begins to shake slightly, creating a sense of chaos as her expression shifts from playful to terrified. Outside, smoke billows and debris scatters, contrasting the sleek modernity of the skyscraper backdrop. The atmosphere thickens with tension as sirens wail in the distance, and her heart races, capturing the essence of survival amid the impending danger.
```

- **Sample `b65e6f38-da70-4d9d-b9eb-3587d91c99ba`** (priority 7) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/c240f67c-031b-4b76-9a08-ee78a5c8d350.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/31780621-4df7-422b-892b-7a720820d164.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/b65e6f38-da70-4d9d-b9eb-3587d91c99ba

```text
Girl presses button and screams angrily, the station behind her explodes
```

- **Sample `61d87cb4-8bb4-4253-9270-6617917af578`** (priority 6) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/e901c1d0-2fb3-4592-beff-80d9e57bbe03.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8f489e05-527c-4052-991a-32e21c3d3bbe.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/61d87cb4-8bb4-4253-9270-6617917af578

```text
Helicopter shoots building with machine gun and it explodes
```

- **Sample `0a63e644-4883-408b-b086-79c89260267e`** (priority 5) — Wan 2.5 motion preset, steps=20, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/403a0c69-d254-4027-b0e3-34701bb134f5.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/e8a95a26-105f-4ab2-a897-0e35ac423205.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/0a63e644-4883-408b-b086-79c89260267e

```text
Magician casts spell and city in the background explodes to ashes
```

- **Sample `2959ee8c-5a0f-4192-8647-226f3e2027dc`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/055411ae-2743-41a7-8fa8-c2ede635e18b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/1e720543-8073-4f09-b8df-3ecd46bc351d.mp4
  - page: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/2959ee8c-5a0f-4192-8647-226f3e2027dc

```text
A coastal artillery fort nestled against towering white cliffs, its concrete walls reinforced with dark, weathered steel. Two men dressed in dark coats and military caps stand on the rocky beach, gazing toward the looming bunker. Suddenly, the second floor of the bunker erupts in a fiery explosion, concrete fragments and debris flying outward. A deafening shockwave tears through the air, violently hurling the two men backward, their coats flapping wildly as they are thrown onto the jagged beach. The scene is shrouded in gray mist, the echo of the explosion rolling across the desolate shore.
```

- **Sample `6d7152cd-c350-4370-8b2a-99c91543edab`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/f0bd96ac-e103-443d-b20a-572f57561e4b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b6efce02-5f00-44ad-bbf7-b6efed777549.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/6d7152cd-c350-4370-8b2a-99c91543edab

```text
A bustling industrial scene unfolds on a snowy, fog-laden night. People in military uniforms and civilians move along the side of a colossal, red-brick factory building, its windows glowing warmly from the activity inside. Military trucks are parked along the street, their headlights piercing through the haze. Overhead, a network of power lines stretches across the sky.

Suddenly, a thunderous explosion erupts from within the building, blowing out several windows with a fiery blast. The force of the blast sends a shockwave outward, knocking people off their feet and scattering debris across the snow-covered ground. The air fills with dust, smoke, and the echoing shouts of panic as figures scramble to regain their footing or flee from the scene.
```

- **Sample `3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d21771b7-5168-4efa-be11-75cf9e9d4526.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/48c3c597-a873-4d7b-aac1-259c785ba464.mp4
  - page: https://higgsfield.ai/motion/0d53b135-337d-4918-aaf4-2af7ecf4f045/3bb6e89c-80a0-44b7-82a8-40f8e1ba9f8e

```text
skyscraper in background explodes, while woman looking to a viewer with shocked face, blast wave blows her hair
```

- **Sample `7339b262-6273-44e9-bd57-35e2d4de2803`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1264×720
  - input image: https://d1xarpci4ikg0w.cloudfront.net/50fd362d-65c5-4b53-997d-50bef0de22c2.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/dc41ac00-c479-4008-a963-b9c571c2d9e6.mp4
  - page: https://higgsfield.ai/motion/e974bca9-c9eb-4cc8-9318-5676cc110f17/7339b262-6273-44e9-bd57-35e2d4de2803

```text
A woman stands confidently, smiling as she wears a stylish black hat adorned with embellishments, her loose denim overalls framing her freckled skin. Behind her, the sky shifts to a fiery orange as a building suddenly explodes, sending debris and chaos into the air. The blast wave rushes toward her, knocking her hat off, while her hair is dramatically swept back by the forceful wind. The atmosphere thickens with tension; a juxtaposition of serene beauty against the violent eruption. As the shockwave unfolds, dust particles catch the setting sun's light, creating an ethereal glow around her in this stunning moment of unexpected transformation.
```
