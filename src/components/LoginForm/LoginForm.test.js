import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import LoginForm from "./LoginForm";

describe(`Login Form component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Login Form by default", () => {
    const wrapper = shallow(<LoginForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Login Form given props", () => {
    const wrapper = shallow(<LoginForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
