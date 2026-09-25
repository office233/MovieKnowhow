# Media: images from higgsfield.ai pages

- `img/`: **12,541 images**, saved as 640px JPEG copies (311 MB). They cover sample input frames, preset previews, course frames and assets, series posters and thumbnails.
- `index.tsv`: `original URL → local file → original bytes → original WxH`. Use it to trace an image back to its page or to download the original at full resolution.
- 33 images failed (20 were 403, 11 were 404, 2 were corrupt). They are marked `ERROR` in `index.tsv`.
- Videos were not downloaded (tens of GB). Their links are in the preset, project and series files.
- `fetch_images.py` reproduces the download.
