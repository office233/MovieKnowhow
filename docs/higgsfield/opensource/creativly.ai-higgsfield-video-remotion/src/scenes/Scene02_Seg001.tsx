// =============================================================================
//  Scene 02 · seg001 — "Pulling competitor ads"
//
//  Two-phase scene:
//
//  Phase A (0..63):   chat composer carry-over from Scene 01 — Frens pouch +
//                     prompt text + Opus 4.7 model picker + orange send button.
//                     Hand cursor lands on the send button, clicks (sparkle),
//                     composer zooms in toward the send button and fades to white.
//
//  Phase B (64..179): "Pulling competitor ads" serif title with a coral
//                     starburst icon, then a stack of bullets reveals one by
//                     one. Each bullet has an amber→dark-grey word wipe on its
//                     first word(s), a line icon, and a coral URL chip below.
//                     The list scrolls upward so the most recent items stay
//                     in view (the title eventually scrolls out the top).
//
//  Source: 60 frames at 30fps → 180 Remotion frames. 1 source frame ≈ 3 Remotion.
// =============================================================================

import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {MOTION, PALETTE, VIDEO_HEIGHT, VIDEO_WIDTH} from "../tokens";
import {FONT_FAMILY, bezier, clamped, fadeWindow, springProgress} from "../helpers";

// -----------------------------------------------------------------------------
//  Palette additions local to this scene.
// -----------------------------------------------------------------------------
const C = {
  bg: "#f4f1ec",          // very slight warm off-white (matches source)
  card: "#ffffff",
  ink: "#1a1a1a",         // body text near-black
  inkSoft: "#3a3a3a",     // bullet body grey
  inkFaint: "#a8a8a8",    // greyed-out trailing text in title ("ads")
  coral: "#cf563c",        // primary brand orange/coral
  coralSoft: "#fdf3ec",   // URL chip background — very light cream/peach
  coralDeep: "#cf563c",   // URL chip text — same as coral
  amber: "#d99a3e",       // first-word amber highlight
};

// -----------------------------------------------------------------------------
//  Bullet definitions — ordered as they appear in the source.
//  Each bullet has a "highlight" string (the first word) that sweeps from amber
//  to ink-soft as the bullet matures.
// -----------------------------------------------------------------------------
type IconKind =
  | "globe"
  | "search"
  | "book"
  | "lines"
  | "gear"
  | "trend"
  | "cloud"
  | "mic"
  | "personCheck"
  | "scissors";

type Bullet = {
  icon: IconKind;
  highlight: string;    // first word, amber → inkSoft
  rest: string;         // remainder of the label
  url?: string;
  start: number;        // Remotion frame
};

// Title/asterisk enter ~54-69 (source f18-f23). Bullets start at R60.
// Stagger 12f per bullet → bullet 10 starts at R168 (source f57, near end).
const TITLE_IN = 54;
const BURST_IN = 51;
const FIRST_BULLET = 60;
const BULLET_STEP = 12;

const BULLETS: Bullet[] = [
  {icon: "globe",       highlight: "Browsing",     rest: " the Meta Ads Library through Cowork",                       url: "facebook.com/ads/library",                                start: FIRST_BULLET + BULLET_STEP * 0},
  {icon: "search",      highlight: "Identifying",  rest: " top competitors in superfood gummies category",             url: "facebook.com/ads/library?q=superfood-gummies",            start: FIRST_BULLET + BULLET_STEP * 1},
  {icon: "book",        highlight: "Mapping",      rest: " competitor set — Goli, Olly, Bloom, MaryRuth's, Hum, Ritual",url: "facebook.com/ads/library?q=superfood-gummies",            start: FIRST_BULLET + BULLET_STEP * 2},
  {icon: "lines",       highlight: "Scanning",     rest: " 847 active ads across 6 brands",                             url: "facebook.com/ads/library?advertisers=goli,olly,bloom",    start: FIRST_BULLET + BULLET_STEP * 3},
  {icon: "gear",        highlight: "Detecting",    rest: " recurring creatives — proxy for high ROAS",                  url: "facebook.com/ads/library?status=active&country=US",       start: FIRST_BULLET + BULLET_STEP * 4},
  {icon: "trend",       highlight: "Identifying",  rest: " top-performing ad placements — Reels, Feed, Stories",        url: "facebook.com/ads/library?sort=frequency",                 start: FIRST_BULLET + BULLET_STEP * 5},
  {icon: "cloud",       highlight: "Downloading",  rest: " top 24 winning creatives to /competitor-winners",            url: "facebook.com/ads/library?placements=reels,feed,stories", start: FIRST_BULLET + BULLET_STEP * 6},
  {icon: "mic",         highlight: "Transcribing", rest: " voiceovers and on-screen text",                              url: "facebook.com/ads/library?view=video-detail",              start: FIRST_BULLET + BULLET_STEP * 7},
  {icon: "personCheck", highlight: "Analyzing",    rest: " creator-led vs brand-led creative split",                    url: "facebook.com/ads/library?filter=creator-type",            start: FIRST_BULLET + BULLET_STEP * 8},
  {icon: "scissors",    highlight: "Analysing",    rest: " via external connectors",                                                                                                  start: FIRST_BULLET + BULLET_STEP * 9},
];

