# Contributing

Submit only a real, source-verifiable MiniMax H3 generation. We need:

- the exact published prompt, or the complete request text available at the source;
- a direct creator post or official page that explicitly identifies MiniMax H3;
- matching output media, all material references, and the correct category;
- permission to rehost every third-party media file.

Results from other models, reposts, aggregators, generic templates, model-unknown
outputs, reconstructed prompts, and requests that cannot be paired with their
result are not accepted.

## Submit an issue

Use the [prompt submission form](../../issues/new?template=submit-prompt.yml).
The form collects provenance, model evidence, referenced materials, and media
rights for maintainer review. These verification fields do not become separate
metadata blocks in the public README entry.

## Open a pull request

`README.md`, `README.zh-CN.md`, `README.pt-BR.md`, `README.hi-IN.md`,
`README.ja-JP.md`, and `README.ko-KR.md` must keep identical entry IDs, order,
media assignments, direct source URLs, and update dates. Localize reader-facing
prose, labels, titles, descriptions, and Prompt text into each README language.

Translations must preserve intent and generation semantics. Keep timings,
aspect ratios, shot order, measurements, technical parameters, negations,
`Image 1` / `Video 1` / `Audio 1` bindings, brand names, dialogue, and literal
on-screen text unchanged. Do not optimize, expand, or invent absent details.

Use this entry format:

````markdown
<!-- entry:video-021 -->
<a id="video-021"></a>

### 6.5. Descriptive Title

*One-sentence description.*

**Input Images:** Include only when the images materially aid reproduction.

**Prompt:**

```text
Exact prompt or faithful English localization
```

https://github.com/user-attachments/assets/00000000-0000-0000-0000-000000000000

*Source: Creator ([@handle](https://x.com/handle)) — [Post](https://x.com/handle/status/123)*
````

If the official source publishes only a partial request, reproduce only that
text. Record the limitation in submission evidence, while keeping the public
label as plain `Prompt`. Do not add public `Origin`, `Workflow`, `Prompt status`,
`Result`, `Model evidence`, or standalone `Author` fields.

## Media

- Upload only authorized files to an Issue in this public repository. Keep the
  Issue after upload; it may be closed, but must not be deleted.
- Output videos must be H.264 MP4 with AAC when audio is present, fast-start
  enabled, and below 9.5 MiB.
- Put the output Attachment URL on its own line so GitHub renders the player.
- Verify anonymous access and compare each prepared file's SHA-256 before use.
- Keep downloads, hashes, mapping tables, and rights records in the ignored
  `.media-upload/` directory. Do not commit third-party media.

## Validation

During upload preparation:

```bash
python3 scripts/check_gallery.py --allow-placeholders
python3 -m unittest discover -s tests
```

Before publishing, replace all placeholders and run:

```bash
python3 scripts/check_gallery.py
python3 .media-upload/verify_attachments.py
python3 -m unittest discover -s tests
git diff --check
```

Synchronize visible update dates with:

```bash
python3 scripts/update_readme_timestamps.py
```

Use the [source and rights report](../../issues/new?template=report-source.yml)
for attribution corrections, source corrections, or removal requests.

Original editorial contributions are licensed under CC BY 4.0. MiniMax media,
third-party prompts, and other third-party materials retain their existing rights.
