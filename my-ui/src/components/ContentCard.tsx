/* ---------------------------------
ContentCard
--------------------------------- */

import React, { PropsWithChildren, ReactElement } from "react";
import CardFooter from "./CardFooter";
import Card from "./Card";
import CardControls from "./CardControls";

type OwnProps = {};

export default function ContentCard({}: PropsWithChildren<
  OwnProps
>): ReactElement | null {
  return (
    <Card>
      <pre>html {}</pre>

      <CardFooter>
        <CardControls>
          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Cobaltum
          </button>

          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Germanus
          </button>

          <button
            key={"btnSecondaryLeft"}
            className="CardControlsButton"
            type="button"
          >
            Nunquam
          </button>
        </CardControls>
      </CardFooter>
    </Card>
  );
}
