import React from "react";
import {AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame, useVideoConfig} from "remotion";
import {MOTION} from "../tokens";
import {FONT_FAMILY, clamped, fadeWindow, springProgress} from "../helpers";

/**
 * Scene 03 (seg002, 90 frames @ 30fps).
 *
 * Story beats (scene-local frames; scene begins at Remotion 362):
 *  - 0-12   Carryover checklist scrolls up and fades out.
 *  - 12-30  Hero "* Here's what I've found" fades + de-blurs in.
 *  - 24-36  Subtitle "Meta Ads Library" fades in.
 *  - 24-42  Reel-card strip rises + scales + slight fan rotation from bottom.
 *  - 42-60  Strip settles, holds.
 *  - 60-90  Horizontal pan to the left with progressive motion blur.
 *
 * Palette is the "paper" warm off-white; ink is the warm charcoal.
 */

// ---- palette overrides specific to this paper-style scene -------------------
const PAPER = "#F4F0E8";
const INK = "#1f1c18";
const ACCENT = "#C8523A";
const URL_RED = "#B65C54";
const SUBTITLE = "#7a766e";
const LIST_HIGHLIGHT = "#D88A4A";

// ---- carryover checklist (matches Scene 02 final state) ---------------------
type ListItem = {
  icon: string;
  pre: string; // colored prefix
  rest: string; // dark continuation
  url: string;
};

const CHECKLIST: ListItem[] = [
  {
    icon: "🎙",
    pre: "Transcrib",
    rest: "ing voiceovers and on-screen text",
    url: "facebook.com/ads/library?view=video-detail",
  },
  {
    icon: "👤",
    pre: "Analyz",
    rest: "ing creator-led vs brand-led creative split",
    url: "facebook.com/ads/library?filter=creator-type",
  },
  {
    icon: "✂",
    pre: "Anal",
    rest: "ysing via external connectors",
    url: "facebook.com/ads/library?analyze=creative-elements",
  },
  {
    icon: "↗",
    pre: "Clust",
    rest: "ering by hook type — POV, UGC review, problem-solution, mukbang",
    url: "facebook.com/ads/library?cluster=hooks",
  },
  {
    icon: "📷",
    pre: "Cross",
    rest: "-referencing Instagram Reels trends for format alignment",
    url: "instagram.com/business/insights/reels-trends",
  },
];

// ---- reel card definitions --------------------------------------------------
type ReelCard = {
  src: string;
  // initial horizontal offset from the row center, in px
  x: number;
  // initial rotation in deg used as the fan
  rot: number;
};

// Cards are arranged in a near-upright horizontal row with a very subtle fan
// (~2-3° on edges), as in the source. Center card is straight; outer cards
// tilt slightly outward to give the row a concave / arc-like feel.
const CARDS: ReelCard[] = [
  {src: "card1_cozy_interior.png", x: -840, rot: -6},
  {src: "card2_dropper_closeup.png", x: -420, rot: -3},
  {src: "card3_orange_pouch.png", x: 0, rot: 0},
  {src: "card4_lemon_tree.png", x: 420, rot: 3},
  {src: "card5_lipstick_overhead.png", x: 840, rot: 6},
  {src: "card6_boutique_arches.png", x: 1260, rot: 8},
];

const CARD_W = 360;
const CARD_H = 640;

// ---- asterisk-glyph (Claude 8-arm starburst, pointed teardrop arms) --------
const Asterisk: React.FC<{size: number; color: string}> = ({size, color}) => {
  const arms = 8;
  // Each arm is a tapered teardrop pointing outward.
  // Path is a tall isoceles diamond with rounded inner end.
  const armPath = "M0 -46 L7 -16 L0 -8 L-7 -16 Z";
  return (
    <svg
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      style={{flexShrink: 0}}
    >
      {Array.from({length: arms}).map((_, i) => {
        const angle = (i * 360) / arms;
        return (
          <path
            key={i}
            d={armPath}
            fill={color}
            transform={`rotate(${angle})`}
          />
        );
      })}
    </svg>
  );
};

// ---- checklist row ---------------------------------------------------------
const ChecklistRow: React.FC<{item: ListItem}> = ({item}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginBottom: 26,
    }}
  >
    <div style={{display: "flex", alignItems: "center", gap: 20, fontSize: 36}}>
      <span style={{fontSize: 32, opacity: 0.85}}>{item.icon}</span>
      <span>
        <span style={{color: LIST_HIGHLIGHT}}>{item.pre}</span>
        <span style={{color: INK}}>{item.rest}</span>
      </span>
    </div>
    <div
      style={{
        marginLeft: 64,
        padding: "4px 10px",
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(0,0,0,0.04)",
        borderRadius: 4,
        color: URL_RED,
        fontSize: 22,
        letterSpacing: 0.2,
        width: "fit-content",
      }}
    >
      {item.url}
    </div>
  </div>
);

