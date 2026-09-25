# Video media policy

README output videos use bare GitHub Attachment URLs so GitHub renders native
players without adding binary media to repository history.

- Upload only creator-owned, explicitly licensed, or permission-confirmed media.
- Submit the hosting Issue before using its URLs, keep it available, and verify
  each Attachment anonymously.
- Use H.264 MP4, retain AAC audio when present, enable fast-start, and keep each
  file below 9.5 MiB.
- Compare the downloaded Attachment SHA-256 with the prepared local file before
  assigning its URL to an entry.
- Do not commit MiniMax preview media or third-party X media here.

Working files, source downloads, hashes, mappings, and permission records belong
in the ignored `.media-upload/` directory.
