import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ResourceListItem from "./ResourceListItem";

describe(`ResourceListItem component`, () => {
  const props = {
    note: {
      id: "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      name: "Dogs",
      modified: "2019-01-03T00:00:00.000Z",
      // "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      content: "Corporis accusamus placeat.\n \rUnde.",
    },
  };

  it("renders a .ResourceListItem by default", () => {
    const wrapper = shallow(<ResourceListItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders a Resource with resource prop", () => {
    const note = shallow(<ResourceListItem {...props} />).find("Resource");
    expect(toJson(note)).toMatchSnapshot();
  });

  it(`splits the content by \\n or \\n\\r, with a p foreach`, () => {
    [
      {
        note: { content: "Content with n r.\n \rafter n r." },
      },
      {
        note: { content: "Content with n.\nafter." },
      },
    ].forEach((props) => {
      const content = shallow(<ResourceListItem {...props} />).find(
        "ResourceListItem__content"
      );
      expect(toJson(content)).toMatchSnapshot();
    });
  });
});