// -----------------------------------------------------------------------------
//  Icon paths — single-stroke / two-tone outline glyphs to match source.
// -----------------------------------------------------------------------------
const Icon: React.FC<{kind: IconKind; size?: number; color?: string}> = ({kind, size = 38, color = C.ink}) => {
  const sw = 1.7;
  const common = {width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const};
  switch (kind) {
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.2" />
          <path d="M3 12h18M12 3c2.6 3 2.6 15 0 18M12 3c-2.6 3-2.6 15 0 18" />
        </svg>
      );
    case "search":
      // search with a tiny chart line inside the lens
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7.5" />
          <path d="M16.5 16.5L21 21" />
          <path d="M7.5 12.5l2-2.2 2 1.6 2.6-3" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 4.5h6.2c1.1 0 2 .9 2 2v13.3c0-1.1-.9-2-2-2H4z" />
          <path d="M20 4.5h-6.2c-1.1 0-2 .9-2 2v13.3c0-1.1.9-2 2-2H20z" />
        </svg>
      );
    case "lines":
      // four right-aligned indented lines
      return (
        <svg {...common}>
          <path d="M4 6h12" />
          <path d="M4 10h16" />
          <path d="M8 14h12" />
          <path d="M4 18h12" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.1" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      );
    case "trend":
      // up-trending line chart
      return (
        <svg {...common}>
          <path d="M3 18l5.5-6 3.5 3 4-5" />
          <path d="M14 10h2.5V12.5" />
        </svg>
      );
    case "cloud":
      // cloud with down arrow
      return (
        <svg {...common}>
          <path d="M6.5 17.5h11a4 4 0 0 0 .5-7.96 6 6 0 0 0-11.7-1A3.6 3.6 0 0 0 6.5 17.5z" />
          <path d="M12 11v6.5" />
          <path d="M9.5 15l2.5 2.5L14.5 15" />
        </svg>
      );
    case "mic":
      return (
        <svg {...common}>
          <rect x="9.2" y="3.2" width="5.6" height="11" rx="2.8" />
          <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0" />
          <path d="M12 18v3" />
        </svg>
      );
    case "personCheck":
      return (
        <svg {...common}>
          <circle cx="10" cy="7.5" r="3.3" />
          <path d="M3.5 20c.6-3.6 3.2-6 6.5-6s5.9 2.4 6.5 6" />
          <path d="M16.5 12.2l1.6 1.6 3.2-3.4" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...common}>
          <circle cx="6.2" cy="6.6" r="2.5" />
          <circle cx="6.2" cy="17.4" r="2.5" />
          <path d="M8.2 8.4L20.5 19.5" />
          <path d="M8.2 15.6L20.5 4.5" />
        </svg>
      );
  }
};

// -----------------------------------------------------------------------------
//  Starburst — the coral asterisk/sun mark beside the title.
//  12 radial blades, rounded caps, gentle anti-clockwise rotation.
// -----------------------------------------------------------------------------
const Starburst: React.FC<{size: number; rotate: number; opacity: number}> = ({size, rotate, opacity}) => {
  const blades = 12;
  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" style={{opacity, transform: `rotate(${rotate}deg)`}}>
      {Array.from({length: blades}).map((_, i) => {
        const a = (i / blades) * 360;
        return (
          <rect
            key={i}
            x={-3.6}
            y={-40}
            width={7.2}
            height={28}
            rx={3.6}
            ry={3.6}
            fill={C.coral}
            transform={`rotate(${a})`}
          />
        );
      })}
    </svg>
  );
};

