import React from "react";
import CardFlipControls from "./CardFlipControls";
import { MediaCard } from "./MediaCard";
import Flippable from "./Flippable";

/**
 * FlippableCard
 * @constructor
 */
export const FlippableCard: React.FC = () => {
  return (
    <Flippable>
      <Flippable.Front>
        {({ setFlipped }) => (
          <MediaCard title={"Xyz"}>
            <CardFlipControls onFlip={() => setFlipped((f) => !f)} />
          </MediaCard>
        )}
      </Flippable.Front>

      <Flippable.Back>
        {({ setFlipped }) => (
          <>
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
            BACK
          </>
        )}
      </Flippable.Back>
    </Flippable>
  );
};
