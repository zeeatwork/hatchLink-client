import React, { Component } from "react";
import ResourceListContext from "../../contexts/ResourceListContext";
import ResourceApiService from "../../services/resource-api-service";
import { Section } from "../../components/Utils/Utils";
import AddResource from "../../components/AddResource/AddResource";

export default class AddResourcePage extends Component {
  static contextType = ResourceListContext;

  componentDidMount() {
    this.context.clearError();
    ResourceApiService.postResource()
      .then(this.context.addResource)
      .catch(this.context.setError);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="AddResourcePage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          <p>Resource successfully added!</p>
        )}
      </Section>
    );
  }
}
