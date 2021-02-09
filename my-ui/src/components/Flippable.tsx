/* ---------------------------------
Flippable
--------------------------------- */

import * as React from "react";
import { animated, useSpring } from "react-spring";
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";

export type FlippableState = {
  flipped?: boolean;
  toggleFlipped?: React.Dispatch<boolean>;
};

type FlipItemsProps = Record<string, unknown> & FlippableState;

export type FlippableProps = {};

// FlipContext
const FlipContext = React.createContext({ flipped: false, setFlipped(s) {} });

/**
 * Flippable
 * @param children
 * @constructor
 */
const Flippable = ({ children }: { children: ReactNode }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <FlipContext.Provider value={{ flipped, setFlipped, transform, opacity }}>
      <div style={{ position: "relative" }}>{children}</div>
    </FlipContext.Provider>
  );
};

/**
 * Front
 * @param children
 * @constructor
 */
function Front({ children }: PropsWithChildren<{}>): ReactElement | null {
  const { flipped, setFlipped, transform, opacity } = useContext(FlipContext);

  return (
    <animated.div
      className="animatedFrame"
      style={{
        position: "absolute",
        zIndex: !flipped ? 1 : "auto",
        opacity: opacity.interpolate((o) => 1 - o),
        transform,
      }}
    >
      {children({ flipped, setFlipped })}
    </animated.div>
  );
}

/**
 * Back
 * @param children
 * @constructor
 */
function Back({ children }: PropsWithChildren<{}>): ReactElement | null {
  const { transform, opacity } = useContext(FlipContext);
  return (
    <animated.div
      className="animatedFrame"
      style={{
        position: "absolute",
        opacity,
        transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
      }}
    >
      {children}
    </animated.div>
  );
}

// export
Flippable.Front = Front;
Flippable.Back = Back;

export default Flippable;
