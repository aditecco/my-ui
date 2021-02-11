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

      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
