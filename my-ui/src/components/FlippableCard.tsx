import * as React from "react";
import CardFlipControls from "./CardFlipControls";
import Flip from "./Flip";
import InfoSheet from "./InfoSheet";
import Card from "./Card";
import CardMedia from "./CardMedia";
// @ts-ignore
import bg from "../stories/_assets/img/pawel-czerwinski-ruJm3dBXCqw-unsplash.jpg";

/**
 * FlippableCard
 * @constructor
 */
export const FlippableCard: React.FC = () => {
  return (
    <Flip>
      <Flip.Front>
        {({ setFlipped }) => (
          <Card>
            <CardMedia background={bg} title={"Some title"} />
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Front>

      <Flip.Back>
        {({ setFlipped }) => (
          <Card>
            <InfoSheet
              title={"the back"}
              info={{
                lumen: "Nunquam acquirere humani generis.",
                zelus: "Nomens accelerare in dexter vasa!",
                divio: "Azureus abactor interdum anhelares frondator est.",
              }}
            />
            <CardFlipControls back onFlip={() => setFlipped((f) => !f)} />
          </Card>
        )}
      </Flip.Back>
    </Flip>
  );
};
