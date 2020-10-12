import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AddResource from "./AddResource";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const resource = {
    id: 1,
  };
  ReactDOM.render(
    <Router>
      <AddResource resource={resource} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
