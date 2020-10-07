import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddResource from "./AddResource";

describe(`Add Resource component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Add Resource by default", () => {
    const wrapper = shallow(<AddResource />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Add Resource given props", () => {
    const wrapper = shallow(<AddResource {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