export const Scene03Seg002: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  // ---- checklist exit (slow scroll, finishes ~frame 45) -------------------
  // Source f005 (Remotion 12) still shows multiple items. f010 (R 27) shows
  // "Cross-referencing" near top. f015 (R 42) shows just "Cross-referencing"
  // fading at the very top. By f018 (R 51) it's gone.
  const checklistExitP = interpolate(frame, [0, 45], [0.35, 1], clamped);
  const checklistY = -checklistExitP * 920;
  const checklistOpacity = interpolate(frame, [0, 36, 45], [1, 0.75, 0], clamped);

  // ---- hero entry (frames 22..46) -----------------------------------------
  const heroP = springProgress(frame, fps, 22, 24, MOTION.smooth);
  const heroOpacity = interpolate(heroP, [0, 1], [0, 1]);
  const heroBlur = interpolate(heroP, [0, 1], [18, 0], clamped);
  const heroScale = interpolate(heroP, [0, 1], [0.965, 1]);

  // ---- subtitle entry (frames 30..48) -------------------------------------
  const subP = springProgress(frame, fps, 30, 18, MOTION.smooth);
  const subOpacity = interpolate(subP, [0, 1], [0, 1]);
  const subBlur = interpolate(subP, [0, 1], [10, 0], clamped);

  // ---- cards entry / settle / pan -----------------------------------------
  // entry envelope: rise + scale + de-blur from below (frames 32..56)
  const cardsRise = springProgress(frame, fps, 32, 24, MOTION.snappy);
  const cardsScale = interpolate(cardsRise, [0, 1], [0.92, 1]);
  const cardsTransY = (1 - cardsRise) * 420; // rise from below the viewport
  const cardsOpacity = interpolate(frame, [32, 42], [0, 1], clamped);
  // entry blur sharpens as cards settle
  const cardsEntryBlur = interpolate(cardsRise, [0, 1], [10, 0], clamped);

  // Horizontal pan: cards slide steadily leftward in the last third.
  // Faster — source has the leftmost card mostly off-screen by R 434 (f25 = local 72).
  const panSlow = interpolate(frame, [55, 72], [0, 480], clamped);
  const panFast = interpolate(frame, [72, 90], [0, 1100], clamped);
  const panX = -(panSlow + panFast);

  // Exit motion-blur builds at the end of the scene.
  const panBlur = interpolate(frame, [78, 90], [0, 14], clamped);
  const totalCardBlur = cardsEntryBlur + panBlur;

  // outro fade so the scene transitions cleanly
  const outroOpacity = fadeWindow(frame, 0, 14, 86, 90);

  return (
    <AbsoluteFill
      style={{
        background: PAPER,
        color: INK,
        fontFamily: FONT_FAMILY,
        overflow: "hidden",
      }}
    >
      {/* ---- carryover checklist (top, scrolls away) -------------------- */}
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 240,
          right: 240,
          opacity: checklistOpacity,
          transform: `translateY(${checklistY}px)`,
          willChange: "transform, opacity",
        }}
      >
        {CHECKLIST.map((it) => (
          <ChecklistRow key={it.pre} item={it} />
        ))}
      </div>

      {/* ---- hero title -------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          opacity: heroOpacity * outroOpacity,
          transform: `scale(${heroScale})`,
          filter: `blur(${heroBlur}px)`,
          willChange: "opacity, filter, transform",
        }}
      >
        <Asterisk size={90} color={ACCENT} />
        <div
          style={{
            fontFamily: '"Georgia","Times New Roman",serif',
            fontSize: 108,
            fontWeight: 400,
            letterSpacing: -1.2,
            color: INK,
            lineHeight: 1,
          }}
        >
          Here&rsquo;s what I&rsquo;ve found
        </div>
      </div>

      {/* ---- subtitle ---------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 348,
          textAlign: "center",
          opacity: subOpacity * outroOpacity,
          color: SUBTITLE,
          fontFamily: '"Georgia","Times New Roman",serif',
          fontSize: 36,
          fontWeight: 400,
          letterSpacing: 0.6,
          filter: subBlur > 0.1 ? `blur(${subBlur}px)` : undefined,
        }}
      >
        Meta Ads Library
      </div>

      {/* ---- reel card strip -------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 430,
          opacity: cardsOpacity * outroOpacity,
          transform: `translateX(${panX}px) translateY(${cardsTransY}px) scale(${cardsScale})`,
          transformOrigin: "50% 100%",
          filter: totalCardBlur > 0.1 ? `blur(${totalCardBlur}px)` : undefined,
          willChange: "transform, filter",
        }}
      >
        {CARDS.map((c, i) => {
          // each card gets a tiny per-index stagger so the entry feels alive
          const localP = springProgress(frame, fps, 32 + i * 1.6, 22, MOTION.snappy);
          const localY = (1 - localP) * (60 + i * 8);
          // Settle to target rotation; arrives from a slightly larger fan angle.
          const localRot = c.rot + (1 - localP) * c.rot * 0.4;
          return (
            <div
              key={c.src}
              style={{
                position: "absolute",
                left: c.x - CARD_W / 2,
                top: 0,
                width: CARD_W,
                height: CARD_H,
                transform: `translateY(${localY}px) rotate(${localRot}deg)`,
                transformOrigin: "50% 100%",
                borderRadius: 28,
                overflow: "hidden",
                boxShadow:
                  "0 22px 44px rgba(50,40,30,0.10), 0 2px 6px rgba(50,40,30,0.06)",
                background: "#ddd",
                willChange: "transform",
              }}
            >
              <Img
                src={staticFile(`aigen/scene03/${c.src}`)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ---- soft top/bottom edge vignettes for paper feel -------------- */}
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(244,240,232,0.0) 0%, rgba(244,240,232,0.0) 75%, rgba(244,240,232,0.85) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
