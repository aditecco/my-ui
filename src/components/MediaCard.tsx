/* ---------------------------------
MediaCard
--------------------------------- */

import * as React from "react";
import CardMedia, { CardMediaProps } from "./CardMedia";
import Card from "./Card";
import { PropsWithChildren, ReactElement } from "react";
import RatingControls from "./RatingControls";

export type MediaCardProps = {
  withRating?: boolean;
} & CardMediaProps;

export function MediaCard({
  withRating,
  ...props
}: PropsWithChildren<MediaCardProps>): ReactElement {
  return (
    <Card>
      {/* RATING */}
      {withRating && (
        <RatingControls initialRating={0} onRate={props?.onRate} />
      )}

      {/* MEDIA SECTION */}
      <CardMedia {...props} />
    </Card>
  );
}
