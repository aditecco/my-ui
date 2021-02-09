import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
import { MediaCard } from "./components/MediaCard";
import ContentCard from "./components/ContentCard";
import { FlippableCard } from "./components/FlippableCard";

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
        <div>
          Card
          <Card />
        </div>

        <div>
          Card
          <Card>
            <h1>
              Hello
              <br />
              world
            </h1>
          </Card>
        </div>

        <div>
          MediaCard
          <MediaCard />
        </div>

        <div>
          ContentCard
          <ContentCard />
        </div>

        <div>
          FlippableCard
          <FlippableCard />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
