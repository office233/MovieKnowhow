// EXAMPLE captions-data.js (from the nustandard GLP-3 build) — copy the shape, author per ad.
// Loaded by index.html via a synchronous <script src> BEFORE the timeline script.
//
// GROUPS: one visible caption phrase at a time. Group by sentence end, a >0.4s pause,
//   or max ~5 words. A single strong one-word sentence (e.g. "Purity.") can be its own group.
//   s = group start (first word's start), e = group end (last word's end).
//   words[].t = that word's start time (karaoke light-up). accent:true = brand color + pop.
//   num:true = tabular-nums (for figures). close:true on the group = smaller "legal/close" styling.
// BRAND RULE: the spoken VO uses a phonetic respelling (e.g. "Noo Standard Labz") but the
//   caption MUST show the real brand spelling ("Nustandard Labs"). Map the spoken words to
//   the correct display text here, keeping the spoken timing.

window.__ACCENT = "#2BA8E0"; // brand accent (from product label / brand cues)

window.__CUTS = [4.29, 10.25]; // hard-cut timestamps from ffmpeg scene detection

window.__CAPTIONS = [
  { s: 0.23, e: 1.33, words: [
    { t: 0.23, w: "Before" }, { t: 0.38, w: "any" }, { t: 0.57, w: "batch" }, { t: 0.92, w: "ships," } ] },
  { s: 3.52, e: 4.18, words: [
    { t: 3.52, w: "Purity.", accent: true } ] },
  { s: 6.11, e: 7.95, words: [
    { t: 6.11, w: "10", accent: true, num: true }, { t: 6.44, w: "milligrams" }, { t: 7.0, w: "of" }, { t: 7.49, w: "GLP-3", accent: true } ] },
  { s: 12.23, e: 13.42, words: [
    { t: 12.23, w: "Nustandard", accent: true }, { t: 12.94, w: "Labs", accent: true } ] },
  { s: 13.44, e: 15.0, close: true, words: [
    { t: 13.44, w: "for" }, { t: 13.67, w: "research" }, { t: 14.34, w: "use" }, { t: 14.69, w: "only." } ] }
];