// -----------------------------------------------------------------------------
//  Hand-cursor — the source uses a chunky outlined hand pointer.
// -----------------------------------------------------------------------------
const HandCursor: React.FC<{size?: number}> = ({size = 96}) => (
  <svg width={size} height={size * 1.05} viewBox="0 0 64 68" fill="none">
    <path
      d="M22 6c0-2.2 1.8-4 4-4s4 1.8 4 4v22"
      stroke="#0a0a0a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff"
    />
    <path
      d="M14 26c0-2.2 1.8-4 4-4s4 1.8 4 4v8M30 26c0-2.2 1.8-4 4-4s4 1.8 4 4v10M38 30c0-2.2 1.8-4 4-4s4 1.8 4 4v14c0 8-6 16-14 16h-6c-4 0-7-3-8-6L8 38c-1.2-2 .4-5 3-5 1.6 0 3 1 4 2.5L22 42"
      stroke="#0a0a0a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="#ffffff"
    />
  </svg>
);

// -----------------------------------------------------------------------------
//  Click sparkle — coral asterisk burst that flashes at click moment.
// -----------------------------------------------------------------------------
const ClickSparkle: React.FC<{progress: number}> = ({progress}) => {
  // progress 0..1: rays grow then fade
  const grow = Math.min(1, progress * 2.4);
  const fade = Math.max(0, 1 - Math.max(0, progress - 0.4) * 1.6);
  const rays = 10;
  return (
    <svg width={120} height={120} viewBox="-50 -50 100 100" style={{opacity: fade}}>
      {Array.from({length: rays}).map((_, i) => {
        const a = (i / rays) * 360;
        return (
          <rect
            key={i}
            x={-2}
            y={-30 * grow}
            width={4}
            height={18 * grow}
            rx={2}
            fill={C.coral}
            transform={`rotate(${a})`}
          />
        );
      })}
    </svg>
  );
};

