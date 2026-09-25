# Freezing — Higgsfield Motion preset

- **Category:** VFX · transformation
- **Use-case group:** viral effect
- **What it does (site description, verbatim):** The subject slowly turns to ice—skin frosts over, breath becomes visible, and motion stops. Cold, dramatic, and perfect for supernatural, winter, or time-stopping effects.
- **Model (site data):** `wan2_5_video` (Wan 2.5 video) — every Higgsfield Motion page reports this model. The page's Generate button opens `/ai/video?model=standard&presetMotionId=<id>`.
- **Inputs:** one start image + optional text prompt, generated with this motion preset applied (image-to-video). The page gives no duration or aspect-ratio settings; 81 frames is about 5 s at Wan's 16 fps (an inference).
- **Preset family:** `higgsfield` · **Variants on site:** 2
- **Best model:** wan2_5_video per site. Local KB guidance: transformation presets → Wan 2.5 or Kling 2.6; if a grounded VFX looks cartoonish, try Kling 3.0/2.6 and add "photorealistic, physically accurate".

## Variants (one per page URL)

| URL | Preset ID | Priority | Flags | Settings | Generate link |
|---|---|---|---|---|---|
| https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86 | `777f1604-afee-406d-a711-bf1e0ea23c86` | -302 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=777f1604-afee-406d-a711-bf1e0ea23c86 |
| https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432 | `8b0ab021-b240-42bd-a6b5-4e28e8f19432` | -177 | none | steps 20, frames 81, strength 1, guide_scale 6 | https://higgsfield.ai/ai/video?model=standard&presetMotionId=8b0ab021-b240-42bd-a6b5-4e28e8f19432 |

## Prompts

**Verbatim prompts on the site page: none.** Higgsfield Motion pages carry only the name, description, settings and sample videos. They do not publish the prompts used for the samples.

**Starter prompt (authored for this KB, not from the site):**

```
A man stands in a snowy forest as frost spreads over his skin, his breath fogs, and he turns to ice.
```

Use it as: upload a start image that matches the scene, select motion preset **Freezing**, paste the prompt, and describe the action the move should reveal. Keep one main idea per clip.

## Cross-reference (local KB, open-source sources)

- effects-and-styles.md (motion library): **What it does:** Subject or scene freezes into ice · **Best for:** Winter, magic, time-stop

## Related presets

- **Same category (VFX · transformation):** [Agent Reveal](agent-reveal.md), [Diamond](diamond.md), [Disintegration](disintegration.md), [Floral Eyes](floral-eyes.md), [Garden Bloom](garden-bloom.md), [Glowshift](glowshift.md), [Innerlight](innerlight.md), [Invisible](invisible.md), [Medusa Gorgona](medusa-gorgona.md), [Melting](melting.md)

## Preview media

- Card preview (animated webp): https://d1xarpci4ikg0w.cloudfront.net/3e747c15-6a58-4afd-ad6c-a2f7dc581658.webp (320×210)
- Card preview, variant `8b0ab021`: https://d1xarpci4ikg0w.cloudfront.net/e1b38550-88d8-4327-9e55-8df2c9118686.webp

### Sample videos (11; identical across variants)

