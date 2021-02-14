/* ---------------------------------
Spinner
--------------------------------- */

import * as React from "react";
import { flex, round } from "../css-functions";
import styled from "@emotion/styled";
import { ReactElement } from "react";
import { accent, transparent } from "../css-vars";

export type SpinnerProps = {
  color?: string;
  duration?: string;
  shadow?: string;
};

export type SpinnerContainerProps = {
  inline?: boolean;
};

// SpinnerContainer
const SpinnerContainer = styled.div<SpinnerContainerProps>`
  ${flex("column nowrap")}
  position: ${props =>
    props?.inline ? "position: static; width: 100%; height: 100%" : "fixed"};
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

// Spinner
const Spinner = styled.div<SpinnerProps>`
  // inpired by: https://codepen.io/alexanderkaran/pen/BaNmmRV?editors=0100

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  ${round(60)}
  border: 7px solid #dadada;
  border-top-color: ${props => props?.color ?? accent};
  box-shadow: ${props => props?.shadow ?? "0 2px 40px #00000017"};
  background-color: ${transparent};

  /*
  longhand:

  animation-duration
  animation-timing-function
  animation-delay
  animation-iteration-count
  animation-direction
  animation-fill-mode
  animation-play-state
  animation-name
  */

  animation: 900ms infinite spin;
  animation-duration: ${props => props?.duration ?? "900ms"};
`;

// Spinner
export default function ({
  inline,
  ...props
}: SpinnerContainerProps & SpinnerProps): ReactElement {
  return (
    <SpinnerContainer inline={inline}>
      <Spinner {...props} />
    </SpinnerContainer>
  );
}
