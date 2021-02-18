/******************
  Button
*******************/

import * as React from "react";
import styled from "@emotion/styled";
import { accent, hover, padding, radius, transparent } from "../css-vars";

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
  transition: all 500ms ease;

  &:hover {
    //color: white;
    //background-color:
  }
`;

/**
 * NakedButton
 */
export const NakedButton = styled(Button)`
  background-color: ${transparent};
  color: ${accent};
`;

/**
 * OutlineButton
 */
export const OutlineButton = styled(Button)`
  background-color: ${transparent};
  color: ${accent};
  border: 2px solid ${accent};

  &:hover {
    border: 2px solid ${hover};
    color: ${hover};
  }
`;