| # | Sample page | MP4 | Poster | Animated preview |
|---|---|---|---|---|
| 1 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/4a3b2c6e-95b3-4eeb-86a6-5502477698d7 | https://static.higgsfield.ai/4a3b2c6e-95b3-4eeb-86a6-5502477698d7.mp4 | https://static.higgsfield.ai/4a3b2c6e-95b3-4eeb-86a6-5502477698d7.webp | https://d1xarpci4ikg0w.cloudfront.net/02d31ce4-5296-416e-be74-be7db8aa32d2.webp (320×562) |
| 2 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/cf61da33-7d42-4bf7-bdde-cd392ab727db | https://static.higgsfield.ai/cf61da33-7d42-4bf7-bdde-cd392ab727db.mp4 | https://static.higgsfield.ai/cf61da33-7d42-4bf7-bdde-cd392ab727db.webp | https://d1xarpci4ikg0w.cloudfront.net/fb793113-e87f-41bb-a43d-a07432b493e3.webp (320×432) |
| 3 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/af5d9bad-f2e1-42e9-81dc-73dd931043e9 | https://static.higgsfield.ai/af5d9bad-f2e1-42e9-81dc-73dd931043e9.mp4 | https://static.higgsfield.ai/af5d9bad-f2e1-42e9-81dc-73dd931043e9.webp | https://d1xarpci4ikg0w.cloudfront.net/83c96f6d-5b02-4f05-a947-fedd303511ea.webp (320×236) |
| 4 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/9fc91c5d-02e2-41be-8058-a4b7469ae3a9 | https://static.higgsfield.ai/9fc91c5d-02e2-41be-8058-a4b7469ae3a9.mp4 | https://static.higgsfield.ai/9fc91c5d-02e2-41be-8058-a4b7469ae3a9.webp | https://d1xarpci4ikg0w.cloudfront.net/e3b8a5ee-a06f-4b3d-99ed-8c3085343fcc.webp (320×432) |
| 5 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/da003c0f-3ffc-4e3a-84f1-063071fa51c6 | https://static.higgsfield.ai/da003c0f-3ffc-4e3a-84f1-063071fa51c6.mp4 | https://static.higgsfield.ai/da003c0f-3ffc-4e3a-84f1-063071fa51c6.webp | https://d1xarpci4ikg0w.cloudfront.net/ee428b11-b28a-49b4-a20b-801b5e02f121.webp (320×486) |
| 6 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/e1487d2e-c86b-4a44-bb7f-9dea43e139b2 | https://static.higgsfield.ai/e1487d2e-c86b-4a44-bb7f-9dea43e139b2.mp4 | https://static.higgsfield.ai/e1487d2e-c86b-4a44-bb7f-9dea43e139b2.webp | https://d1xarpci4ikg0w.cloudfront.net/d1b3c9f7-87fb-4888-b057-e12d69e13d43.webp (320×210) |
| 7 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d | https://static.higgsfield.ai/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d.mp4 | https://static.higgsfield.ai/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d.webp | https://d1xarpci4ikg0w.cloudfront.net/1e677f34-c2b9-4337-ae3f-54a05c5ad4a1.webp (320×210) |
| 8 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/b34167f1-323d-4395-8eda-079777b8c043 | https://static.higgsfield.ai/b34167f1-323d-4395-8eda-079777b8c043.mp4 | https://static.higgsfield.ai/b34167f1-323d-4395-8eda-079777b8c043.webp | https://d1xarpci4ikg0w.cloudfront.net/9616ad69-979e-4a70-9aab-a70da6a10591.webp (320×210) |
| 9 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/d243c787-8ad0-47da-a30c-450f73489962 | https://static.higgsfield.ai/d243c787-8ad0-47da-a30c-450f73489962.mp4 | https://static.higgsfield.ai/d243c787-8ad0-47da-a30c-450f73489962.webp | https://d1xarpci4ikg0w.cloudfront.net/3419475b-39c2-4e6d-90a2-61af0444e4df.webp (320×210) |
| 10 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/d19909d3-68f9-4f0c-a43b-d9fa30a572ec | https://static.higgsfield.ai/d19909d3-68f9-4f0c-a43b-d9fa30a572ec.mp4 | https://static.higgsfield.ai/d19909d3-68f9-4f0c-a43b-d9fa30a572ec.webp | https://d1xarpci4ikg0w.cloudfront.net/304b0a59-3c7d-4c1a-9494-aa45d84d8075.webp (320×210) |
| 11 | https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a | https://static.higgsfield.ai/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a.mp4 | https://static.higgsfield.ai/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a.webp | https://d1xarpci4ikg0w.cloudfront.net/79073556-c8fc-4aa7-92ef-3a37488989c7.webp (320×398) |

