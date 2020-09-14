import React, { Component } from "react";
import ResourceContext from "../../contexts/ResourceContext";
import ResourceApiService from "../../services/resource-api-service";
import { Section } from "../../components/Utils/Utils";
import ResourceDetails from "../../components/ResourceDetails/ResourceDetails";

export default class ResourceDetailsPage extends Component {
  static contextType = ResourceContext;

  componentDidMount() {
    this.context.clearError();
    ResourceApiService.getResource(this.props.match.params.resourceId)
      .then(this.context.setResource)
      .catch(this.context.setError);
  }

  renderResources() {
    const { resource = {} } = this.context;
    return <ResourceDetails key={resource.id} resource={resource} />;
  }

  render() {
    const { error } = this.context;

    return (
      <Section>
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderResources()
        )}
      </Section>
    );
  }
}
