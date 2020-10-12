import React from "react";
import ReactDOM from "react-dom";
import UpdateForm from "./UpdateForm";

it("renders without crashing", () => {
  const resource = {
    name: "Test",
  };
  const div = document.createElement("div");
  ReactDOM.render(<UpdateForm resource={resource} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
