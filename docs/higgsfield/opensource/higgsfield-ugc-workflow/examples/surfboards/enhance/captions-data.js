// captions-data.js — joe-b-surfboards-demo
// Karaoke captions authored from transcript.json (small.en). Spoken VO says "Joe Bee Surfboards"
// (phonetic) and Whisper heard it as "Joby"; on-screen caption shows the REAL spelling "Joe B Surfboards".

window.__ACCENT = "#A9743B"; // warm wood tone

window.__CUTS = [3.208333, 7.083333]; // hard cuts from ffmpeg scene detection

window.__CAPTIONS = [
  // Cut 1 — Hook
  { s: 0.07, e: 1.5, words: [
    { t: 0.07, w: "Okay," }, { t: 0.4, w: "this" }, { t: 0.8, w: "longboard", accent: true } ] },
  { s: 1.71, e: 3.43, words: [
    { t: 1.71, w: "changed" }, { t: 2.38, w: "how" }, { t: 2.67, w: "I" }, { t: 2.78, w: "surf.", accent: true } ] },

  // Cut 2 — Action
  { s: 3.43, e: 5.32, words: [
    { t: 3.43, w: "Hand" }, { t: 3.75, w: "shaped," }, { t: 4.27, w: "real" }, { t: 4.65, w: "wood", accent: true }, { t: 5.06, w: "rails," } ] },
  { s: 5.82, e: 6.68, words: [
    { t: 5.82, w: "pure" }, { t: 5.99, w: "glide.", accent: true } ] },

  // Cut 3 — Recommendation
  { s: 7.12, e: 8.53, words: [
    { t: 7.12, w: "One" }, { t: 7.28, w: "board" }, { t: 7.74, w: "does" }, { t: 8.01, w: "it" }, { t: 8.17, w: "all," } ] },
  { s: 8.67, e: 9.76, words: [
    { t: 8.67, w: "Joe B Surfboards.", accent: true } ] }
];
