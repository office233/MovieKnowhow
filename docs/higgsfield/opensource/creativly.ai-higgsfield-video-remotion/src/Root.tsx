import React from "react";
import {Composition} from "remotion";
import {VideoComposition} from "./VideoComposition";
import {COMPOSITION_ID, TOTAL_DURATION, VIDEO_FPS, VIDEO_HEIGHT, VIDEO_WIDTH} from "./tokens";
import "./styles.css";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      component={VideoComposition}
      durationInFrames={TOTAL_DURATION}
      fps={VIDEO_FPS}
      height={VIDEO_HEIGHT}
      id={COMPOSITION_ID}
      width={VIDEO_WIDTH}
    />
  );
};
