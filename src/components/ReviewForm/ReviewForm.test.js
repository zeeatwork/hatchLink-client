import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ReviewForm from "./ReviewForm";

describe(`Review Form component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Review Form by default", () => {
    const wrapper = shallow(<ReviewForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Review Form given props", () => {
    const wrapper = shallow(<ReviewForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
