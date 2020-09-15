import React, { Component } from "react";

import ResourceApiService from "../../services/resource-api-service";
import { Section } from "../../components/Utils/Utils";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import Context from "../../contexts/ResourceListContext";

export default class UpdateResourcePage extends Component {
  static contextType = Context;
  /*componentDidMount() {
    this.context.clearError();
    ResourceApiService.updateResource(this.props.match.params.resourceId)
      .then(this.context.updateResource)
      .catch(this.context.setError);
  }*/

  render() {
    const { error } = this.context;
    return (
      <Section list className="AddResourcePage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          <UpdateForm
            resource={
              this.context.resourceList.find(
                (res) => res.id === Number(this.props.match.params.resourceId)
              ) || {}
            }
          />
        )}
      </Section>
    );
  }
}
