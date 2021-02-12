import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import { MediaCard } from "./components/MediaCard";
import ContentCard from "./components/ContentCard";
import { MediaCardWithFlip } from "./components/MediaCardWithFlip";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <div
        style={{
          padding: "100px 16px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, 400px)",
          gap: "20px",
          placeContent: "center",
        }}
      >
        .
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
