/******************
  Button
*******************/

import * as React from "react";
import styled from "@emotion/styled";
import {
  accentDark,
  accent,
  hover,
  padding,
  radius,
  transparent,
} from "../css-vars";

export type ButtonProps = {};

/**
 * Button
 */
export const Button = styled.button<ButtonProps>`
  display: inline-block;
  min-width: 100px;
  padding: calc(${padding} / 2);
  border-radius: ${radius};
  border: 2px solid ${transparent};
  background-color: ${accent};
  font-size: small;
  text-align: center;
  text-transform: uppercase;
  color: white;
  cursor: pointer;
  transition: background 300ms ease-in-out, border 300ms ease-in-out,
    color 300ms ease-in-out;

  &:hover {
    background-color: ${accentDark};
  }
`;

/**
 * OutlineButton
 */
export const OutlineButton = styled(Button)`
  background-color: ${transparent};
  color: ${accent};
  border: 2px solid ${accent};

  &:hover {
    background-color: ${transparent};
    border: 2px solid ${accentDark};
    color: ${accentDark};
  }
`;

/**
 * NakedButton
 */
export const NakedButton = styled(OutlineButton)`
  border: 2px solid ${transparent};

  // &:hover {
  //   background-color: ${transparent};
  //   border: 2px solid ${accentDark};
  //   color: ${accentDark};
  // }
`;
