import React from "react";
import ReactDOM from "react-dom";
import ReviewForm from "./ReviewForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReviewForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
