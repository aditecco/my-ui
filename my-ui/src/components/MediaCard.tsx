/* ---------------------------------
MediaCard
--------------------------------- */

import React, { PropsWithChildren, ReactElement } from "react";
import CardMedia from "./CardMedia";
import Card from "./Card";
import RatingControls from "../_import/RatingControls/RatingControls";

type MediaCardProps = {
  withRating?: boolean;
};

export function MediaCard({
  withRating,
}: PropsWithChildren<MediaCardProps>): ReactElement {
  return (
    <Card>
      {/* RATING */}
      {withRating && <RatingControls initialRating={0} onRate={() => {}} />}

      {/* MEDIA SECTION */}
      <CardMedia />
    </Card>
  );
}