Source pages: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86, https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432. Crawled 2026-09.


## Real sample prompts (site)

11 prompts from the preset's public sample pages. See also [SAMPLE-PROMPTS.md](SAMPLE-PROMPTS.md).

- **Sample `08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a`** (priority 16) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 848×1056
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ed48f28e-32a8-43c1-96b9-448c3a3dd4ad.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/8245005f-91b0-4f5e-8ba1-3bc762ec92ce.mp4
  - page: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/08be1ef6-d60b-4dc6-91b5-8eaaf9c83b1a

```text
The scene opens against a deep blue backdrop, where a young woman with a stylish ensemble and vibrant pink bubblegum sits calmly, her attention fixed ahead. As the camera begins its Arc Left motion, it gracefully curves around her, capturing the exquisite details of her polka dot tie and the glossy snack bag in her hand. Suddenly, a magical transformation begins; from the bubble of gum, a glimmer of frost emerges, hardening seamlessly into a glossy, frosty sphere. This icy phenomenon quickly spreads across her features, chilling her face and hair, eventually cascading down her body as fine ice crystals gather like delicate lace. Despite this surreal transformation, her expression remains enigmatic, cold-blooded and motionless. The camera continues to pull back, revealing her fully encased in ice, the bubble of gum intact, creating a striking contrast against the vivid blue background. Concrete visual keys: perfectly frozen features, intricate frost details sparkling under light, the untouched pink gum sphere standing out against her icy visage.
```

- **Sample `d19909d3-68f9-4f0c-a43b-d9fa30a572ec`** (priority 15) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/2190bcca-158b-40ec-8bb5-e2aea7a18bfb.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/710c40cf-ddfd-490e-98b3-88a17ccaa026.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/d19909d3-68f9-4f0c-a43b-d9fa30a572ec

```text
A sharply dressed Black man in a pinstripe suit leans inside a classic red telephone booth, holding a black receiver close to his ear. The streets outside blur with busy movement — but the moment inside is about to break.

Suddenly, a thin white frost begins forming on the phone receiver in his hand. Cracks of ice shimmer across the plastic surface, and a cold vapor escapes his breath.

The frost rapidly climbs up the coiled cord, spreading onto his hand and arm. The man freezes in shock, eyes widening. He tries to extend his other hand outward, as if calling for help — but it’s too late.

A cascade of ice overtakes his torso and neck, crawling up to his jaw and into his frozen expression of disbelief. His motion is arrested mid-reach.

Simultaneously, the red telephone booth begins to glaze over. The vibrant red turns muted and frosted, the glass panes becoming opaque with cold as ornate frost textures etch across the windows. The air around thickens with white vapor.

The final shot captures the man locked in place, hand outstretched, phone in hand, encased in an eerie, cinematic sculpture of winter — a surreal moment of isolation in the middle of a bustling city.
```

- **Sample `d243c787-8ad0-47da-a30c-450f73489962`** (priority 14) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/414a4981-46f4-4b6a-a4cc-1b99778fa6da.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/78d1e263-4a72-4973-a3a9-5a4857e6bf9f.mp4
  - page: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/d243c787-8ad0-47da-a30c-450f73489962

```text
A stylish young woman stands confidently against a red brick wall, wearing bold striped shorts, a holographic crop top that reads “MECHON DANK! REBOTE,” yellow cleaning gloves, and a white cap. She holds a shimmering cube of ice in her gloved hand, her gaze locked on it with curiosity and unease.

Suddenly, the cube begins to pulse with cold light. A whispering crack spreads through its surface. Then — freezing erupts.

Ice races outward from the cube, instantly engulfing her yellow glove and rapidly climbing her arm in swirling, crystalline veins. Her expression shifts to shock and awe, eyes widening as she watches the frost crawl toward her chest.

The freezing elegantly coats her holographic top, locking its shimmer beneath translucent glass-like frost. Her striped shorts flash once more before they too are encased in a sharp, prismatic texture.

As the frost reaches her opposite arm and neck, she stiffens. Her skin glows faintly beneath the icy surface, refracting light in a soft glow. Her lips part slightly in stunned disbelief, and her body begins to radiate faint steam as cold vapor flows around her.

Finally, her face freezes mid-expression — eyes fixed on the ice cube that triggered it all — now fully embedded in a sculpture of radiant, frozen clarity. The camera pulls back slowly, revealing her motionless figure glowing softly in the harsh urban light, a beacon of surreal beauty against gritty brick.
```

