import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResourceListItem from "./ResourceListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <ResourceListItem />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
