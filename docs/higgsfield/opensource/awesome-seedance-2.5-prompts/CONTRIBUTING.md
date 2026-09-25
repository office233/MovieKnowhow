# Contributing

Submit only a real, source-verifiable Seedance 2.5 video generation. We need:

- the published prompt, or the original request text available at the source;
- a direct creator post or official page that identifies Seedance 2.5;
- result media, creator attribution, and the correct existing category;
- permission to rehost any third-party media.

Seedance 2.0 results, reposts, aggregators, generic templates, model-unknown
results, reconstructed prompts, and untested requests are not accepted.

## Submit an issue

Use the [prompt submission form](../../issues/new?template=submit-prompt.yml).
The form collects provenance, model evidence, inputs, and media rights for
maintainer review. These verification fields do not become separate components
in the public README entry.

## Open a pull request

`README.md`, `README.zh-CN.md`, `README.pt-BR.md`, `README.hi-IN.md`,
`README.ja-JP.md`, and `README.ko-KR.md` must keep the same entry order, video
attachments, and primary source URLs. Localize reader-facing prose, labels, and
Prompt text into the language of each README.

Prompt translations must preserve the source request's intent and generation
semantics. Keep timings, shot order, measurements, technical parameters,
negations, reference numbering and bindings, brand names, and literal spoken or
on-screen text unchanged. Do not optimize, expand, or silently invent details
that are absent from the published request.

Use this entry format:

````markdown
<!-- entry:video-021 -->
<a id="video-021"></a>

### 6.4. Descriptive Title

*One-sentence description.*

**Input Materials:** Include only when material context is necessary.

**Prompt:**

```text
Faithful English localization of the published prompt
```

https://github.com/user-attachments/assets/00000000-0000-0000-0000-000000000000

**Comment:** Include only when essential to understand an incomplete request or result.

*Source: Creator ([@handle](https://x.com/handle)) — [Post](https://x.com/handle/status/123)*
````

If a source publishes only an excerpt of the request, translate only that
excerpt and explain the limitation in the submission evidence. The public entry
still uses the plain `**Prompt:**` label. Do not add reader-facing review
statuses, Origin, Workflow, Result, Model evidence, or standalone Author fields.

## Media

- Upload authorized videos to a submitted Issue in this public repository; an
  Issue draft alone may produce attachments that anonymous visitors cannot see.
- Keep the Issue after upload. It may be closed, but must not be deleted.
- Use H.264 MP4, retain AAC audio when present, enable fast start, and keep each
  upload below approximately 9.5 MiB.
- Put every video Attachment URL on its own line so GitHub renders the native
  README player.
- Verify every Attachment anonymously and compare its SHA-256 hash with the
  prepared local file before assigning it to an entry.
- Keep working media and permission records under the ignored
  `.media-upload/` directory. Do not commit third-party video files.

## Validation

During authorized media preparation, exact placeholders are allowed:

```bash
python3 scripts/check_gallery.py --allow-placeholders
```

Before publishing, replace every placeholder and run:

```bash
python3 scripts/check_gallery.py
python3 -m unittest discover -s tests
git diff --check
```

Synchronize both displayed update dates with:

```bash
python3 scripts/update_readme_timestamps.py
```

For attribution corrections, source corrections, or removal requests, use the
[source and rights report](../../issues/new?template=report-source.yml).

Original editorial contributions are licensed under CC BY 4.0. Third-party
prompts and media retain their existing rights.