- **Sample `b34167f1-323d-4395-8eda-079777b8c043`** (priority 13) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/041f00ea-bbe0-46b2-b586-b8e6a64af330.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c091a3c6-1be1-486c-91cb-0ae027d44d28.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/b34167f1-323d-4395-8eda-079777b8c043

```text
A stylish young man stands in front of a towering glass skyscraper, wearing a black denim jacket over a hoodie, a beanie, and narrow dark sunglasses. His chest strap bag flaunts the LV monogram. Rings cover his fingers as he stretches his hand confidently toward the camera — a bold, dominant gesture.

Suddenly, freezing begins from the tips of his outstretched fingers. Icy crystals form instantly across the rings, crawling with sharp detail over his hand.

A flash of cold mist escapes as the frost spreads rapidly — over his knuckles, across his wrist, and down his forearm, like frozen lightning.

His hand locks in place, mid-reach toward the lens, while the camera captures the texture of glassy ice layering over the veins and jewelry.

The frost races over his jacket and chest bag, giving the fabric a cracked-glacier sheen. His hoodie stiffens under the cold, and vapor curls from his breath.

His face is stoic — eyes locked with the lens — as frost coats his sunglasses and lips, giving them a subtle shimmer.

The skyscraper behind reflects pale blue light, heightening the chill. The camera rotates slightly and pulls back, revealing his full silhouette: still, sharp, covered in beautiful icy texture, standing tall and unfazed — like an ice-forged king in the heart of the city.

Cold vapor swirls around his feet. The final image freezes with his hand suspended in front of us — frozen mid-pose, defiant and untouchable.
```

- **Sample `cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d`** (priority 12) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/58f52fa4-517f-4c8f-9ea2-5e5c8b6c645e.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/c50b42bf-35f1-43fd-9e75-e1b5df32a948.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/cc04f42d-bdc8-44a0-9d9e-c18d50f4e22d

```text
A confident young man with pink buzzcut hair stands defiantly in a narrow graffiti-covered alley. He wears striking red geometric sunglasses, a cropped black shirt, layered pearl and silver necklaces, a leather jacket with fur lining, and pale trousers. The wide-angle camera lens distorts the perspective as he leans forward slightly, both hands raised at chest height — firm, defiant, unmoving.

Suddenly, the freezing begins. It starts from the lenses of his oversized red glasses, which crystallize with detailed icy fractures like shattered diamonds. The frost rapidly expands outward from the glasses — over his eyebrows, temples, and scalp.

His expression remains cold and emotionless as the ice overtakes his face, jaw, and neck, leaving behind a marbled texture of pale frost and crackling cold. His breath becomes visible, drifting like smoke.

His hands, still raised and open in a commanding gesture, begin to frost over — first the fingertips, then rings, nails, and veins beneath the skin — until both hands are sculpted in brilliant ice. The metal rings glint through the transparent frost.

Ice spreads downward across his black cropped top and jacket, covering the leather with fractured, glacial plates that reflect the street's ambient light. Steam continues rising from his chest and shoulders as the freeze solidifies his form.

The camera subtly rotates and pulls back, capturing the figure locked mid-gesture — bold, motionless, frozen like a fashion deity struck in time. The alley behind him falls silent, echoing with only the hiss of frost in the air.
```

