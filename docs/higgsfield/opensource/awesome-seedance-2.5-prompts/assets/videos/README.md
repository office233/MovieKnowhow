# Video media policy

README result videos use bare GitHub Attachment URLs so GitHub renders native
players without adding binary media to the repository history.

- Upload only creator-owned, explicitly licensed, or permission-confirmed media.
- Submit the hosting Issue before using its Attachment URLs, then verify every
  file anonymously.
- Keep H.264 MP4 uploads below approximately 9.5 MiB and retain AAC audio when
  the source contains sound.
- Compare the downloaded Attachment SHA-256 with the prepared local file before
  assigning the URL to an entry.
- Do not commit third-party X or official preview videos to this directory.

Working files, candidate downloads, hashes, and permission records belong in
the ignored `.media-upload/` directory.
