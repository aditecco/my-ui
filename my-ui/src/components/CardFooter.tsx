/** @jsxImportSource @emotion/react */

/* ---------------------------------
CardFooter
--------------------------------- */

import React, { PropsWithChildren, ReactElement } from "react";
import { flex } from "../css-functions";
import { css } from "@emotion/react";
import { $radius } from "../css-vars";

type OwnProps = {};

export default function CardFooter({
  children,
}: PropsWithChildren<OwnProps>): ReactElement | null {
  return (
    <footer
      className="CardFooter"
      css={css`
        border-bottom-right-radius: ${$radius};
        border-bottom-left-radius: ${$radius};
      `}
    >
      {children}
    </footer>
  );
}
