import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResourceContext from "../../contexts/ResourceContext";
import ResourceApiService from "../../services/resource-api-service";
//import { NiceDate, Hyph, Section } from '../../components/Utils/Utils'
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./ResourcePage.css";

export default class ResourcePage extends Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = ResourceContext;

  componentDidMount() {
    const { resourceId } = this.props.match.params;
    this.context.clearError();
    ResourceApiService.getResource(resourceId)
      .then(this.context.setResource)
      .catch(this.context.setError);
    ResourceApiService.getReviewsForResources(resourceId)
      .then(this.context.setReviews)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    //this.context.clearResource();
  }

  renderResource() {
    const { resource, reviews } = this.context;
    return (
      <>
        <h2>
          <a href={resource.url} target="_blank">
            {resource.name}
          </a>
        </h2>
        <p>{resource.date_created}</p>
        <ResourceContent resource={resource} />
        <GetReviewsForResources reviews={reviews} />
        <ReviewForm />
      </>
    );
  }

  render() {
    const { error, resource } = this.context;
    let content;
    if (error) {
      content =
        error.error === `Resource doesn't exist` ? (
          <p className="red">Resource not found</p>
        ) : (
          <p className="red">There was an error</p>
        );
    } else if (!resource.id) {
      content = <div className="loading">Loading</div>;
    } else {
      content = this.renderResource();
    }
    return <section className="ResourcePage">{content}</section>;
  }
}

function ResourceContent({ resource }) {
  return <p className="ResourcePage__content">{resource.content}</p>;
}

function GetReviewsForResources({ reviews = [] }) {
  return (
    <ul className="ResourcePage__review-list">
      {reviews.map((review) => (
        <li key={review.id} className="ResourcePage__review">
          <p className="ResourcePage__review-text">
            <FontAwesomeIcon
              size="lg"
              icon="quote-left"
              className="ResourcePage__review-icon blue"
            />
            {review.comment}
          </p>
          <p className="ReviewPage__review-user">
            {review.user_name} -{" "}
            {new Date(review.date_created).toLocaleString()}
          </p>
        </li>
      ))}
    </ul>
  );
}
