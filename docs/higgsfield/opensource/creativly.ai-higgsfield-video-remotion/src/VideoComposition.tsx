import React from "react";
import {AbsoluteFill, Sequence} from "remotion";
import {BEATS, BEAT_STARTS, PALETTE} from "./tokens";
import {Scene01Seg000} from "./scenes/Scene01_Seg000";
import {Scene02Seg001} from "./scenes/Scene02_Seg001";
import {Scene03Seg002} from "./scenes/Scene03_Seg002";
import {Scene04Seg003} from "./scenes/Scene04_Seg003";
import {Scene05Seg004} from "./scenes/Scene05_Seg004";
import {Scene06Seg005} from "./scenes/Scene06_Seg005";
import {Scene07Seg006} from "./scenes/Scene07_Seg006";
import {Scene08Seg007} from "./scenes/Scene08_Seg007";
import {Scene09Seg008} from "./scenes/Scene09_Seg008";
import {Scene10Seg009} from "./scenes/Scene10_Seg009";
import {Scene11Seg010} from "./scenes/Scene11_Seg010";

const SCENE_COMPONENTS = [Scene01Seg000, Scene02Seg001, Scene03Seg002, Scene04Seg003, Scene05Seg004, Scene06Seg005, Scene07Seg006, Scene08Seg007, Scene09Seg008, Scene10Seg009, Scene11Seg010];

export const VideoComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{background: PALETTE.black}}>
      {BEATS.map((beat, i) => {
        const Scene = SCENE_COMPONENTS[i];
        return (
          <Sequence
            key={beat.name}
            durationInFrames={beat.duration}
            from={BEAT_STARTS[i]}
            name={beat.name}
            premountFor={20}
          >
            <Scene />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};
