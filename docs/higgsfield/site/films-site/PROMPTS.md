# Films site — prompts

**0 verbatim prompts** were present in the 69 crawled Original Series / project pages.

Why: project pages (`/@user/projects/<slug>`) server-render only project metadata (title, description, type, media, cover, stats, model stack, license, folder IDs). The per-generation prompts and canvas (flags `showPrompts: true`, `showCanvas: true` on every project) are loaded client-side from the project's `sourceFolderId` / `snapshotFolderId` after hydration. Original Series episode pages (`/original-series/<series>/<episode>`) carry episode/series metadata only.

Closest usable creative text: the loglines/synopses in each file under [series/](series/) and [projects/](projects/), and the model mix per project (see [INDEX.md](INDEX.md)).

To obtain prompts: open a project while logged in (Assets / Canvas tabs) or use the remix links (e.g. `https://higgsfield.ai/generate?projectId=...`) listed in the series files.

| Use-case | Prompts |
|---|---|
| Cinematic film scene | 0 |
| Character / consistency | 0 |
| Product ad | 0 |
| UGC | 0 |
| Viral effect | 0 |
| Transitions | 0 |
| Music video | 0 |
| Anime / animation | 0 |
| Other | 0 |
