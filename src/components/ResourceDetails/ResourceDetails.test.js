import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ResourceDetails from "./ResourceDetails";

describe(`Resource component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Resource by default", () => {
    const wrapper = shallow(<ResourceDetails />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Resource given props", () => {
    const wrapper = shallow(<ResourceDetails {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
