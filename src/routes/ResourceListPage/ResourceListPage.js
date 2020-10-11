import React, { Component } from "react";
import ResourceListContext from "../../contexts/ResourceListContext";
import { Section } from "../../components/Utils/Utils";
import ResourceListItem from "../../components/ResourceListItem/ResourceListItem";

export default class ResourceListPage extends Component {
  static contextType = ResourceListContext;

  renderResources() {
    const { resourceList = [] } = this.context;
    return resourceList.map((resource) => (
      <ResourceListItem key={resource.id} resource={resource} />
    ));
  }

  render() {
    const { error } = this.context;
    return (
      <div>
    
        <Section list className="ResourceListPage">
          {error ? (
            <p className="red">There was an error, try again</p>
          ) : (
            this.renderResources()
          )}
        </Section>
      </div>
    );
  }
}
