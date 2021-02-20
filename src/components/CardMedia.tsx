/** @jsxImportSource @emotion/react */

/* ---------------------------------
CardMedia
--------------------------------- */

import * as React from "react";
import { mediaHeight, montserrat, $textShadow } from "../css-vars";
import { flex } from "../css-functions";
import { css } from "@emotion/react";

export type CardMediaProps = {
  background: string;
  title: string;
  infoItem_01?: { [s in string]: string };
  infoItem_02?: { [s in string]: string };
  infoItem_03?: { [s in string]: string };
};

export default function CardMedia({
  background,
  title,
  infoItem_01,
  infoItem_02,
  infoItem_03,
}: CardMediaProps) {
  const key_01 = Object.keys?.(infoItem_01 ?? {})?.shift?.();
  const key_02 = Object.keys?.(infoItem_02 ?? {})?.shift?.();
  const key_03 = Object.keys?.(infoItem_03 ?? {})?.shift?.();

  return (
    <div
      css={css`
        overflow: hidden;
        height: ${mediaHeight};
        position: relative;
        border-radius: 6px;

        .CardBackground {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }

        .CardBackdrop {
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
            font-family: ${montserrat};
            font-weight: normal;
            color: white;
            text-shadow: ${$textShadow};
            text-transform: capitalize;
            line-height: 1.4;
            font-size: 1.5rem;
          }
        }

        .CardInfo {
          display: flex;
          flex-flow: row wrap;
          color: white;
          list-style: none;
          padding: 0.6rem 0;
          justify-content: space-between;
          border-top: 1px solid white;
          margin: 0 1rem;

          &Item {
            color: #f1f1f1;
            font-size: 15px;

            &Title {
              text-transform: uppercase;
              font-size: 12px;
              margin: 0 0 0.5rem;
              color: #999;
            }
          }
        }
      `}
    >
      <figure>
        <img
          src={background ?? ""}
          alt={title ?? ""}
          className="CardBackground"
        />
      </figure>

      <div className="CardBackdrop">
        <h3 className="CardBackdropTitle">{title ?? ""}</h3>

        <ul className="CardInfo">
          <li className="CardInfoItem">
            <h6 className="CardInfoItemTitle">{key_01 && key_01}</h6>

            {key_01 && (infoItem_01?.[key_01] ?? "N/A")}
          </li>

          <li className="CardInfoItem">
            <h6 className="CardInfoItemTitle">{key_02 && key_02}</h6>

            {key_02 && (infoItem_02?.[key_02] ?? "N/A")}
          </li>

          <li className="CardInfoItem">
            <h6 className="CardInfoItemTitle">{key_03 && key_03}</h6>

            {key_03 && (infoItem_03?.[key_03] ?? "N/A")}
          </li>
        </ul>
      </div>
    </div>
  );
}
