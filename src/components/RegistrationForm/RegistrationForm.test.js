import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RegistrationForm from "./RegistrationForm";

describe(`Registration Form component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a .Registration Form by default", () => {
    const wrapper = shallow(<RegistrationForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Registration Form given props", () => {
    const wrapper = shallow(<RegistrationForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
