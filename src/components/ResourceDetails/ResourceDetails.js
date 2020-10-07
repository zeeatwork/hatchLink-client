import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { NiceDate, Hyph } from '../Utils/Utils'
import StyleIcon from "../StyleIcon/StyleIcon";
import ResourceApiService from "../../services/resource-api-service";
import { ExternalLink } from "react-external-link";

import "./ResourceDetails.css";

export default class ResourceListItem extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    if (this.props.resource.id) {
      ResourceApiService.getReviewsForResources(
        this.props.resource.id
      ).then((reviews) => this.setState({ reviews }));
    }
  }
  render() {
    const { resource } = this.props;

    return (
      <div className="bg">
        <Link to="/resources">&lt; Back to Resource List</Link>
        <h2>{resource.name}</h2>
        <h4>Subject: {resource.subject}</h4>
        <h4>Price: ${resource.cost}</h4>
        <h4>Format: {resource.format}</h4>
        {/* <h4>Link: {resource.url}</h4> */}
        <ExternalLink href={resource.url} />
        {/* add reveiws here */}
        <div>
          <button>
            <Link to={`/resources/${resource.id}/add-review`}>
              Review Resource
            </Link>
          </button>
          <button>
            <Link to={`/resources/${resource.id}/edit`}>Update Resource</Link>
          </button>
          <button
            onClick={() => ResourceApiService.deleteResource(resource.id)}
          >
            Delete Resource
          </button>
        </div>
        <section className="resource-reviews">
          <ul>
            {this.state.reviews.map((review, i) => (
              <li key={i}>{review.comment}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}
