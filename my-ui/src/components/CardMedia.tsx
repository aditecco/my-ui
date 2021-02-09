/* ---------------------------------
CardMedia
--------------------------------- */

import * as React from "react";
import { $mediaHeight, $montserrat, $textShadow } from "../css-vars";
import { flex } from "../css-functions";
import { clipText } from "../_import/utils";
import { CardProps } from "./Card";
import placeholder from "../stories/_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";
import styled from "@emotion/styled";

const CardMedia: React.FC<Partial<CardProps>> = ({
  title,
  type,
  year,
  image,
  additionalData,
}) => {
  return (
    <StyledCardMedia>
      <img src={image ?? placeholder} alt={title} className="CardPoster" />

      <div className="CardPosterCurtain">
        {/* INFO SECTION */}
        <h3 className="CardPosterCurtainTitle">{title}</h3>

        <ul className="CardMeta">
          <li className="CardMetaItem">
            <h6 className="CardMetaItemTitle">Year</h6>
            {year}
          </li>

          <li className="CardMetaItem">
            <h6 className="CardMetaItemTitle">Country</h6>

            {(additionalData?.country && clipText(additionalData.country)) ||
              "N/A"}
          </li>

          <li className="CardMetaItem">
            <h6 className="CardMetaItemTitle">Director</h6>

            {(additionalData?.director && clipText(additionalData.director)) ||
              "N/A"}
          </li>
        </ul>
      </div>
    </StyledCardMedia>
  );
};

export default CardMedia;

const StyledCardMedia = styled.section`
  overflow: hidden;
  height: ${$mediaHeight};
  position: relative;
  border-radius: 6px;

  .CardPoster {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  .CardPosterCurtain {
    ${flex("column nowrap", "flex-end", "stretch")}
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding-bottom: 20px;
    background: linear-gradient(to bottom, transparent 40%, black);

    &Title {
      padding: 1rem 1rem 0.25rem;
      margin: 0;
      font-family: ${$montserrat};
      font-weight: normal;
      color: white;
      text-shadow: ${$textShadow};
      text-transform: capitalize;
      line-height: 1.4;
      font-size: 1.5rem;
    }
  }

  .CardMeta {
    display: flex;
    flex-flow: row wrap;
    color: white;
    list-style: none;
    padding: 0.6rem 0;
    justify-content: space-between;
    border-top: 1px solid white;
    margin: 0 1rem;

    &Item {
      &Title {
        margin: 0;
      }
    }
  }
`;