// -----------------------------------------------------------------------------
//  Composer card — Phase A. Pure layout; takes scale + opacity from caller.
// -----------------------------------------------------------------------------
const ComposerCard: React.FC<{frame: number}> = ({frame}) => {
  // (frame is local to Phase A; clamp >=0)
  const f = Math.max(0, frame);
  const sendPulse = interpolate(f, [8, 12, 16], [1, 0.94, 1], clamped);
  return (
    <div
      style={{
        width: 1640,
        background: C.card,
        borderRadius: 32,
        boxShadow: "0 28px 60px rgba(0,0,0,0.06)",
        padding: "44px 56px 38px",
        fontFamily: FONT_FAMILY,
        boxSizing: "border-box",
      }}
    >
      {/* Pouch thumbnail */}
      <div style={{display: "flex", alignItems: "flex-start", gap: 24, marginBottom: 26}}>
        <PouchThumb />
      </div>
      {/* Prompt text */}
      <div
        style={{
          color: C.ink,
          fontSize: 50,
          lineHeight: 1.28,
          fontWeight: 500,
          letterSpacing: -0.3,
        }}
      >
        My brand is Früns — superfood gummies. Find the best ads my competitors are running in
        meta ads library, study my winning campaigns through meta ads mcp, and generate 20 videos
        based on what&apos;s working for me and my competitors.
      </div>
      {/* Bottom row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 32,
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: 8, color: "#666", fontSize: 38, fontWeight: 500}}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: 12,
              border: "2px solid #d2d2d2",
              fontSize: 30,
              lineHeight: 1,
              color: "#9a9a9a",
            }}
          >
            +
          </span>
        </div>
        <div style={{display: "flex", alignItems: "center", gap: 22}}>
          <div style={{display: "flex", alignItems: "center", gap: 10, color: C.ink, fontSize: 38, fontWeight: 500, fontFamily: "Georgia, 'Times New Roman', serif"}}>
            <span>Opus 4.7</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 9l7 7 7-7" stroke="#1a1a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 18,
              background: C.coral,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: `scale(${sendPulse})`,
              transition: "transform 80ms ease-out",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M12 20V5M5 12l7-7 7 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pink pouch SVG fallback (used if the generated PNG isn't present at render).
const PouchSvg: React.FC = () => (
  <svg width="180" height="180" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="pouchG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f9b9c6" />
        <stop offset="100%" stopColor="#e88aa1" />
      </linearGradient>
    </defs>
    <path d="M22 18 h56 a4 4 0 0 1 4 4 v62 a4 4 0 0 1 -4 4 h-56 a4 4 0 0 1 -4 -4 v-62 a4 4 0 0 1 4 -4 z" fill="url(#pouchG)" />
    <path d="M44 20 c0-3 3-5 6-5 s6 2 6 5 c0 3-6 6-6 6 s-6-3-6-6 z" fill="#ffffff" opacity="0.7" />
    <text x="50" y="44" fontSize="14" fontFamily="Georgia, serif" fontStyle="italic" textAnchor="middle" fill="#ffffff" fontWeight="700">früns</text>
    <ellipse cx="42" cy="62" rx="8" ry="9" fill="#b22a3a" />
    <ellipse cx="55" cy="62" rx="8" ry="9" fill="#b22a3a" />
    <rect x="34" y="78" width="32" height="6" rx="2" fill="#6a4456" />
  </svg>
);

const PouchThumb: React.FC = () => {
  try {
    const src = staticFile("aigen/scene02/pouch_front.png");
    return (
      <div style={{width: 180, height: 180, display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Img src={src} style={{width: 170, height: 170, objectFit: "contain"}} />
      </div>
    );
  } catch {
    return <PouchSvg />;
  }
};

// -----------------------------------------------------------------------------
//  Helpers — RGB interpolation between two hex colors.
// -----------------------------------------------------------------------------
const hexToRgb = (h: string) => {
  const n = h.replace("#", "");
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)] as const;
};
const lerpColor = (a: string, b: string, t: number) => {
  const ra = hexToRgb(a);
  const rb = hexToRgb(b);
  const c = (i: number) => Math.round(ra[i] + (rb[i] - ra[i]) * Math.max(0, Math.min(1, t)));
  return `rgb(${c(0)}, ${c(1)}, ${c(2)})`;
};

// -----------------------------------------------------------------------------
//  Bullet row — icon + label with character-level amber sweep + URL chip.
//
//  The source uses a left-to-right wipe inside the first word: the leading
//  characters settle to dark-grey first, while the trailing characters stay
//  amber. The "wipe head" travels rightward through the word, so at any moment
//  the word reads as e.g. "Br" (dark) + "owsing" (amber).
// -----------------------------------------------------------------------------
const BulletRow: React.FC<{b: Bullet; frame: number; fps: number}> = ({b, frame, fps}) => {
  const local = frame - b.start;
  const labelP = springProgress(frame, fps, b.start, 22, MOTION.heroSpring);
  // Wipe head travels through the highlight word over local frames 4..28.
  const wipeT = interpolate(local, [4, 28], [0, 1], clamped);
  const N = b.highlight.length;
  // URL chip enters ~5 frames after the label
  const urlP = b.url ? springProgress(frame, fps, b.start + 5, 22, MOTION.heroSpring) : 0;
  const iconOpacity = interpolate(local, [0, 8], [0, 1], clamped);
  const iconTrans = interpolate(local, [0, 12], [-12, 0], clamped);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        opacity: labelP,
        transform: `translateY(${(1 - labelP) * 14}px)`,
      }}
    >
      <div style={{display: "flex", alignItems: "center", gap: 24}}>
        <div style={{opacity: iconOpacity, transform: `translateX(${iconTrans}px)`, display: "flex", width: 42, height: 42, alignItems: "center", justifyContent: "center"}}>
          <Icon kind={b.icon} size={42} color={C.ink} />
        </div>
        <div
          style={{
            fontFamily: FONT_FAMILY,
            fontSize: 44,
            fontWeight: 500,
            color: C.inkSoft,
            letterSpacing: -0.2,
            whiteSpace: "pre",
          }}
        >
          <span style={{fontWeight: 700}}>
            {b.highlight.split("").map((ch, i) => {
              // Each char's local progress is (wipeT * N) - i  in [0..1] when the
              // wipe head crosses this character. We want char to be amber while
              // head not yet here, settled (ink) once head has passed.
              const headPos = wipeT * (N + 1);
              const charP = headPos - i; // <0 still amber, >1 fully ink
              const t = Math.max(0, Math.min(1, charP));
              const col = lerpColor(C.amber, C.inkSoft, t);
              return (
                <span key={i} style={{color: col}}>
                  {ch}
                </span>
              );
            })}
          </span>
          <span style={{color: C.inkSoft}}>{b.rest}</span>
        </div>
      </div>
      {b.url && (
        <div
          style={{
            marginLeft: 24 + 42 + 24,
            opacity: urlP,
            transform: `translateY(${(1 - urlP) * 6}px)`,
            display: "inline-flex",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontStyle: "italic",
              fontSize: 26,
              color: C.coralDeep,
              background: C.coralSoft,
              padding: "5px 12px",
              borderRadius: 4,
              letterSpacing: 0.2,
            }}
          >
            {b.url}
          </span>
        </div>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------
//  Phase B — title + scrolling list.
// -----------------------------------------------------------------------------
const PhaseB: React.FC<{frame: number; fps: number}> = ({frame, fps}) => {
  // Title parts
  const titleP = springProgress(frame, fps, TITLE_IN, 26, MOTION.heroSpring);
  const burstP = springProgress(frame, fps, BURST_IN, 30, MOTION.heroSpring);
  // "ads" appears at the very end of the word-write — fades to ~0.55 alpha grey
  const adsP = interpolate(frame, [TITLE_IN + 18, TITLE_IN + 36], [0, 1], clamped);

  // Global continuous scroll. Begins around R96 (source ~f32) — at that
  // point bullets 3-4 are present and need to slide upward. Title scrolls
  // off the top by ~R130. By R177 we want ~6 rows scrolled (~1020px).
  const SCROLL_START = 96;
  const SCROLL_PER_FRAME = 16.0; // px per Remotion frame
  const scroll = Math.max(0, (frame - SCROLL_START) * SCROLL_PER_FRAME);

  // The title and bullets share the same scrolling container so the title
  // glides upward and eventually off-screen, matching the source.
  return (
    <AbsoluteFill style={{background: C.bg}}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          transform: `translateY(${-scroll}px)`,
        }}
      >
        {/* Title row */}
        <div
          style={{
            position: "relative",
            marginTop: 290,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{display: "flex", alignItems: "center", gap: 26}}>
            <div
              style={{
                opacity: burstP,
                transform: `scale(${0.3 + burstP * 0.7})`,
                transformOrigin: "center",
                display: "flex",
              }}
            >
              <Starburst size={170} rotate={(frame - BURST_IN) * 0.5} opacity={1} />
            </div>
            <div
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize: 132,
                letterSpacing: -2,
                color: C.ink,
                opacity: titleP,
                transform: `translateY(${(1 - titleP) * 16}px)`,
                whiteSpace: "pre",
                lineHeight: 1,
              }}
            >
              Pulling competitor <span style={{color: C.inkFaint, opacity: adsP}}>ads</span>
            </div>
          </div>
        </div>

        {/* Bullet stack */}
        <div
          style={{
            position: "relative",
            marginTop: 110,
            marginLeft: 300,
            marginRight: 300,
            display: "flex",
            flexDirection: "column",
            gap: 38,
          }}
        >
          {BULLETS.map((b, i) => (
            <BulletRow key={i} b={b} frame={frame} fps={fps} />
          ))}
        </div>
      </div>

      {/* Top fade-mask: bullets/title soften as they leave the visible area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 280,
          background: `linear-gradient(to bottom, ${C.bg} 0%, ${C.bg} 50%, rgba(244,241,236,0) 100%)`,
          pointerEvents: "none",
        }}
      />
      {/* Bottom fade-mask */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: `linear-gradient(to top, ${C.bg} 0%, rgba(244,241,236,0) 100%)`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};

// -----------------------------------------------------------------------------
//  Phase A — composer + cursor + zoom-in + fade to Phase B.
//
//  Source mapping (source frame → Remotion frame ≈ source*3):
//    f1..f7  (R 0..21)   composer steady, cursor sliding in from right
//    f8..f12 (R 21..36)  cursor lands on send button, click sparkle at f12
//    f13..f22(R 36..63)  composer scales up (origin = send button) and
//                        fades white toward Phase B handoff at ~R63
// -----------------------------------------------------------------------------
const PhaseA: React.FC<{frame: number; fps: number}> = ({frame, fps}) => {
  const CURSOR_IN = 8;       // cursor enters off-right around R8 (source ~f3)
  const CLICK_FRAME = 30;    // source f10 ≈ R30 (sparkle visible at f12 → R36)
  const ZOOM_START = CLICK_FRAME - 6;  // zoom begins building just before click
  const ZOOM_END = 60;       // composer fully scaled+faded by R60

  // Cursor enters from off-right (above the send button) and dives down/left
  // to land on the send button.
  const startX = 1900;
  const startY = 380;        // higher up off the screen — comes from above-right
  const endX = 1620;         // tip just over send button
  const endY = 700;
  const cursorP = interpolate(frame, [CURSOR_IN, CLICK_FRAME], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: bezier(MOTION.expoOut),
  });
  const cx = interpolate(cursorP, [0, 1], [startX, endX]);
  const cy = interpolate(cursorP, [0, 1], [startY, endY]);
  const cursorOpacity = interpolate(
    frame,
    [CURSOR_IN - 3, CURSOR_IN + 2, CLICK_FRAME + 8, CLICK_FRAME + 22],
    [0, 1, 1, 0],
    clamped,
  );

  // Sparkle 0..1 spans CLICK_FRAME .. CLICK_FRAME+15
  const sparkleP = interpolate(frame, [CLICK_FRAME, CLICK_FRAME + 15], [0, 1], clamped);

  // Zoom-in + fade-out. Aggressive zoom matching source where by source f15
  // (R42) we see ~2x scale of the composer.
  const zoomP = interpolate(frame, [ZOOM_START, ZOOM_END], [0, 1], {
    ...clamped,
    easing: bezier([0.4, 0, 0.6, 1] as const),
  });
  const scale = interpolate(zoomP, [0, 1], [1, 3.0]);
  const fade = interpolate(frame, [ZOOM_END - 16, ZOOM_END + 2], [1, 0], clamped);

  // The composer is centered at screen center. Send button sits about 750px
  // right of center, 220px below center → translate to a % origin.
  const sendBtnX = VIDEO_WIDTH / 2 + 760;
  const sendBtnY = VIDEO_HEIGHT / 2 + 220;
  const originX = (sendBtnX / VIDEO_WIDTH) * 100;
  const originY = (sendBtnY / VIDEO_HEIGHT) * 100;

  return (
    <AbsoluteFill style={{background: C.bg}}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transformOrigin: `${originX}% ${originY}%`,
          transform: `scale(${scale})`,
          opacity: fade,
        }}
      >
        <ComposerCard frame={frame} />
      </div>

      {/* Cursor + sparkle layer */}
      <div
        style={{
          position: "absolute",
          left: cx,
          top: cy,
          opacity: cursorOpacity,
          transformOrigin: "12% 12%",
        }}
      >
        {sparkleP > 0 && sparkleP < 1 && (
          <div style={{position: "absolute", left: -10, top: -6}}>
            <ClickSparkle progress={sparkleP} />
          </div>
        )}
        <HandCursor size={104} />
      </div>
    </AbsoluteFill>
  );
};

// -----------------------------------------------------------------------------
//  Scene component
// -----------------------------------------------------------------------------
export const Scene02Seg001: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // Phase A holds from start with no entrance fade (continues from Scene 01).
  // Crossfade to Phase B between frames ~50 and 66 (source f17→f22).
  const aAlpha = interpolate(frame, [50, 66], [1, 0], clamped);
  const bAlpha = interpolate(frame, [48, 66], [0, 1], clamped);

  return (
    <AbsoluteFill style={{background: C.bg, fontFamily: FONT_FAMILY, color: PALETTE.ink}}>
      {bAlpha > 0 && (
        <div style={{position: "absolute", inset: 0, opacity: bAlpha}}>
          <PhaseB frame={frame} fps={fps} />
        </div>
      )}
      {aAlpha > 0 && (
        <div style={{position: "absolute", inset: 0, opacity: aAlpha}}>
          <PhaseA frame={frame} fps={fps} />
        </div>
      )}
    </AbsoluteFill>
  );
};
