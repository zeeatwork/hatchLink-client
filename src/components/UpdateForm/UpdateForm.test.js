import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import UpdateForm from "./UpdateForm";

describe(`Update Form component`, () => {
  const props = {
    id: "a",
    name: "test-class-name",
    modified: new Date(2018, 12, 15),
  };

  it("renders a Update Form by default", () => {
    const wrapper = shallow(<UpdateForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the Update Form given props", () => {
    const wrapper = shallow(<UpdateForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
