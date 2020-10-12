import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import ResourceApiService from "../../services/resource-api-service";
import { ExternalLink } from "react-external-link";
import ResourceDetails from "./ResourceDetails";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const resource = {
    id: 1,
    name: "Test",
  };
  ReactDOM.render(
    <Router>
      <ResourceDetails resource={resource} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div); //cleanup
});
