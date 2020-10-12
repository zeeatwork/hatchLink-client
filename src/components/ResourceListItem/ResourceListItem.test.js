import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ResourceListItem from "./ResourceListItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const resource = {
    id: 1
  }
  ReactDOM.render(
    <Router>
      <ResourceListItem resource={resource}/>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
