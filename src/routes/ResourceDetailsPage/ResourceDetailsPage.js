import React, { Component } from "react";
import ResourceListContext from "../../contexts/ResourceListContext";
import { Section } from "../../components/Utils/Utils";
import ResourceDetails from "../../components/ResourceDetails/ResourceDetails";
import ResourceApiService from "../../services/resource-api-service";

export default class ResourceDetailsPage extends Component {
  static contextType = ResourceListContext;

  handleDelete = (resourceId) => {
    //ev.preventDefault();
    ResourceApiService.deleteResource(resourceId)
      .then(this.context.getAllResources)
      .then(() => this.props.history.push("/resources"));
  };

  componentDidMount = () => {
    this.context.getAllResources();
  };

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
          <ResourceDetails
            key={resource.id}
            resource={resource}
            onDelete={(resourceId) => this.handleDelete(resourceId)}
          />
        )}
      </Section>
    );
  }
}
