import React from "react";
import ReactDOM from "react-dom";
import UpdateForm from "./UpdateForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UpdateForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
