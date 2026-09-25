# Explainer styles and Marketplace apps

Captured 2026-09-25 through the Higgsfield MCP (read-only: `get_explainer_presets`, `apps_search`, `apps_describe`).

## Explainer / faceless video styles (22)

Source: `get_explainer_presets()`. All are 9:16. Pick one, then call `resolve_explainer_preset(<id>)` to get the style-reference media_id for generation (used by the `faceless-video` workflow, see `../workflows/faceless-video/`). The `prompt` field that the catalog returns is always the same stub: `Create an explainer video in the "<title>" preset style (explainer preset id: <id>).`

| # | Title | id | Cover | Preview video |
|---|---|---|---|---|
| 1 | Editorial Motion Graphics | `56fc6472-33b7-45dc-83ff-80c71d40aec6` | [img](https://cdn.higgsfield.ai/video_explainer_preset/8e390902-7a80-4036-9a98-72b1d620b3e3.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/f9fd227a-b053-41c8-9cee-86a42242f107.mp4) |
| 2 | Stickman Cartoon | `237dd06c-3729-4895-9672-1c623c4266e0` | [img](https://cdn.higgsfield.ai/video_explainer_preset/c7999bdc-fb71-46f1-9e79-cd5e0bb83a4b.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/10882623-fc04-4aae-96ae-5c0ad38f2cf8.mp4) |
| 3 | Watercolor Chronicle | `0029f935-be9e-46c7-a5d8-a4e0f81d49c8` | [img](https://cdn.higgsfield.ai/video_explainer_preset/5b22eeb2-fd80-4048-8824-9d31549df367.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/f195a492-3bcc-4265-9bf1-b478ab48129b.mp4) |
| 4 | Fairy Tale & Myth | `de5b38ca-9134-4987-9d7a-d5e9085f0480` | [img](https://cdn.higgsfield.ai/video_explainer_preset/80158f77-9372-4e0c-a344-d776dbc19aaa.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/daf10264-2878-4abf-bafc-285610001bb8.mp4) |
| 5 | Paper Diorama | `83d276f6-e3aa-49b8-82f2-1a0bb7d0a370` | [img](https://cdn.higgsfield.ai/video_explainer_preset/2da37b94-cd54-4d0e-9e37-09bd57a592af.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/efcf65dd-6a5e-43aa-814f-8daea175f8f6.mp4) |
| 6 | Pastel Flat 2D | `d0708b4f-a134-40f7-9884-9ad830904e71` | [img](https://cdn.higgsfield.ai/video_explainer_preset/65747484-e283-47a5-bea1-1839519666a5.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/79e9acd2-6d0a-42c0-9d76-8b0e21e51ada.mp4) |
| 7 | Colorful 3D | `30948d66-76b1-4c8e-884a-1854e08e91df` | [img](https://cdn.higgsfield.ai/video_explainer_preset/09690183-c87e-4008-a2e8-5a135104a464.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/8352dc81-94fa-4256-8d20-726f864ca8a4.mp4) |
| 8 | Hand Drawn | `402635b8-7363-4172-ac78-7ffa9b999c94` | [img](https://cdn.higgsfield.ai/video_explainer_preset/13894566-4b99-4a42-bf36-6591c66b99bc.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/56fd547a-ee99-4167-a863-217900de9b34.mp4) |
| 9 | Poster Vector | `8014a730-3092-4f3a-b880-0321ae1d207d` | [img](https://cdn.higgsfield.ai/video_explainer_preset/96c0e1f0-2d5d-470d-b810-9cc90d232c03.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/b1f5fcbe-c3df-4c6e-bdac-a0d56f1c07ac.mp4) |
| 10 | Mannequin | `32356614-40f8-42b2-8a57-2f7b30cfb473` | [img](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/ab26ad91-3ac6-4c25-8952-7022c50da8d1.webp) | [mp4](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/1efc2940-b2b5-42a7-b78d-da49591f08c9.mp4) |
| 11 | Whiteboard Doodle | `b347d852-98fc-4013-92b7-6b0219fb21be` | [img](https://cdn.higgsfield.ai/video_explainer_preset/8c474148-f747-4e39-9a2f-f2a389f38a7f.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/5b5d018c-2d07-4d25-945e-d72ee65f0b10.mp4) |
| 12 | 3D Papercraft | `bb90786e-fa06-4911-884b-c576dcd20bef` | [img](https://cdn.higgsfield.ai/video_explainer_preset/41b129d4-de13-4f0e-9638-8b09978470cd.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/a100d913-fd91-4d20-847c-385912d6f3ad.mp4) |
| 13 | Mixed Media | `80e4dd7b-cd65-42d4-b191-b58d62558602` | [img](https://cdn.higgsfield.ai/video_explainer_preset/7c2a2a06-4601-4613-a912-76af49d00136.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/0fd6115e-8753-47f3-a898-c60421607b42.mp4) |
| 14 | Low Poly | `3e4bfd81-fbd8-4587-886d-296cbe48d152` | [img](https://cdn.higgsfield.ai/video_explainer_preset/bf16133e-66d8-4cc3-9a94-a637c31541bb.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/c45a6504-827d-4bcc-9f03-6a8548a562f1.mp4) |
| 15 | 2D Illustrator | `5a1ae304-c541-4f11-9784-595e0f2c3d2b` | [img](https://cdn.higgsfield.ai/video_explainer_preset/7ec22d82-bb5b-4b10-9ffe-4358443e26ef.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/e06e5ff0-e1d7-4545-b64d-b50edcbb7736.mp4) |
| 16 | Pixel Art | `730d436b-c0d2-4346-a7e9-3d9a80065f30` | [img](https://cdn.higgsfield.ai/video_explainer_preset/3d2ac80f-5e7f-4074-a07e-ffc7e6d80be9.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/d50f28ba-f206-49db-b7ea-dbb9e89fe2e0.mp4) |
| 17 | Claymotion | `1de0f39e-c602-4b00-b54a-38440c7f63f7` | [img](https://cdn.higgsfield.ai/video_explainer_preset/031d62da-831f-427a-beab-9296c7edbee8.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/bc94dec6-803c-42b6-b13d-b32b1279efb2.mp4) |
| 18 | Isometric Flat Vector | `c109eddb-1a79-478a-afd5-273bd0b205e5` | [img](https://cdn.higgsfield.ai/video_explainer_preset/bda45030-b95c-4dfb-9a6a-d72e3c646e35.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/4221645e-68f3-4aa5-bcf6-b65d15c6ac3a.mp4) |
| 19 | 3D Mix | `daa250fe-c353-4d26-8ab2-fc1c4ec777a4` | [img](https://cdn.higgsfield.ai/video_explainer_preset/20b3fd1a-407a-4332-bc84-2cd26d8314eb.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/9c6c813e-8839-4be7-888c-7f230d08a465.mp4) |
| 20 | Studio 3D | `ab43dacd-6bee-4f8e-98b7-c4ff678bfdbd` | [img](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/87877e90-437d-4f46-a948-7c25b9097d74.webp) | [mp4](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/e14c8106-0c29-4753-a973-f5ca365ae7c7.mp4) |
| 21 | Fluffy Toy | `1fde6c92-721b-4824-b490-4ea75ad0665f` | [img](https://cdn.higgsfield.ai/video_explainer_preset/170abad9-9a33-42ae-b322-13b605d7fdff.webp) | [mp4](https://cdn.higgsfield.ai/video_explainer_preset/43d969ae-cdd9-499a-b922-b4045e34da06.mp4) |
| 22 | Paper collage | `bc3c6f53-762e-4806-84f0-37a85e278835` | [img](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/dc19739b-9cf1-4bbb-a9c7-7e3a24daeae6.webp) | [mp4](https://cdn.higgsfield.ai/youtube_faceless_preset_cover/3bc692b0-0ee7-46e2-9faa-71574892c891.mp4) |

## Marketplace apps callable through MCP (1)

`apps_search()` with no query returns a single app.

**Match Cut + Tracelab** — app_id `3a69aa1d-8456-4705-92b5-b0616b03e642`, manifest_revision `v3`.
"Create cinematic match-cut reels, track objects and faces, style motion overlays, and export finished video from one Higgsfield studio."

Flow: `apps_describe(app_id, action)` for the argument schema → `apps_invoke(app_id, action, arguments, manifest_revision)` → poll with `get_render`. All `create_*` actions are async and output `video/mp4`. Treat `create_*` as credit-consuming and confirm first.

| Action | Mode | What it does |
|---|---|---|
| `list_render_modes` | sync | List every available render mode/tool with its inputs and settings. |
| `create_render` | async | Three-second animated word reel. |
| `create_tracelab` | async | Track objects in an HTTPS image and render Tracelab motion overlays as video. |
| `create_facecut` | async | Align detected faces and render a rapid portrait match cut. |
| `create_searchcut` | async | Render words as fast-cut search-result pages. |
| `create_logocut` | async | Animate an optional logo over rapidly changing branded backgrounds. |
| `create_notebook` | async | Typography over a photographed notebook desk. |
| `create_notereel` | async | Handwritten text over themed photo and paper cuts. |
| `create_productcut` | async | Cut out a product and animate it across background scenes. |
| `create_stickercut` | async | Animate sticker words or an uploaded logo through object cuts. |
| `create_spherecut` | async | Wrap words and photos onto animated spherical stickers. |
| `create_lenscut` | async | Isolated words through a chromatic fisheye lens. |
| `create_scrapboard` | async | Words and uploaded photos on an animated scrapbook board. |
| `create_wordstack` | async | Stack incoming words in a tilted depth composition. |
| `create_typewriter` | async | Type text onto animated paper with mechanical shake. |
| `create_commentcut` | async | Words and icon reactions as social-platform comments. |
| `create_crt` | async | Text or an image through a CRT monitor simulation. |
| `create_retropop` | async | Bright retro pop-art word cards. |
| `create_nightvision` | async | Night-vision phosphor treatment on an image. |
| `create_crtglitch` | async | Shared CRT-glitch shader treatment on an image. |
| `create_thermal` | async | Selectable thermal palette on an image. |
| `create_black_hot` | async | Locked Black Hot thermal palette. |
| `create_white_hot` | async | Locked White Hot thermal palette. |
| `create_rainbow_thermal` | async | Locked Rainbow thermal palette. |
| `create_glitch` | async | Digital, analog or datamosh glitch bursts on an image. |
| `create_vhs` | async | VHS wear, bleed, tracking and dropout artifacts on an image. |
| `create_nokia` | async | Image as a monochrome Nokia-style LCD video. |
| `get_render` | sync | Render job status and, when ready, its `result_url`. |
