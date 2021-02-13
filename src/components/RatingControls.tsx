/* ---------------------------------
RatingControls
--------------------------------- */

import * as React from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import MaterialIcon from "./MaterialIcon";

export type RatingControlsProps = {
  initialRating?: number | undefined;
  maxRating?: number | undefined;
  onRate?: (arg0) => void;
  standalone?: boolean;
};

const RatingControls = styled.span<RatingControlsProps>`
  ${props => !props.standalone && `position: absolute; top: 5px; left: 5px;`}
  display: inline-block;
  z-index: 2;
  padding: 6px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.7);

  .RatingControlsButton {
    background-color: transparent;
    border: none;
    outline: none;

    //@include zoomOnHover(1.25);
  }

  i.material-icons {
    color: gold;
    font-size: 22px;
    font-weight: bold;
  }
`;

export default function ({
  initialRating,
  maxRating = 5,
  onRate,
  standalone = false,
}: RatingControlsProps) {
  const [starred, setStarred] = useState(initRating(initialRating) || {});

  /**
   * initRating
   */

  function initRating(rating) {
    if (!rating) return undefined;

    let r = {};

    for (let i = 0; i <= maxRating; i++) {
      if (i <= rating - 1) {
        r[i] = true;
      }

      //
      else {
        r[i] = false;
      }
    }

    return r;
  }

  /**
   * handleRating
   */
  function handleRating(e: React.MouseEvent<HTMLButtonElement>) {
    const { id } = e.currentTarget;
    const currentStar = Number(id);

    if (!starred[currentStar + 1]) {
      let stars = {};

      for (let i = 0; i <= currentStar; i++) {
        if (!starred[currentStar]) {
          stars[i] = true;
        }

        //
        else {
          stars[i] = false;
        }
      }

      setStarred(stars);

      onRate &&
        onRate(Object.values(stars).every(star => !star) ? 0 : currentStar + 1);
    }
  }

  return (
    <RatingControls>
      <div>
        {Array(maxRating)
          .fill("")
          .map((_, i) => (
            <button
              className="RatingControlsButton"
              key={i}
              id={String(i)}
              onClick={handleRating}
              data-starred={starred[String(i)]}
            >
              <MaterialIcon
                icon={starred[String(i)] ? "star" : "star_outline"}
              />
            </button>
          ))}
      </div>
    </RatingControls>
  );
}
