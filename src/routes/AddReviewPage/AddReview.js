import React, { Component } from "react";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import { Section } from "../../components/Utils/Utils";
import ResourceListContext from "../../contexts/ResourceListContext";
import ResourceApiService from "../../services/resource-api-service";

export default class addReview extends Component {
  static contextType = ResourceListContext;

  componentDidMount() {
    this.context.clearError();
    ResourceApiService.postReview()
      .then(this.context.setResourceList)
      .catch(this.context.setError);
  }

  render() {
    const { error } = this.context;
    return (
      <Section list className="ReviewListPage">
        {error ? (
          <p className="red">There was an error, try again</p>
        ) : (
          this.renderResouces()
        )}
      </Section>
    );
  }
}
