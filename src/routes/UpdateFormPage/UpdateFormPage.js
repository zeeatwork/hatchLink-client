import React, { Component } from "react";
import { Section } from "../../components/Utils/Utils";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import Context from "../../contexts/ResourceListContext";

export default class UpdateFormPage extends Component {
  static contextType = Context;
  /*componentDidMount() {
    this.context.clearError();
    ResourceApiService.updateResource(this.props.match.params.resourceId)
      .then(this.context.updateResource)
      .catch(this.context.setError);
  }*/

  onRegistrationSuccess = () => {
    const resource =
      this.context.resourceList.find(
        (res) => res.id === Number(this.props.match.params.resourceId)
      ) || {};
    this.props.history.push("/resources/" + resource.id);
  };

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
            onRegistrationSuccess={this.onRegistrationSuccess}
          />
        )}
      </Section>
    );
  }
}
