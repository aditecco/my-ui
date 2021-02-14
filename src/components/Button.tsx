/******************
  Button
*******************/

import * as React from "react";
import styled from "@emotion/styled";
import { PropsWithChildren, ReactElement } from "react";
import { transparent, accent, hover, padding, radius } from "../css-vars";
import classNames from "classnames";

export type ButtonProps = {
  className?: string | "button--naked" | "button--outline";
  onClick: (e: React.MouseEvent) => void;
};

const Button = styled.button<ButtonProps>`
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

  &.button--naked,
  &.button--outline {
    background-color: ${transparent};
    color: ${accent};
    // …hover
  }
  
  &.button--outline {
    border: 2px solid ${accent};

    &:hover {
      border: 2px solid ${hover};
      color: ${hover};
    }
`;

export default function ({
  className,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>): ReactElement {
  return (
    <Button
      className={classNames(["Button", className ?? ""])}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