- **Sample `e1487d2e-c86b-4a44-bb7f-9dea43e139b2`** (priority 11) — Wan 2.5 motion preset, steps=40, frames=81, strength=1, guide_scale=6, output video 1168×768
  - input image: https://d1xarpci4ikg0w.cloudfront.net/cc765464-f360-45e7-86ad-445cdfbcea1b.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ccc38b1a-1d4f-4951-951c-1ae7c582d102.mp4
  - page: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/e1487d2e-c86b-4a44-bb7f-9dea43e139b2

```text
A tense young man with slicked-back bleached hair leans aggressively toward a dirty, cracked mirror in a dimly lit bathroom. His expression is intense, locked into a cold glare at his own reflection. He grips the edge of the sink tightly with one hand and holds a sharp razor or blade in the other.

Suddenly, freezing begins violently and in perfect sync — from his chest, neck, and cheeks, sharp veins of ice erupt outward. Cracks of frost spiral instantly across his face and neck, his veins turning icy blue beneath the skin. His pupils fade into a glacial tone as the cold overtakes his entire head in seconds.

Simultaneously, the reflection in the mirror freezes in perfect synchronization, mirroring every detail — hair, skin, even breath. The mirror itself becomes a fractured sheet of icy texture: shattered, frosted, with fogged light halos around the cracks, and heavy condensation bleeding toward the edges.

As the freeze cascades down his arms and torso, his grip tightens — the faucet and blade begin to frost and crack from the cold. Icy vapor violently swirls around his body, condensing on the mirror. The room darkens slightly, lit only by a pale cyan glow reflected off his crystallized skin.

His posture stays tense, frozen in confrontation — an ice-sculpted standoff between man and reflection.
```

- **Sample `da003c0f-3ffc-4e3a-84f1-063071fa51c6`** (priority 10) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 768×1168
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6ad1031f-ec31-4106-ac29-5052d69b45a0.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/b06c50ae-b7e1-4c48-934c-c6e3e749252e.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/da003c0f-3ffc-4e3a-84f1-063071fa51c6

```text
A young woman in sporty clothing lounges casually on a leather couch, holding a vintage cream rotary phone to her ear. The scene is warm and nostalgic, with scattered books and a chessboard beside her. Suddenly, the freezing effect begins exactly where the phone touches her face. The receiver becomes glossy with frost, and the cold spreads downward through her hand, arm, and across her body. Her skin and clothes gradually crystallize with intricate ice textures. The transformation is smooth and cinematic. The camera slowly and steadily pulls backward, revealing the entire environment while her body fully freezes, until she sits completely still, encased in beautiful translucent ice. Her expression remains relaxed but distant, frozen mid-conversation.
```

- **Sample `9fc91c5d-02e2-41be-8058-a4b7469ae3a9`** (priority 4) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/d13d913f-7dcc-4b6f-90de-556a04d00244.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/ac493ee3-3600-49e9-9162-48bc82fad817.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/9fc91c5d-02e2-41be-8058-a4b7469ae3a9

```text
An older man with bold style stands confidently in a retro cigar shop, wearing a striped navy suit, gold jewelry, and a green cap that reads “Sweet.” As he grins with a cigar between his teeth, a sudden cold shimmer creeps across his body — starting from the fingers and spreading upward. His hands, chest, and face begin to crystallize into frosty ice, turning translucent with a blue tint. A visible freeze effect forms layer by layer, capturing the moment like a time-stop. His sunglasses and cigar slowly frost over, and his gold pendant glows faintly beneath the icy surface. Breath becomes visible as the air chills. The surrounding warm-toned room contrasts with his frozen transformation, creating a surreal cinematic tension. Slow motion, no levitation, realistic freezing texture with refracted light and sharp surface cracks.
```

