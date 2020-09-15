import React, { Component } from "react";
import ResourceListContext from "../../contexts/ResourceListContext";
import { Section } from "../../components/Utils/Utils";
import ResourceDetails from "../../components/ResourceDetails/ResourceDetails";

export default class ResourceDetailsPage extends Component {
  static contextType = ResourceListContext;

  render() {
    const { error } = this.context;
    const resource =
      this.context.resourceList.find(
        (res) => res.id === Number(this.props.match.params.resourceId)
      ) || {};
    return (
      <Section>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          <ResourceDetails key={resource.id} resource={resource} />
        )}
      </Section>
    );
  }
}
