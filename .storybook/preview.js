/** @jsxImportSource @emotion/react */

import React from "react";
import emotionReset from "emotion-reset";
import { ThemeProvider, Global, css } from "@emotion/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{}}>
      <Global
        styles={css`
          ${emotionReset}

          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
        `}
      />

      <div
        css={css`
          display: grid;
          place-content: center;
          height: calc(100vh - 60px);
          background: whitesmoke;
        `}
      >
        <Story />
      </div>
    </ThemeProvider>
  ),
];
