import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LandingPage from "./LandingPage";

describe(`Landing Page component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Landing Page by default", () => {
    const wrapper = shallow(<LandingPage />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Landing Page given props", () => {
    const wrapper = shallow(<LandingPage {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