- **Sample `af5d9bad-f2e1-42e9-81dc-73dd931043e9`** (priority 3) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 1104×816
  - input image: https://d1xarpci4ikg0w.cloudfront.net/4d8b78ef-8c74-4f0c-9c47-673c41e1a585.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/34a00d12-c2f4-4c52-b898-7f782c7ce272.mp4
  - page: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/af5d9bad-f2e1-42e9-81dc-73dd931043e9

```text
An eccentric older woman in a vibrant orange dress and fluffy green jacket runs toward the camera in panic along a windy beach, seagulls swirling around her. Just as she reaches peak motion — hair flying, mouth open mid-scream — a sudden freezing effect slams into her. Her legs lock mid-stride, and a wave of translucent ice blasts across her body from the feet upward, capturing her in an instant like a statue in motion. Her mouth and wide-open eyes are frozen with expression intact. Her bright clothing crystallizes in glittering frost, and tiny ice shards burst into the air around her from the sheer force of the freeze. The surrounding seagulls blur into streaks of motion, contrasting her frozen stillness. Time seems shattered. Cinematic slow-motion energy, intense contrast, ultra-detailed crystal texture, no levitation.

```

- **Sample `cf61da33-7d42-4bf7-bdde-cd392ab727db`** (priority 2) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 816×1104
  - input image: https://d1xarpci4ikg0w.cloudfront.net/6aecab8c-f273-4aad-8b84-31c4e4207736.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/222aca88-aa2d-4cac-a3b8-a16f066b1ba0.mp4
  - page: https://higgsfield.ai/motion/8b0ab021-b240-42bd-a6b5-4e28e8f19432/cf61da33-7d42-4bf7-bdde-cd392ab727db

```text
A young woman in a ski helmet and snowsuit stands outside a wooden alpine lodge, her cheeks flushed from the cold. As she touches her jacket, a subtle frost begins to spread from her fingertips across the fabric — delicate, crystalline patterns crawling like snowflakes over her chest and sleeve. Her breath becomes faintly visible in the air, and a bluish shimmer glows faintly beneath the surface of her skin, especially around her neck and collarbones, as if the freezing begins from within. Reflections in her goggles shimmer with fractal ice bloom. The braid over her shoulder starts to stiffen, and her lips take on a colder pink tone. The freezing process is elegant, controlled, and cinematic — not violent, but beautiful and haunting, like she's transforming into a living ice sculpture. Hyper-detailed close-up, no levitation, soft light and contrast.

```

- **Sample `4a3b2c6e-95b3-4eeb-86a6-5502477698d7`** (priority 1) — Wan 2.5 motion preset, steps=30, frames=81, strength=1, guide_scale=6, output video 720×1264
  - input image: https://d1xarpci4ikg0w.cloudfront.net/ace5ac1e-a0ee-4b97-8186-98e65924a782.webp
  - output: https://d1xarpci4ikg0w.cloudfront.net/f5c49d5c-5f39-42e4-ab16-7784f5acd2e5.mp4
  - page: https://higgsfield.ai/motion/777f1604-afee-406d-a711-bf1e0ea23c86/4a3b2c6e-95b3-4eeb-86a6-5502477698d7

```text
Inside a neon-lit luxury car glowing with purple light, three animated characters are vibing in the backseat with oversized shades, chains, and slushie cups. Suddenly, a blast of arctic energy erupts from the AC vents — time slows as an ultra-stylized freezing effect takes over. The central figure’s sunglasses glaze over with frost, his arms stiffen mid-pose, and ice begins crystallizing over his golden chain and cup. The slush in his drink freezes solid with visible cracks. Frost quickly spreads across the car interior — turning the plush seats into translucent crystal, and the cup lids into faceted ice domes. The two characters beside him get hit by the freeze too: one freezes while laughing wide, teeth caught mid-grin, while the other’s cup bursts into icy shards. Purple and blue frost particles swirl in the air. Extreme stylized lighting, sharp detail, cartoonishly exaggerated crystal textures, neon reflections refracting in the ice. No levitation, just ultra-cool chaos.

```
