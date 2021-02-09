/* ---------------------------------
MediaCard
--------------------------------- */

import * as React from "react";
import CardMedia from "./CardMedia";
import Card from "./Card";
import RatingControls from "../_import/RatingControls/RatingControls";
import { PropsWithChildren, ReactElement } from "react";

type MediaCardProps = {
  withRating?: boolean;
  medium: string;
  title: string;
};

export function MediaCard({
  withRating,
  medium,
  title,
}: PropsWithChildren<MediaCardProps>): ReactElement {
  return (
    <Card>
      {/* RATING */}
      {withRating && <RatingControls initialRating={0} onRate={() => {}} />}

      {/* MEDIA SECTION */}
      <CardMedia title={title} background={medium} />
    </Card>
  );
}
