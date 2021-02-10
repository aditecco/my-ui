/* ---------------------------------
MediaCardWithFlip
--------------------------------- */

import * as React from "react";
import CardFlipControls from "./CardFlipControls";
import Flip from "./Flip";
import InfoSheet, { InfoSheetProps } from "./InfoSheet";
import Card from "./Card";
import CardMedia, { CardMediaProps } from "./CardMedia";
// @ts-ignore
import bg from "../stories/_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";
import { MediaCardProps } from "./MediaCard";

export type MediaCardWithFlipProps = MediaCardProps &
  CardMediaProps &
  InfoSheetProps;

export const MediaCardWithFlip: React.FC<MediaCardWithFlipProps> = ({
  info,
  withRating,
  ...mediaProps
}) => {
  return (
    <Flip>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card>
            <CardMedia {...mediaProps} />
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Front>

      <Flip.Back>
        {({ setFlipped }) => (
          <Card>
            <InfoSheet title={mediaProps?.title} info={info} />
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
};
